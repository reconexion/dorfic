/**
 * Servidor de producción (Railway): sirve el sitio prerenderizado de build/client y hace lo mismo que
 * la función de Cloudflare Pages (functions/_middleware.ts):
 *
 * - Manda a cada visitante a su idioma la primera vez que entra (src/lib/locale-redirect.ts).
 * - Responde las rutas inexistentes con el 404.html de su idioma (/en/... → /en/404.html).
 *
 * Todo build/client se carga en memoria al arrancar, ya comprimido en brotli y gzip, así que cada
 * petición solo elige el búfer correcto. Brotli arranca en calidad 5 (≈0.4 s) y, ya escuchando, se
 * recomprime en calidad 11 en segundo plano (hilos de zlib, sin bloquear las peticiones). Se ejecuta directo con Node (sin compilar): `node server/server.ts`.
 */
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { promisify } from "node:util";
import { brotliCompress, brotliCompressSync, constants, gzipSync } from "node:zlib";
import { DEFAULT_LOCALE, localeFromPath } from "../src/config/paths.ts";
import { REDIRECT_HEADERS, decideLocale } from "../src/lib/locale-redirect.ts";

const ROOT = path.resolve(import.meta.dirname, "../build/client");
const PORT = Number(process.env.PORT) || 8080;

const CONTENT_TYPES: Record<string, string> = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".data": "text/x-script; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".webmanifest": "application/manifest+json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".webp": "image/webp",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
};
const COMPRESSIBLE = new Set([".html", ".js", ".css", ".json", ".data", ".xml", ".txt", ".webmanifest", ".svg"]);

interface StaticFile {
    body: Buffer;
    br?: Buffer;
    gzip?: Buffer;
    type: string;
    etag: string;
    cacheControl: string;
}

/** "/ruta" → archivo. Las páginas están aplanadas por el build: "/acerca" → "/acerca.html". */
const files = new Map<string, StaticFile>();

const cacheControlFor = (urlPath: string) => {
    if (urlPath.startsWith("/assets/")) return "public, max-age=31536000, immutable"; // nombres con hash
    if (urlPath === "/sw.js") return "no-cache";
    return "public, max-age=0, must-revalidate";
};

const brotliOptions = (body: Buffer, quality: number) => ({
    params: { [constants.BROTLI_PARAM_QUALITY]: quality, [constants.BROTLI_PARAM_SIZE_HINT]: body.length },
});

/** Cambia el brotli rápido del arranque por el de máxima compresión, sin bloquear el servidor. */
const upgradeBrotli = async () => {
    const compress = promisify(brotliCompress);
    const pending = [...files.values()].filter((file) => file.br);
    await Promise.all(pending.map(async (file) => (file.br = await compress(file.body, brotliOptions(file.body, 11)))));
    return pending.length;
};

const loadFiles = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            loadFiles(full);
            continue;
        }
        const urlPath = "/" + path.relative(ROOT, full).split(path.sep).join("/");
        const ext = path.extname(entry.name);
        const body = readFileSync(full);
        const file: StaticFile = {
            body,
            type: CONTENT_TYPES[ext] ?? "application/octet-stream",
            etag: `"${createHash("sha1").update(body).digest("base64url").slice(0, 16)}"`,
            cacheControl: cacheControlFor(urlPath),
        };
        if (COMPRESSIBLE.has(ext) && body.length > 1024) {
            file.br = brotliCompressSync(body, brotliOptions(body, 5));
            file.gzip = gzipSync(body, { level: 9 });
        }
        files.set(urlPath, file);
    }
};

const startedAt = performance.now();
loadFiles(ROOT);
if (!files.has("/index.html")) throw new Error(`No se encontró ${ROOT}/index.html. ¿Corriste "npm run build"?`);

/** El 404.html del idioma de la URL (cada idioma tiene el suyo; el español está en la raíz). */
const notFoundFor = (pathname: string) => {
    const locale = localeFromPath(pathname);
    return files.get(locale === DEFAULT_LOCALE ? "/404.html" : `/${locale}/404.html`) ?? files.get("/404.html")!;
};

const server = createServer((req, res) => {
    const url = new URL(req.url ?? "/", "http://localhost");
    let pathname: string;
    try {
        pathname = decodeURIComponent(url.pathname);
    } catch {
        res.writeHead(400).end();
        return;
    }

    if (req.method !== "GET" && req.method !== "HEAD") {
        res.writeHead(405, { Allow: "GET, HEAD" }).end();
        return;
    }

    // URLs canónicas sin diagonal final ni ".html" (igual que en Cloudflare Pages).
    let canonical: string | null = null;
    if (pathname.length > 1 && pathname.endsWith("/")) canonical = pathname.replace(/\/+$/, "") || "/";
    else if (pathname.endsWith(".html") && files.has(pathname)) canonical = pathname.replace(/(\/index)?\.html$/, "") || "/";
    if (canonical !== null && canonical !== pathname) {
        res.writeHead(301, { Location: encodeURI(canonical) + url.search }).end();
        return;
    }

    const decision = decideLocale({
        method: req.method,
        pathname,
        search: url.search,
        headers: { get: (name) => [req.headers[name.toLowerCase()]].flat()[0] ?? null },
        // Railway no informa el país; si hay un proxy delante (p. ej. Cloudflare) sí llega en este encabezado.
        country: [req.headers["cf-ipcountry"]].flat()[0] ?? null,
    });
    if (decision.action === "redirect") {
        res.writeHead(302, { Location: decision.location, "Set-Cookie": decision.setCookie, ...REDIRECT_HEADERS }).end();
        return;
    }

    const found = files.get(pathname === "/" ? "/index.html" : pathname) ?? files.get(`${pathname}.html`);
    const file = found ?? notFoundFor(pathname);
    const status = found ? 200 : 404;

    const headers: Record<string, string | string[]> = {
        "Content-Type": file.type,
        "Cache-Control": status === 200 ? file.cacheControl : "no-cache",
        ETag: file.etag,
        "X-Content-Type-Options": "nosniff",
    };
    if ("setCookie" in decision) headers["Set-Cookie"] = decision.setCookie;

    if (status === 200 && req.headers["if-none-match"] === file.etag) {
        res.writeHead(304, headers).end();
        return;
    }

    let body = file.body;
    if (file.br) {
        headers.Vary = "Accept-Encoding";
        const accepted = req.headers["accept-encoding"] ?? "";
        if (/\bbr\b/.test(accepted)) [body, headers["Content-Encoding"]] = [file.br, "br"];
        else if (/\bgzip\b/.test(accepted) && file.gzip) [body, headers["Content-Encoding"]] = [file.gzip, "gzip"];
    }
    headers["Content-Length"] = String(body.length);

    res.writeHead(status, headers);
    res.end(req.method === "HEAD" ? undefined : body);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Dorfic: ${files.size} archivos en memoria (${Math.round(performance.now() - startedAt)} ms). Escuchando en http://0.0.0.0:${PORT}`);
    const upgradeStart = performance.now();
    upgradeBrotli().then(
        (count) => console.log(`Brotli máximo listo en ${count} archivos (${Math.round(performance.now() - upgradeStart)} ms).`),
        (error) => console.error("No se pudo recomprimir en brotli 11; se sigue usando calidad 5.", error),
    );
});

const shutdown = () => server.close(() => process.exit(0));
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

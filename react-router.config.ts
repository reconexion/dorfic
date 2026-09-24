import type { Config } from "@react-router/dev/config";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { INDEXABLE_PATHS, LOCALES, NOT_FOUND_PATHS, PAGE_SLUGS, TOOL_SLUGS, type Target, localizePath } from "./src/config/paths";

/**
 * Scripts de consentimiento (CMP de Gatekeeper, primero) y de Ezoic, en este orden exacto.
 * Se insertan en el HTML ya prerenderizado, justo después de charset y viewport (que deben ir primero),
 * y no desde React: React 19 reubica los <script async> del <head> y podría cargar Ezoic antes que el CMP.
 */
const HEAD_SCRIPTS = [
    '<script data-cfasync="false" src="https://cmp.gatekeeperconsent.com/min.js"></script>',
    '<script data-cfasync="false" src="https://the.gatekeeperconsent.com/cmp.min.js"></script>',
    '<script async src="//www.ezojs.com/ezoic/sa.min.js"></script>',
    "<script>window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd = ezstandalone.cmd || [];</script>",
    '<script src="//ezoicanalytics.com/analytics.js"></script>',
].join("");
const HEAD_SCRIPTS_AFTER = '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>';

/**
 * Sitio 100% estático: sin SSR en producción, pero cada ruta se PRERENDERIZA
 * a HTML con su contenido, <title>, meta tags y JSON-LD ya incluidos.
 */
export default {
    appDirectory: "src",
    buildDirectory: "build",
    ssr: false,
    prerender: [...INDEXABLE_PATHS, ...NOT_FOUND_PATHS],

    async buildEnd({ viteConfig }) {
        const clientDir = path.join(viteConfig.root, "build", "client");
        const siteUrl = (viteConfig.env.SITE_URL || "https://dorfic.pages.dev").replace(/\/+$/, "");

        // 1) Cloudflare Pages sirve "/ruta/index.html" en "/ruta/" (con diagonal final y redirección).
        //    Convertimos "ruta/index.html" -> "ruta.html" (también dentro de /en, /pt…) para que la URL
        //    canónica sea "/ruta" sin redirecciones. Cada idioma queda con su propio 404.html (/en/404.html…),
        //    que Cloudflare usa para las rutas inexistentes dentro de esa carpeta.
        await flattenHtml(clientDir, true);
        // No usamos modo SPA: las rutas desconocidas las atiende 404.html.
        await rm(path.join(clientDir, "__spa-fallback.html"), { force: true });

        // 1b) Los modulepreload van con prioridad baja: primero CSS, fuente y texto (FCP/LCP), luego JS.
        //     Y los scripts de consentimiento/Ezoic al inicio del <head> de todas las páginas.
        for (const full of await htmlFiles(clientDir)) {
            const html = await readFile(full, "utf8");
            if (!html.includes(HEAD_SCRIPTS_AFTER)) throw new Error(`No se encontró el meta viewport en ${full} para insertar HEAD_SCRIPTS`);
            await writeFile(
                full,
                html
                    .replace(HEAD_SCRIPTS_AFTER, HEAD_SCRIPTS_AFTER + HEAD_SCRIPTS)
                    .replaceAll('<link rel="modulepreload" href=', '<link rel="modulepreload" fetchpriority="low" href='),
            );
        }

        // 2) sitemap.xml y robots.txt a partir de la lista de rutas.
        //    Los hreflang de cada idioma ya van en el <head> de cada página (src/lib/seo.ts), así que el sitemap
        //    no repite <xhtml:link>: con elementos XHTML, Chrome lo pinta como página (texto corrido) en vez de XML.
        const today = new Date().toISOString().slice(0, 10);
        const abs = (p: string) => (p === "/" ? `${siteUrl}/` : `${siteUrl}${p}`);
        const targets: Target[] = [
            { type: "home" },
            ...TOOL_SLUGS.map((id) => ({ type: "tool", id }) as const),
            ...PAGE_SLUGS.map((id) => ({ type: "page", id }) as const),
        ];
        const urls = targets.flatMap((target) => {
            const priority = target.type === "home" ? "1.0" : target.type === "tool" ? "0.9" : "0.5";
            const image = target.type === "tool" ? `\n    <image:image>\n      <image:loc>${siteUrl}/og/${target.id}.png</image:loc>\n    </image:image>` : "";
            return LOCALES.map(
                (locale) =>
                    `  <url>\n    <loc>${abs(localizePath(locale, target))}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>${image}\n  </url>`,
            );
        });
        if (urls.length !== INDEXABLE_PATHS.length) throw new Error("sitemap.xml no coincide con INDEXABLE_PATHS");

        await writeFile(
            path.join(clientDir, "sitemap.xml"),
            `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join("\n")}\n</urlset>\n`,
        );
        await writeFile(path.join(clientDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

        if (!viteConfig.env.SITE_URL) {
            console.warn(`\n⚠️  SITE_URL no está definida. Se usó ${siteUrl} para canónicas y sitemap.\n`);
        }
    },
} satisfies Config;

/** "a/b/index.html" → "a/b.html", de adentro hacia afuera (la raíz conserva su index.html). */
async function flattenHtml(dir: string, isRoot = false) {
    for (const entry of await readdir(dir)) {
        const child = path.join(dir, entry);
        if (!(await stat(child)).isDirectory() || entry === "assets") continue;
        await flattenHtml(child);
        const indexFile = path.join(child, "index.html");
        if (!existsSync(indexFile)) continue;
        await rename(indexFile, path.join(dir, `${entry}.html`));
        if ((await readdir(child)).length === 0) await rm(child, { recursive: true });
    }
    if (isRoot) await mkdir(dir, { recursive: true });
}

async function htmlFiles(dir: string): Promise<string[]> {
    const out: string[] = [];
    for (const entry of await readdir(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory() && entry.name !== "assets") out.push(...(await htmlFiles(full)));
        else if (entry.name.endsWith(".html")) out.push(full);
    }
    return out;
}

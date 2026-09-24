import type { Config } from "@react-router/dev/config";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { INDEXABLE_PATHS, LOCALES, LOCALE_TAGS, NOT_FOUND_PATHS, PAGE_SLUGS, TOOL_SLUGS, type Target, localizePath } from "./src/config/paths";

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
        for (const full of await htmlFiles(clientDir)) {
            const html = await readFile(full, "utf8");
            await writeFile(full, html.replaceAll('<link rel="modulepreload" href=', '<link rel="modulepreload" fetchpriority="low" href='));
        }

        // 2) sitemap.xml (con las versiones en cada idioma) y robots.txt a partir de la lista de rutas.
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
            const alternates = [
                ...LOCALES.map((l) => `\n    <xhtml:link rel="alternate" hreflang="${LOCALE_TAGS[l]}" href="${abs(localizePath(l, target))}"/>`),
                `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(localizePath("es", target))}"/>`,
            ].join("");
            return LOCALES.map(
                (locale) =>
                    `  <url>\n    <loc>${abs(localizePath(locale, target))}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>${alternates}${image}\n  </url>`,
            );
        });
        if (urls.length !== INDEXABLE_PATHS.length) throw new Error("sitemap.xml no coincide con INDEXABLE_PATHS");

        await writeFile(
            path.join(clientDir, "sitemap.xml"),
            `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join("\n")}\n</urlset>\n`,
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

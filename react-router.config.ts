import type { Config } from "@react-router/dev/config";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { INDEXABLE_PATHS, NOT_FOUND_PATH, TOOL_SLUGS } from "./src/config/paths";

/**
 * Sitio 100% estático: sin SSR en producción, pero cada ruta se PRERENDERIZA
 * a HTML con su contenido, <title>, meta tags y JSON-LD ya incluidos.
 */
export default {
    appDirectory: "src",
    buildDirectory: "build",
    ssr: false,
    prerender: [...INDEXABLE_PATHS, NOT_FOUND_PATH],

    async buildEnd({ viteConfig }) {
        const clientDir = path.join(viteConfig.root, "build", "client");
        const siteUrl = (viteConfig.env.SITE_URL || "https://dorfic.pages.dev").replace(/\/+$/, "");

        // 1) Cloudflare Pages sirve "/ruta/index.html" en "/ruta/" (con diagonal final y redirección).
        //    Convertimos "ruta/index.html" -> "ruta.html" para que la URL canónica sea "/ruta" sin redirecciones.
        await flattenHtml(clientDir);
        // No usamos modo SPA: las rutas desconocidas las atiende 404.html.
        await rm(path.join(clientDir, "__spa-fallback.html"), { force: true });

        // 1b) Los modulepreload van con prioridad baja: primero CSS, fuente y texto (FCP/LCP), luego JS.
        for (const file of (await readdir(clientDir)).filter((f) => f.endsWith(".html"))) {
            const full = path.join(clientDir, file);
            const html = await readFile(full, "utf8");
            await writeFile(full, html.replaceAll('<link rel="modulepreload" href=', '<link rel="modulepreload" fetchpriority="low" href='));
        }

        // 2) sitemap.xml y robots.txt a partir de la lista de rutas.
        const today = new Date().toISOString().slice(0, 10);
        const urls = INDEXABLE_PATHS.map((p) => {
            const loc = p === "/" ? `${siteUrl}/` : `${siteUrl}${p}`;
            const priority = p === "/" ? "1.0" : p.startsWith("/comprimir") || p.includes("-a-") ? "0.9" : "0.5";
            const slug = p.slice(1);
            const image = TOOL_SLUGS.includes(slug as (typeof TOOL_SLUGS)[number])
                ? `\n    <image:image>\n      <image:loc>${siteUrl}/og/${slug}.png</image:loc>\n    </image:image>`
                : "";
            return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>${image}\n  </url>`;
        }).join("\n");

        await writeFile(
            path.join(clientDir, "sitemap.xml"),
            `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`,
        );
        await writeFile(path.join(clientDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

        if (!viteConfig.env.SITE_URL) {
            console.warn(`\n⚠️  SITE_URL no está definida. Se usó ${siteUrl} para canónicas y sitemap.\n`);
        }
    },
} satisfies Config;

async function flattenHtml(clientDir: string) {
    for (const entry of await readdir(clientDir)) {
        const dir = path.join(clientDir, entry);
        const indexFile = path.join(dir, "index.html");
        if (!(await stat(dir)).isDirectory() || !existsSync(indexFile)) continue;

        await rename(indexFile, path.join(clientDir, `${entry}.html`));
        const rest = await readdir(dir);
        if (rest.length === 0) await rm(dir, { recursive: true });
    }
    await mkdir(clientDir, { recursive: true });
}

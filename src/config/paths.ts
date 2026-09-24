/**
 * Lista única de rutas públicas del sitio.
 * Se usa para el prerender (react-router.config.ts), el sitemap.xml y la navegación.
 * No importes nada con alias "@/" aquí: este archivo también se lee desde la configuración de build.
 */
export const TOOL_SLUGS = [
    "heic-a-jpg",
    "comprimir-imagen",
    "redimensionar-imagen",
    "png-a-jpg",
    "jpg-a-png",
    "webp-a-jpg",
    "jpg-a-webp",
    "comprimir-imagen-a-20kb",
    "comprimir-imagen-a-50kb",
    "comprimir-imagen-a-100kb",
    "comprimir-imagen-a-200kb",
    "comprimir-jpg",
    "comprimir-png",
    "heic-a-png",
    "webp-a-png",
    "png-a-webp",
    "comprimir-imagen-a-10kb",
    "comprimir-imagen-a-30kb",
    "comprimir-imagen-a-500kb",
] as const;

export type ToolSlug = (typeof TOOL_SLUGS)[number];

export const PAGE_SLUGS = ["acerca", "contacto", "privacidad", "terminos"] as const;

export type PageSlug = (typeof PAGE_SLUGS)[number];

/** Rutas indexables (van al sitemap). */
export const INDEXABLE_PATHS = ["/", ...TOOL_SLUGS.map((s) => `/${s}`), ...PAGE_SLUGS.map((s) => `/${s}`)];

/** Ruta usada para generar 404.html (la atrapa la ruta comodín "*"). */
export const NOT_FOUND_PATH = "/404";

/** Idiomas. Por ahora solo español; "pt" y "en" se agregarán con prefijo (/pt, /en). */
export const LOCALES = ["es"] as const;
export const DEFAULT_LOCALE = "es";

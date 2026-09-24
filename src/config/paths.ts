/**
 * Lista única de rutas públicas del sitio, en todos los idiomas.
 * Se usa para el prerender (react-router.config.ts), el sitemap.xml, la navegación
 * y la redirección por idioma (functions/_middleware.ts).
 * No importes nada con alias "@/" aquí: este archivo también se lee desde la configuración de build.
 */

/* ------------------------------- Idiomas ------------------------------- */

/** El español vive en la raíz (/heic-a-jpg); el resto lleva prefijo (/en/heic-to-jpg). */
export const LOCALES = ["es", "en", "pt", "fr", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

/** Etiqueta BCP 47 de cada idioma (atributo lang, hreflang, og:locale). */
export const LOCALE_TAGS: Record<Locale, string> = { es: "es-MX", en: "en", pt: "pt-BR", fr: "fr", de: "de" };

/** Nombre de cada idioma en su propio idioma (selector). */
export const LOCALE_NAMES: Record<Locale, string> = { es: "Español", en: "English", pt: "Português", fr: "Français", de: "Deutsch" };

/** Cookie donde se guarda el idioma elegido (la lee también la función de Cloudflare). */
export const LOCALE_COOKIE = "dorfic_lang";

export const isLocale = (value: unknown): value is Locale => LOCALES.includes(value as Locale);

/* ----------------------------- Identificadores ----------------------------- */

/** Identificador interno de cada herramienta (coincide con su URL en español). */
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

/** Identificador interno de cada página informativa (coincide con su URL en español). */
export const PAGE_SLUGS = ["acerca", "contacto", "privacidad", "terminos"] as const;

export type PageSlug = (typeof PAGE_SLUGS)[number];

/* ------------------------------ URLs traducidas ------------------------------ */

type Conversion = [from: string, to: string];
const CONVERSIONS: Partial<Record<ToolSlug, Conversion>> = {
    "heic-a-jpg": ["heic", "jpg"],
    "png-a-jpg": ["png", "jpg"],
    "jpg-a-png": ["jpg", "png"],
    "webp-a-jpg": ["webp", "jpg"],
    "jpg-a-webp": ["jpg", "webp"],
    "heic-a-png": ["heic", "png"],
    "webp-a-png": ["webp", "png"],
    "png-a-webp": ["png", "webp"],
};
const PRESET_KB = /^comprimir-imagen-a-(\d+)kb$/;

/** Reglas para armar la URL de cada herramienta en cada idioma (buenas para SEO en ese idioma). */
const TOOL_URL_RULES: Record<Exclude<Locale, "es">, { convert: (c: Conversion) => string; kb: (kb: string) => string; fixed: Record<string, string> }> = {
    en: {
        convert: ([a, b]) => `${a}-to-${b}`,
        kb: (kb) => `compress-image-to-${kb}kb`,
        fixed: {
            "comprimir-imagen": "compress-image",
            "redimensionar-imagen": "resize-image",
            "comprimir-jpg": "compress-jpg",
            "comprimir-png": "compress-png",
        },
    },
    pt: {
        convert: ([a, b]) => `${a}-para-${b}`,
        kb: (kb) => `comprimir-imagem-para-${kb}kb`,
        fixed: {
            "comprimir-imagen": "comprimir-imagem",
            "redimensionar-imagen": "redimensionar-imagem",
            "comprimir-jpg": "comprimir-jpg",
            "comprimir-png": "comprimir-png",
        },
    },
    fr: {
        convert: ([a, b]) => `${a}-en-${b}`,
        kb: (kb) => `compresser-image-${kb}-ko`,
        fixed: {
            "comprimir-imagen": "compresser-image",
            "redimensionar-imagen": "redimensionner-image",
            "comprimir-jpg": "compresser-jpg",
            "comprimir-png": "compresser-png",
        },
    },
    de: {
        convert: ([a, b]) => `${a}-in-${b}`,
        kb: (kb) => `bild-auf-${kb}-kb-komprimieren`,
        fixed: {
            "comprimir-imagen": "bild-komprimieren",
            "redimensionar-imagen": "bildgroesse-aendern",
            "comprimir-jpg": "jpg-komprimieren",
            "comprimir-png": "png-komprimieren",
        },
    },
};

const PAGE_URLS: Record<Locale, Record<PageSlug, string>> = {
    es: { acerca: "acerca", contacto: "contacto", privacidad: "privacidad", terminos: "terminos" },
    en: { acerca: "about", contacto: "contact", privacidad: "privacy", terminos: "terms" },
    pt: { acerca: "sobre", contacto: "contato", privacidad: "privacidade", terminos: "termos" },
    fr: { acerca: "a-propos", contacto: "contact", privacidad: "confidentialite", terminos: "conditions" },
    de: { acerca: "ueber-uns", contacto: "kontakt", privacidad: "datenschutz", terminos: "nutzungsbedingungen" },
};

const toolUrlSlug = (locale: Locale, tool: ToolSlug): string => {
    if (locale === "es") return tool;
    const rules = TOOL_URL_RULES[locale];
    const conversion = CONVERSIONS[tool];
    if (conversion) return rules.convert(conversion);
    const kb = tool.match(PRESET_KB)?.[1];
    if (kb) return rules.kb(kb);
    return rules.fixed[tool];
};

/* ------------------------------ Destinos ------------------------------ */

/** A dónde apunta un enlace, sin importar el idioma. */
export type Target = { type: "home" } | { type: "tool"; id: ToolSlug } | { type: "page"; id: PageSlug } | { type: "notFound" };

const prefix = (locale: Locale) => (locale === DEFAULT_LOCALE ? "" : `/${locale}`);

/** URL pública de un destino en un idioma: ("en", tool heic-a-jpg) → "/en/heic-to-jpg". */
export const localizePath = (locale: Locale, target: Target): string => {
    switch (target.type) {
        case "home":
            return prefix(locale) || "/";
        case "tool":
            return `${prefix(locale)}/${toolUrlSlug(locale, target.id)}`;
        case "page":
            return `${prefix(locale)}/${PAGE_URLS[locale][target.id]}`;
        case "notFound":
            return `${prefix(locale)}/404`;
    }
};

// Índice inverso "/en/heic-to-jpg" → destino.
const PATH_INDEX = new Map<string, { locale: Locale; target: Target }>();
for (const locale of LOCALES) {
    const targets: Target[] = [
        { type: "home" },
        ...TOOL_SLUGS.map((id) => ({ type: "tool", id }) as const),
        ...PAGE_SLUGS.map((id) => ({ type: "page", id }) as const),
    ];
    for (const target of targets) PATH_INDEX.set(localizePath(locale, target), { locale, target });
}

/** Idioma de una URL según su prefijo (/en/..., /pt/...). Sin prefijo = español. */
export const localeFromPath = (pathname: string): Locale => {
    const first = pathname.split("/")[1];
    return isLocale(first) && first !== DEFAULT_LOCALE ? first : DEFAULT_LOCALE;
};

/** Qué es una URL: idioma + destino (o notFound si no existe). */
export const resolvePath = (pathname: string): { locale: Locale; target: Target } => {
    const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    return PATH_INDEX.get(clean) ?? { locale: localeFromPath(clean), target: { type: "notFound" } };
};

/** La misma página en otro idioma (para el selector y los hreflang). */
export const switchLocalePath = (pathname: string, locale: Locale) => {
    const { target } = resolvePath(pathname);
    return localizePath(locale, target.type === "notFound" ? { type: "home" } : target);
};

/* ------------------------------ Build / SEO ------------------------------ */

/** Rutas indexables de un idioma. */
export const indexablePaths = (locale: Locale) => [
    localizePath(locale, { type: "home" }),
    ...TOOL_SLUGS.map((id) => localizePath(locale, { type: "tool", id })),
    ...PAGE_SLUGS.map((id) => localizePath(locale, { type: "page", id })),
];

/** Todas las rutas indexables (van al sitemap y se prerenderizan). */
export const INDEXABLE_PATHS = LOCALES.flatMap(indexablePaths);

/** Rutas usadas para generar 404.html de cada idioma (las atrapa la ruta comodín "*"). */
export const NOT_FOUND_PATHS = LOCALES.map((locale) => localizePath(locale, { type: "notFound" }));

/* --------------------------- Idioma preferido --------------------------- */

/** País (ISO 3166) → idioma, para cuando el navegador no dice uno que tengamos. */
const COUNTRY_LOCALE: Record<string, Locale> = {
    // Portugués
    BR: "pt",
    PT: "pt",
    AO: "pt",
    MZ: "pt",
    CV: "pt",
    GW: "pt",
    ST: "pt",
    TL: "pt",
    // Francés
    FR: "fr",
    BE: "fr",
    LU: "fr",
    MC: "fr",
    SN: "fr",
    CI: "fr",
    CM: "fr",
    ML: "fr",
    BF: "fr",
    NE: "fr",
    TG: "fr",
    BJ: "fr",
    GA: "fr",
    CG: "fr",
    CD: "fr",
    MG: "fr",
    HT: "fr",
    TN: "fr",
    MA: "fr",
    DZ: "fr",
    // Alemán
    DE: "de",
    AT: "de",
    LI: "de",
    CH: "de",
    // Español
    MX: "es",
    ES: "es",
    AR: "es",
    CO: "es",
    CL: "es",
    PE: "es",
    VE: "es",
    EC: "es",
    GT: "es",
    CU: "es",
    BO: "es",
    DO: "es",
    HN: "es",
    PY: "es",
    SV: "es",
    NI: "es",
    CR: "es",
    PA: "es",
    UY: "es",
    PR: "es",
    GQ: "es",
};

/**
 * Elige el idioma: primero el del navegador (lo que la persona lee), luego el país;
 * si ninguno coincide, inglés para el resto del mundo.
 */
export const detectLocale = ({ languages, country }: { languages: readonly string[]; country?: string | null }): Locale => {
    for (const tag of languages) {
        const base = tag.trim().toLowerCase().split(/[-_]/)[0];
        if (isLocale(base)) return base;
    }
    if (country) return COUNTRY_LOCALE[country.toUpperCase()] ?? "en";
    return languages.length ? "en" : DEFAULT_LOCALE;
};

/** Convierte el encabezado Accept-Language en una lista ordenada por preferencia. */
export const parseAcceptLanguage = (header: string | null) =>
    (header ?? "")
        .split(",")
        .map((part) => {
            const [tag, ...params] = part.trim().split(";");
            const q = params.find((p) => p.trim().startsWith("q="));
            return { tag: tag.trim(), q: q ? Number(q.trim().slice(2)) || 0 : 1 };
        })
        .filter((l) => l.tag && l.tag !== "*" && l.q > 0)
        .sort((a, b) => b.q - a.q)
        .map((l) => l.tag);

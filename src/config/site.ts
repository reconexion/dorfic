/** Configuración general de Dorfic. El dominio viene de la variable de entorno SITE_URL. */
export const SITE_URL = (import.meta.env.SITE_URL || "https://dorfic.pages.dev").replace(/\/+$/, "");

export const SITE_NAME = "Dorfic";

/** Usuario de Telegram para contacto (página /contacto). */
export const CONTACT_TELEGRAM = "tostilocos";
export const CONTACT_TELEGRAM_URL = `https://t.me/${CONTACT_TELEGRAM}`;

/** Token de Cloudflare Web Analytics (sin cookies). Si está vacío, no se carga el script. */
export const CF_BEACON_TOKEN = import.meta.env.VITE_CF_BEACON_TOKEN || "";

/** Verificación de Google Search Console y Bing Webmaster Tools (meta tag). */
export const GOOGLE_SITE_VERIFICATION = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || "";
export const BING_SITE_VERIFICATION = import.meta.env.VITE_BING_SITE_VERIFICATION || "";

/**
 * Placeholders de Ezoic (Ezoic → Monetization → Ad Placeholders). Cada número debe existir en el panel
 * de Ezoic con el mismo ID; si allá tienen otro número, cámbialo aquí. Un placeholder que Ezoic no llena
 * queda vacío y no ocupa espacio. La barra fija inferior y los laterales los pone Ezoic desde su panel
 * (Anchor Ads / Side Rails), no el código.
 */
export const EZOIC_PLACEHOLDERS = {
    /** Herramienta: justo debajo, donde el usuario ve sus resultados. */
    toolBelow: 101,
    /** Herramienta: panel antes de la primera descarga (el momento de más atención). */
    toolDownload: 102,
    /** Herramienta: dentro del texto, después del primer tercio. */
    toolContentTop: 103,
    /** Herramienta: dentro del texto, después del segundo tercio. */
    toolContentMid: 104,
    /** Herramienta: al terminar el texto, antes de las preguntas frecuentes. */
    toolContentEnd: 105,
    /** Herramienta: lateral fijo (solo escritorio). */
    toolSidebar: 106,
    /** Herramienta: final de la página, antes de las herramientas relacionadas. */
    toolBottom: 107,
    /** Inicio: debajo del buscador y la zona para soltar imágenes. */
    homeBelowHero: 108,
    /** Inicio: entre el directorio de herramientas y el texto. */
    homeMid: 109,
    /** Inicio: final de la página. */
    homeBottom: 110,
    /** Páginas informativas: después de la introducción. */
    pageTop: 111,
    /** Páginas informativas: al final del texto. */
    pageBottom: 112,
} as const;
export type AdPlacementName = keyof typeof EZOIC_PLACEHOLDERS;

/** Segundos que se muestra el anuncio antes de poder continuar con la descarga (solo la primera de cada visita). */
export const DOWNLOAD_AD_SECONDS = 3;

export const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Color de marca (#FF6A00) para theme-color y manifest. */
export const THEME_COLOR = "#ff6a00";

/** Límite por archivo para evitar que el navegador se quede sin memoria en celulares. */
export const MAX_FILE_SIZE_MB = 50;

/** Máximo de archivos por lote. */
export const MAX_FILES = 50;

export const absoluteUrl = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

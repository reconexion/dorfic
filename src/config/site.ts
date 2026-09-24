/** Configuración general de Dorfic. El dominio viene de la variable de entorno SITE_URL. */
export const SITE_URL = (import.meta.env.SITE_URL || "https://dorfic.pages.dev").replace(/\/+$/, "");

export const SITE_NAME = "Dorfic";

/** Correo de contacto público (cámbialo en .env con VITE_CONTACT_EMAIL). */
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "hola@dorfic.com";

/** Token de Cloudflare Web Analytics (sin cookies). Si está vacío, no se carga el script. */
export const CF_BEACON_TOKEN = import.meta.env.VITE_CF_BEACON_TOKEN || "";

/** Verificación de Google Search Console y Bing Webmaster Tools (meta tag). */
export const GOOGLE_SITE_VERIFICATION = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || "";
export const BING_SITE_VERIFICATION = import.meta.env.VITE_BING_SITE_VERIFICATION || "";

/**
 * Google AdSense. Si ADSENSE_CLIENT está vacío no se carga el script y los anuncios
 * se ven como un espacio reservado (útil en desarrollo o mientras aprueban el sitio).
 */
export const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT || "";
/** Bloque de anuncio que se muestra antes de entregar la descarga. */
export const ADSENSE_SLOT_DOWNLOAD = import.meta.env.VITE_ADSENSE_SLOT_DOWNLOAD || "";
/** Segundos que se muestra el anuncio antes de poder continuar con la descarga. */
export const DOWNLOAD_AD_SECONDS = 5;

export const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Color de marca (#FF6A00) para theme-color y manifest. */
export const THEME_COLOR = "#ff6a00";

/** Límite por archivo para evitar que el navegador se quede sin memoria en celulares. */
export const MAX_FILE_SIZE_MB = 50;

/** Máximo de archivos por lote. */
export const MAX_FILES = 50;

export const absoluteUrl = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

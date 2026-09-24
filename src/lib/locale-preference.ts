import { DEFAULT_LOCALE, LOCALE_COOKIE, type Locale, detectLocale, isLocale, localeFromPath, switchLocalePath } from "@/config/paths";

const ONE_YEAR = 60 * 60 * 24 * 365;

export const readSavedLocale = (): Locale | null => {
    const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`));
    return match && isLocale(match[1]) ? match[1] : null;
};

/** Guarda el idioma elegido (cookie, para que también la lea la función de Cloudflare). */
export const saveLocale = (locale: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
};

/** Zona horaria → país aproximado, sin pedir permiso de ubicación. Solo las zonas que cambian el resultado. */
const TIMEZONE_COUNTRY: Record<string, string> = {
    "America/Sao_Paulo": "BR",
    "America/Bahia": "BR",
    "America/Fortaleza": "BR",
    "America/Recife": "BR",
    "America/Manaus": "BR",
    "America/Belem": "BR",
    "Europe/Lisbon": "PT",
    "Europe/Paris": "FR",
    "Europe/Brussels": "BE",
    "Europe/Berlin": "DE",
    "Europe/Vienna": "AT",
    "Europe/Zurich": "CH",
    "Europe/Madrid": "ES",
    "America/Mexico_City": "MX",
    "America/Bogota": "CO",
    "America/Argentina/Buenos_Aires": "AR",
    "America/Lima": "PE",
    "America/Santiago": "CL",
};

const guessCountry = () => {
    try {
        return TIMEZONE_COUNTRY[Intl.DateTimeFormat().resolvedOptions().timeZone] ?? null;
    } catch {
        return null;
    }
};

/**
 * A dónde mandar a quien entra por una URL en español (sin prefijo) y prefiere otro idioma.
 * Solo en la primera visita: la elección queda guardada y las URLs con prefijo (/en, /pt…) se respetan.
 */
export const preferredLocaleRedirect = (pathname: string): string | null => {
    if (localeFromPath(pathname) !== DEFAULT_LOCALE || /bot|crawl|spider|lighthouse/i.test(navigator.userAgent)) return null;
    let preferred = readSavedLocale();
    if (!preferred) {
        preferred = detectLocale({ languages: navigator.languages?.length ? navigator.languages : [navigator.language], country: guessCountry() });
        saveLocale(preferred);
    }
    if (preferred === DEFAULT_LOCALE) return null;
    return switchLocalePath(pathname, preferred);
};

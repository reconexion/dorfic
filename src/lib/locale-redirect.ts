/**
 * Decide si un visitante debe ir a otra versión de idioma la primera vez que entra.
 * La comparten la función de Cloudflare Pages (functions/_middleware.ts) y el servidor Node (server/server.ts).
 *
 * - Solo actúa en las URLs en español (sin prefijo). /en, /pt, /fr y /de se respetan siempre.
 * - Idioma preferido = el que eligió antes (cookie) → el de su navegador (Accept-Language) → su país.
 * - Nunca redirige a buscadores: Google debe poder rastrear todas las versiones (hreflang).
 *
 * Importa con extensión .ts y rutas relativas para que Node pueda ejecutarlo sin compilar.
 */
import { isbot } from "isbot";
import { DEFAULT_LOCALE, LOCALE_COOKIE, type Locale, detectLocale, isLocale, localeFromPath, parseAcceptLanguage, switchLocalePath } from "../config/paths.ts";

const ONE_YEAR = 60 * 60 * 24 * 365;

export interface LocaleRequest {
    method: string;
    pathname: string;
    search: string;
    headers: { get: (name: string) => string | null };
    /** País del visitante (código ISO de 2 letras), si la plataforma lo conoce. */
    country?: string | null;
}

export type LocaleDecision =
    /** No hacer nada: servir la página tal cual. */
    | { action: "pass" }
    /** Servir la página y guardar la cookie con el idioma detectado. */
    | { action: "pass"; setCookie: string }
    /** Mandar al visitante a su idioma. */
    | { action: "redirect"; location: string; setCookie: string };

const readCookie = (cookieHeader: string | null): Locale | null => {
    const match = (cookieHeader ?? "").match(new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}=([^;]*)`));
    return match && isLocale(match[1]) ? match[1] : null;
};

const isPageRequest = (request: LocaleRequest) =>
    request.method === "GET" && !request.pathname.includes(".") && (request.headers.get("accept") ?? "").includes("text/html");

export const decideLocale = (request: LocaleRequest): LocaleDecision => {
    if (!isPageRequest(request) || localeFromPath(request.pathname) !== DEFAULT_LOCALE || isbot(request.headers.get("user-agent") ?? "")) {
        return { action: "pass" };
    }

    const saved = readCookie(request.headers.get("cookie"));
    const preferred =
        saved ??
        detectLocale({
            languages: parseAcceptLanguage(request.headers.get("accept-language")),
            country: request.country,
        });
    const setCookie = `${LOCALE_COOKIE}=${preferred}; Path=/; Max-Age=${ONE_YEAR}; SameSite=Lax; Secure`;

    if (preferred === DEFAULT_LOCALE) {
        // Español: se queda aquí y guardamos la decisión para no volver a calcularla.
        return saved ? { action: "pass" } : { action: "pass", setCookie };
    }
    return { action: "redirect", location: switchLocalePath(request.pathname, preferred) + request.search, setCookie };
};

/** Encabezados de la respuesta de redirección (no debe guardarse en caché compartida). */
export const REDIRECT_HEADERS = { "Cache-Control": "private, no-store", Vary: "Accept-Language, Cookie" } as const;

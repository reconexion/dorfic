/**
 * Cloudflare Pages Function: manda a cada visitante a su idioma la primera vez que entra.
 *
 * - Solo actúa en las URLs en español (sin prefijo). /en, /pt, /fr y /de se respetan siempre.
 * - Idioma preferido = el que eligió antes (cookie) → el de su navegador (Accept-Language) → su país (IP).
 * - Nunca redirige a buscadores: Google debe poder rastrear todas las versiones (hreflang).
 */
import { isbot } from "isbot";
import { DEFAULT_LOCALE, LOCALE_COOKIE, type Locale, detectLocale, isLocale, localeFromPath, parseAcceptLanguage, switchLocalePath } from "../src/config/paths";

interface PagesContext {
    request: Request & { cf?: { country?: string } };
    next: () => Promise<Response>;
}

const ONE_YEAR = 60 * 60 * 24 * 365;

const readCookie = (request: Request): Locale | null => {
    const match = (request.headers.get("cookie") ?? "").match(new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}=([^;]*)`));
    return match && isLocale(match[1]) ? match[1] : null;
};

const isPageRequest = (request: Request, pathname: string) =>
    request.method === "GET" && !pathname.includes(".") && (request.headers.get("accept") ?? "").includes("text/html");

export const onRequest = async ({ request, next }: PagesContext) => {
    const url = new URL(request.url);
    if (!isPageRequest(request, url.pathname) || localeFromPath(url.pathname) !== DEFAULT_LOCALE || isbot(request.headers.get("user-agent") ?? "")) {
        return next();
    }

    const saved = readCookie(request);
    const preferred =
        saved ??
        detectLocale({
            languages: parseAcceptLanguage(request.headers.get("accept-language")),
            country: request.cf?.country ?? request.headers.get("cf-ipcountry"),
        });
    const cookie = `${LOCALE_COOKIE}=${preferred}; Path=/; Max-Age=${ONE_YEAR}; SameSite=Lax; Secure`;

    if (preferred === DEFAULT_LOCALE) {
        if (saved) return next();
        // Español: se queda aquí y guardamos la decisión para no volver a calcularla.
        const response = await next();
        const withCookie = new Response(response.body, response);
        withCookie.headers.append("Set-Cookie", cookie);
        return withCookie;
    }

    return new Response(null, {
        status: 302,
        headers: {
            Location: switchLocalePath(url.pathname, preferred) + url.search,
            "Set-Cookie": cookie,
            "Cache-Control": "private, no-store",
            Vary: "Accept-Language, Cookie",
        },
    });
};

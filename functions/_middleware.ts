/**
 * Cloudflare Pages Function: manda a cada visitante a su idioma la primera vez que entra.
 * La lógica vive en src/lib/locale-redirect.ts (la misma que usa el servidor Node en Railway).
 */
import { REDIRECT_HEADERS, decideLocale } from "../src/lib/locale-redirect.ts";

interface PagesContext {
    request: Request & { cf?: { country?: string } };
    next: () => Promise<Response>;
}

export const onRequest = async ({ request, next }: PagesContext) => {
    const url = new URL(request.url);
    const decision = decideLocale({
        method: request.method,
        pathname: url.pathname,
        search: url.search,
        headers: request.headers,
        country: request.cf?.country ?? request.headers.get("cf-ipcountry"),
    });

    if (decision.action === "redirect") {
        return new Response(null, {
            status: 302,
            headers: { Location: decision.location, "Set-Cookie": decision.setCookie, ...REDIRECT_HEADERS },
        });
    }
    if (!("setCookie" in decision)) return next();

    const response = await next();
    const withCookie = new Response(response.body, response);
    withCookie.headers.append("Set-Cookie", decision.setCookie);
    return withCookie;
};

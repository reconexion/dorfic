import { type ReactNode, useEffect } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from "react-router";
import type { LinksFunction } from "react-router";
import interLatin from "@/assets/fonts/inter-es-wght.woff2?url";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { openHydrationGate } from "@/components/motion/hydration-gate";
import { MotionProvider } from "@/components/motion/motion-provider";
import { PageTransition } from "@/components/motion/page-transition";
import { DEFAULT_LOCALE } from "@/config/paths";
import { ADSENSE_CLIENT, BING_SITE_VERIFICATION, CF_BEACON_TOKEN, GOOGLE_SITE_VERIFICATION, THEME_COLOR } from "@/config/site";
import { LocaleContext, getUi } from "@/i18n";
import { RouteProvider } from "@/providers/router-provider";
import stylesheet from "@/styles/globals.css?url";

export const links: LinksFunction = () => [
    // CSS primero: es el único recurso que bloquea el renderizado.
    { rel: "stylesheet", href: stylesheet },
    { rel: "preload", href: interLatin, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
    { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/manifest.webmanifest" },
];

export function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="es-MX" className="bg-page" style={{ colorScheme: "only light" }}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                {/* Sin modo oscuro: fondo blanco siempre, incluso si el sistema está en oscuro. */}
                <meta name="color-scheme" content="only light" />
                <meta name="theme-color" content={THEME_COLOR} />
                <meta name="format-detection" content="telephone=no" />
                <meta name="application-name" content="Dorfic" />
                <meta name="apple-mobile-web-app-title" content="Dorfic" />
                {GOOGLE_SITE_VERIFICATION && <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />}
                {BING_SITE_VERIFICATION && <meta name="msvalidate.01" content={BING_SITE_VERIFICATION} />}
                <Meta />
                <Links />
                {/* Google AdSense: se activa con VITE_ADSENSE_CLIENT (recuerda publicar public/ads.txt). */}
                {ADSENSE_CLIENT && (
                    <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`} crossOrigin="anonymous" />
                )}
            </head>
            <body className="min-h-dvh bg-page text-primary antialiased">
                {children}
                <ScrollRestoration />
                <Scripts />
                {/* Cloudflare Web Analytics (sin cookies). Se activa con VITE_CF_BEACON_TOKEN. */}
                {CF_BEACON_TOKEN && (
                    <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon={JSON.stringify({ token: CF_BEACON_TOKEN })} />
                )}
            </body>
        </html>
    );
}

const useServiceWorker = () => {
    useEffect(() => {
        if (!import.meta.env.PROD || !("serviceWorker" in navigator)) return;
        const register = () => navigator.serviceWorker.register("/sw.js").catch(() => {});
        if (document.readyState === "complete") register();
        else window.addEventListener("load", register, { once: true });
    }, []);
};

const Shell = ({ children }: { children: ReactNode }) => (
    <LocaleContext.Provider value={DEFAULT_LOCALE}>
        <MotionProvider>
            <RouteProvider>
                {/* grid-wrapper: fondo #f8fafc + cuadrícula que se desvanece desde la parte superior */}
                <div className="relative isolate flex min-h-dvh flex-col bg-page">
                    <div aria-hidden className="grid-background -z-10 h-[1100px]" style={{ bottom: "auto" }} />
                    <SiteHeader />
                    <main id="contenido" className="flex-1">
                        {children}
                    </main>
                    <SiteFooter />
                </div>
            </RouteProvider>
        </MotionProvider>
    </LocaleContext.Provider>
);

export default function App() {
    useServiceWorker();
    useEffect(() => {
        // Tras la primera hidratación, las navegaciones ya no difieren nada.
        const t = setTimeout(openHydrationGate, 0);
        return () => clearTimeout(t);
    }, []);
    return (
        <Shell>
            <PageTransition>
                <Outlet />
            </PageTransition>
        </Shell>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();
    const ui = getUi();
    const is404 = isRouteErrorResponse(error) && error.status === 404;
    return (
        <Shell>
            <section className="mx-auto max-w-2xl px-4 py-24 text-center">
                <h1 className="text-display-xs font-semibold text-primary">{is404 ? ui.notFound.heading : ui.errors.unknown}</h1>
                <p className="mt-4 text-lg text-tertiary">{ui.notFound.body}</p>
                <a href="/" className="mt-8 inline-flex rounded-lg bg-brand-solid px-4 py-2.5 font-semibold text-white hover:bg-brand-solid_hover">
                    {ui.notFound.cta}
                </a>
            </section>
        </Shell>
    );
}

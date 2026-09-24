import { Suspense, lazy } from "react";
import { Lock01 } from "@untitledui/icons";
import { Link } from "react-router";
import { AdSlot, AnchorAd } from "@/components/ads/ad-slot";
import { FoxMascot } from "@/components/brand/fox-mascot";
import { HeroBackground } from "@/components/content/hero-background";
import { ToolDirectory } from "@/components/content/tool-directory";
import { SearchBox } from "@/components/search/search-box";
import { TOOL_SLUGS, localizePath, resolvePath } from "@/config/paths";
import { getToolCards, useLocalePath, useSearchDictionary, useUi } from "@/i18n";
import { loadHomeContent } from "@/i18n/content.server";
import type { HomeContent } from "@/i18n/types";
import { buildMeta, itemListLd } from "@/lib/seo";

// La zona de carga inteligente (y su código) se hidrata aparte; el HTML ya viene prerenderizado.
const QuickStart = lazy(() => import("@/components/search/quick-start").then((mod) => ({ default: mod.QuickStart })));

interface LoaderData {
    home: HomeContent;
}

export async function loader({ request }: { request: Request }): Promise<LoaderData> {
    return { home: await loadHomeContent(resolvePath(new URL(request.url).pathname).locale) };
}

export const meta = ({ loaderData, location }: { loaderData?: LoaderData; location: { pathname: string } }) => {
    if (!loaderData) return [];
    const { locale } = resolvePath(location.pathname);
    const cards = getToolCards(locale);
    return buildMeta({
        title: loaderData.home.title,
        description: loaderData.home.metaDescription,
        target: { type: "home" },
        locale,
        jsonLd: [itemListLd(TOOL_SLUGS.map((id) => ({ name: cards[id].name, path: localizePath(locale, { type: "tool", id }) })))],
    });
};

const rise = (ms: number) => ({ ["--rise-delay" as string]: `${ms}ms` });

export default function Home({ loaderData: { home } }: { loaderData: LoaderData }) {
    const ui = useUi();
    const { intents } = useSearchDictionary();
    const to = useLocalePath();
    return (
        <>
            <section className="relative isolate overflow-hidden">
                <HeroBackground />
                <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-5 pb-10 text-center md:px-8 md:pt-8 md:pb-14">
                    <FoxMascot size={84} className="mb-1" />

                    <h1 className="hero-slide text-display-sm font-bold tracking-tight text-primary md:text-display-2xl">
                        {home.h1} <span className="text-gradient-animated">{home.h1Highlight}</span>
                    </h1>
                    <p className="hero-slide mx-auto mt-3 max-w-xl text-lg text-tertiary md:text-xl" style={rise(80)}>
                        {home.subtitle}
                    </p>

                    <div className="hero-rise relative z-20 mt-6 w-full" style={rise(140)}>
                        <SearchBox variant="hero" />
                    </div>

                    <nav aria-label={home.intentsLabel} className="hero-rise -mx-4 mt-4 w-[calc(100%+2rem)] sm:mx-0 sm:w-full" style={rise(200)}>
                        <ul className="scrollbar-hide flex snap-x gap-2 overflow-x-auto px-4 pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
                            {intents.map((intent) => (
                                <li key={intent.label} className="shrink-0 snap-start">
                                    <Link
                                        to={to({ type: "tool", id: intent.slug })}
                                        className="inline-flex items-center rounded-full bg-brand-50 px-3.5 py-2 text-sm font-semibold whitespace-nowrap text-brand-secondary shadow-xs ring-1 ring-brand-200 transition duration-200 hover:bg-brand-solid hover:text-white hover:shadow-[0_8px_18px_-8px_rgb(255_106_0/0.8)] hover:ring-transparent motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-[0.97]"
                                    >
                                        {intent.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="hero-rise mt-6 w-full" style={rise(260)}>
                        <Suspense fallback={<div className="h-[300px]" />}>
                            <QuickStart />
                        </Suspense>
                    </div>

                    <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                        <Lock01 aria-hidden className="size-4 text-fg-brand-primary" />
                        {ui.privacy.badge}
                    </p>
                </div>
            </section>

            <div className="mx-auto max-w-3xl px-4 md:px-8">
                <AdSlot variant="below-tool" />
            </div>

            <section aria-labelledby="tools-title" className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
                <h2 id="tools-title" className="mb-8 text-center text-display-xs font-bold tracking-tight text-primary md:text-display-sm">
                    {home.toolsHeading}
                </h2>
                <ToolDirectory labels={home.groups} />
            </section>

            <div className="mx-auto max-w-3xl px-4 md:px-8">
                <AdSlot variant="in-content" />
            </div>

            <section aria-labelledby="about-title" className="mx-auto max-w-3xl px-4 py-12 text-center md:px-8 md:py-16">
                <h2 id="about-title" className="text-display-xs font-bold text-primary md:text-display-sm">
                    {home.aboutHeading}
                </h2>
                {home.about.map((p) => (
                    <p key={p.slice(0, 30)} className="mt-4 text-lg text-tertiary">
                        {p}
                    </p>
                ))}
                <ul className="mt-8 grid gap-3 text-left sm:grid-cols-3">
                    {home.features.map((f) => (
                        <li key={f.title} className="rounded-2xl bg-primary p-4 ring-1 ring-brand-100">
                            <p className="font-bold text-primary">{f.title}</p>
                            <p className="mt-1 text-sm text-tertiary">{f.body}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* El inicio no tiene lateral: la barra inferior es el anuncio siempre visible, también en escritorio. */}
            <AnchorAd />
        </>
    );
}

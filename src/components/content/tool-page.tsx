import { Suspense, lazy } from "react";
import { ChevronRight } from "@untitledui/icons";
import { Link } from "react-router";
import { AdSlot } from "@/components/ads/ad-slot";
import { ContentSections } from "@/components/content/content-sections";
import { FaqList } from "@/components/content/faq";
import { HeroBackground } from "@/components/content/hero-background";
import { SiblingLinks } from "@/components/content/sibling-links";
import { ToolGrid } from "@/components/content/tool-grid";
import { useToolCards, useUi } from "@/i18n";
import type { ToolContent } from "@/i18n/types";
import { breadcrumbLd, buildMeta, faqLd, howToLd, softwareLd, toolTitle } from "@/lib/seo";

/**
 * La herramienta interactiva (React Aria, workers, etc.) se carga en un chunk aparte.
 * El HTML prerenderizado ya la incluye completa; React la hidrata en cuanto llega su JS,
 * así el contenido y el H1 se pintan sin esperar ese código.
 */
const ToolRunner = lazy(() => import("@/components/tool/tools").then((mod) => ({ default: mod.ToolRunner })));

/** Espacio reservado con la altura de la zona de carga (solo se ve en navegación del lado del cliente). */
const ToolFallback = () => <div className="h-[290px] rounded-2xl border-2 border-dashed border-brand-300 md:h-[520px]" aria-hidden />;

/** Meta tags + JSON-LD de una página de herramienta (se prerenderizan en el HTML). */
export const toolMeta = (content: ToolContent, cardName: string) =>
    buildMeta({
        title: toolTitle(content.title),
        description: content.metaDescription,
        path: `/${content.slug}`,
        image: `/og/${content.slug}.png`,
        jsonLd: [
            softwareLd({ name: cardName, description: content.metaDescription, path: `/${content.slug}` }),
            faqLd(content.faqs),
            howToLd({ name: content.h1, sections: content.sections, path: `/${content.slug}` }),
            breadcrumbLd([
                { name: "Inicio", path: "/" },
                { name: cardName, path: `/${content.slug}` },
            ]),
        ].filter(Boolean) as object[],
    });

const rise = (ms: number) => ({ ["--rise-delay" as string]: `${ms}ms` });

/**
 * Estructura común de las páginas de herramienta (todo lo importante centrado):
 * H1 → herramienta (visible sin scroll) → anuncio → contenido útil + anuncio lateral → FAQ → relacionadas.
 */
export const ToolPage = ({ content }: { content: ToolContent }) => {
    const ui = useUi();
    const cards = useToolCards();
    // Contenido en 3 partes con un anuncio entre cada una (sin cansar: siempre separados por texto útil).
    const third = Math.ceil(content.sections.length / 3);
    const parts = [content.sections.slice(0, third), content.sections.slice(third, third * 2), content.sections.slice(third * 2)];

    return (
        <>
            <section className="relative isolate overflow-hidden">
                <HeroBackground compact />
                <div className="mx-auto max-w-3xl px-4 pt-4 pb-10 md:px-8 md:pt-10 md:pb-12">
                    <header className="pb-4 text-center md:pb-7">
                        <nav aria-label="Migas de pan" className="mb-2 hidden justify-center sm:flex">
                            <ol className="flex items-center gap-1.5 text-sm text-tertiary">
                                <li>
                                    <Link to="/" className="hover:text-secondary">
                                        {ui.toolPage.breadcrumbHome}
                                    </Link>
                                </li>
                                <li aria-hidden>
                                    <ChevronRight className="size-4 text-fg-quaternary" />
                                </li>
                                <li aria-current="page" className="font-medium text-brand-secondary">
                                    {cards[content.slug].name}
                                </li>
                            </ol>
                        </nav>
                        <h1 className="hero-slide text-display-xs font-bold tracking-tight text-primary md:text-display-lg">{content.h1}</h1>
                        <p className="hero-slide mx-auto mt-2 max-w-2xl text-md text-tertiary md:mt-3 md:text-lg" style={rise(80)}>
                            {content.lead}
                        </p>
                    </header>

                    <section aria-label={ui.toolPage.toolRegion} className="hero-slide" style={rise(120)}>
                        <Suspense fallback={<ToolFallback />}>
                            <ToolRunner slug={content.slug} />
                        </Suspense>
                    </section>

                    <SiblingLinks current={content.slug} label={ui.toolPage.siblings} />

                    <AdSlot variant="below-tool" className="mt-10" />
                </div>
            </section>

            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
                    <article className="min-w-0 max-w-3xl">
                        <ContentSections sections={parts[0]} />
                        <AdSlot variant="in-content" className="my-10" />
                        <ContentSections sections={parts[1]} />
                        <AdSlot variant="in-content" className="my-10" />
                        <ContentSections sections={parts[2]} />
                        <FaqList faqs={content.faqs} title={ui.toolPage.faq} />
                    </article>
                    <div className="hidden lg:block">
                        <div className="sticky top-24">
                            <AdSlot variant="sidebar" />
                        </div>
                    </div>
                </div>

                <AdSlot variant="below-tool" className="mx-auto mt-12 max-w-3xl" />

                <section aria-labelledby="related-title" className="mt-12">
                    <h2 id="related-title" className="text-center text-display-xs font-bold text-primary md:text-display-sm">
                        {ui.toolPage.related}
                    </h2>
                    <ToolGrid slugs={content.related} className="mt-8" />
                </section>
            </div>
        </>
    );
};

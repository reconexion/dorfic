import type { ReactNode } from "react";
import { AnchorAd } from "@/components/ads/ad-slot";
import { ContentSections } from "@/components/content/content-sections";
import { type PageSlug, resolvePath } from "@/config/paths";
import { fmt, useUi } from "@/i18n";
import type { LegalPageContent } from "@/i18n/types";
import { buildMeta } from "@/lib/seo";

export interface LegalLoaderData {
    content: LegalPageContent;
}

/** meta() común de las páginas informativas: el idioma sale de la URL. */
export const legalMeta =
    (id: PageSlug) =>
    ({ loaderData, location }: { loaderData?: LegalLoaderData; location: { pathname: string } }) =>
        loaderData
            ? buildMeta({
                  title: `${loaderData.content.title} | Dorfic`,
                  description: loaderData.content.metaDescription,
                  target: { type: "page", id },
                  locale: resolvePath(location.pathname).locale,
              })
            : [];

export const LegalPage = ({ content, children }: { content: LegalPageContent; children?: ReactNode }) => {
    const ui = useUi();
    return (
        <div className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-16">
            <h1 className="text-display-sm font-semibold tracking-tight text-primary md:text-display-md">{content.h1}</h1>
            {content.updated && <p className="mt-3 text-sm text-quaternary">{fmt(ui.legalUpdated, { date: content.updated })}</p>}
            <p className="mt-5 text-lg text-tertiary">{content.intro}</p>
            {children}
            <div className="mt-10">
                <ContentSections sections={content.sections} />
            </div>
            {/* Páginas cortas: solo la barra inferior, sin anuncios entre el texto. */}
            <AnchorAd />
        </div>
    );
};

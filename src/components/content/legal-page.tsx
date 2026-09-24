import type { ReactNode } from "react";
import { ContentSections } from "@/components/content/content-sections";
import { fmt, useUi } from "@/i18n";
import type { LegalPageContent } from "@/i18n/types";
import { buildMeta } from "@/lib/seo";

export const legalMeta = (content: LegalPageContent, path: string) =>
    buildMeta({ title: `${content.title} | Dorfic`, description: content.metaDescription, path });

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
        </div>
    );
};

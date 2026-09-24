import type { ToolSlug } from "@/config/paths";

export interface ContentSection {
    heading: string;
    paragraphs?: string[];
    /** Lista numerada (paso a paso). */
    steps?: string[];
    /** Lista con viñetas. */
    bullets?: string[];
}

export interface Faq {
    q: string;
    a: string;
}

/** Contenido SEO de cada página de herramienta. */
export interface ToolContent {
    slug: ToolSlug;
    /** Va en <title> como "[title] gratis | Dorfic". */
    title: string;
    metaDescription: string;
    h1: string;
    lead: string;
    sections: ContentSection[];
    faqs: Faq[];
    related: ToolSlug[];
}

/** Datos cortos para tarjetas, menús y enlaces. */
export interface ToolCard {
    name: string;
    description: string;
}

export interface LegalPageContent {
    title: string;
    metaDescription: string;
    h1: string;
    intro: string;
    updated?: string;
    sections: ContentSection[];
}

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

/** Portada: el texto largo se carga en el prerender (loader). */
export interface HomeContent {
    title: string;
    metaDescription: string;
    h1: string;
    h1Highlight: string;
    subtitle: string;
    intentsLabel: string;
    groups: Record<"convert" | "compress" | "resize", string>;
    toolsHeading: string;
    features: { title: string; body: string }[];
    aboutHeading: string;
    about: string[];
}

/** Buscador e inicio rápido. */
export interface SearchDictionary {
    /** Palabras con las que la gente busca cada herramienta (sinónimos, errores comunes, intención). */
    keywords: Record<ToolSlug, string[]>;
    /** Atajos "¿qué necesitas?" del inicio. */
    intents: { label: string; slug: ToolSlug }[];
    ui: {
        label: string;
        placeholderPrefix: string;
        /** Se muestran uno por uno, animados, como sugerencias en el buscador. */
        placeholders: string[];
        empty: string;
        shortcut: string;
        open: string;
        close: string;
        results: string;
        hint: string;
    };
    quickStart: {
        title: string;
        detected: string;
        question: string;
        recommended: string;
        change: string;
        unsupported: string;
    };
}

export type { UiDictionary } from "./es/ui";

/** Todo lo que necesita un idioma para la interfaz. */
export interface Dictionary {
    ui: import("./es/ui").UiDictionary;
    toolCards: Record<ToolSlug, ToolCard>;
    search: SearchDictionary;
}

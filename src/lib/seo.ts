import type { MetaDescriptor } from "react-router";
import { OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "@/config/site";
import type { ContentSection, Faq } from "@/i18n/types";

interface MetaOptions {
    /** Título completo tal como va en <title>. */
    title: string;
    description: string;
    path: string;
    noindex?: boolean;
    jsonLd?: object[];
    locale?: string;
    /** Imagen Open Graph propia (ruta pública, p. ej. "/og/heic-a-jpg.png"). */
    image?: string;
}

/** Fecha del build: se usa como dateModified (el HTML se regenera en cada despliegue). */
const BUILD_DATE = new Date().toISOString().slice(0, 10);

export const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/pwa-512.png`,
};

/** Genera title, description, canónica, Open Graph, Twitter y JSON-LD para el HTML prerenderizado. */
export const buildMeta = ({ title, description, path, noindex, jsonLd = [], locale = "es_MX", image }: MetaOptions): MetaDescriptor[] => {
    const url = absoluteUrl(path);
    const ogImage = image ? `${SITE_URL}${image}` : OG_IMAGE;
    const meta: MetaDescriptor[] = [
        { title },
        { name: "description", content: description },
        {
            name: "robots",
            content: noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { tagName: "link", rel: "canonical", href: url },
        // Idiomas: por ahora solo español. Al agregar /pt y /en, añade aquí sus alternates.
        { tagName: "link", rel: "alternate", hrefLang: "es-MX", href: url },
        { tagName: "link", rel: "alternate", hrefLang: "es", href: url },
        { tagName: "link", rel: "alternate", hrefLang: "x-default", href: url },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:locale", content: locale },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Dorfic: herramientas de imagen gratis en tu navegador" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage },
        { "script:ld+json": organizationLd },
        { "script:ld+json": websiteLd },
        {
            "script:ld+json": {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: title,
                description,
                inLanguage: "es-MX",
                isPartOf: { "@id": `${SITE_URL}/#website` },
                publisher: { "@id": `${SITE_URL}/#organization` },
                primaryImageOfPage: { "@type": "ImageObject", url: ogImage, width: 1200, height: 630 },
                dateModified: BUILD_DATE,
            },
        },
        ...jsonLd.map((data) => ({ "script:ld+json": data })),
    ];
    return meta;
};

export const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: ["Dorfic herramientas de imagen", "dorfic.com"],
    url: `${SITE_URL}/`,
    inLanguage: "es-MX",
    publisher: { "@id": `${SITE_URL}/#organization` },
};

/** HowTo a partir de la sección con pasos numerados. */
export const howToLd = ({ name, sections, path }: { name: string; sections: ContentSection[]; path: string }) => {
    const section = sections.find((s) => s.steps?.length);
    if (!section) return null;
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: section.heading,
        description: name,
        inLanguage: "es-MX",
        totalTime: "PT1M",
        estimatedCost: { "@type": "MonetaryAmount", currency: "MXN", value: "0" },
        tool: [{ "@type": "HowToTool", name: "Navegador web (celular o computadora)" }],
        step: section.steps!.map((text, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: text.split(/[.:]/)[0].slice(0, 90),
            text,
            url: `${absoluteUrl(path)}#paso-${i + 1}`,
        })),
    };
};

export const itemListLd = (items: { name: string; path: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, url: absoluteUrl(item.path) })),
});

/** "[Nombre] gratis | Dorfic" */
export const toolTitle = (name: string) => `${name} gratis | ${SITE_NAME}`;

export const faqLd = (faqs: Faq[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
});

export const softwareLd = ({ name, description, path }: { name: string; description: string; path: string }) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${name} – ${SITE_NAME}`,
    description,
    url: absoluteUrl(path),
    image: `${SITE_URL}/og${path}.png`,
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Editor de imágenes",
    featureList: ["Procesamiento 100% en el navegador", "Procesamiento en lote", "Descarga en ZIP", "Sin registro", "Sin marcas de agua"],
    operatingSystem: "Web, Android, iOS, Windows, macOS",
    browserRequirements: "Requiere JavaScript y un navegador moderno",
    isAccessibleForFree: true,
    inLanguage: "es-MX",
    offers: { "@type": "Offer", price: "0", priceCurrency: "MXN" },
    publisher: { "@id": `${SITE_URL}/#organization` },
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: absoluteUrl(item.path) })),
});

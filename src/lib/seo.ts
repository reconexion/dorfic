import type { MetaDescriptor } from "react-router";
import { DEFAULT_LOCALE, LOCALES, LOCALE_TAGS, type Locale, type Target, localizePath } from "@/config/paths";
import { OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "@/config/site";
import { fmt, getUi } from "@/i18n";
import type { ContentSection, Faq } from "@/i18n/types";

interface MetaOptions {
    /** Título completo tal como va en <title>. */
    title: string;
    description: string;
    /** Qué página es: con esto se arman la canónica y los hreflang de todos los idiomas. */
    target: Target;
    locale: Locale;
    noindex?: boolean;
    jsonLd?: object[];
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
export const buildMeta = ({ title, description, target, locale, noindex, jsonLd = [], image }: MetaOptions): MetaDescriptor[] => {
    const url = absoluteUrl(localizePath(locale, target));
    const ui = getUi(locale);
    const lang = LOCALE_TAGS[locale];
    // La misma página en cada idioma; x-default es la versión sin prefijo (redirige según el idioma del visitante).
    const alternates: MetaDescriptor[] = noindex
        ? []
        : [
              ...LOCALES.map((l) => ({ tagName: "link", rel: "alternate", hrefLang: LOCALE_TAGS[l], href: absoluteUrl(localizePath(l, target)) })),
              { tagName: "link", rel: "alternate", hrefLang: "x-default", href: absoluteUrl(localizePath(DEFAULT_LOCALE, target)) },
          ];
    const ogImage = image ? `${SITE_URL}${image}` : OG_IMAGE;
    const meta: MetaDescriptor[] = [
        { title },
        { name: "description", content: description },
        {
            name: "robots",
            content: noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { tagName: "link", rel: "canonical", href: url },
        ...alternates,
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:locale", content: lang.replace("-", "_") },
        ...LOCALES.filter((l) => l !== locale).map((l) => ({ property: "og:locale:alternate", content: LOCALE_TAGS[l].replace("-", "_") })),
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: ui.seo.ogImageAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage },
        { "script:ld+json": organizationLd },
        { "script:ld+json": websiteLd(locale) },
        {
            "script:ld+json": {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: title,
                description,
                inLanguage: lang,
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

export const websiteLd = (locale: Locale) => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: [getUi(locale).seo.alternateName, "dorfic.com"],
    url: `${SITE_URL}/`,
    inLanguage: LOCALES.map((l) => LOCALE_TAGS[l]),
    publisher: { "@id": `${SITE_URL}/#organization` },
});

/** HowTo a partir de la sección con pasos numerados. */
export const howToLd = ({ name, sections, path, locale }: { name: string; sections: ContentSection[]; path: string; locale: Locale }) => {
    const section = sections.find((s) => s.steps?.length);
    if (!section) return null;
    const ui = getUi(locale);
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: section.heading,
        description: name,
        inLanguage: LOCALE_TAGS[locale],
        totalTime: "PT1M",
        estimatedCost: { "@type": "MonetaryAmount", currency: ui.seo.currency, value: "0" },
        tool: [{ "@type": "HowToTool", name: ui.seo.howToTool }],
        step: section.steps!.map((text, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: text.split(/[.:]/)[0].slice(0, 90),
            text,
            url: `${absoluteUrl(path)}#${STEP_ANCHOR}${i + 1}`,
        })),
    };
};

export const itemListLd = (items: { name: string; path: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, url: absoluteUrl(item.path) })),
});

/** Ancla de cada paso del HowTo (content-sections.tsx usa la misma). */
export const STEP_ANCHOR = "paso-";

/** "[Nombre] gratis | Dorfic" en el idioma de la página. */
export const toolTitle = (name: string, locale: Locale) => fmt(getUi(locale).seo.titleFree, { name });

export const faqLd = (faqs: Faq[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
});

export const softwareLd = ({ name, description, path, image, locale }: { name: string; description: string; path: string; image: string; locale: Locale }) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${name} – ${SITE_NAME}`,
    description,
    url: absoluteUrl(path),
    image: `${SITE_URL}${image}`,
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: getUi(locale).seo.appSubCategory,
    featureList: getUi(locale).seo.features,
    operatingSystem: "Web, Android, iOS, Windows, macOS",
    browserRequirements: "Requiere JavaScript y un navegador moderno",
    isAccessibleForFree: true,
    inLanguage: LOCALE_TAGS[locale],
    offers: { "@type": "Offer", price: "0", priceCurrency: getUi(locale).seo.currency },
    publisher: { "@id": `${SITE_URL}/#organization` },
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: absoluteUrl(item.path) })),
});

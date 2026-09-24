import { TOOL_SLUGS, type ToolSlug } from "@/config/paths";
import type { ToolCard } from "@/i18n/types";

/** Minúsculas y sin acentos: "Tamaño" → "tamano". */
export const normalize = (text: string) =>
    text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/\s+/g, " ")
        .trim();

/**
 * Búsqueda simple y rápida (sin librerías): puntúa nombre, palabras clave y descripción.
 * Tolera acentos, mayúsculas y "100kb" vs "100 kb".
 */
export const searchTools = (query: string, cards: Record<ToolSlug, ToolCard>, keywords: Record<ToolSlug, string[]>): ToolSlug[] => {
    const q = normalize(query);
    if (!q) return [...TOOL_SLUGS];
    const compact = q.replace(/\s/g, "");
    const words = q.split(" ").filter(Boolean);

    const scored = TOOL_SLUGS.map((slug) => {
        const name = normalize(cards[slug].name);
        const desc = normalize(cards[slug].description);
        const keys = keywords[slug].map(normalize);
        let score = 0;
        if (name === q) score += 100;
        if (name.startsWith(q)) score += 40;
        if (name.includes(q)) score += 25;
        if (keys.some((k) => k === q || k.replace(/\s/g, "") === compact)) score += 30;
        for (const w of words) {
            if (name.includes(w)) score += 10;
            if (keys.some((k) => k.includes(w))) score += 6;
            if (desc.includes(w)) score += 2;
        }
        return { slug, score };
    });

    return scored
        .filter((s) => s.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((s) => s.slug);
};

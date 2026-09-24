import type { Locale, PageSlug, ToolSlug } from "@/config/paths";
import type { HomeContent, LegalPageContent, ToolContent } from "./types";

/**
 * Contenido largo de cada página. Solo se usa en los loaders, que corren durante el prerender:
 * el texto llega al navegador dentro del HTML y no engorda el JavaScript.
 */
const tools = import.meta.glob<{ default: ToolContent }>("./*/tools/*.ts");
const legal = import.meta.glob<Record<PageSlug, LegalPageContent>>("./*/pages/legal.ts");
const home = import.meta.glob<{ home: HomeContent }>("./*/pages/home.ts");

export const loadToolContent = async (locale: Locale, id: ToolSlug) => (await tools[`./${locale}/tools/${id}.ts`]()).default;

export const loadPageContent = async (locale: Locale, id: PageSlug) => (await legal[`./${locale}/pages/legal.ts`]())[id];

export const loadHomeContent = async (locale: Locale) => (await home[`./${locale}/pages/home.ts`]()).home;

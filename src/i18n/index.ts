import { createContext, useCallback, useContext } from "react";
import { DEFAULT_LOCALE, type Locale, type Target, localizePath } from "@/config/paths";
import * as de from "./de";
import * as en from "./en";
import * as es from "./es";
import * as fr from "./fr";
import * as pt from "./pt";
import type { Dictionary } from "./types";

export type { Locale };

/**
 * Textos cortos de interfaz de cada idioma (se usan en todas las páginas).
 * El contenido largo de cada página (herramientas, legales, inicio) NO va aquí:
 * se carga en el prerender desde el loader de cada ruta (ver content.server.ts).
 */
const dictionaries: Record<Locale, Dictionary> = { es: es.dictionary, en: en.dictionary, pt: pt.dictionary, fr: fr.dictionary, de: de.dictionary };

export const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export const useLocale = () => useContext(LocaleContext);

/** Textos de interfaz del idioma actual. */
export const useUi = () => dictionaries[useLocale()].ui;

export const useToolCards = () => dictionaries[useLocale()].toolCards;

export const useSearchDictionary = () => dictionaries[useLocale()].search;

export const getUi = (locale: Locale = DEFAULT_LOCALE) => dictionaries[locale].ui;

export const getToolCards = (locale: Locale = DEFAULT_LOCALE) => dictionaries[locale].toolCards;

/** Arma URLs en el idioma actual: to({ type: "tool", id: "heic-a-jpg" }) → "/en/heic-to-jpg". */
export const useLocalePath = () => {
    const locale = useLocale();
    return useCallback((target: Target) => localizePath(locale, target), [locale]);
};

/** Reemplaza {variables} dentro de un texto. */
export const fmt = (text: string, vars: Record<string, string | number>) => text.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));

import { createContext, useContext } from "react";
import { DEFAULT_LOCALE } from "@/config/paths";
import { toolCards as esToolCards } from "./es/tool-cards";
import { type UiDictionary, ui as esUi } from "./es/ui";

export type Locale = "es";

const dictionaries: Record<Locale, { ui: UiDictionary; toolCards: typeof esToolCards }> = {
    es: { ui: esUi, toolCards: esToolCards },
};

export const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export const useLocale = () => useContext(LocaleContext);

/** Textos de interfaz del idioma actual. */
export const useUi = () => dictionaries[useLocale()].ui;

export const useToolCards = () => dictionaries[useLocale()].toolCards;

export const getUi = (locale: Locale = DEFAULT_LOCALE) => dictionaries[locale].ui;

export const getToolCards = (locale: Locale = DEFAULT_LOCALE) => dictionaries[locale].toolCards;

/** Reemplaza {variables} dentro de un texto. */
export const fmt = (text: string, vars: Record<string, string | number>) => text.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));

import { type KeyboardEvent, useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowRight, SearchLg } from "@untitledui/icons";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { useNavigate } from "react-router";
import type { ToolSlug } from "@/config/paths";
import { TOOLS } from "@/config/tools";
import { fmt, useLocalePath, useSearchDictionary, useToolCards } from "@/i18n";
import { searchTools } from "@/lib/search";
import { cx } from "@/utils/cx";

interface SearchBoxProps {
    /** "hero": grande con resultados flotantes. "palette": dentro del modal, resultados siempre visibles. */
    variant: "hero" | "palette";
    autoFocus?: boolean;
    onNavigate?: () => void;
}

/** Placeholder animado: va mostrando ejemplos de búsqueda. */
const AnimatedPlaceholder = ({ active }: { active: boolean }) => {
    const { ui: searchUi } = useSearchDictionary();
    const [i, setI] = useState(0);
    const reduce = useReducedMotion();
    useEffect(() => {
        if (!active || reduce) return;
        const t = setInterval(() => setI((v) => (v + 1) % searchUi.placeholders.length), 2400);
        return () => clearInterval(t);
    }, [active, reduce, searchUi.placeholders.length]);

    return (
        <span aria-hidden className="pointer-events-none absolute inset-y-0 left-14 flex items-center overflow-hidden text-lg text-placeholder md:left-16">
            {searchUi.placeholderPrefix}
            <AnimatePresence mode="wait" initial={false}>
                <m.span
                    key={i}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="ml-1 font-medium text-tertiary"
                >
                    {searchUi.placeholders[i]}
                </m.span>
            </AnimatePresence>
        </span>
    );
};

/**
 * Buscador de herramientas accesible (patrón combobox de WAI-ARIA):
 * flechas para moverse, Enter para abrir, Escape para cerrar.
 */
export const SearchBox = ({ variant, autoFocus, onNavigate }: SearchBoxProps) => {
    const cards = useToolCards();
    const { keywords, ui: searchUi } = useSearchDictionary();
    const to = useLocalePath();
    const navigate = useNavigate();
    const id = useId();
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);
    const [active, setActive] = useState(0);

    const results = useMemo(() => {
        const found = searchTools(query, cards, keywords);
        return variant === "hero" ? found.slice(0, 6) : found;
    }, [query, cards, keywords, variant]);

    useEffect(() => setActive(0), [query]);
    useEffect(() => {
        if (autoFocus) inputRef.current?.focus();
    }, [autoFocus]);

    // En el hero la lista solo aparece al escribir, para no tapar la zona de carga.
    const open = variant === "palette" || (focused && query.trim().length > 0);

    const go = (slug: ToolSlug) => {
        setQuery("");
        setFocused(false);
        inputRef.current?.blur();
        onNavigate?.();
        navigate(to({ type: "tool", id: slug }));
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActive((a) => Math.min(results.length - 1, a + 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((a) => Math.max(0, a - 1));
        } else if (e.key === "Enter" && results[active]) {
            e.preventDefault();
            go(results[active]);
        } else if (e.key === "Escape") {
            if (query) setQuery("");
            else inputRef.current?.blur();
        }
    };

    const listId = `${id}-list`;
    const isHero = variant === "hero";

    const list = (
        <ul
            id={listId}
            role="listbox"
            aria-label={searchUi.label}
            className={cx("flex flex-col gap-0.5", isHero ? "p-2" : "max-h-[60dvh] overflow-y-auto p-2")}
        >
            {results.length === 0 && (
                <li role="option" aria-selected={false} aria-disabled className="px-3 py-6 text-center text-sm text-tertiary">
                    {searchUi.empty}
                </li>
            )}
            {results.map((slug, i) => {
                const Icon = TOOLS[slug].icon;
                const selected = i === active;
                return (
                    <m.li
                        key={slug}
                        id={`${id}-opt-${slug}`}
                        role="option"
                        aria-selected={selected}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18, delay: Math.min(i, 8) * 0.025 }}
                        onMouseMove={() => setActive(i)}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => go(slug)}
                        className={cx(
                            "relative flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left",
                            selected ? "text-primary" : "text-secondary",
                        )}
                    >
                        {selected && (
                            <m.span
                                layoutId={`search-active-${variant}`}
                                aria-hidden
                                className="absolute inset-0 rounded-xl bg-brand-primary ring-1 ring-brand-200 ring-inset"
                                transition={{ type: "spring", stiffness: 600, damping: 40 }}
                            />
                        )}
                        <span
                            className={cx(
                                "relative flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-150",
                                selected ? "bg-brand-solid text-white" : "bg-brand-primary text-fg-brand-primary",
                            )}
                        >
                            <Icon className="size-5" />
                        </span>
                        <span className="relative flex min-w-0 flex-col">
                            <span className="text-md font-semibold">{cards[slug].name}</span>
                            <span className="truncate text-sm text-tertiary">{cards[slug].description}</span>
                        </span>
                        <ArrowRight
                            aria-hidden
                            className={cx(
                                "relative ml-auto size-5 shrink-0 transition duration-150",
                                selected ? "translate-x-0 text-fg-brand-primary opacity-100" : "-translate-x-1 opacity-0",
                            )}
                        />
                    </m.li>
                );
            })}
        </ul>
    );

    return (
        <div className={cx("relative w-full", isHero && "mx-auto max-w-2xl")}>
            <div
                className={cx(
                    "group relative flex items-center rounded-2xl bg-primary transition-shadow duration-200",
                    isHero ? "shadow-lg ring-2 ring-brand-200 focus-within:shadow-xl focus-within:ring-brand-500" : "border-b border-secondary",
                )}
            >
                {isHero && <span aria-hidden className="search-glow pointer-events-none absolute -inset-1 -z-10 rounded-[20px] opacity-60 blur-md" />}
                <SearchLg aria-hidden className={cx("pointer-events-none absolute left-5 size-6 text-fg-brand-primary md:left-6")} />
                <input
                    ref={inputRef}
                    type="search"
                    role="combobox"
                    aria-label={searchUi.label}
                    aria-expanded={open}
                    aria-controls={listId}
                    aria-autocomplete="list"
                    aria-activedescendant={open && results[active] ? `${id}-opt-${results[active]}` : undefined}
                    autoComplete="off"
                    enterKeyHint="go"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onKeyDown={onKeyDown}
                    className="h-16 w-full rounded-2xl bg-transparent pr-4 pl-14 text-lg text-primary outline-none md:h-[68px] md:pl-16"
                />
                {!query && <AnimatedPlaceholder active={!focused || isHero} />}
            </div>

            {isHero ? (
                <AnimatePresence>
                    {open && (
                        <m.div
                            initial={{ opacity: 0, y: -6, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                            className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-2xl bg-primary text-left shadow-2xl ring-1 ring-secondary"
                        >
                            {list}
                        </m.div>
                    )}
                </AnimatePresence>
            ) : (
                <>
                    {list}
                    <p className="border-t border-secondary px-4 py-2.5 text-xs text-quaternary">
                        {fmt(searchUi.results, { n: results.length })} · {searchUi.hint}
                    </p>
                </>
            )}
        </div>
    );
};

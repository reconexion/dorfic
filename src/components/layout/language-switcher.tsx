import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Globe02 } from "@untitledui/icons";
import { AnimatePresence, m } from "motion/react";
import { Link, useLocation } from "react-router";
import { LOCALES, LOCALE_NAMES, LOCALE_TAGS, switchLocalePath } from "@/config/paths";
import { useLocale, useUi } from "@/i18n";
import { saveLocale } from "@/lib/locale-preference";
import { cx } from "@/utils/cx";

/**
 * Selector de idioma del header. Son enlaces reales a la misma página en cada idioma
 * (también sirven a los buscadores) y al elegir uno se recuerda para las próximas visitas.
 */
export const LanguageSwitcher = () => {
    const ui = useUi();
    const locale = useLocale();
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    const menuId = useId();
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => setOpen(false), [pathname]);
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        const onPointer = (e: PointerEvent) => !rootRef.current?.contains(e.target as Node) && setOpen(false);
        window.addEventListener("keydown", onKey);
        window.addEventListener("pointerdown", onPointer);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("pointerdown", onPointer);
        };
    }, [open]);

    return (
        <div ref={rootRef} className="relative">
            <button
                type="button"
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={`${ui.nav.changeLanguage}: ${LOCALE_NAMES[locale]}`}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-semibold text-secondary uppercase outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover focus-visible:outline-2 motion-safe:active:scale-[0.97]"
            >
                <Globe02 aria-hidden className="size-5 text-fg-quaternary" />
                {locale}
                <ChevronDown aria-hidden className={cx("hidden size-4 transition-transform duration-200 sm:block", open && "rotate-180")} />
            </button>

            <AnimatePresence>
                {open && (
                    <m.div
                        id={menuId}
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 z-50 mt-2 w-48 origin-top-right rounded-xl bg-primary p-1.5 shadow-lg ring-1 ring-secondary_alt"
                    >
                        <p className="px-2.5 pt-1.5 pb-1 text-xs font-semibold tracking-wide text-quaternary uppercase">{ui.nav.language}</p>
                        <ul>
                            {LOCALES.map((l) => (
                                <li key={l}>
                                    <Link
                                        to={switchLocalePath(pathname, l)}
                                        lang={LOCALE_TAGS[l]}
                                        hrefLang={LOCALE_TAGS[l]}
                                        aria-current={l === locale ? "true" : undefined}
                                        onClick={() => saveLocale(l)}
                                        className={cx(
                                            "flex items-center justify-between rounded-lg px-2.5 py-2 text-sm font-medium transition duration-100 ease-linear hover:bg-primary_hover",
                                            l === locale ? "text-brand-secondary" : "text-secondary",
                                        )}
                                    >
                                        {LOCALE_NAMES[l]}
                                        {l === locale && <Check aria-hidden className="size-4 text-fg-brand-primary" />}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
};

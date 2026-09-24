import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { SearchLg } from "@untitledui/icons";
import { AnimatePresence, m } from "motion/react";
import { useSearchDictionary } from "@/i18n";
import { SearchBox } from "./search-box";

/** Botón del header que abre la búsqueda en un panel flotante (también con Ctrl/Cmd + K). */
export const SearchPalette = () => {
    const { ui: searchUi } = useSearchDictionary();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setOpen((v) => !v);
            } else if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={searchUi.open}
                aria-haspopup="dialog"
                className="group inline-flex items-center gap-2 rounded-full border border-secondary bg-primary py-2 pr-2 pl-3 text-sm text-tertiary shadow-xs transition duration-150 hover:border-brand hover:text-secondary hover:shadow-md motion-safe:active:scale-[0.97] sm:pr-3"
            >
                <SearchLg aria-hidden className="size-5 text-fg-brand-primary transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-6" />
                <span className="hidden md:inline">{searchUi.label}</span>
                <kbd className="hidden rounded-md border border-secondary px-1.5 py-0.5 font-sans text-xs text-quaternary lg:inline">{searchUi.shortcut}</kbd>
            </button>

            {/* Portal a <body>: el header usa backdrop-blur, que "atraparía" un overlay fijo. */}
            {typeof document !== "undefined" &&
                createPortal(
                    <AnimatePresence>
                        {open && (
                            <m.div
                                key="overlay"
                                className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 px-4 pt-[12dvh] backdrop-blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
                            >
                                <m.div
                                    role="dialog"
                                    aria-modal="true"
                                    aria-label={searchUi.open}
                                    initial={{ opacity: 0, y: -12, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 34 }}
                                    className="w-full max-w-xl overflow-hidden rounded-2xl bg-primary shadow-2xl ring-1 ring-secondary"
                                >
                                    <SearchBox variant="palette" autoFocus onNavigate={() => setOpen(false)} />
                                </m.div>
                            </m.div>
                        )}
                    </AnimatePresence>,
                    document.body,
                )}
        </>
    );
};

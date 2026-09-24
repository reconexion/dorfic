import { useEffect, useId, useState } from "react";
import { ArrowRight, ChevronDown, Menu01, X } from "@untitledui/icons";
import { AnimatePresence, m } from "motion/react";
import { Link, NavLink, useLocation } from "react-router";
import { Logo } from "@/components/brand/logo";
import { SearchPalette } from "@/components/search/search-palette";
import { TOOL_SLUGS } from "@/config/paths";
import { TOOLS } from "@/config/tools";
import { useToolCards, useUi } from "@/i18n";
import { cx } from "@/utils/cx";

const QUICK_LINKS = ["heic-a-jpg", "comprimir-imagen", "redimensionar-imagen"] as const;

/** Cambia la clave cuando cambie el anuncio para que vuelva a mostrarse a quien cerró el anterior. */
const ANNOUNCEMENT_KEY = "dorfic:announcement:heic-a-jpg";

/** Franja de anuncio que vive dentro del header, así se queda visible al hacer scroll. */
const AnnouncementBar = ({ onDismiss }: { onDismiss: () => void }) => {
    const { announcement } = useUi();

    return (
        <div className="bg-brand-solid text-white">
            <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 md:px-8">
                <p className="flex-1 text-center text-sm font-medium">
                    <span>{announcement.text}</span>{" "}
                    <Link
                        to={announcement.href}
                        className="inline-flex items-center gap-1 font-semibold whitespace-nowrap underline underline-offset-2 outline-white hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {announcement.cta}
                        <ArrowRight aria-hidden className="size-4" />
                    </Link>
                </p>
                <button
                    type="button"
                    onClick={onDismiss}
                    aria-label={announcement.dismiss}
                    className="-mr-1.5 shrink-0 rounded-md p-1.5 text-white/80 outline-white transition duration-100 ease-linear hover:bg-white/15 hover:text-white focus-visible:outline-2"
                >
                    <X aria-hidden className="size-4" />
                </button>
            </div>
        </div>
    );
};

export const SiteHeader = () => {
    const ui = useUi();
    const cards = useToolCards();
    const [open, setOpen] = useState(false);
    const panelId = useId();
    const { pathname } = useLocation();
    // Arranca oculto y se decide en el cliente para no desfasar el HTML prerenderizado.
    const [showAnnouncement, setShowAnnouncement] = useState(false);

    useEffect(() => {
        try {
            setShowAnnouncement(localStorage.getItem(ANNOUNCEMENT_KEY) !== "dismissed");
        } catch {
            setShowAnnouncement(true);
        }
    }, []);

    const dismissAnnouncement = () => {
        setShowAnnouncement(false);
        try {
            localStorage.setItem(ANNOUNCEMENT_KEY, "dismissed");
        } catch {
            // Sin almacenamiento: solo se oculta en esta visita.
        }
    };

    // Cierra el menú al navegar o con Escape.
    useEffect(() => setOpen(false), [pathname]);
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const groups = (["convert", "compress", "resize"] as const).map((group) => ({
        group,
        label: ui.nav[group],
        slugs: TOOL_SLUGS.filter((s) => TOOLS[s].group === group),
    }));

    return (
        <header className="sticky top-0 z-40 border-b border-brand-100 bg-page/85 backdrop-blur-md">
            <a
                href="#contenido"
                className="sr-only rounded-md bg-brand-solid px-3 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
            >
                {ui.nav.skipToContent}
            </a>
            {showAnnouncement && <AnnouncementBar onDismiss={dismissAnnouncement} />}
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
                <Link
                    to="/"
                    aria-label={ui.brand.homeLink}
                    className="group rounded-md outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                    <Logo markClassName="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                </Link>

                <nav aria-label={ui.nav.tools} className="flex items-center gap-1.5">
                    <ul className="hidden items-center gap-1 lg:flex">
                        {QUICK_LINKS.map((slug) => (
                            <li key={slug}>
                                <NavLink
                                    to={`/${slug}`}
                                    className={({ isActive }) =>
                                        cx(
                                            "rounded-lg px-3 py-2 text-sm font-semibold text-tertiary transition duration-100 ease-linear hover:bg-primary_hover hover:text-secondary",
                                            isActive && "bg-brand-primary text-brand-secondary",
                                        )
                                    }
                                >
                                    {cards[slug].name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <SearchPalette />
                    <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover focus-visible:outline-2 motion-safe:active:scale-[0.97]"
                    >
                        <span className="hidden sm:inline">{ui.nav.tools}</span>
                        <span className="sr-only sm:hidden">{open ? ui.nav.closeMenu : ui.nav.openMenu}</span>
                        <span className="hidden sm:inline-flex">
                            <ChevronDown aria-hidden className={cx("size-4 transition-transform duration-200", open && "rotate-180")} />
                        </span>
                        <span className="sm:hidden">{open ? <X aria-hidden className="size-6" /> : <Menu01 aria-hidden className="size-6" />}</span>
                    </button>
                </nav>
            </div>

            <AnimatePresence>
                {open && (
                    <m.div
                        id={panelId}
                        key="panel"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className={cx(
                            "absolute inset-x-0 top-full overflow-y-auto border-b border-secondary bg-primary shadow-lg",
                            showAnnouncement ? "max-h-[calc(100dvh-7rem)]" : "max-h-[calc(100dvh-4rem)]",
                        )}
                    >
                        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:grid-cols-3 md:px-8">
                            {groups.map(({ group, label, slugs }) => (
                                <div key={group}>
                                    <p className="mb-2 text-xs font-semibold tracking-wide text-quaternary uppercase">{label}</p>
                                    <ul className="flex flex-col gap-1">
                                        {slugs.map((slug) => {
                                            const Icon = TOOLS[slug].icon;
                                            return (
                                                <li key={slug}>
                                                    <Link
                                                        to={`/${slug}`}
                                                        className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-secondary transition duration-100 ease-linear hover:bg-primary_hover hover:text-primary"
                                                    >
                                                        <span className="flex size-8 items-center justify-center rounded-md bg-brand-primary text-fg-brand-primary">
                                                            <Icon className="size-4" />
                                                        </span>
                                                        {cards[slug].name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </header>
    );
};

import { useEffect, useRef, useState } from "react";
import { XClose } from "@untitledui/icons";
import { ADSENSE_CLIENT, ADSENSE_SLOT_ANCHOR, ADSENSE_SLOT_DISPLAY } from "@/config/site";
import { useUi } from "@/i18n";
import { cx } from "@/utils/cx";

declare global {
    interface Window {
        adsbygoogle?: unknown[];
    }
}

/**
 * Reparto de anuncios (la idea: siempre hay uno a la vista, pero nunca estorba):
 *
 * - Uno SIEMPRE visible: barra inferior 320×50 / 728×90 que el usuario puede cerrar (<AnchorAd>). En las
 *   páginas de herramienta de escritorio se esconde mientras el lateral fijo 300×600 está a la vista, así
 *   nunca hay dos a la vez. Ninguno tapa contenido.
 * - Pocos dentro de la página, siempre separados por contenido útil y nunca encima de la herramienta.
 * - Todos con ALTURA FIJA (sin saltos de layout / CLS) y sin animaciones.
 * - El anuncio real se pide solo cuando su espacio está por entrar en pantalla.
 *
 * Sin VITE_ADSENSE_CLIENT se ve un espacio reservado del mismo tamaño (útil en desarrollo).
 * El script principal de AdSense se carga en src/root.tsx.
 */

type AdVariant = "below-tool" | "in-content" | "sidebar";

const SIZES: Record<AdVariant, string> = {
    // Móvil: 250 px (rectángulo 300×250). Escritorio: 90 px (leaderboard 728×90).
    "below-tool": "h-[250px] w-full md:h-[90px]",
    "in-content": "h-[250px] w-full",
    // Media página 300×600, solo en escritorio.
    sidebar: "h-[600px] w-[300px]",
};

/** Un bloque de AdSense (o su espacio reservado) con el tamaño exacto que le da `className`. */
export const AdUnit = ({ slot, name, className }: { slot: string; name: string; className: string }) => {
    const enabled = Boolean(ADSENSE_CLIENT && slot);
    const ref = useRef<HTMLModElement>(null);

    useEffect(() => {
        const ins = ref.current;
        if (!enabled || !ins) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();
                try {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                } catch {
                    // Bloqueador de anuncios o script aún sin cargar: la página sigue funcionando.
                }
            },
            { rootMargin: "300px" },
        );
        observer.observe(ins);
        return () => observer.disconnect();
    }, [enabled]);

    if (!enabled) {
        return <div data-ad-slot={name} className={cx("max-w-full overflow-hidden rounded-lg border border-dashed border-secondary bg-primary", className)} />;
    }
    return (
        <div className={cx("max-w-full overflow-hidden", className)}>
            <ins ref={ref} className="adsbygoogle" style={{ display: "block", width: "100%", height: "100%" }} data-ad-client={ADSENSE_CLIENT} data-ad-slot={slot} />
        </div>
    );
};

export const AdSlot = ({ variant, className }: { variant: AdVariant; className?: string }) => {
    const ui = useUi();
    return (
        <aside aria-label={ui.toolPage.adLabel} className={cx("flex w-full flex-col items-center", className)}>
            <span className="mb-1 text-[11px] tracking-wide text-quaternary uppercase">{ui.toolPage.adLabel}</span>
            <AdUnit slot={ADSENSE_SLOT_DISPLAY} name={variant} className={SIZES[variant]} />
        </aside>
    );
};

/** Marca el contenedor del anuncio lateral fijo para que <AnchorAd> se aparte mientras se ve. */
export const SIDEBAR_AD_ATTR = "data-sidebar-ad";

/**
 * Barra de anuncio fija abajo: 320×50 en móvil y 728×90 desde md.
 * - Se desliza fuera mientras el anuncio lateral (SIDEBAR_AD_ATTR) está a la vista: nunca hay dos a la vez.
 * - Deja al final de la página un espacio igual a su altura (globals.css, html[data-anchor-ad]) para no tapar nada.
 * - Se puede cerrar; vuelve a aparecer en la siguiente página.
 * - En producción sin AdSense no se muestra (una barra vacía fija sí molestaría).
 */
export const AnchorAd = () => {
    const ui = useUi();
    const [closed, setClosed] = useState(false);
    const [sidebarInView, setSidebarInView] = useState(false);
    const visible = !closed && (Boolean(ADSENSE_CLIENT && ADSENSE_SLOT_ANCHOR) || import.meta.env.DEV);

    useEffect(() => {
        if (!visible) return;
        document.documentElement.dataset.anchorAd = "";
        return () => {
            delete document.documentElement.dataset.anchorAd;
        };
    }, [visible]);

    useEffect(() => {
        const sidebar = document.querySelector(`[${SIDEBAR_AD_ATTR}]`);
        if (!visible || !sidebar) return;
        // Oculto con display:none (móvil) nunca cuenta como visible.
        const observer = new IntersectionObserver(([entry]) => setSidebarInView(entry.isIntersecting));
        observer.observe(sidebar);
        return () => observer.disconnect();
    }, [visible]);

    if (!visible) return null;
    return (
        <aside
            aria-label={ui.toolPage.adLabel}
            aria-hidden={sidebarInView || undefined}
            inert={sidebarInView}
            className={cx(
                "fixed inset-x-0 bottom-0 z-30 border-t border-secondary bg-primary/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md transition-transform duration-200 ease-out motion-reduce:transition-none",
                sidebarInView && "translate-y-[calc(100%+2rem)]",
            )}
        >
            {/* El botón queda fuera del área del anuncio para evitar clics accidentales. */}
            <button
                type="button"
                onClick={() => setClosed(true)}
                aria-label={ui.toolPage.adClose}
                className="absolute -top-7 right-3 flex h-7 w-9 items-center justify-center rounded-t-lg border border-b-0 border-secondary bg-primary text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover"
            >
                <XClose aria-hidden className="size-4" />
            </button>
            <div className="flex justify-center py-2">
                <AdUnit slot={ADSENSE_SLOT_ANCHOR} name="anchor" className="h-[50px] w-[320px] md:h-[90px] md:w-[728px]" />
            </div>
        </aside>
    );
};

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { ADSENSE_CLIENT, ADSENSE_SLOTS, type AdPlacementName, EZOIC_PLACEHOLDERS } from "@/config/site";
import { cx } from "@/utils/cx";

declare global {
    interface Window {
        ezstandalone?: {
            cmd: Array<() => void>;
            showAds?: (...ids: number[]) => void;
            destroyPlaceholders?: (...ids: number[]) => void;
        };
        adsbygoogle?: object[];
    }
}

/**
 * Anuncios de Ezoic (standalone). El script se carga en el <head> desde el build (react-router.config.ts).
 *
 * Cómo se reparten para ganar más sin molestar:
 * - Muchos placeholders en los puntos de más atención (debajo de la herramienta, antes de la descarga,
 *   dentro del texto largo, lateral fijo). Ezoic prueba y solo llena los que rinden; los vacíos no ocupan espacio.
 * - Nunca encima de la herramienta ni pegados a botones (evita clics accidentales).
 * - La barra fija inferior (anchor) y los laterales de pantalla ancha (side rails) los pone Ezoic desde su panel.
 *
 * Es una app de una sola página: al entrar a una página se piden sus placeholders (showAds) y al salir se
 * liberan (destroyPlaceholders), para que la siguiente pueda volver a usar los mismos números.
 */

const queue = (fn: () => void) => {
    const ez = (window.ezstandalone ||= { cmd: [] });
    (ez.cmd ||= []).push(fn);
};

// Los placeholders que se montan juntos (una página completa) se piden en una sola llamada.
const pending = new Set<number>();
let flushScheduled = false;
const requestAd = (id: number) => {
    pending.add(id);
    if (flushScheduled) return;
    flushScheduled = true;
    queueMicrotask(() => {
        flushScheduled = false;
        const ids = [...pending];
        pending.clear();
        // showAds() sin números significa "todos": nunca llamarlo vacío.
        if (ids.length) queue(() => window.ezstandalone?.showAds?.(...ids));
    });
};
const releaseAd = (id: number) => {
    if (pending.delete(id)) return; // Nunca se llegó a pedir.
    queue(() => window.ezstandalone?.destroyPlaceholders?.(id));
};

const DESKTOP = "(min-width: 64rem)";

/**
 * Una unidad de AdSense. El push va en un efecto, cuando el <ins> ya está en el DOM. AdSense no vuelve a llenar
 * un <ins> que ya tiene anuncio, así que la navegación entre páginas (sin recarga) monta uno nuevo (key = ruta).
 */
const AdSenseUnit = ({ slot }: { slot: string }) => {
    const ref = useRef<HTMLModElement>(null);

    useEffect(() => {
        // En desarrollo (StrictMode) el efecto corre dos veces: no pedir dos veces el mismo <ins>.
        if (!ref.current || ref.current.dataset.adsbygoogleStatus) return;
        try {
            (window.adsbygoogle ||= []).push({});
        } catch {
            // Bloqueador de anuncios o script aún sin cargar: el <ins> se queda vacío.
        }
    }, []);

    return (
        <ins
            ref={ref}
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={ADSENSE_CLIENT}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    );
};

/**
 * Un placeholder de Ezoic, o una unidad de AdSense si la posición está en ADSENSE_SLOTS. Sin estilos en el div del placeholder (Ezoic lo pide así); el margen solo aparece
 * cuando el anuncio se llenó (globals.css, .ad-placement), así un placeholder vacío no deja huecos.
 * `desktopOnly`: solo existe en pantallas de escritorio (no se pide un anuncio que nadie vería).
 */
export const AdPlacement = ({ name, className, desktopOnly = false }: { name: AdPlacementName; className?: string; desktopOnly?: boolean }) => {
    const id = EZOIC_PLACEHOLDERS[name];
    const adsenseSlot = ADSENSE_SLOTS[name];
    const { pathname } = useLocation();
    const [active, setActive] = useState(!desktopOnly);

    useEffect(() => {
        if (!desktopOnly) return;
        const query = window.matchMedia(DESKTOP);
        const update = () => setActive(query.matches);
        update();
        query.addEventListener("change", update);
        return () => query.removeEventListener("change", update);
    }, [desktopOnly]);

    useEffect(() => {
        if (!active || adsenseSlot) return;
        requestAd(id);
        return () => releaseAd(id);
    }, [active, id, adsenseSlot]);

    if (!active) return null;
    if (adsenseSlot) {
        return (
            <div className={cx("ad-placement w-full", className)}>
                <AdSenseUnit key={pathname} slot={adsenseSlot} />
            </div>
        );
    }
    return (
        // Bloque a todo lo ancho: Ezoic mide el ancho del placeholder para elegir el tamaño del anuncio.
        <div className={cx("ad-placement w-full", className)}>
            <div id={`ezoic-pub-ad-placeholder-${id}`} />
        </div>
    );
};

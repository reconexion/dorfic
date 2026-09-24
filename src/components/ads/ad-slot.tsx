import { useUi } from "@/i18n";
import { cx } from "@/utils/cx";

type AdVariant = "below-tool" | "in-content" | "sidebar";

/**
 * Espacio reservado para anuncios con ALTURA FIJA (evita saltos de layout / CLS).
 * Sin animaciones y nunca encima de la herramienta.
 *
 * ============================ GOOGLE ADSENSE ============================
 * Cuando te aprueben, reemplaza el contenido del <div data-ad-slot> por el bloque de AdSense:
 *
 *   <ins className="adsbygoogle" style={{ display: "block", width: "100%", height: "100%" }}
 *        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="YYYYYYYYYY" data-full-width-responsive="true" />
 *
 * y en un useEffect llama: (window.adsbygoogle = window.adsbygoogle || []).push({});
 * El script principal de AdSense se pega en src/root.tsx (ver comentario en <head>).
 * ========================================================================
 */
const SIZES: Record<AdVariant, string> = {
    // Móvil: 250 px (rectángulo 300×250). Escritorio: 90 px (leaderboard 728×90).
    "below-tool": "h-[250px] md:h-[90px]",
    "in-content": "h-[250px]",
    // Media página 300×600, solo en escritorio.
    sidebar: "h-[600px] w-[300px]",
};

export const AdSlot = ({ variant, className }: { variant: AdVariant; className?: string }) => {
    const ui = useUi();
    return (
        <aside aria-label={ui.toolPage.adLabel} className={cx("flex w-full flex-col items-center", className)}>
            <span className="mb-1 text-[11px] tracking-wide text-quaternary uppercase">{ui.toolPage.adLabel}</span>
            <div
                data-ad-slot={variant}
                className={cx("w-full max-w-full overflow-hidden rounded-lg border border-dashed border-secondary bg-primary", SIZES[variant])}
            />
        </aside>
    );
};

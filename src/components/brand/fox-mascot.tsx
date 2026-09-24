import { useEffect, useState } from "react";
import { m } from "motion/react";
import { Mascot } from "page-mascot";
import { useUi } from "@/i18n";
import { cx } from "@/utils/cx";

/**
 * Zorro de Dorfic (componente page-mascot): sigue el cursor y reacciona al tocarlo.
 * Se monta después de hidratar para no competir con el contenido prerenderizado (LCP),
 * y reserva su espacio desde el HTML para no causar saltos de layout.
 */
export const FoxMascot = ({ size = 120, className }: { size?: number; className?: string }) => {
    const ui = useUi();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        // Esperamos a que la página termine de cargar (y a un momento libre) para no competir con el contenido.
        let idle = 0;
        const show = () => {
            const ric = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 200));
            idle = ric(() => setMounted(true)) as number;
        };
        if (document.readyState === "complete") show();
        else window.addEventListener("load", show, { once: true });
        return () => {
            window.removeEventListener("load", show);
            (window.cancelIdleCallback ?? window.clearTimeout)(idle);
        };
    }, []);

    return (
        <div className={cx("relative shrink-0", className)} style={{ width: size, height: size }}>
            {mounted && (
                <m.div
                    initial={{ opacity: 0, y: 14, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 18 }}
                >
                    <Mascot directions="/mascots/fox-directions.webp" reactions="/mascots/fox-reactions.webp" size={size} label={ui.brand.mascot} />
                </m.div>
            )}
        </div>
    );
};

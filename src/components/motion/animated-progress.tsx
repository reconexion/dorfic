import { m } from "motion/react";
import { cx } from "@/utils/cx";

/**
 * Barra de progreso con el estilo de Untitled UI (ProgressBarBase), pero el avance
 * se anima con un spring sobre scaleX (solo transform) para que fluya sin saltos.
 */
export const AnimatedProgress = ({ value, label, className }: { value: number; label: string; className?: string }) => {
    const clamped = Math.max(0, Math.min(1, value));
    return (
        <div
            role="progressbar"
            aria-label={label}
            aria-valuenow={Math.round(clamped * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            className={cx("h-2 w-full overflow-hidden rounded-full bg-brand-100", className)}
        >
            <m.div
                className="size-full origin-left rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: clamped }}
                transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.6 }}
            />
        </div>
    );
};

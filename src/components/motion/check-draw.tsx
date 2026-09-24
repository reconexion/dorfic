import { m } from "motion/react";
import { cx } from "@/utils/cx";

/** Check verde que se "dibuja" (animación del trazo del SVG). */
export const CheckDraw = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={cx("size-5", className)} aria-hidden="true">
        <m.circle
            cx="12"
            cy="12"
            r="11"
            className="fill-fg-success-primary"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
            style={{ originX: "50%", originY: "50%" }}
        />
        <m.path
            d="M7 12.5l3.2 3.2L17 9"
            fill="none"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.35, delay: 0.12, ease: "easeOut" }}
        />
    </svg>
);

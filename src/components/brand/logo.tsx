import { cx } from "@/utils/cx";

/**
 * Isotipo de Dorfic: una "D" blanca sobre un cuadro naranja; el hueco redondo
 * de la D recuerda al lente de una cámara. Se lee bien incluso a 16 px.
 */
export const LogoMark = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={cx("size-8 shrink-0", className)}>
        <rect width="32" height="32" rx="8" fill="#FF6A00" />
        <path fill="#FFFFFF" fillRule="evenodd" d="M8.5 7H16a9 9 0 0 1 0 18H8.5Zm7.5 5.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
    </svg>
);

/** Isotipo + palabra "Dorfic". */
export const Logo = ({ className, markClassName }: { className?: string; markClassName?: string }) => (
    <span className={cx("inline-flex items-center gap-2", className)}>
        <LogoMark className={markClassName} />
        <span className="text-lg font-semibold tracking-tight text-primary">Dorfic</span>
    </span>
);

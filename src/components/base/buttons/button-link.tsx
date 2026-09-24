import type { FC, ReactNode } from "react";
import { Link, type LinkProps } from "react-router";
import { cx } from "@/utils/cx";
import { styles } from "./button";

interface ButtonLinkProps extends Omit<LinkProps, "color"> {
    size?: keyof typeof styles.sizes;
    color?: "primary" | "secondary" | "tertiary";
    iconTrailing?: FC<{ className?: string }>;
    children: ReactNode;
}

/**
 * Enlace con el mismo estilo que el Button de Untitled UI, pero usando el <Link> de React Router
 * (sin React Aria), para que las páginas de contenido carguen menos JavaScript.
 */
export const ButtonLink = ({ size = "md", color = "primary", iconTrailing: IconTrailing, className, children, ...props }: ButtonLinkProps) => (
    <Link
        {...props}
        className={cx(
            styles.common.root,
            styles.sizes[size].root,
            styles.colors[color].root,
            "motion-safe:active:scale-[0.97]",
            typeof className === "string" ? className : undefined,
        )}
    >
        <span data-text className="px-0.5">
            {children}
        </span>
        {IconTrailing && <IconTrailing data-icon="trailing" className={styles.common.icon} />}
    </Link>
);

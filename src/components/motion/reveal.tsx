import { type ReactNode, useEffect, useLayoutEffect } from "react";
import { inView } from "motion";
import { useAnimate } from "motion/react-mini";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Aparece con fade + desplazamiento al entrar en pantalla (una sola vez), usando
 * `inView` + `animate` de Motion (versión mini, basada en WAAPI).
 *
 * - El HTML prerenderizado SIEMPRE es visible: solo se ocultan (antes del primer pintado)
 *   los elementos que están fuera de la pantalla al hidratar, así no hay parpadeo ni CLS.
 * - No provoca re-renders de React: se anima el DOM directamente (solo opacity y transform).
 */
export const Reveal = ({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) => {
    const [scope, animate] = useAnimate<HTMLDivElement>();

    useIsomorphicLayoutEffect(() => {
        const el = scope.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (el.getBoundingClientRect().top <= window.innerHeight) return;

        el.style.opacity = "0";
        el.style.transform = "translateY(16px)";
        const stop = inView(
            el,
            () => {
                animate(el, { opacity: 1, transform: "translateY(0px)" }, { duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] });
                stop();
            },
            { margin: "0px 0px -40px 0px" },
        );
        return () => {
            stop();
            el.style.opacity = "";
            el.style.transform = "";
        };
    }, []);

    return (
        <div ref={scope} className={className}>
            {children}
        </div>
    );
};

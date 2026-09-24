import { type ReactNode, useEffect, useRef } from "react";
import { m } from "motion/react";
import { useLocation } from "react-router";

/**
 * Fade + ligero desplazamiento hacia arriba al cambiar de ruta.
 * En la primera carga NO se anima (initial={false}) para que el contenido prerenderizado
 * se vea completo desde el primer pintado, sin afectar LCP ni CLS.
 */
export const PageTransition = ({ children }: { children: ReactNode }) => {
    const { pathname } = useLocation();
    const hasNavigated = useRef(false);
    const firstPath = useRef(pathname);

    useEffect(() => {
        if (pathname !== firstPath.current) hasNavigated.current = true;
    }, [pathname]);

    const animateIn = hasNavigated.current || pathname !== firstPath.current;

    return (
        <m.div
            key={pathname}
            initial={animateIn ? { opacity: 0, y: 8 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </m.div>
    );
};

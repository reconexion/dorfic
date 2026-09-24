import { type ReactNode, startTransition, useEffect, useState } from "react";
import { type FeatureBundle, LazyMotion, MotionConfig } from "motion/react";

/** Mientras cargan las features, los componentes `m` se renderizan estáticos (sin animar). */
const pending = () => new Promise<FeatureBundle>(() => {});

/**
 * LazyMotion + componentes `m`: el bundle inicial no incluye el motor de animación.
 * Las features (domMax) se cargan después de hidratar y se aplican dentro de una transición,
 * para que React nunca reemplace contenido prerenderizado por un fallback de <Suspense>.
 * reducedMotion="user": si el sistema pide "reducir movimiento", Motion desactiva transformaciones.
 */
export const MotionProvider = ({ children }: { children: ReactNode }) => {
    const [features, setFeatures] = useState<FeatureBundle | (() => Promise<FeatureBundle>)>(() => pending);

    useEffect(() => {
        let alive = true;
        import("./motion-features").then((mod) => alive && startTransition(() => setFeatures(mod.default)));
        return () => {
            alive = false;
        };
    }, []);

    return (
        <LazyMotion features={features} strict>
            <MotionConfig reducedMotion="user" transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
                {children}
            </MotionConfig>
        </LazyMotion>
    );
};

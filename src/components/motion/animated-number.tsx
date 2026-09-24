import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/** Contador que sube de 0 al valor final (easeOut). Con "reducir movimiento" muestra el valor directo. */
export const useCountUp = (target: number, duration = 700) => {
    const reduce = useReducedMotion();
    const [value, setValue] = useState(reduce ? target : 0);

    useEffect(() => {
        if (reduce) {
            setValue(target);
            return;
        }
        let frame = 0;
        const start = performance.now();
        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            setValue(target * (1 - Math.pow(1 - t, 3)));
            if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [target, duration, reduce]);

    return value;
};

export const AnimatedNumber = ({ value, format }: { value: number; format: (n: number) => string }) => {
    const current = useCountUp(value);
    return <span className="tabular-nums">{format(current)}</span>;
};

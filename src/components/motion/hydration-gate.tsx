import { type ReactNode, Suspense, use } from "react";

let open = typeof window === "undefined";
let gate: Promise<void> | null = null;

/** Se llama cuando la app ya se hidrató: a partir de ahí el gate nunca suspende. */
export const openHydrationGate = () => {
    open = true;
};

const Gate = ({ children }: { children: ReactNode }) => {
    if (!open) {
        // Solo durante la hidratación inicial: suspendemos un instante para que React hidrate
        // este bloque en una tarea aparte (el HTML prerenderizado sigue visible mientras tanto).
        gate ??= new Promise<void>((resolve) => setTimeout(resolve, 0));
        use(gate);
    }
    return children;
};

/** Divide la hidratación de un bloque pesado (p. ej. controles de React Aria) para reducir el TBT. */
export const DeferHydration = ({ children }: { children: ReactNode }) => (
    <Suspense fallback={null}>
        <Gate>{children}</Gate>
    </Suspense>
);

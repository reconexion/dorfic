import { m } from "motion/react";
import { Label as AriaLabel, Radio as AriaRadio, RadioGroup as AriaRadioGroup } from "react-aria-components";
import { cx } from "@/utils/cx";

export const QUICK_KB = [20, 50, 100, 200, 500] as const;

/** Botones rápidos de tamaño en KB con indicador deslizante (layoutId). */
export const KbChips = ({ value, onChange, label }: { value: number; onChange: (kb: number) => void; label: string }) => (
    <AriaRadioGroup value={String(value)} onChange={(v) => onChange(Number(v))} orientation="horizontal" className="flex flex-col gap-1.5">
        <AriaLabel className="text-sm font-medium text-secondary">{label}</AriaLabel>
        <div className="grid grid-cols-5 gap-1 rounded-xl bg-brand-50 p-1 ring-1 ring-brand-200 ring-inset">
            {QUICK_KB.map((kb) => (
                <AriaRadio
                    key={kb}
                    value={String(kb)}
                    className={({ isFocusVisible, isSelected }) =>
                        cx(
                            "relative flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 text-sm font-semibold text-brand-secondary transition-colors duration-150 hover:bg-brand-100 motion-safe:active:scale-[0.97]",
                            isSelected && "text-white hover:bg-transparent",
                            isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                        )
                    }
                >
                    {({ isSelected }) => (
                        <>
                            {isSelected && (
                                <m.span
                                    layoutId="kb-chip"
                                    aria-hidden
                                    className="absolute inset-0 rounded-lg bg-brand-solid shadow-[0_6px_16px_-6px_rgb(255_106_0/0.8)]"
                                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                                />
                            )}
                            <span className="relative whitespace-nowrap">{kb} KB</span>
                        </>
                    )}
                </AriaRadio>
            ))}
        </div>
    </AriaRadioGroup>
);

import { Slider } from "@/components/base/slider/slider";

/** Slider de calidad (10–100 %) de Untitled UI con el valor visible. */
export const QualitySlider = ({ value, onChange, label, hint }: { value: number; onChange: (v: number) => void; label: string; hint?: string }) => (
    <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-secondary">{label}</span>
            <span className="text-sm font-semibold text-brand-secondary tabular-nums">{Math.round(value * 100)}%</span>
        </div>
        <Slider
            value={Math.round(value * 100)}
            minValue={10}
            maxValue={100}
            step={1}
            onChange={(v) => onChange((Array.isArray(v) ? v[0] : v) / 100)}
            label={label}
            formatOptions={{ style: "unit", unit: "percent", maximumFractionDigits: 0 }}
            labelFormatter={(v) => `${v}%`}
        />
        {hint && <p className="text-sm text-tertiary">{hint}</p>}
    </div>
);

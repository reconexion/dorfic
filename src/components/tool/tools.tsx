import { useCallback, useState } from "react";
import { Input } from "@/components/base/input/input";
import { NativeSelect } from "@/components/base/select/select-native";
import { Toggle } from "@/components/base/toggle/toggle";
import type { ToolSlug } from "@/config/paths";
import { TOOLS, type ToolDefinition } from "@/config/tools";
import { fmt, useUi } from "@/i18n";
import { outputName } from "@/lib/image/formats";
import type { ImageJob, OutputFormatChoice, OutputMime, ProcessResult } from "@/lib/image/types";
import { ImageTool } from "./image-tool";
import { KbChips, QUICK_KB } from "./kb-chips";
import { QualitySlider } from "./quality-slider";
import { SegmentedTabs } from "./segmented-tabs";

const mimeOf = (blob: Blob) => (blob.type || "image/jpeg") as OutputMime;

/* ----------------------------- Convertir ----------------------------- */

const ConvertTool = ({ def }: { def: Extract<ToolDefinition, { type: "convert" }> }) => {
    const ui = useUi();
    const [quality, setQuality] = useState(def.defaultQuality);
    const isPng = def.to === "image/png";
    const job: ImageJob = { kind: "convert", to: def.to, quality };
    const nameFor = useCallback((file: File) => outputName(file.name, def.to), [def.to]);

    return (
        <ImageTool
            kinds={def.from}
            job={job}
            nameFor={nameFor}
            options={
                isPng ? (
                    <p className="text-sm text-tertiary">{ui.options.pngNote}</p>
                ) : (
                    <QualitySlider
                        value={quality}
                        onChange={setQuality}
                        label={ui.options.quality}
                        hint={def.from.includes("png") ? `${ui.options.qualityHint} ${ui.options.backgroundNote}` : ui.options.qualityHint}
                    />
                )
            }
        />
    );
};

/* ----------------------------- Comprimir ----------------------------- */

const CompressTool = ({ def }: { def: Extract<ToolDefinition, { type: "compress" }> }) => {
    const ui = useUi();
    const [mode, setMode] = useState<"target" | "quality">("target");
    const [targetKB, setTargetKB] = useState(def.presetKB ?? 100);
    const [customText, setCustomText] = useState("");
    const [quality, setQuality] = useState(0.75);
    const [format, setFormat] = useState<OutputFormatChoice>(def.defaultFormat ?? "auto");
    const [expanded, setExpanded] = useState(false);

    const job: ImageJob = mode === "target" ? { kind: "compress-target", targetKB, format } : { kind: "compress-quality", quality, format };

    const nameFor = useCallback(
        (file: File, result: ProcessResult) => outputName(file.name, mimeOf(result.blob), result.unchanged ? "" : ui.files.suffixCompressed),
        [ui.files.suffixCompressed],
    );

    const formatSelect = (
        <NativeSelect
            label={ui.options.format}
            size="md"
            value={format}
            onChange={(e) => setFormat(e.target.value as OutputFormatChoice)}
            options={[
                { value: "auto", label: ui.options.formatAuto },
                { value: "original", label: ui.options.formatOriginal },
                { value: "image/jpeg", label: "JPG" },
                { value: "image/webp", label: "WebP" },
                { value: "image/png", label: "PNG" },
            ]}
        />
    );

    const formatRow = (note?: string) => (
        <div className="grid gap-3 md:grid-cols-[18rem_1fr] md:items-end">
            {formatSelect}
            <p className="text-sm text-tertiary md:pb-2.5">{[note, format === "auto" ? ui.options.formatAutoHint : null].filter(Boolean).join(" ")}</p>
        </div>
    );

    const targetPanel = (
        <div className="flex flex-col gap-4">
            <div className="grid gap-4 md:grid-cols-[1fr_10rem] md:items-end">
                <KbChips
                    label={ui.options.targetKb}
                    value={targetKB}
                    onChange={(kb) => {
                        setTargetKB(kb);
                        setCustomText("");
                    }}
                />
                <Input
                    label={ui.options.customKb}
                    type="number"
                    inputMode="numeric"
                    placeholder={QUICK_KB.includes(targetKB as never) ? ui.options.customPlaceholder : String(targetKB)}
                    value={customText}
                    onChange={(v) => {
                        setCustomText(v);
                        const n = Math.round(Number(v));
                        if (n >= 5 && n <= 20000) setTargetKB(n);
                    }}
                />
            </div>
            {formatRow(fmt(ui.options.targetHint, { kb: targetKB }))}
        </div>
    );

    const qualityPanel = (
        <div className="flex flex-col gap-4">
            <QualitySlider value={quality} onChange={setQuality} label={ui.options.quality} hint={ui.options.qualityHint} />
            {formatRow()}
        </div>
    );

    return (
        <ImageTool
            kinds={def.from}
            job={job}
            nameFor={nameFor}
            options={
                def.presetKB ? (
                    expanded ? (
                        targetPanel
                    ) : (
                        // Página con tamaño ya definido: una sola línea, sin distraer.
                        <div className="flex items-center justify-between gap-3">
                            <p className="text-sm text-secondary">
                                {ui.options.presetSummary}{" "}
                                <span className="rounded-full bg-brand-solid px-2.5 py-1 text-sm font-bold text-white">
                                    {targetKB} {ui.units.kb}
                                </span>
                            </p>
                            <button
                                type="button"
                                onClick={() => setExpanded(true)}
                                className="shrink-0 rounded-lg px-2.5 py-1.5 text-sm font-semibold text-brand-secondary transition hover:bg-brand-50"
                            >
                                {ui.options.change}
                            </button>
                        </div>
                    )
                ) : (
                    <SegmentedTabs
                        id="compress-mode"
                        label={ui.options.mode}
                        value={mode}
                        onChange={setMode}
                        items={[
                            { id: "target", label: ui.options.targetSize, content: targetPanel },
                            { id: "quality", label: ui.options.byQuality, content: qualityPanel },
                        ]}
                    />
                )
            }
        />
    );
};

/* ---------------------------- Redimensionar --------------------------- */

const ResizeTool = ({ def }: { def: Extract<ToolDefinition, { type: "resize" }> }) => {
    const ui = useUi();
    const [mode, setMode] = useState<"pixels" | "percent">("pixels");
    const [width, setWidth] = useState("1080");
    const [height, setHeight] = useState("");
    const [keepAspect, setKeepAspect] = useState(true);
    const [percent, setPercent] = useState(0.5);

    const w = Math.round(Number(width)) || null;
    const h = Math.round(Number(height)) || null;
    const valid = (n: number | null) => n === null || (n >= 1 && n <= 16384);

    let job: ImageJob | null;
    if (mode === "percent") job = { kind: "resize-percent", percent: Math.round(percent * 100) };
    else job = (w || h) && valid(w) && valid(h) ? { kind: "resize-pixels", width: w, height: h, keepAspect } : null;

    const nameFor = useCallback((file: File, result: ProcessResult) => outputName(file.name, mimeOf(result.blob), `-${result.width}x${result.height}`), []);

    return (
        <ImageTool
            kinds={def.from}
            job={job}
            jobHint={ui.files.waitingSettings}
            nameFor={nameFor}
            options={
                <SegmentedTabs
                    id="resize-mode"
                    label={ui.options.mode}
                    value={mode}
                    onChange={setMode}
                    items={[
                        {
                            id: "pixels",
                            label: ui.options.byPixels,
                            content: (
                                <div className="grid grid-cols-2 gap-3 md:grid-cols-[10rem_10rem_1fr] md:items-end">
                                    <Input
                                        label={ui.options.width}
                                        type="number"
                                        inputMode="numeric"
                                        value={width}
                                        onChange={setWidth}
                                        placeholder={ui.options.auto}
                                        isInvalid={!valid(w)}
                                    />
                                    <Input
                                        label={ui.options.height}
                                        type="number"
                                        inputMode="numeric"
                                        value={height}
                                        onChange={setHeight}
                                        placeholder={ui.options.auto}
                                        isInvalid={!valid(h)}
                                    />
                                    <Toggle
                                        className="col-span-2 md:col-span-1 md:mb-2 md:ml-2"
                                        label={ui.options.keepAspect}
                                        hint={ui.options.keepAspectHint}
                                        isSelected={keepAspect}
                                        onChange={setKeepAspect}
                                    />
                                </div>
                            ),
                        },
                        {
                            id: "percent",
                            label: ui.options.byPercent,
                            content: <QualitySlider value={percent} onChange={setPercent} label={ui.options.percent} />,
                        },
                    ]}
                />
            }
        />
    );
};

/** Elige la herramienta correcta según la ruta. */
export const ToolRunner = ({ slug }: { slug: ToolSlug }) => {
    const def = TOOLS[slug];
    switch (def.type) {
        case "convert":
            return <ConvertTool def={def} />;
        case "compress":
            return <CompressTool def={def} />;
        case "resize":
            return <ResizeTool def={def} />;
    }
};

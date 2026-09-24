import { useState } from "react";
import { ArrowRight, RefreshCcw01, Stars02 } from "@untitledui/icons";
import { AnimatePresence, m } from "motion/react";
import { useNavigate } from "react-router";
import { Dropzone } from "@/components/tool/dropzone";
import type { ToolSlug } from "@/config/paths";
import { TOOLS, acceptAttr, formatsLabel } from "@/config/tools";
import { fmt, useToolCards } from "@/i18n";
import { quickStartUi } from "@/i18n/es/search";
import { formatBytes } from "@/lib/download";
import { type InputKind, detectKind } from "@/lib/image/formats";
import { setPendingFiles } from "@/lib/handoff";
import { cx } from "@/utils/cx";

const ALL_KINDS: InputKind[] = ["jpeg", "png", "webp", "heic"];

/** Sugiere herramientas según lo que el usuario soltó (tipo y peso). */
const suggest = (kinds: Set<InputKind>, totalBytes: number, count: number): ToolSlug[] => {
    const out: ToolSlug[] = [];
    const add = (...slugs: ToolSlug[]) => slugs.forEach((s) => !out.includes(s) && out.push(s));
    if (kinds.has("heic")) add("heic-a-jpg");
    const avg = totalBytes / Math.max(1, count);
    if (kinds.has("png")) add("png-a-jpg");
    if (kinds.has("webp")) add("webp-a-jpg");
    if (kinds.has("jpeg") || kinds.has("png") || kinds.has("webp")) {
        add(avg > 300 * 1024 ? "comprimir-imagen-a-200kb" : "comprimir-imagen-a-50kb", "comprimir-imagen", "redimensionar-imagen");
        if (avg > 150 * 1024) add("comprimir-imagen-a-100kb");
    }
    if (kinds.has("jpeg")) add("jpg-a-webp", "jpg-a-png");
    return out.slice(0, 6);
};

/**
 * "Inicio rápido": el usuario suelta su imagen en la portada, detectamos el formato y el peso,
 * y le mostramos las acciones más útiles. Al elegir, la herramienta abre con la imagen ya cargada.
 */
export const QuickStart = () => {
    const cards = useToolCards();
    const navigate = useNavigate();
    const [files, setFiles] = useState<{ file: File; kind: InputKind }[]>([]);
    const [options, setOptions] = useState<ToolSlug[]>([]);
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState(false);
    const [kindsFound, setKindsFound] = useState<InputKind[]>([]);

    const onFiles = async (incoming: File[]) => {
        const detected = await Promise.all(incoming.map(async (f) => ({ f, kind: await detectKind(f).catch(() => null) })));
        const valid = detected.filter((d) => d.kind);
        if (!valid.length) {
            setError(true);
            return;
        }
        setError(false);
        const kinds = new Set(valid.map((d) => d.kind!) as InputKind[]);
        const total = valid.reduce((a, d) => a + d.f.size, 0);
        setFiles(valid.map((d) => ({ file: d.f, kind: d.kind! })));
        setKindsFound([...kinds]);
        setOptions(suggest(kinds, total, valid.length));
        const firstPreviewable = valid.find((d) => d.kind !== "heic");
        if (preview) URL.revokeObjectURL(preview);
        setPreview(firstPreviewable ? URL.createObjectURL(firstPreviewable.f) : null);
    };

    const choose = (slug: ToolSlug) => {
        // Solo pasamos las imágenes que esa herramienta acepta.
        setPendingFiles(files.filter((f) => TOOLS[slug].from.includes(f.kind)).map((f) => f.file));
        navigate(`/${slug}`);
    };

    const reset = () => {
        setFiles([]);
        setOptions([]);
        if (preview) URL.revokeObjectURL(preview);
        setPreview(null);
    };

    const totalSize = files.reduce((a, f) => a + f.file.size, 0);

    return (
        <div className="mx-auto w-full max-w-3xl">
            <AnimatePresence mode="wait" initial={false}>
                {files.length === 0 ? (
                    <m.div key="drop" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
                        <p className="mb-3 text-center text-sm font-semibold text-secondary">{quickStartUi.title}</p>
                        <Dropzone accept={acceptAttr(ALL_KINDS)} formats={formatsLabel(ALL_KINDS)} onFiles={(f) => void onFiles(f)} />
                        {error && (
                            <m.p role="alert" initial={{ opacity: 0 }} animate={{ opacity: 1, x: [0, -6, 6, -3, 3, 0] }} className="mt-3 text-center text-sm text-error-primary">
                                {quickStartUi.unsupported}
                            </m.p>
                        )}
                    </m.div>
                ) : (
                    <m.div
                        key="choose"
                        initial={{ opacity: 0, scale: 0.97, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="rounded-3xl bg-primary p-4 text-left shadow-xl ring-1 ring-brand-200 md:p-6"
                    >
                        <div className="flex items-center gap-4">
                            <m.div
                                initial={{ rotate: -8, scale: 0.8 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 14 }}
                                className="size-16 shrink-0 overflow-hidden rounded-xl bg-brand-primary ring-2 ring-brand-300"
                            >
                                {preview && <img src={preview} alt="" className="size-full object-cover" />}
                            </m.div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate font-semibold text-primary">{files.length === 1 ? files[0].file.name : fmt(quickStartUi.detected, { n: files.length, size: formatBytes(totalSize) })}</p>
                                <p className="text-sm text-tertiary">
                                    {formatBytes(totalSize)} · {formatsLabel(kindsFound)}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={reset}
                                className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-semibold text-tertiary transition hover:bg-primary_hover hover:text-secondary"
                            >
                                <RefreshCcw01 aria-hidden className="size-4" />
                                <span className="hidden sm:inline">{quickStartUi.change}</span>
                            </button>
                        </div>

                        <p className="mt-5 mb-3 text-sm font-semibold text-secondary">{quickStartUi.question}</p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                            {options.map((slug, i) => {
                                const Icon = TOOLS[slug].icon;
                                const first = i === 0;
                                return (
                                    <m.li key={slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i, duration: 0.25 }}>
                                        <button
                                            type="button"
                                            onClick={() => choose(slug)}
                                            className={cx(
                                                "group flex w-full items-center gap-3 rounded-2xl p-3 text-left transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-[0.98]",
                                                first
                                                    ? "btn-shine relative bg-brand-solid text-white shadow-[0_10px_24px_-10px_rgb(255_106_0/0.8)] hover:bg-brand-solid_hover"
                                                    : "bg-primary ring-1 ring-secondary hover:shadow-md hover:ring-brand-300",
                                            )}
                                        >
                                            <span
                                                className={cx(
                                                    "flex size-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-6",
                                                    first ? "bg-white/20" : "bg-brand-primary text-fg-brand-primary",
                                                )}
                                            >
                                                <Icon className="size-5" />
                                            </span>
                                            <span className="flex min-w-0 flex-col">
                                                <span className="font-semibold">{cards[slug].name}</span>
                                                {first && (
                                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white/90">
                                                        <Stars02 aria-hidden className="size-3.5" />
                                                        {quickStartUi.recommended}
                                                    </span>
                                                )}
                                            </span>
                                            <ArrowRight aria-hidden className="ml-auto size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                                        </button>
                                    </m.li>
                                );
                            })}
                        </ul>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
};

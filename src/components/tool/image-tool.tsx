import { type ReactNode, useEffect, useState } from "react";
import { Download01, Lock01, Plus, RefreshCcw01, Trash01 } from "@untitledui/icons";
import { AnimatePresence, m } from "motion/react";
import { DownloadAdGate } from "@/components/ads/download-ad-gate";
import { Button } from "@/components/base/buttons/button";
import { AnimatedProgress } from "@/components/motion/animated-progress";
import { DeferHydration } from "@/components/motion/hydration-gate";
import { acceptAttr, formatsLabel } from "@/config/tools";
import { fmt, useUi } from "@/i18n";
import { downloadBlob, downloadZip } from "@/lib/download";
import { takePendingFiles } from "@/lib/handoff";
import type { InputKind } from "@/lib/image/formats";
import type { ImageJob, ProcessResult } from "@/lib/image/types";
import { Dropzone } from "./dropzone";
import { FileCard } from "./file-card";
import { useImageQueue } from "./use-image-queue";

export interface ImageToolProps {
    kinds: InputKind[];
    /** Trabajo a aplicar con los ajustes actuales (null = faltan datos). */
    job: ImageJob | null;
    nameFor: (file: File, result: ProcessResult) => string;
    /** Panel de ajustes propio de cada herramienta. */
    options?: ReactNode;
    /** Aviso cuando job es null. */
    jobHint?: string;
}

/**
 * Componente base de TODAS las herramientas: zona de carga, lista de archivos,
 * progreso por archivo y descargas (individual o ZIP). Cada herramienta solo aporta
 * sus ajustes (options) y el trabajo a ejecutar (job).
 */
export const ImageTool = ({ kinds, job, nameFor, options, jobHint }: ImageToolProps) => {
    const ui = useUi();
    const accept = acceptAttr(kinds);
    const formats = formatsLabel(kinds);
    const { items, addFiles, remove, clear, reprocess, stats, limitHit } = useImageQueue({ kinds, job, nameFor });
    const [zipping, setZipping] = useState(false);
    const [zipError, setZipError] = useState(false);
    // Descarga en espera mientras se muestra el anuncio. Tras verlo una vez, las siguientes descargas de esta visita son directas.
    const [pendingDownload, setPendingDownload] = useState<(() => void) | null>(null);
    const [adSeen, setAdSeen] = useState(false);

    const withAd = (run: () => void) => {
        if (adSeen) run();
        else setPendingDownload(() => run);
    };

    const continueDownload = () => {
        setAdSeen(true);
        pendingDownload?.();
        setPendingDownload(null);
    };

    // Imágenes que el usuario soltó en el inicio antes de elegir esta herramienta.
    useEffect(() => {
        const pending = takePendingFiles();
        if (pending.length) void addFiles(pending);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Pegar imágenes desde el portapapeles (Ctrl/Cmd + V).
    useEffect(() => {
        const onPaste = (e: ClipboardEvent) => {
            const target = e.target as HTMLElement | null;
            if (target?.closest("input, textarea, [contenteditable=true]")) return;
            const files = Array.from(e.clipboardData?.files ?? []);
            if (files.length) {
                e.preventDefault();
                void addFiles(
                    files.map((f, i) =>
                        f.name && f.name !== "image.png"
                            ? f
                            : new File([f], `pegada-${Date.now()}-${i + 1}.${f.type.split("/")[1] || "png"}`, { type: f.type }),
                    ),
                );
            }
        };
        window.addEventListener("paste", onPaste);
        return () => window.removeEventListener("paste", onPaste);
    }, [addFiles]);

    const allDone = stats.total > 0 && !stats.busy && stats.done > 0;

    const onZip = async () => {
        setZipping(true);
        setZipError(false);
        try {
            await downloadZip(
                stats.doneItems.map((i) => ({ name: i.result!.name, blob: i.result!.blob })),
                ui.files.zipName,
            );
        } catch {
            setZipError(true);
        } finally {
            setZipping(false);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            {/* En celular la zona de carga va primero para que se vea sin hacer scroll. */}
            {options && (
                <div className="order-3 rounded-2xl border-t-4 border-brand-500 bg-primary p-4 shadow-md ring-1 ring-brand-100 md:order-1 md:p-5">
                    <DeferHydration>{options}</DeferHydration>
                </div>
            )}

            <div className="order-1 md:order-2">
                <Dropzone accept={accept} formats={formats} onFiles={(f) => void addFiles(f)} compact={items.length > 0} />
            </div>

            <p className="order-2 flex items-center justify-center gap-2 text-sm font-medium text-secondary md:order-3">
                <Lock01 aria-hidden className="size-4 text-fg-brand-primary" />
                {ui.privacy.badge}
            </p>

            {limitHit && (
                <p role="alert" className="order-4 text-center text-sm text-warning-primary">
                    {fmt(ui.errors.tooMany, { max: 50 })}
                </p>
            )}

            {items.length > 0 && (
                <section aria-label={ui.files.listLabel} className="order-5 flex flex-col gap-3">
                    {/* Resumen del lote */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-3 text-sm">
                            <span className="font-medium text-secondary" aria-live="polite">
                                {fmt(ui.files.progress, { done: stats.done, total: stats.total })}
                                {stats.failed > 0 && <span className="text-error-primary"> · {fmt(ui.files.withErrors, { n: stats.failed })}</span>}
                            </span>
                            <div className="flex gap-1">
                                <Button
                                    size="sm"
                                    color="tertiary"
                                    iconLeading={Trash01}
                                    onClick={() => {
                                        setPendingDownload(null);
                                        clear();
                                    }}
                                >
                                    {ui.files.clear}
                                </Button>
                            </div>
                        </div>
                        {stats.total > 1 && (
                            <AnimatedProgress
                                value={stats.total ? items.filter((i) => i.kind).reduce((a, i) => a + i.progress, 0) / stats.total : 0}
                                label={fmt(ui.files.progress, { done: stats.done, total: stats.total })}
                            />
                        )}
                    </div>

                    <AnimatePresence>
                        {stats.stale && !stats.busy && (
                            <m.div
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                className="flex flex-col items-start gap-2 rounded-xl border border-brand bg-brand-primary p-3 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <p className="text-sm text-secondary">{job ? ui.files.reprocessHint : jobHint}</p>
                                {job && (
                                    <Button size="sm" iconLeading={RefreshCcw01} onClick={reprocess}>
                                        {ui.files.reprocess}
                                    </Button>
                                )}
                            </m.div>
                        )}
                    </AnimatePresence>

                    <ul className="flex flex-col gap-2">
                        <AnimatePresence initial={false} mode="popLayout">
                            {items.map((item) => (
                                <FileCard key={item.id} item={item} formats={formats} onRemove={remove} onDownload={withAd} />
                            ))}
                        </AnimatePresence>
                    </ul>

                    {pendingDownload && <DownloadAdGate onContinue={continueDownload} onCancel={() => setPendingDownload(null)} />}

                    {/* Acciones finales */}
                    <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
                        <AddMore accept={accept} label={ui.files.addMore} onFiles={(f) => void addFiles(f)} />
                        <AnimatePresence>
                            {allDone && !pendingDownload && (
                                <m.div
                                    key="download-all"
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 520, damping: 24 }}
                                    className="relative"
                                >
                                    {/* Brillo naranja sutil (solo opacidad) */}
                                    <span
                                        aria-hidden
                                        className="pointer-events-none absolute -inset-2 rounded-xl bg-brand-solid/25 blur-md motion-safe:animate-[dorfic-shimmer_1.4s_ease-out_1_both] motion-reduce:hidden"
                                    />
                                    {stats.done > 1 ? (
                                        <Button
                                            size="lg"
                                            iconLeading={Download01}
                                            isLoading={zipping}
                                            showTextWhileLoading
                                            onClick={() => withAd(() => void onZip())}
                                            className="relative w-full sm:w-auto"
                                        >
                                            {zipping ? ui.files.preparingZip : ui.files.downloadAll}
                                        </Button>
                                    ) : (
                                        <Button
                                            size="lg"
                                            iconLeading={Download01}
                                            className="relative w-full sm:w-auto"
                                            onClick={() => {
                                                const r = stats.doneItems[0].result!;
                                                withAd(() => downloadBlob(r.blob, r.name));
                                            }}
                                        >
                                            {ui.files.downloadOne}
                                        </Button>
                                    )}
                                </m.div>
                            )}
                        </AnimatePresence>
                    </div>
                    {zipError && (
                        <p role="alert" className="text-right text-sm text-error-primary">
                            {ui.errors.zip}
                        </p>
                    )}
                </section>
            )}
        </div>
    );
};

/** Botón secundario "Agregar más" con su propio input de archivos. */
const AddMore = ({ accept, label, onFiles }: { accept: string; label: string; onFiles: (files: File[]) => void }) => (
    <label className="inline-flex cursor-pointer items-center justify-center gap-1 rounded-lg px-3.5 py-2.5 text-sm font-semibold text-tertiary ring-1 ring-primary transition duration-100 ease-linear ring-inset focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-focus-ring hover:bg-primary_hover hover:text-secondary motion-safe:active:scale-[0.97]">
        <Plus aria-hidden className="size-5" />
        {label}
        <input
            type="file"
            multiple
            accept={accept}
            className="sr-only"
            onChange={(e) => {
                onFiles(Array.from(e.target.files ?? []));
                e.target.value = "";
            }}
        />
    </label>
);

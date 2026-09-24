import { AlertCircle, Download01, Image01, X } from "@untitledui/icons";
import { m } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { AnimatedProgress } from "@/components/motion/animated-progress";
import { CheckDraw } from "@/components/motion/check-draw";
import { MAX_FILE_SIZE_MB } from "@/config/site";
import { fmt, useUi } from "@/i18n";
import { downloadBlob, formatBytes } from "@/lib/download";
import { cx } from "@/utils/cx";
import type { QueueItem } from "./use-image-queue";

interface FileCardProps {
    item: QueueItem;
    formats: string;
    onRemove: (id: string) => void;
    /** Entrega la descarga (puede pasar antes por el anuncio). */
    onDownload: (run: () => void) => void;
}

const SHAKE = { x: [0, -7, 7, -5, 5, -2, 0] };

export const FileCard = ({ item, formats, onRemove, onDownload }: FileCardProps) => {
    const ui = useUi();
    const { status, result, file } = item;
    const preview = result?.url ?? item.previewUrl;
    const saved = result && !result.unchanged ? file.size - result.blob.size : 0;
    const percent = result ? Math.round((saved / file.size) * 100) : 0;

    const errorText =
        item.errorCode &&
        fmt(ui.errors[item.errorCode] ?? ui.errors.unknown, {
            formats,
            max: MAX_FILE_SIZE_MB,
        });

    return (
        <m.li
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, ...(status === "error" ? SHAKE : { x: 0 }) }}
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
            transition={{
                opacity: { duration: 0.25, delay: item.batchIndex * 0.05 },
                y: { duration: 0.3, delay: item.batchIndex * 0.05, ease: [0.22, 1, 0.36, 1] },
                x: { duration: 0.4 },
                layout: { type: "spring", stiffness: 500, damping: 40 },
            }}
            className={cx(
                "flex items-center gap-3 rounded-xl border bg-primary p-3 shadow-xs",
                status === "error" ? "border-error_subtle" : status === "done" ? "border-brand-200" : "border-secondary",
            )}
        >
            {/* Miniatura con tamaño fijo para evitar saltos */}
            <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-secondary">
                {preview ? (
                    <img src={preview} alt="" width={56} height={56} className="size-full object-cover" decoding="async" />
                ) : (
                    <div className="flex size-full items-center justify-center text-fg-quaternary">
                        <Image01 aria-hidden className="size-6" />
                    </div>
                )}
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="truncate text-sm font-medium text-primary" title={result?.name ?? file.name}>
                    {result?.name ?? file.name}
                </p>

                {status === "error" ? (
                    <p className="flex items-start gap-1.5 text-sm text-error-primary" role="alert">
                        <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
                        {errorText}
                    </p>
                ) : status === "done" && result ? (
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-tertiary">
                        <CheckDraw className="size-4.5" />
                        <span>
                            {formatBytes(file.size, ui)} → <span className="font-semibold text-primary">{formatBytes(result.blob.size, ui)}</span>
                        </span>
                        {result.unchanged ? (
                            <span className="text-xs text-quaternary">{ui.files.unchanged}</span>
                        ) : saved > 0 ? (
                            <span className="rounded-full bg-success-primary px-2 py-0.5 text-xs font-semibold text-success-primary">
                                <AnimatedNumber value={percent} format={(n) => fmt(ui.files.savedPercent, { percent: Math.round(n) })} />
                                <span className="sr-only">{fmt(ui.files.saved, { kb: formatBytes(saved, ui) })}</span>
                                <span aria-hidden className="ml-1 hidden font-medium sm:inline">
                                    · <AnimatedNumber value={saved} format={(n) => formatBytes(n, ui)} />
                                </span>
                            </span>
                        ) : (
                            <span className="text-xs text-quaternary">{fmt(ui.files.grew, { percent: Math.abs(percent) })}</span>
                        )}
                        <span className="text-xs text-quaternary">{fmt(ui.files.dimensions, { w: result.width, h: result.height })}</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <AnimatedProgress value={item.progress} label={fmt(ui.files.processing, {})} className="max-w-48" />
                        <span className="text-xs whitespace-nowrap text-tertiary">{status === "pending" ? ui.files.pending : ui.files.processing}</span>
                    </div>
                )}
            </div>

            <div className="flex shrink-0 items-center gap-1">
                {status === "done" && result && (
                    <Button
                        size="sm"
                        color="secondary"
                        iconLeading={Download01}
                        aria-label={fmt(ui.files.downloadFile, { name: result.name })}
                        onClick={() => onDownload(() => downloadBlob(result.blob, result.name))}
                    >
                        <span className="hidden sm:inline">{ui.files.download}</span>
                    </Button>
                )}
                <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    aria-label={fmt(ui.files.remove, { name: file.name })}
                    className="flex size-9 items-center justify-center rounded-lg text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-secondary focus-visible:outline-2 motion-safe:active:scale-[0.97]"
                >
                    <X className="size-5" />
                </button>
            </div>
        </m.li>
    );
};

import { useEffect, useId, useRef, useState } from "react";
import { Check, UploadCloud02 } from "@untitledui/icons";
import { AnimatePresence, m } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { MAX_FILE_SIZE_MB } from "@/config/site";
import { fmt, useUi } from "@/i18n";
import { cx } from "@/utils/cx";

interface DropzoneProps {
    accept: string;
    formats: string;
    onFiles: (files: File[]) => void;
    compact?: boolean;
}

/**
 * Zona de carga: arrastrar y soltar, seleccionar archivos (con el selector nativo del celular)
 * y pegar desde el portapapeles (el pegado se escucha en ImageTool).
 */
export const Dropzone = ({ accept, formats, onFiles, compact }: DropzoneProps) => {
    const ui = useUi();
    const inputId = useId();
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragging, setDragging] = useState(false);
    const [dropped, setDropped] = useState(0);
    const depth = useRef(0);

    // Si el usuario suelta una imagen fuera de la zona, evitamos que el navegador la abra.
    useEffect(() => {
        const prevent = (e: DragEvent) => {
            if (e.dataTransfer?.types.includes("Files")) e.preventDefault();
        };
        window.addEventListener("dragover", prevent);
        window.addEventListener("drop", prevent);
        return () => {
            window.removeEventListener("dragover", prevent);
            window.removeEventListener("drop", prevent);
        };
    }, []);

    useEffect(() => {
        if (!dropped) return;
        const t = setTimeout(() => setDropped(0), 900);
        return () => clearTimeout(t);
    }, [dropped]);

    const handle = (list: FileList | null | undefined) => {
        const files = Array.from(list ?? []);
        if (!files.length) return;
        setDropped(files.length);
        onFiles(files);
    };

    return (
        <m.div
            onDragEnter={(e) => {
                if (!e.dataTransfer.types.includes("Files")) return;
                depth.current += 1;
                setDragging(true);
            }}
            onDragOver={(e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = "copy";
            }}
            onDragLeave={() => {
                depth.current = Math.max(0, depth.current - 1);
                if (depth.current === 0) setDragging(false);
            }}
            onDrop={(e) => {
                e.preventDefault();
                depth.current = 0;
                setDragging(false);
                handle(e.dataTransfer.files);
            }}
            onClick={(e) => {
                // Toda la zona abre el selector (objetivo táctil grande en celular).
                if ((e.target as HTMLElement).closest("button, a, input, label")) return;
                inputRef.current?.click();
            }}
            animate={{ scale: dragging ? 1.02 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className={cx(
                "group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-4 text-center transition-colors duration-200",
                compact ? "gap-2 py-5" : "gap-3 py-8 md:py-12",
                dragging
                    ? "border-transparent bg-brand-primary"
                    : "border-brand-300 bg-gradient-to-b from-brand-25 to-primary hover:border-transparent hover:from-brand-50",
            )}
        >
            {/* Borde animado "de hormigas" al pasar el cursor o arrastrar */}
            <svg
                aria-hidden
                className={cx(
                    "pointer-events-none absolute inset-0 size-full overflow-visible transition-opacity duration-200",
                    dragging ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                )}
            >
                <rect width="100%" height="100%" rx="16" ry="16" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeDasharray="10 4" className="march" />
            </svg>
            <m.div
                aria-hidden
                animate={dragging ? { y: [0, -6, 0] } : { y: 0 }}
                transition={dragging ? { duration: 0.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
                className={cx(
                    "relative flex items-center justify-center rounded-2xl transition-colors duration-200",
                    compact ? "size-11" : "size-14",
                    dragging || dropped ? "bg-brand-solid text-white" : "bg-brand-100 text-fg-brand-primary group-hover:bg-brand-solid group-hover:text-white",
                )}
            >
                {!compact && !dragging && (
                    <span className="absolute inset-0 rounded-2xl bg-brand-300 opacity-40 motion-safe:animate-ping" style={{ animationDuration: "2.4s" }} />
                )}
                <AnimatePresence mode="wait" initial={false}>
                    {dropped ? (
                        <m.span
                            key="ok"
                            initial={{ scale: 0.4, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 22 }}
                        >
                            <Check className="relative size-7" />
                        </m.span>
                    ) : (
                        <m.span
                            key="up"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative"
                        >
                            <UploadCloud02 className={cx("size-7", !dragging && "idle-float")} />
                        </m.span>
                    )}
                </AnimatePresence>
            </m.div>

            <div className="flex flex-col items-center gap-1">
                <p className={cx("font-semibold text-primary", compact ? "text-sm" : "text-lg")}>{dragging ? ui.dropzone.titleDragging : ui.dropzone.title}</p>
            </div>

            <Button size={compact ? "md" : "lg"} color={compact ? "secondary" : "primary"} onClick={() => inputRef.current?.click()}>
                {ui.dropzone.select}
            </Button>

            <label htmlFor={inputId} className="sr-only">
                {ui.dropzone.inputLabel}
            </label>
            <input
                id={inputId}
                ref={inputRef}
                type="file"
                multiple
                accept={accept}
                className="sr-only"
                tabIndex={-1}
                onChange={(e) => {
                    handle(e.target.files);
                    e.target.value = "";
                }}
            />

            {!compact && (
                <p className="text-xs text-tertiary">
                    <span className="hidden pointer-fine:inline">{ui.dropzone.pasteHint} · </span>
                    {fmt(ui.dropzone.formats, { formats, max: MAX_FILE_SIZE_MB })}
                </p>
            )}

            <p className="sr-only" aria-live="polite">
                {dropped ? fmt(ui.dropzone.added, { n: dropped }) : ""}
            </p>
        </m.div>
    );
};

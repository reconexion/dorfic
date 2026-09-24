import type { InputKind } from "./formats";

export type OutputMime = "image/jpeg" | "image/png" | "image/webp";

/**
 * Formato de salida para compresión:
 * - "auto": igual que el original, salvo PNG sin transparencia, que pasa a JPG (mucho más eficiente en fotos).
 * - "original": siempre el mismo formato.
 */
export type OutputFormatChoice = "auto" | "original" | OutputMime;

export type ImageJob =
    | { kind: "convert"; to: OutputMime; quality: number }
    | { kind: "compress-target"; targetKB: number; format: OutputFormatChoice }
    | { kind: "compress-quality"; quality: number; format: OutputFormatChoice }
    | { kind: "resize-pixels"; width: number | null; height: number | null; keepAspect: boolean }
    | { kind: "resize-percent"; percent: number };

export type ImageErrorCode = "unsupported" | "too-large" | "decode" | "heic" | "memory" | "encode-unsupported" | "unknown";

export interface ProcessResult {
    blob: Blob;
    width: number;
    height: number;
    /** true cuando el archivo original ya cumplía y se devolvió sin cambios. */
    unchanged?: boolean;
}

export type WorkerRequest = { type: "process"; id: string; file: Blob; kind: InputKind; job: ImageJob };

export type WorkerResponse =
    | { type: "progress"; id: string; value: number }
    | { type: "done"; id: string; blob: Blob; width: number; height: number; unchanged?: boolean }
    | { type: "error"; id: string; code: ImageErrorCode; detail?: string };

export class ImageProcessError extends Error {
    code: ImageErrorCode;
    constructor(code: ImageErrorCode, detail?: string) {
        super(detail ?? code);
        this.code = code;
    }
}

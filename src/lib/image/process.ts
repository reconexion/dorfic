/**
 * Núcleo de procesamiento de imágenes. Funciona dentro de un Web Worker (OffscreenCanvas)
 * y, como respaldo, en el hilo principal (canvas del DOM) para navegadores viejos.
 * Nada sale del dispositivo: no hay peticiones de red.
 */
import { KIND_TO_MIME, type InputKind } from "./formats";
import { type ImageJob, ImageProcessError, type OutputFormatChoice, type OutputMime, type ProcessResult } from "./types";

type Progress = (value: number) => void;
type AnyCanvas = OffscreenCanvas | HTMLCanvasElement;
type Drawable = ImageBitmap | OffscreenCanvas | HTMLCanvasElement;

const isWorker = typeof document === "undefined" || typeof (globalThis as { WorkerGlobalScope?: unknown }).WorkerGlobalScope !== "undefined";
const hasOffscreen = typeof OffscreenCanvas !== "undefined";

/** Lado máximo que aceptamos decodificar (evita que el celular se quede sin memoria). */
const MAX_PIXELS = 100_000_000;

export const createCanvas = (width: number, height: number): AnyCanvas => {
    if (hasOffscreen) return new OffscreenCanvas(width, height);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
};

const get2d = (canvas: AnyCanvas) => {
    const ctx = canvas.getContext("2d") as OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D | null;
    if (!ctx) throw new ImageProcessError("memory");
    return ctx;
};

export const canvasToBlob = async (canvas: AnyCanvas, type: OutputMime, quality?: number): Promise<Blob> => {
    const blob =
        "convertToBlob" in canvas
            ? await canvas.convertToBlob({ type, quality })
            : await new Promise<Blob | null>((resolve) => (canvas as HTMLCanvasElement).toBlob(resolve, type, quality));
    if (!blob) throw new ImageProcessError("memory");
    // Safari antiguo no sabe codificar WebP y devuelve PNG en silencio.
    if (blob.type && blob.type !== type) throw new ImageProcessError("encode-unsupported", type);
    return blob;
};

const sizeOf = (source: Drawable) => ({ width: source.width, height: source.height });

/* ------------------------------------------------------------------ */
/* Decodificación                                                      */
/* ------------------------------------------------------------------ */

let heicCaptured: OffscreenCanvas | null = null;

/**
 * heic2any espera `window` y `document`. Dentro del worker le damos un "document" mínimo
 * cuyo canvas es un OffscreenCanvas; así capturamos la imagen decodificada sin volver a codificarla.
 */
const installHeicWorkerShim = () => {
    const scope = globalThis as unknown as Record<string, unknown>;
    if (scope.__dorficHeicShim) return;
    scope.__dorficHeicShim = true;
    scope.window = globalThis;
    scope.document = {
        title: "",
        createElement: () => {
            const canvas = new OffscreenCanvas(1, 1) as OffscreenCanvas & { toBlob: (cb: (b: Blob) => void) => void };
            canvas.toBlob = (cb) => {
                heicCaptured = canvas;
                cb(new Blob([], { type: "image/png" }));
            };
            return canvas;
        },
    };
};

const decodeHeic = async (file: Blob, onProgress: Progress): Promise<Drawable> => {
    // 1) Safari 17+ decodifica HEIC de forma nativa: es lo más rápido.
    try {
        return await createImageBitmap(file, { imageOrientation: "from-image" });
    } catch {
        /* seguimos con heic2any */
    }

    onProgress(0.15);
    try {
        if (isWorker) {
            if (!hasOffscreen) throw new ImageProcessError("heic");
            installHeicWorkerShim();
            const { default: heic2any } = await import("heic2any");
            heicCaptured = null;
            await heic2any({ blob: file, toType: "image/png" });
            const captured = heicCaptured as OffscreenCanvas | null;
            if (!captured) throw new ImageProcessError("heic");
            return captured;
        }
        const { default: heic2any } = await import("heic2any");
        const png = (await heic2any({ blob: file, toType: "image/png" })) as Blob;
        return await createImageBitmap(png);
    } catch (error) {
        if (error instanceof ImageProcessError) throw error;
        throw new ImageProcessError("heic", String((error as { message?: string })?.message ?? error));
    }
};

export const decode = async (file: Blob, kind: InputKind, onProgress: Progress): Promise<Drawable> => {
    let source: Drawable;
    if (kind === "heic") {
        source = await decodeHeic(file, onProgress);
    } else {
        try {
            source = await createImageBitmap(file, { imageOrientation: "from-image" });
        } catch {
            throw new ImageProcessError("decode");
        }
    }
    if (source.width * source.height > MAX_PIXELS) throw new ImageProcessError("memory");
    return source;
};

/* ------------------------------------------------------------------ */
/* Dibujo y redimensionado                                             */
/* ------------------------------------------------------------------ */

/**
 * Dibuja la imagen al tamaño pedido. Reduce en pasos de 50% para que se vea nítida
 * (algunos navegadores ignoran imageSmoothingQuality en reducciones grandes).
 */
export const render = (source: Drawable, width: number, height: number, mime: OutputMime): AnyCanvas => {
    width = Math.max(1, Math.round(width));
    height = Math.max(1, Math.round(height));

    let current: Drawable = source;
    let { width: cw, height: ch } = sizeOf(source);

    while (cw / 2 >= width * 1.001 && ch / 2 >= height * 1.001) {
        cw = Math.round(cw / 2);
        ch = Math.round(ch / 2);
        const step = createCanvas(cw, ch);
        const sctx = get2d(step);
        sctx.imageSmoothingEnabled = true;
        sctx.imageSmoothingQuality = "high";
        sctx.drawImage(current, 0, 0, cw, ch);
        current = step;
    }

    const canvas = createCanvas(width, height);
    const ctx = get2d(canvas);
    // JPG no tiene transparencia: usamos fondo blanco en lugar de negro.
    if (mime === "image/jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
    }
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(current, 0, 0, width, height);
    return canvas;
};

/* ------------------------------------------------------------------ */
/* Compresión a tamaño objetivo                                        */
/* ------------------------------------------------------------------ */

/**
 * Garantiza un archivo <= targetBytes: busca la mejor calidad (búsqueda binaria)
 * y, si ni con calidad mínima alcanza, reduce las dimensiones y repite.
 */
const fitToTarget = async (source: Drawable, mime: OutputMime, targetBytes: number, onProgress: Progress, startScale = 1) => {
    const lossy = mime !== "image/png";
    let scale = startScale;
    const { width: sw, height: sh } = sizeOf(source);

    for (let round = 0; round < 12; round++) {
        const w = Math.max(1, Math.round(sw * scale));
        const h = Math.max(1, Math.round(sh * scale));
        const canvas = render(source, w, h, mime);
        onProgress(Math.min(0.95, 0.6 + round * 0.04));

        if (!lossy) {
            const blob = await canvasToBlob(canvas, mime);
            if (blob.size <= targetBytes || (w <= 16 && h <= 16)) return { blob, width: w, height: h };
            scale *= Math.max(0.3, Math.min(0.92, Math.sqrt(targetBytes / blob.size) * 0.95));
            continue;
        }

        const lowest = await canvasToBlob(canvas, mime, 0.05);
        if (lowest.size > targetBytes) {
            if (w <= 16 && h <= 16) return { blob: lowest, width: w, height: h };
            scale *= Math.max(0.3, Math.min(0.9, Math.sqrt(targetBytes / lowest.size) * 0.95));
            continue;
        }

        let lo = 0.05;
        let hi = 0.95;
        let best = lowest;
        for (let i = 0; i < 7; i++) {
            const q = (lo + hi) / 2;
            const blob = await canvasToBlob(canvas, mime, q);
            if (blob.size <= targetBytes) {
                best = blob;
                lo = q;
            } else {
                hi = q;
            }
        }
        return { blob: best, width: w, height: h };
    }
    throw new ImageProcessError("unknown", "No se alcanzó el tamaño objetivo");
};

const compressToTarget = async (file: Blob, source: Drawable, mime: OutputMime, targetKB: number, onProgress: Progress) => {
    const targetBytes = Math.floor(targetKB * 1024);
    const { width, height } = sizeOf(source);

    // Primer intento con browser-image-compression (sin su worker propio: ya estamos en uno).
    try {
        const { default: imageCompression } = await import("browser-image-compression");
        const input = new File([file], "imagen", { type: file.type || mime });
        const result = await imageCompression(input, {
            maxSizeMB: targetBytes / 1024 / 1024,
            fileType: mime,
            initialQuality: 0.92,
            maxIteration: 12,
            useWebWorker: false,
            onProgress: (p: number) => onProgress(0.15 + (p / 100) * 0.45),
        });
        if (result.size <= targetBytes && result.type === mime) {
            const bitmap = await createImageBitmap(result);
            const dims = { width: bitmap.width, height: bitmap.height };
            bitmap.close();
            return { blob: result as Blob, ...dims };
        }
    } catch {
        /* usamos nuestro algoritmo como respaldo */
    }

    // Respaldo propio: siempre respeta el tamaño objetivo.
    // Para objetivos pequeños empezamos con una escala razonable para ahorrar iteraciones.
    const pixelsBudget = targetBytes * 12; // ~0.7 bits por pixel en JPG de calidad media
    const startScale = Math.min(1, Math.sqrt(pixelsBudget / (width * height)) * 1.4);
    return fitToTarget(source, mime, targetBytes, onProgress, Math.max(startScale, 0.05));
};

/* ------------------------------------------------------------------ */
/* Punto de entrada                                                    */
/* ------------------------------------------------------------------ */

/** Revisa (en una versión reducida) si la imagen tiene píxeles transparentes. */
const hasTransparency = (source: Drawable) => {
    const { width, height } = sizeOf(source);
    const scale = Math.min(1, 256 / Math.max(width, height));
    const w = Math.max(1, Math.round(width * scale));
    const h = Math.max(1, Math.round(height * scale));
    const canvas = createCanvas(w, h);
    const ctx = get2d(canvas);
    ctx.drawImage(source, 0, 0, w, h);
    const data = ctx.getImageData(0, 0, w, h).data;
    for (let i = 3; i < data.length; i += 4) if (data[i] < 250) return true;
    return false;
};

const resolveOutput = (choice: OutputFormatChoice, kind: InputKind, source?: Drawable): OutputMime => {
    if (choice === "auto") {
        if (kind === "png" && source && !hasTransparency(source)) return "image/jpeg";
        choice = "original";
    }
    return choice === "original" ? (kind === "heic" ? "image/jpeg" : KIND_TO_MIME[kind]) : choice;
};

export const processImage = async (file: Blob, kind: InputKind, job: ImageJob, onProgress: Progress): Promise<ProcessResult> => {
    onProgress(0.05);
    const source = await decode(file, kind, onProgress);
    const { width: sw, height: sh } = sizeOf(source);
    onProgress(0.2);

    try {
        switch (job.kind) {
            case "convert": {
                const canvas = render(source, sw, sh, job.to);
                onProgress(0.6);
                const blob = await canvasToBlob(canvas, job.to, job.to === "image/png" ? undefined : job.quality);
                return { blob, width: sw, height: sh };
            }

            case "compress-quality": {
                const mime = resolveOutput(job.format, kind, source);
                const canvas = render(source, sw, sh, mime);
                onProgress(0.6);
                const blob = await canvasToBlob(canvas, mime, mime === "image/png" ? undefined : job.quality);
                // Si al recomprimir pesa más, conservamos el original (mismo formato).
                if (blob.size >= file.size && mime === resolveOutput("original", kind)) {
                    return { blob: file, width: sw, height: sh, unchanged: true };
                }
                return { blob, width: sw, height: sh };
            }

            case "compress-target": {
                const mime = resolveOutput(job.format, kind, source);
                if (file.size <= job.targetKB * 1024 && mime === resolveOutput("original", kind)) {
                    return { blob: file, width: sw, height: sh, unchanged: true };
                }
                return await compressToTarget(file, source, mime, job.targetKB, onProgress);
            }

            case "resize-pixels":
            case "resize-percent": {
                let w: number;
                let h: number;
                if (job.kind === "resize-percent") {
                    w = (sw * job.percent) / 100;
                    h = (sh * job.percent) / 100;
                } else if (job.keepAspect) {
                    if (job.width && job.height) {
                        const ratio = Math.min(job.width / sw, job.height / sh);
                        w = sw * ratio;
                        h = sh * ratio;
                    } else if (job.width) {
                        w = job.width;
                        h = (sh * job.width) / sw;
                    } else if (job.height) {
                        h = job.height;
                        w = (sw * job.height) / sh;
                    } else {
                        w = sw;
                        h = sh;
                    }
                } else {
                    w = job.width || sw;
                    h = job.height || sh;
                }
                const mime = resolveOutput("original", kind);
                const canvas = render(source, w, h, mime);
                onProgress(0.7);
                const blob = await canvasToBlob(canvas, mime, mime === "image/png" ? undefined : 0.92);
                return { blob, width: canvas.width, height: canvas.height };
            }
        }
    } finally {
        if ("close" in source) source.close();
    }
};

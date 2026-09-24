/**
 * Pool pequeño de Web Workers para procesar imágenes sin congelar la página.
 * Si el navegador no soporta OffscreenCanvas en workers, se procesa en el hilo principal.
 */
import type { InputKind } from "./formats";
import { type ImageJob, ImageProcessError, type ProcessResult, type WorkerRequest, type WorkerResponse } from "./types";

interface Task {
    id: string;
    file: Blob;
    kind: InputKind;
    job: ImageJob;
    onProgress: (value: number) => void;
    resolve: (result: ProcessResult) => void;
    reject: (error: ImageProcessError) => void;
}

const supportsWorkers = () => typeof Worker !== "undefined" && typeof OffscreenCanvas !== "undefined" && "convertToBlob" in OffscreenCanvas.prototype;

export class ImageWorkerPool {
    private workers: { worker: Worker; busy: Task | null }[] = [];
    private queue: Task[] = [];
    private counter = 0;
    private disposed = false;

    constructor(private size = Math.max(1, Math.min(2, (typeof navigator !== "undefined" && navigator.hardwareConcurrency) || 2))) {}

    run(file: Blob, kind: InputKind, job: ImageJob, onProgress: (value: number) => void): Promise<ProcessResult> {
        return new Promise((resolve, reject) => {
            const task: Task = { id: `t${++this.counter}`, file, kind, job, onProgress, resolve, reject };
            if (!supportsWorkers()) {
                void this.runOnMainThread(task);
                return;
            }
            this.queue.push(task);
            this.pump();
        });
    }

    /** Cancela lo pendiente y apaga los workers (al salir de la página). */
    dispose() {
        this.disposed = true;
        this.queue = [];
        for (const { worker } of this.workers) worker.terminate();
        this.workers = [];
    }

    private spawn() {
        const worker = new Worker(new URL("./image.worker.ts", import.meta.url), { type: "module", name: "dorfic-image" });
        const slot = { worker, busy: null as Task | null };
        worker.addEventListener("message", (event: MessageEvent<WorkerResponse>) => {
            const task = slot.busy;
            const msg = event.data;
            if (!task || msg.id !== task.id) return;
            if (msg.type === "progress") {
                task.onProgress(msg.value);
                return;
            }
            slot.busy = null;
            if (msg.type === "done") task.resolve({ blob: msg.blob, width: msg.width, height: msg.height, unchanged: msg.unchanged });
            else task.reject(new ImageProcessError(msg.code, msg.detail));
            this.pump();
        });
        worker.addEventListener("error", () => {
            // Si el worker muere (p. ej. sin memoria), fallamos solo esa tarea y lo reemplazamos.
            const task = slot.busy;
            worker.terminate();
            this.workers = this.workers.filter((w) => w !== slot);
            task?.reject(new ImageProcessError("memory"));
            this.pump();
        });
        this.workers.push(slot);
        return slot;
    }

    private pump() {
        if (this.disposed) return;
        while (this.queue.length) {
            let slot = this.workers.find((w) => !w.busy);
            if (!slot && this.workers.length < this.size) slot = this.spawn();
            if (!slot) return;
            const task = this.queue.shift()!;
            slot.busy = task;
            const message: WorkerRequest = { type: "process", id: task.id, file: task.file, kind: task.kind, job: task.job };
            slot.worker.postMessage(message);
        }
    }

    private async runOnMainThread(task: Task) {
        try {
            const { processImage } = await import("./process");
            task.resolve(await processImage(task.file, task.kind, task.job, task.onProgress));
        } catch (error) {
            task.reject(error instanceof ImageProcessError ? error : new ImageProcessError("unknown", String(error)));
        }
    }
}

/// <reference lib="webworker" />
import { processImage } from "./process";
import { ImageProcessError, type WorkerRequest, type WorkerResponse } from "./types";

const post = (message: WorkerResponse) => (self as unknown as DedicatedWorkerGlobalScope).postMessage(message);

self.addEventListener("message", async (event: MessageEvent<WorkerRequest>) => {
    const { id, file, kind, job } = event.data;
    try {
        const result = await processImage(file, kind, job, (value) => post({ type: "progress", id, value }));
        post({ type: "done", id, ...result });
    } catch (error) {
        const code = error instanceof ImageProcessError ? error.code : "unknown";
        post({ type: "error", id, code, detail: String((error as Error)?.message ?? error) });
    }
});

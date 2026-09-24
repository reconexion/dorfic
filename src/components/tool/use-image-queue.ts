import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MAX_FILES, MAX_FILE_SIZE_MB } from "@/config/site";
import { type InputKind, detectKind } from "@/lib/image/formats";
import type { ImageErrorCode, ImageJob, ProcessResult } from "@/lib/image/types";
import { ImageWorkerPool } from "@/lib/image/worker-pool";

export type ItemStatus = "pending" | "processing" | "done" | "error";

export interface QueueItem {
    id: string;
    file: File;
    kind: InputKind | null;
    /** Vista previa del original (no disponible para HEIC en la mayoría de navegadores). */
    previewUrl: string | null;
    status: ItemStatus;
    progress: number;
    result?: ProcessResult & { url: string; name: string };
    errorCode?: ImageErrorCode;
    /** Ajustes con los que se procesó (para saber si hay cambios pendientes). */
    jobKey?: string;
    /** Posición dentro del lote en que se agregó (para escalonar la animación de entrada). */
    batchIndex: number;
}

interface Options {
    kinds: InputKind[];
    job: ImageJob | null;
    nameFor: (file: File, result: ProcessResult) => string;
}

let uid = 0;

export const useImageQueue = ({ kinds, job, nameFor }: Options) => {
    const [items, setItems] = useState<QueueItem[]>([]);
    const [limitHit, setLimitHit] = useState(false);
    const poolRef = useRef<ImageWorkerPool | null>(null);
    const itemsRef = useRef(items);
    itemsRef.current = items;
    const jobKey = job ? JSON.stringify(job) : null;

    const getPool = () => (poolRef.current ??= new ImageWorkerPool());

    // Libera workers y URLs al salir de la página.
    useEffect(
        () => () => {
            poolRef.current?.dispose();
            poolRef.current = null;
            for (const item of itemsRef.current) {
                if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
                if (item.result) URL.revokeObjectURL(item.result.url);
            }
        },
        [],
    );

    const patch = (id: string, update: Partial<QueueItem> | ((item: QueueItem) => Partial<QueueItem>)) =>
        setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...(typeof update === "function" ? update(item) : update) } : item)));

    // Último ajuste enviado por archivo (se consulta de forma síncrona para ignorar resultados viejos).
    const latestKey = useRef(new Map<string, string>());

    const run = useCallback(
        (item: QueueItem, currentJob: ImageJob) => {
            if (!item.kind) return;
            const key = JSON.stringify(currentJob);
            const isCurrent = () => latestKey.current.get(item.id) === key;
            latestKey.current.set(item.id, key);
            patch(item.id, { status: "processing", progress: 0.02, errorCode: undefined, jobKey: key });

            getPool()
                .run(item.file, item.kind, currentJob, (value) => {
                    if (isCurrent()) patch(item.id, (it) => ({ progress: Math.max(it.progress, value) }));
                })
                .then((result) => {
                    if (!isCurrent()) return;
                    const url = URL.createObjectURL(result.blob);
                    patch(item.id, (it) => {
                        if (it.result) URL.revokeObjectURL(it.result.url);
                        return { status: "done", progress: 1, result: { ...result, url, name: nameFor(item.file, result) } };
                    });
                })
                .catch((error: { code?: ImageErrorCode }) => {
                    if (isCurrent()) patch(item.id, { status: "error", errorCode: error.code ?? "unknown" });
                });
        },
        [nameFor],
    );

    const addFiles = useCallback(
        async (incoming: File[]) => {
            if (!incoming.length) return;
            const room = MAX_FILES - itemsRef.current.length;
            setLimitHit(incoming.length > room);
            const files = incoming.slice(0, Math.max(0, room));

            const created = await Promise.all(
                files.map(async (file, batchIndex): Promise<QueueItem> => {
                    const detected = await detectKind(file).catch(() => null);
                    const kind = detected && kinds.includes(detected) ? detected : null;
                    const base: QueueItem = { id: `f${++uid}`, file, kind, previewUrl: null, status: "pending", progress: 0, batchIndex };
                    if (!kind) return { ...base, status: "error", errorCode: "unsupported" };
                    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) return { ...base, kind: null, status: "error", errorCode: "too-large" };
                    return { ...base, previewUrl: kind === "heic" ? null : URL.createObjectURL(file) };
                }),
            );

            setItems((prev) => [...prev, ...created]);
            if (job) created.filter((i) => i.kind && i.status === "pending").forEach((i) => run(i, job));
        },
        [kinds, job, run],
    );

    const remove = useCallback((id: string) => {
        setItems((prev) => {
            const item = prev.find((i) => i.id === id);
            if (item?.previewUrl) URL.revokeObjectURL(item.previewUrl);
            if (item?.result) URL.revokeObjectURL(item.result.url);
            return prev.filter((i) => i.id !== id);
        });
        latestKey.current.delete(id);
    }, []);

    const clear = useCallback(() => {
        for (const item of itemsRef.current) {
            if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
            if (item.result) URL.revokeObjectURL(item.result.url);
        }
        poolRef.current?.dispose();
        poolRef.current = null;
        latestKey.current.clear();
        setItems([]);
        setLimitHit(false);
    }, []);

    /** Vuelve a procesar con los ajustes actuales. */
    const reprocess = useCallback(() => {
        if (!job) return;
        for (const item of itemsRef.current) if (item.kind) run({ ...item, batchIndex: 0 }, job);
    }, [job, run]);

    const stats = useMemo(() => {
        const valid = items.filter((i) => i.kind);
        const done = valid.filter((i) => i.status === "done");
        const busy = valid.some((i) => i.status === "processing" || i.status === "pending");
        const stale = jobKey !== null && valid.some((i) => i.jobKey && i.jobKey !== jobKey);
        const unprocessed = jobKey !== null && valid.some((i) => !i.jobKey);
        const failed = items.filter((i) => i.status === "error").length;
        return { total: valid.length, done: done.length, failed, busy, stale: stale || unprocessed, doneItems: done };
    }, [items, jobKey]);

    return { items, addFiles, remove, clear, reprocess, stats, limitHit };
};

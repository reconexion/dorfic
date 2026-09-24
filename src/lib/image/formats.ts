import type { OutputMime } from "./types";

export type InputKind = "jpeg" | "png" | "webp" | "heic";

const EXTENSION_TO_KIND: Record<string, InputKind> = {
    jpg: "jpeg",
    jpeg: "jpeg",
    jfif: "jpeg",
    png: "png",
    webp: "webp",
    heic: "heic",
    heif: "heic",
};

const MIME_TO_KIND: Record<string, InputKind> = {
    "image/jpeg": "jpeg",
    "image/jpg": "jpeg",
    "image/pjpeg": "jpeg",
    "image/png": "png",
    "image/webp": "webp",
    "image/heic": "heic",
    "image/heif": "heic",
    "image/heic-sequence": "heic",
    "image/heif-sequence": "heic",
};

export const KIND_TO_MIME: Record<Exclude<InputKind, "heic">, OutputMime> = {
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
};

export const MIME_TO_EXTENSION: Record<OutputMime, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
};

/** Lee los primeros bytes para identificar el formato real (algunos celulares mandan el MIME vacío). */
export const sniffKind = async (file: Blob): Promise<InputKind | null> => {
    const bytes = new Uint8Array(await file.slice(0, 32).arrayBuffer());
    if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "jpeg";
    if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return "png";
    const ascii = String.fromCharCode(...bytes);
    if (ascii.startsWith("RIFF") && ascii.slice(8, 12) === "WEBP") return "webp";
    if (ascii.slice(4, 8) === "ftyp") {
        const brand = ascii.slice(8, 12);
        if (["heic", "heix", "hevc", "hevx", "heim", "heis", "mif1", "msf1"].includes(brand)) return "heic";
    }
    return null;
};

/** Detecta el tipo por MIME o extensión (rápido, sin leer el archivo). */
export const guessKind = (file: File): InputKind | null => {
    const byMime = MIME_TO_KIND[file.type.toLowerCase()];
    if (byMime) return byMime;
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    return EXTENSION_TO_KIND[ext] ?? null;
};

export const detectKind = async (file: File): Promise<InputKind | null> => (await sniffKind(file)) ?? guessKind(file);

/** "foto.HEIC" -> "foto.jpg"; agrega sufijo opcional antes de la extensión. */
export const outputName = (originalName: string, mime: OutputMime, suffix = "") => {
    const base = originalName.replace(/\.[^.]+$/, "") || "imagen";
    return `${base}${suffix}.${MIME_TO_EXTENSION[mime]}`;
};

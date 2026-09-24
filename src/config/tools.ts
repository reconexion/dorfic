import type { FC } from "react";
import { Camera01, Expand06, ImageDown, Minimize01, Repeat04 } from "@untitledui/icons";
import type { InputKind } from "@/lib/image/formats";
import type { OutputFormatChoice, OutputMime } from "@/lib/image/types";
import type { ToolSlug } from "./paths";

/** Cómo se comporta cada herramienta. Los textos viven en src/i18n. */
export type ToolDefinition =
    | { type: "convert"; from: InputKind[]; to: OutputMime; defaultQuality: number }
    | { type: "compress"; from: InputKind[]; presetKB?: number; defaultFormat?: OutputFormatChoice }
    | { type: "resize"; from: InputKind[] };

const COMMON: InputKind[] = ["jpeg", "png", "webp"];

export const TOOLS: Record<ToolSlug, ToolDefinition & { icon: FC<{ className?: string }>; group: "convert" | "compress" | "resize" }> = {
    "heic-a-jpg": { type: "convert", from: ["heic"], to: "image/jpeg", defaultQuality: 0.9, icon: Camera01, group: "convert" },
    "comprimir-imagen": { type: "compress", from: COMMON, icon: Minimize01, group: "compress" },
    "redimensionar-imagen": { type: "resize", from: COMMON, icon: Expand06, group: "resize" },
    "png-a-jpg": { type: "convert", from: ["png"], to: "image/jpeg", defaultQuality: 0.92, icon: Repeat04, group: "convert" },
    "jpg-a-png": { type: "convert", from: ["jpeg"], to: "image/png", defaultQuality: 1, icon: Repeat04, group: "convert" },
    "webp-a-jpg": { type: "convert", from: ["webp"], to: "image/jpeg", defaultQuality: 0.92, icon: Repeat04, group: "convert" },
    "jpg-a-webp": { type: "convert", from: ["jpeg"], to: "image/webp", defaultQuality: 0.85, icon: Repeat04, group: "convert" },
    "comprimir-imagen-a-20kb": { type: "compress", from: COMMON, presetKB: 20, icon: ImageDown, group: "compress" },
    "comprimir-imagen-a-50kb": { type: "compress", from: COMMON, presetKB: 50, icon: ImageDown, group: "compress" },
    "comprimir-imagen-a-100kb": { type: "compress", from: COMMON, presetKB: 100, icon: ImageDown, group: "compress" },
    "comprimir-imagen-a-200kb": { type: "compress", from: COMMON, presetKB: 200, icon: ImageDown, group: "compress" },
    "comprimir-jpg": { type: "compress", from: ["jpeg"], icon: Minimize01, group: "compress" },
    "comprimir-png": { type: "compress", from: ["png"], defaultFormat: "original", icon: Minimize01, group: "compress" },
    "heic-a-png": { type: "convert", from: ["heic"], to: "image/png", defaultQuality: 1, icon: Camera01, group: "convert" },
    "webp-a-png": { type: "convert", from: ["webp"], to: "image/png", defaultQuality: 1, icon: Repeat04, group: "convert" },
    "png-a-webp": { type: "convert", from: ["png"], to: "image/webp", defaultQuality: 0.85, icon: Repeat04, group: "convert" },
    "comprimir-imagen-a-10kb": { type: "compress", from: COMMON, presetKB: 10, icon: ImageDown, group: "compress" },
    "comprimir-imagen-a-30kb": { type: "compress", from: COMMON, presetKB: 30, icon: ImageDown, group: "compress" },
    "comprimir-imagen-a-500kb": { type: "compress", from: COMMON, presetKB: 500, icon: ImageDown, group: "compress" },
};

/** Tamaños con página propia (para el bloque "Tamaños populares"). */
export const PRESET_PAGES = [10, 20, 30, 50, 100, 200, 500].map((kb) => ({ kb, slug: `comprimir-imagen-a-${kb}kb` as const }));

const ACCEPT_BY_KIND: Record<InputKind, string[]> = {
    jpeg: [".jpg", ".jpeg", ".jfif", "image/jpeg"],
    png: [".png", "image/png"],
    webp: [".webp", "image/webp"],
    heic: [".heic", ".heif", "image/heic", "image/heif"],
};

const LABEL_BY_KIND: Record<InputKind, string> = { jpeg: "JPG", png: "PNG", webp: "WebP", heic: "HEIC" };

export const acceptAttr = (kinds: InputKind[]) => kinds.flatMap((k) => ACCEPT_BY_KIND[k]).join(",");

export const formatsLabel = (kinds: InputKind[]) => kinds.map((k) => LABEL_BY_KIND[k]).join(", ");

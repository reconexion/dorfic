/** Descarga un Blob con un nombre (funciona en Android, iOS 13+ y escritorio). */
export const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30_000);
};

/** Evita nombres repetidos dentro del ZIP: foto.jpg, foto (2).jpg, ... */
export const uniqueNames = (names: string[]) => {
    const seen = new Map<string, number>();
    return names.map((name) => {
        const key = name.toLowerCase();
        const count = (seen.get(key) ?? 0) + 1;
        seen.set(key, count);
        if (count === 1) return name;
        const dot = name.lastIndexOf(".");
        return dot > 0 ? `${name.slice(0, dot)} (${count})${name.slice(dot)}` : `${name} (${count})`;
    });
};

export const downloadZip = async (files: { name: string; blob: Blob }[], zipName: string) => {
    const { default: JSZip } = await import("jszip");
    const zip = new JSZip();
    const names = uniqueNames(files.map((f) => f.name));
    // Las imágenes ya vienen comprimidas: "STORE" es instantáneo y no cambia el tamaño.
    files.forEach((f, i) => zip.file(names[i], f.blob, { binary: true }));
    const blob = await zip.generateAsync({ type: "blob", compression: "STORE" });
    downloadBlob(blob, zipName);
};

export interface ByteFormat {
    /** Etiqueta BCP 47 para el separador decimal (1.5 / 1,5). */
    locale: string;
    units: { b: string; kb: string; mb: string };
}

const DEFAULT_BYTE_FORMAT: ByteFormat = { locale: "es-MX", units: { b: "B", kb: "KB", mb: "MB" } };

/** "1.2 MB", "340 KB"… con las unidades y el separador decimal del idioma (pasa `ui`). */
export const formatBytes = (bytes: number, { locale, units }: ByteFormat = DEFAULT_BYTE_FORMAT) => {
    const num = (n: number, digits: number) => n.toLocaleString(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits, useGrouping: false });
    if (bytes < 1024) return `${Math.round(bytes)} ${units.b}`;
    if (bytes < 1024 * 1024) return `${num(bytes / 1024, bytes < 10 * 1024 ? 1 : 0)} ${units.kb}`;
    return `${num(bytes / 1024 / 1024, 1)} ${units.mb}`;
};

/**
 * Traspaso de archivos entre páginas SIN subir nada: el inicio guarda en memoria las imágenes
 * que el usuario soltó y la herramienta elegida las toma al montarse.
 */
let pending: File[] = [];

export const setPendingFiles = (files: File[]) => {
    pending = files;
};

export const takePendingFiles = () => {
    const files = pending;
    pending = [];
    return files;
};

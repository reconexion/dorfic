import type { ToolSlug } from "@/config/paths";

/** Palabras con las que la gente busca cada herramienta (sinónimos, errores comunes, intención). */
export const searchKeywords: Record<ToolSlug, string[]> = {
    "heic-a-jpg": ["heic", "heif", "iphone", "ios", "apple", "foto de iphone", "no abre", "no se abre", "convertir", "jpg", "jpeg", "formato no valido", "live photo"],
    "comprimir-imagen": ["comprimir", "reducir", "bajar peso", "pesa mucho", "achicar", "aligerar", "optimizar", "kb", "mb", "tamaño", "calidad", "comprimir foto", "reducir peso"],
    "redimensionar-imagen": ["redimensionar", "cambiar tamaño", "medidas", "pixeles", "píxeles", "ancho", "alto", "escalar", "achicar", "agrandar", "resolucion", "resolución", "porcentaje", "recortar tamaño"],
    "png-a-jpg": ["png", "jpg", "jpeg", "captura", "screenshot", "convertir png", "pasar png"],
    "jpg-a-png": ["jpg", "jpeg", "png", "convertir jpg", "pasar jpg", "sin perdida", "editar"],
    "webp-a-jpg": ["webp", "jpg", "jpeg", "descargada", "no abre", "convertir webp", "imagen de google"],
    "jpg-a-webp": ["webp", "jpg", "pagina web", "página web", "wordpress", "shopify", "optimizar web", "velocidad"],
    "comprimir-imagen-a-20kb": ["20kb", "20 kb", "credencial", "foto tipo credencial", "firma", "muy ligera", "formulario", "curp", "examen"],
    "comprimir-imagen-a-50kb": ["50kb", "50 kb", "firma", "foto de perfil", "registro", "empleo", "curriculum"],
    "comprimir-imagen-a-100kb": ["100kb", "100 kb", "tramite", "trámite", "ine", "comprobante", "acta", "documento", "escaneado", "gobierno"],
    "comprimir-imagen-a-200kb": ["200kb", "200 kb", "correo", "email", "escuela", "tarea", "plataforma"],
    "comprimir-jpg": ["jpg", "jpeg", "comprimir jpg", "reducir jpg", "foto", "comprimir foto"],
    "comprimir-png": ["png", "comprimir png", "reducir png", "captura", "transparente", "logo"],
    "heic-a-png": ["heic", "heif", "png", "iphone", "sin perdida", "editar"],
    "webp-a-png": ["webp", "png", "transparente", "fondo transparente", "descargada"],
    "png-a-webp": ["png", "webp", "transparente", "pagina web", "optimizar", "logo"],
    "comprimir-imagen-a-10kb": ["10kb", "10 kb", "firma", "muy pequeña", "limite"],
    "comprimir-imagen-a-30kb": ["30kb", "30 kb", "foto credencial", "solicitud", "beca"],
    "comprimir-imagen-a-500kb": ["500kb", "500 kb", "medio mega", "alta calidad", "concurso"],
};

/** Atajos "¿qué necesitas?" del inicio. */
export const intents: { label: string; slug: ToolSlug }[] = [
    { label: "Mi foto de iPhone no abre", slug: "heic-a-jpg" },
    { label: "Mi foto pesa demasiado", slug: "comprimir-imagen" },
    { label: "Un trámite pide máximo 100 KB", slug: "comprimir-imagen-a-100kb" },
    { label: "Cambiar el tamaño en píxeles", slug: "redimensionar-imagen" },
    { label: "Tengo un WebP y necesito JPG", slug: "webp-a-jpg" },
];

export const searchUi = {
    label: "Buscar herramienta",
    placeholderPrefix: "Busca: ",
    /** Se muestran uno por uno, animados, como sugerencias en el buscador. */
    placeholders: ["comprimir a 100 KB", "foto de iPhone a JPG", "cambiar tamaño", "PNG a JPG", "foto para trámite", "WebP a JPG"],
    empty: "No encontramos esa herramienta. Prueba con “comprimir”, “HEIC” o “tamaño”.",
    shortcut: "Ctrl K",
    open: "Buscar herramientas",
    close: "Cerrar búsqueda",
    results: "{n} resultado(s)",
    hint: "Usa ↑ ↓ para elegir y Enter para abrir",
};

export const quickStartUi = {
    title: "O suelta aquí tu imagen y te decimos qué hacer",
    detected: "{n} imágenes",
    question: "¿Qué quieres hacer?",
    recommended: "Recomendado",
    change: "Elegir otras imágenes",
    unsupported: "No reconocemos ese archivo. Usa JPG, PNG, WebP o HEIC.",
};

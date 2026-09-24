import type { ToolSlug } from "@/config/paths";
import type { ToolCard } from "../types";

export const toolCards: Record<ToolSlug, ToolCard> = {
    "heic-a-jpg": { name: "HEIC a JPG", description: "Convierte las fotos de tu iPhone a JPG para abrirlas en cualquier lado." },
    "comprimir-imagen": { name: "Comprimir imagen", description: "Baja el peso de tus JPG, PNG o WebP al tamaño en KB que necesites." },
    "redimensionar-imagen": { name: "Redimensionar imagen", description: "Cambia el ancho y alto en píxeles o por porcentaje sin deformarla." },
    "png-a-jpg": { name: "PNG a JPG", description: "Convierte PNG a JPG para que pesen menos y se acepten en todos lados." },
    "jpg-a-png": { name: "JPG a PNG", description: "Pasa tus JPG a PNG sin perder más calidad al editarlos." },
    "webp-a-jpg": { name: "WebP a JPG", description: "Convierte imágenes WebP descargadas de internet a JPG compatible." },
    "jpg-a-webp": { name: "JPG a WebP", description: "Convierte a WebP para que tu página web cargue más rápido." },
    "comprimir-imagen-a-20kb": { name: "Comprimir a 20 KB", description: "Para formularios que piden fotos muy ligeras, como fotos tipo credencial." },
    "comprimir-imagen-a-50kb": { name: "Comprimir a 50 KB", description: "Ideal para firmas, fotos de perfil y registros en línea." },
    "comprimir-imagen-a-100kb": { name: "Comprimir a 100 KB", description: "Para documentos escaneados y trámites que limitan el peso." },
    "comprimir-imagen-a-200kb": { name: "Comprimir a 200 KB", description: "Buena calidad con poco peso para correos y plataformas escolares." },
    "comprimir-jpg": { name: "Comprimir JPG", description: "Reduce el peso de tus fotos JPG sin que se note la diferencia." },
    "comprimir-png": { name: "Comprimir PNG", description: "Aligera capturas y gráficos PNG conservando la transparencia." },
    "heic-a-png": { name: "HEIC a PNG", description: "Convierte fotos de iPhone a PNG sin pérdida para editarlas." },
    "webp-a-png": { name: "WebP a PNG", description: "Pasa imágenes WebP a PNG y conserva el fondo transparente." },
    "png-a-webp": { name: "PNG a WebP", description: "Imágenes con transparencia mucho más ligeras para tu web." },
    "comprimir-imagen-a-10kb": { name: "Comprimir a 10 KB", description: "Para firmas y fotos en sistemas con límites extremos." },
    "comprimir-imagen-a-30kb": { name: "Comprimir a 30 KB", description: "Fotos de solicitud y credencial con buena nitidez." },
    "comprimir-imagen-a-500kb": { name: "Comprimir a 500 KB", description: "Casi la calidad original, con una fracción del peso." },
};

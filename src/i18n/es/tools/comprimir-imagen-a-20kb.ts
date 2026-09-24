import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-20kb",
    title: "Comprimir imagen a 20 KB",
    metaDescription:
        "Reduce tu foto a 20 KB o menos en segundos, gratis y sin subirla a internet. Ideal para fotos tipo credencial y formularios con límite muy estricto.",
    h1: "Comprimir imagen a 20 KB gratis",
    lead: "Deja tu foto en 20 KB o menos para esos formularios con límite muy estricto. Sin registro y sin que tu imagen salga de tu dispositivo.",
    sections: [
        {
            heading: "¿Cuándo te piden una imagen de 20 KB?",
            paragraphs: [
                "Algunos sistemas en línea ponen límites de peso muy bajos, sobre todo cuando piden una fotografía tipo credencial, una firma escaneada o una imagen de perfil. Es común encontrarlos en registros para exámenes de admisión, convocatorias, solicitudes de becas, plataformas escolares y algunos portales de dependencias. Una foto de celular pesa entre 100 y 300 veces más que eso, así que no basta con “bajarle un poquito”.",
                "Esta página ya viene configurada para dejar cada imagen en 20 KB o menos. Solo tienes que seleccionar tu foto y descargarla. Dorfic busca automáticamente la mejor calidad posible dentro del límite y, como es necesario a este tamaño, también reduce las dimensiones de la imagen.",
            ],
        },
        {
            heading: "Cómo dejar tu foto en 20 KB paso a paso",
            steps: [
                "Si puedes, recorta antes la foto para que se vea solo lo importante (por ejemplo, tu cara y hombros). Así el detalle se aprovecha mejor.",
                "Selecciona la imagen, arrástrala o pégala. El objetivo de 20 KB ya está elegido.",
                "Si el portal pide un formato específico, cámbialo en “Formato de salida”. Para fotos, JPG es lo más seguro.",
                "Verifica el peso final junto al nombre del archivo y descárgala.",
            ],
        },
        {
            heading: "Cómo se verá una imagen de 20 KB",
            paragraphs: [
                "Con 20 KB hay espacio suficiente para una foto de rostro nítida de unos 300 a 500 píxeles de lado, que es justo lo que esperan los formularios con este límite. Sirve perfectamente para verse en pantalla o en una credencial pequeña, pero no para imprimirla en tamaño grande ni para mostrar documentos con letra chica.",
                "Si tu imagen tiene mucho detalle (un paisaje, un documento completo o varias personas), a 20 KB se verá más suave. En ese caso, recorta lo que no sea necesario o revisa si el sistema acepta un límite mayor, como 50 o 100 KB.",
            ],
        },
        {
            heading: "Consejos para que tu foto sea aceptada",
            bullets: [
                "Usa un fondo liso y claro: los fondos uniformes ocupan menos espacio y dejan más detalle para tu rostro.",
                "Revisa si piden medidas exactas en píxeles; si es así, usa primero la herramienta de redimensionar y después comprime.",
                "Nombra el archivo como te lo pidan (por ejemplo, con tu CURP o matrícula) antes de subirlo.",
                "Si el sistema dice “formato no válido”, verifica que sea JPG y no HEIC o WebP.",
            ],
        },
        {
            heading: "Tu privacidad está protegida",
            paragraphs: [
                "Las fotos para trámites suelen ser personales. Por eso Dorfic no las sube a ningún servidor: la compresión ocurre en tu propio navegador. Además, el archivo final no incluye metadatos como la ubicación GPS. Puedes procesar hasta 50 imágenes a la vez, de hasta 50 MB cada una.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Se puede comprimir una foto de celular a 20 KB?",
            a: "Sí. Dorfic reduce la calidad y las dimensiones lo necesario para que quede en 20 KB o menos, buscando que se vea lo mejor posible.",
        },
        {
            q: "¿Por qué la imagen quedó más pequeña en píxeles?",
            a: "Porque a 20 KB no caben los millones de píxeles de una foto de celular. Reducir las dimensiones permite mantener una imagen nítida en lugar de una llena de manchas.",
        },
        {
            q: "¿La imagen pesará exactamente 20 KB?",
            a: "Pesará 20 KB o un poco menos, nunca más. Así cumple con el límite del formulario.",
        },
        {
            q: "Mi imagen se ve borrosa, ¿qué hago?",
            a: "Recórtala para quitar lo que no importa y vuelve a intentarlo. Si el sistema lo permite, usa un límite mayor como 50 KB.",
        },
        {
            q: "¿Puedo comprimir una firma escaneada a 20 KB?",
            a: "Sí. Las firmas con fondo blanco comprimen muy bien. Si el portal lo acepta, PNG puede verse más limpio en firmas; si no, usa JPG.",
        },
        {
            q: "¿Mis fotos se suben a internet?",
            a: "No. Todo se procesa en tu dispositivo. Tus fotos nunca salen de él.",
        },
    ],
    related: ["comprimir-imagen-a-50kb", "comprimir-imagen-a-100kb", "comprimir-imagen", "redimensionar-imagen", "heic-a-jpg", "comprimir-imagen-a-200kb"],
};

export default content;

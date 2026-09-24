import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "redimensionar-imagen",
    title: "Redimensionar imagen",
    metaDescription:
        "Cambia el tamaño de tus imágenes en píxeles o por porcentaje, manteniendo la proporción. Gratis, en lote y sin subir tus fotos a ningún servidor.",
    h1: "Redimensionar imagen gratis",
    lead: "Cambia el ancho y alto de tus fotos en píxeles o por porcentaje, sin que se deformen. Rápido, gratis y sin salir de tu navegador.",
    sections: [
        {
            heading: "¿Qué significa redimensionar una imagen?",
            paragraphs: [
                "Redimensionar es cambiar las dimensiones de una imagen, es decir, cuántos píxeles tiene de ancho y de alto. Una foto de celular suele medir 4000 × 3000 píxeles o más, mucho más de lo que necesita una pantalla, un documento o una publicación. Al reducirla a, por ejemplo, 1080 píxeles de ancho, se ve igual de bien en pantalla y pesa muchísimo menos.",
                "Con esta herramienta puedes indicar las medidas exactas en píxeles o simplemente elegir un porcentaje del tamaño original. La opción “Mantener proporción” evita que la imagen se vea estirada o aplastada: solo escribe el ancho o el alto y el otro valor se calcula solo.",
            ],
        },
        {
            heading: "Cómo cambiar el tamaño de una imagen paso a paso",
            steps: [
                "Elige si quieres trabajar “Por píxeles” o “Por porcentaje”.",
                "En píxeles, escribe el ancho, el alto o ambos. Con “Mantener proporción” activado, si escribes los dos valores la imagen se ajusta para caber dentro de ese recuadro sin deformarse.",
                "En porcentaje, mueve el control deslizante: 50% deja la imagen a la mitad de su ancho y alto.",
                "Selecciona, arrastra o pega tus imágenes. Se procesan todas con los mismos ajustes.",
                "Descarga cada imagen o el lote completo en un archivo ZIP.",
            ],
        },
        {
            heading: "Usos comunes",
            bullets: [
                "Redes sociales: 1080 px de ancho es una medida estándar para publicaciones cuadradas y verticales.",
                "Fotos para trámites: algunos portales piden medidas específicas, como 480 × 640 px para una foto tipo infantil o credencial.",
                "Páginas web y blogs: imágenes de 1200 a 1600 px de ancho se ven nítidas y cargan rápido.",
                "Presentaciones y documentos: reduce las fotos antes de insertarlas para que tu archivo de Word o PowerPoint no pese cientos de megas.",
                "Miniaturas y catálogos: genera versiones pequeñas de tus productos en un solo paso.",
            ],
        },
        {
            heading: "Consejos para obtener el mejor resultado",
            paragraphs: [
                "Reducir una imagen siempre se ve bien, porque se descarta información que sobraba. Ampliarla, en cambio, no agrega detalle real: el navegador tiene que inventar píxeles y el resultado se verá más suave o borroso. Si puedes, parte siempre de la imagen más grande que tengas.",
                "La imagen conserva su formato original (JPG, PNG o WebP) y, en el caso de PNG y WebP, también la transparencia. Si además de cambiar las medidas necesitas un peso máximo en KB, redimensiona primero y después usa el compresor de imágenes. Para reducciones grandes, Dorfic reduce la imagen por etapas para que los bordes se mantengan limpios y sin “escalones”.",
            ],
        },
        {
            heading: "Límites",
            paragraphs: [
                "Puedes elegir medidas de hasta 16,384 píxeles por lado, procesar hasta 50 imágenes por lote y archivos de hasta 50 MB. Todo el trabajo se hace en tu dispositivo, así que tus fotos nunca salen de él. En celulares con poca memoria, las imágenes gigantes pueden tardar un poco más.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Cómo cambio el tamaño de una foto sin que se deforme?",
            a: "Deja activado “Mantener proporción” y escribe solo el ancho o solo el alto. Dorfic calcula el otro valor automáticamente para respetar la forma original.",
        },
        {
            q: "¿Qué pasa si escribo ancho y alto con la proporción activada?",
            a: "La imagen se ajusta para caber dentro de ese recuadro sin deformarse. Por eso uno de los lados puede quedar un poco más chico que el número que escribiste.",
        },
        {
            q: "¿Puedo hacer una imagen más grande?",
            a: "Sí, pero ampliar no agrega detalle real y la foto puede verse borrosa. Lo ideal es usar esta herramienta para reducir.",
        },
        {
            q: "¿Redimensionar también reduce el peso?",
            a: "Sí. Menos píxeles significa un archivo más ligero. Si necesitas un peso exacto en KB, usa después la herramienta para comprimir imagen.",
        },
        {
            q: "¿Se pierde la transparencia de mis PNG?",
            a: "No. La imagen conserva su formato original, así que los PNG y WebP mantienen su fondo transparente.",
        },
        {
            q: "¿Mis imágenes se suben a internet?",
            a: "No. Todo ocurre en tu navegador. Tus fotos nunca salen de tu dispositivo.",
        },
    ],
    related: ["comprimir-imagen", "comprimir-imagen-a-100kb", "heic-a-jpg", "jpg-a-webp", "png-a-jpg", "comprimir-imagen-a-50kb"],
};

export default content;

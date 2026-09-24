import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-200kb",
    title: "Comprimir imagen a 200 KB",
    metaDescription:
        "Reduce tus imágenes a 200 KB o menos sin perder nitidez. Gratis, en lote y sin subir tus fotos. Ideal para correos, escuela y páginas web.",
    h1: "Comprimir imagen a 200 KB gratis",
    lead: "Consigue fotos ligeras que se siguen viendo muy bien: 200 KB o menos, listas para correo, escuela o tu página web.",
    sections: [
        {
            heading: "200 KB: el punto ideal entre calidad y peso",
            paragraphs: [
                "Un límite de 200 KB es lo bastante amplio para conservar una fotografía nítida a tamaño completo de pantalla, y lo bastante pequeño para que se envíe y cargue rápido. Por eso es un requisito frecuente en plataformas escolares, concursos de fotografía, portales de empleo y sistemas donde se suben varias imágenes a la vez.",
                "Esta página ya viene configurada con ese objetivo. Dorfic ajusta la compresión para quedarse lo más cerca posible de 200 KB sin rebasarlo, de modo que aproveches cada KB en calidad. En la mayoría de las fotos de celular, la imagen conserva buena resolución y la diferencia con el original es mínima.",
            ],
        },
        {
            heading: "Cómo comprimir tus fotos a 200 KB",
            steps: [
                "Selecciona tus imágenes, arrástralas a la zona de carga o pégalas.",
                "Elige el formato de salida si lo necesitas; WebP te dará todavía más calidad por KB para uso web.",
                "Mira el avance de cada foto y el ahorro logrado.",
                "Descarga individualmente o todo junto en un ZIP.",
            ],
        },
        {
            heading: "Ideal para…",
            bullets: [
                "Tareas y proyectos escolares que se entregan en plataformas con límite por archivo.",
                "Correos con varias fotos adjuntas sin rebasar el límite del servidor.",
                "Blogs, páginas web y tiendas en línea que necesitan imágenes rápidas pero atractivas.",
                "Publicaciones en portales de bienes raíces o de venta de autos, donde subes muchas fotos.",
                "Evidencias para aseguradoras o garantías que piden varias imágenes claras.",
            ],
        },
        {
            heading: "Consejos para aprovechar los 200 KB",
            paragraphs: [
                "Si vas a publicar en internet, no necesitas imágenes de 4000 píxeles: con 1600 a 2000 píxeles de ancho se ven perfectas en cualquier pantalla. Redimensionarlas primero deja más margen para la calidad y el resultado es todavía más nítido.",
                "Para fotos con mucho detalle, como paisajes o multitudes, JPG y WebP funcionan mucho mejor que PNG. Si tu imagen original está en PNG y es una fotografía, cambia la salida a JPG: notarás que conserva mucho más detalle dentro del mismo límite.",
            ],
        },
        {
            heading: "Rápido, gratis y privado",
            paragraphs: [
                "No necesitas cuenta ni instalar aplicaciones. Tus fotos nunca salen de tu dispositivo porque todo el proceso ocurre en tu navegador. Puedes comprimir hasta 50 imágenes por lote, de hasta 50 MB cada una, sin marcas de agua.",
            ],
        },
        {
            heading: "Cómo decide Dorfic la calidad final",
            paragraphs: [
                "Cuando eliges un tamaño objetivo, Dorfic no aplica un porcentaje fijo a todas las fotos. Primero intenta comprimir con la biblioteca browser-image-compression y después verifica el resultado. Si el archivo todavía rebasa los 200 KB, prueba distintos niveles de calidad hasta encontrar el más alto que entra en el límite, y solo si ni así alcanza, reduce las dimensiones poco a poco.",
                "Por eso dos fotos distintas pueden terminar con calidades diferentes: una imagen sencilla, como un retrato con fondo liso, cabe en 200 KB casi sin cambios, mientras que una foto llena de detalles necesita más compresión. En todos los casos el resultado final respeta el límite y aprovecha al máximo el espacio disponible.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Cuánta calidad pierde una foto al comprimirla a 200 KB?",
            a: "Muy poca en la mayoría de los casos. A tamaño de pantalla la diferencia con el original suele ser difícil de notar.",
        },
        {
            q: "¿Puedo comprimir muchas fotos a 200 KB de una vez?",
            a: "Sí, hasta 50 imágenes por lote. Cada una quedará en 200 KB o menos y puedes descargarlas en un ZIP.",
        },
        {
            q: "¿Conviene más JPG o WebP a 200 KB?",
            a: "WebP ofrece más calidad por KB y es ideal para páginas web. Para enviar a instituciones o personas con equipos antiguos, JPG es más compatible.",
        },
        {
            q: "¿Por qué mi imagen quedó en 190 KB y no en 200?",
            a: "Porque Dorfic nunca rebasa el límite: busca la mejor calidad que cabe debajo de 200 KB, así que suele quedar un poco por debajo.",
        },
        {
            q: "¿Necesito crear una cuenta?",
            a: "No. Es gratis, sin registro, y tus imágenes se procesan solo en tu dispositivo.",
        },
    ],
    related: ["comprimir-imagen-a-100kb", "comprimir-imagen", "redimensionar-imagen", "jpg-a-webp", "comprimir-imagen-a-50kb", "heic-a-jpg"],
};

export default content;

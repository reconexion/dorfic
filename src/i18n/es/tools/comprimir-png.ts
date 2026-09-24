import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-png",
    title: "Comprimir PNG",
    metaDescription:
        "Comprime imágenes PNG gratis: reduce el peso de capturas, logos y gráficos, conserva la transparencia o conviértelos a JPG o WebP. Sin subir archivos.",
    h1: "Comprimir PNG gratis",
    lead: "Aligera tus capturas, logotipos y gráficos PNG. Conserva la transparencia o pásalos a un formato más ligero en un clic.",
    sections: [
        {
            heading: "Por qué un PNG es difícil de comprimir",
            paragraphs: [
                "PNG es un formato sin pérdida: guarda cada píxel exactamente como es. Eso lo hace perfecto para logotipos, íconos, capturas de pantalla con texto y cualquier imagen con fondo transparente, pero también explica por qué pesa tanto cuando contiene fotografías o degradados.",
                "Como PNG no descarta información, la forma de reducir su peso es disminuir el número de píxeles o cambiar a un formato que sí comprima con pérdida, como WebP o JPG. Dorfic te deja elegir: mantener el PNG y ajustar sus dimensiones hasta el peso que necesitas, o convertirlo para conseguir una reducción mucho mayor.",
            ],
        },
        {
            heading: "Cómo comprimir un PNG paso a paso",
            steps: [
                "Selecciona o arrastra tus archivos PNG. También puedes pegar capturas con Ctrl + V.",
                "Elige el peso máximo en KB o el modo por calidad.",
                "En “Formato de salida” deja PNG si necesitas transparencia, o elige WebP o JPG para ahorrar mucho más.",
                "Descarga tus imágenes una por una o todas en un ZIP.",
            ],
        },
        {
            heading: "¿Qué formato de salida conviene?",
            bullets: [
                "PNG: conserva transparencia y nitidez perfecta; para bajar de peso se reducen las dimensiones.",
                "WebP: conserva la transparencia y suele pesar 60% a 80% menos. Ideal para páginas web.",
                "JPG: el más compatible y ligero para fotografías, pero rellena el fondo transparente con blanco.",
            ],
        },
        {
            heading: "Casos en los que te ayuda",
            bullets: [
                "Capturas de pantalla que pesan varios megas y quieres mandar por correo o chat.",
                "Logotipos para tu sitio web, presentaciones o firmas de correo.",
                "Imágenes de productos con fondo transparente para una tienda en línea.",
                "Gráficas y diagramas que vas a insertar en documentos o reportes.",
                "PNG exportados desde programas de diseño con más resolución de la necesaria.",
            ],
        },
        {
            heading: "Consejos para capturas y logotipos",
            paragraphs: [
                "Las capturas de pantalla de celulares modernos tienen muchísimos píxeles. Si solo las vas a ver en una pantalla, reducirlas a la mitad de su tamaño apenas se nota y el archivo queda en una cuarta parte. Para logotipos, piensa en el tamaño real en que se mostrarán: un logo de 400 píxeles de ancho suele ser suficiente para la web y pesa una fracción del original.",
                "Si tu PNG es en realidad una fotografía sin transparencia, el modo automático del compresor general la pasará a JPG y el ahorro será enorme. Aquí, en cambio, dejamos PNG como salida por defecto para respetar a quien necesita transparencia.",
            ],
        },
        {
            heading: "Privado y sin límites",
            paragraphs: [
                "Tus imágenes se procesan dentro de tu navegador y nunca se envían a ningún servidor. Puedes procesar hasta 50 archivos por lote, de hasta 50 MB cada uno, sin registro ni marcas de agua.",
            ],
        },
        {
            heading: "PNG de 8 bits, 24 bits y transparencia",
            paragraphs: [
                "Los PNG pueden guardarse con distintas profundidades de color. Los de 24 o 32 bits admiten millones de colores y transparencia suave, lo que los hace ideales para fotografías recortadas y sombras, pero también los más pesados. Los navegadores, al guardar desde un canvas, generan PNG de 32 bits, así que la forma práctica de ahorrar espacio aquí es reducir dimensiones o cambiar a WebP.",
                "Si trabajas con muchos íconos o gráficos planos para un sitio web, considera usar SVG cuando sea posible: es un formato vectorial que pesa muy poco y se ve nítido a cualquier tamaño. Para todo lo demás, WebP con transparencia es hoy la opción más eficiente.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Se conserva el fondo transparente al comprimir un PNG?",
            a: "Sí, si mantienes PNG o eliges WebP como formato de salida. Solo JPG rellena la transparencia con blanco.",
        },
        {
            q: "¿Por qué mi PNG quedó con menos píxeles?",
            a: "Porque PNG no pierde calidad al guardar; para alcanzar el peso que pediste, la única forma de conservarlo como PNG es reducir sus dimensiones.",
        },
        {
            q: "¿Cuál es la mejor forma de reducir mucho un PNG?",
            a: "Convertirlo a WebP: conserva la transparencia y normalmente pesa entre 60% y 80% menos.",
        },
        {
            q: "¿Puedo comprimir capturas de pantalla directamente?",
            a: "Sí. Toma la captura y pégala en esta página con Ctrl + V (o Cmd + V en Mac).",
        },
        {
            q: "¿Es gratis y privado?",
            a: "Sí. Es gratis, sin registro, y tus imágenes nunca salen de tu dispositivo.",
        },
    ],
    related: ["png-a-webp", "png-a-jpg", "comprimir-imagen", "comprimir-jpg", "redimensionar-imagen", "comprimir-imagen-a-100kb"],
};

export default content;

import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "png-a-jpg",
    title: "Convertir PNG a JPG",
    metaDescription:
        "Convierte imágenes PNG a JPG gratis y en lote. Elige la calidad, reduce el peso y descarga en ZIP. Sin subir tus archivos: todo en tu navegador.",
    h1: "Convertir PNG a JPG gratis",
    lead: "Pasa tus PNG a JPG para que pesen mucho menos y se acepten en cualquier formulario. Sin registro y sin subir tus imágenes.",
    sections: [
        {
            heading: "¿Por qué convertir de PNG a JPG?",
            paragraphs: [
                "PNG es un formato sin pérdida: guarda cada píxel exactamente igual. Es perfecto para logotipos, capturas de pantalla con texto o imágenes con fondo transparente, pero con fotografías produce archivos enormes. Una captura o foto en PNG puede pesar 3, 5 o hasta 10 MB, cuando el mismo contenido en JPG ocupa unos cientos de KB.",
                "Además, hay portales y aplicaciones que solo aceptan JPG. Convertir tus PNG te ayuda a cumplir con esos requisitos y a compartir las imágenes más rápido. Esta herramienta lo hace en tu propio navegador, sin enviar nada a internet.",
            ],
        },
        {
            heading: "Cómo pasar un PNG a JPG paso a paso",
            steps: [
                "Selecciona tus archivos PNG, arrástralos a la zona de carga o pégalos con Ctrl + V (ideal para capturas de pantalla).",
                "Ajusta la calidad si lo necesitas. Con 92% la imagen se ve prácticamente igual y pesa mucho menos.",
                "Espera a que cada imagen muestre la palomita verde y el porcentaje que ahorraste.",
                "Descarga los JPG uno por uno o todos juntos en un ZIP.",
            ],
        },
        {
            heading: "¿Cuándo te conviene?",
            bullets: [
                "Capturas de pantalla que quieres mandar por correo o WhatsApp sin que pesen tanto.",
                "Fotos que se guardaron como PNG por error, por ejemplo al exportarlas desde un editor.",
                "Formularios de trámites, escuelas o empresas que solo aceptan JPG.",
                "Imágenes para tu página web o tienda en línea, donde cada KB cuenta para la velocidad.",
                "Documentos escaneados que el escáner guardó en PNG y ocupan demasiado espacio.",
            ],
        },
        {
            heading: "Lo que pasa con la transparencia",
            paragraphs: [
                "JPG no admite transparencia. Si tu PNG tiene partes transparentes (por ejemplo, un logo sin fondo), esas zonas se rellenan con color blanco al convertir. Para la mayoría de los usos, como documentos o fotos, el resultado se ve natural. Si necesitas conservar la transparencia y aun así reducir el peso, te conviene más convertir a WebP o comprimir el PNG manteniendo su formato.",
                "Tampoco conviene convertir a JPG imágenes con mucho texto pequeño o líneas muy finas, como diagramas: JPG puede generar pequeñas manchas alrededor de las letras. En esos casos sube la calidad al 95–100%.",
            ],
        },
        {
            heading: "Límites",
            paragraphs: [
                "Puedes convertir hasta 50 imágenes por lote, de hasta 50 MB cada una. La conversión ocurre en tu dispositivo, así que la velocidad depende de tu celular o computadora; en la mayoría de los casos tarda menos de un segundo por imagen. El JPG resultante no incluye metadatos del archivo original.",
            ],
        },
        {
            heading: "PNG, JPG y el peso de tus capturas",
            paragraphs: [
                "Las capturas de pantalla se guardan en PNG en casi todos los celulares y computadoras. En pantallas modernas, con muchos píxeles, una sola captura puede superar los 2 MB. Si solo necesitas mostrar una conversación, un comprobante de pago o una gráfica, pasarla a JPG con calidad alta la deja en una fracción de ese peso y se sigue leyendo sin problema.",
                "Si vas a juntar varias capturas en un correo o subirlas a una plataforma con límite de tamaño, convierte todas en un solo lote y descárgalas en ZIP. Te ahorras tiempo y espacio, y como todo se hace en tu dispositivo, la información sensible que aparece en tus capturas nunca sale de él.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Pierde calidad una imagen al pasar de PNG a JPG?",
            a: "JPG comprime con una pequeña pérdida, pero con calidad del 90% o más es muy difícil notar la diferencia en fotografías. En imágenes con texto pequeño, sube la calidad.",
        },
        {
            q: "¿Qué pasa con el fondo transparente?",
            a: "Se vuelve blanco, porque JPG no admite transparencia. Si necesitas conservarla, usa WebP o mantén el PNG.",
        },
        {
            q: "¿Cuánto espacio ahorro?",
            a: "Depende de la imagen, pero en fotografías y capturas es común ahorrar entre 70% y 95% del peso. Dorfic te muestra el ahorro exacto de cada archivo.",
        },
        {
            q: "¿Puedo convertir capturas de pantalla directamente?",
            a: "Sí. Toma la captura, entra a esta página y presiona Ctrl + V (o Cmd + V en Mac). La imagen se agrega sola y se convierte.",
        },
        {
            q: "¿Es seguro? ¿Se suben mis archivos?",
            a: "No se suben. Todo se procesa en tu navegador y tus imágenes nunca salen de tu dispositivo.",
        },
        {
            q: "¿Tiene algún costo o marca de agua?",
            a: "No. Es gratis, sin registro y sin marcas de agua.",
        },
    ],
    related: ["jpg-a-png", "comprimir-imagen", "webp-a-jpg", "jpg-a-webp", "heic-a-jpg", "redimensionar-imagen"],
};

export default content;

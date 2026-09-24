import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "jpg-a-png",
    title: "Convertir JPG a PNG",
    metaDescription:
        "Convierte JPG a PNG gratis, en lote y sin perder más calidad. Ideal para editar o cuando un portal pide PNG. Tus imágenes no se suben a internet.",
    h1: "Convertir JPG a PNG gratis",
    lead: "Convierte tus fotos JPG a PNG en segundos para editarlas sin perder más calidad o cumplir con un formato solicitado.",
    sections: [
        {
            heading: "¿Qué hace el convertidor de JPG a PNG?",
            paragraphs: [
                "Toma tus imágenes JPG y las guarda en formato PNG, un formato sin pérdida. Eso significa que, a partir de ese momento, la imagen ya no perderá calidad aunque la abras, la edites y la vuelvas a guardar muchas veces. Con JPG pasa lo contrario: cada vez que guardas, se comprime otra vez y la imagen se va degradando poco a poco.",
                "La conversión se hace completa en tu navegador. No tienes que instalar programas ni crear una cuenta, y tus fotos nunca se envían a ningún servidor.",
            ],
        },
        {
            heading: "Cómo convertir JPG a PNG paso a paso",
            steps: [
                "Selecciona tus imágenes JPG o arrástralas a la zona de carga. También puedes pegarlas con Ctrl + V.",
                "No necesitas ajustar nada: PNG guarda la imagen tal cual, sin calidad que elegir.",
                "Espera a que aparezca la palomita verde en cada archivo.",
                "Descarga cada PNG o todos juntos en un archivo ZIP.",
            ],
        },
        {
            heading: "¿Cuándo conviene usar PNG?",
            bullets: [
                "Antes de editar: si vas a recortar, escribir texto o retocar una imagen varias veces, trabajar en PNG evita que se acumule pérdida de calidad.",
                "Cuando un sistema lo pide: algunos portales, plantillas de diseño o programas solo aceptan PNG.",
                "Para imágenes con texto, gráficas o dibujos: PNG mantiene los bordes y las letras perfectamente nítidos.",
                "Como paso previo para quitar el fondo en un editor, ya que PNG admite transparencia.",
            ],
        },
        {
            heading: "Lo que debes saber antes de convertir",
            paragraphs: [
                "Convertir a PNG no recupera la calidad que el JPG ya perdió: la imagen se verá exactamente igual que el original, pero a partir de ahí quedará protegida contra nuevas pérdidas. Tampoco agrega transparencia automáticamente; el fondo seguirá siendo el mismo que tenía la foto.",
                "Ten en cuenta que un PNG casi siempre pesa bastante más que el JPG original, a veces cinco o diez veces más, sobre todo en fotografías. Dorfic te mostrará el peso final de cada archivo. Si el objetivo es enviar la imagen o subirla a una página con límite de tamaño, probablemente te convenga quedarte con JPG o usar el compresor de imágenes.",
            ],
        },
        {
            heading: "Límites",
            paragraphs: [
                "Puedes convertir hasta 50 imágenes a la vez, de hasta 50 MB cada una. Como la conversión se hace en tu dispositivo, fotos muy grandes pueden tardar unos segundos en celulares más antiguos. El archivo PNG final no incluye los metadatos del JPG, como la ubicación.",
            ],
        },
        {
            heading: "Diferencias entre JPG y PNG en pocas palabras",
            paragraphs: [
                "JPG está pensado para fotografías: comprime muchísimo descartando detalles que el ojo casi no percibe, por eso sus archivos son ligeros. PNG está pensado para gráficos: guarda cada píxel exacto, admite transparencia y mantiene perfectamente nítidos los bordes de letras, íconos y líneas, a cambio de archivos más pesados.",
                "En la práctica, usa JPG para compartir y almacenar fotos, y PNG para logotipos, capturas con texto, ilustraciones o cualquier imagen que vayas a editar varias veces. Si tienes dudas, conserva siempre una copia del archivo original: así podrás convertirlo al formato que necesites más adelante sin perder nada.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Convertir JPG a PNG mejora la calidad?",
            a: "No. La imagen se ve igual que el JPG original. Lo que ganas es que ya no perderá más calidad al editarla y guardarla varias veces.",
        },
        {
            q: "¿Por qué el PNG pesa más que el JPG?",
            a: "Porque PNG guarda la imagen sin pérdida y JPG sí comprime descartando detalles. En fotografías, el PNG puede pesar varias veces más.",
        },
        {
            q: "¿El PNG tendrá fondo transparente?",
            a: "No automáticamente. La conversión conserva el fondo original de la foto. Para quitarlo necesitas un editor de imágenes.",
        },
        {
            q: "¿Puedo convertir muchas imágenes a la vez?",
            a: "Sí, hasta 50 por lote. Al terminar las descargas todas juntas en dorfic-imagenes.zip.",
        },
        {
            q: "¿Mis imágenes se guardan en algún lado?",
            a: "No. Se procesan en tu navegador y nunca salen de tu dispositivo. Al cerrar la página, desaparecen.",
        },
    ],
    related: ["png-a-jpg", "jpg-a-webp", "redimensionar-imagen", "comprimir-imagen", "webp-a-jpg", "heic-a-jpg"],
};

export default content;

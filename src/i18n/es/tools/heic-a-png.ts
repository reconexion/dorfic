import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "heic-a-png",
    title: "Convertir HEIC a PNG",
    metaDescription:
        "Convierte fotos HEIC de iPhone a PNG gratis y sin pérdida de calidad. Ideal para editar o diseñar. En lote, en tu navegador y sin subir tus fotos.",
    h1: "Convertir HEIC a PNG gratis",
    lead: "Pasa las fotos de tu iPhone a PNG sin pérdida, listas para editar, recortar o usar en tus diseños.",
    sections: [
        {
            heading: "¿Cuándo conviene HEIC a PNG en lugar de JPG?",
            paragraphs: [
                "El iPhone guarda sus fotos en HEIC, un formato moderno y eficiente que muchos programas todavía no abren. Para compartir o subir una foto, lo más práctico es convertirla a JPG. Pero si vas a editarla, retocarla varias veces, usarla en un diseño o quitarle el fondo, PNG es mejor opción: guarda la imagen sin pérdida, así que no se degrada cada vez que la vuelves a guardar.",
                "Con Dorfic haces la conversión directamente en tu navegador. La foto se decodifica en tu propio dispositivo y se guarda como PNG sin enviarla a ningún servidor.",
            ],
        },
        {
            heading: "Cómo convertir HEIC a PNG paso a paso",
            steps: [
                "Toca “Seleccionar imágenes” y elige tus fotos HEIC o HEIF, o arrástralas a la zona de carga.",
                "No hay nada que ajustar: PNG conserva la imagen tal cual, sin nivel de calidad.",
                "Espera a que cada foto muestre la palomita verde.",
                "Descarga cada PNG o todos juntos en un archivo ZIP.",
            ],
        },
        {
            heading: "Para qué te sirve",
            bullets: [
                "Editar fotos en Photoshop, GIMP, Canva o Figma sin acumular pérdida de calidad.",
                "Preparar imágenes para quitarles el fondo en un editor.",
                "Usar fotos del iPhone en presentaciones o materiales impresos con máxima nitidez.",
                "Archivar tus mejores fotos en un formato abierto y ampliamente compatible.",
                "Abrir fotos del iPhone en computadoras con Windows que no reconocen HEIC.",
            ],
        },
        {
            heading: "Lo que debes saber del tamaño",
            paragraphs: [
                "Un PNG de una fotografía pesa bastante más que el HEIC original, a veces cinco o diez veces más, porque no descarta ningún detalle. Es el precio de tener una copia perfecta para editar. Si tu objetivo es solo compartir la foto o subirla a un formulario, te conviene más la herramienta de HEIC a JPG, que produce archivos ligeros y compatibles.",
                "La orientación se respeta, así que tus fotos no saldrán de lado. El PNG resultante no incluye los metadatos originales, como la ubicación donde tomaste la foto.",
            ],
        },
        {
            heading: "Compatibilidad y límites",
            paragraphs: [
                "Funciona en Safari, Chrome, Edge y Firefox actualizados, en celular y computadora. En iPhone con iOS reciente la conversión es especialmente rápida porque el sistema ya sabe leer HEIC. Aceptamos hasta 50 fotos por lote y archivos de hasta 50 MB. Las Live Photos se convierten como imagen fija.",
            ],
        },
        {
            heading: "HEIC, JPG y PNG: cuál elegir",
            paragraphs: [
                "HEIC es ideal para guardar fotos en tu iPhone porque ocupa poco espacio con muy buena calidad. JPG es el formato universal para compartir: ligero y compatible con todo. PNG es el formato de trabajo: sin pérdida, perfecto para editar y para imágenes que vas a combinar con otros elementos gráficos.",
                "Una estrategia práctica es conservar tus originales en HEIC, convertir a JPG lo que vas a compartir y a PNG solo aquello que vas a editar a fondo. Así ahorras espacio y siempre tienes el archivo adecuado para cada uso. Con Dorfic puedes hacer ambas conversiones desde el navegador, sin instalar programas ni subir tus fotos.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿HEIC a PNG pierde calidad?",
            a: "No. PNG es un formato sin pérdida, así que la foto conserva toda la calidad que tenía el HEIC al decodificarse.",
        },
        {
            q: "¿Por qué el PNG pesa tanto?",
            a: "Porque guarda cada píxel sin comprimir con pérdida. Para compartir, usa mejor HEIC a JPG o comprime el resultado.",
        },
        {
            q: "¿El PNG tendrá fondo transparente?",
            a: "No automáticamente: las fotos tienen fondo. PNG te permite quitarlo después en un editor sin perder calidad.",
        },
        {
            q: "¿Puedo convertir muchas fotos HEIC a PNG a la vez?",
            a: "Sí, hasta 50 por lote, y las descargas juntas en un ZIP.",
        },
        {
            q: "¿Se suben mis fotos?",
            a: "No. La conversión ocurre en tu navegador y tus fotos nunca salen de tu dispositivo.",
        },
    ],
    related: ["heic-a-jpg", "comprimir-png", "png-a-jpg", "redimensionar-imagen", "comprimir-imagen", "png-a-webp"],
};

export default content;

import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-30kb",
    title: "Comprimir imagen a 30 KB",
    metaDescription:
        "Comprime tu foto a 30 KB o menos gratis, con buena nitidez para solicitudes, becas y credenciales. En segundos y sin subir tu imagen a internet.",
    h1: "Comprimir imagen a 30 KB gratis",
    lead: "Deja tu foto en 30 KB o menos con buena nitidez, lista para solicitudes, becas y credenciales en línea.",
    sections: [
        {
            heading: "30 KB: el límite de muchas solicitudes en línea",
            paragraphs: [
                "Muchos formularios de becas, convocatorias, registros escolares y solicitudes laborales piden una fotografía de máximo 30 KB. Es un punto intermedio: lo bastante pequeño para que el sistema almacene miles de expedientes, pero suficiente para que tu rostro se vea con claridad.",
                "Esta página ya viene configurada con ese límite. Solo selecciona tu foto: Dorfic prueba distintos niveles de compresión, elige la mejor calidad que cabe en 30 KB y, si hace falta, ajusta las dimensiones para mantener la imagen nítida.",
            ],
        },
        {
            heading: "Cómo dejar tu foto en 30 KB",
            steps: [
                "Toma o elige una foto de frente, con buena luz y fondo liso.",
                "Recorta para dejar tu rostro y hombros.",
                "Selecciona la imagen aquí; el objetivo de 30 KB ya está listo.",
                "Descarga el resultado y súbelo al formulario.",
            ],
        },
        {
            heading: "Cómo se ve una foto de 30 KB",
            paragraphs: [
                "Con 30 KB una foto de rostro puede medir alrededor de 500 a 700 píxeles de lado con buena definición. Se ve bien en pantalla y en credenciales impresas pequeñas. Es notablemente mejor que 20 KB y suele cumplir con lo que piden las instituciones cuando solicitan una foto tipo infantil o de credencial en formato digital.",
            ],
        },
        {
            heading: "Consejos para que tu foto sea aceptada",
            bullets: [
                "Fondo blanco o claro y uniforme; evita paredes con textura.",
                "Rostro de frente, sin lentes oscuros ni gorra, salvo que se indique lo contrario.",
                "Luz pareja, sin sombras fuertes en la cara.",
                "Formato JPG si el sistema no dice otra cosa.",
                "Nombra el archivo como te lo piden, por ejemplo con tu matrícula o CURP.",
            ],
        },
        {
            heading: "Si el portal pide medidas exactas",
            paragraphs: [
                "Algunos sistemas piden además medidas en píxeles, como 480 × 640. En ese caso usa primero la herramienta de redimensionar con esas medidas y después vuelve aquí para comprimir. Así cumples ambos requisitos sin que la foto se deforme.",
                "Si al subirla aparece “formato no válido”, verifica que no sea HEIC (fotos de iPhone) o WebP. Puedes convertirla primero a JPG con nuestras herramientas.",
            ],
        },
        {
            heading: "Privacidad",
            paragraphs: [
                "Tu foto nunca sale de tu dispositivo: la compresión se hace en tu navegador. Puedes procesar varias fotos a la vez y descargarlas en un ZIP.",
            ],
        },
        {
            heading: "Errores comunes al subir fotos a formularios",
            paragraphs: [
                "El error más frecuente no es el peso, sino el formato: las fotos de iPhone se guardan como HEIC y muchos portales las rechazan aunque pesen poco. Otro problema común es subir una captura de pantalla de la foto en lugar de la foto original, lo que añade bordes, barras del celular y pérdida de calidad.",
                "También conviene revisar la orientación: si la foto aparece de lado en el portal, vuelve a exportarla. Dorfic respeta la orientación correcta al comprimir, así que el archivo que descargas ya se ve derecho en cualquier sistema. Por último, evita filtros y efectos de belleza: las instituciones suelen pedir una foto natural y reciente.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Cómo reduzco una foto a 30 KB desde el celular?",
            a: "Abre esta página, toca “Seleccionar imágenes”, elige tu foto y descárgala cuando aparezca la palomita verde.",
        },
        {
            q: "¿La foto pesará exactamente 30 KB?",
            a: "Pesará 30 KB o un poco menos. Nunca rebasa el límite.",
        },
        {
            q: "¿Por qué cambió el tamaño en píxeles?",
            a: "Porque para caber en 30 KB con buena nitidez a veces hay que reducir dimensiones. Es mejor que dejar la foto grande y llena de manchas.",
        },
        {
            q: "Mi foto es de iPhone y no la acepta el portal, ¿qué hago?",
            a: "Seguramente está en HEIC. Conviértela primero con la herramienta HEIC a JPG y luego comprímela aquí.",
        },
        {
            q: "¿Es seguro?",
            a: "Sí. Tu foto se procesa en tu dispositivo y nunca se sube a internet.",
        },
    ],
    related: ["comprimir-imagen-a-20kb", "comprimir-imagen-a-50kb", "comprimir-imagen-a-10kb", "redimensionar-imagen", "heic-a-jpg", "comprimir-imagen"],
};

export default content;

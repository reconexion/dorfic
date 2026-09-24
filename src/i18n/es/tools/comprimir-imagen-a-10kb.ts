import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-10kb",
    title: "Comprimir imagen a 10 KB",
    metaDescription:
        "Reduce tu imagen a 10 KB o menos gratis. Para firmas escaneadas y sistemas con límites extremos. Sin registro y sin subir tus fotos a internet.",
    h1: "Comprimir imagen a 10 KB gratis",
    lead: "Para los sistemas más estrictos: deja tu firma o foto en 10 KB o menos, en segundos y sin subirla a internet.",
    sections: [
        {
            heading: "¿Quién pide imágenes de 10 KB?",
            paragraphs: [
                "Diez kilobytes es uno de los límites más bajos que existen. Lo encontrarás sobre todo en sistemas antiguos o muy restrictivos: registros donde se sube una firma escaneada, credenciales digitales con foto miniatura, bases de datos de escuelas o dependencias que almacenan miles de expedientes, y algunos formularios de exámenes o convocatorias.",
                "Llegar a 10 KB desde una foto de celular de 3 MB exige reducir el archivo más de 99%. Esta página ya está configurada para lograrlo: Dorfic ajusta la compresión y las dimensiones automáticamente para que el resultado cumpla el límite y se vea lo mejor posible.",
            ],
        },
        {
            heading: "Cómo dejar tu imagen en 10 KB",
            steps: [
                "Recorta la imagen para dejar solo lo necesario: tu firma, o tu rostro y hombros.",
                "Selecciona o arrastra la imagen. El objetivo de 10 KB ya está elegido.",
                "Si el sistema exige JPG, cámbialo en “Formato de salida”.",
                "Comprueba el peso final y descarga tu imagen.",
            ],
        },
        {
            heading: "Qué esperar de una imagen de 10 KB",
            paragraphs: [
                "A este tamaño, una fotografía de rostro queda de unos 200 a 300 píxeles de lado: suficiente para una credencial en pantalla o un expediente digital, pero no para imprimir. Las firmas funcionan especialmente bien, porque son trazos oscuros sobre fondo blanco y se comprimen con muy poca pérdida.",
                "Si el resultado se ve demasiado borroso, lo más efectivo es recortar más. Cada zona de fondo que eliminas deja más espacio para el detalle importante.",
            ],
        },
        {
            heading: "Consejos para firmas escaneadas",
            bullets: [
                "Firma con tinta negra o azul oscuro sobre una hoja blanca sin rayas.",
                "Toma la foto con buena luz, de frente y sin sombras.",
                "Recorta muy cerca de la firma antes de comprimir.",
                "Si el sistema pide medidas específicas, redimensiona primero.",
                "Revisa que el archivo final se lea con claridad antes de subirlo.",
            ],
        },
        {
            heading: "¿Y si no llego a 10 KB con buena calidad?",
            paragraphs: [
                "Revisa si el sistema acepta un límite un poco mayor: la diferencia entre 10 y 20 KB es grande en calidad. También verifica el formato permitido; algunos portales aceptan PNG para firmas, que puede verse más limpio en trazos finos.",
            ],
        },
        {
            heading: "Privacidad",
            paragraphs: [
                "Las firmas y fotos para trámites son datos sensibles. Dorfic no las sube a ningún servidor: todo se procesa en tu navegador. El archivo final no incluye metadatos como la ubicación.",
            ],
        },
        {
            heading: "Diferencia entre 10, 20 y 30 KB",
            paragraphs: [
                "Cada escalón de tamaño cambia bastante lo que cabe en la imagen. A 10 KB una firma se ve limpia, pero una foto de rostro queda pequeña y algo suave. A 20 KB ya puedes tener una foto tipo credencial reconocible, y a 30 KB la misma foto gana nitidez en ojos, cabello y bordes. Por eso te recomendamos usar siempre el límite más alto que te permita el sistema: no hay ninguna ventaja en quedarte muy por debajo.",
                "Si no sabes cuál es el límite exacto, revisa las instrucciones del portal o el mensaje de error que aparece al intentar subir el archivo; normalmente indica el peso máximo permitido. Con ese dato, elige la página de Dorfic que corresponda o escribe el valor exacto en el compresor general.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Se puede comprimir una foto de celular a 10 KB?",
            a: "Sí. Dorfic reduce la calidad y las dimensiones lo necesario para que quede en 10 KB o menos.",
        },
        {
            q: "¿Se verá bien?",
            a: "Para firmas y fotos pequeñas tipo credencial, sí. No es un tamaño adecuado para imprimir o para imágenes con mucho detalle.",
        },
        {
            q: "¿Quedará exactamente en 10 KB?",
            a: "Quedará en 10 KB o un poco menos, nunca por encima del límite.",
        },
        {
            q: "¿Mi firma se guarda en algún lado?",
            a: "No. Nunca sale de tu dispositivo y desaparece al cerrar la página.",
        },
        {
            q: "¿Qué hago si el portal pide medidas en píxeles?",
            a: "Usa primero la herramienta de redimensionar con las medidas que te piden y después comprime aquí.",
        },
    ],
    related: ["comprimir-imagen-a-20kb", "comprimir-imagen-a-30kb", "comprimir-imagen-a-50kb", "redimensionar-imagen", "comprimir-imagen", "heic-a-jpg"],
};

export default content;

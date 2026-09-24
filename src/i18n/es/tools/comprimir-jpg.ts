import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-jpg",
    title: "Comprimir JPG",
    metaDescription:
        "Comprime fotos JPG gratis y reduce su peso hasta 90% sin que se note. Elige KB o calidad, procesa en lote y descarga en ZIP. Sin subir tus fotos.",
    h1: "Comprimir JPG gratis",
    lead: "Reduce el peso de tus fotos JPG en segundos, sin perder nitidez visible y sin que salgan de tu dispositivo.",
    sections: [
        {
            heading: "¿Por qué tus JPG pesan tanto?",
            paragraphs: [
                "Las cámaras de los celulares actuales guardan fotos de 12, 48 o hasta 200 megapíxeles con una compresión muy ligera, pensada para conservar todos los detalles por si decides imprimir o recortar. El resultado son archivos JPG de 3 a 8 MB cada uno. Para verlos en una pantalla, mandarlos por correo o subirlos a un formulario, ese peso es innecesario.",
                "Comprimir un JPG consiste en volver a guardarlo con una compresión más eficiente y, si hace falta, con menos píxeles. Bien hecho, la foto se ve prácticamente igual y pesa entre 70% y 95% menos. Dorfic lo hace en tu navegador: no instalas nada y tus fotos nunca se suben a internet.",
            ],
        },
        {
            heading: "Cómo comprimir un JPG paso a paso",
            steps: [
                "Selecciona tus fotos JPG, arrástralas a la zona de carga o pégalas con Ctrl + V.",
                "Elige “Tamaño objetivo” y toca 20, 50, 100, 200 o 500 KB; o elige “Por calidad” y mueve el control.",
                "Espera la palomita verde: verás el peso antes y después y el porcentaje ahorrado.",
                "Descarga cada foto o todas juntas en un ZIP.",
            ],
        },
        {
            heading: "¿Tamaño objetivo o calidad?",
            paragraphs: [
                "Usa “Tamaño objetivo” cuando alguien te pone un límite: un portal que acepta máximo 100 KB, un correo que rechaza adjuntos de más de 10 MB en total o una plataforma escolar con límite por archivo. Dorfic busca automáticamente la calidad más alta que cabe en ese peso.",
                "Usa “Por calidad” cuando lo importante es que la foto se vea bien y solo quieres aligerarla. Entre 75% y 85% es el punto ideal para la mayoría de las fotos: la diferencia con el original es muy difícil de notar y el archivo suele quedar en una cuarta parte de su peso.",
            ],
        },
        {
            heading: "Usos más comunes",
            bullets: [
                "Mandar muchas fotos por correo sin rebasar el límite de adjuntos.",
                "Subir fotos a portales de empleo, becas o trámites que limitan el peso.",
                "Acelerar tu página web o tienda en línea con imágenes más ligeras.",
                "Liberar espacio en tu celular o en la nube conservando tus recuerdos.",
                "Compartir álbumes por WhatsApp o Telegram gastando menos datos.",
            ],
        },
        {
            heading: "Consejos para obtener la mejor calidad",
            paragraphs: [
                "Comprime siempre a partir de la foto original y no de una que ya fue comprimida antes: cada vez que un JPG se vuelve a guardar pierde un poco de detalle. Si necesitas medidas específicas, redimensiona primero y comprime después; así el peso se aprovecha en los píxeles que realmente se van a ver.",
                "Si tu foto tiene cielos o degradados suaves, evita calidades por debajo de 60%, porque pueden aparecer franjas. Para fotos de documentos, una calidad de 70% suele conservar el texto perfectamente legible.",
            ],
        },
        {
            heading: "Privacidad y límites",
            paragraphs: [
                "Puedes comprimir hasta 50 fotos a la vez, de hasta 50 MB cada una. Todo el trabajo lo hace tu dispositivo, por lo que no hay filas de espera ni límites diarios. El archivo resultante no incluye metadatos como la ubicación GPS, un detalle útil si vas a compartir tus fotos públicamente.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Cuánto puedo reducir el peso de un JPG?",
            a: "En fotos de celular es común bajar entre 70% y 95% del peso. Dorfic te muestra el ahorro exacto de cada archivo.",
        },
        {
            q: "¿Se nota la compresión?",
            a: "Con calidades entre 75% y 85% la diferencia es prácticamente invisible a tamaño de pantalla. Solo con límites muy bajos, como 20 KB, la foto pierde detalle.",
        },
        {
            q: "¿Puedo comprimir varias fotos JPG a la vez?",
            a: "Sí, hasta 50 por lote. Al final las descargas juntas en dorfic-imagenes.zip.",
        },
        {
            q: "¿Mis fotos se suben a algún servidor?",
            a: "No. La compresión ocurre en tu navegador y tus fotos nunca salen de tu dispositivo.",
        },
        {
            q: "¿Qué diferencia hay entre JPG y JPEG?",
            a: "Ninguna: son el mismo formato. JPEG es el nombre completo y JPG la extensión corta que popularizó Windows.",
        },
        {
            q: "¿Comprimir un JPG cambia sus medidas?",
            a: "En el modo por calidad, no. En el modo de tamaño objetivo, solo si el límite es tan bajo que hace falta reducir las dimensiones para que la foto se siga viendo nítida.",
        },
    ],
    related: ["comprimir-imagen", "comprimir-imagen-a-100kb", "comprimir-png", "redimensionar-imagen", "jpg-a-webp", "comprimir-imagen-a-200kb"],
};

export default content;

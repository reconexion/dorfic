import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen",
    title: "Comprimir imagen",
    metaDescription:
        "Comprime imágenes JPG, PNG y WebP gratis al tamaño en KB que necesites o por porcentaje de calidad. Ve el peso antes y después. Sin subir tus fotos.",
    h1: "Comprimir imagen gratis",
    lead: "Reduce el peso de tus fotos JPG, PNG o WebP al tamaño exacto en KB que te piden, sin instalar nada y sin subirlas a internet.",
    sections: [
        {
            heading: "¿Qué hace el compresor de imágenes?",
            paragraphs: [
                "Comprimir una imagen significa bajar su peso (los KB o MB que ocupa) cuidando que se siga viendo bien. Las fotos de un celular actual pesan entre 2 y 6 MB, algo exagerado para mandarlas por correo, subirlas a un formulario o usarlas en una página web. Con esta herramienta puedes dejarlas en 100 KB, 50 KB o el tamaño que necesites en unos cuantos segundos.",
                "Tienes dos formas de trabajar. En “Tamaño objetivo” eliges el peso máximo en KB y Dorfic busca automáticamente la mejor calidad posible que quepa en ese límite; si hace falta, también reduce un poco las dimensiones. En “Por calidad” eliges un porcentaje y controlas tú el equilibrio entre nitidez y peso.",
            ],
        },
        {
            heading: "Cómo comprimir una imagen paso a paso",
            steps: [
                "Elige el modo: tamaño objetivo (recomendado para trámites) o por calidad.",
                "Si usas tamaño objetivo, toca uno de los botones rápidos (20, 50, 100, 200 o 500 KB) o escribe otro valor.",
                "Selecciona, arrastra o pega tus imágenes. Puedes subir varias a la vez.",
                "Revisa el resultado: verás el peso antes y después, y cuánto porcentaje ahorraste.",
                "Descarga cada imagen o todas juntas en un ZIP.",
            ],
        },
        {
            heading: "¿Para qué sirve comprimir tus fotos?",
            bullets: [
                "Formularios con límite de peso: solicitudes de empleo, becas, inscripciones y trámites de gobierno suelen pedir archivos de menos de 100 o 200 KB.",
                "Correo electrónico: evita que tus mensajes reboten por adjuntos demasiado grandes.",
                "WhatsApp y redes sociales: sube fotos más rápido y gasta menos datos móviles.",
                "Páginas web y tiendas en línea: imágenes ligeras hacen que tu sitio cargue rápido y posicione mejor en Google.",
                "Liberar espacio: guarda más fotos en tu celular o en la nube sin pagar almacenamiento extra.",
            ],
        },
        {
            heading: "¿Qué formato de salida me conviene?",
            paragraphs: [
                "Por defecto la imagen conserva su formato original. Para fotografías, JPG es la opción más compatible. WebP logra archivos todavía más ligeros con la misma calidad y lo aceptan todos los navegadores modernos, aunque algunos portales antiguos no lo reconocen. PNG no pierde calidad, pero no se puede comprimir tanto: si tienes una foto guardada como PNG y necesitas que pese muy poco, cambia la salida a JPG y verás una diferencia enorme.",
                "Si la imagen tiene fondo transparente y la conviertes a JPG, la transparencia se rellena con blanco, porque JPG no admite transparencia.",
            ],
        },
        {
            heading: "Límites y consejos",
            paragraphs: [
                "Cuanto más pequeño es el tamaño objetivo, más detalle se pierde. Una foto a 20 KB sirve para una credencial o un avatar, pero no para imprimirla. Si ves la imagen muy borrosa, prueba con un límite mayor o recórtala antes para quitar lo que no importa. Aceptamos archivos de hasta 50 MB y hasta 50 imágenes por lote. Todo el proceso ocurre en tu dispositivo, así que en celulares viejos puede tardar un poco más.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Cómo reduzco el peso de una imagen sin perder calidad?",
            a: "Usa el modo “Por calidad” entre 75% y 85%: la diferencia casi no se nota y el peso suele bajar más de la mitad. Si además cambias la salida a WebP, el archivo queda todavía más ligero.",
        },
        {
            q: "¿La imagen queda exactamente en el tamaño que elijo?",
            a: "Queda en ese tamaño o un poco por debajo, nunca por encima. Dorfic busca la calidad más alta que cabe en el límite, así que normalmente queda muy cerca del valor que pediste.",
        },
        {
            q: "¿Qué pasa si mi imagen ya pesa menos que el objetivo?",
            a: "Se deja igual para no perder calidad sin necesidad. Verás el aviso “Ya cumplía, se dejó igual” y puedes descargarla tal cual.",
        },
        {
            q: "¿Es seguro comprimir documentos personales aquí?",
            a: "Sí. Tus imágenes nunca se suben a internet: todo se procesa en tu navegador. Puedes comprimir fotos de tu INE, comprobantes o documentos con tranquilidad.",
        },
        {
            q: "¿Puedo comprimir PNG con fondo transparente?",
            a: "Sí. Si mantienes el formato PNG o eliges WebP, la transparencia se conserva. Solo al convertir a JPG el fondo transparente se vuelve blanco.",
        },
        {
            q: "¿Cuántas imágenes puedo comprimir a la vez?",
            a: "Hasta 50 imágenes por lote, de hasta 50 MB cada una. Al terminar puedes descargarlas todas en un ZIP.",
        },
    ],
    related: ["comprimir-imagen-a-100kb", "comprimir-imagen-a-50kb", "comprimir-imagen-a-20kb", "comprimir-imagen-a-200kb", "redimensionar-imagen", "jpg-a-webp"],
};

export default content;

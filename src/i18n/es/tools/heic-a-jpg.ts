import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "heic-a-jpg",
    title: "Convertir HEIC a JPG",
    metaDescription:
        "Convierte fotos HEIC de iPhone a JPG gratis, sin instalar nada y sin subirlas a internet. Varias a la vez, eliges la calidad y descargas en ZIP.",
    h1: "Convertir HEIC a JPG gratis",
    lead: "Pasa las fotos de tu iPhone a JPG en segundos. Funciona en tu celular o computadora y tus fotos nunca salen de tu dispositivo.",
    sections: [
        {
            heading: "¿Qué hace este convertidor de HEIC a JPG?",
            paragraphs: [
                "Desde hace varios años, el iPhone guarda las fotos en formato HEIC (también llamado HEIF). Es un formato muy eficiente: ocupa casi la mitad de espacio que un JPG con la misma calidad. El problema es que muchas páginas, programas y computadoras con Windows todavía no lo abren, y cuando intentas subir la foto a un formulario te aparece el clásico “formato no válido”.",
                "Esta herramienta de Dorfic convierte tus archivos .heic o .heif a .jpg, el formato de imagen más compatible que existe. Lo hace directamente en tu navegador: la foto se lee, se decodifica y se vuelve a guardar como JPG en tu propio equipo, sin pasar por ningún servidor. Por eso es rápida, gratuita y privada.",
            ],
        },
        {
            heading: "Cómo convertir HEIC a JPG paso a paso",
            steps: [
                "Toca “Seleccionar imágenes” y elige una o varias fotos HEIC. En computadora también puedes arrastrarlas a la zona punteada o pegarlas con Ctrl + V.",
                "Si quieres, ajusta la calidad. El 90% viene por defecto porque conserva el detalle y deja un archivo de peso razonable.",
                "Espera unos segundos: verás el avance de cada foto y una palomita verde cuando esté lista.",
                "Descarga cada JPG por separado o todas juntas con el botón “Descargar todo (ZIP)”.",
            ],
        },
        {
            heading: "¿Para qué te sirve pasar tus fotos a JPG?",
            bullets: [
                "Trámites en línea: muchos portales de gobierno, bancos y aseguradoras solo aceptan JPG o PNG al subir identificaciones, comprobantes o fotografías.",
                "Escuela y universidad: plataformas de tareas, inscripciones y exámenes en línea suelen rechazar HEIC.",
                "Bolsas de trabajo: para agregar tu foto al currículum o a tu perfil profesional sin errores.",
                "Computadoras con Windows: abre tus fotos del iPhone sin instalar extensiones ni códecs de paga.",
                "Imprimir o editar: casi todas las impresoras, centros de revelado y editores de foto trabajan con JPG.",
            ],
        },
        {
            heading: "Calidad, tamaño y metadatos",
            paragraphs: [
                "Al convertir, el JPG normalmente pesa un poco más que el HEIC original, porque JPG es un formato más antiguo y menos eficiente. Si necesitas que la foto pese poco (por ejemplo, para un formulario con límite de KB), baja la calidad a 70–80% o, después de convertirla, usa nuestro compresor de imágenes para dejarla en el tamaño exacto que te piden.",
                "La foto se guarda con la orientación correcta, así que no aparecerá de lado. Además, el JPG resultante no incluye los metadatos del archivo original, como la ubicación GPS donde tomaste la foto. Es un detalle de privacidad útil si vas a compartir la imagen con desconocidos.",
            ],
        },
        {
            heading: "Límites que conviene conocer",
            paragraphs: [
                "Como todo el trabajo lo hace tu dispositivo, la velocidad depende de su potencia. En un celular reciente cada foto tarda uno o dos segundos; en equipos más viejos puede tardar un poco más. Aceptamos archivos de hasta 50 MB y lotes de hasta 50 fotos a la vez. Las fotos “en vivo” (Live Photos) se convierten como imagen fija, y si un archivo HEIC contiene varias imágenes, se toma la principal.",
                "Si tu iPhone te lo permite, también puedes evitar el HEIC desde el origen: en Ajustes › Cámara › Formatos, elige “Más compatible”. Aun así, las fotos que ya tienes guardadas seguirán en HEIC, y para esas está esta herramienta.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Es gratis convertir HEIC a JPG en Dorfic?",
            a: "Sí, es completamente gratis y sin registro. No hay marcas de agua ni límite diario. El sitio se mantiene con anuncios discretos.",
        },
        {
            q: "¿Mis fotos se suben a algún servidor?",
            a: "No. La conversión ocurre dentro de tu navegador, en tu propio celular o computadora. Tus fotos nunca salen de tu dispositivo y nadie más puede verlas.",
        },
        {
            q: "¿Funciona en iPhone y Android?",
            a: "Sí. Funciona en Safari, Chrome, Edge y Firefox actualizados, tanto en celular como en computadora. En iPhone, al tocar “Seleccionar imágenes” puedes elegir las fotos directo de tu galería.",
        },
        {
            q: "¿Puedo convertir varias fotos HEIC al mismo tiempo?",
            a: "Sí, puedes seleccionar hasta 50 fotos de una vez. Se procesan en lote y al final las descargas todas juntas en un archivo ZIP llamado dorfic-imagenes.zip.",
        },
        {
            q: "¿Pierdo calidad al pasar de HEIC a JPG?",
            a: "Con la calidad al 90% la diferencia es prácticamente imposible de notar a simple vista. Si quieres el máximo detalle, sube la calidad al 100%, aunque el archivo pesará más.",
        },
        {
            q: "¿Por qué el JPG pesa más que el HEIC?",
            a: "Porque HEIC comprime mejor que JPG. Es normal que el JPG pese entre 1.5 y 2 veces más. Si necesitas un archivo ligero, baja la calidad o usa la herramienta para comprimir imagen.",
        },
        {
            q: "¿Se conserva la ubicación y los datos de la cámara?",
            a: "No. El JPG que descargas no incluye la ubicación GPS ni otros metadatos del original, lo cual protege tu privacidad al compartir la foto.",
        },
    ],
    related: ["comprimir-imagen", "redimensionar-imagen", "comprimir-imagen-a-200kb", "png-a-jpg", "webp-a-jpg", "jpg-a-webp"],
};

export default content;

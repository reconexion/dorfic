import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-100kb",
    title: "Comprimir imagen a 100 KB",
    metaDescription:
        "Comprime fotos y documentos escaneados a 100 KB o menos, gratis y sin subirlos a internet. Ideal para trámites y formularios con límite de peso.",
    h1: "Comprimir imagen a 100 KB gratis",
    lead: "Deja tus fotos y documentos escaneados en 100 KB o menos para cualquier trámite en línea. Sin registro y 100% privado.",
    sections: [
        {
            heading: "El límite más común en trámites: 100 KB",
            paragraphs: [
                "Cuando un portal te pide subir una identificación, un comprobante de domicilio, un acta o una constancia en imagen, es muy común que el límite sea de 100 KB por archivo. También lo usan muchas plataformas de inscripción escolar, bolsas de trabajo y sistemas de atención a clientes. Es un tamaño que permite que un documento completo siga siendo legible, siempre que la imagen se optimice bien.",
                "Esta página ya está configurada para 100 KB. Dorfic busca automáticamente la calidad más alta posible sin pasarse del límite, y solo reduce las dimensiones cuando es indispensable. Así tus documentos quedan ligeros y se siguen leyendo.",
            ],
        },
        {
            heading: "Cómo comprimir a 100 KB paso a paso",
            steps: [
                "Toma una foto clara del documento o selecciona la imagen que ya tienes.",
                "Súbela a la zona de carga (también puedes arrastrarla o pegarla). Puedes agregar varias a la vez, por ejemplo el frente y la vuelta de tu identificación.",
                "Si el sistema lo exige, cambia el formato de salida a JPG.",
                "Revisa el peso final y descarga cada imagen o todas en un ZIP.",
            ],
        },
        {
            heading: "¿Qué puedes comprimir a 100 KB?",
            bullets: [
                "Identificaciones oficiales por ambos lados.",
                "Comprobantes de domicilio, recibos y estados de cuenta fotografiados.",
                "Actas, constancias, certificados y boletas escaneadas.",
                "Fotografías para expedientes escolares o laborales.",
                "Capturas de pantalla de pagos o transferencias.",
            ],
        },
        {
            heading: "Trucos para que el documento se lea bien",
            paragraphs: [
                "La calidad final depende mucho de la foto original. Coloca el documento sobre una superficie oscura y lisa, con buena luz natural y sin flash, y toma la foto de frente para que no salga chueco. Recorta los bordes que sobren: cuanto menos fondo haya, más detalle quedará para el texto.",
                "Si el documento tiene letra muy pequeña y a 100 KB no se alcanza a leer, verifica si el portal acepta PDF o un límite mayor. También puedes probar la salida en JPG en lugar de PNG, ya que JPG suele conservar mejor el texto en fotos de documentos cuando el límite es ajustado.",
            ],
        },
        {
            heading: "Seguridad de tus documentos",
            paragraphs: [
                "Sabemos que los documentos personales son delicados. Dorfic no los sube a internet: la compresión se ejecuta en tu propio navegador y los archivos nunca salen de tu dispositivo. El resultado tampoco guarda la ubicación ni los datos de la cámara. Puedes procesar hasta 50 archivos por lote, de hasta 50 MB cada uno.",
            ],
        },
        {
            heading: "¿Qué significa realmente 100 KB?",
            paragraphs: [
                "Un kilobyte (KB) equivale a 1,024 bytes, así que 100 KB son unos 102,400 bytes. Algunos portales cuentan el límite con 1,000 bytes por KB; por eso Dorfic siempre deja el archivo ligeramente por debajo del objetivo, para que lo acepten sin importar cómo hagan la cuenta. Si ves que tu computadora muestra un número un poco distinto al de la página, es por esa diferencia de redondeo.",
                "Como referencia, una foto de celular sin tocar pesa entre 2,000 y 5,000 KB. Llevarla a 100 KB implica reducir su peso más de 95%, algo que Dorfic logra combinando compresión inteligente y, solo cuando hace falta, una reducción moderada de las dimensiones.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Cómo reduzco una imagen a 100 KB?",
            a: "Selecciona tu imagen en esta página y espera unos segundos. El límite de 100 KB ya está configurado; solo descárgala cuando aparezca la palomita verde.",
        },
        {
            q: "¿Se puede leer un documento comprimido a 100 KB?",
            a: "En la mayoría de los casos sí, sobre todo si la foto está bien iluminada y recortada. Dorfic mantiene la mayor calidad posible dentro del límite.",
        },
        {
            q: "¿Puedo comprimir el frente y la vuelta de mi INE al mismo tiempo?",
            a: "Sí. Selecciona ambas imágenes a la vez; cada una quedará en 100 KB o menos.",
        },
        {
            q: "¿Qué pasa si mi imagen ya pesa menos de 100 KB?",
            a: "Se deja igual para no perder calidad. Verás el aviso “Ya cumplía, se dejó igual”.",
        },
        {
            q: "¿Funciona en el celular?",
            a: "Sí, está pensada para usarse en celular. Puedes elegir las fotos directo de tu galería o tomar una nueva.",
        },
        {
            q: "¿Dorfic guarda copias de mis documentos?",
            a: "No. Nunca recibimos tus archivos: todo se procesa en tu dispositivo y desaparece al cerrar la página.",
        },
    ],
    related: ["comprimir-imagen-a-200kb", "comprimir-imagen-a-50kb", "comprimir-imagen", "heic-a-jpg", "redimensionar-imagen", "png-a-jpg"],
};

export default content;

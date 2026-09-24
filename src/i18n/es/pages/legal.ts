import type { LegalPageContent } from "../../types";

const UPDATED = "23 de septiembre de 2026";

export const acerca: LegalPageContent = {
    title: "Acerca de Dorfic",
    metaDescription:
        "Conoce Dorfic: herramientas de imagen gratuitas que funcionan en tu navegador y protegen tu privacidad. Nuestra misión, cómo funcionamos y cómo nos financiamos.",
    h1: "Acerca de Dorfic",
    intro: "Dorfic es un conjunto de herramientas gratuitas para trabajar con imágenes: convertir formatos, comprimir y cambiar de tamaño. Lo hicimos pensando en las situaciones reales del día a día en México y Latinoamérica.",
    sections: [
        {
            heading: "Nuestra misión",
            paragraphs: [
                "Queremos que cualquier persona pueda preparar sus imágenes para un trámite, la escuela, el trabajo o sus redes sociales sin complicaciones, sin pagar y sin poner en riesgo su información personal. Creemos que algo tan sencillo como reducir el peso de una foto no debería obligarte a crear una cuenta, instalar una aplicación o subir tus documentos a un servidor desconocido.",
            ],
        },
        {
            heading: "Cómo funciona Dorfic",
            paragraphs: [
                "A diferencia de muchos servicios en línea, Dorfic no recibe tus imágenes. Cuando eliges una foto, tu navegador la procesa usando la capacidad de tu propio dispositivo mediante tecnologías web estándar (Canvas y Web Workers). El resultado se genera ahí mismo y lo descargas directamente. Por eso decimos, con total confianza, que tus fotos nunca salen de tu dispositivo.",
                "Esta forma de trabajar también hace que las herramientas sean rápidas: no hay que esperar a que un archivo se suba ni a que un servidor lo procese.",
            ],
        },
        {
            heading: "Cómo nos financiamos",
            paragraphs: [
                "Dorfic es gratuito y se mantiene gracias a anuncios mostrados en el sitio. Procuramos que sean discretos, que nunca tapen las herramientas y que no interrumpan lo que estás haciendo. Los anuncios no tienen acceso a tus imágenes, porque tus imágenes nunca se envían a ningún lado.",
            ],
        },
        {
            heading: "Nuestro compromiso",
            bullets: [
                "Mantener las herramientas gratuitas y sin marcas de agua.",
                "No subir ni almacenar tus imágenes.",
                "Explicar con claridad qué hace cada herramienta y cuáles son sus límites.",
                "Mejorar constantemente con base en los comentarios de quienes usan Dorfic.",
            ],
        },
    ],
};

export const contacto: LegalPageContent = {
    title: "Contacto",
    metaDescription: "¿Tienes dudas, sugerencias o encontraste un error en Dorfic? Escríbenos por Telegram y te responderemos lo antes posible.",
    h1: "Contacto",
    intro: "¿Tienes una duda, una sugerencia de nueva herramienta o encontraste algo que no funciona bien? Nos encantará leerte.",
    sections: [
        {
            heading: "Escríbenos",
            paragraphs: [
                "La mejor forma de contactarnos es por Telegram, en @tostilocos. Respondemos normalmente en un plazo de 2 a 5 días hábiles.",
                "Si nos reportas un problema, cuéntanos qué herramienta usabas, desde qué dispositivo y navegador, y qué mensaje apareció. Por favor no nos envíes imágenes con información personal: no las necesitamos para ayudarte.",
            ],
        },
        {
            heading: "Temas en los que podemos ayudarte",
            bullets: [
                "Dudas sobre cómo usar alguna herramienta.",
                "Reportes de errores o problemas de compatibilidad.",
                "Sugerencias de nuevas funciones o herramientas.",
                "Consultas sobre privacidad, publicidad o temas legales.",
            ],
        },
    ],
};

export const privacidad: LegalPageContent = {
    title: "Aviso de privacidad",
    metaDescription:
        "Aviso de privacidad de Dorfic: tus imágenes se procesan en tu dispositivo y nunca se suben. Conoce qué datos técnicos se recopilan, el uso de cookies publicitarias y tus derechos.",
    h1: "Aviso de privacidad",
    intro: "En Dorfic la privacidad es parte del diseño. Este aviso explica qué información se trata cuando usas el sitio, con qué fines y qué opciones tienes.",
    updated: UPDATED,
    sections: [
        {
            heading: "1. Responsable",
            paragraphs: [
                "Dorfic (en adelante, “Dorfic”, “nosotros”) es responsable del sitio web y de las herramientas que ofrece. Puedes contactarnos para cualquier asunto relacionado con este aviso por Telegram (@tostilocos), como se indica en la página de Contacto.",
            ],
        },
        {
            heading: "2. Tus imágenes no se recopilan",
            paragraphs: [
                "Las imágenes que seleccionas, arrastras o pegas en las herramientas se procesan exclusivamente en tu navegador, dentro de tu dispositivo. No se envían a nuestros servidores ni a los de terceros, no las almacenamos y no tenemos forma de verlas. Cuando cierras o recargas la página, desaparecen de la memoria del navegador.",
                "Los archivos resultantes tampoco incluyen los metadatos del original (como la ubicación GPS o el modelo de la cámara), salvo cuando una imagen se deja sin cambios porque ya cumplía con el tamaño solicitado.",
            ],
        },
        {
            heading: "3. Datos técnicos y analítica",
            paragraphs: [
                "Para saber cuántas personas visitan el sitio y qué páginas son más útiles usamos Cloudflare Web Analytics, un servicio de analítica que no utiliza cookies ni rastrea a las personas entre sitios. Recopila información agregada como la página visitada, el país aproximado, el tipo de dispositivo y el navegador.",
                "Como cualquier sitio web, nuestro proveedor de alojamiento (Cloudflare) puede tratar datos técnicos como la dirección IP de forma temporal para entregar las páginas y proteger el sitio contra ataques. También usamos el idioma de tu navegador y tu país aproximado para mostrarte el sitio en tu idioma, y recordamos tu elección en una pequeña cookie funcional (dorfic_lang).",
            ],
        },
        {
            heading: "4. Publicidad y cookies de terceros",
            paragraphs: [
                "Dorfic se financia con anuncios. Los anuncios los gestiona Ezoic, que trabaja con Google y otras redes publicitarias. Ezoic, Google y sus socios utilizan cookies u otros identificadores para mostrar anuncios basados en tus visitas anteriores a este y otros sitios web, y para medir su rendimiento.",
                "Puedes desactivar la publicidad personalizada en la Configuración de anuncios de Google (adssettings.google.com) o visitar www.aboutads.info para desactivar cookies de otros proveedores. Para más información sobre cómo Google usa los datos, consulta policies.google.com/technologies/partner-sites. Cuando la ley lo requiera, te pediremos tu consentimiento antes de usar cookies publicitarias.",
            ],
        },
        {
            heading: "5. Almacenamiento local",
            paragraphs: [
                "Para que el sitio funcione sin conexión y cargue más rápido, tu navegador puede guardar archivos del propio sitio (código, estilos e íconos) mediante un service worker. Estos archivos no contienen información personal ni tus imágenes, y puedes borrarlos desde la configuración de tu navegador.",
            ],
        },
        {
            heading: "6. Tus derechos",
            paragraphs: [
                "Como no recopilamos datos que te identifiquen directamente, en la mayoría de los casos no tenemos información tuya que consultar, corregir o eliminar. Aun así, puedes escribirnos para ejercer tus derechos de acceso, rectificación, cancelación u oposición (derechos ARCO) conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, o para cualquier duda sobre este aviso. Si nos escribes por Telegram, usaremos tu usuario únicamente para responderte.",
            ],
        },
        {
            heading: "7. Menores de edad",
            paragraphs: [
                "Dorfic puede usarse por personas de cualquier edad porque no pedimos registro ni datos personales. Recomendamos que las personas menores de edad naveguen con la supervisión de un adulto.",
            ],
        },
        {
            heading: "8. Cambios a este aviso",
            paragraphs: [
                "Podemos actualizar este aviso para reflejar cambios en el sitio o en la ley. Publicaremos la versión vigente en esta página con su fecha de actualización.",
            ],
        },
    ],
};

export const terminos: LegalPageContent = {
    title: "Términos de uso",
    metaDescription: "Términos y condiciones de uso de Dorfic, las herramientas de imagen gratuitas que funcionan en tu navegador.",
    h1: "Términos de uso",
    intro: "Al usar Dorfic aceptas estos términos. Son breves y buscan ser claros; léelos antes de usar las herramientas.",
    updated: UPDATED,
    sections: [
        {
            heading: "1. El servicio",
            paragraphs: [
                "Dorfic ofrece herramientas gratuitas para convertir, comprimir y redimensionar imágenes. Las herramientas se ejecutan en tu navegador y el procesamiento ocurre en tu dispositivo. El servicio se ofrece “tal cual” y puede cambiar, ampliarse o interrumpirse en cualquier momento sin previo aviso.",
            ],
        },
        {
            heading: "2. Uso permitido",
            paragraphs: ["Puedes usar Dorfic para fines personales y comerciales. Te comprometes a no usarlo para:"],
            bullets: [
                "Procesar imágenes sobre las que no tengas derechos o permiso de uso.",
                "Crear o distribuir contenido ilegal, difamatorio o que infrinja derechos de terceros.",
                "Intentar dañar, sobrecargar o interferir con el funcionamiento del sitio.",
                "Copiar o reproducir el sitio, su diseño o sus textos sin autorización.",
            ],
        },
        {
            heading: "3. Tus imágenes",
            paragraphs: [
                "Tú conservas todos los derechos sobre las imágenes que procesas. Dorfic no las recibe ni reclama ningún derecho sobre ellas. Eres responsable de conservar copias de tus archivos originales; te recomendamos no borrar el original hasta revisar el resultado.",
            ],
        },
        {
            heading: "4. Sin garantías",
            paragraphs: [
                "Hacemos nuestro mejor esfuerzo para que las herramientas funcionen correctamente, pero no garantizamos que estén libres de errores, que funcionen en todos los dispositivos o navegadores, ni que el resultado sea aceptado por un portal o institución en particular. Verifica siempre los requisitos del sitio donde usarás tus imágenes.",
            ],
        },
        {
            heading: "5. Limitación de responsabilidad",
            paragraphs: [
                "En la medida permitida por la ley, Dorfic no será responsable por daños directos o indirectos derivados del uso o la imposibilidad de uso del sitio, incluida la pérdida de datos o archivos.",
            ],
        },
        {
            heading: "6. Publicidad y enlaces",
            paragraphs: [
                "El sitio muestra anuncios de terceros y puede contener enlaces a otros sitios. No controlamos ni somos responsables del contenido, productos o prácticas de privacidad de esos terceros.",
            ],
        },
        {
            heading: "7. Propiedad intelectual",
            paragraphs: [
                "La marca Dorfic, su logotipo, el diseño del sitio y sus textos pertenecen a Dorfic. Las bibliotecas de código abierto que usamos se rigen por sus propias licencias.",
            ],
        },
        {
            heading: "8. Cambios y legislación aplicable",
            paragraphs: [
                "Podemos modificar estos términos en cualquier momento; la versión vigente es la publicada en esta página. Estos términos se rigen por las leyes de los Estados Unidos Mexicanos.",
            ],
        },
    ],
};

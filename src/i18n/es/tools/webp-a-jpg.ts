import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "webp-a-jpg",
    title: "Convertir WebP a JPG",
    metaDescription:
        "Convierte imágenes WebP a JPG gratis para abrirlas y subirlas en cualquier lado. En lote, con calidad ajustable y sin subir tus archivos.",
    h1: "Convertir WebP a JPG gratis",
    lead: "¿Descargaste una imagen y se guardó como .webp? Conviértela a JPG en segundos para abrirla, editarla o subirla donde quieras.",
    sections: [
        {
            heading: "¿Qué es WebP y por qué convertirlo?",
            paragraphs: [
                "WebP es un formato de imagen creado para que las páginas web carguen rápido. Muchos sitios lo usan, así que cuando guardas una imagen desde el navegador es común que se descargue con extensión .webp. El problema aparece después: algunos editores, programas de oficina, visores antiguos, impresoras o formularios en línea no lo reconocen.",
                "Esta herramienta convierte tus archivos WebP a JPG, el formato que acepta prácticamente cualquier dispositivo o plataforma. Todo sucede dentro de tu navegador, por lo que es inmediato y privado.",
            ],
        },
        {
            heading: "Cómo convertir WebP a JPG paso a paso",
            steps: [
                "Selecciona tus imágenes WebP, arrástralas a la zona punteada o pégalas con Ctrl + V.",
                "Elige la calidad del JPG. Con 92% mantienes casi todo el detalle.",
                "Mira el avance de cada imagen; al terminar verás el peso final.",
                "Descarga los JPG por separado o todos en un ZIP.",
            ],
        },
        {
            heading: "Situaciones en las que te sirve",
            bullets: [
                "Guardaste una imagen de internet y tu computadora no la abre con doble clic.",
                "Quieres insertar la imagen en Word, PowerPoint o un programa de diseño que no soporta WebP.",
                "Un formulario de la escuela, del trabajo o de un trámite te pide JPG.",
                "Vas a imprimir la imagen o mandarla a revelar.",
                "Quieres compartirla con alguien que usa un equipo o aplicación antigua.",
            ],
        },
        {
            heading: "Calidad y transparencia",
            paragraphs: [
                "WebP suele ser más eficiente que JPG, así que es normal que el archivo convertido pese un poco más que el original. Si necesitas que sea ligero, baja la calidad a 75–85% o pásalo después por el compresor de imágenes para dejarlo en un tamaño exacto en KB.",
                "Algunas imágenes WebP tienen fondo transparente. Como JPG no admite transparencia, esas zonas quedarán en blanco. Las imágenes WebP animadas se convierten usando su primer cuadro, ya que JPG no admite animación. Recuerda también respetar los derechos de autor de las imágenes que descargas de internet: convertirlas no cambia quién es su dueño.",
            ],
        },
        {
            heading: "Límites",
            paragraphs: [
                "Aceptamos hasta 50 imágenes por lote y archivos de hasta 50 MB. La conversión la hace tu dispositivo, así que no hay filas de espera ni límites diarios, pero en equipos antiguos puede tardar un poco más. Tus imágenes nunca se suben a ningún servidor.",
            ],
        },
        {
            heading: "¿JPG o PNG como destino?",
            paragraphs: [
                "Para fotografías, JPG es la mejor opción: es universal y mantiene un peso razonable. Si tu imagen WebP es un logotipo, un ícono o un gráfico con fondo transparente, quizá prefieras conservarla como WebP o convertirla a PNG en un editor, para no perder la transparencia.",
                "Una ventaja de hacer la conversión en tu navegador es la rapidez: no esperas a que se suba el archivo ni a que un servidor lo procese, y puedes convertir decenas de imágenes en lote. Al terminar, descarga el ZIP y tendrás todas tus imágenes listas para abrirse en cualquier programa, celular o computadora.",
            ],
        },
    ],
    faqs: [
        {
            q: "¿Por qué mis imágenes se descargan en formato WebP?",
            a: "Porque muchas páginas web sirven sus imágenes en WebP para cargar más rápido, y el navegador las guarda tal cual. Con esta herramienta las pasas a JPG en segundos.",
        },
        {
            q: "¿Pierdo calidad al convertir WebP a JPG?",
            a: "Muy poca si usas calidad alta (90% o más). A simple vista la imagen se verá igual.",
        },
        {
            q: "¿Qué pasa con las imágenes WebP transparentes?",
            a: "La parte transparente se vuelve blanca, porque JPG no maneja transparencia. Si necesitas conservarla, convierte a PNG con otro editor o deja el WebP.",
        },
        {
            q: "¿Funciona con WebP animados?",
            a: "Se convierte solo el primer cuadro, porque JPG es un formato de imagen fija.",
        },
        {
            q: "¿Necesito instalar algo?",
            a: "No. Funciona en el navegador de tu celular o computadora, sin programas ni registro, y tus archivos nunca salen de tu dispositivo.",
        },
    ],
    related: ["jpg-a-webp", "png-a-jpg", "comprimir-imagen", "heic-a-jpg", "jpg-a-png", "redimensionar-imagen"],
};

export default content;

import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "redimensionar-imagen",
    title: "Redimensionner une image",
    metaDescription:
        "Changez la taille de vos images en pixels ou en pourcentage en conservant les proportions. Gratuit, par lot et sans envoyer vos photos sur un serveur.",
    h1: "Redimensionner une image gratuitement",
    lead: "Modifiez la largeur et la hauteur de vos photos en pixels ou en pourcentage, sans les déformer. Rapide, gratuit et sans quitter votre navigateur.",
    sections: [
        {
            heading: "Que veut dire redimensionner une image ?",
            paragraphs: [
                "Redimensionner, c'est changer les dimensions d'une image, c'est-à-dire son nombre de pixels en largeur et en hauteur. Une photo de téléphone mesure souvent 4000 × 3000 pixels ou plus, bien plus que ce dont un écran, un document ou une publication a besoin. En la réduisant par exemple à 1080 pixels de large, elle reste aussi belle à l'écran et pèse beaucoup moins lourd.",
                "Avec cet outil, vous pouvez indiquer les dimensions exactes en pixels ou simplement choisir un pourcentage de la taille d'origine. L'option « Conserver les proportions » évite que l'image paraisse étirée ou écrasée : saisissez seulement la largeur ou la hauteur et l'autre valeur se calcule toute seule.",
            ],
        },
        {
            heading: "Comment changer la taille d'une image, étape par étape",
            steps: [
                "Choisissez de travailler « En pixels » ou « En pourcentage ».",
                "En pixels, saisissez la largeur, la hauteur ou les deux. Avec « Conserver les proportions » activé, si vous saisissez les deux valeurs, l'image s'ajuste pour tenir dans ce cadre sans se déformer.",
                "En pourcentage, déplacez le curseur : 50 % divise par deux la largeur et la hauteur de l'image.",
                "Choisissez, faites glisser ou collez vos images. Elles sont toutes traitées avec les mêmes réglages.",
                "Téléchargez chaque image ou le lot complet dans un fichier ZIP.",
            ],
        },
        {
            heading: "Usages courants",
            bullets: [
                "Réseaux sociaux : 1080 px de large est une taille standard pour les publications carrées et verticales.",
                "Photos pour démarches : certains sites exigent des dimensions précises, par exemple pour une photo d'identité numérique.",
                "Sites web et blogs : des images de 1200 à 1600 px de large sont nettes et se chargent vite.",
                "Présentations et documents : réduisez vos photos avant de les insérer pour que votre fichier Word ou PowerPoint ne pèse pas des centaines de mégas.",
                "Miniatures et catalogues : créez des versions réduites de vos produits en une seule étape.",
            ],
        },
        {
            heading: "Conseils pour un meilleur résultat",
            paragraphs: [
                "Réduire une image donne toujours un bon résultat, car on supprime des informations superflues. L'agrandir, en revanche, n'ajoute pas de vrais détails : le navigateur doit inventer des pixels et le résultat paraîtra plus doux ou flou. Partez toujours, si possible, de la plus grande image dont vous disposez.",
                "L'image conserve son format d'origine (JPG, PNG ou WebP) et, pour le PNG et le WebP, sa transparence. Si, en plus des dimensions, vous avez besoin d'un poids maximum en Ko, redimensionnez d'abord puis utilisez le compresseur d'images. Pour les fortes réductions, Dorfic réduit l'image par étapes afin que les contours restent nets, sans effet d'escalier.",
            ],
        },
        {
            heading: "Limites",
            paragraphs: [
                "Vous pouvez choisir jusqu'à 16 384 pixels par côté, traiter jusqu'à 50 images par lot et des fichiers jusqu'à 50 Mo. Tout le travail se fait sur votre appareil, vos photos ne le quittent donc jamais. Sur les téléphones avec peu de mémoire, les images géantes peuvent prendre un peu plus de temps.",
            ],
        },
    ],
    faqs: [
        {
            q: "Comment changer la taille d'une photo sans la déformer ?",
            a: "Laissez « Conserver les proportions » activé et saisissez seulement la largeur ou seulement la hauteur. Dorfic calcule l'autre valeur automatiquement pour respecter la forme d'origine.",
        },
        {
            q: "Que se passe-t-il si je saisis largeur et hauteur avec les proportions activées ?",
            a: "L'image s'ajuste pour tenir dans ce cadre sans se déformer. C'est pourquoi l'un des côtés peut être un peu plus petit que le nombre saisi.",
        },
        {
            q: "Puis-je agrandir une image ?",
            a: "Oui, mais agrandir n'ajoute pas de vrais détails et la photo peut paraître floue. L'idéal est d'utiliser cet outil pour réduire.",
        },
        {
            q: "Redimensionner réduit-il aussi le poids ?",
            a: "Oui. Moins de pixels signifie un fichier plus léger. Si vous avez besoin d'un poids exact en Ko, utilisez ensuite l'outil de compression d'image.",
        },
        {
            q: "Mes PNG perdent-ils leur transparence ?",
            a: "Non. L'image garde son format d'origine, donc les PNG et WebP conservent leur fond transparent.",
        },
        {
            q: "Mes images sont-elles envoyées sur internet ?",
            a: "Non. Tout se passe dans votre navigateur. Vos photos ne quittent jamais votre appareil.",
        },
    ],
    related: ["comprimir-imagen", "comprimir-imagen-a-100kb", "heic-a-jpg", "jpg-a-webp", "png-a-jpg", "comprimir-imagen-a-50kb"],
};

export default content;

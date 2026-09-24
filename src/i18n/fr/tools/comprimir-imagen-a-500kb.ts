import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-500kb",
    title: "Compresser une image à 500 Ko",
    metaDescription:
        "Compressez gratuitement vos images à 500 Ko ou moins en gardant presque la qualité d'origine. Idéal pour les concours, portfolios et e-mails. Sans envoyer vos photos.",
    h1: "Compresser une image à 500 Ko gratuitement",
    lead: "Réduisez vos photos à un demi-méga en gardant presque toute leur qualité : parfaites pour les portfolios, concours et e-mails.",
    sections: [
        {
            heading: "500 Ko : une qualité quasi originale pour une fraction du poids",
            paragraphs: [
                "Un demi-mégaoctet est une limite généreuse. Elle permet de garder des photos en haute résolution, avec assez de détails pour être parfaites sur de grands écrans et même en petits tirages. Cela représente pourtant une énorme réduction par rapport aux 3 à 8 Mo d'une photo de téléphone brute.",
                "C'est pourquoi on la retrouve souvent dans les concours photo, les portfolios en ligne, les plateformes immobilières, les catalogues et les appels à candidatures qui veulent des images de qualité sans surcharger leurs serveurs. Cette page est déjà réglée pour ramener chaque image à 500 Ko ou moins.",
            ],
        },
        {
            heading: "Comment compresser à 500 Ko",
            steps: [
                "Choisissez, faites glisser ou collez vos images. Vous pouvez en traiter beaucoup à la fois.",
                "Laissez le format automatique ou choisissez JPG ou WebP si besoin.",
                "Vous verrez le poids avant et après pour chaque image.",
                "Téléchargez-les une par une ou toutes ensemble dans un ZIP.",
            ],
        },
        {
            heading: "Idéal pour",
            bullets: [
                "Les concours et appels à candidatures photo limités par fichier.",
                "Les portfolios en ligne de design, d'architecture ou de photographie.",
                "Les annonces de maisons, d'appartements ou de voitures avec beaucoup de photos.",
                "Les e-mails avec plusieurs photos de bonne qualité qui ne sont pas rejetés.",
                "Les catalogues et fiches produit où le détail compte.",
            ],
        },
        {
            heading: "La compression à 500 Ko se voit-elle ?",
            paragraphs: [
                "Pour la grande majorité des photos, non. À cette taille, Dorfic conserve généralement la résolution d'origine ou presque et utilise une qualité élevée. Seules des images extrêmement détaillées et gigantesques (par exemple de 48 mégapixels ou plus) peuvent nécessiter une légère réduction des dimensions.",
                "Si votre image pèse déjà moins de 500 Ko, elle est laissée telle quelle pour ne pas perdre de qualité inutilement.",
            ],
        },
        {
            heading: "Conseils",
            paragraphs: [
                "Si la plateforme indique aussi des dimensions maximales (par exemple 2000 pixels de large), redimensionnez d'abord puis compressez : vous obtiendrez une image encore plus nette pour le même poids. Pour un usage uniquement sur le web, le WebP offre encore plus de qualité par kilooctet.",
            ],
        },
        {
            heading: "Privé et sans limite",
            paragraphs: [
                "Vos images sont traitées dans votre navigateur et ne sont jamais envoyées sur internet. Vous pouvez traiter jusqu'à 50 fichiers par lot, de 50 Mo maximum chacun, gratuitement et sans filigrane.",
            ],
        },
        {
            heading: "Résolution recommandée selon l'usage",
            paragraphs: [
                "Pour les écrans d'ordinateur et de téléphone, une image de 1600 à 2400 pixels sur son plus grand côté est nette sur presque tous les appareils. Pour de petits tirages, comme une photo 10 × 15 cm, il faut environ 1800 × 1200 pixels. Les deux tiennent largement dans 500 Ko en haute qualité.",
                "Si vous envoyez des photos à un concours, vérifiez aussi s'ils exigent un espace colorimétrique ou un format précis. La plupart acceptent le JPG standard, que Dorfic produit par défaut pour les photos. Conservez toujours vos originaux en qualité maximale au cas où vous auriez besoin plus tard d'une version plus grande ou non compressée.",
            ],
        },
        {
            heading: "500 Ko en JPG ou en WebP ?",
            paragraphs: [
                "Si l'image est destinée à votre propre site, le WebP vous donnera plus de détails pour le même poids. Si vous l'envoyez à quelqu'un d'autre ou à un organisme, le JPG est le choix le plus sûr, car n'importe quel logiciel l'ouvre.",
            ],
        },
    ],
    faqs: [
        {
            q: "Quelle qualité une photo perd-elle à 500 Ko ?",
            a: "Très peu. Pour la plupart des photos, la différence avec l'original est imperceptible.",
        },
        {
            q: "Les dimensions sont-elles réduites ?",
            a: "Seulement si la photo est si grande qu'elle ne tient pas dans 500 Ko en haute qualité. Avec des photos de téléphone courantes, une haute résolution est presque toujours conservée.",
        },
        {
            q: "Et si mon image pèse déjà moins de 500 Ko ?",
            a: "Elle est laissée telle quelle. Vous verrez le message « Déjà conforme, laissée telle quelle ».",
        },
        {
            q: "Puis-je compresser un album entier ?",
            a: "Oui, jusqu'à 50 images par lot, et vous les téléchargez dans un ZIP.",
        },
        {
            q: "Mes photos sont-elles envoyées sur un serveur ?",
            a: "Non. Tout est traité sur votre appareil.",
        },
    ],
    related: ["comprimir-imagen-a-200kb", "comprimir-imagen", "comprimir-jpg", "redimensionar-imagen", "jpg-a-webp", "comprimir-imagen-a-100kb"],
};

export default content;

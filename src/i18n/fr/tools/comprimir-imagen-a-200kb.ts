import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-200kb",
    title: "Compresser une image à 200 Ko",
    metaDescription:
        "Réduisez vos images à 200 Ko ou moins sans perdre en netteté. Gratuit, par lot et sans envoyer vos photos. Idéal pour les e-mails, l'école et les sites web.",
    h1: "Compresser une image à 200 Ko gratuitement",
    lead: "Obtenez des photos légères qui restent très belles : 200 Ko ou moins, prêtes pour l'e-mail, l'école ou votre site web.",
    sections: [
        {
            heading: "200 Ko : le juste milieu entre qualité et poids",
            paragraphs: [
                "Une limite de 200 Ko est assez large pour garder une photo nette en plein écran, et assez petite pour qu'elle s'envoie et se charge vite. C'est pourquoi on la retrouve souvent sur les plateformes scolaires, les concours photo, les sites d'emploi et les systèmes où l'on envoie plusieurs images à la fois.",
                "Cette page est déjà réglée sur cet objectif. Dorfic ajuste la compression pour s'approcher au maximum de 200 Ko sans les dépasser, afin que chaque Ko serve la qualité. Pour la plupart des photos de téléphone, l'image garde une bonne résolution et la différence avec l'original est minime.",
            ],
        },
        {
            heading: "Comment compresser vos photos à 200 Ko",
            steps: [
                "Choisissez vos images, faites-les glisser dans la zone de dépôt ou collez-les.",
                "Choisissez le format de sortie si besoin ; le WebP offre encore plus de qualité par Ko pour le web.",
                "Suivez la progression de chaque photo et l'économie réalisée.",
                "Téléchargez-les une par une ou toutes ensemble dans un ZIP.",
            ],
        },
        {
            heading: "Idéal pour…",
            bullets: [
                "Les devoirs et projets scolaires déposés sur des plateformes limitées par fichier.",
                "Les e-mails avec plusieurs photos jointes sans dépasser la limite du serveur.",
                "Les blogs, sites web et boutiques en ligne qui ont besoin d'images rapides mais attrayantes.",
                "Les annonces immobilières ou de vente de voitures, où l'on publie beaucoup de photos.",
                "Les justificatifs pour les assurances ou garanties qui demandent plusieurs images nettes.",
            ],
        },
        {
            heading: "Conseils pour tirer le meilleur des 200 Ko",
            paragraphs: [
                "Si vous publiez sur internet, inutile d'avoir des images de 4000 pixels : entre 1600 et 2000 pixels de large, elles sont parfaites sur n'importe quel écran. Les redimensionner d'abord laisse plus de marge à la qualité et le résultat est encore plus net.",
                "Pour les photos très détaillées, comme les paysages ou les foules, le JPG et le WebP fonctionnent bien mieux que le PNG. Si votre image d'origine est une photo en PNG, passez la sortie en JPG : vous verrez qu'elle garde beaucoup plus de détails dans la même limite.",
            ],
        },
        {
            heading: "Rapide, gratuit et privé",
            paragraphs: [
                "Pas besoin de compte ni d'application à installer. Vos photos ne quittent jamais votre appareil car tout le traitement a lieu dans votre navigateur. Vous pouvez compresser jusqu'à 50 images par lot, de 50 Mo maximum chacune, sans filigrane.",
            ],
        },
        {
            heading: "Comment Dorfic choisit la qualité finale",
            paragraphs: [
                "Quand vous choisissez une taille cible, Dorfic n'applique pas un pourcentage fixe à toutes les photos. Il tente d'abord une compression avec la bibliothèque browser-image-compression, puis vérifie le résultat. Si le fichier dépasse encore 200 Ko, il essaie différents niveaux de qualité jusqu'à trouver le plus élevé qui tient dans la limite et, seulement si cela ne suffit pas, il réduit progressivement les dimensions.",
                "C'est pourquoi deux photos différentes peuvent aboutir à des qualités différentes : une image simple, comme un portrait sur fond uni, tient dans 200 Ko presque sans changement, alors qu'une photo pleine de détails demande plus de compression. Dans tous les cas, le résultat respecte la limite et exploite au maximum l'espace disponible.",
            ],
        },
    ],
    faqs: [
        {
            q: "Quelle qualité une photo perd-elle à 200 Ko ?",
            a: "Très peu dans la plupart des cas. À la taille de l'écran, la différence avec l'original est généralement difficile à voir.",
        },
        {
            q: "Puis-je compresser beaucoup de photos à 200 Ko d'un coup ?",
            a: "Oui, jusqu'à 50 images par lot. Chacune pèsera 200 Ko ou moins et vous pourrez les télécharger dans un ZIP.",
        },
        {
            q: "Vaut-il mieux du JPG ou du WebP à 200 Ko ?",
            a: "Le WebP offre plus de qualité par Ko et convient parfaitement aux sites web. Pour un envoi à un organisme ou à des personnes équipées d'appareils anciens, le JPG est plus compatible.",
        },
        {
            q: "Pourquoi mon image fait-elle 190 Ko et pas 200 ?",
            a: "Parce que Dorfic ne dépasse jamais la limite : il cherche la meilleure qualité qui tient sous 200 Ko, le résultat est donc souvent un peu en dessous.",
        },
        {
            q: "Dois-je créer un compte ?",
            a: "Non. C'est gratuit, sans inscription, et vos images sont traitées uniquement sur votre appareil.",
        },
    ],
    related: ["comprimir-imagen-a-100kb", "comprimir-imagen", "redimensionar-imagen", "jpg-a-webp", "comprimir-imagen-a-50kb", "heic-a-jpg"],
};

export default content;

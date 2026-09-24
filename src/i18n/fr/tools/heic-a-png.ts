import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "heic-a-png",
    title: "Convertir HEIC en PNG",
    metaDescription:
        "Convertissez gratuitement les photos HEIC de votre iPhone en PNG, sans perte de qualité. Idéal pour la retouche ou le graphisme. Par lot, dans votre navigateur et sans envoi.",
    h1: "Convertir HEIC en PNG gratuitement",
    lead: "Passez les photos de votre iPhone en PNG sans perte, prêtes à être retouchées, recadrées ou utilisées dans vos créations.",
    sections: [
        {
            heading: "Quand préférer HEIC en PNG plutôt qu'en JPG ?",
            paragraphs: [
                "L'iPhone enregistre ses photos en HEIC, un format moderne et efficace que beaucoup de logiciels ne savent toujours pas ouvrir. Pour partager ou envoyer une photo, le plus pratique est de la convertir en JPG. Mais si vous allez la retoucher plusieurs fois, l'utiliser dans une création ou la détourer, le PNG est un meilleur choix : il enregistre l'image sans perte, elle ne se dégrade donc pas à chaque nouvel enregistrement.",
                "Avec Dorfic, la conversion se fait directement dans votre navigateur. La photo est décodée sur votre propre appareil et enregistrée en PNG sans être envoyée sur un serveur.",
            ],
        },
        {
            heading: "Comment convertir un HEIC en PNG, étape par étape",
            steps: [
                "Touchez « Choisir des images » et sélectionnez vos photos HEIC ou HEIF, ou faites-les glisser dans la zone de dépôt.",
                "Rien à régler : le PNG conserve l'image telle quelle, sans niveau de qualité.",
                "Attendez que chaque photo affiche la coche verte.",
                "Téléchargez chaque PNG ou tous ensemble dans un fichier ZIP.",
            ],
        },
        {
            heading: "À quoi ça sert",
            bullets: [
                "Retoucher des photos dans Photoshop, GIMP, Canva ou Figma sans accumuler de pertes de qualité.",
                "Préparer des images à détourer dans un logiciel.",
                "Utiliser des photos d'iPhone dans des présentations ou des supports imprimés avec une netteté maximale.",
                "Archiver vos plus belles photos dans un format ouvert et largement compatible.",
                "Ouvrir des photos d'iPhone sur des ordinateurs Windows qui ne reconnaissent pas le HEIC.",
            ],
        },
        {
            heading: "À savoir sur le poids",
            paragraphs: [
                "Un PNG d'une photo pèse bien plus que le HEIC d'origine, parfois cinq à dix fois plus, car il ne supprime aucun détail. C'est le prix d'une copie parfaite pour la retouche. Si votre but est simplement de partager la photo ou de l'envoyer dans un formulaire, l'outil HEIC en JPG est plus adapté, car il produit des fichiers légers et compatibles.",
                "L'orientation est respectée : vos photos ne seront pas couchées. Le PNG obtenu ne contient pas les métadonnées d'origine, comme le lieu de la prise de vue.",
            ],
        },
        {
            heading: "Compatibilité et limites",
            paragraphs: [
                "L'outil fonctionne avec Safari, Chrome, Edge et Firefox à jour, sur téléphone comme sur ordinateur. Sur un iPhone avec un iOS récent, la conversion est particulièrement rapide car le système sait déjà lire le HEIC. Nous acceptons jusqu'à 50 photos par lot et des fichiers jusqu'à 50 Mo. Les Live Photos sont converties en image fixe.",
            ],
        },
        {
            heading: "HEIC, JPG et PNG : lequel choisir",
            paragraphs: [
                "Le HEIC est idéal pour stocker des photos sur votre iPhone, car il prend peu de place avec une très bonne qualité. Le JPG est le format universel de partage : léger et compatible avec tout. Le PNG est le format de travail : sans perte, parfait pour la retouche et pour les images que vous combinerez avec d'autres éléments graphiques.",
                "Une stratégie pratique : garder vos originaux en HEIC, convertir en JPG ce que vous partagez et en PNG uniquement ce que vous retouchez en profondeur. Vous gagnez de la place et disposez toujours du bon fichier pour chaque usage. Avec Dorfic, vous pouvez faire ces deux conversions depuis votre navigateur, sans logiciel et sans envoyer vos photos.",
            ],
        },
    ],
    faqs: [
        {
            q: "Le passage de HEIC à PNG fait-il perdre en qualité ?",
            a: "Non. Le PNG est un format sans perte : la photo conserve toute la qualité qu'avait le HEIC une fois décodé.",
        },
        {
            q: "Pourquoi le PNG est-il si lourd ?",
            a: "Parce qu'il enregistre chaque pixel sans compression avec perte. Pour partager, utilisez plutôt HEIC en JPG ou compressez le résultat.",
        },
        {
            q: "Le PNG aura-t-il un fond transparent ?",
            a: "Pas automatiquement : les photos ont un fond. Le PNG vous permet de le supprimer ensuite dans un logiciel sans perte de qualité.",
        },
        {
            q: "Puis-je convertir beaucoup de photos HEIC en PNG à la fois ?",
            a: "Oui, jusqu'à 50 par lot, et vous les téléchargez ensemble dans un ZIP.",
        },
        {
            q: "Mes photos sont-elles envoyées ?",
            a: "Non. La conversion a lieu dans votre navigateur et vos photos ne quittent jamais votre appareil.",
        },
    ],
    related: ["heic-a-jpg", "comprimir-png", "png-a-jpg", "redimensionar-imagen", "comprimir-imagen", "png-a-webp"],
};

export default content;

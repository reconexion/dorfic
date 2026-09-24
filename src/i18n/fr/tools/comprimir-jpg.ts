import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-jpg",
    title: "Compresser un JPG",
    metaDescription:
        "Compressez gratuitement vos photos JPG et réduisez leur poids jusqu'à 90 % sans que cela se voie. Choisissez Ko ou qualité, traitez par lot et téléchargez en ZIP. Sans envoi.",
    h1: "Compresser un JPG gratuitement",
    lead: "Réduisez le poids de vos photos JPG en quelques secondes, sans perte de netteté visible et sans qu'elles quittent votre appareil.",
    sections: [
        {
            heading: "Pourquoi vos JPG sont-ils si lourds ?",
            paragraphs: [
                "Les appareils photo des téléphones actuels enregistrent des photos de 12, 48, voire 200 mégapixels avec une compression très légère, pensée pour garder tous les détails au cas où vous voudriez imprimer ou recadrer. Résultat : des fichiers JPG de 3 à 8 Mo chacun. Pour les regarder à l'écran, les envoyer par e-mail ou les déposer dans un formulaire, ce poids est inutile.",
                "Compresser un JPG consiste à l'enregistrer à nouveau avec une compression plus efficace et, si nécessaire, moins de pixels. Bien fait, la photo paraît pratiquement identique et pèse 70 % à 95 % de moins. Dorfic le fait dans votre navigateur : rien à installer, et vos photos ne sont jamais envoyées sur internet.",
            ],
        },
        {
            heading: "Comment compresser un JPG, étape par étape",
            steps: [
                "Choisissez vos photos JPG, faites-les glisser dans la zone de dépôt ou collez-les avec Ctrl + V.",
                "Choisissez « Taille cible » et touchez 20, 50, 100, 200 ou 500 Ko ; ou choisissez « Par qualité » et déplacez le curseur.",
                "Attendez la coche verte : vous verrez le poids avant et après et le pourcentage économisé.",
                "Téléchargez chaque photo ou toutes ensemble dans un ZIP.",
            ],
        },
        {
            heading: "Taille cible ou qualité ?",
            paragraphs: [
                "Utilisez « Taille cible » quand on vous impose une limite : un site qui accepte 100 Ko maximum, une messagerie qui refuse plus de 10 Mo de pièces jointes au total ou une plateforme scolaire limitée par fichier. Dorfic trouve automatiquement la meilleure qualité qui tient dans ce poids.",
                "Utilisez « Par qualité » quand l'essentiel est que la photo soit belle et que vous voulez seulement l'alléger. Entre 75 % et 85 %, c'est l'idéal pour la plupart des photos : la différence avec l'original est très difficile à voir et le fichier pèse souvent quatre fois moins.",
            ],
        },
        {
            heading: "Usages les plus courants",
            bullets: [
                "Envoyer beaucoup de photos par e-mail sans dépasser la limite des pièces jointes.",
                "Déposer des photos sur des sites d'emploi, de bourses ou de démarches qui limitent le poids.",
                "Accélérer votre site web ou votre boutique en ligne avec des images plus légères.",
                "Libérer de l'espace sur votre téléphone ou dans le cloud en gardant vos souvenirs.",
                "Partager des albums sur WhatsApp ou Telegram en consommant moins de données.",
            ],
        },
        {
            heading: "Conseils pour une qualité optimale",
            paragraphs: [
                "Compressez toujours à partir de la photo originale et non d'une photo déjà compressée : chaque nouvel enregistrement d'un JPG lui fait perdre un peu de détail. Si vous avez besoin de dimensions précises, redimensionnez d'abord et compressez ensuite ; ainsi, le poids est utilisé pour les pixels réellement affichés.",
                "Si votre photo comporte un ciel ou des dégradés doux, évitez les qualités inférieures à 60 %, car des bandes peuvent apparaître. Pour les photos de documents, une qualité de 70 % garde généralement le texte parfaitement lisible.",
            ],
        },
        {
            heading: "Confidentialité et limites",
            paragraphs: [
                "Vous pouvez compresser jusqu'à 50 photos à la fois, de 50 Mo maximum chacune. Tout le travail est fait par votre appareil : pas de file d'attente ni de limite quotidienne. Le fichier obtenu ne contient pas de métadonnées comme la position GPS, un vrai plus si vous partagez vos photos publiquement.",
            ],
        },
    ],
    faqs: [
        {
            q: "De combien puis-je réduire le poids d'un JPG ?",
            a: "Pour des photos de téléphone, il est courant de gagner 70 % à 95 % du poids. Dorfic affiche l'économie exacte de chaque fichier.",
        },
        {
            q: "La compression se voit-elle ?",
            a: "Avec une qualité entre 75 % et 85 %, la différence est pratiquement invisible à la taille de l'écran. Ce n'est qu'avec des limites très basses, comme 20 Ko, que la photo perd des détails.",
        },
        {
            q: "Puis-je compresser plusieurs JPG à la fois ?",
            a: "Oui, jusqu'à 50 par lot. À la fin, vous les téléchargez ensemble dans dorfic-images.zip.",
        },
        {
            q: "Mes photos sont-elles envoyées sur un serveur ?",
            a: "Non. La compression a lieu dans votre navigateur et vos photos ne quittent jamais votre appareil.",
        },
        {
            q: "Quelle différence entre JPG et JPEG ?",
            a: "Aucune : c'est le même format. JPEG est le nom complet et JPG l'extension courte popularisée par Windows.",
        },
        {
            q: "Compresser un JPG change-t-il ses dimensions ?",
            a: "En mode qualité, non. En mode taille cible, seulement si la limite est si basse qu'il faut réduire les dimensions pour que la photo reste nette.",
        },
    ],
    related: ["comprimir-imagen", "comprimir-imagen-a-100kb", "comprimir-png", "redimensionar-imagen", "jpg-a-webp", "comprimir-imagen-a-200kb"],
};

export default content;

import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-50kb",
    title: "Compresser une image à 50 Ko",
    metaDescription:
        "Compressez gratuitement votre image à 50 Ko ou moins. Parfait pour les photos de profil, signatures et inscriptions en ligne. Sans envoi : tout se passe dans votre navigateur.",
    h1: "Compresser une image à 50 Ko gratuitement",
    lead: "Réduisez vos photos à 50 Ko ou moins pour vos inscriptions, signatures et photos de profil. Rapide, gratuit et privé.",
    sections: [
        {
            heading: "Une image de 50 Ko : petite mais de bonne qualité",
            paragraphs: [
                "La limite de 50 Ko revient souvent dans les formulaires d'inscription, les plateformes scolaires, les sites d'emploi et les outils internes des entreprises. Elle permet une photo de visage ou une signature bien définie, mais oblige à réduire fortement une photo de téléphone, qui pèse généralement autour de 3 Mo.",
                "Sur cette page, la cible de 50 Ko est déjà réglée. Dorfic teste différents niveaux de compression et garde la meilleure qualité qui tient dans la limite ; si la photo est très grande, il ajuste aussi ses dimensions pour un résultat propre.",
            ],
        },
        {
            heading: "Étape par étape pour ramener votre image à 50 Ko",
            steps: [
                "Choisissez une ou plusieurs photos, faites-les glisser ou collez-les dans la zone de dépôt.",
                "Laissez le format « Identique à l'original » ou choisissez JPG si le site l'exige.",
                "Attendez la coche verte : vous verrez le poids final et le pourcentage économisé.",
                "Téléchargez votre image ou toutes ensemble dans un ZIP.",
            ],
        },
        {
            heading: "Usages fréquents des images de 50 Ko",
            bullets: [
                "Photo pour les candidatures et les profils sur les plateformes de recrutement.",
                "Signature numérisée pour des contrats, des formulaires scolaires ou des outils RH.",
                "Photo de profil pour les plateformes éducatives, forums ou intranets.",
                "Images pour les e-mailings ou newsletters, où tout doit se charger vite.",
                "Preuves photographiques dans des systèmes qui limitent la taille de chaque pièce jointe.",
            ],
        },
        {
            heading: "Conseils pour une qualité optimale",
            paragraphs: [
                "Avant de compresser, recadrez l'image pour ne garder que l'essentiel. Chaque pixel supprimé laisse plus de « budget » en Ko pour ce qui compte vraiment. Pour les photos de visage, un cadrage des épaules jusqu'au haut de la tête avec un fond uni donne des résultats très nets à 50 Ko.",
                "Pour les signatures et documents en noir et blanc, veillez à ce que la photo soit bien éclairée et sans ombres : un papier gris ou taché prend plus de place qu'un fond blanc uniforme. Si le système demande aussi des dimensions exactes en pixels, redimensionnez d'abord et compressez ensuite.",
            ],
        },
        {
            heading: "Privé et sans limite",
            paragraphs: [
                "Vos images ne quittent jamais votre appareil : c'est votre propre navigateur qui les compresse. Pas d'inscription, pas de filigrane, pas de limite quotidienne. Vous pouvez traiter jusqu'à 50 images par lot, de 50 Mo maximum chacune, et le fichier final ne conserve ni la position ni les autres métadonnées de la photo d'origine.",
            ],
        },
        {
            heading: "20, 50 ou 100 Ko : quelles différences ?",
            paragraphs: [
                "Si vous hésitez sur la limite à choisir, pensez à l'usage final. À 20 Ko, une photo convient pour des miniatures et de très petites cartes. À 50 Ko, une photo de visage au format carte ou une signature aux traits nets rend déjà bien. À 100 Ko, vous pouvez garder lisible un document entier, comme un justificatif ou une attestation.",
                "Quand le formulaire indique seulement « 50 Ko maximum », il n'y a aucun intérêt à descendre à 20 Ko : vous perdez de la qualité pour rien. Mieux vaut s'approcher de la limite autorisée, ce que Dorfic fait automatiquement. Et si vous avez besoin d'une autre taille plus tard, l'outil général vous permet de saisir n'importe quelle valeur en Ko.",
            ],
        },
    ],
    faqs: [
        {
            q: "Comment réduire une photo à 50 Ko depuis mon téléphone ?",
            a: "Ouvrez cette page sur votre téléphone, touchez « Choisir des images », sélectionnez la photo dans votre galerie et téléchargez-la quand la coche verte apparaît. La limite de 50 Ko est déjà réglée.",
        },
        {
            q: "Une photo de 50 Ko rend-elle bien ?",
            a: "Oui, pour les photos de visage, signatures et photos de profil, elle rend bien à l'écran. Elle ne convient pas à une impression en grand format.",
        },
        {
            q: "Puis-je choisir une autre taille ?",
            a: "Oui. Dans l'outil général de compression, vous pouvez choisir 20, 100, 200 ou 500 Ko, ou saisir n'importe quelle valeur.",
        },
        {
            q: "Que faire si le site exige du JPG ?",
            a: "Dans « Format de sortie », choisissez JPG. Votre fichier aura alors l'extension .jpg, même si l'original était en PNG ou WebP.",
        },
        {
            q: "Est-ce sûr de compresser ici des photos de documents ?",
            a: "Oui. Nous n'envoyons vos images sur aucun serveur ; tout est traité sur votre appareil.",
        },
    ],
    related: ["comprimir-imagen-a-20kb", "comprimir-imagen-a-100kb", "comprimir-imagen-a-200kb", "comprimir-imagen", "redimensionar-imagen", "heic-a-jpg"],
};

export default content;

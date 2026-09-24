import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-100kb",
    title: "Compresser une image à 100 Ko",
    metaDescription:
        "Compressez photos et documents scannés à 100 Ko ou moins, gratuitement et sans les envoyer sur internet. Idéal pour les démarches et formulaires limités en poids.",
    h1: "Compresser une image à 100 Ko gratuitement",
    lead: "Ramenez vos photos et documents scannés à 100 Ko ou moins pour n'importe quelle démarche en ligne. Sans inscription et 100 % privé.",
    sections: [
        {
            heading: "La limite la plus courante pour les démarches : 100 Ko",
            paragraphs: [
                "Quand un site vous demande d'envoyer une pièce d'identité, un justificatif de domicile, un acte ou une attestation sous forme d'image, la limite est très souvent de 100 Ko par fichier. De nombreuses plateformes d'inscription scolaire, sites d'emploi et services clients l'utilisent aussi. C'est une taille qui permet de garder un document entier lisible, à condition que l'image soit bien optimisée.",
                "Cette page est déjà réglée sur 100 Ko. Dorfic cherche automatiquement la meilleure qualité possible sans dépasser la limite et ne réduit les dimensions que si c'est indispensable. Vos documents restent ainsi légers et lisibles.",
            ],
        },
        {
            heading: "Comment compresser à 100 Ko, étape par étape",
            steps: [
                "Prenez une photo nette du document ou choisissez l'image que vous avez déjà.",
                "Ajoutez-la dans la zone de dépôt (vous pouvez aussi la faire glisser ou la coller). Vous pouvez en ajouter plusieurs à la fois, par exemple le recto et le verso de votre carte d'identité.",
                "Si le système l'exige, changez le format de sortie en JPG.",
                "Vérifiez le poids final et téléchargez chaque image ou toutes dans un ZIP.",
            ],
        },
        {
            heading: "Que pouvez-vous compresser à 100 Ko ?",
            bullets: [
                "Pièces d'identité, recto et verso.",
                "Justificatifs de domicile, factures et relevés bancaires photographiés.",
                "Actes, attestations, diplômes et bulletins scannés.",
                "Photos pour des dossiers scolaires ou professionnels.",
                "Captures d'écran de paiements ou de virements.",
            ],
        },
        {
            heading: "Astuces pour que le document reste lisible",
            paragraphs: [
                "La qualité finale dépend beaucoup de la photo d'origine. Posez le document sur une surface sombre et lisse, avec une bonne lumière naturelle et sans flash, et photographiez-le bien de face pour qu'il ne soit pas de travers. Recadrez les bords inutiles : moins il y a de fond, plus il reste de détails pour le texte.",
                "Si le document comporte de très petits caractères illisibles à 100 Ko, vérifiez si le site accepte le PDF ou une limite plus élevée. Vous pouvez aussi essayer une sortie en JPG plutôt qu'en PNG : le JPG préserve généralement mieux le texte des photos de documents quand la limite est serrée.",
            ],
        },
        {
            heading: "La sécurité de vos documents",
            paragraphs: [
                "Nous savons que les documents personnels sont sensibles. Dorfic ne les envoie pas sur internet : la compression s'exécute dans votre propre navigateur et les fichiers ne quittent jamais votre appareil. Le résultat ne conserve pas non plus la position ni les données de l'appareil photo. Vous pouvez traiter jusqu'à 50 fichiers par lot, de 50 Mo maximum chacun.",
            ],
        },
        {
            heading: "Que représentent vraiment 100 Ko ?",
            paragraphs: [
                "Un kilooctet (Ko) vaut 1 024 octets, donc 100 Ko font environ 102 400 octets. Certains sites comptent la limite avec 1 000 octets par Ko ; c'est pourquoi Dorfic laisse toujours le fichier légèrement en dessous de la cible, pour qu'il soit accepté quelle que soit la méthode de calcul. Si votre ordinateur affiche un chiffre un peu différent de celui de la page, c'est à cause de cet arrondi.",
                "Pour vous donner une idée, une photo de téléphone brute pèse entre 2 000 et 5 000 Ko. La ramener à 100 Ko implique de réduire son poids de plus de 95 %, ce que Dorfic obtient en combinant une compression intelligente et, seulement si nécessaire, une réduction modérée des dimensions.",
            ],
        },
    ],
    faqs: [
        {
            q: "Comment réduire une image à 100 Ko ?",
            a: "Choisissez votre image sur cette page et patientez quelques secondes. La limite de 100 Ko est déjà réglée ; téléchargez-la quand la coche verte apparaît.",
        },
        {
            q: "Un document compressé à 100 Ko reste-t-il lisible ?",
            a: "Dans la plupart des cas oui, surtout si la photo est bien éclairée et recadrée. Dorfic garde la meilleure qualité possible dans la limite.",
        },
        {
            q: "Puis-je compresser le recto et le verso de ma carte d'identité en même temps ?",
            a: "Oui. Sélectionnez les deux images à la fois ; chacune pèsera 100 Ko ou moins.",
        },
        {
            q: "Et si mon image pèse déjà moins de 100 Ko ?",
            a: "Elle est laissée telle quelle pour ne pas perdre de qualité. Vous verrez le message « Déjà conforme, laissée telle quelle ».",
        },
        {
            q: "Est-ce que ça fonctionne sur téléphone ?",
            a: "Oui, l'outil est pensé pour le téléphone. Vous pouvez choisir les photos directement dans votre galerie ou en prendre une nouvelle.",
        },
        {
            q: "Dorfic garde-t-il des copies de mes documents ?",
            a: "Non. Nous ne recevons jamais vos fichiers : tout est traité sur votre appareil et disparaît à la fermeture de la page.",
        },
    ],
    related: ["comprimir-imagen-a-200kb", "comprimir-imagen-a-50kb", "comprimir-imagen", "heic-a-jpg", "redimensionar-imagen", "png-a-jpg"],
};

export default content;

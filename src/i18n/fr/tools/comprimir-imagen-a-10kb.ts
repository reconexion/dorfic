import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-10kb",
    title: "Compresser une image à 10 Ko",
    metaDescription:
        "Réduisez gratuitement votre image à 10 Ko ou moins. Pour les signatures scannées et les systèmes aux limites extrêmes. Sans inscription et sans envoyer vos photos.",
    h1: "Compresser une image à 10 Ko gratuitement",
    lead: "Pour les systèmes les plus stricts : ramenez votre signature ou votre photo à 10 Ko ou moins, en quelques secondes et sans l'envoyer sur internet.",
    sections: [
        {
            heading: "Qui demande des images de 10 Ko ?",
            paragraphs: [
                "Dix kilooctets, c'est l'une des limites les plus basses qui existent. On la trouve surtout dans des systèmes anciens ou très restrictifs : inscriptions où l'on dépose une signature scannée, cartes numériques avec photo miniature, bases de données d'écoles ou d'administrations qui stockent des milliers de dossiers, et certains formulaires de concours ou de candidatures.",
                "Atteindre 10 Ko à partir d'une photo de téléphone de 3 Mo demande de réduire le fichier de plus de 99 %. Cette page est déjà réglée pour y parvenir : Dorfic ajuste automatiquement la compression et les dimensions pour que le résultat respecte la limite avec le meilleur rendu possible.",
            ],
        },
        {
            heading: "Comment ramener votre image à 10 Ko",
            steps: [
                "Recadrez l'image pour ne garder que l'essentiel : votre signature, ou votre visage et vos épaules.",
                "Choisissez ou faites glisser l'image. La cible de 10 Ko est déjà sélectionnée.",
                "Si le système exige du JPG, changez-le dans « Format de sortie ».",
                "Vérifiez le poids final et téléchargez votre image.",
            ],
        },
        {
            heading: "À quoi s'attendre avec une image de 10 Ko",
            paragraphs: [
                "À cette taille, une photo de visage mesure environ 200 à 300 pixels de côté : suffisant pour une carte affichée à l'écran ou un dossier numérique, mais pas pour une impression. Les signatures fonctionnent particulièrement bien, car ce sont des traits foncés sur fond blanc qui se compressent avec très peu de perte.",
                "Si le résultat est trop flou, le plus efficace est de recadrer davantage. Chaque zone de fond supprimée laisse plus de place aux détails importants.",
            ],
        },
        {
            heading: "Conseils pour les signatures scannées",
            bullets: [
                "Signez à l'encre noire ou bleu foncé sur une feuille blanche non lignée.",
                "Prenez la photo avec une bonne lumière, bien de face et sans ombres.",
                "Recadrez au plus près de la signature avant de compresser.",
                "Si le système demande des dimensions précises, redimensionnez d'abord.",
                "Vérifiez que le fichier final est bien lisible avant de l'envoyer.",
            ],
        },
        {
            heading: "Et si je n'arrive pas à 10 Ko avec une bonne qualité ?",
            paragraphs: [
                "Vérifiez si le système accepte une limite un peu plus élevée : la différence de qualité entre 10 et 20 Ko est importante. Vérifiez aussi le format autorisé ; certains sites acceptent le PNG pour les signatures, qui peut être plus net pour les traits fins.",
            ],
        },
        {
            heading: "Confidentialité",
            paragraphs: [
                "Les signatures et photos pour les démarches sont des données sensibles. Dorfic ne les envoie sur aucun serveur : tout est traité dans votre navigateur. Le fichier final ne contient pas de métadonnées comme la position.",
            ],
        },
        {
            heading: "10, 20 ou 30 Ko : quelles différences ?",
            paragraphs: [
                "Chaque palier de taille change beaucoup ce que l'image peut contenir. À 10 Ko, une signature est nette, mais une photo de visage reste petite et un peu douce. À 20 Ko, on obtient déjà une photo d'identité reconnaissable, et à 30 Ko la même photo gagne en netteté sur les yeux, les cheveux et les contours. C'est pourquoi nous conseillons de toujours utiliser la limite la plus haute autorisée : rester bien en dessous n'apporte rien.",
                "Si vous ne connaissez pas la limite exacte, consultez les instructions du site ou le message d'erreur qui s'affiche quand vous essayez d'envoyer le fichier ; il indique généralement le poids maximum autorisé. Avec cette information, choisissez la page Dorfic correspondante ou saisissez la valeur exacte dans le compresseur général.",
            ],
        },
    ],
    faqs: [
        {
            q: "Peut-on compresser une photo de téléphone à 10 Ko ?",
            a: "Oui. Dorfic réduit la qualité et les dimensions autant que nécessaire pour atteindre 10 Ko ou moins.",
        },
        {
            q: "Le rendu sera-t-il correct ?",
            a: "Pour des signatures et de petites photos d'identité, oui. Ce n'est pas une taille adaptée à l'impression ou aux images très détaillées.",
        },
        {
            q: "Pèsera-t-elle exactement 10 Ko ?",
            a: "Elle pèsera 10 Ko ou un peu moins, jamais au-dessus de la limite.",
        },
        {
            q: "Ma signature est-elle conservée quelque part ?",
            a: "Non. Elle ne quitte jamais votre appareil et disparaît à la fermeture de la page.",
        },
        {
            q: "Que faire si le site demande des dimensions en pixels ?",
            a: "Utilisez d'abord l'outil de redimensionnement avec les dimensions demandées, puis compressez ici.",
        },
    ],
    related: ["comprimir-imagen-a-20kb", "comprimir-imagen-a-30kb", "comprimir-imagen-a-50kb", "redimensionar-imagen", "comprimir-imagen", "heic-a-jpg"],
};

export default content;

import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "jpg-a-png",
    title: "Convertir JPG en PNG",
    metaDescription:
        "Convertissez gratuitement vos JPG en PNG, par lot et sans perdre davantage de qualité. Idéal pour la retouche ou quand un site exige du PNG. Vos images ne sont pas envoyées sur internet.",
    h1: "Convertir JPG en PNG gratuitement",
    lead: "Convertissez vos photos JPG en PNG en quelques secondes pour les retoucher sans perdre davantage de qualité ou respecter un format demandé.",
    sections: [
        {
            heading: "Que fait le convertisseur JPG en PNG ?",
            paragraphs: [
                "Il prend vos images JPG et les enregistre au format PNG, un format sans perte. Autrement dit, à partir de ce moment, l'image ne perdra plus de qualité, même si vous l'ouvrez, la modifiez et l'enregistrez de nombreuses fois. Avec le JPG, c'est l'inverse : à chaque enregistrement, l'image est recompressée et se dégrade petit à petit.",
                "Toute la conversion se fait dans votre navigateur. Vous n'avez rien à installer ni de compte à créer, et vos photos ne sont jamais envoyées sur un serveur.",
            ],
        },
        {
            heading: "Comment convertir un JPG en PNG, étape par étape",
            steps: [
                "Choisissez vos images JPG ou faites-les glisser dans la zone de dépôt. Vous pouvez aussi les coller avec Ctrl + V.",
                "Aucun réglage nécessaire : le PNG enregistre l'image telle quelle, sans qualité à choisir.",
                "Attendez que la coche verte apparaisse sur chaque fichier.",
                "Téléchargez chaque PNG ou tous ensemble dans un fichier ZIP.",
            ],
        },
        {
            heading: "Quand vaut-il mieux utiliser le PNG ?",
            bullets: [
                "Avant de retoucher : si vous allez recadrer, ajouter du texte ou retoucher une image plusieurs fois, travailler en PNG évite d'accumuler les pertes de qualité.",
                "Quand un système l'exige : certains sites, modèles graphiques ou logiciels n'acceptent que le PNG.",
                "Pour les images avec du texte, des graphiques ou des dessins : le PNG garde les contours et les lettres parfaitement nets.",
                "Comme étape préalable pour détourer l'image dans un logiciel, puisque le PNG gère la transparence.",
            ],
        },
        {
            heading: "À savoir avant de convertir",
            paragraphs: [
                "Convertir en PNG ne récupère pas la qualité que le JPG a déjà perdue : l'image sera exactement identique à l'original, mais elle sera désormais protégée contre de nouvelles pertes. La conversion n'ajoute pas non plus de transparence : le fond reste celui de la photo.",
                "Gardez en tête qu'un PNG pèse presque toujours bien plus que le JPG d'origine, parfois cinq à dix fois plus, surtout pour les photos. Dorfic vous indique le poids final de chaque fichier. Si votre objectif est d'envoyer l'image ou de la publier sur un site limité en taille, mieux vaut sans doute garder le JPG ou utiliser le compresseur d'images.",
            ],
        },
        {
            heading: "Limites",
            paragraphs: [
                "Vous pouvez convertir jusqu'à 50 images à la fois, de 50 Mo maximum chacune. La conversion se faisant sur votre appareil, les très grandes photos peuvent prendre quelques secondes sur les téléphones anciens. Le fichier PNG final ne contient pas les métadonnées du JPG, comme la position.",
            ],
        },
        {
            heading: "JPG ou PNG : les différences en bref",
            paragraphs: [
                "Le JPG est conçu pour les photos : il compresse fortement en éliminant des détails que l'œil perçoit à peine, d'où des fichiers légers. Le PNG est conçu pour les graphiques : il enregistre chaque pixel à l'identique, gère la transparence et garde parfaitement nets les contours des lettres, icônes et lignes, au prix de fichiers plus lourds.",
                "En pratique, utilisez le JPG pour partager et stocker des photos, et le PNG pour les logos, les captures avec du texte, les illustrations ou toute image que vous retoucherez plusieurs fois. En cas de doute, gardez toujours une copie du fichier original : vous pourrez ainsi le convertir plus tard dans le format voulu sans rien perdre.",
            ],
        },
    ],
    faqs: [
        {
            q: "Convertir un JPG en PNG améliore-t-il la qualité ?",
            a: "Non. L'image est identique au JPG d'origine. Ce que vous gagnez, c'est qu'elle ne perdra plus de qualité lors de retouches et d'enregistrements successifs.",
        },
        {
            q: "Pourquoi le PNG pèse-t-il plus que le JPG ?",
            a: "Parce que le PNG enregistre l'image sans perte, alors que le JPG compresse en éliminant des détails. Pour les photos, le PNG peut peser plusieurs fois plus.",
        },
        {
            q: "Le PNG aura-t-il un fond transparent ?",
            a: "Pas automatiquement. La conversion conserve le fond d'origine de la photo. Pour le supprimer, il faut un logiciel de retouche.",
        },
        {
            q: "Puis-je convertir beaucoup d'images à la fois ?",
            a: "Oui, jusqu'à 50 par lot. À la fin, vous les téléchargez toutes dans dorfic-images.zip.",
        },
        {
            q: "Mes images sont-elles conservées quelque part ?",
            a: "Non. Elles sont traitées dans votre navigateur et ne quittent jamais votre appareil. Quand vous fermez la page, elles disparaissent.",
        },
    ],
    related: ["png-a-jpg", "jpg-a-webp", "redimensionar-imagen", "comprimir-imagen", "webp-a-jpg", "heic-a-jpg"],
};

export default content;

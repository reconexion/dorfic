import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "heic-a-jpg",
    title: "Convertir HEIC en JPG",
    metaDescription:
        "Convertissez gratuitement les photos HEIC de votre iPhone en JPG, sans rien installer ni les envoyer sur internet. Plusieurs à la fois, qualité au choix, téléchargement en ZIP.",
    h1: "Convertir HEIC en JPG gratuitement",
    lead: "Passez les photos de votre iPhone en JPG en quelques secondes. Fonctionne sur téléphone comme sur ordinateur, et vos photos ne quittent jamais votre appareil.",
    sections: [
        {
            heading: "Que fait ce convertisseur HEIC en JPG ?",
            paragraphs: [
                "Depuis plusieurs années, l'iPhone enregistre les photos au format HEIC (aussi appelé HEIF). C'est un format très efficace : il occupe presque deux fois moins de place qu'un JPG de même qualité. Le problème, c'est que beaucoup de sites, de logiciels et d'ordinateurs sous Windows ne savent toujours pas l'ouvrir, et quand vous essayez d'envoyer la photo dans un formulaire, vous obtenez le fameux « format non valide ».",
                "Cet outil Dorfic convertit vos fichiers .heic ou .heif en .jpg, le format d'image le plus compatible qui soit. Tout se passe directement dans votre navigateur : la photo est lue, décodée puis enregistrée en JPG sur votre propre appareil, sans passer par aucun serveur. C'est pour cela qu'il est rapide, gratuit et privé.",
            ],
        },
        {
            heading: "Comment convertir un HEIC en JPG, étape par étape",
            steps: [
                "Touchez « Choisir des images » et sélectionnez une ou plusieurs photos HEIC. Sur ordinateur, vous pouvez aussi les faire glisser dans la zone en pointillés ou les coller avec Ctrl + V.",
                "Si vous le souhaitez, réglez la qualité. 90 % est proposé par défaut car il conserve les détails avec un poids raisonnable.",
                "Patientez quelques secondes : vous verrez la progression de chaque photo et une coche verte quand elle est prête.",
                "Téléchargez chaque JPG séparément ou toutes les photos d'un coup avec le bouton « Tout télécharger (ZIP) ».",
            ],
        },
        {
            heading: "À quoi sert de passer vos photos en JPG ?",
            bullets: [
                "Démarches en ligne : de nombreux sites administratifs, banques et assurances n'acceptent que le JPG ou le PNG pour les pièces d'identité, justificatifs ou photos.",
                "École et université : les ENT, plateformes d'inscription et examens en ligne refusent souvent le HEIC.",
                "Recherche d'emploi : pour ajouter votre photo à votre CV ou à votre profil professionnel sans erreur.",
                "Ordinateurs sous Windows : ouvrez les photos de votre iPhone sans installer d'extension ni de codec payant.",
                "Impression et retouche : presque toutes les imprimantes, les laboratoires photo et les logiciels de retouche utilisent le JPG.",
            ],
        },
        {
            heading: "Qualité, poids et métadonnées",
            paragraphs: [
                "Après conversion, le JPG pèse généralement un peu plus que le HEIC d'origine, car le JPG est un format plus ancien et moins efficace. Si vous avez besoin d'une photo légère (par exemple pour un formulaire limité en Ko), baissez la qualité à 70–80 % ou, une fois la photo convertie, utilisez notre compresseur d'images pour atteindre le poids exact demandé.",
                "La photo est enregistrée dans le bon sens, elle n'apparaîtra donc pas couchée. De plus, le JPG obtenu ne contient pas les métadonnées du fichier d'origine, comme la position GPS de la prise de vue. Un vrai plus pour votre vie privée si vous partagez l'image avec des inconnus.",
            ],
        },
        {
            heading: "Limites à connaître",
            paragraphs: [
                "Comme tout le travail est fait par votre appareil, la vitesse dépend de sa puissance. Sur un téléphone récent, chaque photo prend une ou deux secondes ; sur un appareil plus ancien, un peu plus. Nous acceptons des fichiers jusqu'à 50 Mo et des lots de 50 photos maximum. Les Live Photos sont converties en image fixe, et si un fichier HEIC contient plusieurs images, c'est l'image principale qui est utilisée.",
                "Si votre iPhone le permet, vous pouvez aussi éviter le HEIC à la source : dans Réglages › Appareil photo › Formats, choisissez « Le plus compatible ». Les photos déjà prises resteront toutefois en HEIC, et c'est justement à cela que sert cet outil.",
            ],
        },
    ],
    faqs: [
        {
            q: "Convertir HEIC en JPG sur Dorfic est-il gratuit ?",
            a: "Oui, c'est entièrement gratuit et sans inscription. Pas de filigrane ni de limite quotidienne. Le site est financé par des publicités discrètes.",
        },
        {
            q: "Mes photos sont-elles envoyées sur un serveur ?",
            a: "Non. La conversion a lieu dans votre navigateur, sur votre propre téléphone ou ordinateur. Vos photos ne quittent jamais votre appareil et personne d'autre ne peut les voir.",
        },
        {
            q: "Est-ce que ça fonctionne sur iPhone et Android ?",
            a: "Oui. L'outil fonctionne avec Safari, Chrome, Edge et Firefox à jour, sur téléphone comme sur ordinateur. Sur iPhone, en touchant « Choisir des images », vous pouvez sélectionner les photos directement dans votre photothèque.",
        },
        {
            q: "Puis-je convertir plusieurs photos HEIC en même temps ?",
            a: "Oui, vous pouvez en sélectionner jusqu'à 50 d'un coup. Elles sont traitées par lot et vous pouvez ensuite toutes les télécharger dans un fichier ZIP nommé dorfic-images.zip.",
        },
        {
            q: "Est-ce que je perds en qualité en passant de HEIC à JPG ?",
            a: "À 90 % de qualité, la différence est pratiquement invisible à l'œil nu. Pour un maximum de détails, montez la qualité à 100 %, mais le fichier sera plus lourd.",
        },
        {
            q: "Pourquoi le JPG est-il plus lourd que le HEIC ?",
            a: "Parce que le HEIC compresse mieux que le JPG. Il est normal que le JPG pèse 1,5 à 2 fois plus. Si vous avez besoin d'un fichier léger, baissez la qualité ou utilisez l'outil de compression d'image.",
        },
        {
            q: "La position GPS et les données de l'appareil photo sont-elles conservées ?",
            a: "Non. Le JPG téléchargé ne contient ni la position GPS ni les autres métadonnées de l'original, ce qui protège votre vie privée lorsque vous partagez la photo.",
        },
    ],
    related: ["comprimir-imagen", "redimensionar-imagen", "comprimir-imagen-a-200kb", "png-a-jpg", "webp-a-jpg", "jpg-a-webp"],
};

export default content;

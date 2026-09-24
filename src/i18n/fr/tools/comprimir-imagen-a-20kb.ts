import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-20kb",
    title: "Compresser une image à 20 Ko",
    metaDescription:
        "Réduisez votre photo à 20 Ko ou moins en quelques secondes, gratuitement et sans l'envoyer sur internet. Idéal pour les photos d'identité et les formulaires très stricts.",
    h1: "Compresser une image à 20 Ko gratuitement",
    lead: "Ramenez votre photo à 20 Ko ou moins pour les formulaires aux limites très strictes. Sans inscription et sans que votre image quitte votre appareil.",
    sections: [
        {
            heading: "Quand demande-t-on une image de 20 Ko ?",
            paragraphs: [
                "Certains systèmes en ligne imposent des limites de poids très basses, surtout pour une photo d'identité, une signature scannée ou une photo de profil. On les rencontre souvent lors d'inscriptions à des concours, de candidatures, de demandes de bourse, sur les plateformes scolaires et certains sites administratifs. Une photo de téléphone pèse 100 à 300 fois plus, il ne suffit donc pas de « la réduire un peu ».",
                "Cette page est déjà réglée pour ramener chaque image à 20 Ko ou moins. Il vous suffit de choisir votre photo et de la télécharger. Dorfic trouve automatiquement la meilleure qualité possible dans la limite et, comme c'est nécessaire à cette taille, réduit aussi les dimensions de l'image.",
            ],
        },
        {
            heading: "Comment ramener votre photo à 20 Ko, étape par étape",
            steps: [
                "Si possible, recadrez d'abord la photo pour ne garder que l'essentiel (par exemple le visage et les épaules). Les détails seront ainsi mieux préservés.",
                "Choisissez l'image, faites-la glisser ou collez-la. La cible de 20 Ko est déjà sélectionnée.",
                "Si le site exige un format précis, changez-le dans « Format de sortie ». Pour les photos, le JPG est le plus sûr.",
                "Vérifiez le poids final à côté du nom du fichier et téléchargez-la.",
            ],
        },
        {
            heading: "À quoi ressemble une image de 20 Ko",
            paragraphs: [
                "20 Ko suffisent pour une photo de visage nette d'environ 300 à 500 pixels de côté, ce qu'attendent justement les formulaires avec cette limite. Elle s'affiche parfaitement à l'écran ou sur une petite carte, mais ne convient pas à une impression en grand format ni à des documents écrits en petits caractères.",
                "Si votre image contient beaucoup de détails (un paysage, un document entier ou plusieurs personnes), elle paraîtra plus douce à 20 Ko. Dans ce cas, recadrez ce qui n'est pas utile ou vérifiez si le système accepte une limite plus élevée, comme 50 ou 100 Ko.",
            ],
        },
        {
            heading: "Conseils pour que votre photo soit acceptée",
            bullets: [
                "Utilisez un fond uni et clair : les fonds uniformes prennent moins de place et laissent plus de détails pour votre visage.",
                "Vérifiez si des dimensions exactes en pixels sont demandées ; si oui, utilisez d'abord l'outil de redimensionnement, puis compressez.",
                "Nommez le fichier comme demandé (par exemple avec votre numéro de dossier) avant de l'envoyer.",
                "Si le système affiche « format non valide », vérifiez qu'il s'agit bien d'un JPG et non d'un HEIC ou d'un WebP.",
            ],
        },
        {
            heading: "Votre vie privée est protégée",
            paragraphs: [
                "Les photos pour les démarches sont souvent personnelles. C'est pourquoi Dorfic ne les envoie sur aucun serveur : la compression a lieu dans votre propre navigateur. De plus, le fichier final ne contient pas de métadonnées comme la position GPS. Vous pouvez traiter jusqu'à 50 images à la fois, de 50 Mo maximum chacune.",
            ],
        },
    ],
    faqs: [
        {
            q: "Peut-on compresser une photo de téléphone à 20 Ko ?",
            a: "Oui. Dorfic réduit la qualité et les dimensions autant que nécessaire pour atteindre 20 Ko ou moins, en cherchant le meilleur rendu possible.",
        },
        {
            q: "Pourquoi l'image est-elle devenue plus petite en pixels ?",
            a: "Parce que les millions de pixels d'une photo de téléphone ne tiennent pas dans 20 Ko. Réduire les dimensions permet de garder une image nette plutôt qu'une image pleine de taches.",
        },
        {
            q: "L'image pèsera-t-elle exactement 20 Ko ?",
            a: "Elle pèsera 20 Ko ou un peu moins, jamais plus. Elle respectera ainsi la limite du formulaire.",
        },
        {
            q: "Mon image est floue, que faire ?",
            a: "Recadrez-la pour retirer ce qui n'est pas important et réessayez. Si le système le permet, utilisez une limite plus élevée, comme 50 Ko.",
        },
        {
            q: "Puis-je compresser une signature scannée à 20 Ko ?",
            a: "Oui. Les signatures sur fond blanc se compressent très bien. Si le site l'accepte, le PNG peut rendre la signature plus nette ; sinon, utilisez le JPG.",
        },
        {
            q: "Mes photos sont-elles envoyées sur internet ?",
            a: "Non. Tout est traité sur votre appareil. Vos photos ne le quittent jamais.",
        },
    ],
    related: ["comprimir-imagen-a-50kb", "comprimir-imagen-a-100kb", "comprimir-imagen", "redimensionar-imagen", "heic-a-jpg", "comprimir-imagen-a-200kb"],
};

export default content;

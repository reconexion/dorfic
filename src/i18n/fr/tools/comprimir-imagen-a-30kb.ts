import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-30kb",
    title: "Compresser une image à 30 Ko",
    metaDescription:
        "Compressez gratuitement votre photo à 30 Ko ou moins, avec une bonne netteté pour vos dossiers, bourses et cartes. En quelques secondes et sans envoyer votre image.",
    h1: "Compresser une image à 30 Ko gratuitement",
    lead: "Ramenez votre photo à 30 Ko ou moins tout en restant nette, prête pour vos dossiers, demandes de bourse et cartes en ligne.",
    sections: [
        {
            heading: "30 Ko : la limite de nombreux dossiers en ligne",
            paragraphs: [
                "Beaucoup de formulaires de bourses, de concours, d'inscriptions scolaires et de candidatures demandent une photo de 30 Ko maximum. C'est un juste milieu : assez petit pour que le système stocke des milliers de dossiers, mais suffisant pour que votre visage soit bien visible.",
                "Cette page est déjà réglée sur cette limite. Choisissez simplement votre photo : Dorfic teste différents niveaux de compression, retient la meilleure qualité qui tient dans 30 Ko et, si nécessaire, ajuste les dimensions pour garder une image nette.",
            ],
        },
        {
            heading: "Comment ramener votre photo à 30 Ko",
            steps: [
                "Prenez ou choisissez une photo de face, bien éclairée et sur fond uni.",
                "Recadrez pour ne garder que le visage et les épaules.",
                "Choisissez l'image ici ; la cible de 30 Ko est déjà prête.",
                "Téléchargez le résultat et déposez-le dans le formulaire.",
            ],
        },
        {
            heading: "À quoi ressemble une photo de 30 Ko",
            paragraphs: [
                "À 30 Ko, une photo de visage peut mesurer environ 500 à 700 pixels de côté avec une bonne définition. Elle rend bien à l'écran et sur de petites cartes imprimées. C'est nettement mieux que 20 Ko et cela répond généralement aux exigences des organismes qui demandent une photo d'identité au format numérique.",
            ],
        },
        {
            heading: "Conseils pour que votre photo soit acceptée",
            bullets: [
                "Un fond blanc ou clair et uniforme ; évitez les murs texturés.",
                "Visage de face, sans lunettes de soleil ni casquette, sauf indication contraire.",
                "Un éclairage homogène, sans ombres marquées sur le visage.",
                "Le format JPG si le système ne précise rien d'autre.",
                "Nommez le fichier comme demandé, par exemple avec votre numéro de dossier ou d'étudiant.",
            ],
        },
        {
            heading: "Si le site demande des dimensions exactes",
            paragraphs: [
                "Certains systèmes demandent aussi des dimensions en pixels, comme 600 × 800. Dans ce cas, utilisez d'abord l'outil de redimensionnement avec ces dimensions, puis revenez ici pour compresser. Vous respectez ainsi les deux exigences sans déformer la photo.",
                "Si le message « format non valide » apparaît à l'envoi, vérifiez qu'il ne s'agit pas d'un HEIC (photos d'iPhone) ou d'un WebP. Vous pouvez d'abord la convertir en JPG avec nos outils.",
            ],
        },
        {
            heading: "Confidentialité",
            paragraphs: [
                "Votre photo ne quitte jamais votre appareil : la compression se fait dans votre navigateur. Vous pouvez traiter plusieurs photos à la fois et les télécharger dans un ZIP.",
            ],
        },
        {
            heading: "Erreurs fréquentes lors de l'envoi de photos",
            paragraphs: [
                "L'erreur la plus courante n'est pas le poids, mais le format : les photos d'iPhone sont enregistrées en HEIC et beaucoup de sites les refusent même si elles sont légères. Autre problème fréquent : envoyer une capture d'écran de la photo au lieu de la photo originale, ce qui ajoute des bordures, les barres du téléphone et une perte de qualité.",
                "Vérifiez aussi l'orientation : si la photo apparaît couchée sur le site, exportez-la à nouveau. Dorfic conserve la bonne orientation lors de la compression : le fichier téléchargé s'affiche donc droit dans n'importe quel système. Enfin, évitez les filtres et effets beauté : les organismes demandent généralement une photo naturelle et récente.",
            ],
        },
    ],
    faqs: [
        {
            q: "Comment réduire une photo à 30 Ko depuis mon téléphone ?",
            a: "Ouvrez cette page, touchez « Choisir des images », sélectionnez votre photo et téléchargez-la quand la coche verte apparaît.",
        },
        {
            q: "La photo pèsera-t-elle exactement 30 Ko ?",
            a: "Elle pèsera 30 Ko ou un peu moins. Elle ne dépasse jamais la limite.",
        },
        {
            q: "Pourquoi la taille en pixels a-t-elle changé ?",
            a: "Parce que pour tenir dans 30 Ko avec une bonne netteté, il faut parfois réduire les dimensions. C'est préférable à une grande photo pleine de taches.",
        },
        {
            q: "Ma photo vient d'un iPhone et le site la refuse, que faire ?",
            a: "Elle est sûrement en HEIC. Convertissez-la d'abord avec l'outil HEIC en JPG, puis compressez-la ici.",
        },
        {
            q: "Est-ce sûr ?",
            a: "Oui. Votre photo est traitée sur votre appareil et n'est jamais envoyée sur internet.",
        },
    ],
    related: ["comprimir-imagen-a-20kb", "comprimir-imagen-a-50kb", "comprimir-imagen-a-10kb", "redimensionar-imagen", "heic-a-jpg", "comprimir-imagen"],
};

export default content;

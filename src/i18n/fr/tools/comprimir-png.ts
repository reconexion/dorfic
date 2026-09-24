import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-png",
    title: "Compresser un PNG",
    metaDescription:
        "Compressez gratuitement vos images PNG : allégez captures, logos et graphiques, gardez la transparence ou convertissez-les en JPG ou WebP. Sans envoi de fichiers.",
    h1: "Compresser un PNG gratuitement",
    lead: "Allégez vos captures d'écran, logos et graphiques PNG. Gardez la transparence ou passez à un format plus léger en un clic.",
    sections: [
        {
            heading: "Pourquoi un PNG est difficile à compresser",
            paragraphs: [
                "Le PNG est un format sans perte : il enregistre chaque pixel exactement tel qu'il est. C'est ce qui le rend parfait pour les logos, icônes, captures d'écran avec du texte et toute image à fond transparent, mais c'est aussi pourquoi il pèse si lourd quand il contient des photos ou des dégradés.",
                "Comme le PNG n'élimine aucune information, pour réduire son poids il faut diminuer le nombre de pixels ou passer à un format qui compresse avec perte, comme le WebP ou le JPG. Dorfic vous laisse le choix : garder le PNG et ajuster ses dimensions jusqu'au poids voulu, ou le convertir pour une réduction bien plus forte.",
            ],
        },
        {
            heading: "Comment compresser un PNG, étape par étape",
            steps: [
                "Choisissez ou faites glisser vos fichiers PNG. Vous pouvez aussi coller des captures avec Ctrl + V.",
                "Choisissez le poids maximum en Ko ou le mode par qualité.",
                "Dans « Format de sortie », gardez PNG si vous avez besoin de transparence, ou choisissez WebP ou JPG pour économiser bien davantage.",
                "Téléchargez vos images une par une ou toutes dans un ZIP.",
            ],
        },
        {
            heading: "Quel format de sortie choisir ?",
            bullets: [
                "PNG : garde la transparence et une netteté parfaite ; pour alléger, les dimensions sont réduites.",
                "WebP : garde la transparence et pèse généralement 60 % à 80 % de moins. Idéal pour les sites web.",
                "JPG : le plus compatible et le plus léger pour les photos, mais il remplit le fond transparent de blanc.",
            ],
        },
        {
            heading: "Dans quels cas c'est utile",
            bullets: [
                "Des captures d'écran de plusieurs mégas à envoyer par e-mail ou messagerie.",
                "Des logos pour votre site, vos présentations ou vos signatures d'e-mail.",
                "Des photos de produits à fond transparent pour une boutique en ligne.",
                "Des graphiques et schémas à insérer dans des documents ou rapports.",
                "Des PNG exportés depuis des logiciels de graphisme avec une résolution plus élevée que nécessaire.",
            ],
        },
        {
            heading: "Conseils pour les captures et les logos",
            paragraphs: [
                "Les captures d'écran des téléphones récents comptent énormément de pixels. Si vous ne les regardez qu'à l'écran, les réduire de moitié se voit à peine et le fichier ne pèse plus qu'un quart. Pour les logos, pensez à la taille réelle d'affichage : un logo de 400 pixels de large suffit généralement pour le web et ne pèse qu'une fraction de l'original.",
                "Si votre PNG est en réalité une photo sans transparence, le mode automatique du compresseur général la passera en JPG et l'économie sera énorme. Ici, en revanche, nous gardons le PNG comme sortie par défaut pour respecter ceux qui ont besoin de transparence.",
            ],
        },
        {
            heading: "Privé et sans limite",
            paragraphs: [
                "Vos images sont traitées dans votre navigateur et ne sont jamais envoyées sur un serveur. Vous pouvez traiter jusqu'à 50 fichiers par lot, de 50 Mo maximum chacun, sans inscription ni filigrane.",
            ],
        },
        {
            heading: "PNG 8 bits, 24 bits et transparence",
            paragraphs: [
                "Les PNG peuvent être enregistrés avec différentes profondeurs de couleur. Ceux en 24 ou 32 bits gèrent des millions de couleurs et une transparence douce, ce qui les rend idéaux pour les photos détourées et les ombres, mais aussi les plus lourds. Quand les navigateurs enregistrent depuis un canvas, ils produisent des PNG 32 bits : ici, la façon pratique de gagner de la place est donc de réduire les dimensions ou de passer au WebP.",
                "Si vous travaillez avec beaucoup d'icônes ou de graphiques en aplats pour un site, pensez au SVG quand c'est possible : c'est un format vectoriel très léger et net à toutes les tailles. Pour tout le reste, le WebP avec transparence est aujourd'hui l'option la plus efficace.",
            ],
        },
    ],
    faqs: [
        {
            q: "Le fond transparent est-il conservé en compressant un PNG ?",
            a: "Oui, si vous gardez le PNG ou choisissez le WebP comme format de sortie. Seul le JPG remplit la transparence de blanc.",
        },
        {
            q: "Pourquoi mon PNG a-t-il moins de pixels ?",
            a: "Parce que le PNG ne perd pas de qualité à l'enregistrement ; pour atteindre le poids demandé en restant en PNG, la seule solution est de réduire ses dimensions.",
        },
        {
            q: "Quelle est la meilleure façon de beaucoup alléger un PNG ?",
            a: "Le convertir en WebP : il garde la transparence et pèse généralement 60 % à 80 % de moins.",
        },
        {
            q: "Puis-je compresser directement des captures d'écran ?",
            a: "Oui. Faites la capture et collez-la sur cette page avec Ctrl + V (ou Cmd + V sur Mac).",
        },
        {
            q: "Est-ce gratuit et privé ?",
            a: "Oui. C'est gratuit, sans inscription, et vos images ne quittent jamais votre appareil.",
        },
    ],
    related: ["png-a-webp", "png-a-jpg", "comprimir-imagen", "comprimir-jpg", "redimensionar-imagen", "comprimir-imagen-a-100kb"],
};

export default content;

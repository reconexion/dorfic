import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "webp-a-jpg",
    title: "Convertir WebP en JPG",
    metaDescription:
        "Convertissez gratuitement vos images WebP en JPG pour les ouvrir et les envoyer partout. Par lot, qualité réglable et sans envoyer vos fichiers.",
    h1: "Convertir WebP en JPG gratuitement",
    lead: "Vous avez téléchargé une image et elle s'est enregistrée en .webp ? Convertissez-la en JPG en quelques secondes pour l'ouvrir, la retoucher ou l'envoyer où vous voulez.",
    sections: [
        {
            heading: "Qu'est-ce que le WebP et pourquoi le convertir ?",
            paragraphs: [
                "Le WebP est un format d'image créé pour que les pages web se chargent vite. Beaucoup de sites l'utilisent, donc quand vous enregistrez une image depuis votre navigateur, elle se télécharge souvent avec l'extension .webp. Le problème vient ensuite : certains logiciels de retouche, de bureautique, visionneuses anciennes, imprimantes ou formulaires en ligne ne le reconnaissent pas.",
                "Cet outil convertit vos fichiers WebP en JPG, le format accepté par pratiquement tous les appareils et plateformes. Tout se passe dans votre navigateur : c'est instantané et privé.",
            ],
        },
        {
            heading: "Comment convertir un WebP en JPG, étape par étape",
            steps: [
                "Choisissez vos images WebP, faites-les glisser dans la zone en pointillés ou collez-les avec Ctrl + V.",
                "Choisissez la qualité du JPG. À 92 %, vous conservez presque tous les détails.",
                "Suivez la progression de chaque image ; à la fin, vous verrez le poids final.",
                "Téléchargez les JPG séparément ou tous dans un ZIP.",
            ],
        },
        {
            heading: "Dans quels cas c'est utile",
            bullets: [
                "Vous avez enregistré une image depuis internet et votre ordinateur ne l'ouvre pas d'un double-clic.",
                "Vous voulez insérer l'image dans Word, PowerPoint ou un logiciel de graphisme qui ne gère pas le WebP.",
                "Un formulaire scolaire, professionnel ou administratif exige un JPG.",
                "Vous allez imprimer l'image ou la faire développer.",
                "Vous voulez la partager avec quelqu'un qui utilise un appareil ou une application ancienne.",
            ],
        },
        {
            heading: "Qualité et transparence",
            paragraphs: [
                "Le WebP est généralement plus efficace que le JPG, il est donc normal que le fichier converti pèse un peu plus que l'original. S'il doit être léger, baissez la qualité à 75–85 % ou passez-le ensuite dans le compresseur d'images pour atteindre un poids exact en Ko.",
                "Certaines images WebP ont un fond transparent. Comme le JPG ne gère pas la transparence, ces zones deviendront blanches. Les WebP animés sont convertis à partir de leur première image, car le JPG ne gère pas l'animation. Pensez aussi à respecter les droits d'auteur des images téléchargées sur internet : les convertir ne change pas leur propriétaire.",
            ],
        },
        {
            heading: "Limites",
            paragraphs: [
                "Nous acceptons jusqu'à 50 images par lot et des fichiers jusqu'à 50 Mo. C'est votre appareil qui effectue la conversion : pas de file d'attente ni de limite quotidienne, mais les appareils anciens peuvent être un peu plus lents. Vos images ne sont jamais envoyées sur un serveur.",
            ],
        },
        {
            heading: "JPG ou PNG comme format final ?",
            paragraphs: [
                "Pour les photos, le JPG est le meilleur choix : il est universel et garde un poids raisonnable. Si votre image WebP est un logo, une icône ou un graphique à fond transparent, vous préférerez peut-être la garder en WebP ou la convertir en PNG pour ne pas perdre la transparence.",
                "L'un des avantages de la conversion dans le navigateur est la rapidité : pas d'attente d'envoi ni de traitement par un serveur, et vous pouvez convertir des dizaines d'images par lot. À la fin, téléchargez le ZIP et toutes vos images seront prêtes à s'ouvrir dans n'importe quel logiciel, téléphone ou ordinateur.",
            ],
        },
    ],
    faqs: [
        {
            q: "Pourquoi mes images se téléchargent-elles au format WebP ?",
            a: "Parce que beaucoup de sites servent leurs images en WebP pour se charger plus vite, et le navigateur les enregistre telles quelles. Avec cet outil, vous les passez en JPG en quelques secondes.",
        },
        {
            q: "Est-ce que je perds en qualité en convertissant du WebP en JPG ?",
            a: "Très peu si vous utilisez une qualité élevée (90 % ou plus). À l'œil nu, l'image paraîtra identique.",
        },
        {
            q: "Que deviennent les images WebP transparentes ?",
            a: "La partie transparente devient blanche, car le JPG ne gère pas la transparence. Si vous devez la conserver, convertissez plutôt en PNG ou gardez le WebP.",
        },
        {
            q: "Est-ce que ça fonctionne avec les WebP animés ?",
            a: "Seule la première image est convertie, car le JPG est un format d'image fixe.",
        },
        {
            q: "Dois-je installer quelque chose ?",
            a: "Non. L'outil fonctionne dans le navigateur de votre téléphone ou ordinateur, sans logiciel ni inscription, et vos fichiers ne quittent jamais votre appareil.",
        },
    ],
    related: ["jpg-a-webp", "png-a-jpg", "comprimir-imagen", "heic-a-jpg", "jpg-a-png", "redimensionar-imagen"],
};

export default content;

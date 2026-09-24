import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen",
    title: "Compresser une image",
    metaDescription:
        "Compressez gratuitement vos images JPG, PNG et WebP au poids en Ko voulu ou par pourcentage de qualité. Voyez le poids avant et après. Sans envoyer vos photos.",
    h1: "Compresser une image gratuitement",
    lead: "Réduisez le poids de vos photos JPG, PNG ou WebP au nombre exact de Ko demandé, sans rien installer et sans les envoyer sur internet.",
    sections: [
        {
            heading: "Que fait le compresseur d'images ?",
            paragraphs: [
                "Compresser une image, c'est réduire son poids (les Ko ou Mo qu'elle occupe) tout en gardant un bon rendu. Les photos d'un téléphone récent pèsent entre 2 et 6 Mo, beaucoup trop pour un e-mail, un formulaire ou un site web. Avec cet outil, vous pouvez les ramener à 100 Ko, 50 Ko ou au poids dont vous avez besoin en quelques secondes.",
                "Vous avez deux façons de travailler. En « Taille cible », vous choisissez le poids maximum en Ko et Dorfic trouve automatiquement la meilleure qualité possible dans cette limite ; si nécessaire, il réduit aussi légèrement les dimensions. En « Par qualité », vous choisissez un pourcentage et gérez vous-même l'équilibre entre netteté et poids.",
            ],
        },
        {
            heading: "Comment compresser une image, étape par étape",
            steps: [
                "Choisissez le mode : taille cible (recommandé pour les démarches) ou par qualité.",
                "En taille cible, touchez l'un des boutons rapides (20, 50, 100, 200 ou 500 Ko) ou saisissez une autre valeur.",
                "Choisissez, faites glisser ou collez vos images. Vous pouvez en ajouter plusieurs à la fois.",
                "Vérifiez le résultat : vous verrez le poids avant et après, ainsi que le pourcentage économisé.",
                "Téléchargez chaque image ou toutes ensemble dans un ZIP.",
            ],
        },
        {
            heading: "À quoi sert de compresser vos photos ?",
            bullets: [
                "Formulaires limités en poids : candidatures, bourses, inscriptions et démarches administratives exigent souvent des fichiers de moins de 100 ou 200 Ko.",
                "E-mail : évitez que vos messages soient rejetés à cause de pièces jointes trop lourdes.",
                "WhatsApp et réseaux sociaux : envoyez vos photos plus vite et consommez moins de données mobiles.",
                "Sites web et boutiques en ligne : des images légères accélèrent votre site et améliorent son référencement sur Google.",
                "Libérer de l'espace : gardez plus de photos sur votre téléphone ou dans le cloud sans payer de stockage supplémentaire.",
            ],
        },
        {
            heading: "Quel format de sortie choisir ?",
            paragraphs: [
                "Par défaut, l'image conserve son format d'origine. Pour les photos, le JPG est l'option la plus compatible. Le WebP donne des fichiers encore plus légers à qualité égale et il est pris en charge par tous les navigateurs modernes, même si certains portails anciens ne le reconnaissent pas. Le PNG ne perd pas de qualité mais se compresse beaucoup moins : si vous avez une photo enregistrée en PNG et qu'elle doit peser très peu, passez la sortie en JPG et vous verrez une énorme différence.",
                "Si l'image a un fond transparent et que vous la convertissez en JPG, la transparence est remplacée par du blanc, car le JPG ne gère pas la transparence.",
            ],
        },
        {
            heading: "Limites et conseils",
            paragraphs: [
                "Plus la taille cible est petite, plus on perd de détails. Une photo à 20 Ko convient pour une carte ou un avatar, pas pour une impression. Si l'image est trop floue, essayez une limite plus élevée ou recadrez-la d'abord pour retirer ce qui n'est pas utile. Nous acceptons des fichiers jusqu'à 50 Mo et 50 images par lot. Tout le traitement se fait sur votre appareil, cela peut donc prendre un peu plus de temps sur les téléphones anciens.",
            ],
        },
    ],
    faqs: [
        {
            q: "Comment réduire le poids d'une image sans perdre en qualité ?",
            a: "Utilisez le mode « Par qualité » entre 75 % et 85 % : la différence se voit à peine et le poids baisse généralement de plus de moitié. Si vous passez aussi la sortie en WebP, le fichier devient encore plus léger.",
        },
        {
            q: "L'image atteint-elle exactement la taille choisie ?",
            a: "Elle atteint cette taille ou un peu moins, jamais plus. Dorfic cherche la meilleure qualité qui tient dans la limite, le résultat est donc généralement très proche de la valeur demandée.",
        },
        {
            q: "Et si mon image pèse déjà moins que la cible ?",
            a: "Elle est laissée telle quelle pour ne pas perdre de qualité inutilement. Vous verrez le message « Déjà conforme, laissée telle quelle » et pourrez la télécharger sans modification.",
        },
        {
            q: "Est-ce sûr de compresser des documents personnels ici ?",
            a: "Oui. Vos images ne sont jamais envoyées sur internet : tout est traité dans votre navigateur. Vous pouvez compresser des photos de votre carte d'identité, de justificatifs ou d'autres documents en toute tranquillité.",
        },
        {
            q: "Puis-je compresser des PNG à fond transparent ?",
            a: "Oui. Si vous gardez le format PNG ou choisissez WebP, la transparence est conservée. Ce n'est qu'en convertissant en JPG que le fond transparent devient blanc.",
        },
        {
            q: "Combien d'images puis-je compresser à la fois ?",
            a: "Jusqu'à 50 images par lot, de 50 Mo maximum chacune. À la fin, vous pouvez toutes les télécharger dans un ZIP.",
        },
    ],
    related: [
        "comprimir-imagen-a-100kb",
        "comprimir-imagen-a-50kb",
        "comprimir-imagen-a-20kb",
        "comprimir-imagen-a-200kb",
        "redimensionar-imagen",
        "jpg-a-webp",
    ],
};

export default content;

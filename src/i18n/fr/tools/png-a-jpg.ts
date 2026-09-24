import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "png-a-jpg",
    title: "Convertir PNG en JPG",
    metaDescription:
        "Convertissez gratuitement vos images PNG en JPG, par lot. Choisissez la qualité, réduisez le poids et téléchargez en ZIP. Sans envoi de fichiers : tout se passe dans votre navigateur.",
    h1: "Convertir PNG en JPG gratuitement",
    lead: "Passez vos PNG en JPG pour qu'ils pèsent beaucoup moins et soient acceptés par n'importe quel formulaire. Sans inscription et sans envoyer vos images.",
    sections: [
        {
            heading: "Pourquoi convertir un PNG en JPG ?",
            paragraphs: [
                "Le PNG est un format sans perte : il enregistre chaque pixel à l'identique. Il est parfait pour les logos, les captures d'écran avec du texte ou les images à fond transparent, mais avec des photos il produit des fichiers énormes. Une capture ou une photo en PNG peut peser 3, 5, voire 10 Mo, alors que le même contenu en JPG n'occupe que quelques centaines de Ko.",
                "De plus, certains sites et applications n'acceptent que le JPG. Convertir vos PNG vous aide à respecter ces exigences et à partager vos images plus vite. Cet outil le fait dans votre propre navigateur, sans rien envoyer sur internet.",
            ],
        },
        {
            heading: "Comment passer un PNG en JPG, étape par étape",
            steps: [
                "Choisissez vos fichiers PNG, faites-les glisser dans la zone de dépôt ou collez-les avec Ctrl + V (idéal pour les captures d'écran).",
                "Réglez la qualité si besoin. À 92 %, l'image paraît pratiquement identique et pèse beaucoup moins.",
                "Attendez que chaque image affiche la coche verte et le pourcentage économisé.",
                "Téléchargez les JPG un par un ou tous ensemble dans un ZIP.",
            ],
        },
        {
            heading: "Quand est-ce utile ?",
            bullets: [
                "Des captures d'écran à envoyer par e-mail ou WhatsApp sans qu'elles soient trop lourdes.",
                "Des photos enregistrées en PNG par erreur, par exemple lors d'un export depuis un logiciel de retouche.",
                "Des formulaires administratifs, scolaires ou d'entreprise qui n'acceptent que le JPG.",
                "Des images pour votre site ou votre boutique en ligne, où chaque Ko compte pour la vitesse.",
                "Des documents scannés que le scanner a enregistrés en PNG et qui prennent trop de place.",
            ],
        },
        {
            heading: "Et la transparence ?",
            paragraphs: [
                "Le JPG ne gère pas la transparence. Si votre PNG comporte des zones transparentes (par exemple un logo sans fond), elles sont remplies de blanc lors de la conversion. Pour la plupart des usages, comme les documents ou les photos, le résultat paraît naturel. Si vous devez garder la transparence tout en réduisant le poids, mieux vaut convertir en WebP ou compresser le PNG dans son format.",
                "Il est aussi déconseillé de convertir en JPG des images avec beaucoup de petit texte ou des lignes très fines, comme des schémas : le JPG peut créer de petites taches autour des lettres. Dans ce cas, montez la qualité à 95–100 %.",
            ],
        },
        {
            heading: "Limites",
            paragraphs: [
                "Vous pouvez convertir jusqu'à 50 images par lot, de 50 Mo maximum chacune. La conversion a lieu sur votre appareil, la vitesse dépend donc de votre téléphone ou ordinateur ; dans la plupart des cas, cela prend moins d'une seconde par image. Le JPG obtenu ne contient pas les métadonnées du fichier d'origine.",
            ],
        },
        {
            heading: "PNG, JPG et le poids de vos captures d'écran",
            paragraphs: [
                "Les captures d'écran sont enregistrées en PNG sur presque tous les téléphones et ordinateurs. Sur les écrans modernes, très riches en pixels, une seule capture peut dépasser 2 Mo. Si vous voulez simplement montrer une conversation, un justificatif de paiement ou un graphique, la passer en JPG haute qualité la ramène à une fraction de ce poids tout en restant parfaitement lisible.",
                "Si vous devez joindre plusieurs captures à un e-mail ou les envoyer sur une plateforme limitée en taille, convertissez-les toutes en un seul lot et téléchargez-les en ZIP. Vous gagnez du temps et de la place, et comme tout se fait sur votre appareil, les informations sensibles visibles sur vos captures ne le quittent jamais.",
            ],
        },
    ],
    faqs: [
        {
            q: "Une image perd-elle en qualité en passant de PNG à JPG ?",
            a: "Le JPG compresse avec une légère perte, mais à 90 % de qualité ou plus, la différence est très difficile à voir sur des photos. Pour les images avec du petit texte, augmentez la qualité.",
        },
        {
            q: "Que devient le fond transparent ?",
            a: "Il devient blanc, car le JPG ne gère pas la transparence. Si vous devez la conserver, utilisez le WebP ou gardez le PNG.",
        },
        {
            q: "Combien de place vais-je gagner ?",
            a: "Cela dépend de l'image, mais pour des photos et des captures, il est courant d'économiser 70 % à 95 % du poids. Dorfic affiche l'économie exacte pour chaque fichier.",
        },
        {
            q: "Puis-je convertir directement des captures d'écran ?",
            a: "Oui. Faites la capture, ouvrez cette page et appuyez sur Ctrl + V (ou Cmd + V sur Mac). L'image est ajoutée et convertie automatiquement.",
        },
        {
            q: "Est-ce sûr ? Mes fichiers sont-ils envoyés ?",
            a: "Ils ne sont pas envoyés. Tout est traité dans votre navigateur et vos images ne quittent jamais votre appareil.",
        },
        {
            q: "Y a-t-il un coût ou un filigrane ?",
            a: "Non. C'est gratuit, sans inscription et sans filigrane.",
        },
    ],
    related: ["jpg-a-png", "comprimir-imagen", "webp-a-jpg", "jpg-a-webp", "heic-a-jpg", "redimensionar-imagen"],
};

export default content;

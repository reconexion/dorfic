import type { LegalPageContent } from "../../types";

const UPDATED = "23 septembre 2026";

export const acerca: LegalPageContent = {
    title: "À propos de Dorfic",
    metaDescription:
        "Découvrez Dorfic : des outils d'image gratuits qui fonctionnent dans votre navigateur et protègent votre vie privée. Notre mission, notre fonctionnement et notre financement.",
    h1: "À propos de Dorfic",
    intro: "Dorfic est un ensemble d'outils gratuits pour travailler avec des images : convertir des formats, compresser et redimensionner. Nous l'avons conçu à partir des situations réelles du quotidien.",
    sections: [
        {
            heading: "Notre mission",
            paragraphs: [
                "Nous voulons que chacun puisse préparer ses images pour une démarche administrative, l'école, le travail ou les réseaux sociaux sans complication, sans payer et sans mettre en danger ses informations personnelles. Réduire le poids d'une photo ne devrait pas vous obliger à créer un compte, installer une application ou envoyer vos documents sur un serveur inconnu.",
            ],
        },
        {
            heading: "Comment fonctionne Dorfic",
            paragraphs: [
                "Contrairement à de nombreux services en ligne, Dorfic ne reçoit pas vos images. Lorsque vous choisissez une photo, votre navigateur la traite avec la puissance de votre propre appareil grâce à des technologies web standard (Canvas et Web Workers). Le résultat est créé sur place et vous le téléchargez directement. C'est pourquoi nous pouvons affirmer que vos photos ne quittent jamais votre appareil.",
                "Cette façon de faire rend aussi les outils rapides : pas besoin d'attendre qu'un fichier soit envoyé ni qu'un serveur le traite.",
            ],
        },
        {
            heading: "Comment nous nous finançons",
            paragraphs: [
                "Dorfic est gratuit et financé par des publicités affichées sur le site. Nous veillons à ce qu'elles restent discrètes, qu'elles ne couvrent jamais les outils et qu'elles n'interrompent pas ce que vous faites. Les publicités n'ont pas accès à vos images, puisque vos images ne sont envoyées nulle part.",
            ],
        },
        {
            heading: "Nos engagements",
            bullets: [
                "Garder les outils gratuits et sans filigrane.",
                "Ne jamais envoyer ni stocker vos images.",
                "Expliquer clairement ce que fait chaque outil et quelles sont ses limites.",
                "Nous améliorer en continu grâce aux retours des personnes qui utilisent Dorfic.",
            ],
        },
    ],
};

export const contacto: LegalPageContent = {
    title: "Contact",
    metaDescription: "Une question, une suggestion ou un bug sur Dorfic ? Écrivez-nous par e-mail, nous vous répondrons dès que possible.",
    h1: "Contact",
    intro: "Vous avez une question, une idée de nouvel outil ou vous avez trouvé quelque chose qui ne fonctionne pas ? Nous serons ravis de vous lire.",
    sections: [
        {
            heading: "Écrivez-nous",
            paragraphs: [
                "Le meilleur moyen de nous joindre est l'e-mail. Nous répondons généralement sous 2 à 5 jours ouvrés.",
                "Si vous signalez un problème, indiquez l'outil utilisé, votre appareil et votre navigateur, ainsi que le message affiché. Merci de ne pas nous envoyer d'images contenant des informations personnelles : nous n'en avons pas besoin pour vous aider.",
            ],
        },
        {
            heading: "Sujets sur lesquels nous pouvons vous aider",
            bullets: [
                "Questions sur l'utilisation d'un outil.",
                "Signalement de bugs ou de problèmes de compatibilité.",
                "Suggestions de nouvelles fonctions ou de nouveaux outils.",
                "Questions sur la confidentialité, la publicité ou les aspects juridiques.",
            ],
        },
    ],
};

export const privacidad: LegalPageContent = {
    title: "Politique de confidentialité",
    metaDescription:
        "Politique de confidentialité de Dorfic : vos images sont traitées sur votre appareil et ne sont jamais envoyées. Découvrez quelles données techniques sont collectées, l'usage des cookies publicitaires et vos droits.",
    h1: "Politique de confidentialité",
    intro: "Chez Dorfic, la confidentialité fait partie de la conception. Cette politique explique quelles informations sont traitées lorsque vous utilisez le site, dans quel but et quels choix s'offrent à vous.",
    updated: UPDATED,
    sections: [
        {
            heading: "1. Responsable du traitement",
            paragraphs: [
                "Dorfic (« Dorfic », « nous ») est responsable du site web et des outils qu'il propose. Vous pouvez nous contacter pour toute question relative à cette politique à l'adresse e-mail indiquée sur la page Contact.",
            ],
        },
        {
            heading: "2. Vos images ne sont pas collectées",
            paragraphs: [
                "Les images que vous sélectionnez, faites glisser ou collez dans les outils sont traitées exclusivement dans votre navigateur, sur votre appareil. Elles ne sont envoyées ni à nos serveurs ni à des tiers, nous ne les conservons pas et nous n'avons aucun moyen de les voir. Lorsque vous fermez ou rechargez la page, elles disparaissent de la mémoire du navigateur.",
                "Les fichiers obtenus ne contiennent pas non plus les métadonnées de l'original (comme la position GPS ou le modèle de l'appareil photo), sauf lorsqu'une image est laissée telle quelle parce qu'elle respectait déjà la taille demandée.",
            ],
        },
        {
            heading: "3. Données techniques et mesure d'audience",
            paragraphs: [
                "Pour savoir combien de personnes visitent le site et quelles pages sont les plus utiles, nous utilisons Cloudflare Web Analytics, un service de mesure d'audience qui n'utilise pas de cookies et ne suit pas les personnes d'un site à l'autre. Il collecte des informations agrégées comme la page visitée, le pays approximatif, le type d'appareil et le navigateur.",
                "Comme tout site web, notre hébergeur (Cloudflare) peut traiter temporairement des données techniques comme l'adresse IP pour afficher les pages et protéger le site contre les attaques. Nous utilisons aussi la langue de votre navigateur et votre pays approximatif pour afficher le site dans votre langue, et nous mémorisons votre choix dans un petit cookie fonctionnel (dorfic_lang).",
            ],
        },
        {
            heading: "4. Publicité et cookies tiers",
            paragraphs: [
                "Dorfic est financé par la publicité. Nous pouvons afficher des annonces Google AdSense. Google et ses partenaires utilisent des cookies ou d'autres identifiants pour afficher des annonces basées sur vos visites précédentes sur ce site et sur d'autres, et pour en mesurer les performances.",
                "Vous pouvez désactiver la publicité personnalisée dans les Paramètres des annonces Google (adssettings.google.com) ou consulter www.youronlinechoices.com pour refuser les cookies d'autres prestataires. Pour en savoir plus sur l'utilisation des données par Google, consultez policies.google.com/technologies/partner-sites. Conformément à la réglementation, nous vous demanderons votre consentement avant d'utiliser des cookies publicitaires.",
            ],
        },
        {
            heading: "5. Stockage local",
            paragraphs: [
                "Pour que le site fonctionne hors ligne et se charge plus vite, votre navigateur peut conserver des fichiers du site lui-même (code, styles et icônes) grâce à un service worker. Ces fichiers ne contiennent ni informations personnelles ni images, et vous pouvez les supprimer dans les réglages de votre navigateur.",
            ],
        },
        {
            heading: "6. Vos droits",
            paragraphs: [
                "Comme nous ne collectons pas de données permettant de vous identifier directement, nous n'avons généralement aucune information vous concernant à consulter, corriger ou supprimer. Vous pouvez néanmoins nous écrire pour exercer vos droits d'accès, de rectification, d'effacement, d'opposition et de limitation prévus par le Règlement général sur la protection des données (RGPD), ou pour toute question sur cette politique. Vous pouvez également introduire une réclamation auprès de l'autorité de contrôle de votre pays (en France, la CNIL). Si vous nous écrivez, nous utiliserons votre adresse uniquement pour vous répondre.",
            ],
        },
        {
            heading: "7. Mineurs",
            paragraphs: [
                "Dorfic peut être utilisé à tout âge, car nous ne demandons ni inscription ni données personnelles. Nous recommandons aux mineurs de naviguer sous la surveillance d'un adulte.",
            ],
        },
        {
            heading: "8. Modifications de cette politique",
            paragraphs: [
                "Nous pouvons mettre à jour cette politique pour refléter des changements du site ou de la loi. La version en vigueur est publiée sur cette page avec sa date de mise à jour.",
            ],
        },
    ],
};

export const terminos: LegalPageContent = {
    title: "Conditions d'utilisation",
    metaDescription: "Conditions générales d'utilisation de Dorfic, les outils d'image gratuits qui fonctionnent dans votre navigateur.",
    h1: "Conditions d'utilisation",
    intro: "En utilisant Dorfic, vous acceptez ces conditions. Elles sont courtes et se veulent claires ; lisez-les avant d'utiliser les outils.",
    updated: UPDATED,
    sections: [
        {
            heading: "1. Le service",
            paragraphs: [
                "Dorfic propose des outils gratuits pour convertir, compresser et redimensionner des images. Les outils s'exécutent dans votre navigateur et le traitement a lieu sur votre appareil. Le service est fourni « en l'état » et peut évoluer, s'étendre ou être interrompu à tout moment sans préavis.",
            ],
        },
        {
            heading: "2. Utilisation autorisée",
            paragraphs: ["Vous pouvez utiliser Dorfic à des fins personnelles et commerciales. Vous vous engagez à ne pas l'utiliser pour :"],
            bullets: [
                "Traiter des images sur lesquelles vous n'avez ni droits ni autorisation d'utilisation.",
                "Créer ou diffuser des contenus illégaux, diffamatoires ou portant atteinte aux droits de tiers.",
                "Tenter d'endommager, de surcharger ou de perturber le fonctionnement du site.",
                "Copier ou reproduire le site, son design ou ses textes sans autorisation.",
            ],
        },
        {
            heading: "3. Vos images",
            paragraphs: [
                "Vous conservez tous les droits sur les images que vous traitez. Dorfic ne les reçoit pas et ne revendique aucun droit sur elles. Il vous appartient de conserver des copies de vos fichiers originaux ; nous vous conseillons de ne pas supprimer l'original avant d'avoir vérifié le résultat.",
            ],
        },
        {
            heading: "4. Absence de garantie",
            paragraphs: [
                "Nous faisons de notre mieux pour que les outils fonctionnent correctement, mais nous ne garantissons pas qu'ils soient exempts d'erreurs, qu'ils fonctionnent sur tous les appareils ou navigateurs, ni que le résultat sera accepté par un portail ou un organisme en particulier. Vérifiez toujours les exigences du site où vous utiliserez vos images.",
            ],
        },
        {
            heading: "5. Limitation de responsabilité",
            paragraphs: [
                "Dans les limites autorisées par la loi, Dorfic ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le site, y compris la perte de données ou de fichiers.",
            ],
        },
        {
            heading: "6. Publicité et liens",
            paragraphs: [
                "Le site affiche des publicités de tiers et peut contenir des liens vers d'autres sites. Nous ne contrôlons pas et ne sommes pas responsables du contenu, des produits ou des pratiques de confidentialité de ces tiers.",
            ],
        },
        {
            heading: "7. Propriété intellectuelle",
            paragraphs: [
                "La marque Dorfic, son logo, le design du site et ses textes appartiennent à Dorfic. Les bibliothèques open source que nous utilisons sont régies par leurs propres licences.",
            ],
        },
        {
            heading: "8. Modifications et droit applicable",
            paragraphs: [
                "Nous pouvons modifier ces conditions à tout moment ; la version en vigueur est celle publiée sur cette page. Ces conditions sont régies par les lois des États-Unis du Mexique, sans préjudice des dispositions impératives de protection des consommateurs de votre pays de résidence.",
            ],
        },
    ],
};

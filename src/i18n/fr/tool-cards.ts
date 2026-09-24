import type { ToolSlug } from "@/config/paths";
import type { ToolCard } from "../types";

export const toolCards: Record<ToolSlug, ToolCard> = {
    "heic-a-jpg": { name: "HEIC en JPG", description: "Convertissez les photos de votre iPhone en JPG pour les ouvrir partout." },
    "comprimir-imagen": { name: "Compresser une image", description: "Réduisez le poids de vos JPG, PNG ou WebP à la taille en Ko dont vous avez besoin." },
    "redimensionar-imagen": { name: "Redimensionner une image", description: "Changez la largeur et la hauteur en pixels ou en pourcentage sans déformer." },
    "png-a-jpg": { name: "PNG en JPG", description: "Convertissez vos PNG en JPG pour qu'ils soient plus légers et acceptés partout." },
    "jpg-a-png": { name: "JPG en PNG", description: "Passez vos JPG en PNG sans perdre davantage de qualité en les retouchant." },
    "webp-a-jpg": { name: "WebP en JPG", description: "Convertissez les images WebP téléchargées sur internet en JPG compatible." },
    "jpg-a-webp": { name: "JPG en WebP", description: "Convertissez en WebP pour que votre site se charge plus vite." },
    "comprimir-imagen-a-20kb": {
        name: "Compresser à 20 Ko",
        description: "Pour les formulaires qui exigent des photos très légères, comme une photo d'identité.",
    },
    "comprimir-imagen-a-50kb": { name: "Compresser à 50 Ko", description: "Idéal pour les signatures, photos de profil et inscriptions en ligne." },
    "comprimir-imagen-a-100kb": { name: "Compresser à 100 Ko", description: "Pour les documents scannés et les démarches qui limitent le poids." },
    "comprimir-imagen-a-200kb": { name: "Compresser à 200 Ko", description: "Bonne qualité et faible poids pour les e-mails et les ENT scolaires." },
    "comprimir-jpg": { name: "Compresser un JPG", description: "Réduisez le poids de vos photos JPG sans différence visible." },
    "comprimir-png": { name: "Compresser un PNG", description: "Allégez captures et graphiques PNG en gardant la transparence." },
    "heic-a-png": { name: "HEIC en PNG", description: "Convertissez vos photos d'iPhone en PNG sans perte pour les retoucher." },
    "webp-a-png": { name: "WebP en PNG", description: "Passez vos images WebP en PNG en gardant le fond transparent." },
    "png-a-webp": { name: "PNG en WebP", description: "Des images transparentes bien plus légères pour votre site." },
    "comprimir-imagen-a-10kb": { name: "Compresser à 10 Ko", description: "Pour les signatures et photos sur des systèmes aux limites extrêmes." },
    "comprimir-imagen-a-30kb": { name: "Compresser à 30 Ko", description: "Photos de dossier et d'identité qui restent nettes." },
    "comprimir-imagen-a-500kb": { name: "Compresser à 500 Ko", description: "Presque la qualité d'origine, pour une fraction du poids." },
};

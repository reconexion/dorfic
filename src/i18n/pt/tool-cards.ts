import type { ToolSlug } from "@/config/paths";
import type { ToolCard } from "../types";

export const toolCards: Record<ToolSlug, ToolCard> = {
    "heic-a-jpg": { name: "HEIC para JPG", description: "Converta as fotos do seu iPhone para JPG e abra em qualquer lugar." },
    "comprimir-imagen": { name: "Comprimir imagem", description: "Diminua o peso dos seus JPG, PNG ou WebP para o tamanho em KB que precisar." },
    "redimensionar-imagen": { name: "Redimensionar imagem", description: "Mude a largura e a altura em pixels ou por porcentagem sem distorcer." },
    "png-a-jpg": { name: "PNG para JPG", description: "Converta PNG para JPG para pesar menos e ser aceito em todo lugar." },
    "jpg-a-png": { name: "JPG para PNG", description: "Passe seus JPG para PNG sem perder mais qualidade ao editar." },
    "webp-a-jpg": { name: "WebP para JPG", description: "Converta imagens WebP baixadas da internet para JPG compatível." },
    "jpg-a-webp": { name: "JPG para WebP", description: "Converta para WebP e deixe seu site mais rápido." },
    "comprimir-imagen-a-20kb": { name: "Comprimir para 20 KB", description: "Para formulários que pedem fotos bem leves, como foto 3x4." },
    "comprimir-imagen-a-50kb": { name: "Comprimir para 50 KB", description: "Ideal para assinaturas, fotos de perfil e cadastros online." },
    "comprimir-imagen-a-100kb": { name: "Comprimir para 100 KB", description: "Para documentos digitalizados e inscrições com limite de tamanho." },
    "comprimir-imagen-a-200kb": { name: "Comprimir para 200 KB", description: "Boa qualidade com pouco peso para e-mails e plataformas escolares." },
    "comprimir-jpg": { name: "Comprimir JPG", description: "Reduza o peso das suas fotos JPG sem diferença visível." },
    "comprimir-png": { name: "Comprimir PNG", description: "Deixe capturas e gráficos PNG mais leves mantendo a transparência." },
    "heic-a-png": { name: "HEIC para PNG", description: "Converta fotos do iPhone para PNG sem perdas para editar." },
    "webp-a-png": { name: "WebP para PNG", description: "Passe imagens WebP para PNG e mantenha o fundo transparente." },
    "png-a-webp": { name: "PNG para WebP", description: "Imagens com transparência muito mais leves para o seu site." },
    "comprimir-imagen-a-10kb": { name: "Comprimir para 10 KB", description: "Para assinaturas e fotos em sistemas com limites extremos." },
    "comprimir-imagen-a-30kb": { name: "Comprimir para 30 KB", description: "Fotos para inscrições e documentos com boa nitidez." },
    "comprimir-imagen-a-500kb": { name: "Comprimir para 500 KB", description: "Quase a qualidade original, com uma fração do peso." },
};

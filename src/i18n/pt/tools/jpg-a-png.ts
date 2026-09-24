import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "jpg-a-png",
    title: "Converter JPG para PNG",
    metaDescription:
        "Converta JPG para PNG grátis, em lote e sem perder mais qualidade. Ideal para editar ou quando um portal pede PNG. Suas imagens não são enviadas para a internet.",
    h1: "Converter JPG para PNG grátis",
    lead: "Converta suas fotos JPG para PNG em segundos para editá-las sem perder mais qualidade ou cumprir um formato exigido.",
    sections: [
        {
            heading: "O que o conversor de JPG para PNG faz?",
            paragraphs: [
                "Ele pega suas imagens JPG e as salva no formato PNG, um formato sem perdas. Isso significa que, a partir daí, a imagem não vai mais perder qualidade, mesmo que você a abra, edite e salve de novo muitas vezes. Com o JPG acontece o contrário: cada vez que você salva, ele é comprimido de novo e a imagem vai se degradando aos poucos.",
                "A conversão é feita inteira no seu navegador. Você não precisa instalar programas nem criar uma conta, e suas fotos nunca são enviadas para nenhum servidor.",
            ],
        },
        {
            heading: "Como converter JPG para PNG passo a passo",
            steps: [
                "Selecione suas imagens JPG ou arraste-as para a área de envio. Você também pode colá-las com Ctrl + V.",
                "Não precisa ajustar nada: o PNG salva a imagem como ela é, sem qualidade para escolher.",
                "Espere aparecer o visto verde em cada arquivo.",
                "Baixe cada PNG ou todos juntos em um arquivo ZIP.",
            ],
        },
        {
            heading: "Quando vale usar PNG?",
            bullets: [
                "Antes de editar: se você vai recortar, escrever texto ou retocar uma imagem várias vezes, trabalhar em PNG evita acumular perda de qualidade.",
                "Quando um sistema pede: alguns portais, modelos de design ou programas só aceitam PNG.",
                "Para imagens com texto, gráficos ou desenhos: o PNG mantém bordas e letras perfeitamente nítidas.",
                "Como passo anterior para remover o fundo em um editor, já que o PNG suporta transparência.",
            ],
        },
        {
            heading: "O que saber antes de converter",
            paragraphs: [
                "Converter para PNG não recupera a qualidade que o JPG já perdeu: a imagem ficará exatamente igual ao original, mas a partir daí estará protegida contra novas perdas. Também não adiciona transparência automaticamente; o fundo continua o mesmo da foto.",
                "Lembre que um PNG quase sempre pesa bem mais que o JPG original, às vezes cinco ou dez vezes mais, principalmente em fotografias. A Dorfic mostra o peso final de cada arquivo. Se o objetivo é enviar a imagem ou subi-la em uma página com limite de tamanho, provavelmente é melhor ficar com o JPG ou usar o compressor de imagens.",
            ],
        },
        {
            heading: "Limites",
            paragraphs: [
                "Você pode converter até 50 imagens de uma vez, de até 50 MB cada. Como a conversão é feita no seu dispositivo, fotos muito grandes podem levar alguns segundos em celulares mais antigos. O arquivo PNG final não inclui os metadados do JPG, como a localização.",
            ],
        },
        {
            heading: "Diferenças entre JPG e PNG em poucas palavras",
            paragraphs: [
                "O JPG foi pensado para fotografias: comprime muito descartando detalhes que o olho quase não percebe, por isso seus arquivos são leves. O PNG foi pensado para gráficos: guarda cada pixel exato, suporta transparência e mantém perfeitamente nítidas as bordas de letras, ícones e linhas, em troca de arquivos mais pesados.",
                "Na prática, use JPG para compartilhar e guardar fotos, e PNG para logotipos, prints com texto, ilustrações ou qualquer imagem que você vá editar várias vezes. Na dúvida, guarde sempre uma cópia do arquivo original: assim você poderá convertê-lo para o formato que precisar mais tarde sem perder nada.",
            ],
        },
    ],
    faqs: [
        {
            q: "Converter JPG para PNG melhora a qualidade?",
            a: "Não. A imagem fica igual ao JPG original. O que você ganha é que ela não vai perder mais qualidade ao ser editada e salva várias vezes.",
        },
        {
            q: "Por que o PNG pesa mais que o JPG?",
            a: "Porque o PNG guarda a imagem sem perdas e o JPG comprime descartando detalhes. Em fotografias, o PNG pode pesar várias vezes mais.",
        },
        {
            q: "O PNG terá fundo transparente?",
            a: "Não automaticamente. A conversão mantém o fundo original da foto. Para removê-lo você precisa de um editor de imagens.",
        },
        {
            q: "Posso converter muitas imagens de uma vez?",
            a: "Sim, até 50 por lote. No final você baixa todas juntas em dorfic-imagens.zip.",
        },
        {
            q: "Minhas imagens ficam guardadas em algum lugar?",
            a: "Não. Elas são processadas no seu navegador e nunca saem do seu dispositivo. Ao fechar a página, desaparecem.",
        },
    ],
    related: ["png-a-jpg", "jpg-a-webp", "redimensionar-imagen", "comprimir-imagen", "webp-a-jpg", "heic-a-jpg"],
};

export default content;

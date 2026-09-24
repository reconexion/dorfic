import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "redimensionar-imagen",
    title: "Redimensionar imagem",
    metaDescription:
        "Mude o tamanho das suas imagens em pixels ou por porcentagem, mantendo a proporção. Grátis, em lote e sem enviar suas fotos para nenhum servidor.",
    h1: "Redimensionar imagem grátis",
    lead: "Mude a largura e a altura das suas fotos em pixels ou por porcentagem, sem distorcer. Rápido, grátis e sem sair do navegador.",
    sections: [
        {
            heading: "O que significa redimensionar uma imagem?",
            paragraphs: [
                "Redimensionar é mudar as dimensões de uma imagem, ou seja, quantos pixels ela tem de largura e de altura. Uma foto de celular costuma medir 4000 × 3000 pixels ou mais, muito mais do que uma tela, um documento ou uma publicação precisam. Ao reduzi-la para, por exemplo, 1080 pixels de largura, ela continua bonita na tela e pesa muito menos.",
                "Com esta ferramenta você pode indicar as medidas exatas em pixels ou simplesmente escolher uma porcentagem do tamanho original. A opção “Manter proporção” evita que a imagem fique esticada ou achatada: basta digitar a largura ou a altura e o outro valor é calculado sozinho.",
            ],
        },
        {
            heading: "Como mudar o tamanho de uma imagem passo a passo",
            steps: [
                "Escolha se quer trabalhar “Por pixels” ou “Por porcentagem”.",
                "Em pixels, digite a largura, a altura ou as duas. Com “Manter proporção” ativado, se você digitar os dois valores a imagem se ajusta para caber nesse quadro sem distorcer.",
                "Em porcentagem, mova o controle deslizante: 50% deixa a imagem com metade da largura e da altura.",
                "Selecione, arraste ou cole suas imagens. Todas são processadas com os mesmos ajustes.",
                "Baixe cada imagem ou o lote completo em um arquivo ZIP.",
            ],
        },
        {
            heading: "Usos comuns",
            bullets: [
                "Redes sociais: 1080 px de largura é uma medida padrão para publicações quadradas e verticais.",
                "Fotos para inscrições: alguns portais pedem medidas específicas, como uma foto 3x4 em pixels.",
                "Sites e blogs: imagens de 1200 a 1600 px de largura ficam nítidas e carregam rápido.",
                "Apresentações e documentos: reduza as fotos antes de inseri-las para que seu arquivo do Word ou PowerPoint não pese centenas de megas.",
                "Miniaturas e catálogos: gere versões pequenas dos seus produtos em um único passo.",
            ],
        },
        {
            heading: "Dicas para um resultado melhor",
            paragraphs: [
                "Reduzir uma imagem sempre fica bom, porque se descarta informação que sobrava. Ampliá-la, por outro lado, não acrescenta detalhe real: o navegador precisa inventar pixels e o resultado fica mais suave ou borrado. Sempre que puder, parta da maior imagem que você tiver.",
                "A imagem mantém seu formato original (JPG, PNG ou WebP) e, no caso de PNG e WebP, também a transparência. Se além de mudar as medidas você precisa de um peso máximo em KB, redimensione primeiro e depois use o compressor de imagens. Em reduções grandes, a Dorfic diminui a imagem em etapas para que as bordas fiquem limpas e sem “serrilhado”.",
            ],
        },
        {
            heading: "Limites",
            paragraphs: [
                "Você pode escolher medidas de até 16.384 pixels por lado, processar até 50 imagens por lote e arquivos de até 50 MB. Todo o trabalho é feito no seu dispositivo, então suas fotos nunca saem dele. Em celulares com pouca memória, imagens gigantes podem demorar um pouco mais.",
            ],
        },
    ],
    faqs: [
        {
            q: "Como mudo o tamanho de uma foto sem distorcer?",
            a: "Deixe ativado “Manter proporção” e digite só a largura ou só a altura. A Dorfic calcula o outro valor automaticamente para respeitar o formato original.",
        },
        {
            q: "O que acontece se eu digitar largura e altura com a proporção ativada?",
            a: "A imagem se ajusta para caber nesse quadro sem distorcer. Por isso um dos lados pode ficar um pouco menor que o número que você digitou.",
        },
        {
            q: "Posso aumentar uma imagem?",
            a: "Sim, mas ampliar não acrescenta detalhe real e a foto pode ficar borrada. O ideal é usar esta ferramenta para reduzir.",
        },
        {
            q: "Redimensionar também diminui o peso?",
            a: "Sim. Menos pixels significa um arquivo mais leve. Se precisar de um peso exato em KB, use depois a ferramenta de comprimir imagem.",
        },
        {
            q: "Meus PNG perdem a transparência?",
            a: "Não. A imagem mantém o formato original, então os PNG e WebP mantêm o fundo transparente.",
        },
        {
            q: "Minhas imagens são enviadas para a internet?",
            a: "Não. Tudo acontece no seu navegador. Suas fotos nunca saem do seu dispositivo.",
        },
    ],
    related: ["comprimir-imagen", "comprimir-imagen-a-100kb", "heic-a-jpg", "jpg-a-webp", "png-a-jpg", "comprimir-imagen-a-50kb"],
};

export default content;

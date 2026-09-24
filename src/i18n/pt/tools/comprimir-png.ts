import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-png",
    title: "Comprimir PNG",
    metaDescription:
        "Comprima imagens PNG grátis: reduza o peso de prints, logos e gráficos, mantenha a transparência ou converta para JPG ou WebP. Sem enviar arquivos.",
    h1: "Comprimir PNG grátis",
    lead: "Deixe mais leves seus prints, logotipos e gráficos PNG. Mantenha a transparência ou passe para um formato mais leve em um clique.",
    sections: [
        {
            heading: "Por que um PNG é difícil de comprimir",
            paragraphs: [
                "PNG é um formato sem perdas: guarda cada pixel exatamente como ele é. Isso o torna perfeito para logotipos, ícones, prints com texto e qualquer imagem com fundo transparente, mas também explica por que pesa tanto quando contém fotografias ou degradês.",
                "Como o PNG não descarta informação, a forma de reduzir seu peso é diminuir o número de pixels ou mudar para um formato que comprime com perdas, como WebP ou JPG. A Dorfic deixa você escolher: manter o PNG e ajustar as dimensões até o peso que precisa, ou convertê-lo para conseguir uma redução bem maior.",
            ],
        },
        {
            heading: "Como comprimir um PNG passo a passo",
            steps: [
                "Selecione ou arraste seus arquivos PNG. Você também pode colar prints com Ctrl + V.",
                "Escolha o peso máximo em KB ou o modo por qualidade.",
                "Em “Formato de saída” deixe PNG se precisar de transparência, ou escolha WebP ou JPG para economizar muito mais.",
                "Baixe suas imagens uma por uma ou todas em um ZIP.",
            ],
        },
        {
            heading: "Qual formato de saída convém?",
            bullets: [
                "PNG: mantém a transparência e a nitidez perfeita; para diminuir o peso, as dimensões são reduzidas.",
                "WebP: mantém a transparência e costuma pesar 60% a 80% menos. Ideal para sites.",
                "JPG: o mais compatível e leve para fotografias, mas preenche o fundo transparente com branco.",
            ],
        },
        {
            heading: "Casos em que ajuda",
            bullets: [
                "Prints que pesam vários megas e que você quer mandar por e-mail ou chat.",
                "Logotipos para seu site, apresentações ou assinaturas de e-mail.",
                "Imagens de produtos com fundo transparente para uma loja virtual.",
                "Gráficos e diagramas que você vai inserir em documentos ou relatórios.",
                "PNG exportados de programas de design com mais resolução do que o necessário.",
            ],
        },
        {
            heading: "Dicas para prints e logotipos",
            paragraphs: [
                "Os prints de celulares modernos têm muitíssimos pixels. Se você só vai vê-los em uma tela, reduzi-los à metade quase não se nota e o arquivo fica com um quarto do tamanho. Para logotipos, pense no tamanho real em que serão exibidos: um logo de 400 pixels de largura costuma bastar para a web e pesa uma fração do original.",
                "Se o seu PNG é na verdade uma fotografia sem transparência, o modo automático do compressor geral vai passá-lo para JPG e a economia será enorme. Aqui, por outro lado, deixamos PNG como saída padrão para respeitar quem precisa de transparência.",
            ],
        },
        {
            heading: "Privado e sem limites",
            paragraphs: [
                "Suas imagens são processadas dentro do seu navegador e nunca são enviadas para nenhum servidor. Você pode processar até 50 arquivos por lote, de até 50 MB cada, sem cadastro nem marca d'água.",
            ],
        },
        {
            heading: "PNG de 8 bits, 24 bits e transparência",
            paragraphs: [
                "Os PNG podem ser salvos com diferentes profundidades de cor. Os de 24 ou 32 bits suportam milhões de cores e transparência suave, o que os torna ideais para fotos recortadas e sombras, mas também os mais pesados. Os navegadores, ao salvar a partir de um canvas, geram PNG de 32 bits, então a forma prática de economizar espaço aqui é reduzir as dimensões ou mudar para WebP.",
                "Se você trabalha com muitos ícones ou gráficos planos para um site, considere usar SVG sempre que possível: é um formato vetorial que pesa muito pouco e fica nítido em qualquer tamanho. Para todo o resto, WebP com transparência é hoje a opção mais eficiente.",
            ],
        },
    ],
    faqs: [
        {
            q: "O fundo transparente é mantido ao comprimir um PNG?",
            a: "Sim, se você mantiver PNG ou escolher WebP como formato de saída. Só o JPG preenche a transparência com branco.",
        },
        {
            q: "Por que meu PNG ficou com menos pixels?",
            a: "Porque o PNG não perde qualidade ao salvar; para chegar ao peso que você pediu, a única forma de mantê-lo como PNG é reduzir as dimensões.",
        },
        {
            q: "Qual é a melhor forma de reduzir muito um PNG?",
            a: "Convertê-lo para WebP: mantém a transparência e normalmente pesa entre 60% e 80% menos.",
        },
        {
            q: "Posso comprimir prints diretamente?",
            a: "Sim. Tire o print e cole nesta página com Ctrl + V (ou Cmd + V no Mac).",
        },
        {
            q: "É grátis e privado?",
            a: "Sim. É grátis, sem cadastro, e suas imagens nunca saem do seu dispositivo.",
        },
    ],
    related: ["png-a-webp", "png-a-jpg", "comprimir-imagen", "comprimir-jpg", "redimensionar-imagen", "comprimir-imagen-a-100kb"],
};

export default content;

import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "png-a-jpg",
    title: "Converter PNG para JPG",
    metaDescription:
        "Converta imagens PNG para JPG grátis e em lote. Escolha a qualidade, reduza o peso e baixe em ZIP. Sem enviar seus arquivos: tudo no seu navegador.",
    h1: "Converter PNG para JPG grátis",
    lead: "Passe seus PNG para JPG para que pesem muito menos e sejam aceitos em qualquer formulário. Sem cadastro e sem enviar suas imagens.",
    sections: [
        {
            heading: "Por que converter de PNG para JPG?",
            paragraphs: [
                "PNG é um formato sem perdas: guarda cada pixel exatamente igual. É perfeito para logotipos, capturas de tela com texto ou imagens com fundo transparente, mas com fotografias gera arquivos enormes. Um print ou foto em PNG pode pesar 3, 5 ou até 10 MB, quando o mesmo conteúdo em JPG ocupa algumas centenas de KB.",
                "Além disso, há portais e aplicativos que só aceitam JPG. Converter seus PNG ajuda a cumprir esses requisitos e a compartilhar as imagens mais rápido. Esta ferramenta faz isso no seu próprio navegador, sem enviar nada para a internet.",
            ],
        },
        {
            heading: "Como passar um PNG para JPG passo a passo",
            steps: [
                "Selecione seus arquivos PNG, arraste-os para a área de envio ou cole-os com Ctrl + V (ideal para prints).",
                "Ajuste a qualidade se precisar. Com 92% a imagem fica praticamente igual e pesa muito menos.",
                "Espere cada imagem mostrar o visto verde e a porcentagem que você economizou.",
                "Baixe os JPG um por um ou todos juntos em um ZIP.",
            ],
        },
        {
            heading: "Quando vale a pena?",
            bullets: [
                "Prints que você quer mandar por e-mail ou WhatsApp sem que pesem tanto.",
                "Fotos que foram salvas como PNG por engano, por exemplo ao exportar de um editor.",
                "Formulários de serviços públicos, escolas ou empresas que só aceitam JPG.",
                "Imagens para o seu site ou loja virtual, onde cada KB conta para a velocidade.",
                "Documentos digitalizados que o scanner salvou em PNG e ocupam espaço demais.",
            ],
        },
        {
            heading: "O que acontece com a transparência",
            paragraphs: [
                "O JPG não suporta transparência. Se o seu PNG tem partes transparentes (por exemplo, um logo sem fundo), essas áreas são preenchidas com branco ao converter. Na maioria dos usos, como documentos ou fotos, o resultado fica natural. Se você precisa manter a transparência e ainda assim reduzir o peso, é melhor converter para WebP ou comprimir o PNG mantendo o formato.",
                "Também não é bom converter para JPG imagens com muito texto pequeno ou linhas muito finas, como diagramas: o JPG pode gerar pequenas manchas ao redor das letras. Nesses casos, suba a qualidade para 95–100%.",
            ],
        },
        {
            heading: "Limites",
            paragraphs: [
                "Você pode converter até 50 imagens por lote, de até 50 MB cada. A conversão acontece no seu dispositivo, então a velocidade depende do seu celular ou computador; na maioria dos casos leva menos de um segundo por imagem. O JPG gerado não inclui metadados do arquivo original.",
            ],
        },
        {
            heading: "PNG, JPG e o peso dos seus prints",
            paragraphs: [
                "Os prints são salvos em PNG em quase todos os celulares e computadores. Em telas modernas, com muitos pixels, um único print pode passar de 2 MB. Se você só precisa mostrar uma conversa, um comprovante de pagamento ou um gráfico, passá-lo para JPG com qualidade alta o deixa com uma fração desse peso e continua perfeitamente legível.",
                "Se você vai juntar vários prints em um e-mail ou enviá-los para uma plataforma com limite de tamanho, converta todos em um único lote e baixe em ZIP. Você economiza tempo e espaço e, como tudo é feito no seu dispositivo, as informações sensíveis dos seus prints nunca saem dele.",
            ],
        },
    ],
    faqs: [
        {
            q: "A imagem perde qualidade ao passar de PNG para JPG?",
            a: "O JPG comprime com uma pequena perda, mas com qualidade de 90% ou mais é muito difícil notar a diferença em fotografias. Em imagens com texto pequeno, suba a qualidade.",
        },
        {
            q: "O que acontece com o fundo transparente?",
            a: "Ele fica branco, porque o JPG não suporta transparência. Se precisar mantê-la, use WebP ou mantenha o PNG.",
        },
        {
            q: "Quanto espaço eu economizo?",
            a: "Depende da imagem, mas em fotos e prints é comum economizar entre 70% e 95% do peso. A Dorfic mostra a economia exata de cada arquivo.",
        },
        {
            q: "Posso converter prints diretamente?",
            a: "Sim. Tire o print, entre nesta página e pressione Ctrl + V (ou Cmd + V no Mac). A imagem é adicionada sozinha e convertida.",
        },
        {
            q: "É seguro? Meus arquivos são enviados?",
            a: "Não são enviados. Tudo é processado no seu navegador e suas imagens nunca saem do seu dispositivo.",
        },
        {
            q: "Tem algum custo ou marca d'água?",
            a: "Não. É grátis, sem cadastro e sem marca d'água.",
        },
    ],
    related: ["jpg-a-png", "comprimir-imagen", "webp-a-jpg", "jpg-a-webp", "heic-a-jpg", "redimensionar-imagen"],
};

export default content;

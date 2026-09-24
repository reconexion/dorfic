import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-200kb",
    title: "Comprimir imagem para 200 KB",
    metaDescription:
        "Reduza suas imagens para 200 KB ou menos sem perder nitidez. Grátis, em lote e sem enviar suas fotos. Ideal para e-mails, escola e sites.",
    h1: "Comprimir imagem para 200 KB grátis",
    lead: "Tenha fotos leves que continuam bonitas: 200 KB ou menos, prontas para e-mail, escola ou seu site.",
    sections: [
        {
            heading: "200 KB: o ponto ideal entre qualidade e peso",
            paragraphs: [
                "Um limite de 200 KB é amplo o bastante para manter uma fotografia nítida em tela cheia e pequeno o bastante para ser enviada e carregar rápido. Por isso é um requisito frequente em plataformas escolares, concursos de fotografia, sites de vagas e sistemas em que você envia várias imagens de uma vez.",
                "Esta página já vem configurada com esse alvo. A Dorfic ajusta a compressão para ficar o mais perto possível de 200 KB sem passar, para que cada KB seja aproveitado em qualidade. Na maioria das fotos de celular, a imagem mantém boa resolução e a diferença em relação ao original é mínima.",
            ],
        },
        {
            heading: "Como comprimir suas fotos para 200 KB",
            steps: [
                "Selecione suas imagens, arraste para a área de envio ou cole.",
                "Escolha o formato de saída se precisar; o WebP oferece ainda mais qualidade por KB para uso na web.",
                "Acompanhe o progresso de cada foto e a economia obtida.",
                "Baixe uma por uma ou tudo junto em um ZIP.",
            ],
        },
        {
            heading: "Ideal para…",
            bullets: [
                "Tarefas e trabalhos escolares entregues em plataformas com limite por arquivo.",
                "E-mails com várias fotos anexadas sem passar do limite do servidor.",
                "Blogs, sites e lojas virtuais que precisam de imagens rápidas, mas bonitas.",
                "Anúncios em portais de imóveis ou venda de carros, onde você envia muitas fotos.",
                "Comprovações para seguradoras ou garantias que pedem várias imagens nítidas.",
            ],
        },
        {
            heading: "Dicas para aproveitar os 200 KB",
            paragraphs: [
                "Se você vai publicar na internet, não precisa de imagens de 4000 pixels: com 1600 a 2000 pixels de largura elas ficam perfeitas em qualquer tela. Redimensionar antes deixa mais margem para a qualidade e o resultado fica ainda mais nítido.",
                "Para fotos com muito detalhe, como paisagens ou multidões, JPG e WebP funcionam muito melhor que PNG. Se a sua imagem original está em PNG e é uma fotografia, mude a saída para JPG: você vai notar que ela preserva muito mais detalhe dentro do mesmo limite.",
            ],
        },
        {
            heading: "Rápido, grátis e privado",
            paragraphs: [
                "Você não precisa de conta nem de instalar aplicativos. Suas fotos nunca saem do seu dispositivo porque todo o processo acontece no seu navegador. Você pode comprimir até 50 imagens por lote, de até 50 MB cada, sem marca d'água.",
            ],
        },
        {
            heading: "Como a Dorfic decide a qualidade final",
            paragraphs: [
                "Quando você escolhe um tamanho alvo, a Dorfic não aplica uma porcentagem fixa a todas as fotos. Primeiro ela tenta comprimir com a biblioteca browser-image-compression e depois verifica o resultado. Se o arquivo ainda passar de 200 KB, testa diferentes níveis de qualidade até encontrar o mais alto que cabe no limite e, só se nem assim der, reduz as dimensões aos poucos.",
                "Por isso duas fotos diferentes podem terminar com qualidades diferentes: uma imagem simples, como um retrato com fundo liso, cabe em 200 KB quase sem mudanças, enquanto uma foto cheia de detalhes precisa de mais compressão. Em todos os casos o resultado final respeita o limite e aproveita ao máximo o espaço disponível.",
            ],
        },
    ],
    faqs: [
        {
            q: "Quanta qualidade uma foto perde ao ser comprimida para 200 KB?",
            a: "Muito pouca na maioria dos casos. No tamanho da tela a diferença em relação ao original costuma ser difícil de notar.",
        },
        {
            q: "Posso comprimir muitas fotos para 200 KB de uma vez?",
            a: "Sim, até 50 imagens por lote. Cada uma ficará com 200 KB ou menos e você pode baixá-las em um ZIP.",
        },
        {
            q: "É melhor JPG ou WebP com 200 KB?",
            a: "O WebP oferece mais qualidade por KB e é ideal para sites. Para enviar a instituições ou a pessoas com aparelhos antigos, o JPG é mais compatível.",
        },
        {
            q: "Por que minha imagem ficou com 190 KB e não 200?",
            a: "Porque a Dorfic nunca passa do limite: ela busca a melhor qualidade que cabe abaixo de 200 KB, então costuma ficar um pouco abaixo.",
        },
        {
            q: "Preciso criar uma conta?",
            a: "Não. É grátis, sem cadastro, e suas imagens são processadas só no seu dispositivo.",
        },
    ],
    related: ["comprimir-imagen-a-100kb", "comprimir-imagen", "redimensionar-imagen", "jpg-a-webp", "comprimir-imagen-a-50kb", "heic-a-jpg"],
};

export default content;

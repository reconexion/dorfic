import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-30kb",
    title: "Comprimir imagem para 30 KB",
    metaDescription:
        "Comprima sua foto para 30 KB ou menos grátis, com boa nitidez para inscrições, bolsas e documentos. Em segundos e sem enviar sua imagem para a internet.",
    h1: "Comprimir imagem para 30 KB grátis",
    lead: "Deixe sua foto com 30 KB ou menos e boa nitidez, pronta para inscrições, bolsas e documentos online.",
    sections: [
        {
            heading: "30 KB: o limite de muitas inscrições online",
            paragraphs: [
                "Muitos formulários de bolsas, concursos, matrículas escolares e candidaturas de emprego pedem uma foto de no máximo 30 KB. É um meio-termo: pequeno o bastante para o sistema armazenar milhares de cadastros, mas suficiente para o seu rosto aparecer com clareza.",
                "Esta página já vem configurada com esse limite. É só selecionar sua foto: a Dorfic testa diferentes níveis de compressão, escolhe a melhor qualidade que cabe em 30 KB e, se precisar, ajusta as dimensões para manter a imagem nítida.",
            ],
        },
        {
            heading: "Como deixar sua foto com 30 KB",
            steps: [
                "Tire ou escolha uma foto de frente, com boa luz e fundo liso.",
                "Recorte para deixar rosto e ombros.",
                "Selecione a imagem aqui; o alvo de 30 KB já está pronto.",
                "Baixe o resultado e envie no formulário.",
            ],
        },
        {
            heading: "Como fica uma foto de 30 KB",
            paragraphs: [
                "Com 30 KB uma foto de rosto pode ter cerca de 500 a 700 pixels de lado com boa definição. Fica boa na tela e em documentos impressos pequenos. É visivelmente melhor que 20 KB e costuma atender ao que as instituições pedem quando solicitam uma foto 3x4 em formato digital.",
            ],
        },
        {
            heading: "Dicas para sua foto ser aceita",
            bullets: [
                "Fundo branco ou claro e uniforme; evite paredes com textura.",
                "Rosto de frente, sem óculos escuros nem boné, a menos que digam o contrário.",
                "Luz uniforme, sem sombras fortes no rosto.",
                "Formato JPG se o sistema não disser outra coisa.",
                "Nomeie o arquivo como pedirem, por exemplo com sua matrícula ou CPF.",
            ],
        },
        {
            heading: "Se o portal pedir medidas exatas",
            paragraphs: [
                "Alguns sistemas pedem também medidas em pixels, como 480 × 640. Nesse caso, use primeiro a ferramenta de redimensionar com essas medidas e depois volte aqui para comprimir. Assim você cumpre os dois requisitos sem distorcer a foto.",
                "Se ao enviar aparecer “formato inválido”, verifique se não é HEIC (fotos do iPhone) ou WebP. Você pode convertê-la primeiro para JPG com nossas ferramentas.",
            ],
        },
        {
            heading: "Privacidade",
            paragraphs: [
                "Sua foto nunca sai do seu dispositivo: a compressão é feita no seu navegador. Você pode processar várias fotos de uma vez e baixá-las em um ZIP.",
            ],
        },
        {
            heading: "Erros comuns ao enviar fotos em formulários",
            paragraphs: [
                "O erro mais frequente não é o peso, e sim o formato: as fotos do iPhone são salvas em HEIC e muitos portais as recusam mesmo sendo leves. Outro problema comum é enviar um print da foto em vez da foto original, o que acrescenta bordas, barras do celular e perda de qualidade.",
                "Também vale conferir a orientação: se a foto aparecer de lado no portal, exporte de novo. A Dorfic respeita a orientação correta ao comprimir, então o arquivo que você baixa já aparece em pé em qualquer sistema. Por fim, evite filtros e efeitos de beleza: as instituições costumam pedir uma foto natural e recente.",
            ],
        },
    ],
    faqs: [
        {
            q: "Como reduzo uma foto para 30 KB pelo celular?",
            a: "Abra esta página, toque em “Selecionar imagens”, escolha sua foto e baixe quando aparecer o visto verde.",
        },
        {
            q: "A foto vai pesar exatamente 30 KB?",
            a: "Vai pesar 30 KB ou um pouco menos. Nunca passa do limite.",
        },
        {
            q: "Por que o tamanho em pixels mudou?",
            a: "Porque para caber em 30 KB com boa nitidez às vezes é preciso reduzir as dimensões. É melhor do que deixar a foto grande e cheia de manchas.",
        },
        {
            q: "Minha foto é do iPhone e o portal não aceita, o que faço?",
            a: "Provavelmente está em HEIC. Converta primeiro com a ferramenta HEIC para JPG e depois comprima aqui.",
        },
        {
            q: "É seguro?",
            a: "Sim. Sua foto é processada no seu dispositivo e nunca é enviada para a internet.",
        },
    ],
    related: ["comprimir-imagen-a-20kb", "comprimir-imagen-a-50kb", "comprimir-imagen-a-10kb", "redimensionar-imagen", "heic-a-jpg", "comprimir-imagen"],
};

export default content;

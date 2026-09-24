import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen",
    title: "Comprimir imagem",
    metaDescription:
        "Comprima imagens JPG, PNG e WebP grátis para o tamanho em KB que precisar ou por porcentagem de qualidade. Veja o peso antes e depois. Sem enviar suas fotos.",
    h1: "Comprimir imagem grátis",
    lead: "Reduza o peso das suas fotos JPG, PNG ou WebP para o tamanho exato em KB que pedem, sem instalar nada e sem enviar nada para a internet.",
    sections: [
        {
            heading: "O que o compressor de imagens faz?",
            paragraphs: [
                "Comprimir uma imagem significa diminuir seu peso (os KB ou MB que ela ocupa) mantendo uma boa aparência. As fotos de um celular atual pesam entre 2 e 6 MB, um exagero para mandar por e-mail, enviar em um formulário ou usar em um site. Com esta ferramenta você pode deixá-las com 100 KB, 50 KB ou o tamanho que precisar em poucos segundos.",
                "Há duas formas de trabalhar. Em “Tamanho alvo” você escolhe o peso máximo em KB e a Dorfic encontra automaticamente a melhor qualidade possível dentro desse limite; se for preciso, também reduz um pouco as dimensões. Em “Por qualidade” você escolhe uma porcentagem e controla o equilíbrio entre nitidez e peso.",
            ],
        },
        {
            heading: "Como comprimir uma imagem passo a passo",
            steps: [
                "Escolha o modo: tamanho alvo (recomendado para inscrições e formulários) ou por qualidade.",
                "Se usar tamanho alvo, toque em um dos botões rápidos (20, 50, 100, 200 ou 500 KB) ou digite outro valor.",
                "Selecione, arraste ou cole suas imagens. Você pode adicionar várias de uma vez.",
                "Confira o resultado: você verá o peso antes e depois e quanto economizou em porcentagem.",
                "Baixe cada imagem ou todas juntas em um ZIP.",
            ],
        },
        {
            heading: "Para que serve comprimir suas fotos?",
            bullets: [
                "Formulários com limite de peso: vagas de emprego, bolsas, matrículas e serviços do governo costumam pedir arquivos com menos de 100 ou 200 KB.",
                "E-mail: evite que suas mensagens voltem por anexos grandes demais.",
                "WhatsApp e redes sociais: envie fotos mais rápido e gaste menos dados móveis.",
                "Sites e lojas virtuais: imagens leves deixam o site rápido e ajudam no posicionamento no Google.",
                "Liberar espaço: guarde mais fotos no celular ou na nuvem sem pagar armazenamento extra.",
            ],
        },
        {
            heading: "Qual formato de saída me convém?",
            paragraphs: [
                "Por padrão a imagem mantém seu formato original. Para fotografias, o JPG é a opção mais compatível. O WebP gera arquivos ainda mais leves com a mesma qualidade e é aceito por todos os navegadores modernos, embora alguns portais antigos não o reconheçam. O PNG não perde qualidade, mas não pode ser tão comprimido: se você tem uma foto salva como PNG e precisa que ela pese muito pouco, mude a saída para JPG e verá uma diferença enorme.",
                "Se a imagem tem fundo transparente e você a converte para JPG, a transparência é preenchida com branco, porque o JPG não suporta transparência.",
            ],
        },
        {
            heading: "Limites e dicas",
            paragraphs: [
                "Quanto menor o tamanho alvo, mais detalhe se perde. Uma foto de 20 KB serve para um documento ou um avatar, mas não para imprimir. Se a imagem ficar muito borrada, tente um limite maior ou recorte-a antes para tirar o que não importa. Aceitamos arquivos de até 50 MB e até 50 imagens por lote. Todo o processo acontece no seu dispositivo, então em celulares antigos pode demorar um pouco mais.",
            ],
        },
    ],
    faqs: [
        {
            q: "Como reduzo o peso de uma imagem sem perder qualidade?",
            a: "Use o modo “Por qualidade” entre 75% e 85%: a diferença quase não aparece e o peso costuma cair mais da metade. Se também mudar a saída para WebP, o arquivo fica ainda mais leve.",
        },
        {
            q: "A imagem fica exatamente no tamanho que escolho?",
            a: "Fica nesse tamanho ou um pouco abaixo, nunca acima. A Dorfic busca a maior qualidade que cabe no limite, então normalmente fica bem perto do valor pedido.",
        },
        {
            q: "E se minha imagem já pesar menos que o alvo?",
            a: "Ela fica igual para não perder qualidade à toa. Você verá o aviso “Já estava no tamanho, ficou igual” e pode baixá-la como está.",
        },
        {
            q: "É seguro comprimir documentos pessoais aqui?",
            a: "Sim. Suas imagens nunca são enviadas para a internet: tudo é processado no seu navegador. Você pode comprimir fotos do seu RG, CNH, comprovantes ou documentos com tranquilidade.",
        },
        {
            q: "Posso comprimir PNG com fundo transparente?",
            a: "Sim. Se mantiver o formato PNG ou escolher WebP, a transparência é preservada. Só ao converter para JPG o fundo transparente fica branco.",
        },
        {
            q: "Quantas imagens posso comprimir de uma vez?",
            a: "Até 50 imagens por lote, de até 50 MB cada. No final você pode baixar todas em um ZIP.",
        },
    ],
    related: [
        "comprimir-imagen-a-100kb",
        "comprimir-imagen-a-50kb",
        "comprimir-imagen-a-20kb",
        "comprimir-imagen-a-200kb",
        "redimensionar-imagen",
        "jpg-a-webp",
    ],
};

export default content;

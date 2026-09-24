import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-20kb",
    title: "Comprimir imagem para 20 KB",
    metaDescription:
        "Reduza sua foto para 20 KB ou menos em segundos, grátis e sem enviá-la para a internet. Ideal para foto 3x4 e formulários com limite muito rígido.",
    h1: "Comprimir imagem para 20 KB grátis",
    lead: "Deixe sua foto com 20 KB ou menos para aqueles formulários com limite bem rígido. Sem cadastro e sem que sua imagem saia do seu dispositivo.",
    sections: [
        {
            heading: "Quando pedem uma imagem de 20 KB?",
            paragraphs: [
                "Alguns sistemas online colocam limites de peso muito baixos, principalmente quando pedem uma foto 3x4, uma assinatura digitalizada ou uma foto de perfil. É comum encontrá-los em inscrições de vestibulares, concursos, pedidos de bolsa, plataformas escolares e alguns portais de órgãos públicos. Uma foto de celular pesa entre 100 e 300 vezes mais que isso, então não basta “diminuir um pouquinho”.",
                "Esta página já vem configurada para deixar cada imagem com 20 KB ou menos. É só selecionar sua foto e baixar. A Dorfic busca automaticamente a melhor qualidade possível dentro do limite e, como é necessário nesse tamanho, também reduz as dimensões da imagem.",
            ],
        },
        {
            heading: "Como deixar sua foto com 20 KB passo a passo",
            steps: [
                "Se puder, recorte a foto antes para mostrar só o importante (por exemplo, rosto e ombros). Assim o detalhe é mais bem aproveitado.",
                "Selecione a imagem, arraste ou cole. O alvo de 20 KB já está escolhido.",
                "Se o portal exigir um formato específico, mude em “Formato de saída”. Para fotos, JPG é o mais seguro.",
                "Confira o peso final ao lado do nome do arquivo e baixe.",
            ],
        },
        {
            heading: "Como fica uma imagem de 20 KB",
            paragraphs: [
                "Com 20 KB há espaço suficiente para uma foto de rosto nítida de uns 300 a 500 pixels de lado, que é exatamente o que os formulários com esse limite esperam. Funciona perfeitamente na tela ou em um documento pequeno, mas não para imprimir em tamanho grande nem para mostrar documentos com letra miúda.",
                "Se sua imagem tem muito detalhe (uma paisagem, um documento inteiro ou várias pessoas), com 20 KB ela vai ficar mais suave. Nesse caso, recorte o que não for necessário ou veja se o sistema aceita um limite maior, como 50 ou 100 KB.",
            ],
        },
        {
            heading: "Dicas para sua foto ser aceita",
            bullets: [
                "Use um fundo liso e claro: fundos uniformes ocupam menos espaço e deixam mais detalhe para o seu rosto.",
                "Veja se pedem medidas exatas em pixels; se for o caso, use primeiro a ferramenta de redimensionar e depois comprima.",
                "Nomeie o arquivo como pedirem (por exemplo, com seu CPF ou número de inscrição) antes de enviar.",
                "Se o sistema disser “formato inválido”, confira se é JPG e não HEIC ou WebP.",
            ],
        },
        {
            heading: "Sua privacidade está protegida",
            paragraphs: [
                "Fotos para inscrições costumam ser pessoais. Por isso a Dorfic não as envia para nenhum servidor: a compressão acontece no seu próprio navegador. Além disso, o arquivo final não inclui metadados como a localização GPS. Você pode processar até 50 imagens de uma vez, de até 50 MB cada.",
            ],
        },
    ],
    faqs: [
        {
            q: "Dá para comprimir uma foto de celular para 20 KB?",
            a: "Sim. A Dorfic reduz a qualidade e as dimensões o necessário para que fique com 20 KB ou menos, buscando a melhor aparência possível.",
        },
        {
            q: "Por que a imagem ficou menor em pixels?",
            a: "Porque os milhões de pixels de uma foto de celular não cabem em 20 KB. Reduzir as dimensões mantém a imagem nítida em vez de cheia de manchas.",
        },
        {
            q: "A imagem vai pesar exatamente 20 KB?",
            a: "Vai pesar 20 KB ou um pouco menos, nunca mais. Assim cumpre o limite do formulário.",
        },
        {
            q: "Minha imagem ficou borrada, o que faço?",
            a: "Recorte para tirar o que não importa e tente de novo. Se o sistema permitir, use um limite maior, como 50 KB.",
        },
        {
            q: "Posso comprimir uma assinatura digitalizada para 20 KB?",
            a: "Sim. Assinaturas com fundo branco comprimem muito bem. Se o portal aceitar, PNG pode ficar mais limpo em assinaturas; se não, use JPG.",
        },
        {
            q: "Minhas fotos são enviadas para a internet?",
            a: "Não. Tudo é processado no seu dispositivo. Suas fotos nunca saem dele.",
        },
    ],
    related: ["comprimir-imagen-a-50kb", "comprimir-imagen-a-100kb", "comprimir-imagen", "redimensionar-imagen", "heic-a-jpg", "comprimir-imagen-a-200kb"],
};

export default content;

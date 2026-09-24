import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-10kb",
    title: "Comprimir imagem para 10 KB",
    metaDescription:
        "Reduza sua imagem para 10 KB ou menos grátis. Para assinaturas digitalizadas e sistemas com limites extremos. Sem cadastro e sem enviar suas fotos para a internet.",
    h1: "Comprimir imagem para 10 KB grátis",
    lead: "Para os sistemas mais rígidos: deixe sua assinatura ou foto com 10 KB ou menos, em segundos e sem enviá-la para a internet.",
    sections: [
        {
            heading: "Quem pede imagens de 10 KB?",
            paragraphs: [
                "Dez kilobytes é um dos limites mais baixos que existem. Você vai encontrá-lo principalmente em sistemas antigos ou muito restritivos: cadastros em que se envia uma assinatura digitalizada, carteirinhas digitais com foto em miniatura, bancos de dados de escolas ou órgãos públicos que armazenam milhares de registros e alguns formulários de provas ou concursos.",
                "Chegar a 10 KB partindo de uma foto de celular de 3 MB exige reduzir o arquivo em mais de 99%. Esta página já está configurada para isso: a Dorfic ajusta a compressão e as dimensões automaticamente para que o resultado cumpra o limite e fique com a melhor aparência possível.",
            ],
        },
        {
            heading: "Como deixar sua imagem com 10 KB",
            steps: [
                "Recorte a imagem para deixar só o necessário: sua assinatura, ou seu rosto e ombros.",
                "Selecione ou arraste a imagem. O alvo de 10 KB já está escolhido.",
                "Se o sistema exigir JPG, mude em “Formato de saída”.",
                "Confira o peso final e baixe sua imagem.",
            ],
        },
        {
            heading: "O que esperar de uma imagem de 10 KB",
            paragraphs: [
                "Nesse tamanho, uma foto de rosto fica com uns 200 a 300 pixels de lado: suficiente para uma carteirinha na tela ou um cadastro digital, mas não para imprimir. As assinaturas funcionam especialmente bem, porque são traços escuros sobre fundo branco e se comprimem com pouquíssima perda.",
                "Se o resultado ficar borrado demais, o mais eficaz é recortar mais. Cada área de fundo que você elimina deixa mais espaço para o detalhe importante.",
            ],
        },
        {
            heading: "Dicas para assinaturas digitalizadas",
            bullets: [
                "Assine com tinta preta ou azul-escura em uma folha branca sem linhas.",
                "Tire a foto com boa luz, de frente e sem sombras.",
                "Recorte bem rente à assinatura antes de comprimir.",
                "Se o sistema pedir medidas específicas, redimensione primeiro.",
                "Confira se o arquivo final está legível antes de enviar.",
            ],
        },
        {
            heading: "E se eu não conseguir 10 KB com boa qualidade?",
            paragraphs: [
                "Veja se o sistema aceita um limite um pouco maior: a diferença de qualidade entre 10 e 20 KB é grande. Confira também o formato permitido; alguns portais aceitam PNG para assinaturas, que pode ficar mais limpo em traços finos.",
            ],
        },
        {
            heading: "Privacidade",
            paragraphs: [
                "Assinaturas e fotos para cadastros são dados sensíveis. A Dorfic não as envia para nenhum servidor: tudo é processado no seu navegador. O arquivo final não inclui metadados como a localização.",
            ],
        },
        {
            heading: "Diferença entre 10, 20 e 30 KB",
            paragraphs: [
                "Cada degrau de tamanho muda bastante o que cabe na imagem. Com 10 KB uma assinatura fica limpa, mas uma foto de rosto fica pequena e um pouco suave. Com 20 KB já dá para ter uma foto 3x4 reconhecível e, com 30 KB, a mesma foto ganha nitidez nos olhos, no cabelo e nas bordas. Por isso recomendamos usar sempre o maior limite que o sistema permitir: não há vantagem em ficar muito abaixo.",
                "Se você não sabe qual é o limite exato, veja as instruções do portal ou a mensagem de erro que aparece ao tentar enviar o arquivo; normalmente ela indica o peso máximo permitido. Com esse dado, escolha a página da Dorfic correspondente ou digite o valor exato no compressor geral.",
            ],
        },
    ],
    faqs: [
        {
            q: "Dá para comprimir uma foto de celular para 10 KB?",
            a: "Sim. A Dorfic reduz a qualidade e as dimensões o necessário para que fique com 10 KB ou menos.",
        },
        {
            q: "Vai ficar bom?",
            a: "Para assinaturas e fotos pequenas tipo documento, sim. Não é um tamanho adequado para imprimir nem para imagens com muito detalhe.",
        },
        {
            q: "Vai ficar exatamente com 10 KB?",
            a: "Vai ficar com 10 KB ou um pouco menos, nunca acima do limite.",
        },
        {
            q: "Minha assinatura fica guardada em algum lugar?",
            a: "Não. Ela nunca sai do seu dispositivo e desaparece ao fechar a página.",
        },
        {
            q: "E se o portal pedir medidas em pixels?",
            a: "Use primeiro a ferramenta de redimensionar com as medidas pedidas e depois comprima aqui.",
        },
    ],
    related: ["comprimir-imagen-a-20kb", "comprimir-imagen-a-30kb", "comprimir-imagen-a-50kb", "redimensionar-imagen", "comprimir-imagen", "heic-a-jpg"],
};

export default content;

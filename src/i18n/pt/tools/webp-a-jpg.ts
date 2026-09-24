import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "webp-a-jpg",
    title: "Converter WebP para JPG",
    metaDescription:
        "Converta imagens WebP para JPG grátis para abri-las e enviá-las em qualquer lugar. Em lote, com qualidade ajustável e sem enviar seus arquivos.",
    h1: "Converter WebP para JPG grátis",
    lead: "Baixou uma imagem e ela foi salva como .webp? Converta para JPG em segundos para abrir, editar ou enviar onde quiser.",
    sections: [
        {
            heading: "O que é WebP e por que converter?",
            paragraphs: [
                "WebP é um formato de imagem criado para que as páginas da web carreguem rápido. Muitos sites o usam, então quando você salva uma imagem pelo navegador é comum ela vir com a extensão .webp. O problema aparece depois: alguns editores, programas de escritório, visualizadores antigos, impressoras ou formulários online não o reconhecem.",
                "Esta ferramenta converte seus arquivos WebP para JPG, o formato aceito por praticamente qualquer dispositivo ou plataforma. Tudo acontece dentro do seu navegador, por isso é imediato e privado.",
            ],
        },
        {
            heading: "Como converter WebP para JPG passo a passo",
            steps: [
                "Selecione suas imagens WebP, arraste-as para a área pontilhada ou cole-as com Ctrl + V.",
                "Escolha a qualidade do JPG. Com 92% você mantém quase todo o detalhe.",
                "Acompanhe o progresso de cada imagem; ao terminar você verá o peso final.",
                "Baixe os JPG separadamente ou todos em um ZIP.",
            ],
        },
        {
            heading: "Situações em que ajuda",
            bullets: [
                "Você salvou uma imagem da internet e o computador não abre com dois cliques.",
                "Você quer inserir a imagem no Word, PowerPoint ou em um programa de design que não suporta WebP.",
                "Um formulário da escola, do trabalho ou de um serviço público pede JPG.",
                "Você vai imprimir a imagem ou mandar revelar.",
                "Você quer compartilhá-la com alguém que usa um aparelho ou aplicativo antigo.",
            ],
        },
        {
            heading: "Qualidade e transparência",
            paragraphs: [
                "O WebP costuma ser mais eficiente que o JPG, então é normal o arquivo convertido pesar um pouco mais que o original. Se precisar que ele fique leve, baixe a qualidade para 75–85% ou passe-o depois pelo compressor de imagens para deixá-lo em um tamanho exato em KB.",
                "Algumas imagens WebP têm fundo transparente. Como o JPG não suporta transparência, essas áreas ficarão brancas. As imagens WebP animadas são convertidas usando o primeiro quadro, já que o JPG não suporta animação. Lembre-se também de respeitar os direitos autorais das imagens que você baixa da internet: convertê-las não muda quem é o dono.",
            ],
        },
        {
            heading: "Limites",
            paragraphs: [
                "Aceitamos até 50 imagens por lote e arquivos de até 50 MB. A conversão é feita pelo seu dispositivo, então não há filas nem limites diários, mas em aparelhos antigos pode demorar um pouco mais. Suas imagens nunca são enviadas para nenhum servidor.",
            ],
        },
        {
            heading: "JPG ou PNG como destino?",
            paragraphs: [
                "Para fotografias, o JPG é a melhor opção: é universal e mantém um peso razoável. Se a sua imagem WebP é um logotipo, um ícone ou um gráfico com fundo transparente, talvez seja melhor mantê-la em WebP ou convertê-la para PNG, para não perder a transparência.",
                "Uma vantagem de converter no navegador é a rapidez: você não espera o arquivo subir nem um servidor processá-lo, e pode converter dezenas de imagens em lote. No final, baixe o ZIP e todas as suas imagens estarão prontas para abrir em qualquer programa, celular ou computador.",
            ],
        },
    ],
    faqs: [
        {
            q: "Por que minhas imagens são baixadas em formato WebP?",
            a: "Porque muitos sites servem suas imagens em WebP para carregar mais rápido, e o navegador as salva do jeito que estão. Com esta ferramenta você as passa para JPG em segundos.",
        },
        {
            q: "Perco qualidade ao converter WebP para JPG?",
            a: "Muito pouca se usar qualidade alta (90% ou mais). A olho nu a imagem vai parecer igual.",
        },
        {
            q: "O que acontece com as imagens WebP transparentes?",
            a: "A parte transparente fica branca, porque o JPG não trabalha com transparência. Se precisar mantê-la, converta para PNG ou deixe o WebP.",
        },
        {
            q: "Funciona com WebP animado?",
            a: "Só o primeiro quadro é convertido, porque o JPG é um formato de imagem estática.",
        },
        {
            q: "Preciso instalar alguma coisa?",
            a: "Não. Funciona no navegador do seu celular ou computador, sem programas nem cadastro, e seus arquivos nunca saem do seu dispositivo.",
        },
    ],
    related: ["jpg-a-webp", "png-a-jpg", "comprimir-imagen", "heic-a-jpg", "jpg-a-png", "redimensionar-imagen"],
};

export default content;

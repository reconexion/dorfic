import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "heic-a-jpg",
    title: "Converter HEIC para JPG",
    metaDescription:
        "Converta fotos HEIC do iPhone para JPG grátis, sem instalar nada e sem enviá-las para a internet. Várias de uma vez, escolha a qualidade e baixe em ZIP.",
    h1: "Converter HEIC para JPG grátis",
    lead: "Passe as fotos do seu iPhone para JPG em segundos. Funciona no celular ou no computador e suas fotos nunca saem do seu dispositivo.",
    sections: [
        {
            heading: "O que este conversor de HEIC para JPG faz?",
            paragraphs: [
                "Há vários anos o iPhone salva as fotos no formato HEIC (também chamado de HEIF). É um formato muito eficiente: ocupa quase metade do espaço de um JPG com a mesma qualidade. O problema é que muitos sites, programas e computadores com Windows ainda não o abrem, e quando você tenta enviar a foto em um formulário aparece o clássico “formato inválido”.",
                "Esta ferramenta da Dorfic converte seus arquivos .heic ou .heif para .jpg, o formato de imagem mais compatível que existe. Tudo acontece direto no seu navegador: a foto é lida, decodificada e salva de novo como JPG no seu próprio aparelho, sem passar por nenhum servidor. Por isso é rápida, gratuita e privada.",
            ],
        },
        {
            heading: "Como converter HEIC para JPG passo a passo",
            steps: [
                "Toque em “Selecionar imagens” e escolha uma ou várias fotos HEIC. No computador você também pode arrastá-las para a área pontilhada ou colá-las com Ctrl + V.",
                "Se quiser, ajuste a qualidade. 90% vem por padrão porque preserva os detalhes e gera um arquivo de tamanho razoável.",
                "Espere alguns segundos: você verá o progresso de cada foto e um visto verde quando estiver pronta.",
                "Baixe cada JPG separadamente ou todas juntas com o botão “Baixar tudo (ZIP)”.",
            ],
        },
        {
            heading: "Para que serve passar suas fotos para JPG?",
            bullets: [
                "Serviços online: muitos portais do governo, bancos e seguradoras só aceitam JPG ou PNG ao enviar documentos, comprovantes ou fotos.",
                "Escola e faculdade: plataformas de tarefas, matrículas e provas online costumam recusar HEIC.",
                "Vagas de emprego: para adicionar sua foto ao currículo ou ao perfil profissional sem erros.",
                "Computadores com Windows: abra as fotos do iPhone sem instalar extensões nem codecs pagos.",
                "Imprimir ou editar: quase todas as impressoras, lojas de revelação e editores de foto trabalham com JPG.",
            ],
        },
        {
            heading: "Qualidade, tamanho e metadados",
            paragraphs: [
                "Ao converter, o JPG normalmente fica um pouco maior que o HEIC original, porque o JPG é um formato mais antigo e menos eficiente. Se você precisa que a foto fique leve (por exemplo, para um formulário com limite de KB), baixe a qualidade para 70–80% ou, depois de converter, use nosso compressor de imagens para deixá-la no tamanho exato pedido.",
                "A foto é salva com a orientação correta, então não vai aparecer de lado. Além disso, o JPG gerado não inclui os metadados do arquivo original, como a localização GPS onde você tirou a foto. É um detalhe de privacidade útil se você vai compartilhar a imagem com desconhecidos.",
            ],
        },
        {
            heading: "Limites que vale a pena conhecer",
            paragraphs: [
                "Como todo o trabalho é feito pelo seu dispositivo, a velocidade depende da potência dele. Em um celular recente cada foto leva um ou dois segundos; em aparelhos mais antigos pode demorar um pouco mais. Aceitamos arquivos de até 50 MB e lotes de até 50 fotos de uma vez. As Live Photos são convertidas como imagem estática e, se um arquivo HEIC tiver várias imagens, a principal é usada.",
                "Se o seu iPhone permitir, você também pode evitar o HEIC na origem: em Ajustes › Câmera › Formatos, escolha “Mais Compatível”. Mesmo assim, as fotos que você já tem continuarão em HEIC, e para elas existe esta ferramenta.",
            ],
        },
    ],
    faqs: [
        {
            q: "É grátis converter HEIC para JPG na Dorfic?",
            a: "Sim, é totalmente grátis e sem cadastro. Não há marca d'água nem limite diário. O site se mantém com anúncios discretos.",
        },
        {
            q: "Minhas fotos são enviadas para algum servidor?",
            a: "Não. A conversão acontece dentro do seu navegador, no seu próprio celular ou computador. Suas fotos nunca saem do seu dispositivo e ninguém mais pode vê-las.",
        },
        {
            q: "Funciona no iPhone e no Android?",
            a: "Sim. Funciona no Safari, Chrome, Edge e Firefox atualizados, tanto no celular quanto no computador. No iPhone, ao tocar em “Selecionar imagens” você pode escolher as fotos direto da galeria.",
        },
        {
            q: "Posso converter várias fotos HEIC ao mesmo tempo?",
            a: "Sim, você pode selecionar até 50 fotos de uma vez. Elas são processadas em lote e no final você baixa todas juntas em um arquivo ZIP chamado dorfic-imagens.zip.",
        },
        {
            q: "Perco qualidade ao passar de HEIC para JPG?",
            a: "Com a qualidade em 90% a diferença é praticamente impossível de notar a olho nu. Se quiser o máximo de detalhe, suba a qualidade para 100%, mas o arquivo ficará mais pesado.",
        },
        {
            q: "Por que o JPG pesa mais que o HEIC?",
            a: "Porque o HEIC comprime melhor que o JPG. É normal o JPG pesar entre 1,5 e 2 vezes mais. Se precisar de um arquivo leve, baixe a qualidade ou use a ferramenta de comprimir imagem.",
        },
        {
            q: "A localização e os dados da câmera são mantidos?",
            a: "Não. O JPG que você baixa não inclui a localização GPS nem outros metadados do original, o que protege sua privacidade ao compartilhar a foto.",
        },
    ],
    related: ["comprimir-imagen", "redimensionar-imagen", "comprimir-imagen-a-200kb", "png-a-jpg", "webp-a-jpg", "jpg-a-webp"],
};

export default content;

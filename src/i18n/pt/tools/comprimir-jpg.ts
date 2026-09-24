import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-jpg",
    title: "Comprimir JPG",
    metaDescription:
        "Comprima fotos JPG grátis e reduza o peso em até 90% sem que se note. Escolha KB ou qualidade, processe em lote e baixe em ZIP. Sem enviar suas fotos.",
    h1: "Comprimir JPG grátis",
    lead: "Reduza o peso das suas fotos JPG em segundos, sem perda visível de nitidez e sem que elas saiam do seu dispositivo.",
    sections: [
        {
            heading: "Por que seus JPG pesam tanto?",
            paragraphs: [
                "As câmeras dos celulares atuais salvam fotos de 12, 48 ou até 200 megapixels com uma compressão bem leve, pensada para preservar todos os detalhes caso você queira imprimir ou recortar. O resultado são arquivos JPG de 3 a 8 MB cada. Para ver em uma tela, mandar por e-mail ou enviar em um formulário, esse peso é desnecessário.",
                "Comprimir um JPG é salvá-lo de novo com uma compressão mais eficiente e, se precisar, com menos pixels. Bem feito, a foto fica praticamente igual e pesa entre 70% e 95% menos. A Dorfic faz isso no seu navegador: você não instala nada e suas fotos nunca são enviadas para a internet.",
            ],
        },
        {
            heading: "Como comprimir um JPG passo a passo",
            steps: [
                "Selecione suas fotos JPG, arraste para a área de envio ou cole com Ctrl + V.",
                "Escolha “Tamanho alvo” e toque em 20, 50, 100, 200 ou 500 KB; ou escolha “Por qualidade” e mova o controle.",
                "Espere o visto verde: você verá o peso antes e depois e a porcentagem economizada.",
                "Baixe cada foto ou todas juntas em um ZIP.",
            ],
        },
        {
            heading: "Tamanho alvo ou qualidade?",
            paragraphs: [
                "Use “Tamanho alvo” quando alguém impõe um limite: um portal que aceita no máximo 100 KB, um e-mail que recusa anexos acima de 10 MB no total ou uma plataforma escolar com limite por arquivo. A Dorfic encontra automaticamente a maior qualidade que cabe nesse peso.",
                "Use “Por qualidade” quando o importante é que a foto fique bonita e você só quer deixá-la mais leve. Entre 75% e 85% é o ponto ideal para a maioria das fotos: a diferença em relação ao original é muito difícil de notar e o arquivo costuma ficar com um quarto do peso.",
            ],
        },
        {
            heading: "Usos mais comuns",
            bullets: [
                "Mandar muitas fotos por e-mail sem passar do limite de anexos.",
                "Enviar fotos para portais de emprego, bolsas ou serviços públicos que limitam o peso.",
                "Deixar seu site ou loja virtual mais rápido com imagens mais leves.",
                "Liberar espaço no celular ou na nuvem sem perder suas lembranças.",
                "Compartilhar álbuns pelo WhatsApp ou Telegram gastando menos dados.",
            ],
        },
        {
            heading: "Dicas para obter a melhor qualidade",
            paragraphs: [
                "Comprima sempre a partir da foto original, e não de uma que já foi comprimida antes: cada vez que um JPG é salvo de novo ele perde um pouco de detalhe. Se precisar de medidas específicas, redimensione primeiro e comprima depois; assim o peso é aproveitado nos pixels que realmente vão aparecer.",
                "Se a sua foto tem céus ou degradês suaves, evite qualidades abaixo de 60%, porque podem aparecer faixas. Para fotos de documentos, uma qualidade de 70% costuma manter o texto perfeitamente legível.",
            ],
        },
        {
            heading: "Privacidade e limites",
            paragraphs: [
                "Você pode comprimir até 50 fotos de uma vez, de até 50 MB cada. Todo o trabalho é feito pelo seu dispositivo, então não há filas nem limites diários. O arquivo gerado não inclui metadados como a localização GPS, um detalhe útil se você vai compartilhar suas fotos publicamente.",
            ],
        },
    ],
    faqs: [
        {
            q: "Quanto posso reduzir o peso de um JPG?",
            a: "Em fotos de celular é comum reduzir entre 70% e 95% do peso. A Dorfic mostra a economia exata de cada arquivo.",
        },
        {
            q: "A compressão aparece?",
            a: "Com qualidades entre 75% e 85% a diferença é praticamente invisível no tamanho da tela. Só com limites muito baixos, como 20 KB, a foto perde detalhe.",
        },
        {
            q: "Posso comprimir várias fotos JPG de uma vez?",
            a: "Sim, até 50 por lote. No final você baixa todas juntas em dorfic-imagens.zip.",
        },
        {
            q: "Minhas fotos são enviadas para algum servidor?",
            a: "Não. A compressão acontece no seu navegador e suas fotos nunca saem do seu dispositivo.",
        },
        {
            q: "Qual a diferença entre JPG e JPEG?",
            a: "Nenhuma: são o mesmo formato. JPEG é o nome completo e JPG é a extensão curta popularizada pelo Windows.",
        },
        {
            q: "Comprimir um JPG muda as medidas dele?",
            a: "No modo por qualidade, não. No modo tamanho alvo, só se o limite for tão baixo que seja preciso reduzir as dimensões para a foto continuar nítida.",
        },
    ],
    related: ["comprimir-imagen", "comprimir-imagen-a-100kb", "comprimir-png", "redimensionar-imagen", "jpg-a-webp", "comprimir-imagen-a-200kb"],
};

export default content;

import type { ToolContent } from "../../types";

const content: ToolContent = {
    slug: "comprimir-imagen-a-100kb",
    title: "Comprimir imagem para 100 KB",
    metaDescription:
        "Comprima fotos e documentos digitalizados para 100 KB ou menos, grátis e sem enviá-los para a internet. Ideal para inscrições e formulários com limite de tamanho.",
    h1: "Comprimir imagem para 100 KB grátis",
    lead: "Deixe suas fotos e documentos digitalizados com 100 KB ou menos para qualquer serviço online. Sem cadastro e 100% privado.",
    sections: [
        {
            heading: "O limite mais comum em inscrições: 100 KB",
            paragraphs: [
                "Quando um portal pede para você enviar um documento de identidade, um comprovante de residência, uma certidão ou uma declaração em imagem, é muito comum o limite ser de 100 KB por arquivo. Muitas plataformas de matrícula, sites de vagas e sistemas de atendimento também usam esse limite. É um tamanho que permite que um documento inteiro continue legível, desde que a imagem seja bem otimizada.",
                "Esta página já está configurada para 100 KB. A Dorfic busca automaticamente a maior qualidade possível sem passar do limite e só reduz as dimensões quando é indispensável. Assim seus documentos ficam leves e continuam legíveis.",
            ],
        },
        {
            heading: "Como comprimir para 100 KB passo a passo",
            steps: [
                "Tire uma foto clara do documento ou selecione a imagem que você já tem.",
                "Envie para a área de upload (você também pode arrastar ou colar). Dá para adicionar várias de uma vez, por exemplo frente e verso do seu RG.",
                "Se o sistema exigir, mude o formato de saída para JPG.",
                "Confira o peso final e baixe cada imagem ou todas em um ZIP.",
            ],
        },
        {
            heading: "O que você pode comprimir para 100 KB?",
            bullets: [
                "Documentos de identidade (RG, CNH) frente e verso.",
                "Comprovantes de residência, contas e extratos fotografados.",
                "Certidões, declarações, certificados e históricos digitalizados.",
                "Fotos para cadastros escolares ou trabalhistas.",
                "Prints de pagamentos, Pix ou transferências.",
            ],
        },
        {
            heading: "Truques para o documento ficar legível",
            paragraphs: [
                "A qualidade final depende muito da foto original. Coloque o documento sobre uma superfície escura e lisa, com boa luz natural e sem flash, e fotografe de frente para não sair torto. Recorte as bordas que sobram: quanto menos fundo, mais detalhe fica para o texto.",
                "Se o documento tem letras muito pequenas e com 100 KB não dá para ler, veja se o portal aceita PDF ou um limite maior. Você também pode testar a saída em JPG em vez de PNG, já que o JPG costuma preservar melhor o texto em fotos de documentos quando o limite é apertado.",
            ],
        },
        {
            heading: "Segurança dos seus documentos",
            paragraphs: [
                "Sabemos que documentos pessoais são delicados. A Dorfic não os envia para a internet: a compressão roda no seu próprio navegador e os arquivos nunca saem do seu dispositivo. O resultado também não guarda a localização nem os dados da câmera. Você pode processar até 50 arquivos por lote, de até 50 MB cada.",
            ],
        },
        {
            heading: "O que 100 KB significa de verdade?",
            paragraphs: [
                "Um kilobyte (KB) equivale a 1.024 bytes, então 100 KB são cerca de 102.400 bytes. Alguns portais contam o limite com 1.000 bytes por KB; por isso a Dorfic sempre deixa o arquivo um pouco abaixo do alvo, para que seja aceito independentemente de como fazem a conta. Se o seu computador mostrar um número um pouco diferente do da página, é por essa diferença de arredondamento.",
                "Como referência, uma foto de celular sem edição pesa entre 2.000 e 5.000 KB. Levá-la para 100 KB significa reduzir o peso em mais de 95%, algo que a Dorfic consegue combinando compressão inteligente e, só quando necessário, uma redução moderada das dimensões.",
            ],
        },
    ],
    faqs: [
        {
            q: "Como reduzo uma imagem para 100 KB?",
            a: "Selecione sua imagem nesta página e espere alguns segundos. O limite de 100 KB já está configurado; é só baixar quando aparecer o visto verde.",
        },
        {
            q: "Dá para ler um documento comprimido para 100 KB?",
            a: "Na maioria dos casos sim, principalmente se a foto estiver bem iluminada e recortada. A Dorfic mantém a maior qualidade possível dentro do limite.",
        },
        {
            q: "Posso comprimir a frente e o verso do meu RG ao mesmo tempo?",
            a: "Sim. Selecione as duas imagens de uma vez; cada uma ficará com 100 KB ou menos.",
        },
        {
            q: "E se minha imagem já pesar menos de 100 KB?",
            a: "Ela fica igual para não perder qualidade. Você verá o aviso “Já estava no tamanho, ficou igual”.",
        },
        {
            q: "Funciona no celular?",
            a: "Sim, foi pensada para usar no celular. Você pode escolher as fotos direto da galeria ou tirar uma nova.",
        },
        {
            q: "A Dorfic guarda cópias dos meus documentos?",
            a: "Não. Nunca recebemos seus arquivos: tudo é processado no seu dispositivo e desaparece ao fechar a página.",
        },
    ],
    related: ["comprimir-imagen-a-200kb", "comprimir-imagen-a-50kb", "comprimir-imagen", "heic-a-jpg", "redimensionar-imagen", "png-a-jpg"],
};

export default content;

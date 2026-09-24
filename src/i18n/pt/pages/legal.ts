import type { LegalPageContent } from "../../types";

const UPDATED = "23 de setembro de 2026";

export const acerca: LegalPageContent = {
    title: "Sobre a Dorfic",
    metaDescription:
        "Conheça a Dorfic: ferramentas de imagem gratuitas que funcionam no seu navegador e protegem sua privacidade. Nossa missão, como funcionamos e como nos mantemos.",
    h1: "Sobre a Dorfic",
    intro: "A Dorfic é um conjunto de ferramentas gratuitas para trabalhar com imagens: converter formatos, comprimir e mudar o tamanho. Criamos pensando nas situações reais do dia a dia.",
    sections: [
        {
            heading: "Nossa missão",
            paragraphs: [
                "Queremos que qualquer pessoa consiga preparar suas imagens para uma inscrição, a escola, o trabalho ou as redes sociais sem complicação, sem pagar e sem colocar em risco suas informações pessoais. Algo tão simples quanto reduzir o peso de uma foto não deveria obrigar você a criar uma conta, instalar um aplicativo ou enviar seus documentos para um servidor desconhecido.",
            ],
        },
        {
            heading: "Como a Dorfic funciona",
            paragraphs: [
                "Diferente de muitos serviços online, a Dorfic não recebe suas imagens. Quando você escolhe uma foto, seu navegador a processa usando a capacidade do seu próprio dispositivo com tecnologias web padrão (Canvas e Web Workers). O resultado é gerado ali mesmo e você baixa diretamente. Por isso dizemos, com total confiança, que suas fotos nunca saem do seu dispositivo.",
                "Essa forma de trabalhar também deixa as ferramentas rápidas: não é preciso esperar um arquivo subir nem um servidor processá-lo.",
            ],
        },
        {
            heading: "Como nos mantemos",
            paragraphs: [
                "A Dorfic é gratuita e se mantém graças a anúncios exibidos no site. Procuramos que sejam discretos, que nunca cubram as ferramentas e que não interrompam o que você está fazendo. Os anúncios não têm acesso às suas imagens, porque suas imagens nunca são enviadas a lugar nenhum.",
            ],
        },
        {
            heading: "Nosso compromisso",
            bullets: [
                "Manter as ferramentas gratuitas e sem marca d'água.",
                "Não enviar nem armazenar suas imagens.",
                "Explicar com clareza o que cada ferramenta faz e quais são seus limites.",
                "Melhorar constantemente com base nos comentários de quem usa a Dorfic.",
            ],
        },
    ],
};

export const contacto: LegalPageContent = {
    title: "Contato",
    metaDescription: "Tem dúvidas, sugestões ou encontrou um erro na Dorfic? Fale com a gente no Telegram e responderemos o quanto antes.",
    h1: "Contato",
    intro: "Tem uma dúvida, uma sugestão de nova ferramenta ou encontrou algo que não funciona bem? Vamos adorar ler sua mensagem.",
    sections: [
        {
            heading: "Escreva para nós",
            paragraphs: [
                "A melhor forma de falar com a gente é pelo Telegram, em @tostilocos. Normalmente respondemos em 2 a 5 dias úteis.",
                "Se for relatar um problema, conte qual ferramenta você usava, em qual dispositivo e navegador, e qual mensagem apareceu. Por favor, não nos envie imagens com informações pessoais: não precisamos delas para ajudar você.",
            ],
        },
        {
            heading: "Assuntos em que podemos ajudar",
            bullets: [
                "Dúvidas sobre como usar alguma ferramenta.",
                "Relatos de erros ou problemas de compatibilidade.",
                "Sugestões de novas funções ou ferramentas.",
                "Perguntas sobre privacidade, publicidade ou questões legais.",
            ],
        },
    ],
};

export const privacidad: LegalPageContent = {
    title: "Política de privacidade",
    metaDescription:
        "Política de privacidade da Dorfic: suas imagens são processadas no seu dispositivo e nunca são enviadas. Saiba quais dados técnicos são coletados, como funcionam os cookies de publicidade e quais são seus direitos.",
    h1: "Política de privacidade",
    intro: "Na Dorfic, a privacidade faz parte do projeto. Esta política explica quais informações são tratadas quando você usa o site, para quais finalidades e quais opções você tem.",
    updated: UPDATED,
    sections: [
        {
            heading: "1. Responsável",
            paragraphs: [
                "A Dorfic (“Dorfic”, “nós”) é responsável pelo site e pelas ferramentas que oferece. Você pode falar com a gente sobre qualquer assunto relacionado a esta política pelo Telegram (@tostilocos), como indicado na página de Contato.",
            ],
        },
        {
            heading: "2. Suas imagens não são coletadas",
            paragraphs: [
                "As imagens que você seleciona, arrasta ou cola nas ferramentas são processadas exclusivamente no seu navegador, dentro do seu dispositivo. Elas não são enviadas aos nossos servidores nem aos de terceiros, não as armazenamos e não temos como vê-las. Quando você fecha ou recarrega a página, elas desaparecem da memória do navegador.",
                "Os arquivos gerados também não incluem os metadados do original (como a localização GPS ou o modelo da câmera), exceto quando uma imagem fica sem alterações porque já cumpria o tamanho pedido.",
            ],
        },
        {
            heading: "3. Dados técnicos e estatísticas",
            paragraphs: [
                "Para saber quantas pessoas visitam o site e quais páginas são mais úteis, usamos o Cloudflare Web Analytics, um serviço de estatísticas que não usa cookies nem rastreia pessoas entre sites. Ele coleta informações agregadas como a página visitada, o país aproximado, o tipo de dispositivo e o navegador.",
                "Como qualquer site, nosso provedor de hospedagem (Cloudflare) pode tratar dados técnicos como o endereço IP de forma temporária para entregar as páginas e proteger o site contra ataques. Também usamos o idioma do seu navegador e seu país aproximado para mostrar o site no seu idioma, e lembramos sua escolha em um pequeno cookie funcional (dorfic_lang).",
            ],
        },
        {
            heading: "4. Publicidade e cookies de terceiros",
            paragraphs: [
                "A Dorfic é financiada por anúncios. Podemos exibir anúncios do Google AdSense. O Google e seus parceiros usam cookies ou outros identificadores para mostrar anúncios com base nas suas visitas anteriores a este e a outros sites, e para medir o desempenho deles.",
                "Você pode desativar a publicidade personalizada nas Configurações de anúncios do Google (adssettings.google.com) ou visitar www.aboutads.info para desativar cookies de outros fornecedores. Para saber mais sobre como o Google usa os dados, consulte policies.google.com/technologies/partner-sites. Quando a lei exigir, pediremos seu consentimento antes de usar cookies de publicidade.",
            ],
        },
        {
            heading: "5. Armazenamento local",
            paragraphs: [
                "Para que o site funcione offline e carregue mais rápido, seu navegador pode guardar arquivos do próprio site (código, estilos e ícones) por meio de um service worker. Esses arquivos não contêm informações pessoais nem suas imagens, e você pode apagá-los nas configurações do navegador.",
            ],
        },
        {
            heading: "6. Seus direitos",
            paragraphs: [
                "Como não coletamos dados que identifiquem você diretamente, na maioria dos casos não temos informações suas para consultar, corrigir ou excluir. Mesmo assim, você pode nos escrever para exercer seus direitos de acesso, correção, eliminação ou oposição previstos na Lei Geral de Proteção de Dados (LGPD) ou na lei que se aplique a você, ou para tirar qualquer dúvida sobre esta política. Se você nos escrever pelo Telegram, usaremos seu usuário apenas para responder.",
            ],
        },
        {
            heading: "7. Menores de idade",
            paragraphs: [
                "A Dorfic pode ser usada por pessoas de qualquer idade porque não pedimos cadastro nem dados pessoais. Recomendamos que menores de idade naveguem com a supervisão de um adulto.",
            ],
        },
        {
            heading: "8. Alterações nesta política",
            paragraphs: [
                "Podemos atualizar esta política para refletir mudanças no site ou na lei. Publicaremos a versão vigente nesta página com a data de atualização.",
            ],
        },
    ],
};

export const terminos: LegalPageContent = {
    title: "Termos de uso",
    metaDescription: "Termos e condições de uso da Dorfic, as ferramentas de imagem gratuitas que funcionam no seu navegador.",
    h1: "Termos de uso",
    intro: "Ao usar a Dorfic você aceita estes termos. Eles são curtos e procuram ser claros; leia antes de usar as ferramentas.",
    updated: UPDATED,
    sections: [
        {
            heading: "1. O serviço",
            paragraphs: [
                "A Dorfic oferece ferramentas gratuitas para converter, comprimir e redimensionar imagens. As ferramentas rodam no seu navegador e o processamento acontece no seu dispositivo. O serviço é oferecido “no estado em que se encontra” e pode mudar, ser ampliado ou ser interrompido a qualquer momento sem aviso prévio.",
            ],
        },
        {
            heading: "2. Uso permitido",
            paragraphs: ["Você pode usar a Dorfic para fins pessoais e comerciais. Você se compromete a não usá-la para:"],
            bullets: [
                "Processar imagens sobre as quais não tenha direitos ou permissão de uso.",
                "Criar ou distribuir conteúdo ilegal, difamatório ou que viole direitos de terceiros.",
                "Tentar danificar, sobrecarregar ou interferir no funcionamento do site.",
                "Copiar ou reproduzir o site, seu design ou seus textos sem autorização.",
            ],
        },
        {
            heading: "3. Suas imagens",
            paragraphs: [
                "Você mantém todos os direitos sobre as imagens que processa. A Dorfic não as recebe nem reivindica nenhum direito sobre elas. Você é responsável por guardar cópias dos seus arquivos originais; recomendamos não apagar o original até conferir o resultado.",
            ],
        },
        {
            heading: "4. Sem garantias",
            paragraphs: [
                "Fazemos o possível para que as ferramentas funcionem corretamente, mas não garantimos que estejam livres de erros, que funcionem em todos os dispositivos ou navegadores, nem que o resultado seja aceito por um portal ou instituição específica. Verifique sempre os requisitos do site onde você vai usar suas imagens.",
            ],
        },
        {
            heading: "5. Limitação de responsabilidade",
            paragraphs: [
                "Na medida permitida pela lei, a Dorfic não será responsável por danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do site, incluindo a perda de dados ou arquivos.",
            ],
        },
        {
            heading: "6. Publicidade e links",
            paragraphs: [
                "O site exibe anúncios de terceiros e pode conter links para outros sites. Não controlamos nem somos responsáveis pelo conteúdo, produtos ou práticas de privacidade desses terceiros.",
            ],
        },
        {
            heading: "7. Propriedade intelectual",
            paragraphs: [
                "A marca Dorfic, seu logotipo, o design do site e seus textos pertencem à Dorfic. As bibliotecas de código aberto que usamos são regidas por suas próprias licenças.",
            ],
        },
        {
            heading: "8. Alterações e legislação aplicável",
            paragraphs: [
                "Podemos modificar estes termos a qualquer momento; a versão vigente é a publicada nesta página. Estes termos são regidos pelas leis dos Estados Unidos Mexicanos.",
            ],
        },
    ],
};

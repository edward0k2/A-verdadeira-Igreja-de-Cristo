const salvaçãoData = [
    { 
        id: 1, 
        titulo: "Gênesis", 
        descricao: "A criação do mundo, a queda e as promessas patriarcais.", 
        eventos: [
            {
                data: "Criação",
                titulo: "O Início de Tudo",
                personagens: [
                    { nome: "Deus Pai", origem: "Eternidade", historia: "Criador de todas as coisas pelo poder de Sua Palavra.", doutrina: "Deus é o princípio e o fim de tudo o que existe." },
                    { nome: "Adão", origem: "Éden", historia: "O primeiro homem, criado do pó da terra e soprado por Deus.", doutrina: "O homem foi criado à imagem e semelhança de Deus (Imago Dei)." }
                ],
                texto: "No princípio, Deus criou o céu e a terra. E Deus disse: 'Faça-se a luz!'",
                interpretacao: "A criação não é um acidente, mas um ato de amor e inteligência divina que estabelece o fundamento do plano de salvação."
            },
            {
                data: "A Queda",
                titulo: "O Pecado Original",
                personagens: [
                    { nome: "Eva", origem: "Éden", historia: "A primeira mulher, companheira de Adão, que sucumbiu à tentação da serpente.", doutrina: "A queda introduz o sofrimento e a morte, mas Deus promete uma descendência que esmagará a serpente." }
                ],
                texto: "A mulher viu que o fruto da árvore era bom para comer... e comeu.",
                interpretacao: "O pecado original rompe a harmonia inicial, mas prefigura o Protoevangelho (Gn 3,15), onde Maria é a Nova Eva."
            },
            {
                data: "O Dilúvio",
                titulo: "A Arca de Noé",
                personagens: [
                    { nome: "Noé", origem: "Mesopotâmia", historia: "Um homem justo que encontrou graça diante de Deus e construiu uma arca para salvar a criação.", doutrina: "O dilúvio é um tipo do Batismo, que lava o pecado e gera uma nova humanidade." }
                ],
                texto: "Porei o meu arco nas nuvens, para que seja o sinal da aliança entre mim e a terra.",
                interpretacao: "A aliança com Noé mostra a paciência de Deus e Sua promessa de nunca mais destruir a terra pela água."
            },
            {
                data: "Aliança Patriarcal",
                titulo: "Abraão: Pai na Fé",
                personagens: [
                    { nome: "Abraão", origem: "Ur dos Caldeus", historia: "Aquele que acreditou contra toda esperança e saiu de sua terra para seguir a Deus.", doutrina: "A fé de Abraão é o modelo para todos os cristãos (Rm 4)." },
                    { nome: "Sara", origem: "Ur", historia: "Esposa de Abraão que, na velhice, deu à luz Isaac por milagre divino.", doutrina: "Deus realiza Suas promessas no tempo impossível aos homens." }
                ],
                texto: "Olha para o céu e conta as estrelas... Assim será a tua descendência.",
                interpretacao: "A eleição de Abraão marca o início da formação do Povo de Deus, através do qual virá o Salvador."
            },
            {
                data: "O Sacrifício",
                titulo: "Isaac: O Filho da Promessa",
                personagens: [
                    { nome: "Isaac", origem: "Canaã", historia: "Filho da promessa que subiu o Moriah carregando a lenha para o sacrifício.", doutrina: "Isaac prefigura Cristo carregando a cruz para o sacrifício no Calvário." }
                ],
                texto: "Deus providenciará para si o cordeiro para o holocausto, meu filho.",
                interpretacao: "A obediência de Isaac e a intervenção de Deus mostram o valor do sacrifício e a substituição final pelo Cordeiro de Deus."
            }
        ] 
    },
    { 
        id: 2, 
        titulo: "Êxodo", 
        descricao: "A libertação do Egito e a Aliança no Sinai.", 
        eventos: [
            {
                data: "Vocação",
                titulo: "Moisés e a Sarça Ardente",
                personagens: [
                    { nome: "Moisés", origem: "Egito", historia: "Resgatado das águas, tornou-se o libertador de Israel após o encontro com o 'EU SOU'.", doutrina: "Moisés é o maior profeta do Antigo Testamento e mediador da Antiga Aliança." }
                ],
                texto: "Não te aproximes; tira as sandálias dos teus pés, porque o lugar que pisas é terra santa.",
                interpretacao: "A revelação do Nome Divino indica a presença constante e salvadora de Deus junto ao Seu povo."
            },
            {
                data: "Plagas e Páscoa",
                titulo: "A Libertação",
                personagens: [
                    { nome: "Aarão", origem: "Egito", historia: "Irmão de Moisés e seu porta-voz diante do Faraó.", doutrina: "Início do sacerdócio institucional em Israel." }
                ],
                texto: "Este dia será para vós um memorial; celebrá-lo-eis como uma festa para o Senhor.",
                interpretacao: "A Páscoa judaica é a prefiguração direta da Páscoa de Cristo, o Cordeiro que tira o pecado do mundo."
            },
            {
                data: "Sinai",
                titulo: "Os Dez Mandamentos",
                personagens: [
                    { nome: "Josué", origem: "Egito", historia: "Auxiliar de Moisés que vigiava a tenda e mais tarde guiaria o povo.", doutrina: "A Lei é um 'pedagogo' que nos conduz a Cristo." }
                ],
                texto: "Eu sou o Senhor teu Deus... Não terás outros deuses diante de mim.",
                interpretacao: "Os Mandamentos (Decálogo) são a expressão da vontade de Deus para que o homem seja livre e viva em santidade."
            }
        ] 
    },
    { id: 3, titulo: "Levítico", descricao: "Leis sobre culto, sacrifícios e santidade.", eventos: [] },
    { id: 4, titulo: "Números", descricao: "A jornada pelo deserto rumo à Terra Prometida.", eventos: [] },
    { id: 5, titulo: "Deuteronômio", descricao: "O segundo código de leis e o discurso final de Moisés.", eventos: [] },
    { id: 6, titulo: "Josué", descricao: "A conquista e partilha da Terra de Canaã.", eventos: [] },
    { id: 7, titulo: "Juízes", descricao: "O tempo dos libertadores de Israel antes da monarquia.", eventos: [] },
    { id: 8, titulo: "Rute", descricao: "Uma história de fidelidade e a ascendência de Davi.", eventos: [] },
    { id: 9, titulo: "I Samuel", descricao: "A transição para a monarquia e o reinado de Saul.", eventos: [] },
    { id: 10, titulo: "II Samuel", descricao: "O reinado de Davi e a promessa dinástica.", eventos: [] },
    { id: 11, titulo: "I Reis", descricao: "O reinado de Salomão e a divisão do reino.", eventos: [] },
    { id: 12, titulo: "II Reis", descricao: "A história dos dois reinos até o exílio.", eventos: [] },
    { id: 13, titulo: "I Crônicas", descricao: "Genealogias e o reinado de Davi sob perspectiva sacerdotal.", eventos: [] },
    { id: 14, titulo: "II Crônicas", descricao: "De Salomão ao decreto de Ciro, focando no Templo.", eventos: [] },
    { id: 15, titulo: "Esdras", descricao: "O retorno do exílio e a reconstrução do Templo.", eventos: [] },
    { id: 16, titulo: "Neemias", descricao: "A reconstrução das muralhas de Jerusalém.", eventos: [] },
    { id: 17, titulo: "Tobias", descricao: "Fidelidade familiar e a providência de Deus através de Rafael.", eventos: [] },
    { id: 18, titulo: "Judite", descricao: "A corajosa vitória de uma viúva sobre o exército assírio.", eventos: [] },
    { id: 19, titulo: "Ester", descricao: "A judia que se tornou rainha para salvar seu povo.", eventos: [] },
    { id: 20, titulo: "I Macabeus", descricao: "A resistência judaica contra a helenização forçada.", eventos: [] },
    { id: 21, titulo: "II Macabeus", descricao: "Reflexões teológicas sobre o martírio e a ressurreição.", eventos: [] },
    { id: 22, titulo: "Jó", descricao: "O mistério do sofrimento do justo e a soberania divina.", eventos: [] },
    { id: 23, titulo: "Salmos", descricao: "A grande coleção de hinos e orações de Israel.", eventos: [] },
    { id: 24, titulo: "Provérbios", descricao: "Coleção de máximas sobre sabedoria e vida reta.", eventos: [] },
    { id: 25, titulo: "Eclesiastes", descricao: "Reflexões sobre a vaidade das coisas sob o sol.", eventos: [] },
    { id: 26, titulo: "Cântico dos Cânticos", descricao: "O sublime poema sobre o amor nupcial.", eventos: [] },
    { id: 27, titulo: "Sabedoria", descricao: "Elogio da sabaedoria divina na história e na vida.", eventos: [] },
    { id: 28, titulo: "Eclesiástico", descricao: "Ensinamentos sobre virtude e deveres sociais.", eventos: [] },
    { id: 29, titulo: "Isaías", descricao: "O grande profeta da santidade de Deus e do Messias sofredor.", eventos: [] },
    { id: 30, titulo: "Jeremias", descricao: "O profeta da Nova Aliança inscrita no coração.", eventos: [] },
    { id: 31, titulo: "Lamentações", descricao: "Cantos fúnebres sobre a destruição de Jerusalém.", eventos: [] },
    { id: 32, titulo: "Baruc", descricao: "Consolo e esperança para os exilados na Babilônia.", eventos: [] },
    { id: 33, titulo: "Ezequiel", descricao: "Visões da glória de Deus e a promessa de um novo coração.", eventos: [] },
    { id: 34, titulo: "Daniel", descricao: "Fidelidade no exílio e visões sobre o Reino de Deus.", eventos: [] },
    { id: 35, titulo: "Oséias", descricao: "O amor fiel de Deus contrastado com a infidelidade do povo.", eventos: [] },
    { id: 36, titulo: "Joel", descricao: "O dia do Senhor e a promessa da efusão do Espírito.", eventos: [] },
    { id: 37, titulo: "Amós", descricao: "O profeta da justiça social e do julgamento de Deus.", eventos: [] },
    { id: 38, titulo: "Abdias", descricao: "Julgamento para Edom e salvação para Israel.", eventos: [] },
    { id: 39, titulo: "Jonas", descricao: "A misericórdia de Deus que alcança até os pagãos.", eventos: [] },
    { id: 40, titulo: "Miquéias", descricao: "Anúncio do nascimento do Messias em Belém.", eventos: [] },
    { id: 41, titulo: "Naum", descricao: "O anúncio da queda de Nínive.", eventos: [] },
    { id: 42, titulo: "Habacuc", descricao: "O diálogo de um profeta sobre a justiça de Deus.", eventos: [] },
    { id: 43, titulo: "Sofonias", descricao: "Anúncio do Dia do Senhor e do resto fiel.", eventos: [] },
    { id: 44, titulo: "Ageu", descricao: "Exortação para a reconstrução do Templo.", eventos: [] },
    { id: 45, titulo: "Zacarias", descricao: "Visões proféticas e o anúncio do Rei humilde.", eventos: [] },
    { id: 46, titulo: "Malaquias", descricao: "Chamado à pureza do culto e promessa do mensageiro.", eventos: [] }
];

const catecismoData = [
    {
        ordem: "I",
        titulo: "Didaqué (O Primeiro)",
        ano: "Séc. I",
        capa: "./capas/catecismo didaque.jpg",
        origem: "Síria ou Egito (Final do Séc. I)",
        descricao: "A Instrução dos Doze Apóstolos. O primeiro manual de catequese da Igreja.",
        historia: "Escrito provavelmente no final do primeiro século, a Didaqué traz orientações sobre os dois caminhos (vida e morte), os sacramentos e a estrutura da Igreja primitiva.",
        doutrina: "Sinal da fé apostólica transmitida diretamente pelos que conviveram com Cristo.",
        pdf: "./pdfs/didaque.pdf"
    },
    {
        ordem: "II",
        titulo: "Catecismo Romano",
        ano: "1566",
        capa: "./capas/catecismo romano.jpg",
        origem: "Roma (Pio V / Concílio de Trento)",
        descricao: "Promulgado por São Pio V após o Concílio de Trento.",
        historia: "Destinado inicialmente aos párocos para combater os erros da Reforma, sistematizou a doutrina de forma clara e universal pela primeira vez.",
        doutrina: "A exposição completa do Credo, Sacramentos, Mandamentos e Oração.",
        pdf: "./pdfs/catecismo-romano.pdf"
    },
    {
        ordem: "III",
        titulo: "Catecismo Maior de São Pio X",
        ano: "1905",
        capa: "./capas/catecismo maior.jpg",
        origem: "Vaticano (Papa São Pio X)",
        descricao: "Compêndio completo da Doutrina Cristã promulgado por São Pio X.",
        historia: "Publicado em 1905, foi um dos maiores legados do Papa São Pio X, unificando e simplificando o ensino da fé em todo o mundo católico.",
        doutrina: "Foco na síntese clara da fé em perguntas e respostas, ainda muito utilizado hoje.",
        pdf: "./pdfs/catecismo-sao-pio-x.pdf"
    },
    {
        ordem: "IV",
        titulo: "Catecismo da Igreja Católica (CIC)",
        ano: "1992",
        capa: "./capas/catecismo amarelo.jpg",
        origem: "Vaticano (Papa São João Paulo II)",
        descricao: "O Catecismo da Igreja Católica promulgado por São João Paulo II.",
        historia: "Fruto do Concílio Vaticano II, é o ponto de referência seguro para o ensino da doutrina católica em todo o mundo moderno.",
        doutrina: "Uma exposição orgânica da fé, baseada na Bíblia, na Tradição e no Magistério.",
        pdf: "./pdfs/cic.pdf"
    }
];

const saintsData = [
    {
        id: 101,
        nome: "Abraão",
        data: "~1850 a.C.",
        foto: "./santos/abraao.jpg",
        descricaoCurta: "Nosso Pai na Fé, o primeiro Patriarca.",
        historia: "Chamado por Deus para deixar sua terra e ir para uma terra prometida. [IMG] Sua fé foi provada ao extremo e ele se tornou o pai de uma multidão de nações. [IMG] A Igreja o venera como o 'Pai de todos os crentes'.",
        doutrina: "Exemplo supremo de obediência e confiança nas promessas de Deus. Nele se inicia a linhagem que levará ao Messias."
    },
    {
        id: 102,
        nome: "Moisés",
        data: "~1250 a.C.",
        foto: "./santos/moises.jpg",
        descricaoCurta: "O Libertador e Legislador de Israel.",
        historia: "Chamado por Deus na sarça ardente para libertar o povo da escravidão no Egito. [IMG] Recebeu as Tábuas da Lei no Monte Sinai e guiou o povo pelo deserto. [IMG] Apareceu glorioso na Transfiguração ao lado de Elias e Jesus.",
        doutrina: "Representa a Lei (Torá). Prefigura Cristo como o mediador da Nova Aliança."
    },
    {
        id: 103,
        nome: "Rei Davi",
        data: "~1000 a.C.",
        foto: "./santos/rei-davi.jpg",
        descricaoCurta: "O Profeta e Rei, ancestral do Messias.",
        historia: "Ungido por Samuel para ser rei de Israel. [IMG] Pastor que se tornou guerreiro e rei, autor de muitos Salmos. [IMG] Apesar de seus pecados, buscou sempre o arrependimento sincero.",
        doutrina: "De sua linhagem nasceria Jesus, o 'Filho de Davi'. Os Salmos são a base da oração litúrgica da Igreja."
    },
    {
        id: 104,
        nome: "Elias",
        data: "~850 a.C.",
        foto: "./santos/profeta-elias.jpg",
        descricaoCurta: "O Grande Profeta de Fogo.",
        historia: "Defendeu o culto ao Deus verdadeiro contra os profetas de Baal. [IMG] Foi arrebatado ao céu em um carro de fogo. [IMG] Sua presença na Transfiguração confirma sua santidade eterna.",
        doutrina: "Representa os Profetas. Sua vida é modelo de zelo pela glória de Deus e vida contemplativa."
    },
    {
        id: 105,
        nome: "São João Batista",
        data: "Início do Séc. I",
        foto: "./santos/sao-joao-batista.jpg",
        descricaoCurta: "O Precursor de Cristo e último dos Profetas.",
        historia: "O 'mais velho entre os nascidos de mulher', João preparou os caminhos do Senhor pregando o arrependimento. [IMG] Batizou Jesus no Jordão e morreu mártir por defender a verdade. [IMG] Faz a ponte entre as duas Alianças.",
        doutrina: "Modelo de humildade ('Importa que Ele cresça e eu diminua'). Santificado ainda no ventre de Santa Isabel."
    },
    {
        id: 1,
        nome: "São Pedro",
        data: "Século I",
        foto: "./santos/sao-pedro.jpg",
        descricaoCurta: "O Apóstolo Pescador, primeiro Papa da Igreja.",
        historia: "Simão, pescador da Galileia, foi chamado por Jesus que lhe deu o nome de Pedro (Rocha). [IMG] Foi líder dos apóstolos, testemunhou a transfiguração e a paixão de Cristo. [IMG] Presidiu a primeira comunidade cristã em Jerusalém e, depois, estabeleceu a sede da Igreja em Roma, onde foi martirizado (crucificado de cabeça para baixo).",
        doutrina: "Sua vida fundamenta o Primado Petrino (fundação do papado). Cristo entregou a ele as 'chaves do Reino', simbolizando a autoridade e a unidade da Igreja."
    },
    {
        id: 2,
        nome: "São Paulo",
        data: "Século I",
        foto: "./santos/sao-paulo.jpg",
        descricaoCurta: "O Apóstolo dos Gentios, maior missionário cristão.",
        historia: "Saulo de Tarso, inicialmente um fervoroso perseguidor dos cristãos, converteu-se após uma visão de Cristo no caminho de Damasco. [IMG] Realizou grandes viagens missionárias, fundou diversas igrejas e escreveu 13 epístolas que formam grande parte do Novo Testamento. [IMG] Foi decapitado em Roma.",
        doutrina: "A teologia paulina destaca a salvação pela graça através da fé em Jesus Cristo, a universalidade do Evangelho (para judeus e gentios) e a Igreja como Corpo de Cristo."
    },
    {
        id: 3,
        nome: "Santo Inácio de Antioquia",
        data: "Séc. II (~108 d.C.)",
        foto: "./santos/santo-inacio.jpg",
        descricaoCurta: "Bispo e Mártir, discípulo de São João.",
        historia: "Segundo bispo de Antioquia, foi condendo a morrer na arena no Coliseu, em Roma. [IMG] A caminho de seu martírio, escreveu sete cartas extraordinárias às comunidades cristãs primitivas, instruindo-as sobre a fé. [IMG] Suas cartas são tesouros da Igreja primitiva.",
        doutrina: "Primeiro a usar o termo 'Igreja Católica' (Universal). Suas cartas sublinham a importância da união em torno do bispo, a reverência pela Eucaristia como 'remédio de imortalidade' e a divindade de Cristo."
    },
    {
        id: 4,
        nome: "Santo Agostinho",
        data: "354 - 430 d.C.",
        foto: "./santos/santo-agostinho.jpg",
        descricaoCurta: "Doutor da Graça e Bispo de Hipona.",
        historia: "Após uma juventude turbulenta e busca por conhecimento em doutrinas equivocadas (maniqueísmo), converteu-se ao cristianismo, influenciado por Santa Mônica (sua mãe) e Santo Ambrósio. [IMG] Tornou-se um dos maiores filósofos e teólogos do primeiro milênio cristão. [IMG] Sua inteligência foi posta inteiramente a serviço de Deus.",
        doutrina: "Escreveu obras primas como 'Confissões' e 'A Cidade de Deus'. Aprofundou a teologia da graça, o combate a heresias e demonstrou a harmonia entre fé e razão."
    },
    {
        id: 5,
        nome: "São Bento de Núrsia",
        data: "480 - 547 d.C.",
        foto: "./santos/sao-bento-de-nursia.jpg",
        descricaoCurta: "Pai do Monarquismo Ocidental.",
        historia: "Fundador da Ordem Beneditina e do Mosteiro de Montecassino. [IMG] Sua 'Regra' organizou a vida monástica em torno da oração e do trabalho. [IMG] É considerado um dos padroeiros da Europa.",
        doutrina: "Lema 'Ora et Labora' (Reza e Trabalha). Ensinou a busca da perfeição através da obediência, silêncio e estabilidade."
    },
    {
        id: 6,
        nome: "São Francisco de Assis",
        data: "1182 - 1226",
        foto: "./santos/sao-francisco.jpg",
        descricaoCurta: "O Pobre de Assis, fundador dos Franciscanos.",
        historia: "Filho de comerciantes ricos, abandonou tudo para viver a radicalidade do Evangelho. [IMG] Recebeu os estigmas de Cristo no Monte Alverne. [IMG] Amava todas as criaturas como irmãos e irmãs.",
        doutrina: "Pobreza evangélica e fraternidade universal. Reformou a Igreja através da simplicidade e do amor aos pobres."
    },
    {
        id: 7,
        nome: "São Tomás de Aquino",
        data: "1225 - 1274",
        foto: "./santos/sao-tomas-de-aquino.jpg",
        descricaoCurta: "Doutor Angélico e maior teólogo escolástico.",
        historia: "Membro da Ordem dos Pregadores (Dominicanos). [IMG] Sua inteligência excepcional buscou harmonizar a fé cristã com a filosofia aristotélica. [IMG] Teve uma visão de Deus que o fez dizer que tudo o que escreveu era 'palha' diante do que viu.",
        doutrina: "Autor da 'Suma Teológica'. Defendeu que a razão pode demonstrar a existência de Deus através das 'Cinco Vias'."
    },
    {
        id: 8,
        nome: "Santa Teresa de Ávila",
        data: "1515 - 1582",
        foto: "./santos/santa-teresa-de-avila.jpg",
        descricaoCurta: "Mística e Reformadora do Carmelo.",
        historia: "Entrou no Carmelo e, após anos de busca, iniciou a reforma da Ordem (Carmelitas Descalças). [IMG] Escreveu clássicos da espiritualidade sobre a oração e a união com Deus. [IMG] Primeira mulher declarada Doutora da Igreja.",
        doutrina: "A oração como 'trato de amizade com quem sabemos que nos ama'. Autora de 'O Castelo Interior'."
    },
    {
        id: 9,
        nome: "Madre Teresa de Calcutá",
        data: "1910 - 1997",
        foto: "./santos/madre-teresa-de-calcuta.jpg",
        descricaoCurta: "Mãe dos pobres e fundadora das Missionárias da Caridade.",
        historia: "Nascida na Albânia, sentiu o 'chamado dentro do chamado' para servir aos mais pobres entre os pobres em Calcutá. [IMG] Fundou as Missionárias da Caridade para cuidar dos moribundos e esquecidos. [IMG] Nobel da Paz em 1979.",
        doutrina: "Viver o Evangelho através do serviço humilde. Enxergava o próprio Cristo em cada pobre e sofredor."
    }
];

const livrosData = [
    {
        ordem: "I",
        titulo: "Livro Genérico 1",
        ano: "2020",
        capa: "./capas/catecismo amarelo.jpg", // Exemplo genérico
        origem: "Autor Desconhecido",
        descricao: "Uma introdução inspiradora sobre desenvolvimento pessoal e fé.",
        historia: "Escrito como um manual rápido para o dia a dia moderno, mesclando doutrina e prática.",
        doutrina: "Focado em pequenas ações diárias para buscar a perfeição cristã.",
        pdf: ""
    },
    {
        ordem: "II",
        titulo: "O Caminho da Paz",
        ano: "2018",
        capa: "./capas/catecismo maior.jpg",
        origem: "São Tomás Cap.",
        descricao: "Reflexões profundas sobre como encontrar paz interior.",
        historia: "Uma coletânea de cartas e sermões que guiaram muitos no último século.",
        doutrina: "Destaca a importância da oração constante e do recolhimento.",
        pdf: ""
    },
    {
        ordem: "III",
        titulo: "História e Tradição",
        ano: "2015",
        capa: "./capas/catecismo romano.jpg",
        origem: "Editora Ecclesia",
        descricao: "Um resumo da história dos costumes e tradições.",
        historia: "Compilado para resgatar a beleza da liturgia nos séculos passados.",
        doutrina: "A liturgia como a fonte e o ápice da vida cristã.",
        pdf: ""
    },
    {
        ordem: "IV",
        titulo: "Virtudes Diárias",
        ano: "2023",
        capa: "./capas/catecismo didaque.jpg",
        origem: "Instituto Theotokos",
        descricao: "Guia prático para viver as virtudes cardeais.",
        historia: "Uma resposta moderna aos desafios éticos contemporâneos.",
        doutrina: "Explicação prática de Prudência, Justiça, Fortaleza e Temperança.",
        pdf: ""
    }
];

let currentChapterIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    renderSummary();
    renderCatechisms();
    renderLivros();
    renderSaints();
    setupEventListeners();
    setupBackToTop();
    initProgress();
}

// Lógica de Progresso e Estatísticas
let userProgress = {
    readBooks: [],
    startTime: null,
    totalTime: 0,
    lastBook: null
};

function initProgress() {
    const saved = localStorage.getItem('historiaSalvacaoProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
    } else {
        userProgress.startTime = new Date().getTime();
        saveProgress();
    }
    updateProgressUI();
    
    // Timer simples para simular tempo gasto (a cada minuto navegando)
    setInterval(() => {
        userProgress.totalTime += 1;
        saveProgress();
    }, 60000);
}

function saveProgress() {
    localStorage.setItem('historiaSalvacaoProgress', JSON.stringify(userProgress));
}

function updateProgressUI() {
    const totalBooks = salvaçãoData.length + novoTestamentoData.length;
    const readCount = userProgress.readBooks.length;
    const percent = totalBooks > 0 ? Math.round((readCount / totalBooks) * 100) : 0;
    
    const fill = document.getElementById('progressFill');
    const text = document.getElementById('progressText');
    
    if (fill) fill.style.width = `${percent}%`;
    if (text) text.innerText = `${percent}% Lido`;
    
    // Atualiza modal se estiver aberto
    const statPercent = document.getElementById('statPercent');
    if (statPercent) {
        statPercent.innerText = `${percent}%`;
        document.getElementById('statFill').style.width = `${percent}%`;
        document.getElementById('statReadCount').innerText = readCount;
        
        const days = Math.floor((new Date().getTime() - userProgress.startTime) / (1000 * 60 * 60 * 24)) + 1;
        document.getElementById('statDays').innerText = days;
        
        const hours = (userProgress.totalTime / 60).toFixed(1);
        document.getElementById('statHours').innerText = `${hours}h`;
        
        document.getElementById('statLastBook').innerText = userProgress.lastBook ? userProgress.lastBook.titulo : '---';
    }
}

function openStats() {
    updateProgressUI();
    document.getElementById('statsModal').style.display = 'block';
}

function closeStats() {
    document.getElementById('statsModal').style.display = 'none';
}

function markAsRead(bookId, tipo) {
    const key = `${tipo}_${bookId}`;
    if (!userProgress.readBooks.includes(key)) {
        userProgress.readBooks.push(key);
        saveProgress();
        updateProgressUI();
    }
}

function continueReading() {
    if (userProgress.lastBook) {
        const source = userProgress.lastBook.tipo === 'AT' ? salvaçãoData : novoTestamentoData;
        const index = source.findIndex(b => b.id === userProgress.lastBook.id);
        if (index !== -1) {
            closeStats();
            openChapter(index, userProgress.lastBook.tipo);
        }
    } else {
        closeStats();
        // Leva para o início se não tiver último livro
        document.getElementById('library').scrollIntoView({ behavior: 'smooth' });
    }
}

function setupBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

function renderSaints() {
    const timeline = document.getElementById('saintsTimeline');
    if (!timeline) return;
    timeline.innerHTML = '';

    saintsData.forEach(saint => {
        const node = document.createElement('div');
        node.className = 'road-node';

        node.innerHTML = `
            <div class="personagens-wrapper">
                <img src="${saint.foto}" alt="Foto ${saint.nome}" class="saint-photo-timeline" onclick="event.stopPropagation(); showSaintDetails(${saint.id})">
            </div>
            <div class="node-box" onclick="showSaintDetails(${saint.id})">
                <span>${saint.data}</span>
                <h4>${saint.nome}</h4>
                <p style="font-size: 0.85rem; color: #666; margin-top: 5px; line-height: 1.4;">${saint.descricaoCurta}</p>
                <div class="btn-view-node">História Completa →</div>
            </div>
        `;

        timeline.appendChild(node);
    });
}

let currentSaintPage = 0;
let currentSaintPages = [];

async function showSaintDetails(id) {
    const saint = saintsData.find(s => s.id === id);
    if (!saint) return;

    currentSaintPage = 0;
    currentSaintPages = [];
    
    // Mostra o modal básico primeiro para poder medir elementos se necessário
    document.getElementById('infoModal').style.display = "block";
    
    // Gerar as páginas dinamicamente
    currentSaintPages = await createDynamicPages(saint);
    
    renderSaintBookContent();
}

async function createDynamicPages(saint) {
    const pages = [];
    const maxHeight = 500; // Reduzi significativamente para garantir margem de segurança
    
    // 1. Capa / Intro (Sempre fixa)
    pages.push({
        type: 'cover',
        nome: saint.nome,
        foto: saint.foto,
        data: saint.data,
        content: saint.historia.split('[IMG]')[0],
        doutrina: saint.doutrina
    });

    // 2. Preparar blocos de conteúdo para as páginas seguintes
    const remainingHistory = saint.historia.split('[IMG]').slice(1);
    let allBlocks = [];
    
    remainingHistory.forEach(part => {
        // Adiciona a imagem placeholder primeiro se existia um [IMG]
        allBlocks.push({ type: 'image', text: 'Espaço para Cena ou Arte Sacra' });
        
        // Divide o texto em parágrafos
        const paragraphs = part.trim().split('\n').filter(p => p.trim() !== '');
        paragraphs.forEach(p => {
            allBlocks.push({ type: 'text', content: p });
        });
    });

    // Adiciona o bloco de Doutrina no final
    allBlocks.push({ type: 'doutrina', content: saint.doutrina });

    // 3. Distribuir blocos em páginas
    let currentPageBlocks = [];
    let currentHeight = 0;

    for (const block of allBlocks) {
        let blockHeight = 0;
        if (block.type === 'text') {
            // Estimativa mais conservadora: ~85 caracteres por linha, altura de 32px por linha
            const lines = Math.ceil(block.content.length / 85);
            blockHeight = lines * 32 + 25; // +25 de margem entre parágrafos
        } else if (block.type === 'image') {
            blockHeight = 240; // Altura do placeholder aumentada para segurança
        } else if (block.type === 'doutrina') {
            blockHeight = 180;
        }

        if (currentHeight + blockHeight > maxHeight && currentPageBlocks.length > 0) {
            // Fecha a página atual e abre uma nova
            pages.push({ type: 'content', blocks: currentPageBlocks, pageIndex: pages.length + 1 });
            currentPageBlocks = [];
            currentHeight = 0;
        }

        currentPageBlocks.push(block);
        currentHeight += blockHeight;
    }

    // Adiciona a última página se houver blocos
    if (currentPageBlocks.length > 0) {
        pages.push({ type: 'content', blocks: currentPageBlocks, pageIndex: pages.length + 1 });
    }

    return pages;
}

function renderSaintBookContent() {
    const body = document.getElementById('modalBody');
    const pageDataLeft = currentSaintPages[currentSaintPage * 2];
    const pageDataRight = currentSaintPages[currentSaintPage * 2 + 1];

    body.innerHTML = `
        <div class="book-reader">
            <div class="book-container-inner" id="bookContainer">
                <div class="book-spine"></div>
                
                <!-- Página Esquerda -->
                <div class="book-page page-left ${pageDataLeft ? '' : 'page-empty'}">
                    ${renderPageContent(pageDataLeft)}
                    ${pageDataLeft ? `<div class="page-number">${currentSaintPage * 2 + 1}</div>` : ''}
                </div>

                <!-- Página Direita -->
                <div class="book-page page-right ${pageDataRight ? '' : 'page-empty'}">
                    ${renderPageContent(pageDataRight)}
                    ${pageDataRight ? `<div class="page-number">${currentSaintPage * 2 + 2}</div>` : ''}
                </div>
            </div>
        </div>
        
        <div class="book-nav">
            <button onclick="prevSaintPage()" class="btn-book-nav" ${currentSaintPage === 0 ? 'disabled style="opacity:0.5; cursor:default;"' : ''}>← Página Anterior</button>
            <span style="font-family: var(--font-heading); color: var(--text-muted);">Páginas ${currentSaintPage * 2 + 1}-${currentSaintPage * 2 + 2}</span>
            <button onclick="nextSaintPage()" class="btn-book-nav" ${currentSaintPage * 2 + 2 >= currentSaintPages.length ? 'disabled style="opacity:0.5; cursor:default;"' : ''}>Próxima Página →</button>
        </div>
    `;
}

function renderPageContent(page) {
    if (!page) return '<div class="book-content" style="text-align:center; margin-top:50%; opacity:0.1; font-style:italic;">Finis</div>';

    if (page.type === 'cover') {
        return `
            <div style="text-align: center; margin-bottom: 25px;">
                <img src="${page.foto}" alt="Foto ${page.nome}" style="width: 180px; height: 180px; border-radius: 12px; object-fit: cover; object-position: top; border: 4px solid var(--primary); box-shadow: 0 10px 25px rgba(0,0,0,0.15);">
            </div>
            <h3 style="text-align:center; font-size: 2rem; margin-bottom: 5px; color: var(--primary);">${page.nome}</h3>
            <p style="text-align:center; font-weight: bold; margin-bottom: 1.2rem; font-family: 'Outfit', sans-serif; color: #666; font-size: 0.9rem;">${page.data}</p>
            <div class="book-content">
                <p>${page.content}</p>
            </div>
            <div class="book-image-placeholder" style="height: 160px; margin-top: auto;">Retrato de Época</div>
        `;
    }

    let html = '<div class="book-content">';
    page.blocks.forEach(block => {
        if (block.type === 'text') {
            html += `<p>${block.content}</p>`;
        } else if (block.type === 'image') {
            html += `<div class="book-image-placeholder">${block.text}</div>`;
        } else if (block.type === 'doutrina') {
            html += `
                <div class="interpretation" style="margin-top: auto; border-top: 1px dashed var(--border-light); padding-top: 1rem; background: rgba(212, 175, 55, 0.05);">
                    <strong>Legado e Doutrina:</strong><br>${block.content}
                </div>
            `;
        }
    });
    html += '</div>';
    return html;
}

function nextSaintPage() {
    if ((currentSaintPage + 1) * 2 < currentSaintPages.length) {
        const container = document.getElementById('bookContainer');
        container.style.transition = "transform 0.4s ease-in-out";
        container.style.transform = "rotateY(-5deg)";
        
        setTimeout(() => {
            currentSaintPage++;
            renderSaintBookContent();
            container.style.transform = "rotateY(0deg)";
        }, 200);
    }
}

function prevSaintPage() {
    if (currentSaintPage > 0) {
        const container = document.getElementById('bookContainer');
        container.style.transition = "transform 0.4s ease-in-out";
        container.style.transform = "rotateY(5deg)";
        
        setTimeout(() => {
            currentSaintPage--;
            renderSaintBookContent();
            container.style.transform = "rotateY(0deg)";
        }, 200);
    }
}

function renderCatechisms() {
    const grid = document.getElementById('catechismGrid');
    if (!grid) return;
    grid.innerHTML = '';

    catecismoData.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'catechism-card';
        card.innerHTML = `
            <div class="cat-content">
                <div class="cat-top-meta">
                    <div class="cat-ordem">${cat.ordem}</div>
                    <div class="cat-year">${cat.ano}</div>
                </div>
                <h3>${cat.titulo}</h3>
                <p>${cat.descricao}</p>
                <div class="btn-view-node">Explorar Detalhes →</div>
            </div>
            <div class="cat-cover">
                <img src="${cat.capa}" alt="Capa ${cat.titulo}">
                <div class="cat-origin">Origem: ${cat.origem}</div>
            </div>
        `;
        card.onclick = () => showCatechismDetails(cat);
        grid.appendChild(card);
    });
}

function showCatechismDetails(cat) {
    const modal = document.getElementById('infoModal');
    const body = document.getElementById('modalBody');

    body.innerHTML = `
        <span style="color:#d4af37; font-weight:bold;">Catecismo Histórico</span>
        <h3>${cat.titulo} (${cat.ano})</h3>
        <p style="margin-top:1.5rem;"><strong>História e Contexto:</strong> ${cat.historia}</p>
        <div class="interpretation">
            <strong>Doutrina e Importância:</strong><br>
            ${cat.doutrina}
        </div>
        <div class="pdf-actions">
            <a href="${cat.pdf}" download class="btn-action btn-download">↓ Baixar PDF</a>
            <button onclick="readPdf('${cat.pdf}')" class="btn-action btn-read">📖 Ler PDF</button>
        </div>
    `;

    modal.style.display = "block";
}

function renderLivros() {
    const grid = document.getElementById('booksGrid');
    if (!grid) return;
    grid.innerHTML = '';

    livrosData.forEach(livro => {
        const card = document.createElement('div');
        card.className = 'catechism-card';
        card.innerHTML = `
            <div class="cat-content">
                <div class="cat-top-meta">
                    <div class="cat-ordem">${livro.ordem}</div>
                    <div class="cat-year">${livro.ano}</div>
                </div>
                <h3>${livro.titulo}</h3>
                <p>${livro.descricao}</p>
                <div class="btn-view-node">Explorar Detalhes →</div>
            </div>
        <div class="cat-cover">
            <img src="${livro.capa}" alt="Capa ${livro.titulo}">
                <div class="cat-origin">Origem: ${livro.origem}</div>
        </div>
    `;
        card.onclick = () => showLivroDetails(livro);
        grid.appendChild(card);
    });
}

function showLivroDetails(livro) {
    const modal = document.getElementById('infoModal');
    const body = document.getElementById('modalBody');

    let pdfActions = '';
    if (livro.pdf) {
        pdfActions = `
        <div class="pdf-actions">
            <a href="${livro.pdf}" download class="btn-action btn-download">↓ Baixar PDF</a>
            <button onclick="readPdf('${livro.pdf}')" class="btn-action btn-read">📖 Ler PDF</button>
        </div>`;
    }

    body.innerHTML = `
        <span style="color:#d4af37; font-weight:bold;">Livro</span>
        <h3>${livro.titulo} (${livro.ano})</h3>
        <p style="margin-top:1.5rem;"><strong>História e Contexto:</strong> ${livro.historia}</p>
        <div class="interpretation">
            <strong>Doutrina e Importância:</strong><br>
            ${livro.doutrina}
        </div>
        ${pdfActions}
    `;

    modal.style.display = "block";
}

function readPdf(pdfPath) {
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h3 style="margin: 0;">Leitor de PDF</h3>
            <button onclick="document.querySelector('.close-modal').click()" class="btn-action" style="padding: 0.4rem 1rem;">Fechar Leitor</button>
        </div>
        <iframe src="${pdfPath}" width="100%" height="650px" style="border: 1px solid #c9bfae; border-radius: 8px; background: #fff;"></iframe>
    `;
}

const novoTestamentoData = [
    { id: 1, titulo: "São Mateus", descricao: "O Evangelho do Reino e o cumprimento das profecias.", eventos: [] },
    { id: 2, titulo: "São Marcos", descricao: "O Evangelho do Servo de Deus e a ação imediata.", eventos: [] },
    { id: 3, titulo: "São Lucas", descricao: "O Evangelho da Misericórdia e do Espírito Santo.", eventos: [] },
    { id: 4, titulo: "São João", descricao: "O Evangelho do Verbo Encarnado e o mistério divino.", eventos: [] },
    { id: 5, titulo: "Atos dos Apóstolos", descricao: "O nascimento e a expansão da Igreja primitiva.", eventos: [] },
    { id: 6, titulo: "Romanos", descricao: "A teologia da justificação pela fé e o plano de Deus.", eventos: [] },
    { id: 7, titulo: "I Coríntios", descricao: "Instruções sobre a unidade, carismas e a caridade.", eventos: [] },
    { id: 8, titulo: "II Coríntios", descricao: "A defesa do ministério apostólico e o consolo de Deus.", eventos: [] },
    { id: 9, titulo: "Gálatas", descricao: "A liberdade cristã frente à lei e a vida no Espírito.", eventos: [] },
    { id: 10, titulo: "Efésios", descricao: "O mistério da Igreja como Corpo de Cristo.", eventos: [] },
    { id: 11, titulo: "Filipenses", descricao: "A alegria em Cristo mesmo em meio à provação.", eventos: [] },
    { id: 12, titulo: "Colossenses", descricao: "A supremacia absoluta e suficiência de Cristo.", eventos: [] },
    { id: 13, titulo: "I Tessalonicenses", descricao: "A esperança na vinda do Senhor e a santificação.", eventos: [] },
    { id: 14, titulo: "II Tessalonicenses", descricao: "Firmeza na fé diante das tribulações e sinais do fim.", eventos: [] },
    { id: 15, titulo: "I Timóteo", descricao: "Organização da Igreja e o bom combate da fé.", eventos: [] },
    { id: 16, titulo: "II Timóteo", descricao: "O testamento espiritual de Paulo e a fidelidade ao Evangelho.", eventos: [] },
    { id: 17, titulo: "Tito", descricao: "Orientações sobre o governo da Igreja e a sã doutrina.", eventos: [] },
    { id: 18, titulo: "Filêmon", descricao: "Uma lição de fraternidade e perdão em Cristo.", eventos: [] },
    { id: 19, titulo: "Hebreus", descricao: "O sacerdócio eterno de Cristo e a superioridade da Nova Aliança.", eventos: [] },
    { id: 20, titulo: "São Tiago", descricao: "A fé manifestada através das obras e da paciência.", eventos: [] },
    { id: 21, titulo: "I São Pedro", descricao: "Consolo e esperança para os cristãos peregrinos.", eventos: [] },
    { id: 22, titulo: "II São Pedro", descricao: "Alerta contra falsos mestres e a vinda gloriosa de Cristo.", eventos: [] },
    { id: 23, titulo: "I São João", descricao: "A certeza da comunhão com Deus através do amor.", eventos: [] },
    { id: 24, titulo: "II São João", descricao: "Permanência na verdade e alerta contra o erro.", eventos: [] },
    { id: 25, titulo: "III São João", descricao: "O dever da hospitalidade e a fidelidade à verdade.", eventos: [] },
    { id: 26, titulo: "São Judas", descricao: "Exortação a lutar pela fé recebida uma vez por todas.", eventos: [] },
    { id: 27, titulo: "Apocalipse", descricao: "A vitória final de Cristo e a Nova Jerusalém.", eventos: [] }
];

function renderSummary() {
    // Renderiza Antigo Testamento
    const gridAT = document.getElementById('chaptersGrid');
    if (gridAT) {
        gridAT.innerHTML = '';
        salvaçãoData.forEach((cap, index) => {
            const card = document.createElement('div');
            card.className = 'chapter-card';
            card.innerHTML = `
                <span>Livro ${cap.id}</span>
                <h3>${cap.titulo}</h3>
                <p style="font-size: 0.85rem; color: var(--text-muted);">${cap.descricao}</p>
            `;
            card.onclick = () => openChapter(index, 'AT');
            gridAT.appendChild(card);
        });
    }

    // Renderiza Novo Testamento
    const gridNT = document.getElementById('novoTestamentoGrid');
    if (gridNT) {
        gridNT.innerHTML = '';
        novoTestamentoData.forEach((cap, index) => {
            const card = document.createElement('div');
            card.className = 'chapter-card';
            card.innerHTML = `
                <span>Livro ${cap.id}</span>
                <h3>${cap.titulo}</h3>
                <p style="font-size: 0.85rem; color: var(--text-muted);">${cap.descricao}</p>
            `;
            card.onclick = () => openChapter(index, 'NT');
            gridNT.appendChild(card);
        });
    }
}

function openChapter(index, tipo = 'AT') {
    currentChapterIndex = index;
    currentChapterSource = tipo; // Variável global para saber de onde vem o dado
    
    // Salva último livro lido
    const dataSource = tipo === 'AT' ? salvaçãoData : novoTestamentoData;
    userProgress.lastBook = {
        id: dataSource[index].id,
        titulo: dataSource[index].titulo,
        tipo: tipo
    };
    saveProgress();

    const summaryView = document.getElementById('summaryView');
    const chapterView = document.getElementById('chapterView');

    summaryView.classList.remove('active');
    chapterView.classList.add('active');

    renderChapterContent();
}

let currentChapterSource = 'AT';

function renderChapterContent() {
    const dataSource = currentChapterSource === 'AT' ? salvaçãoData : novoTestamentoData;
    const cap = dataSource[currentChapterIndex];
    document.getElementById('chapterTitle').innerText = cap.titulo;

    // Adiciona botão Marcar como Lido se não estiver lido
    const header = document.getElementById('chapterView');
    let readBtn = document.getElementById('markReadBtn');
    if (header && !readBtn) {
        readBtn = document.createElement('button');
        readBtn.id = 'markReadBtn';
        readBtn.className = 'mark-read-btn';
        header.appendChild(readBtn);
    }
    
    const key = `${currentChapterSource}_${cap.id}`;
    if (userProgress.readBooks.includes(key)) {
        readBtn.innerText = '✓ Lido';
        readBtn.classList.add('is-read');
        readBtn.onclick = null;
    } else {
        readBtn.innerText = 'Marcar como Lido';
        readBtn.classList.remove('is-read');
        readBtn.onclick = () => {
            markAsRead(cap.id, currentChapterSource);
            renderChapterContent();
        };
    }

    const road = document.getElementById('roadContainer');
    road.innerHTML = '';

    cap.eventos.forEach((ev, i) => {
        const node = document.createElement('div');
        node.className = 'road-node';

        let personagensHTML = '';
        const posicoes = ['top', 'bottom', 'left', 'right'];

        ev.personagens.forEach((p, pi) => {
            const escapeName = (p.nome || '').replace(/'/g, "\\'");
            const escapeOrigem = (p.origem || '').replace(/'/g, "\\'");
            const escapeHistoria = (p.historia || '').replace(/'/g, "\\'");
            const escapeDoutrina = (p.doutrina || '').replace(/'/g, "\\'");
            
            personagensHTML += `
                <div class="personagem-mini" onclick="event.stopPropagation(); showPersonagem('${escapeName}', '${escapeOrigem}', '${escapeHistoria}', '${escapeDoutrina}')">
                    ${p.nome}
                </div>
            `;
        });

        node.innerHTML = `
            <div class="personagens-wrapper">
                ${personagensHTML}
            </div>
            <div class="node-box" onclick="showDetails('${(ev.titulo || '').replace(/'/g, "\\'")}')">
                <span>${ev.data}</span>
                <h4>${ev.titulo}</h4>
                <div class="btn-view-node">Explorar Marco →</div>
            </div>
        `;

        road.appendChild(node);
    });

    const totalInSource = dataSource.length;
    document.getElementById('prevChapterNav').style.display = currentChapterIndex > 0 ? 'inline-block' : 'none';
    document.getElementById('nextChapter').style.display = currentChapterIndex < totalInSource - 1 ? 'inline-block' : 'none';
}

function showDetails(titulo) {
    const dataSource = currentChapterSource === 'AT' ? salvaçãoData : novoTestamentoData;
    const ev = dataSource[currentChapterIndex].eventos.find(e => e.titulo === titulo);
    const modal = document.getElementById('infoModal');
    const body = document.getElementById('modalBody');

    body.innerHTML = `
        <span style="color:#d4af37; font-weight:bold;">${ev.data}</span>
        <h3>${ev.titulo}</h3>
        <p style="margin-top:1.5rem; font-size:1.1rem;">${ev.texto}</p>
        <div class="interpretation">
            <strong>Interpretação da Igreja Católica:</strong><br>
            ${ev.interpretacao}
        </div>
    `;

    modal.style.display = "block";
}

function showPersonagem(nome, origem, historia, doutrina) {
    const modal = document.getElementById('infoModal');
    const body = document.getElementById('modalBody');

    body.innerHTML = `
        <span style="color:#d4af37; font-weight:bold;">Personagem Bíblico</span>
        <h3>${nome}</h3>
        <div style="margin: 1rem 0; padding: 0.8rem; background: #eee; border-radius: 4px; font-size: 0.9rem;">
            <strong>Origem:</strong> ${origem}
        </div>
        <p style="margin-top:1rem;"><strong>História:</strong> ${historia}</p>
        <div class="interpretation">
            <strong>Doutrina e Significado:</strong><br>
            ${doutrina}
        </div>
    `;

    modal.style.display = "block";
}

function setupEventListeners() {
    document.getElementById('logoHome').onclick = () => {
        document.getElementById('chapterView').classList.remove('active');
        document.getElementById('catechismView').classList.remove('active');
        document.getElementById('booksView').classList.remove('active');
        document.getElementById('saintsView').classList.remove('active');
        document.getElementById('summaryView').classList.add('active');
    };

    document.getElementById('btnCatecismo').onclick = (e) => {
        e.preventDefault();
        document.getElementById('summaryView').classList.remove('active');
        document.getElementById('chapterView').classList.remove('active');
        document.getElementById('booksView').classList.remove('active');
        document.getElementById('saintsView').classList.remove('active');
        document.getElementById('catechismView').classList.add('active');
        renderCatechisms();
    };

    document.getElementById('btnLivros').onclick = (e) => {
        e.preventDefault();
        document.getElementById('summaryView').classList.remove('active');
        document.getElementById('chapterView').classList.remove('active');
        document.getElementById('saintsView').classList.remove('active');
        document.getElementById('catechismView').classList.remove('active');
        document.getElementById('booksView').classList.add('active');
        renderLivros();
    };

    document.getElementById('btnSantos').onclick = (e) => {
        e.preventDefault();
        document.getElementById('summaryView').classList.remove('active');
        document.getElementById('chapterView').classList.remove('active');
        document.getElementById('catechismView').classList.remove('active');
        document.getElementById('booksView').classList.remove('active');
        document.getElementById('saintsView').classList.add('active');
    };

    document.getElementById('btnTerco').onclick = (e) => {
        e.preventDefault();
        document.getElementById('tercoView').classList.add('active');
        document.getElementById('summaryView').classList.remove('active');
        document.getElementById('chapterView').classList.remove('active');
        document.getElementById('catechismView').classList.remove('active');
        document.getElementById('booksView').classList.remove('active');
        document.getElementById('saintsView').classList.remove('active');
    };

    document.getElementById('logoHome').onclick = (e) => {
        document.getElementById('summaryView').classList.add('active');
        document.getElementById('tercoView').classList.remove('active');
        document.getElementById('chapterView').classList.remove('active');
        document.getElementById('catechismView').classList.remove('active');
        document.getElementById('booksView').classList.remove('active');
        document.getElementById('saintsView').classList.remove('active');
    };

    document.getElementById('backToSummary').onclick = () => {
        document.getElementById('summaryView').classList.add('active');
        document.getElementById('chapterView').classList.remove('active');
    };

    const goToPrev = () => {
        if (currentChapterIndex > 0) openChapter(currentChapterIndex - 1);
    };

    document.getElementById('prevChapterNav').onclick = goToPrev;

    document.getElementById('nextChapter').onclick = () => {
        if (currentChapterIndex < salvaçãoData.length - 1) openChapter(currentChapterIndex + 1);
    };

    document.querySelector('.close-modal').onclick = () => {
        document.getElementById('infoModal').style.display = "none";
    };

    window.onclick = (event) => {
        const modal = document.getElementById('infoModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link (mobile)
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }
}

// Funções de Navegação de Trilha (Scroll Horizontal)
function scrollRoad(wrapperId, direction) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;
    
    // Rola 400px por clique (aproximadamente a largura de um nó + margem)
    const scrollAmount = 400 * direction;
    wrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function scrollExtreme(wrapperId, position) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;
    
    if (position === 'start') {
        wrapper.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        wrapper.scrollTo({
            left: wrapper.scrollWidth,
            behavior: 'smooth'
        });
    }
}

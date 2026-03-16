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
        historia: "Saulo de Tarso, inicialmente um fervoroso perseguidor dos cristãos, converteu-se após uma vision de Cristo no caminho de Damasco. [IMG] Realizou grandes viagens missionárias, fundou diversas igrejas e escreveu 13 epístolas que formam grande parte do Novo Testamento. [IMG] Foi decapitado em Roma.",
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

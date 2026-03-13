const salvaçãoData = [
    {
        id: 1,
        titulo: "Capítulo I: As Origens",
        descricao: "Da Criação ao pecado original e a primeira promessa de um Salvador.",
        eventos: [
            {
                data: "No princípio",
                titulo: "A Criação",
                personagens: [
                    {
                        nome: "Deus Pai",
                        origem: "Eternidade",
                        historia: "Criador de todas as coisas, visíveis e invisíveis. No Gênesis, Ele traz o universo à existência pelo Seu Verbo.",
                        doutrina: "Deus é Amor e criou o homem para participar de Sua vida divina."
                    },
                    {
                        nome: "Adão",
                        origem: "Terra (Éden)",
                        historia: "O primeiro homem, criado do pó da terra e do sopro de Deus. Pai de toda a humanidade.",
                        doutrina: "Representa a humanidade que, pela desobediência, perde a graça, mas mantém a dignidade de imagem de Deus."
                    }
                ],
                texto: "Deus cria o céu e a terra em harmonia. O homem é criado à imagem e semelhança de Deus.",
                interpretacao: "A criação é o alicerce do plano de Deus. Tudo foi feito para o homem, e o homem para Deus."
            },
            {
                data: "A Queda",
                titulo: "O Pecado Original",
                personagens: [
                    {
                        nome: "Eva",
                        origem: "Éden",
                        historia: "A primeira mulher, 'mãe de todos os viventes'. Criada para ser auxílio e companheira de Adão.",
                        doutrina: "Sua história prefigura Maria, a Nova Eva, que dará o 'Sim' para a salvação."
                    },
                    {
                        nome: "Serpente",
                        origem: "Paraíso (Queda Angélica)",
                        historia: "O tentador que instiga a dúvida sobre a bondade de Deus.",
                        doutrina: "Representa o mal e o uso distorcido da liberdade."
                    }
                ],
                texto: "A desobediência rompe a amizade com Deus.",
                interpretacao: "O pecado não tem a última palavra. Deus imediatamente promete o Protoevangelho (Gn 3,15)."
            },
            {
                data: "Dilúvio",
                titulo: "A Arca de Noé",
                personagens: [
                    {
                        nome: "Noé",
                        origem: "Mesopotâmia Antiga",
                        historia: "Homem justo em uma geração corrompida. Obedece a Deus construindo a arca.",
                        doutrina: "Sinal da nova criação e fidelidade de Deus."
                    }
                ],
                texto: "Deus limpa a terra e estabelece uma aliança com Noé.",
                interpretacao: "A Arca é figura da Igreja, que salva os homens das águas do pecado."
            }
        ]
    },
    {
        id: 2,
        titulo: "Capítulo II: O Povo da Aliança",
        descricao: "A eleição de Abraão e a formação do povo hebreu.",
        eventos: [
            {
                data: "1850 a.C.",
                titulo: "Abraão: O Pai na Fé",
                personagens: [
                    {
                        nome: "Abraão",
                        origem: "Ur dos Caldeus",
                        historia: "Chamado por Deus para deixar sua terra por uma promessa de uma grande descendência.",
                        doutrina: "Pai de todos os crentes e exemplo supremo de obediência na fé."
                    },
                    {
                        nome: "Sara",
                        origem: "Caldeia / Canaã",
                        historia: "Esposa de Abraão, que concebe na velhice por milagre de Deus.",
                        doutrina: "Testemunha de que para Deus nada é impossível."
                    }
                ],
                texto: "Deus chama Abrão para sair de sua terra sob uma promessa eterna.",
                interpretacao: "Abraão é o pai de todos os crentes. Sua obediência prefigura o sacrifício de Cristo."
            }
        ]
    },
    {
        id: 3,
        titulo: "Capítulo III: Os Profetas e Reis",
        descricao: "A monarquia de Israel e as vozes proféticas anunciando o Messias.",
        eventos: []
    },
    {
        id: 4,
        titulo: "Capítulo IV: A Plenitude dos Tempos",
        descricao: "A Encarnação do Verbo e o início da Igreja.",
        eventos: []
    },
    {
        id: 5,
        titulo: "Capítulo V: O Mistério Pascal",
        descricao: "A Paixão, Morte e Ressurreição de Nosso Senhor.",
        eventos: []
    },
    {
        id: 6,
        titulo: "Capítulo VI: O Tempo da Igreja",
        descricao: "A descida do Espírito e a vivência comunitária.",
        eventos: []
    }
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

function renderSummary() {
    const grid = document.getElementById('chaptersGrid');
    if (!grid) return;
    grid.innerHTML = '';

    salvaçãoData.forEach((cap, index) => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
            card.innerHTML = `
                <span>Capítulo ${cap.id}</span>
                <h3>${cap.titulo}</h3>
                <p>${cap.descricao}</p>
            `;
        card.onclick = () => openChapter(index);
        grid.appendChild(card);
    });
}

function openChapter(index) {
    currentChapterIndex = index;
    const summaryView = document.getElementById('summaryView');
    const chapterView = document.getElementById('chapterView');

    summaryView.classList.remove('active');
    chapterView.classList.add('active');

    renderChapterContent();
}

function renderChapterContent() {
    const cap = salvaçãoData[currentChapterIndex];
    document.getElementById('chapterTitle').innerText = cap.titulo;

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

    document.getElementById('prevChapterNav').style.display = currentChapterIndex > 0 ? 'inline-block' : 'none';
    document.getElementById('nextChapter').style.display = currentChapterIndex < salvaçãoData.length - 1 ? 'inline-block' : 'none';
}

function showDetails(titulo) {
    const ev = salvaçãoData[currentChapterIndex].eventos.find(e => e.titulo === titulo);
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

    document.getElementById('btnSumario').onclick = (e) => {
        e.preventDefault();
        document.getElementById('logoHome').click();
    };

    document.getElementById('backToSummary').onclick = () => {
        document.getElementById('logoHome').click();
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

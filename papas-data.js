const papasData = [
    { 
        id: 1, 
        nome: "São Pedro", 
        periodo: "33 - 67", 
        foto: "./assets/papas/pedro.png",
        descricaoCurta: "O Príncipe dos Apóstolos, instituído por Cristo como o fundamento da Igreja.",
        historia: "Simão, filho de Jonas, era um pescador da Galiléia quando foi chamado por Jesus. [IMG] Recebeu o nome de Pedro, que significa 'Pedra', pois sobre ele o Senhor edificaria Sua Igreja. [IMG] Após a Ascensão de Cristo, liderou a Igreja primitiva, realizou milagres em nome de Jesus e foi o primeiro a abrir as portas da Igreja aos gentios. [IMG] Morreu martirizado em Roma, crucificado de cabeça para baixo por não se considerar digno de morrer como seu Mestre.",
        doutrina: "O Magistério de Pedro é a base da autoridade apostólica e da infalibilidade papal em matéria de fé e moral."
    },
    { 
        id: 2, 
        nome: "São Lino", 
        periodo: "67 - 76", 
        foto: "./assets/papas/lino.png",
        descricaoCurta: "Mencionado por São Paulo em sua carta a Timóteo, foi o primeiro sucessor de Pedro.",
        historia: "São Lino nasceu na Toscana e foi um dos primeiros convertidos por São Pedro em Roma. [IMG] Foi escolhido pelo próprio Pedro para ser seu sucessor na liderança da comunidade cristã. [IMG] Durante seu pontificado, a Igreja enfrentou as primeiras perseguições imperiais organizadas. [IMG] É creditado por ter determinado que as mulheres entrassem na igreja com a cabeça coberta.",
        doutrina: "Sua liderança garantiu a continuidade da sucessão apostólica em um dos períodos mais difíceis da Igreja."
    },
    { 
        id: 3, 
        nome: "São Cleto", 
        periodo: "76 - 88", 
        foto: "./assets/papas/anacleto.png",
        descricaoCurta: "Dividiu Roma em paróquias e ordenou os primeiros padres.",
        historia: "Também conhecido como Anacleto, este Papa romano continuou a organização administrativa da Igreja. [IMG] Dividiu a cidade de Roma em 25 distritos ou paróquias para melhor atender aos fiéis. [IMG] Ordenou um número considerável de presbíteros para auxiliar na missão evangelizadora. [IMG] Morreu martirizado sob o imperador Domiciano.",
        doutrina: "Estabeleceu as bases da estrutura paroquial que perdura até hoje na organização eclesiástica."
    },
    { 
        id: 4, 
        nome: "São Clemente I", 
        periodo: "88 - 97", 
        foto: "./assets/papas/clemente.png",
        descricaoCurta: "Autor da famosa Epístola aos Coríntios, reafirmando a autoridade papal.",
        historia: "Conheceu pessoalmente São Pedro e São Paulo. É famoso por sua carta à Igreja de Corinto, que estava dividida por conflitos internos. [IMG] Esta carta é um dos documentos cristãos mais antigos fora do Novo Testamento e demonstra o exercício precoce do primado romano. [IMG] Foi exilado na Crimeia e, segundo a tradição, martirizado ao ser lançado ao mar com uma âncora no pescoço. [IMG] Suas relíquias foram posteriormente levadas para Roma por São Cirilo e São Metódio.",
        doutrina: "Sua intervenção em Corinto é o primeiro exemplo histórico da autoridade do Bispo de Roma sobre outras igrejas."
    },
    { 
        id: 5, 
        nome: "São Evaristo", 
        periodo: "97 - 105", 
        foto: "./assets/papas/evaristo.png",
        descricaoCurta: "Organizou as diaconias e os títulos presbiterais.",
        historia: "Nascido em Antioquia, era de origem grega. Continuou a obra de organização de Clemente. [IMG] Instituiu o colégio dos sete diáconos que deveriam assistir o Bispo de Roma em suas funções litúrgicas. [IMG] Distribuiu os presbíteros em áreas específicas, chamadas 'títulos'. [IMG] Sua administração foi marcada pela santidade e pelo zelo pastoral no final do primeiro século.",
        doutrina: "Desenvolveu a hierarquia funcional da Igreja, distinguindo claramente as responsabilidades de cada ordem sacra."
    },
    { 
        id: 6, 
        nome: "Santo Alexandre I", 
        periodo: "105 - 115", 
        foto: "./assets/papas/alexandre-I.png",
        descricaoCurta: "Introduziu o uso da água benta e reforçou a importância da Eucaristia.",
        historia: "De origem romana, Alexandre I foi um papa inovador na liturgia. [IMG] A ele é atribuída a introdução do uso de água benta misturada com sal para a purificação das casas dos fiéis. [IMG] Também reforçou a centralidade da Paixão de Cristo na Missa, inserindo partes específicas no Cânon. [IMG] Morreu como mártir durante a perseguição de Trajano.",
        doutrina: "Sua contribuição litúrgica ajudou a moldar a oração pública da Igreja primitiva."
    },
    { id: 7, nome: "São Sisto I", periodo: "115 - 125", foto: "./assets/papas/sisto-I.png", descricaoCurta: "Estabeleceu normas para o manuseio dos vasos sagrados.", historia: "Nascido em Roma, Sisto I governou a Igreja em um tempo de expansão e organização. [IMG] Determinou que apenas os ministros sagrados poderiam tocar os vasos utilizados no altar. [IMG] Instituiu regras para que bispos visitantes apresentassem cartas de comunhão ao Papa. [IMG] É venerado como mártir pelos católicos.", doutrina: "Suas normas reforçaram o respeito e o sagrado na liturgia da Missa." },
    { id: 8, 
        nome: "São Telésforo", 
        periodo: "125 - 136", 
        foto: "./assets/papas/telesforo.png", 
        descricaoCurta: "Instituiu a Missa da Meia-Noite no Natal e a Quaresma.", 
        historia: "De origem grega, era um eremita antes de ser eleito. [IMG] É creditado por instituir a tradição da Missa do Galo na véspera de Natal. [IMG] Também oficializou o hino 'Gloria in Excelsis Deo' nas celebrações. [IMG] Foi martirizado sob o imperador Adriano.", 
        doutrina: "Sua santidade e martírio são destacados por Irineu de Lyon como exemplo de fé inabalável." },
    { id: 9, nome: "São Higino", periodo: "136 - 140", foto: "./assets/papas/higino.png", descricaoCurta: "Instituiu a figura dos padrinhos no Batismo.", historia: "Nasceu na Grécia e focou seu pontificado na organização da hierarquia. [IMG] Introduziu o papel dos padrinhos no batismo para auxiliar os pais na educação da fé. [IMG] Enfrentou as heresias gnósticas que começavam a surgir em Roma. [IMG] Morreu em paz, deixando a Igreja mais estruturada administrativamente.", doutrina: "A instituição dos padrinhos reforçou o caráter comunitário e familiar da iniciação cristã." },
    { id: 10, nome: "São Pio I", periodo: "140 - 155", foto: "assets/papas/pio-I.png", descricaoCurta: "Definiu que a Páscoa fosse celebrada sempre no domingo.", historia: "Natural de Aquileia, era irmão do autor do livro 'O Pastor de Hermas'. [IMG] Combateu vigorosamente as heresias gnósticas de Marcião e Valentino. [IMG] Estabeleceu definitivamente que a Páscoa cristã deveria ocorrer no domingo, o dia do Senhor. [IMG] Foi um grande defensor da unidade doutrinária contra as correntes filosóficas da época.", doutrina: "A unificação da data da Páscoa foi um passo crucial para a identidade litúrgica global da Igreja." },
    { id: 11, nome: "Santo Aniceto", periodo: "155 - 166", foto: "./assets/papas/aniceto.png", descricaoCurta: "Defendeu a tradição apostólica contra as heresias de Marcião.", historia: "De origem síria, recebeu em Roma o grande bispo São Policarpo de Esmirna. [IMG] Juntos, discutiram cordialmente a data da Páscoa, mantendo a comunhão apesar das diferenças regionais. [IMG] Lutou contra as heresias gnósticas que tentavam deformar o Evangelho. [IMG] Morreu como mártir durante as perseguições do século II.", doutrina: "Seu diálogo com Policarpo é um exemplo eterno de unidade na diversidade dentro da Igreja." },
    { id: 12, nome: "São Sotero", periodo: "166 - 174", foto: "./assets/papas/sotero.png", descricaoCurta: "Conhecido como o Papa da Caridade por sua ajuda aos perseguidos.", historia: "Nascido na Campânia, destacou-se por sua imensa generosidade. [IMG] Enviava esmolas e cartas de encorajamento para igrejas distantes que sofriam perseguição. [IMG] Combateu o montanismo, uma heresia que pregava falsos profetismos. [IMG] Determinou que o matrimônio só seria válido se fosse abençoado por um sacerdote.", doutrina: "Sua ênfase na caridade e na sacramentalidade do matrimônio fortaleceu os fundamentos da vida cristã." },
    { id: 13, nome: "Santo Eleutério", periodo: "174 - 189", foto: "./assets/papas/eleuterio.png", descricaoCurta: "Estabeleceu que nenhum alimento é impuro para os cristãos.", historia: "Seu nome significa 'Livre' em grego. Foi diácono antes de ser papa. [IMG] Enfrentou o montanismo e enviou missionários para evangelizar a Grã-Bretanha a pedido do rei Lúcio. [IMG] Reafirmou que todas as criaturas de Deus são boas para o alimento, removendo restrições dietéticas antigas. [IMG] Seu pontificado foi marcado por um crescimento sólido das comunidades cristãs.", doutrina: "Aboliu tabus alimentares judaicos, reforçando a liberdade cristã perante as leis cerimoniais antigas." },
    { id: 14, nome: "São Vítor I", periodo: "189 - 199", foto: "./assets/papas/vitor-I.png", descricaoCurta: "O primeiro Papa africano, estabeleceu o Latim como língua litúrgica.", historia: "Foi uma figura de autoridade marcante. [IMG] Exigiu que todas as igrejas celebrassem a Páscoa no domingo, sob pena de excomunhão (Controvérsia Quartodecimana). [IMG] Começou a utilizar o latim em vez do grego nos documentos oficiais e na Missa em Roma. [IMG] Defendeu a divindade de Cristo contra a heresia de Teódoto.", doutrina: "A transição para o latim foi fundamental para a futura unidade cultural e espiritual do Ocidente cristão." },
    { id: 15, nome: "São Zeferino", periodo: "199 - 217", foto: "./assets/papas/zeferino.png", descricaoCurta: "Enfrentou heresias trinitárias e organizou as catacumbas.", historia: "Assumiu o governo da Igreja em tempos de severas tensões teológicas. [IMG] Com o apoio de seu diácono Calisto, combateu o monarquianismo, que confundia as Pessoas da Trindade. [IMG] Organizou os locais de sepultamento cristão que se tornariam as Catacumbas de São Calisto. [IMG] Morreu como mártir após um pontificado de dezoito anos.", doutrina: "Defendeu a distinção das Pessoas na Santíssima Trindade contra as distorções teológicas de seu tempo." },
    { id: 16, nome: "São Calisto I", periodo: "217 - 222", foto: "./assets/papas/calisto-I.png", descricaoCurta: "De escravo a Papa, defendeu o perdão para todos os pecados arrependidos.", historia: "Sua história é de superação. Foi escravo e condenado às minas antes de liderar a Igreja. [IMG] Como Papa, proclamou a misericórdia de Deus, afirmando que a Igreja deve perdoar inclusive pecados graves se houver arrependimento. [IMG] Foi combatido por Santo Hipólito, mas manteve a doutrina da misericórdia. [IMG] Morreu martirizado ao ser atirado em um poço durante um levante pagão.", doutrina: "A 'Educação de Calisto' estabeleceu que a Igreja é um hospital para pecadores, não apenas um museu para santos." },
    { id: 17, nome: "Santo Urbano I", periodo: "222 - 230", foto: "./assets/papas/urbano-I.png", descricaoCurta: "Governou em um período de paz e converteu muitos nobres romanos.", historia: "Viveu durante o reinado do imperador Alexandre Severo, um tempo de relativa tolerância. [IMG] Aproveitou a paz para evangelizar as classes altas de Roma. [IMG] É tradição que ele converteu e batizou Santa Cecília e seus companheiros. [IMG] Morreu em paz, tendo consolidado a fé em um período de crescimento.", doutrina: "Sua gestão focou na expansão missionária e na consolidação da estrutura paroquial romana." },
    { id: 18, nome: "São Ponciano", periodo: "230 - 235", foto: "./assets/papas/ponciano.png", descricaoCurta: "O primeiro Papa a renunciar, por causa do exílio e martírio nas minas.", historia: "Foi deportado para as minas da Sardenha ('ilha da morte') pelo imperador Maximino. [IMG] Para que a Igreja não ficasse sem governo, renunciou ao pontificado, o primeiro exemplo histórico de renúncia papal. [IMG] No exílio, reconciliou-se com o antipapa Hipólito, e ambos morreram como mártires. [IMG] Seus restos mortais foram trazidos de volta para as Catacumbas de São Calisto.", doutrina: "Seu gesto de renúncia e reconciliação demonstrou sua humildade e amor supremo pela unidade da Igreja." },
    { id: 19, nome: "Santo Antero", periodo: "235 - 236", foto: "./assets/papas/antero.png", descricaoCurta: "Governou por apenas 43 dias e foi martirizado por coletar as atas dos mártires.", historia: "Seu breve pontificado foi intenso. [IMG] Ordenou que as histórias dos mártires fossem coletadas com cuidado para que seu exemplo não se perdesse. [IMG] Foi rapidamente identificado pelas autoridades e executado pelo imperador Maximino. [IMG] Sua preocupação com a história garantiu que o legado dos heróis da fé fosse preservado.", doutrina: "A preservação da memória dos mártires é essencial para a identidade e a força da fé cristã." },
    { id: 20, nome: "São Fabiano", periodo: "236 - 250", foto: "./assets/papas/fabiano.png", descricaoCurta: "Eleito por um prodígio divino, organizou Roma em distritos eclesiais.", historia: "Diz a lenda que uma pomba pousou em sua cabeça durante a eleição, sinalizando a escolha divina. [IMG] Reorganizou Roma em sete distritos eclesiásticos, facilitando o cuidado pastoral e administrativo. [IMG] Enviou missionários às Gálias (atual França) para fundar novas igrejas. [IMG] Foi uma das primeiras vítimas da grande perseguição do imperador Décio.", doutrina: "Sua engenharia administrativa serviu de modelo para a organização diocesana em todo o mundo cristão." },
    {
        "id": 21,
        "nome": "Cornélio",
        "periodo": "251 - 253",
        "foto": "./assets/papas/21_s_cornelio.png",
        "descricaoCurta": "Conduziu a Igreja de Roma durante o cisma de Novaciano.",
        "historia": "Cornélio foi o 21º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 251 e 253.\n\nSeu pontificado coincidiu com a divisão provocada por Novaciano em Roma. No mesmo contexto, Cipriano de Cartago escreveu sobre a unidade da Igreja, relacionando a comunhão dos bispos com a cátedra de Pedro.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Fabiano e antes de Lúcio I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "6 ou 13.III.251"
            ],
            [
                "Fim do pontificado",
                "... VI.253"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Cornélio — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/cornelio.html"
            },
            {
                "titulo": "Sínodo dos Bispos — Cornélio e a unidade da Igreja",
                "url": "https://www.vatican.va/content/dam/wss/roman_curia/synod/documents/rc_synod_doc_20090319_eterovic-yaounde_po.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/21_s_cornelio.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 22,
        "nome": "Lúcio I",
        "periodo": "253 - 254",
        "foto": "./assets/papas/22_s_lucio_I.png",
        "descricaoCurta": "22º pontífice, sucessor de Cornélio.",
        "historia": "Lúcio I foi o 22º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 253 e 254.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Cornélio e antes de Estêvão I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... VI ou VII.253"
            ],
            [
                "Fim do pontificado",
                "5.III.254"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Lúcio I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/lucio-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/22_s_lucio_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 23,
        "nome": "Estêvão I",
        "periodo": "254 - 257",
        "foto": "./assets/papas/23_s_stefano_I.png",
        "descricaoCurta": "Seu pontificado foi marcado pela controvérsia sobre o batismo administrado fora da comunhão católica.",
        "historia": "Estêvão I foi o 23º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 254 e 257.\n\nDurante seu pontificado ocorreu a controvérsia com Cipriano de Cartago sobre a validade do batismo administrado por cristãos considerados heréticos. Bento XVI recordou esse conflito ao apresentar a vida e a atuação pastoral de Cipriano.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Lúcio I e antes de Sisto II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "12.III.254"
            ],
            [
                "Fim do pontificado",
                "2.VIII.257"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Estêvão I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/stefano-i.html"
            },
            {
                "titulo": "Bento XVI — São Cipriano (6/6/2007)",
                "url": "https://www.vatican.va/content/benedict-xvi/en/audiences/2007/documents/hf_ben-xvi_aud_20070606.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/23_s_stefano_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 24,
        "nome": "Sisto II",
        "periodo": "257 - 258",
        "foto": "./assets/papas/24_s_sisto_II.png",
        "descricaoCurta": "24º pontífice, sucessor de Estêvão I.",
        "historia": "Sisto II foi o 24º pontífice da Igreja Católica. Era de origem grega.\n\nSeu pontificado é situado pela Santa Sé entre 257 e 258.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Estêvão I e antes de Dionísio.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "30.VIII.257"
            ],
            [
                "Fim do pontificado",
                "6.VIII.258"
            ],
            [
                "Origem",
                "Grego"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Sisto II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/sisto-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/24_s_sisto_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 25,
        "nome": "Dionísio",
        "periodo": "259 - 268",
        "foto": "./assets/papas/25_s_dionisio.png",
        "descricaoCurta": "25º pontífice, sucessor de Sisto II.",
        "historia": "Dionísio foi o 25º pontífice da Igreja Católica. Sua pátria é desconhecida, segundo a ficha da Santa Sé.\n\nSeu pontificado é situado pela Santa Sé entre 259 e 268.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Sisto II e antes de Félix I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "22.VII.259"
            ],
            [
                "Fim do pontificado",
                "26.XII.268"
            ],
            [
                "Origem",
                "pátria desconhecida"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Dionísio — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/dionisio.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/25_s_dionisio.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 26,
        "nome": "Félix I",
        "periodo": "269 - 274",
        "foto": "./assets/papas/26_s_felice_I.png",
        "descricaoCurta": "26º pontífice, sucessor de Dionísio.",
        "historia": "Félix I foi o 26º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 269 e 274.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Dionísio e antes de Eutiquiano.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "5.I.269"
            ],
            [
                "Fim do pontificado",
                "30.XII.274"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Félix I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/felice-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/26_s_felice_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 27,
        "nome": "Eutiquiano",
        "periodo": "275 - 283",
        "foto": "./assets/papas/27_s_eutichiano.png",
        "descricaoCurta": "27º pontífice, sucessor de Félix I.",
        "historia": "Eutiquiano foi o 27º pontífice da Igreja Católica. A Santa Sé registra sua origem em Luni.\n\nSeu pontificado é situado pela Santa Sé entre 275 e 283.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Félix I e antes de Caio.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "4.I.275"
            ],
            [
                "Fim do pontificado",
                "7.XII.283"
            ],
            [
                "Origem",
                "Luni"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Eutiquiano — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/eutichiano.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/27_s_eutichiano.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 28,
        "nome": "Caio",
        "periodo": "283 - 296",
        "foto": "./assets/papas/28_s_caio.png",
        "descricaoCurta": "28º pontífice, sucessor de Eutiquiano.",
        "historia": "Caio foi o 28º pontífice da Igreja Católica. A Santa Sé registra sua origem em Dalmácia.\n\nSeu pontificado é situado pela Santa Sé entre 283 e 296.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Eutiquiano e antes de Marcelino.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "17.XII.283"
            ],
            [
                "Fim do pontificado",
                "22.IV.296"
            ],
            [
                "Origem",
                "Dalmácia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Caio — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/caio.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/28_s_caio.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 29,
        "nome": "Marcelino",
        "periodo": "296 - 304",
        "foto": "./assets/papas/29_s_marcellino.png",
        "descricaoCurta": "29º pontífice, sucessor de Caio.",
        "historia": "Marcelino foi o 29º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 296 e 304.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Caio e antes de Marcelo I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "30.VI.296"
            ],
            [
                "Fim do pontificado",
                "25.X.304"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Marcelino — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/marcellino.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/29_s_marcellino.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 30,
        "nome": "Marcelo I",
        "periodo": "306 - 309",
        "foto": "./assets/papas/30_s_marcello.png",
        "descricaoCurta": "30º pontífice, sucessor de Marcelino.",
        "historia": "Marcelo I foi o 30º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 306 e 309.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Marcelino e antes de Eusébio.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "306"
            ],
            [
                "Fim do pontificado",
                "16.I.309"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Marcelo I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/marcello-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/30_s_marcello.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 31,
        "nome": "Eusébio",
        "periodo": "309",
        "foto": "./assets/papas/31_s_eusebio.png",
        "descricaoCurta": "31º pontífice, sucessor de Marcelo I.",
        "historia": "Eusébio foi o 31º pontífice da Igreja Católica. Era de origem grega.\n\nSeu pontificado transcorreu no ano de 309.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Marcelo I e antes de Milcíades ou Melquíades.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "18.IV.309"
            ],
            [
                "Fim do pontificado",
                "17.VIII.309"
            ],
            [
                "Origem",
                "Grego"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Eusébio — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/eusebio.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/31_s_eusebio.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 32,
        "nome": "Milcíades ou Melquíades",
        "periodo": "311 - 314",
        "foto": "./assets/papas/32_s_milziade.png",
        "descricaoCurta": "32º pontífice, sucessor de Eusébio.",
        "historia": "Milcíades ou Melquíades foi o 32º pontífice da Igreja Católica. Era de origem africana.\n\nSeu pontificado é situado pela Santa Sé entre 311 e 314.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Eusébio e antes de Silvestre I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "2.VII.311"
            ],
            [
                "Fim do pontificado",
                "10.I.314"
            ],
            [
                "Origem",
                "Africano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Milcíades ou Melquíades — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/milziade-o-melchiade.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/32_s_milziade.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 33,
        "nome": "Silvestre I",
        "periodo": "314 - 335",
        "foto": "./assets/papas/33_s_silvestro_I.png",
        "descricaoCurta": "33º pontífice, sucessor de Milcíades ou Melquíades.",
        "historia": "Silvestre I foi o 33º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 314 e 335.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Milcíades ou Melquíades e antes de Marcos.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "31.I.314"
            ],
            [
                "Fim do pontificado",
                "31.XII.335"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Silvestre I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/silvestro-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/33_s_silvestro_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 34,
        "nome": "Marcos",
        "periodo": "336",
        "foto": "./assets/papas/34_s_marco.png",
        "descricaoCurta": "34º pontífice, sucessor de Silvestre I.",
        "historia": "Marcos foi o 34º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado transcorreu no ano de 336.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Silvestre I e antes de Júlio I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "18.I.336"
            ],
            [
                "Fim do pontificado",
                "7.X.336"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Marcos — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/marco.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/34_s_marco.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 35,
        "nome": "Júlio I",
        "periodo": "337 - 352",
        "foto": "./assets/papas/35_s_giulio_I.png",
        "descricaoCurta": "35º pontífice, sucessor de Marcos.",
        "historia": "Júlio I foi o 35º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 337 e 352.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Marcos e antes de Libério.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "6.II.337"
            ],
            [
                "Fim do pontificado",
                "12.IV.352"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Júlio I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giulio-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/35_s_giulio_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 36,
        "nome": "Libério",
        "periodo": "352 - 366",
        "foto": "./assets/papas/36_liberio.png",
        "descricaoCurta": "36º pontífice, sucessor de Júlio I.",
        "historia": "Libério foi o 36º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 352 e 366.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Júlio I e antes de Dâmaso I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "17.V.352"
            ],
            [
                "Fim do pontificado",
                "24.IX.366"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Libério — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/liberio.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/36_liberio.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 37,
        "nome": "Dâmaso I",
        "periodo": "366 - 384",
        "foto": "./assets/papas/37_s_damaso_I.png",
        "descricaoCurta": "Apoiou São Jerônimo na revisão e tradução latina das Escrituras.",
        "historia": "Dâmaso I foi o 37º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 366 e 384.\n\nEm 382, acolheu Jerônimo em Roma como secretário e conselheiro. Reconhecendo sua preparação intelectual, incentivou o trabalho de tradução latina da Bíblia por razões pastorais e culturais.",
        "doutrina": "Seu apoio ao trabalho bíblico de Jerônimo contribuiu para a transmissão das Escrituras na Igreja latina e para a história da Vulgata.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "1.X.366"
            ],
            [
                "Fim do pontificado",
                "11.XII.384"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Dâmaso I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/damaso-i.html"
            },
            {
                "titulo": "Bento XVI — São Jerônimo (7/11/2007)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2007/documents/hf_ben-xvi_aud_20071107.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/37_s_damaso_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 38,
        "nome": "Sirício",
        "periodo": "384 - 399",
        "foto": "./assets/papas/38_s_siricio.png",
        "descricaoCurta": "38º pontífice, sucessor de Dâmaso I.",
        "historia": "Sirício foi o 38º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 384 e 399.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Dâmaso I e antes de Anastácio I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "15 ou 22 ou 29.XII.384"
            ],
            [
                "Fim do pontificado",
                "26.XI.399"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Sirício — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/siricio.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/38_s_siricio.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 39,
        "nome": "Anastácio I",
        "periodo": "399 - 401",
        "foto": "./assets/papas/39_s_anastasio_I.png",
        "descricaoCurta": "39º pontífice, sucessor de Sirício.",
        "historia": "Anastácio I foi o 39º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 399 e 401.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Sirício e antes de Inocêncio I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "27.XI.399"
            ],
            [
                "Fim do pontificado",
                "19.XII.401"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Anastácio I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/anastasio-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/39_s_anastasio_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 40,
        "nome": "Inocêncio I",
        "periodo": "401 - 417",
        "foto": "./assets/papas/40_s_innocenzo_I.png",
        "descricaoCurta": "40º pontífice, sucessor de Anastácio I.",
        "historia": "Inocêncio I foi o 40º pontífice da Igreja Católica. A Santa Sé registra sua origem em Albano.\n\nSeu pontificado é situado pela Santa Sé entre 401 e 417.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Anastácio I e antes de Zósimo.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "22.XII.401"
            ],
            [
                "Fim do pontificado",
                "12.III.417"
            ],
            [
                "Origem",
                "Albano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/innocenzo-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/40_s_innocenzo_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 41,
        "nome": "Zósimo",
        "periodo": "417 - 418",
        "foto": "./assets/papas/41_s_zosimo.png",
        "descricaoCurta": "41º pontífice, sucessor de Inocêncio I.",
        "historia": "Zósimo foi o 41º pontífice da Igreja Católica. Era de origem grega.\n\nSeu pontificado é situado pela Santa Sé entre 417 e 418.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio I e antes de Bonifácio I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "18.III.417"
            ],
            [
                "Fim do pontificado",
                "26.XII.418"
            ],
            [
                "Origem",
                "Grego"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Zósimo — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/zosimo.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/41_s_zosimo.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 42,
        "nome": "Bonifácio I",
        "periodo": "418 - 422",
        "foto": "./assets/papas/42_s_bonifacio_I.png",
        "descricaoCurta": "42º pontífice, sucessor de Zósimo.",
        "historia": "Bonifácio I foi o 42º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 418 e 422.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Zósimo e antes de Celestino I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "28,29.XII.418"
            ],
            [
                "Fim do pontificado",
                "4.IX.422"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bonifácio I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/bonifacio-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/42_s_bonifacio_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 43,
        "nome": "Celestino I",
        "periodo": "422 - 432",
        "foto": "./assets/papas/43_s_celestino_I.png",
        "descricaoCurta": "43º pontífice, sucessor de Bonifácio I.",
        "historia": "Celestino I foi o 43º pontífice da Igreja Católica. A Santa Sé registra sua origem em Campânia.\n\nSeu pontificado é situado pela Santa Sé entre 422 e 432.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bonifácio I e antes de Sisto III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "10.IX.422"
            ],
            [
                "Fim do pontificado",
                "27.VII.432"
            ],
            [
                "Origem",
                "Campânia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Celestino I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/celestino-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/43_s_celestino_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 44,
        "nome": "Sisto III",
        "periodo": "432 - 440",
        "foto": "./assets/papas/44_s_sisto_III.png",
        "descricaoCurta": "44º pontífice, sucessor de Celestino I.",
        "historia": "Sisto III foi o 44º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 432 e 440.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Celestino I e antes de Leão I, Magno.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "31.VII.432"
            ],
            [
                "Fim do pontificado",
                "19.VIII.440"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Sisto III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/sisto-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/44_s_sisto_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 45,
        "nome": "Leão I, Magno",
        "periodo": "440 - 461",
        "foto": "./assets/papas/45_s_leone_I.png",
        "descricaoCurta": "Doutor da Igreja e defensor da fé em Cristo verdadeiro Deus e verdadeiro homem.",
        "historia": "Leão I, Magno foi o 45º pontífice da Igreja Católica. A Santa Sé registra sua origem em Tuscia.\n\nSeu pontificado é situado pela Santa Sé entre 440 e 461.\n\nEra diácono em Roma antes de ser eleito em 440, quando estava em missão na Gália. Em meio às invasões e ao enfraquecimento do Império Romano do Ocidente, também atuou pela proteção da população. Encontrou Átila em 452 e interveio junto aos vândalos durante o saque de Roma em 455.\n\nSeu Tomo a Flaviano teve papel central no Concílio de Calcedônia, em 451. Suas cartas e seus sermões preservam um amplo testemunho de sua atividade como pastor e teólogo.",
        "doutrina": "Defendeu a unidade da pessoa de Cristo em duas naturezas, humana e divina, sem confusão nem separação. Bento XIV o proclamou Doutor da Igreja em 1754.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "29.IX.440"
            ],
            [
                "Fim do pontificado",
                "10.XI.461"
            ],
            [
                "Origem",
                "Tuscia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão I, Magno — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-i--magno.html"
            },
            {
                "titulo": "Bento XVI — São Leão Magno (5/3/2008)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2008/documents/hf_ben-xvi_aud_20080305.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/45_s_leone_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 46,
        "nome": "Hilário",
        "periodo": "461 - 468",
        "foto": "./assets/papas/46_s_ilaro.png",
        "descricaoCurta": "46º pontífice, sucessor de Leão I, Magno.",
        "historia": "Hilário foi o 46º pontífice da Igreja Católica. Era de origem sarda.\n\nSeu pontificado é situado pela Santa Sé entre 461 e 468.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Leão I, Magno e antes de Simplício.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "19.XI.461"
            ],
            [
                "Fim do pontificado",
                "29.II.468"
            ],
            [
                "Origem",
                "Sardo"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Hilário — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/ilario.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/46_s_ilaro.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 47,
        "nome": "Simplício",
        "periodo": "468 - 483",
        "foto": "./assets/papas/47_s_simplicio.png",
        "descricaoCurta": "47º pontífice, sucessor de Hilário.",
        "historia": "Simplício foi o 47º pontífice da Igreja Católica. A Santa Sé registra sua origem em Tivoli.\n\nSeu pontificado é situado pela Santa Sé entre 468 e 483.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Hilário e antes de Félix III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "3.III.468"
            ],
            [
                "Fim do pontificado",
                "10.III.483"
            ],
            [
                "Origem",
                "Tivoli"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Simplício — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/simplicio.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/47_s_simplicio.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 48,
        "nome": "Félix III",
        "periodo": "483 - 492",
        "foto": "./assets/papas/48_s_felice_III.png",
        "descricaoCurta": "48º pontífice, sucessor de Simplício.",
        "historia": "Félix III foi o 48º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 483 e 492.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Simplício e antes de Gelásio I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "13.III.483"
            ],
            [
                "Fim do pontificado",
                "25.II ou 1.III.492"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Félix III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/felice-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/48_s_felice_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 49,
        "nome": "Gelásio I",
        "periodo": "492 - 496",
        "foto": "./assets/papas/49_s_gelasio_I.png",
        "descricaoCurta": "49º pontífice, sucessor de Félix III.",
        "historia": "Gelásio I foi o 49º pontífice da Igreja Católica. Era de origem africana.\n\nSeu pontificado é situado pela Santa Sé entre 492 e 496.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Félix III e antes de Anastácio II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "1.III.492"
            ],
            [
                "Fim do pontificado",
                "21.XI.496"
            ],
            [
                "Origem",
                "Africano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gelásio I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gelasio-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/49_s_gelasio_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 50,
        "nome": "Anastácio II",
        "periodo": "496 - 498",
        "foto": "./assets/papas/50_anastasio_II.png",
        "descricaoCurta": "50º pontífice, sucessor de Gelásio I.",
        "historia": "Anastácio II foi o 50º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 496 e 498.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gelásio I e antes de Símaco.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "24.XI.496"
            ],
            [
                "Fim do pontificado",
                "19.XI.498"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Anastácio II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/anastasio-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/50_anastasio_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 51,
        "nome": "Símaco",
        "periodo": "498 - 514",
        "foto": "./assets/papas/51_s_simmaco.png",
        "descricaoCurta": "51º pontífice, sucessor de Anastácio II.",
        "historia": "Símaco foi o 51º pontífice da Igreja Católica. Era de origem sarda.\n\nSeu pontificado é situado pela Santa Sé entre 498 e 514.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Anastácio II e antes de Hormisdas.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "22.XI.498"
            ],
            [
                "Fim do pontificado",
                "19.VII.514"
            ],
            [
                "Origem",
                "Sardo"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Símaco — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/simmaco.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/51_s_simmaco.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 52,
        "nome": "Hormisdas",
        "periodo": "514 - 523",
        "foto": "./assets/papas/52_s_ormisda.png",
        "descricaoCurta": "52º pontífice, sucessor de Símaco.",
        "historia": "Hormisdas foi o 52º pontífice da Igreja Católica.\n\nSeu pontificado é situado pela Santa Sé entre 514 e 523.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Símaco e antes de João I, mártir.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "20.VII.514"
            ],
            [
                "Fim do pontificado",
                "6.VIII.523"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Hormisdas — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/ormisda.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/52_s_ormisda.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 53,
        "nome": "João I, mártir",
        "periodo": "523 - 526",
        "foto": "./assets/papas/53_s_giovanni_I.png",
        "descricaoCurta": "53º pontífice, sucessor de Hormisdas.",
        "historia": "João I, mártir foi o 53º pontífice da Igreja Católica. A Santa Sé registra sua origem em Tuscia.\n\nSeu pontificado é situado pela Santa Sé entre 523 e 526.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Hormisdas e antes de Félix IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "13.VIII.523"
            ],
            [
                "Fim do pontificado",
                "18.V.526"
            ],
            [
                "Origem",
                "Tuscia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João I, mártir — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/53_s_giovanni_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 54,
        "nome": "Félix IV",
        "periodo": "526 - 530",
        "foto": "./assets/papas/54_s_felice_IV.png",
        "descricaoCurta": "54º pontífice, sucessor de João I, mártir.",
        "historia": "Félix IV foi o 54º pontífice da Igreja Católica. A Santa Sé registra sua origem em Sannio.\n\nSeu pontificado é situado pela Santa Sé entre 526 e 530.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João I, mártir e antes de Bonifácio II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "12.VII.526"
            ],
            [
                "Fim do pontificado",
                "20 o 22.IX.530"
            ],
            [
                "Origem",
                "Sannio"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Félix IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/felice-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/54_s_felice_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 55,
        "nome": "Bonifácio II",
        "periodo": "530 - 532",
        "foto": "./assets/papas/55_bonifacio_II.png",
        "descricaoCurta": "55º pontífice, sucessor de Félix IV.",
        "historia": "Bonifácio II foi o 55º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 530 e 532.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Félix IV e antes de João II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "20 ou 22.IX.530"
            ],
            [
                "Fim do pontificado",
                "17.X.532"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bonifácio II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/bonifacio-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/55_bonifacio_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 56,
        "nome": "João II",
        "periodo": "532/533 - 535",
        "foto": "./assets/papas/56_giovanni_II.png",
        "descricaoCurta": "56º pontífice, sucessor de Bonifácio II.",
        "historia": "João II foi o 56º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Mercurio. Seu pontificado é situado pela Santa Sé entre 532/533 e 535.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bonifácio II e antes de Agapito I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "31.XII.532, 2.I.533"
            ],
            [
                "Fim do pontificado",
                "8.V.535"
            ],
            [
                "Nome de nascimento",
                "Mercurio"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/56_giovanni_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 57,
        "nome": "Agapito I",
        "periodo": "535 - 536",
        "foto": "./assets/papas/57_s_agapito_I.png",
        "descricaoCurta": "57º pontífice, sucessor de João II.",
        "historia": "Agapito I foi o 57º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 535 e 536.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João II e antes de Silvério, mártir.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "13.V.535"
            ],
            [
                "Fim do pontificado",
                "22.IV.536"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Agapito I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/agapito-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/57_s_agapito_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 58,
        "nome": "Silvério, mártir",
        "periodo": "536 - 537",
        "foto": "./assets/papas/58_s_silverio.png",
        "descricaoCurta": "58º pontífice, sucessor de Agapito I.",
        "historia": "Silvério, mártir foi o 58º pontífice da Igreja Católica. A Santa Sé registra sua origem em Frosinone.\n\nSeu pontificado é situado pela Santa Sé entre 536 e 537.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Agapito I e antes de Vigílio.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "8.VI.536"
            ],
            [
                "Fim do pontificado",
                "... 537"
            ],
            [
                "Origem",
                "Frosinone"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Silvério, mártir — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/silverio.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/58_s_silverio.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 59,
        "nome": "Vigílio",
        "periodo": "537 - 555",
        "foto": "./assets/papas/59_vigilio.png",
        "descricaoCurta": "59º pontífice, sucessor de Silvério, mártir.",
        "historia": "Vigílio foi o 59º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 537 e 555.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Silvério, mártir e antes de Pelágio I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "29.III.537"
            ],
            [
                "Fim do pontificado",
                "7.VI.555"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Vigílio — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/vigilio.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/59_vigilio.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 60,
        "nome": "Pelágio I",
        "periodo": "556 - 561",
        "foto": "./assets/papas/60_pelagio_I.png",
        "descricaoCurta": "60º pontífice, sucessor de Vigílio.",
        "historia": "Pelágio I foi o 60º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 556 e 561.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Vigílio e antes de João III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "16.IV.556"
            ],
            [
                "Fim do pontificado",
                "4.III.561"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pelágio I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/pelagio-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/60_pelagio_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 61,
        "nome": "João III",
        "periodo": "561 - 574",
        "foto": "./assets/papas/61_giovanni_III.png",
        "descricaoCurta": "61º pontífice, sucessor de Pelágio I.",
        "historia": "João III foi o 61º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Catalino. Seu pontificado é situado pela Santa Sé entre 561 e 574.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Pelágio I e antes de Bento I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "17.VII.561"
            ],
            [
                "Fim do pontificado",
                "13.VII.574"
            ],
            [
                "Nome de nascimento",
                "Catalino"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/61_giovanni_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 62,
        "nome": "Bento I",
        "periodo": "575 - 579",
        "foto": "./assets/papas/62_benedetto_I.png",
        "descricaoCurta": "62º pontífice, sucessor de João III.",
        "historia": "Bento I foi o 62º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 575 e 579.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João III e antes de Pelágio II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "2.VI.575"
            ],
            [
                "Fim do pontificado",
                "30.VII.579"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/62_benedetto_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 63,
        "nome": "Pelágio II",
        "periodo": "579 - 590",
        "foto": "./assets/papas/63_pelagio_II.png",
        "descricaoCurta": "63º pontífice, sucessor de Bento I.",
        "historia": "Pelágio II foi o 63º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 579 e 590.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento I e antes de Gregório I, Magno.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "26.XI.579"
            ],
            [
                "Fim do pontificado",
                "7.II.590"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pelágio II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/pelagio-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/63_pelagio_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 64,
        "nome": "Gregório I, Magno",
        "periodo": "590 - 604",
        "foto": "./assets/papas/64_gregorio_I.png",
        "descricaoCurta": "Monge, pastor e Doutor da Igreja, promoveu a missão e o cuidado dos necessitados.",
        "historia": "Gregório I, Magno foi o 64º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 590 e 604.\n\nAntes do pontificado, foi prefeito de Roma, monge e representante papal em Constantinopla. Eleito em 590, enfrentou a fome, a peste e os conflitos com os lombardos, procurando caminhos de negociação e paz. Enviou Agostinho de Cantuária e seus companheiros para evangelizar a Inglaterra.\n\nDeixou cartas, homilias, comentários bíblicos, os Diálogos e a Regra pastoral. Sua escrita relaciona a leitura das Escrituras com o serviço cotidiano e a responsabilidade dos pastores.",
        "doutrina": "Na Regra pastoral, apresentou o bispo como pregador que deve ensinar pelo exemplo e conhecer as necessidades de seus fiéis. Insistiu na união entre oração, palavra e ação.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "3.IX.590"
            ],
            [
                "Fim do pontificado",
                "12.III.604"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório I, Magno — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-i--magno.html"
            },
            {
                "titulo": "Bento XVI — Gregório Magno: vida (28/5/2008)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2008/documents/hf_ben-xvi_aud_20080528.html"
            },
            {
                "titulo": "Bento XVI — Gregório Magno: obras (4/6/2008)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2008/documents/hf_ben-xvi_aud_20080604.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/64_gregorio_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 65,
        "nome": "Sabiniano",
        "periodo": "604 - 606",
        "foto": "./assets/papas/65_sabiniano.png",
        "descricaoCurta": "65º pontífice, sucessor de Gregório I, Magno.",
        "historia": "Sabiniano foi o 65º pontífice da Igreja Católica. A Santa Sé registra sua origem em Blera na Tuscia.\n\nSeu pontificado é situado pela Santa Sé entre 604 e 606.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório I, Magno e antes de Bonifácio III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... III, 13.IX.604"
            ],
            [
                "Fim do pontificado",
                "22.II.606"
            ],
            [
                "Origem",
                "Blera na Tuscia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Sabiniano — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/sabiniano.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/65_sabiniano.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 66,
        "nome": "Bonifácio III",
        "periodo": "607",
        "foto": "./assets/papas/66_bonifacio_III.png",
        "descricaoCurta": "66º pontífice, sucessor de Sabiniano.",
        "historia": "Bonifácio III foi o 66º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado transcorreu no ano de 607.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Sabiniano e antes de Bonifácio IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "19.II.607"
            ],
            [
                "Fim do pontificado",
                "10.XI.607"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bonifácio III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/bonifacio-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/66_bonifacio_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 67,
        "nome": "Bonifácio IV",
        "periodo": "608 - 615",
        "foto": "./assets/papas/67_s_bonifacio_IV.png",
        "descricaoCurta": "67º pontífice, sucessor de Bonifácio III.",
        "historia": "Bonifácio IV foi o 67º pontífice da Igreja Católica. A Santa Sé registra sua origem em Territorio Marsi.\n\nSeu pontificado é situado pela Santa Sé entre 608 e 615.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bonifácio III e antes de Diosdado ou Adeodato I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "25.VIII.608"
            ],
            [
                "Fim do pontificado",
                "8.V.615"
            ],
            [
                "Origem",
                "Territorio Marsi"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bonifácio IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/bonifacio-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/67_s_bonifacio_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 68,
        "nome": "Diosdado ou Adeodato I",
        "periodo": "615 - 618",
        "foto": "./assets/papas/68_s_adeodato_I.png",
        "descricaoCurta": "68º pontífice, sucessor de Bonifácio IV.",
        "historia": "Diosdado ou Adeodato I foi o 68º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 615 e 618.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bonifácio IV e antes de Bonifácio V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "19.X.615"
            ],
            [
                "Fim do pontificado",
                "8.XI.618"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Diosdado ou Adeodato I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/deusdedit-o-adeodato-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/68_s_adeodato_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 69,
        "nome": "Bonifácio V",
        "periodo": "619 - 625",
        "foto": "./assets/papas/69_bonifacio_V.png",
        "descricaoCurta": "69º pontífice, sucessor de Diosdado ou Adeodato I.",
        "historia": "Bonifácio V foi o 69º pontífice da Igreja Católica. A Santa Sé registra sua origem em Nápoles.\n\nSeu pontificado é situado pela Santa Sé entre 619 e 625.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Diosdado ou Adeodato I e antes de Honório I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "23.XII.619"
            ],
            [
                "Fim do pontificado",
                "23.X.625"
            ],
            [
                "Origem",
                "Nápoles"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bonifácio V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/bonifacio-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/69_bonifacio_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 70,
        "nome": "Honório I",
        "periodo": "625 - 638",
        "foto": "./assets/papas/70_onorio_I.png",
        "descricaoCurta": "70º pontífice, sucessor de Bonifácio V.",
        "historia": "Honório I foi o 70º pontífice da Igreja Católica. A Santa Sé registra sua origem em Campânia.\n\nSeu pontificado é situado pela Santa Sé entre 625 e 638.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bonifácio V e antes de Severino.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "27.X.625"
            ],
            [
                "Fim do pontificado",
                "12.X.638"
            ],
            [
                "Origem",
                "Campânia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Honório I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/onorio-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/70_onorio_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 71,
        "nome": "Severino",
        "periodo": "638/640 - 640",
        "foto": "./assets/papas/71_severino.png",
        "descricaoCurta": "71º pontífice, sucessor de Honório I.",
        "historia": "Severino foi o 71º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 638/640 e 640.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Honório I e antes de João IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... X.638, 28.V.640"
            ],
            [
                "Fim do pontificado",
                "2.VIII.640"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Severino — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/severino.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/71_severino.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 72,
        "nome": "João IV",
        "periodo": "640 - 642",
        "foto": "./assets/papas/72_giovanni_IV.png",
        "descricaoCurta": "72º pontífice, sucessor de Severino.",
        "historia": "João IV foi o 72º pontífice da Igreja Católica. A Santa Sé registra sua origem em Dalmácia.\n\nSeu pontificado é situado pela Santa Sé entre 640 e 642.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Severino e antes de Teodoro I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... VIII, 24.XII.640"
            ],
            [
                "Fim do pontificado",
                "12.X.642"
            ],
            [
                "Origem",
                "Dalmácia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/72_giovanni_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 73,
        "nome": "Teodoro I",
        "periodo": "642 - 649",
        "foto": "./assets/papas/73_teodoro_I.png",
        "descricaoCurta": "73º pontífice, sucessor de João IV.",
        "historia": "Teodoro I foi o 73º pontífice da Igreja Católica. A Santa Sé registra sua origem em Jerusalém.\n\nSeu pontificado é situado pela Santa Sé entre 642 e 649.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João IV e antes de Martinho I, Mártir.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "12.X, 24.XI.642"
            ],
            [
                "Fim do pontificado",
                "14.V.649"
            ],
            [
                "Origem",
                "Jerusalém"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Teodoro I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/teodoro-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/73_teodoro_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 74,
        "nome": "Martinho I, Mártir",
        "periodo": "649 - 655",
        "foto": "./assets/papas/74_martino_I.png",
        "descricaoCurta": "74º pontífice, sucessor de Teodoro I.",
        "historia": "Martinho I, Mártir foi o 74º pontífice da Igreja Católica. A Santa Sé registra sua origem em Todi.\n\nSeu pontificado é situado pela Santa Sé entre 649 e 655.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Teodoro I e antes de Eugênio I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "5.VII.649"
            ],
            [
                "Fim do pontificado",
                "16.IX.655"
            ],
            [
                "Origem",
                "Todi"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Martinho I, Mártir — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/martino-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/74_martino_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 75,
        "nome": "Eugênio I",
        "periodo": "654 - 657",
        "foto": "./assets/papas/75_eugenio_I.png",
        "descricaoCurta": "75º pontífice, sucessor de Martinho I, Mártir.",
        "historia": "Eugênio I foi o 75º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 654 e 657.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Martinho I, Mártir e antes de Vitaliano.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "10.VIII.654"
            ],
            [
                "Fim do pontificado",
                "2.VI.657"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Eugênio I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/eugenio-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/75_eugenio_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 76,
        "nome": "Vitaliano",
        "periodo": "657 - 672",
        "foto": "./assets/papas/76_s_vitaliano.png",
        "descricaoCurta": "76º pontífice, sucessor de Eugênio I.",
        "historia": "Vitaliano foi o 76º pontífice da Igreja Católica. A Santa Sé registra sua origem em Segni (Roma).\n\nSeu pontificado é situado pela Santa Sé entre 657 e 672.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Eugênio I e antes de Adeodato II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "30.VII.657"
            ],
            [
                "Fim do pontificado",
                "27.I.672"
            ],
            [
                "Origem",
                "Segni (Roma)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Vitaliano — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/vitaliano.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/76_s_vitaliano.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 77,
        "nome": "Adeodato II",
        "periodo": "672 - 676",
        "foto": "./assets/papas/77_adeodato_II.png",
        "descricaoCurta": "77º pontífice, sucessor de Vitaliano.",
        "historia": "Adeodato II foi o 77º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 672 e 676.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Vitaliano e antes de Dono.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "11.IV.672"
            ],
            [
                "Fim do pontificado",
                "16.VI.676"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Adeodato II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/adeodato-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/77_adeodato_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 78,
        "nome": "Dono",
        "periodo": "676 - 678",
        "foto": "./assets/papas/78_dono.png",
        "descricaoCurta": "78º pontífice, sucessor de Adeodato II.",
        "historia": "Dono foi o 78º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 676 e 678.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Adeodato II e antes de Agatão.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "2.XI.676"
            ],
            [
                "Fim do pontificado",
                "11.IV.678"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Dono — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/dono.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/78_dono.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 79,
        "nome": "Agatão",
        "periodo": "678 - 681",
        "foto": "./assets/papas/79_s_agatone.png",
        "descricaoCurta": "79º pontífice, sucessor de Dono.",
        "historia": "Agatão foi o 79º pontífice da Igreja Católica. Era de origem siciliana.\n\nSeu pontificado é situado pela Santa Sé entre 678 e 681.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Dono e antes de Leão II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "27.VI.678"
            ],
            [
                "Fim do pontificado",
                "10.I.681"
            ],
            [
                "Origem",
                "Siciliano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Agatão — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/agatone.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/79_s_agatone.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 80,
        "nome": "Leão II",
        "periodo": "681/682 - 683",
        "foto": "./assets/papas/80_s_leone_II.png",
        "descricaoCurta": "80º pontífice, sucessor de Agatão.",
        "historia": "Leão II foi o 80º pontífice da Igreja Católica. Era de origem siciliana.\n\nSeu pontificado é situado pela Santa Sé entre 681/682 e 683.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Agatão e antes de Bento II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... I.681, 17.VIII.682"
            ],
            [
                "Fim do pontificado",
                "3.VII.683"
            ],
            [
                "Origem",
                "Siciliano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/80_s_leone_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 81,
        "nome": "Bento II",
        "periodo": "684 - 685",
        "foto": "./assets/papas/81_s_benedetto_II.png",
        "descricaoCurta": "81º pontífice, sucessor de Leão II.",
        "historia": "Bento II foi o 81º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 684 e 685.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Leão II e antes de João V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "26.VI.684"
            ],
            [
                "Fim do pontificado",
                "8.V.685"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/81_s_benedetto_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 82,
        "nome": "João V",
        "periodo": "685 - 686",
        "foto": "./assets/papas/82_giovanni_V.png",
        "descricaoCurta": "82º pontífice, sucessor de Bento II.",
        "historia": "João V foi o 82º pontífice da Igreja Católica. Era de origem síria.\n\nSeu pontificado é situado pela Santa Sé entre 685 e 686.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento II e antes de Cónon.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "23.VII.685"
            ],
            [
                "Fim do pontificado",
                "2.VIII.686"
            ],
            [
                "Origem",
                "Sírio"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/82_giovanni_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 83,
        "nome": "Cónon",
        "periodo": "686 - 687",
        "foto": "./assets/papas/83_conone.png",
        "descricaoCurta": "83º pontífice, sucessor de João V.",
        "historia": "Cónon foi o 83º pontífice da Igreja Católica. Sua pátria é desconhecida, segundo a ficha da Santa Sé.\n\nSeu pontificado é situado pela Santa Sé entre 686 e 687.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João V e antes de Sérgio I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "23.X.686"
            ],
            [
                "Fim do pontificado",
                "21.IX.687"
            ],
            [
                "Origem",
                "pátria desconhecida"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Cónon — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/conone.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/83_conone.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 84,
        "nome": "Sérgio I",
        "periodo": "687 - 701",
        "foto": "./assets/papas/84_s_sergio_I.png",
        "descricaoCurta": "84º pontífice, sucessor de Cónon.",
        "historia": "Sérgio I foi o 84º pontífice da Igreja Católica. Era de origem síria.\n\nSeu pontificado é situado pela Santa Sé entre 687 e 701.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Cónon e antes de João VI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "15.XII.687"
            ],
            [
                "Fim do pontificado",
                "7.IX.701"
            ],
            [
                "Origem",
                "Sírio"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Sérgio I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/sergio-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/84_s_sergio_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 85,
        "nome": "João VI",
        "periodo": "701 - 705",
        "foto": "./assets/papas/85_giovanni_VI.png",
        "descricaoCurta": "85º pontífice, sucessor de Sérgio I.",
        "historia": "João VI foi o 85º pontífice da Igreja Católica. Era de origem grega.\n\nSeu pontificado é situado pela Santa Sé entre 701 e 705.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Sérgio I e antes de João VII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "30.X.701"
            ],
            [
                "Fim do pontificado",
                "11.I.705"
            ],
            [
                "Origem",
                "Grego"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João VI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-vi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/85_giovanni_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 86,
        "nome": "João VII",
        "periodo": "705 - 707",
        "foto": "./assets/papas/86_giovanni_VII.png",
        "descricaoCurta": "86º pontífice, sucessor de João VI.",
        "historia": "João VII foi o 86º pontífice da Igreja Católica. Era de origem grega.\n\nSeu pontificado é situado pela Santa Sé entre 705 e 707.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João VI e antes de Sisínio.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "1.III.705"
            ],
            [
                "Fim do pontificado",
                "18.X.707"
            ],
            [
                "Origem",
                "Grego"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João VII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-vii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/86_giovanni_VII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 87,
        "nome": "Sisínio",
        "periodo": "708",
        "foto": "./assets/papas/87_sisinnio.png",
        "descricaoCurta": "87º pontífice, sucessor de João VII.",
        "historia": "Sisínio foi o 87º pontífice da Igreja Católica. Era de origem síria.\n\nSeu pontificado transcorreu no ano de 708.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João VII e antes de Constantino.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "15.I.708"
            ],
            [
                "Fim do pontificado",
                "4.II.708"
            ],
            [
                "Origem",
                "Sírio"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Sisínio — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/sisinnio.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/87_sisinnio.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 88,
        "nome": "Constantino",
        "periodo": "708 - 715",
        "foto": "./assets/papas/88_costantino.png",
        "descricaoCurta": "88º pontífice, sucessor de Sisínio.",
        "historia": "Constantino foi o 88º pontífice da Igreja Católica. Era de origem síria.\n\nSeu pontificado é situado pela Santa Sé entre 708 e 715.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Sisínio e antes de Gregório II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "25.III.708"
            ],
            [
                "Fim do pontificado",
                "9.IV.715"
            ],
            [
                "Origem",
                "Sírio"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Constantino — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/costantino.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/88_costantino.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 89,
        "nome": "Gregório II",
        "periodo": "715 - 731",
        "foto": "./assets/papas/89_s_gregorio_II.png",
        "descricaoCurta": "89º pontífice, sucessor de Constantino.",
        "historia": "Gregório II foi o 89º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 715 e 731.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Constantino e antes de Gregório III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "19.V.715"
            ],
            [
                "Fim do pontificado",
                "11.II.731"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/89_s_gregorio_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 90,
        "nome": "Gregório III",
        "periodo": "731 - 741",
        "foto": "./assets/papas/90_s_gregorio_III.png",
        "descricaoCurta": "90º pontífice, sucessor de Gregório II.",
        "historia": "Gregório III foi o 90º pontífice da Igreja Católica. Era de origem síria.\n\nSeu pontificado é situado pela Santa Sé entre 731 e 741.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório II e antes de Zacarias.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "18.III.731"
            ],
            [
                "Fim do pontificado",
                "28.XI.741"
            ],
            [
                "Origem",
                "Sírio"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/90_s_gregorio_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 91,
        "nome": "Zacarias",
        "periodo": "741 - 752",
        "foto": "./assets/papas/91_s_zaccaria.png",
        "descricaoCurta": "91º pontífice, sucessor de Gregório III.",
        "historia": "Zacarias foi o 91º pontífice da Igreja Católica. Era de origem grega.\n\nSeu pontificado é situado pela Santa Sé entre 741 e 752.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório III e antes de Estêvão II (III).",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "3.XII.741"
            ],
            [
                "Fim do pontificado",
                "15.III.752"
            ],
            [
                "Origem",
                "Grego"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Zacarias — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/zaccaria.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/91_s_zaccaria.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 92,
        "nome": "Estêvão II (III)",
        "periodo": "752 - 757",
        "foto": "./assets/papas/92_stefano_II.png",
        "descricaoCurta": "92º pontífice, sucessor de Zacarias.",
        "historia": "Estêvão II (III) foi o 92º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 752 e 757.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Zacarias e antes de Paulo I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "26.III.752"
            ],
            [
                "Fim do pontificado",
                "26.IV.757"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Estêvão II (III) — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/stefano-ii--iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/92_stefano_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 93,
        "nome": "Paulo I",
        "periodo": "757 - 767",
        "foto": "./assets/papas/93_paolo_I.png",
        "descricaoCurta": "93º pontífice, sucessor de Estêvão II (III).",
        "historia": "Paulo I foi o 93º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 757 e 767.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Estêvão II (III) e antes de Estêvão III (IV).",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... IV, 29.V.757"
            ],
            [
                "Fim do pontificado",
                "28.VI.767"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Paulo I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/paolo-i0.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/93_paolo_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 94,
        "nome": "Estêvão III (IV)",
        "periodo": "768 - 772",
        "foto": "./assets/papas/94_stefano_III.png",
        "descricaoCurta": "94º pontífice, sucessor de Paulo I.",
        "historia": "Estêvão III (IV) foi o 94º pontífice da Igreja Católica. Era de origem siciliana.\n\nSeu pontificado é situado pela Santa Sé entre 768 e 772.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Paulo I e antes de Adriano I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "1,7.VIII.768"
            ],
            [
                "Fim do pontificado",
                "24.I.772"
            ],
            [
                "Origem",
                "Siciliano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Estêvão III (IV) — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/stefano-iii--iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/94_stefano_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 95,
        "nome": "Adriano I",
        "periodo": "772 - 795",
        "foto": "./assets/papas/95_adriano_I.png",
        "descricaoCurta": "95º pontífice, sucessor de Estêvão III (IV).",
        "historia": "Adriano I foi o 95º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 772 e 795.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Estêvão III (IV) e antes de Leão III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "1,9.II.772"
            ],
            [
                "Fim do pontificado",
                "25.XII.795"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Adriano I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/adriano-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/95_adriano_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 96,
        "nome": "Leão III",
        "periodo": "795 - 816",
        "foto": "./assets/papas/96_s_leone_III.png",
        "descricaoCurta": "96º pontífice, sucessor de Adriano I.",
        "historia": "Leão III foi o 96º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 795 e 816.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Adriano I e antes de Estêvão IV (V).",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "26,27.XII.795"
            ],
            [
                "Fim do pontificado",
                "12.VI.816"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/96_s_leone_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 97,
        "nome": "Estêvão IV (V)",
        "periodo": "816 - 817",
        "foto": "./assets/papas/97_stefano_IV.png",
        "descricaoCurta": "97º pontífice, sucessor de Leão III.",
        "historia": "Estêvão IV (V) foi o 97º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 816 e 817.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Leão III e antes de Pascoal I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "22.VI.816"
            ],
            [
                "Fim do pontificado",
                "24.I.817"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Estêvão IV (V) — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/stefano-iv--v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/97_stefano_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 98,
        "nome": "Pascoal I",
        "periodo": "817 - 824",
        "foto": "./assets/papas/98_s_pasquale_I.png",
        "descricaoCurta": "98º pontífice, sucessor de Estêvão IV (V).",
        "historia": "Pascoal I foi o 98º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 817 e 824.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Estêvão IV (V) e antes de Eugênio II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "25.I.817"
            ],
            [
                "Fim do pontificado",
                "... II-V.824"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pascoal I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/pasquale-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/98_s_pasquale_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 99,
        "nome": "Eugênio II",
        "periodo": "824 - 827",
        "foto": "./assets/papas/99_eugenio_II.png",
        "descricaoCurta": "99º pontífice, sucessor de Pascoal I.",
        "historia": "Eugênio II foi o 99º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 824 e 827.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Pascoal I e antes de Valentino.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... II-V.824"
            ],
            [
                "Fim do pontificado",
                "...VIII.827"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Eugênio II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/eugenio-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/99_eugenio_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 100,
        "nome": "Valentino",
        "periodo": "827",
        "foto": "./assets/papas/100_valentino.png",
        "descricaoCurta": "100º pontífice, sucessor de Eugênio II.",
        "historia": "Valentino foi o 100º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado transcorreu no ano de 827.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Eugênio II e antes de Gregório IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... VIII.827"
            ],
            [
                "Fim do pontificado",
                "...IX.827"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Valentino — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/valentino.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/100_valentino.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 101,
        "nome": "Gregório IV",
        "periodo": "827/828 - 844",
        "foto": "./assets/papas/101_gregorio_IV.png",
        "descricaoCurta": "101º pontífice, sucessor de Valentino.",
        "historia": "Gregório IV foi o 101º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 827/828 e 844.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Valentino e antes de Sérgio II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... IX.827, 29.III.828"
            ],
            [
                "Fim do pontificado",
                "25.I.844"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/101_gregorio_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 102,
        "nome": "Sérgio II",
        "periodo": "844 - 847",
        "foto": "./assets/papas/102_sergio_II.png",
        "descricaoCurta": "102º pontífice, sucessor de Gregório IV.",
        "historia": "Sérgio II foi o 102º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 844 e 847.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório IV e antes de Leão IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "25.I.844"
            ],
            [
                "Fim do pontificado",
                "27.I.847"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Sérgio II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/sergio-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/102_sergio_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 103,
        "nome": "Leão IV",
        "periodo": "847 - 855",
        "foto": "./assets/papas/103_s_leone_IV.png",
        "descricaoCurta": "103º pontífice, sucessor de Sérgio II.",
        "historia": "Leão IV foi o 103º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 847 e 855.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Sérgio II e antes de Bento III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...I,10.V.847"
            ],
            [
                "Fim do pontificado",
                "17.VII.855"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/103_s_leone_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 104,
        "nome": "Bento III",
        "periodo": "855 - 858",
        "foto": "./assets/papas/104_benedetto_III.png",
        "descricaoCurta": "104º pontífice, sucessor de Leão IV.",
        "historia": "Bento III foi o 104º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 855 e 858.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Leão IV e antes de Nicolau I, o grande.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...VII, 29.IX.855"
            ],
            [
                "Fim do pontificado",
                "17.IV.858"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/104_benedetto_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 105,
        "nome": "Nicolau I, o grande",
        "periodo": "858 - 867",
        "foto": "./assets/papas/105_s_niccolo_I.png",
        "descricaoCurta": "105º pontífice, sucessor de Bento III.",
        "historia": "Nicolau I, o grande foi o 105º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 858 e 867.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento III e antes de Adriano II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "24.IV.858"
            ],
            [
                "Fim do pontificado",
                "13.XI.867"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Nicolau I, o grande — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/niccolo-il-grande.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/105_s_niccolo_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 106,
        "nome": "Adriano II",
        "periodo": "867 - 872",
        "foto": "./assets/papas/106_adriano_II.png",
        "descricaoCurta": "106º pontífice, sucessor de Nicolau I, o grande.",
        "historia": "Adriano II foi o 106º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 867 e 872.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Nicolau I, o grande e antes de João VIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "14.XII.867"
            ],
            [
                "Fim do pontificado",
                "...XI o XII.872"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Adriano II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/adriano-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/106_adriano_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 107,
        "nome": "João VIII",
        "periodo": "872 - 882",
        "foto": "./assets/papas/107_giovanni_VIII.png",
        "descricaoCurta": "107º pontífice, sucessor de Adriano II.",
        "historia": "João VIII foi o 107º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 872 e 882.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Adriano II e antes de Marinho I.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "14.XII.872"
            ],
            [
                "Fim do pontificado",
                "16.XII.882"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João VIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-viii0.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/107_giovanni_VIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 108,
        "nome": "Marinho I",
        "periodo": "882 - 884",
        "foto": "./assets/papas/108_marino_I.png",
        "descricaoCurta": "108º pontífice, sucessor de João VIII.",
        "historia": "Marinho I foi o 108º pontífice da Igreja Católica. A Santa Sé registra sua origem em Gallese (Viterbo).\n\nSeu pontificado é situado pela Santa Sé entre 882 e 884.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João VIII e antes de Adriano III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... XII.882"
            ],
            [
                "Fim do pontificado",
                "15.V.884"
            ],
            [
                "Origem",
                "Gallese (Viterbo)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Marinho I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/marino-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/108_marino_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 109,
        "nome": "Adriano III",
        "periodo": "884 - 885",
        "foto": "./assets/papas/109_s_adriano_III.png",
        "descricaoCurta": "109º pontífice, sucessor de Marinho I.",
        "historia": "Adriano III foi o 109º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 884 e 885.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Marinho I e antes de Estêvão V (VI).",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "17.V.884"
            ],
            [
                "Fim do pontificado",
                "...VIII o IX.885"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Adriano III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/adriano-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/109_s_adriano_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 110,
        "nome": "Estêvão V (VI)",
        "periodo": "885 - 891",
        "foto": "./assets/papas/110_stefano_V.png",
        "descricaoCurta": "110º pontífice, sucessor de Adriano III.",
        "historia": "Estêvão V (VI) foi o 110º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 885 e 891.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Adriano III e antes de Formoso.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...IX.885"
            ],
            [
                "Fim do pontificado",
                "14.IX.891"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Estêvão V (VI) — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/stefano-v--vi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/110_stefano_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 111,
        "nome": "Formoso",
        "periodo": "891 - 896",
        "foto": "./assets/papas/111_formoso.png",
        "descricaoCurta": "111º pontífice, sucessor de Estêvão V (VI).",
        "historia": "Formoso foi o 111º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 891 e 896.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Estêvão V (VI) e antes de Bonifácio VI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "6.X.891"
            ],
            [
                "Fim do pontificado",
                "4.IV.896"
            ],
            [
                "Origem",
                "romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Formoso — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/formoso.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/111_formoso.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 112,
        "nome": "Bonifácio VI",
        "periodo": "896",
        "foto": "./assets/papas/112_bonifacio_VI.png",
        "descricaoCurta": "112º pontífice, sucessor de Formoso.",
        "historia": "Bonifácio VI foi o 112º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado transcorreu no ano de 896.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Formoso e antes de Estêvão VI (VII).",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "11.IV.896"
            ],
            [
                "Fim do pontificado",
                "26.IV.896"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bonifácio VI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/bonifacio-vi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/112_bonifacio_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 113,
        "nome": "Estêvão VI (VII)",
        "periodo": "896 - 897",
        "foto": "./assets/papas/113_stefano_VI.png",
        "descricaoCurta": "113º pontífice, sucessor de Bonifácio VI.",
        "historia": "Estêvão VI (VII) foi o 113º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 896 e 897.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bonifácio VI e antes de Romano.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...V o VI.896"
            ],
            [
                "Fim do pontificado",
                "...VII o VIII.897"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Estêvão VI (VII) — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/stefano-vi--vii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/113_stefano_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 114,
        "nome": "Romano",
        "periodo": "897",
        "foto": "./assets/papas/114_romano.png",
        "descricaoCurta": "114º pontífice, sucessor de Estêvão VI (VII).",
        "historia": "Romano foi o 114º pontífice da Igreja Católica. A Santa Sé registra sua origem em Galese (Viterbo).\n\nSeu pontificado transcorreu no ano de 897.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Estêvão VI (VII) e antes de Teodoro II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...VII o VIII.897"
            ],
            [
                "Fim do pontificado",
                "...XI.897"
            ],
            [
                "Origem",
                "Galese (Viterbo)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Romano — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/romano.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/114_romano.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 115,
        "nome": "Teodoro II",
        "periodo": "897 - 897 ou 898",
        "foto": "./assets/papas/115_teodoro_II.png",
        "descricaoCurta": "115º pontífice, sucessor de Romano.",
        "historia": "Teodoro II foi o 115º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 897 e 897 ou 898.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Romano e antes de João IX.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...XII.897"
            ],
            [
                "Fim do pontificado",
                "...XII.897 o I.898"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Teodoro II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/teodoro-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/115_teodoro_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 116,
        "nome": "João IX",
        "periodo": "897 ou 898 - 900",
        "foto": "./assets/papas/116_giovanni_IX.png",
        "descricaoCurta": "116º pontífice, sucessor de Teodoro II.",
        "historia": "João IX foi o 116º pontífice da Igreja Católica. A Santa Sé registra sua origem em Tivoli.\n\nSeu pontificado é situado pela Santa Sé entre 897 ou 898 e 900.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Teodoro II e antes de Bento IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "..XII.897 o I.898"
            ],
            [
                "Fim do pontificado",
                "...I-V.900"
            ],
            [
                "Origem",
                "Tivoli"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João IX — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-ix.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/116_giovanni_IX.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 117,
        "nome": "Bento IV",
        "periodo": "900 - 903",
        "foto": "./assets/papas/117_benedetto_IV.png",
        "descricaoCurta": "117º pontífice, sucessor de João IX.",
        "historia": "Bento IV foi o 117º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 900 e 903.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João IX e antes de Leão V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...I-V.900"
            ],
            [
                "Fim do pontificado",
                "...VII.903"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/117_benedetto_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 118,
        "nome": "Leão V",
        "periodo": "903",
        "foto": "./assets/papas/118_leone_V.png",
        "descricaoCurta": "118º pontífice, sucessor de Bento IV.",
        "historia": "Leão V foi o 118º pontífice da Igreja Católica. A Santa Sé registra sua origem em Ardea (Roma).\n\nSeu pontificado transcorreu no ano de 903.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento IV e antes de Sérgio III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... VII.903"
            ],
            [
                "Fim do pontificado",
                "... IX.903"
            ],
            [
                "Origem",
                "Ardea (Roma)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/118_leone_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 119,
        "nome": "Sérgio III",
        "periodo": "904 - 911",
        "foto": "./assets/papas/119_sergio_III.png",
        "descricaoCurta": "119º pontífice, sucessor de Leão V.",
        "historia": "Sérgio III foi o 119º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 904 e 911.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Leão V e antes de Anastácio III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "29.I.904"
            ],
            [
                "Fim do pontificado",
                "14.IV.911"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Sérgio III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/sergio-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/119_sergio_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 120,
        "nome": "Anastácio III",
        "periodo": "911 - 913",
        "foto": "./assets/papas/120_anastasio_III.png",
        "descricaoCurta": "120º pontífice, sucessor de Sérgio III.",
        "historia": "Anastácio III foi o 120º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 911 e 913.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Sérgio III e antes de Lando.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... VI ou IX.911"
            ],
            [
                "Fim do pontificado",
                "... VI ou VIII ou X.913"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Anastácio III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/anastasio-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/120_anastasio_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 121,
        "nome": "Lando",
        "periodo": "913 - 914",
        "foto": "./assets/papas/121_landone.png",
        "descricaoCurta": "121º pontífice, sucessor de Anastácio III.",
        "historia": "Lando foi o 121º pontífice da Igreja Católica. A Santa Sé registra sua origem em Sabina.\n\nSeu pontificado é situado pela Santa Sé entre 913 e 914.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Anastácio III e antes de João X.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... VII ou XI.913"
            ],
            [
                "Fim do pontificado",
                "... III.914"
            ],
            [
                "Origem",
                "Sabina"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Lando — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/landone.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/121_landone.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 122,
        "nome": "João X",
        "periodo": "914 - 928",
        "foto": "./assets/papas/122_giovanni_X.png",
        "descricaoCurta": "122º pontífice, sucessor de Lando.",
        "historia": "João X foi o 122º pontífice da Igreja Católica. A Santa Sé registra sua origem em Tossignano (Ímola).\n\nSeu pontificado é situado pela Santa Sé entre 914 e 928.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Lando e antes de Leão VI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... III ou IV.914"
            ],
            [
                "Fim do pontificado",
                "... V ou VI.928"
            ],
            [
                "Origem",
                "Tossignano (Ímola)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João X — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-x.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/122_giovanni_X.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 123,
        "nome": "Leão VI",
        "periodo": "928 - 928 ou 929",
        "foto": "./assets/papas/123_leone_VI.png",
        "descricaoCurta": "123º pontífice, sucessor de João X.",
        "historia": "Leão VI foi o 123º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 928 e 928 ou 929.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João X e antes de Estêvão VII (VIII).",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "... V ou VI.928"
            ],
            [
                "Fim do pontificado",
                "... XII.928 ou I.929"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão VI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-vi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/123_leone_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 124,
        "nome": "Estêvão VII (VIII)",
        "periodo": "929 - 931",
        "foto": "./assets/papas/124_stefano_VII.png",
        "descricaoCurta": "124º pontífice, sucessor de Leão VI.",
        "historia": "Estêvão VII (VIII) foi o 124º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 929 e 931.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Leão VI e antes de João XI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...I.929"
            ],
            [
                "Fim do pontificado",
                "...II.931"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Estêvão VII (VIII) — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/stefano-vii--viii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/124_stefano_VII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 125,
        "nome": "João XI",
        "periodo": "931 - 936",
        "foto": "./assets/papas/125_giovanni_XI.png",
        "descricaoCurta": "125º pontífice, sucessor de Estêvão VII (VIII).",
        "historia": "João XI foi o 125º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 931 e 936.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Estêvão VII (VIII) e antes de Leão VII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...III.931"
            ],
            [
                "Fim do pontificado",
                "...I.936"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João XI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-xi0.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/125_giovanni_XI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 126,
        "nome": "Leão VII",
        "periodo": "936 - 939",
        "foto": "./assets/papas/126_leone_VII.png",
        "descricaoCurta": "126º pontífice, sucessor de João XI.",
        "historia": "Leão VII foi o 126º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 936 e 939.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João XI e antes de Estêvão VIII (IX).",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...I.936"
            ],
            [
                "Fim do pontificado",
                "13.VII.939"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão VII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-vii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/126_leone_VII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 127,
        "nome": "Estêvão VIII (IX)",
        "periodo": "939 - 942",
        "foto": "./assets/papas/127_stefano_VIII.png",
        "descricaoCurta": "127º pontífice, sucessor de Leão VII.",
        "historia": "Estêvão VIII (IX) foi o 127º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 939 e 942.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Leão VII e antes de Marinho II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "14.VII.939"
            ],
            [
                "Fim do pontificado",
                "... X.942"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Estêvão VIII (IX) — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/stefano-viii--ix.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/127_stefano_VIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 128,
        "nome": "Marinho II",
        "periodo": "942 - 946",
        "foto": "./assets/papas/128_marino_II.png",
        "descricaoCurta": "128º pontífice, sucessor de Estêvão VIII (IX).",
        "historia": "Marinho II foi o 128º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 942 e 946.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Estêvão VIII (IX) e antes de Agapito II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "30.X,...XI.942"
            ],
            [
                "Fim do pontificado",
                "...V.946"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Marinho II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/marino-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/128_marino_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 129,
        "nome": "Agapito II",
        "periodo": "946 - 955",
        "foto": "./assets/papas/129_agapito_II.png",
        "descricaoCurta": "129º pontífice, sucessor de Marinho II.",
        "historia": "Agapito II foi o 129º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 946 e 955.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Marinho II e antes de João XII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "10.V.946"
            ],
            [
                "Fim do pontificado",
                "...XII.955"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Agapito II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/agapito-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/129_agapito_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 130,
        "nome": "João XII",
        "periodo": "955 - 964",
        "foto": "./assets/papas/130_giovanni_XII.png",
        "descricaoCurta": "130º pontífice, sucessor de Agapito II.",
        "historia": "João XII foi o 130º pontífice da Igreja Católica. A ficha da Santa Sé o vincula aos condes de Tuscolo.\n\nSeu nome de nascimento é registrado como Ottaviano. Seu pontificado é situado pela Santa Sé entre 955 e 964.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Agapito II e antes de Leão VIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "16.XII.955"
            ],
            [
                "Fim do pontificado",
                "14.V.964"
            ],
            [
                "Nome de nascimento",
                "Ottaviano"
            ],
            [
                "Origem",
                "Condes de Tuscolo"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João XII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-xii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/130_giovanni_XII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 131,
        "nome": "Leão VIII",
        "periodo": "963 - 965",
        "foto": "./assets/papas/131_leone_VIII.png",
        "descricaoCurta": "131º pontífice, sucessor de João XII.",
        "historia": "Leão VIII foi o 131º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 963 e 965.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João XII e antes de Bento V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "4,6.XII.963"
            ],
            [
                "Fim do pontificado",
                "...III.965"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão VIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-viii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/131_leone_VIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 132,
        "nome": "Bento V",
        "periodo": "964 - 964 ou 965",
        "foto": "./assets/papas/132_benedetto_V.png",
        "descricaoCurta": "132º pontífice, sucessor de Leão VIII.",
        "historia": "Bento V foi o 132º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 964 e 964 ou 965.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Leão VIII e antes de João XIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...V.964"
            ],
            [
                "Fim do pontificado",
                "4.VII.964 ou 965"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/132_benedetto_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 133,
        "nome": "João XIII",
        "periodo": "965 - 972",
        "foto": "./assets/papas/133_giovanni_XIII.png",
        "descricaoCurta": "133º pontífice, sucessor de Bento V.",
        "historia": "João XIII foi o 133º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 965 e 972.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento V e antes de Bento VI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "1.X.965"
            ],
            [
                "Fim do pontificado",
                "6.IX.972"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João XIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-xiii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/133_giovanni_XIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 134,
        "nome": "Bento VI",
        "periodo": "972/973 - 974",
        "foto": "./assets/papas/134_benedetto_VI.png",
        "descricaoCurta": "134º pontífice, sucessor de João XIII.",
        "historia": "Bento VI foi o 134º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 972/973 e 974.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João XIII e antes de Bento VII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...XII.972, 19.I.973"
            ],
            [
                "Fim do pontificado",
                "...VII.974"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento VI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-vi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/134_benedetto_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 135,
        "nome": "Bento VII",
        "periodo": "974 - 983",
        "foto": "./assets/papas/135_benedetto_VII.png",
        "descricaoCurta": "135º pontífice, sucessor de Bento VI.",
        "historia": "Bento VII foi o 135º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 974 e 983.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento VI e antes de João XIV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...X.974"
            ],
            [
                "Fim do pontificado",
                "10.VII.983"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento VII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-vii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/135_benedetto_VII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 136,
        "nome": "João XIV",
        "periodo": "983 - 984",
        "foto": "./assets/papas/136_giovanni_XIV.png",
        "descricaoCurta": "136º pontífice, sucessor de Bento VII.",
        "historia": "João XIV foi o 136º pontífice da Igreja Católica. A Santa Sé registra sua origem em Pavia.\n\nSeu nome de nascimento é registrado como Pietro. Seu pontificado é situado pela Santa Sé entre 983 e 984.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento VII e antes de João XV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...XI ou XII.983"
            ],
            [
                "Fim do pontificado",
                "20.VIII.984"
            ],
            [
                "Nome de nascimento",
                "Pietro"
            ],
            [
                "Origem",
                "Pavia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João XIV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-xiv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/136_giovanni_XIV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 137,
        "nome": "João XV",
        "periodo": "985 - 996",
        "foto": "./assets/papas/137_giovanni_XV.png",
        "descricaoCurta": "137º pontífice, sucessor de João XIV.",
        "historia": "João XV foi o 137º pontífice da Igreja Católica. Era de origem romana.\n\nSeu pontificado é situado pela Santa Sé entre 985 e 996.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João XIV e antes de Gregório V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...VIII.985"
            ],
            [
                "Fim do pontificado",
                "...III.996"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João XV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-xv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/137_giovanni_XV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 138,
        "nome": "Gregório V",
        "periodo": "996 - 999",
        "foto": "./assets/papas/138_gregorio_V.png",
        "descricaoCurta": "138º pontífice, sucessor de João XV.",
        "historia": "Gregório V foi o 138º pontífice da Igreja Católica. A Santa Sé registra sua origem em Saxônia.\n\nSeu nome de nascimento é registrado como Brunone dos Duques de Caríntia. Seu pontificado é situado pela Santa Sé entre 996 e 999.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João XV e antes de Silvestre II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "3.V.996"
            ],
            [
                "Fim do pontificado",
                "...II ou III.999"
            ],
            [
                "Nome de nascimento",
                "Brunone dos Duques de Caríntia"
            ],
            [
                "Origem",
                "Saxônia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/138_gregorio_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 139,
        "nome": "Silvestre II",
        "periodo": "999 - 1003",
        "foto": "./assets/papas/139_silvestro_II.png",
        "descricaoCurta": "139º pontífice, sucessor de Gregório V.",
        "historia": "Silvestre II foi o 139º pontífice da Igreja Católica. A Santa Sé registra sua origem em Aquitânia.\n\nSeu nome de nascimento é registrado como Gelberto. Seu pontificado é situado pela Santa Sé entre 999 e 1003.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório V e antes de João XVII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "2.IV.999"
            ],
            [
                "Fim do pontificado",
                "12.V.1003"
            ],
            [
                "Nome de nascimento",
                "Gelberto"
            ],
            [
                "Origem",
                "Aquitânia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Silvestre II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/silvestro-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/139_silvestro_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 140,
        "nome": "João XVII",
        "periodo": "1003",
        "foto": "./assets/papas/140_giovanni_XVII.png",
        "descricaoCurta": "140º pontífice, sucessor de Silvestre II.",
        "historia": "João XVII foi o 140º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Siccone. Seu pontificado transcorreu no ano de 1003.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Silvestre II e antes de João XVIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "16.V.1003"
            ],
            [
                "Fim do pontificado",
                "6.XI.1003"
            ],
            [
                "Nome de nascimento",
                "Siccone"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João XVII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-xvii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/140_giovanni_XVII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 141,
        "nome": "João XVIII",
        "periodo": "1003 - 1009",
        "foto": "./assets/papas/141_giovanni_XVIII.png",
        "descricaoCurta": "141º pontífice, sucessor de João XVII.",
        "historia": "João XVIII foi o 141º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Fasano. Seu pontificado é situado pela Santa Sé entre 1003 e 1009.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João XVII e antes de Sérgio IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "25.XII.1003"
            ],
            [
                "Fim do pontificado",
                "...VI o VII.1009"
            ],
            [
                "Nome de nascimento",
                "Fasano"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João XVIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-xviii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/141_giovanni_XVIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 142,
        "nome": "Sérgio IV",
        "periodo": "1009 - 1012",
        "foto": "./assets/papas/142_sergio_IV.png",
        "descricaoCurta": "142º pontífice, sucessor de João XVIII.",
        "historia": "Sérgio IV foi o 142º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Pietro. Seu pontificado é situado pela Santa Sé entre 1009 e 1012.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João XVIII e antes de Bento VIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "31.VII.1009"
            ],
            [
                "Fim do pontificado",
                "12.V.1012"
            ],
            [
                "Nome de nascimento",
                "Pietro"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Sérgio IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/sergio-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/142_sergio_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 143,
        "nome": "Bento VIII",
        "periodo": "1012 - 1024",
        "foto": "./assets/papas/143_benedetto_VIII.png",
        "descricaoCurta": "143º pontífice, sucessor de Sérgio IV.",
        "historia": "Bento VIII foi o 143º pontífice da Igreja Católica.\n\nSeu nome de nascimento é registrado como Teofilatto dos Condes de Tuscolo. Seu pontificado é situado pela Santa Sé entre 1012 e 1024.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Sérgio IV e antes de João XIX.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "18.V.1012"
            ],
            [
                "Fim do pontificado",
                "9.IV.1024"
            ],
            [
                "Nome de nascimento",
                "Teofilatto dos Condes de Tuscolo"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento VIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-viii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/143_benedetto_VIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 144,
        "nome": "João XIX",
        "periodo": "1024 - 1032",
        "foto": "./assets/papas/144_giovanni_XIX.png",
        "descricaoCurta": "144º pontífice, sucessor de Bento VIII.",
        "historia": "João XIX foi o 144º pontífice da Igreja Católica.\n\nSeu nome de nascimento é registrado como Romano dos Condes de Tuscolo. Seu pontificado é situado pela Santa Sé entre 1024 e 1032.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento VIII e antes de Bento IX.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "19.IV.1024"
            ],
            [
                "Fim do pontificado",
                "...1032"
            ],
            [
                "Nome de nascimento",
                "Romano dos Condes de Tuscolo"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João XIX — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-xix.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/144_giovanni_XIX.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 145,
        "nome": "Bento IX (1º pontificado)",
        "periodo": "1032 - 1044",
        "foto": "./assets/papas/145_benedetto_IX.png",
        "descricaoCurta": "145º pontífice, 1º período de Bento IX.",
        "historia": "Bento IX (1º pontificado) foi o 145º pontífice da Igreja Católica.\n\nSeu nome de nascimento é registrado como Teofilatto dos Condes de Tuscolo. Seu pontificado é situado pela Santa Sé entre 1032 e 1044.\n\nBento IX aparece três vezes na numeração oficial porque exerceu o pontificado em períodos distintos. Esta entrada corresponde ao 1º período.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João XIX e antes de Silvestre III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...VIII ou IX.1032"
            ],
            [
                "Fim do pontificado",
                "...IX.1044"
            ],
            [
                "Nome de nascimento",
                "Teofilatto dos Condes deTuscolo"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento IX — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-ix-1.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/145_benedetto_IX.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 146,
        "nome": "Silvestre III",
        "periodo": "1045",
        "foto": "./assets/papas/146_silvestro_III.png",
        "descricaoCurta": "146º pontífice, sucessor de Bento IX.",
        "historia": "Silvestre III foi o 146º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Giovanni. Seu pontificado transcorreu no ano de 1045.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento IX e antes de Bento IX.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "13 ou 20.I.1045"
            ],
            [
                "Fim do pontificado",
                "...III.1045"
            ],
            [
                "Nome de nascimento",
                "Giovanni"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Silvestre III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/silvestro-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/146_silvestro_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 147,
        "nome": "Bento IX (2º pontificado)",
        "periodo": "1045",
        "foto": "./assets/papas/145_benedetto_IX.png",
        "descricaoCurta": "147º pontífice, 2º período de Bento IX.",
        "historia": "Bento IX (2º pontificado) foi o 147º pontífice da Igreja Católica.\n\nSeu nome de nascimento é registrado como Teofilatto dos Condes de Tuscolo. Seu pontificado transcorreu no ano de 1045.\n\nBento IX aparece três vezes na numeração oficial porque exerceu o pontificado em períodos distintos. Esta entrada corresponde ao 2º período.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Silvestre III e antes de Gregório VI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "10.III.1045"
            ],
            [
                "Fim do pontificado",
                "1.V.1045"
            ],
            [
                "Nome de nascimento",
                "Teofilatto dos Condes de Tuscolo"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento IX — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-ix-2.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/145_benedetto_IX.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 148,
        "nome": "Gregório VI",
        "periodo": "1045 - 1046",
        "foto": "./assets/papas/148_gregorio_VI.png",
        "descricaoCurta": "148º pontífice, sucessor de Bento IX.",
        "historia": "Gregório VI foi o 148º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Giovanni Graziano. Seu pontificado é situado pela Santa Sé entre 1045 e 1046.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento IX e antes de Clemente II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "1.V.1045"
            ],
            [
                "Fim do pontificado",
                "20.XII.1046"
            ],
            [
                "Nome de nascimento",
                "Giovanni Graziano"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório VI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-vi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/148_gregorio_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 149,
        "nome": "Clemente II",
        "periodo": "1046 - 1047",
        "foto": "./assets/papas/149_clemente_II.png",
        "descricaoCurta": "149º pontífice, sucessor de Gregório VI.",
        "historia": "Clemente II foi o 149º pontífice da Igreja Católica. A Santa Sé registra sua origem em Saxônia.\n\nSeu nome de nascimento é registrado como Suitgero dos senhores de Morsleben von Horneburg. Seu pontificado é situado pela Santa Sé entre 1046 e 1047.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório VI e antes de Bento IX.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "24.XII.1046"
            ],
            [
                "Fim do pontificado",
                "9.X.1047"
            ],
            [
                "Nome de nascimento",
                "Suitgero dos senhores de Morsleben von Horneburg"
            ],
            [
                "Origem",
                "Saxônia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/clemente-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/149_clemente_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 150,
        "nome": "Bento IX (3º pontificado)",
        "periodo": "1047 - 1048",
        "foto": "./assets/papas/145_benedetto_IX.png",
        "descricaoCurta": "150º pontífice, 3º período de Bento IX.",
        "historia": "Bento IX (3º pontificado) foi o 150º pontífice da Igreja Católica.\n\nSeu nome de nascimento é registrado como Teofilatto dos Condes de Tuscolo. Seu pontificado é situado pela Santa Sé entre 1047 e 1048.\n\nBento IX aparece três vezes na numeração oficial porque exerceu o pontificado em períodos distintos. Esta entrada corresponde ao 3º período.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente II e antes de Dâmaso II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...X.1047"
            ],
            [
                "Fim do pontificado",
                "... VIII.1048"
            ],
            [
                "Nome de nascimento",
                "Teofilatto dos Condes de Tuscolo"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento IX — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-ix-3.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/145_benedetto_IX.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 151,
        "nome": "Dâmaso II",
        "periodo": "1048",
        "foto": "./assets/papas/151_damaso_II.png",
        "descricaoCurta": "151º pontífice, sucessor de Bento IX.",
        "historia": "Dâmaso II foi o 151º pontífice da Igreja Católica. A Santa Sé registra sua origem em Tirol.\n\nSeu nome de nascimento é registrado como Poppone. Seu pontificado transcorreu no ano de 1048.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento IX e antes de Leão IX.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "17.VII.1048"
            ],
            [
                "Fim do pontificado",
                "9.VIII.1048"
            ],
            [
                "Nome de nascimento",
                "Poppone"
            ],
            [
                "Origem",
                "Tirol"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Dâmaso II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/damaso-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/151_damaso_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 152,
        "nome": "Leão IX",
        "periodo": "1049 - 1054",
        "foto": "./assets/papas/152_s_leone_IX.png",
        "descricaoCurta": "152º pontífice, sucessor de Dâmaso II.",
        "historia": "Leão IX foi o 152º pontífice da Igreja Católica. Era de origem alsaciana.\n\nSeu nome de nascimento é registrado como Brunone dos Condes de Egisheim. Seu pontificado é situado pela Santa Sé entre 1049 e 1054.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Dâmaso II e antes de Vítor II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "2,12.II.1049"
            ],
            [
                "Fim do pontificado",
                "19.IV.1054"
            ],
            [
                "Nome de nascimento",
                "Brunone dos Condes de Egisheim"
            ],
            [
                "Origem",
                "Alsaciano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão IX — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-ix.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/152_s_leone_IX.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 153,
        "nome": "Vítor II",
        "periodo": "1055 - 1057",
        "foto": "./assets/papas/153_vittore_II.png",
        "descricaoCurta": "153º pontífice, sucessor de Leão IX.",
        "historia": "Vítor II foi o 153º pontífice da Igreja Católica. Era de origem suábia.\n\nSeu nome de nascimento é registrado como Gebeardo dos Condes de Dollnstein-Hirschberg. Seu pontificado é situado pela Santa Sé entre 1055 e 1057.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Leão IX e antes de Estêvão IX (X).",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "13.IV.1055"
            ],
            [
                "Fim do pontificado",
                "28.VII.1057"
            ],
            [
                "Nome de nascimento",
                "Gebeardo dos Condes de Dollnstein-Hirschberg"
            ],
            [
                "Origem",
                "Svevo"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Vítor II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/vittore-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/153_vittore_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 154,
        "nome": "Estêvão IX (X)",
        "periodo": "1057 - 1058",
        "foto": "./assets/papas/154_stefano_IX.png",
        "descricaoCurta": "154º pontífice, sucessor de Vítor II.",
        "historia": "Estêvão IX (X) foi o 154º pontífice da Igreja Católica.\n\nSeu nome de nascimento é registrado como Federico dos Duques de Lorena. Seu pontificado é situado pela Santa Sé entre 1057 e 1058.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Vítor II e antes de Nicolau II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "2,3.VIII.1057"
            ],
            [
                "Fim do pontificado",
                "29.III.1058"
            ],
            [
                "Nome de nascimento",
                "Federico dos Duques de Lorena"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Estêvão IX (X) — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/stefano-ix--x.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/154_stefano_IX.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 155,
        "nome": "Nicolau II",
        "periodo": "1058/1059 - 1061",
        "foto": "./assets/papas/155_niccolo_II.png",
        "descricaoCurta": "155º pontífice, sucessor de Estêvão IX (X).",
        "historia": "Nicolau II foi o 155º pontífice da Igreja Católica. A Santa Sé registra sua origem em Borgonha.\n\nSeu nome de nascimento é registrado como Gerardo. Seu pontificado é situado pela Santa Sé entre 1058/1059 e 1061.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Estêvão IX (X) e antes de Alexandre II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "...XII.1058, 24.I.1059"
            ],
            [
                "Fim do pontificado",
                "27.VII.1061"
            ],
            [
                "Nome de nascimento",
                "Gerardo"
            ],
            [
                "Origem",
                "Borgonha"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Nicolau II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/niccolo-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/155_niccolo_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 156,
        "nome": "Alexandre II",
        "periodo": "1061 - 1073",
        "foto": "./assets/papas/156_alessandro_II.png",
        "descricaoCurta": "156º pontífice, sucessor de Nicolau II.",
        "historia": "Alexandre II foi o 156º pontífice da Igreja Católica. A Santa Sé registra sua origem em Baggio (Milão).\n\nSeu nome de nascimento é registrado como Anselmo. Seu pontificado é situado pela Santa Sé entre 1061 e 1073.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Nicolau II e antes de Gregório VII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "30.IX, 1.X.1061"
            ],
            [
                "Fim do pontificado",
                "21.IV.1073"
            ],
            [
                "Nome de nascimento",
                "Anselmo"
            ],
            [
                "Origem",
                "Baggio (Milão)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Alexandre II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/alessandro-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/156_alessandro_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 157,
        "nome": "Gregório VII",
        "periodo": "1073 - 1085",
        "foto": "./assets/papas/157_s_gregorio_VII.png",
        "descricaoCurta": "157º pontífice, sucessor de Alexandre II.",
        "historia": "Gregório VII foi o 157º pontífice da Igreja Católica. A Santa Sé registra sua origem em Tuscia.\n\nSeu nome de nascimento é registrado como Ildebrando. Seu pontificado é situado pela Santa Sé entre 1073 e 1085.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Alexandre II e antes de Vítor III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "22.IV,30.VI.1073"
            ],
            [
                "Fim do pontificado",
                "25.V.1085"
            ],
            [
                "Nome de nascimento",
                "Ildebrando"
            ],
            [
                "Origem",
                "Tuscia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório VII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-vii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/157_s_gregorio_VII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 158,
        "nome": "Vítor III",
        "periodo": "1086/1087 - 1087",
        "foto": "./assets/papas/158_b_vittore_III.png",
        "descricaoCurta": "158º pontífice, sucessor de Gregório VII.",
        "historia": "Vítor III foi o 158º pontífice da Igreja Católica. A Santa Sé registra sua origem em Benevento.\n\nSeu nome de nascimento é registrado como Dauferio (Desiderio). Seu pontificado é situado pela Santa Sé entre 1086/1087 e 1087.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório VII e antes de Urbano II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "24.V.1086, 9.V.1087"
            ],
            [
                "Fim do pontificado",
                "16.IX.1087"
            ],
            [
                "Nome de nascimento",
                "Dauferio (Desiderio)"
            ],
            [
                "Origem",
                "Benevento"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Vítor III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/vittore-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/158_b_vittore_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 159,
        "nome": "Urbano II",
        "periodo": "1088 - 1099",
        "foto": "./assets/papas/159_b_urbano_II.png",
        "descricaoCurta": "159º pontífice, sucessor de Vítor III.",
        "historia": "Urbano II foi o 159º pontífice da Igreja Católica. A Santa Sé registra sua origem em Châtillon-sur-Marne.\n\nSeu nome de nascimento é registrado como Oddone di Lagery. Seu pontificado é situado pela Santa Sé entre 1088 e 1099.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Vítor III e antes de Pascoal II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "12.III.1088"
            ],
            [
                "Fim do pontificado",
                "29.VII.1099"
            ],
            [
                "Nome de nascimento",
                "Oddone di Lagery"
            ],
            [
                "Origem",
                "Châtillon-sur-Marne"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Urbano II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/urbano-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/159_b_urbano_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 160,
        "nome": "Pascoal II",
        "periodo": "1099 - 1118",
        "foto": "./assets/papas/160_pasquale_II.png",
        "descricaoCurta": "160º pontífice, sucessor de Urbano II.",
        "historia": "Pascoal II foi o 160º pontífice da Igreja Católica. A Santa Sé registra sua origem em Bleda ou Galeata.\n\nSeu nome de nascimento é registrado como Raniero. Seu pontificado é situado pela Santa Sé entre 1099 e 1118.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Urbano II e antes de Gelásio II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "13,14.VIII.1099"
            ],
            [
                "Fim do pontificado",
                "21.I.1118"
            ],
            [
                "Nome de nascimento",
                "Raniero"
            ],
            [
                "Origem",
                "Bleda ou Galeata"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pascoal II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/pasquale-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/160_pasquale_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 161,
        "nome": "Gelásio II",
        "periodo": "1118 - 1119",
        "foto": "./assets/papas/161_gelasio_II.png",
        "descricaoCurta": "161º pontífice, sucessor de Pascoal II.",
        "historia": "Gelásio II foi o 161º pontífice da Igreja Católica. A Santa Sé registra sua origem em Gaeta.\n\nSeu nome de nascimento é registrado como Giovanni Caetani. Seu pontificado é situado pela Santa Sé entre 1118 e 1119.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Pascoal II e antes de Calisto II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "24.I,10.III.1118"
            ],
            [
                "Fim do pontificado",
                "28.I.1119"
            ],
            [
                "Nome de nascimento",
                "Giovanni Caetani"
            ],
            [
                "Origem",
                "Gaeta"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gelásio II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gelasio-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/161_gelasio_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 162,
        "nome": "Calisto II",
        "periodo": "1119 - 1124",
        "foto": "./assets/papas/162_callisto_II.png",
        "descricaoCurta": "162º pontífice, sucessor de Gelásio II.",
        "historia": "Calisto II foi o 162º pontífice da Igreja Católica.\n\nSeu nome de nascimento é registrado como Guido di Borgogna. Seu pontificado é situado pela Santa Sé entre 1119 e 1124.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gelásio II e antes de Honório II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "2,9.II.1119"
            ],
            [
                "Fim do pontificado",
                "13 ou 14.XII.1124"
            ],
            [
                "Nome de nascimento",
                "Guido di Borgogna"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Calisto II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/callisto-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/162_callisto_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 163,
        "nome": "Honório II",
        "periodo": "1124 - 1130",
        "foto": "./assets/papas/163_onorio_II.png",
        "descricaoCurta": "163º pontífice, sucessor de Calisto II.",
        "historia": "Honório II foi o 163º pontífice da Igreja Católica. A Santa Sé registra sua origem em Fiagnano (Ímola).\n\nSeu nome de nascimento é registrado como Lamberto Scannabecchi. Seu pontificado é situado pela Santa Sé entre 1124 e 1130.\n\nA cronologia oficial apresenta datas alternativas para este pontificado; essas incertezas foram mantidas nos dados abaixo.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Calisto II e antes de Inocêncio II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "15,21.XII.1124"
            ],
            [
                "Fim do pontificado",
                "13 ou 14.II.1130"
            ],
            [
                "Nome de nascimento",
                "Lamberto Scannabecchi"
            ],
            [
                "Origem",
                "Fiagnano (Ímola)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Honório II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/onorio-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/163_onorio_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 164,
        "nome": "Inocêncio II",
        "periodo": "1130 - 1143",
        "foto": "./assets/papas/164_innocenzo_II.png",
        "descricaoCurta": "164º pontífice, sucessor de Honório II.",
        "historia": "Inocêncio II foi o 164º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Gregorio Papareschi. Seu pontificado é situado pela Santa Sé entre 1130 e 1143.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Honório II e antes de Celestino II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "14,23.II.1130"
            ],
            [
                "Fim do pontificado",
                "24.IX.1143"
            ],
            [
                "Nome de nascimento",
                "Gregorio Papareschi"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/innocenzo-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/164_innocenzo_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 165,
        "nome": "Celestino II",
        "periodo": "1143 - 1144",
        "foto": "./assets/papas/165_celestino_II.png",
        "descricaoCurta": "165º pontífice, sucessor de Inocêncio II.",
        "historia": "Celestino II foi o 165º pontífice da Igreja Católica. A Santa Sé registra sua origem em Città di Castello.\n\nSeu nome de nascimento é registrado como Guido. Seu pontificado é situado pela Santa Sé entre 1143 e 1144.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio II e antes de Lúcio II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "26.IX,3.X.1143"
            ],
            [
                "Fim do pontificado",
                "8.III.1144"
            ],
            [
                "Nome de nascimento",
                "Guido"
            ],
            [
                "Origem",
                "Città di Castello"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Celestino II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/celestino-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/165_celestino_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 166,
        "nome": "Lúcio II",
        "periodo": "1144 - 1145",
        "foto": "./assets/papas/166_lucio_II.png",
        "descricaoCurta": "166º pontífice, sucessor de Celestino II.",
        "historia": "Lúcio II foi o 166º pontífice da Igreja Católica. Era de origem bolonhesa.\n\nSeu nome de nascimento é registrado como Gerardo. Seu pontificado é situado pela Santa Sé entre 1144 e 1145.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Celestino II e antes de Eugênio III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "12.III.1144"
            ],
            [
                "Fim do pontificado",
                "15.II.1145"
            ],
            [
                "Nome de nascimento",
                "Gerardo"
            ],
            [
                "Origem",
                "Bolognese"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Lúcio II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/lucio-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/166_lucio_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 167,
        "nome": "Eugênio III",
        "periodo": "1145 - 1153",
        "foto": "./assets/papas/167_b_eugenio_III.png",
        "descricaoCurta": "167º pontífice, sucessor de Lúcio II.",
        "historia": "Eugênio III foi o 167º pontífice da Igreja Católica. A Santa Sé registra sua origem em Pisa.\n\nSeu nome de nascimento é registrado como Bernardo. Seu pontificado é situado pela Santa Sé entre 1145 e 1153.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Lúcio II e antes de Anastácio IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "15,18.II.1145"
            ],
            [
                "Fim do pontificado",
                "8.VII.1153"
            ],
            [
                "Nome de nascimento",
                "Bernardo"
            ],
            [
                "Origem",
                "Pisa"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Eugênio III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/eugenio-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/167_b_eugenio_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 168,
        "nome": "Anastácio IV",
        "periodo": "1153 - 1154",
        "foto": "./assets/papas/168_anastasio_IV.png",
        "descricaoCurta": "168º pontífice, sucessor de Eugênio III.",
        "historia": "Anastácio IV foi o 168º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Corrado. Seu pontificado é situado pela Santa Sé entre 1153 e 1154.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Eugênio III e antes de Adriano IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "12.VII.1153"
            ],
            [
                "Fim do pontificado",
                "3.XII.1154"
            ],
            [
                "Nome de nascimento",
                "Corrado"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Anastácio IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/anastasio-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/168_anastasio_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 169,
        "nome": "Adriano IV",
        "periodo": "1154 - 1159",
        "foto": "./assets/papas/169_adriano_IV.png",
        "descricaoCurta": "169º pontífice, sucessor de Anastácio IV.",
        "historia": "Adriano IV foi o 169º pontífice da Igreja Católica. A Santa Sé registra sua origem em Abbot's Lagnley (Hertfordshire).\n\nSeu nome de nascimento é registrado como Nicolau Breakspear. Seu pontificado é situado pela Santa Sé entre 1154 e 1159.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Anastácio IV e antes de Alexandre III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "4,5.XII.1154"
            ],
            [
                "Fim do pontificado",
                "1.IX.1159"
            ],
            [
                "Nome de nascimento",
                "Nicolau Breakspear"
            ],
            [
                "Origem",
                "Abbot's Lagnley (Hertfordshire)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Adriano IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/adriano-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/169_adriano_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 170,
        "nome": "Alexandre III",
        "periodo": "1159 - 1181",
        "foto": "./assets/papas/170_alessandro_III.png",
        "descricaoCurta": "170º pontífice, sucessor de Adriano IV.",
        "historia": "Alexandre III foi o 170º pontífice da Igreja Católica. A Santa Sé registra sua origem em Sena.\n\nSeu nome de nascimento é registrado como Rolando Bandinelli. Seu pontificado é situado pela Santa Sé entre 1159 e 1181.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Adriano IV e antes de Lúcio III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "7,20.IX.1159"
            ],
            [
                "Fim do pontificado",
                "30.VIII.1181"
            ],
            [
                "Nome de nascimento",
                "Rolando Bandinelli"
            ],
            [
                "Origem",
                "Sena"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Alexandre III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/alessandro-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/170_alessandro_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 171,
        "nome": "Lúcio III",
        "periodo": "1181 - 1185",
        "foto": "./assets/papas/171_lucio_III.png",
        "descricaoCurta": "171º pontífice, sucessor de Alexandre III.",
        "historia": "Lúcio III foi o 171º pontífice da Igreja Católica. Era de origem luquesa.\n\nSeu nome de nascimento é registrado como Ubaldo Allucingoli. Seu pontificado é situado pela Santa Sé entre 1181 e 1185.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Alexandre III e antes de Urbano III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "1. 6.IX.1181"
            ],
            [
                "Fim do pontificado",
                "25.IX.1185"
            ],
            [
                "Nome de nascimento",
                "Ubaldo Allucingoli"
            ],
            [
                "Origem",
                "Lucchese"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Lúcio III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/lucio-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/171_lucio_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 172,
        "nome": "Urbano III",
        "periodo": "1185 - 1187",
        "foto": "./assets/papas/172_urbano_III.png",
        "descricaoCurta": "172º pontífice, sucessor de Lúcio III.",
        "historia": "Urbano III foi o 172º pontífice da Igreja Católica. Era de origem milanesa.\n\nSeu nome de nascimento é registrado como Umberto Crivelli. Seu pontificado é situado pela Santa Sé entre 1185 e 1187.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Lúcio III e antes de Gregório VIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "25.XI,1.XII.1185"
            ],
            [
                "Fim do pontificado",
                "20.X.1187"
            ],
            [
                "Nome de nascimento",
                "Umberto Crivelli"
            ],
            [
                "Origem",
                "Milanês"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Urbano III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/urbano-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/172_urbano_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 173,
        "nome": "Gregório VIII",
        "periodo": "1187",
        "foto": "./assets/papas/173_gregorio_VIII.png",
        "descricaoCurta": "173º pontífice, sucessor de Urbano III.",
        "historia": "Gregório VIII foi o 173º pontífice da Igreja Católica. A Santa Sé registra sua origem em Benevento.\n\nSeu nome de nascimento é registrado como Alberto di Morra. Seu pontificado transcorreu no ano de 1187.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Urbano III e antes de Clemente III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "21.25.X.1187"
            ],
            [
                "Fim do pontificado",
                "17.XII.1187"
            ],
            [
                "Nome de nascimento",
                "Alberto di Morra"
            ],
            [
                "Origem",
                "Benevento"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório VIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-viii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/173_gregorio_VIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 174,
        "nome": "Clemente III",
        "periodo": "1187 - 1191",
        "foto": "./assets/papas/174_clemente_III.png",
        "descricaoCurta": "174º pontífice, sucessor de Gregório VIII.",
        "historia": "Clemente III foi o 174º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Paulo Scolari. Seu pontificado é situado pela Santa Sé entre 1187 e 1191.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório VIII e antes de Celestino III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "19,20.XII.1187"
            ],
            [
                "Fim do pontificado",
                "...III.1191"
            ],
            [
                "Nome de nascimento",
                "Paulo Scolari"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/clemente-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/174_clemente_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 175,
        "nome": "Celestino III",
        "periodo": "1191 - 1198",
        "foto": "./assets/papas/175_celestino_III.png",
        "descricaoCurta": "175º pontífice, sucessor de Clemente III.",
        "historia": "Celestino III foi o 175º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Giacinto Bobone. Seu pontificado é situado pela Santa Sé entre 1191 e 1198.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente III e antes de Inocêncio III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "10,14.IV.1191"
            ],
            [
                "Fim do pontificado",
                "8.I.1198"
            ],
            [
                "Nome de nascimento",
                "Giacinto Bobone"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Celestino III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/celestino-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/175_celestino_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 176,
        "nome": "Inocêncio III",
        "periodo": "1198 - 1216",
        "foto": "./assets/papas/176_innocenzo_III.png",
        "descricaoCurta": "Acolheu Francisco de Assis e seu projeto de vida evangélica.",
        "historia": "Inocêncio III foi o 176º pontífice da Igreja Católica. A Santa Sé registra sua origem em Gavignano (Roma).\n\nSeu nome de nascimento é registrado como Lotario dos Condes de Segni. Seu pontificado é situado pela Santa Sé entre 1198 e 1216.\n\nEm 1209, Francisco de Assis foi a Roma apresentar-lhe uma nova forma de vida cristã. Inocêncio III acolheu o projeto; a catequese de Bento XVI destaca essa relação como encontro entre a autoridade da Igreja e um novo carisma de renovação.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Celestino III e antes de Honório III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "8.I,22.II.1198"
            ],
            [
                "Fim do pontificado",
                "16.VII.1216"
            ],
            [
                "Nome de nascimento",
                "Lotario dos Condes de Segni"
            ],
            [
                "Origem",
                "Gavignano (Roma)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/innocenzo-iii.html"
            },
            {
                "titulo": "Bento XVI — São Francisco de Assis (27/1/2010)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2010/documents/hf_ben-xvi_aud_20100127.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/176_innocenzo_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 177,
        "nome": "Honório III",
        "periodo": "1216 - 1227",
        "foto": "./assets/papas/177_onorio_III.png",
        "descricaoCurta": "Apoiou a expansão missionária dos primeiros Frades Menores.",
        "historia": "Honório III foi o 177º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Cencio. Seu pontificado é situado pela Santa Sé entre 1216 e 1227.\n\nCom a bula Cum dilecti, de 1218, apoiou os Frades Menores em sua expansão pela Europa e por Marrocos. No desenvolvimento dessa comunidade, confiou sua proteção ao cardeal Ugolino, que depois seria o Papa Gregório IX.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio III e antes de Gregório IX.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "18,24.VII.1216"
            ],
            [
                "Fim do pontificado",
                "18.III.1227"
            ],
            [
                "Nome de nascimento",
                "Cencio"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Honório III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/onorio-iii.html"
            },
            {
                "titulo": "Bento XVI — São Francisco de Assis (27/1/2010)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2010/documents/hf_ben-xvi_aud_20100127.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/177_onorio_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 178,
        "nome": "Gregório IX",
        "periodo": "1227 - 1241",
        "foto": "./assets/papas/178_gregorio_IX.png",
        "descricaoCurta": "Antes de ser papa, foi o cardeal protetor da comunidade franciscana.",
        "historia": "Gregório IX foi o 178º pontífice da Igreja Católica. A Santa Sé registra sua origem em Anagni.\n\nSeu nome de nascimento é registrado como Ugolino dos Condes de Segni. Seu pontificado é situado pela Santa Sé entre 1227 e 1241.\n\nAntes de sua eleição, o cardeal Ugolino recebeu de Honório III a missão de proteger a Ordem dos Frades Menores. Sua trajetória esteve, assim, ligada ao crescimento da comunidade fundada por Francisco de Assis.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Honório III e antes de Celestino IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "19,21.III.1227"
            ],
            [
                "Fim do pontificado",
                "22.VIII.1241"
            ],
            [
                "Nome de nascimento",
                "Ugolino dos Condes de Segni"
            ],
            [
                "Origem",
                "Anagni"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório IX — Santa Sé",
                "url": "https://www.vatican.va/content/gregorius-ix/pt.html"
            },
            {
                "titulo": "Bento XVI — São Francisco de Assis (27/1/2010)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2010/documents/hf_ben-xvi_aud_20100127.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/178_gregorio_IX.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 179,
        "nome": "Celestino IV",
        "periodo": "1241",
        "foto": "./assets/papas/179_celestino_IV.png",
        "descricaoCurta": "179º pontífice, sucessor de Gregório IX.",
        "historia": "Celestino IV foi o 179º pontífice da Igreja Católica. Era de origem milanesa.\n\nSeu nome de nascimento é registrado como Goffredo da Castiglione. Seu pontificado transcorreu no ano de 1241.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório IX e antes de Inocêncio IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "25,28.X.1241"
            ],
            [
                "Fim do pontificado",
                "10.XI.1241"
            ],
            [
                "Nome de nascimento",
                "Goffredo da Castiglione"
            ],
            [
                "Origem",
                "Milanês"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Celestino IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/celestino-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/179_celestino_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 180,
        "nome": "Inocêncio IV",
        "periodo": "1243 - 1254",
        "foto": "./assets/papas/180_innocenzo_IV.png",
        "descricaoCurta": "180º pontífice, sucessor de Celestino IV.",
        "historia": "Inocêncio IV foi o 180º pontífice da Igreja Católica. A Santa Sé registra sua origem em Lavagna (Gênova).\n\nSeu nome de nascimento é registrado como Sinibaldo Fieschi. Seu pontificado é situado pela Santa Sé entre 1243 e 1254.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Celestino IV e antes de Alexandre IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "25,28.VI.1243"
            ],
            [
                "Fim do pontificado",
                "7.XII.1254"
            ],
            [
                "Nome de nascimento",
                "Sinibaldo Fieschi"
            ],
            [
                "Origem",
                "Lavagna (Gênova)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio IV — Santa Sé",
                "url": "https://www.vatican.va/content/innocentius-iv/pt.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/180_innocenzo_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 181,
        "nome": "Alexandre IV",
        "periodo": "1254 - 1261",
        "foto": "./assets/papas/181_alessandro_IV.png",
        "descricaoCurta": "181º pontífice, sucessor de Inocêncio IV.",
        "historia": "Alexandre IV foi o 181º pontífice da Igreja Católica. A Santa Sé registra sua origem em Ienne (Roma).\n\nSeu nome de nascimento é registrado como Rinaldo dei signori di Ienne. Seu pontificado é situado pela Santa Sé entre 1254 e 1261.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio IV e antes de Urbano IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "12,20.XII.1254"
            ],
            [
                "Fim do pontificado",
                "25.V.1261"
            ],
            [
                "Nome de nascimento",
                "Rinaldo dei signori di Ienne"
            ],
            [
                "Origem",
                "Ienne (Roma)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Alexandre IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/alessandro-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/181_alessandro_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 182,
        "nome": "Urbano IV",
        "periodo": "1261 - 1264",
        "foto": "./assets/papas/182_urbano_IV.png",
        "descricaoCurta": "Instituiu a festa de Corpus Christi para a Igreja universal em 1264.",
        "historia": "Urbano IV foi o 182º pontífice da Igreja Católica. A Santa Sé registra sua origem em Troyes.\n\nSeu nome de nascimento é registrado como Jacques Pantaléon. Seu pontificado é situado pela Santa Sé entre 1261 e 1264.\n\nConheceu Juliana de Cornillon quando exercia seu ministério em Liège. Como papa, instituiu Corpus Christi para a Igreja universal pela bula Transiturus de hoc mundo, em 1264, e encarregou Tomás de Aquino de preparar os textos litúrgicos da festa.",
        "doutrina": "A celebração ressalta a presença real de Cristo na Eucaristia e convida os fiéis à adoração e à gratidão pelo sacramento.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "29.VIII,4.IX.1261"
            ],
            [
                "Fim do pontificado",
                "2.X.1264"
            ],
            [
                "Nome de nascimento",
                "Jacques Pantaléon"
            ],
            [
                "Origem",
                "Troyes"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Urbano IV — Santa Sé",
                "url": "https://www.vatican.va/content/urbanus-iv/pt.html"
            },
            {
                "titulo": "Bento XVI — Juliana de Cornillon e Corpus Christi (17/11/2010)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2010/documents/hf_ben-xvi_aud_20101117.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/182_urbano_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 183,
        "nome": "Clemente IV",
        "periodo": "1265 - 1268",
        "foto": "./assets/papas/183_clemente_IV.png",
        "descricaoCurta": "183º pontífice, sucessor de Urbano IV.",
        "historia": "Clemente IV foi o 183º pontífice da Igreja Católica. A Santa Sé registra sua origem em Saint-Gilles (França).\n\nSeu nome de nascimento é registrado como Guy Foulques. Seu pontificado é situado pela Santa Sé entre 1265 e 1268.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Urbano IV e antes de Gregório X.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "5,22.II.1265"
            ],
            [
                "Fim do pontificado",
                "29.XI.1268"
            ],
            [
                "Nome de nascimento",
                "Guy Foulques"
            ],
            [
                "Origem",
                "Saint-Gilles (França)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/clemente-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/183_clemente_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 184,
        "nome": "Gregório X",
        "periodo": "1271/1272 - 1276",
        "foto": "./assets/papas/184_gregorio_X.png",
        "descricaoCurta": "184º pontífice, sucessor de Clemente IV.",
        "historia": "Gregório X foi o 184º pontífice da Igreja Católica. A Santa Sé registra sua origem em Placência.\n\nSeu nome de nascimento é registrado como Tebaldo Visconti. Seu pontificado é situado pela Santa Sé entre 1271/1272 e 1276.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente IV e antes de Inocêncio V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "1.IX.1271,27.III.1272"
            ],
            [
                "Fim do pontificado",
                "10.I.1276"
            ],
            [
                "Nome de nascimento",
                "Tebaldo Visconti"
            ],
            [
                "Origem",
                "Placência"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório X — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-x.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/184_gregorio_X.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 185,
        "nome": "Inocêncio V",
        "periodo": "1276",
        "foto": "./assets/papas/185_innocenzo_V.png",
        "descricaoCurta": "185º pontífice, sucessor de Gregório X.",
        "historia": "Inocêncio V foi o 185º pontífice da Igreja Católica. A Santa Sé registra sua origem em Savoia.\n\nSeu nome de nascimento é registrado como Pierre di Tarentaise. Seu pontificado transcorreu no ano de 1276.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório X e antes de Adriano V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "21.I,22.II.1276"
            ],
            [
                "Fim do pontificado",
                "22.VI.1276"
            ],
            [
                "Nome de nascimento",
                "Pierre di Tarentaise"
            ],
            [
                "Origem",
                "Savoia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/innocenzo-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/185_innocenzo_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 186,
        "nome": "Adriano V",
        "periodo": "1276",
        "foto": "./assets/papas/186_adriano_V.png",
        "descricaoCurta": "186º pontífice, sucessor de Inocêncio V.",
        "historia": "Adriano V foi o 186º pontífice da Igreja Católica. Era de origem genovesa.\n\nSeu nome de nascimento é registrado como Ottobono Fieschi. Seu pontificado transcorreu no ano de 1276.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio V e antes de João XXI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "11.VII.1276"
            ],
            [
                "Fim do pontificado",
                "18.VIII.1276"
            ],
            [
                "Nome de nascimento",
                "Ottobono Fieschi"
            ],
            [
                "Origem",
                "Genovês"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Adriano V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/adriano-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/186_adriano_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 187,
        "nome": "João XXI",
        "periodo": "1276 - 1277",
        "foto": "./assets/papas/187_giovanni_XXI.png",
        "descricaoCurta": "187º pontífice, sucessor de Adriano V.",
        "historia": "João XXI foi o 187º pontífice da Igreja Católica. A Santa Sé registra sua origem em Lisboa.\n\nSeu nome de nascimento é registrado como Pedro Julião ou Pedro Hispano. Seu pontificado é situado pela Santa Sé entre 1276 e 1277.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Adriano V e antes de Nicolau III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "16,20.IX.1276"
            ],
            [
                "Fim do pontificado",
                "20.V.1277"
            ],
            [
                "Nome de nascimento",
                "Pedro Julião ou Pedro Hispano"
            ],
            [
                "Origem",
                "Lisboa"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João XXI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-xxi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/187_giovanni_XXI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 188,
        "nome": "Nicolau III",
        "periodo": "1277 - 1280",
        "foto": "./assets/papas/188_niccolo_III.png",
        "descricaoCurta": "188º pontífice, sucessor de João XXI.",
        "historia": "Nicolau III foi o 188º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Giovanni Gaetano Orsini. Seu pontificado é situado pela Santa Sé entre 1277 e 1280.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João XXI e antes de Martinho IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "25.XI, 26.XII.1277"
            ],
            [
                "Fim do pontificado",
                "22.VIII.1280"
            ],
            [
                "Nome de nascimento",
                "Giovanni Gaetano Orsini"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Nicolau III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/niccolo-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/188_niccolo_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 189,
        "nome": "Martinho IV",
        "periodo": "1281 - 1285",
        "foto": "./assets/papas/189_martino_IV.png",
        "descricaoCurta": "189º pontífice, sucessor de Nicolau III.",
        "historia": "Martinho IV foi o 189º pontífice da Igreja Católica. Era de origem francesa.\n\nSeu nome de nascimento é registrado como Simon de Brie ou de Brion ou de Mainpincien. Seu pontificado é situado pela Santa Sé entre 1281 e 1285.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Nicolau III e antes de Honório IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "22.II,23.III.1281"
            ],
            [
                "Fim do pontificado",
                "29.III.1285"
            ],
            [
                "Nome de nascimento",
                "Simon de Brie ou de Brion ou de Mainpincien"
            ],
            [
                "Origem",
                "Francês"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Martinho IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/martino-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/189_martino_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 190,
        "nome": "Honório IV",
        "periodo": "1285 - 1287",
        "foto": "./assets/papas/190_onorio_IV.png",
        "descricaoCurta": "190º pontífice, sucessor de Martinho IV.",
        "historia": "Honório IV foi o 190º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Giacomo Savelli. Seu pontificado é situado pela Santa Sé entre 1285 e 1287.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Martinho IV e antes de Nicolau IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "2.IV, 20.V.1285"
            ],
            [
                "Fim do pontificado",
                "3.IV.1287"
            ],
            [
                "Nome de nascimento",
                "Giacomo Savelli"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Honório IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/onorio-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/190_onorio_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 191,
        "nome": "Nicolau IV",
        "periodo": "1288 - 1292",
        "foto": "./assets/papas/191_niccolo_IV.png",
        "descricaoCurta": "191º pontífice, sucessor de Honório IV.",
        "historia": "Nicolau IV foi o 191º pontífice da Igreja Católica. A Santa Sé registra sua origem em Lisciano (Ascoli Piceno).\n\nSeu nome de nascimento é registrado como Girolamo. Seu pontificado é situado pela Santa Sé entre 1288 e 1292.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Honório IV e antes de Celestino V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "22.II.1288"
            ],
            [
                "Fim do pontificado",
                "4.IV.1292"
            ],
            [
                "Nome de nascimento",
                "Girolamo"
            ],
            [
                "Origem",
                "Lisciano (Ascoli Piceno)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Nicolau IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/niccolo-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/191_niccolo_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 192,
        "nome": "Celestino V",
        "periodo": "1294",
        "foto": "./assets/papas/192_s_celestino_V.png",
        "descricaoCurta": "192º pontífice, sucessor de Nicolau IV.",
        "historia": "Celestino V foi o 192º pontífice da Igreja Católica. A Santa Sé registra sua origem em Molise.\n\nSeu nome de nascimento é registrado como Pietro del Morrone. Seu pontificado transcorreu no ano de 1294.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Nicolau IV e antes de Bonifácio VIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "5.VII, 29.VIII.1294"
            ],
            [
                "Fim do pontificado",
                "13.XII.1294"
            ],
            [
                "Nome de nascimento",
                "Pietro del Morrone"
            ],
            [
                "Origem",
                "Molise"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Celestino V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/celestino-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/192_s_celestino_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 193,
        "nome": "Bonifácio VIII",
        "periodo": "1294/1295 - 1303",
        "foto": "./assets/papas/193_bonifacio_VIII.png",
        "descricaoCurta": "193º pontífice, sucessor de Celestino V.",
        "historia": "Bonifácio VIII foi o 193º pontífice da Igreja Católica. A Santa Sé registra sua origem em Anagni.\n\nSeu nome de nascimento é registrado como Benedetto Caetani. Seu pontificado é situado pela Santa Sé entre 1294/1295 e 1303.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Celestino V e antes de Bento XI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "24.XII.1294, 23.I.1295"
            ],
            [
                "Fim do pontificado",
                "11.X.1303"
            ],
            [
                "Nome de nascimento",
                "Benedetto Caetani"
            ],
            [
                "Origem",
                "Anagni"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bonifácio VIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/bonifacio-viii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/193_bonifacio_VIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 194,
        "nome": "Bento XI",
        "periodo": "1303 - 1304",
        "foto": "./assets/papas/194_b_benedetto_XI.png",
        "descricaoCurta": "194º pontífice, sucessor de Bonifácio VIII.",
        "historia": "Bento XI foi o 194º pontífice da Igreja Católica. A Santa Sé registra sua origem em Treviso.\n\nSeu nome de nascimento é registrado como Niccolò di Boccasio. Seu pontificado é situado pela Santa Sé entre 1303 e 1304.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bonifácio VIII e antes de Clemente V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "22,27.X.1303"
            ],
            [
                "Fim do pontificado",
                "7.VII.1304"
            ],
            [
                "Nome de nascimento",
                "Niccolò di Boccasio"
            ],
            [
                "Origem",
                "Treviso"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento XI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-xi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/194_b_benedetto_XI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 195,
        "nome": "Clemente V",
        "periodo": "1305 - 1314",
        "foto": "./assets/papas/195_clemente_V.png",
        "descricaoCurta": "195º pontífice, sucessor de Bento XI.",
        "historia": "Clemente V foi o 195º pontífice da Igreja Católica. A Santa Sé registra sua origem em Villandraut (Gironda).\n\nSeu nome de nascimento é registrado como Bertrand de Got. Seu pontificado é situado pela Santa Sé entre 1305 e 1314.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento XI e antes de João XXII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "5.VI, 14.XI.1305"
            ],
            [
                "Fim do pontificado",
                "20.IV.1314"
            ],
            [
                "Nome de nascimento",
                "Bertrand de Got"
            ],
            [
                "Origem",
                "Villandraut (Gironda)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/clemente-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/195_clemente_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 196,
        "nome": "João XXII",
        "periodo": "1316 - 1334",
        "foto": "./assets/papas/196_giovanni_XXII.png",
        "descricaoCurta": "Restabeleceu a celebração de Corpus Christi para toda a Igreja em 1317.",
        "historia": "João XXII foi o 196º pontífice da Igreja Católica. A Santa Sé registra sua origem em Cahors.\n\nSeu nome de nascimento é registrado como Jacques d'Euse. Seu pontificado é situado pela Santa Sé entre 1316 e 1334.\n\nDepois da morte de Urbano IV, Corpus Christi continuou sendo celebrado apenas em algumas regiões. João XXII restabeleceu a festa para toda a Igreja em 1317, etapa recordada por Bento XVI na catequese sobre Juliana de Cornillon.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente V e antes de Bento XII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "7.VIII,5.IX.1316"
            ],
            [
                "Fim do pontificado",
                "4.XII.1334"
            ],
            [
                "Nome de nascimento",
                "Jacques d'Euse"
            ],
            [
                "Origem",
                "Cahors"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João XXII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-xxii.html"
            },
            {
                "titulo": "Bento XVI — História da festa de Corpus Christi (17/11/2010)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2010/documents/hf_ben-xvi_aud_20101117.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/196_giovanni_XXII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 197,
        "nome": "Bento XII",
        "periodo": "1334/1335 - 1342",
        "foto": "./assets/papas/197_benedetto_XII.png",
        "descricaoCurta": "197º pontífice, sucessor de João XXII.",
        "historia": "Bento XII foi o 197º pontífice da Igreja Católica. A Santa Sé registra sua origem em Saverdun (França).\n\nSeu nome de nascimento é registrado como jacques Fournier. Seu pontificado é situado pela Santa Sé entre 1334/1335 e 1342.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de João XXII e antes de Clemente VI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "20.XII.1334, 8.I.1335"
            ],
            [
                "Fim do pontificado",
                "25.IV.1342"
            ],
            [
                "Nome de nascimento",
                "jacques Fournier"
            ],
            [
                "Origem",
                "Saverdun (França)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento XII — Santa Sé",
                "url": "https://www.vatican.va/content/benedictus-xii/pt.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/197_benedetto_XII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 198,
        "nome": "Clemente VI",
        "periodo": "1342 - 1352",
        "foto": "./assets/papas/198_clemente_VI.png",
        "descricaoCurta": "198º pontífice, sucessor de Bento XII.",
        "historia": "Clemente VI foi o 198º pontífice da Igreja Católica. A Santa Sé registra sua origem em Maumont (Limousin).\n\nSeu nome de nascimento é registrado como Pierre Roger. Seu pontificado é situado pela Santa Sé entre 1342 e 1352.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento XII e antes de Inocêncio VI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "7,19.V.1342"
            ],
            [
                "Fim do pontificado",
                "6.XII.1352"
            ],
            [
                "Nome de nascimento",
                "Pierre Roger"
            ],
            [
                "Origem",
                "Maumont (Limousin)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente VI — Santa Sé",
                "url": "https://www.vatican.va/content/clemens-vi/pt.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/198_clemente_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 199,
        "nome": "Inocêncio VI",
        "periodo": "1352 - 1362",
        "foto": "./assets/papas/199_innocenzo_VI.png",
        "descricaoCurta": "199º pontífice, sucessor de Clemente VI.",
        "historia": "Inocêncio VI foi o 199º pontífice da Igreja Católica. A Santa Sé registra sua origem em Monts (Limousin).\n\nSeu nome de nascimento é registrado como Etienne Aubert. Seu pontificado é situado pela Santa Sé entre 1352 e 1362.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente VI e antes de Urbano V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "18,30.XII.1352"
            ],
            [
                "Fim do pontificado",
                "12.IX.1362"
            ],
            [
                "Nome de nascimento",
                "Etienne Aubert"
            ],
            [
                "Origem",
                "Monts (Limousin)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio VI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/innocenzo-vi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/199_innocenzo_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 200,
        "nome": "Urbano V",
        "periodo": "1362 - 1370",
        "foto": "./assets/papas/200_b_urbano_V.png",
        "descricaoCurta": "200º pontífice, sucessor de Inocêncio VI.",
        "historia": "Urbano V foi o 200º pontífice da Igreja Católica. A Santa Sé registra sua origem em Grizac (França).\n\nSeu nome de nascimento é registrado como Guillaume de Grimoard. Seu pontificado é situado pela Santa Sé entre 1362 e 1370.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio VI e antes de Gregório XI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "28.IX,6.XI.1362"
            ],
            [
                "Fim do pontificado",
                "19.XII.1370"
            ],
            [
                "Nome de nascimento",
                "Guillaume de Grimoard"
            ],
            [
                "Origem",
                "Grizac (França)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Urbano V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/urbano-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/200_b_urbano_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 201,
        "nome": "Gregório XI",
        "periodo": "1370/1371 - 1378",
        "foto": "./assets/papas/201_gregorio_XI.png",
        "descricaoCurta": "Seu pontificado marcou o retorno de Avinhão a Roma, incentivado por Catarina de Sena.",
        "historia": "Gregório XI foi o 201º pontífice da Igreja Católica. A Santa Sé registra sua origem em Rosiers d'Egletons (Limousin).\n\nSeu nome de nascimento é registrado como Pierre Roger de Beaufort. Seu pontificado é situado pela Santa Sé entre 1370/1371 e 1378.\n\nQuando residia em Avinhão, recebeu as insistentes exortações de Catarina de Sena para voltar a Roma. Bento XVI recordou a influência da santa nesse retorno, relacionando sua atuação aos esforços de renovação da Igreja e de paz entre os Estados.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Urbano V e antes de Urbano VI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "30.XII.1370, 3.I.1371"
            ],
            [
                "Fim do pontificado",
                "26.III.1378"
            ],
            [
                "Nome de nascimento",
                "Pierre Roger de Beaufort"
            ],
            [
                "Origem",
                "Rosiers d'Egletons (Limousin)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório XI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-xi.html"
            },
            {
                "titulo": "Bento XVI — Santa Catarina de Sena (24/11/2010)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2010/documents/hf_ben-xvi_aud_20101124.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/201_gregorio_XI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 202,
        "nome": "Urbano VI",
        "periodo": "1378 - 1389",
        "foto": "./assets/papas/202_urbano_VI.png",
        "descricaoCurta": "202º pontífice, sucessor de Gregório XI.",
        "historia": "Urbano VI foi o 202º pontífice da Igreja Católica. A Santa Sé registra sua origem em Napoli.\n\nSeu nome de nascimento é registrado como Bartolomeu Prignano. Seu pontificado é situado pela Santa Sé entre 1378 e 1389.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório XI e antes de Bonifácio IX.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "8,18.IV.1378"
            ],
            [
                "Fim do pontificado",
                "15.X.1389"
            ],
            [
                "Nome de nascimento",
                "Bartolomeu Prignano"
            ],
            [
                "Origem",
                "Napoli"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Urbano VI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/urbano-vi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/202_urbano_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 203,
        "nome": "Bonifácio IX",
        "periodo": "1389 - 1404",
        "foto": "./assets/papas/203_bonifacio_IX.png",
        "descricaoCurta": "203º pontífice, sucessor de Urbano VI.",
        "historia": "Bonifácio IX foi o 203º pontífice da Igreja Católica. A Santa Sé registra sua origem em Napoli.\n\nSeu nome de nascimento é registrado como Pietro Tomacelli. Seu pontificado é situado pela Santa Sé entre 1389 e 1404.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Urbano VI e antes de Inocêncio VII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "2,9.XI.1389"
            ],
            [
                "Fim do pontificado",
                "1.X.1404"
            ],
            [
                "Nome de nascimento",
                "Pietro Tomacelli"
            ],
            [
                "Origem",
                "Napoli"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bonifácio IX — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/bonifacio-ix.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/203_bonifacio_IX.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 204,
        "nome": "Inocêncio VII",
        "periodo": "1404 - 1406",
        "foto": "./assets/papas/204_innocenzo_VII.png",
        "descricaoCurta": "204º pontífice, sucessor de Bonifácio IX.",
        "historia": "Inocêncio VII foi o 204º pontífice da Igreja Católica. A Santa Sé registra sua origem em Sulmona.\n\nSeu nome de nascimento é registrado como Cosma Migliorati. Seu pontificado é situado pela Santa Sé entre 1404 e 1406.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bonifácio IX e antes de Gregório XII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "17.X,11.XI.1404"
            ],
            [
                "Fim do pontificado",
                "6.XI.1406"
            ],
            [
                "Nome de nascimento",
                "Cosma Migliorati"
            ],
            [
                "Origem",
                "Sulmona"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio VII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/innocenzo-vii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/204_innocenzo_VII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 205,
        "nome": "Gregório XII",
        "periodo": "1406 - 1415",
        "foto": "./assets/papas/205_gregorio_XII.png",
        "descricaoCurta": "205º pontífice, sucessor de Inocêncio VII.",
        "historia": "Gregório XII foi o 205º pontífice da Igreja Católica. Era de origem veneziana.\n\nSeu nome de nascimento é registrado como Angelo Correr. Seu pontificado é situado pela Santa Sé entre 1406 e 1415.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio VII e antes de Martinho V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "30.XI,19.XII.1406"
            ],
            [
                "Fim do pontificado",
                "4.VII.1415"
            ],
            [
                "Nome de nascimento",
                "Angelo Correr"
            ],
            [
                "Origem",
                "Veneziano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório XII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-xii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/205_gregorio_XII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 206,
        "nome": "Martinho V",
        "periodo": "1417 - 1431",
        "foto": "./assets/papas/206_martino_V.png",
        "descricaoCurta": "206º pontífice, sucessor de Gregório XII.",
        "historia": "Martinho V foi o 206º pontífice da Igreja Católica. A Santa Sé registra sua origem em Genazzano.\n\nSeu nome de nascimento é registrado como Oddone Colonna. Seu pontificado é situado pela Santa Sé entre 1417 e 1431.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório XII e antes de Eugênio IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "11,21.XI.1417"
            ],
            [
                "Fim do pontificado",
                "20.II.1431"
            ],
            [
                "Nome de nascimento",
                "Oddone Colonna"
            ],
            [
                "Origem",
                "Genazzano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Martinho V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/martino-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/206_martino_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 207,
        "nome": "Eugênio IV",
        "periodo": "1431 - 1447",
        "foto": "./assets/papas/207_eugenio_IV.png",
        "descricaoCurta": "207º pontífice, sucessor de Martinho V.",
        "historia": "Eugênio IV foi o 207º pontífice da Igreja Católica. Era de origem veneziana.\n\nSeu nome de nascimento é registrado como Gabriele Condulmer. Seu pontificado é situado pela Santa Sé entre 1431 e 1447.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Martinho V e antes de Nicolau V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "3,11.III.1431"
            ],
            [
                "Fim do pontificado",
                "23.II.1447"
            ],
            [
                "Nome de nascimento",
                "Gabriele Condulmer"
            ],
            [
                "Origem",
                "Veneziano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Eugênio IV — Santa Sé",
                "url": "https://www.vatican.va/content/eugenius-iv/pt.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/207_eugenio_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 208,
        "nome": "Nicolau V",
        "periodo": "1447 - 1455",
        "foto": "./assets/papas/208_niccolo_V.png",
        "descricaoCurta": "208º pontífice, sucessor de Eugênio IV.",
        "historia": "Nicolau V foi o 208º pontífice da Igreja Católica. A Santa Sé registra sua origem em Sarzana.\n\nSeu nome de nascimento é registrado como Tommaso Parentucelli. Seu pontificado é situado pela Santa Sé entre 1447 e 1455.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Eugênio IV e antes de Calisto III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "6,19.III.1447"
            ],
            [
                "Fim do pontificado",
                "24.III.1455"
            ],
            [
                "Nome de nascimento",
                "Tommaso Parentucelli"
            ],
            [
                "Origem",
                "Sarzana"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Nicolau V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/niccolo-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/208_niccolo_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 209,
        "nome": "Calisto III",
        "periodo": "1455 - 1458",
        "foto": "./assets/papas/209_callisto_III.png",
        "descricaoCurta": "209º pontífice, sucessor de Nicolau V.",
        "historia": "Calisto III foi o 209º pontífice da Igreja Católica. A Santa Sé registra sua origem em Torre del Canals, Játiva (Valência).\n\nSeu nome de nascimento é registrado como Alonso de Borja. Seu pontificado é situado pela Santa Sé entre 1455 e 1458.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Nicolau V e antes de Pio II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "8,20.IV.1455"
            ],
            [
                "Fim do pontificado",
                "6.VIII.1458"
            ],
            [
                "Nome de nascimento",
                "Alonso de Borja"
            ],
            [
                "Origem",
                "Torre del Canals, Játiva (Valência)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Calisto III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/callisto-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/209_callisto_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 210,
        "nome": "Pio II",
        "periodo": "1458 - 1464",
        "foto": "./assets/papas/210_pio_II.png",
        "descricaoCurta": "210º pontífice, sucessor de Calisto III.",
        "historia": "Pio II foi o 210º pontífice da Igreja Católica. A Santa Sé registra sua origem em Corsignano (Sena).\n\nSeu nome de nascimento é registrado como Enea Silvio Piccolomini. Seu pontificado é situado pela Santa Sé entre 1458 e 1464.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Calisto III e antes de Paulo II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "19.VIII, 3.IX.1458"
            ],
            [
                "Fim do pontificado",
                "14.VIII.1464"
            ],
            [
                "Nome de nascimento",
                "Enea Silvio Piccolomini"
            ],
            [
                "Origem",
                "Corsignano (Sena)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pio II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/pio-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/210_pio_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 211,
        "nome": "Paulo II",
        "periodo": "1464 - 1471",
        "foto": "./assets/papas/211_paolo_II.png",
        "descricaoCurta": "211º pontífice, sucessor de Pio II.",
        "historia": "Paulo II foi o 211º pontífice da Igreja Católica. Era de origem veneziana.\n\nSeu nome de nascimento é registrado como Pietro Barbo. Seu pontificado é situado pela Santa Sé entre 1464 e 1471.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Pio II e antes de Sisto IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "30.VIII, 16.IX.1464"
            ],
            [
                "Fim do pontificado",
                "26.VII.1471"
            ],
            [
                "Nome de nascimento",
                "Pietro Barbo"
            ],
            [
                "Origem",
                "Veneziano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Paulo II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/paolo-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/211_paolo_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 212,
        "nome": "Sisto IV",
        "periodo": "1471 - 1484",
        "foto": "./assets/papas/212_sisto_IV.png",
        "descricaoCurta": "212º pontífice, sucessor de Paulo II.",
        "historia": "Sisto IV foi o 212º pontífice da Igreja Católica. A Santa Sé registra sua origem em Celle (Savona).\n\nSeu nome de nascimento é registrado como Francesco della Rovere. Seu pontificado é situado pela Santa Sé entre 1471 e 1484.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Paulo II e antes de Inocêncio VIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "1,9,25.VIII.1471"
            ],
            [
                "Fim do pontificado",
                "12.VIII.1484"
            ],
            [
                "Nome de nascimento",
                "Francesco della Rovere"
            ],
            [
                "Origem",
                "Celle (Savona)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Sisto IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/sisto-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/212_sisto_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 213,
        "nome": "Inocêncio VIII",
        "periodo": "1484 - 1492",
        "foto": "./assets/papas/213_innocenzo_VIII.png",
        "descricaoCurta": "213º pontífice, sucessor de Sisto IV.",
        "historia": "Inocêncio VIII foi o 213º pontífice da Igreja Católica. Era de origem genovesa.\n\nSeu nome de nascimento é registrado como Giovanni Battista Cibo. Seu pontificado é situado pela Santa Sé entre 1484 e 1492.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Sisto IV e antes de Alexandre VI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "29.VIII, 12.IX.1484"
            ],
            [
                "Fim do pontificado",
                "25.VII.1492"
            ],
            [
                "Nome de nascimento",
                "Giovanni Battista Cibo"
            ],
            [
                "Origem",
                "Genovês"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio VIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/innocenzo-viii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/213_innocenzo_VIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 214,
        "nome": "Alexandre VI",
        "periodo": "1492 - 1503",
        "foto": "./assets/papas/214_alessandro_VI.png",
        "descricaoCurta": "214º pontífice, sucessor de Inocêncio VIII.",
        "historia": "Alexandre VI foi o 214º pontífice da Igreja Católica. A Santa Sé registra sua origem em Játiva (Valência).\n\nSeu nome de nascimento é registrado como Rodrigo de Borja. Seu pontificado é situado pela Santa Sé entre 1492 e 1503.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio VIII e antes de Pio III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "11,26.VIII.1492"
            ],
            [
                "Fim do pontificado",
                "18.VIII.1503"
            ],
            [
                "Nome de nascimento",
                "Rodrigo de Borja"
            ],
            [
                "Origem",
                "Játiva (Valência)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Alexandre VI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/alessandro-vi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/214_alessandro_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 215,
        "nome": "Pio III",
        "periodo": "1503",
        "foto": "./assets/papas/216_pio_III.png",
        "descricaoCurta": "215º pontífice, sucessor de Alexandre VI.",
        "historia": "Pio III foi o 215º pontífice da Igreja Católica. A Santa Sé registra sua origem em Sena.\n\nSeu nome de nascimento é registrado como Francesco Todeschini-Piccolomini. Seu pontificado transcorreu no ano de 1503.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Alexandre VI e antes de Júlio II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "22.IX, 1,8.X.1503"
            ],
            [
                "Fim do pontificado",
                "18.X.1503"
            ],
            [
                "Nome de nascimento",
                "Francesco Todeschini-Piccolomini"
            ],
            [
                "Origem",
                "Sena"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pio III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/pio-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/216_pio_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 216,
        "nome": "Júlio II",
        "periodo": "1503 - 1513",
        "foto": "./assets/papas/215_giulio_II.png",
        "descricaoCurta": "216º pontífice, sucessor de Pio III.",
        "historia": "Júlio II foi o 216º pontífice da Igreja Católica. A Santa Sé registra sua origem em Albisola (Savona).\n\nSeu nome de nascimento é registrado como Giuliano della Rovere. Seu pontificado é situado pela Santa Sé entre 1503 e 1513.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Pio III e antes de Leão X.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "1,26.XI.1503"
            ],
            [
                "Fim do pontificado",
                "21.II.1513"
            ],
            [
                "Nome de nascimento",
                "Giuliano della Rovere"
            ],
            [
                "Origem",
                "Albisola (Savona)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Júlio II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giulio-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/215_giulio_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 217,
        "nome": "Leão X",
        "periodo": "1513 - 1521",
        "foto": "./assets/papas/217_leone_X.png",
        "descricaoCurta": "217º pontífice, sucessor de Júlio II.",
        "historia": "Leão X foi o 217º pontífice da Igreja Católica. Era de origem florentina.\n\nSeu nome de nascimento é registrado como Giovanni de' Medici. Seu pontificado é situado pela Santa Sé entre 1513 e 1521.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Júlio II e antes de Adriano VI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "11,19.III.1513"
            ],
            [
                "Fim do pontificado",
                "1.XII.1521"
            ],
            [
                "Nome de nascimento",
                "Giovanni de' Medici"
            ],
            [
                "Origem",
                "Florentino"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão X — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-x.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/217_leone_X.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 218,
        "nome": "Adriano VI",
        "periodo": "1522 - 1523",
        "foto": "./assets/papas/218_adriano_VI.png",
        "descricaoCurta": "218º pontífice, sucessor de Leão X.",
        "historia": "Adriano VI foi o 218º pontífice da Igreja Católica. A Santa Sé registra sua origem em Utrecht.\n\nSeu nome de nascimento é registrado como Adriano Florensz. Seu pontificado é situado pela Santa Sé entre 1522 e 1523.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Leão X e antes de Clemente VII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "9.I,31.VIII.1522"
            ],
            [
                "Fim do pontificado",
                "14.IX.1523"
            ],
            [
                "Nome de nascimento",
                "Adriano Florensz"
            ],
            [
                "Origem",
                "Utrecht"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Adriano VI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/adriano-vi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/218_adriano_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 219,
        "nome": "Clemente VII",
        "periodo": "1523 - 1534",
        "foto": "./assets/papas/219_clemente_VII.png",
        "descricaoCurta": "219º pontífice, sucessor de Adriano VI.",
        "historia": "Clemente VII foi o 219º pontífice da Igreja Católica. Era de origem florentina.\n\nSeu nome de nascimento é registrado como Giulio de' Medici. Seu pontificado é situado pela Santa Sé entre 1523 e 1534.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Adriano VI e antes de Paulo III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "19,26.XI.1523"
            ],
            [
                "Fim do pontificado",
                "25.IX.1534"
            ],
            [
                "Nome de nascimento",
                "Giulio de' Medici"
            ],
            [
                "Origem",
                "Florentino"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente VII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/clemente-vii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/219_clemente_VII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 220,
        "nome": "Paulo III",
        "periodo": "1534 - 1549",
        "foto": "./assets/papas/220_paolo_III.png",
        "descricaoCurta": "220º pontífice, sucessor de Clemente VII.",
        "historia": "Paulo III foi o 220º pontífice da Igreja Católica. A Santa Sé registra sua origem em Canino (Viterbo).\n\nSeu nome de nascimento é registrado como Alessandro Farnese. Seu pontificado é situado pela Santa Sé entre 1534 e 1549.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente VII e antes de Júlio III.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "13.X, 3.XI.1534"
            ],
            [
                "Fim do pontificado",
                "10.XI.1549"
            ],
            [
                "Nome de nascimento",
                "Alessandro Farnese"
            ],
            [
                "Origem",
                "Canino (Viterbo)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Paulo III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/paolo-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/220_paolo_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 221,
        "nome": "Júlio III",
        "periodo": "1550 - 1555",
        "foto": "./assets/papas/221_giulio_III.png",
        "descricaoCurta": "221º pontífice, sucessor de Paulo III.",
        "historia": "Júlio III foi o 221º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Giovanni Maria Ciocchi del Monte. Seu pontificado é situado pela Santa Sé entre 1550 e 1555.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Paulo III e antes de Marcelo II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "7,22.II.1550"
            ],
            [
                "Fim do pontificado",
                "23.III.1555"
            ],
            [
                "Nome de nascimento",
                "Giovanni Maria Ciocchi del Monte"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Júlio III — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giulio-iii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/221_giulio_III.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 222,
        "nome": "Marcelo II",
        "periodo": "1555",
        "foto": "./assets/papas/222_marcello_II.png",
        "descricaoCurta": "222º pontífice, sucessor de Júlio III.",
        "historia": "Marcelo II foi o 222º pontífice da Igreja Católica. A Santa Sé registra sua origem em Montefano.\n\nSeu nome de nascimento é registrado como Marcello Cervini. Seu pontificado transcorreu no ano de 1555.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Júlio III e antes de Paulo IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "9,10.IV.1555"
            ],
            [
                "Fim do pontificado",
                "1.V.1555"
            ],
            [
                "Nome de nascimento",
                "Marcello Cervini"
            ],
            [
                "Origem",
                "Montefano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Marcelo II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/marcello-ii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/222_marcello_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 223,
        "nome": "Paulo IV",
        "periodo": "1555 - 1559",
        "foto": "./assets/papas/223_paolo_IV.png",
        "descricaoCurta": "223º pontífice, sucessor de Marcelo II.",
        "historia": "Paulo IV foi o 223º pontífice da Igreja Católica. A Santa Sé registra sua origem em Capriglia (Avellino).\n\nSeu nome de nascimento é registrado como Gian Pietro Carafa. Seu pontificado é situado pela Santa Sé entre 1555 e 1559.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Marcelo II e antes de Pio IV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "23,26.V.1555"
            ],
            [
                "Fim do pontificado",
                "18.VIII.1559"
            ],
            [
                "Nome de nascimento",
                "Gian Pietro Carafa"
            ],
            [
                "Origem",
                "Capriglia (Avellino)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Paulo IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/paolo-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/223_paolo_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 224,
        "nome": "Pio IV",
        "periodo": "1559/1560 - 1565",
        "foto": "./assets/papas/224_pio_IV.png",
        "descricaoCurta": "224º pontífice, sucessor de Paulo IV.",
        "historia": "Pio IV foi o 224º pontífice da Igreja Católica. Era de origem milanesa.\n\nSeu nome de nascimento é registrado como Giovan Angelo Medici. Seu pontificado é situado pela Santa Sé entre 1559/1560 e 1565.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Paulo IV e antes de Pio V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "26.XII.1559, 6.I.1560"
            ],
            [
                "Fim do pontificado",
                "9.XII.1565"
            ],
            [
                "Nome de nascimento",
                "Giovan Angelo Medici"
            ],
            [
                "Origem",
                "Milanês"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pio IV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/pio-iv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/224_pio_IV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 225,
        "nome": "Pio V",
        "periodo": "1566 - 1572",
        "foto": "./assets/papas/225_s_pio_V.png",
        "descricaoCurta": "Seu nome está ligado ao Catecismo Romano e à exposição sistemática da fé.",
        "historia": "Pio V foi o 225º pontífice da Igreja Católica. A Santa Sé registra sua origem em Bosco (Alexandria, Itália).\n\nSeu nome de nascimento é registrado como Antonio (Michele) Ghisleri. Seu pontificado é situado pela Santa Sé entre 1566 e 1572.\n\nO catecismo associado a São Pio V organiza a exposição da fé em quatro partes: Credo, liturgia e sacramentos, mandamentos e oração. A Santa Sé recorda que essa estrutura tradicional foi retomada pelo Catecismo da Igreja Católica.",
        "doutrina": "A organização do catecismo reúne aquilo que a Igreja crê, celebra e vive, juntamente com a oração cristã.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "7,17.I.1566"
            ],
            [
                "Fim do pontificado",
                "1.V.1572"
            ],
            [
                "Nome de nascimento",
                "Antonio (Michele) Ghisleri"
            ],
            [
                "Origem",
                "Bosco (Alexandria, Itália)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pio V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/pio-v.html"
            },
            {
                "titulo": "Congregação para a Doutrina da Fé — Nota para o Ano da Fé (6/1/2012)",
                "url": "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_20120106_nota-anno-fede_po.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/225_s_pio_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 226,
        "nome": "Gregório XIII",
        "periodo": "1572 - 1585",
        "foto": "./assets/papas/226_gregorio_XIII.png",
        "descricaoCurta": "226º pontífice, sucessor de Pio V.",
        "historia": "Gregório XIII foi o 226º pontífice da Igreja Católica. A Santa Sé registra sua origem em Bolonha.\n\nSeu nome de nascimento é registrado como Ugo Boncompagni. Seu pontificado é situado pela Santa Sé entre 1572 e 1585.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Pio V e antes de Sisto V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "13,25.V.1572"
            ],
            [
                "Fim do pontificado",
                "10.IV.1585"
            ],
            [
                "Nome de nascimento",
                "Ugo Boncompagni"
            ],
            [
                "Origem",
                "Bolonha"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório XIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-xiii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/226_gregorio_XIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 227,
        "nome": "Sisto V",
        "periodo": "1585 - 1590",
        "foto": "./assets/papas/227_sisto_V.png",
        "descricaoCurta": "227º pontífice, sucessor de Gregório XIII.",
        "historia": "Sisto V foi o 227º pontífice da Igreja Católica. A Santa Sé registra sua origem em Grottammare (Ascoli Piceno).\n\nSeu nome de nascimento é registrado como Felice Peretti. Seu pontificado é situado pela Santa Sé entre 1585 e 1590.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório XIII e antes de Urbano VII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "24.IV, 1.V.1585"
            ],
            [
                "Fim do pontificado",
                "27.VIII.1590"
            ],
            [
                "Nome de nascimento",
                "Felice Peretti"
            ],
            [
                "Origem",
                "Grottammare (Ascoli Piceno)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Sisto V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/sisto-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/227_sisto_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 228,
        "nome": "Urbano VII",
        "periodo": "1590",
        "foto": "./assets/papas/228_urbano_VII.png",
        "descricaoCurta": "228º pontífice, sucessor de Sisto V.",
        "historia": "Urbano VII foi o 228º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Giambattista Castagna. Seu pontificado transcorreu no ano de 1590.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Sisto V e antes de Gregório XIV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "15.IX.1590"
            ],
            [
                "Fim do pontificado",
                "27.IX.1590"
            ],
            [
                "Nome de nascimento",
                "Giambattista Castagna"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Urbano VII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/urbano-vii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/228_urbano_VII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 229,
        "nome": "Gregório XIV",
        "periodo": "1590 - 1591",
        "foto": "./assets/papas/229_gregorio_XIV.png",
        "descricaoCurta": "229º pontífice, sucessor de Urbano VII.",
        "historia": "Gregório XIV foi o 229º pontífice da Igreja Católica. A Santa Sé registra sua origem em Somma Lombarda.\n\nSeu nome de nascimento é registrado como Niccolò Sfondrati. Seu pontificado é situado pela Santa Sé entre 1590 e 1591.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Urbano VII e antes de Inocêncio IX.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "5,8.XII.1590"
            ],
            [
                "Fim do pontificado",
                "16.X.1591"
            ],
            [
                "Nome de nascimento",
                "Niccolò Sfondrati"
            ],
            [
                "Origem",
                "Somma Lombarda"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório XIV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-xiv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/229_gregorio_XIV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 230,
        "nome": "Inocêncio IX",
        "periodo": "1591",
        "foto": "./assets/papas/230_innocenzo_IX.png",
        "descricaoCurta": "230º pontífice, sucessor de Gregório XIV.",
        "historia": "Inocêncio IX foi o 230º pontífice da Igreja Católica. A Santa Sé registra sua origem em Bolonha.\n\nSeu nome de nascimento é registrado como Giovan Antonio Facchinetti. Seu pontificado transcorreu no ano de 1591.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório XIV e antes de Clemente VIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "29.X,3.XI.1591"
            ],
            [
                "Fim do pontificado",
                "30.XII.1591"
            ],
            [
                "Nome de nascimento",
                "Giovan Antonio Facchinetti"
            ],
            [
                "Origem",
                "Bolonha"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio IX — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/innocenzo-ix.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/230_innocenzo_IX.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 231,
        "nome": "Clemente VIII",
        "periodo": "1592 - 1605",
        "foto": "./assets/papas/231_clemente_VIII.png",
        "descricaoCurta": "231º pontífice, sucessor de Inocêncio IX.",
        "historia": "Clemente VIII foi o 231º pontífice da Igreja Católica. A Santa Sé registra sua origem em Fano.\n\nSeu nome de nascimento é registrado como Ippolito Aldobrandini. Seu pontificado é situado pela Santa Sé entre 1592 e 1605.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio IX e antes de Leão XI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "30.I,9.II.1592"
            ],
            [
                "Fim do pontificado",
                "3.III.1605"
            ],
            [
                "Nome de nascimento",
                "Ippolito Aldobrandini"
            ],
            [
                "Origem",
                "Fano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente VIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/clemente-viii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/231_clemente_VIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 232,
        "nome": "Leão XI",
        "periodo": "1605",
        "foto": "./assets/papas/232_leone_XI.png",
        "descricaoCurta": "232º pontífice, sucessor de Clemente VIII.",
        "historia": "Leão XI foi o 232º pontífice da Igreja Católica. Era de origem florentina.\n\nSeu nome de nascimento é registrado como Alessandro de' Medici. Seu pontificado transcorreu no ano de 1605.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente VIII e antes de Paulo V.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "1,10.IV.1605"
            ],
            [
                "Fim do pontificado",
                "27.IV.1605"
            ],
            [
                "Nome de nascimento",
                "Alessandro de' Medici"
            ],
            [
                "Origem",
                "Florentino"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão XI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-xi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/232_leone_XI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 233,
        "nome": "Paulo V",
        "periodo": "1605 - 1621",
        "foto": "./assets/papas/233_paolo_V.png",
        "descricaoCurta": "233º pontífice, sucessor de Leão XI.",
        "historia": "Paulo V foi o 233º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Camillo Borghese. Seu pontificado é situado pela Santa Sé entre 1605 e 1621.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Leão XI e antes de Gregório XV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "16,29.V.1605"
            ],
            [
                "Fim do pontificado",
                "28.I.1621"
            ],
            [
                "Nome de nascimento",
                "Camillo Borghese"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Paulo V — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/paolo-v.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/233_paolo_V.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 234,
        "nome": "Gregório XV",
        "periodo": "1621 - 1623",
        "foto": "./assets/papas/234_gregorio_XV.png",
        "descricaoCurta": "234º pontífice, sucessor de Paulo V.",
        "historia": "Gregório XV foi o 234º pontífice da Igreja Católica. A Santa Sé registra sua origem em Bolonha.\n\nSeu nome de nascimento é registrado como Alessandro Ludovisi. Seu pontificado é situado pela Santa Sé entre 1621 e 1623.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Paulo V e antes de Urbano VIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "9,14.II.1621"
            ],
            [
                "Fim do pontificado",
                "8.VII.1623"
            ],
            [
                "Nome de nascimento",
                "Alessandro Ludovisi"
            ],
            [
                "Origem",
                "Bolonha"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório XV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/gregorio-xv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/234_gregorio_XV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 235,
        "nome": "Urbano VIII",
        "periodo": "1623 - 1644",
        "foto": "./assets/papas/235_urbano_VIII.png",
        "descricaoCurta": "235º pontífice, sucessor de Gregório XV.",
        "historia": "Urbano VIII foi o 235º pontífice da Igreja Católica. Era de origem florentina.\n\nSeu nome de nascimento é registrado como Maffeo Barberini. Seu pontificado é situado pela Santa Sé entre 1623 e 1644.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Gregório XV e antes de Inocêncio X.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "6.VIII, 29.IX.1623"
            ],
            [
                "Fim do pontificado",
                "29.VII.1644"
            ],
            [
                "Nome de nascimento",
                "Maffeo Barberini"
            ],
            [
                "Origem",
                "Florentino"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Urbano VIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/urbano-viii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/235_urbano_VIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 236,
        "nome": "Inocêncio X",
        "periodo": "1644 - 1655",
        "foto": "./assets/papas/236_innocenzo_X.png",
        "descricaoCurta": "236º pontífice, sucessor de Urbano VIII.",
        "historia": "Inocêncio X foi o 236º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Giovanni Battista Pamphilj. Seu pontificado é situado pela Santa Sé entre 1644 e 1655.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Urbano VIII e antes de Alexandre VII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "15.IX,4.X.1644"
            ],
            [
                "Fim do pontificado",
                "7.I.1655"
            ],
            [
                "Nome de nascimento",
                "Giovanni Battista Pamphilj"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio X — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/innocenzo-x.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/236_innocenzo_X.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 237,
        "nome": "Alexandre VII",
        "periodo": "1655 - 1667",
        "foto": "./assets/papas/237_alessandro_VII.png",
        "descricaoCurta": "237º pontífice, sucessor de Inocêncio X.",
        "historia": "Alexandre VII foi o 237º pontífice da Igreja Católica. A Santa Sé registra sua origem em Sena.\n\nSeu nome de nascimento é registrado como Fabio Chigi. Seu pontificado é situado pela Santa Sé entre 1655 e 1667.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio X e antes de Clemente IX.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "7,18.IV.1655"
            ],
            [
                "Fim do pontificado",
                "22.V.1667"
            ],
            [
                "Nome de nascimento",
                "Fabio Chigi"
            ],
            [
                "Origem",
                "Sena"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Alexandre VII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/alessandro-vii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/237_alessandro_VII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 238,
        "nome": "Clemente IX",
        "periodo": "1667 - 1669",
        "foto": "./assets/papas/238_clemente_IX.png",
        "descricaoCurta": "238º pontífice, sucessor de Alexandre VII.",
        "historia": "Clemente IX foi o 238º pontífice da Igreja Católica. A Santa Sé registra sua origem em Pistoia.\n\nSeu nome de nascimento é registrado como Giulio Rospigliosi. Seu pontificado é situado pela Santa Sé entre 1667 e 1669.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Alexandre VII e antes de Clemente X.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "20,26.VI.1667"
            ],
            [
                "Fim do pontificado",
                "9.XII.1669"
            ],
            [
                "Nome de nascimento",
                "Giulio Rospigliosi"
            ],
            [
                "Origem",
                "Pistoia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente IX — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/clemente-ix.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/238_clemente_IX.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 239,
        "nome": "Clemente X",
        "periodo": "1670 - 1676",
        "foto": "./assets/papas/239_clemente_X.png",
        "descricaoCurta": "239º pontífice, sucessor de Clemente IX.",
        "historia": "Clemente X foi o 239º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Emilio Altieri. Seu pontificado é situado pela Santa Sé entre 1670 e 1676.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente IX e antes de Inocêncio XI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "29.IV,11.V.1670"
            ],
            [
                "Fim do pontificado",
                "22.VII.1676"
            ],
            [
                "Nome de nascimento",
                "Emilio Altieri"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente X — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/clemente-x.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/239_clemente_X.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 240,
        "nome": "Inocêncio XI",
        "periodo": "1676 - 1689",
        "foto": "./assets/papas/240_b_innocenzo_XI.png",
        "descricaoCurta": "240º pontífice, sucessor de Clemente X.",
        "historia": "Inocêncio XI foi o 240º pontífice da Igreja Católica. A Santa Sé registra sua origem em Como.\n\nSeu nome de nascimento é registrado como Benedetto Odescalchi. Seu pontificado é situado pela Santa Sé entre 1676 e 1689.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente X e antes de Alexandre VIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "21.IX, 4.X.1676"
            ],
            [
                "Fim do pontificado",
                "12.VIII.1689"
            ],
            [
                "Nome de nascimento",
                "Benedetto Odescalchi"
            ],
            [
                "Origem",
                "Como"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio XI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/innocenzo-xi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/240_b_innocenzo_XI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 241,
        "nome": "Alexandre VIII",
        "periodo": "1689 - 1691",
        "foto": "./assets/papas/241_alessandro_VIII.png",
        "descricaoCurta": "241º pontífice, sucessor de Inocêncio XI.",
        "historia": "Alexandre VIII foi o 241º pontífice da Igreja Católica. Era de origem veneziana.\n\nSeu nome de nascimento é registrado como Pietro Ottoboni. Seu pontificado é situado pela Santa Sé entre 1689 e 1691.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio XI e antes de Inocêncio XII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "6,16.X.1689"
            ],
            [
                "Fim do pontificado",
                "1.II.1691"
            ],
            [
                "Nome de nascimento",
                "Pietro Ottoboni"
            ],
            [
                "Origem",
                "Veneziano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Alexandre VIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/alessandro-viii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/241_alessandro_VIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 242,
        "nome": "Inocêncio XII",
        "periodo": "1691 - 1700",
        "foto": "./assets/papas/242_innocenzo_XII.png",
        "descricaoCurta": "242º pontífice, sucessor de Alexandre VIII.",
        "historia": "Inocêncio XII foi o 242º pontífice da Igreja Católica. A Santa Sé registra sua origem em Spinazzola.\n\nSeu nome de nascimento é registrado como Antonio Pignatelli. Seu pontificado é situado pela Santa Sé entre 1691 e 1700.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Alexandre VIII e antes de Clemente XI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "12,15.VII.1691"
            ],
            [
                "Fim do pontificado",
                "27.IX.1700"
            ],
            [
                "Nome de nascimento",
                "Antonio Pignatelli"
            ],
            [
                "Origem",
                "Spinazzola"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio XII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/innocenzo-xii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/242_innocenzo_XII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 243,
        "nome": "Clemente XI",
        "periodo": "1700 - 1721",
        "foto": "./assets/papas/243_clemente_XI.png",
        "descricaoCurta": "243º pontífice, sucessor de Inocêncio XII.",
        "historia": "Clemente XI foi o 243º pontífice da Igreja Católica. A Santa Sé registra sua origem em Urbino.\n\nSeu nome de nascimento é registrado como Giovanni Francesco Albani. Seu pontificado é situado pela Santa Sé entre 1700 e 1721.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio XII e antes de Inocêncio XIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "23,30.XI, 8.XII.1700"
            ],
            [
                "Fim do pontificado",
                "19.III.1721"
            ],
            [
                "Nome de nascimento",
                "Giovanni Francesco Albani"
            ],
            [
                "Origem",
                "Urbino"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente XI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/clemente-xi.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/243_clemente_XI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 244,
        "nome": "Inocêncio XIII",
        "periodo": "1721 - 1724",
        "foto": "./assets/papas/244_innocenzo_XIII.png",
        "descricaoCurta": "244º pontífice, sucessor de Clemente XI.",
        "historia": "Inocêncio XIII foi o 244º pontífice da Igreja Católica. A Santa Sé registra sua origem em Poli.\n\nSeu nome de nascimento é registrado como Michelangelo Conti. Seu pontificado é situado pela Santa Sé entre 1721 e 1724.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente XI e antes de Bento XIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "8,18.V.1721"
            ],
            [
                "Fim do pontificado",
                "7.III.1724"
            ],
            [
                "Nome de nascimento",
                "Michelangelo Conti"
            ],
            [
                "Origem",
                "Poli"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Inocêncio XIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/innocenzo-xiii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/244_innocenzo_XIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 245,
        "nome": "Bento XIII",
        "periodo": "1724 - 1730",
        "foto": "./assets/papas/245_benedetto_XIII.png",
        "descricaoCurta": "245º pontífice, sucessor de Inocêncio XIII.",
        "historia": "Bento XIII foi o 245º pontífice da Igreja Católica. A Santa Sé registra sua origem em Gravina.\n\nSeu nome de nascimento é registrado como Pietro Francesco (Vincenzo Maria) Orsini. Seu pontificado é situado pela Santa Sé entre 1724 e 1730.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Inocêncio XIII e antes de Clemente XII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "29.V, 4.VI.1724"
            ],
            [
                "Fim do pontificado",
                "21.II.1730"
            ],
            [
                "Nome de nascimento",
                "Pietro Francesco (Vincenzo Maria) Orsini"
            ],
            [
                "Origem",
                "Gravina"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento XIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-xiii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/245_benedetto_XIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 246,
        "nome": "Clemente XII",
        "periodo": "1730 - 1740",
        "foto": "./assets/papas/246_clemente_XII.png",
        "descricaoCurta": "246º pontífice, sucessor de Bento XIII.",
        "historia": "Clemente XII foi o 246º pontífice da Igreja Católica. Era de origem florentina.\n\nSeu nome de nascimento é registrado como Lorenzo Corsini. Seu pontificado é situado pela Santa Sé entre 1730 e 1740.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento XIII e antes de Bento XIV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "12,16.VII.1730"
            ],
            [
                "Fim do pontificado",
                "6.II.1740"
            ],
            [
                "Nome de nascimento",
                "Lorenzo Corsini"
            ],
            [
                "Origem",
                "Florentino"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente XII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/clemente-xii.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/246_clemente_XII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 247,
        "nome": "Bento XIV",
        "periodo": "1740 - 1758",
        "foto": "./assets/papas/247_benedetto_XIV.png",
        "descricaoCurta": "Proclamou São Leão Magno Doutor da Igreja em 1754.",
        "historia": "Bento XIV foi o 247º pontífice da Igreja Católica. A Santa Sé registra sua origem em Bolonha.\n\nSeu nome de nascimento é registrado como Prospero Lambertini. Seu pontificado é situado pela Santa Sé entre 1740 e 1758.\n\nEm 1754, reconheceu São Leão Magno como Doutor da Igreja. Bento XVI recordou esse ato ao apresentar a contribuição de Leão à teologia e ao exercício do ministério do bispo de Roma.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente XII e antes de Clemente XIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "17,22.VIII.1740"
            ],
            [
                "Fim do pontificado",
                "3.V.1758"
            ],
            [
                "Nome de nascimento",
                "Prospero Lambertini"
            ],
            [
                "Origem",
                "Bolonha"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento XIV — Santa Sé",
                "url": "https://www.vatican.va/content/benedictus-xiv/pt.html"
            },
            {
                "titulo": "Bento XVI — São Leão Magno (5/3/2008)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2008/documents/hf_ben-xvi_aud_20080305.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/247_benedetto_XIV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 248,
        "nome": "Clemente XIII",
        "periodo": "1758 - 1769",
        "foto": "./assets/papas/248_clemente_XIII.png",
        "descricaoCurta": "248º pontífice, sucessor de Bento XIV.",
        "historia": "Clemente XIII foi o 248º pontífice da Igreja Católica. Era de origem veneziana.\n\nSeu nome de nascimento é registrado como Carlo Rezzonico. Seu pontificado é situado pela Santa Sé entre 1758 e 1769.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Bento XIV e antes de Clemente XIV.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "6,16.VII.1758"
            ],
            [
                "Fim do pontificado",
                "2.II.1769"
            ],
            [
                "Nome de nascimento",
                "Carlo Rezzonico"
            ],
            [
                "Origem",
                "Veneziano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente XIII — Santa Sé",
                "url": "https://www.vatican.va/content/clemens-xiii/pt.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/248_clemente_XIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 249,
        "nome": "Clemente XIV",
        "periodo": "1769 - 1774",
        "foto": "./assets/papas/249_clemente_XIV.png",
        "descricaoCurta": "249º pontífice, sucessor de Clemente XIII.",
        "historia": "Clemente XIV foi o 249º pontífice da Igreja Católica. A Santa Sé registra sua origem em Sant'Arcangelo di Romagna.\n\nSeu nome de nascimento é registrado como Giovanni Vincenzo Antonio (Lorenzo) Ganganelli. Seu pontificado é situado pela Santa Sé entre 1769 e 1774.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente XIII e antes de Pio VI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "19,28.V, 4.VI.1769"
            ],
            [
                "Fim do pontificado",
                "22.IX.1774"
            ],
            [
                "Nome de nascimento",
                "Giovanni Vincenzo Antonio (Lorenzo) Ganganelli"
            ],
            [
                "Origem",
                "Sant'Arcangelo di Romagna"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Clemente XIV — Santa Sé",
                "url": "https://www.vatican.va/content/clemens-xiv/pt.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/249_clemente_XIV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 250,
        "nome": "Pio VI",
        "periodo": "1775 - 1799",
        "foto": "./assets/papas/250_pio_VI.png",
        "descricaoCurta": "250º pontífice, sucessor de Clemente XIV.",
        "historia": "Pio VI foi o 250º pontífice da Igreja Católica. A Santa Sé registra sua origem em Cesena.\n\nSeu nome de nascimento é registrado como Giannangelo Braschi. Seu pontificado é situado pela Santa Sé entre 1775 e 1799.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Clemente XIV e antes de Pio VII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "15,22.II.1775"
            ],
            [
                "Fim do pontificado",
                "29.VIII.1799"
            ],
            [
                "Nome de nascimento",
                "Giannangelo Braschi"
            ],
            [
                "Origem",
                "Cesena"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pio VI — Santa Sé",
                "url": "https://www.vatican.va/content/pius-vi/pt.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/250_pio_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 251,
        "nome": "Pio VII",
        "periodo": "1800 - 1823",
        "foto": "./assets/papas/251_pio_VII.png",
        "descricaoCurta": "251º pontífice, sucessor de Pio VI.",
        "historia": "Pio VII foi o 251º pontífice da Igreja Católica. A Santa Sé registra sua origem em Cesena.\n\nSeu nome de nascimento é registrado como Barnaba (Gregorio) Chiaramonti. Seu pontificado é situado pela Santa Sé entre 1800 e 1823.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Pio VI e antes de Leão XII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "14,21.III.1800"
            ],
            [
                "Fim do pontificado",
                "20.VIII.1823"
            ],
            [
                "Nome de nascimento",
                "Barnaba (Gregorio) Chiaramonti"
            ],
            [
                "Origem",
                "Cesena"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pio VII — Santa Sé",
                "url": "https://www.vatican.va/content/pius-vii/pt.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/251_pio_VII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 252,
        "nome": "Leão XII",
        "periodo": "1823 - 1829",
        "foto": "./assets/papas/252_leone_XII.png",
        "descricaoCurta": "252º pontífice, sucessor de Pio VII.",
        "historia": "Leão XII foi o 252º pontífice da Igreja Católica. A Santa Sé registra sua origem em Monticelli di Genga (Fabriano).\n\nSeu nome de nascimento é registrado como Annibale della Genga. Seu pontificado é situado pela Santa Sé entre 1823 e 1829.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Pio VII e antes de Pio VIII.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "28.IX, 5.X.1823"
            ],
            [
                "Fim do pontificado",
                "10.II.1829"
            ],
            [
                "Nome de nascimento",
                "Annibale della Genga"
            ],
            [
                "Origem",
                "Monticelli di Genga (Fabriano)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão XII — Santa Sé",
                "url": "https://www.vatican.va/content/leo-xii/pt.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/252_leone_XII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 253,
        "nome": "Pio VIII",
        "periodo": "1829 - 1830",
        "foto": "./assets/papas/253_pio_VIII.png",
        "descricaoCurta": "253º pontífice, sucessor de Leão XII.",
        "historia": "Pio VIII foi o 253º pontífice da Igreja Católica. A Santa Sé registra sua origem em Cingoli.\n\nSeu nome de nascimento é registrado como Francesco Saverio Castiglioni. Seu pontificado é situado pela Santa Sé entre 1829 e 1830.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Leão XII e antes de Gregório XVI.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "31.III, 5.IV.1829"
            ],
            [
                "Fim do pontificado",
                "30.XI.1830"
            ],
            [
                "Nome de nascimento",
                "Francesco Saverio Castiglioni"
            ],
            [
                "Origem",
                "Cingoli"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pio VIII — Santa Sé",
                "url": "https://www.vatican.va/content/pius-viii/pt.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/253_pio_VIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 254,
        "nome": "Gregório XVI",
        "periodo": "1831 - 1846",
        "foto": "./assets/papas/254_gregorio_XVI.png",
        "descricaoCurta": "254º pontífice, sucessor de Pio VIII.",
        "historia": "Gregório XVI foi o 254º pontífice da Igreja Católica. A Santa Sé registra sua origem em Beluno.\n\nSeu nome de nascimento é registrado como Bartolomeo Alberto (Mauro) Cappellari. Seu pontificado é situado pela Santa Sé entre 1831 e 1846.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Pio VIII e antes de Pio IX.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "2,6.II.1831"
            ],
            [
                "Fim do pontificado",
                "1.VI.1846"
            ],
            [
                "Nome de nascimento",
                "Bartolomeo Alberto (Mauro) Cappellari"
            ],
            [
                "Origem",
                "Beluno"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Gregório XVI — Santa Sé",
                "url": "https://www.vatican.va/content/gregorius-xvi/pt.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/254_gregorio_XVI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 255,
        "nome": "Pio IX",
        "periodo": "1846 - 1878",
        "foto": "./assets/papas/255_b_pio_IX.png",
        "descricaoCurta": "Definiu o dogma da Imaculada Conceição de Maria.",
        "historia": "Pio IX foi o 255º pontífice da Igreja Católica. A Santa Sé registra sua origem em Senigallia.\n\nSeu nome de nascimento é registrado como Giovanni Maria Mastai Ferretti. Seu pontificado é situado pela Santa Sé entre 1846 e 1878.\n\nPio XII, ao tratar da Assunção de Maria, recordou que Pio IX havia definido solenemente o dogma da Imaculada Conceição. O documento explica a relação entre essas duas afirmações da fé católica sobre a Mãe de Jesus.",
        "doutrina": "A Imaculada Conceição se refere à preservação de Maria de toda mancha do pecado original desde sua concepção.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "16,21.VI.1846"
            ],
            [
                "Fim do pontificado",
                "7.II.1878"
            ],
            [
                "Nome de nascimento",
                "Giovanni Maria Mastai Ferretti"
            ],
            [
                "Origem",
                "Senigallia"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pio IX — Santa Sé",
                "url": "https://www.vatican.va/content/pius-ix/pt.html"
            },
            {
                "titulo": "Pio XII — Munificentissimus Deus, §§ 4–6",
                "url": "https://www.vatican.va/content/pius-xii/pt/apost_constitutions/documents/hf_p-xii_apc_19501101_munificentissimus-deus.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/255_b_pio_IX.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 256,
        "nome": "Leão XIII",
        "periodo": "1878 - 1903",
        "foto": "./assets/papas/256_leone_XIII.png",
        "descricaoCurta": "Autor da Rerum novarum, sobre a condição dos trabalhadores.",
        "historia": "Leão XIII foi o 256º pontífice da Igreja Católica. A Santa Sé registra sua origem em Carpineto Romano.\n\nSeu nome de nascimento é registrado como Vincenzo Gioacchino Pecci. Seu pontificado é situado pela Santa Sé entre 1878 e 1903.\n\nPublicou a encíclica Rerum novarum em 15 de maio de 1891. O documento examina os conflitos entre capital e trabalho diante das transformações industriais e da concentração de riqueza, discutindo os direitos e deveres de trabalhadores, patrões e autoridades.",
        "doutrina": "A Rerum novarum aborda a justiça nas relações de trabalho, a proteção dos operários, a propriedade e o direito de associação, articulando esses temas com a caridade cristã.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "20.II, 3.III.1878"
            ],
            [
                "Fim do pontificado",
                "20.VII.1903"
            ],
            [
                "Nome de nascimento",
                "Vincenzo Gioacchino Pecci"
            ],
            [
                "Origem",
                "Carpineto Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão XIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-xiii.html"
            },
            {
                "titulo": "Leão XIII — Rerum novarum (15/5/1891)",
                "url": "https://www.vatican.va/content/leo-xiii/pt/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/256_leone_XIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 257,
        "nome": "Pio X",
        "periodo": "1903 - 1914",
        "foto": "./assets/papas/257_pio_X.png",
        "descricaoCurta": "Promoveu a catequese, a formação do clero e a comunhão frequente.",
        "historia": "Pio X foi o 257º pontífice da Igreja Católica. A Santa Sé registra sua origem em Riese (Treviso).\n\nSeu nome de nascimento é registrado como Giuseppe Melchiorre Sarto. Seu pontificado é situado pela Santa Sé entre 1903 e 1914.\n\nAntes da eleição, foi pároco, bispo de Mântua e patriarca de Veneza. Como papa, reorganizou a Cúria e iniciou a preparação do Código de Direito Canônico, depois promulgado por Bento XV. Também cuidou da formação dos sacerdotes e do ensino da fé.\n\nSeu catecismo difundiu-se para além de Roma. Incentivou a participação na liturgia, a comunhão frequente e a primeira comunhão das crianças na idade do uso da razão.",
        "doutrina": "A renovação da vida cristã em Cristo orientou sua ação pastoral. Sua atenção à catequese e aos sacramentos procurava aproximar a doutrina da vida cotidiana dos fiéis.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "4,9.VIII.1903"
            ],
            [
                "Fim do pontificado",
                "20.VIII.1914"
            ],
            [
                "Nome de nascimento",
                "Giuseppe Melchiorre Sarto"
            ],
            [
                "Origem",
                "Riese (Treviso)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pio X — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/pio-x.html"
            },
            {
                "titulo": "Bento XVI — São Pio X (18/8/2010)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/audiences/2010/documents/hf_ben-xvi_aud_20100818.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/257_pio_X.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 258,
        "nome": "Bento XV",
        "periodo": "1914 - 1922",
        "foto": "./assets/papas/258_benedetto_XV.png",
        "descricaoCurta": "Trabalhou pela paz durante a Primeira Guerra Mundial e pela assistência às vítimas.",
        "historia": "Bento XV foi o 258º pontífice da Igreja Católica.\n\nSeu nome de nascimento é registrado como Giacomo della Chiesa. Seu pontificado é situado pela Santa Sé entre 1914 e 1922.\n\nGiacomo della Chiesa nasceu em Gênova e serviu na diplomacia da Santa Sé antes de ser arcebispo de Bolonha. Foi eleito papa no início da Primeira Guerra Mundial. Reiterou apelos pela paz e organizou ajuda a feridos, prisioneiros e crianças.\n\nEm 1917, promulgou o Código de Direito Canônico e criou organismos voltados às Igrejas orientais. Depois da guerra, continuou os esforços humanitários e apoiou a formação de clero local nas missões.",
        "doutrina": "Sua atuação destacou a reconciliação entre os povos, a caridade com os atingidos pela guerra e a dimensão universal da missão cristã.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "3,6.IX.1914"
            ],
            [
                "Fim do pontificado",
                "22.I.1922"
            ],
            [
                "Nome de nascimento",
                "Giacomo della Chiesa"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento XV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-xv.html"
            },
            {
                "titulo": "Santa Sé — Biografia de Bento XV (em italiano)",
                "url": "https://www.vatican.va/content/benedict-xv/it/biography/documents/hf_ben-xv_bio_20060214_biography.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/258_benedetto_XV.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 259,
        "nome": "Pio XI",
        "periodo": "1922 - 1939",
        "foto": "./assets/papas/259_pio_XI.png",
        "descricaoCurta": "Instituiu a festa de Cristo Rei com a encíclica Quas primas.",
        "historia": "Pio XI foi o 259º pontífice da Igreja Católica. A Santa Sé registra sua origem em Désio (Milão).\n\nSeu nome de nascimento é registrado como Achille Ratti. Seu pontificado é situado pela Santa Sé entre 1922 e 1939.\n\nEm 1925, publicou a encíclica Quas primas, na qual estabeleceu a festa de Cristo Rei. O documento relaciona o reconhecimento da realeza de Cristo com a vida pessoal e social e apresenta a paz como fruto de sua presença e de seu governo.",
        "doutrina": "A Quas primas ensina que a realeza de Cristo é sobretudo espiritual e chama os cristãos a conformar sua vida ao Evangelho.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "6,12.II.1922"
            ],
            [
                "Fim do pontificado",
                "10.II.1939"
            ],
            [
                "Nome de nascimento",
                "Achille Ratti"
            ],
            [
                "Origem",
                "Désio (Milão)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pio XI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/pio-xi.html"
            },
            {
                "titulo": "Pio XI — Quas primas (11/12/1925, em inglês)",
                "url": "https://www.vatican.va/content/pius-xi/en/encyclicals/documents/hf_p-xi_enc_11121925_quas-primas.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/259_pio_XI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 260,
        "nome": "Pio XII",
        "periodo": "1939 - 1958",
        "foto": "./assets/papas/260_pio_XII.png",
        "descricaoCurta": "Definiu o dogma da Assunção de Maria em 1950.",
        "historia": "Pio XII foi o 260º pontífice da Igreja Católica. Era de origem romana.\n\nSeu nome de nascimento é registrado como Eugenio Pacelli. Seu pontificado é situado pela Santa Sé entre 1939 e 1958.\n\nEm 1º de novembro de 1950, promulgou a constituição apostólica Munificentissimus Deus. O documento apresenta a consulta aos bispos e os testemunhos da tradição que precederam a definição da Assunção de Maria.",
        "doutrina": "Definiu como dogma que Maria, concluído o curso de sua vida terrestre, foi elevada em corpo e alma à glória celeste.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "2,12.III.1939"
            ],
            [
                "Fim do pontificado",
                "9.X.1958"
            ],
            [
                "Nome de nascimento",
                "Eugenio Pacelli"
            ],
            [
                "Origem",
                "Romano"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Pio XII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/pio-xii.html"
            },
            {
                "titulo": "Pio XII — Munificentissimus Deus (1/11/1950)",
                "url": "https://www.vatican.va/content/pius-xii/pt/apost_constitutions/documents/hf_p-xii_apc_19501101_munificentissimus-deus.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/260_pio_XII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 261,
        "nome": "João XXIII",
        "periodo": "1958 - 1963",
        "foto": "./assets/papas/261_s_giovanni_XXIII.png",
        "descricaoCurta": "Convocou o Concílio Vaticano II e dedicou a Pacem in terris à paz.",
        "historia": "João XXIII foi o 261º pontífice da Igreja Católica. A Santa Sé registra sua origem em Sotto il Monte (Bergamo).\n\nSeu nome de nascimento é registrado como Angelo Giuseppe Roncalli. Seu pontificado é situado pela Santa Sé entre 1958 e 1963.\n\nAngelo Giuseppe Roncalli exerceu funções diplomáticas na Bulgária, na Turquia, na Grécia e na França antes de ser patriarca de Veneza. Eleito em 1958, anunciou em janeiro de 1959 a intenção de convocar um concílio ecumênico.\n\nAbriu o Concílio Vaticano II em 11 de outubro de 1962. Seu pontificado também se destacou pelas visitas aos fiéis, pelo diálogo ecumênico e pelos esforços de paz, incluindo a atuação durante a crise dos mísseis em Cuba.",
        "doutrina": "A encíclica Pacem in terris, publicada em 1963, expressa a atenção de seu pontificado à paz. A renovação pastoral e o diálogo marcaram a convocação do Vaticano II.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "28.X, 4.XI.1958"
            ],
            [
                "Fim do pontificado",
                "3.VI.1963"
            ],
            [
                "Nome de nascimento",
                "Angelo Giuseppe Roncalli"
            ],
            [
                "Origem",
                "Sotto il Monte (Bergamo)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João XXIII — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-xxiii.html"
            },
            {
                "titulo": "Santa Sé — Biografia de João XXIII",
                "url": "https://www.vatican.va/content/john-xxiii/pt/biography/documents/hf_j-xxiii_bio_20190722_biografia.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/261_s_giovanni_XXIII.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 262,
        "nome": "Paulo VI",
        "periodo": "1963 - 1978",
        "foto": "./assets/papas/262_paolo_VI.png",
        "descricaoCurta": "Concluiu o Vaticano II e orientou sua aplicação na vida da Igreja.",
        "historia": "Paulo VI foi o 262º pontífice da Igreja Católica. A Santa Sé registra sua origem em Concesio (Brescia).\n\nSeu nome de nascimento é registrado como Giovanni Battista Montini. Seu pontificado é situado pela Santa Sé entre 1963 e 1978.\n\nGiovanni Battista Montini trabalhou na Secretaria de Estado e foi arcebispo de Milão. Eleito em 1963, retomou o Vaticano II e conduziu seus trabalhos até o encerramento em dezembro de 1965.\n\nInstituiu o Sínodo dos Bispos, promoveu reformas na Cúria e na liturgia e realizou viagens aos cinco continentes. Foi à Terra Santa e, em Nova York, dirigiu-se à Assembleia Geral das Nações Unidas.",
        "doutrina": "Entre seus documentos estão Ecclesiam suam, sobre o diálogo; Populorum progressio, sobre o desenvolvimento dos povos; Humanae vitae, sobre a transmissão da vida; e Evangelii nuntiandi, sobre a evangelização.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "21,30.VI.1963"
            ],
            [
                "Fim do pontificado",
                "6.VIII.1978"
            ],
            [
                "Nome de nascimento",
                "Giovanni Battista Montini"
            ],
            [
                "Origem",
                "Concesio (Brescia)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Paulo VI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/paolo-vi.html"
            },
            {
                "titulo": "Santa Sé — Biografia de Paulo VI",
                "url": "https://www.vatican.va/content/paul-vi/pt/biografia/documents/hf_p-vi_spe_20190722_biografia.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/262_paolo_VI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 263,
        "nome": "João Paulo I",
        "periodo": "1978",
        "foto": "./assets/papas/263_giovanni_paolo_I.png",
        "descricaoCurta": "263º pontífice, sucessor de Paulo VI.",
        "historia": "João Paulo I foi o 263º pontífice da Igreja Católica. A Santa Sé registra sua origem em Forno di Canale (Beluno).\n\nSeu nome de nascimento é registrado como Albino Luciani. Seu pontificado transcorreu no ano de 1978.",
        "doutrina": "Na sequência oficial da Santa Sé, este pontificado vem depois de Paulo VI e antes de João Paulo II.",
        "tituloLegado": "Na sucessão apostólica",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "26.VIII, 3.IX.1978"
            ],
            [
                "Fim do pontificado",
                "28.IX.1978"
            ],
            [
                "Nome de nascimento",
                "Albino Luciani"
            ],
            [
                "Origem",
                "Forno di Canale (Beluno)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João Paulo I — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-paolo-i.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/263_giovanni_paolo_I.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 264,
        "nome": "João Paulo II",
        "periodo": "1978 - 2005",
        "foto": "./assets/papas/264_s_giovanni_paolo_II.png",
        "descricaoCurta": "Pontífice polonês, realizou numerosas viagens e promoveu a liberdade religiosa e o diálogo.",
        "historia": "João Paulo II foi o 264º pontífice da Igreja Católica. A Santa Sé registra sua origem em Wadowice (Cracóvia).\n\nSeu nome de nascimento é registrado como Karol Wojtyła. Seu pontificado é situado pela Santa Sé entre 1978 e 2005.\n\nKarol Wojtyła nasceu em Wadowice e estudou no seminário clandestino de Cracóvia durante a guerra. Foi bispo e arcebispo de Cracóvia e participou do Vaticano II. Em 1978, tornou-se o primeiro papa eslavo.\n\nRealizou 104 viagens internacionais e visitou 129 países. Defendeu os direitos humanos e a liberdade religiosa, promoveu o diálogo com outras religiões e presidiu o Grande Jubileu de 2000. Em 1983, promulgou um novo Código de Direito Canônico.",
        "doutrina": "Suas encíclicas sociais Laborem exercens, Sollicitudo rei socialis e Centesimus annus abordam o trabalho e a vida econômica. O diálogo ecumênico e a busca da paz também atravessaram seu magistério.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "16,22.X.1978"
            ],
            [
                "Fim do pontificado",
                "2.IV.2005"
            ],
            [
                "Nome de nascimento",
                "Karol Wojtyła"
            ],
            [
                "Origem",
                "Wadowice (Cracóvia)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de João Paulo II — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/giovanni-paolo-ii.html"
            },
            {
                "titulo": "Santa Sé — Biografia de João Paulo II",
                "url": "https://www.vatican.va/content/john-paul-ii/pt/biografia/documents/hf_jp-ii_spe_20190722_biografia.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/264_s_giovanni_paolo_II.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 265,
        "nome": "Bento XVI",
        "periodo": "2005 - 2013",
        "foto": "./assets/papas/265_benedetto_XVI.png",
        "descricaoCurta": "Teólogo e pastor, anunciou sua renúncia ao ministério petrino em 2013.",
        "historia": "Bento XVI foi o 265º pontífice da Igreja Católica. A Santa Sé registra sua origem em Marktl am Inn (Baviera).\n\nSeu nome de nascimento é registrado como Joseph Ratzinger. Seu pontificado é situado pela Santa Sé entre 2005 e 2013.\n\nJoseph Ratzinger foi professor de teologia e perito no Vaticano II. Tornou-se cardeal em 1977 e prefeito da Congregação para a Doutrina da Fé em 1981. Presidiu a comissão responsável pela preparação do Catecismo da Igreja Católica.\n\nEleito em 19 de abril de 2005, anunciou em fevereiro de 2013 sua renúncia, explicando que a diminuição de suas forças o impedia de exercer adequadamente o ministério. A renúncia entrou em vigor em 28 de fevereiro de 2013; essa é a data final do pontificado, não de seu falecimento.",
        "doutrina": "Sua trajetória uniu estudo teológico, formação da fé e serviço pastoral. Na declaração de renúncia, manifestou o propósito de continuar servindo a Igreja por meio da oração.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "19,24.IV.2005"
            ],
            [
                "Fim do pontificado",
                "28.II.2013"
            ],
            [
                "Nome de nascimento",
                "Joseph Ratzinger"
            ],
            [
                "Origem",
                "Marktl am Inn (Baviera)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Bento XVI — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/benedetto-xvi.html"
            },
            {
                "titulo": "Santa Sé — Biografia de Bento XVI",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/biography/documents/hf_ben-xvi_bio_20050419_short-biography_old.html"
            },
            {
                "titulo": "Bento XVI — Declaração de renúncia (11/2/2013)",
                "url": "https://www.vatican.va/content/benedict-xvi/pt/speeches/2013/february/documents/hf_ben-xvi_spe_20130211_declaratio.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/265_benedetto_XVI.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 266,
        "nome": "Francisco",
        "periodo": "2013 - 2025",
        "foto": "./assets/papas/266_francesco.png",
        "descricaoCurta": "Primeiro papa das Américas, destacou a misericórdia, a missão e o cuidado com a criação.",
        "historia": "Francisco foi o 266º pontífice da Igreja Católica. A Santa Sé registra sua origem em Buenos Aires (Argentina).\n\nSeu nome de nascimento é registrado como Jorge Mario Bergoglio. Seu pontificado é situado pela Santa Sé entre 2013 e 2025.\n\nJorge Mario Bergoglio, jesuíta argentino, foi arcebispo de Buenos Aires antes de ser eleito em 13 de março de 2013. Escolheu o nome Francisco em referência ao santo de Assis e deu atenção especial aos pobres e às periferias.\n\nConvocou o Jubileu da Misericórdia e o Jubileu da Esperança, promoveu o diálogo entre religiões e reformou a Cúria pela constituição Praedicate Evangelium. Seu pontificado terminou com sua morte em 21 de abril de 2025.",
        "doutrina": "Evangelii gaudium apresenta seu programa missionário. Entre suas encíclicas estão Laudato si’, sobre o cuidado com a criação; Fratelli tutti, sobre a fraternidade; e Dilexit nos, sobre o amor do Coração de Jesus.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "13,19.III.2013"
            ],
            [
                "Fim do pontificado",
                "21.IV.2025"
            ],
            [
                "Nome de nascimento",
                "Jorge Mario Bergoglio"
            ],
            [
                "Origem",
                "Buenos Aires (Argentina)"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Francisco — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/francesco.html"
            },
            {
                "titulo": "Santa Sé — Biografia de Francisco",
                "url": "https://www.vatican.va/content/francesco/pt/biography/documents/papa-francesco-biografia-bergoglio.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/266_francesco.png",
        "consultadoEm": "2026-11-10"
    },
    {
        "id": 267,
        "nome": "Leão XIV",
        "periodo": "2025 - atual",
        "foto": "./assets/papas/267_leone_XIV.png",
        "descricaoCurta": "Agostiniano e missionário no Peru, eleito em 2025 como o primeiro papa dos Estados Unidos.",
        "historia": "Leão XIV é o 267º pontífice da Igreja Católica. A Santa Sé registra sua origem em Chicago.\n\nSeu nome de nascimento é registrado como Robert Francis Prevost. Seu pontificado teve início em 2025 e permanece em curso.\n\nRobert Francis Prevost nasceu em Chicago e ingressou na Ordem de Santo Agostinho. Ordenado sacerdote em 1982, trabalhou como missionário e formador no Peru e foi prior geral de sua ordem.\n\nFoi bispo de Chiclayo e, em 2023, passou a dirigir o Dicastério para os Bispos. Eleito em 8 de maio de 2025, escolheu o nome Leão XIV. A celebração de início do ministério petrino ocorreu em 18 de maio. É o 267º pontífice na lista da Santa Sé.",
        "doutrina": "Seu lema episcopal, In Illo uno unum, retoma Santo Agostinho e exprime a unidade dos cristãos em Cristo. Sua formação e seu serviço pastoral estão ligados à espiritualidade agostiniana e à missão.",
        "tituloLegado": "Legado e Doutrina",
        "dadosPontificado": [
            [
                "Início do pontificado",
                "8,18.V.2025"
            ],
            [
                "Fim do pontificado",
                "Em curso"
            ],
            [
                "Nome de nascimento",
                "Robert Francis Prevost"
            ],
            [
                "Origem",
                "Chicago"
            ]
        ],
        "fontes": [
            {
                "titulo": "Ficha de Leão XIV — Santa Sé",
                "url": "https://www.vatican.va/content/vatican/pt/holy-father/leone-xiv.html"
            },
            {
                "titulo": "Santa Sé — Biografia de Leão XIV",
                "url": "https://www.vatican.va/content/leo-xiv/pt/biography/documents/biografia_leone-xiv.html"
            }
        ],
        "fonteFoto": "https://www.vatican.va/content/dam/vatican/Holy%20Father/267_leone_XIV.png",
        "consultadoEm": "2026-11-10"
    }
];

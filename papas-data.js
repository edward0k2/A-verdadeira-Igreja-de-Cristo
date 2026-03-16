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
    { id: 20, nome: "São Fabiano", periodo: "236 - 250", foto: "./assets/papas/fabiano.png", descricaoCurta: "Eleito por um prodígio divino, organizou Roma em distritos eclesiais.", historia: "Diz a lenda que uma pomba pousou em sua cabeça durante a eleição, sinalizando a escolha divina. [IMG] Reorganizou Roma em sete distritos eclesiásticos, facilitando o cuidado pastoral e administrativo. [IMG] Enviou missionários às Gálias (atual França) para fundar novas igrejas. [IMG] Foi uma das primeiras vítimas da grande perseguição do imperador Décio.", doutrina: "Sua engenharia administrativa serviu de modelo para a organização diocesana em todo o mundo cristão." }
];

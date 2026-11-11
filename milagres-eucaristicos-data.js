// Registros geográficos do catálogo em português da exposição de Carlo Acutis.
// Datas aproximadas, intervalos e séculos reproduzem a forma indicada na fonte.
const eucharisticMiraclesData = `
Argentina|Buenos Aires|1992-1994-1996|buenosaires
Áustria|Fiecht|1310|fiecht
Áustria|Seefeld|1384|seefeld
Áustria|Weiten-Raxendorf|1411|weiten-raxendorf
Bélgica|Bois-Seigneur-Isaac|1405|boisseigneurisaac
Bélgica|Bruges|1203|bruges
Bélgica|Bruxelas|1370|bruxelles
Bélgica|Herentals|1412|herentals
Bélgica|Herkenrode-Hasselt|1317|herkenrode
Bélgica|Liège|1374|liege
Bélgica|Middleburg-Lovanio|1374|middleburg
Colômbia|Tumaco|1906|tumaco
Croácia|Ludbreg|1411|ludbreg
Egito|S. Maria Egiziaca|IV-V século|s_maria_egiziaca
Egito|Scete|III-V século|scete
França|Avignone|1433|avignone
França|Blanot|1331|blanot
França|Bordeaux|1822|bordeaux
França|Dijon|1430|digione
França|Douai|1254|douai
França|Faverney|1608|faverney
França|La Rochelle|1461|la_rochelle
França|Neuvy Saint Sepulcre|1257|la_rochelle
França|Les Ulmes|1668|les_ulmes
França|Marseille-En-Beauvais|1533|marseille-en-beauvais
França|Paris|1290|parigi
França|Pressac|1643|pressac
Alemanha|Augsburg|1194|augsburg
Alemanha|Benningen|1216|benningen
Alemanha|Bettbrunn|1125|bettbrunn
Alemanha|Erding|1417|erding
Alemanha|Kranenburg|1280|kranenburg_bei_kleve
Alemanha|Regensburg|1255|regensburg
Alemanha|Walldürn|1330|walldurn
Alemanha|Weingarten|Data não indicada|weingarten
Alemanha|Wilsnack|1383|wilsnack
Índia|Chirattakonam|2001|chirattakonam
Ilha de Martinica|Morne-Rouge|1902|morne-rouge
Ilha Reunião|Saint-André da Reunião|1902|saint-andre_de_la_reunion
Itália|Alatri|1228|alatri
Itália|Santa Clara de Assis|1240|santachiaradassisi
Itália|Asti|1535|asti
Itália|Bagno di Romagna|1412|bagnodiromagna
Itália|Bolsena|1264|bolsena
Itália|Canosio|1630|canosio
Itália|Cascia|1330|cascia
Itália|Cava dei Tirreni|1656|cavadeitirreni
Itália|Dronero|1631|dronero
Itália|São Mauro La Bruca|1969|dronero
Itália|Ferrara|1171|ferrara
Itália|Florença|1230-1595|firenze
Itália|Gruaro (Valvasone)|1294|gruaro
Itália|Lanciano|750 D.C.|lanciano
Itália|Macerata|1356|macerata
Itália|Mogoro|1604|mogoro
Itália|Morrovalle|1560|morrovalle
Itália|Offida|1273-1280|offida
Itália|Patierno (Nápoles)|1772|patierno
Itália|Rimini|1227|rimini
Itália|Roma|VI-VII século|romaa
Itália|Roma|1610|romab
Itália|Rosano|1948|rosano
Itália|São Pedro Damião|XI século|sanpierdamiani
Itália|Salzano|1517|salzano
Itália|Scala|1732|sanpierdamiani
Itália|Siena|1730|caterinadasiena
Itália|Trani|XI século|trani
Itália|Turim|1453|torinoa
Itália|Turim|1640|torinob
Itália|Veroli|1570|veroli
Itália|Volterra|1472|volterra
México|Tixtla|2006|tixtla
Holanda|Alkmaar|1429|alkmaar
Holanda|Amsterdam|1345|amsterdam
Holanda|Bergen|1421|bergen
Holanda|Boxmeer|1400|boxmeer
Holanda|Boxtel-Hoogstraten|1380|boxtel-hoogstraten
Holanda|Breda-Niervaart|1300|breda-niervaart
Holanda|Meerssen|1222-1465|meerssen
Holanda|Stiphout|1342|stiphout
Peru|Eten|1649|eten
Polônia|Cracóvia|1345|cracovia
Polônia|Glotowo|1290|glotowo
Polônia|Legnica|2013|legnica
Polônia|Poznan|1399|poznan
Polônia|Sokółka|2008|sokolka
Portugal|Santarém|1247|santarem
Espanha|Alboraya-Almacéra|1348|alboraya-almacera
Espanha|Alcalà|1597|alcala
Espanha|Alcoy|1568|alcoy
Espanha|Caravaca de la Cruz|1231|caravaca_de_la_cruz
Espanha|Cimballa|1370|cimballa
Espanha|Daroca|1239|daroca
Espanha|Gerona|1297|gerona
Espanha|Gorkum-El Escorial|1572|gorkum-el_escorial
Espanha|Guadalupe|1420|guadalupe
Espanha|Ivorra|1010|ivorra
Espanha|Moncada|1392|moncada
Espanha|Montserrat|1657|montserrat
Espanha|O'Cebreiro|1300|ocebreiro
Espanha|Onil|1824|onil
Espanha|Ponferrada|1533|ponferrada
Espanha|S. Juan de las Abadesas|1251|s_j_de_las_abadeses
Espanha|Silla|1907|silla
Espanha|Valença|Data não indicada|valencia
Espanha|Zaragoza|1427|zaragoza
Suíça|Ettiswil|1447|ettiswil
Venezuela|Betania|1991|betania
Espanha|Calanda (Miguel-Juan Pellicer)|1640|calanda
México|Guadalupe (Juan Diego)|1531|guadalupe-messico
França|Lourdes (Santa Bernadette)|1888|lourdes
França|Paris (Santa Catarina Labouré)|1830|paris
Portugal|Fátima (Anjo da Paz)|1916|angelodellapace
`.trim().split('\n').map((line, index) => {
    const [country, place, date, documentSlug] = line.split('|');
    const yearMatch = date.match(/\d{3,4}/);
    const year = yearMatch ? Number(yearMatch[0]) : null;
    return {
        id: index + 1,
        country,
        place,
        date,
        year,
        documentSlug
    };
});

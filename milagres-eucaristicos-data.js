// Registros geográficos do catálogo em português da exposição de Carlo Acutis.
// Datas aproximadas, intervalos e séculos reproduzem a forma indicada na fonte.
const eucharisticMiraclesData = `
Argentina|Buenos Aires|1992-1994-1996
Áustria|Fiecht|1310
Áustria|Seefeld|1384
Áustria|Weiten-Raxendorf|1411
Bélgica|Bois-Seigneur-Isaac|1405
Bélgica|Bruges|1203
Bélgica|Bruxelas|1370
Bélgica|Herentals|1412
Bélgica|Herkenrode-Hasselt|1317
Bélgica|Liège|1374
Bélgica|Middleburg-Lovanio|1374
Colômbia|Tumaco|1906
Croácia|Ludbreg|1411
Egito|S. Maria Egiziaca|IV-V século
Egito|Scete|III-V século
França|Avignone|1433
França|Blanot|1331
França|Bordeaux|1822
França|Dijon|1430
França|Douai|1254
França|Faverney|1608
França|La Rochelle|1461
França|Neuvy Saint Sepulcre|1257
França|Les Ulmes|1668
França|Marseille-En-Beauvais|1533
França|Paris|1290
França|Pressac|1643
Alemanha|Augsburg|1194
Alemanha|Benningen|1216
Alemanha|Bettbrunn|1125
Alemanha|Erding|1417
Alemanha|Kranenburg|1280
Alemanha|Regensburg|1255
Alemanha|Walldürn|1330
Alemanha|Weingarten|Data não indicada
Alemanha|Wilsnack|1383
Índia|Chirattakonam|2001
Ilha de Martinica|Morne-Rouge|1902
Ilha Reunião|Saint-André da Reunião|1902
Itália|Alatri|1228
Itália|Santa Clara de Assis|1240
Itália|Asti|1535
Itália|Bagno di Romagna|1412
Itália|Bolsena|1264
Itália|Canosio|1630
Itália|Cascia|1330
Itália|Cava dei Tirreni|1656
Itália|Dronero|1631
Itália|São Mauro La Bruca|1969
Itália|Ferrara|1171
Itália|Florença|1230-1595
Itália|Gruaro (Valvasone)|1294
Itália|Lanciano|750 D.C.
Itália|Macerata|1356
Itália|Mogoro|1604
Itália|Morrovalle|1560
Itália|Offida|1273-1280
Itália|Patierno (Nápoles)|1772
Itália|Rimini|1227
Itália|Roma|VI-VII século
Itália|Roma|1610
Itália|Rosano|1948
Itália|São Pedro Damião|XI século
Itália|Salzano|1517
Itália|Scala|1732
Itália|Siena|1730
Itália|Trani|XI século
Itália|Turim|1453
Itália|Turim|1640
Itália|Veroli|1570
Itália|Volterra|1472
México|Tixtla|2006
Holanda|Alkmaar|1429
Holanda|Amsterdam|1345
Holanda|Bergen|1421
Holanda|Boxmeer|1400
Holanda|Boxtel-Hoogstraten|1380
Holanda|Breda-Niervaart|1300
Holanda|Meerssen|1222-1465
Holanda|Stiphout|1342
Peru|Eten|1649
Polônia|Cracóvia|1345
Polônia|Glotowo|1290
Polônia|Legnica|2013
Polônia|Poznan|1399
Polônia|Sokółka|2008
Portugal|Santarém|1247
Espanha|Alboraya-Almacéra|1348
Espanha|Alcalà|1597
Espanha|Alcoy|1568
Espanha|Caravaca de la Cruz|1231
Espanha|Cimballa|1370
Espanha|Daroca|1239
Espanha|Gerona|1297
Espanha|Gorkum-El Escorial|1572
Espanha|Guadalupe|1420
Espanha|Ivorra|1010
Espanha|Moncada|1392
Espanha|Montserrat|1657
Espanha|O'Cebreiro|1300
Espanha|Onil|1824
Espanha|Ponferrada|1533
Espanha|S. Juan de las Abadesas|1251
Espanha|Silla|1907
Espanha|Valença|Data não indicada
Espanha|Zaragoza|1427
Suíça|Ettiswil|1447
Venezuela|Betania|1991
Espanha|Calanda (Miguel-Juan Pellicer)|1640
México|Guadalupe (Juan Diego)|1531
França|Lourdes (Santa Bernadette)|1888
França|Paris (Santa Catarina Labouré)|1830
Portugal|Fátima (Anjo da Paz)|1916
`.trim().split('\n').map((line, index) => {
    const [country, place, date] = line.split('|');
    const yearMatch = date.match(/\d{3,4}/);
    const year = yearMatch ? Number(yearMatch[0]) : null;
    return {
        id: index + 1,
        country,
        place,
        date,
        year
    };
});

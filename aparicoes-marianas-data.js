/* Locais listados na exposição mariana de São Carlo Acutis.
   As datas e narrativas completas permanecem nos documentos da fonte original. */
const marianApparitionsData = `
Brasil|Vale do Paraíba
Brasil|Pesqueira
Brasil|Campinas
Nigéria|Aokpe
Ruanda|Kibeho
Áustria|Absam
Áustria|Luggau
Áustria|Marbach
Colômbia|Lajas
Colômbia|Chiquinquirá
Argentina|Luján
Bélgica|Banneux
Bélgica|Beauraing
Equador|Quinche
Equador|Quito
Bolívia|Cotoca
Bolívia|Chaguaya
Bolívia|Quillacollo
Filipinas|Manaoag
Filipinas|Caysasay
França|Garaison
França|Laus
França|Paris
França|Saint Bauzille de la Sylve
França|Arras
França|Cotignac
França|Betharram
França|Île-Bouchard
França|La Salette
França|La Prenessaye
França|Le Puy-en-Velay
França|Ornans
França|Lourdes
França|Pellevoisin
França|Pontmain
França|Plantees
França|Trois-Épis
Chile|Andacollo
China|Dong Lu
Coreia do Sul|Namyang
Cuba|Cuba
Costa Rica|Cartago
Egito|Zeitun
Alemanha|Kevelaer
Alemanha|Heroldsbach
Alemanha|Heede
Alemanha|Marienfried
Índia|Vailankanni
Índia|Kallikulam
Itália|Ardesio
Itália|Bettola
Itália|Casalbordino
Itália|Cerreto di Sorano
Itália|Arcola
Itália|Cussanio
Itália|Adro
Itália|Assis
Itália|Bérgamo
Itália|Gallivaggio
Itália|Badia di Cava
Itália|Boccadírio
Itália|Caravaggio
Itália|Gerosa
Itália|Bra
Itália|Castel Godego
Itália|Cernusco sul Naviglio
Itália|Loreto
Itália|Castelpetroso
Itália|Corbetta
Itália|Crescentino
Itália|Montagnaga di Piné
Itália|Cori
Itália|Desenzano
Itália|Foggia
Itália|Motta di Livenza
Itália|Florença
Itália|Garlasco
Itália|Gênova
Itália|Pietralba
Itália|Genazzano
Itália|Ghisalba
Itália|Imola
Itália|Porzus degli Slavi
Itália|Giulianova
Itália|Lumarzo
Itália|Molare
Itália|Roma
Itália|Milão
Itália|Monte Berico
Itália|Montefortino
Itália|Ornavasso
Itália|Pellestrina
Itália|Peschiera sul Garda
Itália|Pieve di Tagliamento
Itália|Pompeia
Itália|Pontassieve
Itália|Rapallo
Itália|Re
Itália|Rogorotto
Itália|Roma - Nossa Senhora do Divino Amor
Itália|Roma - Nossa Senhora das Neves
Itália|Roma Pozzo
Itália|Roverano
Itália|San Bartolomeo al Mare
Itália|San Salvatore Monferrato
Itália|Sant'Anastasia
Itália|Savona
Itália|Siracusa
Itália|Tíndari
Itália|Tirano
Itália|Turim
Itália|Moncrivello
Itália|Vacciago
Itália|Valverde di Rezzato
Itália|Montefalco
Japão|Akita
Reino Unido|Aylesford
Reino Unido|Walsingham
Irlanda|Knock
Malta|Gozo
Líbano|Bechwat
Lituânia|Siluva
México|Guadalupe
México|Ocotlán
Nicarágua|Cuapa
Paraguai|Caacupé
Polônia|Gietrzwałd
Polônia|Licheń
Polônia|Rzeszów
Polônia|Siekierki
Polônia|Święta Lipka
Polônia|Szczyrk
Portugal|Arcos de Valdevez
Portugal|Fátima 1
Portugal|Fátima 2
Portugal|Fátima 3
Portugal|Nazaré
República Tcheca|Filipov
Sérvia|Doroszlo
Eslovênia|Sveta Gora
Espanha|Agres
Espanha|Córdoba
Espanha|Cortes
Espanha|La Codosera
Espanha|Montserrat
Espanha|Pontevedra e Tuy
Espanha|Saragoça
Espanha|Fuerteventura
Espanha|Teror
Estados Unidos|Champion
Estados Unidos|Fostoria
Hungria|Győr
Venezuela|Betania
Venezuela|Guanare
Vietnã|La Vang
África do Sul|Ngome
`.trim().split('\n').map((line, index) => {
    const [country, place] = line.split('|');
    const slug = place.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
        .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const route = place === 'Vale do Paraíba' ? 'vale_do_paraiba'
        : place === 'Arcos de Valdevez' ? 'arcos-de-valdevez' : slug;
    return { id: index + 1, country, place, sourceUrl: `https://www.carloacutis.com/en/avm/${route}` };
});

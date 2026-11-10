// Executar com: node scripts/verificar-papas.cjs
// Verificação offline de integridade do catálogo e dos retratos locais.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const data = vm.runInNewContext(fs.readFileSync(path.join(root, 'papas-data.js'), 'utf8') + '\npapasData');
assert.equal(data.length, 267, 'A lista deve chegar ao 267º pontificado, Leão XIV.');
const sources = new Set();
const portraits = new Set();

for (const [index, papa] of data.entries()) {
    assert.equal(papa.id, index + 1, 'Numeração incompleta ou fora de ordem.');
    for (const field of ['nome', 'periodo', 'foto', 'descricaoCurta', 'historia', 'doutrina']) {
        assert.equal(typeof papa[field], 'string', `${papa.id}: falta ${field}`);
        assert.ok(papa[field].trim(), `${papa.id}: ${field} vazio`);
        assert.ok(!/\bundefined\b|\uFFFD|a preencher/i.test(papa[field]), `${papa.id}: conteúdo inválido em ${field}`);
    }
    const imagePath = path.resolve(root, papa.foto);
    assert.ok(imagePath.startsWith(path.join(root, 'assets', 'papas') + path.sep));
    assert.ok(fs.existsSync(imagePath), `Retrato ausente: ${papa.foto}`);
    const image = fs.readFileSync(imagePath);
    assert.equal(image.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', `PNG inválido: ${papa.foto}`);
    assert.ok(image.readUInt32BE(16) > 0 && image.readUInt32BE(20) > 0, `Dimensões inválidas: ${papa.foto}`);
    portraits.add(papa.foto);

    if (papa.id > 20) {
        assert.ok(papa.historia.includes('\n\n'), `${papa.id}: faltam os parágrafos do perfil`);
        assert.ok(!papa.historia.includes('[IMG]'), `${papa.id}: espaço de imagem vazio`);
        assert.ok(papa.dadosPontificado.length >= 2);
        assert.ok(papa.fontes.length > 0);
        assert.ok(!sources.has(papa.fontes[0].url), `${papa.id}: ficha oficial repetida`);
        sources.add(papa.fontes[0].url);
        for (const { url, titulo } of papa.fontes) {
            assert.ok(titulo.trim());
            assert.equal(new URL(url).origin, 'https://www.vatican.va');
        }
        assert.equal(new URL(papa.fonteFoto).origin, 'https://www.vatican.va');
        assert.match(papa.consultadoEm, /^\d{4}-\d{2}-\d{2}$/);
    }
}

assert.equal(data[20].nome, 'Cornélio');
assert.equal(data[266].nome, 'Leão XIV');
assert.equal(data[266].periodo, '2025 - atual');
assert.equal(data[265].periodo, '2013 - 2025');
assert.equal(data[264].periodo, '2005 - 2013');
assert.deepEqual(Array.from(data.filter(p => p.nome.startsWith('Bento IX')), p => p.id), [145, 147, 150]);
assert.equal(data[144].foto, data[146].foto);
assert.equal(data[146].foto, data[149].foto);
assert.equal(portraits.size, 265);
assert.equal(sources.size, 247);
assert.ok(data[131].periodo.includes('964 ou 965'), 'Preservar a incerteza sobre o fim de Bento V.');
assert.ok(data[115].periodo.includes('897 ou 898'), 'Preservar a incerteza sobre o início de João IX.');
console.log('OK: 267 pontificados, 247 novas fichas com fontes e 265 retratos locais válidos.');

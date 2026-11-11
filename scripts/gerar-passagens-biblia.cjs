const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const corpus = JSON.parse(fs.readFileSync(path.join(root, 'biblia-matos-soares-completa.json'), 'utf8'));
const routesContext = {};
vm.runInNewContext(`${fs.readFileSync(path.join(root, 'bible-story-data.js'), 'utf8')}\nglobalThis.routes = bibleStoryEvents;`, routesContext);
const routes = routesContext.routes;

if (corpus.books.length !== 73 || routes.AT.length !== 46 || routes.NT.length !== 27) {
    throw new Error('O corpus ou os percursos não contêm o cânon católico completo esperado.');
}

function getVerseRange(token, currentChapter, reference) {
    const explicit = token.match(/^(\d+),(\d+)(?:[–-](?:(\d+),)?(\d+))?$/);
    if (explicit) {
        const chapter = Number(explicit[1]);
        const firstVerse = Number(explicit[2]);
        const lastChapter = Number(explicit[3] || chapter);
        const lastVerse = Number(explicit[4] || firstVerse);
        return { firstChapter: chapter, firstVerse, lastChapter, lastVerse };
    }
    const inherited = token.match(/^(\d+)[–-](\d+)$/);
    if (inherited && currentChapter) {
        return {
            firstChapter: currentChapter,
            firstVerse: Number(inherited[1]),
            lastChapter: currentChapter,
            lastVerse: Number(inherited[2])
        };
    }
    throw new Error(`Referência não reconhecida: ${reference} (${token})`);
}

function extractPassage(book, reference) {
    const numericStart = reference.search(/\d/);
    const numericPart = reference.slice(numericStart);
    const chunks = [];
    let activeChapter = null;

    numericPart.split(';').forEach(group => {
        const tokens = group.match(/\d+,\d+(?:[–-](?:\d+,\d+|\d+))?|\d+[–-]\d+/g) || [];
        tokens.forEach(token => {
            const range = getVerseRange(token, activeChapter, reference);
            activeChapter = range.firstChapter;
            for (let chapter = range.firstChapter; chapter <= range.lastChapter; chapter += 1) {
                const verses = book.chapters[String(chapter)] || [];
                const first = chapter === range.firstChapter ? range.firstVerse : 1;
                const last = chapter === range.lastChapter ? range.lastVerse : Number(verses.at(-1)?.v || 0);
                const selected = verses.filter(verse => Number(verse.v) >= first && Number(verse.v) <= last)
                    .map(verse => ({ number: verse.v, text: verse.t }));
                if (!selected.length) throw new Error(`Nenhum versículo encontrado: ${reference}`);

                let chunk = chunks.find(item => item.chapter === chapter);
                if (!chunk) {
                    chunk = { chapter, ranges: [], verses: [] };
                    chunks.push(chunk);
                }
                chunk.ranges.push({ first, last });
                chunk.verses.push(...selected);
            }
        });
    });

    if (!chunks.length) throw new Error(`A referência não contém versículos: ${reference}`);
    chunks.forEach(chunk => {
        chunk.verses = [...new Map(chunk.verses.map(verse => [verse.number, verse])).values()]
            .sort((a, b) => Number(a.number) - Number(b.number));
        delete chunk.ranges;
    });
    return chunks;
}

const output = { edition: corpus.title, translator: corpus.translator, events: { AT: [], NT: [] } };
[
    { testament: 'AT', sourceOffset: 0 },
    { testament: 'NT', sourceOffset: 46 }
].forEach(({ testament, sourceOffset }) => {
    routes[testament].forEach((events, bookIndex) => {
        const book = corpus.books[sourceOffset + bookIndex];
        output.events[testament][bookIndex] = events.map(([reference, title]) => ({
            title,
            reference,
            book: book.name,
            slug: book.slug,
            chapters: extractPassage(book, reference)
        }));
    });
});

fs.writeFileSync(path.join(root, 'bible-passages.json'), `${JSON.stringify(output)}\n`, 'utf8');
const count = Object.values(output.events).flat(2).reduce((total, event) => total + event.chapters.reduce((sum, chapter) => sum + chapter.verses.length, 0), 0);
console.log(`Geradas ${Object.values(output.events).flat().reduce((n, events) => n + events.length, 0)} passagens (${count} versículos).`);

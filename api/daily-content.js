const NEWS_FEED_URL = 'https://www.vaticannews.va/pt.rss.xml';
const VATICAN_NEWS_BASE = 'https://www.vaticannews.va';

function decodeEntities(value) {
    return String(value || '')
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
        .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
        .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
        .replace(/&nbsp;/gi, ' ')
        .replace(/&amp;/gi, '&')
        .replace(/&quot;/gi, '"')
        .replace(/&apos;|&#39;/gi, "'")
        .replace(/&lt;/gi, '<')
        .replace(/&gt;/gi, '>');
}

function plainText(value) {
    return decodeEntities(String(value || '')
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
        .replace(/<\/(?:p|div|li|br|h[1-6])\s*>/gi, ' ')
        .replace(/<[^>]+>/g, ' '))
        .replace(/\s+/g, ' ')
        .trim();
}

function getXmlField(block, tag) {
    const match = block.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
    return match ? decodeEntities(match[1]).trim() : '';
}

function parseNews(xml) {
    return [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)]
        .map(([, item]) => {
            const title = plainText(getXmlField(item, 'title'));
            const description = plainText(getXmlField(item, 'description'));
            const link = plainText(getXmlField(item, 'link'));
            let url = '';
            try {
                const parsed = new URL(link);
                const isVaticanNews = parsed.hostname === 'vaticannews.va' || parsed.hostname.endsWith('.vaticannews.va');
                if (parsed.protocol === 'https:' && isVaticanNews) url = parsed.href;
            } catch (_) { /* Ignora links inválidos do feed. */ }
            return {
                title,
                description: description.slice(0, 420),
                url,
                publishedAt: getXmlField(item, 'pubDate')
            };
        })
        .filter(item => item.title && item.url)
        .slice(0, 9);
}

function parseSaints(html) {
    const marker = html.search(/O Santo do dia é uma resenha diária/i);
    const content = marker >= 0 ? html.slice(marker) : html;
    const headings = [...content.matchAll(/<h([2-4])\b[^>]*>([\s\S]*?)<\/h\1>/gi)];

    return headings.map((heading, index) => {
        const name = plainText(heading[2]);
        if (!name || /santo do dia|atividades do papa|a nossa fé/i.test(name)) return null;
        const start = heading.index + heading[0].length;
        const end = headings[index + 1]?.index ?? Math.min(content.length, start + 5000);
        const block = content.slice(start, end);
        const paragraphs = [...block.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
            .map(match => plainText(match[1]))
            .filter(text => text.length > 55 && !/^image\s*:/i.test(text));
        return { name, description: paragraphs.slice(0, 2).join(' ').slice(0, 720) };
    }).filter(item => item && item.description).slice(0, 5);
}

function sendJson(response, status, body) {
    response.statusCode = status;
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.setHeader('Cache-Control', 'public, max-age=300, s-maxage=900, stale-while-revalidate=3600');
    response.end(JSON.stringify(body));
}

module.exports = async function dailyContentHandler(request, response) {
    const requestUrl = new URL(request.url, 'https://site.local');
    const date = requestUrl.searchParams.get('date') || '';
    const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    const month = match ? match[2] : String(new Date().getMonth() + 1).padStart(2, '0');
    const day = match ? match[3] : String(new Date().getDate()).padStart(2, '0');
    const saintUrl = `${VATICAN_NEWS_BASE}/pt/santo-do-dia/${Number(month)}/${Number(day)}.html`;

    const fetchText = async url => {
        const result = await fetch(url, {
            headers: { 'User-Agent': 'Historia-da-Salvacao/1.0', Accept: 'text/html, application/rss+xml, application/xml' },
            signal: AbortSignal.timeout(7000)
        });
        if (!result.ok) throw new Error(`Fonte respondeu ${result.status}`);
        return result.text();
    };

    const [newsResult, saintsResult] = await Promise.allSettled([
        fetchText(NEWS_FEED_URL),
        fetchText(saintUrl)
    ]);
    const news = newsResult.status === 'fulfilled' ? parseNews(newsResult.value) : [];
    const saints = saintsResult.status === 'fulfilled' ? parseSaints(saintsResult.value) : [];

    if (!news.length && !saints.length) {
        return sendJson(response, 502, { error: 'Não foi possível carregar as atualizações das fontes do Vaticano agora.', news: [], saints: [] });
    }

    return sendJson(response, 200, {
        news,
        saints,
        sources: {
            news: 'https://www.vaticannews.va/pt.html',
            saints: saintUrl
        },
        updatedAt: new Date().toISOString()
    });
};

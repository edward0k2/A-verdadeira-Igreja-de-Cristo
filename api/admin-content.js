const { sendJson, hasAdminSession, isSameOriginRequest, readJsonBody } = require('../scripts/admin-auth');

const REPOSITORY = process.env.GITHUB_REPOSITORY || 'edward0k2/A-verdadeira-Igreja-de-Cristo';
const BRANCH = process.env.GITHUB_BRANCH || 'main';
const CONTENTS_API = `https://api.github.com/repos/${REPOSITORY}/contents`;
const DATA_FILES = { blog: 'data/blog-posts.json', live: 'data/terco-live.json' };
const MAX_IMAGE_CHARS = 2_700_000;

function githubHeaders() {
    const headers = { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'Historia-da-Salvacao-admin' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    return headers;
}

async function readRepositoryFile(file) {
    const url = `${CONTENTS_API}/${file}?ref=${encodeURIComponent(BRANCH)}`;
    const response = await fetch(url, { headers: githubHeaders(), signal: AbortSignal.timeout(9000) });
    if (response.status === 404) return { value: file === DATA_FILES.blog ? [] : null, sha: null };
    if (!response.ok) throw new Error(`Não foi possível ler o conteúdo publicado (GitHub ${response.status}).`);
    const result = await response.json();
    let text = result.content ? Buffer.from(result.content.replace(/\s/g, ''), 'base64').toString('utf8') : '';
    if (!text) {
        const rawResponse = await fetch(url, { headers: { ...githubHeaders(), Accept: 'application/vnd.github.raw+json' }, signal: AbortSignal.timeout(9000) });
        if (!rawResponse.ok) throw new Error(`Não foi possível ler o conteúdo publicado (GitHub ${rawResponse.status}).`);
        text = await rawResponse.text();
    }
    return { value: JSON.parse(text), sha: result.sha };
}

async function readPublicFile(file) {
    const response = await fetch(`https://raw.githubusercontent.com/${REPOSITORY}/${encodeURIComponent(BRANCH)}/${file}`, { signal: AbortSignal.timeout(9000) });
    if (response.status === 404) return file === DATA_FILES.blog ? [] : null;
    if (!response.ok) throw new Error(`Não foi possível carregar o conteúdo publicado (${response.status}).`);
    return JSON.parse(await response.text());
}

async function writeRepositoryFile(file, value, sha) {
    if (!process.env.GITHUB_TOKEN) throw Object.assign(new Error('A publicação ainda não está configurada: falta o segredo GITHUB_TOKEN no site.'), { status: 503 });
    const json = `${JSON.stringify(value, null, 2)}\n`;
    if (Buffer.byteLength(json) > 3_000_000) throw Object.assign(new Error('O conteúdo excede o limite de armazenamento.'), { status: 413 });
    const response = await fetch(`${CONTENTS_API}/${file}`, {
        method: 'PUT',
        headers: { ...githubHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify({
            message: file === DATA_FILES.blog ? 'Atualiza publicações do blog pelo painel administrativo' : 'Atualiza live do Santo Terço pelo painel administrativo',
            content: Buffer.from(json, 'utf8').toString('base64'),
            branch: BRANCH,
            ...(sha ? { sha } : {}),
            committer: { name: 'Administrador do site', email: 'admin@users.noreply.github.com' }
        }),
        signal: AbortSignal.timeout(12000)
    });
    if (response.status === 409 || response.status === 422) throw Object.assign(new Error('O conteúdo mudou ao mesmo tempo. Recarregue a página e tente novamente.'), { status: 409 });
    if (!response.ok) throw new Error(`Não foi possível salvar no repositório (GitHub ${response.status}).`);
}

function validatePosts(input) {
    if (!Array.isArray(input) || input.length > 200) throw Object.assign(new Error('A lista de publicações é inválida.'), { status: 400 });
    return input.map(post => {
        if (!post || typeof post.title !== 'string' || typeof post.body !== 'string' || !String(post.id || '').match(/^[A-Za-z0-9_-]{1,80}$/)) {
            throw Object.assign(new Error('Uma publicação contém campos inválidos.'), { status: 400 });
        }
        const image = post.image || '';
        if (image && (typeof image !== 'string' || image.length > MAX_IMAGE_CHARS || !/^data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/]+={0,2}$/i.test(image))) {
            throw Object.assign(new Error('Uma foto tem formato inválido ou é grande demais. Reduza a imagem e tente novamente.'), { status: 400 });
        }
        return {
            id: String(post.id),
            title: post.title.trim().slice(0, 120),
            body: post.body.trim().slice(0, 12000),
            image,
            createdAt: Number.isFinite(Date.parse(post.createdAt)) ? new Date(post.createdAt).toISOString() : new Date().toISOString(),
            ...(Number.isFinite(Date.parse(post.updatedAt)) ? { updatedAt: new Date(post.updatedAt).toISOString() } : {})
        };
    }).filter(post => post.title && post.body);
}

function validateLive(input) {
    if (input === null) return null;
    if (!input || !['video', 'channel'].includes(input.type) || typeof input.id !== 'string' || typeof input.original !== 'string') {
        throw Object.assign(new Error('A configuração da live é inválida.'), { status: 400 });
    }
    const validId = input.type === 'video' ? /^[A-Za-z0-9_-]{11}$/.test(input.id) : /^UC[A-Za-z0-9_-]{22}$/.test(input.id);
    if (!validId || input.original.length > 500) throw Object.assign(new Error('O link ou ID do YouTube é inválido.'), { status: 400 });
    return { type: input.type, id: input.id, original: input.original, updatedAt: new Date().toISOString() };
}

module.exports = async function adminContentHandler(request, response) {
    const resource = new URL(request.url, 'https://site.local').searchParams.get('resource');
    if (!Object.hasOwn(DATA_FILES, resource)) return sendJson(response, 400, { error: 'Recurso inválido.' });

    if (request.method === 'GET') {
        try {
            const value = await readPublicFile(DATA_FILES[resource]);
            return sendJson(response, 200, resource === 'blog' ? { posts: Array.isArray(value) ? value : [] } : { live: value || null }, 'public, max-age=0, s-maxage=5, stale-while-revalidate=15');
        } catch (error) {
            return sendJson(response, 502, { error: error.message || 'Não foi possível carregar o conteúdo.' });
        }
    }

    if (request.method !== 'PUT') {
        response.setHeader('Allow', 'GET, PUT');
        return sendJson(response, 405, { error: 'Método não permitido.' });
    }
    if (!isSameOriginRequest(request)) return sendJson(response, 403, { error: 'Origem da solicitação não permitida.' });
    if (!hasAdminSession(request)) return sendJson(response, 401, { error: 'Entre como administrador para publicar.' });

    try {
        const body = await readJsonBody(request, 3_500_000);
        const { sha } = await readRepositoryFile(DATA_FILES[resource]);
        const value = resource === 'blog' ? validatePosts(body.posts) : validateLive(body.live);
        await writeRepositoryFile(DATA_FILES[resource], value, sha);
        response.setHeader('Cache-Control', 'no-store');
        return sendJson(response, 200, resource === 'blog' ? { saved: true, posts: value } : { saved: true, live: value });
    } catch (error) {
        return sendJson(response, error.status || 502, { error: error.message || 'Não foi possível publicar.' });
    }
};

const {
    sendJson, getAdminConfig, isAdminServiceConfigured, safeEqual, hasAdminSession,
    setSessionCookie, clearSessionCookie, isSameOriginRequest, readJsonBody
} = require('../scripts/admin-auth');

const attempts = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 8;

function requestIp(request) {
    return String(request.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
}

function isRateLimited(request) {
    const now = Date.now();
    const ip = requestIp(request);
    const recent = (attempts.get(ip) || []).filter(time => now - time < WINDOW_MS);
    attempts.set(ip, recent);
    return recent.length >= MAX_ATTEMPTS;
}

function recordFailure(request) {
    const ip = requestIp(request);
    attempts.set(ip, [...(attempts.get(ip) || []).filter(time => Date.now() - time < WINDOW_MS), Date.now()]);
}

module.exports = async function adminAuthHandler(request, response) {
    const method = request.method || 'GET';
    if (method === 'GET') {
        return sendJson(response, 200, { configured: isAdminServiceConfigured(), authenticated: hasAdminSession(request) });
    }
    if (method === 'DELETE') {
        if (!isSameOriginRequest(request)) return sendJson(response, 403, { error: 'Origem da solicitação não permitida.' });
        clearSessionCookie(request, response);
        return sendJson(response, 200, { authenticated: false });
    }
    if (method !== 'POST') {
        response.setHeader('Allow', 'GET, POST, DELETE');
        return sendJson(response, 405, { error: 'Método não permitido.' });
    }
    if (!isAdminServiceConfigured()) return sendJson(response, 503, { error: 'O login e o armazenamento administrativo ainda não foram configurados no ambiente do site.' });
    if (!isSameOriginRequest(request)) return sendJson(response, 403, { error: 'Origem da solicitação não permitida.' });
    if (isRateLimited(request)) return sendJson(response, 429, { error: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.' });

    try {
        const body = await readJsonBody(request, 2048);
        const config = getAdminConfig();
        if (typeof body.username !== 'string' || typeof body.password !== 'string'
            || !safeEqual(body.username, config.username) || !safeEqual(body.password, config.password)) {
            recordFailure(request);
            return sendJson(response, 401, { error: 'Usuário ou senha incorretos.' });
        }
        attempts.delete(requestIp(request));
        setSessionCookie(request, response, config.username);
        return sendJson(response, 200, { authenticated: true });
    } catch (error) {
        return sendJson(response, error.status || 400, { error: error.status ? error.message : 'Não foi possível processar o login.' });
    }
};

const crypto = require('node:crypto');

const COOKIE_NAME = 'site_admin_session';
const SESSION_TTL_SECONDS = 12 * 60 * 60;

function sendJson(response, status, payload, cacheControl = 'no-store') {
    response.statusCode = status;
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.setHeader('Cache-Control', cacheControl);
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.end(JSON.stringify(payload));
}

function getAdminConfig() {
    return {
        username: process.env.ADMIN_USERNAME || '',
        password: process.env.ADMIN_PASSWORD || '',
        secret: process.env.ADMIN_SESSION_SECRET || ''
    };
}

function isAuthConfigured() {
    const config = getAdminConfig();
    return Boolean(config.username && config.password.length >= 12 && config.secret.length >= 32);
}

function isAdminServiceConfigured() {
    return isAuthConfigured() && Boolean(process.env.GITHUB_TOKEN);
}

function safeEqual(left, right) {
    const a = crypto.createHash('sha256').update(String(left)).digest();
    const b = crypto.createHash('sha256').update(String(right)).digest();
    return crypto.timingSafeEqual(a, b);
}

function sign(payload) {
    return crypto.createHmac('sha256', getAdminConfig().secret).update(payload).digest('base64url');
}

function createSession(username) {
    const payload = Buffer.from(JSON.stringify({ username, expires: Date.now() + SESSION_TTL_SECONDS * 1000 })).toString('base64url');
    return `${payload}.${sign(payload)}`;
}

function getCookie(request, name) {
    const cookies = String(request.headers.cookie || '').split(';');
    for (const part of cookies) {
        const separator = part.indexOf('=');
        if (separator < 0) continue;
        if (part.slice(0, separator).trim() === name) {
            try { return decodeURIComponent(part.slice(separator + 1).trim()); }
            catch (_) { return ''; }
        }
    }
    return '';
}

function hasAdminSession(request) {
    if (!isAuthConfigured()) return false;
    const token = getCookie(request, COOKIE_NAME);
    const [payload, signature, extra] = token.split('.');
    if (!payload || !signature || extra) return false;
    if (!safeEqual(signature, sign(payload))) return false;
    try {
        const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
        return session.username === getAdminConfig().username && Number(session.expires) > Date.now();
    } catch (_) { return false; }
}

function cookieOptions(request, maxAge) {
    const isSecure = request.headers['x-forwarded-proto'] === 'https' || process.env.NODE_ENV === 'production';
    return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${isSecure ? '; Secure' : ''}`;
}

function setSessionCookie(request, response, username) {
    const isSecure = request.headers['x-forwarded-proto'] === 'https' || process.env.NODE_ENV === 'production';
    response.setHeader('Set-Cookie', `${COOKIE_NAME}=${encodeURIComponent(createSession(username))}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_TTL_SECONDS}${isSecure ? '; Secure' : ''}`);
}

function clearSessionCookie(request, response) {
    response.setHeader('Set-Cookie', cookieOptions(request, 0));
}

function isSameOriginRequest(request) {
    const origin = request.headers.origin;
    const host = request.headers['x-forwarded-host'] || request.headers.host;
    if (request.headers['sec-fetch-site'] === 'cross-site') return false;
    if (!origin || !host) return false;
    try { return new URL(origin).host.toLowerCase() === String(host).toLowerCase(); }
    catch (_) { return false; }
}

async function readJsonBody(request, maxBytes = 4_000_000) {
    if (request.body !== undefined) {
        const body = typeof request.body === 'string' ? request.body : JSON.stringify(request.body);
        if (Buffer.byteLength(body) > maxBytes) throw Object.assign(new Error('A solicitação excede o tamanho permitido.'), { status: 413 });
        return typeof request.body === 'object' && request.body !== null ? request.body : JSON.parse(body || '{}');
    }
    const chunks = [];
    let size = 0;
    for await (const chunk of request) {
        size += chunk.length;
        if (size > maxBytes) throw Object.assign(new Error('A solicitação excede o tamanho permitido.'), { status: 413 });
        chunks.push(chunk);
    }
    return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

module.exports = { sendJson, getAdminConfig, isAuthConfigured, isAdminServiceConfigured, safeEqual, hasAdminSession, setSessionCookie, clearSessionCookie, isSameOriginRequest, readJsonBody };

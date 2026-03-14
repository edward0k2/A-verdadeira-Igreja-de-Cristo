const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.json': 'application/json'
};

module.exports = (req, res) => {
    // Extrai o caminho do arquivo
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    
    // Se for raiz, serve index.html
    if (urlPath === '/' || urlPath === '') {
        urlPath = '/index.html';
    }
    
    // Remove barras duplas e normaliza o caminho
    urlPath = urlPath.replace(/\/+/g, '/');
    
    // Constrói o caminho do arquivo
    const basePath = process.cwd();
    let filePath = path.join(basePath, urlPath);
    
    // Normaliza e valida caminho como segurança
    const normalizedPath = path.normalize(filePath);
    if (!normalizedPath.startsWith(basePath)) {
        res.writeHead(403);
        res.end('Acesso negado');
        return;
    }

    const extname = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    try {
        if (!fs.existsSync(normalizedPath)) {
            res.writeHead(404);
            res.end('Arquivo não encontrado');
            return;
        }
        
        const content = fs.readFileSync(normalizedPath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    } catch (error) {
        res.writeHead(500);
        res.end('Erro no servidor: ' + error.message);
    }
};

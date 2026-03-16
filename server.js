const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

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

const server = http.createServer((req, res) => {
    // Extrai o caminho do arquivo ignorando a query string (?v=1.4) e decodifica caracteres como %20
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = '.' + urlPath;
    
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('Arquivo não encontrado');
            } else {
                res.writeHead(500);
                res.end('Erro no servidor: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

function startServer(port) {
    server.listen(port, () => {
        console.log(`\x1b[32m✔ Servidor rodando em http://localhost:${port}\x1b[0m`);
        console.log('Pressione Ctrl+C para encerrar.');
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`\x1b[33m! Porta ${port} ocupada, tentando porta ${port + 1}...\x1b[0m`);
            startServer(port + 1);
        } else {
            console.error('Erro ao iniciar o servidor:', err);
        }
    });
}

startServer(PORT);

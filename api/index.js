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
    
    // Constrói o caminho do arquivo
    let filePath = path.join(process.cwd(), urlPath);
    
    // Garante que o arquivo existe e está dentro do diretório permitido
    const realPath = fs.realpathSync(process.cwd());
    if (!fs.realpathSync(filePath).startsWith(realPath)) {
        res.status(404).send('Arquivo não encontrado');
        return;
    }

    const extname = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    try {
        const content = fs.readFileSync(filePath);
        res.setHeader('Content-Type', contentType);
        res.status(200).send(content);
    } catch (error) {
        if (error.code === 'ENOENT') {
            res.status(404).send('Arquivo não encontrado');
        } else {
            res.status(500).send('Erro no servidor: ' + error.message);
        }
    }
};

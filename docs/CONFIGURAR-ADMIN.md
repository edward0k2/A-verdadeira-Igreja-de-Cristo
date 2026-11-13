# Configurar o acesso administrativo

O formulário de login só libera ações depois que a API valida a sessão. A senha e o token do GitHub ficam no ambiente do servidor; não os coloque no HTML, JavaScript, Git ou mensagens públicas.

## Variáveis de ambiente da Vercel

Abra **Vercel → projeto → Settings → Environment Variables** e cadastre, para Production (e Preview somente se quiser testar nesses deploys):

| Variável | Valor |
| --- | --- |
| `ADMIN_USERNAME` | O nome de usuário escolhido por você. |
| `ADMIN_PASSWORD` | Uma senha exclusiva com pelo menos 12 caracteres. Use um gerenciador de senhas. |
| `ADMIN_SESSION_SECRET` | Segredo aleatório com pelo menos 32 caracteres. Gere localmente com `node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"`. |
| `GITHUB_TOKEN` | Fine-grained personal access token com acesso somente a este repositório e permissão **Contents: Read and write**. É necessário para salvar posts e a configuração da live. |

Opcionalmente, defina `GITHUB_REPOSITORY` (padrão `edward0k2/A-verdadeira-Igreja-de-Cristo`) e `GITHUB_BRANCH` (padrão `main`). Nunca use o token no cliente. Depois de salvar as variáveis, faça um redeploy na Vercel para ativá-las.

As rotas administrativas usam cookie de sessão `HttpOnly`, `Secure` em produção, `SameSite=Strict`, validade de 12 horas, verificação de origem e comparação de credenciais em tempo constante. A API valida a sessão também nas operações de gravação; esconder os formulários na página não é a proteção principal.

## Como os dados são publicados

- Posts compartilhados e a live ficam em `data/blog-posts.json` e `data/terco-live.json`.
- Ao salvar, a API grava esses arquivos no branch configurado pela API do GitHub. O commit aciona o deploy normal do site.
- O catálogo público do blog é leitura para visitantes; somente uma sessão administrativa válida pode criar, editar ou excluir publicações.
- A configuração da live controla qual vídeo ou canal aparece no player público. Ela não inicia nem agenda uma transmissão no YouTube. Para transmitir, use o YouTube Studio na conta autorizada.
- Fotos são compactadas no navegador e armazenadas como dados incorporados no JSON do blog. Se o arquivo crescer demais, reduza as imagens ou mantenha menos fotos por post.

## Execução local

Configure as mesmas variáveis no ambiente do terminal antes de executar `node server.js`. Para o token, use o mesmo token fine-grained do GitHub. Não salve essas variáveis em arquivos rastreados pelo Git.

Sem essas variáveis, o conteúdo público inicial continua legível, mas o login e as operações de publicação retornam a mensagem de configuração pendente.

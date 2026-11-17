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
- A configuração permanente da Santa Missa fica em `data/missa-live.json` e usa o mesmo login administrativo.
- Ao salvar, a API grava esses arquivos no branch configurado pela API do GitHub. O commit aciona o deploy normal do site.
- O catálogo público do blog é leitura para visitantes; somente uma sessão administrativa válida pode criar, editar ou excluir publicações.
- A configuração das lives controla o vídeo/canal exibido no player público, mas não inicia nem agenda uma transmissão. Use o YouTube Studio para transmitir.
- Posts aceitam data, título, subtítulo, texto, até cinco fotos, nome/avatar do redator e links sociais. Vídeo e áudio podem ser URLs ou arquivos curtos (até 1,2 MB cada); fotos e avatar são compactados no navegador. O JSON tem um limite total de tamanho; use URLs para mídia maior.
- Ao começar uma transmissão, o administrador marca **Estou ao vivo** e salva para mostrar o player flutuante a todos. Deve desmarcar ao encerrar; o site não detecta o estado da live do YouTube automaticamente. O visitante pode fechar o aviso até a próxima sessão do navegador.

## Execução local

Configure as mesmas variáveis no ambiente do terminal antes de executar `node server.js`. Para o token, use o mesmo token fine-grained do GitHub. Não salve essas variáveis em arquivos rastreados pelo Git.

Sem essas variáveis, o conteúdo público inicial continua legível, mas o login e as operações de publicação retornam a mensagem de configuração pendente.

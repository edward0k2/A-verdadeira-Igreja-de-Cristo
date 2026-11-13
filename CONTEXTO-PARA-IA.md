# Contexto do projeto — História da Salvação

Este documento reúne o contexto necessário para que outra IA possa continuar o trabalho no site sem depender do histórico desta conversa. Revise o código e o estado atual do Git antes de alterar qualquer coisa: este arquivo é um guia, não substitui a implementação.

## Projeto

- **Nome:** História da Salvação — “Jesus, Eu Confio em Vós”.
- **Repositório:** [edward0k2/A-verdadeira-Igreja-de-Cristo](https://github.com/edward0k2/A-verdadeira-Igreja-de-Cristo), branch principal `main`.
- **Site publicado:** <https://a-verdadeira-igreja-de-cristo.vercel.app>.
- **Propósito declarado pelo autor:** “Este projeto é simplesmente minha obrigação e dever como filho e servo, do único e verdadeiro Deus, Jesus Cristo.”
- **Idioma da interface e de colaboração com o autor:** português brasileiro.
- **Tecnologia:** site multipágina visualizado como aplicação de página única, feito principalmente com HTML, CSS e JavaScript sem framework. Há uma API Node.js para conteúdo diário. Não há `package.json` nem etapa de build no fluxo principal.

## Como continuar o trabalho

1. Leia este documento e confira `git status`, o histórico recente e os arquivos que serão alterados.
2. Preserve o que já existe. Em especial, não remova perfis de santos ou papas ao acrescentar novos dados.
3. Mantenha a interface responsiva, acessível por teclado e legível em telas pequenas. A escala global de texto e outras preferências são importantes para idosos.
4. Para dados religiosos e históricos, prefira fontes primárias da Igreja — principalmente Vaticano, Santa Sé e documentos oficiais — e deixe claras as datas aproximadas ou tradições incertas. Não invente detalhes biográficos ou doutrinais para preencher lacunas.
5. O autor pediu explicitamente que as alterações sejam sempre commitadas e enviadas (`push`) para `origin/main`. Faça isso ao concluir cada tarefa de código, confira que o push terminou e informe o hash do commit. Não faça push de alterações que já estavam no diretório sem antes entender de quem são.
6. Comunique-se em português brasileiro, de forma objetiva. Quando o autor fornece imagens, use os arquivos recebidos e preserve a composição solicitada.

Comandos de desenvolvimento local:

```powershell
node server.js
```

O servidor local começa em `http://localhost:3000` e tenta a porta seguinte se a 3000 estiver ocupada. Também serve arquivos estáticos e a rota `/api/daily-content`. Em hospedagem Vercel, `api/daily-content.js` implementa a função correspondente.

## Estrutura importante

| Arquivo ou pasta | Conteúdo |
| --- | --- |
| `index.html` | Estrutura da interface, navegação e seções do site. |
| `style.css` | Estilos, temas, animações e breakpoints responsivos. |
| `script.js` | Navegação, leitores, filtros, pesquisa, paginação e interações. |
| `santos-data.js` | Perfis-base de santos e personagens bíblicos. |
| `santos-adicionais-data.js` | 200 perfis adicionais de santos e beatos. |
| `santos-mais-data.js` | Mais 50 perfis, IDs 3200–3249, adicionados em novembro de 2026. |
| `papas-data.js` | Dados dos 267 pontificados apresentados na linha do tempo. |
| `docs/fontes-papas.md` | Fontes e critérios editoriais usados para os perfis dos papas. |
| `bible-story-data.js` | Percursos bíblicos com eventos, personagens e referências. |
| `biblia-matos-soares-completa.json` | Texto integral dos 73 livros da Bíblia na tradução católica do Pe. Manuel de Matos Soares. |
| `bible-passages.json` | Trechos bíblicos usados nos relatos e cards. |
| `scripts/gerar-passagens-biblia.cjs` | Gera os trechos a partir do corpus integral. |
| `FONTES-BIBLIA.md` | Proveniência, tradução, licença e limitações conhecidas do texto bíblico. |
| `milagres-eucaristicos-data.js` | Registros geográficos do catálogo de milagres eucarísticos associado à exposição de Carlo Acutis. |
| `api/daily-content.js` | Carrega notícias e santo do dia a partir de Vatican News. |
| `coletania de imagens/` | Imagens da página inicial, do Santo Terço e outros materiais locais. |
| `assets/papas/` | Retratos locais dos papas. |

As tags `<script>` no final de `index.html` definem a ordem de carregamento dos dados; os arquivos de santos devem ser carregados antes de `script.js`, pois acrescentam itens a `saintsData`.

## Funcionalidades atuais

### Página inicial e Bíblia

- Alternância entre o **Percurso bíblico** (eventos, personagens e referências) e **Ler a Bíblia completa**.
- O leitor completo contém os 73 livros do cânon católico, seleção de livro e capítulo e apresentação versículo por versículo.
- Marca-texto com cores; as marcações ficam no `localStorage` do navegador e não são enviadas ao servidor.
- Os cards de percurso exibem o texto dos trechos bíblicos, não apenas a referência. A formatação acompanha o leitor integral.
- Os perfis dos personagens bíblicos podem ser abertos a partir do percurso. Busca e filtros ajudam a localizar conteúdo.
- `FONTES-BIBLIA.md` explica que a fonte digital informa domínio público para o texto histórico e CC0 para a compilação, mas também alerta sobre possíveis erros de OCR. Preserve a indicação da tradução e não apresente o corpus como edição litúrgica contemporânea.

### Sobre a Igreja e papas

- Linha do tempo de **267 pontificados**, na ordem oficial da Santa Sé; os 20 perfis iniciais do autor foram preservados.
- Busca por nome, período ou história, filtro por século e ordenação cronológica ou alfabética.
- Em telas móveis, a lista apresenta oito papas por página. A paginação não substitui os filtros.
- Fontes biográficas, cronologia e retratos são registrados em `papas-data.js`; detalhes editoriais estão em `docs/fontes-papas.md`.

### Santos, beatos e mártires

- Catálogo atual: **264 perfis** (base existente + 200 registros adicionais + 50 registros IDs 3200–3249).
- Busca por santo, data ou história, filtro por período e ordenação cronológica ou alfabética.
- Em telas móveis, aparecem dez perfis por página.
- A ordenação cronológica usa `anoCronologico` quando disponível; datas antigas aproximadas devem continuar marcadas como aproximadas. O leitor suporta perfis sem retrato.
- Os 50 registros mais recentes têm resumos biográficos curtos e não têm retrato nem link de fonte individual no campo `fontes`. Ao revisar ou ampliar esses perfis, priorize referências oficiais e acrescente os links por perfil; não os descreva como se já tivessem sido todos verificados em fichas individuais do Vaticano.
- Para adicionar nomes, conferir duplicatas nos três arquivos de dados, manter IDs únicos e não remover os perfis já cadastrados.
- O nome de navegação “Santos Incorruptíveis” é legado da interface; o catálogo inclui santos, beatos e mártires e não deve afirmar que todos são incorruptos.

### Santo Terço

- A aba contém história do Terço, mistérios gozosos, luminosos, dolorosos e gloriosos, dias tradicionais, breves explicações e referências bíblicas, instruções e orações.
- Os mistérios foram apresentados a partir da carta apostólica *Rosarium Virginis Mariae* e de páginas do Vaticano. Datas e referências associadas à Assunção e à Coroação de Maria devem ser identificadas como imagens bíblicas para contemplação, não como relatos evangélicos diretos dos acontecimentos.
- Os cards dos mistérios ocupam a largura dos quadros laterais em telas grandes. O título e o parágrafo introdutório ficam na largura central original; tablet e celular reorganizam a grade.
- Imagens laterais atuais: `coletania de imagens/ressurreicao-jesus-terco.png` à esquerda e `coletania de imagens/nossa-senhora-sao-domingos-terco.png` à direita. Os quadros reutilizam as classes visuais `hero-side` e `hero-img` da página inicial.
- Há um player incorporado do YouTube para uma live e uma área de áudio. O player **não inicia nem agenda uma transmissão**. A configuração do link da live é salva em `localStorage` sob `tercoYoutubeLive`, apenas naquele navegador. Isso não constitui autenticação nem controle real de acesso: não prometa que a live está protegida por permissões de conta. O autor quer manter a função privada e só para ele; uma proteção efetiva exigiria autenticação/autorização no servidor.

### Biblioteca e Catecismo

- As abas “Livros” e “Catecismo” têm catálogos próprios; não reutilizar indevidamente os títulos dos livros em cards do Catecismo.
- O autor pediu que a palavra “Personagens” fosse removida dos cards de livros. Não reintroduzir esse rótulo sem solicitação.
- Há links de leitura e download de arquivos disponíveis localmente.

### Milagres Eucarísticos

- Aba local, com busca e filtros por país e data; abrir um registro mostra leitura do PDF dentro de um diálogo da própria página e disponibiliza botão para baixar.
- A exposição/catálogo original fica nos créditos e nos links de fonte. A preferência do autor é não ser mandado para outro site para ler o material.
- Documentos são buscados no host da exposição; a disponibilidade e o suporte de PDF dentro do navegador podem variar.

### Novidades e Orações diárias

- Um botão com seta no navbar abre o menu estendido com “Novidades” e “Orações diárias”.
- `api/daily-content.js` lê o RSS em português do Vatican News e a página do santo do dia. O endpoint aplica timeout e cache; se a fonte estiver indisponível, a interface deve informar a falha e preservar os links para consulta da fonte.

### Acessibilidade, navegação e layout

- O controle de acessibilidade fica recolhido em um ícone no fim do navbar. Permite reduzir, ampliar e resetar a fonte global; a escala é salva no navegador (`siteFontScale`).
- Navbar responsivo com menu hamburger; o autor pediu que, aberto, o ícone se transforme numa cruz dourada de braços assimétricos (braço horizontal acima do centro), mantendo contraste.
- Em geral, usar filtros e pesquisa para listas extensas e evitar rolagem excessiva em celular.
- A linha do tempo bíblica centraliza um evento quando há apenas um marco; os nomes dos personagens devem permanecer dentro da largura visível.
- A leitura das histórias de santos/papas usa um modal com animação de páginas; os textos não podem atravessar o vinco nem sair da folha. A versão móvel muda para uma coluna.
- O progresso de leitura é menor no celular; armazenamento local usa `historiaSalvacaoProgress`.
- No rodapé, GitHub e LinkedIn são ícones que o autor aprovou; ajustes visuais no rodapé devem manter esses ícones e alterar os demais elementos conforme solicitado.

## Preferências editoriais e de interface do autor

- Preservar ordem cronológica quando solicitada e manter filtros/pesquisa utilizáveis.
- Manter o estilo visual já estabelecido: fundo marfim, dourado, bordas bege, tipografia serifada nos títulos e foco em contraste.
- O autor fornece imagens para inserir nos espaços previstos; não substituí-las por imagens arbitrárias.
- Ao ajustar largura, distinguir o elemento pedido: em uma solicitação recente, apenas os cards dos mistérios deveriam ficar largos; o título e o parágrafo inicial deveriam permanecer estreitos.
- Preferir resumos originais, sem copiar blocos extensos de fontes protegidas. Manter créditos e links de referência.

## Dados locais do navegador e privacidade

| Chave | Uso |
| --- | --- |
| `siteFontScale` | Preferência da escala global do texto. |
| `bibleHighlightsV1` | Marcações de versículos da Bíblia. |
| `tercoYoutubeLive` | Link/ID do YouTube salvo localmente para o player do Terço. |
| `historiaSalvacaoProgress` | Progresso e último ponto de leitura. |

`localStorage` é por navegador e dispositivo; não sincroniza entre usuários e não é um mecanismo de autenticação.

## Estado recente

Na criação deste documento (13 de novembro de 2026), os últimos commits incluem a inclusão de 50 santos (`0b9fb68`), redução da largura do painel de filtros (`9347e0d`), ajuste de largura dos cards dos mistérios (`13351e1`) e inclusão das imagens laterais do Terço (`679cf59`). O autor espera que cada tarefa seguinte também seja commitada e enviada para `main`.


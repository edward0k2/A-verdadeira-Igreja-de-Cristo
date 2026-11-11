# Texto bíblico e licença

O leitor bíblico usa a tradução católica do Pe. Manuel de Matos Soares, a partir da Vulgata Sixto-Clementina, com aprovação eclesiástica histórica indicada no conjunto de dados. O cânon contém os 73 livros, inclusive os deuterocanônicos.

O arquivo `biblia-matos-soares-completa.json` foi obtido do projeto [bibliacatolica/biblia](https://github.com/bibliacatolica/biblia). O repositório de origem declara o texto histórico como domínio público e a compilação digital como CC0 1.0. O próprio projeto informa que a transcrição foi corrigida com auxílio de IA e que ainda podem existir erros pontuais de OCR; por isso a edição aparece identificada no leitor e não é apresentada como uma edição litúrgica contemporânea.

O corpus integral é carregado somente quando o leitor completo é aberto. Os trechos citados nos percursos são gerados de forma reproduzível por `scripts/gerar-passagens-biblia.cjs` e servidos sob demanda pelo arquivo `bible-passages.json`. As marcações de versículos são guardadas localmente no navegador e não são enviadas ao servidor.

## Percursos e referências

`bible-story-data.js` contém resumos editoriais breves e referências bíblicas para destacar personagens e passagens de cada livro. São guias de leitura, separados do texto bíblico integral. A numeração segue o conjunto de dados de Matos Soares.

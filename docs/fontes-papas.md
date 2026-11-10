# Fontes dos perfis dos papas

Os perfis 21 a 267 foram preenchidos a partir da [lista de pontífices da Santa Sé](https://www.vatican.va/content/vatican/pt.html) e de suas fichas individuais, consultadas em 10 de novembro de 2026. Os primeiros 20 perfis do projeto foram preservados.

Cada novo registro em `papas-data.js` contém:

- nome, período, apresentação e resumo dos dados biográficos disponíveis;
- `dadosPontificado`, com a grafia e as datas da ficha oficial;
- `fontes`, com a ficha individual e, quando utilizados, documentos ou biografias complementares;
- `fonteFoto`, com a URL exata do retrato disponibilizado pelo Vaticano;
- `consultadoEm`, com a data de consulta.

Os retratos foram baixados para `assets/papas/`, preservando os arquivos publicados pelo Vaticano. A interface usa essas cópias locais e oferece o link da imagem original nos detalhes. A indicação da origem não representa uma declaração de licença aberta das imagens.

## Critérios históricos

- A sequência tem **267 pontificados**, seguindo a numeração oficial. Bento IX ocupa as posições 145, 147 e 150, com os três períodos identificados e o mesmo retrato.
- A ordem segue o catálogo da Santa Sé, inclusive nos períodos com datas sobrepostas. Não foram incluídos antipapas além da sequência reconhecida pela fonte.
- Os períodos dos cartões resumem os anos. As datas completas, as alternativas (`ou`) e as reticências foram mantidas na página de referências. Quando o registro inicial reúne acontecimentos em dois anos, ambos aparecem no resumo.
- As datas de início da ficha podem reunir eleição, consagração e inauguração. Elas não foram tratadas como se fossem sempre uma única data de eleição.
- O fim do pontificado não equivale necessariamente ao falecimento: Bento XVI encerrou seu ministério em 28 de fevereiro de 2013. Francisco encerrou o pontificado em 21 de abril de 2025. Leão XIV consta com o pontificado em curso na consulta.
- Muitas fichas antigas oferecem apenas cronologia, origem e, às vezes, nome de nascimento. Nesses casos, o perfil apresenta esses dados e sua posição na sucessão. O quadro recebe o título **Na sucessão apostólica**, sem inventar um legado doutrinal específico.
- Vinte e cinco fichas receberam informação adicional de documentos e biografias da Santa Sé. Os textos são resumos em português; os links de cada perfil identificam as fontes utilizadas. Quando a fonte complementar está em outro idioma, isso é indicado no link.

## Verificação

```sh
node --check papas-data.js
node --check script.js
node scripts/verificar-papas.cjs
```

A verificação offline confere a sequência, os campos obrigatórios, as referências, a existência e a assinatura dos PNGs e casos históricos como os três períodos de Bento IX e as datas alternativas. A atualização de um novo pontificado deve incluir a revisão do total esperado no verificador.

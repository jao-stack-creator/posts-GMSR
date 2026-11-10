# Posts GMSR Maison

Posts de Instagram da **GMSR Maison** ([@gmsr_maison](https://www.instagram.com/gmsr_maison/)).

> *Luxury isn't what we sell, it's what you become.*

## Site de apresentação

Página para mostrar os posts ao cliente: **https://jao-stack-creator.github.io/posts-GMSR/**

O site é o `index.html` da raiz. Depois de gerar PNGs novos, rode `npm run site` (ou `npm run render`, que já faz os dois) para atualizar a lista de slides e as legendas.

## Posts prontos

**Versão 1** (identidade azul, tipografia condensada):

| # | Post | Slides | Pasta |
|---|------|--------|-------|
| 01 | Sobre a marca | 5 | [`posts/01-sobre-a-marca`](posts/01-sobre-a-marca) |
| 02 | Envio para todo o Brasil | 4 | [`posts/02-envio-todo-brasil`](posts/02-envio-todo-brasil) |
| 03 | Nossos produtos e grifes | 7 | [`posts/03-produtos`](posts/03-produtos) |

**Versão 2** (editorial escuro, com fotos reais do acervo em polaroids; inspirada no formato de processo numerado):

| # | Post | Slides | Pasta |
|---|------|--------|-------|
| 01 | Por que escolher a GMSR | 5 | [`posts-v2/01-sobre-a-marca`](posts-v2/01-sobre-a-marca) |
| 02 | Da maison para a sua porta | 5 | [`posts-v2/02-envio-todo-brasil`](posts-v2/02-envio-todo-brasil) |
| 03 | O acervo | 5 | [`posts-v2/03-produtos`](posts-v2/03-produtos) |

**Post único · Mapa** (imagem única sobre o envio, em duas cores):

| # | Post | Pasta |
|---|------|-------|
| 01 | Mapa do Brasil · azul GMSR | [`posts-extra/01-mapa-azul`](posts-extra/01-mapa-azul) |
| 02 | Mapa do Brasil · roxo | [`posts-extra/02-mapa-roxo`](posts-extra/02-mapa-roxo) |

O mapa (27 estados) vem do Natural Earth, que é domínio público, e fica em `assets/mapa-brasil.js`.

As fotos da versão 2 ficam em `assets/fotos/`. Elas foram recortadas dos prints do feed; se tiverem as fotos originais em alta, substituam mantendo os mesmos nomes e rodem `npm run render`. O estilo da versão 2 está em `shared/gmsr-v2.css`.

Cada pasta tem:
- `png/`: as imagens finais em 1080×1350 (4:5), prontas para postar em ordem
- `legenda.md`: a legenda com hashtags
- `slides.html`: o arquivo-fonte, para editar textos e cores

## Identidade visual

O layout se inspira na estrutura do perfil de referência: faixa repetida com o nome, tipografia grande e condensada, palavras em destaque, metadados em fonte mono e contraste forte entre os slides. Tudo foi adaptado para as cores e o logo da GMSR.

| Cor | Hex | Uso |
|-----|-----|-----|
| Navy GMSR | `#32445C` | cor do logo, fundos de destaque |
| Ink | `#121A26` | fundo escuro principal |
| Azul céu | `#8CC8EE` | destaques e palavras-chave |
| Azul fundo | `#3E8FCB` | fundo texturizado (o mesmo clima do fundo das fotos do feed) |
| Off-white | `#F3F0E9` | textos e faixas |

**Fontes** (todas gratuitas, licença OFL; ficam em `assets/fonts`):
- **Antonio**: títulos
- **Bodoni Moda** itálico: frases de efeito
- **Inter**: textos corridos
- **IBM Plex Mono**: detalhes e metadados

**Logo:** em `assets/logo`, há o selo navy e versões do monograma em branco e em navy, todas com fundo transparente. Elas foram recortadas da foto de perfil. Se vocês tiverem o arquivo original em alta (PNG/SVG), basta substituir mantendo os mesmos nomes.

## Como editar e gerar de novo

1. Abra `posts/<post>/slides.html` no navegador para ver todos os slides.
2. Edite os textos direto no HTML. As cores e as fontes ficam em `shared/gmsr.css`.
3. Gere os PNGs novamente:

```bash
npm install
npx playwright install chromium
npm run render          # todos os posts
npm run render -- v2/02 # só o post 02 da versão 2
```

## Criar um post novo

Copie uma pasta de `posts/`, renomeie com o próximo número (ex.: `04-nome-do-post`) e edite o `slides.html`. Cada `<section class="slide">` vira uma imagem.

Classes úteis:
- `backdrop`: fundo azul texturizado
- `navy`: fundo navy
- sem classe extra: fundo escuro
- `.ticker`: a faixa repetida com texto (use o atributo `data-text="..."`)

# Posts GMSR Maison

Posts de Instagram da **GMSR Maison** ([@gmsr_maison](https://www.instagram.com/gmsr_maison/)).

> *Luxury isn't what we sell, it's what you become.*

## Site de apresentação

Página para mostrar os posts ao cliente: **https://jao-stack-creator.github.io/posts-GMSR/**

O site é o `index.html` da raiz. Depois de gerar PNGs novos, rode `npm run site` (ou `npm run render`, que já faz os dois) para atualizar a lista de slides e as legendas.

## Posts

São **3 posts** (A marca e o dono · Encomenda e envio · O acervo), cada um com pelo menos 5 slides, em **3 versões** de visual. No site, escolha a versão e depois o post.

| Versão | Visual | Post 1 · A marca e o dono | Post 2 · Encomenda e envio | Post 3 · O acervo |
|---|---|---|---|---|
| 1 | Azul GMSR, tipografia condensada | [`posts/01-sobre-a-marca`](posts/01-sobre-a-marca) (6) | [`posts/02-envio-todo-brasil`](posts/02-envio-todo-brasil) (5) | [`posts/03-produtos`](posts/03-produtos) (7) |
| 2 | Editorial escuro com polaroids | [`posts-v2/01-sobre-a-marca`](posts-v2/01-sobre-a-marca) (6) | [`posts-v2/02-envio-todo-brasil`](posts-v2/02-envio-todo-brasil) (6) | [`posts-v2/03-produtos`](posts-v2/03-produtos) (5) |
| 3 | Noir, fonte larga e fotos grandes | [`posts-v3/01-marca`](posts-v3/01-marca) (5) | [`posts-v3/02-encomenda`](posts-v3/02-encomenda) (5) | [`posts-v3/03-acervo`](posts-v3/03-acervo) (5) |

Cada pasta tem `png/` (imagens prontas, em ordem), `legenda.md` e `slides.html` (fonte editável).

Fotos em `assets/fotos/` (peças, `dono.jpg` e `acervo-mesa.jpg`). O mapa (Natural Earth, domínio público) fica em `assets/mapa-brasil.js`.

Rascunhos que saíram do site, mas continuam no repositório: `posts-extra/` (mapa em imagem única) e `posts-grade/` (grade de 3 posts "Quem é o dono").

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
npm run render -- v3/02 # só o post 02 da versão 3
```

## Criar um post novo

Copie uma pasta de `posts/`, renomeie com o próximo número (ex.: `04-nome-do-post`) e edite o `slides.html`. Cada `<section class="slide">` vira uma imagem.

Classes úteis:
- `backdrop`: fundo azul texturizado
- `navy`: fundo navy
- sem classe extra: fundo escuro
- `.ticker`: a faixa repetida com texto (use o atributo `data-text="..."`)

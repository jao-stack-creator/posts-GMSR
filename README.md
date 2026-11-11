# Posts GMSR Maison

Posts de Instagram da **GMSR Maison** ([@gmsr_maison](https://www.instagram.com/gmsr_maison/)).

> *Luxury isn't what we sell, it's what you become.*

## Site de apresentação

Página para mostrar os posts ao cliente: **https://jao-stack-creator.github.io/posts-GMSR/**

O site é o `index.html` da raiz. Depois de gerar PNGs novos, rode `npm run site` (ou `npm run render`, que já faz os dois) para atualizar a lista de slides e as legendas.

## Posts

O site mostra a **grade do perfil** [`posts-grade/02-grade-mapa-processo`](posts-grade/02-grade-mapa-processo): o mapa na esquerda (sozinho) e, no meio e na direita, uma arte contínua com "Quem é o dono?" e "Como funciona". A ordem de postagem está no `legenda.md`. O post do meio vira o carrossel [`posts-grade/04-carrossel-dono`](posts-grade/04-carrossel-dono) (5 slides). O post da direita vira o carrossel [`posts-grade/03-carrossel-processo`](posts-grade/03-carrossel-processo) (6 slides), cujo slide 1 é a própria arte da grade.

Os posts não citam nomes de marcas nem afirmam originalidade. As pastas `posts/`, `posts-v2/`, `posts-v3/`, `posts-extra/` e `posts-grade/01-grade-loja` são rascunhos antigos e não aparecem no site.

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

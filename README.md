# Posts GMSR Maison

Posts de Instagram da **GMSR Maison** ([@gmsr_maison](https://www.instagram.com/gmsr_maison/)).

> *Luxury isn't what we sell, it's what you become.*

## Posts prontos

| # | Post | Slides | Pasta |
|---|------|--------|-------|
| 01 | Sobre a marca | 5 | [`posts/01-sobre-a-marca`](posts/01-sobre-a-marca) |
| 02 | Envio para todo o Brasil | 4 | [`posts/02-envio-todo-brasil`](posts/02-envio-todo-brasil) |
| 03 | Nossos produtos e grifes | 7 | [`posts/03-produtos`](posts/03-produtos) |

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
npm run render -- 02    # só o post 02
```

## Criar um post novo

Copie uma pasta de `posts/`, renomeie com o próximo número (ex.: `04-nome-do-post`) e edite o `slides.html`. Cada `<section class="slide">` vira uma imagem.

Classes úteis:
- `backdrop`: fundo azul texturizado
- `navy`: fundo navy
- sem classe extra: fundo escuro
- `.ticker`: a faixa repetida com texto (use o atributo `data-text="..."`)

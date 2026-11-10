// Gera site-data.js (usado pelo index.html) a partir de posts*/*/legenda.md e posts*/*/png/
// Uso: npm run site
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const versions = [
  { id: 'v1', name: 'Versão 1', base: 'posts', titles: {
    '01-sobre-a-marca': 'Sobre a marca',
    '02-envio-todo-brasil': 'Envio para todo o Brasil',
    '03-produtos': 'Produtos e grifes',
  } },
  { id: 'v2', name: 'Versão 2', base: 'posts-v2', titles: {
    '01-sobre-a-marca': 'Por que escolher a GMSR',
    '02-envio-todo-brasil': 'Da maison para a sua porta',
    '03-produtos': 'O acervo',
  } },
  { id: 'mapa', name: 'Post único · Mapa', base: 'posts-extra', titles: {
    '01-mapa-azul': 'Mapa do Brasil · azul GMSR',
    '02-mapa-roxo': 'Mapa do Brasil · roxo',
  } },
];

const out = versions.filter(v => existsSync(join(root, v.base))).map(v => ({
  id: v.id,
  name: v.name,
  posts: readdirSync(join(root, v.base)).sort().filter(d => existsSync(join(root, v.base, d, 'png'))).map((dir, i) => {
    const md = readFileSync(join(root, v.base, dir, 'legenda.md'), 'utf8');
    const caption = (md.split('## Legenda')[1] || '').split('\n---')[0].trim();
    const slides = readdirSync(join(root, v.base, dir, 'png')).filter(f => f.endsWith('.png')).sort()
      .map(f => `${v.base}/${dir}/png/${f}`);
    return { n: i + 1, dir, title: v.titles[dir] || dir, caption, slides };
  }),
}));

writeFileSync(join(root, 'site-data.js'), `// gerado por scripts/build-site.mjs — não edite à mão\nwindow.VERSIONS = ${JSON.stringify(out, null, 2)};\n`);
for (const v of out) console.log(v.name + ': ' + v.posts.map(p => `Post ${p.n} (${p.slides.length})`).join(', '));

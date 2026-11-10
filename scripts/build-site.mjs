// Gera site-data.js (usado pelo index.html) a partir de posts*/*/legenda.md e posts*/*/png/
// Uso: npm run site
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const versions = [
  { id: 'aprovados', name: 'Aprovados pelo cliente', items: [
    { base: 'posts-v2', dir: '01-sobre-a-marca', title: 'Por que escolher a GMSR' },
    { base: 'posts-v2', dir: '02-envio-todo-brasil', title: 'Como funciona a sua encomenda' },
    { base: 'posts-extra', dir: '01-mapa-azul', title: 'Mapa do Brasil · imagem única' },
    { base: 'posts-grade', dir: '01-grade-loja', title: 'Grade · Quem é o dono', ratio: '3/4' },
  ] },
  { id: 'v1', name: 'Versão 1', base: 'posts', titles: {
    '01-sobre-a-marca': 'Sobre a marca',
    '02-envio-todo-brasil': 'Envio para todo o Brasil',
    '03-produtos': 'Produtos e grifes',
  } },
  { id: 'v2', name: 'Versão 2', base: 'posts-v2', titles: {
    '01-sobre-a-marca': 'Por que escolher a GMSR',
    '02-envio-todo-brasil': 'Como funciona a sua encomenda',
    '03-produtos': 'O acervo',
  } },
  { id: 'mapa', name: 'Post único · Mapa', base: 'posts-extra', titles: {
    '01-mapa-azul': 'Mapa do Brasil · azul GMSR',
    '02-mapa-roxo': 'Mapa do Brasil · roxo',
  } },
  { id: 'grade', name: 'Grade · 3 posts', base: 'posts-grade', ratio: '3/4', titles: {
    '01-grade-loja': 'A loja · Quem é o dono · Envio com mapa',
  } },
];

function load(base, dir, i, title, ratio) {
    const md = readFileSync(join(root, base, dir, 'legenda.md'), 'utf8');
    const caption = (md.split('## Legenda')[1] || '').split('\n---')[0].trim();
    let slides = readdirSync(join(root, base, dir, 'png')).filter(f => f.endsWith('.png')).sort()
      .map(f => `${base}/${dir}/png/${f}`);
    const preview = existsSync(join(root, base, dir, 'previa-grade.png')) ? `${base}/${dir}/previa-grade.png` : null;
    if (preview) slides = [preview, ...slides];
    return { n: i + 1, dir: `${base}/${dir}`, title, caption, slides, ratio: ratio || '4/5', preview: !!preview };
}

const out = versions.filter(v => v.items || existsSync(join(root, v.base))).map(v => ({
  id: v.id,
  name: v.name,
  posts: v.items
    ? v.items.map((it, i) => load(it.base, it.dir, i, it.title, it.ratio))
    : readdirSync(join(root, v.base)).sort().filter(d => existsSync(join(root, v.base, d, 'png')))
        .map((dir, i) => load(v.base, dir, i, v.titles[dir] || dir, v.ratio)),
}));

writeFileSync(join(root, 'site-data.js'), `// gerado por scripts/build-site.mjs — não edite à mão\nwindow.VERSIONS = ${JSON.stringify(out, null, 2)};\n`);
for (const v of out) console.log(v.name + ': ' + v.posts.map(p => `Post ${p.n} (${p.slides.length})`).join(', '));

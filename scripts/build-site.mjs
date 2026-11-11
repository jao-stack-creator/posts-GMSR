// Gera site-data.js (usado pelo index.html) a partir de posts*/*/legenda.md e posts*/*/png/
// Uso: npm run site
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const versions = [
  { id: 'grade', name: 'Grade do perfil', items: [
    { base: 'posts-grade', dir: '02-grade-mapa-processo', title: 'Mapa · Quem é o dono · Como funciona', ratio: '3/4' },
  ] },
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

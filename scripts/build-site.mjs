// Gera site-data.js (usado pelo index.html) a partir de posts/*/legenda.md e posts/*/png/
// Uso: npm run site
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const titles = {
  '01-sobre-a-marca': 'Sobre a marca',
  '02-envio-todo-brasil': 'Envio para todo o Brasil',
  '03-produtos': 'Produtos e grifes',
};

const posts = readdirSync(join(root, 'posts')).sort().filter(d => existsSync(join(root, 'posts', d, 'png'))).map((dir, i) => {
  const md = readFileSync(join(root, 'posts', dir, 'legenda.md'), 'utf8');
  const caption = (md.split('## Legenda')[1] || '').split('\n---')[0].trim();
  const slides = readdirSync(join(root, 'posts', dir, 'png')).filter(f => f.endsWith('.png')).sort()
    .map(f => `posts/${dir}/png/${f}`);
  return { n: i + 1, dir, title: titles[dir] || dir, caption, slides };
});

writeFileSync(join(root, 'site-data.js'), `// gerado por scripts/build-site.mjs — não edite à mão\nwindow.POSTS = ${JSON.stringify(posts, null, 2)};\n`);
console.log(posts.map(p => `Post ${p.n}: ${p.slides.length} slides`).join('\n'));

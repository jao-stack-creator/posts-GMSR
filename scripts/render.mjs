// Renderiza cada .slide de posts/*/slides.html em PNG 1080x1350
// Uso: node scripts/render.mjs        -> todos os posts
//      node scripts/render.mjs 02     -> só as pastas que começam com "02"
import { createRequire } from 'node:module';
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const { chromium } = createRequire(import.meta.url)('playwright');
const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const filter = process.argv[2] || '';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 1500 }, deviceScaleFactor: 1 });

for (const dir of readdirSync(join(root, 'posts')).filter(d => d.startsWith(filter)).sort()) {
  const html = join(root, 'posts', dir, 'slides.html');
  if (!existsSync(html)) continue;
  await page.goto(pathToFileURL(html).href);
  await page.evaluate(() => document.fonts.ready);
  const out = join(root, 'posts', dir, 'png');
  mkdirSync(out, { recursive: true });
  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const file = join(out, `slide-${String(i + 1).padStart(2, '0')}.png`);
    await slides[i].screenshot({ path: file });
    console.log('ok', file.slice(root.length + 1));
  }
}
await browser.close();

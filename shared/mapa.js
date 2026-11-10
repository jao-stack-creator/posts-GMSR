// Desenha o mapa do Brasil (window.MAPA_BR) dentro de cada elemento .mapa
// Cores por estado: atributo data-cores="#cor1,#cor2,..." (alterna entre elas)
document.querySelectorAll('.mapa').forEach(el => {
  const m = window.MAPA_BR;
  const cores = (el.dataset.cores || '#8CC8EE,#5FA8DF,#3E8FCB,#2D6FA8').split(',');
  const fundo = el.dataset.fundo || '#07090D';
  const label = el.dataset.label || '#07090D';
  const paths = m.states.map((s, i) =>
    `<path d="${s.d}" fill="${cores[i % cores.length]}" stroke="${fundo}" stroke-width="2.2" stroke-linejoin="round"/>`).join('');
  const ufs = m.states.map(s =>
    `<text x="${s.x}" y="${s.y + 5}" text-anchor="middle" font-family="Mono" font-size="${['DF', 'SE', 'AL', 'RN', 'PB', 'ES', 'RJ'].includes(s.uf) ? 11 : 15}" fill="${label}" opacity=".8">${s.uf}</text>`).join('');
  el.innerHTML = `<svg viewBox="0 0 ${m.w} ${m.h}" width="100%" height="100%">${paths}${ufs}</svg>`;
});

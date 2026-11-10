// Preenche automaticamente: faixas (.ticker), textura azul (.backdrop) e numeração (.counter)
document.querySelectorAll('.ticker').forEach(t => {
  const word = t.dataset.text || 'GMSR MAISON';
  t.innerHTML = Array.from({ length: 14 }, () => `<span>${word}</span><i>◆</i>`).join('');
});

document.querySelectorAll('.slide.backdrop').forEach((s, i) => {
  const seed = 7 + i * 13;
  s.insertAdjacentHTML('afterbegin', `
  <svg class="texture" viewBox="0 0 1080 1350" preserveAspectRatio="none">
    <filter id="tx${i}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.0035 0.005" numOctaves="5" seed="${seed}"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <rect width="1080" height="1350" filter="url(#tx${i})"/>
  </svg>
  <svg class="texture" style="opacity:.3" viewBox="0 0 1080 1350" preserveAspectRatio="none">
    <filter id="fx${i}"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="${seed + 1}"/><feColorMatrix type="saturate" values="0"/></filter>
    <rect width="1080" height="1350" filter="url(#fx${i})"/>
  </svg>
  <div class="vignette"></div>`);
});

const slides = [...document.querySelectorAll('.slide')];
const pad = n => String(n).padStart(2, '0');
slides.forEach((s, i) => s.querySelectorAll('.counter').forEach(c => c.textContent = `${pad(i + 1)} / ${pad(slides.length)}`));

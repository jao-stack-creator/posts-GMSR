# Junta os 3 posts da grade numa prévia de como ficam lado a lado no perfil
# Uso: python3 scripts/preview-grade.py
import glob, os
from PIL import Image
for d in sorted(glob.glob('posts-grade/*/')):
    t = [Image.open(f) for f in sorted(glob.glob(d + 'png/slide-*.png'))]
    if len(t) != 3: continue
    gap = 8
    s = Image.new('RGB', (3 * 1080 + 2 * gap, 1440), (255, 255, 255))
    for i, im in enumerate(t): s.paste(im, (i * (1080 + gap), 0))
    s.save(d + 'previa-grade.png')
    print('ok', d + 'previa-grade.png')

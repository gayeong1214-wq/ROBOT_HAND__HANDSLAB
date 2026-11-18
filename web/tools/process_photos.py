"""제조사 페이지에서 확인한 제품 사진을 웹용(webp)으로 변환한다.
사용: python3 tools/process_photos.py <다운로드 폴더> <scout/dl.json>
원본 비율은 유지하고, 투명 배경은 여백만 잘라낸다. 결과 목록은 data/photos.json."""
import json, sys, os
from PIL import Image
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PICKS = {  # 모델명: (다운로드 키, 사진이 실린 페이지)
 "Sharpa Wave W01": "3_0", "RH56DFX": "8_0", "RH56E2": "29_0", "RH56H1": "35_0", "RH56F2": "80_0",
 "RH5DG2": "86_0", "Allegro Hand V6 F": "58_2", "Allegro Hand V6 V": "64_33", "Allegro Hand V4": "82_4",
 "Dex2/5": "27_27", "Dex5-1": "27_29", "qb SoftHand Research": "77_5", "qb SoftHand2 Research": "46_11",
 "qb SoftHand Industry": "33_0", "DLR Hand II": "73_1", "DLR-HIT Hand II": "78_2",
 "LEAP Hand v2 Standard": "96_5",
}
def slug(s):
    import re
    return re.sub(r'-+', '-', re.sub(r'[^a-z0-9]+', '-', s.lower())).strip('-')
def main(dl, meta):
    res = json.load(open(meta)); out = {}
    urls = {f"{i}_{k}": u for i, items in res.items() for k, u, size, n in items}
    for model, key in PICKS.items():
        im = Image.open(os.path.join(dl, key + '.bin'))
        alpha = im.mode in ('RGBA', 'LA', 'P') and im.convert('RGBA').getextrema()[3][0] < 250
        im = im.convert('RGBA')
        if alpha:
            box = im.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox()
            im = im.crop(box)
            bg = None
        else:
            im = im.convert('RGB'); w, h = im.size
            px = [im.getpixel(p) for p in ((2, 2), (w - 3, 2), (2, h - 3), (w - 3, h - 3), (w // 2, 2), (2, h // 2), (w - 3, h // 2))]
            px.sort(key=sum); r, g, b = px[len(px) // 2]
            bg = '#%02x%02x%02x' % (r, g, b)
        im.thumbnail((1100, 1100), Image.LANCZOS)
        name = slug(model) + '.webp'
        im.save(os.path.join(ROOT, 'assets/img/hands', name), 'WEBP', quality=84, method=6)
        out[model] = {"file": "assets/img/hands/" + name, "w": im.size[0], "h": im.size[1],
                      "alpha": bool(alpha), "bg": bg, "imageUrl": urls[key]}
        print(model, im.size, alpha, bg, os.path.getsize(os.path.join(ROOT, 'assets/img/hands', name)) // 1024, 'KB')
    json.dump(out, open(os.path.join(ROOT, 'data/photos.json'), 'w'), ensure_ascii=False, indent=1)
if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])

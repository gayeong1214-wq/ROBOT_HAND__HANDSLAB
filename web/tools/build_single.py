"""사이트 전체를 파일 하나(HTML)로 묶는다. 이미지·글꼴·스타일·스크립트·데이터를 모두 안에 넣어
인터넷 연결이나 다른 파일 없이 열 수 있다. 미리보기 공유용.
사용: python3 tools/build_single.py <출력 파일> [--fragment]
--fragment 를 붙이면 <html>·<head>·<body> 껍데기 없이 내용만 내보낸다(껍데기를 따로 씌우는 미리보기 서비스용)."""
import base64, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MIME = {'.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2'}
def read(p): return open(os.path.join(ROOT, p), encoding='utf-8').read()
def data_uri(p):
    with open(os.path.join(ROOT, p), 'rb') as f:
        return 'data:%s;base64,%s' % (MIME[os.path.splitext(p)[1]], base64.b64encode(f.read()).decode())
def inline_assets(text):
    # 따옴표 안의 assets/img/... 경로를 파일 내용으로 바꾼다
    return re.sub(r'assets/img/[\w./-]+\.(?:png|webp)', lambda m: data_uri(m.group(0)), text)

font_css = re.sub(r"url\(\./(woff2-dynamic-subset/[^)]+\.woff2)\)", lambda m: "url(%s)" % data_uri('assets/fonts/pretendard/' + m.group(1)), read('assets/fonts/pretendard/pretendard.css'))
html = read('index.html')
html = html.replace('<link rel="stylesheet" href="assets/fonts/pretendard/pretendard.css">', '<style>' + font_css + '</style>')
html = html.replace('<link rel="stylesheet" href="assets/css/styles.css">', '<style>' + read('assets/css/styles.css') + '</style>')
html = html.replace('<script src="assets/data/hands.js"></script>', '<script>' + inline_assets(read('assets/data/hands.js')) + '</script>')
html = html.replace('<script src="assets/js/app.js"></script>', '<script>' + read('assets/js/app.js') + '</script>')
html = inline_assets(html)
left = re.findall(r'(?:src|href)="(assets/[^"]+)"', html)
assert not left, left
if '--fragment' in sys.argv:
    title = '<title>HANDSLab Robot Hand Atlas</title>'
    styles = ''.join(re.findall(r'<style>.*?</style>', html, re.S))
    body = re.search(r'<body>(.*)</body>', html, re.S).group(1)
    html = title + '\n' + styles + '\n' + body
out = sys.argv[1]
open(out, 'w', encoding='utf-8').write(html)
print(out, round(os.path.getsize(out) / 1e6, 2), 'MB')

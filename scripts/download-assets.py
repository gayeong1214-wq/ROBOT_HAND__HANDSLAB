import json, pathlib, urllib.request, concurrent.futures
root=pathlib.Path(__file__).resolve().parents[1]
items=[]
for p in (root/'tmp').glob('images-*.json'): items.extend(json.loads(p.read_text(encoding='utf-8')))
def download(p):
    try:
        req=urllib.request.Request(p['url'],headers={'User-Agent':'Mozilla/5.0'})
        with urllib.request.urlopen(req,timeout=40) as r: b=r.read(); mime=r.headers.get_content_type()
        ext={'image/jpeg':'jpg','image/webp':'webp','image/gif':'gif','image/avif':'avif'}.get(mime,'png')
        file='assets/robots/'+p['id']+'.'+ext
        (root/file).write_bytes(b)
        return dict(id=p['id'],file=file,bytes=len(b),status='downloaded')
    except Exception as e:return dict(id=p['id'],status='failed',error=str(e).split('?')[0])
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as ex: results=list(ex.map(download,items))
(root/'data/asset-manifest.json').write_text(json.dumps(results,indent=2),encoding='utf-8')
print('Downloaded',sum(x['status']=='downloaded' for x in results),'of',len(results))

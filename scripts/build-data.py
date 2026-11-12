import json,pathlib,re,shutil,collections
R=pathlib.Path(__file__).resolve().parents[1]
rows=json.loads((R/'data/notion-snapshot.json').read_text(encoding='utf-8'))
details={r['id']:r for r in json.loads((R/'data/notion-details.json').read_text(encoding='utf-8'))}
assets={r['id']:r for r in json.loads((R/'data/asset-manifest.json').read_text(encoding='utf-8'))}
models=[]
for r in rows:
 if not r.get('모델명'):continue
 price=r.get('가격') or '정보 없음'
 kind='추정 예산' if re.search('추정|임시|예산',price) else '수신 견적' if '수신 견적' in price else '자작 부품비' if '부품비' in price else '공개가·원문 확인'
 country=(r.get('본사국가위치') or '미확인').split('·')[0]
 models.append(dict(id=r['id'],name=r['모델명'],maker=r.get('기업명') or '미확인',country=country,location=r.get('본사국가위치'),category=r.get('분류') or '로봇핸드',fingers=r.get('핑거수') or '미확인',specs=r.get('특징') or '미확인',price=price,priceKind=kind,notes=r.get('비고(가격어디서봤다 등등)') or '',url=r.get('대표사이트(제품이 정면에 딱보이는)') or '',priceUrl=r.get('가격확인링크') or '',notion=r['url'],image=assets.get(r['id'],{}).get('file'),papers=details.get(r['id'],{}).get('관련 연구',[]),collected='2026-11-12'))
models.sort(key=lambda m:m['name'].casefold())
(R/'data/robots.json').write_text(json.dumps(models,ensure_ascii=False,indent=2),encoding='utf-8')
(R/'dist').mkdir(exist_ok=True)
(R/'dist/robots.js').write_text('window.ROBOTS='+json.dumps(models,ensure_ascii=False)+';',encoding='utf-8')
shutil.copytree(R/'assets',R/'dist/assets',dirs_exist_ok=True)
print('Built',len(models),'models;',len(set(m['country'] for m in models)),'countries')

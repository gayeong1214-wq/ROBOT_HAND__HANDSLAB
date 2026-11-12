import json,pathlib,re,shutil,collections
R=pathlib.Path(__file__).resolve().parents[1]
V=R/'obsidian/HANDS-LAB'
models=json.loads((R/'data/robots.json').read_text(encoding='utf-8'))
def write(p,s):
 p=V/p;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(s,encoding='utf-8')
def safe(s):return re.sub(r'[<>:"/\\|?*\[\]#^\x00-\x1f]','-',str(s)).strip().rstrip('.')
def modelpath(r):return 'Models/'+safe(r['name'])+'-'+r['id'][:8]
def ref(path,label):return '[['+path+'|'+label+']]'
groups={}
for folder,key in [('Manufacturers','maker'),('Countries','country'),('Categories','category')]:
 groups[folder]=collections.defaultdict(list)
 for r in models:groups[folder][r[key]].append(r)
 for name,items in groups[folder].items():
  write(folder+'/'+safe(name)+'.md','# '+name+'\n\n'+ref('HOME','HANDS LAB')+'\n\n'+'\n'.join('- '+ref(modelpath(r),r['name']) for r in items)+'\n')
for r in models:
 links=' · '.join(ref(folder+'/'+safe(r[key]),r[key]) for folder,key in [('Manufacturers','maker'),('Countries','country'),('Categories','category')])
 photo=''
 if r['image']:
  dst=V/'Attachments'/pathlib.Path(r['image']).name;dst.parent.mkdir(exist_ok=True);shutil.copy2(R/r['image'],dst);photo='![[Attachments/'+dst.name+'|420]]\n'
 s='---\n'+ '\n'.join(k+': '+json.dumps(r[k],ensure_ascii=False) for k in ['id','name','maker','country','category','fingers','priceKind','collected'])+'\ntags: [robot-hand, notion-import]\n---\n\n# '+r['name']+'\n\n'+links+'\n\n'+photo+'\n## 사양 원문\n'+r['specs']+'\n\n## 가격 및 근거\n'+r['price']+'\n\n분류: '+r['priceKind']+'\n\n## 검토 메모\n'+r['notes']+'\n\n## 원문과 연구\n'
 for label,url in [('노션 원본',r['notion']),('제품 자료',r['url']),('가격 근거',r['priceUrl'])]+[('연구 자료 '+str(i+1),u) for i,u in enumerate(r['papers'])]:
  if url.startswith(('https://','http://')):s+='- ['+label+']('+url+')\n'
 s+='\n'+ref('Research/데이터 기준','데이터 기준')+' · '+ref('HOME','홈')+'\n';write(modelpath(r)+'.md',s)
write('HOME.md','# HANDS LAB\n\n로봇핸드와 그리퍼 100개를 연결한 연구용 Vault. 수집일 2026-11-12.\n\n## 탐색\n'+ '\n'.join('- '+ref('Indexes/'+folder,folder) for folder in groups)+'\n- [[Indexes/All Models|전체 모델]]\n- [[Research/벤치마크]]\n- [[Research/마일스톤]]\n- [[Research/데이터 기준]]\n\n## 그래프 사용\nObsidian에서 이 폴더를 **보관함으로 열기** 후 왼쪽 Graph view(그래프 뷰)를 선택하세요. 모델 → 제조사·국가·분류의 실제 위키링크로 연결되어 있습니다. Local graph에서는 선택 모델 주변 관계만 볼 수 있습니다.\n\n추가 플러그인이나 계정이 필요 없습니다. 웹사이트의 원본 데이터는 저장소 data/robots.json이며 이 보관함은 별도 편집 가능한 스냅샷입니다. 재생성 시 모델 노트를 덮어쓰므로 개인 메모는 Personal 폴더에 작성하세요.\n')
for folder in groups:write('Indexes/'+folder+'.md','# '+folder+'\n\n'+'\n'.join('- '+ref(folder+'/'+safe(n),n)+' ('+str(len(rs))+')' for n,rs in sorted(groups[folder].items())))
write('Indexes/All Models.md','# 전체 100 모델\n\n'+'\n'.join('- '+ref(modelpath(r),r['name']) for r in models))
for source,target in [('RESEARCH.md','벤치마크'),('MILESTONES.md','마일스톤')]:write('Research/'+target+'.md',(R/'docs'/source).read_text(encoding='utf-8'))
write('Research/데이터 기준.md','# 데이터 기준\n\n노션의 유효 100행을 수집했습니다. 2개 빈 행은 제외했습니다. 국가 표기만 통일하고 사양·가격 원문을 유지했습니다. 수집일은 사양 검증일이나 가격 유효일이 아닙니다. DoF, 관절, 모터 수를 임의로 동일시하지 않습니다. 가격 배지는 문구 기반 분류이며 최종 구매에는 원문 확인이 필요합니다. 이미지 저작권은 원 권리자에게 있습니다.\n')
write('.obsidian/app.json',json.dumps({'attachmentFolderPath':'Attachments','newLinkFormat':'absolute','useMarkdownLinks':False},indent=2))
write('.obsidian/graph.json',json.dumps({'showTags':False,'showAttachments':False,'hideUnresolved':True,'showOrphans':False,'colorGroups':[{'query':'path:Models','color':{'a':1,'rgb':1651434}},{'query':'path:Manufacturers','color':{'a':1,'rgb':4059636}},{'query':'path:Countries','color':{'a':1,'rgb':10320636}}]},indent=2))
nodes=[];edges=[]
for ci,(country,items) in enumerate(sorted(groups['Countries'].items())):
 x=(ci%4)*1400;y=(ci//4)*3200;cid='country-'+str(ci)
 nodes.append(dict(id=cid,type='file',file='Countries/'+safe(country)+'.md',x=x,y=y,width=500,height=180,color='4'))
 for ri,r in enumerate(items):
  mid=r['id'];nodes.append(dict(id=mid,type='file',file=modelpath(r)+'.md',x=x+(ri%3)*410,y=y+300+(ri//3)*230,width=380,height=190,color='5'))
  edges.append(dict(id=cid+'-'+mid,fromNode=cid,fromSide='bottom',toNode=mid,toSide='top'))
write('Atlas.canvas',json.dumps(dict(nodes=nodes,edges=edges),ensure_ascii=False,indent=2))
print('Vault:',len(list(V.rglob('*.md'))),'notes;',len(list((V/'Attachments').glob('*'))),'images')

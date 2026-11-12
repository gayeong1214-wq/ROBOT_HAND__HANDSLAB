import pathlib,json,re,collections,subprocess,html
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate,Paragraph,Spacer,PageBreak,Image,Table,TableStyle,KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
R=pathlib.Path(__file__).resolve().parents[1]
O=R/'output/pdf';O.mkdir(parents=True,exist_ok=True)
pdfmetrics.registerFont(TTFont('Malgun','C:/Windows/Fonts/malgun.ttf'))
pdfmetrics.registerFont(TTFont('MalgunBold','C:/Windows/Fonts/malgunbd.ttf'))
blue=colors.HexColor('#155BEA');ink=colors.HexColor('#172B49');gray=colors.HexColor('#57677D')
styles={
 'title':ParagraphStyle('title',fontName='MalgunBold',fontSize=30,leading=42,textColor=ink,spaceAfter=20,wordWrap='CJK'),
 'h1':ParagraphStyle('h1',fontName='MalgunBold',fontSize=21,leading=29,textColor=ink,spaceAfter=18,wordWrap='CJK'),
 'h2':ParagraphStyle('h2',fontName='MalgunBold',fontSize=12,leading=19,textColor=blue,spaceBefore=14,spaceAfter=7,wordWrap='CJK'),
 'body':ParagraphStyle('body',fontName='Malgun',fontSize=10,leading=17,textColor=ink,spaceAfter=9,wordWrap='CJK'),
 'small':ParagraphStyle('small',fontName='Malgun',fontSize=8,leading=12,textColor=gray,spaceAfter=7,wordWrap='CJK'),
 'cell':ParagraphStyle('cell',fontName='Malgun',fontSize=8,leading=12,textColor=ink,wordWrap='CJK')}
story=[]
def p(t,kind='body'):return Paragraph(html.escape(str(t)).replace('\n','<br/>'),styles[kind])
def add(t,kind='body'):story.append(p(t,kind))
def page(title,kicker):
 if story:story.append(PageBreak())
 add(kicker,'small');add(title,'h1')
def picture(name,w=499,h=315):
 f=R/'docs/screenshots'/name
 if f.exists():
  iw,ih=ImageReader(str(f)).getSize();scale=min(w/iw,h/ih);story.append(Image(str(f),width=iw*scale,height=ih*scale));story.append(Spacer(1,12))
def table(rows,widths):
 t=Table([[p(c,'cell') for c in row] for row in rows],colWidths=widths,repeatRows=1,hAlign='LEFT')
 t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#EAF1FF')),('VALIGN',(0,0),(-1,-1),'TOP'),('BOTTOMPADDING',(0,0),(-1,-1),8),('TOPPADDING',(0,0),(-1,-1),8),('LINEBELOW',(0,0),(-1,-1),.4,colors.HexColor('#DDE5F0'))]));story.append(t)
models=json.loads((R/'data/robots.json').read_text(encoding='utf-8'))
page('HANDS LAB\nRobot Hand Atlas','RESEARCH / DESIGN / BUILD REPORT · 2026.11.12')
add('세계의 로봇핸드를 탐색하는 두 가지 화면','h2');picture('graphical-desktop.png',499,300)
add('그래픽 카탈로그 + 기술 위키 + Obsidian 지식 보관함')
add('100 모델  /  14 국가  /  100 제품 이미지  /  190 지식 노트','h2')
add('요청 자료를 조사·분류하고 실제 동작하는 정적 웹사이트로 구현한 결과 보고서입니다. 현재 콘텐츠 범위는 제공된 노션의 로봇핸드와 비교용 그리퍼입니다. 전세계 모든 로봇을 수록한 목록은 아닙니다.')
add('저장소: https://github.com/gayeong1214-wq/ROBOT_HAND__HANDSLAB','small')
page('무엇을 조사하고 만들었는가','01 / SCOPE')
table([['요청','완성 산출물'],['5개 이상 벤치마크','5개 사이트 직접 확인 + ROS 문서 보조 벤치마크'],['마일스톤·이미지 정리','M1-M7 계획, 100 제품 이미지, 5 벤치마크 화면'],['그래픽형 + 위키형','같은 100개 데이터에 검색·필터·비교·상세'],['Claude 활용','실제 Claude 설계 대화, 채택·수정 내역 기록'],['Obsidian 별도 구성','모델·제조사·국가·분류 190 노트, 실제 위키링크'],['단계별 Git 기록','조사 → 데이터 → 웹 → Vault → 검증·보고서']],[115,384])
add('수록 범위와 보존 원칙','h2');add('유효 제목이 있는 노션 100행을 사용했습니다. 제품 세대·가격 조건·검토 메모를 보존했습니다. 노션에 없는 사양을 추측해 추가하지 않았습니다. 본문이 비어 있던 행은 실제 상세 속성을 다시 조회했습니다.')
add('첨부 이미지의 월요일 보고 요구는 참고 맥락으로 구분했습니다. 사용자의 직접 요청에 맞춰 최종 보고 형식은 PDF이며, 11월 16일 월요일은 후속 검토 제안일입니다.')
page('조사 방법과 근거의 수준','02 / RESEARCH METHOD')
for h,t in [('1. 발견','robot hand database comparison dexterous hands robot specifications, robot hands Shadow Allegro LEAP hand official specifications 등의 검색어로 후보를 찾았습니다.'),('2. 원문 확인','검색 결과 요약에만 의존하지 않고 제조사·연구팀·디렉터리 본문을 열었습니다. IEEE, Robo2u, Shadow, LEAP, Allegro는 실제 브라우저 화면도 수집했습니다.'),('3. 같은 과업으로 평가','모델 찾기 → 국가·손가락 수로 좁히기 → 여러 모델 비교 → 가격 조건 확인 → 논문·제품 원문 이동의 다섯 과업으로 장단점을 판단했습니다.'),('4. 검증과 해석 분리','관찰한 UI와 설계 판단을 구분했습니다. 디렉터리는 UX 참고용이며 모든 하드웨어 수치의 검증 근거로 취급하지 않았습니다. 하드웨어 실험이나 새 견적 요청은 하지 않았습니다.'),('5. 접근 실패 기록','Dexhands는 시간 초과, ORCA는 읽을 수 있는 본문이 없어 핵심 평가에서 제외했습니다. ROS 현행 문서는 자동 열람이 거부되어 공식 발표·저장소를 보조 근거로 삼았습니다.')]:add(h,'h2');add(t)
add('전체 근거와 재현 가능한 주소: docs/RESEARCH.md. 검색 순위나 사이트의 인기 점수는 제품 성능 순위로 사용하지 않았습니다.','small')
page('노션에서 웹 데이터까지','03 / DATA PIPELINE')
table([['단계','처리'],['스키마 확인','지정 데이터베이스 속성과 연결된 데이터 소스 조회'],['행 수집','URL 정렬, 100행 단위 조회. 총 102행 중 빈 제목 2개 제외'],['상세 재조회','각 100개 페이지의 이미지·관련 연구 링크 확인'],['원문 보존','특징, 가격, 비고, 모델명, 제품 링크, 연구 자료 저장'],['정규화','중국 지역 표기와 한국/대한민국을 통일: 국가 14개'],['이미지','99개 노션 연결 이미지 + Sandia 공식 대체 사진 1개'],['출력','data/robots.json → dist/robots.js → 웹·Vault 공통 데이터']],[100,399])
add('가격 분류','h2');add('문구 기반으로 추정 예산, 수신 견적, 공개가·원문 확인, 자작 부품비, 견적 문의를 나눕니다. 금액·VAT·옵션 조건은 원문 그대로입니다. 혼합 통화의 숫자 크기만 비교하는 가격 정렬은 제공하지 않습니다.')
add('제조사 표기 66건에는 한국어·영어 별칭이 남아 있으므로 고유 법인 66개를 뜻하지 않습니다. 조사자 개인 식별자와 서명된 임시 이미지 URL은 배포 데이터에서 제외했습니다. 2026-11-12는 수집일이지 모든 가격의 확인일이 아닙니다.','small')
research=(R/'docs/RESEARCH.md').read_text(encoding='utf-8')
blocks=re.split(r'\n### ',research)[1:]
shots=['benchmark-ieee.png','benchmark-robo2u.png','benchmark-shadow.png','benchmark-leap.png','benchmark-allegro.png']
for i,b in enumerate(blocks[:5]):
 lines=b.splitlines();page(lines[0],'04 / BENCHMARK '+str(i+1)+' OF 5');picture(shots[i],499,285)
 for line in lines[1:]:
  if line.startswith('## '):break
  if line.strip():add(line,'small' if line.startswith('주소:') else 'body')
page('장점을 모아 하나의 구조로','05 / SYNTHESIS')
table([['근거','채택한 장점','최종 반영'],['IEEE','사진 중심 발견','넓은 흰 배경·제품 사진 카드'],['Robo2u','동일 열 사양 탐색','위키 표와 공통 필터'],['Shadow','구동·관절·센서 구분','사양 원문 보존과 세대 주의'],['LEAP','연구 재현 자료','제품별 관련 연구 링크'],['Allegro','제품·기술 문서 구분','제품·가격·노션 출처 분리'],['ROS (보조)','체계적인 기술 문서','Vault 분류·출처·데이터 기준']],[76,165,258])
add('ROS 보조 벤치마크의 한계','h2');add('https://docs.ros.org/en/rolling/ 현행 페이지는 자동 열람 거부로 직접 평가하지 못했습니다. 공식 ROSCon 발표의 문서 화면과 공식 저장소 문서 링크를 이용했습니다. 튜토리얼·개념·참고자료 구조는 유용하지만 사진 중심 제품 탐색과는 목적이 다릅니다.')
add('https://roscon.ros.org/2023/talks/Releasing_a_new_ROS_2_distribution.pdf\nhttps://github.com/ros2/ros2/blob/rolling/README.md','small')
add('디자인 원칙','h2');add('화이트·코발트 블루·옅은 회색으로 정보 계층을 만듭니다. 첫 화면은 시각적 탐색에, 위키는 빠른 비교에 집중합니다. 미확인·추정값을 숨기거나 성능 순위로 바꾸지 않습니다.')
page('그래픽형: 발견을 위한 화면','06 / GRAPHICAL VERSION');picture('graphical-desktop.png',499,340)
add('파일: dist/index.html','h2');add('히어로 제품 사진과 100개 모델 카탈로그로 구성했습니다. 검색창은 모델·제조사·사양·국가·분류를 검색합니다. 국가·손가락 수·분류·가격 근거 필터를 함께 적용할 수 있습니다.')
add('각 카드에는 국가, 제조사, 사양 요약, 핑거 수, 가격 근거, 비교 선택과 상세 버튼이 있습니다. 외부 이미지 서버의 만료에 영향을 받지 않도록 제품 사진을 로컬 파일로 제공합니다.')
page('위키형: 빠른 사양 탐색','07 / WIKI VERSION');picture('wiki-desktop.png',499,350)
add('파일: dist/wiki.html','h2');add('별도 주소로 바로 열리는 표 중심 화면입니다. 모델·제조사·국가·손가락 수·사양 원문·가격을 같은 행에서 읽습니다. 화면의 보기 전환으로 그래픽형과 위키형을 오갈 수 있습니다.')
add('두 화면이 동일 데이터를 사용하므로 사양 불일치를 줄입니다. 정렬은 모델명·제조사·국가를 지원합니다. 작은 화면의 긴 표는 가로 스크롤하도록 구성했습니다.')
page('비교와 상세: 조건까지 함께','08 / COMPARISON');picture('comparison.png',499,320)
add('최대 3개 모델 비교','h2');add('2개 이상 선택하면 비교창을 열 수 있습니다. 4번째 선택은 차단하고 안내합니다. 서로 다른 행은 ≠와 파란색으로 강조합니다. 가격 조건과 원문 출처도 비교표에 함께 둡니다.')
add('상세 보기','h2');add('제품 사진, 사양 원문, 가격·VAT·옵션 메모, 제조사·가격·노션 링크, 관련 연구를 제공합니다. 모델을 열면 #model=고유ID가 붙어 상세 링크를 공유할 수 있습니다.')
page('Claude를 어떻게 활용했는가','09 / AI COLLABORATION')
add('실제 대화','h2');add('https://claude.ai/chat/f64174dc-bbc3-401a-9598-65c9561487da','small')
add('5개 벤치마크의 장점을 요약하여 흰색·파란색 HTML/CSS/JS 구현을 요청했습니다. 카드·위키, 검색, 국가·손가락 필터, 3개 비교, 상세, 접근성, 가격 근거 및 DoF 구분을 명시했습니다.')
add('Claude의 결과','h2');add('index.html과 예시 2건의 hands.json 생성 완료 응답을 확인했습니다. Claude는 문법과 JSON 파싱만 확인했고 브라우저 검증은 하지 못했다고 밝혔습니다. 예시 2건은 가상 데이터였으며 실제 사이트에 넣지 않았습니다.')
add('최종 구현에서 채택·수정한 점','h2');add('비교 차이 표시, 결과 수 안내, 안전한 http(s) 링크, 상세 고유 링크, 카드와 표의 공통 데이터 구조를 반영했습니다. 실제 100건 연결과 최종 화면은 로컬에서 재작성·검증했습니다. 원본 생성 파일 다운로드는 브라우저 제어 문제로 확보하지 못해 관찰·반영 내역을 별도 문서로 남겼습니다.')
add('DoF와 구동축만으로 부족구동 여부를 자동 추정하거나 여러 통화를 숫자만으로 정렬하는 부분은 채택하지 않았습니다. 노션의 측정 정의가 일관되게 정규화되어 있지 않기 때문입니다.')
add('기록 위치: docs/claude/session-observed.txt','small')
page('마일스톤과 완료 기준','10 / MILESTONES')
table([['단계','일정','산출물·완료 기준'],['M1 조사·설계','11/12','직접 벤치마크 5 + 보조 1, 장단점·출처'],['M2 데이터','11/12','100 유효 모델과 이미지, 원문 보존'],['M3 웹 구현','11/12','그래픽·위키·검색·필터·비교·상세'],['M4 지식 저장','11/12','Obsidian 모델·제조사·국가·분류 연결'],['M5 검증·전달','11/12','기능 검사·PDF·단계별 Git 기록'],['M6 연구실 검토','11/13 제안','세대·센서·견적 조건의 담당자 검토'],['M7 보고·운영','11/16 제안','월요일 보고, 담당자·갱신 주기 확정']],[105,85,309])
add('다음 운영에서 우선할 일','h2');add('1. 서로 다른 제조사 별칭을 대표 ID로 묶기\n2. 사양 필드를 정의하고 원문과 검증일을 함께 유지하기\n3. 실기기에서 모바일 표·비교창 사용성 확인하기\n4. 수신 견적 갱신과 이미지 사용 조건 점검하기\n5. 핸드 이외 로봇 범주를 별도 데이터셋으로 확장하기')
page('Obsidian: 연결된 지식 보관함','11 / KNOWLEDGE VAULT')
table([['폴더','용도'],['Models','100개 모델별 사양·가격·이미지·출처·연구'],['Manufacturers','원문 제조사 표기별 모델 연결'],['Countries','14개 국가별 모델 연결'],['Categories','로봇핸드·3지형·비교용 그리퍼 연결'],['Indexes','전체 모델 및 분류 목차'],['Research','벤치마크·마일스톤·데이터 기준'],['Attachments','100 제품 이미지'],['.obsidian','첨부 폴더·그래프 색상 설정']],[120,379])
add('사용 순서','h2');add('Obsidian → Open folder as vault → obsidian/HANDS-LAB 폴더 선택 → HOME.md 열기 → Graph view 선택. 모델에서 제조사·국가·분류를 연결한 실제 위키링크를 사용하므로 그래프가 자동 형성됩니다. 추가 플러그인이 필요 없습니다.')
add('보관함은 독립적으로 편집할 수 있는 스냅샷입니다. 웹사이트와 실시간 양방향 동기화하지 않습니다. scripts/build-vault.py 재실행은 생성 노트를 덮어쓰므로 개인 메모는 Personal 폴더에 두세요. Obsidian 앱 내 실제 실행 검증은 하지 않았고 파일·링크 무결성을 검사했습니다.','small')
page('검증 결과와 남은 한계','12 / QUALITY ASSURANCE')
for line in (R/'docs/QA.md').read_text(encoding='utf-8').splitlines():
 if line.strip() and not line.startswith('#') and not line.startswith('배포:'):add(line)
add('원본 데이터의 한계','h2');add('사양 문장, 제조사 별칭, 가격 시점은 노션 조사 상태를 반영합니다. 특정 연구의 모델 계열과 현재 판매 세대가 동일하다고 단정하지 않습니다. 모든 제품을 실측·새 견적으로 검증했다는 뜻이 아닙니다.')
page('GitHub에 저장하는 내용','13 / REPOSITORY')
table([['위치','내용'],['data/','노션 원본 스냅샷·상세·정규화 100건·이미지 매핑'],['assets/robots/','100개 제품 사진 원본'],['dist/','그래픽·위키 HTML, CSS, JS, 100 이미지 실행본'],['obsidian/HANDS-LAB/','190개 Markdown 노트, 100 이미지, 설정'],['docs/','조사, 마일스톤, QA, Claude 기록, 화면 증거, 파일 목록'],['scripts/','데이터·Vault·PDF 생성 스크립트'],['tests/','원문 보존·100개 이미지·Vault 링크 검사'],['output/pdf/','본 종합 보고서']],[140,359])
add('단계별 커밋','h2')
log=subprocess.check_output(['git','log','--oneline','-8'],cwd=R,text=True,encoding='utf-8',errors='replace');add(log,'small')
add('전체 파일명은 docs/FILE_INDEX.md에 기록합니다. 최종 보고서 커밋은 보고서 생성 후 추가되므로 해당 최종 해시는 저장소의 최신 커밋에서 확인할 수 있습니다.','small')
page('실행·유지보수·출처','14 / HANDOFF')
add('로컬에서 바로 보기','h2');add('dist/index.html 또는 dist/wiki.html을 브라우저로 엽니다. 또는 저장소 폴더에서 python -m http.server 4173 --directory dist 를 실행하고 http://localhost:4173 에 접속합니다. 서버 없이도 robots.js를 읽으므로 데이터 탐색이 가능합니다.')
add('다시 생성하기','h2');add('python scripts/build-data.py\npython scripts/build-vault.py\nnode --test tests/data.test.cjs\nPDF는 reportlab과 맑은 고딕 글꼴이 있는 Python에서 scripts/build-report.py를 실행합니다.')
add('저장과 공유','h2');add('사용자 선택에 따라 GitHub와 로컬 파일만 전달합니다. 별도 Sites 서버에는 배포하지 않습니다. GitHub 업로드 결과는 docs/DELIVERY.md와 최종 응답에 기록합니다. 로컬 단계 커밋은 모두 보존됩니다.')
add('이미지 출처','h2');add('제품 사진 99개는 지정 노션 이미지 링크에서 수집했습니다. Sandia 원본 링크는 시간 초과되어 공식 연구소 사진으로 대체했습니다. 모델별 출처는 data/robots.json, 대체 기록은 data/asset-manifest.json에 있습니다. 벤치마크 화면은 조사 증거로 구분합니다. 사진·로고·화면의 권리는 원 권리자에게 있습니다.')
add('Sandia 대체 사진 원문: https://www.sandia.gov/research/sandia-hand/\n노션: https://app.notion.com/p/45d4ac69d9048317a52181ba377f4b32','small')
for start in range(0,100,20):
 page('수록 모델 '+str(start+1)+'-'+str(start+20),'APPENDIX / MODEL INVENTORY')
 table([['번호','모델명','국가','가격 근거']]+[[str(i+1),r['name'],r['country'],r['priceKind']] for i,r in enumerate(models[start:start+20],start)],[32,270,75,122])
 add('사양·가격 원문·이미지·출처는 웹 상세, data/robots.json, Obsidian 모델 노트에 수록했습니다.','small')
def frame(c,d):
 c.setFillColor(blue);c.rect(0,817,595,25,fill=1,stroke=0);c.setFont('Malgun',8);c.setFillColor(colors.white);c.drawString(48,826,'HANDS LAB / RESEARCH & BUILD')
 c.setStrokeColor(colors.HexColor('#DDE5F0'));c.line(48,40,547,40);c.setFillColor(gray);c.drawString(48,27,'2026.11.12 · ROBOT HAND ATLAS');c.drawRightString(547,27,str(d.page))
doc=SimpleDocTemplate(str(O/'HANDS-LAB-Research-and-Build-Report.pdf'),pagesize=(595,842),rightMargin=48,leftMargin=48,topMargin=54,bottomMargin=56,title='HANDS LAB Research and Build Report',author='HANDS LAB')
doc.build(story,onFirstPage=frame,onLaterPages=frame)
print('Created',O/'HANDS-LAB-Research-and-Build-Report.pdf')

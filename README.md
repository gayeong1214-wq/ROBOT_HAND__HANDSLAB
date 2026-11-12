# HANDS LAB · Robot Hand Atlas

노션 조사 자료 100개를 검색·비교하는 흰색/파란색 로봇핸드 아카이브입니다.

## 처음 보시는 분을 위한 안내

이 저장소는 **웹사이트 코드 + 조사 자료 + 이미지 + 옵시디언 + PDF 보고서**를 함께 보관합니다. 코드를 수정하려면 아래 파일별 설명을 참고하세요. GitHub 저장소 주소는 소스를 보는 주소이며, 공개 웹사이트 주소는 아닙니다.

현재 PC에서 미리보기 서버가 실행 중일 때: [그래픽형 바로 보기](http://127.0.0.1:4174/index.html) · [위키형 바로 보기](http://127.0.0.1:4174/wiki.html)

위 주소는 이 PC에서만 작동합니다. 다른 컴퓨터에서는 저장소를 내려받고 아래 실행 방법을 따라 주세요. 별도 공개 호스팅은 설정하지 않았습니다.

## 어떤 코드가 들어 있나요?

| 파일 | 쉬운 설명 | 언제 수정하나요? |
|---|---|---|
| [dist/index.html](dist/index.html) | 그래픽형 화면의 뼈대. 메뉴·메인 소개·검색창·필터·상세창을 배치합니다. | 화면 문구와 구성 변경 |
| [dist/wiki.html](dist/wiki.html) | 위키형으로 바로 들어가는 화면입니다. | 위키 진입 화면 구성 변경 |
| [dist/app.js](dist/app.js) | 검색, 필터, 정렬, 카드/표 전환, 최대 3개 비교, 상세창을 작동시키는 JavaScript입니다. | 검색·비교 기능 수정 |
| [dist/style.css](dist/style.css) | 글꼴, 기본 배치, 카드, 표, 팝업, 작은 화면 대응을 정합니다. | 기본 화면 스타일 수정 |
| [dist/brand.css](dist/brand.css) | 공식 로고에 맞는 네이비·청록색, 메인 패널, 정사각형 사진 프레임을 적용합니다. | 브랜드 색상·사진 크기 수정. 기본 스타일보다 나중에 적용됩니다. |
| [dist/robots.js](dist/robots.js) | 브라우저가 읽는 100개 모델 데이터입니다. 자동 생성 파일입니다. | 직접 편집보다 원본 데이터를 수정하고 다시 생성 |
| [data/robots.json](data/robots.json) | 모델명·제조사·국가·사양·가격·출처·이미지 경로를 정리한 공통 데이터입니다. | 데이터 구조 확인 |
| [data/notion-snapshot.json](data/notion-snapshot.json) | 노션에서 수집한 원본 행입니다. | 사양·가격 원문 확인 및 갱신 |
| [data/notion-details.json](data/notion-details.json) | 개별 노션 페이지에서 수집한 상세 속성·연구 링크입니다. | 연구 자료 갱신 |
| [data/asset-manifest.json](data/asset-manifest.json) | 모델 ID와 이미지 파일을 연결한 목록입니다. | 사진 교체·출처 확인 |
| [scripts/build-data.py](scripts/build-data.py) | 노션 스냅샷을 정리해 웹 데이터와 실행용 이미지를 만듭니다. | 데이터 수정 후 실행 |
| [scripts/download-assets.py](scripts/download-assets.py) | 수집된 이미지 주소 목록에서 사진을 내려받는 수집용 도구입니다. | 새 이미지 수집. 임시 주소 목록은 저장소에 포함하지 않습니다. |
| [scripts/build-vault.py](scripts/build-vault.py) | 모델·제조사·국가별 Obsidian 노트와 Atlas.canvas를 만듭니다. | 옵시디언 자료 재생성 |
| [scripts/extract-brand.py](scripts/extract-brand.py) | 원본 Illustrator 파일에서 로고 SVG·PNG·심볼을 추출합니다. | 로고 자산 재생성. PyMuPDF 필요 |
| [scripts/build-report.py](scripts/build-report.py) | 조사 내용과 화면 이미지를 모아 PDF 보고서를 만듭니다. | 보고서 갱신. ReportLab과 맑은 고딕 필요 |
| [scripts/package-delivery.py](scripts/package-delivery.py) | 전체 자료와 옵시디언 자료를 각각 ZIP으로 묶습니다. | 전달용 압축 파일 생성 |
| [tests/data.test.cjs](tests/data.test.cjs) | 모델 100개·이미지 존재·원문 보존·옵시디언 링크를 검사합니다. | 데이터 수정 후 오류 확인 |
| [package.json](package.json) | 실행·생성·검사 명령어를 모은 설정입니다. | 개발 명령 관리 |
| [.gitignore](.gitignore) | 임시 파일·ZIP 등을 Git 업로드 대상에서 제외합니다. | 업로드 제외 규칙 관리 |

### 코드 외 자료

- [공식 로고 원본과 변환 이미지](assets/brand): AI 원본, SVG, PNG, 파비콘 심볼
- [제품 이미지](assets/robots): 모델 ID별 제품 사진 100개
- [옵시디언 시작 노트](obsidian/HANDS-LAB/HOME.md): 보관함 사용법과 분류별 목차
- [국가별 시각 보드](obsidian/HANDS-LAB/Atlas.canvas): Obsidian에서 열어 보는 연결 보드
- [조사·장단점](docs/RESEARCH.md), [마일스톤](docs/MILESTONES.md), [검증 결과](docs/QA.md), [로고 수정 내역](docs/BRAND-REVISION.md)
- [전체 파일 목록](docs/FILE_INDEX.md), [Claude 활용 기록](docs/claude/session-observed.txt)
- [25쪽 종합 PDF](output/pdf/HANDS-LAB-Research-and-Build-Report.pdf)

## 벤치마크 사이트 바로 가기

| 사이트 | 참고한 점 | 조사 수준 |
|---|---|---|
| [IEEE Robots Guide](https://robotsguide.com/) | 사진 카드와 로봇 카테고리 탐색 | 직접 확인 |
| [Robo2u Robotic Hands](https://data.robo2u.com/hands) | 여러 제품의 사양을 한 표에서 비교 | 직접 확인 |
| [Shadow Robot Dexterous Hand Series](https://shadowrobot.com/dexterous-hand-series/) | 관절·구동축·센서 구분과 제품군 비교 | 직접 확인 |
| [LEAP Hand v1](https://v1.leaphand.com/) | 논문·코드·CAD·조립 자료 연결 | 직접 확인 |
| [Allegro Hand](https://www.allegrohand.com/) | 제품 소개와 기술 문서 분리 | 직접 확인 |
| [ROS 2 Documentation](https://docs.ros.org/en/rolling/) | 기술 문서와 지식 분류 구조 | 보조 참고: 현행 페이지 직접 열람 제한 |

ROS 보조 근거: [공식 ROSCon 발표](https://roscon.ros.org/2023/talks/Releasing_a_new_ROS_2_distribution.pdf), [공식 저장소 안내](https://github.com/ros2/ros2/blob/rolling/README.md). 직접 확인한 5개 사이트와 동일한 수준의 평가로 취급하지 않았습니다.

## 처음 실행하는 방법

1. GitHub 위쪽 **Code → Download ZIP**으로 내려받아 압축을 풉니다.
2. `dist/index.html`을 더블클릭하면 그래픽형, `dist/wiki.html`을 열면 위키형입니다.
3. 로컬 서버를 쓰려면 저장소 폴더에서 `python -m http.server 4174 --directory dist`를 실행합니다.
4. 브라우저에서 [그래픽형](http://localhost:4174/index.html) 또는 [위키형](http://localhost:4174/wiki.html)을 엽니다.

데이터 수정 순서: 노션 스냅샷 수정 → `python scripts/build-data.py` → 필요하면 `python scripts/build-vault.py` → `node --test tests/data.test.cjs`.

주의: 두 HTML의 공통 구성은 함께 수정해야 합니다. 생성된 데이터와 옵시디언 노트는 재생성 시 덮어써집니다. 개인 메모는 별도 Personal 폴더에 보관하세요.

## 두 가지 웹 화면
- 그래픽형: `dist/index.html`
- 위키형: `dist/wiki.html`
- 두 파일은 브라우저에서 직접 열거나 `python -m http.server 4173 --directory dist`로 실행할 수 있습니다.
- 검색, 국가·손가락 수·분류·가격 근거 필터, 최대 3개 모델 비교, 상세·연구 링크를 지원합니다.

## 자료 위치
| 경로 | 내용 |
|---|---|
| data | 노션 스냅샷, 정규화 데이터, 이미지 매핑 |
| assets/robots | 모델별 원본 이미지 |
| dist | 실행 가능한 웹사이트 두 버전 |
| obsidian/HANDS-LAB | Obsidian에서 열 수 있는 별도 보관함 |
| docs/RESEARCH.md | 5개 직접 조사와 ROS 보조 벤치마크의 장단점 |
| docs/MILESTONES.md | 단계별 산출물과 후속 일정 |
| docs/claude | 실제 Claude 대화와 반영 내역 |
| docs/screenshots | 웹사이트 검증 화면 및 벤치마크 화면 |
| output/pdf | 종합 조사·구축 보고서 |
| scripts | 데이터, Vault, 보고서 재생성 스크립트 |

## 데이터 갱신
`python scripts/build-data.py` 실행 후 `python scripts/build-vault.py`로 재생성합니다. 노션 자동 실시간 동기화 기능은 아닙니다. 원본 스냅샷을 새로 수집한 뒤 실행해야 합니다. Vault 개인 메모는 `Personal` 폴더에 따로 보관하세요.

현재 범위는 로봇핸드·비교용 그리퍼이며 전세계 모든 로봇을 수록한 것은 아닙니다. 2026-11-12는 수집일입니다. 원문 가격·사양은 실측 또는 새 견적을 의미하지 않습니다. 제품 이미지와 벤치마크 화면의 권리는 각 원 권리자에게 있습니다.

원본: https://app.notion.com/p/45d4ac69d9048317a52181ba377f4b32

Claude 설계 대화: https://claude.ai/chat/f64174dc-bbc3-401a-9598-65c9561487da

## 공식 로고 디자인
사용자 제공 HANDSLab 로고를 헤더·푸터·파비콘에 적용했습니다. 네이비·청록·흰색 팔레트와 정사각형 사진 프레임을 사용합니다. 원본 Illustrator 파일과 SVG·PNG는 assets/brand에 보존합니다. 자세한 변경 내역은 docs/BRAND-REVISION.md를 확인하세요.

Obsidian에서는 HOME.md 또는 Atlas.canvas를 여세요.

# HANDS LAB · Robot Hand Atlas

노션 조사 자료 100개를 검색·비교하는 흰색/파란색 로봇핸드 아카이브입니다.

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

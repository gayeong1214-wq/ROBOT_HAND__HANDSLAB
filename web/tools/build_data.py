"""조사표 원본(data/source/handslab-public-data.json)을 사이트용 데이터(assets/data/hands.js)로 변환한다.
- 원본 값은 바꾸지 않고, 사양 문장에 적힌 수치를 항목별로 나눠 옮긴다(아래 EXTRA).
- 원본에 없는 값은 만들지 않는다. 비어 있으면 사이트에서 '미확인'으로 표시된다.
사용: python3 tools/build_data.py"""
import json, os, re
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = json.load(open(os.path.join(ROOT, 'data/source/handslab-public-data.json'), encoding='utf-8'))
photos = json.load(open(os.path.join(ROOT, 'data/photos.json'), encoding='utf-8'))
research_path = os.path.join(ROOT, 'data/research.json')
research = json.load(open(research_path, encoding='utf-8')) if os.path.exists(research_path) else {}
# 노션 '특징' 문장 중 표의 숫자 열에 들어가지 않는 내용을 항목별로 정리한 값(구동·센서·통신·제어·기타)
features = json.load(open(os.path.join(ROOT, 'data/features.json'), encoding='utf-8'))
features.pop('_doc', None)

# 사양 문장에서 옮긴 값. j=관절, a=구동기, d=능동/총 구분 없이 적힌 자유도, w=무게,
# tip=손끝 힘(N), grip=파지력(N), pay=가반·권장 하중(kg), f=유형이 불분명한 힘 표기, hz=제어·통신 주기, an=능동 DoF 주석
EXTRA = {
 "PGN-plus-P 380-2": dict(w="27.5 kg", grip="19,500 N (닫힘 힘, 6 bar)", pay="97.5 kg (권장 공작물 질량)"),
 "DG-5F-S": dict(w="약 880 g", pay="7 kg (감싸 쥐기 정격)", hz="500 Hz"),
 "Sharpa Wave W01": dict(w="약 1.3 kg", hz="500 Hz"),
 "DG-5F-M": dict(w="약 1.763 kg", pay="10 kg (감싸 쥐기 정격)", hz="250 Hz"),
 "3FG25": dict(grip="50–450 N", pay="25 kg (형상구속) / 15 kg (마찰파지)"),
 "SVH": dict(j=20, a=9, w="약 1.3 kg"),
 "RH56DFX": dict(j=12, w="약 540 g", f="엄지 15 N / 기타 10 N"),
 "Allegro Hand V5 Plus": dict(w="약 1.024 kg"),
 "AIDIN-Hand (기존형)": dict(d="15", w="약 1.3 kg"),
 "Aero Hand": dict(w="800 g 이하"),
 "DG-4F": dict(w="약 1.494 kg", hz="333 Hz"),
 "Gecko SP5": dict(pay="5 kg (최대)"),
 "Sharpa Wave W01 SE": dict(w="약 1.3 kg", hz="500 Hz"),
 "VGP30": dict(pay="30 kg (골판지 상자 최대)"),
 "Agile Hand": dict(d="15 (대향 엄지 옵션 16)", w="약 1.5 kg", hz="1 kHz"),
 "myGripper H100": dict(j=6, a=6, w="약 780 g", pay="0.5 kg (최대)"),
 "OmniHand 3": dict(w="550 g 이하", hz="1 kHz"),
 "Linker Hand L20": dict(w="약 1.2 kg"),
 "CTDH4F08D": dict(w="약 0.7 kg", grip="손가락당 6 N", pay="약 2.5 kg (권장 감싸기)"),
 "DHEB-22-E-U-S-L": dict(w="약 50 g"),
 "Mark 7": dict(d="5~7 (맞춤 구성)", w="400 g 미만"),
 "CR Hand": dict(d="6", j=13, w="약 326 g"),
 "Dex3-1 (촉각형)": dict(w="약 710 g"),
 "Revo 2 Basic": dict(w="약 383 g"),
 "RH56E2": dict(d="6", j=12, w="약 770~790 g", tip="엄지 30 N 이상 / 기타 28 N 이상"),
 "SNG-V 6 1.5 V-HP-25": dict(w="약 1.14 kg"),
 "RH8D": dict(d="19 (손목 포함)", a=8, w="약 620 g"),
 "PXDex III": dict(d="4", w="약 836 g", pay="5 kg (최대 파지 하중)"),
 "qb SoftHand Industry": dict(d="19 (연동 구조)", a=1, w="990 g"),
 "ROH-A002": dict(j=11, w="545±5 g (일부 문서 580±5 g)"),
 "RH56H1": dict(j=11, w="약 470 g", tip="엄지 15 N 이상 / 기타 10 N 이상"),
 "2F-85": dict(grip="20–235 N", pay="5 kg"),
 "Aero Hand Open": dict(d="7", w="약 389 g"),
 "CTMG3F60": dict(w="약 1.1 kg", grip="최대 50 N"),
 "DH116-L1": dict(d="11", w="545 g", pay="30 kg (손 전체 최대 파지 하중)"),
 "Wuji Hand 2": dict(hz="1 kHz"),
 "eHand-6": dict(d="6", w="800 g 미만", grip="3–10 N (엄지/네 손가락 파지력, 동적 힘 제어)"),
 "RH-P12-RN": dict(d="1", a=1, w="약 500 g", grip="최대 170 N", pay="5 kg (권장)"),
 "MG10": dict(pay="10 kg (평행 인양 최대)", f="인장력 300 N"),
 "MHT2-32DZ": dict(f="유효 파지 모멘트 12.4 N·m (0.5 MPa)"),
 "qb SoftHand2 Research": dict(d="19 (연동 구조)", a=2, pay="집기 2 kg / 감싸기 3 kg (정격)"),
 "Dex5-S": dict(w="약 620 g", hz="1 kHz"),
 "D-Hand 5MT＋": dict(a=6),
 "RH56BFX": dict(j=12, w="약 540 g", f="엄지 6 N / 기타 4 N"),
 "COVVI Robotic Hand": dict(a=6, w="약 1.03 kg"),
 "DexHand021 (Mass Production)": dict(w="약 1 kg"),
 "BarrettHand BH8-282": dict(j=8, a=4, w="0.98 kg", pay="6 kg"),
 "XHAND 1": dict(w="약 1.1 kg"),
 "Sandia Hand": dict(d="손가락당 3"),
 "Hey5": dict(j=19, a=3, w="약 720 g", pay="1 kg (공칭)"),
 "Allegro Hand V6 F": dict(w="약 1.15 kg"),
 "WSG 50-110": dict(grip="5–80 N", pay="3 kg (형상구속) / 0.8 kg (마찰파지)"),
 "IH2 Azzurra": dict(w="약 640 g"),
 "DH116-R1-M": dict(w="545±10 g"),
 "uHand": dict(w="191 g"),
 "Allegro Hand V6 V": dict(w="약 1.15 kg"),
 "Dex2/5": dict(w="365 g"),
 "Mia Hand R&D": dict(a=3),
 "Dex5-1": dict(w="약 1.1 kg"),
 "ADH-5-6-P1": dict(w="약 560 g"),
 "AIDIN Hand Gen2": dict(d="16"),
 "OmniHand Pro 2025 (O12)": dict(tip="최대 20 N"),
 "qb SoftHand Research": dict(d="19 (연동 구조)", a=1, w="약 770 g"),
 "DLR-HIT Hand II": dict(w="약 1.5 kg", an="손가락당"),
 "RH56F2": dict(w="약 605 g", hz="1 kHz"),
 "FTHand-21": dict(d="21"),
 "DexHand021 Pro": dict(d="22 (손목 통합)"),
 "Gifu Hand III": dict(d="16", j=20),
 "RH6D": dict(d="15", w="약 305 g"),
 "RH5DG2": dict(j=18, tip="20 N (손끝 파지력)"),
 "Wuji Hand v1": dict(tip="15 N"),
 "Linker Hand L30 Pro": dict(d="22", w="약 1.2 kg"),
 "DLR/HIT Hand I (SCHUNK SAH)": dict(d="13"),
 "LEAP Hand v2 Standard": dict(a=8),
 "D-Hand 5PT": dict(a=1),
 "Xiaoyao Dexterous Hand": dict(d="28 (손 전체)"),
 "orcahand Lite": dict(d="9"),
}
# 같은 제조사의 서로 다른 표기를 하나로 묶는다(관계 보기·필터용).
MAKER = [("tesollo|테솔로", "테솔로 (TESOLLO)"), ("원익|wonik", "원익로보틱스 (Wonik Robotics)"), ("inspire", "INSPIRE ROBOTS"),
 ("linkerbot", "Linkerbot"), ("unitree", "Unitree Robotics"), ("oymotion", "OYMotion"), ("robotis|로보티즈", "로보티즈 (ROBOTIS)"),
 ("leadshine", "Leadshine"), ("paxini", "PaXini"), ("dexrobot", "DexRobot"), ("wuji", "Wuji Technology"),
 ("에이딘|aidin", "에이딘로보틱스 (AIDIN Robotics)"), ("double giken", "Double Giken"), ("orca", "ORCA Dexterity"),
 ("^dlr", "DLR"), ("chestnut", "Chestnut Robotics")]
COUNTRY = {"한국": "대한민국"}
KNOWN = {"중국", "대한민국", "독일", "미국", "일본", "이탈리아", "덴마크", "영국", "싱가포르", "캐나다", "스위스", "포르투갈", "스웨덴", "스페인"}
SPEC_FIX = [("정밀 도", "정밀도"), ("시 간", "시간"), ("지 원", "지원"), ("조정할 수 있음. 5", "조정할 수 있음."),
 ("조작무게", "조작. 무게"), ("하중촉각", "하중. 촉각"), ("지원그립", "지원. 그립"), ("수명CAN", "수명. CAN"),
 ("크기165", "크기 165"), ("LFD-01anti", "LFD-01 anti"), ("기준회전", "기준 회전")]

def slugify(s):
    return re.sub(r'-+', '-', re.sub(r'[^a-z0-9]+', '-', s.lower())).strip('-')
def clean_url(u):
    return re.sub(r'[?&]utm[^&]*$', '', u.strip())
def countries(loc):
    out = []
    for part in loc.split('/'):
        c = re.split(r'[·\s]', part.strip())[0]
        c = COUNTRY.get(c, c)
        if c in KNOWN and c not in out: out.append(c)
    assert out, loc
    return out
def maker_key(m):
    for pat, name in MAKER:
        if re.search(pat, m, re.I): return name
    return m.replace("Technologi es", "Technologies")
def weight_g(t):
    if not t: return None
    m = re.search(r'([\d.]+)\s*(kg|g)', t)
    return round(float(m.group(1)) * (1000 if m.group(2) == 'kg' else 1)) if m else None

hands, slugs = [], set()
for i, x in enumerate(src):
    e = EXTRA.get(x['model'], {})
    slug = slugify(x['model']); assert slug and slug not in slugs, x['model']; slugs.add(slug)
    fingers = x['fingers']
    kind = x['category'] or (f"{fingers}지형 로봇핸드" if fingers else "로봇핸드")
    specs = x['specs'].strip()
    for a, b in SPEC_FIX: specs = specs.replace(a, b)
    ph = photos.get(x['model'])
    ft = features[x['model']]
    passive = ft.get('p')
    total = x['totalDof']
    # '능동 13+수동 3'처럼 노션에 두 값이 함께 적힌 경우에만 합을 총 DoF로 둔다(추측 아님).
    if total is None and passive is not None and x['activeDof'] is not None: total = x['activeDof'] + passive
    source = clean_url(x['source'])
    hands.append({
        "id": slug, "model": x['model'], "maker": x['maker'].replace("Technologi es", "Technologies"),
        "makerGroup": maker_key(x['maker']), "location": x['location'], "countries": countries(x['location']),
        "kind": kind, "fingers": fingers, "activeDof": x['activeDof'], "activeDofNote": e.get('an'),
        "passiveDof": passive, "totalDof": total, "dofStated": e.get('d'), "joints": e.get('j'), "actuators": e.get('a'),
        "tipForce": e.get('tip'), "gripForce": e.get('grip'), "payload": e.get('pay'), "forceOther": e.get('f'),
        "weight": e.get('w'), "weightG": weight_g(e.get('w')), "rate": e.get('hz'),
        "stroke": ft.get('st'), "speed": ft.get('sp'),
        "drive": ft.get('dr', []), "sensors": ft.get('se', []), "io": ft.get('io', []), "control": ft.get('ct', []), "notes": ft.get('ft', []),
        "specs": specs, "source": source,
        "research": research.get(x['model'], []),
        # 사진 출처: 제조사(기관)명 + 노션 조사표의 대표 사이트(제조사 제품 페이지)
        "photo": ({"src": ph['file'], "w": ph['w'], "h": ph['h'], "alpha": ph['alpha'], "bg": ph['bg'],
                   "creditName": maker_key(x['maker']), "creditUrl": source} if ph else None),
    })
for name, table in (("EXTRA", EXTRA), ("photos", photos), ("features", features)):
    missing = set(table) - {x['model'] for x in src}; assert not missing, (name, missing)
missing = {x['model'] for x in src} - set(features); assert not missing, ("features 누락", missing)
meta = {"basis": "HANDSLab 조사표(공개용) 기준", "count": len(hands),
        "makers": len({h['makerGroup'] for h in hands}), "countries": len({c for h in hands for c in h['countries']}),
        "photos": sum(1 for h in hands if h['photo'])}
with open(os.path.join(ROOT, 'assets/data/hands.js'), 'w', encoding='utf-8') as f:
    f.write("/* tools/build_data.py 가 생성한 파일입니다. 직접 고치지 말고 원본과 스크립트를 수정하세요. */\n")
    f.write("window.HANDSLAB_DATA = " + json.dumps({"meta": meta, "hands": hands}, ensure_ascii=False, indent=1) + ";\n")
print(meta)

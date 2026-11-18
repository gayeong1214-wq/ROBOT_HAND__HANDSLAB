/* tools/build_data.py 가 생성한 파일입니다. 직접 고치지 말고 원본과 스크립트를 수정하세요. */
window.HANDSLAB_DATA = {
 "meta": {
  "basis": "HANDSLab 조사표(공개용) 기준",
  "count": 99,
  "makers": 50,
  "countries": 14,
  "photos": 99,
  "webFilled": 377
 },
 "hands": [
  {
   "id": "pgn-plus-p-380-2",
   "model": "PGN-plus-P 380-2",
   "maker": "SCHUNK",
   "makerGroup": "SCHUNK",
   "location": "독일·라우펜암네카어",
   "countries": [
    "독일"
   ],
   "kind": "비교용 그리퍼",
   "fingers": 2,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "19,500 N (닫힘 힘, 6 bar)",
   "payload": "97.5 kg (권장 공작물 질량)",
   "forceOther": null,
   "weight": "27.5 kg",
   "weightG": 27500,
   "rate": null,
   "stroke": "죠당 스트로크 26 mm",
   "speed": "닫힘 0.6 s / 열림 0.6 s",
   "drive": [
    "공압 쐐기식",
    "평행 2지"
   ],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "공칭 6 bar 기준",
    "중량 금속 부품용"
   ],
   "specs": "공압 쐐기식 평행 2지. 권장 공작물 질량 97.5 kg, 공칭 6 bar 기준 닫힘 힘 19,500 N, 죠당 스트로크 26 mm, 본체 27.5 kg. 중량 금속 부품용.",
   "source": "https://schunk.com/us/en/gripping-systems/parallel-gripper/pgn-plus-p/pgn-plus-p-380-2/p/000000000001378019",
   "research": [],
   "photo": {
    "src": "assets/img/hands/pgn-plus-p-380-2-notion.webp",
    "w": 600,
    "h": 324,
    "alpha": true,
    "bg": null,
    "creditName": "SCHUNK",
    "creditUrl": "https://schunk.com/us/en/gripping-systems/parallel-gripper/pgn-plus-p/pgn-plus-p-380-2/p/000000000001378019"
   },
   "other": [
    "작동 압력 2.5–8 bar (공칭 6 bar)",
    "열림 힘 20,400 N",
    "반복정밀도 0.05 mm",
    "IP40",
    "크기 410 × 170 × 155 mm",
    "작동 원리: 쐐기 기어 (면 접촉 동력 전달)"
   ],
   "web": [
    {
     "field": "speed",
     "url": "https://schunk.com/us/en/gripping-systems/parallel-gripper/pgn-plus-p/pgn-plus-p-380-2/p/000000000001378019"
    },
    {
     "field": "other",
     "url": "https://schunk.com/us/en/gripping-systems/parallel-gripper/pgn-plus-p/pgn-plus-p-380-2/p/000000000001378019"
    }
   ]
  },
  {
   "id": "shadow-hand-plus",
   "model": "Shadow Hand Plus",
   "maker": "Shadow Robot Company",
   "makerGroup": "Shadow Robot Company",
   "location": "영국·런던",
   "countries": [
    "영국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "연구용 정교 조작 핸드",
    "강화학습·손안 조작 연구 사례 다수",
    "손목 포함 구성"
   ],
   "specs": "5지형 연구용 정교 조작 핸드. 강화학습·손안 조작 연구 사례가 많음. 손목 포함 견적 구성.",
   "source": "https://shadowrobot.com/dexterous-hand-series/",
   "research": [
    "https://arxiv.org/pdf/2310.15599"
   ],
   "photo": {
    "src": "assets/img/hands/shadow-hand-plus-notion.webp",
    "w": 960,
    "h": 478,
    "alpha": true,
    "bg": null,
    "creditName": "Shadow Robot Company",
    "creditUrl": "https://shadowrobot.com/dexterous-hand-series/"
   },
   "other": [],
   "web": []
  },
  {
   "id": "dg-5f-s",
   "model": "DG-5F-S",
   "maker": "테솔로 (TESOLLO)",
   "makerGroup": "테솔로 (TESOLLO)",
   "location": "대한민국·인천광역시 연수구 송도",
   "countries": [
    "대한민국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 20,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 20,
   "actuators": 20,
   "tipForce": null,
   "gripForce": null,
   "payload": "7 kg (감싸 쥐기 정격)",
   "forceOther": null,
   "weight": "약 880 g",
   "weightG": 880,
   "rate": "500 Hz",
   "stroke": null,
   "speed": null,
   "drive": [
    "전동 (관절별 개별 액추에이터 내장)"
   ],
   "sensors": [
    "촉각 센서 (옵션)"
   ],
   "io": [
    "Ethernet (TCP/IP)",
    "Modbus TCP",
    "ROS 2",
    "SDK"
   ],
   "control": [],
   "notes": [
    "거치대 등 옵션"
   ],
   "specs": "능동 20자유도, 약 880g, 제어 500Hz, 감싸 쥐기 정격 7kg. 촉각 센서·거치대 등 옵션.",
   "source": "https://www.tesollo.com/ko/products/grippers/dg-5f-s",
   "research": [
    "https://arxiv.org/pdf/2603.05687"
   ],
   "photo": {
    "src": "assets/img/hands/dg-5f-s-notion.webp",
    "w": 584,
    "h": 960,
    "alpha": true,
    "bg": null,
    "creditName": "테솔로 (TESOLLO)",
    "creditUrl": "https://www.tesollo.com/ko/products/grippers/dg-5f-s"
   },
   "other": [
    "파지 중량 집기 정격 1 kg·최대 2 kg / 감싸 쥐기 정격 7 kg·최대 12 kg",
    "입력 전압 24 V",
    "최대 소비 전류 10 A",
    "절대 엔코더",
    "자유도 구성 4자유도/손가락"
   ],
   "web": [
    {
     "field": "joints",
     "url": "https://www.tesollo.com/ko/products/grippers/dg-5f-s"
    },
    {
     "field": "actuators",
     "url": "https://www.tesollo.com/ko/products/grippers/dg-5f-s"
    },
    {
     "field": "io",
     "url": "https://www.tesollo.com/ko/products/grippers/dg-5f-s"
    },
    {
     "field": "drive",
     "url": "https://www.tesollo.com/ko/products/grippers/dg-5f-s"
    },
    {
     "field": "other",
     "url": "https://www.tesollo.com/ko/products/grippers/dg-5f-s"
    }
   ]
  },
  {
   "id": "sharpa-wave-w01",
   "model": "Sharpa Wave W01",
   "maker": "Sharpa",
   "makerGroup": "Sharpa",
   "location": "싱가포르",
   "countries": [
    "싱가포르"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 22,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": 22,
   "tipForce": "20 N",
   "gripForce": "150 N",
   "payload": "40 kg",
   "forceOther": null,
   "weight": "약 1.3 kg",
   "weightG": 1300,
   "rate": "500 Hz",
   "stroke": null,
   "speed": "동작 속도 4 Hz",
   "drive": [],
   "sensors": [
    "촉각 180 fps",
    "원시 이미지 제공"
   ],
   "io": [
    "1000BASE-T Ethernet",
    "Sharpa Wave SDK",
    "Sharpa Pilot"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 22자유도, 약 1.3kg, 제어 500Hz, 촉각 180fps 및 원시 이미지 제공.",
   "source": "https://www.sharpa.com/pages/w01",
   "research": [
    "https://arxiv.org/pdf/2609.07002"
   ],
   "photo": {
    "src": "assets/img/hands/sharpa-wave-w01-notion.webp",
    "w": 360,
    "h": 360,
    "alpha": false,
    "bg": null,
    "creditName": "Sharpa",
    "creditUrl": "https://www.sharpa.com/pages/w01"
   },
   "other": [
    "크기 208 × 90 × 50 mm",
    "작동 전압 18–28 V",
    "손끝 위치 반복정밀도 ±1 mm",
    "네 손가락 측면 스윙 ±20°",
    "최소 파지 직경 10 mm",
    "촉각 해상도 240×240",
    "정격 수명 100만 회 이상"
   ],
   "web": [
    {
     "field": "actuators",
     "url": "https://www.sharpa.com/pages/w01"
    },
    {
     "field": "tipForce",
     "url": "https://www.sharpa.com/pages/w01"
    },
    {
     "field": "gripForce",
     "url": "https://www.sharpa.com/pages/w01"
    },
    {
     "field": "payload",
     "url": "https://www.sharpa.com/pages/w01"
    },
    {
     "field": "speed",
     "url": "https://www.sharpa.com/pages/w01"
    },
    {
     "field": "io",
     "url": "https://www.sharpa.com/pages/w01"
    },
    {
     "field": "other",
     "url": "https://www.sharpa.com/pages/w01"
    }
   ]
  },
  {
   "id": "hx5-d20-mrt",
   "model": "HX5-D20-MRT",
   "maker": "로보티즈 (ROBOTIS)",
   "makerGroup": "로보티즈 (ROBOTIS)",
   "location": "대한민국·서울특별시 강서구 마곡",
   "countries": [
    "대한민국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 20,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "최대 14 N",
   "gripForce": null,
   "payload": "15 kg (감싸 쥐기 최대)",
   "forceOther": null,
   "weight": "1,000 g (±2%)",
   "weightG": 0,
   "rate": "1 kHz",
   "stroke": null,
   "speed": null,
   "drive": [
    "DYNAMIXEL 기반"
   ],
   "sensors": [
    "촉각 센서 배열 9개"
   ],
   "io": [
    "ROS"
   ],
   "control": [],
   "notes": [
    "오른손 모델",
    "ROS 기반 연구 활용"
   ],
   "specs": "능동 20자유도, DYNAMIXEL 기반 오른손 모델, 촉각 센서 배열 9개. ROS 기반 연구 활용.",
   "source": "https://www.robotis.com/shop/item.php?it_id=905-0058-000",
   "research": [
    "https://arxiv.org/pdf/2609.31323"
   ],
   "photo": {
    "src": "assets/img/hands/hx5-d20-mrt-notion.webp",
    "w": 500,
    "h": 500,
    "alpha": false,
    "bg": null,
    "creditName": "로보티즈 (ROBOTIS)",
    "creditUrl": "https://www.robotis.com/shop/item.php?it_id=905-0058-000"
   },
   "other": [
    "작동 전압 24 V",
    "통신 RS485 (DYNAMIXEL Protocol 2.0 / Modbus-RTU)",
    "손가락 구동기 DYNAMIXEL XM335-T323-T (직접 구동)",
    "ROS 2 (ros2_control)",
    "자유도 구성 4 DoF/손가락"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://docs.robotis.com/docs/systems/hx5_d20/specifications/hardware"
    },
    {
     "field": "rate",
     "url": "https://docs.robotis.com/docs/systems/hx5_d20/specifications/hardware"
    },
    {
     "field": "tipForce",
     "url": "https://docs.robotis.com/docs/systems/hx5_d20/specifications/hardware"
    },
    {
     "field": "payload",
     "url": "https://docs.robotis.com/docs/systems/hx5_d20/specifications/hardware"
    },
    {
     "field": "other",
     "url": "https://docs.robotis.com/docs/systems/hx5_d20/specifications/hardware"
    }
   ]
  },
  {
   "id": "dg-5f-m",
   "model": "DG-5F-M",
   "maker": "테솔로 (TESOLLO)",
   "makerGroup": "테솔로 (TESOLLO)",
   "location": "대한민국·인천광역시 연수구 송도",
   "countries": [
    "대한민국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 20,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 20,
   "actuators": 20,
   "tipForce": null,
   "gripForce": null,
   "payload": "10 kg (감싸 쥐기 정격)",
   "forceOther": null,
   "weight": "약 1.763 kg",
   "weightG": 1763,
   "rate": "250 Hz",
   "stroke": null,
   "speed": null,
   "drive": [
    "완전 구동형 (관절별 개별 액추에이터)"
   ],
   "sensors": [
    "힘·토크 센서 (옵션)",
    "촉각 센서 (옵션)"
   ],
   "io": [
    "Modbus RTU",
    "Modbus TCP",
    "Ethernet (TCP/IP)",
    "ROS 2",
    "SDK"
   ],
   "control": [],
   "notes": [
    "진공 옵션"
   ],
   "specs": "능동 20자유도, 약 1.763kg, 제어 250Hz, 감싸 쥐기 정격 10kg. 힘·토크/촉각 센서 및 진공 옵션.",
   "source": "https://www.tesollo.com/ko/products/grippers/dg-5f-m",
   "research": [
    "https://arxiv.org/pdf/2603.12243"
   ],
   "photo": {
    "src": "assets/img/hands/dg-5f-m-notion.webp",
    "w": 533,
    "h": 960,
    "alpha": true,
    "bg": null,
    "creditName": "테솔로 (TESOLLO)",
    "creditUrl": "https://www.tesollo.com/ko/products/grippers/dg-5f-m"
   },
   "other": [
    "파지 중량 집기 정격 2.5 kg·최대 5 kg / 감싸 쥐기 정격 10 kg·최대 20 kg",
    "입력 전압 24 V",
    "최대 소비 전류 10 A",
    "절대 엔코더",
    "자유도 구성 4자유도/손가락"
   ],
   "web": [
    {
     "field": "joints",
     "url": "https://www.tesollo.com/ko/products/grippers/dg-5f-m"
    },
    {
     "field": "actuators",
     "url": "https://www.tesollo.com/ko/products/grippers/dg-5f-m"
    },
    {
     "field": "io",
     "url": "https://www.tesollo.com/ko/products/grippers/dg-5f-m"
    },
    {
     "field": "drive",
     "url": "https://www.tesollo.com/ko/products/grippers/dg-5f-m"
    },
    {
     "field": "other",
     "url": "https://www.tesollo.com/ko/products/grippers/dg-5f-m"
    }
   ]
  },
  {
   "id": "3fg25",
   "model": "3FG25",
   "maker": "OnRobot",
   "makerGroup": "OnRobot",
   "location": "덴마크·오덴세",
   "countries": [
    "덴마크"
   ],
   "kind": "비교용 그리퍼",
   "fingers": 3,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "50–450 N",
   "payload": "25 kg (형상구속) / 15 kg (마찰파지)",
   "forceOther": null,
   "weight": "1.6 kg",
   "weightG": 1600,
   "rate": null,
   "stroke": "파지 직경 외경 18–155 mm / 내경 41–184 mm",
   "speed": "최대 90 mm/s (직경 변화), 파지 시간 500 ms (브레이크 포함)",
   "drive": [
    "전동",
    "3지 중심정렬"
   ],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "IP67",
    "정전 시 브레이크로 유지",
    "CNC 원통 부품에 적합"
   ],
   "specs": "전동 3지 중심정렬. 형상구속 최대 25 kg, 마찰파지 최대 15 kg. 전체 파지력 50–450 N, IP67, 정전 시 브레이크로 유지. CNC 원통 부품에 적합.",
   "source": "https://onrobot.com/en/products/3fg25",
   "research": [
    "https://arxiv.org/pdf/2508.06295"
   ],
   "photo": {
    "src": "assets/img/hands/3fg25-notion.webp",
    "w": 354,
    "h": 436,
    "alpha": true,
    "bg": null,
    "creditName": "OnRobot",
    "creditUrl": "https://onrobot.com/en/products/3fg25"
   },
   "other": [
    "전원 24 V (20–25 V)",
    "소비 전류 50–1500 mA",
    "IP67",
    "손가락 위치 분해능 0.1 mm",
    "직경 반복정밀도 0.1–0.2 mm",
    "모터: 일체형 전동 BLDC",
    "정전 시 파지 유지 (기계식 브레이크)",
    "크기 156 × 168 × Ø187 mm",
    "유연 파지 모드 파지력 50–300 N"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://onrobot.com/storage/datasheets/3fg25/datasheet_3fg25_v1.3_en.pdf"
    },
    {
     "field": "stroke",
     "url": "https://onrobot.com/storage/datasheets/3fg25/datasheet_3fg25_v1.3_en.pdf"
    },
    {
     "field": "speed",
     "url": "https://onrobot.com/storage/datasheets/3fg25/datasheet_3fg25_v1.3_en.pdf"
    },
    {
     "field": "other",
     "url": "https://onrobot.com/storage/datasheets/3fg25/datasheet_3fg25_v1.3_en.pdf"
    }
   ]
  },
  {
   "id": "svh",
   "model": "SVH",
   "maker": "SCHUNK",
   "makerGroup": "SCHUNK",
   "location": "독일·라우펜암네카어",
   "countries": [
    "독일"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 20,
   "actuators": 9,
   "tipForce": null,
   "gripForce": null,
   "payload": "0.85 kg (인간-로봇 협업 적용 시 최대 공작물 질량)",
   "forceOther": null,
   "weight": "약 1.3 kg",
   "weightG": 1300,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "구동 9축 · 연동 20관절"
   ],
   "sensors": [],
   "io": [
    "RS485"
   ],
   "control": [],
   "notes": [
    "사람 손 형상의 다관절 연구용 핸드"
   ],
   "specs": "구동 9축으로 연동 20개 관절 동작, 약 1.3kg, RS485. 사람 손 형상의 다관절 연구용 핸드.",
   "source": "https://schunk.com/us/en/gripping-systems/special-gripper/svh/c/PGR_3161",
   "research": [
    "https://arxiv.org/pdf/1910.10900"
   ],
   "photo": {
    "src": "assets/img/hands/svh-notion.webp",
    "w": 338,
    "h": 600,
    "alpha": false,
    "bg": null,
    "creditName": "SCHUNK",
    "creditUrl": "https://schunk.com/us/en/gripping-systems/special-gripper/svh/c/PGR_3161"
   },
   "other": [
    "공칭 전압 24 V",
    "IP20",
    "전체 길이 242.5 mm, 손 폭 92 mm (사람 손 1:1)",
    "축 수 20",
    "자유도 표기: 엄지 2·검지 2·중지 2·약지 1·소지 1·벌림 1",
    "구동: 서보모터 전동, 스핀들 가이드",
    "ROS1/ROS2 드라이버 제공"
   ],
   "web": [
    {
     "field": "payload",
     "url": "https://schunk.com/us/en/gripping-systems/special-gripper/svh/svh-linke-hand/p/000000000001545589"
    },
    {
     "field": "other",
     "url": "https://schunk.com/us/en/gripping-systems/special-gripper/svh/svh-linke-hand/p/000000000001545589"
    }
   ]
  },
  {
   "id": "rh56dfx",
   "model": "RH56DFX",
   "maker": "INSPIRE ROBOTS",
   "makerGroup": "INSPIRE ROBOTS",
   "location": "중국·베이징시 스징산구",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 12,
   "actuators": null,
   "tipForce": "엄지 15 N / 기타 10 N",
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "약 540 g",
   "weightG": 540,
   "rate": null,
   "stroke": null,
   "speed": "엄지 측면회전 107°/s, 엄지 굽힘 70°/s, 네 손가락 굽힘 260°/s",
   "drive": [
    "연동 12관절"
   ],
   "sensors": [
    "힘 피드백"
   ],
   "io": [
    "RS485"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 6자유도·연동 12관절, 약 540g, 엄지 15N/기타 10N, RS485 및 힘 피드백.",
   "source": "https://en.inspire-robots.com/product/rh56dfx/",
   "research": [
    "https://arxiv.org/pdf/2505.21864v2"
   ],
   "photo": {
    "src": "assets/img/hands/rh56dfx-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "INSPIRE ROBOTS",
    "creditUrl": "https://en.inspire-robots.com/product/rh56dfx/"
   },
   "other": [
    "작동 전압 DC 12–48 V",
    "피크 전류 2 A@24 V",
    "반복정밀도 ±0.20 mm",
    "힘 분해능 0.50 N",
    "엄지 측면회전 범위 >65°"
   ],
   "web": [
    {
     "field": "speed",
     "url": "https://en.inspire-robots.com/product/rh56dfx/"
    },
    {
     "field": "other",
     "url": "https://en.inspire-robots.com/product/rh56dfx/"
    }
   ]
  },
  {
   "id": "allegro-hand-v5-plus",
   "model": "Allegro Hand V5 Plus",
   "maker": "원익로보틱스",
   "makerGroup": "원익로보틱스 (Wonik Robotics)",
   "location": "대한민국·경기도 성남시 판교",
   "countries": [
    "대한민국"
   ],
   "kind": "4지형 로봇핸드",
   "fingers": 4,
   "activeDof": 16,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 16,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "15 kg (측정 방법에 따라 다름)",
   "forceOther": null,
   "weight": "약 1.024 kg",
   "weightG": 1024,
   "rate": "500 Hz (CAN)",
   "stroke": null,
   "speed": null,
   "drive": [
    "전동 (DC 모터)"
   ],
   "sensors": [
    "손끝 촉각 센서"
   ],
   "io": [
    "CAN",
    "Allegro Hand UXD"
   ],
   "control": [
    "관절 전류 기반 제어"
   ],
   "notes": [],
   "specs": "능동 16자유도, 약 1.024kg, 관절 전류 기반 제어, 손끝 촉각 센서",
   "source": "https://www.allegrohand.com/sub/product/p.php?idx=4",
   "research": [
    "https://arxiv.org/pdf/2506.19212"
   ],
   "photo": {
    "src": "assets/img/hands/allegro-hand-v5-plus-notion.webp",
    "w": 717,
    "h": 960,
    "alpha": true,
    "bg": null,
    "creditName": "원익로보틱스 (Wonik Robotics)",
    "creditUrl": "https://www.allegrohand.com/sub/product/p.php?idx=4"
   },
   "other": [
    "전원 24 V / 5 A / 120 W",
    "정지 토크 0.92 Nm (비엄지 2번 관절 1.84 Nm)",
    "감속비 288.35:1 (비엄지 2번 관절 576.7:1)",
    "관절 분해능 0.088°",
    "손끝 센서: 360° 공압식(정전용량) 압력 촉각"
   ],
   "web": [
    {
     "field": "joints",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=4"
    },
    {
     "field": "rate",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=4"
    },
    {
     "field": "payload",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=4"
    },
    {
     "field": "io",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=4"
    },
    {
     "field": "drive",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=4"
    },
    {
     "field": "other",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=4"
    }
   ]
  },
  {
   "id": "aidin-hand",
   "model": "AIDIN-Hand (기존형)",
   "maker": "에이딘로보틱스 (AIDIN Robotics)",
   "makerGroup": "에이딘로보틱스 (AIDIN Robotics)",
   "location": "대한민국·경기도 안양시 동안구",
   "countries": [
    "대한민국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "15",
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "약 1.3 kg",
   "weightG": 1300,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "링크 구동"
   ],
   "sensors": [
    "손끝 5곳 6축 힘·토크 센서"
   ],
   "io": [
    "TCP/IP",
    "JSON"
   ],
   "control": [],
   "notes": [],
   "specs": "15자유도, 약 1.3kg, 5개 손끝 6축 힘·토크 센서, TCP/IP·JSON 통신.",
   "source": "https://www.aidinrobotics.co.kr/robotic-hand",
   "research": [],
   "photo": {
    "src": "assets/img/hands/aidin-hand-notion.webp",
    "w": 819,
    "h": 647,
    "alpha": false,
    "bg": null,
    "creditName": "에이딘로보틱스 (AIDIN Robotics)",
    "creditUrl": "https://www.aidinrobotics.co.kr/robotic-hand"
   },
   "other": [],
   "web": [
    {
     "field": "drive",
     "url": "https://www.aidinrobotics.co.kr/robotic-hand"
    }
   ]
  },
  {
   "id": "aero-hand",
   "model": "Aero Hand",
   "maker": "Chestnut Robotics (구 TetherIA)",
   "makerGroup": "Chestnut Robotics",
   "location": "미국·캘리포니아주 산타클라라",
   "countries": [
    "미국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 15,
   "activeDofNote": null,
   "passiveDof": 3,
   "totalDof": 18,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "10 N",
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "800 g 이하",
   "weightG": 800,
   "rate": "10 kHz (저수준 전류 루프)",
   "stroke": null,
   "speed": "완전 열림→닫힘 0.5 s 이하",
   "drive": [
    "직접 구동 (Direct drive)"
   ],
   "sensors": [
    "손끝·손바닥 촉각"
   ],
   "io": [
    "CAN FD",
    "ROS2"
   ],
   "control": [
    "위치",
    "속도",
    "전류",
    "토크",
    "임피던스 제어"
   ],
   "notes": [],
   "specs": "총 18자유도(능동 15+수동 3), 800g 이하, 손끝·손바닥 촉각, 위치/속도/전류/토크/임피던스 제어, CAN FD·ROS2.",
   "source": "https://chestnut.bot/aero-hand.html",
   "research": [],
   "photo": {
    "src": "assets/img/hands/aero-hand-notion.webp",
    "w": 960,
    "h": 660,
    "alpha": false,
    "bg": null,
    "creditName": "Chestnut Robotics",
    "creditUrl": "https://chestnut.bot/aero-hand.html"
   },
   "other": [
    "작동 전압 20–50 VDC",
    "크기 198 × 103 × 43 mm",
    "IP54, 1 m 낙하 시험 통과",
    "반복정밀도 ±1.0 mm",
    "14비트 자기 엔코더 (0.05°)",
    "관절 토크: 모터 전류 기반 추정",
    "제어 모드: 위치·속도·토크/전류(MIT)·임피던스",
    "C++/Python SDK, URDF",
    "수명 30만 회 이상 완전 파지"
   ],
   "web": [
    {
     "field": "rate",
     "url": "https://chestnut.bot/aero-hand.html"
    },
    {
     "field": "tipForce",
     "url": "https://chestnut.bot/aero-hand.html"
    },
    {
     "field": "speed",
     "url": "https://chestnut.bot/aero-hand.html"
    },
    {
     "field": "drive",
     "url": "https://chestnut.bot/aero-hand.html"
    },
    {
     "field": "other",
     "url": "https://chestnut.bot/aero-hand.html"
    }
   ]
  },
  {
   "id": "dg-4f",
   "model": "DG-4F",
   "maker": "테솔로 (TESOLLO)",
   "makerGroup": "테솔로 (TESOLLO)",
   "location": "대한민국·인천광역시 연수구 송도",
   "countries": [
    "대한민국"
   ],
   "kind": "4지형 로봇핸드",
   "fingers": 4,
   "activeDof": 18,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "10 kg (감싸 쥐기 정격)",
   "forceOther": null,
   "weight": "약 1.494 kg",
   "weightG": 1494,
   "rate": "333 Hz",
   "stroke": null,
   "speed": null,
   "drive": [],
   "sensors": [
    "힘·토크 센서 (옵션)",
    "촉각 센서 (옵션)"
   ],
   "io": [
    "ROS2",
    "SDK"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 18자유도, 약 1.494kg, 제어 333Hz, ROS2·SDK. 힘·토크/촉각 센서 옵션.",
   "source": "https://www.tesollo.com/ko/products/grippers/dg-4f",
   "research": [],
   "photo": {
    "src": "assets/img/hands/dg-4f-notion.webp",
    "w": 571,
    "h": 925,
    "alpha": true,
    "bg": null,
    "creditName": "테솔로 (TESOLLO)",
    "creditUrl": "https://www.tesollo.com/ko/products/grippers/dg-4f"
   },
   "other": [
    "파지 중량 집기 정격 3 kg·최대 5 kg / 감싸 쥐기 정격 10 kg·최대 20 kg",
    "입력 전압 24 V",
    "최대 소비 전류 10 A",
    "절대 엔코더",
    "통신 Modbus (RTU, TCP), Ethernet (TCP/IP)",
    "조절 가능한 베이스 관절 구조 (좌/우손·그리퍼형 구성)"
   ],
   "web": [
    {
     "field": "payload",
     "url": "https://www.tesollo.com/ko/products/grippers/dg-4f"
    },
    {
     "field": "other",
     "url": "https://www.tesollo.com/ko/products/grippers/dg-4f"
    }
   ]
  },
  {
   "id": "gecko-sp5",
   "model": "Gecko SP5",
   "maker": "OnRobot",
   "makerGroup": "OnRobot",
   "location": "덴마크·오덴세",
   "countries": [
    "덴마크"
   ],
   "kind": "비교용 그리퍼",
   "fingers": null,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "5 kg (최대)",
   "forceOther": null,
   "weight": "318 g",
   "weightG": 318,
   "rate": null,
   "stroke": null,
   "speed": "탈착 100–1000 ms (로봇 속도에 따라)",
   "drive": [
    "건식 접착 (도마뱀 발 모사)",
    "전기·공압 공급 불필요"
   ],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "접촉으로 부착 · 박리 동작으로 해제",
    "유리처럼 평평·매끈한 강성 판재용"
   ],
   "specs": "도마뱀 발을 모사한 건식 접착 그리퍼. 전기·공압 공급 없이 접촉으로 붙이고 박리 동작으로 해제. SP5 최대 5 kg. 유리처럼 평평·매끈한 강성 판재용.",
   "source": "https://onrobot.com/en/products/gecko-gripper",
   "research": [],
   "photo": {
    "src": "assets/img/hands/gecko-sp5-notion.webp",
    "w": 347,
    "h": 480,
    "alpha": true,
    "bg": null,
    "creditName": "OnRobot",
    "creditUrl": "https://onrobot.com/en/products/gecko-gripper"
   },
   "other": [
    "예압(preload) 최소 12 N / 중간 29 N / 최대 46 N",
    "패드 직경 Ø75 mm",
    "크기(H×W) 69 × 71 mm",
    "IP42",
    "정전 시에도 파지 유지",
    "패드 교체 주기 약 20만 회"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://onrobot.com/storage/datasheets/gecko/datasheet_gecko_gripper_v1.5_en.pdf"
    },
    {
     "field": "speed",
     "url": "https://onrobot.com/storage/datasheets/gecko/datasheet_gecko_gripper_v1.5_en.pdf"
    },
    {
     "field": "other",
     "url": "https://onrobot.com/storage/datasheets/gecko/datasheet_gecko_gripper_v1.5_en.pdf"
    }
   ]
  },
  {
   "id": "sharpa-wave-w01-se",
   "model": "Sharpa Wave W01 SE",
   "maker": "Sharpa",
   "makerGroup": "Sharpa",
   "location": "싱가포르",
   "countries": [
    "싱가포르"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 22,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": 22,
   "tipForce": "12 N",
   "gripForce": "90 N",
   "payload": "24 kg",
   "forceOther": null,
   "weight": "약 1.3 kg",
   "weightG": 1300,
   "rate": "500 Hz",
   "stroke": null,
   "speed": "동작 속도 2 Hz",
   "drive": [],
   "sensors": [
    "촉각 30 fps",
    "원시 이미지 미제공"
   ],
   "io": [
    "1000BASE-T Ethernet",
    "Sharpa Wave SDK",
    "Sharpa Pilot"
   ],
   "control": [],
   "notes": [
    "W01 대비 힘·속도 제한"
   ],
   "specs": "능동 22자유도, 약 1.3kg, 제어 500Hz, 촉각 30fps·원시 이미지 미제공. W01 대비 힘·속도 제한.",
   "source": "https://www.sharpa.com/pages/w01",
   "research": [
    "https://arxiv.org/pdf/2609.07002"
   ],
   "photo": {
    "src": "assets/img/hands/sharpa-wave-w01-se-notion.webp",
    "w": 360,
    "h": 360,
    "alpha": false,
    "bg": null,
    "creditName": "Sharpa",
    "creditUrl": "https://www.sharpa.com/pages/w01"
   },
   "other": [
    "크기 208 × 90 × 50 mm",
    "작동 전압 18–28 V",
    "손끝 위치 반복정밀도 ±1 mm",
    "최소 파지 직경 10 mm",
    "촉각 해상도 60×60",
    "추론 모드: 온보드 전용"
   ],
   "web": [
    {
     "field": "actuators",
     "url": "https://www.sharpa.com/pages/w01"
    },
    {
     "field": "tipForce",
     "url": "https://www.sharpa.com/pages/w01"
    },
    {
     "field": "gripForce",
     "url": "https://www.sharpa.com/pages/w01"
    },
    {
     "field": "payload",
     "url": "https://www.sharpa.com/pages/w01"
    },
    {
     "field": "speed",
     "url": "https://www.sharpa.com/pages/w01"
    },
    {
     "field": "io",
     "url": "https://www.sharpa.com/pages/w01"
    },
    {
     "field": "other",
     "url": "https://www.sharpa.com/pages/w01"
    }
   ]
  },
  {
   "id": "orcahand-touch",
   "model": "orcahand Touch",
   "maker": "ORCA Dexterity / ETH Zürich",
   "makerGroup": "ORCA Dexterity",
   "location": "스위스·취리히",
   "countries": [
    "스위스"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 17,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [],
   "sensors": [
    "손끝 5곳 힘·토크 촉각 센서"
   ],
   "io": [
    "Python SDK (orca_core)"
   ],
   "control": [],
   "notes": [
    "손가락 16축 + 손목 1축"
   ],
   "specs": "손가락 16축·손목 1축으로 총 17자유도. 다섯 손끝에 힘·토크 촉각 센서.",
   "source": "https://www.orcahand.com/hardware/touch",
   "research": [],
   "photo": {
    "src": "assets/img/hands/orcahand-touch-notion.webp",
    "w": 336,
    "h": 960,
    "alpha": true,
    "bg": null,
    "creditName": "ORCA Dexterity",
    "creditUrl": "https://www.orcahand.com/hardware/touch"
   },
   "other": [],
   "web": [
    {
     "field": "io",
     "url": "https://github.com/orcahand/orca_core"
    }
   ]
  },
  {
   "id": "vgp30",
   "model": "VGP30",
   "maker": "OnRobot",
   "makerGroup": "OnRobot",
   "location": "덴마크·오덴세",
   "countries": [
    "덴마크"
   ],
   "kind": "비교용 그리퍼",
   "fingers": null,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "30 kg (골판지 상자 최대)",
   "forceOther": null,
   "weight": "3.1 kg",
   "weightG": 3100,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "공압 진공 흡착",
    "3–7 bar 구동"
   ],
   "sensors": [
    "공기 유량 실시간 모니터링 (옵션)"
   ],
   "io": [],
   "control": [],
   "notes": [
    "독립 진공 2채널 · 흡착컵 20개",
    "총 공기 유량 440 L/min (채널당 220)",
    "중량 상자 팔레타이징용"
   ],
   "specs": "공압 진공 흡착 그리퍼. 골판지 상자 최대 30 kg, 총 공기 유량 440 L/min(채널당 220), 독립 진공 2채널·흡착컵 20개, 3–7 bar 구동. 중량 상자 팔레타이징용.",
   "source": "https://onrobot.com/en/products/vgp30-vacuum-gripper",
   "research": [],
   "photo": {
    "src": "assets/img/hands/vgp30-notion.webp",
    "w": 404,
    "h": 206,
    "alpha": true,
    "bg": null,
    "creditName": "OnRobot",
    "creditUrl": "https://onrobot.com/en/products/vgp30-vacuum-gripper"
   },
   "other": [
    "독립 진공 채널 2개",
    "진공 컵 20개",
    "총 공기 유량 440 L/min",
    "IP54"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://onrobot.com/en/products/vgp30-vacuum-gripper"
    },
    {
     "field": "sensors",
     "url": "https://b2b.onrobot.com/vgp30/"
    },
    {
     "field": "other",
     "url": "https://onrobot.com/en/products/vgp30-vacuum-gripper"
    }
   ]
  },
  {
   "id": "agile-hand",
   "model": "Agile Hand",
   "maker": "Agile Robots SE",
   "makerGroup": "Agile Robots SE",
   "location": "독일·뮌헨",
   "countries": [
    "독일"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "15 (대향 엄지 옵션 16)",
   "joints": 21,
   "actuators": null,
   "tipForce": "10 N (능동 손끝 힘)",
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "약 1.5 kg",
   "weightG": 1500,
   "rate": "1 kHz",
   "stroke": null,
   "speed": "관절 360°/s",
   "drive": [],
   "sensors": [
    "구동 관절별 토크·위치 센싱"
   ],
   "io": [
    "C++",
    "Python",
    "ROS"
   ],
   "control": [],
   "notes": [
    "대향 엄지 옵션 (16 DoF)"
   ],
   "specs": "15자유도 (대향 엄지 옵션 16), 약 1.5kg, 구동 관절별 토크·위치 센싱, 1kHz, C++·Python·ROS.",
   "source": "https://www.agile-robots.com/en/products/agile-hand/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/agile-hand-notion.webp",
    "w": 634,
    "h": 585,
    "alpha": true,
    "bg": null,
    "creditName": "Agile Robots SE",
    "creditUrl": "https://www.agile-robots.com/en/products/agile-hand/"
   },
   "other": [
    "로봇 플랜지 ISO 9409-1-50-4-M6 퀵체인저 어댑터"
   ],
   "web": [
    {
     "field": "joints",
     "url": "https://www.agile-robots.com/en/products/agile-hand/"
    },
    {
     "field": "tipForce",
     "url": "https://www.agile-robots.com/en/products/agile-hand/"
    },
    {
     "field": "speed",
     "url": "https://www.agile-robots.com/en/products/agile-hand/"
    },
    {
     "field": "other",
     "url": "https://www.agile-robots.com/en/products/agile-hand/"
    }
   ]
  },
  {
   "id": "mygripper-h100",
   "model": "myGripper H100",
   "maker": "Elephant Robotics",
   "makerGroup": "Elephant Robotics",
   "location": "중국·선전시",
   "countries": [
    "중국"
   ],
   "kind": "3지형 로봇핸드",
   "fingers": 3,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 6,
   "actuators": 6,
   "tipForce": null,
   "gripForce": null,
   "payload": "0.5 kg (최대)",
   "forceOther": null,
   "weight": "약 780 g",
   "weightG": 780,
   "rate": "100 Hz",
   "stroke": "최대 개방 폭 약 130 mm",
   "speed": null,
   "drive": [
    "디지털 서보 모터 6개"
   ],
   "sensors": [],
   "io": [
    "Python",
    "ROS"
   ],
   "control": [],
   "notes": [
    "산업·교육용",
    "myCobot Pro630·Mercury 계열 응용"
   ],
   "specs": "산업·교육용 3핑거 그리퍼. 6개의 디지털 서보 모터와 6개 구동 관절을 사용. 무게 약 780g, 최대 페이로드 500g, 최대 개방 폭 약 130mm. Python·ROS 연동을 지원하며 myCobot Pro630·Mercury 계열 응용에 활용 가능.",
   "source": "https://shop.elephantrobotics.com/products/mygripper-h100",
   "research": [],
   "photo": {
    "src": "assets/img/hands/mygripper-h100-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "Elephant Robotics",
    "creditUrl": "https://shop.elephantrobotics.com/products/mygripper-h100"
   },
   "other": [
    "전원 24 V 2 A",
    "M8-8핀 케이블 커넥터",
    "수명 10만 회 이상"
   ],
   "web": [
    {
     "field": "rate",
     "url": "https://docs.elephantrobotics.com/docs/acc-en/2-serialproduct/H100_Gripper/myhand_en.html"
    },
    {
     "field": "other",
     "url": "https://docs.elephantrobotics.com/docs/acc-en/2-serialproduct/H100_Gripper/myhand_en.html"
    }
   ]
  },
  {
   "id": "omnihand-3",
   "model": "OmniHand 3",
   "maker": "AGIBOT",
   "makerGroup": "AGIBOT",
   "location": "중국·상하이",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 10,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 16,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "최대 5 N (typ.)",
   "gripForce": null,
   "payload": "1 kg (일반) / 2 kg (최대), 5 cm 강체·손바닥 위",
   "forceOther": null,
   "weight": "550 g 이하",
   "weightG": 550,
   "rate": "1 kHz",
   "stroke": null,
   "speed": "최소 개폐 0.7 s",
   "drive": [
    "링크 구동",
    "전동 (모터 + 기어)"
   ],
   "sensors": [
    "촉각 400점 이상"
   ],
   "io": [
    "CAN FD",
    "RS485"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 10·총 16자유도, 550g 이하, 촉각 400점 이상, CAN FD·RS485, 통신 1kHz.",
   "source": "https://store.agibot.com/products/omnihand-2025-w-tactile",
   "research": [],
   "photo": {
    "src": "assets/img/hands/omnihand-3-notion.webp",
    "w": 706,
    "h": 942,
    "alpha": false,
    "bg": null,
    "creditName": "AGIBOT",
    "creditUrl": "https://store.agibot.com/products/omnihand-2025-w-tactile"
   },
   "other": [
    "전원 24 V",
    "크기 180×85×38.5 mm",
    "반복정밀도 0.5 mm (typ.)"
   ],
   "web": [
    {
     "field": "tipForce",
     "url": "https://www.agibot.com/products/OmniHand_O10"
    },
    {
     "field": "payload",
     "url": "https://www.agibot.com/products/OmniHand_O10"
    },
    {
     "field": "speed",
     "url": "https://www.agibot.com/products/OmniHand_O10"
    },
    {
     "field": "drive",
     "url": "https://www.agibot.com/products/OmniHand_O10"
    },
    {
     "field": "other",
     "url": "https://www.agibot.com/products/OmniHand_O10"
    }
   ]
  },
  {
   "id": "linker-hand-l20",
   "model": "Linker Hand L20",
   "maker": "Linkerbot (링커봇)",
   "makerGroup": "Linkerbot",
   "location": "중국·베이징시 하이뎬구",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 16,
   "activeDofNote": null,
   "passiveDof": 5,
   "totalDof": 21,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "엄지 15 N / 네 손가락 20 N",
   "gripForce": "다섯 손가락 100 N",
   "payload": "20 kg (최대)",
   "forceOther": null,
   "weight": "약 1.2 kg",
   "weightG": 1200,
   "rate": null,
   "stroke": null,
   "speed": "네 손가락 굴곡 3.5 rad/s (200.47°/s) / 엄지 측면 스윙 3.2 rad/s / 엄지 굴곡 1.52 rad/s",
   "drive": [
    "링크",
    "볼스크루"
   ],
   "sensors": [],
   "io": [
    "CAN",
    "RS485"
   ],
   "control": [],
   "notes": [
    "무게는 제조사 기준"
   ],
   "specs": "능동 16+수동 5=총 21자유도, 제조사 기준 약 1.2kg, 링크·볼스크루 구동, CAN·RS485.",
   "source": "https://www.linkerhand.com/details/LinkerHandL20/",
   "research": [
    "https://arxiv.org/pdf/2601.08246"
   ],
   "photo": {
    "src": "assets/img/hands/linker-hand-l20-notion.webp",
    "w": 960,
    "h": 937,
    "alpha": true,
    "bg": null,
    "creditName": "Linkerbot",
    "creditUrl": "https://www.linkerhand.com/details/LinkerHandL20/"
   },
   "other": [
    "전원 DC 24–48 V",
    "반복정밀도 ±0.20 mm",
    "자체 개발 브러시리스 모터 약 20개"
   ],
   "web": [
    {
     "field": "tipForce",
     "url": "https://www.linkerhand.com/details/LinkerHandL20/"
    },
    {
     "field": "gripForce",
     "url": "https://www.linkerhand.com/details/LinkerHandL20/"
    },
    {
     "field": "payload",
     "url": "https://www.linkerhand.com/details/LinkerHandL20/"
    },
    {
     "field": "speed",
     "url": "https://www.linkerhand.com/details/LinkerHandL20/"
    },
    {
     "field": "other",
     "url": "https://www.linkerhand.com/details/LinkerHandL20/"
    }
   ]
  },
  {
   "id": "ctdh4f08d",
   "model": "CTDH4F08D",
   "maker": "ChangingTek",
   "makerGroup": "ChangingTek",
   "location": "중국·장쑤성 타이창시",
   "countries": [
    "중국"
   ],
   "kind": "4지형 로봇핸드",
   "fingers": 4,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "손가락당 6 N",
   "payload": "약 2.5 kg (권장 감싸기)",
   "forceOther": null,
   "weight": "약 0.7 kg",
   "weightG": 700,
   "rate": null,
   "stroke": "이동 범위 약 80 mm",
   "speed": "최대 관절 속도 300°/s",
   "drive": [
    "전동 (모터 구동)"
   ],
   "sensors": [
    "위치·속도·힘 피드백"
   ],
   "io": [
    "Modbus RTU"
   ],
   "control": [],
   "notes": [
    "다관절 핸드",
    "반복 정밀도 ±0.15 mm"
   ],
   "specs": "4핑거 다관절 핸드. 약 80mm 이동 범위, 손가락당 6N 파지력, 무게 약 0.7kg. 권장 감싸기 파지 하중 약 2.5kg, 반복 정밀도 ±0.15mm. 최대 관절 속도 300°/s로 안내됨.",
   "source": "https://en.changingtek.com/fuhe/257",
   "research": [],
   "photo": {
    "src": "assets/img/hands/ctdh4f08d-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "ChangingTek",
    "creditUrl": "https://en.changingtek.com/fuhe/257"
   },
   "other": [
    "전원 24 V",
    "최대 전류 1 A",
    "반복정밀도 ±0.15 mm",
    "최대 소음 60 dB"
   ],
   "web": [
    {
     "field": "io",
     "url": "https://en.changingtek.com/fuhe/257"
    },
    {
     "field": "drive",
     "url": "https://en.changingtek.com/fuhe/257"
    },
    {
     "field": "sensors",
     "url": "https://en.changingtek.com/fuhe/257"
    },
    {
     "field": "other",
     "url": "https://en.changingtek.com/fuhe/257"
    }
   ]
  },
  {
   "id": "dheb-22-e-u-s-l",
   "model": "DHEB-22-E-U-S-L",
   "maker": "Festo",
   "makerGroup": "Festo",
   "location": "독일·에슬링겐암네카어",
   "countries": [
    "독일"
   ],
   "kind": "비교용 그리퍼",
   "fingers": null,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "0.32 kg (가이드 값)",
   "forceOther": null,
   "weight": "약 50 g",
   "weightG": 50,
   "rate": null,
   "stroke": "대상 내경 24–31.5 mm",
   "speed": "열림 30 ms / 닫힘 60 ms (6 bar, 최소)",
   "drive": [
    "공압 피스톤",
    "벨로즈 확장 (단동)"
   ],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "배기 시 벨로즈 복원력으로 해제",
    "구멍 안쪽을 잡는 내경 그리퍼",
    "병·컵 등 중공 부품용"
   ],
   "specs": "공압 피스톤이 기구로 벨로즈 직경을 키워 구멍 안쪽을 잡는 단동 내경 그리퍼, 배기 시 벨로즈 복원력으로 해제. 병·컵 등 중공 부품용. 대상 내경 24–31.5 mm, 본체 약 50 g.",
   "source": "https://www.festo.com/nl/nl/a/1320803/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/dheb-22-e-u-s-l-notion.webp",
    "w": 143,
    "h": 400,
    "alpha": false,
    "bg": null,
    "creditName": "Festo",
    "creditUrl": "https://www.festo.com/nl/nl/a/1320803/"
   },
   "other": [
    "작동 압력 5–8 bar",
    "벨로즈 스트로크 12 mm",
    "최대 작동 주파수 4 Hz",
    "공압 연결 M5",
    "위치 감지 없음",
    "벨로즈 소재 VMQ(실리콘)"
   ],
   "web": [
    {
     "field": "payload",
     "url": "https://ftp.festo.com/public/PNEUMATIC/SOFTWARE_SERVICE/DataSheet/EN_US/1320803.pdf"
    },
    {
     "field": "speed",
     "url": "https://ftp.festo.com/public/PNEUMATIC/SOFTWARE_SERVICE/DataSheet/EN_US/1320803.pdf"
    },
    {
     "field": "other",
     "url": "https://ftp.festo.com/public/PNEUMATIC/SOFTWARE_SERVICE/DataSheet/EN_US/1320803.pdf"
    }
   ]
  },
  {
   "id": "mark-7",
   "model": "Mark 7",
   "maker": "Mand.ro",
   "makerGroup": "Mand.ro",
   "location": "대한민국·경기도 부천시",
   "countries": [
    "대한민국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "5~7 (맞춤 구성)",
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "400 g 미만",
   "weightG": 400,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "손가락별 구동"
   ],
   "sensors": [
    "표면 근전도(EMG) 센서"
   ],
   "io": [],
   "control": [],
   "notes": [
    "의수형·바이오닉 로봇손",
    "기능적 파지 동작 지원",
    "엄지·검지·손목 관절 구성 조정 가능"
   ],
   "specs": "5핑거 의수형·바이오닉 로봇손. 사용자 맞춤 구성에 따라 5~7 DoF 구성이 가능하고 손가락별 구동 및 기능적 파지 동작을 지원함. 무게 400g 미만으로 소개된 제품. 사용자 요구에 따라 엄지·검지·손목의 관절 구성을 조정할 수 있음.",
   "source": "https://www.ot-world.com/exhibitors-products/product/otworld/7005/2860",
   "research": [
    "https://www.nature.com/articles/s41467-026-73678-w?utm_source"
   ],
   "photo": {
    "src": "assets/img/hands/mark-7-notion.webp",
    "w": 900,
    "h": 600,
    "alpha": true,
    "bg": null,
    "creditName": "Mand.ro",
    "creditUrl": "https://www.ot-world.com/exhibitors-products/product/otworld/7005/2860"
   },
   "other": [],
   "web": [
    {
     "field": "sensors",
     "url": "https://www.ot-world.com/exhibitors-products/product/otworld/7005/2860"
    }
   ]
  },
  {
   "id": "cr-hand",
   "model": "CR Hand",
   "maker": "Curious Robotics",
   "makerGroup": "Curious Robotics",
   "location": "일본·지바현 시로이시",
   "countries": [
    "일본"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "6",
   "joints": 13,
   "actuators": 6,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": "손가락당 모터 최대 힘 18 N",
   "weight": "약 326 g",
   "weightG": 326,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "스프링 관절"
   ],
   "sensors": [],
   "io": [
    "USB",
    "Python",
    "ROS2 (베타)"
   ],
   "control": [],
   "notes": [
    "FDM 제작"
   ],
   "specs": "6자유도·13관절, 약 326g, FDM 제작·스프링 관절, USB·Python·ROS2 베타.",
   "source": "https://www.curious-robotics.com/home-en",
   "research": [],
   "photo": {
    "src": "assets/img/hands/cr-hand-notion.webp",
    "w": 960,
    "h": 635,
    "alpha": false,
    "bg": null,
    "creditName": "Curious Robotics",
    "creditUrl": "https://www.curious-robotics.com/home-en"
   },
   "other": [
    "전원 6 V",
    "손목 장착면~손끝 172 mm",
    "서보 컨트롤러 Pololu Micro Maestro 6채널",
    "플랜지 ISO 9409-1-50-4-M6"
   ],
   "web": [
    {
     "field": "actuators",
     "url": "https://www.curious-robotics.com/home-en"
    },
    {
     "field": "forceOther",
     "url": "https://www.curious-robotics.com/home-en"
    },
    {
     "field": "other",
     "url": "https://www.curious-robotics.com/home-en"
    }
   ]
  },
  {
   "id": "dexh13-gen2",
   "model": "DexH13 Gen2",
   "maker": "PaXini AI",
   "makerGroup": "PaXini",
   "location": "중국·선전·베이징 거점",
   "countries": [
    "중국"
   ],
   "kind": "4지형 로봇핸드",
   "fingers": 4,
   "activeDof": 13,
   "activeDofNote": null,
   "passiveDof": 3,
   "totalDof": 16,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "최대 15 N",
   "gripForce": null,
   "payload": "5 kg",
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": "최대 파지 직경 15 cm",
   "speed": "최소 개폐 시간 1.5 s",
   "drive": [
    "전동 (코어리스 모터)"
   ],
   "sensors": [
    "촉각 유닛 1,140개",
    "8MP 손바닥 카메라"
   ],
   "io": [
    "EtherCAT",
    "Modbus"
   ],
   "control": [],
   "notes": [],
   "specs": "4지형. 능동 13+수동 3자유도, 촉각 유닛 1,140개, 8MP 손바닥 카메라, EtherCAT·Modbus.",
   "source": "https://www.paxini.com/product/dex/gen2",
   "research": [
    "https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_Cross-Hand_Latent_Representation_for_Vision-Language-Action_Models_CVPR_2026_paper.pdf"
   ],
   "photo": {
    "src": "assets/img/hands/dexh13-gen2-notion.webp",
    "w": 960,
    "h": 540,
    "alpha": true,
    "bg": null,
    "creditName": "PaXini",
    "creditUrl": "https://www.paxini.com/product/dex/gen2"
   },
   "other": [
    "촉각 신호 3,420채널",
    "수명 100만 회"
   ],
   "web": [
    {
     "field": "tipForce",
     "url": "https://www.paxini.com/product/dex/gen2"
    },
    {
     "field": "payload",
     "url": "https://www.paxini.com/product/dex/gen2"
    },
    {
     "field": "speed",
     "url": "https://www.paxini.com/product/dex/gen2"
    },
    {
     "field": "stroke",
     "url": "https://www.paxini.com/product/dex/gen2"
    },
    {
     "field": "drive",
     "url": "https://www.paxini.com/product/dex/gen2"
    },
    {
     "field": "other",
     "url": "https://www.paxini.com/product/dex/gen2"
    }
   ]
  },
  {
   "id": "dex3-1",
   "model": "Dex3-1 (촉각형)",
   "maker": "Unitree Robotics (유니트리)",
   "makerGroup": "Unitree Robotics",
   "location": "중국·저장성 항저우",
   "countries": [
    "중국"
   ],
   "kind": "3지형 로봇핸드",
   "fingers": 3,
   "activeDof": 7,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "0.5 kg (최대, 5 cm 구형 강체 파지)",
   "forceOther": null,
   "weight": "약 710 g",
   "weightG": 710,
   "rate": "1 kHz",
   "stroke": null,
   "speed": null,
   "drive": [
    "전동 (소형 브러시리스 힘제어 관절)",
    "직접 구동 모터 6개 + 기어 구동 모터 1개"
   ],
   "sensors": [
    "촉각 센서 배열 9개 (감지점 33개)"
   ],
   "io": [
    "USB 2.0"
   ],
   "control": [],
   "notes": [
    "엄지 3 · 검지 2 · 중지 2축",
    "휴머노이드 조작 학습·접촉 피드백용"
   ],
   "specs": "촉각형 3지 핸드. 능동 7자유도(엄지 3·검지 2·중지 2), 촉각 센서 배열 9개(감지점 33개), 약 710 g. 휴머노이드 조작 학습·접촉 피드백용.",
   "source": "https://www.unitree.com/mobile/Dex3-1/",
   "research": [
    "https://arxiv.org/pdf/2510.08807"
   ],
   "photo": {
    "src": "assets/img/hands/dex3-1-notion.webp",
    "w": 779,
    "h": 960,
    "alpha": true,
    "bg": null,
    "creditName": "Unitree Robotics",
    "creditUrl": "https://www.unitree.com/mobile/Dex3-1/"
   },
   "other": [
    "전원 12–58 V",
    "크기 175×88×77 mm",
    "손끝 반복정밀도 ±2 mm",
    "관절 최대 회전속도 23 rad/s / 11 rad/s (관절 모델별)"
   ],
   "web": [
    {
     "field": "rate",
     "url": "https://www.unitree.com/mobile/Dex3-1/"
    },
    {
     "field": "payload",
     "url": "https://www.unitree.com/mobile/Dex3-1/"
    },
    {
     "field": "io",
     "url": "https://www.unitree.com/mobile/Dex3-1/"
    },
    {
     "field": "drive",
     "url": "https://www.unitree.com/mobile/Dex3-1/"
    },
    {
     "field": "other",
     "url": "https://www.unitree.com/mobile/Dex3-1/"
    }
   ]
  },
  {
   "id": "revo-2-basic",
   "model": "Revo 2 Basic",
   "maker": "BrainCo",
   "makerGroup": "BrainCo",
   "location": "중국·항저우 / 미국·매사추세츠 거점",
   "countries": [
    "중국",
    "미국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 11,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "핀치력 15 N 이상",
   "gripForce": "주먹 쥐기 50 N 이상",
   "payload": "20 kg 이상 (최대)",
   "forceOther": null,
   "weight": "약 383 g",
   "weightG": 383,
   "rate": null,
   "stroke": "최대 개폐 거리 100 mm (엄지–검지)",
   "speed": "굴곡/신전 0.65 s 이하",
   "drive": [],
   "sensors": [],
   "io": [
    "RS485",
    "CAN FD",
    "SDK"
   ],
   "control": [],
   "notes": [],
   "specs": "총 11자유도·능동 6축, 약 383g, RS485·CAN FD, SDK.",
   "source": "https://www.brainco-hz.com/docs/revolimb-hand/en/revo2/parameters.html",
   "research": [],
   "photo": {
    "src": "assets/img/hands/revo-2-basic-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "BrainCo",
    "creditUrl": "https://www.brainco-hz.com/docs/revolimb-hand/en/revo2/parameters.html"
   },
   "other": [
    "전원 12–28 V (Basic)",
    "높이 160 mm",
    "반복 제어 정밀도 0.1°",
    "소음 50 dB 이하"
   ],
   "web": [
    {
     "field": "tipForce",
     "url": "https://www.brainco-hz.com/docs/revolimb-hand/en/revo2/parameters.html"
    },
    {
     "field": "gripForce",
     "url": "https://www.brainco-hz.com/docs/revolimb-hand/en/revo2/parameters.html"
    },
    {
     "field": "payload",
     "url": "https://www.brainco-hz.com/docs/revolimb-hand/en/revo2/parameters.html"
    },
    {
     "field": "stroke",
     "url": "https://www.brainco-hz.com/docs/revolimb-hand/en/revo2/parameters.html"
    },
    {
     "field": "speed",
     "url": "https://www.brainco-hz.com/docs/revolimb-hand/en/revo2/parameters.html"
    },
    {
     "field": "other",
     "url": "https://www.brainco-hz.com/docs/revolimb-hand/en/revo2/parameters.html"
    }
   ]
  },
  {
   "id": "rh56e2",
   "model": "RH56E2",
   "maker": "INSPIRE ROBOTS",
   "makerGroup": "INSPIRE ROBOTS",
   "location": "중국·베이징시 스징산구",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "6",
   "joints": 12,
   "actuators": null,
   "tipForce": "엄지 30 N 이상 / 기타 28 N 이상",
   "gripForce": null,
   "payload": "15 kg 상당 (전체 하중 능력)",
   "forceOther": null,
   "weight": "약 770~790 g",
   "weightG": 790,
   "rate": null,
   "stroke": null,
   "speed": "손 닫힘 0.8 s / 네 손가락 굴곡 200°/s 이상 / 엄지 굴곡·회전 130°/s 이상",
   "drive": [],
   "sensors": [
    "촉각 센서 구성 선택 가능"
   ],
   "io": [
    "통신 인터페이스 선택 가능"
   ],
   "control": [],
   "notes": [
    "고출력 제품군"
   ],
   "specs": "5핑거 다관절 핸드. 6 DoF, 12개 관절. 무게 약 770~790g. 엄지 끝단 힘 30N 이상, 나머지 손가락 28N 이상으로 안내되는 고출력 제품군. 촉각센서 구성과 통신 인터페이스 선택 가능",
   "source": "https://en.inspire-robots.com/product/rh56e2/",
   "research": [
    "https://openreview.net/pdf?id=UvQOcw2oCD"
   ],
   "photo": {
    "src": "assets/img/hands/rh56e2-notion.webp",
    "w": 700,
    "h": 700,
    "alpha": false,
    "bg": null,
    "creditName": "INSPIRE ROBOTS",
    "creditUrl": "https://en.inspire-robots.com/product/rh56e2/"
   },
   "other": [
    "전원 24 V ±10%",
    "반복정밀도 ±0.20 mm",
    "힘 분해능 0.05 N",
    "피크 전류 4 A @24 V"
   ],
   "web": [
    {
     "field": "payload",
     "url": "https://en.inspire-robots.com/product/rh56e2/"
    },
    {
     "field": "speed",
     "url": "https://en.inspire-robots.com/product/rh56e2/"
    },
    {
     "field": "other",
     "url": "https://en.inspire-robots.com/product/rh56e2/"
    }
   ]
  },
  {
   "id": "sng-v-6-1-5-v-hp-25",
   "model": "SNG-V 6 1.5 V-HP-25",
   "maker": "Schmalz",
   "makerGroup": "Schmalz",
   "location": "독일·글라텐",
   "countries": [
    "독일"
   ],
   "kind": "비교용 그리퍼",
   "fingers": null,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "약 1.14 kg",
   "weightG": 1140,
   "rate": null,
   "stroke": "침투 스트로크 0–25 mm 가변",
   "speed": null,
   "drive": [
    "공압 교차 바늘식",
    "작동 압력 3–7 bar"
   ],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "바늘 6개 · 직경 1.5 mm",
    "섬유·플리스·복합재 관통 파지"
   ],
   "specs": "공압 교차 바늘식 그리퍼. 바늘 6개·직경 1.5 mm, 침투 스트로크 0–25 mm 가변, 작동 압력 3–7 bar, 본체 약 1.14 kg. 섬유·플리스·복합재를 관통해 파지.",
   "source": "https://www.schmalz.com/en-ch/products/automation-743270/other-gripping-technologies-746237/needle-grippers-306131/needle-grippers-sng-v-306144/10.01.29.00568",
   "research": [],
   "photo": {
    "src": "assets/img/hands/sng-v-6-1-5-v-hp-25-notion.webp",
    "w": 600,
    "h": 400,
    "alpha": false,
    "bg": null,
    "creditName": "Schmalz",
    "creditUrl": "https://www.schmalz.com/en-ch/products/automation-743270/other-gripping-technologies-746237/needle-grippers-306131/needle-grippers-sng-v-306144/10.01.29.00568"
   },
   "other": [
    "바늘 6개 (직경 1.5 mm)",
    "작동 온도 5–60 °C",
    "공압 연결 M5 / G1/8\""
   ],
   "web": [
    {
     "field": "other",
     "url": "https://www.schmalz.com/en-ch/products/automation-743270/other-gripping-technologies-746237/needle-grippers-306131/needle-grippers-sng-v-306144/10.01.29.00568"
    }
   ]
  },
  {
   "id": "rh8d",
   "model": "RH8D",
   "maker": "Seed Robotics",
   "makerGroup": "Seed Robotics",
   "location": "포르투갈·리스본",
   "countries": [
    "포르투갈"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "19 (손목 포함)",
   "joints": null,
   "actuators": 8,
   "tipForce": null,
   "gripForce": null,
   "payload": "2.5 kg (수직 인양) / 1 kg (3D 공간)",
   "forceOther": null,
   "weight": "약 620 g",
   "weightG": 620,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "스마트 액추에이터 (본체 내장)",
    "저구동 (Under-actuated)"
   ],
   "sensors": [
    "위치·속도·전류 피드백",
    "촉각 (옵션)"
   ],
   "io": [
    "ROS",
    "Python"
   ],
   "control": [],
   "notes": [],
   "specs": "손목 포함 19자유도·구동기 8개, 약 620g. ROS·Python, 위치·속도·전류 피드백, 촉각 옵션.",
   "source": "https://www.seedrobotics.com/rh8d-adult-robot-hand",
   "research": [
    "https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2026.1735467/pdf"
   ],
   "photo": {
    "src": "assets/img/hands/rh8d-notion.webp",
    "w": 594,
    "h": 618,
    "alpha": true,
    "bg": null,
    "creditName": "Seed Robotics",
    "creditUrl": "https://www.seedrobotics.com/rh8d-adult-robot-hand"
   },
   "other": [
    "전원 9–24 V",
    "UART over RS485 / TTL (Dynamixel 프로토콜 1.0·2.0 호환)",
    "USB (설정·유지보수)",
    "Bluetooth (옵션)",
    "손바닥 ToF 거리 센서",
    "FTS 촉각 압력 센서 옵션 (분해능 1 mN)",
    "URDF 제공",
    "32bit Arm Cortex M4"
   ],
   "web": [
    {
     "field": "payload",
     "url": "https://www.seedrobotics.com/rh8d-adult-robot-hand"
    },
    {
     "field": "drive",
     "url": "https://www.seedrobotics.com/rh8d-adult-robot-hand"
    },
    {
     "field": "other",
     "url": "https://www.seedrobotics.com/rh8d-adult-robot-hand"
    }
   ]
  },
  {
   "id": "pxdex-iii",
   "model": "PXDex III",
   "maker": "PaXini",
   "makerGroup": "PaXini",
   "location": "중국·선전시 바오안구",
   "countries": [
    "중국"
   ],
   "kind": "비교용 그리퍼",
   "fingers": 3,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "4",
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "5 kg (최대 파지 하중)",
   "forceOther": null,
   "weight": "약 836 g",
   "weightG": 836,
   "rate": null,
   "stroke": "최대 파지 직경 55 mm · 최소 핀치 직경 2 mm",
   "speed": null,
   "drive": [
    "전동 (코어리스 모터)"
   ],
   "sensors": [
    "Hall-array 촉각 센서",
    "1080p RGB 카메라 2개"
   ],
   "io": [
    "EtherCAT",
    "Modbus",
    "USB"
   ],
   "control": [],
   "notes": [
    "산업용 3핑거 말단장치"
   ],
   "specs": "산업용 3핑거 실행 말단장치. 4 DoF, 무게 약 836g. Hall-array 촉각센서, 1080p RGB 카메라 2개를 지원하는 구성. 최대 파지 하중 5kg, 최대 파지 직경 55mm, 최소 핀치 직경 2mm. EtherCAT·Modbus·USB 지원.",
   "source": "https://paxini.com/cn/ax/pxdex3",
   "research": [],
   "photo": {
    "src": "assets/img/hands/pxdex-iii-notion.webp",
    "w": 960,
    "h": 726,
    "alpha": true,
    "bg": null,
    "creditName": "PaXini",
    "creditUrl": "https://paxini.com/cn/ax/pxdex3"
   },
   "other": [
    "전원 19–48 V DC",
    "관절 엔코더 (자체 개발 내자기 고정밀, 정밀도 ±0.15°)",
    "촉각 힘 정밀도 0.1 N",
    "카메라 30 fps, 시야각 D170°",
    "무부하 개폐 수명 100만 회"
   ],
   "web": [
    {
     "field": "drive",
     "url": "https://paxini.com/cn/ax/pxdex3"
    },
    {
     "field": "other",
     "url": "https://paxini.com/cn/ax/pxdex3"
    }
   ]
  },
  {
   "id": "qb-softhand-industry",
   "model": "qb SoftHand Industry",
   "maker": "qbrobotics",
   "makerGroup": "qbrobotics",
   "location": "이탈리아·카시나(피사)",
   "countries": [
    "이탈리아"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "19 (연동 구조)",
   "joints": null,
   "actuators": 1,
   "tipForce": null,
   "gripForce": null,
   "payload": "2 kg (파워 그립) / 0.6 kg (핀치 그립)",
   "forceOther": null,
   "weight": "990 g",
   "weightG": 990,
   "rate": null,
   "stroke": null,
   "speed": "완전 닫힘 1.2 s",
   "drive": [
    "모터 1개 연동 구동"
   ],
   "sensors": [],
   "io": [
    "EtherCAT",
    "UDP",
    "ROS/ROS2"
   ],
   "control": [],
   "notes": [
    "IP65"
   ],
   "specs": "19자유도 구조를 모터 1개로 연동 구동. 990g, IP65, EtherCAT·UDP, ROS/ROS2.",
   "source": "https://qbrobotics.com/product/qb-softhand-industry/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/qb-softhand-industry-notion.webp",
    "w": 960,
    "h": 640,
    "alpha": false,
    "bg": null,
    "creditName": "qbrobotics",
    "creditUrl": "https://qbrobotics.com/product/qb-softhand-industry/"
   },
   "other": [
    "IP65",
    "텐던 구동",
    "마운팅 ISO 9409-1-50-4-M6",
    "손목 장착 위치 조절 가능",
    "교체형 글러브"
   ],
   "web": [
    {
     "field": "payload",
     "url": "https://qbrobotics.com/product/qb-softhand-industry/"
    },
    {
     "field": "speed",
     "url": "https://qbrobotics.com/product/qb-softhand-industry/"
    },
    {
     "field": "other",
     "url": "https://qbrobotics.com/product/qb-softhand-industry/"
    }
   ]
  },
  {
   "id": "roh-a002",
   "model": "ROH-A002",
   "maker": "OYMotion Technologies",
   "makerGroup": "OYMotion",
   "location": "중국·상하이",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 11,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "30 kg (네 손가락 굽힘 최대 인양) / 단일 손가락 정적 하중 10 kg (굽힘)·8 kg (손끝, 펴짐)",
   "forceOther": "손끝 힘 엄지 ≥1.0 kgf / 기타 손끝 ≥0.5 kgf (펴짐), ≥1.0 kgf (굽힘)",
   "weight": "545±5 g (일부 문서 580±5 g)",
   "weightG": 5,
   "rate": null,
   "stroke": null,
   "speed": "최대 개폐 0.7 s",
   "drive": [],
   "sensors": [],
   "io": [
    "UART",
    "RS485",
    "CAN",
    "Modbus-RTU",
    "SDK",
    "ROS/ROS2",
    "URDF"
   ],
   "control": [
    "five-finger control"
   ],
   "notes": [
    "반복 위치 정밀도 ±1 mm",
    "아연합금·알루미늄 합금 구조",
    "손가락·엄지 힘 및 정적 하중 사양 제공"
   ],
   "specs": "인간형 ROHand. 11개 운동 관절과 6 active DOF, ±1mm 반복 위치 정밀도. 제조사 페이지에 five-finger control 방식, 아연합금·알루미늄 합금 구조, 545±5g 또는 일부 문서 버전 580±5g으로 표기 차이가 존재. 최대 개폐 시간 0.7s, 개별 손가락 및 엄지 힘·정적 하중 사양을 제공. UART/RS485/CAN, Modbus-RTU/CAN, SDK·ROS·ROS2·URDF 개발 지원",
   "source": "https://www.oymotion.com/product61/189",
   "research": [],
   "photo": {
    "src": "assets/img/hands/roh-a002-notion.webp",
    "w": 585,
    "h": 362,
    "alpha": false,
    "bg": null,
    "creditName": "OYMotion",
    "creditUrl": "https://www.oymotion.com/product61/189"
   },
   "other": [
    "엄지 스윙 범위 횡방향 0–31°, 반대방향 0–50°",
    "엄지 회전 전행정 0.7 s",
    "크기: 중지 끝~손바닥 하단 184 mm, 손바닥 폭 83 mm, 손목 직경 49 mm",
    "터치스크린 대응 손가락 패드",
    "내장 PID 모터 제어"
   ],
   "web": [
    {
     "field": "payload",
     "url": "https://www.oymotion.com/product61/189"
    },
    {
     "field": "other",
     "url": "https://www.oymotion.com/product61/189"
    },
    {
     "field": "forceOther",
     "url": "https://www.oymotion.com/product61/189"
    }
   ]
  },
  {
   "id": "rh56h1",
   "model": "RH56H1",
   "maker": "INSPIRE ROBOTS",
   "makerGroup": "INSPIRE ROBOTS",
   "location": "중국·베이징시 스징산구",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 11,
   "actuators": null,
   "tipForce": "엄지 15 N 이상 / 기타 10 N 이상",
   "gripForce": null,
   "payload": "단일 손가락 정적 수동 하중 8 kg",
   "forceOther": null,
   "weight": "약 470 g",
   "weightG": 470,
   "rate": "1 kHz",
   "stroke": null,
   "speed": "손 닫힘 ≤0.8 s · 네 손가락 굴곡 >110°/s · 엄지 굴곡 >65°/s · 엄지 측방 회전 >157°/s",
   "drive": [],
   "sensors": [
    "촉각 센서 (옵션)"
   ],
   "io": [
    "통신 인터페이스 (옵션)"
   ],
   "control": [],
   "notes": [],
   "specs": "5핑거 다관절 로봇핸드. 6 active DoF, 11개 관절. 무게 약 470g. 엄지 끝단 힘 15N 이상, 나머지 손가락 10N 이상으로 안내됨. 촉각센서와 통신 인터페이스 구성은 옵션으로 제공됨.",
   "source": "https://en.inspire-robots.com/product/rh56h1/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/rh56h1-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "INSPIRE ROBOTS",
    "creditUrl": "https://en.inspire-robots.com/product/rh56h1/"
   },
   "other": [
    "전원 24–60 V",
    "통신 RS485+CANFD (표준) / EtherCAT+CAN-FD+RS485 (촉각 모델)",
    "촉각 센서 6개, 범위 30 N, 정확도 5%FS (촉각 모델)",
    "반복정밀도 ±0.2 mm",
    "힘 분해능 0.1 N",
    "크기 75×159 mm",
    "엄지 측방 회전 범위 70–170°",
    "피크 전류 5 A @24V"
   ],
   "web": [
    {
     "field": "rate",
     "url": "https://en.inspire-robots.com/product/rh56h1/"
    },
    {
     "field": "payload",
     "url": "https://en.inspire-robots.com/product/rh56h1/"
    },
    {
     "field": "speed",
     "url": "https://en.inspire-robots.com/product/rh56h1/"
    },
    {
     "field": "other",
     "url": "https://en.inspire-robots.com/product/rh56h1/"
    }
   ]
  },
  {
   "id": "2f-85",
   "model": "2F-85",
   "maker": "Robotiq",
   "makerGroup": "Robotiq",
   "location": "캐나다·퀘벡주 레비",
   "countries": [
    "캐나다"
   ],
   "kind": "비교용 그리퍼",
   "fingers": 2,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "20–235 N",
   "payload": "5 kg",
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": "스트로크 85 mm",
   "speed": "닫힘 속도 20–150 mm/s",
   "drive": [
    "전동 적응형"
   ],
   "sensors": [
    "물체 감지 (파지 확인)"
   ],
   "io": [
    "Modbus RTU (RS-485)"
   ],
   "control": [],
   "notes": [
    "평행 집기·감싸기를 한 기구로 수행",
    "협동로봇용 · 다품종 이송·조립 비교 기준"
   ],
   "specs": "범용 협동로봇용 전동 적응형 2지. 평행 집기와 감싸기를 한 기구로 수행. 스트로크 85 mm, 파지력 20–235 N, 가반 5 kg. 다품종 이송·조립 비교 기준.",
   "source": "https://robotiq.com/products/adaptive-grippers",
   "research": [
    "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02933.pdf"
   ],
   "photo": {
    "src": "assets/img/hands/2f-85.png",
    "w": 300,
    "h": 300,
    "alpha": false,
    "bg": "#FFFFFF",
    "creditName": "Robotiq",
    "creditUrl": "https://robotiq.com/products/adaptive-grippers"
   },
   "other": [
    "IP40"
   ],
   "web": [
    {
     "field": "speed",
     "url": "https://blog.robotiq.com/hubfs/Product-sheets/Adaptive%20Grippers/Product-sheet-Adaptive-Grippers-EN.pdf"
    },
    {
     "field": "io",
     "url": "https://blog.robotiq.com/hubfs/Product-sheets/Adaptive%20Grippers/Product-sheet-Adaptive-Grippers-EN.pdf"
    },
    {
     "field": "sensors",
     "url": "https://robotiq.com/products/adaptive-grippers"
    },
    {
     "field": "other",
     "url": "https://blog.robotiq.com/hubfs/Product-sheets/Adaptive%20Grippers/Product-sheet-Adaptive-Grippers-EN.pdf"
    }
   ]
  },
  {
   "id": "aero-hand-open",
   "model": "Aero Hand Open",
   "maker": "Chestnut Robotics (구 TetherIA)",
   "makerGroup": "Chestnut Robotics",
   "location": "미국·캘리포니아주 산타클라라",
   "countries": [
    "미국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 7,
   "activeDofNote": null,
   "passiveDof": 9,
   "totalDof": 16,
   "dofStated": "7",
   "joints": 16,
   "actuators": 7,
   "tipForce": "손끝 약 12 N",
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "약 389 g",
   "weightG": 389,
   "rate": null,
   "stroke": null,
   "speed": "완전 개폐 약 1.2 Hz",
   "drive": [
    "텐던 기반 저구동"
   ],
   "sensors": [],
   "io": [
    "Python",
    "ROS2"
   ],
   "control": [],
   "notes": [
    "3D 프린트 오픈 하드웨어"
   ],
   "specs": "7자유도, 약 389g, 텐던 기반 저구동·3D 프린트 오픈 하드웨어, Python·ROS2.",
   "source": "https://chestnut.bot/aero-hand-open-lite.html",
   "research": [],
   "photo": {
    "src": "assets/img/hands/aero-hand-open-notion.webp",
    "w": 960,
    "h": 660,
    "alpha": false,
    "bg": null,
    "creditName": "Chestnut Robotics",
    "creditUrl": "https://chestnut.bot/aero-hand-open-lite.html"
   },
   "other": [
    "전원 6 V DC (서보 레일)",
    "USB 2.0 (온보드 ESP32-S3)",
    "크기 198×95×53.5 mm"
   ],
   "web": [
    {
     "field": "activeDof",
     "url": "https://docs.tetheria.ai/docs/mechanical_overview/"
    },
    {
     "field": "passiveDof",
     "url": "https://docs.tetheria.ai/docs/mechanical_overview/"
    },
    {
     "field": "joints",
     "url": "https://docs.tetheria.ai/docs/mechanical_overview/"
    },
    {
     "field": "actuators",
     "url": "https://docs.tetheria.ai/docs/mechanical_overview/"
    },
    {
     "field": "tipForce",
     "url": "https://docs.tetheria.ai/docs/mechanical_overview/"
    },
    {
     "field": "speed",
     "url": "https://docs.tetheria.ai/docs/mechanical_overview/"
    },
    {
     "field": "other",
     "url": "https://docs.tetheria.ai/docs/mechanical_overview/"
    }
   ]
  },
  {
   "id": "ctmg3f60",
   "model": "CTMG3F60",
   "maker": "ChangingTek",
   "makerGroup": "ChangingTek",
   "location": "중국·장쑤성 타이창시",
   "countries": [
    "중국"
   ],
   "kind": "비교용 그리퍼",
   "fingers": 3,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "최대 50 N",
   "payload": "5 kg (권장 최대, 감싸 쥐기)",
   "forceOther": null,
   "weight": "약 1.1 kg",
   "weightG": 1100,
   "rate": null,
   "stroke": "최대 개방 각도 100°",
   "speed": "최대 파지 속도 100 mm/s",
   "drive": [
    "3핑거 센터링"
   ],
   "sensors": [
    "위치·크기·속도·힘 피드백"
   ],
   "io": [
    "Modbus RTU",
    "I/O"
   ],
   "control": [
    "위치",
    "속도",
    "힘 제어"
   ],
   "notes": [
    "반복 정밀도 ±0.03 mm",
    "자동화 설비 연결용 산업 그리퍼"
   ],
   "specs": "산업용 3핑거 센터링 그리퍼. 최대 그립력 50N, 반복 정밀도 ±0.03mm, 무게 약 1.1kg. 위치·속도·힘 제어를 지원하며 Modbus RTU 및 I/O를 통해 자동화 설비에 연결 가능.",
   "source": "https://en.changingtek.com/fuhe/176",
   "research": [],
   "photo": {
    "src": "assets/img/hands/ctmg3f60-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "ChangingTek",
    "creditUrl": "https://en.changingtek.com/fuhe/176"
   },
   "other": [
    "전원 24 V",
    "최대 전류 4.5 A",
    "반복정밀도 ±0.03 mm",
    "구동: MaxiServo",
    "통신 확장 옵션: CAN, TCP/IP, EtherCAT, Profinet 등",
    "사용 환경 0–40℃, 85%RH 이하"
   ],
   "web": [
    {
     "field": "payload",
     "url": "https://en.changingtek.com/fuhe/176"
    },
    {
     "field": "stroke",
     "url": "https://en.changingtek.com/fuhe/176"
    },
    {
     "field": "speed",
     "url": "https://en.changingtek.com/fuhe/176"
    },
    {
     "field": "sensors",
     "url": "https://en.changingtek.com/fuhe/176"
    },
    {
     "field": "other",
     "url": "https://en.changingtek.com/fuhe/176"
    }
   ]
  },
  {
   "id": "dh116-l1",
   "model": "DH116-L1",
   "maker": "Leadshine",
   "makerGroup": "Leadshine",
   "location": "중국 광둥성 선전시",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 11,
   "dofStated": "11",
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "측면 파지력 50 N",
   "payload": "30 kg (손 전체 최대 파지 하중)",
   "forceOther": null,
   "weight": "545 g",
   "weightG": 545,
   "rate": null,
   "stroke": null,
   "speed": "그립 사이클 약 0.6 s",
   "drive": [
    "전동 (브러시리스 코어리스 서보모터)",
    "웜기어 구동"
   ],
   "sensors": [
    "촉각 센서"
   ],
   "io": [
    "CAN FD",
    "RS485",
    "EtherCAT"
   ],
   "control": [
    "힘·위치 혼합 제어"
   ],
   "notes": [
    "최대 100만 회 작동 수명"
   ],
   "specs": "11자유도(11-DOF) 5지 구조로 사람 손처럼 다양한 물체를 잡고 조작. 무게 545g으로 가벼우면서, 손 전체 기준 최대 30kg 파지 하중. 촉각 센서와 힘·위치 혼합 제어로 섬세하고 적응적인 그립 지원. 그립 사이클 약 0.6초, 최대 100만 회 작동 수명. CAN FD, RS485, EtherCAT 통신 지원",
   "source": "https://store.leadshine.com/blogs/news/leadshine-dh116-dexterous-hand-high-performance-grip-for-robotic-manipulation",
   "research": [],
   "photo": {
    "src": "assets/img/hands/dh116-l1-notion.webp",
    "w": 533,
    "h": 631,
    "alpha": false,
    "bg": null,
    "creditName": "Leadshine",
    "creditUrl": "https://store.leadshine.com/blogs/news/leadshine-dh116-dexterous-hand-high-performance-grip-for-robotic-manipulation"
   },
   "other": [
    "전원 12–48 V @2.5 A",
    "반복정밀도 ±0.2 mm",
    "단일 손가락 하중 5 kg",
    "관절 범위: 엄지 측방 0–60°, 엄지 굴곡 0–30°, 네 손가락 굴곡 0–80°",
    "수명 100만 회",
    "사용 환경 -10–40℃/85%RH",
    "FOC 전류 루프"
   ],
   "web": [
    {
     "field": "activeDof",
     "url": "https://www.leadshine.com/robot-detail/DH116-L1.html"
    },
    {
     "field": "totalDof",
     "url": "https://www.leadshine.com/robot-detail/DH116-L1.html"
    },
    {
     "field": "gripForce",
     "url": "https://www.leadshine.com/robot-detail/DH116-L1.html"
    },
    {
     "field": "drive",
     "url": "https://www.leadshine.com/robot-detail/DH116-L1.html"
    },
    {
     "field": "other",
     "url": "https://www.leadshine.com/robot-detail/DH116-L1.html"
    }
   ]
  },
  {
   "id": "wuji-hand-2",
   "model": "Wuji Hand 2",
   "maker": "Wuji Technology (우지테크놀로지)",
   "makerGroup": "Wuji Technology",
   "location": "중국·광둥성 선전",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 20,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "손끝 최대 ≥12 N",
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": "1 kHz",
   "stroke": null,
   "speed": "개폐 ≥4회/s",
   "drive": [
    "직접 구동 회전형 (백드라이브 가능)"
   ],
   "sensors": [],
   "io": [
    "ROS2",
    "MuJoCo",
    "Isaac Sim"
   ],
   "control": [
    "MIT 힘·위치 제어",
    "역구동"
   ],
   "notes": [],
   "specs": "능동 20자유도, 제어 1kHz, MIT 힘·위치 제어 및 역구동, ROS2·MuJoCo·Isaac Sim 지원.",
   "source": "https://www.wuji.tech/en/hand2",
   "research": [
    "https://arxiv.org/pdf/2606.16272"
   ],
   "photo": {
    "src": "assets/img/hands/wuji-hand-2-notion.webp",
    "w": 602,
    "h": 960,
    "alpha": true,
    "bg": null,
    "creditName": "Wuji Technology",
    "creditUrl": "https://www.wuji.tech/en/hand2"
   },
   "other": [
    "전원 12 V DC",
    "크기 약 180×80×40 mm",
    "통신 EtherNet (100BASE-T)",
    "제어 MIT 힘-위치 하이브리드, 1000 Hz × 20축",
    "관절 백래시 < 1°",
    "최소 파지 직경 0 mm",
    "Wuji SDK & CLI, Wuji Glove 원격조작"
   ],
   "web": [
    {
     "field": "tipForce",
     "url": "https://www.wuji.tech/en/hand2"
    },
    {
     "field": "speed",
     "url": "https://www.wuji.tech/en/hand2"
    },
    {
     "field": "drive",
     "url": "https://www.wuji.tech/en/hand2"
    },
    {
     "field": "other",
     "url": "https://www.wuji.tech/en/hand2"
    }
   ]
  },
  {
   "id": "ehand-6",
   "model": "eHand-6",
   "maker": "HITBOT",
   "makerGroup": "HITBOT",
   "location": "중국 선전",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "6",
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "3–10 N (엄지/네 손가락 파지력, 동적 힘 제어)",
   "payload": "5 kg (인양 하중)",
   "forceOther": null,
   "weight": "800 g 미만",
   "weightG": 800,
   "rate": null,
   "stroke": null,
   "speed": "복잡 동작 1.1 s",
   "drive": [
    "코어리스 모터 + 유성 감속기 + 리드스크류 + 링크"
   ],
   "sensors": [
    "5채널 촉각 센서 (옵션)"
   ],
   "io": [
    "CAN FD"
   ],
   "control": [
    "3–10 N 동적 힘 제어"
   ],
   "notes": [
    "10 N은 손가락 팁 힘이 아닌 엄지/네 손가락 파지력"
   ],
   "specs": "6 DoF, 800 g 미만, CAN-FD, 복잡 동작 1.1초 표기. 5채널 촉각 센서는 옵션이며 3–10 N 동적 힘 제어를 표기. 여기의 10 N은 손가락 하나의 팁 힘이 아니라 제조사의 엄지/네 손가락 파지력 수치",
   "source": "https://www.hitbot.cc/dexterous-hand/e-hand-6.html",
   "research": [],
   "photo": {
    "src": "assets/img/hands/ehand-6-notion.webp",
    "w": 831,
    "h": 483,
    "alpha": false,
    "bg": null,
    "creditName": "HITBOT",
    "creditUrl": "https://www.hitbot.cc/dexterous-hand/e-hand-6.html"
   },
   "other": [
    "전원 24 VDC ±10%",
    "크기 220×88×52 mm",
    "굴곡 각도: 네 손가락 60°+110°+170°, 엄지 32°+44°+44°, 엄지 측방 70°"
   ],
   "web": [
    {
     "field": "payload",
     "url": "https://www.hitbot.cc/dexterous-hand/e-hand-6.html"
    },
    {
     "field": "drive",
     "url": "https://www.hitbot.cc/dexterous-hand/e-hand-6.html"
    },
    {
     "field": "other",
     "url": "https://www.hitbot.cc/dexterous-hand/e-hand-6.html"
    }
   ]
  },
  {
   "id": "roh-ap003",
   "model": "ROH-AP003",
   "maker": "OYMotion",
   "makerGroup": "OYMotion",
   "location": "중국·상하이",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "30 kg (네 손가락 굽힘, 수동 하중) / 10 kg (단일 손가락 펴짐)",
   "forceOther": null,
   "weight": "626±5 g",
   "weightG": 5,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [],
   "sensors": [
    "자기식 3D 촉각 센서"
   ],
   "io": [
    "RS485"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 6자유도, RS485, 자기식 3D 촉각 센서.",
   "source": "https://oymotion.com/en/product62",
   "research": [],
   "photo": {
    "src": "assets/img/hands/roh-ap003-notion.webp",
    "w": 340,
    "h": 283,
    "alpha": false,
    "bg": null,
    "creditName": "OYMotion",
    "creditUrl": "https://oymotion.com/en/product62"
   },
   "other": [
    "다차원 힘 출력 ≥0.5 kgf, ≥1.0 kgf, ≥1.0 kgf",
    "촉각: 샘플링 ≥50 Hz, 수직력 범위 15 N (최대 30 N), 감도 0.1 N, 전단력 ±5 N, 방향 분해능 1°",
    "원위·중간·근위 마디 분산 도트 매트릭스 촉각",
    "완전 회전 엄지"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://oymotion.com/en/product62/211"
    },
    {
     "field": "payload",
     "url": "https://oymotion.com/en/product62/211"
    },
    {
     "field": "other",
     "url": "https://oymotion.com/en/product62/211"
    }
   ]
  },
  {
   "id": "rh-p12-rn",
   "model": "RH-P12-RN",
   "maker": "ROBOTIS",
   "makerGroup": "로보티즈 (ROBOTIS)",
   "location": "대한민국·서울특별시 강서구",
   "countries": [
    "대한민국"
   ],
   "kind": "비교용 그리퍼",
   "fingers": 2,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "1",
   "joints": null,
   "actuators": 1,
   "tipForce": null,
   "gripForce": "최대 170 N",
   "payload": "5 kg (권장)",
   "forceOther": null,
   "weight": "약 500 g",
   "weightG": 500,
   "rate": null,
   "stroke": "스트로크 0–106 mm",
   "speed": "최대 닫힘 속도 75 mm/s",
   "drive": [
    "10W급 DC 모터",
    "Passive Joint 적응 구조"
   ],
   "sensors": [
    "비접촉 절대 엔코더 (12bit, 360°)",
    "위치·속도·전류·온도·입력전압 피드백"
   ],
   "io": [
    "DYNAMIXEL 2.0 프로토콜"
   ],
   "control": [
    "전류 기반 힘 제어",
    "위치 제어"
   ],
   "notes": [
    "하나의 구동 입력으로 물체 모양에 적응"
   ],
   "specs": "2핑거 적응형 로봇핸드. 1 DoF와 Passive Joint 구조를 적용해 하나의 구동 입력으로 물체 모양에 맞춰 손가락이 적응적으로 움직임. 10W급 DC 모터, 최대 파지력 170N, 권장 페이로드 5kg, 무게 약 500g. 전류 기반 힘 제어와 위치 제어를 지원하고 DYNAMIXEL 2.0 프로토콜 사용.",
   "source": "https://www.robotis.com/shop/item.php?it_id=905-0022-000",
   "research": [
    "https://www.mdpi.com/2076-3417/15/22/12077/pdf"
   ],
   "photo": {
    "src": "assets/img/hands/rh-p12-rn-notion.webp",
    "w": 500,
    "h": 500,
    "alpha": false,
    "bg": null,
    "creditName": "로보티즈 (ROBOTIS)",
    "creditUrl": "https://www.robotis.com/shop/item.php?it_id=905-0022-000"
   },
   "other": [
    "전원 24 V",
    "코어리스 모터, 기어비 1181:1",
    "RS485 멀티드롭 버스, 9,600 bps–10.5 Mbps",
    "MCU STM32F405 (Cortex-M4)",
    "사용 온도 -5–55°C",
    "풀 메탈 기어·메탈 바디"
   ],
   "web": [
    {
     "field": "stroke",
     "url": "https://www.robotis.com/shop/item.php?it_id=905-0022-000"
    },
    {
     "field": "speed",
     "url": "https://emanual.robotis.com/docs/en/platform/rh_p12_rn/"
    },
    {
     "field": "sensors",
     "url": "https://emanual.robotis.com/docs/en/platform/rh_p12_rn/"
    },
    {
     "field": "other",
     "url": "https://www.robotis.com/shop/item.php?it_id=905-0022-000"
    }
   ]
  },
  {
   "id": "mg10",
   "model": "MG10",
   "maker": "OnRobot",
   "makerGroup": "OnRobot",
   "location": "덴마크·오덴세",
   "countries": [
    "덴마크"
   ],
   "kind": "비교용 그리퍼",
   "fingers": 4,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "10 kg (평행 인양 최대)",
   "forceOther": "인장력 300 N",
   "weight": "0.8 kg",
   "weightG": 800,
   "rate": null,
   "stroke": null,
   "speed": "파지 시간 300 ms (일반, 브레이크 작동 포함)",
   "drive": [
    "전기 제어 자기식"
   ],
   "sensors": [
    "근접 센서 (하부, 2 mm 이내 감지)",
    "파지 감지 (Grip detection)"
   ],
   "io": [],
   "control": [],
   "notes": [
    "자력 10단계 조절",
    "정전 시 자기 유지",
    "IP67",
    "인장력 기준: 65.4 mm각 이상 공작물·4접점",
    "철계 판금·천공 금속용"
   ],
   "specs": "전기 제어 자기 그리퍼. 자력 10단계 조절, 정전 시 자기 유지, IP67. 패드 없이 평행 인양 시 최대 10 kg, 인장력 300 N(65.4 mm각 이상 공작물에 4접점 접촉 기준). 철계 판금·천공 금속용.",
   "source": "https://onrobot.com/en/products/mg10-magnetic-gripper",
   "research": [],
   "photo": {
    "src": "assets/img/hands/mg10-notion.webp",
    "w": 254,
    "h": 369,
    "alpha": true,
    "bg": null,
    "creditName": "OnRobot",
    "creditUrl": "https://onrobot.com/en/products/mg10-magnetic-gripper"
   },
   "other": [
    "IP67",
    "전원 20–25 V (일반 24 V)",
    "소비 전류 600–2000 mA",
    "크기 Ø71×80 mm",
    "모터: 내장 전동 BLDC",
    "자력 10단계 조절",
    "정전 시 파지 유지"
   ],
   "web": [
    {
     "field": "fingers",
     "url": "https://onrobot.com/storage/datasheets/mg10/datasheet_mg10_v1.5_en.pdf"
    },
    {
     "field": "weight",
     "url": "https://onrobot.com/en/products/mg10-magnetic-gripper"
    },
    {
     "field": "speed",
     "url": "https://onrobot.com/storage/datasheets/mg10/datasheet_mg10_v1.5_en.pdf"
    },
    {
     "field": "sensors",
     "url": "https://onrobot.com/storage/datasheets/mg10/datasheet_mg10_v1.5_en.pdf"
    },
    {
     "field": "other",
     "url": "https://onrobot.com/storage/datasheets/mg10/datasheet_mg10_v1.5_en.pdf"
    }
   ]
  },
  {
   "id": "mht2-32dz",
   "model": "MHT2-32DZ",
   "maker": "SMC",
   "makerGroup": "SMC",
   "location": "일본·도쿄도 주오구",
   "countries": [
    "일본"
   ],
   "kind": "비교용 그리퍼",
   "fingers": 2,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": "유효 파지 모멘트 12.4 N·m (0.5 MPa)",
   "weight": "790 g",
   "weightG": 790,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "공압 토글 링크",
    "앵글형 2지 (복동)"
   ],
   "sensors": [
    "오토스위치 장착 가능 (옵션, 4면)"
   ],
   "io": [],
   "control": [],
   "notes": [
    "닫힘 끝부분에서 큰 유지력",
    "압력 저하 시 토글로 유지"
   ],
   "specs": "공압 토글 링크식 앵글형 2지(복동). 닫힘 끝부분에서 큰 유지력을 얻고 압력 저하 시에도 토글로 유지. 유효 파지 모멘트 12.4 N·m(0.5 MPa).",
   "source": "https://www.smcworld.com/webcatalog/s3s/en-jp/detail/?partNumber=MHT2-32DZ",
   "research": [],
   "photo": {
    "src": "assets/img/hands/mht2-32dz-notion.webp",
    "w": 300,
    "h": 300,
    "alpha": false,
    "bg": null,
    "creditName": "SMC",
    "creditUrl": "https://www.smcworld.com/webcatalog/s3s/en-jp/detail/?partNumber=MHT2-32DZ"
   },
   "other": [
    "보어 32 mm",
    "복동, 외경 파지",
    "사용 유체 공기, 사용 압력 0.1–0.6 MPa",
    "사용 온도 5–60°C",
    "급유 불필요",
    "압력 저하 시에도 토글 기구로 파지 유지"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://content2.smcetech.com/pdf/MHT2-Z_EU.pdf"
    },
    {
     "field": "sensors",
     "url": "https://www.smcworld.com/webcatalog/s3s/en-jp/detail/?partNumber=MHT2-32DZ"
    },
    {
     "field": "other",
     "url": "https://content2.smcetech.com/pdf/MHT2-Z_EU.pdf"
    }
   ]
  },
  {
   "id": "qb-softhand2-research",
   "model": "qb SoftHand2 Research",
   "maker": "qbrobotics",
   "makerGroup": "qbrobotics",
   "location": "이탈리아·카시나(피사주 나바키오)",
   "countries": [
    "이탈리아"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "19 (연동 구조)",
   "joints": null,
   "actuators": 2,
   "tipForce": null,
   "gripForce": null,
   "payload": "집기 2 kg / 감싸기 3 kg (정격)",
   "forceOther": null,
   "weight": "0.94 kg",
   "weightG": 940,
   "rate": null,
   "stroke": null,
   "speed": "완전 개방→주먹 쥠 1 s",
   "drive": [
    "모터 2개 (시너지 2개)",
    "텐던 구동",
    "언더액추에이티드 연성 핸드"
   ],
   "sensors": [
    "모터 위치 피드백",
    "모터 전류 피드백"
   ],
   "io": [
    "USB",
    "RS-485",
    "ROS",
    "ROS 2"
   ],
   "control": [],
   "notes": [
    "파지 후 손안 조작 가능"
   ],
   "specs": "5지·19개 의인화 자유도를 모터 2개(시너지 2개)로 구동하는 언더액추에이티드 연성 핸드. 텐던 구동, 파지 후 손안 조작 가능. 정격 집기 2 kg·감싸기 3 kg.",
   "source": "https://qbrobotics.com/product/qb-softhand-2-research/",
   "research": [
    "https://www.researchgate.net/publication/397027837_The_Challenges_of_Using_Robots_to_Automate_the_Recycling_of_Electronic_Devices_A_New_Approach_Incorporating_AI_Modularity_and_Soft_Robotics"
   ],
   "photo": {
    "src": "assets/img/hands/qb-softhand2-research-notion.webp",
    "w": 960,
    "h": 640,
    "alpha": false,
    "bg": null,
    "creditName": "qbrobotics",
    "creditUrl": "https://qbrobotics.com/product/qb-softhand-2-research/"
   },
   "other": [
    "손가락 관절 탈구·자가복구 구조"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://qbrobotics.com/product/qb-softhand-2-research/"
    },
    {
     "field": "speed",
     "url": "https://qbrobotics.com/product/qb-softhand-2-research/"
    },
    {
     "field": "sensors",
     "url": "https://qbrobotics.com/product/qb-softhand-2-research/"
    },
    {
     "field": "io",
     "url": "https://qbrobotics.com/product/qb-softhand-2-research/"
    },
    {
     "field": "other",
     "url": "https://qbrobotics.com/product/qb-softhand-2-research/"
    }
   ]
  },
  {
   "id": "dex5-s",
   "model": "Dex5-S",
   "maker": "Unitree Robotics (유니트리)",
   "makerGroup": "Unitree Robotics",
   "location": "중국·저장성 항저우",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 22,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": 22,
   "tipForce": null,
   "gripForce": null,
   "payload": "연속 1 kg / 피크 2 kg (한 손)",
   "forceOther": null,
   "weight": "약 620 g",
   "weightG": 620,
   "rate": "1 kHz",
   "stroke": null,
   "speed": null,
   "drive": [
    "전동 직접 구동 (백드라이브 가능)"
   ],
   "sensors": [
    "이중 엔코더"
   ],
   "io": [
    "Ethernet",
    "USB"
   ],
   "control": [
    "역구동"
   ],
   "notes": [
    "충격 보호",
    "기본형 / Pro 구분"
   ],
   "specs": "능동 22자유도, 약 620g, 제어 1kHz, Ethernet·USB, 역구동·이중 엔코더 및 충격 보호. 기본형과 Pro 구분.",
   "source": "https://www.unitree.com/Dex5-S/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/dex5-s-notion.webp",
    "w": 960,
    "h": 484,
    "alpha": true,
    "bg": null,
    "creditName": "Unitree Robotics",
    "creditUrl": "https://www.unitree.com/Dex5-S/"
   },
   "other": [
    "전원 15–65 V",
    "피크 전력 200 W",
    "크기 102×187×26 mm",
    "알루미늄 합금 하우징",
    "고속 RS-485 (50 Hz) 추가 지원"
   ],
   "web": [
    {
     "field": "actuators",
     "url": "https://www.unitree.com/Dex5-S/"
    },
    {
     "field": "payload",
     "url": "https://www.unitree.com/Dex5-S/"
    },
    {
     "field": "drive",
     "url": "https://www.unitree.com/Dex5-S/"
    },
    {
     "field": "other",
     "url": "https://www.unitree.com/Dex5-S/"
    }
   ]
  },
  {
   "id": "d-hand-5mt",
   "model": "D-Hand 5MT＋",
   "maker": "Double Giken (더블기켄·ダブル技研)",
   "makerGroup": "Double Giken",
   "location": "일본·가나가와현 후지사와시",
   "countries": [
    "일본"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": 6,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "소형 모터 6개",
    "기어 구동"
   ],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "유연한 손가락 구조",
    "구형 5ST·5PT와 구분"
   ],
   "specs": "5손가락·소형 모터 6개 및 기어 구동, 유연한 손가락 구조. 구형 5ST·5PT와 구분.",
   "source": "https://www.j-d.co.jp/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/d-hand-5mt-notion.webp",
    "w": 387,
    "h": 396,
    "alpha": true,
    "bg": null,
    "creditName": "Double Giken",
    "creditUrl": "https://www.j-d.co.jp/"
   },
   "other": [],
   "web": []
  },
  {
   "id": "rh56bfx",
   "model": "RH56BFX",
   "maker": "INSPIRE ROBOTS",
   "makerGroup": "INSPIRE ROBOTS",
   "location": "중국·베이징시 스징산구",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 12,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": "엄지 6 N / 기타 4 N",
   "weight": "약 540 g",
   "weightG": 540,
   "rate": null,
   "stroke": null,
   "speed": "엄지 측면 235°/s · 엄지 굽힘 150°/s · 네 손가락 굽힘 570°/s",
   "drive": [
    "연동 12관절"
   ],
   "sensors": [],
   "io": [
    "RS-485"
   ],
   "control": [],
   "notes": [
    "빠른 동작·제스처 지향"
   ],
   "specs": "능동 6자유도·연동 12관절, 약 540g, 엄지 6N/기타 4N, 빠른 동작·제스처 지향.",
   "source": "https://www.inspire-robots.com/dexterous%20hands/rh56bfx-series/",
   "research": [
    "https://arxiv.org/pdf/2604.02820"
   ],
   "photo": {
    "src": "assets/img/hands/rh56bfx-notion.webp",
    "w": 960,
    "h": 326,
    "alpha": false,
    "bg": null,
    "creditName": "INSPIRE ROBOTS",
    "creditUrl": "https://www.inspire-robots.com/dexterous%20hands/rh56bfx-series/"
   },
   "other": [
    "전원 DC 24 V ±10%",
    "반복정밀도 ±0.20 mm",
    "힘 분해능 0.5 N",
    "최대 전류 2 A"
   ],
   "web": [
    {
     "field": "speed",
     "url": "https://www.inspire-robots.com/dexterous%20hands/rh56bfx-series/"
    },
    {
     "field": "io",
     "url": "https://www.inspire-robots.com/dexterous%20hands/rh56bfx-series/"
    },
    {
     "field": "other",
     "url": "https://www.inspire-robots.com/dexterous%20hands/rh56bfx-series/"
    }
   ]
  },
  {
   "id": "covvi-robotic-hand",
   "model": "COVVI Robotic Hand",
   "maker": "COVVI Robotics",
   "makerGroup": "COVVI Robotics",
   "location": "영국·리즈",
   "countries": [
    "영국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": 6,
   "tipForce": null,
   "gripForce": "파워 그립 213 N",
   "payload": "10 kg (들기 하중)",
   "forceOther": null,
   "weight": "약 1.03 kg",
   "weightG": 1030,
   "rate": null,
   "stroke": null,
   "speed": "트라이포드 그립 0.4 s",
   "drive": [
    "손가락별 구동"
   ],
   "sensors": [
    "손끝 FSR"
   ],
   "io": [
    "Ethernet",
    "ROS2",
    "Python"
   ],
   "control": [],
   "notes": [],
   "specs": "구동기 6개, 약 1.03kg, 손끝 FSR, Ethernet·ROS2·Python, 손가락별 구동·파지.",
   "source": "https://www.covvi-robotics.com/robotic-hand/product-overview/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/covvi-robotic-hand-notion.webp",
    "w": 400,
    "h": 615,
    "alpha": false,
    "bg": null,
    "creditName": "COVVI Robotics",
    "creditUrl": "https://www.covvi-robotics.com/robotic-hand/product-overview/"
   },
   "other": [],
   "web": [
    {
     "field": "gripForce",
     "url": "https://www.covvi-robotics.com/robotic-hand/product-overview/"
    },
    {
     "field": "payload",
     "url": "https://www.covvi-robotics.com/robotic-hand/product-overview/"
    },
    {
     "field": "speed",
     "url": "https://www.covvi-robotics.com/robotic-hand/product-overview/"
    }
   ]
  },
  {
   "id": "dexhand021-mass-production",
   "model": "DexHand021 (Mass Production)",
   "maker": "DexRobot (덱스로봇)",
   "makerGroup": "DexRobot",
   "location": "중국·상하이/저장성 사오싱 거점 (본사 구분 미확인)",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 12,
   "activeDofNote": null,
   "passiveDof": 7,
   "totalDof": 19,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "12 N 이상",
   "gripForce": "38 N 이상",
   "payload": "5 kg (손 전체 하중)",
   "forceOther": null,
   "weight": "약 1 kg",
   "weightG": 1000,
   "rate": null,
   "stroke": "최소 파지 직경 10 mm 이상",
   "speed": "최소 사이클 1 s 미만",
   "drive": [
    "텐던 구동"
   ],
   "sensors": [
    "힘·근접·온도 복합 센싱"
   ],
   "io": [
    "CAN FD",
    "Python/C++",
    "ROS"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 12+수동 7=총 19자유도, 약 1kg, 텐던 구동, 힘·근접·온도 복합 센싱, CAN FD·Python/C++/ROS.",
   "source": "https://www.dex-robot.com/en/productionDexhand",
   "research": [
    "https://arxiv.org/pdf/2603.09121"
   ],
   "photo": {
    "src": "assets/img/hands/dexhand021-mass-production-notion.webp",
    "w": 306,
    "h": 246,
    "alpha": true,
    "bg": null,
    "creditName": "DexRobot",
    "creditUrl": "https://www.dex-robot.com/en/productionDexhand"
   },
   "other": [
    "전원 DC 24 V",
    "반복정밀도 ±0.15 mm",
    "크기 292.6×113.2×56.5 mm",
    "촉각 샘플링 50 Hz 이상",
    "센서 23개 내장",
    "수명 100만 사이클 이상"
   ],
   "web": [
    {
     "field": "tipForce",
     "url": "https://www.dex-robot.com/en/productionDexhand"
    },
    {
     "field": "gripForce",
     "url": "https://www.dex-robot.com/en/productionDexhand"
    },
    {
     "field": "payload",
     "url": "https://www.dex-robot.com/en/productionDexhand"
    },
    {
     "field": "speed",
     "url": "https://www.dex-robot.com/en/productionDexhand"
    },
    {
     "field": "stroke",
     "url": "https://www.dex-robot.com/en/productionDexhand"
    },
    {
     "field": "other",
     "url": "https://www.dex-robot.com/en/productionDexhand"
    }
   ]
  },
  {
   "id": "barretthand-bh8-282",
   "model": "BarrettHand BH8-282",
   "maker": "Barrett Technology",
   "makerGroup": "Barrett Technology",
   "location": "미국·매사추세츠주 뉴턴",
   "countries": [
    "미국"
   ],
   "kind": "3지형 로봇핸드",
   "fingers": 3,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 8,
   "actuators": 4,
   "tipForce": null,
   "gripForce": null,
   "payload": "6 kg",
   "forceOther": null,
   "weight": "0.98 kg",
   "weightG": 980,
   "rate": null,
   "stroke": null,
   "speed": "손가락 완전 개방→닫힘 1.0 s / 180° 스프레드 0.5 s",
   "drive": [
    "모터 4개 · 8관절 적응형"
   ],
   "sensors": [
    "모터 엔코더 (4096 counts)",
    "전 관절 위치 엔코더",
    "손끝 토크 센서 (옵션, 스트레인 게이지 ±1 N·m)",
    "촉각 센서 96셀 (옵션)",
    "6축 힘·토크 센서 (옵션)"
   ],
   "io": [
    "CAN",
    "RS-232",
    "USB 어댑터",
    "C/C++ 라이브러리"
   ],
   "control": [],
   "notes": [
    "TorqueSwitch 브레이크어웨이 클러치",
    "두 핑거 180° 벌림",
    "비정형 물체 대응",
    "공식 자료 기준"
   ],
   "specs": "3지·8관절을 모터 4개로 구동하는 적응형 핸드. TorqueSwitch 브레이크어웨이 클러치와 두 핑거의 180° 벌림으로 비정형 물체에 대응. 질량 0.98 kg·가반 6 kg(공식 자료).",
   "source": "https://barrett.com/barretthand",
   "research": [
    "https://arxiv.org/pdf/2204.06343"
   ],
   "photo": {
    "src": "assets/img/hands/barretthand-bh8-282-notion.webp",
    "w": 960,
    "h": 749,
    "alpha": false,
    "bg": null,
    "creditName": "Barrett Technology",
    "creditUrl": "https://barrett.com/barretthand"
   },
   "other": [
    "DC 20–80 V (대기/평균/피크 7/15/250 W)",
    "모터 브러시리스",
    "가동범위 손가락 기저관절 140° · 손끝관절 45° · 스프레드 180°",
    "손가락 3개 (고정 1, 회전 2)"
   ],
   "web": [
    {
     "field": "speed",
     "url": "https://web.barrett.com/files/BH8-282_Datasheet.pdf"
    },
    {
     "field": "sensors",
     "url": "https://web.barrett.com/files/BH8-282_Datasheet.pdf"
    },
    {
     "field": "io",
     "url": "https://web.barrett.com/files/BH8-282_Datasheet.pdf"
    },
    {
     "field": "other",
     "url": "https://web.barrett.com/files/BH8-282_Datasheet.pdf"
    }
   ]
  },
  {
   "id": "pisoftgrip-100-4",
   "model": "piSOFTGRIP 100-4",
   "maker": "Piab",
   "makerGroup": "Piab",
   "location": "스웨덴·단데뤼드 (Piab Group 본사)",
   "countries": [
    "스웨덴"
   ],
   "kind": "비교용 그리퍼",
   "fingers": 4,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "136 g (피팅 제외)",
   "weightG": 136,
   "rate": null,
   "stroke": "대상 폭 최대 100 mm",
   "speed": null,
   "drive": [
    "진공 구동 소프트 그리퍼",
    "실리콘 핑거 4개 · 진공 공동 일체형"
   ],
   "sensors": [],
   "io": [],
   "control": [
    "진공도로 파지력 조절"
   ],
   "notes": [
    "검출 가능·식품 접촉 승인 실리콘",
    "신선 식품·취약 부품용"
   ],
   "specs": "4개 실리콘 핑거와 진공 공동이 일체형인 진공 구동 소프트 그리퍼, 진공도로 파지력 조절. 검출 가능·식품 접촉 승인 실리콘, 대상 폭 최대 100 mm. 신선 식품·취약 부품용.",
   "source": "https://www.piab.com/en-us/news/pisoftgrip-100-4-piab-launching-largest-gripper-of-series",
   "research": [],
   "photo": {
    "src": "assets/img/hands/pisoftgrip-100-4-notion.webp",
    "w": 960,
    "h": 343,
    "alpha": false,
    "bg": null,
    "creditName": "Piab",
    "creditUrl": "https://www.piab.com/en-us/news/pisoftgrip-100-4-piab-launching-largest-gripper-of-series"
   },
   "other": [
    "권장 진공 25–70 -kPa",
    "권장 대상 폭 20–100 mm",
    "높이 104 mm (G3/8\" 피팅 포함)",
    "외경 112 mm",
    "사용 온도 -20–100 °C",
    "식품 접촉 승인 실리콘 (FDA 21 CFR, EU 1935/2004)"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://www.piab.com/globalassets/productimages/pisoftgripfamilyhandlingsensitiveanddifficulttopickobjects_gb.pdf"
    },
    {
     "field": "other",
     "url": "https://www.piab.com/globalassets/productimages/pisoftgripfamilyhandlingsensitiveanddifficulttopickobjects_gb.pdf"
    }
   ]
  },
  {
   "id": "linker-hand-l10",
   "model": "Linker Hand L10",
   "maker": "Linkerbot",
   "makerGroup": "Linkerbot",
   "location": "중국·베이징",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 10,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "링크 구동"
   ],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "O6보다 개별 제어축이 많음"
   ],
   "specs": "능동 10자유도, 링크 구동 방식. O6보다 개별 제어축이 많음.",
   "source": "https://cdn.robotshop.com/rbm/790bbab7-d10c-4803-a563-eb90579ac7e8/d/d357702e-8a19-43d3-933f-8c36739eda03/db365cbe_l10-product-manual.pdf",
   "research": [],
   "photo": {
    "src": "assets/img/hands/linker-hand-l10-notion.webp",
    "w": 800,
    "h": 800,
    "alpha": false,
    "bg": null,
    "creditName": "Linkerbot",
    "creditUrl": "https://cdn.robotshop.com/rbm/790bbab7-d10c-4803-a563-eb90579ac7e8/d/d357702e-8a19-43d3-933f-8c36739eda03/db365cbe_l10-product-manual.pdf"
   },
   "other": [],
   "web": []
  },
  {
   "id": "xhand-1",
   "model": "XHAND 1",
   "maker": "ROBOTERA (로보테라·星动纪元)",
   "makerGroup": "ROBOTERA (로보테라·星动纪元)",
   "location": "중국·베이징",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 12,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "약 1.1 kg",
   "weightG": 1100,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [],
   "sensors": [
    "촉각 (옵션)"
   ],
   "io": [
    "ROS",
    "Linux SDK"
   ],
   "control": [],
   "notes": [
    "엄지·검지 각 3축 / 기타 각 2축"
   ],
   "specs": "능동 12자유도, 약 1.1kg, 엄지·검지 각 3축/기타 각 2축, 촉각 옵션, ROS·Linux SDK.",
   "source": "https://www.robotera.com/en/",
   "research": [
    "https://arxiv.org/pdf/2505.21864v2"
   ],
   "photo": {
    "src": "assets/img/hands/xhand-1-notion.webp",
    "w": 800,
    "h": 800,
    "alpha": false,
    "bg": null,
    "creditName": "ROBOTERA (로보테라·星动纪元)",
    "creditUrl": "https://www.robotera.com/en/"
   },
   "other": [],
   "web": []
  },
  {
   "id": "sandia-hand",
   "model": "Sandia Hand",
   "maker": "Sandia National Laboratories",
   "makerGroup": "Sandia National Laboratories",
   "location": "미국·뉴멕시코주 앨버커키",
   "countries": [
    "미국"
   ],
   "kind": "4지형 로봇핸드",
   "fingers": 4,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "손가락당 3",
   "joints": null,
   "actuators": null,
   "tipForce": "연속 4 N / 피크 11 N",
   "gripForce": null,
   "payload": null,
   "forceOther": "연속 10 N / 피크 28 N (손가락 중간부, 도면 표기)",
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "전동 (모터)",
    "모듈식 손가락 (자석 탈착·핫스왑)"
   ],
   "sensors": [
    "모터 위치 8000 ppr",
    "스트레인 게이지",
    "3D 가속도계",
    "3D 자력계",
    "3D 자이로",
    "촉각 센서 (손가락 20 taxel, 손바닥 40 taxel, 예정)",
    "3안 카메라 어레이",
    "마이크 어레이"
   ],
   "io": [
    "Ethernet (10/100/1000)",
    "CAN",
    "USB",
    "ROS"
   ],
   "control": [],
   "notes": [
    "자석식 모듈로 손가락·도구 교체"
   ],
   "specs": "손가락당 3자유도. 자석식 모듈로 손가락과 도구를 교체할 수 있음.",
   "source": "https://www.sandia.gov/research/sandia-hand/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/sandia-hand-notion.webp",
    "w": 960,
    "h": 305,
    "alpha": false,
    "bg": null,
    "creditName": "Sandia National Laboratories",
    "creditUrl": "https://www.sandia.gov/research/sandia-hand/"
   },
   "other": [
    "전원 24 또는 48 V DC (대기 5 W / 피크 100 W)",
    "과부하 시 손가락 기계적 이탈"
   ],
   "web": [
    {
     "field": "tipForce",
     "url": "https://www.sandia.gov/app/uploads/sites/156/2021/10/SandiaHand_Handout_Final.pdf"
    },
    {
     "field": "forceOther",
     "url": "https://www.sandia.gov/app/uploads/sites/156/2021/10/SandiaHand_Handout_Final.pdf"
    },
    {
     "field": "sensors",
     "url": "https://www.sandia.gov/app/uploads/sites/156/2021/10/SandiaHand_Handout_Final.pdf"
    },
    {
     "field": "io",
     "url": "https://www.sandia.gov/app/uploads/sites/156/2021/10/SandiaHand_Handout_Final.pdf"
    },
    {
     "field": "drive",
     "url": "https://www.sandia.gov/app/uploads/sites/156/2021/10/SandiaHand_Handout_Final.pdf"
    },
    {
     "field": "other",
     "url": "https://www.sandia.gov/app/uploads/sites/156/2021/10/SandiaHand_Handout_Final.pdf"
    }
   ]
  },
  {
   "id": "hey5",
   "model": "Hey5",
   "maker": "PAL Robotics",
   "makerGroup": "PAL Robotics",
   "location": "스페인·바르셀로나",
   "countries": [
    "스페인"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 19,
   "actuators": 3,
   "tipForce": null,
   "gripForce": null,
   "payload": "1 kg (공칭)",
   "forceOther": null,
   "weight": "약 720 g",
   "weightG": 720,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "엄지·검지·나머지 손가락 묶음 구동"
   ],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [],
   "specs": "19관절·구동기 3개, 약 720g, 공칭 가반 1kg. 엄지·검지·나머지 손가락 묶음을 구분해 구동.",
   "source": "https://docs.pal-robotics.com/edge/hardware/end-effectors/end-effector-hey5",
   "research": [
    "https://www.researchgate.net/publication/334639849_Long_Time_Sequential_Task_Learning_From_Unstructured_Demonstrations"
   ],
   "photo": {
    "src": "assets/img/hands/hey5-notion.webp",
    "w": 753,
    "h": 509,
    "alpha": true,
    "bg": null,
    "creditName": "PAL Robotics",
    "creditUrl": "https://docs.pal-robotics.com/edge/hardware/end-effectors/end-effector-hey5"
   },
   "other": [
    "구동기 최대 속도/토크: 엄지·검지 32 rpm / 0.23 Nm, 중지+약지+소지 34 rpm / 0.45 Nm"
   ],
   "web": [
    {
     "field": "other",
     "url": "https://docs.pal-robotics.com/edge/hardware/end-effectors/end-effector-hey5"
    }
   ]
  },
  {
   "id": "allegro-hand-v6-f",
   "model": "Allegro Hand V6 F",
   "maker": "원익로보틱스 (Wonik Robotics)",
   "makerGroup": "원익로보틱스 (Wonik Robotics)",
   "location": "대한민국·경기도 성남시 판교",
   "countries": [
    "대한민국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 20,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "최대 15 kg",
   "forceOther": null,
   "weight": "약 1.15 kg",
   "weightG": 1150,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "전동 (DC 모터)",
    "기어 감속 288.35:1"
   ],
   "sensors": [
    "손끝·관절·손바닥 압력 센서"
   ],
   "io": [
    "RS485",
    "Ethernet Modbus"
   ],
   "control": [
    "전류",
    "위치",
    "강성 제어"
   ],
   "notes": [],
   "specs": "능동 20자유도, 약 1.15kg, 손끝·관절·손바닥 압력 센서, 전류/위치/강성 제어, RS485·Ethernet Modbus.",
   "source": "https://www.allegrohand.com/sub/product/p.php?idx=25",
   "research": [],
   "photo": {
    "src": "assets/img/hands/allegro-hand-v6-f-notion.webp",
    "w": 960,
    "h": 922,
    "alpha": true,
    "bg": null,
    "creditName": "원익로보틱스 (Wonik Robotics)",
    "creditUrl": "https://www.allegrohand.com/sub/product/p.php?idx=25"
   },
   "other": [
    "전원 24 V / 5 A / 120 W",
    "정지 토크 0.92 Nm / 정격 토크 0.23 Nm",
    "관절 분해능 0.088°",
    "프로토콜 Modbus (RTU, TCP)"
   ],
   "web": [
    {
     "field": "payload",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=25"
    },
    {
     "field": "drive",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=25"
    },
    {
     "field": "other",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=25"
    }
   ]
  },
  {
   "id": "wsg-50-110",
   "model": "WSG 50-110",
   "maker": "Weiss Robotics",
   "makerGroup": "Weiss Robotics",
   "location": "독일·루트비히스부르크",
   "countries": [
    "독일"
   ],
   "kind": "비교용 그리퍼",
   "fingers": 2,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "5–80 N",
   "payload": "3 kg (형상구속) / 0.8 kg (마찰파지)",
   "forceOther": null,
   "weight": "1.2 kg",
   "weightG": 1200,
   "rate": null,
   "stroke": "스트로크 110 mm",
   "speed": "핑거 최대 420 mm/s",
   "drive": [
    "서보 전동",
    "벨트 동기화 평행 2지"
   ],
   "sensors": [
    "힘 측정 핑거용 센서 포트"
   ],
   "io": [
    "Ethernet (TCP/IP)"
   ],
   "control": [],
   "notes": [],
   "specs": "서보 전동·벨트 동기화 방식의 평행 2지. 스트로크 110 mm, 파지력 5–80 N. 공작물 하중 형상구속 3 kg·마찰파지 0.8 kg. 힘 측정 핑거용 센서 포트·Ethernet(TCP/IP) 제어.",
   "source": "https://weiss-robotics.com/servo-electric/wsg-series/?cid=4248",
   "research": [
    "https://openreview.net/pdf/f4356c4300ca2cd867c5188e0eabd8f129f21816.pdf"
   ],
   "photo": {
    "src": "assets/img/hands/wsg-50-110-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "Weiss Robotics",
    "creditUrl": "https://weiss-robotics.com/servo-electric/wsg-series/?cid=4248"
   },
   "other": [
    "사이클 타임 0.2 s (4 mm 스트로크)",
    "반복정밀도 ±0.005 mm",
    "IP20",
    "24 V DC (850 mA)",
    "크기 146×50×97 mm",
    "PROFIBUS/PROFINET (옵션)"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://weiss-robotics.com/servo-electric/wsg-series/?cid=4248"
    },
    {
     "field": "speed",
     "url": "https://weiss-robotics.com/servo-electric/wsg-series/?cid=4248"
    },
    {
     "field": "other",
     "url": "https://weiss-robotics.com/servo-electric/wsg-series/?cid=4248"
    }
   ]
  },
  {
   "id": "dhef-20-a",
   "model": "DHEF-20-A",
   "maker": "Festo",
   "makerGroup": "Festo",
   "location": "독일·에슬링겐암네카어",
   "countries": [
    "독일"
   ],
   "kind": "비교용 그리퍼",
   "fingers": null,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "접촉력 20 N",
   "payload": "1 kg (가이드값)",
   "forceOther": "정적 유지력 26 N (축 평행) / 45 N (축 수직)",
   "weight": "475 g",
   "weightG": 475,
   "rate": null,
   "stroke": "대상 직경 12–38 mm",
   "speed": "전진 270 ms / 후퇴 290 ms, 최대 290 mm/s (무부하) · 120 mm/s (파지 중)",
   "drive": [
    "공압 실리콘 캡 반전"
   ],
   "sensors": [
    "근접 스위치 위치 감지"
   ],
   "io": [],
   "control": [],
   "notes": [
    "일반 핑거 없는 형상적응 그리퍼",
    "위치·형상이 일정하지 않거나 민감한 물체용"
   ],
   "specs": "공압으로 실리콘 캡이 뒤집히며 물체를 감싸는 형상적응 그리퍼. 일반 핑거 없이 위치·형상이 일정하지 않거나 민감한 물체를 파지. 대상 직경 12–38 mm.",
   "source": "https://www.festo.com/media/catalog/202805_documentation.pdf",
   "research": [],
   "photo": {
    "src": "assets/img/hands/dhef-20-a-notion.webp",
    "w": 159,
    "h": 400,
    "alpha": false,
    "bg": null,
    "creditName": "Festo",
    "creditUrl": "https://www.festo.com/media/catalog/202805_documentation.pdf"
   },
   "other": [
    "스트로크 66 mm",
    "작동 압력 1–8 bar (캡 0.07–0.1 bar)",
    "최대 작동 주파수 1 Hz",
    "복동식 공압",
    "실리콘(VMQ) 캡",
    "주변 온도 0–60 °C"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Datasheet/EN_US/8092533.pdf"
    },
    {
     "field": "gripForce",
     "url": "https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Datasheet/EN_US/8092533.pdf"
    },
    {
     "field": "forceOther",
     "url": "https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Datasheet/EN_US/8092533.pdf"
    },
    {
     "field": "payload",
     "url": "https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Datasheet/EN_US/8092533.pdf"
    },
    {
     "field": "speed",
     "url": "https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Datasheet/EN_US/8092533.pdf"
    },
    {
     "field": "sensors",
     "url": "https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Datasheet/EN_US/8092533.pdf"
    },
    {
     "field": "other",
     "url": "https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Datasheet/EN_US/8092533.pdf"
    }
   ]
  },
  {
   "id": "ih2-azzurra",
   "model": "IH2 Azzurra",
   "maker": "Prensilia",
   "makerGroup": "Prensilia",
   "location": "이탈리아·폰테데라",
   "countries": [
    "이탈리아"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 5,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 11,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "원통 파지 35 N / 측면 파지 7 N",
   "payload": null,
   "forceOther": null,
   "weight": "약 640 g",
   "weightG": 640,
   "rate": "1 kHz",
   "stroke": null,
   "speed": "굴곡·신전 1 s / 내전·외전 1 s",
   "drive": [
    "텐던 구동"
   ],
   "sensors": [
    "위치 센서 5개 (디지털)",
    "모터 전류 센서 5개",
    "리밋 스위치 10개",
    "힘 센서 4개 (아날로그)",
    "텐던 장력 센서 (요청 시)"
   ],
   "io": [
    "RS232",
    "USB"
   ],
   "control": [],
   "notes": [
    "내장 제어기"
   ],
   "specs": "총 11자유도·능동 5축, 약 640g. 텐던 구동, RS232·USB, 내장 제어기.",
   "source": "https://www.prensilia.com/ih2-azzurra-hand/",
   "research": [
    "https://www.iris.unicampus.it/handle/20.500.12610/72946"
   ],
   "photo": {
    "src": "assets/img/hands/ih2-azzurra-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "Prensilia",
    "creditUrl": "https://www.prensilia.com/ih2-azzurra-hand/"
   },
   "other": [
    "크기 102 x 45 x 213 mm",
    "전원 9 V @ 5 A 피크",
    "사전 설정 파지 10종",
    "약지·소지 연동"
   ],
   "web": [
    {
     "field": "rate",
     "url": "https://www.prensilia.com/ih2-azzurra-hand/"
    },
    {
     "field": "gripForce",
     "url": "https://www.prensilia.com/ih2-azzurra-hand/"
    },
    {
     "field": "speed",
     "url": "https://www.prensilia.com/ih2-azzurra-hand/"
    },
    {
     "field": "sensors",
     "url": "https://www.prensilia.com/ih2-azzurra-hand/"
    },
    {
     "field": "other",
     "url": "https://www.prensilia.com/ih2-azzurra-hand/"
    }
   ]
  },
  {
   "id": "dh116-r1-m",
   "model": "DH116-R1-M",
   "maker": "Leadshine 그룹",
   "makerGroup": "Leadshine",
   "location": "중국·선전",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 11,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "측면 파지 50 N 이하",
   "payload": "후크 파지 30 kg 이하 / 단일 손가락 최대 5 kg",
   "forceOther": null,
   "weight": "545±10 g",
   "weightG": 10,
   "rate": null,
   "stroke": null,
   "speed": "개폐 ≥0.5 s",
   "drive": [
    "전동 (브러시리스 코어리스 모터)",
    "웜 기어 구동"
   ],
   "sensors": [
    "복합 촉각"
   ],
   "io": [
    "CAN FD"
   ],
   "control": [],
   "notes": [
    "오른손 촉각형"
   ],
   "specs": "오른손 촉각형. 총 11자유도·능동 6축, 545±10g, 복합 촉각, CAN FD.",
   "source": "https://www.leadshine.com/robot-detail/DH116-R1-M.html",
   "research": [],
   "photo": {
    "src": "assets/img/hands/dh116-r1-m-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "Leadshine",
    "creditUrl": "https://www.leadshine.com/robot-detail/DH116-R1-M.html"
   },
   "other": [
    "전원 12–48 V @ 2.5 A",
    "반복 위치정밀도 ±0.2 mm",
    "파지 수명 100만 회",
    "사용 환경 -10~40 ℃ / 85%RH",
    "Windows/Linux/ROS2, C++/Python 지원",
    "EtherCAT·RS485 지원(설명문)"
   ],
   "web": [
    {
     "field": "gripForce",
     "url": "https://www.leadshine.com/robot-detail/DH116-R1-M.html"
    },
    {
     "field": "payload",
     "url": "https://www.leadshine.com/robot-detail/DH116-R1-M.html"
    },
    {
     "field": "speed",
     "url": "https://www.leadshine.com/robot-detail/DH116-R1-M.html"
    },
    {
     "field": "drive",
     "url": "https://www.leadshine.com/robot-detail/DH116-R1-M.html"
    },
    {
     "field": "other",
     "url": "https://www.leadshine.com/robot-detail/DH116-R1-M.html"
    }
   ]
  },
  {
   "id": "uhand",
   "model": "uHand",
   "maker": "Hiwonder",
   "makerGroup": "Hiwonder",
   "location": "중국·선전",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "191 g",
   "weightG": 191,
   "rate": null,
   "stroke": null,
   "speed": "6 V 기준 ≤0.11 s/60°",
   "drive": [
    "LFD-01 anti-blocking servo",
    "손가락 5개 개별 구동"
   ],
   "sensors": [],
   "io": [
    "PWM (500–2500)"
   ],
   "control": [],
   "notes": [
    "크기 165×90 mm",
    "아크릴·알루미늄 합금 브래킷",
    "서보 4.8–6 V · stall torque ≥1.4 kg·cm",
    "교육·개발용, 로봇 2차 개발"
   ],
   "specs": "5개 손가락을 개별 구동하는 교육·개발용 바이오닉 로봇핸드. 제품 크기 165×90mm, 무게 191g, 아크릴·알루미늄 합금 브래킷, LFD-01 anti-blocking servo 구동. 서보는 PWM(500–2500s), 4.8–6V, 6V 기준 회전 속도 ≤0.11s/60°, stall torque ≥1.4kg·cm. 서로 다른 브래킷과 결합해 로봇 2차 개발에 사용.",
   "source": "https://www.hiwonder.com/products/uhand?variant=32473888587863",
   "research": [
    "https://dr.ntu.edu.sg/server/api/core/bitstreams/9453ace1-8349-4966-bc6e-43f9856245a4/content"
   ],
   "photo": {
    "src": "assets/img/hands/uhand-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "Hiwonder",
    "creditUrl": "https://www.hiwonder.com/products/uhand?variant=32473888587863"
   },
   "other": [],
   "web": []
  },
  {
   "id": "allegro-hand-v6-v",
   "model": "Allegro Hand V6 V",
   "maker": "원익로보틱스 (Wonik Robotics)",
   "makerGroup": "원익로보틱스 (Wonik Robotics)",
   "location": "대한민국·경기도 성남시 판교",
   "countries": [
    "대한민국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 20,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "최대 15 kg",
   "forceOther": null,
   "weight": "약 1.15 kg",
   "weightG": 1150,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "전동 (DC 모터)",
    "기어비 288.35:1"
   ],
   "sensors": [
    "GelSight 시각 촉각 손끝",
    "손바닥 압력 센서"
   ],
   "io": [
    "ROS2"
   ],
   "control": [
    "전류",
    "위치",
    "강성 제어"
   ],
   "notes": [],
   "specs": "능동 20자유도, 약 1.15kg, GelSight 시각 촉각 손끝·손바닥 압력 센서, ROS2 및 전류/위치/강성 제어.",
   "source": "https://www.allegrohand.com/sub/product/p.php?idx=26",
   "research": [],
   "photo": {
    "src": "assets/img/hands/allegro-hand-v6-v-notion.webp",
    "w": 713,
    "h": 677,
    "alpha": true,
    "bg": null,
    "creditName": "원익로보틱스 (Wonik Robotics)",
    "creditUrl": "https://www.allegrohand.com/sub/product/p.php?idx=26"
   },
   "other": [
    "전원 24 V / 5 A / 120 W",
    "정지 토크 0.92 Nm / 정격 토크 0.23 Nm",
    "관절 분해능 0.088°",
    "GelSight 촉각 센서 USB 2.0 (VGA 640×480 @ 15/30 fps)"
   ],
   "web": [
    {
     "field": "payload",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=26"
    },
    {
     "field": "drive",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=26"
    },
    {
     "field": "other",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=26"
    }
   ]
  },
  {
   "id": "shadow-dexterous-hand-lite",
   "model": "Shadow Dexterous Hand Lite",
   "maker": "Shadow Robot Company",
   "makerGroup": "Shadow Robot Company",
   "location": "영국·런던",
   "countries": [
    "영국"
   ],
   "kind": "4지형 로봇핸드",
   "fingers": 4,
   "activeDof": 13,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 16,
   "actuators": 13,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "2.4 kg",
   "weightG": 2400,
   "rate": "1 kHz",
   "stroke": null,
   "speed": null,
   "drive": [
    "전완부 모터 구동"
   ],
   "sensors": [
    "텐던 하중 센서 26개",
    "IMU 1개",
    "STF 손끝 촉각 센서 (기본 2개, 최대 4개)"
   ],
   "io": [
    "EtherCAT",
    "ROS"
   ],
   "control": [],
   "notes": [
    "엄지 + 손가락 3개",
    "손목 없음"
   ],
   "specs": "엄지와 손가락 3개, 능동 13자유도. 손목 없이 전완부 모터로 구동.",
   "source": "https://shadowrobot.com/dexterous-hand-series/",
   "research": [
    "https://www.roboticsproceedings.org/rss20/p122.pdf"
   ],
   "photo": {
    "src": "assets/img/hands/shadow-dexterous-hand-lite-notion.webp",
    "w": 800,
    "h": 800,
    "alpha": false,
    "bg": null,
    "creditName": "Shadow Robot Company",
    "creditUrl": "https://shadowrobot.com/dexterous-hand-series/"
   },
   "other": [
    "손가락 관절 4개 / 엄지 관절 4개 / 손목 관절 0개",
    "5지 풀 핸드 대비 전력 35% 절감"
   ],
   "web": [
    {
     "field": "joints",
     "url": "https://shadowrobot.com/dexterous-hand-series/"
    },
    {
     "field": "actuators",
     "url": "https://shadowrobot.com/dexterous-hand-series/"
    },
    {
     "field": "weight",
     "url": "https://shadowrobot.com/dexterous-hand-series/"
    },
    {
     "field": "rate",
     "url": "https://shadowrobot.com/dexterous-hand-series/"
    },
    {
     "field": "sensors",
     "url": "https://shadowrobot.com/dexterous-hand-series/"
    },
    {
     "field": "io",
     "url": "https://shadowrobot.com/dexterous-hand-series/"
    },
    {
     "field": "other",
     "url": "https://shadowrobot.com/dexterous-hand-series/"
    }
   ]
  },
  {
   "id": "roh-ap002",
   "model": "ROH-AP002",
   "maker": "OYMotion",
   "makerGroup": "OYMotion",
   "location": "중국·상하이",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 11,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "네 손가락 굽힘 30 kg / 손가락당 10 kg (굽힘), 8 kg (폄) — 수동 하중",
   "forceOther": "손끝 힘 엄지 ±1.0 kgf / 기타 손가락 ±1.0 kgf (굽힘), ±0.5 kgf (폄)",
   "weight": "575±5 g (손목 포함)",
   "weightG": 5,
   "rate": null,
   "stroke": null,
   "speed": "손가락 전범위 굽힘/폄 0.7 s, 엄지 회전 0.7 s",
   "drive": [
    "다섯 손가락 독립 구동"
   ],
   "sensors": [
    "3D 정전용량식 촉각 센서",
    "손바닥 센서 배열"
   ],
   "io": [
    "다중 프로토콜 인터페이스",
    "ROS"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 6자유도, 3D 정전용량식 촉각 센서와 손바닥 센서 배열.",
   "source": "https://oymotion.com/en/product62",
   "research": [],
   "photo": {
    "src": "assets/img/hands/roh-ap002-notion.webp",
    "w": 700,
    "h": 430,
    "alpha": false,
    "bg": null,
    "creditName": "OYMotion",
    "creditUrl": "https://oymotion.com/en/product62"
   },
   "other": [
    "반복 위치정밀도 ±0.05 mm",
    "힘 분해능 0.1 N",
    "손가락 법선력 센서 0.1–25 N, ≥50 Hz",
    "손바닥 압력 매트릭스 11×5, 150 Hz"
   ],
   "web": [
    {
     "field": "joints",
     "url": "https://oymotion.com/en/product62"
    },
    {
     "field": "weight",
     "url": "https://www.oymotion.com/en/product62/200"
    },
    {
     "field": "payload",
     "url": "https://www.oymotion.com/en/product62/200"
    },
    {
     "field": "speed",
     "url": "https://www.oymotion.com/en/product62/200"
    },
    {
     "field": "io",
     "url": "https://oymotion.com/en/product62"
    },
    {
     "field": "drive",
     "url": "https://oymotion.com/en/product62"
    },
    {
     "field": "other",
     "url": "https://www.oymotion.com/en/product62/200"
    },
    {
     "field": "forceOther",
     "url": "https://www.oymotion.com/en/product62/200"
    }
   ]
  },
  {
   "id": "leap-hand-v1",
   "model": "LEAP Hand v1",
   "maker": "Carnegie Mellon University",
   "makerGroup": "Carnegie Mellon University",
   "location": "미국·피츠버그",
   "countries": [
    "미국"
   ],
   "kind": "4지형 로봇핸드",
   "fingers": 4,
   "activeDof": 16,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "19.5 N (풀아웃 시험)",
   "payload": null,
   "forceOther": null,
   "weight": "595 g",
   "weightG": 595,
   "rate": null,
   "stroke": null,
   "speed": "관절 약 8 rad/s",
   "drive": [
    "DYNAMIXEL 기반"
   ],
   "sensors": [
    "관절 위치·속도·토크(전류) 피드백"
   ],
   "io": [
    "USB (U2D2)",
    "ROS",
    "Python",
    "C++"
   ],
   "control": [],
   "notes": [
    "오픈소스 연구용",
    "손안 조작·로봇 학습용"
   ],
   "specs": "능동 16자유도, DYNAMIXEL 기반 오픈소스 연구용 핸드. 손안 조작과 로봇 학습용.",
   "source": "https://v1.leaphand.com/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/leap-hand-v1-notion.webp",
    "w": 900,
    "h": 506,
    "alpha": false,
    "bg": null,
    "creditName": "Carnegie Mellon University",
    "creditUrl": "https://v1.leaphand.com/"
   },
   "other": [
    "조립 약 4시간",
    "인간 손보다 약 30% 큼"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://arxiv.org/abs/2309.06440"
    },
    {
     "field": "gripForce",
     "url": "https://arxiv.org/abs/2309.06440"
    },
    {
     "field": "speed",
     "url": "https://arxiv.org/abs/2309.06440"
    },
    {
     "field": "sensors",
     "url": "https://arxiv.org/abs/2309.06440"
    },
    {
     "field": "io",
     "url": "https://arxiv.org/abs/2309.06440"
    },
    {
     "field": "other",
     "url": "https://arxiv.org/abs/2309.06440"
    }
   ]
  },
  {
   "id": "dex2-5",
   "model": "Dex2/5",
   "maker": "Unitree Robotics",
   "makerGroup": "Unitree Robotics",
   "location": "중국·항저우",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 2,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 10,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "엄지 15 N / 네 손가락 합계 15 N",
   "gripForce": null,
   "payload": "1.5 kg (최대, 5 cm 원형 물체)",
   "forceOther": null,
   "weight": "365 g",
   "weightG": 365,
   "rate": "1 kHz",
   "stroke": "최소 파지 직경 8 mm",
   "speed": "주먹 쥐기 최소 0.5 s",
   "drive": [
    "엄지 / 네 손가락 2그룹 구동"
   ],
   "sensors": [
    "관절 위치·속도·토크·온도 피드백",
    "전압·전류 피드백"
   ],
   "io": [
    "RS-485"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 2축·총 10자유도, 365g. 엄지와 나머지 네 손가락을 두 그룹으로 구동.",
   "source": "https://www.unitree.com/Dex2-5/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/dex2-5-notion.webp",
    "w": 960,
    "h": 554,
    "alpha": false,
    "bg": null,
    "creditName": "Unitree Robotics",
    "creditUrl": "https://www.unitree.com/Dex2-5/"
   },
   "other": [
    "작동 전압 24–60 V",
    "크기 151 x 70 x 63 mm (펼친 상태)",
    "기어-텐던 로프 구동"
   ],
   "web": [
    {
     "field": "rate",
     "url": "https://www.unitree.com/Dex2-5/"
    },
    {
     "field": "tipForce",
     "url": "https://www.unitree.com/Dex2-5/"
    },
    {
     "field": "payload",
     "url": "https://www.unitree.com/Dex2-5/"
    },
    {
     "field": "stroke",
     "url": "https://www.unitree.com/Dex2-5/"
    },
    {
     "field": "speed",
     "url": "https://www.unitree.com/Dex2-5/"
    },
    {
     "field": "sensors",
     "url": "https://www.unitree.com/Dex2-5/"
    },
    {
     "field": "io",
     "url": "https://www.unitree.com/Dex2-5/"
    },
    {
     "field": "other",
     "url": "https://www.unitree.com/Dex2-5/"
    }
   ]
  },
  {
   "id": "mia-hand-r-d",
   "model": "Mia Hand R&D",
   "maker": "Prensilia",
   "makerGroup": "Prensilia",
   "location": "이탈리아·폰테데라",
   "countries": [
    "이탈리아"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 3,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 4,
   "dofStated": null,
   "joints": null,
   "actuators": 3,
   "tipForce": null,
   "gripForce": "최대 44–140 N",
   "payload": null,
   "forceOther": null,
   "weight": "520 g",
   "weightG": 520,
   "rate": "1 kHz",
   "stroke": null,
   "speed": "닫힘 0.4 s",
   "drive": [
    "모터 3개",
    "중지·약지·소지 연동"
   ],
   "sensors": [
    "손가락 힘 센서 (옵션)"
   ],
   "io": [
    "ROS",
    "Gazebo"
   ],
   "control": [],
   "notes": [],
   "specs": "모터 3개, 중지·약지·소지 연동. ROS·Gazebo 지원, 손가락 힘 센서 옵션.",
   "source": "https://www.prensilia.com/mia-hand-research/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/mia-hand-r-d-notion.webp",
    "w": 732,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "Prensilia",
    "creditUrl": "https://www.prensilia.com/mia-hand-research/"
   },
   "other": [
    "최대 크기 140 x 135 x 190 mm",
    "전원 9 V @ 6 A ~ 24 V @ 2.5 A 피크",
    "통신 UART over USB",
    "사전 설정 파지 5종",
    "위치 센서 3개 / 모터 전류 센서 3개 / 리밋 스위치 6개"
   ],
   "web": [
    {
     "field": "activeDof",
     "url": "https://www.prensilia.com/mia-hand-research/"
    },
    {
     "field": "totalDof",
     "url": "https://www.prensilia.com/mia-hand-research/"
    },
    {
     "field": "weight",
     "url": "https://www.prensilia.com/mia-hand-research/"
    },
    {
     "field": "rate",
     "url": "https://www.prensilia.com/mia-hand-research/"
    },
    {
     "field": "gripForce",
     "url": "https://www.prensilia.com/mia-hand-research/"
    },
    {
     "field": "speed",
     "url": "https://www.prensilia.com/mia-hand-research/"
    },
    {
     "field": "other",
     "url": "https://www.prensilia.com/mia-hand-research/"
    }
   ]
  },
  {
   "id": "bionicsofthand",
   "model": "BionicSoftHand",
   "maker": "Festo",
   "makerGroup": "Festo",
   "location": "독일·에슬링겐",
   "countries": [
    "독일"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 12,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "공압 벨로즈"
   ],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "엄지·검지 옆 움직임",
    "파지 학습 시연"
   ],
   "specs": "공압 벨로즈로 손가락 굽힘. 엄지·검지 옆 움직임 및 파지 학습 시연.",
   "source": "https://www.festo.com/us/en/e/about-festo/research-and-development/bionic-learning-network/bionic-grippers-and-soft-robots/bionicsofthand-id_68106",
   "research": [],
   "photo": {
    "src": "assets/img/hands/bionicsofthand-notion.webp",
    "w": 960,
    "h": 693,
    "alpha": false,
    "bg": null,
    "creditName": "Festo",
    "creditUrl": "https://www.festo.com/us/en/e/about-festo/research-and-development/bionic-learning-network/bionic-grippers-and-soft-robots/bionicsofthand-id_68106"
   },
   "other": [
    "비례 피에조 밸브로 제어 (손 아래 소형 밸브 터미널)",
    "엄지·검지 측면 스위블 모듈",
    "급·배기 튜브 각 1개"
   ],
   "web": [
    {
     "field": "totalDof",
     "url": "https://www.festo.com.cn/cn/en/e/about-festo/innovation-and-technology/bionic-learning-network/bionicsofthand-id_68106"
    },
    {
     "field": "other",
     "url": "https://www.festo.com.cn/cn/en/e/about-festo/innovation-and-technology/bionic-learning-network/bionicsofthand-id_68106"
    }
   ]
  },
  {
   "id": "dh-5-6",
   "model": "DH-5-6",
   "maker": "DH-Robotics",
   "makerGroup": "DH-Robotics",
   "location": "중국·선전",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 11,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [],
   "sensors": [
    "촉각 센서 (옵션)"
   ],
   "io": [],
   "control": [],
   "notes": [
    "손끝 교체 가능"
   ],
   "specs": "능동 6·총 11자유도. 손끝 교체 가능, 촉각 센서 옵션.",
   "source": "https://en.dh-robotics.com/product/dh-5-6",
   "research": [],
   "photo": {
    "src": "assets/img/hands/dh-5-6-notion.webp",
    "w": 396,
    "h": 400,
    "alpha": false,
    "bg": null,
    "creditName": "DH-Robotics",
    "creditUrl": "https://en.dh-robotics.com/product/dh-5-6"
   },
   "other": [],
   "web": []
  },
  {
   "id": "dex5-1",
   "model": "Dex5-1",
   "maker": "Unitree Robotics",
   "makerGroup": "Unitree Robotics",
   "location": "중국·항저우",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 16,
   "activeDofNote": null,
   "passiveDof": 4,
   "totalDof": 20,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "10 N",
   "gripForce": null,
   "payload": "3.5 kg (손바닥 아래) / 4.5 kg (손바닥 측면), 5 cm 원형 물체",
   "forceOther": null,
   "weight": "약 1.1 kg",
   "weightG": 1100,
   "rate": "1 kHz",
   "stroke": "최소 파지 직경 10 mm",
   "speed": null,
   "drive": [
    "전동 (코어리스 모터)",
    "저백래시 감속기",
    "기어 전동 관절 4개 + 복합 전동 관절 12개"
   ],
   "sensors": [
    "고정밀 엔코더",
    "IMU",
    "관절 위치·속도·토크·온도 피드백"
   ],
   "io": [
    "USB 2.0"
   ],
   "control": [],
   "notes": [
    "손가락 모듈 개별 교체 가능"
   ],
   "specs": "능동 16·총 20자유도, 약 1.1kg. 손가락 모듈 개별 교체 가능.",
   "source": "https://www.unitree.com/Dex5-1/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/dex5-1-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "Unitree Robotics",
    "creditUrl": "https://www.unitree.com/Dex5-1/"
   },
   "other": [
    "작동 전압 24–60 V",
    "크기 217.3 x 127.5 x 72.1 mm",
    "손끝 반복 위치정밀도 ±1 mm",
    "작동 온도 -20~60 ℃"
   ],
   "web": [
    {
     "field": "passiveDof",
     "url": "https://www.unitree.com/Dex5-1/"
    },
    {
     "field": "rate",
     "url": "https://www.unitree.com/Dex5-1/"
    },
    {
     "field": "tipForce",
     "url": "https://www.unitree.com/Dex5-1/"
    },
    {
     "field": "payload",
     "url": "https://www.unitree.com/Dex5-1/"
    },
    {
     "field": "stroke",
     "url": "https://www.unitree.com/Dex5-1/"
    },
    {
     "field": "sensors",
     "url": "https://www.unitree.com/Dex5-1/"
    },
    {
     "field": "io",
     "url": "https://www.unitree.com/Dex5-1/"
    },
    {
     "field": "drive",
     "url": "https://www.unitree.com/Dex5-1/"
    },
    {
     "field": "other",
     "url": "https://www.unitree.com/Dex5-1/"
    }
   ]
  },
  {
   "id": "dlr-hand-ii",
   "model": "DLR Hand II",
   "maker": "DLR",
   "makerGroup": "DLR",
   "location": "독일·오버파펜호펜",
   "countries": [
    "독일"
   ],
   "kind": "4지형 로봇핸드",
   "fingers": 4,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 13,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "1.8 kg",
   "weightG": 1800,
   "rate": null,
   "stroke": null,
   "speed": "관절 최대 360°/s",
   "drive": [],
   "sensors": [
    "관절 토크·위치 센서"
   ],
   "io": [],
   "control": [],
   "notes": [
    "손가락당 3축 + 손바닥 1축"
   ],
   "specs": "손가락당 3축에 손바닥 1축을 더해 총 13자유도. 관절 토크·위치 센서.",
   "source": "https://www.dlr.de/en/rm/research/robotic-systems/hands/hand-ii",
   "research": [],
   "photo": {
    "src": "assets/img/hands/dlr-hand-ii-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "DLR",
    "creditUrl": "https://www.dlr.de/en/rm/research/robotic-systems/hands/hand-ii"
   },
   "other": [
    "크기 30 x 15 x 15 cm",
    "전원 24 V DC (20 A)",
    "Payload 30 N (펴진 손가락에 수직)",
    "손가락당 3 DoF·관절 4개, 손바닥 1 DoF",
    "4개 손가락 동일·상호 교체 가능, 퀵 릴리스 어댑터"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://www.dlr.de/en/rm/research/robotic-systems/hands/hand-ii"
    },
    {
     "field": "speed",
     "url": "https://www.dlr.de/en/rm/research/robotic-systems/hands/hand-ii"
    },
    {
     "field": "other",
     "url": "https://www.dlr.de/en/rm/research/robotic-systems/hands/hand-ii"
    }
   ]
  },
  {
   "id": "adh-5-6-p1",
   "model": "ADH-5-6-P1",
   "maker": "DH-Robotics",
   "makerGroup": "DH-Robotics",
   "location": "중국·선전",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 11,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "약 560 g",
   "weightG": 560,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "전원 차단 시 위치 유지"
   ],
   "specs": "능동 6·총 11자유도, 약 560g. 전원 차단 시 위치 유지.",
   "source": "https://www.worldrobotconference.com/expo/company/706.html",
   "research": [],
   "photo": {
    "src": "assets/img/hands/adh-5-6-p1-notion.webp",
    "w": 960,
    "h": 773,
    "alpha": false,
    "bg": null,
    "creditName": "DH-Robotics",
    "creditUrl": "https://www.worldrobotconference.com/expo/company/706.html"
   },
   "other": [],
   "web": []
  },
  {
   "id": "aidin-hand-gen2",
   "model": "AIDIN Hand Gen2",
   "maker": "에이딘로보틱스",
   "makerGroup": "에이딘로보틱스 (AIDIN Robotics)",
   "location": "한국·안양",
   "countries": [
    "대한민국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "16",
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "링크 구동"
   ],
   "sensors": [
    "접촉 위치·힘 감지 촉각 센서"
   ],
   "io": [],
   "control": [],
   "notes": [
    "Gen1 대비 엄지 1축 추가"
   ],
   "specs": "16자유도, Gen1 대비 엄지 1축 추가. 접촉 위치와 힘을 감지하는 촉각 센서.",
   "source": "https://www.aidinrobotics.co.kr/robotic-hand",
   "research": [],
   "photo": {
    "src": "assets/img/hands/aidin-hand-gen2-notion.webp",
    "w": 960,
    "h": 540,
    "alpha": false,
    "bg": null,
    "creditName": "에이딘로보틱스 (AIDIN Robotics)",
    "creditUrl": "https://www.aidinrobotics.co.kr/robotic-hand"
   },
   "other": [
    "자체 개발 힘/토크 센서 탑재",
    "사람 손 크기의 콤팩트한 사이즈"
   ],
   "web": [
    {
     "field": "drive",
     "url": "https://www.aidinrobotics.co.kr/robotic-hand"
    },
    {
     "field": "other",
     "url": "https://www.aidinrobotics.co.kr/robotic-hand"
    }
   ]
  },
  {
   "id": "omnihand-pro-2025-o12",
   "model": "OmniHand Pro 2025 (O12)",
   "maker": "AGIBOT",
   "makerGroup": "AGIBOT",
   "location": "중국·상하이",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 12,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 19,
   "dofStated": null,
   "joints": 19,
   "actuators": null,
   "tipForce": "최대 20 N",
   "gripForce": null,
   "payload": "35 kg (손바닥 위, 5 cm 강체) / 5 kg (손바닥 아래)",
   "forceOther": null,
   "weight": "750 g 이하",
   "weightG": 750,
   "rate": "1 kHz",
   "stroke": null,
   "speed": "닫힘 최소 0.8 s (typ.)",
   "drive": [
    "링크 구동",
    "모터 + 스크류 로드"
   ],
   "sensors": [
    "손끝 3축 힘 센서",
    "손바닥 1축 힘 센서",
    "촉각 센서 (150+ 점)"
   ],
   "io": [
    "CAN FD"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 12·총 19자유도, 손끝 힘 최대 20N으로 안내.",
   "source": "https://www.agibot.com/products/OmniHand_O12",
   "research": [],
   "photo": {
    "src": "assets/img/hands/omnihand-pro-2025-o12-notion.webp",
    "w": 581,
    "h": 934,
    "alpha": true,
    "bg": null,
    "creditName": "AGIBOT",
    "creditUrl": "https://www.agibot.com/products/OmniHand_O12"
   },
   "other": [
    "전원 12–24 V",
    "크기 207 × 98 × 56 mm",
    "손가락 반복정밀도 0.02 mm (typ.)",
    "최소 파지 직경 2 mm",
    "재질 PA + 실리콘"
   ],
   "web": [
    {
     "field": "joints",
     "url": "https://www.agibot.com/products/OmniHand_O12"
    },
    {
     "field": "weight",
     "url": "https://www.agibot.com/products/OmniHand_O12"
    },
    {
     "field": "rate",
     "url": "https://www.agibot.com/products/OmniHand_O12"
    },
    {
     "field": "payload",
     "url": "https://www.agibot.com/products/OmniHand_O12"
    },
    {
     "field": "speed",
     "url": "https://www.agibot.com/products/OmniHand_O12"
    },
    {
     "field": "sensors",
     "url": "https://www.agibot.com/products/OmniHand_O12"
    },
    {
     "field": "io",
     "url": "https://www.agibot.com/products/OmniHand_O12"
    },
    {
     "field": "drive",
     "url": "https://www.agibot.com/products/OmniHand_O12"
    },
    {
     "field": "other",
     "url": "https://www.agibot.com/products/OmniHand_O12"
    }
   ]
  },
  {
   "id": "qb-softhand-research",
   "model": "qb SoftHand Research",
   "maker": "qbrobotics",
   "makerGroup": "qbrobotics",
   "location": "이탈리아·카시나",
   "countries": [
    "이탈리아"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "19 (연동 구조)",
   "joints": null,
   "actuators": 1,
   "tipForce": null,
   "gripForce": "62 N (핀치 자세)",
   "payload": "1.1 kg (공칭, 핀치 자세)",
   "forceOther": null,
   "weight": "약 770 g",
   "weightG": 770,
   "rate": null,
   "stroke": null,
   "speed": "완전 펼침→주먹 1.1 s",
   "drive": [
    "모터 1개 연동 구동"
   ],
   "sensors": [
    "모터 위치",
    "모터 전류"
   ],
   "io": [
    "USB",
    "RS485"
   ],
   "control": [],
   "notes": [],
   "specs": "19자유도 구조를 모터 1개로 연동 구동. 약 770g, USB·RS485.",
   "source": "https://qbrobotics.com/product/qb-softhand-research/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/qb-softhand-research-notion.webp",
    "w": 960,
    "h": 640,
    "alpha": false,
    "bg": null,
    "creditName": "qbrobotics",
    "creditUrl": "https://qbrobotics.com/product/qb-softhand-research/"
   },
   "other": [
    "ROS·ROS 2 호환",
    "UR+ 인증",
    "탈구 후 복구되는 손가락 관절"
   ],
   "web": [
    {
     "field": "gripForce",
     "url": "https://qbrobotics.com/product/qb-softhand-research/"
    },
    {
     "field": "payload",
     "url": "https://qbrobotics.com/product/qb-softhand-research/"
    },
    {
     "field": "speed",
     "url": "https://qbrobotics.com/product/qb-softhand-research/"
    },
    {
     "field": "sensors",
     "url": "https://qbrobotics.com/product/qb-softhand-research/"
    },
    {
     "field": "other",
     "url": "https://qbrobotics.com/product/qb-softhand-research/"
    }
   ]
  },
  {
   "id": "dlr-hit-hand-ii",
   "model": "DLR-HIT Hand II",
   "maker": "DLR / Harbin Institute of Technology",
   "makerGroup": "DLR",
   "location": "독일·오버파펜호펜 / 중국·하얼빈",
   "countries": [
    "독일",
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 3,
   "activeDofNote": "손가락당",
   "passiveDof": null,
   "totalDof": 15,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "10 N (능동 손끝 힘)",
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "약 1.5 kg",
   "weightG": 1500,
   "rate": null,
   "stroke": null,
   "speed": "관절 최대 360°/s",
   "drive": [],
   "sensors": [],
   "io": [
    "직렬 통신 (손가락–손–외부 제어 PC)"
   ],
   "control": [],
   "notes": [
    "모듈식 손가락"
   ],
   "specs": "손가락당 능동 3축, 총 15자유도. 약 1.5kg, 모듈식 손가락.",
   "source": "https://www.dlr.de/en/rm/research/robotic-systems/hands/dlr-hit-hand-ii",
   "research": [],
   "photo": {
    "src": "assets/img/hands/dlr-hit-hand-ii-notion.webp",
    "w": 960,
    "h": 638,
    "alpha": false,
    "bg": null,
    "creditName": "DLR",
    "creditUrl": "https://www.dlr.de/en/rm/research/robotic-systems/hands/dlr-hit-hand-ii"
   },
   "other": [
    "손가락당 4관절·3 능동 자유도 (동일 모듈형 손가락 5개)",
    "손가락 링크마다 A/D 변환",
    "핫플러그 툴 교환 (수 초)",
    "알루미늄 오픈 골격 + 사출 플라스틱 셸"
   ],
   "web": [
    {
     "field": "tipForce",
     "url": "https://www.dlr.de/en/rm/research/robotic-systems/hands/dlr-hit-hand-ii"
    },
    {
     "field": "speed",
     "url": "https://www.dlr.de/en/rm/research/robotic-systems/hands/dlr-hit-hand-ii"
    },
    {
     "field": "io",
     "url": "https://www.dlr.de/en/rm/research/robotic-systems/hands/dlr-hit-hand-ii"
    },
    {
     "field": "other",
     "url": "https://www.dlr.de/en/rm/research/robotic-systems/hands/dlr-hit-hand-ii"
    }
   ]
  },
  {
   "id": "telehand-pro-p20",
   "model": "TeleHand Pro P20",
   "maker": "Joyson Electronics",
   "makerGroup": "Joyson Electronics",
   "location": "중국·저장성 닝보",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 16,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 20,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "직접·텐던·링크 구동"
   ],
   "sensors": [
    "3D 힘 감지 전자피부"
   ],
   "io": [],
   "control": [],
   "notes": [],
   "specs": "능동 16·총 20자유도로 소개. 직접·텐던·링크 구동 및 3D 힘 감지 전자피부.",
   "source": "https://www.joyson.com/index.php/esg/info/1426.html",
   "research": [],
   "photo": {
    "src": "assets/img/hands/telehand-pro-p20-notion.webp",
    "w": 943,
    "h": 960,
    "alpha": true,
    "bg": null,
    "creditName": "Joyson Electronics",
    "creditUrl": "https://www.joyson.com/index.php/esg/info/1426.html"
   },
   "other": [],
   "web": []
  },
  {
   "id": "rh56f2",
   "model": "RH56F2",
   "maker": "Inspire Robots",
   "makerGroup": "INSPIRE ROBOTS",
   "location": "중국·베이징",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 12,
   "actuators": null,
   "tipForce": "엄지 12 N 이상 / 기타 10 N 이상",
   "gripForce": null,
   "payload": "30 kg (수동 하중)",
   "forceOther": null,
   "weight": "약 605 g",
   "weightG": 605,
   "rate": "1 kHz",
   "stroke": null,
   "speed": "닫힘 0.8 s 이하",
   "drive": [],
   "sensors": [
    "촉각 센서 8개 (범위 30 N, 정확도 5%FS)",
    "힘 감지 (분해능 0.1 N)"
   ],
   "io": [
    "EtherCAT",
    "RS-485",
    "CAN FD"
   ],
   "control": [],
   "notes": [
    "금속 골격"
   ],
   "specs": "능동 6자유도, 약 605g, 금속 골격, 통신 1kHz.",
   "source": "https://en.inspire-robots.com/product/rh56f2/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/rh56f2-notion.webp",
    "w": 960,
    "h": 540,
    "alpha": true,
    "bg": null,
    "creditName": "INSPIRE ROBOTS",
    "creditUrl": "https://en.inspire-robots.com/product/rh56f2/"
   },
   "other": [
    "전원 18–60 V",
    "반복정밀도 ±0.2 mm",
    "피크 전류 5 A @24 V",
    "엄지 측방 회전 범위 60–180°"
   ],
   "web": [
    {
     "field": "joints",
     "url": "https://en.inspire-robots.com/product/rh56f2/"
    },
    {
     "field": "tipForce",
     "url": "https://en.inspire-robots.com/product/rh56f2/"
    },
    {
     "field": "payload",
     "url": "https://en.inspire-robots.com/product/rh56f2/"
    },
    {
     "field": "speed",
     "url": "https://en.inspire-robots.com/product/rh56f2/"
    },
    {
     "field": "sensors",
     "url": "https://en.inspire-robots.com/product/rh56f2/"
    },
    {
     "field": "io",
     "url": "https://en.inspire-robots.com/product/rh56f2/"
    },
    {
     "field": "other",
     "url": "https://en.inspire-robots.com/product/rh56f2/"
    }
   ]
  },
  {
   "id": "fthand-21",
   "model": "FTHand-21",
   "maker": "FutureTakt",
   "makerGroup": "FutureTakt",
   "location": "중국·저장성 사오싱",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "21",
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "정밀 조립·연구용"
   ],
   "specs": "제조사 표기 21자유도. 정밀 조립 및 연구용으로 소개.",
   "source": "https://www.futuretakt.com/sys-pd/30.html",
   "research": [],
   "photo": {
    "src": "assets/img/hands/fthand-21-notion.webp",
    "w": 960,
    "h": 540,
    "alpha": false,
    "bg": null,
    "creditName": "FutureTakt",
    "creditUrl": "https://www.futuretakt.com/sys-pd/30.html"
   },
   "other": [],
   "web": []
  },
  {
   "id": "allegro-hand-v4",
   "model": "Allegro Hand V4",
   "maker": "원익로보틱스",
   "makerGroup": "원익로보틱스 (Wonik Robotics)",
   "location": "한국·성남",
   "countries": [
    "대한민국"
   ],
   "kind": "4지형 로봇핸드",
   "fingers": 4,
   "activeDof": 16,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 16,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": "5 kg",
   "forceOther": null,
   "weight": "1.08 kg",
   "weightG": 1080,
   "rate": "333 Hz",
   "stroke": null,
   "speed": "관절 최대 0.11 s/60°",
   "drive": [
    "전류 제어 가능 모터 모듈"
   ],
   "sensors": [
    "관절 포텐셔미터 (분해능 0.002°)"
   ],
   "io": [
    "CAN"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 16자유도, 전류 제어가 가능한 모터 모듈.",
   "source": "https://www.allegrohand.com/sub/product/p.php?idx=1",
   "research": [
    "https://arxiv.org/pdf/2503.07989"
   ],
   "photo": {
    "src": "assets/img/hands/allegro-hand-v4-notion.webp",
    "w": 960,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "원익로보틱스 (Wonik Robotics)",
    "creditUrl": "https://www.allegrohand.com/sub/product/p.php?idx=1"
   },
   "other": [
    "전원 24 V / 100 W",
    "DC 모터, 감속비 1:369",
    "최대 토크 0.70 Nm"
   ],
   "web": [
    {
     "field": "joints",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=1"
    },
    {
     "field": "weight",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=1"
    },
    {
     "field": "rate",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=1"
    },
    {
     "field": "payload",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=1"
    },
    {
     "field": "speed",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=1"
    },
    {
     "field": "sensors",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=1"
    },
    {
     "field": "io",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=1"
    },
    {
     "field": "other",
     "url": "https://www.allegrohand.com/sub/product/p.php?idx=1"
    }
   ]
  },
  {
   "id": "dexhand021-pro",
   "model": "DexHand021 Pro",
   "maker": "DexRobot",
   "makerGroup": "DexRobot",
   "location": "중국·상하이 / 사오싱 거점",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "22 (손목 통합)",
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "이중 텐던 구동"
   ],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "주요 16축 · 연동 4축 · 손목 2축"
   ],
   "specs": "손목 통합 22자유도. 주요 16축·연동 4축·손목 2축, 이중 텐던 구동.",
   "source": "https://www.dex-robot.com/en/dexhand021Pro",
   "research": [],
   "photo": {
    "src": "assets/img/hands/dexhand021-pro-notion.webp",
    "w": 960,
    "h": 601,
    "alpha": false,
    "bg": null,
    "creditName": "DexRobot",
    "creditUrl": "https://www.dex-robot.com/en/dexhand021Pro"
   },
   "other": [],
   "web": []
  },
  {
   "id": "gifu-hand-iii",
   "model": "Gifu Hand III",
   "maker": "기후대학교",
   "makerGroup": "기후대학교",
   "location": "일본·기후",
   "countries": [
    "일본"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "16",
   "joints": 20,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "손가락 내장 서보모터"
   ],
   "sensors": [
    "분포형 촉각 센서 859점"
   ],
   "io": [],
   "control": [],
   "notes": [
    "파지·조작 연구 플랫폼"
   ],
   "specs": "16자유도·20관절, 손가락에 서보모터 내장. 파지·조작 연구 플랫폼.",
   "source": "https://www1.gifu-u.ac.jp/~kawalab/research/research_hand.html",
   "research": [
    "https://www.jstage.jst.go.jp/article/kikaic1979/71/705/71_705_1646/_article/-char/ja"
   ],
   "photo": {
    "src": "assets/img/hands/gifu-hand-iii-notion.webp",
    "w": 283,
    "h": 203,
    "alpha": false,
    "bg": null,
    "creditName": "기후대학교",
    "creditUrl": "https://www1.gifu-u.ac.jp/~kawalab/research/research_hand.html"
   },
   "other": [],
   "web": [
    {
     "field": "sensors",
     "url": "https://www1.gifu-u.ac.jp/~kawalab/research/research_hand.html"
    }
   ]
  },
  {
   "id": "rh6d",
   "model": "RH6D",
   "maker": "Seed Robotics",
   "makerGroup": "Seed Robotics",
   "location": "포르투갈·리스본",
   "countries": [
    "포르투갈"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "15",
   "joints": null,
   "actuators": 6,
   "tipForce": null,
   "gripForce": null,
   "payload": "750 g (수직 당김) / 450 g (3차원 공간)",
   "forceOther": null,
   "weight": "약 305 g",
   "weightG": 305,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "저구동(underactuated) 구조",
    "스마트 액추에이터 내장"
   ],
   "sensors": [
    "손바닥 ToF 거리 센서",
    "손등 정전식 패드 (옵션)",
    "구동기 위치·속도·전류·온도 피드백"
   ],
   "io": [
    "ROS",
    "Python"
   ],
   "control": [],
   "notes": [
    "소형 휴머노이드용",
    "대향 엄지"
   ],
   "specs": "소형 휴머노이드용. 15자유도, 약 305g, 대향 엄지, ROS·Python 지원.",
   "source": "https://www.seedrobotics.com/rh5d-rh7d-childsize-robot-hand",
   "research": [],
   "photo": {
    "src": "assets/img/hands/rh6d-notion.webp",
    "w": 550,
    "h": 510,
    "alpha": true,
    "bg": null,
    "creditName": "Seed Robotics",
    "creditUrl": "https://www.seedrobotics.com/rh5d-rh7d-childsize-robot-hand"
   },
   "other": [
    "전원 9–24 V",
    "통신 UART over RS485 (TTL 옵션)",
    "USB 설정, Bluetooth 옵션"
   ],
   "web": [
    {
     "field": "actuators",
     "url": "https://www.seedrobotics.com/rh5d-rh7d-childsize-robot-hand"
    },
    {
     "field": "payload",
     "url": "https://www.seedrobotics.com/rh5d-rh7d-childsize-robot-hand"
    },
    {
     "field": "sensors",
     "url": "https://www.seedrobotics.com/rh5d-rh7d-childsize-robot-hand"
    },
    {
     "field": "drive",
     "url": "https://www.seedrobotics.com/rh5d-rh7d-childsize-robot-hand"
    },
    {
     "field": "other",
     "url": "https://www.seedrobotics.com/rh5d-rh7d-childsize-robot-hand"
    }
   ]
  },
  {
   "id": "rh5dg2",
   "model": "RH5DG2",
   "maker": "Inspire Robots",
   "makerGroup": "INSPIRE ROBOTS",
   "location": "중국·베이징",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 13,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 18,
   "actuators": null,
   "tipForce": "20 N (손끝 파지력)",
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": "1020 ± 15 g (손목 제외)",
   "weightG": 15,
   "rate": null,
   "stroke": null,
   "speed": "닫힘 0.8 s 이하",
   "drive": [],
   "sensors": [
    "촉각 센서 8개 (범위 30 N, 촉각 버전)",
    "힘 감지 (분해능 0.1 N)"
   ],
   "io": [
    "EtherCAT",
    "CAN FD",
    "RS-485"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 13자유도·18개 가동 관절. 제조사 표기 손끝 파지력 20N.",
   "source": "https://en.inspire-robots.com/product/rh5dg2/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/rh5dg2-notion.webp",
    "w": 800,
    "h": 800,
    "alpha": false,
    "bg": null,
    "creditName": "INSPIRE ROBOTS",
    "creditUrl": "https://en.inspire-robots.com/product/rh5dg2/"
   },
   "other": [
    "전원 18–60 V",
    "반복정밀도 ±0.2 mm",
    "피크 전류 7.5 A @24 V",
    "최대 손끝 압력 8 kg",
    "엄지 측방 회전 65–175°"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://en.inspire-robots.com/product/rh5dg2/"
    },
    {
     "field": "speed",
     "url": "https://en.inspire-robots.com/product/rh5dg2/"
    },
    {
     "field": "sensors",
     "url": "https://en.inspire-robots.com/product/rh5dg2/"
    },
    {
     "field": "io",
     "url": "https://en.inspire-robots.com/product/rh5dg2/"
    },
    {
     "field": "other",
     "url": "https://en.inspire-robots.com/product/rh5dg2/"
    }
   ]
  },
  {
   "id": "revo-3-basic",
   "model": "Revo 3 Basic",
   "maker": "BrainCo",
   "makerGroup": "BrainCo",
   "location": "중국·항저우 / 미국·매사추세츠 거점",
   "countries": [
    "중국",
    "미국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 21,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [],
   "sensors": [
    "촉각 센서 미포함 (Basic)"
   ],
   "io": [],
   "control": [
    "위치",
    "힘 제어"
   ],
   "notes": [
    "독립 구동"
   ],
   "specs": "독립 구동 21자유도, 위치·힘 제어 지원. Basic은 촉각 센서 미포함.",
   "source": "https://www.brainco.cn/en-US/products/revo3",
   "research": [],
   "photo": {
    "src": "assets/img/hands/revo-3-basic-notion.webp",
    "w": 900,
    "h": 900,
    "alpha": false,
    "bg": null,
    "creditName": "BrainCo",
    "creditUrl": "https://www.brainco.cn/en-US/products/revo3"
   },
   "other": [],
   "web": []
  },
  {
   "id": "linker-hand-o30",
   "model": "Linker Hand O30",
   "maker": "Linkerbot",
   "makerGroup": "Linkerbot",
   "location": "중국·베이징",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 20,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "엄지 최대 24 N / 네 손가락 최대 30 N",
   "gripForce": "다섯 손가락 최대 70 N",
   "payload": "30 kg (최대)",
   "forceOther": null,
   "weight": "730 g",
   "weightG": 730,
   "rate": "500 Hz",
   "stroke": null,
   "speed": "개폐 약 0.8 s",
   "drive": [
    "무브러시 모터",
    "웜기어 관절"
   ],
   "sensors": [],
   "io": [
    "CAN",
    "CAN FD"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 20자유도, 무브러시 모터와 웜기어 관절. 개폐 약 0.8초.",
   "source": "https://www.linkerhand.com/details/LinkerHandO30/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/linker-hand-o30-notion.webp",
    "w": 960,
    "h": 897,
    "alpha": true,
    "bg": null,
    "creditName": "Linkerbot",
    "creditUrl": "https://www.linkerhand.com/details/LinkerHandO30/"
   },
   "other": [
    "전원 DC 24–48 V",
    "반복정밀도 ±0.20 mm",
    "최대 전력 150 W",
    "정적 전류 0.4 A @24 V",
    "네 손가락 굽힘 속도 136.77°/s"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://www.linkerhand.com/details/LinkerHandO30/"
    },
    {
     "field": "rate",
     "url": "https://www.linkerhand.com/details/LinkerHandO30/"
    },
    {
     "field": "tipForce",
     "url": "https://www.linkerhand.com/details/LinkerHandO30/"
    },
    {
     "field": "gripForce",
     "url": "https://www.linkerhand.com/details/LinkerHandO30/"
    },
    {
     "field": "payload",
     "url": "https://www.linkerhand.com/details/LinkerHandO30/"
    },
    {
     "field": "io",
     "url": "https://www.linkerhand.com/details/LinkerHandO30/"
    },
    {
     "field": "other",
     "url": "https://www.linkerhand.com/details/LinkerHandO30/"
    }
   ]
  },
  {
   "id": "wuji-hand-v1",
   "model": "Wuji Hand v1",
   "maker": "Wuji Technology",
   "makerGroup": "Wuji Technology",
   "location": "중국·선전",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 20,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": 20,
   "actuators": null,
   "tipForce": "15 N",
   "gripForce": null,
   "payload": "10 kg (전체 손 정적 파지 최대) / 손가락당 3 kg (후크)",
   "forceOther": null,
   "weight": "580 ± 10 g (케이블 제외)",
   "weightG": 10,
   "rate": "1 kHz (×20축)",
   "stroke": null,
   "speed": "개폐 최소 약 0.3 s",
   "drive": [
    "자기잠금 회전 직접 구동 관절",
    "FOC 벡터 제어"
   ],
   "sensors": [
    "촉각 센싱 장갑 (옵션, 400개 이상 압저항 센서)"
   ],
   "io": [
    "USB 2.0 (USB-C)",
    "Python SDK (wujihandpy)",
    "C++ SDK (wujihandcpp)"
   ],
   "control": [],
   "notes": [
    "손가락당 4축"
   ],
   "specs": "손가락당 4축, 능동 20자유도. 제조사 표기 손끝 힘 15N.",
   "source": "https://docs.wuji.tech/docs/en/wuji-hand/v1/overview/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/wuji-hand-v1-notion.webp",
    "w": 354,
    "h": 428,
    "alpha": true,
    "bg": null,
    "creditName": "Wuji Technology",
    "creditUrl": "https://docs.wuji.tech/docs/en/wuji-hand/v1/overview/"
   },
   "other": [
    "전원 12–20 V DC",
    "크기 201 × 75 × 50 mm",
    "IP40",
    "반복정밀도 ±1 mm",
    "최대 파지 직경 100 mm",
    "알루미늄 합금 셸"
   ],
   "web": [
    {
     "field": "joints",
     "url": "https://docs.wuji.tech/docs/en/wuji-hand/v1/overview/"
    },
    {
     "field": "weight",
     "url": "https://docs.wuji.tech/docs/en/wuji-hand/v1/overview/"
    },
    {
     "field": "rate",
     "url": "https://docs.wuji.tech/docs/en/wuji-hand/v1/overview/"
    },
    {
     "field": "payload",
     "url": "https://docs.wuji.tech/docs/en/wuji-hand/v1/overview/"
    },
    {
     "field": "speed",
     "url": "https://docs.wuji.tech/docs/en/wuji-hand/v1/overview/"
    },
    {
     "field": "sensors",
     "url": "https://docs.wuji.tech/docs/en/wuji-hand/v1/overview/"
    },
    {
     "field": "io",
     "url": "https://docs.wuji.tech/docs/en/wuji-hand/v1/overview/"
    },
    {
     "field": "drive",
     "url": "https://docs.wuji.tech/docs/en/wuji-hand/v1/overview/"
    },
    {
     "field": "other",
     "url": "https://docs.wuji.tech/docs/en/wuji-hand/v1/overview/"
    }
   ]
  },
  {
   "id": "d-hand-5st",
   "model": "D-Hand 5ST",
   "maker": "Double Giken",
   "makerGroup": "Double Giken",
   "location": "일본·가나가와현",
   "countries": [
    "일본"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "6",
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": "손가락당 약 19.6 N (약 2 kgf)",
   "payload": null,
   "forceOther": null,
   "weight": "450 g",
   "weightG": 450,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "각 손가락 독립 구동"
   ],
   "sensors": [
    "위치·전류·온도 실시간 모니터링"
   ],
   "io": [
    "2.4 GHz 무선",
    "UART",
    "CAN (옵션)",
    "Python",
    "ROS 2"
   ],
   "control": [],
   "notes": [
    "손가락 움직임 제어로 집기·감싸기"
   ],
   "specs": "손가락의 움직임을 제어해 물체를 집거나 감싸는 다관절 핸드.",
   "source": "https://j-d.co.jp/dhand-5finger.html",
   "research": [],
   "photo": {
    "src": "assets/img/hands/d-hand-5st-notion.webp",
    "w": 560,
    "h": 560,
    "alpha": false,
    "bg": null,
    "creditName": "Double Giken",
    "creditUrl": "https://j-d.co.jp/dhand-5finger.html"
   },
   "other": [],
   "web": [
    {
     "field": "weight",
     "url": "https://j-d.co.jp/dhand-5finger.html"
    },
    {
     "field": "gripForce",
     "url": "https://j-d.co.jp/dhand-5finger.html"
    },
    {
     "field": "sensors",
     "url": "https://j-d.co.jp/dhand-5finger.html"
    },
    {
     "field": "io",
     "url": "https://j-d.co.jp/dhand-5finger.html"
    },
    {
     "field": "drive",
     "url": "https://j-d.co.jp/dhand-5finger.html"
    },
    {
     "field": "dofStated",
     "url": "https://j-d.co.jp/dhand-5finger.html"
    }
   ]
  },
  {
   "id": "linker-hand-l30-pro",
   "model": "Linker Hand L30 Pro",
   "maker": "Linkerbot",
   "makerGroup": "Linkerbot",
   "location": "중국·베이징",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 17,
   "activeDofNote": null,
   "passiveDof": 4,
   "totalDof": 21,
   "dofStated": "22",
   "joints": null,
   "actuators": null,
   "tipForce": "엄지 6.5 N / 네 손가락 9 N",
   "gripForce": "최대 39 N (5지)",
   "payload": "15 kg (최대)",
   "forceOther": null,
   "weight": "약 1.2 kg",
   "weightG": 1200,
   "rate": "900 Hz",
   "stroke": null,
   "speed": "개폐 약 0.2 s",
   "drive": [
    "텐던 구동"
   ],
   "sensors": [
    "고분해능 엔코더",
    "촉각 센서 어레이 (손끝)"
   ],
   "io": [
    "CAN FD"
   ],
   "control": [],
   "notes": [],
   "specs": "제조사 표기 22자유도, 텐던 구동, 약 1.2kg, 개폐 약 0.2초.",
   "source": "https://www.linkerhand.com/details/LinkerHandL30/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/linker-hand-l30-pro-notion.webp",
    "w": 960,
    "h": 959,
    "alpha": true,
    "bg": null,
    "creditName": "Linkerbot",
    "creditUrl": "https://www.linkerhand.com/details/LinkerHandL30/"
   },
   "other": [
    "전원 DC 24 V ±10%",
    "반복정밀도 ±0.2 mm",
    "관절 속도 400°/s 이상 (엄지 굽힘 450.35°/s, 네 손가락 굽힘 363.6°/s)"
   ],
   "web": [
    {
     "field": "activeDof",
     "url": "https://www.linkerhand.com/details/LinkerHandL30/"
    },
    {
     "field": "passiveDof",
     "url": "https://www.linkerhand.com/details/LinkerHandL30/"
    },
    {
     "field": "rate",
     "url": "https://www.linkerhand.com/details/LinkerHandL30/"
    },
    {
     "field": "tipForce",
     "url": "https://www.linkerhand.com/details/LinkerHandL30/"
    },
    {
     "field": "gripForce",
     "url": "https://www.linkerhand.com/details/LinkerHandL30/"
    },
    {
     "field": "payload",
     "url": "https://www.linkerhand.com/details/LinkerHandL30/"
    },
    {
     "field": "sensors",
     "url": "https://www.linkerhand.com/details/LinkerHandL30/"
    },
    {
     "field": "io",
     "url": "https://www.linkerhand.com/details/LinkerHandL30/"
    },
    {
     "field": "other",
     "url": "https://www.linkerhand.com/details/LinkerHandL30/"
    }
   ]
  },
  {
   "id": "dlr-hit-hand-i-schunk-sah",
   "model": "DLR/HIT Hand I (SCHUNK SAH)",
   "maker": "DLR / 하얼빈공업대",
   "makerGroup": "DLR",
   "location": "독일·오버파펜호펜 / 중국·하얼빈",
   "countries": [
    "독일",
    "중국"
   ],
   "kind": "4지형 로봇핸드",
   "fingers": 4,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "13",
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "전동 (BLDC)"
   ],
   "sensors": [
    "관절 위치·힘 감지"
   ],
   "io": [
    "고속 실시간 시리얼 버스 (FPGA, 25 Mbps)",
    "PCI 보드 DSP 제어"
   ],
   "control": [],
   "notes": [
    "대향 엄지 추가 구동"
   ],
   "specs": "13자유도. 네 손가락의 관절 위치·힘 감지, 대향 엄지 추가 구동.",
   "source": "https://www.dlr.de/en/rm/research/robotic-systems/hands/dlr-hit-hand",
   "research": [
    "https://elib.dlr.de/55334/1/DLR-HIT-Hand-Liu-MeuselTransactions.pdf"
   ],
   "photo": {
    "src": "assets/img/hands/dlr-hit-hand-i-schunk-sah-notion.webp",
    "w": 200,
    "h": 298,
    "alpha": false,
    "bg": null,
    "creditName": "DLR",
    "creditUrl": "https://www.dlr.de/en/rm/research/robotic-systems/hands/dlr-hit-hand"
   },
   "other": [
    "손가락당 관절 4개·구동기 3개 (엄지에 구동기 1개 추가)",
    "관절마다 비접촉 자기식 각도 센서 + 스트레인게이지 토크 센서"
   ],
   "web": [
    {
     "field": "drive",
     "url": "https://www.dlr.de/en/rm/research/robotic-systems/hands/dlr-hit-hand"
    },
    {
     "field": "io",
     "url": "https://www.dlr.de/en/rm/research/robotic-systems/hands/dlr-hit-hand"
    },
    {
     "field": "other",
     "url": "https://www.dlr.de/en/rm/research/robotic-systems/hands/dlr-hit-hand"
    }
   ]
  },
  {
   "id": "linker-hand-o6",
   "model": "Linker Hand O6",
   "maker": "Linkerbot",
   "makerGroup": "Linkerbot",
   "location": "중국·베이징",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": 5,
   "totalDof": 11,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "엄지 20 N / 네 손가락 25 N",
   "gripForce": "최대 70 N (5지)",
   "payload": "50 kg (최대)",
   "forceOther": null,
   "weight": "360 g",
   "weightG": 360,
   "rate": null,
   "stroke": null,
   "speed": "네 손가락 굽힘 74.75°/s, 엄지 굽힘 38°/s, 엄지 측면 스윙 78.10°/s",
   "drive": [
    "웜기어 기반"
   ],
   "sensors": [
    "촉각 센서 (옵션)"
   ],
   "io": [
    "CAN",
    "CAN FD",
    "RS-485",
    "EtherCAT"
   ],
   "control": [],
   "notes": [
    "경량 적응 파지 모델"
   ],
   "specs": "능동 6축·수동 5축, 웜기어 기반. 경량 적응 파지 모델.",
   "source": "https://www.linkerhand.com/details/LinkerHandO6/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/linker-hand-o6-notion.webp",
    "w": 372,
    "h": 521,
    "alpha": true,
    "bg": null,
    "creditName": "Linkerbot",
    "creditUrl": "https://www.linkerhand.com/details/LinkerHandO6/"
   },
   "other": [
    "전원 24–48 V",
    "반복정밀도 ±0.2 mm 미만",
    "네 손가락 굽힘 각도 92.59°",
    "구동·제어 일체형 서보 모듈"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://www.linkerhand.com/details/LinkerHandO6/"
    },
    {
     "field": "tipForce",
     "url": "https://www.linkerhand.com/details/LinkerHandO6/"
    },
    {
     "field": "gripForce",
     "url": "https://www.linkerhand.com/details/LinkerHandO6/"
    },
    {
     "field": "payload",
     "url": "https://www.linkerhand.com/details/LinkerHandO6/"
    },
    {
     "field": "speed",
     "url": "https://www.linkerhand.com/details/LinkerHandO6/"
    },
    {
     "field": "sensors",
     "url": "https://www.linkerhand.com/details/LinkerHandO6/"
    },
    {
     "field": "io",
     "url": "https://www.linkerhand.com/details/LinkerHandO6/"
    },
    {
     "field": "other",
     "url": "https://www.linkerhand.com/details/LinkerHandO6/"
    }
   ]
  },
  {
   "id": "fthand-12",
   "model": "FTHand-12",
   "maker": "FutureTakt",
   "makerGroup": "FutureTakt",
   "location": "중국·저장성 사오싱",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": 6,
   "totalDof": 12,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": "엄지 14 N / 네 손가락 25 N",
   "gripForce": "최대 100 N (5지)",
   "payload": "20 kg",
   "forceOther": null,
   "weight": "550 g",
   "weightG": 550,
   "rate": null,
   "stroke": null,
   "speed": "최소 개폐 1.2 s",
   "drive": [
    "링크 구동"
   ],
   "sensors": [
    "촉각 센서 (엄지·검지·중지; 법선력·접선력·근접 감지, 0–25 N)"
   ],
   "io": [
    "CAN",
    "ROS 2"
   ],
   "control": [],
   "notes": [
    "부품 파지·조립용"
   ],
   "specs": "능동 6·수동 6자유도. 부품 파지와 조립용.",
   "source": "https://www.futuretakt.com/sys-pd/38.html",
   "research": [],
   "photo": {
    "src": "assets/img/hands/fthand-12-notion.webp",
    "w": 960,
    "h": 528,
    "alpha": false,
    "bg": null,
    "creditName": "FutureTakt",
    "creditUrl": "https://www.futuretakt.com/sys-pd/38.html"
   },
   "other": [
    "전원 DC 24 V ±10%",
    "크기 185×78.5×36 mm (손목 13.5 mm 포함)",
    "반복정밀도 ±0.2 mm",
    "알루미늄 합금 골격",
    "위치·토크 제어"
   ],
   "web": [
    {
     "field": "weight",
     "url": "https://www.futuretakt.com/sys-pd/38.html"
    },
    {
     "field": "tipForce",
     "url": "https://www.futuretakt.com/sys-pd/38.html"
    },
    {
     "field": "gripForce",
     "url": "https://www.futuretakt.com/sys-pd/38.html"
    },
    {
     "field": "payload",
     "url": "https://www.futuretakt.com/sys-pd/38.html"
    },
    {
     "field": "speed",
     "url": "https://www.futuretakt.com/sys-pd/38.html"
    },
    {
     "field": "sensors",
     "url": "https://www.futuretakt.com/sys-pd/38.html"
    },
    {
     "field": "io",
     "url": "https://www.futuretakt.com/sys-pd/38.html"
    },
    {
     "field": "drive",
     "url": "https://www.futuretakt.com/sys-pd/38.html"
    },
    {
     "field": "other",
     "url": "https://www.futuretakt.com/sys-pd/38.html"
    }
   ]
  },
  {
   "id": "cdh-mo-5-16-e0",
   "model": "CDH-MO-5-16-E0",
   "maker": "JODELL Robotics",
   "makerGroup": "JODELL Robotics",
   "location": "중국·장쑤성 쑤저우",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": 6,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 16,
   "dofStated": null,
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [],
   "sensors": [
    "손가락 3D 힘 센서 (구성 가능)"
   ],
   "io": [
    "EtherCAT"
   ],
   "control": [],
   "notes": [],
   "specs": "능동 6·총 16자유도, EtherCAT, 손가락 3D 힘 센서 구성 가능.",
   "source": "https://cobotglobal.com/product-detail/agile-hand-series/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/cdh-mo-5-16-e0-notion.webp",
    "w": 483,
    "h": 483,
    "alpha": false,
    "bg": null,
    "creditName": "JODELL Robotics",
    "creditUrl": "https://cobotglobal.com/product-detail/agile-hand-series/"
   },
   "other": [],
   "web": []
  },
  {
   "id": "leap-hand-v2-standard",
   "model": "LEAP Hand v2 Standard",
   "maker": "Carnegie Mellon University",
   "makerGroup": "Carnegie Mellon University",
   "location": "미국·피츠버그",
   "countries": [
    "미국"
   ],
   "kind": "4지형 로봇핸드",
   "fingers": 4,
   "activeDof": 8,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": 16,
   "dofStated": null,
   "joints": null,
   "actuators": 8,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "텐던 + 유연 관절 연동"
   ],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "3D 프린팅 설계"
   ],
   "specs": "모터 8개, 텐던과 유연 관절로 연동 구동. 3D 프린팅 설계.",
   "source": "https://v2.leaphand.com/",
   "research": [
    "https://www.roboticsproceedings.org/rss21/p132.html"
   ],
   "photo": {
    "src": "assets/img/hands/leap-hand-v2-standard-notion.webp",
    "w": 777,
    "h": 960,
    "alpha": false,
    "bg": null,
    "creditName": "Carnegie Mellon University",
    "creditUrl": "https://v2.leaphand.com/"
   },
   "other": [
    "TPU+PLA 다중소재 3D 프린팅",
    "사람 손 크기",
    "URDF·시뮬레이션 예제, MANO/Vision Pro 리타게팅, Manus 글러브 원격조작 지원"
   ],
   "web": [
    {
     "field": "totalDof",
     "url": "https://v2.leaphand.com/"
    },
    {
     "field": "activeDof",
     "url": "https://v2.leaphand.com/"
    },
    {
     "field": "other",
     "url": "https://v2.leaphand.com/"
    }
   ]
  },
  {
   "id": "d-hand-5pt",
   "model": "D-Hand 5PT",
   "maker": "Double Giken",
   "makerGroup": "Double Giken",
   "location": "일본·가나가와현 후지사와",
   "countries": [
    "일본"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": null,
   "joints": null,
   "actuators": 1,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "모터 1개 연동"
   ],
   "sensors": [],
   "io": [],
   "control": [],
   "notes": [
    "물체 형상에 맞춰 감싸 쥐는 구조"
   ],
   "specs": "모터 1개로 손가락을 연동해 물체 형상에 맞춰 감싸 쥐는 구조.",
   "source": "https://webmagazine.nedo.go.jp/practical-realization/articles/202403DG/",
   "research": [],
   "photo": {
    "src": "assets/img/hands/d-hand-5pt-notion.webp",
    "w": 960,
    "h": 640,
    "alpha": false,
    "bg": null,
    "creditName": "Double Giken",
    "creditUrl": "https://webmagazine.nedo.go.jp/practical-realization/articles/202403DG/"
   },
   "other": [],
   "web": []
  },
  {
   "id": "xiaoyao-dexterous-hand",
   "model": "Xiaoyao Dexterous Hand",
   "maker": "Shenzhen FRD",
   "makerGroup": "Shenzhen FRD",
   "location": "중국·선전",
   "countries": [
    "중국"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "28 (손 전체)",
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [],
   "sensors": [
    "촉각·관절 상태 감지"
   ],
   "io": [],
   "control": [],
   "notes": [
    "강성·유연 구조 결합"
   ],
   "specs": "손 부분 전체 28자유도로 표기. 촉각·관절 상태 감지, 강성과 유연 구조 결합.",
   "source": "https://www.frd.cn/prod_view.aspx?FId=t3%3A80%3A3&Id=206&TypeId=80",
   "research": [],
   "photo": {
    "src": "assets/img/hands/xiaoyao-dexterous-hand-notion.webp",
    "w": 214,
    "h": 403,
    "alpha": true,
    "bg": null,
    "creditName": "Shenzhen FRD",
    "creditUrl": "https://www.frd.cn/prod_view.aspx?FId=t3%3A80%3A3&Id=206&TypeId=80"
   },
   "other": [
    "촉각 감지 어레이 6개",
    "소프트 관절·소프트 지절",
    "본체감지 구동·제어 일체 설계"
   ],
   "web": [
    {
     "field": "other",
     "url": "https://www.frd.cn/prod_view.aspx?FId=t3%3A80%3A3&Id=206&TypeId=80"
    }
   ]
  },
  {
   "id": "orcahand-lite",
   "model": "orcahand Lite",
   "maker": "ORCA Dexterity",
   "makerGroup": "ORCA Dexterity",
   "location": "스위스·취리히",
   "countries": [
    "스위스"
   ],
   "kind": "5지형 로봇핸드",
   "fingers": 5,
   "activeDof": null,
   "activeDofNote": null,
   "passiveDof": null,
   "totalDof": null,
   "dofStated": "9",
   "joints": null,
   "actuators": null,
   "tipForce": null,
   "gripForce": null,
   "payload": null,
   "forceOther": null,
   "weight": null,
   "weightG": null,
   "rate": null,
   "stroke": null,
   "speed": null,
   "drive": [
    "텐던 연동 (손가락·일부 벌림)"
   ],
   "sensors": [
    "촉각 센서 없음"
   ],
   "io": [],
   "control": [],
   "notes": [],
   "specs": "9자유도, 손가락과 일부 벌림 동작을 텐던으로 연동. 촉각 센서 없음.",
   "source": "https://www.orcahand.com/models/lite",
   "research": [],
   "photo": {
    "src": "assets/img/hands/orcahand-lite-notion.webp",
    "w": 249,
    "h": 800,
    "alpha": true,
    "bg": null,
    "creditName": "ORCA Dexterity",
    "creditUrl": "https://www.orcahand.com/models/lite"
   },
   "other": [],
   "web": []
  }
 ]
};

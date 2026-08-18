/* =====================================================================
   แคตตาล็อกสินค้า LG Subscribe — ตรวจทานเทียบ PDF ครบถ้วน (ส.ค. 2569)
   - Price list_Aug_V3.pdf (ราคาเต็ม: Visit/Self บิลแรก ฿149 + โปร 50%)
   - Sale Price8 - Subscription_V3.pdf (OBS: โปร 50% เดือน 1-3 / 1-8,
     ทีวี/จอ/ลำโพงไม่รับบริการ: งวดแรก 50% เดือน 1-12 + โปร 50% ต่อ)
   แผน (plans): { label, months (จำนวนเดือนตามสัญญา: 5ปี=60, 6ปี=72, 7ปี=84),
                  price (฿/เดือน), promo }
   ===================================================================== */

window.LG_PRODUCTS = [
  {
    id: "wd516an",
    model: "WD516AN",
    name: "เครื่องกรองน้ำ LG PuriCare รุ่น WD516AN",
    category: "เครื่องกรองน้ำ",
    emoji: "🌀",
    plans: [
      { label: "Outright ผ่อน 9 งวด", months: 9, price: 3790, promo: "ราคาเต็ม ฿37,900 ลด 10% = ฿34,110" },
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 799, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 699, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Visit 7 ปี (84 เดือน)", months: 84, price: 599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 7 ปี (84 เดือน)", months: 84, price: 499, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" }
    ]
  },
  {
    id: "wd518an",
    model: "WD518AN",
    name: "เครื่องกรองน้ำ LG PuriCare รุ่น WD518AN",
    category: "เครื่องกรองน้ำ",
    emoji: "🌀",
    plans: [
      { label: "Outright ผ่อน 9 งวด", months: 9, price: 3490, promo: "ราคาเต็ม ฿34,900 ลด 10% = ฿31,410" },
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 799, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 699, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Visit 7 ปี (84 เดือน)", months: 84, price: 599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 7 ปี (84 เดือน)", months: 84, price: 499, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" }
    ]
  },
  {
    id: "wd110mn",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/water-purifier/2024/wd110mn-abgplmt/gallery/01-basic/wp-mx-wd110mn-calmingbeige-basic-large.jpg",
    model: "WD110MN",
    name: "เครื่องกรองน้ำ LG PuriCare รุ่น WD110MN",
    category: "เครื่องกรองน้ำ",
    emoji: "🚰",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 549, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 499, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Visit 7 ปี (84 เดือน)", months: 84, price: 449, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 7 ปี (84 เดือน)", months: 84, price: 399, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" }
    ]
  },
  {
    id: "a9t-ultra",
    img: "https://www.lg.com/content/dam/channel/wcms/th/images/vacuum-cleaner/a9t-ultra_dcbpeth_eath_th_c/Basic-450.jpg",
    model: "A9T-ULTRA",
    name: "เครื่องดูดฝุ่น LG CordZero™ รุ่น A9T-ULTRA แบบด้ามจับ All-in-One Tower พร้อม Smart WI-FI control",
    category: "เครื่องดูดฝุ่น",
    emoji: "🧹",
    plans: [
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 749, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "a9t-core",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/vacuum-cleaner/2025/a9t-core-dcgpeth/gallery/02_A9T-CORE_TH_Front_450.jpg",
    model: "A9T-CORE",
    name: "เครื่องดูดฝุ่น LG CordZero™ รุ่น A9T-CORE แบบด้ามจับ All-in-One Tower",
    category: "เครื่องดูดฝุ่น",
    emoji: "🧹",
    plans: [
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 649, promo: "บิลแรก ฿149" }
    ]
  },
  {
    id: "a9t-lite",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/vacuum-cleaner/2025/a9t-lite-dcgpeth/gallery/02_All-in-one_Tower_CalmingGreen_S9JGGTDWH_A9T-CORE_TH_Front-450.jpg",
    model: "A9T-LITE",
    name: "เครื่องดูดฝุ่น LG CordZero™ รุ่น A9T-LITE แบบด้ามจับ All-in-One Tower",
    category: "เครื่องดูดฝุ่น",
    emoji: "🧹",
    plans: [
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 549, promo: "บิลแรก ฿149" }
    ]
  },
  {
    id: "gc-l257kqkw",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/refrigerator/2024/gc-l257kqkw-aepplmt/gallery/GC-L257KQKW_Front_450.jpg",
    model: "GC-L257KQKW",
    name: "ตู้เย็น Side by Side GC-L257KQKW 22.4 คิว",
    category: "ตู้เย็น Side by Side",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 749, promo: "โปร 50% เดือน 1-3" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 649, promo: "โปร 50% เดือน 1-3" }
    ]
  },
  {
    id: "gc-b257sqyl",
    img: "https://www.lg.com/content/dam/channel/wcms/th/images/refrigerator/2023/gc-b257sqyl/GC-B257SQYL-450.jpg",
    model: "GC-B257SQYL",
    name: "ตู้เย็น Side by Side GC-B257SQYL 22.9 คิว",
    category: "ตู้เย็น Side by Side",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 549, promo: "บิลแรก ฿149" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 449, promo: "บิลแรก ฿149" }
    ]
  },
  {
    id: "gc-x257cmhw",
    model: "GC-X257CMHW",
    name: "ตู้เย็น Side by Side ขนาด 22.4 คิว ระบบ Inverter Compressor",
    category: "ตู้เย็น Side by Side",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1449, promo: "บิลแรก ฿149" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 1249, promo: "บิลแรก ฿149" }
    ]
  },
  {
    id: "gc-l257sfzw",
    img: "https://www.lg.com/content/dam/channel/wcms/th/images/refrigerator/2023/gc-l257sfzw/gallery/450x450/01_VS6_L_Good++GC-L257SFZL_PY_NonPlumbing_Front.jpg",
    model: "GC-L257SFZW",
    name: "ตู้เย็น Side-by-Side 22.4 คิว รองรับ Smart Wi-Fi",
    category: "ตู้เย็น Side by Side",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 849, promo: "บิลแรก ฿149" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 749, promo: "บิลแรก ฿149" }
    ]
  },
  {
    id: "gc-x257cmew",
    img: "https://www.lg.com/content/dam/channel/wcms/th/images/refrigerator/2023/gc-x257cmew/gallery/450x450/01_VS6_X_Best_GC-X257CMEW_NonPlumbing_TE_Front_On_Food.jpg",
    model: "GC-X257CMEW",
    name: "ตู้เย็น InstaView Side by Side 22.4 คิว GC-X257CMEW Smart Inverter Compressor™",
    category: "ตู้เย็น Side by Side",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1249, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 1049, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "gc-j257sqzw",
    img: "https://www.lg.com/content/dam/channel/wcms/th/images/refrigerator/2023/gc-j257sqzw/GC-J257SQZW_450.jpg",
    model: "GC-J257SQZW",
    name: "ตู้เย็น Side by Side GC-J257SQZW 22.4 คิว",
    category: "ตู้เย็น Side by Side",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1049, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 899, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "gv-b25ffgdb",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/refrigerator/2025/gv-b25ffgdb-abmplmt/05_T-VN6_Good_GV-B25FFGDB_BM_Front_450.jpg",
    model: "GV-B25FFGDB",
    name: "ตู้เย็น Multi-Door GV-B25FFGDB ขนาด 21.6 คิว ระบบ Smart Inverter Compressor",
    category: "ตู้เย็น Multi-Door",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 699, promo: "บิลแรก ฿149" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 599, promo: "บิลแรก ฿149" }
    ]
  },
  {
    id: "gc-l24ffcbb",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/refrigerator/2025/gc-l24ffcbb-aevplm1/gallery/basic/basic-450.jpg",
    model: "GC-L24FFCBB + MS2032GAS",
    name: "ตู้เย็น Multi-Door GC-L24FFCBB 22.6 คิว ระบบ Smart Inverter Compressor",
    category: "ตู้เย็น Multi-Door",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1249, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 1049, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "gc-g24ffqkb",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/refrigerator/2025/gc-g24ffqkb-aeeplm1/gallery-new/GC-G24FFQKB-NEW-450-09.jpg",
    model: "GC-G24FFQKB",
    name: "ตู้เย็น InstaView Multi-Door 22.5 คิว GC-G24FFQKB Smart Inverter Compressor",
    category: "ตู้เย็น Multi-Door",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1349, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 1149, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "gc-v22ffqmb",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/refrigerator/2024/gc-v22ffqmb/gallery/01-basic/ref-f-next8-gc-v22ffqmb-large-01-front.png",
    model: "GC-V22FFQMB",
    name: "ตู้เย็น InstaView Multi-Door 18.7 คิว GC-V22FFQMB Smart Inverter",
    category: "ตู้เย็น Multi-Door",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 949, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 799, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "gc-b48fpgam",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/refrigerator/2026/gc-b48fpgam-adbplmt/gallery/basic/multi-door-richome-2026-gcfb48fpgam-blackglass-gallery-basic-large.jpg",
    model: "GC-B48FPGAM",
    name: "ตู้เย็น Multi-Door ขนาด 17.4 คิว ระบบ Inverter Compressor",
    category: "ตู้เย็น Multi-Door",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 799, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 699, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "gv-v25ffgrb",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/refrigerator/2025/gv-v25ffgrb-abmplmt/gallery/01_GV-V25FFGRB_LFB61BLGAI_Front_Food_450.jpg",
    model: "GV-V25FFGRB",
    name: "ตู้เย็น InstaView Multi-Door 21.6 คิว GV-V25FFGRB Smart Inverter Compressor",
    category: "ตู้เย็น Multi-Door",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 999, promo: "บิลแรก ฿149" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 949, promo: "บิลแรก ฿149" }
    ]
  },
  {
    id: "gn-f392pqak",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/refrigerator/2025/gn-f392pqak-aepplm1/gallery/01_GN-F392PQAK_GT-F3953EP_EP_Front_450.jpg",
    model: "GN-F392PQAK",
    name: "ตู้เย็น 2 ประตู 13.9 คิว Smart Inverter Compressor",
    category: "ตู้เย็น 2 ประตู",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 449, promo: "โปร 50% เดือน 1-3" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 349, promo: "โปร 50% เดือน 1-3" }
    ]
  },
  {
    id: "gn-f452pqak",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/refrigerator/2024/gn-f452pqak/450.jpg",
    model: "GN-F452PQAK",
    name: "ตู้เย็น 2 ประตู ขนาด 16.2 คิว ระบบ Smart Inverter",
    category: "ตู้เย็น 2 ประตู",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 499, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "gn-v389fqef",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/refrigerator/2025/gn-v389fqef-aepplmt/gallery/450/01_GN-V389FQEF_GB-V300MBL_EP_Front_450.jpg",
    model: "GN-V389FQEF",
    name: "ตู้เย็น 2 ประตู InstaView 12 คิว ระบบ Smart Inverter",
    category: "ตู้เย็น 2 ประตู",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 649, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 549, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "wt2520nheg",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/washing-machine/2026/wt2520nheg-abgpeth/gallery/wt2520nheg-450-0604.jpg",
    model: "WT2520NHEG",
    name: "เครื่องซักอบผ้า LG WashTower 25/20 กก. AI DD™ พร้อม Smart WI-FI control",
    category: "Wash Tower",
    emoji: "🌀",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 2399, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 2199, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 2199, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 1999, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" }
    ]
  },
  {
    id: "wt2116sheg",
    img: "https://www.lg.com/content/dam/channel/wcms/th/images/washing-machine/wt2116sheg_abgpeth_eath_th_c/thumbnail/350-001-wt2116sheg.jpg",
    model: "WT2116SHEG",
    name: "เครื่องซักอบผ้า LG WashTower 21/16 กก. AI DD™ พร้อม Smart WI-FI control",
    category: "Wash Tower",
    emoji: "🌀",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1999, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 1899, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 1749, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 1649, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" }
    ]
  },
  {
    id: "wt1410nheg",
    img: "https://www.lg.com/content/dam/channel/wcms/th/images/washing-machine/wt1410nheg_abgpeth_eath_th_c/WT1410NHEG_ABGPETH_EATH_TH_C-450x450.jpg",
    model: "WT1410NHEG",
    name: "เครื่องซักอบผ้า LG WashTower 14/10 กก. AI DD™ พร้อม Smart WI-FI control",
    category: "Wash Tower",
    emoji: "🌀",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 1499, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 1399, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 1299, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" }
    ]
  },
  {
    id: "wt2520nhen",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/washing-machine/2026/wt2520nhen-abnpeth/gallery/wt2520nhen-450.jpg",
    model: "WT2520NHEN",
    name: "เครื่องซักอบผ้า LG WashTower 25/20 กก. (Navy/Beige) AI DD™ พร้อม Smart WI-FI control",
    category: "Wash Tower",
    emoji: "🌀",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 2399, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 2199, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 2199, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 1999, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" }
    ]
  },
  {
    id: "wt1410nhen",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/washing-machine/2025/wt1410nhen-anbppth/wt1410nhen/350-02.jpg",
    model: "WT1410NHEN",
    name: "เครื่องซักอบผ้า LG WashTower 14/10 กก. (Navy/Beige) AI DD™ พร้อม Smart WI-FI control",
    category: "Wash Tower",
    emoji: "🌀",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 1499, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 1399, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 1299, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-12" }
    ]
  },
  {
    id: "fv1409h4w",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/washing-machine/2024/fv1409h4w-abwpeth/gallery/450.jpg",
    model: "FV1409H4W",
    name: "เครื่องซักผ้า FV1409H4W ซัก 9 กก. / อบ 5 กก.",
    category: "เครื่องซักผ้า ฝาหน้า",
    emoji: "🌀",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 399, promo: "โปร 50% เดือน 1-8" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 349, promo: "โปร 50% เดือน 1-8" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 349, promo: "โปร 50% เดือน 1-8" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 299, promo: "โปร 50% เดือน 1-8" }
    ]
  },
  {
    id: "f2520rntb",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/washing-machine/2025/f2520rntb-aebpeth/gallery/basic_450_image_new.jpg",
    model: "F2520RNTB",
    name: "เครื่องซักผ้าฝาหน้า ซัก 20 / อบ 10 กก. F2520RNTB ระบบ AI DD™",
    category: "เครื่องซักผ้า ฝาหน้า",
    emoji: "🌀",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 899, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 849, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 849, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 799, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "fv1413h4m",
    img: "https://www.lg.com/content/dam/channel/wcms/th/images/washing-machine/fv1413h4m_ambpeth_eath_th_c/450.jpg",
    model: "FV1413H4M",
    name: "เครื่องซักผ้า 13 กก. / อบ 8 กก. ระบบ AI DD™ พร้อม Smart WI-FI control",
    category: "เครื่องซักผ้า ฝาหน้า",
    emoji: "🌀",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 749, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 649, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 649, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "fv1413s4m",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/washing-machine/2024/fv1413s4m-ambpeth/gallery/FV1413S4M-01-450.jpg",
    model: "FV1413S4M",
    name: "เครื่องซักผ้า 13 กก. AI DD™",
    category: "เครื่องซักผ้า ฝาหน้า",
    emoji: "🌀",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 699, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 549, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "tx2723st5j",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/washing-machine/2025/tx2723st5j-apbpeth/basic_450_new_image.jpg",
    model: "TX2723ST5J",
    name: "เครื่องซักผ้าฝาบน 23 กก. ระบบ Inverter Direct Drive",
    category: "เครื่องซักผ้า ฝาบน",
    emoji: "🌀",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 649, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 549, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "tx2315dt5g",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/washing-machine/2026/tx2315dt5g-degpeth/gallery/top-loading-washing-machine-tx-2026-t95x4ehdc4-tx2315dt5g-th-e-graphite-15kg-01-front_450.jpg",
    model: "TX2315DT5G",
    name: "เครื่องซักผ้าฝาบน 15 กก. ระบบ Inverter Direct Drive",
    category: "เครื่องซักผ้า ฝาบน",
    emoji: "🌀",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 549, promo: "บิลแรก ฿149" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 449, promo: "บิลแรก ฿149" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 499, promo: "บิลแรก ฿149" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 399, promo: "บิลแรก ฿149" }
    ]
  },
  {
    id: "rv10vhp2b",
    img: "https://www.lg.com/content/dam/channel/wcms/th/images/washing-machine/rv10vhp2b_ablpeth_eath_th_c/450.jpg",
    model: "RV10VHP2B",
    name: "เครื่องอบผ้า ระบบ DUAL Inverter Heat Pump™ ความจุ 10 กก. พร้อม Smart WI-FI control",
    category: "เครื่องอบผ้า",
    emoji: "🌀",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 849, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 749, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 749, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 649, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "dfc335hm",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/dishwasher/dfc335hm/gallery/01_XD-G3_MatteBlack_DFC335HM_TH_Front-450.jpg",
    model: "DFC335HM",
    name: "เครื่องล้างจาน DFC335HM สีดำ มี WI-FI control",
    category: "เครื่องล้างจาน",
    emoji: "🍽️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 899, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 849, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 799, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 749, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "dfc533fv",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/dishwasher/dfc533fv/gallery/01_XD5_PS4_DFC533FV_TH_Front-450.jpg",
    model: "DFC533FV + MS2032GAS",
    name: "เครื่องล้างจาน DFC533FV สีเงิน WI-FI control",
    category: "เครื่องล้างจาน",
    emoji: "🍽️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 749, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 699, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 6 ปี (72 เดือน)", months: 72, price: 649, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "s3mfc",
    img: "https://www.lg.com/content/dam/channel/wcms/th/images/washing-machine/s3mfc_albpeth_eath_th_c/TH-450.jpg",
    model: "S3MFC",
    name: "LG Styler ตู้ถนอมผ้า",
    category: "ตู้ถนอมผ้า",
    emoji: "👔",
    plans: [
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 899, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Self 6 ปี (72 เดือน)", months: 72, price: 799, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "ms3032jas",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/microwave/2024/ms3032jas/gallery/01-basic/450x450/01-ms3032jas-front-450x450.jpg",
    model: "MS3032JAS",
    name: "ไมโครเวฟอุ่นอาหาร ขนาด 30 ลิตร สีดำ",
    category: "ไมโครเวฟ",
    emoji: "♨️",
    plans: [
      { label: "ไม่รับบริการ 6 ปี (72 เดือน)", months: 72, price: 89, promo: "" }
    ]
  },
  {
    id: "md19gqga1",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/dehumidifier/2025/md19gqga1/thumb-Dehu-19-450x450.jpg",
    model: "MD19GQGA1",
    name: "เครื่องลดความชื้น LG PuriCare Dehumidifier 19 (30 ลิตร)",
    category: "เครื่องลดความชื้น",
    emoji: "💧",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 449, promo: "โปร 50% เดือน 1-3" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 399, promo: "โปร 50% เดือน 1-3" }
    ]
  },
  {
    id: "dd23gmwe1",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/dehumidifier/2026/dd23gmwe1-ath/aircare_hk_dehumidifier_mojave_2024_gp1/gallery/01-basic/aircare-hk-dehumidifier-mojave-dd14gmwe0-gp1-basic-large.jpg",
    model: "DD23GMWE1 + AS30GGW10",
    name: "เครื่องลดความชื้น LG PuriCare Dehumidifier 23 (40 ลิตร) + AeroMini (ของแถม)",
    category: "เครื่องลดความชื้น",
    emoji: "💧",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 549, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "as35ggw10",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-puricare/2025/as35ggx0-abae/gallery/re-gallery/AP2025_AeroHit-Web-Thumbnail_450x450.jpg",
    model: "AS35GGW10",
    name: "เครื่องฟอกอากาศ LG PuriCare AeroHit 32 ตร.ม.",
    category: "เครื่องฟอกอากาศ",
    emoji: "💨",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 249, promo: "โปร 50% เดือน 1-3" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 199, promo: "" }
    ]
  },
  {
    id: "as25gcby0",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-puricare/2025/as25gcby0-abae/gallery/basic/air-purifier-aerocattower-2025-as207cbz0-gallery-basic-large.jpg",
    model: "AS25GCBY0",
    name: "เครื่องฟอกอากาศ LG PuriCare AeroCat Tower สีเบจ สำหรับน้องแมว",
    category: "เครื่องฟอกอากาศ",
    emoji: "🌬️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Self 5 ปี (60 เดือน)", months: 60, price: 549, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "as60ghwg0",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-puricare/2025/as60ghwg0/gallery/450.jpg",
    model: "AS60GHWG0",
    name: "เครื่องฟอกอากาศ LG PuriCare 360 Hit 61 ตร.ม.",
    category: "เครื่องฟอกอากาศ",
    emoji: "🌬️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 449, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Self 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 399, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 499, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Self 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 449, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "as65gdby0",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-puricare/2024/as65gdby0-abae/gallery/1.-360Alpha_AS651DBY0_Front-off-450.jpg",
    model: "AS65GDBY0",
    name: "เครื่องฟอกอากาศ LG PuriCare Alpha Pet 61.2 ตร.ม.",
    category: "เครื่องฟอกอากาศ",
    emoji: "🌬️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 749, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Self 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 699, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 799, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Self 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 749, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "as10gdby0",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-puricare/2024/as10gdby0-abae/gallery/1.-360Alpha_AS101DBY0_Front-off-450.jpg",
    model: "AS10GDBY0",
    name: "เครื่องฟอกอากาศ LG PuriCare Alpha Pet 104 ตร.ม.",
    category: "เครื่องฟอกอากาศ",
    emoji: "🌬️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 1149, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Self 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 1099, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 1199, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" },
      { label: "Self 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 1149, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-3" }
    ]
  },
  {
    id: "ixy11a",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/ixya/gallery/IXY11A_front_450.jpg",
    model: "IXY11A",
    name: "แอร์อินเวอร์เตอร์ 9,212 BTU LG DUALCOOL",
    category: "เครื่องปรับอากาศ IXY",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 499, promo: "บิลแรก ฿149 · ซับ 2 แถม 1" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 399, promo: "บิลแรก ฿149 · ซับ 2 แถม 1" }
    ]
  },
  {
    id: "ixy13a",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/ixya/gallery/IXY11A_front_450.jpg",
    model: "IXY13A",
    name: "แอร์อินเวอร์เตอร์ 12,283 BTU LG DUALCOOL",
    category: "เครื่องปรับอากาศ IXY",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 549, promo: "บิลแรก ฿149 · ซับ 2 แถม 1" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 449, promo: "บิลแรก ฿149 · ซับ 2 แถม 1" }
    ]
  },
  {
    id: "ixy18a",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/ixya/gallery/IXY11A_front_450.jpg",
    model: "IXY18A",
    name: "แอร์อินเวอร์เตอร์ 18,084 BTU LG DUALCOOL",
    category: "เครื่องปรับอากาศ IXY",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 699, promo: "บิลแรก ฿149 · ซับ 2 แถม 1" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 599, promo: "บิลแรก ฿149 · ซับ 2 แถม 1" }
    ]
  },
  {
    id: "ixy24a",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/ixya/gallery/IXY11A_front_450.jpg",
    model: "IXY24A",
    name: "แอร์อินเวอร์เตอร์ 21,154 BTU LG DUALCOOL",
    category: "เครื่องปรับอากาศ IXY",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 849, promo: "บิลแรก ฿149 · ซับ 2 แถม 1" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 749, promo: "บิลแรก ฿149 · ซับ 2 แถม 1" }
    ]
  },
  {
    id: "siq11b",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/siq/gallery/S1_S3NM121L1C0_Front_1_450.jpg",
    model: "SIQ11B",
    name: "แอร์อินเวอร์เตอร์ 9,212 BTU LG DUALCOOL AI Air",
    category: "เครื่องปรับอากาศ SIQ",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 699, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 599, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "siq13b",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/siq/gallery/S1_S3NM121L1C0_Front_1_450.jpg",
    model: "SIQ13B",
    name: "แอร์อินเวอร์เตอร์ 12,200 BTU LG DUALCOOL AI Air",
    category: "เครื่องปรับอากาศ SIQ",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 799, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 699, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "siq18b",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/siq/gallery/S1_S3NM121L1C0_Front_1_450.jpg",
    model: "SIQ18B",
    name: "แอร์ LG DUALCOOL AI 18,000 BTU รุ่น SIQ18B",
    category: "เครื่องปรับอากาศ SIQ",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 999, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 899, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "siq24b",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/siq/gallery/S1_S3NM121L1C0_Front_1_450.jpg",
    model: "SIQ24B",
    name: "แอร์อินเวอร์เตอร์ 22,178 BTU LG DUALCOOL AI Air",
    category: "เครื่องปรับอากาศ SIQ",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 1199, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 1099, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "saq11a",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2025/image-with-icon/saq/RAC2025-Web-Thumbnail_SAQ-450X450.jpg",
    model: "SAQ11A",
    name: "แอร์อินเวอร์เตอร์ 9,200 BTU LG DUALCOOL AI Air รุ่น SAQ11A",
    category: "เครื่องปรับอากาศ SAQ",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 899, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 799, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "saq13a",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2025/image-with-icon/saq/RAC2025-Web-Thumbnail_SAQ-450X450.jpg",
    model: "SAQ13A",
    name: "แอร์อินเวอร์เตอร์ 12,000 BTU LG DUALCOOL AI Air รุ่น SAQ13A",
    category: "เครื่องปรับอากาศ SAQ",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 949, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 849, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "saq18b",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2025/image-with-icon/saq/RAC2025-Web-Thumbnail_SAQ-450X450.jpg",
    model: "SAQ18B",
    name: "แอร์ LG DUALCOOL AI 18,000 BTU รุ่น SAQ18B",
    category: "เครื่องปรับอากาศ SAQ",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 1149, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 1049, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "saq24b",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2025/image-with-icon/saq/RAC2025-Web-Thumbnail_SAQ-450X450.jpg",
    model: "SAQ24B",
    name: "แอร์อินเวอร์เตอร์ 24,225 BTU LG DUALCOOL AI Air",
    category: "เครื่องปรับอากาศ SAQ",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 1299, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 1199, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "art13a",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/art13a-sr1/gallery/01_AirFit%20Artcool_S3-M091LRC0_S3NM091LRC0_EU_Front_450.jpg",
    model: "ART13A.SR1",
    name: "แอร์อินเวอร์เตอร์ 11,942 BTU LG ARTCOOL",
    category: "เครื่องปรับอากาศ ART",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 1049, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 949, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "art18a",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/art13a-sr1/gallery/01_AirFit%20Artcool_S3-M091LRC0_S3NM091LRC0_EU_Front_450.jpg",
    model: "ART18A.SR1",
    name: "แอร์อินเวอร์เตอร์ 18,084 BTU LG ARTCOOL",
    category: "เครื่องปรับอากาศ ART",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน · 6 งวด)", months: 60, price: 1249, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" },
      { label: "Visit 5 ปี (60 เดือน · 12 งวด)", months: 60, price: 1149, promo: "บิลแรก ฿149 + โปร 50% เดือน 2-8" }
    ]
  },
  {
    id: "zt4q18",
    model: "ZT4Q18GPLA1",
    name: "เครื่องปรับอากาศ 4-Way Cassette ขนาด 18,000 BTU",
    category: "เครื่องปรับอากาศ SAC 4Way Cassette",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1899, promo: "รุ่นใหม่ Y2026" }
    ]
  },
  {
    id: "zt4q24",
    model: "ZT4Q24GPLA1",
    name: "แอร์ LG 4Way Cassette 24,500 BTU",
    category: "เครื่องปรับอากาศ SAC 4Way Cassette",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1949, promo: "รุ่นใหม่ Y2026" }
    ]
  },
  {
    id: "zt4q36",
    model: "ZT4Q36GNLA1",
    name: "เครื่องปรับอากาศ 4-Way Cassette ขนาด 36,200 BTU",
    category: "เครื่องปรับอากาศ SAC 4Way Cassette",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 2349, promo: "รุ่นใหม่ Y2026" }
    ]
  },
  {
    id: "zt4q48",
    model: "ZT4Q48GMLA1",
    name: "เครื่องปรับอากาศ 4-Way Cassette ขนาด 48,000 BTU",
    category: "เครื่องปรับอากาศ SAC 4Way Cassette",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 2499, promo: "รุ่นใหม่ Y2026" }
    ]
  },
  {
    id: "zt1q12",
    model: "ZT1Q12GULA1",
    name: "เครื่องปรับอากาศ 1-Way Cassette ขนาด 10,500 BTU",
    category: "เครื่องปรับอากาศ SAC 1 Way Cassette",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1499, promo: "รุ่นใหม่ Y2026" }
    ]
  },
  {
    id: "zt1q18",
    model: "ZT1Q18GTLA1",
    name: "(PM 2.5, DUAL Vane) เครื่องปรับอากาศ 1-Way Cassette ขนาด 18,000 BTU",
    category: "เครื่องปรับอากาศ SAC 1 Way Cassette",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1599, promo: "รุ่นใหม่ Y2026" }
    ]
  },
  {
    id: "zt1q24",
    model: "ZT1Q24GTLA1",
    name: "เครื่องปรับอากาศ 1-Way Cassette ขนาด 23,500 BTU",
    category: "เครื่องปรับอากาศ SAC 1 Way Cassette",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 1799, promo: "รุ่นใหม่ Y2026" }
    ]
  },
  {
    id: "ztrq36",
    model: "ZTRQ36GYLA1",
    name: "แอร์ LG Round Cassette 36,700 BTU",
    category: "เครื่องปรับอากาศ SAC Round Cassette",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 2599, promo: "รุ่นใหม่ Y2026" }
    ]
  },
  {
    id: "ztrq48",
    model: "ZTRQ48GYLA1",
    name: "แอร์ LG Round Cassette 47,100 BTU",
    category: "เครื่องปรับอากาศ SAC Round Cassette",
    emoji: "❄️",
    plans: [
      { label: "Visit 5 ปี (60 เดือน)", months: 60, price: 2799, promo: "รุ่นใหม่ Y2026" }
    ]
  },
  {
    id: "oled48c6psa",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/48-c6/update/OLED48C6PSA-450-01.jpg",
    model: "OLED48C6PSA",
    name: "ทีวี 48\" LG OLED evo C6 4K Smart TV 2026",
    category: "โทรทัศน์ OLED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน) · โปร 8 เดือน", months: 60, price: 749, promo: "50% เดือน 1-20" },
      { label: "ไม่รับบริการ 5 ปี (60 เดือน) · โปร 3 เดือน", months: 60, price: 749, promo: "50% เดือน 1-15" }
    ]
  },
  {
    id: "oled55c6psa",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/55-c6/update/OLED55C6PSA-450-01.jpg",
    model: "OLED55C6PSA",
    name: "ทีวี 55\" LG OLED evo C6 4K Smart TV 2026",
    category: "โทรทัศน์ OLED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 1099, promo: "50% เดือน 1-20" }
    ]
  },
  {
    id: "oled65c6psa",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/65-c6/update/OLED65C6PSA-450-01.jpg",
    model: "OLED65C6PSA",
    name: "ทีวี 65\" LG OLED evo C6 4K Smart TV 2026",
    category: "โทรทัศน์ OLED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 1299, promo: "50% เดือน 1-20" }
    ]
  },
  {
    id: "oled77c6psa",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/77-c6/update/OLED77C6PSA-450-01.jpg",
    model: "OLED77C6PSA",
    name: "ทีวี 77\" LG OLED evo C6 4K Smart TV 2026",
    category: "โทรทัศน์ OLED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 1999, promo: "50% เดือน 1-20" }
    ]
  },
  {
    id: "oled77c6psa-s80ty",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/77-c6/update/OLED77C6PSA-450-01.jpg",
    model: "OLED77C6PSA + S80TY",
    name: "ทีวี 77\" LG OLED evo C6 4K Smart TV 2026 + Soundbar S80TY (ของแถม)",
    category: "โทรทัศน์ OLED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน) · ของแถม S80TY", months: 60, price: 1999, promo: "50% เดือน 1-15 · ของแถม Soundbar S80TY" }
    ]
  },
  {
    id: "oled65c6psa-s80ty",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/65-c6/update/OLED65C6PSA-450-01.jpg",
    model: "OLED65C6PSA + S80TY",
    name: "ทีวี 65\" LG OLED evo C6 4K Smart TV 2026 + Soundbar S80TY (ของแถม)",
    category: "โทรทัศน์ OLED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน) · ของแถม S80TY", months: 60, price: 1299, promo: "50% เดือน 1-15 · ของแถม Soundbar S80TY" }
    ]
  },
  {
    id: "oled55c6psa-s30a",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/55-c6/update/OLED55C6PSA-450-01.jpg",
    model: "OLED55C6PSA + S30A",
    name: "ทีวี 55\" LG OLED evo C6 4K Smart TV 2026 + Soundbar S30A (ของแถม)",
    category: "โทรทัศน์ OLED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน) · ของแถม S30A", months: 60, price: 1099, promo: "50% เดือน 1-15 · ของแถม Soundbar S30A" }
    ]
  },
  {
    id: "75qned86bsa",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/qned/100-55qned86bsa-atm/gallery/75qned86/gallery/75QNED86-450.jpg",
    model: "75QNED86BSA",
    name: "ทีวี 75\" LG QNED evo AI Mini LED QNED86 4K Smart TV 2026",
    category: "โทรทัศน์ QNED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 849, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "100mrgb96bs",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/micro-rgb-evo/100mrgb96bs-atm/gallery/100-mrgb95/gallery/gp1/basic.jpg",
    model: "100MRGB96BS",
    name: "ทีวี 100\" LG Micro RGB evo AI MRGB96 4K Smart TV 2026",
    category: "โทรทัศน์ QNED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 4499, promo: "50% เดือน 1-20" }
    ]
  },
  {
    id: "100qned86bs",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/qned/100-55qned86bsa-atm/gallery/100-qned85/basic/lg-qned-evo-qned85-2026-100-gallery-basic.jpg",
    model: "100QNED86BS",
    name: "ทีวี 100\" LG QNED evo AI Mini LED QNED86 4K Smart TV 2026",
    category: "โทรทัศน์ QNED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 2599, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "85qned80bsa",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/qned/75-43qned80bsa-atm/gallery/85-qned80/basic/lg-qned-evo-qned80-2026-85-gallery-basic.jpg",
    model: "85QNED80BSA",
    name: "ทีวี 85\" LG QNED evo AI Mini LED QNED80 4K Smart TV 2026",
    category: "โทรทัศน์ QNED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 1349, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "65qned80bsa",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/qned/75-43qned80bsa-atm/gallery/65-qned80/basic/lg-qned-evo-qned80-2026-65-gallery-basic.jpg",
    model: "65QNED80BSA",
    name: "ทีวี 65\" LG QNED evo AI Mini LED QNED80 4K Smart TV 2026",
    category: "โทรทัศน์ QNED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 649, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "55qned80bsa",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/qned/75-43qned80bsa-atm/gallery/55-qned80/basic/lg-qned-evo-qned80-2026-55-gallery-basic.jpg",
    model: "55QNED80BSA",
    name: "ทีวี 55\" LG QNED evo AI Mini LED QNED80 4K Smart TV 2026",
    category: "โทรทัศน์ QNED",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 549, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "75nu855bpsa",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/nano-4k-uhd/98-43nu855bpsa-atm/gallery/75-nu85/basic/lg-nano-4k-uhd-nu85-2026-75-gallery-basic.jpg",
    model: "75NU855BPSA",
    name: "ทีวี 75\" LG NANO 4K UHD AI NU85 4K Smart TV 2026",
    category: "โทรทัศน์ NanoCell",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 699, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "65nu855bpsa",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/nano-4k-uhd/98-43nu855bpsa-atm/gallery/65-nu85/basic/lg-nano-4k-uhd-nu85-2026-65-gallery-basic.jpg",
    model: "65NU855BPSA",
    name: "ทีวี 65\" LG NANO 4K UHD AI NU85 4K Smart TV 2026",
    category: "โทรทัศน์ NanoCell",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 549, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "27lx6tdga",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2025/lifestyle-screen/27lx6tdga-atm/gallery/gallery/new-image/SBM2-450x450.jpg",
    model: "27LX6TDGA",
    name: "LG StanbyME2",
    category: "โทรทัศน์ StanbyME",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 749, promo: "50% เดือน 1-20" }
    ]
  },
  {
    id: "32lx6bdga",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/lifestyle-screens/32lx6bdga-atm/gallery/basic/lg-movable-screen-lx6-2026-32-gallery-basic.jpg",
    model: "32LX6BDGA",
    name: "LG StanbyME 2 Max LX6 จอไลฟ์สไตล์ไร้สาย 4K ขนาด 32 นิ้ว",
    category: "โทรทัศน์ StanbyME",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 849, promo: "50% เดือน 1-20" }
    ]
  },
  {
    id: "27lx6tdga-grab",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/pto/2026/27lx6tdga-grab/27LX6TDGA.GRAB-450.jpg",
    model: "27LX6TDGA + xboom GRAB",
    name: "LG StanbyME2 + xboom Grab (ของแถม)",
    category: "โทรทัศน์ StanbyME",
    emoji: "📺",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน) · ของแถม GRAB", months: 60, price: 749, promo: "50% เดือน 1-15 · ของแถม xboom GRAB" }
    ]
  },
  {
    id: "27gx704a",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/monitor/2026/27gx704a-atm/gallery/basic/ultragear-gaming-27gx704a-2025-gallery-basic-large.jpg",
    model: "27GX704A-B",
    name: "LG UltraGear™ GX7 27 นิ้ว 240Hz OLED QHD Gaming Monitor 27GX704A DisplayHDR™ True Black 400",
    category: "มอนิเตอร์",
    emoji: "🖥️",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน) · โปร 8 เดือน", months: 60, price: 349, promo: "50% เดือน 1-20" },
      { label: "ไม่รับบริการ 5 ปี (60 เดือน) · โปร 3 เดือน", months: 60, price: 399, promo: "50% เดือน 1-15" }
    ]
  },
  {
    id: "45gx950a",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/monitor/2025/45gx950a-b-atm/gallery/basic/ultragear-gaming-45gx950a-2025-gallery-basic-large.jpg",
    model: "45GX950A-B",
    name: "LG UltraGear™ 45\" OLED Dual-Mode 5K2K 0.03ms DisplayHDR True Black",
    category: "มอนิเตอร์",
    emoji: "🖥️",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 1499, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "52g930b",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/monitor/2026/52g930b-b-atm/gallery/basic/ultragear-gaming-52g930b-2026-gallery-basic-01.jpg",
    model: "52G930B-B",
    name: "LG UltraGear evo G9 52 นิ้ว",
    category: "มอนิเตอร์",
    emoji: "🖥️",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 1199, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "40u990a",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/monitor/2026/40u990a-w-atm/gallery/basic/ultrafine-uhd-4k-5k-40u990a-2025-gallery-basic-1.jpg",
    model: "40U990A-W",
    name: "LG UltraFine™ 40 นิ้ว",
    category: "มอนิเตอร์",
    emoji: "🖥️",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 999, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "34u650a",
    model: "34U650A-B",
    name: "34\" 21:9 UltraWide™ WQHD (3440x1440) IPS Monitor",
    category: "มอนิเตอร์",
    emoji: "🖥️",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 399, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "32u889sa",
    img: "https://www.lg.com/content/dam/channel/wcms/th/images/monitor/2025/32u889sa/gallery/smart-monitor-32u889sa-2025-gallery-swing-gallery-basic-large.jpg",
    model: "32U889SA-W",
    name: "จอมอนิเตอร์ 31.5\" 4K IPS Smart Monitor Swing จอสัมผัส ขาตั้งหมุนได้",
    category: "มอนิเตอร์",
    emoji: "🖥️",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 699, promo: "50% เดือน 1-20" }
    ]
  },
  {
    id: "32u889sa-grab",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/pto/2026/32u889sa-grab/32U889SA.GRAB-450.jpg",
    model: "32U889SA + xboom GRAB",
    name: "จอมอนิเตอร์ 31.5\" 4K IPS Smart Monitor Swing + xboom Grab (ของแถม)",
    category: "มอนิเตอร์",
    emoji: "🖥️",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน) · ของแถม GRAB", months: 60, price: 699, promo: "50% เดือน 1-15 · ของแถม xboom GRAB" }
    ]
  },
  {
    id: "s95tr",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/audio/2025/s95tr-dthallk/gallery/av-soundbar-s95tr-thumbnailanimation-01.jpg",
    model: "S95TR",
    name: "ซาวด์บาร์ LG Dolby Atmos 9.1.5 ช่อง (820W)",
    category: "Sound bar",
    emoji: "🔊",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 449, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "s70ty",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/audio/2024/s70ty-dthallk/gallery/s70ty_basic_450.jpg",
    model: "S70TY",
    name: "ซาวด์บาร์ LG Dolby Atmos 3.1.1 ช่อง (400W)",
    category: "Sound bar",
    emoji: "🔊",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 189, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "xboom-grab",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/audio/2025/grab-athalbk/gallery/gallery-1/xboom-grab-2025-gallery-basic.jpg",
    model: "xboom GRAB",
    name: "ลำโพงพกพา LG xboom Grab tuned by will.i.am",
    category: "Bluetooth Speaker",
    emoji: "🔊",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 109, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "xboom-bounce",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/audio/2025/bounce-athalbk/gallery/01-basic/xboom-bounce-2025-gallery-basic.jpg",
    model: "xboom BOUNCE",
    name: "ลำโพงพกพา LG xboom Bounce by will.i.am",
    category: "Bluetooth Speaker",
    emoji: "🔊",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 139, promo: "50% เดือน 1-12" }
    ]
  },
  {
    id: "xboom-stage301",
    img: "https://www.lg.com/content/dam/channel/wcms/th/image-update/audio/2025/stage301-athalbk/gallery/01-basic/xboom-stage301-2025-gallery-basic.jpg",
    model: "xboom STAGE301",
    name: "LG xboom STAGE301 tuned by will.i.am",
    category: "Bluetooth Speaker",
    emoji: "🔊",
    plans: [
      { label: "ไม่รับบริการ 5 ปี (60 เดือน)", months: 60, price: 299, promo: "50% เดือน 1-12" }
    ]
  }
];

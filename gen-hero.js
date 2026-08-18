/* สร้าง images/hero-1..8.jpg — SVG banner 1920×720 (LG FLEXI-SUB สิงหาคม 2569)
   เนื้อหาตรงกับ HERO_SLIDES ใน index.html (theme red/cream + title/detail) */
const fs = require('fs');
const path = require('path');

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const RED = '#dc0000';
const RED_DARK = '#a30000';
const CREAM = '#f7f0e3';
const CREAM_DARK = '#e8ddc8';
const INK = '#222222';

/* ธีมพื้นฐาน: พื้นหลัง + สีข้อความ + สีเน้น */
const THEMES = {
  red:   { bg: RED, bg2: RED_DARK, text: '#ffffff', sub: '#ffe1e1', accent: '#ffd700', accentText: '#7a1f00' },
  cream: { bg: CREAM, bg2: CREAM_DARK, text: INK, sub: '#6b5a3e', accent: RED, accentText: '#ffffff' }
};

/* ตกแต่งพื้นหลังตามธีม */
function backdrop(theme) {
  const t = THEMES[theme];
  if (theme === 'red') {
    return `
      <rect width="1920" height="720" fill="url(#bgGrad)"/>
      <circle cx="1560" cy="120" r="340" fill="#ff2b2b" opacity="0.35"/>
      <circle cx="1720" cy="620" r="300" fill="#7a0000" opacity="0.5"/>
      <circle cx="250" cy="640" r="260" fill="#ff2b2b" opacity="0.25"/>
      <path d="M0 520 Q 480 460 960 540 T 1920 500 L 1920 720 L 0 720 Z" fill="#a30000" opacity="0.35"/>
    `;
  }
  return `
    <rect width="1920" height="720" fill="url(#bgGrad)"/>
    <circle cx="1620" cy="140" r="320" fill="#ffffff" opacity="0.6"/>
    <circle cx="1800" cy="600" r="260" fill="#e0d2b8" opacity="0.6"/>
    <circle cx="260" cy="620" r="240" fill="#ffffff" opacity="0.5"/>
    <path d="M0 540 Q 480 470 960 550 T 1920 520 L 1920 720 L 0 720 Z" fill="#e0d2b8" opacity="0.6"/>
  `;
}

/* ดีฟอลต์: รูปทรงเครื่องใช้ไฟฟ้าแบบมินิมอล */
function applianceArt(theme, kind) {
  const t = THEMES[theme];
  const stroke = theme === 'red' ? 'rgba(255,255,255,0.85)' : 'rgba(34,34,34,0.75)';
  const fill = theme === 'red' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.5)';
  const w = 320, h = 420, x = 1420, y = 150;
  if (kind === 'tv') {
    return `
      <g transform="translate(${x + 10},${y - 10})">
        <rect x="0" y="0" width="${w}" height="${h}" rx="18" fill="${fill}" stroke="${stroke}" stroke-width="8"/>
        <circle cx="${w / 2}" cy="${h / 2}" r="95" fill="none" stroke="${stroke}" stroke-width="8"/>
        <rect x="${w / 2 - 70}" y="${h / 2 - 8}" width="140" height="16" rx="8" fill="${stroke}"/>
        <rect x="${w / 2 - 26}" y="${h / 2 - 120}" width="52" height="40" rx="10" fill="${stroke}"/>
        <rect x="0" y="${h + 18}" width="${w - 60}" height="22" rx="11" fill="${stroke}" opacity="0.7"/>
      </g>`;
  }
  if (kind === 'washer') {
    return `
      <g transform="translate(${x},${y})">
        <rect x="0" y="0" width="300" height="${h}" rx="26" fill="${fill}" stroke="${stroke}" stroke-width="8"/>
        <circle cx="150" cy="170" r="92" fill="none" stroke="${stroke}" stroke-width="10"/>
        <circle cx="150" cy="170" r="46" fill="none" stroke="${stroke}" stroke-width="6" opacity="0.6"/>
        <rect x="60" y="300" width="180" height="14" rx="7" fill="${stroke}"/>
        <rect x="60" y="330" width="120" height="14" rx="7" fill="${stroke}" opacity="0.6"/>
      </g>`;
  }
  if (kind === 'air') {
    return `
      <g transform="translate(${x},${y})">
        <rect x="0" y="0" width="${w}" height="130" rx="16" fill="${fill}" stroke="${stroke}" stroke-width="8"/>
        <rect x="24" y="28" width="${w - 48}" height="74" rx="10" fill="none" stroke="${stroke}" stroke-width="6" opacity="0.7"/>
        <path d="M80 240 q 20 -70 60 -70 q 40 0 60 70 M200 240 q 20 -70 60 -70 q 40 0 60 70"
          fill="none" stroke="${stroke}" stroke-width="8" stroke-linecap="round" opacity="0.85"/>
        <rect x="110" y="310" width="100" height="14" rx="7" fill="${stroke}"/>
      </g>`;
  }
  if (kind === 'purifier') {
    return `
      <g transform="translate(${x},${y})">
        <ellipse cx="170" cy="300" rx="120" ry="150" fill="${fill}" stroke="${stroke}" stroke-width="8"/>
        <ellipse cx="170" cy="300" rx="56" ry="70" fill="none" stroke="${stroke}" stroke-width="8" opacity="0.7"/>
        <path d="M170 40 q -40 60 0 90 q 40 30 0 90 q -40 30 0 90"
          fill="none" stroke="${stroke}" stroke-width="8" stroke-linecap="round" opacity="0.85"/>
      </g>`;
  }
  if (kind === 'fridge') {
    return `
      <g transform="translate(${x},${y})">
        <rect x="0" y="0" width="300" height="${h}" rx="20" fill="${fill}" stroke="${stroke}" stroke-width="8"/>
        <line x1="150" y1="0" x2="150" y2="${h}" stroke="${stroke}" stroke-width="6" opacity="0.7"/>
        <rect x="40" y="60" width="70" height="10" rx="5" fill="${stroke}"/>
        <rect x="40" y="110" width="70" height="10" rx="5" fill="${stroke}" opacity="0.6"/>
        <rect x="40" y="230" width="70" height="10" rx="5" fill="${stroke}" opacity="0.6"/>
        <rect x="40" y="280" width="70" height="10" rx="5" fill="${stroke}" opacity="0.6"/>
      </g>`;
  }
  /* speaker (default) */
  return `
    <g transform="translate(${x},${y})">
      <rect x="60" y="0" width="200" height="360" rx="28" fill="${fill}" stroke="${stroke}" stroke-width="8"/>
      <circle cx="160" cy="120" r="62" fill="none" stroke="${stroke}" stroke-width="10"/>
      <circle cx="160" cy="120" r="30" fill="none" stroke="${stroke}" stroke-width="6" opacity="0.7"/>
      <rect x="110" y="220" width="100" height="12" rx="6" fill="${stroke}"/>
      <rect x="110" y="250" width="100" height="12" rx="6" fill="${stroke}" opacity="0.6"/>
    </g>`;
}

/* เนื้อหาสไลด์: { theme, art, label, title[2 บรรทัด], dates, detail, badge } */
const SLIDES = [
  { theme: 'red', art: 'tv', label: 'LG SUBSCRIBE', title: ['โปรปังฉลองครบ', 'รอบ 38 ปี LG'], dates: '7 ส.ค. 69 – 11 ก.ย. 69', detail: 'ลดเลย 15% ตลอดสัญญา — ฉลอง 38 ปี กับโปรสุดปังเฉพาะเดือนสิงหาคมนี้', badge: 'ลด 15%' },
  { theme: 'red', art: 'tv', label: 'LG SUBSCRIBE', title: ['SUBSCRIBE', 'OLED WEEK'], dates: '1 ส.ค. 69 – 31 ส.ค. 69', detail: '50% OFF ลดแรงทะลุจอ — ทีวี OLED รายเดือน เริ่มต้น ฿749/เดือน', badge: null },
  { theme: 'red', art: 'air', label: 'LG SUBSCRIBE', title: ['ซับ 2 แถม 1'], dates: '1 ส.ค. 69 – 31 ส.ค. 69', detail: 'Subscribe แอร์ IXY 2 ตัว รับฟรี! เครื่องฟอกอากาศ มูลค่า 6,900.-', badge: 'รับฟรี!' },
  { theme: 'red', art: 'tv', label: 'LG SUBSCRIBE', title: ['ซับ 1 แถม 1'], dates: '1 ส.ค. 69 – 31 ส.ค. 69', detail: 'ซับ TV OLED 65" รับฟรี! Soundbar (มูลค่า 15,151.-)', badge: 'รับฟรี!' },
  { theme: 'red', art: 'fridge', label: 'LG SUBSCRIBE', title: ['โปรคุ้ม 2 ต่อ'], dates: '1 ส.ค. 69 – 31 ส.ค. 69', detail: '1. จ่ายเพียง ฿149 เดือนแรก 2. ลด 50% นาน 2 รอบบิล', badge: '฿149' },
  { theme: 'cream', art: 'purifier', label: 'LG SUBSCRIBE', title: ['ชวนเพื่อนซับ', 'ยิ่งรับ ยิ่งได้!'], dates: '7 ส.ค. 69 – 11 ก.ย. 69', detail: '1. ผู้แนะนำ รับฟรี! ค่าบริการ 1 เดือน 2. ลูกค้าใหม่ รับส่วนลด 50% เพิ่ม 2 รอบบิล', badge: 'ของขวัญ' },
  { theme: 'cream', art: 'washer', label: 'LG SUBSCRIBE', title: ['ความคุ้มค่าที่', 'เหนือกว่า'], dates: 'ตลอดเดือน ส.ค. 69', detail: 'เปลี่ยนไส้กรอง · ทำความสะอาดทั้งภายใน/ภายนอก · ตรวจสอบประสิทธิภาพการใช้งาน — ดูแลครบตลอดสัญญา', badge: 'ดูแลครบวงจร' },
  { theme: 'cream', art: 'fridge', label: 'LG SUBSCRIBE', title: ['เช่าง่าย ใช้สบาย', 'ครบทุกไลฟ์สไตล์'], dates: 'โปรโมชัน ส.ค. 69', detail: 'ตู้เย็น · เครื่องซักผ้า · แอร์ · ทีวี — ทุกหมวดมีแผนรายเดือน ติดตั้งฟรี พร้อมทีมช่างดูแล', badge: 'ติดตั้งฟรี' }
];

function svgFor(slide, i) {
  const t = THEMES[slide.theme];
  const titleLines = slide.title;
  const titleSize = titleLines.some(l => l.length > 16) ? 62 : 72;
  let titleHtml = '';
  titleLines.forEach((ln, li) => {
    titleHtml += `<text x="110" y="${320 + li * (titleSize + 14)}" font-size="${titleSize}" font-weight="800" fill="${t.text}" font-family="'Segoe UI','Noto Sans Thai',sans-serif">${esc(ln)}</text>`;
  });
  const badgeHtml = slide.badge
    ? `<g><rect x="110" y="150" width="${esc(String(slide.badge).length * 34 + 56)}" height="54" rx="27" fill="${slide.theme === 'red' ? '#ffffff' : RED}"/><text x="138" y="${187}" font-size="26" font-weight="700" fill="${slide.theme === 'red' ? RED : '#ffffff'}" font-family="'Segoe UI','Noto Sans Thai',sans-serif">${esc(slide.badge)}</text></g>`
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="720" viewBox="0 0 1920 720">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${t.bg}"/>
      <stop offset="1" stop-color="${t.bg2}"/>
    </linearGradient>
  </defs>
  ${backdrop(slide.theme)}
  ${applianceArt(slide.theme, slide.art)}
  ${badgeHtml}
  <text x="112" y="118" font-size="22" font-weight="700" letter-spacing="4" fill="${t.sub}" font-family="'Segoe UI','Noto Sans Thai',sans-serif">${esc(slide.label)}</text>
  ${titleHtml}
  <text x="112" y="${titleLines.length > 1 ? 340 + titleLines.length * (titleSize + 14) + 10 : 340 + titleSize + 30}" font-size="24" font-weight="600" fill="${t.sub}" font-family="'Segoe UI','Noto Sans Thai',sans-serif">${esc(slide.dates)}</text>
  <text x="112" y="${titleLines.length > 1 ? 380 + titleLines.length * (titleSize + 14) + 10 : 380 + titleSize + 30}" font-size="26" fill="${t.text}" opacity="0.92" font-family="'Segoe UI','Noto Sans Thai',sans-serif">${esc(slide.detail)}</text>
  <rect x="110" y="600" width="190" height="56" rx="28" fill="${t.accent}"/>
  <text x="205" y="637" text-anchor="middle" font-size="22" font-weight="700" fill="${t.accentText}" font-family="'Segoe UI','Noto Sans Thai',sans-serif">SUBSCRIBE เลย!</text>
</svg>`;
}

const outDir = path.join(__dirname, '..', 'images');
fs.mkdirSync(outDir, { recursive: true });
SLIDES.forEach((s, i) => {
  const file = path.join(outDir, `hero-${i + 1}.svg`);
  fs.writeFileSync(file, svgFor(s, i));
  console.log('wrote', file, fs.statSync(file).size, 'bytes');
});

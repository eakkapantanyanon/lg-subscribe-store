/* ดาวน์โหลดภาพแคมเปญจริงของ LG (จาก URL ใน HERO_SLIDES ของ index.html)
   → images/hero-1-d.jpg (1920×720 desktop), images/hero-1-m.jpg (720×960 mobile) … ครบ 8 สไลด์ */
const fs = require('fs');
const path = require('path');
const https = require('https');

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const m = indexHtml.match(/HERO_SLIDES\s*=\s*\[([\s\S]*?)\n\s*\];/);
if (!m) { console.error('ไม่พบ HERO_SLIDES ใน index.html'); process.exit(1); }

const blocks = m[1].split('{').filter(x => x.includes('img:'));
const slides = blocks.map(b => ({
  img: (b.match(/img: '([^']+)'/) || [])[1],
  imgM: (b.match(/imgM: '([^']+)'/) || [])[1]
}));

const outDir = path.join(__dirname, 'images');
fs.mkdirSync(outDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      if (res.statusCode >= 400) { res.resume(); return reject(new Error('HTTP ' + res.statusCode + ' ' + url)); }
      if (res.statusCode >= 300 && res.headers.location) { res.resume(); return download(res.headers.location, dest).then(resolve, reject); }
      const ws = fs.createWriteStream(dest);
      res.pipe(ws);
      ws.on('finish', () => ws.close(() => resolve(fs.statSync(dest).size)));
      ws.on('error', reject);
    }).on('error', reject);
  });
}

(async () => {
  let ok = 0;
  for (let i = 0; i < slides.length; i++) {
    const s = slides[i];
    const n = i + 1;
    for (const [key, suffix] of [['img', 'd'], ['imgM', 'm']]) {
      if (!s[key]) continue;
      const url = s[key];
      const ext = (url.split('.').pop() || 'jpg').split('?')[0];
      const dest = path.join(outDir, `hero-${n}-${suffix}.${ext}`);
      try {
        const bytes = await download(url, dest);
        console.log(`hero-${n}-${suffix}.${ext}  ${(bytes / 1024).toFixed(0)}KB  <- ${url.split('/').pop()}`);
        ok++;
      } catch (e) {
        console.error('FAIL hero-' + n + '-' + suffix + ': ' + e.message);
      }
    }
  }
  console.log(`\nดาวน์โหลดสำเร็จ ${ok}/${slides.length * 2} ไฟล์ -> images/`);
})().catch(e => { console.error(e); process.exit(1); });

/* Static pre-deploy smoke tests. No dependencies required. */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const pages = ['index.html', 'products.html', 'product.html', 'promotions.html', 'subscribe-store.html', 'subscribe-guide.html'];
const requiredAssets = [
  'products.js',
  'product-galleries.js',
  'calculator-core.js',
  'product-select.js',
  'cart.js',
  'analytics.js',
  'premium.css',
  'catalog.css',
  'catalog.js',
  'service-cycles.js',
  'sitemap.xml',
  'image-inventory-phase4.json',
  'scripts/audit-product-images.js',
  'images/products/wd110mn.webp',
  'images/products/a9t-ultra.webp',
  'images/products/a9t-core.webp',
  'images/products/gc-l257kqkw.webp',
  'images/products/gc-b257sqyl.webp',
  'images/products/wt2520nheg.webp',
  'images/products/fv1413s4m.webp',
  'images/products/oled48c6psa.webp',
  'images/products/oled55c6psa.webp',
  'images/products/oled65c6psa.webp',
  'images/products/oled77c6psa.webp',
  'images/products/75qned86bsa.webp',
  'images/products/85qned80bsa.webp',
  'images/products/65qned80bsa.webp',
  'images/products/55qned80bsa.webp',
  'images/products/27gx704a.webp',
  'images/products/75nu855bpsa.webp',
  'images/products/65nu855bpsa.webp',
  'images/products/32u889sa.webp',
  'images/products/32u889sa-grab.webp',
  'images/products/ixy-series.webp',
  'images/products/siq-series.webp',
  'images/products/saq-series.webp',
  'images/products/artcool-series.webp',
  'images/products/27lx6tdga-grab.webp',
  'images/products/wd516an.webp',
  'images/products/wd518an.webp',
  'images/products/gc-x257cmhw.webp',
  'images/products/dfc335hm.webp',
  'images/products/xboom-stage501.webp',
  'images/products/gc-x257cmew.webp',
  'images/products/gc-j257sqzw.webp',
  'images/products/gv-b25ffgdb.webp',
  'images/products/gc-b48fpgam.webp',
  'images/products/gv-v25ffgrb.webp',
  'images/products/gn-f392pqak.webp',
  'images/products/gn-f452pqak.webp',
  'images/products/gn-v389fqef.webp',
  'images/products/gc-g24ffqkb.webp',
  'images/products/gc-v22ffqmb.webp',
  'images/products/wt2116sheg.webp',
  'images/products/wt1410nheg.webp',
  'images/products/wt2520nhen.webp',
  'images/products/wt1410nhen.webp',
  'images/products/fv1409h4w.webp',
  'images/products/f2520rntb.webp',
  'images/products/fv1413h4m.webp',
  'images/products/tx2723st5j.webp',
  'images/products/tx2315dt5g.webp',
  'images/products/rv10vhp2b.webp',
  'images/products/s3mfc.webp',
  'images/products/ms3032jas.webp',
  'images/products/md19gqga1.webp',
  'images/products/as60ghwg0.webp',
  'images/products/27lx6tdga.webp',
  'images/products/32lx6bdga.webp',
  'images/products/45gx950a.webp',
  'images/products/52g930b.webp',
  'images/products/40u990a.webp',
  'images/products/s95tr.webp',
  'images/products/s70ty.webp',
  'images/products/xboom-grab.webp',
  'images/products/xboom-bounce.webp',
  'images/products/xboom-stage301.webp',
  'images/products/s3mfc.webp',
  'images/products/ms3032jas.webp',
  'images/products/md19gqga1.webp',
  'images/products/as60ghwg0.webp',
  'images/products/27lx6tdga.webp',
  'images/hero-8-d.webp',
  'images/hero-8-m.webp',
  'images/hero-birthday-38-d.webp',
  'images/hero-birthday-38-m.webp',
  'images/hero-3-d.webp',
  'images/hero-3-m.webp',
  'images/hero-4-d.webp',
  'images/hero-4-m.webp',
  'images/hero-5-d.webp',
  'images/hero-5-m.webp',
  'images/hero-6-d.webp',
  'images/hero-6-m.webp',
  'images/hero-7-d.webp',
  'images/hero-7-m.webp',
];
let failures = 0;

function pass(message) { console.log('  ✅ ' + message); }
function fail(message) { failures += 1; console.error('  ❌ ' + message); }

function check(condition, message) {
  if (condition) pass(message);
  else fail(message);
}

console.log('\n· ไฟล์ที่จำเป็นสำหรับ deploy');
for (const file of [...pages, ...requiredAssets]) {
  check(fs.existsSync(path.join(ROOT, file)), file);
}

console.log('\n· โครงสร้างและ metadata');
const publicCanonical = {
  'index.html': 'https://eakkapantanyanon.github.io/lg-subscribe-store/',
  'products.html': 'https://eakkapantanyanon.github.io/lg-subscribe-store/products.html',
  'promotions.html': 'https://eakkapantanyanon.github.io/lg-subscribe-store/promotions.html',
  'subscribe-store.html': 'https://eakkapantanyanon.github.io/lg-subscribe-store/subscribe-store.html',
  'product.html': 'https://eakkapantanyanon.github.io/lg-subscribe-store/product.html',
  'subscribe-guide.html': 'https://eakkapantanyanon.github.io/lg-subscribe-store/subscribe-guide.html'
};
for (const page of pages) {
  const html = fs.readFileSync(path.join(ROOT, page), 'utf8');
  check(/<html\s+lang="th"/i.test(html), page + ': lang=th');
  check(/<meta\s+name="description"/i.test(html), page + ': meta description');
  check(/<meta\s+name="theme-color"/i.test(html), page + ': theme color');
  check(html.includes('<link rel="canonical" href="' + publicCanonical[page] + '">'), page + ': canonical');
  check((html.match(/<meta property="og:(?:title|description|type|url)"/g) || []).length === 4, page + ': Open Graph basic tags');
  if (page !== 'subscribe-store.html') {
    check(/<meta property="og:image"/.test(html), page + ': Open Graph image');
    check(/<meta name="twitter:card" content="summary_large_image">/.test(html), page + ': Twitter/X card');
    check(/<meta name="twitter:(?:title|description|image)"/g.test(html), page + ': Twitter/X metadata');
  }
  check(/<link rel="icon"/.test(html), page + ': favicon');
  check(/class="skip-link"/i.test(html), page + ': keyboard skip link');
  check(/rel="preconnect"\s+href="https:\/\/www\.lg\.com"/i.test(html), page + ': image CDN preconnect');
  check(!/href="#"/i.test(html), page + ': ไม่มี dead link href="#"');

  const inlineScripts = [...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(match => !/type=["']application\/ld\+json["']/i.test(match[1] || ''))
    .map(match => match[2])
    .filter(script => script.trim());
  try {
    inlineScripts.forEach(script => new Function(script));
    pass(page + ': inline JavaScript syntax');
  } catch (error) {
    fail(page + ': JavaScript syntax — ' + error.message);
  }

  const localRefs = [...html.matchAll(/(?:href|src)="([^"]+)"/gi)]
    .map(match => match[1])
    .filter(ref => !/^(?:https?:|#|data:|mailto:|tel:)/i.test(ref) && !ref.includes('+'));
  for (const ref of localRefs) {
    const clean = ref.split('?')[0].split('#')[0];
    if (clean) check(fs.existsSync(path.resolve(ROOT, clean)), page + ': ' + clean);
  }
}

console.log('\n· Conversion flow anchors');
const home = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const promotions = fs.readFileSync(path.join(ROOT, 'promotions.html'), 'utf8');
const premium = fs.readFileSync(path.join(ROOT, 'premium.css'), 'utf8');
const catalogCss = fs.readFileSync(path.join(ROOT, 'catalog.css'), 'utf8');
const catalogHtml = fs.readFileSync(path.join(ROOT, 'products.html'), 'utf8');
const catalogSource = fs.readFileSync(path.join(ROOT, 'catalog.js'), 'utf8');
const analyticsSource = fs.readFileSync(path.join(ROOT, 'analytics.js'), 'utf8');
const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const imageInventory = JSON.parse(fs.readFileSync(path.join(ROOT, 'image-inventory-phase4.json'), 'utf8'));
const pdp = fs.readFileSync(path.join(ROOT, 'product.html'), 'utf8');
const productSource = fs.readFileSync(path.join(ROOT, 'products.js'), 'utf8');
const gallerySource = fs.readFileSync(path.join(ROOT, 'product-galleries.js'), 'utf8');
const cart = fs.readFileSync(path.join(ROOT, 'subscribe-store.html'), 'utf8');
const guide = fs.readFileSync(path.join(ROOT, 'subscribe-guide.html'), 'utf8');
const parseProducts = source => {
  const marker = 'window.LG_PRODUCTS = [';
  const start = source.indexOf(marker);
  return eval('[' + source.slice(start + marker.length, source.lastIndexOf('];')) + ']');
};
const canonicalProducts = parseProducts(productSource);
const headProducts = parseProducts(execFileSync('git', ['show', 'HEAD:products.js'], { cwd: ROOT, encoding: 'utf8' }));
const protectedModels = ['27GX704A-B', '75QNED86BSA', 'WD516AN', 'WD518AN'];
const productByModel = (products, model) => products.find(product => product.model === model);
check(!/id="planner"|BUILD YOUR PACKAGE|พร้อมจัดบ้านให้สบาย/.test(home), 'Home นำ Package Planner และ Final CTA ที่ซ้ำซ้อนออกแล้ว');
check(/id="products"/.test(home), 'Home มี Product section');
check(/จุดเด่น LG SUBSCRIBE/.test(home) && !/WHY LG SUBSCRIBE/.test(home), 'Home ใช้หัวข้อภาษาไทยที่อ่านเป็นธรรมชาติ');
check(/"@type":"Organization"/.test(home) && /"@type":"WebSite"/.test(home), 'Home มี Organization และ WebSite structured data');
check(/"@type":"BreadcrumbList"/.test(catalogHtml) && /"@type":"BreadcrumbList"/.test(promotions), 'Catalog และ Promotions มี Breadcrumb structured data');
check(/id="productStructuredData"/.test(pdp) && /id="breadcrumbStructuredData"/.test(pdp) && /'@type': 'Product'/.test(pdp), 'PDP สร้าง Product และ Breadcrumb structured data ตามสินค้า');
check(/meta name="robots" content="noindex,follow"/.test(cart), 'Cart ถูก noindex และยัง follow internal links');
check(/id="hamburgerBtn"[^>]*aria-controls="mobileMenu"[^>]*aria-expanded="false"/.test(home) && /id="mobileMenu"[^>]*role="navigation"/.test(home) && /setAttribute\('aria-expanded'/.test(home), 'Home mobile menu แจ้งสถานะเปิด/ปิดให้ screen reader');
check(/event\.key === 'Escape'[\s\S]*toggleMenu\(false\)/.test(home), 'Home mobile menu ปิดด้วยปุ่ม Escape และคืน focus ได้');
check(/id="heroPrev"[^>]*aria-label="แบนเนอร์ก่อนหน้า"/.test(home) && /id="heroNext"[^>]*aria-label="แบนเนอร์ถัดไป"/.test(home), 'Home hero navigation มี accessible labels');
check(/id="heroPlay"[^>]*aria-pressed="false"/.test(home) && /setAttribute\('aria-pressed'/.test(home), 'Home hero autoplay เปิดเผยสถานะ pause/play ให้ assistive technology');
check(/class="p-price"><small>เริ่มต้น<\/small> ฿/.test(home), 'Home ราคาการ์ดสินค้ามีคำว่าเริ่มต้นนำหน้า');
check(/ค่าใช้จ่าย[\s\S]*การรับประกัน[\s\S]*การบำรุงรักษา/.test(home) && /รับประกัน 5–7 ปี/.test(home) && /รับประกัน 1–2 ปี/.test(home), 'Home ตาราง Subscribe vs ซื้อขาดตรงตามข้อมูลที่กำหนด');
check(/id="faq"/.test(home), 'Home มี FAQ');
check((home.match(/<details>/g) || []).length >= 7 && /LG Subscribe คืออะไร\?/.test(home) && /กรรมสิทธิ์ของสินค้าเป็นอย่างไร\?/.test(home) && /สามารถชำระค่าบริการด้วยวิธีใดได้บ้าง\?/.test(home), 'Home FAQ ใช้ข้อมูลชุดเดียวกับ LG Thailand ครบ 7 ข้อ');
check(/product\.html\?slug=/.test(home), 'Home เชื่อมไป PDP');
check(/href="products\.html"[^>]*id="allProductsLink"/.test(home) && /PRODUCTS\.length/.test(home), 'Home เชื่อม Catalog และแสดงจำนวนสินค้าจากข้อมูลจริง');
check(/id="catalogSearch"/.test(catalogHtml) && /id="catalogFilters"/.test(catalogHtml) && /id="catalogGrid"/.test(catalogHtml), 'Catalog มี search, category filter และ product grid');
check(/window\.LG_PRODUCTS/.test(catalogSource) && /state\.category/.test(catalogSource) && /state\.query/.test(catalogSource), 'Catalog ใช้ Product data เดิมและรองรับ search ร่วมกับ filter');
check(/id="catalogLoadMore"/.test(catalogHtml) && /INITIAL_BATCH_SIZE = 16/.test(catalogSource) && /LOAD_MORE_BATCH_SIZE = 16/.test(catalogSource), 'Catalog progressive rendering เริ่ม 16 รายการและมีปุ่มดูเพิ่มเติม');
check(/filteredProducts\(\)/.test(catalogSource) && /matchedProducts\.slice\(0, state\.visibleLimit\)/.test(catalogSource), 'Catalog Search และ Filter คำนวณจาก dataset ทั้งหมดก่อนจำกัดจำนวนที่ render');
check(/insertAdjacentHTML\('beforeend'/.test(catalogSource) && /catalog_load_more/.test(catalogSource), 'Catalog ดูเพิ่มเติม append batch ใหม่และส่ง analytics');
check(/loading="/.test(catalogSource) && /addEventListener\('error'/.test(catalogSource) && /fallbackSrc/.test(catalogSource), 'Catalog ใช้ lazy loading และ image fallback จุดเดียว');
check(/catalog_search/.test(catalogSource) && /catalog_filter/.test(catalogSource), 'Catalog ส่ง event สำหรับ search และ filter');
check(/calculator_entry_click/.test(analyticsSource) && /slug:/.test(analyticsSource) && /position/.test(analyticsSource) && /source/.test(analyticsSource), 'Analytics ครบ Hero entry และ Product Card context');
check(/hero_cta_click/.test(home), 'Analytics มี hero_cta_click ที่ Hero CTA จริง');
check(/package_view/.test(pdp) && /track\('package_view'/.test(pdp), 'Analytics มี package_view เมื่อ PDP พร้อม');
check(/try\s*\{|catch\s*\(_\)/.test(analyticsSource) && /Analytics must never block/.test(analyticsSource), 'Analytics failure ไม่ block flow');
check(/<main>/.test(home) && /<main>/.test(promotions), 'Home และ Promotions มี main landmark');
check(/:focus-visible/.test(fs.readFileSync(path.join(ROOT, 'catalog.css'), 'utf8')), 'Catalog มี focus-visible style จาก CSS ที่โหลดจริง');
check(/products\.html/.test(sitemap) && !/<loc>[^<]*\/product\.html<\/loc>/.test(sitemap), 'Sitemap ใช้ Catalog URL แทน PDP ที่ไม่มี slug');
check(imageInventory.summary.products === 97 && imageInventory.summary.primary.local === 8, 'Phase 4 inventory มีสินค้า 97 รุ่นและ local primary pilot 8 รุ่น');
check(imageInventory.summary.groups.A === 8 && imageInventory.summary.pilot.reductionPercent > 50, 'Phase 4 pilot ผ่าน verification และลดขนาดรวมมากกว่า 50%');
const localPrimaryRefs = productSource.match(new RegExp("img: 'images/products/[a-z0-9-]+[.]webp'", 'g')) || [];
check(localPrimaryRefs.length === 78, 'Product data มี 78 product records ที่ใช้ local WebP หลังยืนยัน xboom STAGE501');
check(new Set(localPrimaryRefs.map(ref => ref.slice(ref.indexOf('images/products/'), -1))).size === 64, '78 local product records ใช้ 64 unique WebP assets โดย OLED และแอร์ series แชร์ภาพอย่างตั้งใจ');
check(/localPrimary/.test(pdp) && /fetchpriority="high"/.test(pdp), 'PDP ใช้ local primary ก่อน gallery และให้ priority กับภาพหลัก');
check(/loading="lazy"/.test(catalogSource) && !/position <= 4 \? 'eager'/.test(catalogSource), 'Catalog lazy-load รูปสินค้าซึ่งอยู่ใต้ส่วนค้นหา');
check(!/class="trust-strip"/.test(home), 'Home ไม่มี trust strip ที่ซ้ำกับ Why FLEXI-SUB');
check(/rel="preload"\s+as="image"\s+href="images\/hero-8-d\.webp"/.test(home), 'Home preload WebP Hero desktop');
check(/rel="preload"\s+as="image"\s+href="images\/hero-8-m\.webp"/.test(home), 'Home preload WebP Hero mobile');
check(!/function preloadHero\(/.test(home) && !/const probe = new Image\(\)/.test(home), 'Home ไม่ preload หรือ probe Hero carousel ที่ยังไม่เห็น');
check(/data-src=/.test(home) && /function loadHeroImg\(/.test(home), 'Home โหลด Hero สไลด์ถัดไปเมื่อถูกแสดง');
check(/width=\"1920\" height=\"720\" loading=\"eager\" fetchpriority=\"high\"/.test(home) && /width=\"1920\" height=\"720\" loading=\"lazy\"/.test(home), 'Home Hero ระบุ intrinsic aspect ratio เพื่อลด layout shift');
check(!/fetchpriority=\\\"high\\\" decoding=\\\"async\\\"/.test(home), 'Home LCP Hero ไม่บังคับ async decode ซึ่งอาจหน่วง first paint');
check(/\.hero-note \{ font-size: 11px;[^}]*max-width: min\(520px, 52vw\);[^}]*overflow: visible/.test(home) && /\.hero-progress-wrap \{[^}]*max-width: calc\(40% - 28px\)/.test(home), 'Home Hero footnote มีพื้นที่พอและไม่ตัดข้อความ');
check(/hero-track \{ min-height: 710px; \}/.test(premium) && /hero-track \{ min-height: 610px; \}/.test(premium), 'Home จองพื้นที่ Hero บน tablet และ mobile เพื่อลด CLS');
check((home.match(/all-Banner_1920x720\.jpg/g) || []).length === 1, 'Home Hero ไม่มีภาพแคมเปญซ้ำ');
check((home.match(/HERO_SLIDES\s*=\s*\[/g) || []).length === 1, 'Home Hero HERO_SLIDES array ปรากฏหนึ่งครั้ง');
check(/-Birthday_1920x720\.jpg/.test(home) === false, 'Home Hero ไม่มีสไลด์โปรครบรอบ (ย้ายไป promotions.html)');
check(/ซับ 2 แถม 1/.test(home) && /ซับ 1 แถม 1/.test(home), 'Home Hero มีสไลด์โปร IXY และ OLED');
check((home.match(/btn2: \{ text: 'เลือกสินค้า', href: 'products\.html' \}/g) || []).length === 2, 'Hero โปร IXY/OLED ส่งลูกค้าไป Catalog ก่อนตะกร้า');
check(!/โปรปัง/.test(home) && !/โปรคุ้ม 2 ต่อ/.test(home) && !/ชวนเพื่อน/.test(home) && !/AWO/.test(home), 'Home Hero ไม่มีสไลด์ที่ลบแล้ว');
check(/แคมเปญจาก LG/.test(promotions) && /เดือนแรก 149 บาท และลด 50% นาน 11 รอบบิล/.test(promotions), 'Promotions มีแคมเปญปัจจุบันจาก LG Thailand');
check(!/โปรปังฉลองวันครบรอบ 38 ปี LG/.test(promotions) && !/15–23 ส\.ค\. 2569/.test(promotions) && /หมดเขตโปรโมชัน 31 ส\.ค\. 2569/.test(promotions), 'Promotions ถอดแคมเปญที่หมดอายุ 23 ส.ค. และคงวันหมดเขตรอบเดือน');
check(/href="products\.html">สร้างแพ็กเกจของคุณ/.test(promotions) && /href="#promos">ดูรุ่นและแพ็กเกจ/.test(promotions), 'Promotion CTA พาลูกค้าไปดูรุ่นหรือเลือกสินค้าก่อนเข้าตะกร้า');
check(/images\/promotions\/ktc-credit\.jpg/.test(promotions) && /images\/promotions\/uob-credit\.jpg/.test(promotions), 'Promotions มีรูปจริงโปรบัตรเครดิต KTC และ UOB');
check(!/id="conditions"/.test(promotions) && !/สิทธิพิเศษหลักในเดือนนี้/.test(promotions), 'Promotions ไม่มีส่วนสิทธิพิเศษที่ซ้ำกับแคมเปญด้านบน');
check(canonicalProducts.length === 99 && canonicalProducts.reduce((total, product) => total + product.plans.length, 0) === 197, 'Canonical products.js มีสินค้า 99 รายการขายและ 197 แผน');
check(/ทุกรุ่น 99 รายการ/.test(home) && /<strong>99 รุ่น<\/strong>/.test(promotions), 'Home และ Promotions แสดงจำนวนสินค้า 99 รุ่นตรงกับ canonical data');
check(new Set(canonicalProducts.map(product => product.id)).size === canonicalProducts.length, 'Canonical products.js ไม่มี product id ซ้ำ');
check(new Set(canonicalProducts.map(product => product.model)).size === canonicalProducts.length, 'Canonical products.js ไม่มี model ซ้ำ');
check(canonicalProducts.filter(product => /\(ของแถม\)/.test(product.name || '')).every(product => Boolean(product.gift)), 'สินค้าที่ระบุของแถมมี gift field สำหรับ PDP และข้อความส่งฝ่ายขายครบ');
check(/if \(p\.gift \|\| name\.includes\('ของแถม'\) \|\| txt\.includes\('ของแถม'\)\) set\.add\('gift'\);/.test(promotions), 'Promotions ใช้ canonical product.gift จัด badge ของแถม ไม่พึ่งชื่อหรือ promo text อย่างเดียว');
check(canonicalProducts.filter(product => Boolean(product.gift)).length === 8 && canonicalProducts.some(product => product.model === 'xboom STAGE501' && Boolean(product.gift)), 'Canonical data มีของแถม 8 รุ่นรวม xboom STAGE501');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const expectedProductUrls = canonicalProducts.map(product => 'https://eakkapantanyanon.github.io/lg-subscribe-store/product.html?slug=' + encodeURIComponent(product.id));
check(expectedProductUrls.every(url => sitemapUrls.includes(url)) && sitemapUrls.filter(url => /product\.html\?slug=/.test(url)).length === canonicalProducts.length, 'Sitemap มี PDP slug ครบทุก product record และไม่มีรายการเกิน');
const parseBillRange = range => {
  const match = String(range || '').match(/(\d+)(?:\s*-\s*(\d+))?/);
  return match ? [Number(match[1]), Number(match[2] || match[1])] : null;
};
let monthlyPlanCoreValid = true;
let billScheduleContinuityValid = true;
for (const product of canonicalProducts) {
  for (const plan of product.plans) {
    if (plan.outright) continue;
    if (!(plan.price > 0) || !(plan.regular > 0) || !(plan.postPromoPrice > 0) || !(plan.months > 0)) monthlyPlanCoreValid = false;
    if (Array.isArray(plan.billSchedule) && plan.billSchedule.length) {
      let previousEnd = 0;
      for (const bill of plan.billSchedule) {
        const parsed = parseBillRange(bill.range);
        if (!parsed || parsed[0] !== previousEnd + 1 || parsed[1] < parsed[0]) billScheduleContinuityValid = false;
        if (parsed) previousEnd = parsed[1];
      }
      if (previousEnd !== plan.totalContractMonths) billScheduleContinuityValid = false;
    }
  }
}
check(monthlyPlanCoreValid, 'ทุก monthly plan มี price/regular/postPromoPrice/months ที่เป็นค่าบวก');
check(billScheduleContinuityValid, 'ทุก billSchedule ต่อเนื่องและจบตรง totalContractMonths');
const fallbackPrices = { WT2520NHEG: 1999, 'GC-L257KQKW': 649, FV1409H4W: 299, SAQ11A: 799, OLED48C6PSA: 749, 'A9T-ULTRA': 749, DFC335HM: 749, AS25GCBY0: 549 };
for (const [model, price] of Object.entries(fallbackPrices)) {
  check(new RegExp("model: ['\\\"]" + model + "['\\\"][^\\n]*price: " + price + '\\b').test(home), model + ' Home fallback price ตรง canonical');
}
for (const page of [promotions, cart]) {
  check(!/<script[^>]*>[\s\S]*window\.LG_PRODUCTS\s*=/.test(page), 'หน้าร้านไม่มี embedded full dataset');
  check(page.indexOf('analytics.js') < page.indexOf('<script src="products.js">'), 'products.js โหลดหลัง analytics.js');
}
check(promotions.indexOf('products.js') < promotions.indexOf('const PRODUCTS'), 'Promotions โหลด products.js ก่อน consumer script');
check(cart.indexOf('products.js') < cart.indexOf('calculator-core.js') && cart.indexOf('products.js') < cart.indexOf('cart.js') && cart.indexOf('products.js') < cart.indexOf('product-select.js'), 'Cart โหลด products.js ก่อน calculator/cart/product-select consumers');
check(/promotions\.html#official-campaigns/.test(home), 'Home เงื่อนไขบริการชี้ไปยัง Promotions campaign section');
check(/index\.html#products/.test(promotions) && !/index\.html#planner/.test(promotions), 'Promotions CTA ชี้ไปยัง Home product section');
check(/localStorage\.getItem\('flexiAdminProducts'\)/.test(cart) && /saved \? JSON\.parse\(saved\)/.test(cart) && /DEFAULT_PRODUCTS/.test(cart), 'Subscribe Store รองรับ localStorage admin override บน canonical data');
for (const model of protectedModels) {
  const current = productByModel(canonicalProducts, model);
  const baseline = productByModel(headProducts, model);
  const stripVariants = p => { const c = { ...p }; delete c.variants; return c; };
  // 75QNED86BSA: strip authorized Aug 2026 price fields before comparison
  // so the check catches unintended changes to every other field
  const stripAuthorizedQned = p => {
    const c = stripVariants(p);
    delete c.img;
    if (c.plans && c.plans[0]) {
      const pl = { ...c.plans[0] };
      delete pl.regular; delete pl.effectiveMonthly; delete pl.postPromoPrice;
      delete pl.advancePayment; delete pl.price;
      if (pl.billSchedule) pl.billSchedule = pl.billSchedule.map(b => { const bc = { ...b }; delete bc.price; return bc; });
      c.plans = [pl];
    }
    return c;
  };
  // 27GX704A-B: authorized billing correction changed plan count (2→1)
  // and billing period structure. Compare base product fields + plan structural fields only.
  const stripAuthorizedGx = p => {
    const c = stripVariants(p);
    delete c.img;
    if (c.plans && c.plans[0]) {
      const pl = { ...c.plans[0] };
      delete pl.regular; delete pl.effectiveMonthly; delete pl.postPromoPrice;
      delete pl.advancePayment; delete pl.price; delete pl.promoMonths;
      delete pl.totalSaving; delete pl.label; delete pl.promo;
      delete pl.billSchedule; // billing periods restructured in authorized correction
      c.plans = [pl];
    } else { c.plans = []; }
    return c;
  };
  const stripAuthorizedImage = p => { const c = stripVariants(p); delete c.img; return c; };
  const strip = model === '75QNED86BSA' ? stripAuthorizedQned : model === '27GX704A-B' ? stripAuthorizedGx : (model === 'WD516AN' || model === 'WD518AN') ? stripAuthorizedImage : stripVariants;
  check(JSON.stringify(strip(current)) === JSON.stringify(strip(baseline)), model + ' ไม่เปลี่ยนจาก HEAD (authorized fields stripped)');
}
// 75QNED86BSA: explicit August 2026 reconciliation assertions
const qned86 = productByModel(canonicalProducts, '75QNED86BSA');
const q86p = qned86.plans[0];
check(q86p.regular === 899, '75QNED86BSA regular = 899');
check(q86p.effectiveMonthly === 449.5, '75QNED86BSA effectiveMonthly = 449.5');
check(q86p.postPromoPrice === 899, '75QNED86BSA postPromoPrice = 899');
check(q86p.advancePayment === 5394, '75QNED86BSA advancePayment = 5394');
check(q86p.price === 899, '75QNED86BSA price = 899');
check(q86p.billSchedule[0].price === 449.5, '75QNED86BSA billSchedule 1-12 = 449.5');
check(q86p.billSchedule[1].price === 899, '75QNED86BSA billSchedule 13-60 = 899');
check(q86p.totalContractMonths === 60, '75QNED86BSA totalContractMonths = 60');
check(q86p.totalSaving === 0, '75QNED86BSA totalSaving = 0');
check(q86p.serviceType === 'No Service', '75QNED86BSA serviceType = No Service');
check(q86p.serviceCycle === 'ไม่มีบริการ', '75QNED86BSA serviceCycle = ไม่มีบริการ');
// 27GX704A-B: explicit billing correction assertions
const gx704 = productByModel(canonicalProducts, '27GX704A-B');
check(gx704.plans.length === 1, '27GX704A-B มี 1 plan เท่านั้น');
const gx704p = gx704.plans[0];
check(gx704p.regular === 399, '27GX704A-B regular = 399');
check(gx704p.price === 399, '27GX704A-B price = 399');
check(gx704p.effectiveMonthly === 199.5, '27GX704A-B effectiveMonthly = 199.5');
check(gx704p.advancePayment === 2394, '27GX704A-B advancePayment = 2394');
check(gx704p.totalContractMonths === 60, '27GX704A-B totalContractMonths = 60');
check(gx704p.totalSaving === 600, '27GX704A-B totalSaving = 600');
check(gx704p.serviceType === 'No Service', '27GX704A-B serviceType = No Service');
check(gx704p.billSchedule[0].price === 199.5, '27GX704A-B billSchedule 1-12 = 199.5');
check(gx704p.billSchedule[1].price === 199, '27GX704A-B billSchedule 13-15 = 199');
check(gx704p.billSchedule[2].price === 399, '27GX704A-B billSchedule 16-60 = 399');
check(!gx704.plans.some(p => p.regular === 349), '27GX704A-B retired 349 plan ไม่มีแล้ว');
const wd516 = productByModel(canonicalProducts, 'WD516AN');
const wd518 = productByModel(canonicalProducts, 'WD518AN');
check(wd516.plans.some(plan => plan.serviceType === 'Visit' && plan.outright) && wd518.plans.some(plan => plan.serviceType === 'Visit' && plan.outright), 'WD516AN และ WD518AN มี Visit outright');
check(wd516.plans.some(plan => plan.serviceType === 'Self' && plan.outright) && wd518.plans.some(plan => plan.serviceType === 'Self' && plan.outright), 'WD516AN และ WD518AN มี Self outright');
const oled48Regular = productByModel(canonicalProducts, 'OLED48C6PSA');
const oled48Bundle = productByModel(canonicalProducts, 'OLED48C6PSA + xboom BOUNCE');
check(oled48Regular.plans.length === 1 && oled48Regular.plans[0].regular === 749 && oled48Regular.plans[0].promoMonths === 8, 'OLED48C6PSA รุ่นปกติ 749 บาท/เดือน ลด 50% 8 เดือน');
check(oled48Bundle && oled48Bundle.plans.length === 1 && oled48Bundle.plans[0].regular === 749 && oled48Bundle.plans[0].promoMonths === 3 && /xboom BOUNCE/.test(oled48Bundle.plans[0].promo), 'OLED48C6PSA รุ่นแถม 749 บาท/เดือน ลด 50% 3 เดือน + xboom BOUNCE');
check(oled48Regular.img === oled48Bundle.img, 'OLED48C6PSA สองรายการขายแชร์ local image เดียวกันโดยไม่สร้างไฟล์ซ้ำ');
const tvBundlePairs = [
  ['OLED48C6PSA', 'OLED48C6PSA + xboom BOUNCE'],
  ['OLED55C6PSA', 'OLED55C6PSA + S30A'],
  ['OLED65C6PSA', 'OLED65C6PSA + S80TY'],
  ['OLED77C6PSA', 'OLED77C6PSA + S80TY'],
  ['27LX6TDGA', '27LX6TDGA + xboom GRAB']
];
for (const [baseModel, bundleModel] of tvBundlePairs) {
  const base = productByModel(canonicalProducts, baseModel);
  const bundle = productByModel(canonicalProducts, bundleModel);
  const basePlan = base.plans[0];
  const bundlePlan = bundle.plans[0];
  check(basePlan.price === bundlePlan.price && basePlan.regular === bundlePlan.regular && basePlan.postPromoPrice === bundlePlan.postPromoPrice, baseModel + ' และรุ่นของแถมมีราคาต่อเดือนปกติเท่ากัน');
  check(basePlan.promoMonths === 8 && bundlePlan.promoMonths === 3, baseModel + ' รุ่นปกติลด 50% 8 เดือน และรุ่นของแถมลด 50% 3 เดือน');
}
check(pages.every(page => fs.readFileSync(path.join(ROOT, page), 'utf8').includes('premium.css')), 'ทุกหน้าหลักใช้ Premium CSS กลาง');
check(!/💳|🔧|🛡️|🔄|🔍|🛒/.test(pages.map(page => fs.readFileSync(path.join(ROOT, page), 'utf8')).join('\n')), 'แทน emoji UI ที่กำหนดด้วย line icon แล้ว');
check(/สายเกมมิ่ง \(Gaming Lifestyle\)/.test(home) && !/คาเฟ่ \/ ธุรกิจเล็ก/.test(home), 'Home เปลี่ยน Lifestyle ธุรกิจเล็กเป็นสายเกมมิ่ง');
check(/id: 'gaming'[\s\S]*27gx704a[\s\S]*oled48c6psa/.test(home), 'Gaming Lifestyle แนะนำมอนิเตอร์และทีวี OLED');
check(/เดือนแรก ฿149 \+ ลด 50% นาน 11 รอบบิล/.test(home) && /images\/promotions\/wp-kum-2-tor\.jpg/.test(home) && !/คอมโบช่วงโปรครบรอบ ลด 15% ตลอดสัญญา/.test(home), 'Home Promotion ถอดโปรครบรอบที่หมดอายุและแสดงคุ้ม 2 ต่อปัจจุบัน');
check(/images\/promotions\/air-purifier-kum-2-tor\.jpg/.test(home) && /images\/promotions\/oled48-xboom\.jpg/.test(home), 'Home Promotion ใช้ภาพใหม่สำหรับลด 50% และของแถม');
const firstBill149Products = canonicalProducts.filter(product => (product.plans || []).some(plan => String(plan.promo || '').includes('บิลแรก ฿149')));
const half50Durations = [];
canonicalProducts.forEach(product => (product.plans || []).forEach(plan => {
  const promo = String(plan.promo || '');
  let match = promo.match(/50% เดือน (\d+)-(\d+)/);
  if (match) half50Durations.push(Number(match[2]) - Number(match[1]) + 1);
  match = promo.match(/50% เพิ่ม (\d+) เดือน/);
  if (match) half50Durations.push(Number(match[1]));
}));
const canonicalGifts = canonicalProducts.map(product => String(product.gift || '')).filter(Boolean).join(' | ');
check(firstBill149Products.length === 52 && /เฉพาะรุ่นและแพ็กเกจที่ระบุสิทธิ์บิลแรก ฿149/.test(home), 'Home จำกัดข้อความบิลแรก ฿149 เฉพาะแพ็กเกจที่มีสิทธิ์จริงใน canonical data');
check(Math.max(...half50Durations) === 20 && Math.min(...half50Durations) === 2 && /สูงสุด 20 เดือน/.test(home) && /ตั้งแต่ 2–20 เดือน/.test(home), 'Home ช่วงโปร 50% ตรงกับระยะจริงใน canonical plans');
check(/AeroMini/.test(canonicalGifts) && /Soundbar/.test(canonicalGifts) && /xboom/i.test(canonicalGifts) && /AeroMini · Soundbar · xboom/.test(home) && !/เครื่องกรองน้ำ · AeroMini · ลำโพง/.test(home), 'Home สรุปของแถมเฉพาะประเภทที่มีอยู่จริงใน product data');
check((home.match(/promo-card[^"\n]*featured/g) || []).length === 2 && /promo-card\.featured/.test(premium), 'Home โปรบิลแรกและลด 50% มี accent เด่น');
check(/body\[data-page="home"\] \.h-btn-solid/.test(premium) && /service-banner \.btn-pill\.light/.test(premium), 'Home CTA แยกปุ่มหลักสีแบรนด์และปุ่มรองแบบ outline');
check((home.match(/<svg class="payment-mark"/g) || []).length === 4 && (promotions.match(/<svg class="payment-mark"/g) || []).length === 4 && !/TrueMoney Wallet|Rabbit LINE Pay|ShopeePay|PromptPay/.test(home + promotions), 'Footer แสดงเฉพาะเครือข่ายบัตรเครดิต/บัตรชำระเงิน');
check(/payment-mark:hover\s*\{[^}]*grayscale\(0\)/.test(premium), 'Payment marks เป็นสีจริงเมื่อ hover');
check(/#why \.benefit-card \{[\s\S]*padding: 30px 0 24px 76px/.test(premium) && /padding: 20px 0 20px 62px/.test(premium), 'Why section เว้นพื้นที่ icon ไม่ให้ทับข้อความทั้ง desktop/mobile');
check(/hero-slide:first-child \.hero-campaign[\s\S]*transform: scale\(1\.12\)/.test(premium), 'Hero แรก crop artwork ฝั่งซ้ายเพื่อไม่โชว์เศษข้อความในภาพ');
check(!/WHY LG SUBSCRIBE|SHOP BY LIFESTYLE|CHOOSE WITH CONFIDENCE|HOW IT WORKS|OFFICIAL LG CAMPAIGNS|CREDIT CARD OFFERS|PRODUCT OFFERS|YOUR SUBSCRIPTION PLAN/.test(home + promotions + catalogHtml + cart), 'UI kicker หลักใช้ภาษาไทยสม่ำเสมอ');

check(/id="addBtn"/.test(pdp), 'PDP มีปุ่มใส่ตะกร้า');
check(/id="sumBreakdown"[^>]*type="button"[^>]*disabled/.test(pdp), 'PDP breakdown trigger เป็น semantic button และเริ่มต้น disabled');
check(/id="breakdownModal"[^>]*role="dialog"[^>]*aria-modal="true"[^>]*aria-labelledby="modalTitle"/.test(pdp), 'PDP breakdown modal มี dialog semantics');
check(/trapDialogFocus/.test(pdp) && /closeBreakdown/.test(pdp) && /modalClose\.focus\(\)/.test(pdp), 'PDP modal รองรับ focus trap, Escape และ focus return');
check(!/optionWrap\.appendChild\(iBtn\)/.test(pdp) && !/info-btn|Popover \(i\)|togglePopover/.test(pdp), 'PDP เอาปุ่ม info และ popover ซ้ำซ้อนออกจากตัวเลือกบริการ');
check(/aria-checked=/.test(pdp) && /setAttribute\('role', 'radiogroup'\)/.test(pdp) && /ArrowRight/.test(pdp) && /ArrowLeft/.test(pdp), 'PDP color selector ใช้ radio semantics และ arrow-key navigation');
check(/subscribe-store\.html/.test(pdp), 'PDP เชื่อมไปตะกร้า');
check(/main\.pdp-layout/.test(pdp) && !/main \.pdp-layout/.test(pdp), 'PDP ใช้ responsive selector ที่ตรงกับ main element');
check(/Array\.isArray\(p\.gallery\)/.test(pdp) && /gallerySource\.slice\(0, 4\)/.test(pdp), 'PDP รองรับแกลลอรี่สินค้าไม่เกิน 4 ภาพ');
check((productSource.match(/A9T-ULTRA_PH_/g) || []).length === 4, 'A9T-ULTRA มีภาพสินค้า 4 มุม');
check(/LG_PRODUCT_GALLERIES/.test(pdp) && /product-galleries\.js/.test(pdp), 'PDP โหลดแกลลอรี่รวมของทุกสินค้า');
check(/showGalleryPlaceholder/.test(pdp) && /thumbImg\.hidden = true/.test(pdp) && /revealWhenLoaded/.test(pdp), 'PDP ป้องกัน broken-image icon และคง fallback สำหรับภาพหลักกับ thumbnail');
check(/th\.classList\.add\('has-image'\)/.test(pdp) && /\.g-thumb\.has-image \.t-emoji \{ visibility: hidden; \}/.test(pdp) && /\.g-thumb\.has-image:has\(img\[hidden\]\) \.t-emoji \{ visibility: visible; \}/.test(pdp), 'PDP thumbnail ซ่อน fallback emoji เมื่อรูปจริงโหลดสำเร็จและแสดงเฉพาะเมื่อรูปเสีย');
check(/dfc335hm-abmpeth\.jpg/.test(productSource), 'DFC335HM มีภาพสำรองเมื่อ LG ป้องกัน hotlink');
check(!/https:\/\/(?!www\.lg\.com|arttato\.github\.io)/.test(gallerySource), 'แกลลอรี่ใช้เฉพาะโฮสต์ภาพที่อนุญาต');
check((gallerySource.match(/https:\/\/arttato\.github\.io\/LG-Subscribe\/img\/products\//g) || []).length === 10, 'สินค้า 10 รุ่นที่ไม่มีภาพ LG Thailand ใช้ภาพอ้างอิงที่กำหนด');
check(/เทคโนโลยีเครื่องดูดฝุ่นไร้สาย LG CordZero/.test(pdp) && !/f\.push\('แผน '/.test(pdp), 'PDP bullet ใช้คุณสมบัติสินค้าและไม่สร้างจากข้อมูลแผน');
check(pdp.indexOf("group('ประเภทแผน'") < pdp.indexOf("group('ประเภทการดูแล'"), 'PDP แสดงประเภทแผนก่อนประเภทการดูแล');
check(/const pts = SEL\.planTypes\(product\);\s*wrap\.appendChild\(group\('ประเภทแผน'/.test(pdp), 'PDP แสดงกลุ่มประเภทแผนเสมอ');
check(/care-detail-trigger/.test(pdp) && /care-popover-title/.test(pdp) && /บริการที่คุณได้รับ/.test(pdp) && /care-cycle-group/.test(pdp), 'PDP ซ่อนข้อมูลบริการไว้ใน popover และจัดกลุ่มให้อ่านตามรอบบริการ');
check(/ดูบริการทั้งหมด —/.test(pdp) && /care-popover-plan/.test(pdp) && /aria-controls/.test(pdp), 'ปุ่มบริการผูกกับประเภทบริการของการ์ดและรายละเอียดของตัวเองอย่างชัดเจน');
check(/\.care-option \{ position: relative; padding-bottom: 11px; border-bottom: 1px solid/.test(pdp) && /\.care-detail-trigger \{ position: relative;/.test(pdp), 'การ์ดบริการแต่ละตัวมีขอบเขตชัดและปุ่มรายละเอียดไม่ซ้อนกับสถานะเลือก');
check(/care-popover-close/.test(pdp) && /role', 'region'/.test(pdp), 'Care detail มีปุ่มปิดและ semantics แบบ disclosure region');
check(/care-popover-summary/.test(pdp) && /care-popover-groups/.test(pdp) && /แสดงบริการทั้งหมดของแพ็กเกจนี้/.test(pdp), 'Care popover แสดงจำนวนรายการและจัดกลุ่มบริการทั้งหมดให้เห็นชัด');
check(/\.care-popover \{ position: static; z-index: auto; width: 100%; max-height: none; overflow: visible/.test(pdp) && /\.care-popover-groups \{ display: grid; grid-template-columns: 1fr/.test(pdp), 'Care detail เปิดแบบ inline 1 คอลัมน์ ไม่ทับหน้าและไม่ซ่อนรายการหลัง scroll ภายใน');
check(/background: #fff; color: #231d20/.test(pdp) && /care-cycle-group \{ padding: 11px 12px/.test(pdp), 'Care popover ใช้พื้นสว่าง contrast สูงและแยกรอบบริการเป็นกลุ่ม');
check(/\.care-detail-trigger \{ position: relative/.test(pdp) && !/\.care-detail-trigger \{ position: absolute/.test(pdp), 'ปุ่มรายละเอียดบริการไม่ซ้อนตำแหน่งกับเครื่องหมายเลือกแพ็กเกจ');
const productSelectSource = fs.readFileSync(path.join(ROOT, 'product-select.js'), 'utf8');
const serviceCycleSource = fs.readFileSync(path.join(ROOT, 'service-cycles.js'), 'utf8');
check(/service-cycles\.js\?v=20260823/.test(pdp) && /Price list_Aug_V3\.pdf/.test(serviceCycleSource), 'PDP โหลดรอบบริการจาก Price List ที่ตรวจสอบแล้ว');
check(/WD516AN\|Self\|24\|31410/.test(serviceCycleSource) && /WD518AN\|Visit\|24\|34110/.test(serviceCycleSource), 'Outright 2Y ของ WD516AN/WD518AN mapping Visit/Self ครบทั้ง 4 แผน');
check(!/ตรวจและทำความสะอาดเครื่อง[\s\S]*?ทุก 12 เดือน/.test(productSelectSource) && /รอบเข้าดูแล/.test(productSelectSource), 'PDP ไม่สร้างรายละเอียดงานบริการเฉพาะหมวดโดยไม่มี source ยืนยัน');
check(!/ทุก 6\/12 เดือน/.test(productSelectSource) && !/ค่าเช่าถูกลง/.test(productSelectSource) && !/รับประกันเท่านั้น/.test(productSelectSource), 'ข้อความ Care fallback ไม่อ้างรอบ/ประโยชน์/การรับประกันที่ไม่ได้ยืนยันกับทุกรุ่น');
check(/รายละเอียดงานขึ้นอยู่กับรุ่นและเงื่อนไขบริการ/.test(productSelectSource) && /รายการอุปกรณ์ขึ้นอยู่กับรุ่นและเงื่อนไขบริการ/.test(productSelectSource), 'Care fallback บอกขอบเขตข้อมูลอย่างตรงไปตรงมา');
check(/window\.LG_SERVICE_CYCLE_MAP=map/.test(serviceCycleSource) && /serviceSource/.test(serviceCycleSource), 'รอบบริการทุกหมวดใช้ source map เดียวจาก Price List ที่ตรวจสอบแล้ว');
check(/CARE_DETAIL_OVERRIDES/.test(productSelectSource) && /override\.source/.test(productSelectSource), 'Care detail เฉพาะรุ่นเก็บ source แยกจาก fallback อย่างชัดเจน');
check(/product-select\.js\?v=20260823-care4/.test(pdp) && /product-select\.js\?v=20260823-care4/.test(cart), 'PDP/Cart cache-bust Care Service runtime เวอร์ชันล่าสุด');
check(/Care Service AS25GCBY0/.test(productSelectSource) && /ครบ 36 เดือน/.test(productSelectSource), 'AeroCat ใช้รายละเอียด Care Service ล่าสุดเฉพาะรุ่น');
check(!/อ้างอิงรอบบริการจาก/.test(pdp) && /รายละเอียดบริการเป็นไปตามรุ่น แพ็กเกจ และเงื่อนไขบริการที่เลือก/.test(pdp), 'Tooltip ลูกค้าไม่แสดงชื่อ source ทางเทคนิคและใช้หมายเหตุที่อ่านง่าย');
check(fs.existsSync(path.join(ROOT, 'docs', 'audits', 'care-service-source-register.md')), 'มีทะเบียน Source of Truth สำหรับ Care Service');
check(fs.existsSync(path.join(ROOT, 'scripts', 'audit-care-service.js')), 'มี Care Service coverage audit ที่รันซ้ำได้');
check(/select\.careInfo/.test(fs.readFileSync(path.join(ROOT, 'scripts', 'audit-care-service.js'), 'utf8')), 'Care Service audit ตรวจ detail coverage จาก runtime careInfo จริง');
execFileSync('node', [path.join(ROOT, 'scripts', 'audit-care-service.js')], { cwd: ROOT, stdio: 'pipe' });
check(fs.existsSync(path.join(ROOT, 'docs', 'audits', 'care-service-coverage.json')), 'มี Care Service coverage report ล่าสุด');
const careCoverage = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs', 'audits', 'care-service-coverage.json'), 'utf8'));
check(careCoverage.summary.products === canonicalProducts.length && careCoverage.summary.verifiedDetailModels.includes('AS25GCBY0'), 'Care Service coverage สร้างใหม่จาก catalog/runtime และพบ AeroCat override');
check(careCoverage.summary.productsWithCarePlans === 66 && careCoverage.summary.productsWithVerifiedDetail === 66, 'Care Service detail ครบสินค้าที่มี Visit/Self ทั้ง 66 รุ่น');
const careRegister = fs.readFileSync(path.join(ROOT, 'docs', 'audits', 'care-service-source-register.md'), 'utf8');
check(/ตู้ถนอมผ้า \(Styler\)/.test(careRegister) && /GC-X257CMHW/.test(careRegister) && /GC-L24FFCBB/.test(careRegister), 'ทะเบียน Care Service บันทึกกฎ Styler และตู้เย็นต่อท่อ');
check(/GC-X24FFCRB/.test(careRegister) && !canonicalProducts.some(p => p.model === 'GC-X24FFCRB'), 'GC-X24FFCRB ถูกจดเป็น future model และยังไม่เข้า catalog ปัจจุบัน');
check(/AS25GCBY0/.test(careRegister) && /CARE_DETAIL_OVERRIDES\.AS25GCBY0/.test(careRegister), 'ทะเบียน Care Service เก็บ AeroCat model-specific override');
check(/care-service-source-register\.md/.test(fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8')), 'README ชี้ไปทะเบียน Care Service source');
check(/care-service-coverage\.json/.test(careRegister), 'ทะเบียน Care Service ชี้ไป coverage report ที่สร้างซ้ำได้');

check(/id="cartItems"/.test(cart), 'Cart มีรายการสินค้า');
check(/\.catalog-grid \.p-cta a \{ min-height: 48px/.test(fs.readFileSync(path.join(ROOT, 'catalog.css'), 'utf8')), 'Catalog mobile CTA มี touch target อย่างน้อย 48px');
check(/aside \.btn-primary \{ min-height: 52px/.test(pdp), 'PDP mobile sticky CTA มี touch target 52px');
check(/class="mobile-lead-assist"/.test(pdp) && /สอบถามเจ้าหน้าที่ก่อนเลือกแพ็กเกจ/.test(pdp) && /https:\/\/line\.me\/R\/ti\/p\/@lgthailand/.test(pdp) && /\.mobile-lead-assist \{[\s\S]*?display: flex;/.test(pdp), 'PDP mobile มีทางสอบถามก่อนเลือกแพ็กเกจโดยไม่เพิ่มปุ่มใน sticky bar');
check(/--premium-radius-md: 16px/.test(fs.readFileSync(path.join(ROOT, 'premium.css'), 'utf8')) && /--premium-focus:/.test(fs.readFileSync(path.join(ROOT, 'premium.css'), 'utf8')), 'Premium UI มี radius/focus design tokens');
check(/family=Anuphan/.test(home + pdp + cart + promotions + catalogHtml) && /family=Bai\+Jamjuree/.test(home + pdp + cart + promotions + catalogHtml), 'ทุกหน้าหลักโหลด FLEXI-SUB signature font pair');
check(/--font-body: "Anuphan"/.test(premium) && /--font-display: "Bai Jamjuree"/.test(premium), 'Typography system แยก body และ display font ชัดเจน');
check(/body\[data-page="product-detail"\] \.care-lines li \{ font-size: 13\.5px/.test(premium), 'PDP ข้อความบริการเพิ่มความชัดและขนาดอ่านง่าย');
check(/\.big-price \{ font-size: clamp\(34px, 3vw, 42px\)/.test(pdp) && /font-variant-numeric: tabular-nums/.test(pdp), 'PDP ให้ราคาต่อเดือนเป็น visual hierarchy หลัก');
check(!/card\.setAttribute\('aria-label', 'ดูแพ็กเกจ '/.test(home), 'Home product cards ใช้ visible text เป็น accessible name');
check(/#products \.p-model \{ color: #6f666a/.test(home) && /body\[data-page="home"\] #products \.p-model \{[\s\S]*?color: #6f666a/.test(premium), 'Home product model contrast ผ่านเกณฑ์ WCAG รวม premium override');
check(!/<div class="f-col">\s*<h4>/.test(home) && /\.f-col h3 \{/.test(home), 'Home footer heading hierarchy ต่อเนื่อง');
check(/<script src="analytics\.js\?v=ga4-2" defer><\/script>/.test(home) && /<script src="products\.js" defer><\/script>/.test(home), 'Home defer analytics และ canonical products.js โดยไม่ block initial render');
check(/function syncCanonicalProducts\(\)/.test(home) && /DOMContentLoaded[\s\S]*syncCanonicalProducts\(\);[\s\S]*renderCats\(\);[\s\S]*renderLifestyle\(\);[\s\S]*renderProducts\(\);/.test(home), 'Home รอ canonical product data ก่อนคำนวณ Category/Lifestyle/Product Grid');
check(/<link rel="stylesheet" href="premium\.css\?v=11">/.test(home) && /family=Anuphan:wght@400;500;600;700/.test(home), 'Home คง critical layout CSS แบบ blocking เพื่อป้องกัน CLS และตัด Anuphan 300 ที่ไม่จำเป็น');
check(/UX\/UI MAX · Catalog conversion polish/.test(fs.readFileSync(path.join(ROOT, 'catalog.css'), 'utf8')) && /\.catalog-grid \.p-price strong[^}]*color: var\(--catalog-brand\)/s.test(fs.readFileSync(path.join(ROOT, 'catalog.css'), 'utf8')), 'Catalog UX/UI Max เน้นราคาและสถานะการ์ดอย่างสม่ำเสมอ');
check(/catalog\.css\?v=15/.test(catalogHtml) && /\.catalog-grid \.p-model \{[\s\S]*?color: #6f666a/.test(fs.readFileSync(path.join(ROOT, 'catalog.css'), 'utf8')), 'Catalog model text ใช้ contrast ที่ผ่าน WCAG และ cache version ล่าสุด');
check(!/class="catalog-brand"[^>]*aria-label=/.test(catalogHtml) && !/loadMoreButton\.setAttribute\('aria-label'/.test(catalogSource), 'Catalog accessible names ใช้ข้อความที่มองเห็นโดยไม่ override aria-label');
check(/th\.setAttribute\('aria-label', 'รูปสินค้า '/.test(pdp) && /ดูตะกร้า ' \+ visibleCount \+ ' รายการ'/.test(pdp), 'PDP thumbnail และตะกร้ามี accessible name ที่สื่อความหมาย');
check(/\.crumbs a \{[^}]*text-decoration: underline/.test(pdp), 'PDP breadcrumb links แยกจากข้อความด้วย underline');
check(/\.credit-note \{[^}]*color: #6d625a/.test(promotions) && /\.b-gray \{ background: #666;/.test(promotions) && /\.f-col a \{[^}]*min-height: 24px/.test(promotions) && /p-card-m :where\(\.p-cat, \.p-price small, \.row-cta\) \{ background-color: #fff;/.test(promotions), 'Promotions contrast และ footer touch targets ผ่านเกณฑ์');
check(/\.cart-empty \{ color: #6f666a/.test(cart) && /\.first-bill-note \{ font-size: 12px; color: #6f666a/.test(cart) && /<h2 id="officerContactTitle">/.test(cart), 'Cart contrast และ heading hierarchy ผ่านเกณฑ์');
check(/\.opt-card\.selected::after/.test(premium) && /body\[data-page="product-detail"\] \.color-opt\.selected/.test(premium), 'PDP UX/UI Max แสดง selection state ของแผนและสีชัดเจน');
check(/บัตรเครดิต/.test(cart) && /บัตรเดบิต/.test(cart) && /Direct Debit/.test(cart), 'Cart แสดงช่องทางบัตรเครดิต บัตรเดบิต และหักบัญชี');
check(/รองรับบัตรเดบิตทุกธนาคาร/.test(cart) && /SCB/.test(cart) && /BBL/.test(cart) && /ธนาคารไทยพาณิชย์/.test(cart) && /ธนาคารกรุงเทพ/.test(cart), 'Cart ระบุบัตรเดบิตทุกธนาคาร และ Direct Debit เฉพาะ SCB/BBL');
check(/บัตรเดบิตทุกธนาคาร/.test(home) && /SCB/.test(home) && /BBL/.test(home), 'Home FAQ สอดคล้องกับช่องทางชำระเงินล่าสุด');
check(/id="budgetOptions"/.test(catalogHtml) && /catalog_budget_filter/.test(catalogSource) && /state\.budgetMin/.test(catalogSource) && /state\.budgetMax/.test(catalogSource) && /data-budget-min="500" data-budget-max="800"/.test(catalogHtml) && /catalog\.js\?v=9/.test(catalogHtml), 'Catalog แบ่ง Product Discovery เป็นช่วงราคาไม่ซ้ำกันจาก canonical plans และ cache version ล่าสุด');
check(/id="catalogCompareBar"/.test(catalogHtml) && /id="catalogComparePanel"/.test(catalogHtml) && /catalog_compare_select/.test(catalogSource) && /catalog_compare_view/.test(catalogSource) && /compareSlugs\.length < 3/.test(catalogSource), 'Catalog เปรียบเทียบสินค้าได้ 2–3 รุ่นโดยไม่แก้ canonical product data');
check(/function promotionInsight\(product\)/.test(catalogSource) && /plan\.effectiveMonthly/.test(catalogSource) && /plan\.totalSaving/.test(catalogSource) && /โปรโมชั่นจากแพ็กเกจ/.test(catalogSource) && /p-promo-insight/.test(catalogSource), 'Catalog Price & Promotion Intelligence สรุปโปรเริ่มต้นและยอดประหยัดจาก canonical plan fields เท่านั้น');
check(/id="catalogSavedFilter"/.test(catalogHtml) && /lg_subscribe_saved_products_v1/.test(catalogSource) && /catalog_save_toggle/.test(catalogSource) && /catalog_saved_filter/.test(catalogSource) && /state\.savedOnly/.test(catalogSource), 'Catalog บันทึกรุ่นที่สนใจใน localStorage และกรองดูเฉพาะรุ่นที่บันทึกได้');
check(/id="smartFinderGroups"/.test(catalogHtml) && /id="smartFinderApply"/.test(catalogHtml) && /smart_finder_apply/.test(catalogSource) && /productMatchesFinderGroup/.test(catalogSource) && /productHasService/.test(catalogSource) && /state\.finderCategories/.test(catalogSource), 'Catalog Smart Product Finder คัดจาก canonical products ตามกลุ่มสินค้า งบ และประเภทบริการ');
check(/id="smartFinderShare"/.test(catalogHtml) && /lg_subscribe_smart_finder_v1/.test(catalogSource) && /sf_group/.test(catalogSource) && /smart_finder_share/.test(catalogSource) && /smart_finder_restore/.test(catalogSource), 'Smart Product Finder จำตัวเลือกและแชร์ deep link ที่กู้ผลเดิมได้');
check(/new URLSearchParams\(window\.location\.search\)\.get\('q'\)/.test(catalogSource), 'Catalog รองรับ deep-link คำค้นหาจาก SEO content');
check(/id="priceIntel"/.test(pdp) && /Array\.isArray\(s\.plan\.billSchedule\)/.test(pdp) && /ราคาแต่ละช่วง:/.test(pdp) && /ดูตารางราคาแต่ละช่วง/.test(pdp), 'PDP อธิบายราคาแต่ละช่วงจาก canonical billSchedule ก่อนเปิดรายละเอียด');
check(/LG Subscribe คืออะไร/.test(guide) && /ค้นหารุ่นตามงบรายเดือน/.test(guide) && /ยอดรวมตลอดสัญญา/.test(guide), 'SEO guide ตอบ intent เรื่อง Subscribe งบ และค่าใช้จ่าย');
check(/\"@type\":\"FAQPage\"/.test(guide) && /\"@type\":\"BreadcrumbList\"/.test(guide) && /products\.html\?sf_group=tv/.test(guide) && /products\.html\?sf_group=laundry/.test(guide) && /products\.html\?sf_group=water/.test(guide), 'SEO guide มี FAQ/Breadcrumb structured data และ deep-link เข้า Smart Product Finder จากกลุ่มสินค้าจริง');
check(/พร้อมเลือกแล้ว ไปต่อได้ 3 ทาง/.test(guide) && /data-guide-action="catalog" href="products\.html">เลือกสินค้าตามงบ/.test(guide) && /data-guide-action="promotions" href="promotions\.html#official-campaigns">ดูโปรโมชั่นเดือนนี้/.test(guide) && /data-guide-action="line" href="https:\/\/line\.me\/R\/ti\/p\/@lgthailand"/.test(guide), 'Sales guide มี CTA ปิดท้ายไป Catalog, Promotions และ LINE LG Thailand ครบพร้อม conversion action key');
check(/subscribe-guide\.html/.test(home) && /subscribe-guide\.html/.test(sitemap), 'Home และ sitemap เชื่อมไปคู่มือ LG Subscribe');
check(!/#why, #products, #promotions, #compare, #how, #services, #faq, footer \{ content-visibility: auto/.test(home), 'Home ไม่ใช้ intrinsic placeholder กับทุก section จนเกิดช่องว่าง/scroll jump');
check(/\.campaign-card img \{[^}]*height: auto;[^}]*aspect-ratio: 8\/3/.test(promotions), 'Promotion campaign artwork รักษาสัดส่วน 8:3 โดยไม่ยืดความสูง');
check(/\.schedule-table \{ min-width: 520px/.test(cart) && /\.schedule-toggle \{ overflow-x: auto/.test(cart), 'Cart mobile ตารางชำระเลื่อนได้โดยไม่บีบข้อมูล');
check(/\.contact-btn \{ border-radius: 10px; min-height: 52px/.test(cart), 'Cart mobile CTA ส่งเจ้าหน้าที่มี touch target 52px');
check(/ยอดชำระครั้งแรกคำนวณตามแพ็กเกจที่เลือก/.test(cart) && /เลือกสินค้าเพื่อดูโปรโมชั่น ยอดชำระครั้งแรก และส่วนลดคอมโบจากแพ็กเกจจริง/.test(cart) && !/บิลแรก ฿149 \(แผน Visit\/Self\)/.test(cart), 'Cart ไม่ hardcode งวดแรก ฿149 ให้ทุก Visit/Self และอ้างอิงยอดจากแพ็กเกจจริง');
check(/const cartKey = \(productId, sku\)/.test(cart) && /entry\.sku/.test(cart) && /entry\.color/.test(cart), 'Cart แยกรายการตาม product + SKU และรักษาสีจาก PDP');
check(/สี ' \+ color/.test(cart) && /SKU ' \+ sku/.test(cart), 'ข้อความส่งเจ้าหน้าที่ระบุสีและ SKU ของ variant');
check(/สัญญา: ' \+ item\.months/.test(cart) && /จ่ายล่วงหน้า ฿' \+ fmt\(item\.advancePayment\)/.test(cart), 'ข้อความส่งเจ้าหน้าที่ระบุระยะสัญญาและยอดล่วงหน้าเมื่อมี');
check(/ของแถม: ' \+ product\.gift/.test(cart), 'ข้อความส่งเจ้าหน้าที่ระบุของแถมจาก product data เมื่อมี');
check(/id="rememberedCustomerType"/.test(cart) && !/name="custType"/.test(cart), 'Cart แสดงประเภทลูกค้าที่จำไว้และไม่มีตัวเลือกซ้ำ');
check(/cart\.customerType = c\[0\]/.test(pdp), 'PDP บันทึกประเภทลูกค้าทันทีที่เลือก');
check(/copyOrderForOfficer\(\)/.test(cart), 'Cart มี flow คัดลอกรายการส่งเจ้าหน้าที่');
check(/lead_validation_error/.test(cart) && /lead_order_copied/.test(cart), 'Cart แยก validation และ successful copy event');
check([home, pdp, promotions, cart].every((page) => /line\.me\/R\/ti\/p\/@lgthailand/.test(page)), 'CTA ติดต่อ LINE ทุก flow ที่มีช่องทางติดต่อส่งไป LG Thailand @lgthailand');
check(/line_contact_click/.test(analyticsSource) && /lead_line_open/.test(cart), 'Analytics ติดตามการเปิด LINE โดยไม่เปลี่ยนปลายทาง LG Thailand');
check(/061-267-0518/.test(cart) && /tel:0612670518/.test(cart), 'Cart แสดงเบอร์โทรเจ้าหน้าที่และลิงก์โทรออก');
check(/line-lgthailand-qr\.png/.test(cart), 'Cart แสดง QR Code สำหรับ LINE');
check(/LG Subscribe By E-Promoter ช่วยคุณเลือกสินค้าและเตรียมรายการ/.test(cart) && /เจ้าหน้าที่ LG ยืนยันอีกครั้ง/.test(cart), 'Cart อธิบายบทบาท E-Promoter และการยืนยันขั้นสุดท้ายโดยเจ้าหน้าที่ LG ชัดเจน');
check((cart.match(/href="products\.html"/g) || []).length >= 3 && /class="back" href="products\.html">← กลับไปเลือกสินค้า/.test(pdp), 'Sales flow จาก Cart/PDP กลับเข้าหน้า Catalog หลักแทน Home product section เก่า');
check(/location\.href='products\.html'/.test(promotions) && /hero-secondary\" href=\"products\.html\"/.test(promotions) && /products\.html\?sf_group=fridge/.test(promotions) && /products\.html\?sf_group=tv/.test(promotions), 'Promotions พาลูกค้าเข้าสู่ Catalog/Smart Finder ตามหมวดจริง');
check(/class=\"header-cta\" href=\"products\.html\"/.test(home) && /btn1: \{ text: 'เลือกสินค้า', href: 'products\.html'/.test(home) && /products\.html\?sf_group=fridge/.test(home) && /products\.html\?sf_group=laundry/.test(home) && /products\.html\?sf_group=ac/.test(home) && /products\.html\?sf_group=tv/.test(home) && /products\.html\?sf_group=air/.test(home), 'Home CTA และลิงก์หมวดหลักพาลูกค้าเข้า Catalog/Smart Finder แทน anchor สินค้าเดิม');
check(catalogHtml.includes('class="catalog-assist-line"') && catalogHtml.includes('https://line.me/R/ti/p/@lgthailand') && /สอบถามก่อนเลือกแพ็กเกจได้/.test(catalogHtml) && /line_contact_click/.test(analyticsSource), 'Catalog มีทางสอบถามก่อนเลือกผ่าน LINE LG Thailand และถูกวัดด้วย contact analytics เดิม');
check(/analytics\.js/.test(home) && /analytics\.js/.test(pdp) && /analytics\.js/.test(cart) && /analytics\.js/.test(guide), 'Conversion analytics ครบทุก flow หลักรวม Guide');
check(/funnel_session_id/.test(analyticsSource) && /funnel_stage/.test(analyticsSource) && /funnel_stage_view/.test(analyticsSource) && /guide_smart_finder_click/.test(analyticsSource) && /guide_conversion_click/.test(analyticsSource) && /data-page="guide"/.test(guide), 'Analytics เชื่อม Guide → Discovery → PDP → Lead handoff และวัด CTA หลักของ Guide ด้วย session-scoped funnel context โดยไม่เก็บ PII');
check(/G-YQ5EW1VQPX/.test(analyticsSource) && /googletagmanager\.com\/gtag\/js/.test(analyticsSource) && /window\.gtag\('event'/.test(analyticsSource), 'GA4 Measurement ID และ Funnel event transport ถูกเชื่อมกับ Google tag');
check([home, pdp, catalogHtml, promotions, guide, cart].every((page) => /LG Subscribe By E-Promoter/.test(page)), 'ทุกหน้าหลักใช้ชื่อแบรนด์ LG Subscribe By E-Promoter สอดคล้องกัน');
check(![home, pdp, catalogHtml, promotions, guide, cart].some((page) => /FLEXI-SUB/.test(page)), 'ทุกหน้าหลักไม่มีชื่อแบรนด์ FLEXI-SUB เดิมหลงเหลือ');
check(/\.catalog-grid \.p-img img \{[\s\S]*?padding: 16px;[\s\S]*?box-sizing: border-box;[\s\S]*?object-fit: contain;[\s\S]*?object-position: center;/m.test(catalogCss), 'Catalog product images mirror Home image-fit rules');
check(catalogSource.includes('class="p-emoji" aria-hidden="true" hidden') && catalogSource.includes('image.nextElementSibling') && catalogSource.includes('emoji.hidden = false') && /\.catalog-grid \.p-emoji\[hidden\] \{ display: none !important; \}/.test(catalogCss), 'Catalog fallback emoji stays hidden for valid product images and appears only after image failure');
check(/\.catalog-grid \.p-img \{[\s\S]*?display: flex;[\s\S]*?align-items: center;[\s\S]*?justify-content: center;/.test(catalogCss), 'Catalog product media uses Home-style flex centering so images stay within fixed-height frame');
check(/body\[data-page="home"\] #products \.p-img img \{[\s\S]*?box-sizing: border-box;[\s\S]*?object-fit: contain;[\s\S]*?object-position: center;/m.test(premium), 'Home product images fit inside card without padding-induced crop');
check(/\.p-img \{[\s\S]*?box-sizing: border-box;[\s\S]*?object-fit: contain;[\s\S]*?object-position: center;/.test(cart), 'Cart product images fit inside card without padding-induced crop');
check(/\.gallery-main img \{[^}]*box-sizing: border-box;[^}]*object-fit: contain;[^}]*object-position: center;/.test(pdp) && /\.g-thumb img \{[^}]*box-sizing: border-box;[^}]*object-fit: contain;[^}]*object-position: center;/.test(pdp), 'PDP main and thumbnail images keep full product visible and centered');
check([home, pdp, catalogHtml, promotions, guide, cart].every((page) => /analytics\.js\?v=ga4-2/.test(page)), 'ทุก flow หลักใช้ cache-busted GA4 analytics bundle เวอร์ชันเดียวกัน');
check(/package_view/.test(pdp) && /track\('add_to_cart'/.test(pdp), 'PDP ส่ง package view และ successful add-to-cart events');

console.log('\n═══ Site smoke test: ' + (failures ? failures + ' ไม่ผ่าน' : 'ผ่านทั้งหมด') + ' ═══');
if (failures) process.exit(1);

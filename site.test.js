/* Static pre-deploy smoke tests. No dependencies required. */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const pages = ['index.html', 'products.html', 'product.html', 'promotions.html', 'subscribe-store.html'];
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
  'product.html': 'https://eakkapantanyanon.github.io/lg-subscribe-store/product.html'
};
for (const page of pages) {
  const html = fs.readFileSync(path.join(ROOT, page), 'utf8');
  check(/<html\s+lang="th"/i.test(html), page + ': lang=th');
  check(/<meta\s+name="description"/i.test(html), page + ': meta description');
  check(/<meta\s+name="theme-color"/i.test(html), page + ': theme color');
  check(html.includes('<link rel="canonical" href="' + publicCanonical[page] + '">'), page + ': canonical');
  check((html.match(/<meta property="og:(?:title|description|type|url)"/g) || []).length === 4, page + ': Open Graph basic tags');
  check(/<link rel="icon"/.test(html), page + ': favicon');
  check(/class="skip-link"/i.test(html), page + ': keyboard skip link');
  check(/rel="preconnect"\s+href="https:\/\/www\.lg\.com"/i.test(html), page + ': image CDN preconnect');
  check(!/href="#"/i.test(html), page + ': ไม่มี dead link href="#"');

  const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
    .map(match => match[1])
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
const catalogHtml = fs.readFileSync(path.join(ROOT, 'products.html'), 'utf8');
const catalogSource = fs.readFileSync(path.join(ROOT, 'catalog.js'), 'utf8');
const analyticsSource = fs.readFileSync(path.join(ROOT, 'analytics.js'), 'utf8');
const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const imageInventory = JSON.parse(fs.readFileSync(path.join(ROOT, 'image-inventory-phase4.json'), 'utf8'));
const pdp = fs.readFileSync(path.join(ROOT, 'product.html'), 'utf8');
const productSource = fs.readFileSync(path.join(ROOT, 'products.js'), 'utf8');
const gallerySource = fs.readFileSync(path.join(ROOT, 'product-galleries.js'), 'utf8');
const cart = fs.readFileSync(path.join(ROOT, 'subscribe-store.html'), 'utf8');
const parseProducts = source => {
  const marker = 'window.LG_PRODUCTS = [';
  const start = source.indexOf(marker);
  return eval('[' + source.slice(start + marker.length, source.lastIndexOf('];')) + ']');
};
const canonicalProducts = parseProducts(productSource);
const headProducts = parseProducts(execFileSync('git', ['show', 'HEAD:products.js'], { cwd: ROOT, encoding: 'utf8' }));
const protectedModels = ['27GX704A-B', '75QNED86BSA', 'OLED48C6PSA', 'WD516AN', 'WD518AN'];
const productByModel = (products, model) => products.find(product => product.model === model);
check(!/id="planner"|BUILD YOUR PACKAGE|พร้อมจัดบ้านให้สบาย/.test(home), 'Home นำ Package Planner และ Final CTA ที่ซ้ำซ้อนออกแล้ว');
check(/id="products"/.test(home), 'Home มี Product section');
check(/WHY LG SUBSCRIBE/.test(home) && !/WHY FLEXI-SUB/.test(home), 'Home ใช้หัวข้อ WHY LG SUBSCRIBE');
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
check((productSource.match(/img: 'images\/products\/[a-z0-9-]+\.webp'/g) || []).length === 8, 'Product data ใช้ local WebP เฉพาะ pilot 8 รุ่น');
check(/localPrimary/.test(pdp) && /fetchpriority="high"/.test(pdp), 'PDP ใช้ local primary ก่อน gallery และให้ priority กับภาพหลัก');
check(/loading="lazy"/.test(catalogSource) && !/position <= 4 \? 'eager'/.test(catalogSource), 'Catalog lazy-load รูปสินค้าซึ่งอยู่ใต้ส่วนค้นหา');
check(!/class="trust-strip"/.test(home), 'Home ไม่มี trust strip ที่ซ้ำกับ Why FLEXI-SUB');
check(/rel="preload"\s+as="image"\s+href="images\/hero-8-d\.webp"/.test(home), 'Home preload WebP Hero desktop');
check(/rel="preload"\s+as="image"\s+href="images\/hero-8-m\.webp"/.test(home), 'Home preload WebP Hero mobile');
check(!/function preloadHero\(/.test(home) && !/const probe = new Image\(\)/.test(home), 'Home ไม่ preload หรือ probe Hero carousel ที่ยังไม่เห็น');
check(/data-src=/.test(home) && /function loadHeroImg\(/.test(home), 'Home โหลด Hero สไลด์ถัดไปเมื่อถูกแสดง');
check(/hero-track \{ min-height: 710px; \}/.test(premium) && /hero-track \{ min-height: 610px; \}/.test(premium), 'Home จองพื้นที่ Hero บน tablet และ mobile เพื่อลด CLS');
check((home.match(/all-Banner_1920x720\.jpg/g) || []).length === 1, 'Home Hero ไม่มีภาพแคมเปญซ้ำ');
check(/-Birthday_1920x720\.jpg/.test(home) && /15 ส\.ค\. 69 – 23 ส\.ค\. 69/.test(home), 'Home Hero มีโปรครบรอบ 38 ปีตามช่วงเวลา');
check(/images\/hero-birthday-38-d\.webp/.test(home) && /images\/hero-birthday-38-m\.webp/.test(home), 'Home Hero โปร 15% ใช้ WebP ที่ optimize แล้ว');
check(/fit:\s*'contain'/.test(home) && /data-fit="contain"/.test(home), 'Home Hero โปร 15% แสดงภาพครบโดยไม่ crop');
check(/OFFICIAL LG CAMPAIGNS/.test(promotions) && /ลด 15% ตลอดสัญญา/.test(promotions), 'Promotions มีแคมเปญล่าสุดจาก LG Thailand');
check(/images\/promotions\/ktc-credit\.jpg/.test(promotions) && /images\/promotions\/uob-credit\.jpg/.test(promotions), 'Promotions มีรูปจริงโปรบัตรเครดิต KTC และ UOB');
check(!/id="conditions"/.test(promotions) && !/สิทธิพิเศษหลักในเดือนนี้/.test(promotions), 'Promotions ไม่มีส่วนสิทธิพิเศษที่ซ้ำกับแคมเปญด้านบน');
check(canonicalProducts.length === 97 && canonicalProducts.reduce((total, product) => total + product.plans.length, 0) === 197, 'Canonical products.js มีสินค้า 97 รุ่นและ 197 แผน');
const fallbackPrices = { WT2520NHEG: 1999, 'GC-L257KQKW': 649, FV1409H4W: 299, SAQ11A: 799, OLED48C6PSA: 749, 'A9T-ULTRA': 749, DFC335HM: 749, AS25GCBY0: 549 };
for (const [model, price] of Object.entries(fallbackPrices)) {
  check(new RegExp("model: ['\\\"]" + model + "['\\\"][^\\n]*price: " + price + '\\b').test(home), model + ' Home fallback price ตรง canonical');
}
for (const page of [promotions, cart]) {
  check(!/<script[^>]*>[\s\S]*window\.LG_PRODUCTS\s*=/.test(page), 'หน้าร้านไม่มี embedded full dataset');
  check(page.indexOf('<script src="analytics.js">') < page.indexOf('<script src="products.js">'), 'products.js โหลดหลัง analytics.js');
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
  check(JSON.stringify(stripVariants(current)) === JSON.stringify(stripVariants(baseline)), model + ' ไม่เปลี่ยนจาก HEAD (stripping variants)');
}
const wd516 = productByModel(canonicalProducts, 'WD516AN');
const wd518 = productByModel(canonicalProducts, 'WD518AN');
check(wd516.plans.some(plan => plan.serviceType === 'Visit' && plan.outright) && wd518.plans.some(plan => plan.serviceType === 'Visit' && plan.outright), 'WD516AN และ WD518AN มี Visit outright');
check(wd516.plans.some(plan => plan.serviceType === 'Self' && plan.outright) && wd518.plans.some(plan => plan.serviceType === 'Self' && plan.outright), 'WD516AN และ WD518AN มี Self outright');
check(productByModel(canonicalProducts, 'OLED48C6PSA').plans.some(plan => /xboom BOUNCE/.test(plan.promo)), 'OLED48C6PSA มีโปรของแถม xboom BOUNCE');
check(pages.every(page => fs.readFileSync(path.join(ROOT, page), 'utf8').includes('premium.css')), 'ทุกหน้าหลักใช้ Premium CSS กลาง');
check(!/💳|🔧|🛡️|🔄|🔍|🛒/.test(pages.map(page => fs.readFileSync(path.join(ROOT, page), 'utf8')).join('\n')), 'แทน emoji UI ที่กำหนดด้วย line icon แล้ว');
check(/สายเกมมิ่ง \(Gaming Lifestyle\)/.test(home) && !/คาเฟ่ \/ ธุรกิจเล็ก/.test(home), 'Home เปลี่ยน Lifestyle ธุรกิจเล็กเป็นสายเกมมิ่ง');
check(/id: 'gaming'[\s\S]*27gx704a[\s\S]*oled48c6psa/.test(home), 'Gaming Lifestyle แนะนำมอนิเตอร์และทีวี OLED');
check(/คอมโบช่วงโปรครบรอบ ลด 15% ตลอดสัญญา/.test(home) && /images\/promotions\/birthday-38\.jpg/.test(home), 'Home Promotion แสดงโปรคอมโบปัจจุบันลด 15%');
check(/images\/promotions\/air-purifier-kum-2-tor\.jpg/.test(home) && /images\/promotions\/oled48-xboom\.jpg/.test(home), 'Home Promotion ใช้ภาพใหม่สำหรับลด 50% และของแถม');
check((home.match(/promo-card[^"\n]*featured/g) || []).length === 2 && /promo-card\.featured/.test(premium), 'Home โปรบิลแรกและลด 50% มี accent เด่น');
check(/body\[data-page="home"\] \.h-btn-solid/.test(premium) && /service-banner \.btn-pill\.light/.test(premium), 'Home CTA แยกปุ่มหลักสีแบรนด์และปุ่มรองแบบ outline');
check((home.match(/<svg class="payment-mark"/g) || []).length === 8 && (promotions.match(/<svg class="payment-mark"/g) || []).length === 8, 'Footer ใช้ SVG payment marks ครบ');
check(/payment-mark:hover\s*\{[^}]*grayscale\(0\)/.test(premium), 'Payment marks เป็นสีจริงเมื่อ hover');

check(/id="addBtn"/.test(pdp), 'PDP มีปุ่มใส่ตะกร้า');
check(/subscribe-store\.html/.test(pdp), 'PDP เชื่อมไปตะกร้า');
check(/main\.pdp-layout/.test(pdp) && !/main \.pdp-layout/.test(pdp), 'PDP ใช้ responsive selector ที่ตรงกับ main element');
check(/Array\.isArray\(p\.gallery\)/.test(pdp) && /gallerySource\.slice\(0, 4\)/.test(pdp), 'PDP รองรับแกลลอรี่สินค้าไม่เกิน 4 ภาพ');
check((productSource.match(/A9T-ULTRA_PH_/g) || []).length === 4, 'A9T-ULTRA มีภาพสินค้า 4 มุม');
check(/LG_PRODUCT_GALLERIES/.test(pdp) && /product-galleries\.js/.test(pdp), 'PDP โหลดแกลลอรี่รวมของทุกสินค้า');
check(/showGalleryPlaceholder/.test(pdp) && /thumbImg\.hidden = true/.test(pdp) && /revealWhenLoaded/.test(pdp), 'PDP ป้องกัน broken-image icon และคง fallback สำหรับภาพหลักกับ thumbnail');
check(/dfc335hm-abmpeth\.jpg/.test(productSource), 'DFC335HM มีภาพสำรองเมื่อ LG ป้องกัน hotlink');
check(!/https:\/\/(?!www\.lg\.com|arttato\.github\.io)/.test(gallerySource), 'แกลลอรี่ใช้เฉพาะโฮสต์ภาพที่อนุญาต');
check((gallerySource.match(/https:\/\/arttato\.github\.io\/LG-Subscribe\/img\/products\//g) || []).length === 10, 'สินค้า 10 รุ่นที่ไม่มีภาพ LG Thailand ใช้ภาพอ้างอิงที่กำหนด');
check(/เทคโนโลยีเครื่องดูดฝุ่นไร้สาย LG CordZero/.test(pdp) && !/f\.push\('แผน '/.test(pdp), 'PDP bullet ใช้คุณสมบัติสินค้าและไม่สร้างจากข้อมูลแผน');
check(pdp.indexOf("group('ประเภทแผน'") < pdp.indexOf("group('ประเภทการดูแล'"), 'PDP แสดงประเภทแผนก่อนประเภทการดูแล');
check(/const pts = SEL\.planTypes\(product\);\s*wrap\.appendChild\(group\('ประเภทแผน'/.test(pdp), 'PDP แสดงกลุ่มประเภทแผนเสมอ');

check(/id="cartItems"/.test(cart), 'Cart มีรายการสินค้า');
check(/id="rememberedCustomerType"/.test(cart) && !/name="custType"/.test(cart), 'Cart แสดงประเภทลูกค้าที่จำไว้และไม่มีตัวเลือกซ้ำ');
check(/cart\.customerType = c\[0\]/.test(pdp), 'PDP บันทึกประเภทลูกค้าทันทีที่เลือก');
check(/copyOrderForOfficer\(\)/.test(cart), 'Cart มี flow คัดลอกรายการส่งเจ้าหน้าที่');
check(/lead_validation_error/.test(cart) && /lead_order_copied/.test(cart), 'Cart แยก validation และ successful copy event');
check(/line\.me\/R\/ti\/p\/@lgthailand/.test(cart), 'Cart มีลิงก์ติดต่อ LINE @lgthailand');
check(/061-267-0518/.test(cart) && /tel:0612670518/.test(cart), 'Cart แสดงเบอร์โทรเจ้าหน้าที่และลิงก์โทรออก');
check(/line-lgthailand-qr\.png/.test(cart), 'Cart แสดง QR Code สำหรับ LINE');
check(/ฝ่ายขาย LG โดยตรง/.test(cart) && /ไม่ผ่านตัวแทน/.test(cart) && /LINE Official ของ LG/.test(cart), 'Cart ยืนยันช่องทางฝ่ายขาย LG โดยตรง');
check(/analytics\.js/.test(home) && /analytics\.js/.test(pdp) && /analytics\.js/.test(cart), 'Conversion analytics ครบทุก flow หลัก');
check(/package_view/.test(pdp) && /track\('add_to_cart'/.test(pdp), 'PDP ส่ง package view และ successful add-to-cart events');

console.log('\n═══ Site smoke test: ' + (failures ? failures + ' ไม่ผ่าน' : 'ผ่านทั้งหมด') + ' ═══');
if (failures) process.exit(1);

/* Static pre-deploy smoke tests. No dependencies required. */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const pages = ['index.html', 'product.html', 'promotions.html', 'subscribe-store.html'];
const requiredAssets = [
  'products.js',
  'product-galleries.js',
  'calculator-core.js',
  'product-select.js',
  'cart.js',
  'analytics.js',
  'images/hero-8-d.jpg',
  'images/hero-8-m.jpg',
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
for (const page of pages) {
  const html = fs.readFileSync(path.join(ROOT, page), 'utf8');
  check(/<html\s+lang="th"/i.test(html), page + ': lang=th');
  check(/<meta\s+name="description"/i.test(html), page + ': meta description');
  check(/<meta\s+name="theme-color"/i.test(html), page + ': theme color');
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
check(/id="planner"/.test(home), 'Home มี Package Planner');
check(/id="products"/.test(home), 'Home มี Product section');
check(/id="faq"/.test(home), 'Home มี FAQ');
check(/product\.html\?slug=/.test(home), 'Home เชื่อมไป PDP');
check(/rel="preload"\s+as="image"\s+href="images\/hero-8-d\.jpg"/.test(home), 'Home preload Hero desktop');
check(/rel="preload"\s+as="image"\s+href="images\/hero-8-m\.jpg"/.test(home), 'Home preload Hero mobile');

const pdp = fs.readFileSync(path.join(ROOT, 'product.html'), 'utf8');
const productSource = fs.readFileSync(path.join(ROOT, 'products.js'), 'utf8');
const gallerySource = fs.readFileSync(path.join(ROOT, 'product-galleries.js'), 'utf8');
check(/id="addBtn"/.test(pdp), 'PDP มีปุ่มใส่ตะกร้า');
check(/subscribe-store\.html/.test(pdp), 'PDP เชื่อมไปตะกร้า');
check(/main\.pdp-layout/.test(pdp) && !/main \.pdp-layout/.test(pdp), 'PDP ใช้ responsive selector ที่ตรงกับ main element');
check(/Array\.isArray\(p\.gallery\)/.test(pdp) && /gallerySource\.slice\(0, 4\)/.test(pdp), 'PDP รองรับแกลลอรี่สินค้าไม่เกิน 4 ภาพ');
check((productSource.match(/A9T-ULTRA_PH_/g) || []).length === 4, 'A9T-ULTRA มีภาพสินค้า 4 มุม');
check(/LG_PRODUCT_GALLERIES/.test(pdp) && /product-galleries\.js/.test(pdp), 'PDP โหลดแกลลอรี่รวมของทุกสินค้า');
check(!/https:\/\/(?!www\.lg\.com|arttato\.github\.io)/.test(gallerySource), 'แกลลอรี่ใช้เฉพาะโฮสต์ภาพที่อนุญาต');
check((gallerySource.match(/https:\/\/arttato\.github\.io\/LG-Subscribe\/img\/products\//g) || []).length === 10, 'สินค้า 10 รุ่นที่ไม่มีภาพ LG Thailand ใช้ภาพอ้างอิงที่กำหนด');
check(/เทคโนโลยีเครื่องดูดฝุ่นไร้สาย LG CordZero/.test(pdp) && !/f\.push\('แผน '/.test(pdp), 'PDP bullet ใช้คุณสมบัติสินค้าและไม่สร้างจากข้อมูลแผน');
check(pdp.indexOf("group('ประเภทแผน'") < pdp.indexOf("group('ประเภทการดูแล'"), 'PDP แสดงประเภทแผนก่อนประเภทการดูแล');
check(/const pts = SEL\.planTypes\(product\);\s*wrap\.appendChild\(group\('ประเภทแผน'/.test(pdp), 'PDP แสดงกลุ่มประเภทแผนเสมอ');

const cart = fs.readFileSync(path.join(ROOT, 'subscribe-store.html'), 'utf8');
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

console.log('\n═══ Site smoke test: ' + (failures ? failures + ' ไม่ผ่าน' : 'ผ่านทั้งหมด') + ' ═══');
if (failures) process.exit(1);

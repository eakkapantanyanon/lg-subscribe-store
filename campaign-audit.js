'use strict';

const fs = require('fs');
const vm = require('vm');

const read = file => fs.readFileSync(file, 'utf8');
const promotions = read('promotions.html');
const home = read('index.html');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(read('products.js'), context);
const products = context.window.LG_PRODUCTS || [];

const checks = [];
const check = (ok, message) => checks.push({ ok: Boolean(ok), message });
const productCount = products.length;

check(productCount > 0, 'products.js โหลดรายการสินค้าได้');
check(home.includes(`ทุกรุ่น ${productCount} รายการ`), `Home แสดงจำนวนสินค้า ${productCount} รายการ`);
check(promotions.includes(`<strong>${productCount} รุ่น</strong>`), `Promotions แสดงจำนวนสินค้า ${productCount} รุ่น`);
check(/Price List ส\.ค\. 2569 \(V3\)/.test(promotions), 'Promotions ระบุแหล่ง Price List ส.ค. 2569 (V3)');
check(/หมดเขตโปรโมชัน 31 ส\.ค\. 2569/.test(promotions), 'Promotions ระบุวันสิ้นสุดรอบเดือน 31 ส.ค. 2569');

const campaignDates = [...promotions.matchAll(/class="campaign-date">([^<]+)</g)].map(match => match[1]);
check(campaignDates.length >= 5, 'Promotions มีวันที่กำกับ campaign cards');
check(campaignDates.every(text => /ส\.ค\. 2569/.test(text)), 'Campaign cards อยู่ในรอบสิงหาคม 2569 เดียวกัน');

const birthdayActiveThrough = new Date('2026-08-23T23:59:59+07:00');
const monthlyActiveThrough = new Date('2026-08-31T23:59:59+07:00');
const now = new Date();
const notices = [];
if (now > birthdayActiveThrough && /15–23 ส\.ค\. 2569/.test(promotions)) {
  notices.push('EXPIRED: แคมเปญครบรอบ 15–23 ส.ค. 2569 ต้องถอด/อัปเดต');
}
if (now > monthlyActiveThrough && /สิงหาคม 2569|1–31 ส\.ค\. 2569/.test(promotions)) {
  notices.push('EXPIRED: รอบโปรโมชั่นสิงหาคม 2569 ต้องเปลี่ยนเป็น campaign เดือนใหม่');
}

for (const result of checks) console.log(`${result.ok ? 'PASS' : 'FAIL'} ${result.message}`);
for (const notice of notices) console.log(`WARN ${notice}`);

const failed = checks.filter(result => !result.ok);
console.log(`SUMMARY checks=${checks.length} failed=${failed.length} warnings=${notices.length}`);
if (failed.length) process.exit(1);

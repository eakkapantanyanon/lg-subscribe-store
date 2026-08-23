'use strict';

const fs = require('fs');
const vm = require('vm');

const read = file => fs.readFileSync(file, 'utf8');
const config = JSON.parse(read('campaign-config.json'));
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
check(promotions.includes(config.priceList), `Promotions ระบุแหล่ง ${config.priceList}`);
check(promotions.includes(config.officialCampaignUrl), 'Promotions เชื่อมแหล่งแคมเปญ LG Thailand ตาม config');

for (const campaign of config.campaigns) {
  check(promotions.includes(campaign.name) && promotions.includes(campaign.displayDate), `Campaign ตรง config: ${campaign.name}`);
}

const now = new Date();
const notices = [];
for (const campaign of config.campaigns) {
  if (now > new Date(campaign.activeThrough) && promotions.includes(campaign.name)) {
    notices.push(`EXPIRED: ${campaign.name} (${campaign.displayDate}) ต้องถอด/อัปเดต`);
  }
}
if (now > new Date(config.activeThrough)) {
  notices.push(`EXPIRED: รอบ ${config.label} ต้องเปลี่ยน campaign-config.json และหน้าเว็บเป็นรอบใหม่`);
}

for (const result of checks) console.log(`${result.ok ? 'PASS' : 'FAIL'} ${result.message}`);
for (const notice of notices) console.log(`WARN ${notice}`);

const failed = checks.filter(result => !result.ok);
console.log(`SUMMARY checks=${checks.length} failed=${failed.length} warnings=${notices.length}`);
if (failed.length) process.exit(1);

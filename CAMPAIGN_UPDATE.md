# Monthly Campaign Update Workflow

ใช้ checklist นี้ก่อนเปลี่ยนโปรโมชั่น LG Subscribe ทุกเดือน เพื่อไม่ให้ราคา จำนวนสินค้า วันที่ และข้อความบนเว็บไม่ตรงกัน

## 1. Source of truth

- ยืนยัน Price List / campaign artwork ฉบับล่าสุดก่อนแก้เว็บ
- ห้ามเดาราคา ส่วนลด จำนวนเดือน ของแถม หรือรุ่นที่ร่วมรายการ
- `products.js` คือ canonical product/plan data; แก้เฉพาะเมื่อมีหลักฐานจาก source ใหม่
- TV รุ่นปกติและรุ่น bundle ต้องรักษาราคาต่อเดือนปกติให้ตรงกันตาม business rule; ความต่างอยู่ที่ promotion/gift ตาม source

## 2. จุดที่ต้องอัปเดต

- `promotions.html`: เดือน, campaign dates, campaign cards, source/version, expiry footer
- `index.html`: Hero/campaign copy ที่อ้างโปรโมชั่น และจำนวนสินค้า fallback
- `images/promotions/`: artwork ใหม่; ห้าม reuse รูปผิด campaign
- `products.js`: เฉพาะราคา/plan/promo ที่ source ใหม่ยืนยัน
- `sitemap.xml`: ต้องยังมี PDP ครบทุก product record

## 3. Pre-release checks

รันตามลำดับ:

```text
node campaign-audit.js
node calculator.test.js
node pdp.test.js
node site.test.js
git diff --check
```

`campaign-audit.js` ตรวจจำนวนสินค้าระหว่าง Home/Promotions กับ `products.js`, source label, campaign dates และเตือนเมื่อ campaign ที่ยังอยู่ใน HTML เลยวันหมดเขตแล้ว

## 4. ก่อน push

- ตรวจ `git diff` เฉพาะไฟล์ที่ตั้งใจแก้
- ตรวจราคา/ส่วนลด/จำนวนเดือนกับ source อีกครั้ง
- ตรวจ Home → Promotions → Catalog → PDP → Calculator → Cart
- ตรวจ desktop/mobile และรูป campaign ไม่ถูก crop จนข้อความขาด
- Commit แล้วรัน tests ซ้ำก่อน push

## 5. หลัง deploy

- ตรวจ Production แบบ cache-bust
- Home, Catalog, Promotions, PDP และ Cart ต้อง HTTP 200
- ตรวจเดือน/วันหมดเขต/จำนวนสินค้าบน Production
- ตรวจ campaign ที่หมดอายุทันทีหลังวันสิ้นสุด และถอดข้อความที่ไม่ active ออกจากหน้าเว็บ

## Current cycle

- Price source: Price List ส.ค. 2569 (V3)
- Birthday campaign: 15–23 ส.ค. 2569
- Monthly campaign end: 31 ส.ค. 2569
- Lead backend: พักไว้จน CRM พร้อม

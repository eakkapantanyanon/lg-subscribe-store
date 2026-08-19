# FLEXI-SUB™ — LG Subscribe Calculator สิงหาคม 2569

> โฟลเดอร์ `lg-subscribe-site` นี้คือ source of truth สำหรับแก้ไขและ deploy เว็บไซต์
> ไฟล์ชื่อเดียวกันที่อยู่นอกโฟลเดอร์เป็น working copy/เครื่องมือประกอบ และไม่ควรนำไป deploy แทนชุดนี้

เว็บไซต์คำนวณค่าบริการ LG Subscribe (เช่ารายเดือน) — ข้อมูลราคาอ้างอิงจาก
`Price list_Aug_V3.pdf` และ `Sale Price8 - Subscription_V3.pdf`

## ไฟล์ในโปรเจกต์

| ไฟล์ | หน้าที่ |
|---|---|
| `index.html` | หน้าเว็บหลัก (landing) — hero carousel, เลือกสินค้าตามหมวด/ไลฟ์สไตล์, ลิงก์ไป PDP/ตะกร้า |
| `promotions.html` | หน้าโปรโมชัน — เงื่อนไขรวม + ตารางโปรโมชันรายรุ่น (ข้อมูล inline ในไฟล์), ปุ่ม "ดูแผนและราคา" → PDP |
| `subscribe-store.html` | หน้าตะกร้า/checkout (ข้อมูลสินค้า inline ในไฟล์) — โหลดสินค้าจาก shared cart |
| `products.js` | ข้อมูลสินค้าแยก (เผื่ออัปเดต/ส่งออกจากโหมดผู้ดูแล) — โครงสร้างแผนแบบ structured (`billSchedule`/`advancePayment`/`outright`) |
| `calculator-core.js` | เอนจินคำนวณราคาบริสุทธิ์ (คัดลอก logic จากเว็บต้นแบบ v84: snapBaht, itemComboSchedule, grandTotal, firstPayment, shock 8.8, combo ตามช่วงเวลา) |
| `product.html` | **หน้ารายละเอียดสินค้า (PDP)** — route แยกตาม slug (`product.html?slug=รุ่น`) จากหน้าหลัก |
| `cart.js` | ตะกร้าร่วม (localStorage `flexiCart`) — ใช้ร่วมกันระหว่าง PDP และหน้าตะกร้า |
| `analytics.js` | Event layer สำหรับ GA4/GTM — วัด Home → Planner → PDP → Cart → LINE โดยไม่ส่งชื่อหรือเบอร์โทร |
| `product-select.js` | ตัวกลางแปลงตัวเลือก (ลูกค้า/แผน/การดูแล/สัญญา) → แผนเดียว + สรุปราคา (ใช้ LGCalc ชุดเดียวกับตะกร้า) |
| `calculator.test.js` | เทสต์ 10 เคส A–J เทียบตัวเลขอ้างอิงจากเว็บต้นแบบ (รัน: `node calculator.test.js`) |
| `pdp.test.js` | เทสต์ flow เลือกซื้อ: ทุกแผน reachable ผ่าน selection, เปลี่ยนตัวเลือก → ราคาเปลี่ยนถูกต้อง, ใส่ตะกร้าได้เมื่อเลือกครบ (รัน: `node pdp.test.js`) |
| `migrate-plans.js` | ตัวแปลงแผนข้อมูลเก่า → โครงสร้างใหม่ (รันหลังแก้ `products.js` ด้วยมือ) |
| `images/` | ภาพแคมเปญจริงของ LG 16 ใบ (hero-1..8-d.jpg / -m.jpg, desktop 1920×720 + mobile 720×960) — ดึงใหม่/อัปเดตด้วย `node fetch-hero.js` |

## Flow การเลือกซื้อ (หน้าแรก → PDP → ตะกร้า)

1. **หน้าหลัก** (`index.html`) — กดการ์ดสินค้า → ไป `product.html?slug=<รุ่น>` (route แยก ไม่ใช่ modal)
2. **PDP** (`product.html`) — gallery (รูปใหญ่ + thumbnail) ฝั่งซ้าย · ฝั่งขวา: ชื่อ/รหัสรุ่น/รีวิว/คุณสมบัติ/สเปกเต็ม
   - **เลือกประเภทของคุณ**: ข้อมูลลูกค้า (เดิม/ใหม่) · ประเภทแผน (เช่ารายเดือน/ซื้อขาด — เฉพาะสินค้าที่มี) · ประเภทการดูแล (พร้อมบริการ/เปลี่ยนเอง/ไม่รับบริการ + ปุ่ม i อธิบาย) · ระยะเวลาสัญญา (โชว์ราคา/เดือนในตัวการ์ด)
   - สินค้าที่ (แผน,การดูแล,สัญญา) เหลือหลายแบบ → ขึ้นตัวเลือกเพิ่มเติม (รอบบริการ ทุก 6/12 เดือน หรือ โปร 8/3 เดือน)
   - **กล่องสรุป sticky อัปเดต real-time** (ราคาเต็มขีดฆ่า + ราคาเดือนนี้ + ยอดชำระครั้งแรก + รวมสัญญา + ประหยัด + เงื่อนไขคอมโบ) · ปุ่ม "คลิกเพื่อดูค่าบริการและรายละเอียดทั้งหมด" เปิด breakdown รายบิล
   - ปุ่ม "ปรึกษาเจ้าหน้าที่" (เปิด LINE) + "ใส่ตะกร้า" (**disable จนกว่าเลือกครบ**)
3. **ตะกร้า** (`subscribe-store.html`) — โหลดจาก shared cart (localStorage) คำนวณคอมโบหลายชิ้นด้วย `calculator-core.js` **ชุดเดียวกับ PDP**

> ราคาทุกจุด (PDP + ตะกร้า) ผ่านฟังก์ชันเดียวกันใน `calculator-core.js` — เปลี่ยนตัวเลือกแล้วราคาสรุปอัปเดตถูกต้อง ตรวจยืนยันด้วย `node pdp.test.js`

## Conversion events

`analytics.js` ส่ง event เข้า `window.dataLayer` และพร้อมเชื่อมกับ GTM/GA4 ได้แก่
`flexi_page_ready`, `lifestyle_select`, `product_card_click`, `planner_change`,
`planner_cta_click`, `pdp_option_select`, `add_to_cart_click`,
`promotion_product_click`, `lead_validation_error`, `lead_submit_success` และ `line_contact_click`

Event เหล่านี้ไม่ส่งชื่อ เบอร์โทร หรือข้อความที่ลูกค้ากรอก

ปุ่มส่งรายการในตะกร้าใช้ LINE OA message scheme ของ `@lgthailand` เพื่อเปิดห้องแชต
และเติมข้อความสรุปไว้ในช่องพิมพ์ ลูกค้าต้องตรวจสอบและกดส่งข้อความด้วยตนเอง

## ฟีเจอร์ของหน้าตะกร้า (subscribe-store.html)

- โหลดรายการจาก shared cart (เพิ่มจาก PDP) — ปรับจำนวน/เปลี่ยนแผนได้ในหน้า
- ตารางชำระเงินรายเดือนต่อสินค้า (งวดแรก ฿149 / เดือนโปร 50% / เดือนเต็มราคา / เงินล่วงหน้า / ซื้อขาด)
- **คอมโบตามช่วงเวลา**: สิงหาคมปกติ 10% (1–31 ส.ค.) · คอมโบพิเศษ 15% (15–25 ส.ค.) — ลูกค้าเดิม 1 เครื่องขึ้นไป / ลูกค้าใหม่ 2 เครื่องขึ้นไป (auto-fallback เมื่อหมดช่วง)
- **ชำระ 3 แบบ**: รายเดือน (billSchedule) · ซื้อขาด outright = ราคาซื้อขาด (ไม่หักคอมโบ) · เงินล่วงหน้า TV/จอ/ลำโพง = ราคา×6, บิล 1–12 ครึ่งราคา
- **shock 8.8** (บิลแรก 149→88) ตามช่วงวันที่อัตโนมัติ
- สรุปยอด: ยอดชำระครั้งแรก · ยอดรวมตลอดสัญญา · ประหยัดรวม · ส่วนลดคอมโบรายเดือน
- กรอกชื่อ-เบอร์ลูกค้า → ส่งสรุปรายการให้เจ้าหน้าที่ทาง Line
- **โหมดผู้ดูแล**: กดโลโก้ FLEXI-SUB™ 5 ครั้งติดกัน → แก้ราคา/โปรโมชัน/URL รูป/เงื่อนไขส่วนลด, บันทึก (localStorage), ส่งออก JSON
- สลับธีมฟ้า/ส้ม (ปุ่ม 🎨)
- รายละเอียดสูตรการคำนวณ + ตัวเลขอ้างอิงทุกเคส: ดู `calculator-spec-2026-08.md` (ในโฟลเดอร์หลัก)

## วิธีอัปเดตข้อมูล

1. เปิดหน้าเว็บ → โหมดผู้ดูแล (กดโลโก้ 5 ครั้ง) → แก้ไข → "ส่งออก JSON"
2. นำ JSON ไปอัปเดต `products.js`
3. re-inline ข้อมูลเข้า `subscribe-store.html` (รัน `node reinline.js` — ดูด้านล่าง)

### Re-inline ข้อมูลสินค้าเข้า subscribe-store.html

```bash
node reinline.js   # นำ products.js ไป re-inline เข้า subscribe-store.html
```

ถ้าแก้ `products.js` ด้วยมือ ต้องแปลงแผนให้เป็นโครงสร้างใหม่ก่อน (รัน `node migrate-plans.js`) แล้ว re-inline ตามเดิม

## Hero images (หน้าแรก)

- ภาพแคมเปญจริงของ LG ถูกดาวน์โหลดไว้ใน `images/` (`hero-N-d.jpg` desktop + `hero-N-m.jpg` mobile)
- ดึงใหม่/อัปเดตเมื่อ URL ใน `HERO_SLIDES` เปลี่ยน: `node fetch-hero.js`
- เว็บจะใช้ภาพ local เสมอเมื่อมีไฟล์ (fallback เป็น remote URL จาก LG ถ้าไม่มี)

## Deploy ขึ้น GitHub Pages

ตรวจสอบก่อน deploy:

```bash
node calculator.test.js
node pdp.test.js
node site.test.js
```

```bash
cd lg-subscribe-site
git init
git add .
git commit -m "FLEXI-SUB LG Subscribe calculator"
git branch -M main
git remote add origin https://github.com/<your-user>/lg-subscribe-store.git
git push -u origin main
```

จากนั้นเปิด GitHub → Repo → Settings → Pages → เลือก branch `main` → เว็บจะอยู่ที่
`https://<your-user>.github.io/lg-subscribe-store/`

ไฟล์ `.nojekyll`, `404.html`, `robots.txt` และ `sitemap.xml` รวมอยู่ในชุด deploy แล้ว

## ⚠️ ก่อนเผยแพร่

- เปลี่ยน `@yourlineid` เป็น Line ID จริง (ใน `index.html` และ `subscribe-store.html` ฟังก์ชัน `sendToOfficer`)
- ตรวจทานชื่อสินค้าไทย/ราคากับเอกสารจริงอีกครั้ง
- ไฟล์ PDF ราคา**ไม่**รวมอยู่ใน repo นี้ (เป็นเอกสารภายใน)

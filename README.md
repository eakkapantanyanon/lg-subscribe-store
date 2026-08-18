# FLEXI-SUB™ — LG Subscribe Calculator สิงหาคม 2569

เว็บไซต์คำนวณค่าบริการ LG Subscribe (เช่ารายเดือน) — ข้อมูลราคาอ้างอิงจาก
`Price list_Aug_V3.pdf` และ `Sale Price8 - Subscription_V3.pdf`

## ไฟล์ในโปรเจกต์

| ไฟล์ | หน้าที่ |
|---|---|
| `index.html` | หน้าเว็บหลัก — embed เครื่องคำนวณผ่าน iframe |
| `subscribe-store.html` | เครื่องคำนวณ/หน้าร้านค้า (ข้อมูลสินค้า inline ในไฟล์) |
| `products.js` | ข้อมูลสินค้าแยก (เผื่ออัปเดต/ส่งออกจากโหมดผู้ดูแล) |

## ฟีเจอร์ของเครื่องคำนวณ (subscribe-store.html)

- แคตตาล็อกสินค้า 78 รายการ พร้อมรูปจริงจากเว็บ LG ไทย (70 รุ่น)
- ค้นหา + กรองหมวดหมู่
- เลือกสินค้า/แผนการชำระ, จำนวนเครื่อง, ตารางชำระเงินรายเดือน (งวดแรก ฿149 / เดือนโปร 50% / เดือนเต็มราคา)
- ส่วนลดคอมโบ 10% อัตโนมัติ (ลูกค้าเดิม 1 เครื่องขึ้นไป / ลูกค้าใหม่ 2 เครื่องขึ้นไป)
- กรอกชื่อ-เบอร์ลูกค้า → ส่งสรุปรายการให้เจ้าหน้าที่ทาง Line
- **โหมดผู้ดูแล**: กดโลโก้ FLEXI-SUB™ 5 ครั้งติดกัน → แก้ราคา/โปรโมชัน/URL รูป/เงื่อนไขส่วนลด, บันทึก (localStorage), ส่งออก JSON
- สลับธีมฟ้า/ส้ม (ปุ่ม 🎨)

## วิธีอัปเดตข้อมูล

1. เปิดหน้าเว็บ → โหมดผู้ดูแล (กดโลโก้ 5 ครั้ง) → แก้ไข → "ส่งออก JSON"
2. นำ JSON ไปอัปเดต `products.js`
3. re-inline ข้อมูลเข้า `subscribe-store.html` (รัน `node reinline.js` — ดูด้านล่าง)

### Re-inline ข้อมูลสินค้าเข้า subscribe-store.html

```bash
node -e "
const fs=require('fs');
let h=fs.readFileSync('subscribe-store.html','utf8');
const d=fs.readFileSync('products.js','utf8');
const a=h.indexOf('<script>\n/* ===');
const b=h.indexOf('</script>',a)+'</script>'.length;
h=h.slice(0,a)+'<script>\n'+d.trim()+'\n</script>'+h.slice(b);
fs.writeFileSync('subscribe-store.html',h);
"
```

## Deploy ขึ้น GitHub Pages

```bash
cd lg-subscribe-site
git init
git add index.html subscribe-store.html products.js README.md
git commit -m "FLEXI-SUB LG Subscribe calculator"
git branch -M main
git remote add origin https://github.com/<your-user>/lg-subscribe-store.git
git push -u origin main
```

จากนั้นเปิด GitHub → Repo → Settings → Pages → เลือก branch `main` → เว็บจะอยู่ที่
`https://<your-user>.github.io/lg-subscribe-store/`

## ⚠️ ก่อนเผยแพร่

- เปลี่ยน `@yourlineid` เป็น Line ID จริง (ใน `index.html` และ `subscribe-store.html` ฟังก์ชัน `sendToOfficer`)
- ตรวจทานชื่อสินค้าไทย/ราคากับเอกสารจริงอีกครั้ง
- ไฟล์ PDF ราคา**ไม่**รวมอยู่ใน repo นี้ (เป็นเอกสารภายใน)

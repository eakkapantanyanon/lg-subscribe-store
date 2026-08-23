# Monthly Campaign Update Workflow

ใช้ไฟล์ `campaign-config.json` เป็น checklist/source-of-truth ระดับรอบแคมเปญของเว็บไซต์ โดยข้อมูลราคาและเงื่อนไขจริงยังต้องยืนยันจากเอกสาร LG ต้นทางก่อนแก้เว็บเสมอ

## ขั้นตอนต้นเดือน
1. เก็บ Price List และ Subscription/Sale Price ฉบับล่าสุด แล้วบันทึกชื่อไฟล์/เวอร์ชันใน `campaign-config.json`.
2. ตรวจหน้าโปรโมชั่น LG Thailand ที่ระบุใน `officialCampaignUrl` และเอกสารแคมเปญที่ได้รับจริง.
3. อัปเดต `cycle`, `label`, `activeThrough` และรายการ `campaigns` เฉพาะข้อมูลที่ยืนยันแล้ว.
4. อัปเดต `products.js`, `promotions.html` และข้อความหน้า Home เฉพาะเมื่อข้อมูลตรงกับ source-of-truth.
5. รัน `node campaign-audit.js`; ต้องไม่มี FAIL ก่อน commit/deploy.
6. รัน regression: `node calculator.test.js`, `node pdp.test.js`, `node site.test.js`.
7. หลัง deploy ตรวจ Production จริง: Home → Catalog → PDP → Cart → LINE และหน้า Promotions.

## กฎความปลอดภัยข้อมูล
- ห้ามเดาราคา ส่วนลด ของแถม วันที่ หรือรุ่นที่ร่วมรายการ.
- แคมเปญหมดอายุต้องขึ้น WARN จาก audit และต้องถอด/อัปเดตก่อนใช้รอบใหม่.
- `campaign-config.json` ไม่แทนเอกสาร LG; เป็น manifest สำหรับตรวจความสอดคล้องของเว็บ.
- ถ้า source สองแห่งไม่ตรงกัน ให้หยุดการแก้ข้อมูลจุดนั้นและยืนยันต้นทางก่อน.

# Care Service Source Register

ทะเบียน Source of Truth สำหรับรายละเอียดบริการที่แสดงใน PDP/Tooltip

## กติกา
- รอบบริการ (เช่น ทุก 6/12/24 เดือน) ใช้ `service-cycles.js` ซึ่งสร้างจาก `Price list_Aug_V3.pdf`.
- รายละเอียดงานจริง เช่น ทำความสะอาดส่วนใด เปลี่ยน/จัดส่งอะไหล่อะไร ต้องมีเอกสารยืนยันก่อนจึงเพิ่มใน `CARE_DETAIL_OVERRIDES`.
- ห้ามนำรายละเอียดของรุ่นหนึ่งไปใช้กับอีกรุ่นเพียงเพราะอยู่หมวดเดียวกัน.
- รุ่นที่ยังไม่มีรายละเอียดที่ยืนยันแล้ว ให้ UI แสดงเฉพาะรอบบริการและข้อความกลาง ไม่แต่งรายการบริการขึ้นเอง.

## Source ที่ยืนยันแล้ว

### AS25GCBY0 — LG PuriCare AeroCat Tower
สถานะ: VERIFIED — model-specific override

Source ล่าสุด: ภาพ Care Service ที่ผู้ใช้ให้วันที่ 2026-08-23 และระบุว่าอัปเดตเฉพาะรุ่นนี้

Visit Service:
- ทำความสะอาดภายในและภายนอกของผลิตภัณฑ์ — ทุก 12 เดือน
- ทำความสะอาดโดมแมว — ทุก 12 เดือน
- ตรวจสอบสภาพการทำงานผลิตภัณฑ์ — ทุก 12 เดือน
- ตรวจสอบเซนเซอร์จับฝุ่น — ทุก 12 เดือน
- เปลี่ยนไส้กรอง Aero Series V-Pet Filter (H13) — ทุก 12 เดือน
- เปลี่ยนเบาะรองนั่ง 1 ชิ้น — ครบ 36 เดือน
- เปลี่ยนผ้าบุผนัง 1 ชุด — ครบ 36 เดือน
- เปลี่ยนขั้นบันไดสำหรับแมว 1 ชิ้น — ครบ 36 เดือน

Self Service:
- จัดส่งไส้กรอง Aero Series V-Pet Filter (H13) — ทุก 12 เดือน
- จัดส่งเบาะรองนั่ง 1 ชิ้น — ครบ 36 เดือน
- จัดส่งผ้าบุผนัง 1 ชุด — ครบ 36 เดือน
- จัดส่งขั้นบันไดสำหรับแมว 1 ชิ้น — ครบ 36 เดือน

Price List cross-check: `Price list_Aug_V3.pdf` p.29 ยืนยัน Visit/Self รอบ 12 เดือน แต่รายละเอียดงาน/อะไหล่ด้านบนอ้างอิง Care Service source ล่าสุด ไม่ได้อนุมานจาก Price List.

Runtime implementation: `product-select.js` → `CARE_DETAIL_OVERRIDES.AS25GCBY0`.

## Care Service 2026 ที่นำมาใช้แล้ว
รายละเอียดจาก `Care Service 2026(1).pdf` ถูกนำมาใช้เฉพาะส่วนที่เอกสารระบุชัดเจนกับรุ่นหรือหมวดใน catalog ปัจจุบัน ได้แก่ เครื่องกรองน้ำ WD516/WD518/WD110, เครื่องดูดฝุ่น, WashTower, เครื่องซักผ้าฝาหน้า/ฝาบน, เครื่องอบผ้า, เครื่องล้างจาน, เครื่องลดความชื้น, เครื่องฟอกอากาศที่มีรุ่นตรงกัน, แอร์บ้าน IXY/SIQ/SAQ/ART และแอร์เชิงพาณิชย์ SAC.

AS25GCBY0 ใช้ภาพ Care Service ล่าสุดที่ผู้ใช้อัปเดตเฉพาะรุ่น แทนรายละเอียดใน PDF 2026 เดิม.

## Business rules ที่ยืนยันเพิ่มเติม

### ตู้ถนอมผ้า (Styler)
สถานะ: VERIFIED — category rule

ผู้ใช้ยืนยันวันที่ 2026-08-23 ว่า **ตู้ถนอมผ้าทุกรุ่นใช้บริการเดียวกัน** จึงใช้ Care Service หน้า 14 กับรุ่น Styler ใน catalog ปัจจุบันได้ รวมถึง S3MFC.

Self Service:
- จัดส่งแผ่นน้ำหอม 4 กล่อง — หลังวันติดตั้ง
- จัดส่งแผ่นน้ำหอม 4 กล่อง — ทุก 12 เดือน
- จัดส่งถังจ่ายน้ำและถังระบายน้ำ — ครบ 36 เดือน

### ตู้เย็นระบบต่อท่อน้ำ
สถานะ: VERIFIED — explicit model list

ใช้ Care Service ตู้เย็นต่อท่อน้ำหน้า 6 เฉพาะรุ่น:
- `GC-X257CMHW`
- `GC-L24FFCBB + MS2032GAS` (ตัวตู้เย็นคือ GC-L24FFCBB)
- `GC-X24FFCRB` — future model สำหรับเดือนถัดไป; ยังไม่เพิ่มเข้า catalog ปัจจุบันจนกว่าจะมีข้อมูลสินค้า/ราคาเดือนนั้นครบ

ตู้เย็นรุ่นอื่นใน catalog ใช้ Care Service ตู้เย็นทั่วไปหน้า 5.

## รุ่นที่ยังไม่ใส่รายละเอียดงาน
สถานะ: CYCLE VERIFIED / DETAIL PENDING

รุ่น/หมวดที่ไม่มีเอกสารหรือ business rule รองรับชัดเจนยังคงใช้เฉพาะรอบบริการจาก Price List และ Tooltip ข้อความกลาง โดยห้ามอนุมานรายละเอียดข้ามรุ่น.

Coverage ปัจจุบันดูได้จาก `care-service-coverage.json` ซึ่งสร้างใหม่ด้วย `node scripts/audit-care-service.js` ทุกครั้งก่อน regression/deploy.

### WD516AN / WD518AN — Outright 2Y
สถานะ: VERIFIED — manual reconciliation

Price List หน้า 3 ใช้ model cell ร่วม `WD516 / WD518` ครอบทั้งแถว Visit และ Self จึงต้องตีความเป็น service-type pricing ที่ใช้กับทั้งสองรุ่น ไม่ใช่แบ่ง Visit ให้ WD516 และ Self ให้ WD518 คนละรุ่น. หลัง cross-check กับโครงสร้าง Outright + 2Y Service และ Care Service 2026 ที่ระบุ WD516/WD518 รองรับทั้ง Visit Service และ Self Service จึงยืนยัน mapping ครบ 4 แผน:
- WD516AN Visit 2Y — ฿34,110 — ทุก 6 เดือน
- WD516AN Self 2Y — ฿31,410 — ทุก 6 เดือน
- WD518AN Visit 2Y — ฿34,110 — ทุก 6 เดือน
- WD518AN Self 2Y — ฿31,410 — ทุก 6 เดือน

`service-cycles.js` จึงมี Price List p.3 mapping ครบทั้ง 4 แผน และ `unresolvedCarePlans` ต้องเป็น 0.

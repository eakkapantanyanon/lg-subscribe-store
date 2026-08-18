/* =====================================================================
   calculator.test.js — เทสต์โมดูลคำนวณ ครอบคลุมเคส A–J
   ตัวเลขอ้างอิง: ตรวจกับเว็บต้นแบบจริง + replication (ดู calculator-spec-2026-08.md)
   วิธีใช้: node calculator.test.js
   ===================================================================== */
const fs = require('fs');
const assert = require('assert');
const LG = require('./calculator-core.js');

/* โหลดข้อมูลจริงจาก products.js (หลัง migration) */
const src = fs.readFileSync('products.js', 'utf8');
const marker = 'window.LG_PRODUCTS = [';
const data = eval('[' + src.slice(src.indexOf(marker) + marker.length, src.lastIndexOf('];')) + ']')
  .map(p => ({ ...p, plans: p.plans.map(LG.normalizePlan) }));

const find = (modelPart, planPred) => {
  const p = data.find(x => x.model.includes(modelPart));
  assert.ok(p, 'product not found: ' + modelPart);
  const plan = p.plans.find(planPred);
  assert.ok(plan, 'plan not found for ' + modelPart);
  return { product: p, plan };
};
const planToItem = (product, plan) => ({ ...plan });

let passed = 0, failed = 0;
function t(name, fn) {
  try {
    fn();
    passed++;
    console.log('  ✅ ' + name);
  } catch (e) {
    failed++;
    console.log('  ❌ ' + name + '\n     ' + e.message);
  }
}
const eq = (actual, expected, label) => {
  const a = Math.round(actual * 100) / 100;
  const e = Math.round(expected * 100) / 100;
  assert.strictEqual(a, e, (label || '') + ' expected ' + e + ' got ' + a);
};

console.log('· ข้อมูล: ' + data.length + ' สินค้า / ' + data.reduce((s, p) => s + p.plans.length, 0) + ' แผน');

/* ---------- ข้อมูลอ้างอิง ---------- */
const fridge6Y = find('GC-B257SQYL', pl => pl.totalContractMonths === 72 && pl.serviceType === 'Visit').plan;
const tv48 = find('OLED48C6PSA', pl => pl.advancePayment > 0 && pl.promoMonths === 8).plan;   // "50% เดือน 1-20"
const washerVisit5 = find('FV1413H4M', pl => pl.totalContractMonths === 60 && pl.serviceType === 'Visit').plan;
const washerSelf5 = find('FV1413H4M', pl => pl.totalContractMonths === 60 && pl.serviceType === 'Self').plan;
const outrightVisit = find('WD516AN', pl => pl.outright).plan;   // 34,110
const outrightSelf = find('WD518AN', pl => pl.outright).plan;   // 31,410

const item = p => planToItem(find(p.split('|')[0], eval(p.split('|')[1])));

/* ================================================================
   เคส A – D: ตัวเลขหลัก (ตู้เย็น 6Y + TV advance)
   ================================================================ */
console.log('\n· เคส A–D (ตู้เย็น GC-B257SQYL 6Y · TV OLED48C6PSA)');
t('A: ลูกค้าใหม่ 1 ชิ้น (cr=0) — ยอดรวมสัญญา 32,028 · บิล 1 = 149', () => {
  const items = [planToItem(null, fridge6Y)];
  eq(LG.grandTotal(items, 0), 32028, 'grand');
  eq(LG.firstPaymentTotal(items, 0), 149, 'firstPay');
  eq(LG.itemComboSchedule(fridge6Y, 0).bills[0].price, 149, 'bill1');
  eq(LG.itemComboSchedule(fridge6Y, 0).bills[1].price, 449, 'bill2');
});
t('B: ลูกค้าใหม่ 2 ชิ้น 10% — ยอดรวม 57,636 · บิล 149/389/404 · ประหยัด 6,420', () => {
  const items = [planToItem(null, fridge6Y), planToItem(null, fridge6Y)];
  eq(LG.totalMonthly(items), 898, 'totalMonthly');
  eq(LG.comboDiscount(898, 0.10), 90, 'combo');
  eq(LG.netMonthly(items, 0.10), 808, 'net');
  const s = LG.itemComboSchedule(fridge6Y, 0.10);
  eq(s.bills[0].price, 149, 'bill1'); eq(s.bills[1].price, 389, 'bill2'); eq(s.bills[2].price, 404, 'bill3');
  eq(LG.grandTotal(items, 0.10), 57636, 'grand');
  eq(LG.grandTotalSaving(items, 0.10), 6420, 'saving');
});
t('B15: ลูกค้าใหม่ 2 ชิ้น 15% — ยอดรวม 54,496 · บิล 149/359/382 · ประหยัด 9,560', () => {
  const items = [planToItem(null, fridge6Y), planToItem(null, fridge6Y)];
  eq(LG.comboDiscount(898, 0.15), 135, 'combo');
  eq(LG.netMonthly(items, 0.15), 763, 'net');
  const s = LG.itemComboSchedule(fridge6Y, 0.15);
  eq(s.bills[0].price, 149, 'bill1'); eq(s.bills[1].price, 359, 'bill2'); eq(s.bills[2].price, 382, 'bill3');
  eq(LG.grandTotal(items, 0.15), 54496, 'grand');
  eq(LG.grandTotalSaving(items, 0.15), 9560, 'saving');
});
t('C: ลูกค้าเก่า 1 ชิ้น 10% — ยอดรวม 28,818 · ประหยัด 3,210', () => {
  const items = [planToItem(null, fridge6Y)];
  eq(LG.comboDiscount(449, 0.10), 45, 'combo');
  eq(LG.grandTotal(items, 0.10), 28818, 'grand');
  eq(LG.grandTotalSaving(items, 0.10), 3210, 'saving');
});
t('C15: ลูกค้าเก่า 1 ชิ้น 15% — ยอดรวม 27,248 · ประหยัด 4,780', () => {
  const items = [planToItem(null, fridge6Y)];
  eq(LG.comboDiscount(449, 0.15), 67, 'combo');
  eq(LG.grandTotal(items, 0.15), 27248, 'grand');
  eq(LG.grandTotalSaving(items, 0.15), 4780, 'saving');
});
t('D: เก่า ตู้เย็น + TV advance 10% — ยอดรวม 66,568 · จ่ายแรก 4,643 · ประหยัด 7,400', () => {
  eq(tv48.advancePayment, 4494, 'advance = 749×6');
  const items = [planToItem(null, fridge6Y), planToItem(null, tv48)];
  eq(LG.totalMonthly(items), 1198, 'totalMonthly');
  eq(LG.comboDiscount(1198, 0.10), 120, 'combo');
  eq(LG.firstPaymentTotal(items, 0.10), 4643, 'firstPay (149 + 4494)');
  const s = LG.itemComboSchedule(tv48, 0.10);
  eq(s.bills[0].price, 300, 'tv bill1-12 = 300');
  eq(s.bills[12].price, 337, 'tv bill13-20 = 337');   // bills[12] = บิล 13
  eq(s.bills[20].price, 674, 'tv bill21+ = 674');     // bills[20] = บิล 21
  eq(LG.grandTotal(items, 0.10), 66568, 'grand');
  eq(LG.grandTotalNoCombo(items), 73968, 'noCombo');
  eq(LG.grandTotalSaving(items, 0.10), 7400, 'saving');
});
t('D15: เก่า ตู้เย็น + TV advance 15% — ยอดรวม 62,910 · ประหยัด 11,058', () => {
  const items = [planToItem(null, fridge6Y), planToItem(null, tv48)];
  eq(LG.comboDiscount(1198, 0.15), 180, 'combo');
  eq(LG.firstPaymentTotal(items, 0.15), 4643, 'firstPay');
  const s = LG.itemComboSchedule(tv48, 0.15);
  eq(s.bills[0].price, 262, 'tv bill1-12 = 262');
  eq(s.bills[12].price, 318, 'tv bill13-20 = 318');
  eq(s.bills[20].price, 637, 'tv bill21+ = 637');
  eq(LG.grandTotal(items, 0.15), 62910, 'grand');
  eq(LG.grandTotalSaving(items, 0.15), 11058, 'saving');
});

/* ================================================================
   เคส E – F: โปร 50% หลายเดือน (Visit / Self)
   ================================================================ */
console.log('\n· เคส E–F (เครื่องซักผ้า FV1413H4M 5Y — บิล 1 = 149, โปร 50% เดือน 2-8)');
t('E: Visit 5Y 15% — ยอดรวม 35,477 · บิล 149/296/318/637', () => {
  const items = [planToItem(null, washerVisit5)];
  const s = LG.itemComboSchedule(washerVisit5, 0.15);
  eq(s.bills[0].price, 149, 'bill1');
  eq(s.bills[1].price, 296, 'bill2 (374−56.1−22.35)');
  eq(s.bills[2].price, 318, 'bill3-8');
  eq(s.bills[8].price, 637, 'bill9+');
  eq(LG.totalMonthly(items), 749, 'totalMonthly');
  eq(LG.comboDiscount(749, 0.15), 112, 'combo');
  eq(LG.grandTotal(items, 0.15), 35477, 'grand');
  eq(LG.grandTotalNoCombo(items), 41715, 'noCombo');
  eq(LG.grandTotalSaving(items, 0.15), 6238, 'saving');
  eq(washerVisit5.totalSaving, 3225, 'totalSaving แผน = 3225');
});
t('F: Self 5Y 15% — ยอดรวม 30,756 · บิล 149/253/275/552', () => {
  const items = [planToItem(null, washerSelf5)];
  const s = LG.itemComboSchedule(washerSelf5, 0.15);
  eq(s.bills[0].price, 149, 'bill1');
  eq(s.bills[1].price, 253, 'bill2 (324−48.6−22.35)');
  eq(s.bills[2].price, 275, 'bill3-8');
  eq(s.bills[8].price, 552, 'bill9+');
  eq(LG.comboDiscount(649, 0.15), 97, 'combo');
  eq(LG.grandTotal(items, 0.15), 30756, 'grand');
  eq(LG.grandTotalNoCombo(items), 36165, 'noCombo');
  eq(LG.grandTotalSaving(items, 0.15), 5409, 'saving');
});

/* ================================================================
   เคส G – H: ซื้อขาด outright (FIX — ไม่หัก combo)
   ================================================================ */
console.log('\n· เคส G–H (ซื้อขาด WD516AN/WD518AN)');
t('G: outright เดี่ยว — จ่ายครั้งเดียว 34,110 · ยอดรวม 34,110 (ไม่โดน combo)', () => {
  eq(outrightVisit.advancePayment, 34110, 'advance = 34,110');
  eq(outrightSelf.advancePayment, 31410, 'advance = 31,410');
  const items = [planToItem(null, outrightVisit)];
  eq(LG.totalMonthly(items), 0, 'totalMonthly = 0 (outright ไม่นับ)');
  eq(LG.firstPaymentTotal(items, 0.15), 34110, 'firstPay');
  eq(LG.grandTotal(items, 0.15), 34110, 'grand — FIX ไม่ใช่ 28,998');
  eq(LG.grandTotalSaving(items, 0.15), 0, 'saving combo = 0');
  eq(outrightVisit.totalSaving, 3790, 'totalSaving แผน = 3790');
});
t('H: outright + ซักผ้า Visit 5Y 15% — ยอดรวม 69,587 (34,110 + 35,477)', () => {
  const items = [planToItem(null, outrightVisit), planToItem(null, washerVisit5)];
  eq(LG.totalMonthly(items), 749, 'totalMonthly เฉพาะรายเดือน');
  eq(LG.comboDiscount(749, 0.15), 112, 'combo ไปที่รายเดือนเท่านั้น');
  eq(LG.firstPaymentTotal(items, 0.15), 34259, 'firstPay (34,110 + 149)');
  eq(LG.grandTotal(items, 0.15), 69587, 'grand — FIX ไม่ใช่ 64,475');
  eq(LG.grandTotalNoCombo(items), 75825, 'noCombo (34,110 + 41,715)');
  eq(LG.grandTotalSaving(items, 0.15), 6238, 'saving = combo ของรายเดือนเท่านั้น');
});

/* ================================================================
   เคส I – J: ช่วงเวลา (คอมโบปกติ 10% · shock 8.8)
   ================================================================ */
console.log('\n· เคส I–J (ช่วงเวลา)');
t('I: คอมโบปกติ 10% นอกช่วง Birthday — ยอดรวม 28,818 (อัตโนมัติ)', () => {
  const items = [planToItem(null, fridge6Y)];
  eq(LG.comboRateFor([{ min: 1, rate: 10 }], 1), 0.10, 'comboRate');
  eq(LG.grandTotal(items, 0.10), 28818, 'grand 10%');
  // นอกช่วง: special combo ไม่ active
  eq(LG.isDateInRange('2569-08-15', '2569-08-25', new Date(2026, 7, 5)), false, 'ก่อนช่วง');
  eq(LG.isDateInRange('2569-08-15', '2569-08-25', new Date(2026, 7, 18)), true, 'ในช่วง');
  eq(LG.isDateInRange('2569-08-15', '2569-08-25', new Date(2026, 8, 1)), false, 'หลังช่วง');
});
t('J: shock 8.8 (149→88) + คอมโบ 10% — บิล 1 = 88 · ยอดรวม 28,763', () => {
  const shock = { dateStart: '2569-08-08', dateEnd: '2569-08-10', fromPrice: 149, toPrice: 88 };
  eq(LG.isShockPromoActive(shock, new Date(2026, 7, 9)), true, 'shock active 9 ส.ค.');
  eq(LG.isShockPromoActive(shock, new Date(2026, 7, 18)), false, 'shock หมด 18 ส.ค.');
  eq(LG.isShock149FirstMonthPlan(fridge6Y, shock), true, 'fridge 6Y เข้าเกณฑ์ (บิลแรก 149)');
  const shocked = LG.applyShockPromoToPlan(fridge6Y, shock, new Date(2026, 7, 9));
  eq(shocked.billSchedule[0].price, 88, 'บิล 1 = 88');
  eq(shocked.effectiveMonthly, 88, 'effectiveMonthly = 88');
  eq(shocked.totalSaving, 361, 'totalSaving = 300 + 61');
  const items = [planToItem(null, shocked)];
  const s = LG.itemComboSchedule(shocked, 0.10);
  eq(s.bills[0].price, 88, 'bill1 = 88 (เก็บเต็ม)');
  eq(s.bills[1].price, 395, 'bill2 = 395 (449−44.9−8.8)');
  eq(s.bills[2].price, 404, 'bill3+ = 404');
  eq(LG.firstPaymentTotal(items, 0.10), 88, 'firstPay = 88');
  eq(LG.grandTotal(items, 0.10), 28763, 'grand');
  eq(LG.grandTotalNoCombo(items), 31967, 'noCombo (หลัง shock)');
  eq(LG.grandTotalSaving(items, 0.10), 3204, 'saving combo');
  eq(LG.totalSaving(items, 0.10), 3565, 'ประหยัดรวม (361 + 3,204)');
});

/* ================================================================
   หน่วยย่อย: normalize + การปัดเศษ
   ================================================================ */
console.log('\n· หน่วยย่อย (normalize / ปัดเศษ)');
t('normalize แผนเก่า {label, months, price, promo} → โครงสร้างใหม่', () => {
  const legacy = { label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 749, promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8' };
  const n = LG.normalizePlan(legacy);
  eq(n.totalContractMonths, 60, 'months');
  eq(n.postPromoPrice, 749, 'postPromo');
  eq(n.effectiveMonthly, 149, 'eff');
  eq(n.promoMonths, 1, 'promoMonths');
  eq(n.billSchedule.length, 3, '3 segments');
  eq(n.billSchedule[1].price, 374, 'โปร 50% = 374 (ปัดลง 374.5)');
  eq(n.totalSaving, 3225, 'totalSaving');
  assert.strictEqual(n.outright, false, 'not outright');
});
t('normalize แผน advance เก่า → advancePayment = ราคา×6', () => {
  const legacy = { label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 749, promo: '50% เดือน 1-20' };
  const n = LG.normalizePlan(legacy);
  eq(n.advancePayment, 4494, 'advance');
  eq(n.billSchedule[0].price, 374.5, 'บิล 1-12 ครึ่งราคา');
  eq(n.billSchedule[1].price, 374, 'บิล 13-20 โปร');
  eq(n.promoMonths, 8, 'promoMonths');
  eq(n.totalSaving, 3000, 'totalSaving = 8×(749−374)');
});
t('normalize แผน outright เก่า → จ่ายครั้งเดียว 2 ปี', () => {
  const legacy = { label: 'Outright ผ่อน 9 งวด', months: 9, price: 3790, promo: 'ราคาเต็ม ฿37,900 ลด 10% = ฿34,110' };
  const n = LG.normalizePlan(legacy);
  assert.strictEqual(n.outright, true, 'outright');
  eq(n.advancePayment, 34110, 'advance');
  eq(n.totalContractMonths, 24, '2 ปี');
  eq(n.totalSaving, 3790, 'saving');
});
t('ปัดเศษ snapBaht: 374.5→374 · 2249.5→2249 · 112.35→112 · 112.6→113', () => {
  eq(LG.snapBaht(374.5), 374, '374.5');
  eq(LG.snapBaht(2249.5), 2249, '2249.5');
  eq(LG.snapBaht(112.35), 112, '112.35');
  eq(LG.snapBaht(112.6), 113, '112.6');
});
t('ceil2: 37.45 → 37.46 (floating point จริง — ตรงเว็บต้นแบบ) · 56.175 → 56.18', () => {
  eq(LG.ceil2(37.45), 37.46, '37.45×100 = 3745.0000000000005 → ceil → 37.46');
  eq(LG.ceil2(56.175), 56.18, '56.175');
});

/* ---------- สรุป ---------- */
console.log('\n═══ ผล: ' + passed + ' ผ่าน / ' + failed + ' ไม่ผ่าน ═══');
process.exit(failed ? 1 : 0);

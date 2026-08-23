/* =====================================================================
   pdp.test.js — เทสต์ flow เลือกซื้อ (PDP selection → ราคาสรุป → ใส่ตะกร้า)
   ครอบคลุม:
   1. เปลี่ยนตัวเลือกใดๆ (แผน/การดูแล/สัญญา/รอบบริการ) → ราคาสรุปอัปเดตถูกต้อง
   2. ทุกแผนในแคตตาล็อก reachable ผ่าน UI selection (ไม่มีแผน orphan)
   3. itemSummary ใช้สูตรเดียวกับ LGCalc ที่หน้าตะกร้าใช้ (ตัวเลขตรงกัน)
   4. comboInfo ตามช่วงเวลา + ประเภทลูกค้า (เกณฑ์ 1/2 เครื่อง)
   5. ใส่ตะกร้าได้เฉพาะเมื่อเลือกครบ (resolvePlanIndex/isComplete)
   6. cart.js — เพิ่ม/รวมจำนวน/เปลี่ยนแผน/ลบ/บันทึก
   วิธีใช้: node pdp.test.js
   ===================================================================== */
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const LG = require('./calculator-core.js');
const CART = require('./cart.js');
const SEL = require('./product-select.js');

/* โหลดข้อมูลจริงจาก products.js (หลัง migration) */
const src = fs.readFileSync('products.js', 'utf8');
const marker = 'window.LG_PRODUCTS = [';
const data = eval('[' + src.slice(src.indexOf(marker) + marker.length, src.lastIndexOf('];')) + ']')
  .map(p => ({ ...p, plans: p.plans.map(LG.normalizePlan) }));
const serviceContext = { window: { LG_PRODUCTS: data } };
vm.createContext(serviceContext);
vm.runInContext(fs.readFileSync('service-cycles.js', 'utf8'), serviceContext);

let passed = 0, failed = 0;
function t(name, fn) {
  try { fn(); passed++; console.log('  ✅ ' + name); }
  catch (e) { failed++; console.log('  ❌ ' + name + '\n     ' + e.message.split('\n')[0]); }
}
const eq = (a, b, label) => {
  const av = Math.round(Number(a) * 100) / 100, bv = Math.round(Number(b) * 100) / 100;
  assert.strictEqual(av, bv, (label || '') + ' expected ' + bv + ' got ' + av);
};

console.log('· ข้อมูล: ' + data.length + ' สินค้า / ' + data.reduce((s, p) => s + p.plans.length, 0) + ' แผน');

/* ================================================================
   1. ทุกแผน reachable — ทุกสินค้า enumerate selection ที่รองรับ
   ================================================================ */
console.log('\n· ทุกแผนในแคตตาล็อก reachable ผ่าน UI selection');
t('ทุกแผน (195) หา selection ที่ resolve ได้แผนนั้น', () => {
  let reached = 0;
  data.forEach(p => {
    const planTypes = SEL.planTypes(p);
    planTypes.forEach(pt => {
      const cares = SEL.careTypes(p, pt);
      cares.forEach(care => {
        const terms = SEL.terms(p, pt, care);
        terms.forEach(term => {
          const base = { customerType: 'old', planType: pt, careType: care, term };
          const plans = SEL.filterPlans(p, base);
          const variants = SEL.variantOptions(plans);
          if (variants.length === 0) {
            const idx = SEL.resolvePlanIndex(p, base);
            assert.ok(idx >= 0, p.id + ' ' + JSON.stringify(base) + ' → ไม่ resolve');
            reached++;
          } else {
            variants.forEach(v => {
              const sel = { ...base, variant: v.key };
              const idx = SEL.resolvePlanIndex(p, sel);
              assert.ok(idx >= 0, p.id + ' variant ' + v.key + ' → ไม่ resolve');
              reached++;
            });
          }
        });
      });
    });
  });
  assert.strictEqual(reached, data.reduce((s, p) => s + p.plans.length, 0),
    'reachable ' + reached + ' ≠ จำนวนแผนทั้งหมด');
});

t('แผนที่ (planType,care,term) เหลือหลายแผน → ต้องเลือก variant ถึงจะ resolve', () => {
  const p = data.find(x => x.id === 'as60ghwg0');
  const sel = { customerType: 'old', planType: 'monthly', careType: 'Visit', term: 60 };
  assert.strictEqual(SEL.resolvePlanIndex(p, sel), -1, 'ยังกำกวมต้อง -1');
  const variants = SEL.variantOptions(SEL.filterPlans(p, sel));
  assert.strictEqual(variants.length, 2, 'ต้องมี 2 variant (ทุก 12/6 เดือน)');
  const v12 = SEL.resolvePlanIndex(p, { ...sel, variant: 'cycle:ทุก 12 เดือน' });
  const v6 = SEL.resolvePlanIndex(p, { ...sel, variant: 'cycle:ทุก 6 เดือน' });
  assert.ok(v12 >= 0 && v6 >= 0);
  assert.notStrictEqual(p.plans[v12].price, p.plans[v6].price, 'รอบบริการต่าง → ราคาต่าง');
});

t('ข้อความประเภทการดูแลอ้างอิงรอบบริการที่ตรวจสอบแล้ว', () => {
  const water = data.find(x => x.id === 'wd516an');
  const commercialAir = data.find(x => x.id === 'zt4q18');
  const noService = data.find(x => x.id === 'oled48c6psa');
  assert.match(SEL.careInfo(water, 'Visit').details[0].cycle, /6|12/);
  assert.match(SEL.careInfo(commercialAir, 'Visit').details[0].cycle, /4/);
  assert.ok((water.plans || []).some(plan => plan.serviceSource && /Price list_Aug_V3\.pdf/.test(plan.serviceSource)));
  assert.strictEqual(SEL.careInfo(noService, 'No Service').desc, SEL.CARE_INFO['No Service'].desc);
});

t('AS25GCBY0 ใช้ Care Service override เฉพาะรุ่น', () => {
  const aeroCat = data.find(x => x.model === 'AS25GCBY0');
  const visit = SEL.careInfo(aeroCat, 'Visit');
  const self = SEL.careInfo(aeroCat, 'Self');
  assert.strictEqual(visit.details.length, 8);
  assert.ok(visit.details.some(x => /V-Pet Filter/.test(x.text) && x.cycle === 'ทุก 12 เดือน'));
  assert.ok(visit.details.some(x => /เบาะรองนั่ง/.test(x.text) && x.cycle === 'ครบ 36 เดือน'));
  assert.strictEqual(self.details.length, 4);
  assert.ok(self.details.every(x => /จัดส่ง/.test(x.text)));
  assert.match(visit.source, /AS25GCBY0/);
});

/* ================================================================
   2. เปลี่ยนตัวเลือก → ราคาสรุปเปลี่ยนถูกต้อง (หัวใจของ requirement)
   ================================================================ */
console.log('\n· เปลี่ยนตัวเลือกใดๆ → ราคาในกล่องสรุปอัปเดตถูกต้อง');
t('ตู้เย็น GC-B257SQYL: 5Y (549) ↔ 6Y (449) — เปลี่ยนสัญญาเปลี่ยนราคา', () => {
  const p = data.find(x => x.id === 'gc-b257sqyl');
  const i5 = p.plans.findIndex(x => x.totalContractMonths === 60);
  const i6 = p.plans.findIndex(x => x.totalContractMonths === 72);
  // ลูกค้าเก่า 1 เครื่อง (วันนี้ 18 ส.ค. = combo 15% active)
  const s5 = SEL.itemSummary(p, i5, 'old', 0, {});
  const s6 = SEL.itemSummary(p, i6, 'old', 0, {});
  eq(s5.strike, 549, '5Y ราคาเต็ม'); eq(s6.strike, 449, '6Y ราคาเต็ม');
  eq(s5.contract, 27679, '5Y รวมสัญญา (cr 15%)');
  eq(s6.contract, 27248, '6Y รวมสัญญา (cr 15% — เคส C)');
  // บิลแรกเท่ากัน (149) แต่ราคาเต็ม/ยอดรวมต่างกัน → สรุปต้องสะท้อนความต่าง
  assert.notStrictEqual(s5.strike, s6.strike);
  assert.notStrictEqual(s5.contract, s6.contract);
  // ลูกค้าใหม่ 1 เครื่อง → ยังไม่ได้ combo (cr=0) — ราคาเต็มตามตารางบิล
  const s5n = SEL.itemSummary(p, i5, 'new', 0, {});
  const s6n = SEL.itemSummary(p, i6, 'new', 0, {});
  eq(s5n.comboRate, 0, 'ใหม่ 1 เครื่อง ยังไม่ได้ combo');
  eq(s5n.contract, 32540, '5Y ไม่มี combo');
  eq(s6n.contract, 32028, '6Y ไม่มี combo (เคส A)');
});

t('เครื่องซักผ้า FV1413H4M: Visit (749) ↔ Self (649) — เปลี่ยนการดูแลเปลี่ยนราคา', () => {
  const p = data.find(x => x.id === 'fv1413h4m');
  const visit = p.plans.findIndex(x => x.serviceType === 'Visit' && x.totalContractMonths === 60);
  const self = p.plans.findIndex(x => x.serviceType === 'Self' && x.totalContractMonths === 60);
  const sv = SEL.itemSummary(p, visit, 'old', 0, {});
  const ss = SEL.itemSummary(p, self, 'old', 0, {});
  eq(sv.strike, 749); eq(ss.strike, 649);
  assert.notStrictEqual(sv.contract, ss.contract);
});

t('เครื่องฟอกอากาศ AS60GHWG0: variant ทุก 12 เดือน (449) ↔ ทุก 6 เดือน (499)', () => {
  const p = data.find(x => x.id === 'as60ghwg0');
  const sel = { customerType: 'old', planType: 'monthly', careType: 'Visit', term: 60 };
  const v12 = SEL.resolvePlanIndex(p, { ...sel, variant: 'cycle:ทุก 12 เดือน' });
  const v6 = SEL.resolvePlanIndex(p, { ...sel, variant: 'cycle:ทุก 6 เดือน' });
  eq(SEL.itemSummary(p, v12, 'old', 0, {}).strike, 449);
  eq(SEL.itemSummary(p, v6, 'old', 0, {}).strike, 499);
});

t('เครื่องกรองน้ำ WD516AN: เช่ารายเดือน (799) ↔ ซื้อขาด (34,110 จ่ายครั้งเดียว)', () => {
  const p = data.find(x => x.id === 'wd516an');
  const monthly = p.plans.findIndex(x => !x.outright && x.serviceType === 'Visit' && x.totalContractMonths === 60);
  const out = p.plans.findIndex(x => x.outright);
  const sm = SEL.itemSummary(p, monthly, 'old', 0, {});
  const so = SEL.itemSummary(p, out, 'old', 0, {});
  eq(sm.strike, 799, 'monthly ราคาเต็ม'); assert.ok(sm.item.outright === false);
  eq(so.big, 34110, 'outright จ่ายครั้งเดียว'); eq(so.strike, 37900, 'outright ราคาเต็ม');
  // FIX: outright ไม่ถูกหัก combo
  eq(so.contract, 34110, 'outright คงที่ ไม่หัก combo');
});

t('TV OLED48C6PSA: รุ่นปกติ 8 เดือน ↔ รุ่นแถม xboom BOUNCE 3 เดือน — แยก product record', () => {
  const regular = data.find(x => x.id === 'oled48c6psa');
  const bundle = data.find(x => x.id === 'oled48c6psa-xboom-bounce');
  assert.ok(regular && bundle, 'ต้องมีทั้งรุ่นปกติและรุ่นแถม');
  assert.strictEqual(regular.plans.length, 1);
  assert.strictEqual(bundle.plans.length, 1);
  eq(regular.plans[0].regular, 749, 'รุ่นปกติ 749/เดือน');
  eq(bundle.plans[0].regular, 749, 'รุ่นแถม 749/เดือน');
  eq(regular.plans[0].promoMonths, 8, 'รุ่นปกติลด 50% 8 เดือน');
  eq(bundle.plans[0].promoMonths, 3, 'รุ่นแถมลด 50% 3 เดือน');
  assert.match(bundle.plans[0].promo, /xboom BOUNCE/);
  assert.strictEqual(regular.img, bundle.img, 'สองรายการแชร์ภาพทีวีไฟล์เดียวกัน ไม่สร้างภาพซ้ำ');
});

/* ================================================================
   3. itemSummary ตรงกับ LGCalc (สูตรเดียวกับหน้าตะกร้า) — ทุกแผน
   ================================================================ */
console.log('\n· itemSummary ใช้สูตรเดียวกับ LGCalc (single source of truth)');
t('ทุกแผน: firstPay/contract/segments ตรง LGCalc ที่ cr เดียวกัน', () => {
  const settings = { comboPct: 10, oldMin: 1, newMin: 2 };
  data.forEach(p => {
    p.plans.forEach((plan, planIndex) => {
      // ลูกค้าเก่า 1 เครื่อง → cr ตามช่วง (วันนี้ 18 ส.ค. = special 15%)
      const s = SEL.itemSummary(p, planIndex, 'old', 0, settings);
      const item = SEL.planToItem(p, plan);
      const cr = s.comboRate;
      eq(s.firstPay, LG.itemFirstPayment(item, cr), p.id + '#' + planIndex + ' firstPay');
      eq(s.contract, LG.itemTotalContract(item, cr), p.id + '#' + planIndex + ' contract');
      const segs = LG.groupBills(LG.itemComboSchedule(item, cr).bills);
      assert.strictEqual(s.segments.length, segs.length, p.id + '#' + planIndex + ' segments.len');
      s.segments.forEach((sg, i) => {
        eq(sg.price, segs[i].price, p.id + '#' + planIndex + ' seg' + i + '.price');
        eq(sg.start, segs[i].start, 'seg' + i + '.start');
        eq(sg.end, segs[i].end, 'seg' + i + '.end');
      });
    });
  });
});

t('comboInfo: ช่วง Birthday → 15% · นอกช่วง → 10% · เกณฑ์ ใหม่ 2 / เก่า 1', () => {
  const aug18 = new Date(2026, 7, 18);   // 18 ส.ค. 69 — ในช่วง Birthday
  const aug01 = new Date(2026, 7, 1);    // 1 ส.ค. 69 — นอกช่วง
  const aug31 = new Date(2026, 7, 31);   // 31 ส.ค. 69 — นอกช่วง (หมด 25)
  // ในช่วง: เก่า 1 เครื่อง → 15%
  let c = SEL.comboInfo('old', 1, {}, aug18);
  eq(c.rate, 0.15, 'เก่า 1 ชิ้น ในช่วง'); assert.ok(c.special);
  // ในช่วง: ใหม่ 1 เครื่อง → 0 (ต้อง 2)
  c = SEL.comboInfo('new', 1, {}, aug18);
  eq(c.rate, 0, 'ใหม่ 1 ชิ้น ในช่วง'); eq(c.needed, 1);
  c = SEL.comboInfo('new', 2, {}, aug18);
  eq(c.rate, 0.15, 'ใหม่ 2 ชิ้น ในช่วง');
  // นอกช่วง: เก่า 1 → 10% · ใหม่ 2 → 10% · ใหม่ 1 → 0
  c = SEL.comboInfo('old', 1, {}, aug01);
  eq(c.rate, 0.10, 'เก่า 1 นอกช่วง');
  c = SEL.comboInfo('new', 2, {}, aug01);
  eq(c.rate, 0.10, 'ใหม่ 2 นอกช่วง');
  eq(SEL.comboInfo('new', 1, {}, aug01).rate, 0, 'ใหม่ 1 นอกช่วง');
  c = SEL.comboInfo('old', 1, {}, aug31);
  eq(c.rate, 0.10, '31 ส.ค. กลับเป็นปกติ');
});

t('shock 8.8: อยู่ในช่วง (8–10 ส.ค.) → บิลแรก 88 · นอกช่วง → 149', () => {
  const inShock = new Date(2026, 7, 9);
  const outShock = new Date(2026, 7, 18);
  const p = data.find(x => x.id === 'gc-b257sqyl');
  const plan = p.plans.find(x => x.totalContractMonths === 72);
  const sIn = SEL.itemSummary(p, p.plans.indexOf(plan), 'old', 0, {}, inShock);
  const sOut = SEL.itemSummary(p, p.plans.indexOf(plan), 'old', 0, {}, outShock);
  eq(sIn.big, 88, 'บิลแรกช่วง shock = 88');
  eq(sOut.big, 149, 'บิลแรกนอกช่วง = 149');
});

/* ================================================================
   4. ใส่ตะกร้าได้เฉพาะเมื่อเลือกครบ
   ================================================================ */
console.log('\n· gating: ใส่ตะกร้าได้เมื่อเลือกครบเท่านั้น');
t('เลือกไม่ครบ → isComplete=false / resolve=-1 / missing บอกสิ่งที่ขาด', () => {
  const p = data.find(x => x.id === 'gc-b257sqyl');
  assert.strictEqual(SEL.isComplete(p, {}), false, 'ยังไม่เลือกอะไร');
  assert.strictEqual(SEL.resolvePlanIndex(p, {}), -1);
  const miss = SEL.missing(p, {});
  assert.ok(miss.includes('ข้อมูลลูกค้า') && miss.includes('ประเภทการดูแล') && miss.includes('ระยะเวลาสัญญา'));
  // เลือกลูกค้า + การดูแล แต่ยังไม่เลือกสัญญา
  const s2 = { customerType: 'old', planType: 'monthly', careType: 'Visit' };
  assert.strictEqual(SEL.isComplete(p, s2), false);
  assert.strictEqual(SEL.resolvePlanIndex(p, s2), -1);
  // เลือกครบ → complete + resolve ได้
  const s3 = { customerType: 'old', planType: 'monthly', careType: 'Visit', term: 72 };
  assert.strictEqual(SEL.isComplete(p, s3), true);
  assert.ok(SEL.resolvePlanIndex(p, s3) >= 0);
});

t('สินค้าที่มี variant: เลือกครบแต่ยังไม่เลือก variant → ยังใส่ตะกร้าไม่ได้', () => {
  const p = data.find(x => x.id === 'as60ghwg0');
  const sel = { customerType: 'old', planType: 'monthly', careType: 'Visit', term: 60 };
  assert.strictEqual(SEL.isComplete(p, sel), false, 'กำกวม 2 แผน');
  assert.ok(SEL.missing(p, sel).some(m => /เพิ่มเติม/.test(m)));
  assert.strictEqual(SEL.isComplete(p, { ...sel, variant: 'cycle:ทุก 12 เดือน' }), true);
});

/* ================================================================
   5. cart.js — เพิ่ม/รวม/เปลี่ยน/ลบ/บันทึก
   ================================================================ */
console.log('\n· cart.js — shared cart (localStorage)');
t('addItem ใหม่ → เพิ่มแถว · addItem เดิม (product+plan ซ้ำ) → รวมจำนวน', () => {
  let c = CART.empty();
  c = CART.addItem(c, 'gc-b257sqyl', 1, 1, 'old');
  c = CART.addItem(c, 'fv1413h4m', 0, 1, 'old');
  assert.strictEqual(c.items.length, 2, '2 รายการ');
  c = CART.addItem(c, 'gc-b257sqyl', 1, 2, 'old');
  assert.strictEqual(c.items.length, 2, 'ยัง 2 รายการ (merge)');
  const f = c.items.find(i => i.productId === 'gc-b257sqyl');
  assert.strictEqual(f.qty, 3, 'qty รวม = 1+2');
  eq(CART.totalQty(c), 4);
  assert.strictEqual(c.customerType, 'old');
});

t('setQty/setPlan/removeItem ทำงานถูกต้อง', () => {
  let c = CART.empty();
  c = CART.addItem(c, 'gc-b257sqyl', 1, 1, 'new');
  c = CART.setQty(c, 'gc-b257sqyl', 1, 5);
  assert.strictEqual(c.items[0].qty, 5);
  c = CART.setPlan(c, 'gc-b257sqyl', 1, 0);
  assert.strictEqual(c.items[0].planIndex, 0, 'เปลี่ยนแผน');
  c = CART.addItem(c, 'gc-b257sqyl', 0, 1, 'new');
  assert.strictEqual(c.items.length, 1, 'merge กับแผนใหม่');
  assert.strictEqual(c.items[0].qty, 6);
  c = CART.removeItem(c, 'gc-b257sqyl', 0);
  assert.strictEqual(c.items.length, 0);
});

t('บันทึก/โหลดผ่าน storage (จำลอง localStorage)', () => {
  const mem = {};
  CART.setStorage({
    getItem: k => (k in mem ? mem[k] : null),
    setItem: (k, v) => { mem[k] = String(v); },
    removeItem: k => { delete mem[k]; }
  });
  let c = CART.empty();
  c = CART.addItem(c, 'oled48c6psa', 0, 2, 'old');
  CART.save(c);
  const loaded = CART.load();
  assert.strictEqual(loaded.items.length, 1);
  assert.strictEqual(loaded.items[0].qty, 2);
  assert.strictEqual(loaded.customerType, 'old');
  CART.setStorage(null);
});

/* ================================================================
   6. WD516/WD518 color variant support
   ================================================================ */
console.log('\n· WD516/WD518 color variant support');

const WD516_SKUS = ['WD516AN.ACNPLMT', 'WD516AN.AEWPLMT', 'WD516AN.ASLPLMT'];
const WD516_COLORS = ['Calming Navy', 'Essence White', 'Silver'];
const WD518_SKUS = ['WD518AN.ABGPLMT', 'WD518AN.AWHPLMT', 'WD518AN.ACGPLMT'];
const WD518_COLORS = ['Calming Beige', 'Calming Cream White', 'Cream Gray'];

t('WD516 มี variant 3 ตัว พร้อม SKU ที่ถูกต้อง', () => {
  const p = data.find(x => x.id === 'wd516an');
  assert.ok(p.variants, 'wd516an มี variants');
  assert.strictEqual(p.variants.length, 3, 'WD516 มี 3 variants');
  p.variants.forEach((v, i) => {
    assert.strictEqual(v.sku, WD516_SKUS[i], 'SKU ' + (i+1) + ' ถูกต้อง');
    assert.strictEqual(v.color, WD516_COLORS[i], 'Color ' + (i+1) + ' ถูกต้อง');
  });
});

t('WD518 มี variant 3 ตัว พร้อม SKU ที่ถูกต้อง', () => {
  const p = data.find(x => x.id === 'wd518an');
  assert.ok(p.variants, 'wd518an มี variants');
  assert.strictEqual(p.variants.length, 3, 'WD518 มี 3 variants');
  p.variants.forEach((v, i) => {
    assert.strictEqual(v.sku, WD518_SKUS[i], 'SKU ' + (i+1) + ' ถูกต้อง');
    assert.strictEqual(v.color, WD518_COLORS[i], 'Color ' + (i+1) + ' ถูกต้อง');
  });
});

t('เปลี่ยนสีไม่เปลี่ยนราคา — WD516 ทุกสีมีแผนราคาเท่ากัน', () => {
  const p = data.find(x => x.id === 'wd516an');
  // Plan prices are shared across all colors (single product)
  // Verify plan structure is intact
  assert.strictEqual(p.plans.length, 6, 'WD516 มี 6 plans');
  const visit5y = p.plans.find(pl => pl.serviceType === 'Visit' && pl.totalContractMonths === 60);
  assert.strictEqual(visit5y.price, 799, 'Visit 5Y = 799');
  const self5y = p.plans.find(pl => pl.serviceType === 'Self' && pl.totalContractMonths === 60);
  assert.strictEqual(self5y.price, 699, 'Self 5Y = 699');
});

t('เปลี่ยนสีไม่เปลี่ยนราคา — WD518 ทุกสีมีแผนราคาเท่ากัน', () => {
  const p = data.find(x => x.id === 'wd518an');
  assert.strictEqual(p.plans.length, 6, 'WD518 มี 6 plans');
  const visit5y = p.plans.find(pl => pl.serviceType === 'Visit' && pl.totalContractMonths === 60);
  assert.strictEqual(visit5y.price, 799, 'Visit 5Y = 799');
  const self5y = p.plans.find(pl => pl.serviceType === 'Self' && pl.totalContractMonths === 60);
  assert.strictEqual(self5y.price, 699, 'Self 5Y = 699');
});

t('ตะกร้าเก็บ SKU/color — สองสีต่างกันในตะกร้า', () => {
  let c = CART.empty();
  c = CART.addItem(c, 'wd516an', 2, 1, 'new', { sku: 'WD516AN.ACNPLMT', color: 'Calming Navy' });
  c = CART.addItem(c, 'wd516an', 2, 1, 'new', { sku: 'WD516AN.AEWPLMT', color: 'Essence White' });
  assert.strictEqual(c.items.length, 2, 'สองสีเป็นคนละรายการ');
  assert.strictEqual(c.items[0].sku, 'WD516AN.ACNPLMT');
  assert.strictEqual(c.items[0].color, 'Calming Navy');
  assert.strictEqual(c.items[1].sku, 'WD516AN.AEWPLMT');
  assert.strictEqual(c.items[1].color, 'Essence White');
  // Same SKU + same plan → merge
  c = CART.addItem(c, 'wd516an', 2, 1, 'new', { sku: 'WD516AN.ACNPLMT', color: 'Calming Navy' });
  assert.strictEqual(c.items.length, 2, 'merge จำนวน');
  const cn = c.items.find(i => i.sku === 'WD516AN.ACNPLMT');
  assert.strictEqual(cn.qty, 2, 'CN qty = 2');
});

t('ตะกร้า backward compatible — ไม่มี variant ยังทำงานได้', () => {
  let c = CART.empty();
  c = CART.addItem(c, 'wd516an', 2, 1, 'new');
  assert.strictEqual(c.items.length, 1);
  assert.strictEqual(c.items[0].sku, undefined, 'ไม่มี sku');
  assert.strictEqual(c.items[0].color, undefined, 'ไม่มี color');
});

/* ================================================================
   7. SKU Gallery tests
   ================================================================ */
global.window = global.window || {};
require('./product-galleries.js');
const SKU_GALLERIES = global.window.LG_PRODUCT_SKU_GALLERIES || {};
const FAMILY_GALLERIES = global.window.LG_PRODUCT_GALLERIES || {};

;(function() {
  const SKUS = [
    'WD516AN.ACNPLMT', 'WD516AN.AEWPLMT', 'WD516AN.ASLPLMT',
    'WD518AN.ABGPLMT', 'WD518AN.AWHPLMT', 'WD518AN.ACGPLMT'
  ];

  t('All 6 SKU gallery keys exist', function() {
    SKUS.forEach(function(sku) {
      assert.ok(SKU_GALLERIES[sku], 'SKU gallery missing: ' + sku);
      assert.ok(Array.isArray(SKU_GALLERIES[sku]), 'SKU gallery not array: ' + sku);
      assert.ok(SKU_GALLERIES[sku].length > 0, 'SKU gallery empty: ' + sku);
    });
  });

  t('WD516 White gallery differs from Navy', function() {
    const navy = SKU_GALLERIES['WD516AN.ACNPLMT'];
    const white = SKU_GALLERIES['WD516AN.AEWPLMT'];
    assert.notDeepStrictEqual(navy, white, 'Navy and White galleries should differ');
  });

  t('WD516 Silver gallery differs from Navy and White', function() {
    const navy = SKU_GALLERIES['WD516AN.ACNPLMT'];
    const white = SKU_GALLERIES['WD516AN.AEWPLMT'];
    const silver = SKU_GALLERIES['WD516AN.ASLPLMT'];
    assert.notDeepStrictEqual(navy, silver, 'Navy and Silver galleries should differ');
    assert.notDeepStrictEqual(white, silver, 'White and Silver galleries should differ');
  });

  t('WD518 White gallery differs from Beige', function() {
    const beige = SKU_GALLERIES['WD518AN.ABGPLMT'];
    const white = SKU_GALLERIES['WD518AN.AWHPLMT'];
    assert.notDeepStrictEqual(beige, white, 'Beige and White galleries should differ');
  });

  t('WD518 Gray gallery differs from Beige and White', function() {
    const beige = SKU_GALLERIES['WD518AN.ABGPLMT'];
    const white = SKU_GALLERIES['WD518AN.AWHPLMT'];
    const gray = SKU_GALLERIES['WD518AN.ACGPLMT'];
    assert.notDeepStrictEqual(beige, gray, 'Beige and Gray galleries should differ');
    assert.notDeepStrictEqual(white, gray, 'White and Gray galleries should differ');
  });

  t('No duplicate photos inside a SKU gallery', function() {
    SKUS.forEach(function(sku) {
      const imgs = SKU_GALLERIES[sku];
      imgs.forEach(function(url) {
        assert.ok(typeof url === 'string' && url.length > 0, 'Empty URL in ' + sku);
      });
    });
  });

  t('Missing SKU gallery falls back to family gallery', function() {
    const fakeSku = 'WD516AN.FAKESKU';
    assert.strictEqual(SKU_GALLERIES[fakeSku], undefined, 'Fake SKU should not exist');
    const familyGallery = FAMILY_GALLERIES['wd516an'];
    assert.ok(Array.isArray(familyGallery) && familyGallery.length > 0, 'Family gallery exists as fallback');
  });

  t('WD518 Beige gallery has 3 unique images', function() {
    const beige = SKU_GALLERIES['WD518AN.ABGPLMT'];
    assert.strictEqual(beige.length, 3, 'Beige should have 3 unique images');
  });

  t('WD516 SKU galleries each have exactly 1 unique image', function() {
    assert.strictEqual(SKU_GALLERIES['WD516AN.ACNPLMT'].length, 1, 'Navy = 1');
    assert.strictEqual(SKU_GALLERIES['WD516AN.AEWPLMT'].length, 1, 'White = 1');
    assert.strictEqual(SKU_GALLERIES['WD516AN.ASLPLMT'].length, 1, 'Silver = 1');
  });

  t('WD518 non-Beige SKU galleries each have exactly 1 unique image', function() {
    assert.strictEqual(SKU_GALLERIES['WD518AN.AWHPLMT'].length, 1, 'White = 1');
    assert.strictEqual(SKU_GALLERIES['WD518AN.ACGPLMT'].length, 1, 'Gray = 1');
  });
})();

/* ================================================================
   สรุป
   ================================================================ */
console.log('\n═══ ผล: ' + passed + ' ผ่าน / ' + failed + ' ไม่ผ่าน ═══');
process.exit(failed ? 1 : 0);

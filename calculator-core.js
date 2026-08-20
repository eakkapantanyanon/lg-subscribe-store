/* =====================================================================
   calculator-core.js — โมดูลคำนวณราคา LG Subscribe
   สกัด logic จากเว็บต้นแบบ (LG Subscribe Calculator Aug 2026 · v84)
   ใช้ร่วมกันระหว่าง subscribe-store.html (browser) และ calculator.test.js (Node)
   - การปัดเศษ: snapBaht (>0.5 ปัดขึ้น, ≤0.5 ปัดลง) · ceil2 · round2
   - combo: % ของ postPromoPrice · สินค้าไม่มี Advance บิล 1 เต็ม → งวด 2
   - advance: จ่ายล่วงหน้า = regular×6 (12 เดือน × 50%) · combo เฉลี่ยหัก 12 เดือนแรก
   - outright (ซื้อขาด): ราคาคงที่ advancePayment — ไม่ถูกหัก combo (FIX จากบั๊กเว็บต้นแบบ)
   ===================================================================== */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.LGCalc = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  /* ---------- การปัดเศษ ---------- */
  // ปัดบาทเต็ม: เศษ > 0.5 ปัดขึ้น, ≤ 0.5 ปัดลง (เช่น 374.5 → 374, 2249.5 → 2249)
  function snapBaht(x) {
    const f = Math.floor(x);
    return (x - f) > 0.5 ? f + 1 : f;
  }
  // ปัดขึ้น 2 ตำแหน่ง (ใช้กับส่วนแบ่ง combo ของเงินล่วงหน้า)
  function ceil2(x) { return Math.ceil(x * 100) / 100; }
  // ปัด 2 ตำแหน่ง (ยอดรวม)
  function round2(x) { return Math.round(x * 100) / 100; }
  // แสดงเงิน: ทศนิยม 2 ตำแหน่งเมื่อมีเศษ
  function fmtMoney(n) {
    return Number(n).toLocaleString(undefined, { maximumFractionDigits: 2 });
  }
  // ราคางวดที่ลงท้าย .50 — แสดง 2 ตำแหน่งเสมอ (เช่น 649.50)
  function fmtBillPrice(n) {
    const num = Number(n);
    if (!Number.isInteger(num) && Math.abs((num * 10) % 10 - 5) < 0.001) {
      return num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return fmtMoney(num);
  }

  /* ---------- วันที่ (พ.ศ. → ค.ศ.) ---------- */
  // '2569-08-15' → Date(2026-08-15)
  function parseBEDate(s) {
    const p = String(s || '').split('-').map(Number);
    if (p.length !== 3 || p.some(n => Number.isNaN(n))) return null;
    return new Date(p[0] - 543, p[1] - 1, p[2]);
  }
  // ตรวจว่าวันนี้อยู่ในช่วงวันที่ (รวมวันหมด)
  function isDateInRange(dateStart, dateEnd, now) {
    if (!dateStart || !dateEnd) return false;
    const start = parseBEDate(dateStart);
    const end = parseBEDate(dateEnd);
    if (!start || !end) return false;
    end.setHours(23, 59, 59, 999);
    const t = now || new Date();
    return t >= start && t <= end;
  }

  /* ---------- อัตราส่วนลดคอมโบ ---------- */
  // tiers: [{min, rate}] เรียงจากน้อยไปมาก — rate = tier สูงสุดที่ n ผ่านเกณฑ์
  function comboRateFor(tiers, n) {
    let rate = 0;
    (tiers || []).forEach(t => { if (n >= t.min && t.rate > rate) rate = t.rate; });
    return rate / 100;
  }
  function minTierItems(tiers) {
    return (tiers && tiers.length) ? Math.min.apply(null, tiers.map(t => t.min)) : 0;
  }

  /* ---------- แปลงข้อมูลแผน (รองรับโครงสร้างเก่า/ใหม่/แก้จากโหมดผู้ดูแล) ----------
     อ่านจาก 4 ฟิลด์หลัก: label, months, price, promo → สร้าง billSchedule/advance/outright
     ใช้ได้ทั้งแผนโครงสร้างใหม่และแผนเก่า {label, months, price, promo} */
  function normalizePlan(pl) {
    if (!pl) return pl;
    const label = String(pl.label || '');
    const months = Number(pl.months) || 60;
    const price = Number(pl.price) || 0;
    const promo = String(pl.promo || '');
    const isOutright = /outright/i.test(label);

    let serviceType = 'No Service';
    let serviceCycle = 'ไม่มีบริการ';
    if (/Visit/i.test(label)) serviceType = 'Visit';
    else if (/Self/i.test(label)) serviceType = 'Self';
    const cycleMatch = label.match(/·\s*(\d+)\s*งวด/);
    if (cycleMatch) serviceCycle = 'ทุก ' + cycleMatch[1] + ' เดือน';

    const term = months === 84 ? '7Y' : months === 72 ? '6Y' : months === 24 ? '2Y' : '5Y';

    if (isOutright) {
      const fullMatch = promo.match(/ราคาเต็ม\s*฿([\d,]+)/);
      const payMatch = promo.match(/=\s*฿([\d,]+)/);
      const regular = fullMatch ? parseInt(fullMatch[1].replace(/,/g, ''), 10) : Math.round(price * 10 / 9);
      const advancePayment = payMatch ? parseInt(payMatch[1].replace(/,/g, ''), 10) : Math.round(price);
      const outrightServiceType = pl.serviceType || 'Visit';
      const outrightServiceCycle = pl.serviceCycle || (outrightServiceType === 'Self' ? 'ไม่มีบริการ' : 'ทุก 6 เดือน');
      return {
        term: '2Y', serviceType: outrightServiceType, serviceCycle: outrightServiceCycle,
        regular: regular, effectiveMonthly: 0, promoMonths: 0, postPromoPrice: 0,
        advancePayment: advancePayment, outright: true, billSchedule: null,
        totalContractMonths: 24, totalSaving: regular - advancePayment,
        label: label, months: 24, price: advancePayment, promo: promo
      };
    }

    const half = Math.floor(price / 2);      // โปร 50% (ปัดลง ตาม PDF)
    const halfExact = price / 2;             // ครึ่งราคาเงินล่วงหน้า (ตรงเป๊ะ)
    const segs = [];
    const pushSeg = (a, b, p, note) => segs.push({ range: (a === b ? 'บิล ' + a : 'บิล ' + a + '-' + b), price: p, note: note || '' });

    let advancePayment = 0;
    let effectiveMonthly = price;
    let promoMonths = 0;

    const mAdv = promo.match(/50%\s*เดือน\s*(\d+)-(\d+)/);        // "50% เดือน 1-20" (TV/จอ/ลำโพง)
    const mBill = promo.match(/บิลแรก\s*฿([\d,]+)/);               // "บิลแรก ฿149"
    const mPro50 = promo.match(/โปร\s*50%\s*เดือน\s*(\d+)-(\d+)/);  // "โปร 50% เดือน 2-8" / "1-3" / "1-8"

    if (mAdv && serviceType === 'No Service') {
      // แผน Advance — จ่ายล่วงหน้า 12 เดือน 50% (= regular × 6) บิล 1-12 ครึ่งราคา
      advancePayment = price * 6;
      const B = parseInt(mAdv[2], 10);
      pushSeg(1, 12, halfExact, 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)');
      if (B > 12) {
        pushSeg(13, B, half, 'โปรลด 50%');
        promoMonths = B - 12;
        if (B < months) pushSeg(B + 1, months, price, 'ราคาปกติ');
      } else {
        promoMonths = 0;
        if (months > 12) pushSeg(13, months, price, 'ราคาปกติ');
      }
      effectiveMonthly = halfExact;
    } else if (mBill) {
      const first = parseInt(mBill[1].replace(/,/g, ''), 10);
      effectiveMonthly = first;
      promoMonths = 1;
      pushSeg(1, 1, first, 'ราคา 149.-');
      let next = 2;
      if (mPro50 && parseInt(mPro50[1], 10) === 2) {
        const B = parseInt(mPro50[2], 10);
        pushSeg(2, B, half, 'โปรลด 50%');
        next = B + 1;
      }
      if (next <= months) pushSeg(next, months, price, '');
    } else if (mPro50 && parseInt(mPro50[1], 10) === 1) {
      const B = parseInt(mPro50[2], 10);
      effectiveMonthly = half;
      promoMonths = B;
      pushSeg(1, B, half, 'โปรลด 50%');
      if (B < months) pushSeg(B + 1, months, price, '');
    } else {
      effectiveMonthly = price;
      promoMonths = 0;
      pushSeg(1, months, price, '');
    }

    // ส่วนลดจากโปรเทียบราคาปกติ (ตรงกับ field totalSaving ของเว็บต้นแบบ)
    let totalSaving = 0;
    segs.forEach(sg => {
      const rng = sg.range.replace('บิล ', '');
      let a, b;
      if (rng.includes('-')) { const p = rng.split('-'); a = +p[0]; b = +p[1]; }
      else { a = b = +rng; }
      totalSaving += (price - sg.price) * (b - a + 1);
    });
    if (advancePayment > 0) totalSaving = promoMonths * (price - half); // นับเฉพาะช่วงโปรหลังล่วงหน้า

    return {
      term: term, serviceType: serviceType, serviceCycle: serviceCycle,
      regular: price, effectiveMonthly: effectiveMonthly, promoMonths: promoMonths,
      postPromoPrice: price, advancePayment: advancePayment, outright: false,
      billSchedule: segs, totalContractMonths: months, totalSaving: Math.round(totalSaving * 100) / 100,
      label: label, months: months, price: price, promo: promo
    };
  }

  /* ---------- สร้างราคารายบิลจากแผน ---------- */
  function buildBills(item) {
    const months = item.totalContractMonths || 60;
    const bills = new Array(months + 1).fill(0);
    if (item.billSchedule) {
      item.billSchedule.forEach(seg => {
        if (!seg || seg.range == null || seg.price == null) return;
        const rng = String(seg.range).replace('บิล ', '');
        let a, b;
        if (rng.includes('-')) { const p = rng.split('-'); a = +p[0]; b = +p[1]; }
        else { a = b = +rng; }
        if (!Number.isFinite(a) || !Number.isFinite(b)) return;
        for (let k = a; k <= b && k <= months; k++) bills[k] = seg.price;
      });
    } else {
      const pm = item.promoMonths || 0;
      for (let k = 1; k <= months; k++) bills[k] = (k <= pm) ? item.effectiveMonthly : item.postPromoPrice;
    }
    return bills;
  }

  /* ---------- ตารางบิลหลังหักส่วนลดคอมโบ (logic จาก v84 + FIX outright) ----------
     - ไม่มี Advance: บิล 1 เก็บเต็ม → งวด 2 หัก combo ของบิล 1 ทั้งก้อน → งวด 3+ หักปกติ
     - มี Advance: เงินก้อนแรกเก็บเต็ม · combo ของก้อนเฉลี่ยหัก 12 เดือนแรก · ทุกบิลหัก cr ปกติ
     - Outright (FIX): ไม่สร้างบิล — ราคาคงที่ advancePayment ไม่ถูกหัก combo */
  function itemComboSchedule(item, cr) {
    const rate = cr || 0;
    if (item.outright) return { advance: item.advancePayment || 0, bills: [], comboRate: rate };

    const bills = buildBills(item);
    const months = item.totalContractMonths || 60;
    const adv = item.advancePayment || 0;
    const out = [];
    const billPrice = (raw, catalogPrice) => rate > 0 ? snapBaht(raw) : catalogPrice;

    if (adv > 0) {
      const advSpreadMonths = Math.min(12, months);
      const advPerBill = rate > 0 ? ceil2((adv * rate) / advSpreadMonths) : 0;
      for (let k = 1; k <= months; k++) {
        const advShare = (k <= advSpreadMonths) ? advPerBill : 0;
        const raw = bills[k] - bills[k] * rate - advShare;
        out.push({ bill: k, base: bills[k], price: billPrice(raw, bills[k]) });
      }
    } else {
      const bill1Combo = (months > 1 && rate > 0) ? (bills[1] * rate) : 0;
      for (let k = 1; k <= months; k++) {
        let raw;
        if (k === 1) raw = bills[k];
        else if (k === 2) raw = bills[k] - bills[k] * rate - bill1Combo;
        else raw = bills[k] - bills[k] * rate;
        out.push({ bill: k, base: bills[k], price: billPrice(raw, bills[k]) });
      }
    }
    return { advance: adv, bills: out, comboRate: rate };
  }

  // จัดกลุ่มบิลที่ราคาเท่ากันติดกัน → ช่วงงวด
  function groupBills(bills) {
    const segs = [];
    let cur = null;
    bills.forEach(b => {
      if (cur && Math.abs(cur.price - b.price) < 0.01) {
        cur.end = b.bill;
      } else {
        if (cur) segs.push(cur);
        cur = { start: b.bill, end: b.bill, price: b.price, base: b.base };
      }
    });
    if (cur) segs.push(cur);
    return segs;
  }
  function itemComboSegments(item, cr) {
    const sched = itemComboSchedule(item, cr);
    return { advance: sched.advance, segments: groupBills(sched.bills), comboRate: sched.comboRate };
  }

  /* ---------- ยอดรวม ---------- */
  function itemTotalContract(item, cr) {
    const sched = itemComboSchedule(item, cr);
    const billSum = sched.bills.reduce((s, b) => s + b.price, 0);
    return sched.advance + billSum;
  }
  function grandTotal(items, cr) {
    return round2(items.reduce((s, it) => s + itemTotalContract(it, cr), 0));
  }
  // ยอดรวมตลอดสัญญาแบบไม่มีส่วนลด combo (ราคาเต็มตาม billSchedule)
  function grandTotalNoCombo(items) {
    let total = 0;
    items.forEach(it => {
      total += it.advancePayment || 0;
      if (it.outright) return;
      total += buildBills(it).reduce((s, p) => s + p, 0);
    });
    return round2(total);
  }
  function grandTotalSaving(items, cr) {
    return round2(grandTotalNoCombo(items) - grandTotal(items, cr));
  }
  // ยอดรวมโปร (totalSaving ของแต่ละแผน) + ส่วนลด combo
  function totalSaving(items, cr) {
    const promoSaving = items.reduce((s, it) => s + (it.totalSaving || 0), 0);
    return promoSaving + grandTotalSaving(items, cr);
  }

  /* ---------- ยอดรายเดือน ---------- */
  function totalMonthly(items) {
    return items.reduce((s, it) => s + (it.outright ? 0 : (it.postPromoPrice || 0)), 0);
  }
  function comboDiscount(totalMonthlyValue, cr) {
    const x = totalMonthlyValue * cr;
    const f = Math.floor(x);
    return (x - f) > 0.5 ? f + 1 : f;
  }
  function netMonthly(items, cr) {
    return totalMonthly(items) - comboDiscount(totalMonthly(items), cr);
  }

  /* ---------- ยอดชำระครั้งแรก ---------- */
  // outright / advance → จ่ายเงินล่วงหน้าเท่านั้น · ทั่วไป → งวดที่ 1
  function itemFirstPayment(item, cr) {
    const advance = item.advancePayment || 0;
    if (item.outright || advance > 0) return Math.round(advance * 100) / 100;
    const bill1 = itemComboSchedule(item, cr).bills.find(b => b.bill === 1);
    return Math.round((bill1 ? bill1.price : 0) * 100) / 100;
  }
  function firstPaymentTotal(items, cr) {
    return round2(items.reduce((s, it) => s + itemFirstPayment(it, cr), 0));
  }

  /* ---------- Shock 8.8 (149 → 88, date-gated) ---------- */
  function isShockPromoActive(shockPromo, now) {
    if (!shockPromo || !shockPromo.dateStart || !shockPromo.dateEnd) return false;
    return isDateInRange(shockPromo.dateStart, shockPromo.dateEnd, now);
  }
  function isShock149FirstMonthPlan(plan, shockPromo) {
    if (!plan || plan.outright || (plan.advancePayment > 0)) return false;
    const from = (shockPromo && shockPromo.fromPrice) || 149;
    if (Number(plan.promoMonths) === 1 && Number(plan.effectiveMonthly) === from) return true;
    const bs = plan.billSchedule;
    if (Array.isArray(bs) && bs.length && bs[0].range === 'บิล 1' && Number(bs[0].price) === from
      && Number(plan.promoMonths) === 1) return true;
    return false;
  }
  // คืนแผนใหม่ (clone) ที่บิลแรก 149 → 88 (idempotent) — รับ now เพื่อทดสอบช่วงเวลา
  function applyShockPromoToPlan(plan, shockPromo, now) {
    if (!plan || plan._shock88Applied) return plan;
    if (!shockPromo || !isShockPromoActive(shockPromo, now)) return plan;
    if (!isShock149FirstMonthPlan(plan, shockPromo)) return plan;
    const from = shockPromo.fromPrice;
    const to = shockPromo.toPrice;
    const delta = from - to;
    const out = Object.assign({}, plan, { effectiveMonthly: to });
    if (Array.isArray(plan.billSchedule)) {
      out.billSchedule = plan.billSchedule.map(seg => {
        if (seg && seg.range === 'บิล 1' && Number(seg.price) === from) {
          return Object.assign({}, seg, { price: to, note: 'ราคา 88.- · 8.8 SHOCK' });
        }
        return seg;
      });
    }
    if (typeof plan.totalSaving === 'number') out.totalSaving = plan.totalSaving + delta;
    out._shock88Applied = true;
    return out;
  }

  return {
    snapBaht: snapBaht, ceil2: ceil2, round2: round2,
    fmtMoney: fmtMoney, fmtBillPrice: fmtBillPrice,
    parseBEDate: parseBEDate, isDateInRange: isDateInRange,
    comboRateFor: comboRateFor, minTierItems: minTierItems,
    normalizePlan: normalizePlan,
    buildBills: buildBills,
    itemComboSchedule: itemComboSchedule,
    groupBills: groupBills, itemComboSegments: itemComboSegments,
    itemTotalContract: itemTotalContract,
    grandTotal: grandTotal, grandTotalNoCombo: grandTotalNoCombo,
    grandTotalSaving: grandTotalSaving, totalSaving: totalSaving,
    totalMonthly: totalMonthly, comboDiscount: comboDiscount, netMonthly: netMonthly,
    itemFirstPayment: itemFirstPayment, firstPaymentTotal: firstPaymentTotal,
    isShockPromoActive: isShockPromoActive,
    isShock149FirstMonthPlan: isShock149FirstMonthPlan,
    applyShockPromoToPlan: applyShockPromoToPlan
  };
});

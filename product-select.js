/* =====================================================================
   product-select.js — ตัวเลือกแผน (PDP) + ข้อมูลสรุปราคา
   ใช้ร่วมกันระหว่าง product.html (หน้าสินค้า) และ subscribe-store.html (ตะกร้า)
   เพื่อให้สูตรราคาเป็นชุดเดียว: ทุกอย่างผ่าน LGCalc (calculator-core.js)
   - optionsFor / filterPlans / resolvePlanIndex: ตัวเลือก (ลูกค้า, แผน, การดูแล, สัญญา) → แผนเดียว
   - comboInfo / activePromo: อัตราส่วนลดคอมโบตามช่วงเวลา + ประเภทลูกค้า
   - itemSummary: สรุปราคาสำหรับกล่องสรุปบน PDP (คำนวณด้วยฟังก์ชันเดียวกับหน้าตะกร้า)
   ===================================================================== */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./calculator-core.js'));
  else root.FLEXISelect = factory(root.LGCalc);
})(typeof self !== 'undefined' ? self : this, function (LG) {
  'use strict';

  /* ---------- โปรโมชันกลาง (วันที่เป็นปฏิทิน พ.ศ.) — ใช้ที่เดียวทั้งเว็บ ---------- */
  var PROMOS = {
    normal: { name: 'August Combo', dateStart: '2569-08-01', dateEnd: '2569-08-31' },
    special: { name: 'LG Special Birthday Combo Promotion', dateStart: '2569-08-15', dateEnd: '2569-08-25' },
    shock: { name: 'DOUBLE DAY 8.8 SHOCK PRICE', dateStart: '2569-08-08', dateEnd: '2569-08-10', fromPrice: 149, toPrice: 88 }
  };

  var CARE_INFO = {
    Visit: {
      label: 'รายเดือนพร้อมบริการ', short: 'พร้อมบริการ',
      desc: 'ช่าง LG เข้าดูแลถึงบ้านตามรอบ (ทุก 6/12 เดือน) — ตรวจเช็คและล้างบำรุงให้ถึงที่ รวมในค่าเช่าแล้ว'
    },
    Self: {
      label: 'รายเดือนเปลี่ยนด้วยตัวเอง', short: 'เปลี่ยนเอง',
      desc: 'LG ส่งอะไหล่ให้เปลี่ยนเองที่บ้าน — ค่าเช่าถูกลง แต่ต้องเปลี่ยนอะไหล่ด้วยตัวเอง'
    },
    'No Service': {
      label: 'ไม่รับบริการดูแล', short: 'ไม่รับบริการ',
      desc: 'รับประกันเท่านั้น ไม่มีค่ารอบบริการ — เหมาะกับทีวี/จอ/ลำโพง/ไมโครเวฟ ที่ไม่ต้องดูแลรายเดือน'
    }
  };

  /* ---------- ตัวเลือกที่สินค้ารองรับ ---------- */
  function planTypes(product) {
    var hasOut = (product.plans || []).some(function (p) { return p.outright; });
    return hasOut ? ['monthly', 'outright'] : ['monthly'];
  }
  function careTypes(product, planType) {
    var pt = planType || 'monthly';
    var sts = (product.plans || [])
      .filter(function (p) { return pt === 'outright' ? !!p.outright : !p.outright; })
      .map(function (p) { return p.serviceType; });
    return Array.from(new Set(sts));
  }
  function terms(product, planType, careType) {
    var pt = planType || 'monthly';
    return Array.from(new Set((product.plans || [])
      .filter(function (p) {
        if (pt === 'outright') return !!p.outright;
        if (p.outright) return false;
        if (careType && p.serviceType !== careType) return false;
        return true;
      })
      .map(function (p) { return p.totalContractMonths; })))
      .sort(function (a, b) { return a - b; });
  }

  function promoKey(p) { return 'โปร ' + (p.promoMonths || 0) + ' เดือน'; }

  // แผนที่ตรงกับ selection (ยังไม่รวม variant) — ใช้ filter ต่อยอด
  function filterPlans(product, sel) {
    var s = sel || {};
    var pt = s.planType || 'monthly';
    return (product.plans || []).filter(function (p) {
      if (pt === 'outright') { if (!p.outright) return false; }
      else if (p.outright) return false;
      if (s.careType && p.serviceType !== s.careType) return false;
      if (s.term && Number(p.totalContractMonths) !== Number(s.term)) return false;
      if (s.variant) {
        if (s.variant.indexOf('cycle:') === 0) return p.serviceCycle === s.variant.slice(6);
        if (s.variant.indexOf('promo:') === 0) return promoKey(p) === s.variant.slice(6);
        return false;
      }
      return true;
    });
  }

  // เมื่อ (planType, careType, term) เหลือหลายแผน — variant ที่ต้องเลือกเพิ่ม (รอบบริการ / โปรโมชัน)
  function variantOptions(plans) {
    if (!plans || plans.length <= 1) return [];
    var byCycle = {};
    var byPromo = {};
    plans.forEach(function (p) {
      var c = p.serviceCycle || 'ไม่มีบริการ';
      (byCycle[c] = byCycle[c] || []).push(p);
      var k = promoKey(p);
      (byPromo[k] = byPromo[k] || []).push(p);
    });
    var cycleKeys = Object.keys(byCycle);
    if (cycleKeys.length > 1) {
      return cycleKeys.map(function (c) {
        var ps = byCycle[c];
        return { key: 'cycle:' + c, label: c, hint: 'รอบการดูแล', plans: ps };
      });
    }
    var promoKeys = Object.keys(byPromo);
    if (promoKeys.length > 1) {
      return promoKeys.map(function (k) {
        var ps = byPromo[k];
        return { key: 'promo:' + k, label: k, hint: 'โปรโมชัน', plans: ps };
      });
    }
    return [];
  }

  // แผนเดียวที่เลือกได้ — -1 ถ้ายังไม่ครบ / ยังกำกวม (ต้องเลือก variant)
  function resolvePlanIndex(product, sel) {
    if (!sel || !sel.careType || !sel.term) return -1;
    var plans = filterPlans(product, sel);
    if (plans.length === 1) return product.plans.indexOf(plans[0]);
    if (plans.length > 1 && sel.variant) return product.plans.indexOf(plans[0]);
    return -1;
  }
  function resolvedPlan(product, sel) {
    var i = resolvePlanIndex(product, sel);
    return i >= 0 ? product.plans[i] : null;
  }
  // ใส่ตะกร้าได้เมื่อ: เลือกลูกค้า + การดูแล + สัญญา และ resolve ได้แผนเดียว
  function isComplete(product, sel) {
    return !!(sel && sel.customerType && sel.careType && sel.term && resolvedPlan(product, sel));
  }
  // ยังขาดอะไร (สำหรับแสดงคำใบ้)
  function missing(product, sel) {
    var s = sel || {};
    var miss = [];
    if (!s.customerType) miss.push('ข้อมูลลูกค้า');
    if (!s.careType) miss.push('ประเภทการดูแล');
    if (!s.term) miss.push('ระยะเวลาสัญญา');
    if (s.careType && s.term && !resolvedPlan(product, s)) miss.push('ตัวเลือกเพิ่มเติม (รอบบริการ/โปรโมชัน)');
    return miss;
  }

  /* ---------- คอมโบ (ช่วงเวลา + ประเภทลูกค้า) — ใช้ร่วมกับหน้าตะกร้า ---------- */
  function activePromo(now) {
    return LG.isDateInRange(PROMOS.special.dateStart, PROMOS.special.dateEnd, now)
      ? PROMOS.special : PROMOS.normal;
  }
  function comboInfo(customerType, cartQty, settings, now) {
    var n = Number(cartQty) || 0;
    var promo = activePromo(now);
    var s = settings || {};
    var tiers;
    if (promo === PROMOS.special) {
      tiers = customerType === 'old' ? [{ min: 1, rate: 15 }] : [{ min: 2, rate: 15 }];
    } else {
      tiers = customerType === 'old'
        ? [{ min: s.oldMin || 1, rate: s.comboPct || 10 }]
        : [{ min: s.newMin || 2, rate: s.comboPct || 10 }];
    }
    var need = LG.minTierItems(tiers);
    return {
      promo: promo, tiers: tiers,
      rate: LG.comboRateFor(tiers, n),
      needed: n >= need ? 0 : need - n,
      special: promo === PROMOS.special
    };
  }

  /* ---------- แปลงแผน → item (รวม shock 8.8) ---------- */
  function planToItem(product, plan, now) {
    var p = LG.applyShockPromoToPlan(plan, PROMOS.shock, now);
    return Object.assign({}, p, { productId: product.id, category: product.category, code: product.model });
  }

  /* ---------- สรุปราคาสำหรับกล่องสรุป PDP ----------
     ใช้ฟังก์ชันเดียวกับหน้าตะกร้า (LG.itemComboSchedule / itemFirstPayment /
     itemTotalContract / buildBills) — cartQty = จำนวนเครื่องในตะกร้าตอนนี้ (ยังไม่รวมรายการนี้) */
  function itemSummary(product, planIndex, customerType, cartQty, settings, now) {
    var plan = product.plans[planIndex];
    var item = planToItem(product, plan, now);
    var qtyAfter = (Number(cartQty) || 0) + 1;
    var info = comboInfo(customerType, qtyAfter, settings, now);
    var cr = info.rate;
    var sched = LG.itemComboSchedule(item, cr);
    var segments = LG.groupBills(sched.bills);
    var firstPay = LG.itemFirstPayment(item, cr);
    var contract = LG.itemTotalContract(item, cr);
    // ยอดไม่มีคอมโบ (ราคาตาม billSchedule ล้วน)
    var noCombo = item.advancePayment || 0;
    if (!item.outright) noCombo += LG.buildBills(item).reduce(function (s2, p2) { return s2 + p2; }, 0);
    var comboSaving = LG.round2(noCombo - contract);
    var totalSaving = LG.round2((plan.totalSaving || 0) + comboSaving);

    // ราคา "เดือนนี้" (จ่ายจริงงวดแรก) + ราคาเต็มสำหรับขีดฆ่า
    var big = null, bigLabel = '', strike = null, strikeLabel = '';
    if (item.outright) {
      big = item.advancePayment || item.price;
      bigLabel = 'จ่ายครั้งเดียว';
      strike = item.regular || item.price;
      var pct = strike > 0 ? Math.round((1 - big / strike) * 100) : 0;
      strikeLabel = pct > 0 ? 'ลด ' + pct + '%' : '';
    } else if (item.advancePayment > 0) {
      big = item.advancePayment;
      bigLabel = 'จ่ายล่วงหน้า 12 เดือน (50%)';
      strike = LG.round2(item.postPromoPrice * 12);
      strikeLabel = 'ปกติ 12 เดือนแรก';
    } else {
      var b1 = sched.bills.length ? sched.bills[0].price : item.effectiveMonthly;
      big = b1;
      bigLabel = 'บิลแรก' + (item.promoMonths === 1 ? '' : ' (งวด 1)');
      strike = item.postPromoPrice;
      strikeLabel = '/เดือน (หลังโปร)';
    }

    return {
      plan: plan, item: item, combo: info,
      comboRate: cr, comboDiscount: LG.comboDiscount(LG.totalMonthly([item]), cr),
      sched: sched, segments: segments,
      firstPay: firstPay, contract: contract, noCombo: noCombo,
      comboSaving: comboSaving, totalSaving: totalSaving,
      big: big, bigLabel: bigLabel, strike: strike, strikeLabel: strikeLabel,
      monthlyAfter: item.outright ? 0 : item.postPromoPrice,
      promoText: plan.promo || '',
      termMonths: item.totalContractMonths
    };
  }

  /* ---------- slug / ค้นหา ---------- */
  function slugFor(product) { return String(product.id || product.model || '').toLowerCase(); }
  function findBySlug(products, slug) {
    var s = String(slug || '').toLowerCase();
    for (var i = 0; i < products.length; i++) {
      var p = products[i];
      if (slugFor(p) === s || String(p.model || '').toLowerCase() === s) return p;
    }
    return null;
  }

  return {
    PROMOS: PROMOS, CARE_INFO: CARE_INFO,
    planTypes: planTypes, careTypes: careTypes, terms: terms,
    filterPlans: filterPlans, variantOptions: variantOptions,
    resolvePlanIndex: resolvePlanIndex, resolvedPlan: resolvedPlan,
    isComplete: isComplete, missing: missing,
    activePromo: activePromo, comboInfo: comboInfo,
    planToItem: planToItem, itemSummary: itemSummary,
    slugFor: slugFor, findBySlug: findBySlug
  };
});

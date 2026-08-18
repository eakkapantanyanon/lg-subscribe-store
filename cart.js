/* =====================================================================
   cart.js — ตะกร้าสินค้าร่วม (shared cart)
   ใช้ร่วมกันระหว่าง product.html (PDP) และ subscribe-store.html (หน้าตะกร้า)
   - เก็บใน localStorage (key: flexiCart) — โครงสร้าง:
       { customerType: 'new'|'old', items: [{ productId, planIndex, qty }] }
   - ทุกครั้งที่ save จะ dispatch event 'flexi-cart-changed' (ใช้กับ badge ตะกร้าบนหน้า PDP)
   - รองรับ Node test (ฉีด storage ผ่าน setStorage)
   ===================================================================== */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.FLEXICart = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var KEY = 'flexiCart';
  var injected = null;   // สำหรับทดสอบใน Node

  function storage() {
    if (injected) return injected;
    try { return (typeof window !== 'undefined' && window.localStorage) ? window.localStorage : null; }
    catch (e) { return null; }
  }

  // cart เปล่า
  function empty() { return { customerType: 'new', items: [] }; }

  function normalizeCart(raw) {
    if (!raw || !Array.isArray(raw.items)) return empty();
    return {
      customerType: raw.customerType === 'old' ? 'old' : 'new',
      items: (raw.items || [])
        .filter(function (i) { return i && i.productId; })
        .map(function (i) {
          return {
            productId: String(i.productId),
            planIndex: Number(i.planIndex) || 0,
            qty: Math.max(1, Number(i.qty) || 1)
          };
        })
    };
  }

  function load() {
    var s = storage();
    if (!s) return empty();
    try { return normalizeCart(JSON.parse(s.getItem(KEY) || 'null')); }
    catch (e) { return empty(); }
  }

  function save(cart) {
    var c = normalizeCart(cart);
    var s = storage();
    if (s) {
      try { s.setItem(KEY, JSON.stringify(c)); } catch (e) { /* quota/private mode */ }
    }
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      try { window.dispatchEvent(new CustomEvent('flexi-cart-changed', { detail: c })); } catch (e) {}
    }
    return c;
  }

  function totalQty(cart) {
    return (cart && cart.items ? cart.items : []).reduce(function (s, i) { return s + (Number(i.qty) || 0); }, 0);
  }

  // เพิ่มสินค้า (productId + planIndex เดิม → เพิ่มจำนวน) — คืน cart ใหม่
  function addItem(cart, productId, planIndex, qty, customerType) {
    var c = normalizeCart(cart);
    if (customerType === 'old' || customerType === 'new') c.customerType = customerType;
    var id = String(productId);
    var pi = Number(planIndex) || 0;
    var q = Math.max(1, Number(qty) || 1);
    var found = null;
    c.items.forEach(function (it) { if (it.productId === id && it.planIndex === pi) found = it; });
    if (found) found.qty += q;
    else c.items.push({ productId: id, planIndex: pi, qty: q });
    return c;
  }

  function setQty(cart, productId, planIndex, qty) {
    var c = normalizeCart(cart);
    var id = String(productId);
    var pi = Number(planIndex) || 0;
    c.items.forEach(function (it) {
      if (it.productId === id && it.planIndex === pi) it.qty = Math.max(1, Number(qty) || 1);
    });
    return c;
  }

  function setPlan(cart, productId, fromPlanIndex, toPlanIndex) {
    var c = normalizeCart(cart);
    var id = String(productId);
    var from = Number(fromPlanIndex) || 0;
    var to = Number(toPlanIndex) || 0;
    var idx = -1;
    c.items.forEach(function (it, i) { if (it.productId === id && it.planIndex === from) idx = i; });
    if (idx < 0) return c;
    var it = c.items[idx];
    // merge ถ้ามีรายการเดิมที่ plan ใหม่แล้ว
    var dup = null;
    c.items.forEach(function (x, i) { if (i !== idx && x.productId === id && x.planIndex === to) dup = x; });
    if (dup) {
      dup.qty += it.qty;
      c.items.splice(idx, 1);
    } else {
      it.planIndex = to;
    }
    return c;
  }

  function removeItem(cart, productId, planIndex) {
    var c = normalizeCart(cart);
    var id = String(productId);
    var pi = (planIndex === undefined || planIndex === null) ? null : Number(planIndex);
    c.items = c.items.filter(function (it) {
      return !(it.productId === id && (pi === null || it.planIndex === pi));
    });
    return c;
  }

  function clear(cart) {
    var c = normalizeCart(cart);
    c.items = [];
    return c;
  }

  function setStorage(st) { injected = st; return injected; }

  return {
    KEY: KEY, empty: empty, load: load, save: save,
    totalQty: totalQty, addItem: addItem, setQty: setQty, setPlan: setPlan,
    removeItem: removeItem, clear: clear, setStorage: setStorage
  };
});

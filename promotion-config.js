/* Central promotion configuration for LG Subscribe Store.
   MONTHLY UPDATE: edit this file only for customer-discount rules.
   1) Update configId / campaignName / dateStart / dateEnd.
   2) Update customerDiscount.new and customerDiscount.old.
   PDP and Cart read these values through product-select.js; calculator formulas stay in calculator-core.js.
*/
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.LG_PROMOTION_CONFIG = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  return {
    schemaVersion: 1,
    configId: '2026-08-customer-discount-v1',
    campaignName: 'August Customer Discount',
    dateStart: '2569-08-01',
    dateEnd: '2569-08-31',

    // Monthly customer discount rules (single source of truth).
    customerDiscount: {
      new: { minItems: 2, ratePct: 10, label: 'ลูกค้าใหม่' },
      old: { minItems: 1, ratePct: 10, label: 'ลูกค้าเก่า' }
    },

    // Separate short-term price promotion used by existing bill logic.
    shock: {
      name: 'DOUBLE DAY 8.8 SHOCK PRICE',
      dateStart: '2569-08-08',
      dateEnd: '2569-08-10',
      fromPrice: 149,
      toPrice: 88
    }
  };
});

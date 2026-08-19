/* FLEXI-SUB conversion events — GA4/GTM-ready and intentionally PII-free. */
(function () {
  'use strict';

  window.dataLayer = window.dataLayer || [];

  function push(event, params) {
    window.dataLayer.push(Object.assign({
      event: event,
      page_path: location.pathname,
      page_title: document.title,
    }, params || {}));
  }

  function text(el) {
    return (el && el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 120);
  }

  function productSlugFromHref(href) {
    try { return new URL(href, location.href).searchParams.get('slug') || undefined; }
    catch (_) { return undefined; }
  }

  document.addEventListener('DOMContentLoaded', function () {
    push('flexi_page_ready', { page_type: document.body.dataset.page || 'unknown' });

    document.addEventListener('click', function (event) {
      const target = event.target.closest('a, button, [role="link"], .p-card, .lifestyle-card, .opt-card, .cat-tab');
      if (!target) return;

      if (target.classList.contains('lifestyle-card')) {
        push('lifestyle_select', { lifestyle_name: text(target.querySelector('h4')) });
      }
      if (target.classList.contains('p-card')) {
        push('product_card_click', {
          product_name: text(target.querySelector('.p-name')),
          product_model: text(target.querySelector('.p-model')),
        });
      }
      if (target.classList.contains('opt-card')) {
        const group = target.closest('.opt-group');
        push('pdp_option_select', {
          option_group: text(group && group.querySelector('.g-title')),
          option_value: text(target.querySelector('.t')),
        });
      }
      if (target.id === 'addBtn') {
        push('add_to_cart_click', { enabled: !target.disabled });
      }
      if (target.classList.contains('row-cta')) {
        push('promotion_product_click', { product_slug: productSlugFromHref(target.href) });
      }
      if (target.matches('.filters button, .cat-tab')) {
        push('promotion_filter_change', { selected_value: text(target) });
      }
      if (target.matches('a[href*="line.me"]')) {
        push('line_contact_click', { placement: target.className || target.closest('section,footer,aside')?.id || 'link' });
      }
    });

    document.addEventListener('change', function (event) {
      const target = event.target;
      if (target.matches('#categoryFilters input, .filters select')) {
        push('promotion_filter_change', { selected_value: target.value });
      }
    });
  });

  window.FLEXIAnalytics = { push: push };
})();

/* FLEXI-SUB conversion events — GA4/GTM-ready and intentionally PII-free. */
(function () {
  'use strict';

  window.dataLayer = window.dataLayer || [];

  const GA4_MEASUREMENT_ID = 'G-YQ5EW1VQPX';

  function loadGa4() {
    if (document.querySelector('script[data-flexi-ga4]')) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA4_MEASUREMENT_ID);
    script.dataset.flexiGa4 = 'true';
    document.head.appendChild(script);

    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA4_MEASUREMENT_ID, { send_page_view: true });
  }

  loadGa4();

  const FUNNEL_SESSION_KEY = 'flexi_funnel_session_v1';
  const FUNNEL_STAGE_BY_PAGE = {
    guide: 'guide',
    catalog: 'discovery',
    'product-detail': 'consideration',
    cart: 'lead_handoff'
  };

  function funnelSessionId() {
    try {
      let id = window.sessionStorage.getItem(FUNNEL_SESSION_KEY);
      if (!id) {
        id = 'fs_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 10);
        window.sessionStorage.setItem(FUNNEL_SESSION_KEY, id);
      }
      return id;
    } catch (_) {
      return 'fs_ephemeral';
    }
  }

  function pageType() {
    return document.body && document.body.dataset.page || 'unknown';
  }

  function funnelStage() {
    return FUNNEL_STAGE_BY_PAGE[pageType()] || 'other';
  }

  function push(event, params) {
    try {
      if (!Array.isArray(window.dataLayer)) window.dataLayer = [];
      const payload = Object.assign({
        event: event,
        page_path: location.pathname,
        page_title: document.title,
        page_type: pageType(),
        funnel_stage: funnelStage(),
        funnel_session_id: funnelSessionId(),
      }, params || {});
      window.dataLayer.push(payload);
      if (typeof window.gtag === 'function') {
        const gaParams = Object.assign({}, payload);
        delete gaParams.event;
        window.gtag('event', event, gaParams);
      }
    } catch (_) {
      // Analytics must never block the shopping flow.
    }
  }

  function text(el) {
    return (el && el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 120);
  }

  function productSlugFromHref(href) {
    try { return new URL(href, location.href).searchParams.get('slug') || undefined; }
    catch (_) { return undefined; }
  }

  document.addEventListener('DOMContentLoaded', function () {
    push('flexi_page_ready', { page_type: pageType() });
    if (funnelStage() !== 'other') {
      push('funnel_stage_view', { stage_name: funnelStage() });
    }

    document.addEventListener('click', function (event) {
      const target = event.target.closest('a, button, [role="link"], .p-card, .lifestyle-card, .opt-card, .cat-tab');
      if (!target) return;

      if (target.classList.contains('lifestyle-card')) {
        push('lifestyle_select', { lifestyle_name: text(target.querySelector('h4')) });
      }
      if (target.classList.contains('p-card')) {
        const productGrid = target.closest('.product-grid, .catalog-grid');
        const cards = productGrid ? Array.from(productGrid.querySelectorAll('.p-card')) : [];
        const position = Number(target.dataset.position) || cards.indexOf(target) + 1;
        push('product_card_click', {
          slug: productSlugFromHref(target.href),
          product_name: target.dataset.productName || text(target.querySelector('.p-name')),
          product_model: target.dataset.model || text(target.querySelector('.p-model')),
          category: target.dataset.category || text(target.querySelector('.p-cat')),
          position: position,
          source: target.dataset.source || (document.body.dataset.page === 'catalog' ? 'catalog' : 'homepage'),
        });
      }
      if (target.matches('a[href="#calculator-start"]')) {
        push('calculator_entry_click', { source: 'hero' });
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
      if (pageType() === 'guide' && target.matches('a[href*="products.html?sf_group="]')) {
        try {
          const url = new URL(target.href, location.href);
          push('guide_smart_finder_click', {
            finder_group: url.searchParams.get('sf_group') || 'unknown',
            link_text: text(target)
          });
        } catch (_) {
          // Link navigation must continue even if analytics parsing fails.
        }
      }
      if (pageType() === 'guide' && target.matches('[data-guide-action]')) {
        push('guide_conversion_click', {
          guide_action: target.dataset.guideAction || 'unknown',
          link_text: text(target)
        });
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

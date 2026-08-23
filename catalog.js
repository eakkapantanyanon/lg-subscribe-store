(function () {
    'use strict';

    const PRODUCTS = Array.isArray(window.LG_PRODUCTS) ? window.LG_PRODUCTS : [];
    const INITIAL_BATCH_SIZE = 16;
    const LOAD_MORE_BATCH_SIZE = 16;
    const state = { query: '', category: '', visibleLimit: INITIAL_BATCH_SIZE };

    const grid = document.getElementById('catalogGrid');
    const filters = document.getElementById('catalogFilters');
    const searchForm = document.getElementById('catalogSearchForm');
    const searchInput = document.getElementById('catalogSearch');
    const clearSearch = document.getElementById('clearCatalogSearch');
    const resetButton = document.getElementById('resetCatalog');
    const emptyState = document.getElementById('catalogEmpty');
    const resultCount = document.getElementById('catalogResultCount');
    const total = document.getElementById('catalogTotal');
    const loadMoreWrap = document.getElementById('catalogLoadMoreWrap');
    const loadMoreButton = document.getElementById('catalogLoadMore');
    const loadMoreStatus = document.getElementById('catalogLoadMoreStatus');

    let searchTrackTimer = 0;

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function slugFor(product) {
        return String(product.id || product.model || '').trim().toLowerCase();
    }

    function minimumMonthlyPrice(product) {
        const prices = Array.isArray(product.plans)
            ? product.plans.map(function (plan) { return Number(plan.price); })
            : [];

        const validPrices = prices.filter(Number.isFinite);
        if (validPrices.length) return Math.min.apply(null, validPrices);

        const productPrice = Number(product.price);
        return Number.isFinite(productPrice) ? productPrice : 0;
    }

    function formatPrice(value) {
        return Number(value || 0).toLocaleString('en-US');
    }

    function badgeFor(product) {
        const category = product.category || '';
        const model = product.model || '';

        if (category === 'ตู้เย็น Side by Side' || category === 'ตู้เย็น Multi-Door' || category === 'ตู้เย็น 2 ประตู') return 'ประหยัดไฟ เบอร์ 5';
        if (category === 'Wash Tower') return 'AI DD™ ประหยัดไฟ';
        if (category === 'เครื่องซักผ้า ฝาหน้า' || category === 'เครื่องซักผ้า ฝาบน') return 'ประหยัดไฟ เบอร์ 5';
        if (category === 'เครื่องอบผ้า') return 'Heat Pump™ ประหยัดไฟ';
        if (category.indexOf('เครื่องปรับอากาศ') === 0) return 'ประหยัดไฟ เบอร์ 5';
        if (category.indexOf('โทรทัศน์') === 0) return model.indexOf('OLED') !== -1 ? 'OLED แท้ เปล่งแสงเอง' : 'AI Processor';
        if (category === 'มอนิเตอร์') return 'Gaming / Work ครบ';
        if (category === 'Sound bar') return 'Dolby Atmos';
        if (category === 'Bluetooth Speaker') return model.toLowerCase().indexOf('xboom') !== -1 ? 'tuned by will.i.am' : 'เสียงรอบทิศ';
        if (category === 'เครื่องล้างจาน') return 'ฟรีติดตั้ง';
        if (category === 'เครื่องดูดฝุ่น') return 'แบตอัปเกรดได้';
        if (category === 'เครื่องลดความชื้น') return 'เปิด-ปิดอัตโนมัติ';
        if (category === 'เครื่องฟอกอากาศ') return 'กรอง PM2.5';
        if (category === 'เครื่องกรองน้ำ') return 'น้ำสะอาดทุกหยด';
        if (category === 'ตู้ถนอมผ้า') return 'ดูแลผ้าทุกชิ้น';
        return 'ฟรีติดตั้ง';
    }

    function track(eventName, params) {
        try {
            if (window.FLEXIAnalytics && typeof window.FLEXIAnalytics.push === 'function') {
                window.FLEXIAnalytics.push(eventName, params || {});
            }
        } catch (error) {
            // Analytics must never block catalog interactions.
        }
    }

    function categories() {
        return Array.from(new Set(PRODUCTS.map(function (product) {
            return product.category;
        }).filter(Boolean))).sort(function (a, b) {
            return a.localeCompare(b, 'th');
        });
    }

    function renderFilters() {
        const options = [{ value: '', label: 'ทั้งหมด', count: PRODUCTS.length }].concat(
            categories().map(function (category) {
                return {
                    value: category,
                    label: category,
                    count: PRODUCTS.filter(function (product) { return product.category === category; }).length
                };
            })
        );

        filters.innerHTML = options.map(function (option) {
            const isActive = state.category === option.value;
            return '<button class="catalog-filter" type="button" data-category="' + escapeHtml(option.value) + '" aria-pressed="' + isActive + '">' +
                '<span>' + escapeHtml(option.label) + '</span><small class="catalog-filter-count">' + option.count + '</small>' +
                '</button>';
        }).join('');
    }

    function syncFilterSelection() {
        filters.querySelectorAll('button[data-category]').forEach(function (button) {
            button.setAttribute('aria-pressed', String((button.dataset.category || '') === state.category));
        });
    }

    function filteredProducts() {
        const query = state.query.trim().toLocaleLowerCase('th');

        return PRODUCTS.filter(function (product) {
            if (state.category && product.category !== state.category) return false;
            if (!query) return true;

            const haystack = [product.name, product.model, product.category]
                .filter(Boolean)
                .join(' ')
                .toLocaleLowerCase('th');

            return haystack.indexOf(query) !== -1;
        });
    }

    function productCard(product, position) {
        const slug = slugFor(product);
        const image = product.img
            ? '<img src="' + escapeHtml(product.img) + '" alt="' + escapeHtml(product.name || product.model) + '" width="450" height="450" loading="lazy" decoding="async"' + (product.fallbackImg ? ' data-fallback-src="' + escapeHtml(product.fallbackImg) + '"' : '') + '>'
            : '';

        return '<a class="p-card" href="product.html?slug=' + encodeURIComponent(slug) + '" data-source="catalog" data-category="' + escapeHtml(product.category || '') + '" data-model="' + escapeHtml(product.model || '') + '" data-product-name="' + escapeHtml(product.name || '') + '" data-position="' + position + '">' +
            '<div class="p-img"><span class="p-emoji" aria-hidden="true">' + escapeHtml(product.emoji || '📦') + '</span>' + image + '</div>' +
            '<div class="p-body">' +
                '<div class="p-cat">' + escapeHtml(product.category || 'LG Subscribe') + '</div>' +
                '<h3 class="p-name">' + escapeHtml(product.name || product.model) + '</h3>' +
                '<div class="p-model">' + escapeHtml(product.model || '') + '</div>' +
                '<div class="p-price"><small>เริ่มต้น</small><span>฿<strong>' + formatPrice(minimumMonthlyPrice(product)) + '</strong></span><small>/เดือน</small></div>' +
                '<span class="p-badge">' + escapeHtml(badgeFor(product)) + '</span>' +
                '<span class="p-cta">ดูแพ็กเกจและราคา</span>' +
            '</div>' +
        '</a>';
    }

    function updateResultsState(matchedProducts, renderedCount) {
        const remaining = Math.max(0, matchedProducts.length - renderedCount);

        resultCount.textContent = 'พบ ' + matchedProducts.length + ' จาก ' + PRODUCTS.length + ' รายการ' +
            (matchedProducts.length ? ' · แสดง ' + renderedCount + ' รายการ' : '');
        emptyState.hidden = matchedProducts.length !== 0;
        grid.hidden = matchedProducts.length === 0;
        loadMoreWrap.hidden = remaining === 0;

        if (remaining > 0) {
            const nextBatch = Math.min(LOAD_MORE_BATCH_SIZE, remaining);
            loadMoreStatus.textContent = 'แสดง ' + renderedCount + ' จาก ' + matchedProducts.length;

        }
    }

    function renderProducts() {
        const matchedProducts = filteredProducts();
        const renderedProducts = matchedProducts.slice(0, state.visibleLimit);

        grid.innerHTML = renderedProducts.map(function (product, index) {
            return productCard(product, index + 1);
        }).join('');

        updateResultsState(matchedProducts, renderedProducts.length);

        return matchedProducts.length;
    }

    function resetVisibleLimit() {
        state.visibleLimit = INITIAL_BATCH_SIZE;
    }

    function appendNextBatch() {
        const matchedProducts = filteredProducts();
        const start = Math.min(state.visibleLimit, matchedProducts.length);
        const end = Math.min(start + LOAD_MORE_BATCH_SIZE, matchedProducts.length);

        if (end <= start) return;

        grid.insertAdjacentHTML('beforeend', matchedProducts.slice(start, end).map(function (product, index) {
            return productCard(product, start + index + 1);
        }).join(''));

        state.visibleLimit = end;
        updateResultsState(matchedProducts, end);
        track('catalog_load_more', {
            result_count: matchedProducts.length,
            visible_count: end
        });

        if (end === matchedProducts.length) {
            const firstNewCard = grid.querySelector('[data-position="' + (start + 1) + '"]');
            if (firstNewCard) firstNewCard.focus({ preventScroll: true });
        }
    }

    function updateClearButton() {
        clearSearch.hidden = !state.query;
    }

    function resetCatalog() {
        state.query = '';
        state.category = '';
        resetVisibleLimit();
        searchInput.value = '';
        updateClearButton();
        syncFilterSelection();
        renderProducts();
        searchInput.focus();
    }

    filters.addEventListener('click', function (event) {
        const button = event.target.closest('button[data-category]');
        if (!button) return;

        state.category = button.dataset.category || '';
        resetVisibleLimit();
        syncFilterSelection();
        const count = renderProducts();
        track('catalog_filter', {
            category: state.category || 'all',
            result_count: count
        });
    });

    searchInput.addEventListener('input', function () {
        state.query = searchInput.value;
        resetVisibleLimit();
        updateClearButton();
        const count = renderProducts();

        window.clearTimeout(searchTrackTimer);
        searchTrackTimer = window.setTimeout(function () {
            if (!state.query.trim()) return;
            track('catalog_search', {
                search_term: state.query.trim().slice(0, 100),
                result_count: count
            });
        }, 350);
    });

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    clearSearch.addEventListener('click', function () {
        state.query = '';
        resetVisibleLimit();
        searchInput.value = '';
        updateClearButton();
        renderProducts();
        searchInput.focus();
    });

    resetButton.addEventListener('click', resetCatalog);
    loadMoreButton.addEventListener('click', appendNextBatch);

    grid.addEventListener('error', function (event) {
        const image = event.target;
        if (!image || image.tagName !== 'IMG') return;

        const fallbackSource = image.dataset.fallbackSrc;
        if (fallbackSource && !image.dataset.fallbackTried) {
            image.dataset.fallbackTried = 'true';
            image.src = fallbackSource;
            return;
        }

        image.hidden = true;
    }, true);

    total.textContent = PRODUCTS.length + ' รายการ';
    renderFilters();
    renderProducts();
}());

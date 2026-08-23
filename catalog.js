(function () {
    'use strict';

    const PRODUCTS = Array.isArray(window.LG_PRODUCTS) ? window.LG_PRODUCTS : [];
    const INITIAL_BATCH_SIZE = 16;
    const LOAD_MORE_BATCH_SIZE = 16;
    const state = { query: '', category: '', budgetMin: 0, budgetMax: 0, savedOnly: false, finderCategories: [], finderService: '', visibleLimit: INITIAL_BATCH_SIZE };

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
    const budgetOptions = document.getElementById('budgetOptions');
    const savedFilter = document.getElementById('catalogSavedFilter');
    const savedCount = document.getElementById('catalogSavedCount');
    const finderGroups = document.getElementById('smartFinderGroups');
    const finderBudgets = document.getElementById('smartFinderBudgets');
    const finderService = document.getElementById('smartFinderService');
    const finderApply = document.getElementById('smartFinderApply');
    const finderReset = document.getElementById('smartFinderReset');
    const finderShare = document.getElementById('smartFinderShare');
    const finderSummary = document.getElementById('smartFinderSummary');
    const FINDER_GROUPS = [
        { key: 'laundry', label: 'ซักผ้า / อบผ้า', categories: ['Wash Tower', 'เครื่องซักผ้า ฝาหน้า', 'เครื่องซักผ้า ฝาบน', 'เครื่องอบผ้า', 'ตู้ถนอมผ้า'] },
        { key: 'fridge', label: 'ตู้เย็น', categories: ['ตู้เย็น Side by Side', 'ตู้เย็น Multi-Door', 'ตู้เย็น 2 ประตู'] },
        { key: 'tv', label: 'ทีวี / มอนิเตอร์', categories: ['โทรทัศน์ OLED', 'โทรทัศน์ QNED', 'โทรทัศน์ NanoCell', 'โทรทัศน์ StanbyME', 'มอนิเตอร์'] },
        { key: 'ac', label: 'เครื่องปรับอากาศ', prefix: 'เครื่องปรับอากาศ' },
        { key: 'air', label: 'อากาศ / ความชื้น', categories: ['เครื่องฟอกอากาศ', 'เครื่องลดความชื้น'] },
        { key: 'clean', label: 'ทำความสะอาด', categories: ['เครื่องดูดฝุ่น', 'เครื่องล้างจาน'] },
        { key: 'water', label: 'เครื่องกรองน้ำ', categories: ['เครื่องกรองน้ำ'] },
        { key: 'audio', label: 'เครื่องเสียง', categories: ['Sound bar', 'Bluetooth Speaker'] },
        { key: 'kitchen', label: 'ครัว', categories: ['ไมโครเวฟ'] }
    ];
    let finderSelection = { group: '', budgetMin: 0, budgetMax: 0, service: '' };
    const FINDER_STORAGE_KEY = 'lg_subscribe_smart_finder_v1';
    const SAVED_STORAGE_KEY = 'lg_subscribe_saved_products_v1';
    let savedSlugs = loadSavedSlugs();
    const compareBar = document.getElementById('catalogCompareBar');
    const compareSummary = document.getElementById('catalogCompareSummary');
    const compareCount = document.getElementById('catalogCompareCount');
    const compareClear = document.getElementById('catalogCompareClear');
    const compareOpen = document.getElementById('catalogCompareOpen');
    const comparePanel = document.getElementById('catalogComparePanel');
    const compareClose = document.getElementById('catalogCompareClose');
    const compareTable = document.getElementById('catalogCompareTable');
    const compareSlugs = [];

    let searchTrackTimer = 0;

    function loadSavedSlugs() {
        try {
            const parsed = JSON.parse(window.localStorage.getItem(SAVED_STORAGE_KEY) || '[]');
            if (!Array.isArray(parsed)) return [];
            return parsed.filter(function (slug) {
                return typeof slug === 'string' && PRODUCTS.some(function (product) { return slugFor(product) === slug; });
            }).slice(0, 50);
        } catch (error) {
            return [];
        }
    }

    function persistSavedSlugs() {
        try {
            window.localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(savedSlugs));
        } catch (error) {
            // Saving is optional; catalog browsing must continue if storage is unavailable.
        }
    }

    function loadFinderSelection() {
        try {
            const parsed = JSON.parse(window.localStorage.getItem(FINDER_STORAGE_KEY) || '{}');
            if (!parsed || typeof parsed !== 'object') return null;
            const group = finderGroupForKey(String(parsed.group || ''));
            if (!group) return null;
            return {
                group: group.key,
                budgetMin: Number(parsed.budgetMin || 0),
                budgetMax: Number(parsed.budgetMax || 0),
                service: ['Visit', 'Self', 'No Service'].indexOf(parsed.service) !== -1 ? parsed.service : ''
            };
        } catch (error) {
            return null;
        }
    }

    function persistFinderSelection() {
        try {
            window.localStorage.setItem(FINDER_STORAGE_KEY, JSON.stringify(finderSelection));
        } catch (error) {
            // Personalization is optional; catalog browsing must continue if storage is unavailable.
        }
    }

    function finderUrl(selection) {
        const url = new URL(window.location.href);
        ['sf_group', 'sf_min', 'sf_max', 'sf_service'].forEach(function (key) { url.searchParams.delete(key); });
        if (selection && selection.group) {
            url.searchParams.set('sf_group', selection.group);
            if (selection.budgetMin) url.searchParams.set('sf_min', String(selection.budgetMin));
            if (selection.budgetMax) url.searchParams.set('sf_max', String(selection.budgetMax));
            if (selection.service) url.searchParams.set('sf_service', selection.service);
        }
        return url;
    }

    function isSaved(product) {
        return savedSlugs.indexOf(slugFor(product)) !== -1;
    }

    function syncSavedControls() {
        if (!savedFilter) return;
        savedCount.textContent = String(savedSlugs.length);
        savedFilter.setAttribute('aria-pressed', String(state.savedOnly));
        savedFilter.disabled = savedSlugs.length === 0 && !state.savedOnly;
        grid.querySelectorAll('button[data-save-slug]').forEach(function (button) {
            const saved = savedSlugs.indexOf(button.dataset.saveSlug || '') !== -1;
            button.setAttribute('aria-pressed', String(saved));
            button.setAttribute('aria-label', saved ? 'นำรุ่นนี้ออกจากรายการที่บันทึก' : 'บันทึกรุ่นนี้ไว้ดูภายหลัง');
            button.textContent = saved ? '♥' : '♡';
        });
    }

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

    function promotionInsight(product) {
        const plans = Array.isArray(product.plans) ? product.plans : [];
        const monthlyPlans = plans.filter(function (plan) {
            return !plan.outright && Number.isFinite(Number(plan.price)) && Number(plan.price) > 0;
        });
        if (!monthlyPlans.length) return null;

        const promoStarts = monthlyPlans.map(function (plan) {
            const promoPrice = Number(plan.effectiveMonthly);
            const normalPrice = Number(plan.postPromoPrice || plan.regular || plan.price);
            return Number.isFinite(promoPrice) && promoPrice > 0 && Number.isFinite(normalPrice) && promoPrice < normalPrice ? promoPrice : 0;
        }).filter(function (price) { return price > 0; });
        const savings = monthlyPlans.map(function (plan) { return Number(plan.totalSaving); })
            .filter(function (saving) { return Number.isFinite(saving) && saving > 0; });

        const promoStart = promoStarts.length ? Math.min.apply(null, promoStarts) : 0;
        const maxSaving = savings.length ? Math.max.apply(null, savings) : 0;
        return promoStart || maxSaving ? { promoStart: promoStart, maxSaving: maxSaving } : null;
    }

    function promotionInsightText(product) {
        const insight = promotionInsight(product);
        if (!insight) return 'ไม่มีโปรพิเศษในข้อมูลแพ็กเกจ';
        const parts = [];
        if (insight.promoStart) parts.push('โปรเริ่ม ฿' + formatPrice(insight.promoStart));
        if (insight.maxSaving) parts.push('ประหยัดสูงสุด ฿' + formatPrice(insight.maxSaving));
        return parts.length ? parts.join(' · ') : 'ดูรายละเอียดโปรโมชั่น';
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

    function finderGroupForKey(key) {
        return FINDER_GROUPS.find(function (group) { return group.key === key; });
    }

    function productMatchesFinderGroup(product, group) {
        if (!group) return true;
        if (group.prefix) return String(product.category || '').indexOf(group.prefix) === 0;
        return Array.isArray(group.categories) && group.categories.indexOf(product.category) !== -1;
    }

    function productHasService(product, serviceType) {
        if (!serviceType) return true;
        return Array.isArray(product.plans) && product.plans.some(function (plan) {
            return String(plan.serviceType || '') === serviceType;
        });
    }

    function renderFinderGroups() {
        if (!finderGroups) return;
        finderGroups.innerHTML = FINDER_GROUPS.map(function (group) {
            const count = PRODUCTS.filter(function (product) { return productMatchesFinderGroup(product, group); }).length;
            const active = finderSelection.group === group.key;
            return '<button type="button" data-finder-group="' + group.key + '" aria-pressed="' + active + '"><strong>' + escapeHtml(group.label) + '</strong><small>' + count + ' รุ่น</small></button>';
        }).join('');
    }

    function finderPreviewCount() {
        const group = finderGroupForKey(finderSelection.group);
        return PRODUCTS.filter(function (product) {
            if (!productMatchesFinderGroup(product, group)) return false;
            const monthly = minimumMonthlyPrice(product);
            if (finderSelection.budgetMin > 0 && monthly <= finderSelection.budgetMin) return false;
            if (finderSelection.budgetMax > 0 && monthly > finderSelection.budgetMax) return false;
            return productHasService(product, finderSelection.service);
        }).length;
    }

    function syncFinderSummary() {
        if (!finderSummary || !finderApply) return;
        const ready = Boolean(finderSelection.group);
        finderApply.disabled = !ready;
        if (finderShare) finderShare.disabled = !ready;
        finderSummary.textContent = ready
            ? 'พบ ' + finderPreviewCount() + ' รุ่นที่ตรงกับตัวเลือกเบื้องต้น'
            : 'เลือกประเภทสินค้าอย่างน้อย 1 กลุ่มเพื่อเริ่มค้นหา';
    }

    function syncFinderInputs() {
        renderFinderGroups();
        if (finderBudgets) finderBudgets.querySelectorAll('button[data-finder-budget-min]').forEach(function (button) {
            const active = Number(button.dataset.finderBudgetMin || 0) === finderSelection.budgetMin && Number(button.dataset.finderBudgetMax || 0) === finderSelection.budgetMax;
            button.setAttribute('aria-pressed', String(active));
        });
        if (finderService) finderService.querySelectorAll('button[data-finder-service]').forEach(function (button) {
            button.setAttribute('aria-pressed', String((button.dataset.finderService || '') === finderSelection.service));
        });
        syncFinderSummary();
    }

    function resetFinderControls() {
        finderSelection = { group: '', budgetMin: 0, budgetMax: 0, service: '' };
        state.finderCategories = [];
        state.finderService = '';
        renderFinderGroups();
        if (finderBudgets) finderBudgets.querySelectorAll('button[data-finder-budget-min]').forEach(function (button) {
            const active = Number(button.dataset.finderBudgetMin || 0) === 0 && Number(button.dataset.finderBudgetMax || 0) === 0;
            button.setAttribute('aria-pressed', String(active));
        });
        if (finderService) finderService.querySelectorAll('button[data-finder-service]').forEach(function (button) {
            button.setAttribute('aria-pressed', String((button.dataset.finderService || '') === ''));
        });
        syncFinderSummary();
    }

    function filteredProducts() {
        const query = state.query.trim().toLocaleLowerCase('th');

        return PRODUCTS.filter(function (product) {
            if (state.savedOnly && !isSaved(product)) return false;
            if (state.category && product.category !== state.category) return false;
            if (state.finderCategories.length && state.finderCategories.indexOf(product.category) === -1) return false;
            if (state.finderService && !productHasService(product, state.finderService)) return false;
            const monthly = minimumMonthlyPrice(product);
            if (state.budgetMin > 0 && monthly <= state.budgetMin) return false;
            if (state.budgetMax > 0 && monthly > state.budgetMax) return false;
            if (!query) return true;

            const haystack = [product.name, product.model, product.category]
                .filter(Boolean)
                .join(' ')
                .toLocaleLowerCase('th');

            return haystack.indexOf(query) !== -1;
        });
    }

    function selectedForCompare(product) {
        return compareSlugs.indexOf(slugFor(product)) !== -1;
    }

    function compareProductBySlug(slug) {
        return PRODUCTS.find(function (product) { return slugFor(product) === slug; });
    }

    function syncCompareControls() {
        if (!compareBar) return;
        compareBar.hidden = compareSlugs.length === 0;
        compareCount.textContent = String(compareSlugs.length);
        compareOpen.disabled = compareSlugs.length < 2;
        compareSummary.textContent = compareSlugs.length < 2
            ? 'เลือกอีก ' + (2 - compareSlugs.length) + ' รุ่นเพื่อเริ่มเปรียบเทียบ'
            : 'พร้อมเทียบ ' + compareSlugs.length + ' รุ่น · เลือกได้สูงสุด 3 รุ่น';
        grid.querySelectorAll('button[data-compare-slug]').forEach(function (button) {
            const selected = compareSlugs.indexOf(button.dataset.compareSlug || '') !== -1;
            button.setAttribute('aria-pressed', String(selected));
            button.textContent = selected ? '✓ เลือกไว้เปรียบเทียบ' : '＋ เปรียบเทียบ';
        });
    }

    function comparePlanSummary(product) {
        const plans = Array.isArray(product.plans) ? product.plans : [];
        const monthly = plans.filter(function (plan) { return Number.isFinite(Number(plan.price)); });
        const terms = Array.from(new Set(monthly.map(function (plan) {
            return Number(plan.totalContractMonths || plan.months || 0);
        }).filter(Boolean))).sort(function (a, b) { return a - b; });
        return terms.length ? terms.map(function (months) { return months + ' เดือน'; }).join(', ') : 'ดูรายละเอียดแพ็กเกจ';
    }

    function renderCompareTable() {
        if (!compareTable) return;
        const selectedProducts = compareSlugs.map(compareProductBySlug).filter(Boolean);
        if (selectedProducts.length < 2) return;
        const rows = [
            ['หมวดสินค้า', function (product) { return product.category || 'LG Subscribe'; }],
            ['รุ่น', function (product) { return product.model || '-'; }],
            ['ราคาเริ่มต้น', function (product) { return '฿' + formatPrice(minimumMonthlyPrice(product)) + '/เดือน'; }],
            ['โปรโมชั่นจากแพ็กเกจ', promotionInsightText],
            ['ระยะสัญญาที่มี', comparePlanSummary],
            ['จุดเด่น', badgeFor]
        ];
        compareTable.innerHTML = '<thead><tr><th scope="col">หัวข้อ</th>' + selectedProducts.map(function (product) {
            return '<th scope="col"><strong>' + escapeHtml(product.name || product.model) + '</strong><small>' + escapeHtml(product.model || '') + '</small></th>';
        }).join('') + '</tr></thead><tbody>' + rows.map(function (row) {
            return '<tr><th scope="row">' + escapeHtml(row[0]) + '</th>' + selectedProducts.map(function (product) {
                return '<td>' + escapeHtml(row[1](product)) + '</td>';
            }).join('') + '</tr>';
        }).join('') + '<tr><th scope="row">ดูแพ็กเกจ</th>' + selectedProducts.map(function (product) {
            return '<td><a href="product.html?slug=' + encodeURIComponent(slugFor(product)) + '">ดูราคาและแพ็กเกจ</a></td>';
        }).join('') + '</tr></tbody>';
    }

    function productCard(product, position) {
        const slug = slugFor(product);
        const image = product.img
            ? '<img src="' + escapeHtml(product.img) + '" alt="' + escapeHtml(product.name || product.model) + '" width="450" height="450" loading="lazy" decoding="async"' + (product.fallbackImg ? ' data-fallback-src="' + escapeHtml(product.fallbackImg) + '"' : '') + '>'
            : '';

        const isCompared = selectedForCompare(product);
        const saved = isSaved(product);
        return '<article class="p-card-wrap">' +
            '<button class="p-save" type="button" data-save-slug="' + escapeHtml(slug) + '" aria-pressed="' + saved + '" aria-label="' + (saved ? 'นำรุ่นนี้ออกจากรายการที่บันทึก' : 'บันทึกรุ่นนี้ไว้ดูภายหลัง') + '">' + (saved ? '♥' : '♡') + '</button>' +
            '<a class="p-card" href="product.html?slug=' + encodeURIComponent(slug) + '" data-source="catalog" data-category="' + escapeHtml(product.category || '') + '" data-model="' + escapeHtml(product.model || '') + '" data-product-name="' + escapeHtml(product.name || '') + '" data-position="' + position + '">' +
                '<div class="p-img"><span class="p-emoji" aria-hidden="true">' + escapeHtml(product.emoji || '📦') + '</span>' + image + '</div>' +
                '<div class="p-body">' +
                    '<div class="p-cat">' + escapeHtml(product.category || 'LG Subscribe') + '</div>' +
                    '<h3 class="p-name">' + escapeHtml(product.name || product.model) + '</h3>' +
                    '<div class="p-model">' + escapeHtml(product.model || '') + '</div>' +
                    '<div class="p-price"><small>เริ่มต้น</small><span>฿<strong>' + formatPrice(minimumMonthlyPrice(product)) + '</strong></span><small>/เดือน</small></div>' +
                    (promotionInsight(product) ? '<div class="p-promo-insight">' + escapeHtml(promotionInsightText(product)) + '</div>' : '') +
                    '<span class="p-badge">' + escapeHtml(badgeFor(product)) + '</span>' +
                    '<span class="p-cta">ดูแพ็กเกจและราคา</span>' +
                '</div>' +
            '</a>' +
            '<button class="p-compare" type="button" data-compare-slug="' + escapeHtml(slug) + '" aria-pressed="' + isCompared + '">' + (isCompared ? '✓ เลือกไว้เปรียบเทียบ' : '＋ เปรียบเทียบ') + '</button>' +
        '</article>';
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
        syncCompareControls();
        syncSavedControls();

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
        syncCompareControls();
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
        state.budgetMin = 0;
        state.budgetMax = 0;
        state.savedOnly = false;
        state.finderCategories = [];
        state.finderService = '';
        resetFinderControls();
        if (savedFilter) savedFilter.setAttribute('aria-pressed', 'false');
        if (budgetOptions) budgetOptions.querySelectorAll('button[data-budget-min]').forEach(function (button) {
            button.setAttribute('aria-pressed', String(Number(button.dataset.budgetMin || 0) === 0 && Number(button.dataset.budgetMax || 0) === 0));
        });
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

    if (savedFilter) savedFilter.addEventListener('click', function () {
        state.savedOnly = !state.savedOnly;
        resetVisibleLimit();
        const count = renderProducts();
        track('catalog_saved_filter', { active: state.savedOnly, saved_count: savedSlugs.length, result_count: count });
    });

    if (budgetOptions) budgetOptions.addEventListener('click', function (event) {
        const button = event.target.closest('button[data-budget-min]');
        if (!button) return;
        state.budgetMin = Number(button.dataset.budgetMin || 0);
        state.budgetMax = Number(button.dataset.budgetMax || 0);
        budgetOptions.querySelectorAll('button[data-budget-min]').forEach(function (item) {
            item.setAttribute('aria-pressed', String(item === button));
        });
        resetVisibleLimit();
        const count = renderProducts();
        track('catalog_budget_filter', {
            min_monthly_exclusive: state.budgetMin || 0,
            max_monthly_inclusive: state.budgetMax || 'unbounded',
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

    grid.addEventListener('click', function (event) {
        const saveButton = event.target.closest('button[data-save-slug]');
        if (saveButton) {
            const savedSlug = saveButton.dataset.saveSlug || '';
            const savedIndex = savedSlugs.indexOf(savedSlug);
            if (savedIndex === -1) savedSlugs.push(savedSlug);
            else savedSlugs.splice(savedIndex, 1);
            persistSavedSlugs();
            if (state.savedOnly && savedIndex !== -1) renderProducts();
            else syncSavedControls();
            track('catalog_save_toggle', { product_slug: savedSlug, saved: savedIndex === -1, saved_count: savedSlugs.length });
            return;
        }

        const button = event.target.closest('button[data-compare-slug]');
        if (!button) return;
        const slug = button.dataset.compareSlug || '';
        const existingIndex = compareSlugs.indexOf(slug);
        if (existingIndex !== -1) {
            compareSlugs.splice(existingIndex, 1);
        } else if (compareSlugs.length < 3) {
            compareSlugs.push(slug);
        } else {
            compareSummary.textContent = 'เลือกเปรียบเทียบได้สูงสุด 3 รุ่น';
            return;
        }
        syncCompareControls();
        track('catalog_compare_select', { product_slug: slug, selected_count: compareSlugs.length });
    });

    if (compareClear) compareClear.addEventListener('click', function () {
        compareSlugs.length = 0;
        if (comparePanel) comparePanel.hidden = true;
        syncCompareControls();
    });

    if (compareOpen) compareOpen.addEventListener('click', function () {
        if (compareSlugs.length < 2) return;
        renderCompareTable();
        comparePanel.hidden = false;
        comparePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        track('catalog_compare_view', { product_count: compareSlugs.length, product_slugs: compareSlugs.join(',') });
    });

    if (compareClose) compareClose.addEventListener('click', function () {
        comparePanel.hidden = true;
        compareOpen.focus();
    });

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

    if (finderGroups) finderGroups.addEventListener('click', function (event) {
        const button = event.target.closest('button[data-finder-group]');
        if (!button) return;
        finderSelection.group = button.dataset.finderGroup || '';
        persistFinderSelection();
        renderFinderGroups();
        syncFinderSummary();
    });

    if (finderBudgets) finderBudgets.addEventListener('click', function (event) {
        const button = event.target.closest('button[data-finder-budget-min]');
        if (!button) return;
        finderSelection.budgetMin = Number(button.dataset.finderBudgetMin || 0);
        finderSelection.budgetMax = Number(button.dataset.finderBudgetMax || 0);
        persistFinderSelection();
        finderBudgets.querySelectorAll('button[data-finder-budget-min]').forEach(function (item) {
            item.setAttribute('aria-pressed', String(item === button));
        });
        syncFinderSummary();
    });

    if (finderService) finderService.addEventListener('click', function (event) {
        const button = event.target.closest('button[data-finder-service]');
        if (!button) return;
        finderSelection.service = button.dataset.finderService || '';
        persistFinderSelection();
        finderService.querySelectorAll('button[data-finder-service]').forEach(function (item) {
            item.setAttribute('aria-pressed', String(item === button));
        });
        syncFinderSummary();
    });

    if (finderApply) finderApply.addEventListener('click', function () {
        const group = finderGroupForKey(finderSelection.group);
        if (!group) return;
        state.query = '';
        state.category = '';
        state.savedOnly = false;
        state.finderCategories = Array.from(new Set(PRODUCTS.filter(function (product) {
            return productMatchesFinderGroup(product, group);
        }).map(function (product) { return product.category; })));
        state.finderService = finderSelection.service;
        state.budgetMin = finderSelection.budgetMin;
        state.budgetMax = finderSelection.budgetMax;
        searchInput.value = '';
        updateClearButton();
        syncFilterSelection();
        if (savedFilter) savedFilter.setAttribute('aria-pressed', 'false');
        resetVisibleLimit();
        const count = renderProducts();
        persistFinderSelection();
        window.history.replaceState(null, '', finderUrl(finderSelection).toString());
        document.getElementById('catalogResultsTitle').scrollIntoView({ behavior: 'smooth', block: 'start' });
        track('smart_finder_apply', {
            finder_group: finderSelection.group,
            budget_min_exclusive: finderSelection.budgetMin || 0,
            budget_max_inclusive: finderSelection.budgetMax || 'unbounded',
            service_type: finderSelection.service || 'any',
            result_count: count
        });
    });

    if (finderShare) finderShare.addEventListener('click', function () {
        if (!finderSelection.group) return;
        const url = finderUrl(finderSelection).toString();
        function copied() {
            finderSummary.textContent = 'คัดลอกลิงก์ตัวเลือกแล้ว สามารถส่งให้คนอื่นเปิดผลแบบเดียวกันได้';
            track('smart_finder_share', { finder_group: finderSelection.group, service_type: finderSelection.service || 'any' });
        }
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            navigator.clipboard.writeText(url).then(copied).catch(function () {
                const textarea = document.createElement('textarea');
                textarea.value = url;
                textarea.setAttribute('readonly', '');
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                try { document.execCommand('copy'); copied(); } catch (error) { finderSummary.textContent = 'ไม่สามารถคัดลอกอัตโนมัติได้ กรุณาคัดลอกจากแถบที่อยู่'; }
                textarea.remove();
            });
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = url;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            try { document.execCommand('copy'); copied(); } catch (error) { finderSummary.textContent = 'ไม่สามารถคัดลอกอัตโนมัติได้ กรุณาคัดลอกจากแถบที่อยู่'; }
            textarea.remove();
        }
    });

    if (finderReset) finderReset.addEventListener('click', function () {
        resetFinderControls();
        try { window.localStorage.removeItem(FINDER_STORAGE_KEY); } catch (error) {}
        window.history.replaceState(null, '', finderUrl(null).toString());
        state.budgetMin = 0;
        state.budgetMax = 0;
        resetVisibleLimit();
        renderProducts();
        track('smart_finder_reset', {});
    });

    const finderParams = new URLSearchParams(window.location.search);
    const finderGroupParam = finderParams.get('sf_group') || '';
    const finderGroup = finderGroupForKey(finderGroupParam);
    const savedFinderSelection = loadFinderSelection();
    const finderFromUrl = Boolean(finderGroup);
    if (finderFromUrl) {
        finderSelection = {
            group: finderGroup.key,
            budgetMin: Number(finderParams.get('sf_min') || 0),
            budgetMax: Number(finderParams.get('sf_max') || 0),
            service: ['Visit', 'Self', 'No Service'].indexOf(finderParams.get('sf_service')) !== -1 ? finderParams.get('sf_service') : ''
        };
    } else if (savedFinderSelection) {
        finderSelection = savedFinderSelection;
    }
    syncFinderInputs();

    const initialQuery = new URLSearchParams(window.location.search).get('q');
    if (initialQuery) {
        state.query = initialQuery.slice(0, 100);
        searchInput.value = state.query;
        updateClearButton();
    }
    if (finderFromUrl) {
        state.finderCategories = Array.from(new Set(PRODUCTS.filter(function (product) {
            return productMatchesFinderGroup(product, finderGroup);
        }).map(function (product) { return product.category; })));
        state.finderService = finderSelection.service;
        state.budgetMin = finderSelection.budgetMin;
        state.budgetMax = finderSelection.budgetMax;
    }
    total.textContent = PRODUCTS.length + ' รายการ';
    renderFilters();
    renderProducts();
    if (finderFromUrl) track('smart_finder_restore', { finder_group: finderSelection.group, result_count: filteredProducts().length });
}());

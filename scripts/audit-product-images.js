/* Phase 4 image inventory generator. No network access or Product data mutation. */
'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'image-inventory-phase4.json');
const INVENTORY_DATE = '2026-08-19';

const PILOT = {
  'wd110mn': {
    sourceUrl: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/water-purifier/2024/wd110mn-abgplmt/gallery/01-basic/wp-mx-wd110mn-calmingbeige-basic-large.jpg',
    sourceBytes: 4288,
    sourceSha256: '6c532be5123e7d5f37df24eb253aa0d99e75a1f98e3d78fe21b9c9e96800bac0',
  },
  'a9t-ultra': {
    sourceUrl: 'https://www.lg.com/content/dam/channel/wcms/th/images/vacuum-cleaner/a9t-ultra_dcbpeth_eath_th_c/Basic-450.jpg',
    sourceBytes: 8524,
    sourceSha256: 'd0be068e8ba192d77d76788baa46955a18c5bbf48f8ab7b19f108dc5ae400488',
  },
  'a9t-core': {
    sourceUrl: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/vacuum-cleaner/2025/a9t-core-dcgpeth/gallery/02_A9T-CORE_TH_Front_450.jpg',
    sourceBytes: 8679,
    sourceSha256: '9def01358824a5199f5104e757b421863ac0642963eb98c42d4451880ef72697',
  },
  'gc-l257kqkw': {
    sourceUrl: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/refrigerator/2024/gc-l257kqkw-aepplmt/gallery/GC-L257KQKW_Front_450.jpg',
    sourceBytes: 9464,
    sourceSha256: '4d12452c7e904272e8ce7d16939978a669ce2f378a032aa453488aef617b9a5e',
  },
  'gc-b257sqyl': {
    sourceUrl: 'https://www.lg.com/content/dam/channel/wcms/th/images/refrigerator/2023/gc-b257sqyl/GC-B257SQYL-450.jpg',
    sourceBytes: 7436,
    sourceSha256: '8e2ad783506c431c6ca5f3386be56c0e20fd76111916c3c14b2f5af6b3c0afd6',
  },
  'wt2520nheg': {
    sourceUrl: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/washing-machine/2026/wt2520nheg-abgpeth/gallery/wt2520nheg-450-0604.jpg',
    sourceBytes: 13741,
    sourceSha256: 'cc8029dab100ee209a12041ec2b84c8577a625697f5534c060f6f4295b440036',
  },
  'fv1413s4m': {
    sourceUrl: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/washing-machine/2024/fv1413s4m-ambpeth/gallery/FV1413S4M-01-450.jpg',
    sourceBytes: 15784,
    sourceSha256: '97e41a9732bed5e0b41c287f8dcb73d8af50b761eb1cabffc75c5deffdd80c3b',
  },
  'oled48c6psa': {
    sourceUrl: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/48-c6/update/OLED48C6PSA-450-01.jpg',
    sourceBytes: 38757,
    sourceSha256: '9a173c035adb5478f67f830f8775af03939807f64734bfabecb7191cb7294b71',
  },
};

/* Exact-path matching is not enough when the filename names a different variant. */
const MANUAL_UNCERTAIN = new Set([
  'a9t-lite',
  'gc-l257sfzw',
  'as25gcby0',
  'as65gdby0',
  'as10gdby0',
  '100mrgb96bs',
]);

function loadData() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'products.js'), 'utf8'), context);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'product-galleries.js'), 'utf8'), context);
  return {
    products: context.window.LG_PRODUCTS || [],
    galleries: context.window.LG_PRODUCT_GALLERIES || {},
  };
}

function normalize(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function sourceType(value) {
  if (!value) return 'missing';
  return /^https?:\/\//i.test(value) ? 'remote' : 'local';
}

function domain(value) {
  if (!value) return null;
  if (sourceType(value) === 'local') return 'local';
  try { return new URL(value).hostname; }
  catch (_) { return 'invalid'; }
}

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function sourcePrimary(product) {
  return PILOT[product.id] ? PILOT[product.id].sourceUrl : product.img || null;
}

function galleryUrls(product, galleries) {
  const source = Array.isArray(product.gallery) && product.gallery.length
    ? product.gallery
    : galleries[product.id];
  if (!Array.isArray(source)) return [];
  return source.map(entry => typeof entry === 'string' ? entry : entry && entry.src).filter(Boolean);
}

function buildInventory() {
  const { products, galleries } = loadData();
  const sourceUsage = new Map();

  products.forEach(product => {
    const source = sourcePrimary(product);
    if (!source) return;
    if (!sourceUsage.has(source)) sourceUsage.set(source, []);
    sourceUsage.get(source).push(product.id);
  });

  const records = products.map(product => {
    const pilot = PILOT[product.id] || null;
    const originalPrimary = sourcePrimary(product);
    const gallery = galleryUrls(product, galleries);
    const exactModelToken = originalPrimary
      ? normalize(decodeURIComponent(originalPrimary)).includes(normalize(product.model))
      : false;
    const uniqueSource = originalPrimary ? (sourceUsage.get(originalPrimary) || []).length === 1 : false;

    let group;
    let verification;
    if (pilot && sourceType(product.img) === 'local') {
      group = 'A';
      verification = 'verified pilot: exact URL model mapping + HTTP download + visual review';
    } else if (!originalPrimary || product.fallbackImg) {
      group = 'D';
      verification = product.fallbackImg ? 'explicit fallback configured' : 'missing primary image';
    } else if (
      domain(originalPrimary) === 'www.lg.com' &&
      exactModelToken &&
      uniqueSource &&
      !MANUAL_UNCERTAIN.has(product.id)
    ) {
      group = 'B';
      verification = 'remote LG URL contains exact model token and is unique to this product';
    } else {
      group = 'C';
      verification = MANUAL_UNCERTAIN.has(product.id)
        ? 'path/filename contains conflicting or variant model evidence'
        : 'shared, series-level, combo, or non-exact model URL';
    }

    let optimization = null;
    if (pilot) {
      const localFile = path.join(ROOT, product.img);
      optimization = {
        originalUrl: pilot.sourceUrl,
        originalBytes: pilot.sourceBytes,
        originalSha256: pilot.sourceSha256,
        localPath: product.img,
        localBytes: fs.statSync(localFile).size,
        localSha256: sha256(localFile),
        dimensions: '450x450',
        format: 'webp',
        quality: 85,
      };
    }

    return {
      slug: product.id,
      model: product.model,
      productName: product.name,
      primaryImage: product.img || null,
      originalPrimaryImage: originalPrimary,
      primarySourceType: sourceType(product.img),
      primarySourceDomain: domain(product.img),
      galleryUrls: gallery,
      galleryDomains: Array.from(new Set(gallery.map(domain))),
      fallbackStatus: product.fallbackImg
        ? { type: 'explicit', url: product.fallbackImg, domain: domain(product.fallbackImg) }
        : { type: product.img ? 'runtime-ui' : 'missing-primary-runtime-ui', url: null, domain: null },
      group,
      verification,
      optimization,
    };
  });

  const groups = records.reduce((result, item) => {
    result[item.group] += 1;
    return result;
  }, { A: 0, B: 0, C: 0, D: 0 });
  const gallery = records.flatMap(item => item.galleryUrls);
  const pilotRecords = records.filter(item => item.optimization);
  const originalBytes = pilotRecords.reduce((sum, item) => sum + item.optimization.originalBytes, 0);
  const localBytes = pilotRecords.reduce((sum, item) => sum + item.optimization.localBytes, 0);

  return {
    inventoryDate: INVENTORY_DATE,
    criteria: {
      A: 'Local primary image verified by exact source URL mapping, successful download, hashes, and visual review.',
      B: 'Remote www.lg.com primary with exact model token and a URL unique to one product.',
      C: 'Remote mapping is shared, series-level, combo, non-exact, or contains conflicting variant evidence.',
      D: 'Primary image missing or an explicit fallback is configured. No migration in Phase 4.',
    },
    summary: {
      products: records.length,
      primary: {
        local: records.filter(item => item.primarySourceType === 'local').length,
        remote: records.filter(item => item.primarySourceType === 'remote').length,
        missing: records.filter(item => item.primarySourceType === 'missing').length,
      },
      gallery: {
        references: gallery.length,
        local: gallery.filter(item => sourceType(item) === 'local').length,
        remote: gallery.filter(item => sourceType(item) === 'remote').length,
      },
      explicitFallbacks: records.filter(item => item.fallbackStatus.type === 'explicit').length,
      groups,
      pilot: {
        products: pilotRecords.length,
        originalBytes,
        localBytes,
        savedBytes: originalBytes - localBytes,
        reductionPercent: Number(((1 - localBytes / originalBytes) * 100).toFixed(1)),
      },
    },
    products: records,
  };
}

fs.writeFileSync(OUTPUT, JSON.stringify(buildInventory(), null, 2) + '\n', 'utf8');
console.log('Wrote ' + path.relative(ROOT, OUTPUT));

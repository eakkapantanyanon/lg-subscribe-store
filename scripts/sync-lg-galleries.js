/* Build product-galleries.js from official LG Thailand product pages only. */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'products.js'), 'utf8'), context);
const products = context.window.LG_PRODUCTS || [];
const previousContext = { window: {} };
try {
  const committed = execFileSync('git', ['show', 'HEAD:product-galleries.js'], { cwd: ROOT, encoding: 'utf8' });
  vm.runInNewContext(committed, previousContext);
} catch (error) {
  try { vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'product-galleries.js'), 'utf8'), previousContext); }
  catch (ignored) { /* first generation */ }
}
const previousGalleries = previousContext.window.LG_PRODUCT_GALLERIES || {};
const DIRECT_PAGES = {
  'gc-x257cmhw': 'https://www.lg.com/th/refrigerators/side-by-side-refrigerator/gc-x257cmhw/'
};
const EXTERNAL_FALLBACKS = {
  'zt4q18': 'https://arttato.github.io/LG-Subscribe/img/products/zt4q18gpla1-ewghath.jpg',
  'zt4q24': 'https://arttato.github.io/LG-Subscribe/img/products/zt4q24gpla1-ewghath.jpg',
  'zt4q36': 'https://arttato.github.io/LG-Subscribe/img/products/zt4q36gnla1-ewghath.jpg',
  'zt4q48': 'https://arttato.github.io/LG-Subscribe/img/products/zt4q48gmla1-ewghath.jpg',
  'zt1q12': 'https://arttato.github.io/LG-Subscribe/img/products/zt1q12gula1-ewghath.jpg',
  'zt1q18': 'https://arttato.github.io/LG-Subscribe/img/products/zt1q18gtla1-ewghath.jpg',
  'zt1q24': 'https://arttato.github.io/LG-Subscribe/img/products/zt1q24gtla1-ewghath.jpg',
  'ztrq36': 'https://arttato.github.io/LG-Subscribe/img/products/ztrq36gyla1-ewghath.jpg',
  'ztrq48': 'https://arttato.github.io/LG-Subscribe/img/products/ztrq48gyla1-ewghath.jpg',
  '34u650a': 'https://arttato.github.io/LG-Subscribe/img/products/34u650a-b-atm.jpg'
};

async function getText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch(url, { signal: controller.signal, headers: { 'user-agent': 'Mozilla/5.0 FLEXI-SUB gallery sync' } });
    if (!response.ok) throw new Error(response.status + ' ' + url);
    return await response.text();
  } finally { clearTimeout(timer); }
}

function productKeys(product) {
  const model = String(product.model || '').split(/[+/,]/)[0].trim().toLowerCase();
  const words = model.split(/[^a-z0-9]+/).filter(Boolean);
  return Array.from(new Set([product.id, model, model.replace(/[^a-z0-9]/g, '-'), words[words.length - 1]]
    .map(x => String(x || '').toLowerCase()).filter(x => x.length >= 4)));
}

function choosePage(product, urls) {
  const keys = productKeys(product);
  const matches = urls.filter(url => keys.some(key => url.toLowerCase().includes('/' + key + '/') || url.toLowerCase().includes('/' + key + '-')));
  return matches.filter(url => !/\/support\//.test(url)).sort((a, b) => a.length - b.length)[0] || null;
}

function normalizeImage(raw) {
  let url = raw.replace(/\\u002F/gi, '/').replace(/\\\//g, '/').replace(/&amp;/g, '&');
  if (url.startsWith('/')) url = 'https://www.lg.com' + url;
  if (!url.startsWith('https://www.lg.com/content/dam/')) return null;
  return url;
}

function galleryImages(html, product) {
  const clean = html.replace(/\\u002F/gi, '/').replace(/\\\//g, '/');
  const regex = /(?:https:\/\/www\.lg\.com)?\/content\/dam\/[^"'<>\s]+?(?:\.jpg|\.jpeg|\.png)(?:\/jcr%3Acontent\/renditions\/[^"'<>\s]+?\.jpeg)?(?:\?[^"'<>\s]*)?/gi;
  const seen = new Set();
  const gallery = [];
  const productAssets = [];
  const keys = productKeys(product).map(x => x.replace(/-/g, '')).filter(x => x.length >= 5);
  for (const match of clean.matchAll(regex)) {
    const url = normalizeImage(match[0]);
    if (!url) continue;
    const key = url.split('?')[0];
    if (seen.has(key)) continue;
    seen.add(key);
    const compact = url.toLowerCase().replace(/-/g, '');
    if (/\/gallery(?:-new)?\//i.test(url)) gallery.push(url);
    else if (keys.some(k => compact.includes(k)) && !/feature|banner|logo|icon|review|award/i.test(url)) productAssets.push(url);
  }
  const score = url => {
    const s = url.toLowerCase();
    if (/basic|front/.test(s)) return 0;
    if (/left|angle|side|right/.test(s)) return 1;
    if (/rear|back|open|inside/.test(s)) return 2;
    return 3;
  };
  const images = gallery.length >= 2 ? gallery : gallery.concat(productAssets);
  return Array.from(new Set(images)).sort((a, b) => score(a) - score(b)).slice(0, 4);
}

async function main() {
  const sitemap = await getText('https://www.lg.com/th/sitemap.xml');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(/&amp;/g, '&'));
  const result = {};
  let cursor = 0;

  async function worker() {
    while (cursor < products.length) {
      const product = products[cursor++];
      if (Array.isArray(product.gallery) && product.gallery.length > 1) {
        result[product.id] = product.gallery.map(x => typeof x === 'string' ? x : x.src).filter(Boolean).slice(0, 4);
        continue;
      }
      const page = choosePage(product, urls) || DIRECT_PAGES[product.id] || null;
      let images = [];
      if (page) {
        try { images = galleryImages(await getText(page), product); }
        catch (error) { process.stderr.write('WARN ' + product.model + ': ' + error.message + '\n'); }
      }
      if (images.length < 2 && product.img && product.img.startsWith('https://www.lg.com/')) images.unshift(product.img);
      if ((previousGalleries[product.id] || []).length > images.length) images = previousGalleries[product.id].slice(0, 4);
      if (!images.length && EXTERNAL_FALLBACKS[product.id]) images.push(EXTERNAL_FALLBACKS[product.id]);
      result[product.id] = Array.from(new Set(images)).slice(0, 4);
      process.stdout.write(product.model + ': ' + result[product.id].length + ' images' + (page ? ' · ' + page : ' (page not found)') + '\n');
    }
  }

  await Promise.all(Array.from({ length: 6 }, worker));
  const ordered = {};
  products.forEach(p => { ordered[p.id] = result[p.id] || []; });
  const output = '/* Generated from official LG Thailand product pages. */\nwindow.LG_PRODUCT_GALLERIES = ' + JSON.stringify(ordered, null, 2) + ';\n';
  fs.writeFileSync(path.join(ROOT, 'product-galleries.js'), output);
  const counts = Object.values(ordered).map(x => x.length);
  console.log(JSON.stringify({ products: counts.length, multiImage: counts.filter(n => n >= 2).length, fourImage: counts.filter(n => n === 4).length, empty: counts.filter(n => n === 0).length }));
}

main().catch(error => { console.error(error); process.exit(1); });

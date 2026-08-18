/* reinline.js — แทนที่ block window.LG_PRODUCTS = [...]; ใน HTML ด้วยข้อมูลจาก products.js */
const fs = require('fs');

const src = fs.readFileSync('products.js', 'utf8');
const arrStart = src.indexOf('window.LG_PRODUCTS = [');
const arrEnd = src.lastIndexOf('];');
const arrText = src.slice(arrStart + 'window.LG_PRODUCTS ='.length, arrEnd + 1); // "[ ... ]"

function reinline(file) {
  let html = fs.readFileSync(file, 'utf8');
  const i = html.indexOf('window.LG_PRODUCTS =');
  if (i < 0) { console.log('marker not found in', file); return; }
  const open = html.indexOf('[', i + 'window.LG_PRODUCTS ='.length);
  if (open < 0) { console.log('array open not found in', file); return; }
  let depth = 0, j = open;
  for (let k = open; k < html.length; k++) {
    if (html[k] === '[') depth++;
    else if (html[k] === ']') { depth--; if (depth === 0) { j = k + 1; break; } }
  }
  const before = html.slice(0, i + 'window.LG_PRODUCTS ='.length);
  const after = html.slice(j);
  html = before + ' ' + arrText + after;
  fs.writeFileSync(file, html);
  console.log('reinlined', file);
}

reinline('subscribe-store.html');
reinline('promotions.html');

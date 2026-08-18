/* =====================================================================
   migrate-plans.js — แปลงข้อมูลแผนใน products.js ให้เป็นโครงสร้างใหม่
   (billSchedule/advancePayment/outright/totalSaving) โดยใช้ normalizePlan
   จาก calculator-core.js — อ่านจาก label/months/price/promo เดิม
   วิธีใช้: node migrate-plans.js   (แล้วรัน node reinline.js ต่อ)
   ===================================================================== */
const fs = require('fs');
const LGCalc = require('./calculator-core.js');

const src = fs.readFileSync('products.js', 'utf8');
const marker = 'window.LG_PRODUCTS =';
const start = src.indexOf(marker);
if (start < 0) { console.error('marker not found'); process.exit(1); }
const arrOpen = src.indexOf('[', start + marker.length);
if (arrOpen < 0) { console.error('array open not found'); process.exit(1); }
const end = src.lastIndexOf('];');
if (end < 0 || end < arrOpen) { console.error('array end not found'); process.exit(1); }

const header = src.slice(0, start + marker.length) + ' '; // คอมเมนต์หัวไฟล์ + window.LG_PRODUCTS = (เว้น 1 ช่อง)
const data = eval('[' + src.slice(arrOpen + 1, end) + ']');

const fmtNum = n => String(n);

function quote(s) { return "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"; }
function rangeOf(seg) { return quote(seg.range) + ', price: ' + fmtNum(seg.price) + (seg.note ? ', note: ' + quote(seg.note) : ''); }

function planToSource(pl) {
  const n = LGCalc.normalizePlan(pl);
  const lines = [];
  lines.push('        {');
  lines.push('          term: ' + quote(n.term) + ',');
  lines.push('          serviceType: ' + quote(n.serviceType) + ',');
  lines.push('          serviceCycle: ' + quote(n.serviceCycle) + ',');
  lines.push('          regular: ' + fmtNum(n.regular) + ', effectiveMonthly: ' + fmtNum(n.effectiveMonthly) + ',');
  lines.push('          promoMonths: ' + fmtNum(n.promoMonths) + ', postPromoPrice: ' + fmtNum(n.postPromoPrice) + ',');
  lines.push('          advancePayment: ' + fmtNum(n.advancePayment) + ', outright: ' + (n.outright ? 'true' : 'false') + ',');
  if (n.billSchedule) {
    lines.push('          billSchedule: [');
    n.billSchedule.forEach((sg, i) => {
      lines.push('            { range: ' + rangeOf(sg) + ' }' + (i < n.billSchedule.length - 1 ? ',' : ''));
    });
    lines.push('          ],');
  } else {
    lines.push('          billSchedule: null,');
  }
  lines.push('          totalContractMonths: ' + fmtNum(n.totalContractMonths) + ', totalSaving: ' + fmtNum(n.totalSaving) + ',');
  lines.push('          label: ' + quote(n.label) + ', months: ' + fmtNum(n.months) + ', price: ' + fmtNum(n.price) + ',');
  lines.push('          promo: ' + quote(n.promo));
  lines.push('        }');
  return lines.join('\n');
}

const out = [];
out.push(header + '[');   // header ลงท้ายด้วย 'window.LG_PRODUCTS = ' อยู่แล้ว
data.forEach((p, pi) => {
  out.push('  {');
  out.push('    id: ' + quote(p.id) + ',');
  if (p.img !== undefined) out.push('    img: ' + quote(p.img) + ',');
  out.push('    model: ' + quote(p.model) + ',');
  out.push('    name: ' + quote(p.name) + ',');
  out.push('    category: ' + quote(p.category) + ',');
  out.push('    emoji: ' + quote(p.emoji) + ',');
  out.push('    plans: [');
  p.plans.forEach((pl, i) => {
    out.push(planToSource(pl) + (i < p.plans.length - 1 ? ',' : ''));
  });
  out.push('    ]');
  out.push('  }' + (pi < data.length - 1 ? ',' : ''));
});
out.push('];');
out.push('');

fs.writeFileSync('products.js', out.join('\n'));
console.log('migrated', data.length, 'products /', data.reduce((s, p) => s + p.plans.length, 0), 'plans → products.js');

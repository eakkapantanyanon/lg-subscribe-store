// @ts-nocheck
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'products.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'service-cycles.js'), 'utf8'), context);

const products = context.window.LG_PRODUCTS || [];
const select = require(path.join(ROOT, 'product-select.js'));
const verifiedDetailModels = products
  .filter(product => ['Visit', 'Self'].some(type => {
    const info = select.careInfo(product, type);
    return info && /^Care Service/.test(info.source || '');
  }))
  .map(product => product.model);

const rows = [];
const summary = {
  products: products.length,
  productsWithCarePlans: 0,
  productsWithVerifiedCycle: 0,
  carePlanCount: 0,
  carePlansWithVerifiedCycle: 0,
  unresolvedCarePlans: [],
  productsWithVerifiedDetail: verifiedDetailModels.length,
  verifiedDetailModels,
  byCategory: {}
};

for (const product of products) {
  const carePlans = (product.plans || []).filter(p => p.serviceType === 'Visit' || p.serviceType === 'Self');
  if (!carePlans.length) continue;
  summary.productsWithCarePlans++;
  summary.carePlanCount += carePlans.length;
  summary.carePlansWithVerifiedCycle += carePlans.filter(p => p.serviceSource && p.serviceCycle && p.serviceCycle !== 'ไม่มีบริการ').length;
  carePlans.forEach(plan => {
    if (!(plan.serviceSource && plan.serviceCycle && plan.serviceCycle !== 'ไม่มีบริการ')) {
      summary.unresolvedCarePlans.push({
        model: product.model,
        serviceType: plan.serviceType,
        termMonths: Number(plan.totalContractMonths || plan.months || 0),
        price: Number(plan.price || 0),
        outright: !!plan.outright,
        currentCycle: plan.serviceCycle || ''
      });
    }
  });
  const verified = carePlans.some(p => p.serviceSource && p.serviceCycle && p.serviceCycle !== 'ไม่มีบริการ');
  if (verified) summary.productsWithVerifiedCycle++;
  const category = product.category || 'ไม่ระบุ';
  summary.byCategory[category] ||= { products: 0, cycleVerified: 0, detailVerified: 0 };
  summary.byCategory[category].products++;
  if (verified) summary.byCategory[category].cycleVerified++;
  if (verifiedDetailModels.includes(product.model)) summary.byCategory[category].detailVerified++;

  rows.push({
    model: product.model,
    category,
    cycleVerified: verified,
    cycles: [...new Set(carePlans.filter(p => p.serviceCycle && p.serviceCycle !== 'ไม่มีบริการ').map(p => p.serviceCycle))],
    sources: [...new Set(carePlans.filter(p => p.serviceSource).map(p => p.serviceSource))],
    detailStatus: verifiedDetailModels.includes(product.model) ? 'VERIFIED_MODEL_SPECIFIC' : 'DETAIL_PENDING'
  });
}

const report = {
  generatedAt: 'generated-by: node scripts/audit-care-service.js',
  policy: 'Service cycle may come from verified Price List. Detailed tasks/parts require a separate confirmed Care Service source; do not infer across models/categories.',
  summary,
  rows
};
fs.writeFileSync(path.join(ROOT, 'docs', 'audits', 'care-service-coverage.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(summary, null, 2));

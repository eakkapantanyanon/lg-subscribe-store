# Sales Conversion Audit — 2026-08-23

Scope: Home → Catalog/Smart Finder → Compare/Save → PDP → package selection → Cart → LINE handoff.

## Findings
- Discovery/navigation is already aligned to `products.html`; no duplicate Home-only product route remains in the primary sales flow.
- PDP/cart calculations are covered by existing regression tests and should not be rewritten.
- Main trust risk found: Cart copy said “ฝ่ายขาย LG โดยตรง ไม่ผ่านตัวแทน” while the storefront is branded “LG Subscribe By E-Promoter”. This could create unnecessary ambiguity about who operates the storefront.
- LINE handoff already includes customer name, phone, customer type, product/model, selected plan, price/promo, contract, gift, combo discount, first payment and contract total. The missing piece was clear provenance and a request for final verification.
- Monthly campaign data was spread between page copy and hard-coded audit dates, making month rollover more error-prone.
- Product image coverage had 10 missing primary images before this pass.

## Changes from this audit
- Trust copy now states that E-Promoter helps select/prepare the order and LG staff confirms final eligibility, price and application steps.
- LINE handoff identifies the list as coming from LG Subscribe By E-Promoter and explicitly asks staff to verify current eligibility/promotion/application steps.
- Added `campaign-config.json` plus `docs/monthly-campaign-workflow.md`; campaign audit now validates the page against the manifest and warns on expiry.
- Recovered exact-model primary image for `34U650A-B` from LG UK. Nine commercial AC exact-SKU images remain intentionally unresolved rather than substituting nearby models.

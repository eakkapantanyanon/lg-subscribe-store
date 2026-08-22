/* =====================================================================
   แคตตาล็อกสินค้า LG Subscribe — ตรวจทานเทียบ PDF ครบถ้วน (ส.ค. 2569)
   - Price list_Aug_V3.pdf (ราคาเต็ม: Visit/Self บิลแรก ฿149 + โปร 50%)
   - Sale Price8 - Subscription_V3.pdf (OBS: โปร 50% เดือน 1-3 / 1-8,
     ทีวี/จอ/ลำโพงไม่รับบริการ: งวดแรก 50% เดือน 1-12 + โปร 50% ต่อ)
   แผน (plans): { label, months (จำนวนเดือนตามสัญญา: 5ปี=60, 6ปี=72, 7ปี=84),
                  price (฿/เดือน), promo }
   ===================================================================== */

window.LG_PRODUCTS = [
  {
    id: 'wd516an',
    model: 'WD516AN',
    name: 'เครื่องกรองน้ำ LG PuriCare รุ่น WD516AN',
    category: 'เครื่องกรองน้ำ',
    emoji: '🌀',
    variants: [
      { sku: 'WD516AN.ACNPLMT', color: 'Calming Navy', colorTh: 'Calming Navy' },
      { sku: 'WD516AN.AEWPLMT', color: 'Essence White', colorTh: 'Essence White' },
      { sku: 'WD516AN.ASLPLMT', color: 'Silver', colorTh: 'Silver' }
    ],
    plans: [
        {
          term: '2Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 37900, effectiveMonthly: 0,
          promoMonths: 0, postPromoPrice: 0,
          advancePayment: 34110, outright: true,
          billSchedule: null,
          totalContractMonths: 24, totalSaving: 3790,
          label: 'Outright 2Y Visit · ผ่อน 9 งวด', months: 24, price: 34110,
          promo: 'ราคาเต็ม ฿37,900 ลด 10% = ฿34,110'
        },
        {
          term: '2Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 34900, effectiveMonthly: 0,
          promoMonths: 0, postPromoPrice: 0,
          advancePayment: 31410, outright: true,
          billSchedule: null,
          totalContractMonths: 24, totalSaving: 3490,
          label: 'Outright 2Y Self · ผ่อน 9 งวด', months: 24, price: 31410,
          promo: 'ราคาเต็ม ฿34,900 ลด 10% = ฿31,410'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 799, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 799,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 399, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 799 }
          ],
          totalContractMonths: 60, totalSaving: 5050,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 799,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 699, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 699,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 349, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 699 }
          ],
          totalContractMonths: 60, totalSaving: 4400,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 699,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '7Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 299, note: 'โปรลด 50%' },
            { range: 'บิล 13-84', price: 599 }
          ],
          totalContractMonths: 84, totalSaving: 3750,
          label: 'Visit 7 ปี (84 เดือน)', months: 84, price: 599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '7Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 499, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 499,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 249, note: 'โปรลด 50%' },
            { range: 'บิล 13-84', price: 499 }
          ],
          totalContractMonths: 84, totalSaving: 3100,
          label: 'Self 7 ปี (84 เดือน)', months: 84, price: 499,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        }
    ]
  },
  {
    id: 'wd518an',
    model: 'WD518AN',
    name: 'เครื่องกรองน้ำ LG PuriCare รุ่น WD518AN',
    category: 'เครื่องกรองน้ำ',
    emoji: '🌀',
    variants: [
      { sku: 'WD518AN.ABGPLMT', color: 'Calming Beige', colorTh: 'Calming Beige' },
      { sku: 'WD518AN.AWHPLMT', color: 'Calming Cream White', colorTh: 'Calming Cream White' },
      { sku: 'WD518AN.ACGPLMT', color: 'Cream Gray', colorTh: 'Cream Gray' }
    ],
    plans: [
        {
          term: '2Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 37900, effectiveMonthly: 0,
          promoMonths: 0, postPromoPrice: 0,
          advancePayment: 34110, outright: true,
          billSchedule: null,
          totalContractMonths: 24, totalSaving: 3790,
          label: 'Outright 2Y Visit · ผ่อน 9 งวด', months: 24, price: 34110,
          promo: 'ราคาเต็ม ฿37,900 ลด 10% = ฿34,110'
        },
        {
          term: '2Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 34900, effectiveMonthly: 0,
          promoMonths: 0, postPromoPrice: 0,
          advancePayment: 31410, outright: true,
          billSchedule: null,
          totalContractMonths: 24, totalSaving: 3490,
          label: 'Outright 2Y Self · ผ่อน 9 งวด', months: 24, price: 31410,
          promo: 'ราคาเต็ม ฿34,900 ลด 10% = ฿31,410'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 799, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 799,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 399, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 799 }
          ],
          totalContractMonths: 60, totalSaving: 5050,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 799,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 699, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 699,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 349, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 699 }
          ],
          totalContractMonths: 60, totalSaving: 4400,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 699,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '7Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 299, note: 'โปรลด 50%' },
            { range: 'บิล 13-84', price: 599 }
          ],
          totalContractMonths: 84, totalSaving: 3750,
          label: 'Visit 7 ปี (84 เดือน)', months: 84, price: 599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '7Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 499, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 499,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 249, note: 'โปรลด 50%' },
            { range: 'บิล 13-84', price: 499 }
          ],
          totalContractMonths: 84, totalSaving: 3100,
          label: 'Self 7 ปี (84 เดือน)', months: 84, price: 499,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        }
    ]
  },
  {
    id: 'wd110mn',
    img: 'images/products/wd110mn.webp',
    model: 'WD110MN',
    name: 'เครื่องกรองน้ำ LG PuriCare รุ่น WD110MN',
    category: 'เครื่องกรองน้ำ',
    emoji: '🚰',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 549, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 549,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 274, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 549 }
          ],
          totalContractMonths: 60, totalSaving: 3425,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 549,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 499, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 499,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 249, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 499 }
          ],
          totalContractMonths: 60, totalSaving: 3100,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 499,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '7Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 449, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 449,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 224, note: 'โปรลด 50%' },
            { range: 'บิล 13-84', price: 449 }
          ],
          totalContractMonths: 84, totalSaving: 2775,
          label: 'Visit 7 ปี (84 เดือน)', months: 84, price: 449,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '7Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 399, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 399,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 199, note: 'โปรลด 50%' },
            { range: 'บิล 13-84', price: 399 }
          ],
          totalContractMonths: 84, totalSaving: 2450,
          label: 'Self 7 ปี (84 เดือน)', months: 84, price: 399,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        }
    ]
  },
  {
    id: 'a9t-ultra',
    img: 'images/products/a9t-ultra.webp',
    gallery: [
      { src: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/vacuum-cleaner/2025/a9t-ultra-dcbpeth/gallery/01_A9T-ULTRA_PH_Front_2010.jpg/jcr%3Acontent/renditions/thum-1600x1062.jpeg?w=800', alt: 'A9T-ULTRA มุมด้านหน้า' },
      { src: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/vacuum-cleaner/2025/a9t-ultra-dcbpeth/gallery/02_A9T-ULTRA_PH_Front_All_2010.jpg/jcr%3Acontent/renditions/thum-1600x1062.jpeg?w=800', alt: 'A9T-ULTRA พร้อมอุปกรณ์เสริม' },
      { src: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/vacuum-cleaner/2025/a9t-ultra-dcbpeth/gallery/03_A9T-ULTRA_PH_Left_2010.jpg/jcr%3Acontent/renditions/thum-1600x1062.jpeg?w=800', alt: 'A9T-ULTRA มุมเฉียงด้านซ้าย' },
      { src: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/vacuum-cleaner/2025/a9t-ultra-dcbpeth/gallery/05_A9T-ULTRA_PH_Side1_2010.jpg/jcr%3Acontent/renditions/thum-1600x1062.jpeg?w=800', alt: 'A9T-ULTRA มุมด้านข้าง' }
    ],
    model: 'A9T-ULTRA',
    name: 'เครื่องดูดฝุ่น LG CordZero™ รุ่น A9T-ULTRA แบบด้ามจับ All-in-One Tower พร้อม Smart WI-FI control',
    category: 'เครื่องดูดฝุ่น',
    emoji: '🧹',
    plans: [
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 749, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 749,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 749 }
          ],
          totalContractMonths: 60, totalSaving: 1350,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 749,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'a9t-core',
    img: 'images/products/a9t-core.webp',
    model: 'A9T-CORE',
    name: 'เครื่องดูดฝุ่น LG CordZero™ รุ่น A9T-CORE แบบด้ามจับ All-in-One Tower',
    category: 'เครื่องดูดฝุ่น',
    emoji: '🧹',
    plans: [
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 649, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 649,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 649 }
          ],
          totalContractMonths: 60, totalSaving: 500,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 649,
          promo: 'บิลแรก ฿149'
        }
    ]
  },
  {
    id: 'a9t-lite',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/vacuum-cleaner/2025/a9t-lite-dcgpeth/gallery/02_All-in-one_Tower_CalmingGreen_S9JGGTDWH_A9T-CORE_TH_Front-450.jpg',
    model: 'A9T-LITE',
    name: 'เครื่องดูดฝุ่น LG CordZero™ รุ่น A9T-LITE แบบด้ามจับ All-in-One Tower',
    category: 'เครื่องดูดฝุ่น',
    emoji: '🧹',
    plans: [
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 549, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 549,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 549 }
          ],
          totalContractMonths: 60, totalSaving: 400,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 549,
          promo: 'บิลแรก ฿149'
        }
    ]
  },
  {
    id: 'gc-l257kqkw',
    img: 'images/products/gc-l257kqkw.webp',
    model: 'GC-L257KQKW',
    name: 'ตู้เย็น Side by Side GC-L257KQKW 22.4 คิว',
    category: 'ตู้เย็น Side by Side',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 749, effectiveMonthly: 374,
          promoMonths: 3, postPromoPrice: 749,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-3', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 749 }
          ],
          totalContractMonths: 60, totalSaving: 1125,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 749,
          promo: 'โปร 50% เดือน 1-3'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 649, effectiveMonthly: 324,
          promoMonths: 3, postPromoPrice: 649,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-3', price: 324, note: 'โปรลด 50%' },
            { range: 'บิล 4-72', price: 649 }
          ],
          totalContractMonths: 72, totalSaving: 975,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 649,
          promo: 'โปร 50% เดือน 1-3'
        }
    ]
  },
  {
    id: 'gc-b257sqyl',
    img: 'images/products/gc-b257sqyl.webp',
    model: 'GC-B257SQYL',
    name: 'ตู้เย็น Side by Side GC-B257SQYL 22.9 คิว',
    category: 'ตู้เย็น Side by Side',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 549, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 549,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 549 }
          ],
          totalContractMonths: 60, totalSaving: 400,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 549,
          promo: 'บิลแรก ฿149'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 449, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 449,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-72', price: 449 }
          ],
          totalContractMonths: 72, totalSaving: 300,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 449,
          promo: 'บิลแรก ฿149'
        }
    ]
  },
  {
    id: 'gc-x257cmhw',
    model: 'GC-X257CMHW',
    name: 'ตู้เย็น Side by Side ขนาด 22.4 คิว ระบบ Inverter Compressor',
    category: 'ตู้เย็น Side by Side',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1449, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1449,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 1449 }
          ],
          totalContractMonths: 60, totalSaving: 1300,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1449,
          promo: 'บิลแรก ฿149'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1249, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1249,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-72', price: 1249 }
          ],
          totalContractMonths: 72, totalSaving: 1100,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 1249,
          promo: 'บิลแรก ฿149'
        }
    ]
  },
  {
    id: 'gc-l257sfzw',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/images/refrigerator/2023/gc-l257sfzw/gallery/450x450/01_VS6_L_Good++GC-L257SFZL_PY_NonPlumbing_Front.jpg',
    model: 'GC-L257SFZW',
    name: 'ตู้เย็น Side-by-Side 22.4 คิว รองรับ Smart Wi-Fi',
    category: 'ตู้เย็น Side by Side',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 849, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 849,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 849 }
          ],
          totalContractMonths: 60, totalSaving: 700,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 849,
          promo: 'บิลแรก ฿149'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 749, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 749,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-72', price: 749 }
          ],
          totalContractMonths: 72, totalSaving: 600,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 749,
          promo: 'บิลแรก ฿149'
        }
    ]
  },
  {
    id: 'gc-x257cmew',
    img: 'images/products/gc-x257cmew.webp',
    model: 'GC-X257CMEW',
    name: 'ตู้เย็น InstaView Side by Side 22.4 คิว GC-X257CMEW Smart Inverter Compressor™',
    category: 'ตู้เย็น Side by Side',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1249, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1249,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 624, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 1249 }
          ],
          totalContractMonths: 60, totalSaving: 5475,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1249,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1049, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1049,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 524, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 1049 }
          ],
          totalContractMonths: 72, totalSaving: 4575,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 1049,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'gc-j257sqzw',
    img: 'images/products/gc-j257sqzw.webp',
    model: 'GC-J257SQZW',
    name: 'ตู้เย็น Side by Side GC-J257SQZW 22.4 คิว',
    category: 'ตู้เย็น Side by Side',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1049, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1049,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 524, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 1049 }
          ],
          totalContractMonths: 60, totalSaving: 1950,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1049,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 899, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 899,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 449, note: 'โปรลด 50%' },
            { range: 'บิล 4-72', price: 899 }
          ],
          totalContractMonths: 72, totalSaving: 1650,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 899,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'gv-b25ffgdb',
    img: 'images/products/gv-b25ffgdb.webp',
    model: 'GV-B25FFGDB',
    name: 'ตู้เย็น Multi-Door GV-B25FFGDB ขนาด 21.6 คิว ระบบ Smart Inverter Compressor',
    category: 'ตู้เย็น Multi-Door',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 699, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 699,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 699 }
          ],
          totalContractMonths: 60, totalSaving: 550,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 699,
          promo: 'บิลแรก ฿149'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-72', price: 599 }
          ],
          totalContractMonths: 72, totalSaving: 450,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 599,
          promo: 'บิลแรก ฿149'
        }
    ]
  },
  {
    id: 'gc-l24ffcbb',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/refrigerator/2025/gc-l24ffcbb-aevplm1/gallery/basic/basic-450.jpg',
    model: 'GC-L24FFCBB + MS2032GAS',
    name: 'ตู้เย็น Multi-Door GC-L24FFCBB 22.6 คิว ระบบ Smart Inverter Compressor',
    category: 'ตู้เย็น Multi-Door',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1249, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1249,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 624, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 1249 }
          ],
          totalContractMonths: 60, totalSaving: 2350,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1249,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1049, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1049,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 524, note: 'โปรลด 50%' },
            { range: 'บิล 4-72', price: 1049 }
          ],
          totalContractMonths: 72, totalSaving: 1950,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 1049,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'gc-g24ffqkb',
    img: 'images/products/gc-g24ffqkb.webp',
    model: 'GC-G24FFQKB',
    name: 'ตู้เย็น InstaView Multi-Door 22.5 คิว GC-G24FFQKB Smart Inverter Compressor',
    category: 'ตู้เย็น Multi-Door',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1349, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1349,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 674, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 1349 }
          ],
          totalContractMonths: 60, totalSaving: 5925,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1349,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1149, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1149,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 574, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 1149 }
          ],
          totalContractMonths: 72, totalSaving: 5025,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 1149,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'gc-v22ffqmb',
    img: 'images/products/gc-v22ffqmb.webp',
    model: 'GC-V22FFQMB',
    name: 'ตู้เย็น InstaView Multi-Door 18.7 คิว GC-V22FFQMB Smart Inverter',
    category: 'ตู้เย็น Multi-Door',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 949, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 949,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 474, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 949 }
          ],
          totalContractMonths: 60, totalSaving: 1750,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 949,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 799, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 799,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 399, note: 'โปรลด 50%' },
            { range: 'บิล 4-72', price: 799 }
          ],
          totalContractMonths: 72, totalSaving: 1450,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 799,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'gc-b48fpgam',
    img: 'images/products/gc-b48fpgam.webp',
    model: 'GC-B48FPGAM',
    name: 'ตู้เย็น Multi-Door ขนาด 17.4 คิว ระบบ Inverter Compressor',
    category: 'ตู้เย็น Multi-Door',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 799, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 799,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 399, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 799 }
          ],
          totalContractMonths: 60, totalSaving: 1450,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 799,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 699, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 699,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 349, note: 'โปรลด 50%' },
            { range: 'บิล 4-72', price: 699 }
          ],
          totalContractMonths: 72, totalSaving: 1250,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 699,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'gv-v25ffgrb',
    img: 'images/products/gv-v25ffgrb.webp',
    model: 'GV-V25FFGRB',
    name: 'ตู้เย็น InstaView Multi-Door 21.6 คิว GV-V25FFGRB Smart Inverter Compressor',
    category: 'ตู้เย็น Multi-Door',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 999, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 999,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 999 }
          ],
          totalContractMonths: 60, totalSaving: 850,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 999,
          promo: 'บิลแรก ฿149'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 949, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 949,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-72', price: 949 }
          ],
          totalContractMonths: 72, totalSaving: 800,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 949,
          promo: 'บิลแรก ฿149'
        }
    ]
  },
  {
    id: 'gn-f392pqak',
    img: 'images/products/gn-f392pqak.webp',
    model: 'GN-F392PQAK',
    name: 'ตู้เย็น 2 ประตู 13.9 คิว Smart Inverter Compressor',
    category: 'ตู้เย็น 2 ประตู',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 449, effectiveMonthly: 224,
          promoMonths: 3, postPromoPrice: 449,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-3', price: 224, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 449 }
          ],
          totalContractMonths: 60, totalSaving: 675,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 449,
          promo: 'โปร 50% เดือน 1-3'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 349, effectiveMonthly: 174,
          promoMonths: 3, postPromoPrice: 349,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-3', price: 174, note: 'โปรลด 50%' },
            { range: 'บิล 4-72', price: 349 }
          ],
          totalContractMonths: 72, totalSaving: 525,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 349,
          promo: 'โปร 50% เดือน 1-3'
        }
    ]
  },
  {
    id: 'gn-f452pqak',
    img: 'images/products/gn-f452pqak.webp',
    model: 'GN-F452PQAK',
    name: 'ตู้เย็น 2 ประตู ขนาด 16.2 คิว ระบบ Smart Inverter',
    category: 'ตู้เย็น 2 ประตู',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 299, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 599 }
          ],
          totalContractMonths: 60, totalSaving: 1050,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 499, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 499,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 249, note: 'โปรลด 50%' },
            { range: 'บิล 4-72', price: 499 }
          ],
          totalContractMonths: 72, totalSaving: 850,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 499,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'gn-v389fqef',
    img: 'images/products/gn-v389fqef.webp',
    model: 'GN-V389FQEF',
    name: 'ตู้เย็น 2 ประตู InstaView 12 คิว ระบบ Smart Inverter',
    category: 'ตู้เย็น 2 ประตู',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 649, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 649,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 324, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 649 }
          ],
          totalContractMonths: 60, totalSaving: 1150,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 649,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 549, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 549,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 274, note: 'โปรลด 50%' },
            { range: 'บิล 4-72', price: 549 }
          ],
          totalContractMonths: 72, totalSaving: 950,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 549,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'wt2520nheg',
    img: 'images/products/wt2520nheg.webp',
    model: 'WT2520NHEG',
    name: 'เครื่องซักอบผ้า LG WashTower 25/20 กก. AI DD™ พร้อม Smart WI-FI control',
    category: 'Wash Tower',
    emoji: '🌀',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 2399, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 2399,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 1199, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 2399 }
          ],
          totalContractMonths: 60, totalSaving: 15450,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 2399,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 2199, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 2199,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 1099, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 2199 }
          ],
          totalContractMonths: 60, totalSaving: 14150,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 2199,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 2199, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 2199,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 1099, note: 'โปรลด 50%' },
            { range: 'บิล 13-72', price: 2199 }
          ],
          totalContractMonths: 72, totalSaving: 14150,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 2199,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1999, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1999,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 999, note: 'โปรลด 50%' },
            { range: 'บิล 13-72', price: 1999 }
          ],
          totalContractMonths: 72, totalSaving: 12850,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 1999,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        }
    ]
  },
  {
    id: 'wt2116sheg',
    img: 'images/products/wt2116sheg.webp',
    model: 'WT2116SHEG',
    name: 'เครื่องซักอบผ้า LG WashTower 21/16 กก. AI DD™ พร้อม Smart WI-FI control',
    category: 'Wash Tower',
    emoji: '🌀',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1999, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1999,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 999, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 1999 }
          ],
          totalContractMonths: 60, totalSaving: 12850,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1999,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1899, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1899,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 949, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 1899 }
          ],
          totalContractMonths: 60, totalSaving: 12200,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 1899,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1749, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1749,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 874, note: 'โปรลด 50%' },
            { range: 'บิล 13-72', price: 1749 }
          ],
          totalContractMonths: 72, totalSaving: 11225,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 1749,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1649, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1649,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 824, note: 'โปรลด 50%' },
            { range: 'บิล 13-72', price: 1649 }
          ],
          totalContractMonths: 72, totalSaving: 10575,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 1649,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        }
    ]
  },
  {
    id: 'wt1410nheg',
    img: 'images/products/wt1410nheg.webp',
    model: 'WT1410NHEG',
    name: 'เครื่องซักอบผ้า LG WashTower 14/10 กก. AI DD™ พร้อม Smart WI-FI control',
    category: 'Wash Tower',
    emoji: '🌀',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 799, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 1599 }
          ],
          totalContractMonths: 60, totalSaving: 10250,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1499, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1499,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 749, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 1499 }
          ],
          totalContractMonths: 60, totalSaving: 9600,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 1499,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1399, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1399,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 699, note: 'โปรลด 50%' },
            { range: 'บิล 13-72', price: 1399 }
          ],
          totalContractMonths: 72, totalSaving: 8950,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 1399,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1299, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1299,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 649, note: 'โปรลด 50%' },
            { range: 'บิล 13-72', price: 1299 }
          ],
          totalContractMonths: 72, totalSaving: 8300,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 1299,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        }
    ]
  },
  {
    id: 'wt2520nhen',
    img: 'images/products/wt2520nhen.webp',
    model: 'WT2520NHEN',
    name: 'เครื่องซักอบผ้า LG WashTower 25/20 กก. (Navy/Beige) AI DD™ พร้อม Smart WI-FI control',
    category: 'Wash Tower',
    emoji: '🌀',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 2399, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 2399,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 1199, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 2399 }
          ],
          totalContractMonths: 60, totalSaving: 15450,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 2399,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 2199, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 2199,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 1099, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 2199 }
          ],
          totalContractMonths: 60, totalSaving: 14150,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 2199,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 2199, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 2199,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 1099, note: 'โปรลด 50%' },
            { range: 'บิล 13-72', price: 2199 }
          ],
          totalContractMonths: 72, totalSaving: 14150,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 2199,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1999, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1999,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 999, note: 'โปรลด 50%' },
            { range: 'บิล 13-72', price: 1999 }
          ],
          totalContractMonths: 72, totalSaving: 12850,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 1999,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        }
    ]
  },
  {
    id: 'wt1410nhen',
    img: 'images/products/wt1410nhen.webp',
    model: 'WT1410NHEN',
    name: 'เครื่องซักอบผ้า LG WashTower 14/10 กก. (Navy/Beige) AI DD™ พร้อม Smart WI-FI control',
    category: 'Wash Tower',
    emoji: '🌀',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 799, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 1599 }
          ],
          totalContractMonths: 60, totalSaving: 10250,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1499, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1499,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 749, note: 'โปรลด 50%' },
            { range: 'บิล 13-60', price: 1499 }
          ],
          totalContractMonths: 60, totalSaving: 9600,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 1499,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1399, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1399,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 699, note: 'โปรลด 50%' },
            { range: 'บิล 13-72', price: 1399 }
          ],
          totalContractMonths: 72, totalSaving: 8950,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 1399,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1299, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1299,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-12', price: 649, note: 'โปรลด 50%' },
            { range: 'บิล 13-72', price: 1299 }
          ],
          totalContractMonths: 72, totalSaving: 8300,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 1299,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-12'
        }
    ]
  },
  {
    id: 'fv1409h4w',
    img: 'images/products/fv1409h4w.webp',
    model: 'FV1409H4W',
    name: 'เครื่องซักผ้า FV1409H4W ซัก 9 กก. / อบ 5 กก.',
    category: 'เครื่องซักผ้า ฝาหน้า',
    emoji: '🌀',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 399, effectiveMonthly: 199,
          promoMonths: 8, postPromoPrice: 399,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-8', price: 199, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 399 }
          ],
          totalContractMonths: 60, totalSaving: 1600,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 399,
          promo: 'โปร 50% เดือน 1-8'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 349, effectiveMonthly: 174,
          promoMonths: 8, postPromoPrice: 349,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-8', price: 174, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 349 }
          ],
          totalContractMonths: 60, totalSaving: 1400,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 349,
          promo: 'โปร 50% เดือน 1-8'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 349, effectiveMonthly: 174,
          promoMonths: 8, postPromoPrice: 349,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-8', price: 174, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 349 }
          ],
          totalContractMonths: 72, totalSaving: 1400,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 349,
          promo: 'โปร 50% เดือน 1-8'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 299, effectiveMonthly: 149,
          promoMonths: 8, postPromoPrice: 299,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-8', price: 149, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 299 }
          ],
          totalContractMonths: 72, totalSaving: 1200,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 299,
          promo: 'โปร 50% เดือน 1-8'
        }
    ]
  },
  {
    id: 'f2520rntb',
    img: 'images/products/f2520rntb.webp',
    model: 'F2520RNTB',
    name: 'เครื่องซักผ้าฝาหน้า ซัก 20 / อบ 10 กก. F2520RNTB ระบบ AI DD™',
    category: 'เครื่องซักผ้า ฝาหน้า',
    emoji: '🌀',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 899, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 899,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 449, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 899 }
          ],
          totalContractMonths: 60, totalSaving: 3900,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 899,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 849, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 849,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 424, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 849 }
          ],
          totalContractMonths: 60, totalSaving: 3675,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 849,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 849, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 849,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 424, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 849 }
          ],
          totalContractMonths: 72, totalSaving: 3675,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 849,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 799, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 799,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 399, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 799 }
          ],
          totalContractMonths: 72, totalSaving: 3450,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 799,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'fv1413h4m',
    img: 'images/products/fv1413h4m.webp',
    model: 'FV1413H4M',
    name: 'เครื่องซักผ้า 13 กก. / อบ 8 กก. ระบบ AI DD™ พร้อม Smart WI-FI control',
    category: 'เครื่องซักผ้า ฝาหน้า',
    emoji: '🌀',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 749, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 749,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 749 }
          ],
          totalContractMonths: 60, totalSaving: 3225,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 749,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 649, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 649,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 324, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 649 }
          ],
          totalContractMonths: 60, totalSaving: 2775,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 649,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 649, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 649,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 324, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 649 }
          ],
          totalContractMonths: 72, totalSaving: 2775,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 649,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 299, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 599 }
          ],
          totalContractMonths: 72, totalSaving: 2550,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'fv1413s4m',
    img: 'images/products/fv1413s4m.webp',
    model: 'FV1413S4M',
    name: 'เครื่องซักผ้า 13 กก. AI DD™',
    category: 'เครื่องซักผ้า ฝาหน้า',
    emoji: '🌀',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 699, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 699,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 349, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 699 }
          ],
          totalContractMonths: 60, totalSaving: 1250,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 699,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 299, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 599 }
          ],
          totalContractMonths: 60, totalSaving: 1050,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 299, note: 'โปรลด 50%' },
            { range: 'บิล 4-72', price: 599 }
          ],
          totalContractMonths: 72, totalSaving: 1050,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 549, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 549,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 274, note: 'โปรลด 50%' },
            { range: 'บิล 4-72', price: 549 }
          ],
          totalContractMonths: 72, totalSaving: 950,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 549,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'tx2723st5j',
    img: 'images/products/tx2723st5j.webp',
    model: 'TX2723ST5J',
    name: 'เครื่องซักผ้าฝาบน 23 กก. ระบบ Inverter Direct Drive',
    category: 'เครื่องซักผ้า ฝาบน',
    emoji: '🌀',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 649, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 649,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 324, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 649 }
          ],
          totalContractMonths: 60, totalSaving: 1150,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 649,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 299, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 599 }
          ],
          totalContractMonths: 60, totalSaving: 1050,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 299, note: 'โปรลด 50%' },
            { range: 'บิล 4-72', price: 599 }
          ],
          totalContractMonths: 72, totalSaving: 1050,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 549, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 549,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 274, note: 'โปรลด 50%' },
            { range: 'บิล 4-72', price: 549 }
          ],
          totalContractMonths: 72, totalSaving: 950,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 549,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'tx2315dt5g',
    img: 'images/products/tx2315dt5g.webp',
    model: 'TX2315DT5G',
    name: 'เครื่องซักผ้าฝาบน 15 กก. ระบบ Inverter Direct Drive',
    category: 'เครื่องซักผ้า ฝาบน',
    emoji: '🌀',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 549, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 549,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 549 }
          ],
          totalContractMonths: 60, totalSaving: 400,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 549,
          promo: 'บิลแรก ฿149'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 449, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 449,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 449 }
          ],
          totalContractMonths: 60, totalSaving: 300,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 449,
          promo: 'บิลแรก ฿149'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 499, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 499,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-72', price: 499 }
          ],
          totalContractMonths: 72, totalSaving: 350,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 499,
          promo: 'บิลแรก ฿149'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 399, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 399,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-72', price: 399 }
          ],
          totalContractMonths: 72, totalSaving: 250,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 399,
          promo: 'บิลแรก ฿149'
        }
    ]
  },
  {
    id: 'rv10vhp2b',
    img: 'images/products/rv10vhp2b.webp',
    model: 'RV10VHP2B',
    name: 'เครื่องอบผ้า ระบบ DUAL Inverter Heat Pump™ ความจุ 10 กก. พร้อม Smart WI-FI control',
    category: 'เครื่องอบผ้า',
    emoji: '🌀',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 849, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 849,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 424, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 849 }
          ],
          totalContractMonths: 60, totalSaving: 3675,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 849,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 749, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 749,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 749 }
          ],
          totalContractMonths: 60, totalSaving: 3225,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 749,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 749, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 749,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 749 }
          ],
          totalContractMonths: 72, totalSaving: 3225,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 749,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 649, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 649,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 324, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 649 }
          ],
          totalContractMonths: 72, totalSaving: 2775,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 649,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'dfc335hm',
    fallbackImg: 'https://arttato.github.io/LG-Subscribe/img/products/dfc335hm-abmpeth.jpg',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/dishwasher/dfc335hm/gallery/01_XD-G3_MatteBlack_DFC335HM_TH_Front-450.jpg',
    model: 'DFC335HM',
    name: 'เครื่องล้างจาน DFC335HM สีดำ มี WI-FI control',
    category: 'เครื่องล้างจาน',
    emoji: '🍽️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 899, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 899,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 449, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 899 }
          ],
          totalContractMonths: 60, totalSaving: 3900,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 899,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 849, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 849,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 424, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 849 }
          ],
          totalContractMonths: 60, totalSaving: 3675,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 849,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 799, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 799,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 399, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 799 }
          ],
          totalContractMonths: 72, totalSaving: 3450,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 799,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 749, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 749,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 749 }
          ],
          totalContractMonths: 72, totalSaving: 3225,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 749,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'dfc533fv',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/dishwasher/dfc533fv/gallery/01_XD5_PS4_DFC533FV_TH_Front-450.jpg',
    model: 'DFC533FV + MS2032GAS',
    name: 'เครื่องล้างจาน DFC533FV สีเงิน WI-FI control',
    category: 'เครื่องล้างจาน',
    emoji: '🍽️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 749, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 749,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 749 }
          ],
          totalContractMonths: 60, totalSaving: 3225,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 749,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 699, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 699,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 349, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 699 }
          ],
          totalContractMonths: 60, totalSaving: 3000,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 699,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 649, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 649,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 324, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 649 }
          ],
          totalContractMonths: 72, totalSaving: 2775,
          label: 'Visit 6 ปี (72 เดือน)', months: 72, price: 649,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 299, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 599 }
          ],
          totalContractMonths: 72, totalSaving: 2550,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 's3mfc',
    img: 'images/products/s3mfc.webp',
    model: 'S3MFC',
    name: 'LG Styler ตู้ถนอมผ้า',
    category: 'ตู้ถนอมผ้า',
    emoji: '👔',
    plans: [
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 899, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 899,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 449, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 899 }
          ],
          totalContractMonths: 60, totalSaving: 3900,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 899,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '6Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 799, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 799,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 399, note: 'โปรลด 50%' },
            { range: 'บิล 9-72', price: 799 }
          ],
          totalContractMonths: 72, totalSaving: 3450,
          label: 'Self 6 ปี (72 เดือน)', months: 72, price: 799,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'ms3032jas',
    img: 'images/products/ms3032jas.webp',
    model: 'MS3032JAS',
    name: 'ไมโครเวฟอุ่นอาหาร ขนาด 30 ลิตร สีดำ',
    category: 'ไมโครเวฟ',
    emoji: '♨️',
    plans: [
        {
          term: '6Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 89, effectiveMonthly: 89,
          promoMonths: 0, postPromoPrice: 89,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-72', price: 89 }
          ],
          totalContractMonths: 72, totalSaving: 0,
          label: 'ไม่รับบริการ 6 ปี (72 เดือน)', months: 72, price: 89,
          promo: ''
        }
    ]
  },
  {
    id: 'md19gqga1',
    img: 'images/products/md19gqga1.webp',
    model: 'MD19GQGA1',
    name: 'เครื่องลดความชื้น LG PuriCare Dehumidifier 19 (30 ลิตร)',
    category: 'เครื่องลดความชื้น',
    emoji: '💧',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 449, effectiveMonthly: 224,
          promoMonths: 3, postPromoPrice: 449,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-3', price: 224, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 449 }
          ],
          totalContractMonths: 60, totalSaving: 675,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 449,
          promo: 'โปร 50% เดือน 1-3'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 399, effectiveMonthly: 199,
          promoMonths: 3, postPromoPrice: 399,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-3', price: 199, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 399 }
          ],
          totalContractMonths: 60, totalSaving: 600,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 399,
          promo: 'โปร 50% เดือน 1-3'
        }
    ]
  },
  {
    id: 'dd23gmwe1',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/dehumidifier/2026/dd23gmwe1-ath/aircare_hk_dehumidifier_mojave_2024_gp1/gallery/01-basic/aircare-hk-dehumidifier-mojave-dd14gmwe0-gp1-basic-large.jpg',
    model: 'DD23GMWE1 + AS30GGW10',
    name: 'เครื่องลดความชื้น LG PuriCare Dehumidifier 23 (40 ลิตร) + AeroMini (ของแถม)',
    category: 'เครื่องลดความชื้น',
    emoji: '💧',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 299, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 599 }
          ],
          totalContractMonths: 60, totalSaving: 1050,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 549, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 549,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 274, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 549 }
          ],
          totalContractMonths: 60, totalSaving: 950,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 549,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'as35ggw10',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-puricare/2025/as35ggx0-abae/gallery/re-gallery/AP2025_AeroHit-Web-Thumbnail_450x450.jpg',
    model: 'AS35GGW10',
    name: 'เครื่องฟอกอากาศ LG PuriCare AeroHit 32 ตร.ม.',
    category: 'เครื่องฟอกอากาศ',
    emoji: '💨',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 249, effectiveMonthly: 124,
          promoMonths: 3, postPromoPrice: 249,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-3', price: 124, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 249 }
          ],
          totalContractMonths: 60, totalSaving: 375,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 249,
          promo: 'โปร 50% เดือน 1-3'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 199, effectiveMonthly: 199,
          promoMonths: 0, postPromoPrice: 199,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-60', price: 199 }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 199,
          promo: ''
        }
    ]
  },
  {
    id: 'as25gcby0',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-puricare/2025/as25gcby0-abae/gallery/basic/air-purifier-aerocattower-2025-as207cbz0-gallery-basic-large.jpg',
    model: 'AS25GCBY0',
    name: 'เครื่องฟอกอากาศ LG PuriCare AeroCat Tower สีเบจ สำหรับน้องแมว',
    category: 'เครื่องฟอกอากาศ',
    emoji: '🌬️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 299, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 599 }
          ],
          totalContractMonths: 60, totalSaving: 1050,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ไม่มีบริการ',
          regular: 549, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 549,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 274, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 549 }
          ],
          totalContractMonths: 60, totalSaving: 950,
          label: 'Self 5 ปี (60 เดือน)', months: 60, price: 549,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'as60ghwg0',
    img: 'images/products/as60ghwg0.webp',
    model: 'AS60GHWG0',
    name: 'เครื่องฟอกอากาศ LG PuriCare 360 Hit 61 ตร.ม.',
    category: 'เครื่องฟอกอากาศ',
    emoji: '🌬️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 449, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 449,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 224, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 449 }
          ],
          totalContractMonths: 60, totalSaving: 750,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 449,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 399, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 399,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 199, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 399 }
          ],
          totalContractMonths: 60, totalSaving: 650,
          label: 'Self 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 399,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 499, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 499,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 249, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 499 }
          ],
          totalContractMonths: 60, totalSaving: 850,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 499,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 449, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 449,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 224, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 449 }
          ],
          totalContractMonths: 60, totalSaving: 750,
          label: 'Self 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 449,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'as65gdby0',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-puricare/2024/as65gdby0-abae/gallery/1.-360Alpha_AS651DBY0_Front-off-450.jpg',
    model: 'AS65GDBY0',
    name: 'เครื่องฟอกอากาศ LG PuriCare Alpha Pet 61.2 ตร.ม.',
    category: 'เครื่องฟอกอากาศ',
    emoji: '🌬️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 749, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 749,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 749 }
          ],
          totalContractMonths: 60, totalSaving: 1350,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 749,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 699, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 699,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 349, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 699 }
          ],
          totalContractMonths: 60, totalSaving: 1250,
          label: 'Self 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 699,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 799, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 799,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 399, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 799 }
          ],
          totalContractMonths: 60, totalSaving: 1450,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 799,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 749, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 749,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 749 }
          ],
          totalContractMonths: 60, totalSaving: 1350,
          label: 'Self 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 749,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'as10gdby0',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-puricare/2024/as10gdby0-abae/gallery/1.-360Alpha_AS101DBY0_Front-off-450.jpg',
    model: 'AS10GDBY0',
    name: 'เครื่องฟอกอากาศ LG PuriCare Alpha Pet 104 ตร.ม.',
    category: 'เครื่องฟอกอากาศ',
    emoji: '🌬️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 1149, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1149,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 574, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 1149 }
          ],
          totalContractMonths: 60, totalSaving: 2150,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 1149,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 1099, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1099,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 549, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 1099 }
          ],
          totalContractMonths: 60, totalSaving: 2050,
          label: 'Self 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 1099,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 1199, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1199,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 599, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 1199 }
          ],
          totalContractMonths: 60, totalSaving: 2250,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 1199,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        },
        {
          term: '5Y',
          serviceType: 'Self',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 1149, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1149,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-3', price: 574, note: 'โปรลด 50%' },
            { range: 'บิล 4-60', price: 1149 }
          ],
          totalContractMonths: 60, totalSaving: 2150,
          label: 'Self 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 1149,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-3'
        }
    ]
  },
  {
    id: 'ixy11a',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/ixya/gallery/IXY11A_front_450.jpg',
    model: 'IXY11A',
    name: 'แอร์อินเวอร์เตอร์ 9,212 BTU LG DUALCOOL',
    category: 'เครื่องปรับอากาศ IXY',
    features: [
      'AI kW Manager ช่วยตั้งค่าและติดตามการใช้พลังงานผ่านสมาร์ตโฟน',
      'Freeze Cleaning ระบบทำความสะอาดคอยล์เย็น ลดฝุ่นและความชื้นสะสม',
      'แผ่นกรองฝุ่นละเอียด PM2.5',
      'Plasmaster Ionizer++ ช่วยลดแบคทีเรียและเชื้อโรคในอากาศ',
      'ควบคุมและตรวจสอบการทำงานจากทุกที่ผ่าน LG ThinQ'
    ],
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 499, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 499,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 499 }
          ],
          totalContractMonths: 60, totalSaving: 350,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 499,
          promo: 'บิลแรก ฿149 · ซับ 2 แถม 1'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 399, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 399,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 399 }
          ],
          totalContractMonths: 60, totalSaving: 250,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 399,
          promo: 'บิลแรก ฿149 · ซับ 2 แถม 1'
        }
    ]
  },
  {
    id: 'ixy13a',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/ixya/gallery/IXY11A_front_450.jpg',
    model: 'IXY13A',
    name: 'แอร์อินเวอร์เตอร์ 12,283 BTU LG DUALCOOL',
    category: 'เครื่องปรับอากาศ IXY',
    features: [
      'AI kW Manager ช่วยตั้งค่าและติดตามการใช้พลังงานผ่านสมาร์ตโฟน',
      'Freeze Cleaning ระบบทำความสะอาดคอยล์เย็น ลดฝุ่นและความชื้นสะสม',
      'แผ่นกรองฝุ่นละเอียด PM2.5',
      'Plasmaster Ionizer++ ช่วยลดแบคทีเรียและเชื้อโรคในอากาศ',
      'ควบคุมและตรวจสอบการทำงานจากทุกที่ผ่าน LG ThinQ'
    ],
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 549, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 549,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 549 }
          ],
          totalContractMonths: 60, totalSaving: 400,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 549,
          promo: 'บิลแรก ฿149 · ซับ 2 แถม 1'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 449, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 449,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 449 }
          ],
          totalContractMonths: 60, totalSaving: 300,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 449,
          promo: 'บิลแรก ฿149 · ซับ 2 แถม 1'
        }
    ]
  },
  {
    id: 'ixy18a',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/ixya/gallery/IXY11A_front_450.jpg',
    model: 'IXY18A',
    name: 'แอร์อินเวอร์เตอร์ 18,084 BTU LG DUALCOOL',
    category: 'เครื่องปรับอากาศ IXY',
    features: [
      'AI kW Manager ช่วยตั้งค่าและติดตามการใช้พลังงานผ่านสมาร์ตโฟน',
      'Freeze Cleaning ระบบทำความสะอาดคอยล์เย็น ลดฝุ่นและความชื้นสะสม',
      'แผ่นกรองฝุ่นละเอียด PM2.5',
      'Plasmaster Ionizer++ ช่วยลดแบคทีเรียและเชื้อโรคในอากาศ',
      'ควบคุมและตรวจสอบการทำงานจากทุกที่ผ่าน LG ThinQ'
    ],
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 699, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 699,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 699 }
          ],
          totalContractMonths: 60, totalSaving: 550,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 699,
          promo: 'บิลแรก ฿149 · ซับ 2 แถม 1'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 599 }
          ],
          totalContractMonths: 60, totalSaving: 450,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 599,
          promo: 'บิลแรก ฿149 · ซับ 2 แถม 1'
        }
    ]
  },
  {
    id: 'ixy24a',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/ixya/gallery/IXY11A_front_450.jpg',
    model: 'IXY24A',
    name: 'แอร์อินเวอร์เตอร์ 21,154 BTU LG DUALCOOL',
    category: 'เครื่องปรับอากาศ IXY',
    features: [
      'AI kW Manager ช่วยตั้งค่าและติดตามการใช้พลังงานผ่านสมาร์ตโฟน',
      'Freeze Cleaning ระบบทำความสะอาดคอยล์เย็น ลดฝุ่นและความชื้นสะสม',
      'แผ่นกรองฝุ่นละเอียด PM2.5',
      'Plasmaster Ionizer++ ช่วยลดแบคทีเรียและเชื้อโรคในอากาศ',
      'ควบคุมและตรวจสอบการทำงานจากทุกที่ผ่าน LG ThinQ'
    ],
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 849, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 849,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 849 }
          ],
          totalContractMonths: 60, totalSaving: 700,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 849,
          promo: 'บิลแรก ฿149 · ซับ 2 แถม 1'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 749, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 749,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-60', price: 749 }
          ],
          totalContractMonths: 60, totalSaving: 600,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 749,
          promo: 'บิลแรก ฿149 · ซับ 2 แถม 1'
        }
    ]
  },
  {
    id: 'siq11b',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/siq/gallery/S1_S3NM121L1C0_Front_1_450.jpg',
    model: 'SIQ11B',
    name: 'แอร์อินเวอร์เตอร์ 9,212 BTU LG DUALCOOL AI Air',
    category: 'เครื่องปรับอากาศ SIQ',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 699, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 699,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 349, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 699 }
          ],
          totalContractMonths: 60, totalSaving: 3000,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 699,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 599, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 299, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 599 }
          ],
          totalContractMonths: 60, totalSaving: 2550,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 599,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'siq13b',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/siq/gallery/S1_S3NM121L1C0_Front_1_450.jpg',
    model: 'SIQ13B',
    name: 'แอร์อินเวอร์เตอร์ 12,200 BTU LG DUALCOOL AI Air',
    category: 'เครื่องปรับอากาศ SIQ',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 799, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 799,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 399, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 799 }
          ],
          totalContractMonths: 60, totalSaving: 3450,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 799,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 699, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 699,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 349, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 699 }
          ],
          totalContractMonths: 60, totalSaving: 3000,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 699,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'siq18b',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/siq/gallery/S1_S3NM121L1C0_Front_1_450.jpg',
    model: 'SIQ18B',
    name: 'แอร์ LG DUALCOOL AI 18,000 BTU รุ่น SIQ18B',
    category: 'เครื่องปรับอากาศ SIQ',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 999, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 999,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 499, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 999 }
          ],
          totalContractMonths: 60, totalSaving: 4350,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 999,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 899, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 899,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 449, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 899 }
          ],
          totalContractMonths: 60, totalSaving: 3900,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 899,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'siq24b',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/siq/gallery/S1_S3NM121L1C0_Front_1_450.jpg',
    model: 'SIQ24B',
    name: 'แอร์อินเวอร์เตอร์ 22,178 BTU LG DUALCOOL AI Air',
    category: 'เครื่องปรับอากาศ SIQ',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 1199, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1199,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 599, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 1199 }
          ],
          totalContractMonths: 60, totalSaving: 5250,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 1199,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 1099, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1099,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 549, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 1099 }
          ],
          totalContractMonths: 60, totalSaving: 4800,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 1099,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'saq11a',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2025/image-with-icon/saq/RAC2025-Web-Thumbnail_SAQ-450X450.jpg',
    model: 'SAQ11A',
    name: 'แอร์อินเวอร์เตอร์ 9,200 BTU LG DUALCOOL AI Air รุ่น SAQ11A',
    category: 'เครื่องปรับอากาศ SAQ',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 899, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 899,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 449, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 899 }
          ],
          totalContractMonths: 60, totalSaving: 3900,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 899,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 799, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 799,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 399, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 799 }
          ],
          totalContractMonths: 60, totalSaving: 3450,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 799,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'saq13a',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2025/image-with-icon/saq/RAC2025-Web-Thumbnail_SAQ-450X450.jpg',
    model: 'SAQ13A',
    name: 'แอร์อินเวอร์เตอร์ 12,000 BTU LG DUALCOOL AI Air รุ่น SAQ13A',
    category: 'เครื่องปรับอากาศ SAQ',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 949, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 949,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 474, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 949 }
          ],
          totalContractMonths: 60, totalSaving: 4125,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 949,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 849, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 849,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 424, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 849 }
          ],
          totalContractMonths: 60, totalSaving: 3675,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 849,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'saq18b',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2025/image-with-icon/saq/RAC2025-Web-Thumbnail_SAQ-450X450.jpg',
    model: 'SAQ18B',
    name: 'แอร์ LG DUALCOOL AI 18,000 BTU รุ่น SAQ18B',
    category: 'เครื่องปรับอากาศ SAQ',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 1149, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1149,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 574, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 1149 }
          ],
          totalContractMonths: 60, totalSaving: 5025,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 1149,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 1049, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1049,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 524, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 1049 }
          ],
          totalContractMonths: 60, totalSaving: 4575,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 1049,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'saq24b',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2025/image-with-icon/saq/RAC2025-Web-Thumbnail_SAQ-450X450.jpg',
    model: 'SAQ24B',
    name: 'แอร์อินเวอร์เตอร์ 24,225 BTU LG DUALCOOL AI Air',
    category: 'เครื่องปรับอากาศ SAQ',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 1299, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1299,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 649, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 1299 }
          ],
          totalContractMonths: 60, totalSaving: 5700,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 1299,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 1199, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1199,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 599, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 1199 }
          ],
          totalContractMonths: 60, totalSaving: 5250,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 1199,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'art13a',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/art13a-sr1/gallery/01_AirFit%20Artcool_S3-M091LRC0_S3NM091LRC0_EU_Front_450.jpg',
    model: 'ART13A.SR1',
    name: 'แอร์อินเวอร์เตอร์ 11,942 BTU LG ARTCOOL',
    category: 'เครื่องปรับอากาศ ART',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 1049, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1049,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 524, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 1049 }
          ],
          totalContractMonths: 60, totalSaving: 4575,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 1049,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 949, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 949,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 474, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 949 }
          ],
          totalContractMonths: 60, totalSaving: 4125,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 949,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'art18a',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/air-conditioner/2026/art13a-sr1/gallery/01_AirFit%20Artcool_S3-M091LRC0_S3NM091LRC0_EU_Front_450.jpg',
    model: 'ART18A.SR1',
    name: 'แอร์อินเวอร์เตอร์ 18,084 BTU LG ARTCOOL',
    category: 'เครื่องปรับอากาศ ART',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 6 เดือน',
          regular: 1249, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1249,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 624, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 1249 }
          ],
          totalContractMonths: 60, totalSaving: 5475,
          label: 'Visit 5 ปี (60 เดือน · 6 งวด)', months: 60, price: 1249,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        },
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ทุก 12 เดือน',
          regular: 1149, effectiveMonthly: 149,
          promoMonths: 1, postPromoPrice: 1149,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1', price: 149, note: 'ราคา 149.-' },
            { range: 'บิล 2-8', price: 574, note: 'โปรลด 50%' },
            { range: 'บิล 9-60', price: 1149 }
          ],
          totalContractMonths: 60, totalSaving: 5025,
          label: 'Visit 5 ปี (60 เดือน · 12 งวด)', months: 60, price: 1149,
          promo: 'บิลแรก ฿149 + โปร 50% เดือน 2-8'
        }
    ]
  },
  {
    id: 'zt4q18',
    model: 'ZT4Q18GPLA1',
    name: 'เครื่องปรับอากาศ 4-Way Cassette ขนาด 18,000 BTU',
    category: 'เครื่องปรับอากาศ SAC 4Way Cassette',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1899, effectiveMonthly: 1899,
          promoMonths: 0, postPromoPrice: 1899,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-60', price: 1899 }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1899,
          promo: 'รุ่นใหม่ Y2026'
        }
    ]
  },
  {
    id: 'zt4q24',
    model: 'ZT4Q24GPLA1',
    name: 'แอร์ LG 4Way Cassette 24,500 BTU',
    category: 'เครื่องปรับอากาศ SAC 4Way Cassette',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1949, effectiveMonthly: 1949,
          promoMonths: 0, postPromoPrice: 1949,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-60', price: 1949 }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1949,
          promo: 'รุ่นใหม่ Y2026'
        }
    ]
  },
  {
    id: 'zt4q36',
    model: 'ZT4Q36GNLA1',
    name: 'เครื่องปรับอากาศ 4-Way Cassette ขนาด 36,200 BTU',
    category: 'เครื่องปรับอากาศ SAC 4Way Cassette',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 2349, effectiveMonthly: 2349,
          promoMonths: 0, postPromoPrice: 2349,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-60', price: 2349 }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 2349,
          promo: 'รุ่นใหม่ Y2026'
        }
    ]
  },
  {
    id: 'zt4q48',
    model: 'ZT4Q48GMLA1',
    name: 'เครื่องปรับอากาศ 4-Way Cassette ขนาด 48,000 BTU',
    category: 'เครื่องปรับอากาศ SAC 4Way Cassette',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 2499, effectiveMonthly: 2499,
          promoMonths: 0, postPromoPrice: 2499,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-60', price: 2499 }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 2499,
          promo: 'รุ่นใหม่ Y2026'
        }
    ]
  },
  {
    id: 'zt1q12',
    model: 'ZT1Q12GULA1',
    name: 'เครื่องปรับอากาศ 1-Way Cassette ขนาด 10,500 BTU',
    category: 'เครื่องปรับอากาศ SAC 1 Way Cassette',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1499, effectiveMonthly: 1499,
          promoMonths: 0, postPromoPrice: 1499,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-60', price: 1499 }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1499,
          promo: 'รุ่นใหม่ Y2026'
        }
    ]
  },
  {
    id: 'zt1q18',
    model: 'ZT1Q18GTLA1',
    name: '(PM 2.5, DUAL Vane) เครื่องปรับอากาศ 1-Way Cassette ขนาด 18,000 BTU',
    category: 'เครื่องปรับอากาศ SAC 1 Way Cassette',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1599, effectiveMonthly: 1599,
          promoMonths: 0, postPromoPrice: 1599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-60', price: 1599 }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1599,
          promo: 'รุ่นใหม่ Y2026'
        }
    ]
  },
  {
    id: 'zt1q24',
    model: 'ZT1Q24GTLA1',
    name: 'เครื่องปรับอากาศ 1-Way Cassette ขนาด 23,500 BTU',
    category: 'เครื่องปรับอากาศ SAC 1 Way Cassette',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1799, effectiveMonthly: 1799,
          promoMonths: 0, postPromoPrice: 1799,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-60', price: 1799 }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 1799,
          promo: 'รุ่นใหม่ Y2026'
        }
    ]
  },
  {
    id: 'ztrq36',
    model: 'ZTRQ36GYLA1',
    name: 'แอร์ LG Round Cassette 36,700 BTU',
    category: 'เครื่องปรับอากาศ SAC Round Cassette',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 2599, effectiveMonthly: 2599,
          promoMonths: 0, postPromoPrice: 2599,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-60', price: 2599 }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 2599,
          promo: 'รุ่นใหม่ Y2026'
        }
    ]
  },
  {
    id: 'ztrq48',
    model: 'ZTRQ48GYLA1',
    name: 'แอร์ LG Round Cassette 47,100 BTU',
    category: 'เครื่องปรับอากาศ SAC Round Cassette',
    emoji: '❄️',
    plans: [
        {
          term: '5Y',
          serviceType: 'Visit',
          serviceCycle: 'ไม่มีบริการ',
          regular: 2799, effectiveMonthly: 2799,
          promoMonths: 0, postPromoPrice: 2799,
          advancePayment: 0, outright: false,
          billSchedule: [
            { range: 'บิล 1-60', price: 2799 }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'Visit 5 ปี (60 เดือน)', months: 60, price: 2799,
          promo: 'รุ่นใหม่ Y2026'
        }
    ]
  },
  {
    id: 'oled48c6psa',
    img: 'images/products/oled48c6psa.webp',
    model: 'OLED48C6PSA',
    name: 'ทีวี 48" LG OLED evo C6 4K Smart TV 2026',
    category: 'โทรทัศน์ OLED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 749, effectiveMonthly: 374.5,
          promoMonths: 8, postPromoPrice: 749,
          advancePayment: 4494, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 374.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-20', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 21-60', price: 749, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 3000,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน) · โปร 8 เดือน', months: 60, price: 749,
          promo: '50% เดือน 1-20'
        },
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 749, effectiveMonthly: 374.5,
          promoMonths: 3, postPromoPrice: 749,
          advancePayment: 4494, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 374.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-15', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 16-60', price: 749, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 1125,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน) · โปร 3 เดือน', months: 60, price: 749,
          promo: '50% เดือน 1-15 · ของแถม xboom BOUNCE'
        }
    ]
  },
  {
    id: 'oled55c6psa',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/55-c6/update/OLED55C6PSA-450-01.jpg',
    model: 'OLED55C6PSA',
    name: 'ทีวี 55" LG OLED evo C6 4K Smart TV 2026',
    category: 'โทรทัศน์ OLED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1099, effectiveMonthly: 549.5,
          promoMonths: 8, postPromoPrice: 1099,
          advancePayment: 6594, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 549.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-20', price: 549, note: 'โปรลด 50%' },
            { range: 'บิล 21-60', price: 1099, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 4400,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 1099,
          promo: '50% เดือน 1-20'
        }
    ]
  },
  {
    id: 'oled65c6psa',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/65-c6/update/OLED65C6PSA-450-01.jpg',
    model: 'OLED65C6PSA',
    name: 'ทีวี 65" LG OLED evo C6 4K Smart TV 2026',
    category: 'โทรทัศน์ OLED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1299, effectiveMonthly: 649.5,
          promoMonths: 8, postPromoPrice: 1299,
          advancePayment: 7794, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 649.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-20', price: 649, note: 'โปรลด 50%' },
            { range: 'บิล 21-60', price: 1299, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 5200,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 1299,
          promo: '50% เดือน 1-20'
        }
    ]
  },
  {
    id: 'oled77c6psa',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/77-c6/update/OLED77C6PSA-450-01.jpg',
    model: 'OLED77C6PSA',
    name: 'ทีวี 77" LG OLED evo C6 4K Smart TV 2026',
    category: 'โทรทัศน์ OLED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1999, effectiveMonthly: 999.5,
          promoMonths: 8, postPromoPrice: 1999,
          advancePayment: 11994, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 999.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-20', price: 999, note: 'โปรลด 50%' },
            { range: 'บิล 21-60', price: 1999, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 8000,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 1999,
          promo: '50% เดือน 1-20'
        }
    ]
  },
  {
    id: 'oled77c6psa-s80ty',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/77-c6/update/OLED77C6PSA-450-01.jpg',
    model: 'OLED77C6PSA + S80TY',
    name: 'ทีวี 77" LG OLED evo C6 4K Smart TV 2026 + Soundbar S80TY (ของแถม)',
    category: 'โทรทัศน์ OLED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1999, effectiveMonthly: 999.5,
          promoMonths: 3, postPromoPrice: 1999,
          advancePayment: 11994, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 999.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-15', price: 999, note: 'โปรลด 50%' },
            { range: 'บิล 16-60', price: 1999, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 3000,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน) · ของแถม S80TY', months: 60, price: 1999,
          promo: '50% เดือน 1-15 · ของแถม Soundbar S80TY'
        }
    ]
  },
  {
    id: 'oled65c6psa-s80ty',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/65-c6/update/OLED65C6PSA-450-01.jpg',
    model: 'OLED65C6PSA + S80TY',
    name: 'ทีวี 65" LG OLED evo C6 4K Smart TV 2026 + Soundbar S80TY (ของแถม)',
    category: 'โทรทัศน์ OLED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1299, effectiveMonthly: 649.5,
          promoMonths: 3, postPromoPrice: 1299,
          advancePayment: 7794, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 649.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-15', price: 649, note: 'โปรลด 50%' },
            { range: 'บิล 16-60', price: 1299, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 1950,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน) · ของแถม S80TY', months: 60, price: 1299,
          promo: '50% เดือน 1-15 · ของแถม Soundbar S80TY'
        }
    ]
  },
  {
    id: 'oled55c6psa-s30a',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/oled/oled81-42c6psa-atm/gallery/55-c6/update/OLED55C6PSA-450-01.jpg',
    model: 'OLED55C6PSA + S30A',
    name: 'ทีวี 55" LG OLED evo C6 4K Smart TV 2026 + Soundbar S30A (ของแถม)',
    category: 'โทรทัศน์ OLED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1099, effectiveMonthly: 549.5,
          promoMonths: 3, postPromoPrice: 1099,
          advancePayment: 6594, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 549.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-15', price: 549, note: 'โปรลด 50%' },
            { range: 'บิล 16-60', price: 1099, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 1650,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน) · ของแถม S30A', months: 60, price: 1099,
          promo: '50% เดือน 1-15 · ของแถม Soundbar S30A'
        }
    ]
  },
  {
    id: '75qned86bsa',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/qned/100-55qned86bsa-atm/gallery/75qned86/gallery/75QNED86-450.jpg',
    model: '75QNED86BSA',
    name: 'ทีวี 75" LG QNED evo AI Mini LED QNED86 4K Smart TV 2026',
    category: 'โทรทัศน์ QNED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 899, effectiveMonthly: 449.5,
          promoMonths: 0, postPromoPrice: 899,
          advancePayment: 5394, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 449.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 899, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 899,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: '100mrgb96bs',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/micro-rgb-evo/100mrgb96bs-atm/gallery/100-mrgb95/gallery/gp1/basic.jpg',
    model: '100MRGB96BS',
    name: 'ทีวี 100" LG Micro RGB evo AI MRGB96 4K Smart TV 2026',
    category: 'โทรทัศน์ QNED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 4499, effectiveMonthly: 2249.5,
          promoMonths: 8, postPromoPrice: 4499,
          advancePayment: 26994, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 2249.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-20', price: 2249, note: 'โปรลด 50%' },
            { range: 'บิล 21-60', price: 4499, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 18000,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 4499,
          promo: '50% เดือน 1-20'
        }
    ]
  },
  {
    id: '100qned86bs',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/qned/100-55qned86bsa-atm/gallery/100-qned85/basic/lg-qned-evo-qned85-2026-100-gallery-basic.jpg',
    model: '100QNED86BS',
    name: 'ทีวี 100" LG QNED evo AI Mini LED QNED86 4K Smart TV 2026',
    category: 'โทรทัศน์ QNED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 2599, effectiveMonthly: 1299.5,
          promoMonths: 0, postPromoPrice: 2599,
          advancePayment: 15594, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 1299.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 2599, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 2599,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: '85qned80bsa',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/qned/75-43qned80bsa-atm/gallery/85-qned80/basic/lg-qned-evo-qned80-2026-85-gallery-basic.jpg',
    model: '85QNED80BSA',
    name: 'ทีวี 85" LG QNED evo AI Mini LED QNED80 4K Smart TV 2026',
    category: 'โทรทัศน์ QNED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1349, effectiveMonthly: 674.5,
          promoMonths: 0, postPromoPrice: 1349,
          advancePayment: 8094, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 674.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 1349, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 1349,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: '65qned80bsa',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/qned/75-43qned80bsa-atm/gallery/65-qned80/basic/lg-qned-evo-qned80-2026-65-gallery-basic.jpg',
    model: '65QNED80BSA',
    name: 'ทีวี 65" LG QNED evo AI Mini LED QNED80 4K Smart TV 2026',
    category: 'โทรทัศน์ QNED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 649, effectiveMonthly: 324.5,
          promoMonths: 0, postPromoPrice: 649,
          advancePayment: 3894, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 324.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 649, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 649,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: '55qned80bsa',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/qned/75-43qned80bsa-atm/gallery/55-qned80/basic/lg-qned-evo-qned80-2026-55-gallery-basic.jpg',
    model: '55QNED80BSA',
    name: 'ทีวี 55" LG QNED evo AI Mini LED QNED80 4K Smart TV 2026',
    category: 'โทรทัศน์ QNED',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 549, effectiveMonthly: 274.5,
          promoMonths: 0, postPromoPrice: 549,
          advancePayment: 3294, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 274.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 549, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 549,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: '75nu855bpsa',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/nano-4k-uhd/98-43nu855bpsa-atm/gallery/75-nu85/basic/lg-nano-4k-uhd-nu85-2026-75-gallery-basic.jpg',
    model: '75NU855BPSA',
    name: 'ทีวี 75" LG NANO 4K UHD AI NU85 4K Smart TV 2026',
    category: 'โทรทัศน์ NanoCell',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 699, effectiveMonthly: 349.5,
          promoMonths: 0, postPromoPrice: 699,
          advancePayment: 4194, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 349.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 699, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 699,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: '65nu855bpsa',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/tv/2026/nano-4k-uhd/98-43nu855bpsa-atm/gallery/65-nu85/basic/lg-nano-4k-uhd-nu85-2026-65-gallery-basic.jpg',
    model: '65NU855BPSA',
    name: 'ทีวี 65" LG NANO 4K UHD AI NU85 4K Smart TV 2026',
    category: 'โทรทัศน์ NanoCell',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 549, effectiveMonthly: 274.5,
          promoMonths: 0, postPromoPrice: 549,
          advancePayment: 3294, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 274.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 549, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 549,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: '27lx6tdga',
    img: 'images/products/27lx6tdga.webp',
    model: '27LX6TDGA',
    name: 'LG StanbyME2',
    category: 'โทรทัศน์ StanbyME',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 749, effectiveMonthly: 374.5,
          promoMonths: 8, postPromoPrice: 749,
          advancePayment: 4494, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 374.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-20', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 21-60', price: 749, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 3000,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 749,
          promo: '50% เดือน 1-20'
        }
    ]
  },
  {
    id: '32lx6bdga',
    img: 'images/products/32lx6bdga.webp',
    model: '32LX6BDGA',
    name: 'LG StanbyME 2 Max LX6 จอไลฟ์สไตล์ไร้สาย 4K ขนาด 32 นิ้ว',
    category: 'โทรทัศน์ StanbyME',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 849, effectiveMonthly: 424.5,
          promoMonths: 8, postPromoPrice: 849,
          advancePayment: 5094, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 424.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-20', price: 424, note: 'โปรลด 50%' },
            { range: 'บิล 21-60', price: 849, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 3400,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 849,
          promo: '50% เดือน 1-20'
        }
    ]
  },
  {
    id: '27lx6tdga-grab',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/pto/2026/27lx6tdga-grab/27LX6TDGA.GRAB-450.jpg',
    model: '27LX6TDGA + xboom GRAB',
    name: 'LG StanbyME2 + xboom Grab (ของแถม)',
    category: 'โทรทัศน์ StanbyME',
    emoji: '📺',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 749, effectiveMonthly: 374.5,
          promoMonths: 3, postPromoPrice: 749,
          advancePayment: 4494, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 374.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-15', price: 374, note: 'โปรลด 50%' },
            { range: 'บิล 16-60', price: 749, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 1125,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน) · ของแถม GRAB', months: 60, price: 749,
          promo: '50% เดือน 1-15 · ของแถม xboom GRAB'
        }
    ]
  },
  {
    id: '27gx704a',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/monitor/2026/27gx704a-atm/gallery/basic/ultragear-gaming-27gx704a-2025-gallery-basic-large.jpg',
    model: '27GX704A-B',
    name: 'LG UltraGear™ GX7 27 นิ้ว 240Hz OLED QHD Gaming Monitor 27GX704A DisplayHDR™ True Black 400',
    category: 'มอนิเตอร์',
    emoji: '🖥️',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 399, effectiveMonthly: 199.5,
          promoMonths: 3, postPromoPrice: 399,
          advancePayment: 2394, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 199.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-15', price: 199, note: 'โปร' },
            { range: 'บิล 16-60', price: 399, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 600,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 399,
          promo: '50% เดือน 1-15'
        }
    ]
  },
  {
    id: '45gx950a',
    img: 'images/products/45gx950a.webp',
    model: '45GX950A-B',
    name: 'LG UltraGear™ 45" OLED Dual-Mode 5K2K 0.03ms DisplayHDR True Black',
    category: 'มอนิเตอร์',
    emoji: '🖥️',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1499, effectiveMonthly: 749.5,
          promoMonths: 0, postPromoPrice: 1499,
          advancePayment: 8994, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 749.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 1499, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 1499,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: '52g930b',
    img: 'images/products/52g930b.webp',
    model: '52G930B-B',
    name: 'LG UltraGear evo G9 52 นิ้ว',
    category: 'มอนิเตอร์',
    emoji: '🖥️',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 1199, effectiveMonthly: 599.5,
          promoMonths: 0, postPromoPrice: 1199,
          advancePayment: 7194, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 599.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 1199, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 1199,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: '40u990a',
    img: 'images/products/40u990a.webp',
    model: '40U990A-W',
    name: 'LG UltraFine™ 40 นิ้ว',
    category: 'มอนิเตอร์',
    emoji: '🖥️',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 999, effectiveMonthly: 499.5,
          promoMonths: 0, postPromoPrice: 999,
          advancePayment: 5994, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 499.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 999, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 999,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: '34u650a',
    model: '34U650A-B',
    name: '34" 21:9 UltraWide™ WQHD (3440x1440) IPS Monitor',
    category: 'มอนิเตอร์',
    emoji: '🖥️',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 399, effectiveMonthly: 199.5,
          promoMonths: 0, postPromoPrice: 399,
          advancePayment: 2394, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 199.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 399, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 399,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: '32u889sa',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/images/monitor/2025/32u889sa/gallery/smart-monitor-32u889sa-2025-gallery-swing-gallery-basic-large.jpg',
    model: '32U889SA-W',
    name: 'จอมอนิเตอร์ 31.5" 4K IPS Smart Monitor Swing จอสัมผัส ขาตั้งหมุนได้',
    category: 'มอนิเตอร์',
    emoji: '🖥️',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 699, effectiveMonthly: 349.5,
          promoMonths: 8, postPromoPrice: 699,
          advancePayment: 4194, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 349.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-20', price: 349, note: 'โปรลด 50%' },
            { range: 'บิล 21-60', price: 699, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 2800,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 699,
          promo: '50% เดือน 1-20'
        }
    ]
  },
  {
    id: '32u889sa-grab',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/pto/2026/32u889sa-grab/32U889SA.GRAB-450.jpg',
    model: '32U889SA + xboom GRAB',
    name: 'จอมอนิเตอร์ 31.5" 4K IPS Smart Monitor Swing + xboom Grab (ของแถม)',
    category: 'มอนิเตอร์',
    emoji: '🖥️',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 699, effectiveMonthly: 349.5,
          promoMonths: 3, postPromoPrice: 699,
          advancePayment: 4194, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 349.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-15', price: 349, note: 'โปรลด 50%' },
            { range: 'บิล 16-60', price: 699, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 1050,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน) · ของแถม GRAB', months: 60, price: 699,
          promo: '50% เดือน 1-15 · ของแถม xboom GRAB'
        }
    ]
  },
  {
    id: 's95tr',
    img: 'images/products/s95tr.webp',
    model: 'S95TR',
    name: 'ซาวด์บาร์ LG Dolby Atmos 9.1.5 ช่อง (820W)',
    category: 'Sound bar',
    emoji: '🔊',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 449, effectiveMonthly: 224.5,
          promoMonths: 0, postPromoPrice: 449,
          advancePayment: 2694, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 224.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 449, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 449,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: 's70ty',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/audio/2024/s70ty-dthallk/gallery/s70ty_basic_450.jpg',
    model: 'S70TY',
    name: 'ซาวด์บาร์ LG Dolby Atmos 3.1.1 ช่อง (400W)',
    category: 'Sound bar',
    emoji: '🔊',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 189, effectiveMonthly: 94.5,
          promoMonths: 0, postPromoPrice: 189,
          advancePayment: 1134, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 94.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 189, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 189,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: 'xboom-grab',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/audio/2025/grab-athalbk/gallery/gallery-1/xboom-grab-2025-gallery-basic.jpg',
    model: 'xboom GRAB',
    name: 'ลำโพงพกพา LG xboom Grab tuned by will.i.am',
    category: 'Bluetooth Speaker',
    emoji: '🔊',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 109, effectiveMonthly: 54.5,
          promoMonths: 0, postPromoPrice: 109,
          advancePayment: 654, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 54.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 109, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 109,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: 'xboom-bounce',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/audio/2025/bounce-athalbk/gallery/01-basic/xboom-bounce-2025-gallery-basic.jpg',
    model: 'xboom BOUNCE',
    name: 'ลำโพงพกพา LG xboom Bounce by will.i.am',
    category: 'Bluetooth Speaker',
    emoji: '🔊',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 139, effectiveMonthly: 69.5,
          promoMonths: 0, postPromoPrice: 139,
          advancePayment: 834, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 69.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 139, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 139,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: 'xboom-stage301',
    img: 'https://www.lg.com/content/dam/channel/wcms/th/image-update/audio/2025/stage301-athalbk/gallery/01-basic/xboom-stage301-2025-gallery-basic.jpg',
    model: 'xboom STAGE301',
    name: 'LG xboom STAGE301 tuned by will.i.am',
    category: 'Bluetooth Speaker',
    emoji: '🔊',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 299, effectiveMonthly: 149.5,
          promoMonths: 0, postPromoPrice: 299,
          advancePayment: 1794, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 149.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-60', price: 299, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 0,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 299,
          promo: '50% เดือน 1-12'
        }
    ]
  },
  {
    id: 'xboom-stage501',
    img: '',
    model: 'xboom STAGE501',
    name: 'LG xboom STAGE501 tuned by will.i.am',
    category: 'Bluetooth Speaker',
    emoji: '🔊',
    gift: 'แถมฟรี Sherman MIC-150 Plus สำหรับ 100 ท่านแรกเท่านั้น เป็นไปตามเงื่อนไขที่บริษัทฯ กำหนด',
    plans: [
        {
          term: '5Y',
          serviceType: 'No Service',
          serviceCycle: 'ไม่มีบริการ',
          regular: 449, effectiveMonthly: 224.5,
          promoMonths: 8, postPromoPrice: 449,
          advancePayment: 2694, outright: false,
          billSchedule: [
            { range: 'บิล 1-12', price: 224.5, note: 'ครึ่งราคา (จ่ายล่วงหน้าแล้ว)' },
            { range: 'บิล 13-20', price: 224, note: 'โปรลด 50%' },
            { range: 'บิล 21-60', price: 449, note: 'ราคาปกติ' }
          ],
          totalContractMonths: 60, totalSaving: 1800,
          label: 'ไม่รับบริการ 5 ปี (60 เดือน)', months: 60, price: 449,
          promo: 'โปร 50% เพิ่ม 8 เดือน (บิล 13-20)'
        }
    ]
  }
];

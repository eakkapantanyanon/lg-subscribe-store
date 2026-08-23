/* =====================================================================
   product-select.js — ตัวเลือกแผน (PDP) + ข้อมูลสรุปราคา
   ใช้ร่วมกันระหว่าง product.html (หน้าสินค้า) และ subscribe-store.html (ตะกร้า)
   เพื่อให้สูตรราคาเป็นชุดเดียว: ทุกอย่างผ่าน LGCalc (calculator-core.js)
   - optionsFor / filterPlans / resolvePlanIndex: ตัวเลือก (ลูกค้า, แผน, การดูแล, สัญญา) → แผนเดียว
   - comboInfo / activePromo: อัตราส่วนลดคอมโบตามช่วงเวลา + ประเภทลูกค้า
   - itemSummary: สรุปราคาสำหรับกล่องสรุปบน PDP (คำนวณด้วยฟังก์ชันเดียวกับหน้าตะกร้า)
   ===================================================================== */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./calculator-core.js'));
  else root.FLEXISelect = factory(root.LGCalc);
})(typeof self !== 'undefined' ? self : this, function (LG) {
  'use strict';

  /* ---------- โปรโมชันกลาง (วันที่เป็นปฏิทิน พ.ศ.) — ใช้ที่เดียวทั้งเว็บ ---------- */
  var PROMOS = {
    normal: { name: 'August Combo', dateStart: '2569-08-01', dateEnd: '2569-08-31' },
    special: { name: 'LG Special Birthday Combo Promotion', dateStart: '2569-08-15', dateEnd: '2569-08-25' },
    shock: { name: 'DOUBLE DAY 8.8 SHOCK PRICE', dateStart: '2569-08-08', dateEnd: '2569-08-10', fromPrice: 149, toPrice: 88 }
  };

  var CARE_INFO = {
    Visit: {
      label: 'รายเดือนพร้อมบริการ', short: 'พร้อมบริการ',
      desc: 'ผู้เชี่ยวชาญ LG เข้าดูแลถึงบ้านตามรอบบริการของแพ็กเกจ — รายละเอียดงานขึ้นอยู่กับรุ่นและเงื่อนไขบริการ'
    },
    Self: {
      label: 'รายเดือนเปลี่ยนด้วยตัวเอง', short: 'เปลี่ยนเอง',
      desc: 'LG จัดส่งอุปกรณ์ตามรอบบริการของแพ็กเกจเพื่อดูแลด้วยตัวเอง — รายการอุปกรณ์ขึ้นอยู่กับรุ่นและเงื่อนไขบริการ'
    },
    'No Service': {
      label: 'ไม่รับบริการดูแล', short: 'ไม่รับบริการ',
      desc: 'แพ็กเกจนี้ไม่มีรอบบริการดูแลเพิ่มเติม รายละเอียดการรับประกันและเงื่อนไขเป็นไปตามสินค้าที่เลือก'
    }
  };

  /* ---------- รายละเอียดบริการจาก source ที่ตรวจสอบแล้ว ---------- */
  var CARE_DETAIL_OVERRIDES = {
    AS25GCBY0: {
      Visit: {
        source: 'Care Service AS25GCBY0 — อัปเดตเฉพาะรุ่น',
        desc: 'ผู้เชี่ยวชาญจาก LG เข้าบริการถึงบ้านตามรอบบริการ',
        details: [
          { text: 'ทำความสะอาดภายในและภายนอกของผลิตภัณฑ์', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดโดมแมว', cycle: 'ทุก 12 เดือน' },
          { text: 'ตรวจสอบสภาพการทำงานผลิตภัณฑ์', cycle: 'ทุก 12 เดือน' },
          { text: 'ตรวจสอบเซนเซอร์จับฝุ่น', cycle: 'ทุก 12 เดือน' },
          { text: 'เปลี่ยนไส้กรอง Aero Series V-Pet Filter (H13)', cycle: 'ทุก 12 เดือน' },
          { text: 'เปลี่ยนเบาะรองนั่ง 1 ชิ้น', cycle: 'ครบ 36 เดือน' },
          { text: 'เปลี่ยนผ้าบุผนัง 1 ชุด', cycle: 'ครบ 36 เดือน' },
          { text: 'เปลี่ยนขั้นบันไดสำหรับแมว 1 ชิ้น', cycle: 'ครบ 36 เดือน' }
        ]
      },
      Self: {
        source: 'Care Service AS25GCBY0 — อัปเดตเฉพาะรุ่น',
        desc: 'บำรุงรักษาด้วยตัวเอง โดย LG จัดส่งอุปกรณ์ตามรอบบริการ',
        details: [
          { text: 'จัดส่งไส้กรอง Aero Series V-Pet Filter (H13)', cycle: 'ทุก 12 เดือน' },
          { text: 'จัดส่งเบาะรองนั่ง 1 ชิ้น', cycle: 'ครบ 36 เดือน' },
          { text: 'จัดส่งผ้าบุผนัง 1 ชุด', cycle: 'ครบ 36 เดือน' },
          { text: 'จัดส่งขั้นบันไดสำหรับแมว 1 ชิ้น', cycle: 'ครบ 36 เดือน' }
        ]
      }
    }
  };

  function documentedCareInfo(product, serviceType) {
    if (!product) return null;
    var model = product.model || '';
    var category = product.category || '';
    var visitDesc = 'ผู้เชี่ยวชาญจาก LG เข้าบริการถึงบ้านตามรอบบริการ';
    var selfDesc = 'บำรุงรักษาด้วยตัวเอง โดย LG จัดส่งอุปกรณ์ตามรอบบริการ';

    if (['WD516AN', 'WD518AN', 'WD110MN'].indexOf(model) !== -1) {
      return serviceType === 'Visit' ? {
        source: 'Care Service 2026(1).pdf p.3', desc: visitDesc,
        details: [
          { text: 'เปลี่ยน Pre-Carbon Block Filter', cycle: 'ทุก 6 เดือน' },
          { text: 'เปลี่ยน UF Membrane Filter', cycle: 'ทุก 12 เดือน' },
          { text: 'ฆ่าเชื้อตามทางเดินน้ำด้วยไฟฟ้า', cycle: 'ทุก 6 เดือน' },
          { text: 'ตรวจสอบการรั่วไหลของผลิตภัณฑ์', cycle: 'ทุก 6 เดือน' },
          { text: 'ทำความสะอาดในจุดที่เข้าถึงยาก', cycle: 'ทุก 6 เดือน' },
          { text: 'ทำความสะอาดทั้งภายในและภายนอก', cycle: 'ทุก 6 เดือน' }
        ]
      } : serviceType === 'Self' ? {
        source: 'Care Service 2026(1).pdf p.3', desc: selfDesc,
        details: [
          { text: 'จัดส่ง Pre-Carbon Block Filter', cycle: 'ทุก 6 เดือน' },
          { text: 'จัดส่ง UF Membrane Filter', cycle: 'ทุก 12 เดือน' }
        ]
      } : null;
    }

    if (category === 'Wash Tower') {
      return serviceType === 'Visit' ? {
        source: 'Care Service 2026(1).pdf p.9', desc: visitDesc,
        details: [
          { text: 'แผ่นถนอมผ้า 4 กล่อง', cycle: 'หลังวันติดตั้ง' },
          { text: 'ตัวกรองใยผ้า 2 ชั้น', cycle: 'หลังวันติดตั้ง' },
          { text: 'ตรวจสอบผลิตภัณฑ์', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดลิ้นชักใส่น้ำยาซักผ้า', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดขอบยาง', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดตัวกรอง', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดภายในและภายนอก', cycle: 'ทุก 12 เดือน' },
          { text: 'แผ่นถนอมผ้า 4 กล่อง', cycle: 'ทุก 12 เดือน' },
          { text: 'ตัวกรองสิ่งสกปรก', cycle: 'ครบ 36 เดือน' },
          { text: 'ถอดและทำความสะอาดโดยแยกชิ้นส่วน', cycle: 'ครบ 36 และ 72 เดือน' }
        ]
      } : serviceType === 'Self' ? {
        source: 'Care Service 2026(1).pdf p.9', desc: selfDesc,
        details: [
          { text: 'จัดส่งแผ่นถนอมผ้า 4 กล่อง', cycle: 'หลังวันติดตั้ง' },
          { text: 'จัดส่งตัวกรองใยผ้า 2 ชั้น', cycle: 'หลังวันติดตั้ง' },
          { text: 'จัดส่งน้ำยาล้างเครื่องซักผ้า', cycle: 'ทุก 12 เดือน' },
          { text: 'จัดส่งแผ่นถนอมผ้า 4 กล่อง', cycle: 'ทุก 12 เดือน' },
          { text: 'จัดส่งตัวกรองสิ่งสกปรก', cycle: 'ครบ 36 เดือน' }
        ]
      } : null;
    }

    if (category === 'เครื่องซักผ้า ฝาหน้า') {
      return serviceType === 'Visit' ? {
        source: 'Care Service 2026(1).pdf p.10', desc: visitDesc,
        details: [
          { text: 'ตรวจสอบผลิตภัณฑ์', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดลิ้นชักใส่น้ำยาซักผ้า', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดขอบยาง', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดตัวกรอง', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดภายในและภายนอก', cycle: 'ทุก 12 เดือน' },
          { text: 'จัดส่งตัวกรองสิ่งสกปรก', cycle: 'ครบ 36 เดือน' },
          { text: 'ถอดและทำความสะอาดโดยแยกชิ้นส่วน', cycle: 'ครบ 36 และ 72 เดือน' }
        ]
      } : serviceType === 'Self' ? {
        source: 'Care Service 2026(1).pdf p.10', desc: selfDesc,
        details: [
          { text: 'จัดส่งน้ำยาล้างเครื่องซักผ้า', cycle: 'ทุก 12 เดือน' },
          { text: 'จัดส่งตัวกรองสิ่งสกปรก', cycle: 'ครบ 36 เดือน' }
        ]
      } : null;
    }

    if (category === 'เครื่องซักผ้า ฝาบน') {
      return serviceType === 'Visit' ? {
        source: 'Care Service 2026(1).pdf p.11', desc: visitDesc,
        details: [
          { text: 'ตรวจสอบผลิตภัณฑ์', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดลิ้นชักใส่น้ำยาซักผ้า', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดตัวกรอง', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดภายในและภายนอก', cycle: 'ทุก 12 เดือน' },
          { text: 'จัดส่งตัวกรองสิ่งสกปรก', cycle: 'ครบ 36 เดือน' },
          { text: 'ถอดและทำความสะอาดโดยแยกชิ้นส่วน', cycle: 'ครบ 36 และ 72 เดือน' }
        ]
      } : serviceType === 'Self' ? {
        source: 'Care Service 2026(1).pdf p.11', desc: selfDesc,
        details: [
          { text: 'จัดส่งน้ำยาล้างเครื่องซักผ้า', cycle: 'ทุก 12 เดือน' },
          { text: 'จัดส่งตัวกรองสิ่งสกปรก', cycle: 'ครบ 36 เดือน' }
        ]
      } : null;
    }

    if (category === 'เครื่องอบผ้า') {
      return serviceType === 'Visit' ? {
        source: 'Care Service 2026(1).pdf p.12', desc: visitDesc,
        details: [
          { text: 'ตัวกรองใยผ้า 2 ชั้น', cycle: 'หลังวันติดตั้ง' },
          { text: 'แผ่นถนอมผ้า 4 กล่อง', cycle: 'ทุก 12 เดือน' },
          { text: 'ตรวจสอบผลิตภัณฑ์', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดตัวกรองใยผ้า', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดภายในและภายนอก', cycle: 'ทุก 12 เดือน' },
          { text: 'ถอดและทำความสะอาดโดยแยกชิ้นส่วน', cycle: 'ครบ 36 และ 72 เดือน' }
        ]
      } : serviceType === 'Self' ? {
        source: 'Care Service 2026(1).pdf p.12', desc: selfDesc,
        details: [
          { text: 'จัดส่งตัวกรองใยผ้า 2 ชั้น', cycle: 'หลังวันติดตั้ง' },
          { text: 'จัดส่งแผ่นถนอมผ้า 4 กล่อง', cycle: 'ทุก 12 เดือน' }
        ]
      } : null;
    }

    if (category === 'เครื่องดูดฝุ่น' && serviceType === 'Self') {
      return {
        source: 'Care Service 2026(1).pdf p.15', desc: selfDesc,
        details: [
          { text: 'ถุงเก็บฝุ่น 4 ชิ้น', cycle: 'หลังวันติดตั้ง' },
          { text: 'จัดส่งถุงเก็บฝุ่น 6 ชิ้น', cycle: 'ทุก 12 เดือน' },
          { text: 'จัดส่งตัวกรองฝุ่น 1 ชุด', cycle: 'ทุก 12 เดือน' },
          { text: 'จัดส่งแบตเตอรี่ใหม่ 1 ก้อน', cycle: 'ครบ 36 เดือน' },
          { text: 'จัดส่งผ้าถูพื้น 1 คู่', cycle: 'ครบ 36 เดือน · เฉพาะรุ่นที่รองรับ' }
        ]
      };
    }

    if (category === 'เครื่องล้างจาน') {
      return serviceType === 'Visit' ? {
        source: 'Care Service 2026(1).pdf p.23', desc: visitDesc,
        details: [
          { text: 'ที่ตรวจสอบคุณภาพน้ำ', cycle: 'หลังวันติดตั้ง / ทุก 12 เดือน' },
          { text: 'เกลือ 4 แพ็ค', cycle: 'หลังวันติดตั้ง / ทุก 12 เดือน' },
          { text: 'ตัวกรองสิ่งสกปรก', cycle: 'ทุก 12 เดือน' },
          { text: 'ตรวจสอบผลิตภัณฑ์', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดภายในและภายนอก', cycle: 'ทุก 12 เดือน' }
        ]
      } : serviceType === 'Self' ? {
        source: 'Care Service 2026(1).pdf p.23', desc: selfDesc,
        details: [
          { text: 'จัดส่งตัวกรองสิ่งสกปรก', cycle: 'หลังวันติดตั้ง / ทุก 12 เดือน' },
          { text: 'จัดส่งที่ตรวจสอบคุณภาพน้ำ 1 ชิ้น', cycle: 'หลังวันติดตั้ง / ทุก 12 เดือน' },
          { text: 'จัดส่งเกลือ 4 แพ็ค', cycle: 'หลังวันติดตั้ง / ทุก 12 เดือน' }
        ]
      } : null;
    }

    if (category === 'ตู้ถนอมผ้า' && serviceType === 'Self') {
      return {
        source: 'Care Service 2026(1).pdf p.14 + business rule: Styler ทุกรุ่นใช้บริการเดียวกัน', desc: selfDesc,
        details: [
          { text: 'จัดส่งแผ่นน้ำหอม 4 กล่อง', cycle: 'หลังวันติดตั้ง' },
          { text: 'จัดส่งแผ่นน้ำหอม 4 กล่อง', cycle: 'ทุก 12 เดือน' },
          { text: 'จัดส่งถังจ่ายน้ำและถังระบายน้ำ', cycle: 'ครบ 36 เดือน' }
        ]
      };
    }

    if (/^ตู้เย็น /.test(category) && serviceType === 'Visit') {
      var plumbedRefrigerators = ['GC-X257CMHW', 'GC-L24FFCBB + MS2032GAS', 'GC-X24FFCRB'];
      if (plumbedRefrigerators.indexOf(model) !== -1) {
        return {
          source: 'Care Service 2026(1).pdf p.6 + business rule: plumbed refrigerator models', desc: visitDesc,
          details: [
            { text: 'เปลี่ยน Pre-Carbon Block Filter', cycle: 'ทุก 6 เดือน' },
            { text: 'เปลี่ยน UF Membrane Filter', cycle: 'ทุก 12 เดือน' },
            { text: 'เปลี่ยน Post Carbon Block Filter', cycle: 'ทุก 12 เดือน' },
            { text: 'ตรวจสอบผลิตภัณฑ์', cycle: 'ทุก 6 เดือน' },
            { text: 'ทำความสะอาดภายนอก', cycle: 'ทุก 6 เดือน' },
            { text: 'ทำความสะอาดขอบยางประตู', cycle: 'ทุก 6 เดือน' },
            { text: 'ทำความสะอาดคอมเพรสเซอร์', cycle: 'ทุก 6 เดือน' },
            { text: 'ทำความสะอาด Dispenser (ที่กดน้ำ)', cycle: 'ทุก 6 เดือน' },
            { text: 'ทำความสะอาดช่องทำน้ำแข็ง', cycle: 'ทุก 6 เดือน' },
            { text: 'เปลี่ยนตัวกรอง Deodorizing', cycle: 'ทุก 24 เดือน' }
          ]
        };
      }
      return {
        source: 'Care Service 2026(1).pdf p.5 + business rule: refrigerator models not classified as plumbed', desc: visitDesc,
        details: [
          { text: 'ตรวจสอบผลิตภัณฑ์', cycle: 'ทุก 2 ปี' },
          { text: 'ทำความสะอาดภายนอก', cycle: 'ทุก 2 ปี' },
          { text: 'ทำความสะอาดขอบยางประตู', cycle: 'ทุก 2 ปี' },
          { text: 'ทำความสะอาดคอมเพรสเซอร์', cycle: 'ทุก 2 ปี' },
          { text: 'ทำความสะอาด Dispenser (ที่กดน้ำ)', cycle: 'ทุก 2 ปี · เฉพาะรุ่นที่รองรับ' },
          { text: 'ทำความสะอาดช่องทำน้ำแข็ง', cycle: 'ทุก 2 ปี · เฉพาะรุ่นที่รองรับ' },
          { text: 'ทำความสะอาดแท็งก์น้ำ', cycle: 'ทุก 2 ปี · เฉพาะรุ่นที่รองรับ' },
          { text: 'เปลี่ยนตัวกรอง Deodorizing', cycle: 'ทุก 2 ปี · เฉพาะรุ่นที่รองรับ' }
        ]
      };
    }

    if (category === 'เครื่องลดความชื้น') {
      return serviceType === 'Visit' ? {
        source: 'Care Service 2026(1).pdf p.22', desc: visitDesc,
        details: [
          { text: 'เปลี่ยน Air Purification Kit', cycle: 'ทุก 12 เดือน' },
          { text: 'ตรวจสอบผลิตภัณฑ์', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดตัวเครื่อง', cycle: 'ทุก 12 เดือน' },
          { text: 'ทำความสะอาดถังน้ำ', cycle: 'ทุก 12 เดือน' },
          { text: 'เปลี่ยนถังเก็บน้ำแบบใส', cycle: 'ครบ 36 เดือน' }
        ]
      } : serviceType === 'Self' ? {
        source: 'Care Service 2026(1).pdf p.22', desc: selfDesc,
        details: [
          { text: 'จัดส่ง Air Purification Kit', cycle: 'ทุก 12 เดือน' },
          { text: 'จัดส่งถังเก็บน้ำแบบใส', cycle: 'ครบ 36 เดือน' }
        ]
      } : null;
    }

    if (['AS60GHWG0', 'AS65GDBY0', 'AS10GDBY0'].indexOf(model) !== -1) {
      return serviceType === 'Visit' ? {
        source: 'Care Service 2026(1).pdf p.17', desc: visitDesc,
        details: [
          { text: 'ทำความสะอาดภายในและภายนอก', cycle: 'ทุก 6 เดือน' },
          { text: 'ตรวจสอบเซนเซอร์จับฝุ่น', cycle: 'ทุก 6 เดือน' },
          { text: 'เปลี่ยน PRE-FILTER', cycle: 'ทุก 6 เดือน' },
          { text: 'เปลี่ยนไส้กรอง H13 HEPA/CARBON FILTER', cycle: 'ทุก 12 เดือน' }
        ]
      } : serviceType === 'Self' ? {
        source: 'Care Service 2026(1).pdf p.17', desc: selfDesc,
        details: [
          { text: 'จัดส่ง PRE-FILTER', cycle: 'ทุก 6 เดือน' },
          { text: 'จัดส่งไส้กรอง H13 HEPA/CARBON FILTER', cycle: 'ทุก 12 เดือน' }
        ]
      } : null;
    }

    if (model === 'AS35GGW10') {
      return serviceType === 'Visit' ? {
        source: 'Care Service 2026(1).pdf p.18', desc: visitDesc,
        details: [
          { text: 'ทำความสะอาดภายในและภายนอก', cycle: 'ทุก 6 เดือน' },
          { text: 'ตรวจสอบเซนเซอร์จับฝุ่น', cycle: 'ทุก 6 เดือน' },
          { text: 'เปลี่ยน PRE-FILTER', cycle: 'ทุก 6 เดือน' },
          { text: 'เปลี่ยนไส้กรอง H13 HEPA/CARBON FILTER', cycle: 'ทุก 12 เดือน' }
        ]
      } : serviceType === 'Self' ? {
        source: 'Care Service 2026(1).pdf p.18', desc: selfDesc,
        details: [
          { text: 'จัดส่ง PRE-FILTER', cycle: 'ทุก 6 เดือน' },
          { text: 'จัดส่งไส้กรอง H13 HEPA/CARBON FILTER', cycle: 'ทุก 12 เดือน' }
        ]
      } : null;
    }

    if (/^เครื่องปรับอากาศ (IXY|SIQ|SAQ|ART)$/.test(category) && serviceType === 'Visit') {
      return {
        source: 'Care Service 2026(1).pdf p.24', desc: visitDesc,
        details: [
          { text: 'ทำความสะอาดตัวเครื่องและหน้ากากแอร์', cycle: 'ทุก 6 เดือน' },
          { text: 'ทำความสะอาดแผ่นกรองฝุ่น Pre Filter', cycle: 'ทุก 6 เดือน' },
          { text: 'ตรวจสอบประสิทธิภาพผลิตภัณฑ์', cycle: 'ทุก 6 เดือน' },
          { text: 'ตรวจเช็คเซ็นเซอร์', cycle: 'ทุก 6 เดือน' },
          { text: 'ตรวจเช็คน้ำยาทำความเย็น', cycle: 'ทุก 6 เดือน' },
          { text: 'ทำความสะอาดคอยล์เย็นและพัดลมโพรงกระรอก', cycle: 'ทุก 6 เดือน' },
          { text: 'ฉายรังสี UV ที่แผงคอยล์เย็นเพื่อกำจัดเชื้อโรค', cycle: 'ทุก 6 เดือน' },
          { text: 'เปลี่ยนแผ่นกรองฝุ่น PM 2.5', cycle: 'ทุก 6 เดือน' },
          { text: 'ทำความสะอาดล้างใหญ่', cycle: 'ทุก 12 เดือน' }
        ]
      };
    }

    if (/^เครื่องปรับอากาศ SAC /.test(category) && serviceType === 'Visit') {
      return {
        source: 'Care Service 2026(1).pdf p.25', desc: visitDesc,
        details: [
          { text: 'เข้าบริการตรวจเช็คและบำรุงรักษา', cycle: 'ทุก 4 เดือน' },
          { text: 'ทำความสะอาดแผ่นกรองอากาศ (Filter)', cycle: 'ทุก 4 เดือน' },
          { text: 'ทำความสะอาดตัวเครื่องคอยล์เย็นและหน้ากากแอร์', cycle: 'ทุก 4 เดือน' },
          { text: 'ตรวจวัดอุณหภูมิ Supply และ Return', cycle: 'ทุก 4 เดือน' },
          { text: 'ตรวจเช็คมอเตอร์พัดลมชุดคอยล์เย็นและคอยล์ร้อน', cycle: 'ทุก 4 เดือน' },
          { text: 'ตรวจเช็คจุดเชื่อมต่อระบบไฟฟ้า', cycle: 'ทุก 4 เดือน' },
          { text: 'ตรวจเช็คท่อน้ำยาและฉนวนหุ้มท่อ', cycle: 'ทุก 4 เดือน' },
          { text: 'งาน Major Cleaning / ตรวจระบบเชิงลึก', cycle: 'ทุก 12 เดือน' }
        ]
      };
    }

    return null;
  }

  function careInfo(product, serviceType) {
    var fallback = CARE_INFO[serviceType] || { label: serviceType, short: serviceType, desc: '' };
    if (!product || serviceType === 'No Service') return fallback;
    var override = CARE_DETAIL_OVERRIDES[product.model] && CARE_DETAIL_OVERRIDES[product.model][serviceType];
    if (override) return {
      label: fallback.label,
      short: fallback.short,
      desc: override.desc,
      details: override.details,
      source: override.source || 'Care Service — ข้อมูลยืนยันเฉพาะรุ่น'
    };
    var documented = documentedCareInfo(product, serviceType);
    if (documented) return {
      label: fallback.label,
      short: fallback.short,
      desc: documented.desc,
      details: documented.details,
      source: documented.source
    };

    var cycles = (product.plans || [])
      .filter(function (plan) { return plan.serviceType === serviceType && plan.serviceCycle && plan.serviceCycle !== 'ไม่มีบริการ'; })
      .map(function (plan) { return plan.serviceCycle; });
    cycles = cycles.filter(function (cycle, index) { return cycles.indexOf(cycle) === index; });

    var cycleText = cycles.length === 1
      ? cycles[0]
      : (cycles.length > 1 ? cycles.join(' / ') + ' ตามแพ็กเกจที่เลือก' : 'ตามเงื่อนไขของแพ็กเกจ');
    var source = (product.plans || []).find(function (plan) {
      return plan.serviceType === serviceType && plan.serviceSource;
    });

    var desc = serviceType === 'Visit'
      ? 'บริการดูแลโดยผู้เชี่ยวชาญ LG ตามรอบของแพ็กเกจที่เลือก'
      : 'แพ็กเกจดูแลด้วยตัวเองตามรอบของแพ็กเกจที่เลือก';

    return {
      label: fallback.label,
      short: fallback.short,
      desc: desc,
      details: [
        { text: serviceType === 'Visit' ? 'รอบเข้าดูแล' : 'รอบการดูแล', cycle: cycleText },
        { text: 'รายละเอียดงานบริการ/อุปกรณ์', cycle: 'ขึ้นอยู่กับรุ่นและเงื่อนไขแพ็กเกจ' }
      ],
      source: source ? source.serviceSource : ''
    };
  }

  /* ---------- ตัวเลือกที่สินค้ารองรับ ---------- */
  function planTypes(product) {
    var hasOut = (product.plans || []).some(function (p) { return p.outright; });
    return hasOut ? ['monthly', 'outright'] : ['monthly'];
  }
  function careTypes(product, planType) {
    var pt = planType || 'monthly';
    var sts = (product.plans || [])
      .filter(function (p) { return pt === 'outright' ? !!p.outright : !p.outright; })
      .map(function (p) { return p.serviceType; });
    return Array.from(new Set(sts));
  }
  function terms(product, planType, careType) {
    var pt = planType || 'monthly';
    return Array.from(new Set((product.plans || [])
      .filter(function (p) {
        if (pt === 'outright') return !!p.outright;
        if (p.outright) return false;
        if (careType && p.serviceType !== careType) return false;
        return true;
      })
      .map(function (p) { return p.totalContractMonths; })))
      .sort(function (a, b) { return a - b; });
  }

  function promoKey(p) { return 'โปร ' + (p.promoMonths || 0) + ' เดือน'; }

  // แผนที่ตรงกับ selection (ยังไม่รวม variant) — ใช้ filter ต่อยอด
  function filterPlans(product, sel) {
    var s = sel || {};
    var pt = s.planType || 'monthly';
    return (product.plans || []).filter(function (p) {
      if (pt === 'outright') { if (!p.outright) return false; }
      else if (p.outright) return false;
      if (s.careType && p.serviceType !== s.careType) return false;
      if (s.term && Number(p.totalContractMonths) !== Number(s.term)) return false;
      if (s.variant) {
        if (s.variant.indexOf('cycle:') === 0) return p.serviceCycle === s.variant.slice(6);
        if (s.variant.indexOf('promo:') === 0) return promoKey(p) === s.variant.slice(6);
        return false;
      }
      return true;
    });
  }

  // เมื่อ (planType, careType, term) เหลือหลายแผน — variant ที่ต้องเลือกเพิ่ม (รอบบริการ / โปรโมชัน)
  function variantOptions(plans) {
    if (!plans || plans.length <= 1) return [];
    var byCycle = {};
    var byPromo = {};
    plans.forEach(function (p) {
      var c = p.serviceCycle || 'ไม่มีบริการ';
      (byCycle[c] = byCycle[c] || []).push(p);
      var k = promoKey(p);
      (byPromo[k] = byPromo[k] || []).push(p);
    });
    var cycleKeys = Object.keys(byCycle);
    if (cycleKeys.length > 1) {
      return cycleKeys.map(function (c) {
        var ps = byCycle[c];
        return { key: 'cycle:' + c, label: c, hint: 'รอบการดูแล', plans: ps };
      });
    }
    var promoKeys = Object.keys(byPromo);
    if (promoKeys.length > 1) {
      return promoKeys.map(function (k) {
        var ps = byPromo[k];
        return { key: 'promo:' + k, label: k, hint: 'โปรโมชัน', plans: ps };
      });
    }
    return [];
  }

  // แผนเดียวที่เลือกได้ — -1 ถ้ายังไม่ครบ / ยังกำกวม (ต้องเลือก variant)
  function resolvePlanIndex(product, sel) {
    if (!sel || !sel.careType || !sel.term) return -1;
    var plans = filterPlans(product, sel);
    if (plans.length === 1) return product.plans.indexOf(plans[0]);
    if (plans.length > 1 && sel.variant) return product.plans.indexOf(plans[0]);
    return -1;
  }
  function resolvedPlan(product, sel) {
    var i = resolvePlanIndex(product, sel);
    return i >= 0 ? product.plans[i] : null;
  }
  // ใส่ตะกร้าได้เมื่อ: เลือกลูกค้า + การดูแล + สัญญา และ resolve ได้แผนเดียว
  function isComplete(product, sel) {
    return !!(sel && sel.customerType && sel.careType && sel.term && resolvedPlan(product, sel));
  }
  // ยังขาดอะไร (สำหรับแสดงคำใบ้)
  function missing(product, sel) {
    var s = sel || {};
    var miss = [];
    if (!s.customerType) miss.push('ข้อมูลลูกค้า');
    if (!s.careType) miss.push('ประเภทการดูแล');
    if (!s.term) miss.push('ระยะเวลาสัญญา');
    if (s.careType && s.term && !resolvedPlan(product, s)) miss.push('ตัวเลือกเพิ่มเติม (รอบบริการ/โปรโมชัน)');
    return miss;
  }

  /* ---------- คอมโบ (ช่วงเวลา + ประเภทลูกค้า) — ใช้ร่วมกับหน้าตะกร้า ---------- */
  function activePromo(now) {
    return LG.isDateInRange(PROMOS.special.dateStart, PROMOS.special.dateEnd, now)
      ? PROMOS.special : PROMOS.normal;
  }
  function comboInfo(customerType, cartQty, settings, now) {
    var n = Number(cartQty) || 0;
    var promo = activePromo(now);
    var s = settings || {};
    var tiers;
    if (promo === PROMOS.special) {
      tiers = customerType === 'old' ? [{ min: 1, rate: 15 }] : [{ min: 2, rate: 15 }];
    } else {
      tiers = customerType === 'old'
        ? [{ min: s.oldMin || 1, rate: s.comboPct || 10 }]
        : [{ min: s.newMin || 2, rate: s.comboPct || 10 }];
    }
    var need = LG.minTierItems(tiers);
    return {
      promo: promo, tiers: tiers,
      rate: LG.comboRateFor(tiers, n),
      needed: n >= need ? 0 : need - n,
      special: promo === PROMOS.special
    };
  }

  /* ---------- แปลงแผน → item (รวม shock 8.8) ---------- */
  function planToItem(product, plan, now) {
    var p = LG.applyShockPromoToPlan(plan, PROMOS.shock, now);
    return Object.assign({}, p, { productId: product.id, category: product.category, code: product.model });
  }

  /* ---------- สรุปราคาสำหรับกล่องสรุป PDP ----------
     ใช้ฟังก์ชันเดียวกับหน้าตะกร้า (LG.itemComboSchedule / itemFirstPayment /
     itemTotalContract / buildBills) — cartQty = จำนวนเครื่องในตะกร้าตอนนี้ (ยังไม่รวมรายการนี้) */
  function itemSummary(product, planIndex, customerType, cartQty, settings, now) {
    var plan = product.plans[planIndex];
    var item = planToItem(product, plan, now);
    var qtyAfter = (Number(cartQty) || 0) + 1;
    var info = comboInfo(customerType, qtyAfter, settings, now);
    var cr = info.rate;
    var sched = LG.itemComboSchedule(item, cr);
    var segments = LG.groupBills(sched.bills);
    var firstPay = LG.itemFirstPayment(item, cr);
    var contract = LG.itemTotalContract(item, cr);
    // ยอดไม่มีคอมโบ (ราคาตาม billSchedule ล้วน)
    var noCombo = item.advancePayment || 0;
    if (!item.outright) noCombo += LG.buildBills(item).reduce(function (s2, p2) { return s2 + p2; }, 0);
    var comboSaving = LG.round2(noCombo - contract);
    var totalSaving = LG.round2((plan.totalSaving || 0) + comboSaving);

    // ราคา "เดือนนี้" (จ่ายจริงงวดแรก) + ราคาเต็มสำหรับขีดฆ่า
    var big = null, bigLabel = '', strike = null, strikeLabel = '';
    if (item.outright) {
      big = item.advancePayment || item.price;
      bigLabel = 'จ่ายครั้งเดียว';
      strike = item.regular || item.price;
      var pct = strike > 0 ? Math.round((1 - big / strike) * 100) : 0;
      strikeLabel = pct > 0 ? 'ลด ' + pct + '%' : '';
    } else if (item.advancePayment > 0) {
      big = item.advancePayment;
      bigLabel = 'จ่ายล่วงหน้า 12 เดือน (50%)';
      strike = LG.round2(item.postPromoPrice * 12);
      strikeLabel = 'ปกติ 12 เดือนแรก';
    } else {
      var b1 = sched.bills.length ? sched.bills[0].price : item.effectiveMonthly;
      big = b1;
      bigLabel = 'บิลแรก' + (item.promoMonths === 1 ? '' : ' (งวด 1)');
      strike = item.postPromoPrice;
      strikeLabel = '/เดือน (หลังโปร)';
    }

    return {
      plan: plan, item: item, combo: info,
      comboRate: cr, comboDiscount: LG.comboDiscount(LG.totalMonthly([item]), cr),
      sched: sched, segments: segments,
      firstPay: firstPay, contract: contract, noCombo: noCombo,
      comboSaving: comboSaving, totalSaving: totalSaving,
      big: big, bigLabel: bigLabel, strike: strike, strikeLabel: strikeLabel,
      monthlyAfter: item.outright ? 0 : item.postPromoPrice,
      promoText: plan.promo || '',
      termMonths: item.totalContractMonths
    };
  }

  /* ---------- slug / ค้นหา ---------- */
  function slugFor(product) { return String(product.id || product.model || '').toLowerCase(); }
  function findBySlug(products, slug) {
    var s = String(slug || '').toLowerCase();
    for (var i = 0; i < products.length; i++) {
      var p = products[i];
      if (slugFor(p) === s || String(p.model || '').toLowerCase() === s) return p;
    }
    return null;
  }

  return {
    PROMOS: PROMOS, CARE_INFO: CARE_INFO, careInfo: careInfo,
    planTypes: planTypes, careTypes: careTypes, terms: terms,
    filterPlans: filterPlans, variantOptions: variantOptions,
    resolvePlanIndex: resolvePlanIndex, resolvedPlan: resolvedPlan,
    isComplete: isComplete, missing: missing,
    activePromo: activePromo, comboInfo: comboInfo,
    planToItem: planToItem, itemSummary: itemSummary,
    slugFor: slugFor, findBySlug: findBySlug
  };
});

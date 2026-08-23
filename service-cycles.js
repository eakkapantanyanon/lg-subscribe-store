/* Generated from docs/audits/price-reconciliation-report.json
   Source: Price list_Aug_V3.pdf. WD516AN/WD518AN Outright 2Y includes a documented manual reconciliation in docs/audits/care-service-source-register.md. */
(function(){'use strict';
var map={
  "WD516AN|Visit|24|34110": {
    "cycle": "ทุก 6 เดือน",
    "page": 3
  },
  "WD516AN|Self|24|31410": {
    "cycle": "ทุก 6 เดือน",
    "page": 3
  },
  "WD516AN|Visit|60|799": {
    "cycle": "ทุก 6 เดือน",
    "page": 4
  },
  "WD516AN|Self|60|699": {
    "cycle": "ทุก 6 เดือน",
    "page": 4
  },
  "WD516AN|Visit|84|599": {
    "cycle": "ทุก 6 เดือน",
    "page": 4
  },
  "WD516AN|Self|84|499": {
    "cycle": "ทุก 6 เดือน",
    "page": 4
  },
  "WD518AN|Visit|24|34110": {
    "cycle": "ทุก 6 เดือน",
    "page": 3
  },
  "WD518AN|Self|24|31410": {
    "cycle": "ทุก 6 เดือน",
    "page": 3
  },
  "WD518AN|Visit|60|799": {
    "cycle": "ทุก 6 เดือน",
    "page": 4
  },
  "WD518AN|Self|60|699": {
    "cycle": "ทุก 6 เดือน",
    "page": 4
  },
  "WD518AN|Visit|84|599": {
    "cycle": "ทุก 6 เดือน",
    "page": 4
  },
  "WD518AN|Self|84|499": {
    "cycle": "ทุก 6 เดือน",
    "page": 4
  },
  "WD110MN|Visit|60|549": {
    "cycle": "ทุก 6 เดือน",
    "page": 4
  },
  "WD110MN|Self|60|499": {
    "cycle": "ทุก 6 เดือน",
    "page": 4
  },
  "WD110MN|Visit|84|449": {
    "cycle": "ทุก 6 เดือน",
    "page": 4
  },
  "WD110MN|Self|84|399": {
    "cycle": "ทุก 6 เดือน",
    "page": 4
  },
  "A9T-ULTRA|Self|60|749": {
    "cycle": "ทุก 12 เดือน",
    "page": 5
  },
  "A9T-CORE|Self|60|649": {
    "cycle": "ทุก 12 เดือน",
    "page": 5
  },
  "A9T-LITE|Self|60|549": {
    "cycle": "ทุก 12 เดือน",
    "page": 5
  },
  "GC-L257KQKW|Visit|60|749": {
    "cycle": "ทุก 24 เดือน",
    "page": 2
  },
  "GC-L257KQKW|Visit|72|649": {
    "cycle": "ทุก 24 เดือน",
    "page": 2
  },
  "GC-B257SQYL|Visit|60|549": {
    "cycle": "ทุก 24 เดือน",
    "page": 3
  },
  "GC-B257SQYL|Visit|72|449": {
    "cycle": "ทุก 24 เดือน",
    "page": 3
  },
  "GC-X257CMHW|Visit|60|1449": {
    "cycle": "ทุก 6 เดือน",
    "page": 7
  },
  "GC-X257CMHW|Visit|72|1249": {
    "cycle": "ทุก 6 เดือน",
    "page": 7
  },
  "GC-L257SFZW|Visit|60|849": {
    "cycle": "ทุก 24 เดือน",
    "page": 7
  },
  "GC-L257SFZW|Visit|72|749": {
    "cycle": "ทุก 24 เดือน",
    "page": 7
  },
  "GC-X257CMEW|Visit|60|1249": {
    "cycle": "ทุก 24 เดือน",
    "page": 8
  },
  "GC-X257CMEW|Visit|72|1049": {
    "cycle": "ทุก 24 เดือน",
    "page": 8
  },
  "GC-J257SQZW|Visit|60|1049": {
    "cycle": "ทุก 24 เดือน",
    "page": 8
  },
  "GC-J257SQZW|Visit|72|899": {
    "cycle": "ทุก 24 เดือน",
    "page": 8
  },
  "GV-B25FFGDB|Visit|60|699": {
    "cycle": "ทุก 24 เดือน",
    "page": 2
  },
  "GV-B25FFGDB|Visit|72|599": {
    "cycle": "ทุก 24 เดือน",
    "page": 2
  },
  "GC-L24FFCBB + MS2032GAS|Visit|60|1249": {
    "cycle": "ทุก 6 เดือน",
    "page": 6
  },
  "GC-L24FFCBB + MS2032GAS|Visit|72|1049": {
    "cycle": "ทุก 6 เดือน",
    "page": 6
  },
  "GC-G24FFQKB|Visit|60|1349": {
    "cycle": "ทุก 24 เดือน",
    "page": 9
  },
  "GC-G24FFQKB|Visit|72|1149": {
    "cycle": "ทุก 24 เดือน",
    "page": 9
  },
  "GC-V22FFQMB|Visit|60|949": {
    "cycle": "ทุก 24 เดือน",
    "page": 9
  },
  "GC-V22FFQMB|Visit|72|799": {
    "cycle": "ทุก 24 เดือน",
    "page": 9
  },
  "GC-B48FPGAM|Visit|60|799": {
    "cycle": "ทุก 24 เดือน",
    "page": 10
  },
  "GC-B48FPGAM|Visit|72|699": {
    "cycle": "ทุก 24 เดือน",
    "page": 10
  },
  "GV-V25FFGRB|Visit|60|999": {
    "cycle": "ทุก 24 เดือน",
    "page": 11
  },
  "GV-V25FFGRB|Visit|72|949": {
    "cycle": "ทุก 24 เดือน",
    "page": 11
  },
  "GN-F392PQAK|Visit|60|449": {
    "cycle": "ทุก 24 เดือน",
    "page": 3
  },
  "GN-F392PQAK|Visit|72|349": {
    "cycle": "ทุก 24 เดือน",
    "page": 3
  },
  "GN-F452PQAK|Visit|60|599": {
    "cycle": "ทุก 24 เดือน",
    "page": 12
  },
  "GN-F452PQAK|Visit|72|499": {
    "cycle": "ทุก 24 เดือน",
    "page": 12
  },
  "GN-V389FQEF|Visit|60|649": {
    "cycle": "ทุก 24 เดือน",
    "page": 12
  },
  "GN-V389FQEF|Visit|72|549": {
    "cycle": "ทุก 24 เดือน",
    "page": 12
  },
  "WT2520NHEG|Visit|60|2399": {
    "cycle": "ทุก 12 เดือน",
    "page": 13
  },
  "WT2520NHEG|Self|60|2199": {
    "cycle": "ทุก 12 เดือน",
    "page": 13
  },
  "WT2520NHEG|Visit|72|2199": {
    "cycle": "ทุก 12 เดือน",
    "page": 13
  },
  "WT2520NHEG|Self|72|1999": {
    "cycle": "ทุก 12 เดือน",
    "page": 13
  },
  "WT2116SHEG|Visit|60|1999": {
    "cycle": "ทุก 12 เดือน",
    "page": 15
  },
  "WT2116SHEG|Self|60|1899": {
    "cycle": "ทุก 12 เดือน",
    "page": 15
  },
  "WT2116SHEG|Visit|72|1749": {
    "cycle": "ทุก 12 เดือน",
    "page": 15
  },
  "WT2116SHEG|Self|72|1649": {
    "cycle": "ทุก 12 เดือน",
    "page": 15
  },
  "WT1410NHEG|Visit|60|1599": {
    "cycle": "ทุก 12 เดือน",
    "page": 16
  },
  "WT1410NHEG|Self|60|1499": {
    "cycle": "ทุก 12 เดือน",
    "page": 16
  },
  "WT1410NHEG|Visit|72|1399": {
    "cycle": "ทุก 12 เดือน",
    "page": 16
  },
  "WT1410NHEG|Self|72|1299": {
    "cycle": "ทุก 12 เดือน",
    "page": 16
  },
  "WT2520NHEN|Visit|60|2399": {
    "cycle": "ทุก 12 เดือน",
    "page": 14
  },
  "WT2520NHEN|Self|60|2199": {
    "cycle": "ทุก 12 เดือน",
    "page": 14
  },
  "WT2520NHEN|Visit|72|2199": {
    "cycle": "ทุก 12 เดือน",
    "page": 14
  },
  "WT2520NHEN|Self|72|1999": {
    "cycle": "ทุก 12 เดือน",
    "page": 14
  },
  "WT1410NHEN|Visit|60|1599": {
    "cycle": "ทุก 12 เดือน",
    "page": 17
  },
  "WT1410NHEN|Self|60|1499": {
    "cycle": "ทุก 12 เดือน",
    "page": 17
  },
  "WT1410NHEN|Visit|72|1399": {
    "cycle": "ทุก 12 เดือน",
    "page": 17
  },
  "WT1410NHEN|Self|72|1299": {
    "cycle": "ทุก 12 เดือน",
    "page": 17
  },
  "FV1409H4W|Visit|60|399": {
    "cycle": "ทุก 12 เดือน",
    "page": 4
  },
  "FV1409H4W|Self|60|349": {
    "cycle": "ทุก 12 เดือน",
    "page": 4
  },
  "FV1409H4W|Visit|72|349": {
    "cycle": "ทุก 12 เดือน",
    "page": 4
  },
  "FV1409H4W|Self|72|299": {
    "cycle": "ทุก 12 เดือน",
    "page": 4
  },
  "F2520RNTB|Visit|60|899": {
    "cycle": "ทุก 12 เดือน",
    "page": 18
  },
  "F2520RNTB|Self|60|849": {
    "cycle": "ทุก 12 เดือน",
    "page": 18
  },
  "F2520RNTB|Visit|72|849": {
    "cycle": "ทุก 12 เดือน",
    "page": 18
  },
  "F2520RNTB|Self|72|799": {
    "cycle": "ทุก 12 เดือน",
    "page": 18
  },
  "FV1413H4M|Visit|60|749": {
    "cycle": "ทุก 12 เดือน",
    "page": 19
  },
  "FV1413H4M|Self|60|649": {
    "cycle": "ทุก 12 เดือน",
    "page": 19
  },
  "FV1413H4M|Visit|72|649": {
    "cycle": "ทุก 12 เดือน",
    "page": 19
  },
  "FV1413H4M|Self|72|599": {
    "cycle": "ทุก 12 เดือน",
    "page": 19
  },
  "FV1413S4M|Visit|60|699": {
    "cycle": "ทุก 12 เดือน",
    "page": 20
  },
  "FV1413S4M|Self|60|599": {
    "cycle": "ทุก 12 เดือน",
    "page": 20
  },
  "FV1413S4M|Visit|72|599": {
    "cycle": "ทุก 12 เดือน",
    "page": 20
  },
  "FV1413S4M|Self|72|549": {
    "cycle": "ทุก 12 เดือน",
    "page": 20
  },
  "TX2723ST5J|Visit|60|649": {
    "cycle": "ทุก 12 เดือน",
    "page": 21
  },
  "TX2723ST5J|Self|60|599": {
    "cycle": "ทุก 12 เดือน",
    "page": 21
  },
  "TX2723ST5J|Visit|72|599": {
    "cycle": "ทุก 12 เดือน",
    "page": 21
  },
  "TX2723ST5J|Self|72|549": {
    "cycle": "ทุก 12 เดือน",
    "page": 21
  },
  "TX2315DT5G|Visit|60|549": {
    "cycle": "ทุก 12 เดือน",
    "page": 22
  },
  "TX2315DT5G|Self|60|449": {
    "cycle": "ทุก 12 เดือน",
    "page": 22
  },
  "TX2315DT5G|Visit|72|499": {
    "cycle": "ทุก 12 เดือน",
    "page": 22
  },
  "TX2315DT5G|Self|72|399": {
    "cycle": "ทุก 12 เดือน",
    "page": 22
  },
  "RV10VHP2B|Visit|60|849": {
    "cycle": "ทุก 12 เดือน",
    "page": 23
  },
  "RV10VHP2B|Self|60|749": {
    "cycle": "ทุก 12 เดือน",
    "page": 23
  },
  "RV10VHP2B|Visit|72|749": {
    "cycle": "ทุก 12 เดือน",
    "page": 23
  },
  "RV10VHP2B|Self|72|649": {
    "cycle": "ทุก 12 เดือน",
    "page": 23
  },
  "DFC335HM|Visit|60|899": {
    "cycle": "ทุก 12 เดือน",
    "page": 24
  },
  "DFC335HM|Self|60|849": {
    "cycle": "ทุก 12 เดือน",
    "page": 24
  },
  "DFC335HM|Visit|72|799": {
    "cycle": "ทุก 12 เดือน",
    "page": 24
  },
  "DFC335HM|Self|72|749": {
    "cycle": "ทุก 12 เดือน",
    "page": 24
  },
  "DFC533FV + MS2032GAS|Visit|60|749": {
    "cycle": "ทุก 12 เดือน",
    "page": 25
  },
  "DFC533FV + MS2032GAS|Self|60|699": {
    "cycle": "ทุก 12 เดือน",
    "page": 25
  },
  "DFC533FV + MS2032GAS|Visit|72|649": {
    "cycle": "ทุก 12 เดือน",
    "page": 25
  },
  "DFC533FV + MS2032GAS|Self|72|599": {
    "cycle": "ทุก 12 เดือน",
    "page": 25
  },
  "S3MFC|Self|60|899": {
    "cycle": "ทุก 12 เดือน",
    "page": 26
  },
  "S3MFC|Self|72|799": {
    "cycle": "ทุก 12 เดือน",
    "page": 26
  },
  "MS3032JAS|No Service|72|89": {
    "cycle": "ไม่มีบริการ",
    "page": 27
  },
  "MD19GQGA1|Visit|60|449": {
    "cycle": "ทุก 12 เดือน",
    "page": 5
  },
  "MD19GQGA1|Self|60|399": {
    "cycle": "ทุก 12 เดือน",
    "page": 5
  },
  "DD23GMWE1 + AS30GGW10|Visit|60|599": {
    "cycle": "ทุก 12 เดือน",
    "page": 28
  },
  "DD23GMWE1 + AS30GGW10|Self|60|549": {
    "cycle": "ทุก 12 เดือน",
    "page": 28
  },
  "AS35GGW10|Visit|60|249": {
    "cycle": "ทุก 6 เดือน",
    "page": 6
  },
  "AS35GGW10|Self|60|199": {
    "cycle": "ทุก 6 เดือน",
    "page": 6
  },
  "AS25GCBY0|Visit|60|599": {
    "cycle": "ทุก 12 เดือน",
    "page": 29
  },
  "AS25GCBY0|Self|60|549": {
    "cycle": "ทุก 12 เดือน",
    "page": 29
  },
  "AS60GHWG0|Visit|60|449": {
    "cycle": "ทุก 12 เดือน",
    "page": 30
  },
  "AS60GHWG0|Self|60|399": {
    "cycle": "ทุก 12 เดือน",
    "page": 30
  },
  "AS60GHWG0|Visit|60|499": {
    "cycle": "ทุก 6 เดือน",
    "page": 30
  },
  "AS60GHWG0|Self|60|449": {
    "cycle": "ทุก 6 เดือน",
    "page": 30
  },
  "AS65GDBY0|Visit|60|749": {
    "cycle": "ทุก 12 เดือน",
    "page": 31
  },
  "AS65GDBY0|Self|60|699": {
    "cycle": "ทุก 12 เดือน",
    "page": 31
  },
  "AS65GDBY0|Visit|60|799": {
    "cycle": "ทุก 6 เดือน",
    "page": 31
  },
  "AS65GDBY0|Self|60|749": {
    "cycle": "ทุก 6 เดือน",
    "page": 31
  },
  "AS10GDBY0|Visit|60|1149": {
    "cycle": "ทุก 12 เดือน",
    "page": 32
  },
  "AS10GDBY0|Self|60|1099": {
    "cycle": "ทุก 12 เดือน",
    "page": 32
  },
  "AS10GDBY0|Visit|60|1199": {
    "cycle": "ทุก 6 เดือน",
    "page": 32
  },
  "AS10GDBY0|Self|60|1149": {
    "cycle": "ทุก 6 เดือน",
    "page": 32
  },
  "IXY11A|Visit|60|499": {
    "cycle": "ทุก 6 เดือน",
    "page": 7
  },
  "IXY11A|Visit|60|399": {
    "cycle": "ทุก 12 เดือน",
    "page": 7
  },
  "IXY13A|Visit|60|549": {
    "cycle": "ทุก 6 เดือน",
    "page": 7
  },
  "IXY13A|Visit|60|449": {
    "cycle": "ทุก 12 เดือน",
    "page": 7
  },
  "IXY18A|Visit|60|699": {
    "cycle": "ทุก 6 เดือน",
    "page": 7
  },
  "IXY18A|Visit|60|599": {
    "cycle": "ทุก 12 เดือน",
    "page": 7
  },
  "IXY24A|Visit|60|849": {
    "cycle": "ทุก 6 เดือน",
    "page": 7
  },
  "IXY24A|Visit|60|749": {
    "cycle": "ทุก 12 เดือน",
    "page": 7
  },
  "SIQ11B|Visit|60|699": {
    "cycle": "ทุก 6 เดือน",
    "page": 36
  },
  "SIQ11B|Visit|60|599": {
    "cycle": "ทุก 12 เดือน",
    "page": 36
  },
  "SIQ13B|Visit|60|799": {
    "cycle": "ทุก 6 เดือน",
    "page": 36
  },
  "SIQ13B|Visit|60|699": {
    "cycle": "ทุก 12 เดือน",
    "page": 36
  },
  "SIQ18B|Visit|60|999": {
    "cycle": "ทุก 6 เดือน",
    "page": 37
  },
  "SIQ18B|Visit|60|899": {
    "cycle": "ทุก 12 เดือน",
    "page": 37
  },
  "SIQ24B|Visit|60|1199": {
    "cycle": "ทุก 6 เดือน",
    "page": 37
  },
  "SIQ24B|Visit|60|1099": {
    "cycle": "ทุก 12 เดือน",
    "page": 37
  },
  "SAQ11A|Visit|60|899": {
    "cycle": "ทุก 6 เดือน",
    "page": 34
  },
  "SAQ11A|Visit|60|799": {
    "cycle": "ทุก 12 เดือน",
    "page": 34
  },
  "SAQ13A|Visit|60|949": {
    "cycle": "ทุก 6 เดือน",
    "page": 34
  },
  "SAQ13A|Visit|60|849": {
    "cycle": "ทุก 12 เดือน",
    "page": 34
  },
  "SAQ18B|Visit|60|1149": {
    "cycle": "ทุก 6 เดือน",
    "page": 35
  },
  "SAQ18B|Visit|60|1049": {
    "cycle": "ทุก 12 เดือน",
    "page": 35
  },
  "SAQ24B|Visit|60|1299": {
    "cycle": "ทุก 6 เดือน",
    "page": 35
  },
  "SAQ24B|Visit|60|1199": {
    "cycle": "ทุก 12 เดือน",
    "page": 35
  },
  "ART13A.SR1|Visit|60|1049": {
    "cycle": "ทุก 6 เดือน",
    "page": 33
  },
  "ART13A.SR1|Visit|60|949": {
    "cycle": "ทุก 12 เดือน",
    "page": 33
  },
  "ART18A.SR1|Visit|60|1249": {
    "cycle": "ทุก 6 เดือน",
    "page": 33
  },
  "ART18A.SR1|Visit|60|1149": {
    "cycle": "ทุก 12 เดือน",
    "page": 33
  },
  "ZT4Q18GPLA1|Visit|60|1899": {
    "cycle": "ทุก 4 เดือน",
    "page": 38
  },
  "ZT4Q24GPLA1|Visit|60|1949": {
    "cycle": "ทุก 4 เดือน",
    "page": 38
  },
  "ZT4Q36GNLA1|Visit|60|2349": {
    "cycle": "ทุก 4 เดือน",
    "page": 38
  },
  "ZT4Q48GMLA1|Visit|60|2499": {
    "cycle": "ทุก 4 เดือน",
    "page": 38
  },
  "ZT1Q12GULA1|Visit|60|1499": {
    "cycle": "ทุก 4 เดือน",
    "page": 39
  },
  "ZT1Q18GTLA1|Visit|60|1599": {
    "cycle": "ทุก 4 เดือน",
    "page": 39
  },
  "ZT1Q24GTLA1|Visit|60|1799": {
    "cycle": "ทุก 4 เดือน",
    "page": 39
  },
  "ZTRQ36GYLA1|Visit|60|2599": {
    "cycle": "ทุก 4 เดือน",
    "page": 40
  },
  "ZTRQ48GYLA1|Visit|60|2799": {
    "cycle": "ทุก 4 เดือน",
    "page": 40
  },
  "OLED48C6PSA|No Service|60|749": {
    "cycle": "ไม่มีบริการ",
    "page": 8
  },
  "OLED55C6PSA|No Service|60|1099": {
    "cycle": "ไม่มีบริการ",
    "page": 44
  },
  "OLED65C6PSA|No Service|60|1299": {
    "cycle": "ไม่มีบริการ",
    "page": 44
  },
  "OLED77C6PSA|No Service|60|1999": {
    "cycle": "ไม่มีบริการ",
    "page": 44
  },
  "OLED77C6PSA + S80TY|No Service|60|1999": {
    "cycle": "ไม่มีบริการ",
    "page": 42
  },
  "OLED65C6PSA + S80TY|No Service|60|1299": {
    "cycle": "ไม่มีบริการ",
    "page": 42
  },
  "OLED55C6PSA + S30A|No Service|60|1099": {
    "cycle": "ไม่มีบริการ",
    "page": 42
  },
  "75QNED86BSA|No Service|60|": {
    "cycle": "ไม่มีบริการ",
    "page": 8
  },
  "100MRGB96BS|No Service|60|4499": {
    "cycle": "ไม่มีบริการ",
    "page": 41
  },
  "100QNED86BS|No Service|60|2599": {
    "cycle": "ไม่มีบริการ",
    "page": 45
  },
  "85QNED80BSA|No Service|60|1349": {
    "cycle": "ไม่มีบริการ",
    "page": 45
  },
  "65QNED80BSA|No Service|60|649": {
    "cycle": "ไม่มีบริการ",
    "page": 45
  },
  "55QNED80BSA|No Service|60|549": {
    "cycle": "ไม่มีบริการ",
    "page": 45
  },
  "75NU855BPSA|No Service|60|699": {
    "cycle": "ไม่มีบริการ",
    "page": 46
  },
  "65NU855BPSA|No Service|60|549": {
    "cycle": "ไม่มีบริการ",
    "page": 46
  },
  "27LX6TDGA|No Service|60|749": {
    "cycle": "ไม่มีบริการ",
    "page": 43
  },
  "32LX6BDGA|No Service|60|849": {
    "cycle": "ไม่มีบริการ",
    "page": 47
  },
  "27LX6TDGA + xboom GRAB|No Service|60|749": {
    "cycle": "ไม่มีบริการ",
    "page": 43
  },
  "27GX704A-B|No Service|60|": {
    "cycle": "ไม่มีบริการ",
    "page": 9
  },
  "45GX950A-B|No Service|60|1499": {
    "cycle": "ไม่มีบริการ",
    "page": 48
  },
  "52G930B-B|No Service|60|1199": {
    "cycle": "ไม่มีบริการ",
    "page": 48
  },
  "40U990A-W|No Service|60|999": {
    "cycle": "ไม่มีบริการ",
    "page": 48
  },
  "34U650A-B|No Service|60|399": {
    "cycle": "ไม่มีบริการ",
    "page": 48
  },
  "32U889SA-W|No Service|60|699": {
    "cycle": "ไม่มีบริการ",
    "page": 48
  },
  "32U889SA + xboom GRAB|No Service|60|699": {
    "cycle": "ไม่มีบริการ",
    "page": 49
  },
  "S95TR|No Service|60|449": {
    "cycle": "ไม่มีบริการ",
    "page": 51
  },
  "S70TY|No Service|60|189": {
    "cycle": "ไม่มีบริการ",
    "page": 51
  },
  "xboom GRAB|No Service|60|109": {
    "cycle": "ไม่มีบริการ",
    "page": 50
  },
  "xboom BOUNCE|No Service|60|139": {
    "cycle": "ไม่มีบริการ",
    "page": 50
  },
  "xboom STAGE301|No Service|60|299": {
    "cycle": "ไม่มีบริการ",
    "page": 50
  }
};
function apply(){var products=Array.isArray(window.LG_PRODUCTS)?window.LG_PRODUCTS:[];products.forEach(function(product){(product.plans||[]).forEach(function(plan){var key=[product.model,plan.serviceType,Number(plan.totalContractMonths||plan.months||0),Number(plan.price||0)].join('|');var hit=map[key];if(hit){plan.serviceCycle=hit.cycle;plan.serviceSource='Price list_Aug_V3.pdf p.'+hit.page;}});});}
apply();
window.LG_SERVICE_CYCLE_MAP=map;
}());

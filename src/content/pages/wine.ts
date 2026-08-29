// MUNI × Kellerei Eisacktal 葡萄酒頁面的中英文文案（/wine）
import type { Locale } from "@/i18n/config";

export type WineText = {
  id: string;
  name: string;
  nameZh: string;
  vintage: string;
  series: string;
  seriesZh: string;
  type: "white" | "red" | "sparkling";
  grape: string;
  altitude: string;
  description: string;
};

export type WineCopy = {
  metaTitle: string;
  metaDescription: string;
  backToSystems: string;
  eyebrow: string;
  heroLine1: string;
  heroLine2: string;
  heroLine3: string;
  heroBody: string;
  heroImageAlt: string;
  typeWhite: string;
  typeRed: string;
  typeSparkling: string;
  collabEyebrow: string;
  collabTitle: string;
  collabP1Before: string;
  collabP1Strong: string;
  collabP1After: string;
  collabP2Before: string;
  collabP2Strong: string;
  collabP2After: string;
  wineryEyebrow: string;
  wineryTitle: string;
  winerySubtitle: string;
  videoCaption: string;
  wineryQuote: string;
  wineryQuoteSource: string;
  wineryP1: { a: string; s1: string; b: string; s2: string; c: string; s3: string; d: string };
  wineryP2: { a: string; s1: string; b: string; s2: string; c: string };
  statsTitle: string;
  stats: string[];
  timelineTitle: string;
  timeline: { year: string; event: string }[];
  factorsEyebrow: string;
  factorsTitle: string;
  factors: { title: string; before: string; strong: string; after: string }[];
  communityQuote: { before: string; strong: string; after: string };
  mineralEyebrow: string;
  mineralTitle: string;
  mineralCard1Title: string;
  mineralCard1: { a: string; s1: string; b: string; s2: string; c: string };
  mineralCard2Title: string;
  mineralCard2: { a: string; s1: string; b: string; s2: string; c: string; s3: string; d: string };
  philosophyLabel: string;
  philosophyBody: { a: string; s1: string; b: string };
  flagshipEyebrow: string;
  flagshipTitle: string;
  flagshipLead: string;
  collectionEyebrow: string;
  collectionTitle: string;
  collectionLead: string;
  wines: WineText[];
  ritualEyebrow: string;
  ritualTitle: string;
  ritualLead: string;
  rituals: { step: string; title: string; icon: string; description: string }[];
  awardsEyebrow: string;
  awardsTitle: string;
  awardsLead: string;
  awardPoints: string;
  ctaTitle: string;
  ctaBody: string;
  ctaConsultant: string;
  ctaSystems: string;
};

const zh: WineCopy = {
  metaTitle: "MUNI × Kellerei Eisacktal | 山地葡萄酒 × 療癒儀式",
  metaDescription:
    "MUNI 攜手南蒂羅爾 Kellerei Eisacktal 酒莊，以阿爾卑斯山地葡萄酒的礦物能量，打造獨特的品飲療癒儀式。9 款精選山地葡萄酒，從花崗岩到白雲石，每一口都是大地頻率的共振。",
  backToSystems: "返回療癒系統總覽",
  eyebrow: "MUNI × KELLEREI EISACKTAL",
  heroLine1: "阿爾卑斯山地",
  heroLine2: "葡萄酒",
  heroLine3: "× 療癒儀式",
  heroBody:
    "當南蒂羅爾的花崗岩與白雲石孕育的山地葡萄酒，遇上 MUNI 的頻率療癒哲學——每一口酒，都是大地深處的能量共振。",
  heroImageAlt: "Granit 960 — Kellerei Eisacktal 旗艦酒款",
  typeWhite: "白酒",
  typeRed: "紅酒",
  typeSparkling: "氣泡酒",
  collabEyebrow: "A COLLABORATION OF TERROIR & HEALING",
  collabTitle: "當風土遇上療癒\n葡萄酒不再只是飲品",
  collabP1Before: "MUNI 相信，",
  collabP1Strong: "大地的能量透過植物傳遞",
  collabP1After:
    "。在南蒂羅爾 Valle Isarco 的山谷中，海拔 250 至 970 公尺的陡峭山坡上，花崗岩、白雲石與片岩土壤中的礦物質，經由葡萄藤的根系被吸收，最終凝聚在每一滴酒液之中。",
  collabP2Before: "MUNI × Kellerei Eisacktal 的合作，是",
  collabP2Strong: "兩種對自然的敬畏的交匯",
  collabP2After:
    "：Kellerei Eisacktal 以六十年的釀酒傳統守護風土的完整表達，MUNI 以花精與精油的智慧引導這份大地能量與你的身心對話。",
  wineryEyebrow: "THE WINERY",
  wineryTitle: "Kellerei Eisacktal",
  winerySubtitle: "Cantina Valle Isarco — 南蒂羅爾頂級白葡萄酒的代名詞",
  videoCaption: "Valle Isarco — 義大利最北端的葡萄酒產區，阿爾卑斯山與地中海風景交匯之地",
  wineryQuote: "「A Valley, so unique. As its people.」",
  wineryQuoteSource: "— Kellerei Eisacktal",
  wineryP1: {
    a: "",
    s1: "1961 年",
    b: "，24 位葡萄農在義大利南蒂羅爾（Alto Adige）的 Valle Isarco 山谷中，共同創立了這間釀酒合作社。如今已有 ",
    s2: "135 個在地農戶家族",
    c: "加入，他們的哲學很簡單：",
    s3: "「品質，絕不妥協。」",
    d: "",
  },
  wineryP2: {
    a: "每年約生產 ",
    s1: "950,000 瓶",
    b: "葡萄酒，其中 ",
    s2: "98% 為白酒",
    c: "——這是 Valle Isarco 獨特風土的最佳證明。從西元前 500 年的第一批葡萄酒證據，到今天的國際獎項，這片土地的釀酒故事已延續了兩千五百年。",
  },
  statsTitle: "酒莊一覽",
  stats: ["在地農戶家族", "公頃葡萄園", "葡萄品種", "最高海拔", "種不同土壤", "陡坡葡萄園"],
  timelineTitle: "歷史軌跡",
  timeline: [
    { year: "500 BC", event: "Valle Isarco 最早的葡萄酒證據" },
    { year: "1961", event: "24 位葡萄農創立 Cantina Valle Isarco" },
    { year: "2006", event: "生產設施翻新擴建" },
    { year: "2021", event: "60 週年，推出全新品牌形象" },
  ],
  factorsEyebrow: "POSITIVE ENERGY FACTORS",
  factorsTitle: "每一瓶酒背後的正面能量",
  factors: [
    {
      title: "手工採摘",
      before: "135 個農戶家族，365 天悉心照料葡萄園。在陡峭的山坡上，許多地方",
      strong: "只能以手工採摘",
      after: "——每一顆葡萄都經過人手的溫度與選擇，這份用心是機器無法取代的能量傳遞。",
    },
    {
      title: "天然氣候恩賜",
      before: "阿爾卑斯山脈的屏障帶來",
      strong: "充沛的日照與涼爽的夜風",
      after:
        "，白天累積糖分，夜晚保留酸度。靠近白雲石山脈（Dolomites）的地理位置，造就了劇烈的日夜溫差——這是頂級白酒芳香與礦物感的天然密碼。",
    },
    {
      title: "8 種古老土壤",
      before: "石英片岩、閃長岩、火山斑岩……",
      strong: "8 種截然不同的土壤",
      after:
        "在 150 公頃的葡萄園中交替分布。葡萄藤的根系深入貧瘠的岩層，吸收珍貴的礦物養分——這是大地最原始的能量來源。",
    },
    {
      title: "永續農法",
      before: "採用",
      strong: "整合式葡萄栽培",
      after:
        "，保護生物多樣性、最小化化學農藥使用。自有太陽能光伏系統發電，輕量瓶設計每年減少 67.5 噸 CO₂ 排放——對大地的尊重，就是最好的能量回饋。",
    },
    {
      title: "薩比奧納修道院",
      before: "被譽為「蒂羅爾的衛城」的",
      strong: "薩比奧納修道院",
      after:
        "，矗立在巨大的閃長岩上方。修道院周圍通風溫暖的陡峭葡萄園，是酒莊最珍貴的頂級產區——Sabiona 系列的靈魂之地。",
    },
    {
      title: "耐心與時間",
      before: "釀酒師以",
      strong: "極大的耐心與精煉的直覺",
      after:
        "照料每一款酒，等待它們達到完美的成熟度。緩慢的陳釀過程賦予葡萄酒深度與複雜性——傳統與現代技術在酒窖中的交融，是品質的關鍵。",
    },
  ],
  communityQuote: {
    before: "「社群精神是我們的指導原則。我們的目標是透過精心的葡萄處理，釀造高品質的葡萄酒，以此表達我們",
    strong: "對自然的尊重",
    after: "，以及對後代的忠誠。」",
  },
  mineralEyebrow: "MINERAL ENERGY & HEALING",
  mineralTitle: "礦物能量 × 頻率共振",
  mineralCard1Title: "大地的礦物頻率",
  mineralCard1: {
    a: "Valle Isarco 的土壤由花崗岩、白雲石與石英片岩構成，這些古老的岩石富含豐富的礦物質。葡萄藤的根系深入土壤，將大地的",
    s1: "礦物能量",
    b: "轉化為葡萄酒中獨特的礦物感——這不僅是風味，更是一種",
    s2: "大地頻率的傳遞",
    c: "。",
  },
  mineralCard2Title: "MUNI 頻率共振",
  mineralCard2: {
    a: "在 MUNI 的療癒哲學中，適量的紅酒富含",
    s1: "白藜蘆醇",
    b: "與",
    s2: "多酚類抗氧化物",
    c: "，能支持心血管健康與細胞修復。當 Kellerei Eisacktal 的風土守護了葡萄酒的礦物完整性，MUNI 的精油與花精則引導這份能量與你的身心",
    s3: "深度共振",
    d: "。",
  },
  philosophyLabel: "MUNI WINE PHILOSOPHY",
  philosophyBody: {
    a: "葡萄酒是大地的血液，承載著土壤、陽光與時間的記憶。品飲一杯山地葡萄酒，就是與阿爾卑斯山的",
    s1: "千年礦物能量",
    b: "對話。",
  },
  flagshipEyebrow: "FLAGSHIP WINES",
  flagshipTitle: "旗艦酒款",
  flagshipLead: "Kellerei Eisacktal 最具代表性的兩款限量酒款，展現 Valle Isarco 風土的極致表達。",
  collectionEyebrow: "WINE COLLECTION",
  collectionTitle: "精選酒款系列",
  collectionLead: "從至臻精選到經典日常，每一款都承載著 Valle Isarco 的風土記憶。",
  wines: [
    {
      id: "granit960",
      name: "Granit 960",
      nameZh: "花崗岩 960",
      vintage: "2021",
      series: "Granit960",
      seriesZh: "旗艦限量",
      type: "white",
      grape: "Kerner",
      altitude: "590 – 970 m",
      description:
        "在一座由 Valle Isarco 20 噸花崗岩雕刻而成的 960 公升石桶中發酵與陳釀。花崗岩的孔隙率與礦物特性為這款 Kerner 注入了無與倫比的礦物深度與複雜性。明亮的稻草黃色帶著細膩的綠色反光，柑橘、蜜桃與黃蘋果的層次香氣，伴隨著礦物與草本的細膩韻味。",
    },
    {
      id: "adamantis",
      name: "Cuvée Adamantis",
      nameZh: "鑽石混釀",
      vintage: "2021",
      series: "Premium Cuvée",
      seriesZh: "頂級混釀",
      type: "white",
      grape: "Sylvaner, Grüner Veltliner, Pinot Grigio, Kerner",
      altitude: "600 – 850 m",
      description:
        "Cantina Valle Isarco 的頂級酒款，僅限量 2,000 瓶。四種 Valle Isarco 最具代表性的葡萄品種精心混釀——Sylvaner 帶來優雅與果香，Grüner Veltliner 貢獻辛香氣息，Pinot Grigio 賦予結構與力量，Kerner 增添芳香層次。在法國橡木桶中發酵並陳釀 18 個月。",
    },
    {
      id: "sabiona-sylvaner",
      name: "Sabiona Sylvaner",
      nameZh: "薩比奧納 希爾瓦那",
      vintage: "2020",
      series: "Sabiona",
      seriesZh: "修道院精選",
      type: "white",
      grape: "Sylvaner",
      altitude: "550 – 700 m",
      description:
        "葡萄來自環繞薩比奧納修道院——被譽為「蒂羅爾的衛城」——的陽光山坡葡萄園。嚴格的產量控制、限量 3,000 瓶，在相思木桶中細膩陳釀，賦予這款酒無可比擬的品種特性與優雅氣質。",
    },
    {
      id: "aristos-zero",
      name: "Aristos Zero",
      nameZh: "至臻零添加氣泡酒",
      vintage: "NV",
      series: "Aristos",
      seriesZh: "至臻系列",
      type: "sparkling",
      grape: "Sylvaner",
      altitude: "550 – 700 m",
      description:
        "以傳統瓶中二次發酵法（Metodo Classico）釀造，在酒泥上陳釀至少 36 個月，完全不添加糖分（Pas Dosé）。葡萄同樣來自薩比奧納修道院的葡萄園，嚴格的產量控制與溫柔的釀造工藝，賦予這款氣泡酒獨特的個性。",
    },
    {
      id: "aristos-sylvaner",
      name: "Aristos Sylvaner",
      nameZh: "至臻 希爾瓦那",
      vintage: "2023",
      series: "Aristos",
      seriesZh: "至臻系列",
      type: "white",
      grape: "Sylvaner",
      altitude: "550 – 700 m",
      description:
        "至臻系列的核心——嚴格的葡萄園管理與產量限制，確保每一顆葡萄都達到最佳品質。在不鏽鋼桶與大型橡木桶中發酵並陳釀 10 個月，展現出鮮明的品種特性、出色的結構與卓越的陳年潛力。",
    },
    {
      id: "aristos-pinot-noir",
      name: "Aristos Pinot Noir Riserva",
      nameZh: "至臻 黑皮諾珍藏",
      vintage: "2023",
      series: "Aristos",
      seriesZh: "至臻系列",
      type: "red",
      grape: "Pinot Noir",
      altitude: "500 – 600 m",
      description:
        "葡萄來自 Valle Isarco 南部的 Campodazzo 小鎮，從修剪到成熟度的嚴格控制，只選用品質最優異的葡萄。在大桶中發酵後，於法國橡木桶中陳釀 18 個月，再瓶中熟成 6 個月。濃郁的果香、優雅而富有表現力的酒體。",
    },
    {
      id: "kerner-classic",
      name: "Kerner Classic",
      nameZh: "經典 科爾納",
      vintage: "2024",
      series: "Classic",
      seriesZh: "經典系列",
      type: "white",
      grape: "Kerner",
      altitude: "650 – 970 m",
      description:
        "Kerner 是 Schiava 與 Riesling 的雜交品種，以德國詩人兼醫師 Justinus Kerner 命名。偏好高海拔陽光山坡的輕質礫石與沙質土壤，晚熟的葡萄帶來飽滿的酒體與豐富的風味。在不鏽鋼桶中低溫發酵，保留清新的果香與礦物感。",
    },
    {
      id: "pinot-nero-classic",
      name: "Blauburgunder Classic",
      nameZh: "經典 黑皮諾",
      vintage: "2024",
      series: "Classic Red",
      seriesZh: "經典紅酒",
      type: "red",
      grape: "Pinot Noir",
      altitude: "420 – 750 m",
      description:
        "源自法國勃根地的貴族品種，約百年前引入南蒂羅爾。Campodazzo 周圍溫暖的山坡提供了理想的生長條件，傳統浸皮發酵後在大型橡木桶中陳釀，展現出優雅的表現力與典型的品種特性。",
    },
    {
      id: "isaras-brut",
      name: "Isaras Brut",
      nameZh: "伊薩拉斯 氣泡酒",
      vintage: "NV",
      series: "Isaras",
      seriesZh: "開胃系列",
      type: "sparkling",
      grape: "Sylvaner, Müller Thurgau",
      altitude: "560 – 590 m",
      description:
        "以 Valle Isarco 兩種代表性白葡萄品種——Müller Thurgau 與 Sylvaner 為基酒，採用 Charmat 法進行二次發酵，完美保留了原始的果香與清新感。是開胃酒的理想選擇，也能巧妙搭配輕食前菜。",
    },
  ],
  ritualEyebrow: "MUNI WINE RITUAL",
  ritualTitle: "MUNI 品飲療癒儀式",
  ritualLead: "四個步驟，讓一杯葡萄酒成為一次與大地的深度連結",
  rituals: [
    { step: "01", title: "安定", icon: "🫧", description: "找一個安靜的角落，閉上眼睛，深呼吸三次。讓身體從忙碌的節奏中慢下來，為品飲做好準備。" },
    { step: "02", title: "觀察", icon: "👁️", description: "將酒倒入杯中，觀察它的顏色——稻草黃、金黃、還是寶石紅？輕輕搖杯，看酒液在杯壁上的流動。這是用視覺感受大地能量的第一步。" },
    { step: "03", title: "聞香", icon: "🌿", description: "將鼻子靠近杯口，先聞靜止時的香氣，再搖杯後聞。感受從果香、花香到礦物的層次變化。此刻，你的嗅覺正在與精油和葡萄酒的雙重頻率對話。" },
    { step: "04", title: "品味", icon: "🍷", description: "小口啜飲，讓酒液在口腔中停留片刻。感受酸度、甜度、單寧與礦物感的平衡。在吞嚥後，覺察餘韻在口中的延續——那是大地留給你的訊息。" },
  ],
  awardsEyebrow: "INTERNATIONAL AWARDS",
  awardsTitle: "國際獎項認證",
  awardsLead: "Kellerei Eisacktal 的酒款屢獲國際權威評鑑肯定，品質獲得全球最嚴格的葡萄酒評審認可。",
  awardPoints: "分",
  ctaTitle: "想知道哪款酒最適合你此刻的狀態？",
  ctaBody: "告訴 MUNI 療癒顧問你現在的心情與場景，\nAI 會為你推薦最適合的葡萄酒品飲方案。",
  ctaConsultant: "問問 MUNI 療癒顧問",
  ctaSystems: "探索更多 MUNI 療癒系統",
};

const en: WineCopy = {
  metaTitle: "MUNI × Kellerei Eisacktal | Alpine wine × a ritual of care",
  metaDescription:
    "MUNI works with the Kellerei Eisacktal winery in South Tyrol, using the mineral energy of Alpine wine to build a distinctive tasting ritual. Nine selected mountain wines, from granite to dolomite — every mouthful a resonance with the earth.",
  backToSystems: "Back to the healing systems",
  eyebrow: "MUNI × KELLEREI EISACKTAL",
  heroLine1: "Alpine mountain",
  heroLine2: "wine",
  heroLine3: "× a ritual of care",
  heroBody:
    "When mountain wine raised on the granite and dolomite of South Tyrol meets MUNI's philosophy of frequency, every mouthful resonates with what lies deep in the earth.",
  heroImageAlt: "Granit 960 — the Kellerei Eisacktal flagship",
  typeWhite: "White",
  typeRed: "Red",
  typeSparkling: "Sparkling",
  collabEyebrow: "A COLLABORATION OF TERROIR & HEALING",
  collabTitle: "When terroir meets healing,\nwine stops being only a drink",
  collabP1Before: "MUNI holds that ",
  collabP1Strong: "the earth's energy travels through plants",
  collabP1After:
    ". In the Valle Isarco of South Tyrol, on steep slopes between 250 and 970 metres, minerals in granite, dolomite and schist soils are drawn up through the vines' roots and gathered, finally, into every drop of wine.",
  collabP2Before: "MUNI × Kellerei Eisacktal is ",
  collabP2Strong: "where two forms of respect for nature meet",
  collabP2After:
    ": Kellerei Eisacktal keeps terroir fully expressed through sixty years of winemaking, and MUNI uses the wisdom of essences and oils to bring that energy of the earth into conversation with you.",
  wineryEyebrow: "THE WINERY",
  wineryTitle: "Kellerei Eisacktal",
  winerySubtitle: "Cantina Valle Isarco — a byword for South Tyrol's finest white wine",
  videoCaption:
    "Valle Isarco — Italy's northernmost wine region, where the Alps and the Mediterranean meet",
  wineryQuote: "“A Valley, so unique. As its people.”",
  wineryQuoteSource: "— Kellerei Eisacktal",
  wineryP1: {
    a: "In ",
    s1: "1961",
    b: ", twenty-four growers founded this cooperative in the Valle Isarco of Alto Adige, Italy. Today ",
    s2: "135 local farming families",
    c: " belong to it, and their philosophy is simple: ",
    s3: "quality, without compromise",
    d: ".",
  },
  wineryP2: {
    a: "Around ",
    s1: "950,000 bottles",
    b: " are made each year, of which ",
    s2: "98% are white",
    c: " — the best proof of Valle Isarco's particular terroir. From the earliest evidence of wine here in 500 BC to today's international awards, this land has been making wine for two and a half thousand years.",
  },
  statsTitle: "The winery at a glance",
  stats: ["local farming families", "hectares of vineyard", "grape varieties", "highest altitude", "distinct soil types", "on steep slopes"],
  timelineTitle: "A history",
  timeline: [
    { year: "500 BC", event: "The earliest evidence of wine in Valle Isarco" },
    { year: "1961", event: "Twenty-four growers found Cantina Valle Isarco" },
    { year: "2006", event: "The production facility is renovated and extended" },
    { year: "2021", event: "The 60th anniversary, with a new brand identity" },
  ],
  factorsEyebrow: "POSITIVE ENERGY FACTORS",
  factorsTitle: "The energy behind every bottle",
  factors: [
    {
      title: "Picked by hand",
      before: "135 farming families tend the vineyards 365 days a year. On the steep slopes, many parcels ",
      strong: "can only be picked by hand",
      after:
        " — every grape passes through human warmth and human judgement, a transfer of care no machine can replace.",
    },
    {
      title: "A gift of climate",
      before: "The Alps shelter the valley and bring ",
      strong: "abundant sun and cool night wind",
      after:
        ": sugar accumulates by day and acidity is preserved at night. Nearness to the Dolomites creates a dramatic swing between day and night — the natural code behind the aroma and minerality of great white wine.",
    },
    {
      title: "Eight ancient soils",
      before: "Quartz schist, diorite, volcanic porphyry — ",
      strong: "eight entirely distinct soils",
      after:
        " alternate across 150 hectares of vineyard. Vine roots reach deep into poor rock and draw up precious minerals, the earth's most original source of energy.",
    },
    {
      title: "Sustainable growing",
      before: "The estate uses ",
      strong: "integrated viticulture",
      after:
        ", protecting biodiversity and minimising chemical treatments. Its own solar array generates power, and lightweight bottles cut 67.5 tonnes of CO₂ a year — respect for the earth is the best return of energy there is.",
    },
    {
      title: "Sabiona monastery",
      before: "Called the acropolis of Tyrol, ",
      strong: "Sabiona monastery",
      after:
        " stands above a great outcrop of diorite. The airy, warm, steep vineyards around it are the estate's most precious sites — the heart of the Sabiona range.",
    },
    {
      title: "Patience and time",
      before: "The winemakers work with ",
      strong: "great patience and refined intuition",
      after:
        ", waiting for each wine to reach perfect maturity. Slow ageing gives depth and complexity, and the meeting of tradition and modern technique in the cellar is the key to quality.",
    },
  ],
  communityQuote: {
    before:
      "“The spirit of community is our guiding principle. Our aim is to make high-quality wine through careful handling of the fruit, expressing our ",
    strong: "respect for nature",
    after: " and our commitment to the generations that follow.”",
  },
  mineralEyebrow: "MINERAL ENERGY & HEALING",
  mineralTitle: "Mineral energy × frequency resonance",
  mineralCard1Title: "The mineral frequency of the earth",
  mineralCard1: {
    a: "Valle Isarco's soils are granite, dolomite and quartz schist, ancient rock rich in minerals. Vine roots reach deep and turn the earth's ",
    s1: "mineral energy",
    b: " into the distinctive minerality of the wine — not only flavour but ",
    s2: "a transmission of the earth's frequency",
    c: ".",
  },
  mineralCard2Title: "MUNI frequency resonance",
  mineralCard2: {
    a: "In MUNI's philosophy, red wine in moderation is rich in ",
    s1: "resveratrol",
    b: " and ",
    s2: "polyphenol antioxidants",
    c: ", supporting cardiovascular health and cellular repair. Where Kellerei Eisacktal's terroir keeps the wine's mineral integrity intact, MUNI's oils and essences guide that energy into ",
    s3: "deep resonance",
    d: " with you.",
  },
  philosophyLabel: "MUNI WINE PHILOSOPHY",
  philosophyBody: {
    a: "Wine is the blood of the earth, carrying the memory of soil, sun and time. To taste a glass of mountain wine is to speak with the Alps' ",
    s1: "thousand-year mineral energy",
    b: ".",
  },
  flagshipEyebrow: "FLAGSHIP WINES",
  flagshipTitle: "The flagships",
  flagshipLead:
    "Kellerei Eisacktal's two most representative limited bottlings, showing Valle Isarco terroir at its fullest.",
  collectionEyebrow: "WINE COLLECTION",
  collectionTitle: "The selection",
  collectionLead:
    "From the Aristos selection to the classic everyday bottles, each one carries the memory of Valle Isarco.",
  wines: [
    {
      id: "granit960",
      name: "Granit 960",
      nameZh: "Granite 960",
      vintage: "2021",
      series: "Granit960",
      seriesZh: "Flagship, limited",
      type: "white",
      grape: "Kerner",
      altitude: "590 – 970 m",
      description:
        "Fermented and aged in a 960-litre vessel carved from 20 tonnes of Valle Isarco granite. The porosity and mineral character of the stone give this Kerner an unmatched mineral depth and complexity. A bright straw yellow with fine green reflections; layered aromas of citrus, peach and yellow apple, with a delicate mineral and herbal finish.",
    },
    {
      id: "adamantis",
      name: "Cuvée Adamantis",
      nameZh: "Diamond cuvée",
      vintage: "2021",
      series: "Premium Cuvée",
      seriesZh: "Premium cuvée",
      type: "white",
      grape: "Sylvaner, Grüner Veltliner, Pinot Grigio, Kerner",
      altitude: "600 – 850 m",
      description:
        "Cantina Valle Isarco's top wine, limited to 2,000 bottles. Four of the valley's most characteristic varieties are blended with care — Sylvaner brings elegance and fruit, Grüner Veltliner spice, Pinot Grigio structure and power, and Kerner an aromatic lift. Fermented and aged 18 months in French oak.",
    },
    {
      id: "sabiona-sylvaner",
      name: "Sabiona Sylvaner",
      nameZh: "Sabiona Sylvaner",
      vintage: "2020",
      series: "Sabiona",
      seriesZh: "Monastery selection",
      type: "white",
      grape: "Sylvaner",
      altitude: "550 – 700 m",
      description:
        "The fruit comes from the sunlit slopes around Sabiona monastery, called the acropolis of Tyrol. Strict yield control, a limit of 3,000 bottles, and delicate ageing in acacia give this wine an incomparable varietal character and elegance.",
    },
    {
      id: "aristos-zero",
      name: "Aristos Zero",
      nameZh: "Aristos Pas Dosé",
      vintage: "NV",
      series: "Aristos",
      seriesZh: "Aristos range",
      type: "sparkling",
      grape: "Sylvaner",
      altitude: "550 – 700 m",
      description:
        "Made by traditional second fermentation in bottle (metodo classico), aged at least 36 months on the lees with no dosage at all (pas dosé). The fruit again comes from the Sabiona monastery vineyards; strict yield control and gentle winemaking give this sparkling wine its particular character.",
    },
    {
      id: "aristos-sylvaner",
      name: "Aristos Sylvaner",
      nameZh: "Aristos Sylvaner",
      vintage: "2023",
      series: "Aristos",
      seriesZh: "Aristos range",
      type: "white",
      grape: "Sylvaner",
      altitude: "550 – 700 m",
      description:
        "The heart of the Aristos range — strict vineyard management and yield limits ensure every grape reaches its best. Fermented and aged 10 months in stainless steel and large oak, showing clear varietal character, fine structure and remarkable ageing potential.",
    },
    {
      id: "aristos-pinot-noir",
      name: "Aristos Pinot Noir Riserva",
      nameZh: "Aristos Pinot Noir Riserva",
      vintage: "2023",
      series: "Aristos",
      seriesZh: "Aristos range",
      type: "red",
      grape: "Pinot Noir",
      altitude: "500 – 600 m",
      description:
        "The fruit comes from Campodazzo in the southern Valle Isarco, with strict control from pruning to ripeness and only the finest grapes selected. Fermented in large vats, then 18 months in French oak and 6 months in bottle. Rich fruit, with an elegant and expressive body.",
    },
    {
      id: "kerner-classic",
      name: "Kerner Classic",
      nameZh: "Kerner Classic",
      vintage: "2024",
      series: "Classic",
      seriesZh: "Classic range",
      type: "white",
      grape: "Kerner",
      altitude: "650 – 970 m",
      description:
        "Kerner is a crossing of Schiava and Riesling, named after the German poet and physician Justinus Kerner. It prefers light gravel and sandy soils on high sunlit slopes, and its late ripening brings a full body and rich flavour. Cool fermentation in stainless steel keeps the fresh fruit and minerality.",
    },
    {
      id: "pinot-nero-classic",
      name: "Blauburgunder Classic",
      nameZh: "Pinot Noir Classic",
      vintage: "2024",
      series: "Classic Red",
      seriesZh: "Classic red",
      type: "red",
      grape: "Pinot Noir",
      altitude: "420 – 750 m",
      description:
        "A noble variety from Burgundy, brought to South Tyrol around a century ago. The warm slopes around Campodazzo provide ideal conditions; traditional maceration is followed by ageing in large oak, showing elegant expression and typical varietal character.",
    },
    {
      id: "isaras-brut",
      name: "Isaras Brut",
      nameZh: "Isaras Brut",
      vintage: "NV",
      series: "Isaras",
      seriesZh: "Aperitif range",
      type: "sparkling",
      grape: "Sylvaner, Müller Thurgau",
      altitude: "560 – 590 m",
      description:
        "Built on two of Valle Isarco's characteristic white varieties — Müller Thurgau and Sylvaner — with second fermentation by the Charmat method, keeping the original fruit and freshness intact. An ideal aperitif, and a fine partner for light antipasti.",
    },
  ],
  ritualEyebrow: "MUNI WINE RITUAL",
  ritualTitle: "The MUNI tasting ritual",
  ritualLead: "Four steps that make a glass of wine a deep connection with the earth",
  rituals: [
    { step: "01", title: "Settle", icon: "🫧", description: "Find a quiet corner, close your eyes and take three deep breaths. Let the body come down from the pace of the day and get ready to taste." },
    { step: "02", title: "Look", icon: "👁️", description: "Pour and look at the colour — straw yellow, gold, or ruby? Swirl gently and watch the wine move on the glass. This is the first way of feeling the earth's energy, through sight." },
    { step: "03", title: "Smell", icon: "🌿", description: "Bring your nose to the rim and smell the wine at rest, then after swirling. Notice how it moves through fruit, flower and mineral. Your sense of smell is now in conversation with the twin frequencies of oil and wine." },
    { step: "04", title: "Taste", icon: "🍷", description: "Take a small sip and let it rest in your mouth. Feel the balance of acidity, sweetness, tannin and minerality. After swallowing, notice how the finish carries on — that's the message the earth left you." },
  ],
  awardsEyebrow: "INTERNATIONAL AWARDS",
  awardsTitle: "International recognition",
  awardsLead:
    "Kellerei Eisacktal's wines are repeatedly recognised by the world's most demanding panels.",
  awardPoints: "points",
  ctaTitle: "Want to know which wine suits where you are?",
  ctaBody:
    "Tell the MUNI Healing Consultant how you feel and what the occasion is,\nand it will suggest the wine and the way to taste it.",
  ctaConsultant: "Ask the MUNI Healing Consultant",
  ctaSystems: "Explore more MUNI healing systems",
};

export const WINE_COPY: Record<Locale, WineCopy> = { zh, en };

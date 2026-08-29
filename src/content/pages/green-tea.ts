// MUNI × 日本有機綠茶頁面的中英文文案（/green-tea）
import type { Locale } from "@/i18n/config";

export type GreenTeaCopy = {
  metaTitle: string;
  metaDescription: string;
  navSystems: string;
  navConsultant: string;
  eyebrow: string;
  title: string;
  heroBody: string;
  gardenEyebrow: string;
  gardenTitle: string;
  gardenSubtitle: string;
  gardenParagraphs: string[];
  gardenImage1Alt: string;
  gardenImage2Alt: string;
  heritageEyebrow: string;
  heritageTitle: string;
  heritage: { year: string; event: string }[];
  teasEyebrow: string;
  teasTitle: string;
  teasLead: string;
  products: {
    id: string;
    name: string;
    nameEn: string;
    origin: string;
    tagline: string;
    description: string;
    character: string;
    ritual: string;
  }[];
  labelCharacter: string;
  labelRitual: string;
  certsEyebrow: string;
  certsTitle: string;
  certsLead: string;
  certs: { name: string; desc: string; year: string }[];
  factorsEyebrow: string;
  factorsTitle: string;
  factorsLead: string;
  factors: { icon: string; title: string; desc: string }[];
  galleryEyebrow: string;
  galleryTitle: string;
  galleryLead: string;
  galleryAlts: string[];
  matrixEyebrow: string;
  matrixTitle: string;
  matrixLead: string;
  matrixHeaders: { tea: string; scent: string; dimension: string; timing: string };
  matrixRows: { tea: string; scent: string; dimension: string; timing: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaConsultant: string;
  ctaSystems: string;
};

const zh: GreenTeaCopy = {
  metaTitle: "MUNI × 日本綠茶 | 百年有機茶園 × 頻率共振",
  metaDescription:
    "MUNI 攜手日本百年有機茶園，嚴選宇治抹茶、鹿兒島玉露、煎茶與焙茶。一年一採，立春後第 88 天春收，手工採摘、6 小時內蒸青完成。百年有機，歷史見證。",
  navSystems: "療癒系統",
  navConsultant: "MUNI 療癒顧問",
  eyebrow: "MUNI × 日本有機綠茶",
  title: "百年有機，歷史見證",
  heroBody:
    "來自日本綠茶發祥地——京都宇治的百年有機茶園，\n一年一採，手工採摘，6 小時內蒸青完成。\n每一片茶葉，都承載著六代人對自然的敬畏與堅持。",
  gardenEyebrow: "The Tea Garden",
  gardenTitle: "日本綠茶發祥地",
  gardenSubtitle: "自 1858 年，六代人的有機堅持",
  gardenParagraphs: [
    "茶園坐落於京都府南部的宇治田原町——日本綠茶的發祥之地。海拔約 250 公尺的未開發自然山谷中，朝晚溫差顯著、霧氣繚繞、石灰質土壤與優質水源，共同孕育出世界上最優質的有機綠茶。",
    "1972 年，第六代當主因噴灑農藥導致化學中毒，從此立下決心轉向有機栽培。1982 年全茶園完成有機轉型，至今超過 40 年不使用任何農藥與化學肥料。這份對土地與消費者的承諾，讓河川中消失的魚群重新出現，生態逐漸恢復。",
    "1999 年，天皇皇后蒞臨品嚐該園有機茶。2001 年獲得日本有機 JAS 認證，隨後陸續取得美國、歐盟有機認證及 GlobalG.A.P. 國際認證——這是對百年有機精神最高的歷史見證。",
  ],
  gardenImage1Alt: "宇治有機茶園",
  gardenImage2Alt: "茶田",
  heritageEyebrow: "Heritage Timeline",
  heritageTitle: "百年傳承",
  heritage: [
    { year: "1858", event: "開墾山地，開始種茶" },
    { year: "1975", event: "轉向有機栽培，不再使用農藥" },
    { year: "1982", event: "全茶園轉為有機" },
    { year: "1999", event: "天皇皇后品嚐有機茶" },
    { year: "2001", event: "獲得有機 JAS 認證" },
    { year: "2007", event: "獲得美國有機認證" },
    { year: "2009", event: "獲得歐盟有機認證" },
    { year: "2022", event: "獲得 GlobalG.A.P. 認證" },
  ],
  teasEyebrow: "Our Teas",
  teasTitle: "四款 MUNI 有機綠茶",
  teasLead: "從晨間靜心到睡前安定，總有一款綠茶能與你當下的頻率共振。",
  products: [
    {
      id: "matcha",
      name: "有機宇治抹茶",
      nameEn: "Organic Uji Matcha",
      origin: "京都・宇治",
      tagline: "嚴選有機蒸葉，石臼碾磨，色澤深翠",
      description:
        "源自日本綠茶發祥地——京都宇治。採摘前 20 天以上覆蓋遮光，使茶葉累積更多茶胺酸與葉綠素。嚴選有機蒸葉經傳統石臼低溫碾磨，保留完整營養與深翠色澤。每一碗抹茶，都是百年茶道精神的凝聚。",
      character: "鮮甜回甘、海苔香氣、奶油般的綿密口感",
      ritual: "晨間靜心儀式 — 以茶筅刷出細密泡沫，專注當下的覺察練習",
    },
    {
      id: "gyokuro",
      name: "有機玉露",
      nameEn: "Organic Gyokuro",
      origin: "鹿兒島",
      tagline: "覆下園 20 日遮光，獨特覆香與甘味",
      description:
        "玉露是日本綠茶中的最高等級。採摘前以覆蓋遮光 20 天以上，使茶葉中的茶胺酸含量大幅提升，帶來獨特的「覆香」——一種深沉而甘美的海苔般香氣。來自鹿兒島的溫暖氣候與火山土壤，賦予茶葉更加圓潤飽滿的風味。",
      character: "濃郁甘甜、海苔覆香、絲滑口感、餘韻悠長",
      ritual: "午後靜養 — 以 50°C 低溫沖泡，感受甘露般的溫潤",
    },
    {
      id: "sencha",
      name: "有機煎茶",
      nameEn: "Organic Sencha",
      origin: "鹿兒島・宇治",
      tagline: "日本國民綠茶，清爽甘醇的日常之選",
      description:
        "煎茶是日本最具代表性的綠茶類型，佔日本茶產量的 80%。來自鹿兒島與宇治兩大產區的有機茶葉，在陽光下自然生長，經蒸青、揉捻、乾燥的傳統工藝製成。清爽的草本香氣中帶有自然的甘甜，是每日飲茶儀式的最佳選擇。",
      character: "清爽甘醇、草本清香、微澀回甘、明亮翠綠湯色",
      ritual: "日常飲茶 — 以 70°C 沖泡，感受陽光與大地的清新能量",
    },
    {
      id: "hojicha",
      name: "有機焙茶",
      nameEn: "Organic Hojicha",
      origin: "京都・宇治",
      tagline: "高溫焙煎，溫暖安定的夜間之茶",
      description:
        "焙茶是將綠茶以高溫焙煎而成，過程中大幅降低咖啡因含量，同時產生獨特的焦香與溫暖氣息。來自宇治的有機焙茶，以傳統鐵臼精心研磨，香氣馥郁而不苦澀。極低的咖啡因使其成為睡前安定儀式的完美選擇。",
      character: "焦香溫暖、堅果甘甜、柔和順口、極低咖啡因",
      ritual: "睡前安定 — 溫熱飲用，搭配精油嗅覺冥想，進入深層放鬆",
    },
  ],
  labelCharacter: "能量特質",
  labelRitual: "MUNI 儀式建議",
  certsEyebrow: "Certifications",
  certsTitle: "國際有機認證",
  certsLead: "橫跨日本、美國、歐盟的完整有機認證體系，是對百年有機精神的最高肯定。",
  certs: [
    { name: "有機 JAS", desc: "日本農林水產省有機認證", year: "2001" },
    { name: "NOP", desc: "美國有機認證", year: "2007" },
    { name: "EU Organic", desc: "歐盟有機認證（ICEA）", year: "2009" },
    { name: "GlobalG.A.P.", desc: "國際農業生產認證", year: "2022" },
    { name: "FSSC 22000", desc: "食品安全管理系統認證", year: "2024" },
    { name: "JONA", desc: "日本有機自然食品協會", year: "2001" },
  ],
  factorsEyebrow: "Energy Factors",
  factorsTitle: "六大正面能量因素",
  factorsLead: "從茶園到你的茶碗，每一個環節都是能量品質的保證。",
  factors: [
    { icon: "🌱", title: "一年一採", desc: "立春過後第 88 天——「八十八夜」，是日本茶最珍貴的春收時節。一年僅此一次的採摘，讓每一片茶葉都凝聚了整個冬季蓄積的生命能量。" },
    { icon: "✋", title: "手工採摘", desc: "堅持傳統手工採摘，只取最嫩的一芯二葉。機器無法辨別的微妙差異，在茶農的指尖得到精準判斷，確保每一片茶葉都達到最高品質。" },
    { icon: "♨️", title: "6 小時蒸青", desc: "從採摘到蒸青不超過 6 小時。蒸青是日本綠茶獨特的殺青工藝，以高溫蒸汽瞬間停止茶葉氧化，最大限度保留鮮葉中的茶胺酸與兒茶素。" },
    { icon: "🏔️", title: "宇治 × 鹿兒島", desc: "宇治——日本綠茶發祥地，海拔 250 公尺的霧谷；鹿兒島——火山土壤的溫暖南國。兩大頂級產區的風土交融，賦予茶葉獨特的層次與深度。" },
    { icon: "🌿", title: "百年有機傳承", desc: "自 1858 年開始種茶，1975 年轉向有機栽培，至今超過 165 年的茶園歷史。六代人的堅持，不使用任何農藥與化學肥料，只以自然之力孕育茶葉。" },
    { icon: "✨", title: "MUNI 頻率共振", desc: "每一款綠茶都經過 MUNI Frequency Resonance™ 技術調頻，讓茶胺酸的 α 腦波頻率與你的意識狀態產生最深層的共振。" },
  ],
  galleryEyebrow: "Harvest & Process",
  galleryTitle: "採摘與製茶",
  galleryLead:
    "從茶園中的手工採摘，到工廠內的蒸青製程——每一步都遵循百年傳統，以最短的時間鎖住茶葉最鮮活的生命力。",
  galleryAlts: ["手工採摘茶葉", "日本茶園風景", "蒸青製程", "抹茶茶道"],
  matrixEyebrow: "Resonance Matrix",
  matrixTitle: "綠茶 × 牟尼香 共振搭配",
  matrixLead: "每一款綠茶都可搭配 MUNI 牟尼香，讓飲茶與嗅覺的頻率同時共振，開啟完整的療癒儀式。",
  matrixHeaders: { tea: "綠茶", scent: "牟尼香", dimension: "共振維度", timing: "建議時機" },
  matrixRows: [
    { tea: "有機宇治抹茶", scent: "牟尼香", dimension: "清淨覺察・專注當下", timing: "晨間靜心、冥想前的覺察練習" },
    { tea: "有機玉露", scent: "牟尼香", dimension: "深層滋養・溫潤修復", timing: "午後靜養、需要深層滋養時" },
    { tea: "有機煎茶", scent: "牟尼香", dimension: "安定平和・日常滋養", timing: "日常飲茶中的安定儀式" },
    { tea: "有機焙茶", scent: "牟尼香", dimension: "穩定扎根・安定入眠", timing: "睡前安定儀式、需要放鬆時" },
  ],
  ctaTitle: "想知道哪款綠茶最適合你此刻的狀態？",
  ctaBody: "告訴 MUNI 療癒顧問你現在的身心狀態與需求，\nAI 會為你推薦最適合的綠茶方案。",
  ctaConsultant: "問問 MUNI 療癒顧問",
  ctaSystems: "探索更多 MUNI 療癒系統 →",
};

const en: GreenTeaCopy = {
  metaTitle: "MUNI × Japanese green tea | A century-old organic garden × frequency resonance",
  metaDescription:
    "MUNI works with a century-old organic tea garden in Japan: Uji matcha, Kagoshima gyokuro, sencha and hojicha. One harvest a year on the 88th day after the start of spring, hand-picked and steamed within six hours.",
  navSystems: "Healing systems",
  navConsultant: "MUNI Healing Consultant",
  eyebrow: "MUNI × Japanese organic green tea",
  title: "A century of organic, witnessed",
  heroBody:
    "From a century-old organic garden in Uji, Kyoto — where Japanese green tea began.\nOne harvest a year, picked by hand, steamed within six hours.\nEvery leaf carries six generations of respect for nature.",
  gardenEyebrow: "The Tea Garden",
  gardenTitle: "Where Japanese green tea began",
  gardenSubtitle: "Since 1858, six generations of organic practice",
  gardenParagraphs: [
    "The garden sits in Ujitawara, in southern Kyoto Prefecture — the birthplace of Japanese green tea. In an undeveloped natural valley around 250 metres above sea level, a wide day-to-night temperature range, drifting mist, calcareous soil and fine water together produce some of the finest organic green tea in the world.",
    "In 1972 the sixth-generation head of the family was poisoned by the pesticides he was spraying, and resolved from then on to grow organically. By 1982 the whole garden had converted, and for more than forty years no pesticide or chemical fertiliser has been used. That commitment to the land and to the people who drink the tea brought the fish back to the river and let the ecology recover.",
    "In 1999 the Emperor and Empress visited and tasted the garden's organic tea. Organic JAS certification followed in 2001, then American and EU organic certification and GlobalG.A.P. — the strongest possible witness to a century of organic practice.",
  ],
  gardenImage1Alt: "The organic tea garden in Uji",
  gardenImage2Alt: "The tea fields",
  heritageEyebrow: "Heritage Timeline",
  heritageTitle: "A century of continuity",
  heritage: [
    { year: "1858", event: "The hillside is cleared and tea planting begins" },
    { year: "1975", event: "Turning to organic cultivation; pesticides stopped" },
    { year: "1982", event: "The whole garden completes its organic conversion" },
    { year: "1999", event: "The Emperor and Empress taste the garden's organic tea" },
    { year: "2001", event: "Organic JAS certification" },
    { year: "2007", event: "US organic certification" },
    { year: "2009", event: "EU organic certification" },
    { year: "2022", event: "GlobalG.A.P. certification" },
  ],
  teasEyebrow: "Our Teas",
  teasTitle: "Four MUNI organic green teas",
  teasLead:
    "From morning stillness to settling before sleep, one of these teas will meet the frequency you're in.",
  products: [
    {
      id: "matcha",
      name: "Organic Uji matcha",
      nameEn: "Organic Uji Matcha",
      origin: "Uji, Kyoto",
      tagline: "Organic steamed leaf, stone-ground, deep emerald",
      description:
        "From Uji in Kyoto, where Japanese green tea began. The bushes are shaded for more than twenty days before picking, so the leaves accumulate more theanine and chlorophyll. Selected organic steamed leaf is ground slowly on traditional stone mills, keeping the nutrition and the deep green intact. Every bowl gathers a century of the spirit of the tea way.",
      character: "Sweet and lingering, a note of nori, a creamy texture",
      ritual: "A morning practice — whisk to a fine foam and stay with the attention it asks for",
    },
    {
      id: "gyokuro",
      name: "Organic gyokuro",
      nameEn: "Organic Gyokuro",
      origin: "Kagoshima",
      tagline: "Twenty days under shade, with its distinctive covered aroma and sweetness",
      description:
        "Gyokuro is the highest grade of Japanese green tea. Shaded for more than twenty days before picking, its theanine rises sharply and brings the distinctive ooika — a deep, sweet, seaweed-like aroma. Kagoshima's warm climate and volcanic soil give the leaf a rounder, fuller flavour.",
      character: "Rich and sweet, a covered nori aroma, silky, with a long finish",
      ritual: "An afternoon rest — brew at 50°C and feel its dew-like warmth",
    },
    {
      id: "sencha",
      name: "Organic sencha",
      nameEn: "Organic Sencha",
      origin: "Kagoshima and Uji",
      tagline: "Japan's everyday tea — clean, sweet, dependable",
      description:
        "Sencha is Japan's most representative green tea, some 80% of the country's production. Organic leaf from the two great regions of Kagoshima and Uji grows in full sun and is steamed, rolled and dried in the traditional way. A clean herbal aroma with natural sweetness makes it the best choice for a daily tea ritual.",
      character: "Clean and sweet, herbal, lightly astringent with a sweet return, bright green liquor",
      ritual: "Everyday tea — brew at 70°C and feel the freshness of sun and earth",
    },
    {
      id: "hojicha",
      name: "Organic hojicha",
      nameEn: "Organic Hojicha",
      origin: "Uji, Kyoto",
      tagline: "High-roasted, a warm and settling tea for the evening",
      description:
        "Hojicha is green tea roasted at high temperature, which greatly lowers its caffeine and brings a distinctive toasted warmth. This organic hojicha from Uji is milled carefully in traditional iron mortars, richly aromatic without bitterness. Its very low caffeine makes it perfect for a settling ritual before sleep.",
      character: "Toasted and warm, nutty and sweet, gentle, very low in caffeine",
      ritual: "Settling before sleep — drink warm, with a scent meditation, into deep relaxation",
    },
  ],
  labelCharacter: "Energetic character",
  labelRitual: "MUNI ritual",
  certsEyebrow: "Certifications",
  certsTitle: "International organic certification",
  certsLead:
    "A full certification framework across Japan, the United States and the EU — the strongest recognition of a century of organic practice.",
  certs: [
    { name: "Organic JAS", desc: "Japanese Ministry of Agriculture organic certification", year: "2001" },
    { name: "NOP", desc: "US organic certification", year: "2007" },
    { name: "EU Organic", desc: "EU organic certification (ICEA)", year: "2009" },
    { name: "GlobalG.A.P.", desc: "International agricultural production certification", year: "2022" },
    { name: "FSSC 22000", desc: "Food safety management system certification", year: "2024" },
    { name: "JONA", desc: "Japan Organic and Natural Foods Association", year: "2001" },
  ],
  factorsEyebrow: "Energy Factors",
  factorsTitle: "Six factors behind the energy",
  factorsLead: "From the garden to your bowl, every step guarantees the quality of the energy.",
  factors: [
    { icon: "🌱", title: "One harvest a year", desc: "The 88th night after the start of spring is the most precious moment in the Japanese tea year. Picked only once, every leaf holds the vitality gathered across the whole winter." },
    { icon: "✋", title: "Picked by hand", desc: "Traditional hand-picking of only the bud and two youngest leaves. Differences no machine can read are judged precisely between the growers' fingers, so every leaf reaches the highest grade." },
    { icon: "♨️", title: "Steamed within six hours", desc: "No more than six hours passes between picking and steaming. Steaming is the distinctive Japanese fixing method, halting oxidation instantly with hot vapour and preserving the leaf's theanine and catechins." },
    { icon: "🏔️", title: "Uji × Kagoshima", desc: "Uji, where Japanese green tea began, in a misty valley 250 metres up; Kagoshima, warm and southern, on volcanic soil. Two great terroirs meeting give the leaf its layers and depth." },
    { icon: "🌿", title: "A century of organic", desc: "Tea has grown here since 1858 and organically since 1975 — more than 165 years of garden history. Six generations have used no pesticide or chemical fertiliser, only what nature provides." },
    { icon: "✨", title: "MUNI frequency resonance", desc: "Every tea is tuned with MUNI Frequency Resonance™, so the alpha-wave frequency of theanine resonates deeply with your state of awareness." },
  ],
  galleryEyebrow: "Harvest & Process",
  galleryTitle: "Picking and making",
  galleryLead:
    "From hand-picking in the garden to steaming in the factory, every step follows a century-old tradition, holding the leaf's vitality in the shortest possible time.",
  galleryAlts: ["Picking tea by hand", "The tea garden", "Steaming the leaf", "The matcha ceremony"],
  matrixEyebrow: "Resonance Matrix",
  matrixTitle: "Green tea × MUNI Scent pairings",
  matrixLead:
    "Every tea can be paired with MUNI Scent, so the frequencies of drinking and smell resonate together and the ritual becomes complete.",
  matrixHeaders: { tea: "Green tea", scent: "MUNI Scent", dimension: "Resonance", timing: "When to use it" },
  matrixRows: [
    { tea: "Organic Uji matcha", scent: "MUNI Scent", dimension: "Clear awareness · attention on now", timing: "Morning stillness, or the practice before meditation" },
    { tea: "Organic gyokuro", scent: "MUNI Scent", dimension: "Deep nourishment · warm repair", timing: "An afternoon rest, or when nourishment is needed" },
    { tea: "Organic sencha", scent: "MUNI Scent", dimension: "Settled ease · daily nourishment", timing: "A settling ritual inside the everyday cup" },
    { tea: "Organic hojicha", scent: "MUNI Scent", dimension: "Steady rooting · settling into sleep", timing: "The evening ritual, or whenever you need to let go" },
  ],
  ctaTitle: "Want to know which tea suits where you are?",
  ctaBody:
    "Tell the MUNI Healing Consultant how you are and what you need,\nand it will suggest the tea that fits you best.",
  ctaConsultant: "Ask the MUNI Healing Consultant",
  ctaSystems: "Explore more MUNI healing systems →",
};

export const GREEN_TEA_COPY: Record<Locale, GreenTeaCopy> = { zh, en };

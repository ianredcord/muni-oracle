// MUNI × Fonte di Foiano 橄欖油頁面的中英文文案（/olive-oil）
import type { Locale } from "@/i18n/config";

export type OliveOilCopy = {
  metaTitle: string;
  metaDescription: string;
  navSystems: string;
  navConsultant: string;
  eyebrow: string;
  title: string;
  heroBody: string;
  estateEyebrow: string;
  estateTitle: string;
  estateSubtitle: string;
  estateParagraphs: string[];
  estateImage1Alt: string;
  estateImage2Alt: string;
  harvestEyebrow: string;
  harvestTitle: string;
  harvestLead: string;
  harvestCards: { icon: string; title: string; desc: string }[];
  collectionEyebrow: string;
  collectionTitle: string;
  collectionLead: string;
  products: {
    id: string;
    name: string;
    nameZh: string;
    tagline: string;
    description: string;
    aroma: string;
    taste: string;
    pairing: string;
  }[];
  labelAroma: string;
  labelTaste: string;
  labelPairing: string;
  awardsEyebrow: string;
  awardsTitle: string;
  awards: { name: string; score: string; desc: string }[];
  features: { icon: string; title: string; desc: string }[];
  galleryEyebrow: string;
  galleryTitle: string;
  galleryLead: string;
  galleryAlts: string[];
  matrixEyebrow: string;
  matrixTitle: string;
  matrixLead: string;
  matrixHeaders: { oil: string; scent: string; dimension: string; timing: string };
  matrixRows: { oil: string; scent: string; dimension: string; timing: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaConsultant: string;
  ctaSystems: string;
};

const zh: OliveOilCopy = {
  metaTitle: "MUNI × Fonte di Foiano | 義大利早摘初榨橄欖油 × 頻率共振",
  metaDescription:
    "MUNI 攜手義大利 Fonte di Foiano 莊園，以 Bolgheri 產區百年橄欖樹的早摘初榨橄欖油，結合 Frequency Resonance™ 技術，將地中海大地的生命能量帶入你的日常療癒儀式。Flos Olei 99/100 全球最高評分。",
  navSystems: "療癒系統",
  navConsultant: "MUNI 療癒顧問",
  eyebrow: "MUNI × Fonte di Foiano",
  title: "義大利早摘初榨橄欖油",
  heroBody:
    "來自托斯卡尼 Bolgheri 的百年莊園，\n以早摘初榨鎖住大地最鮮活的生命能量。\n每一滴，都是陽光、海風與土地的頻率共振。",
  estateEyebrow: "The Estate",
  estateTitle: "Fonte di Foiano",
  estateSubtitle: "自 1979 年，守護每一棵橄欖樹",
  estateParagraphs: [
    "Fonte di Foiano 坐落於托斯卡尼最負盛名的橄欖油產區——Bolgheri，距離第勒尼安海僅 10 分鐘車程。地中海的溫暖海風與托斯卡尼丘陵的礦物土壤，孕育出世界上最優質的橄欖。",
    "莊園佔地 30 公頃，種植超過一萬棵橄欖樹，涵蓋 Leccino、Frantoio、Moraiolo、Maurino 與 Leccio del Corno 等經典品種。家族三代人以對土地的深厚情感，堅持從採摘到裝瓶全程在莊園內完成，確保每一滴橄欖油都保留了最完整的風土表達。",
    "如今，Fonte di Foiano 的橄欖油出口至全球超過 30 個國家，並連續多年獲得 Flos Olei 99/100 的頂級評分——這是全球橄欖油評鑑中的最高殊榮之一。",
  ],
  estateImage1Alt: "Fonte di Foiano 莊園橄欖園",
  estateImage2Alt: "Bolgheri 橄欖樹與夕陽",
  harvestEyebrow: "Early Harvest",
  harvestTitle: "為何選擇「早摘」？",
  harvestLead:
    "「早摘」（Early Harvest）是指在橄欖果實由綠轉紫、尚未完全成熟時進行採收。\n這個短暫的黃金窗口期，果實的橄欖多酚、角鯊烯、維生素 E 等活性物質含量達到頂峰，但出油率卻最低。\n儘管犧牲了產量，Fonte di Foiano 堅持早摘，只為萃取最濃郁的生命能量與最鮮明的風味層次。",
  harvestCards: [
    { icon: "🌿", title: "高達 10 倍的多酚含量", desc: "早摘橄欖油的多酚含量是晚摘油的 5-10 倍，帶來更強的抗氧化能力與更鮮明的辛辣感。" },
    { icon: "💧", title: "極低的酸度 (0.1-0.2%)", desc: "遠低於歐盟特級初榨標準（0.8%），極低的酸度代表果實從採摘到壓榨過程中的完美狀態。" },
    { icon: "🎨", title: "無與倫比的風味層次", desc: "朝鮮薊、青番茄、杏仁、芳香草本……早摘油獨有的青草氣息與複雜風味，是風土最真實的表達。" },
  ],
  collectionEyebrow: "The Collection",
  collectionTitle: "Fonte di Foiano 全系列",
  collectionLead:
    "從單一品種到經典混釀，每一款油都是 Bolgheri 風土的獨特詮釋，為你的療癒儀式帶來不同的頻率。",
  products: [
    {
      id: "grand-cru",
      name: "Grand Cru",
      nameZh: "特級珍藏",
      tagline: "莊園的靈魂之作",
      description:
        "Grand Cru 是 Fonte di Foiano 的旗艦之作，以莊園中最古老的橄欖樹果實精心釀製。多品種混釀——Leccino、Frantoio、Moraiolo 與 Maurino——在十月初的清晨手工採摘，於 4 小時內完成冷萃取。深邃的翠綠色澤中蘊含著朝鮮薊、番茄與新鮮杏仁的層次香氣，苦味與辛辣鮮明而優雅。",
      aroma: "朝鮮薊、新鮮番茄、杏仁、芳香草本",
      taste: "結構飽滿，苦味與辛辣鮮明優雅，帶有黑胡椒與綠色杏仁的餘韻",
      pairing: "牛排塔塔、松露燉飯、硬質熟成起司、烤蔬菜",
    },
    {
      id: "1979",
      name: "1979",
      nameZh: "創始年份",
      tagline: "以創始年命名，向土地致敬",
      description:
        "以莊園創立年份命名的單一品種橄欖油，100% Leccio del Corno 品種。這款油承載著家族三代對這片土地的情感——豐富圓潤的口感中，帶有朝鮮薊、菊苣和萵苣的植物暗示，薄荷與迷迭香的香脂氣息在鼻腔中緩緩展開。",
      aroma: "朝鮮薊、菊苣、萵苣，薄荷與迷迭香的香脂氣息",
      taste: "優雅複雜，帶有朝鮮薊、青草和番茄葉的綠色調，苦味與辛辣鮮明持久",
      pairing: "章魚前菜、牛肝菌肉薄片、焗烤番茄、烤紅肉",
    },
    {
      id: "riflessi",
      name: "Riflessi",
      nameZh: "光影",
      tagline: "光影之間，溫柔的橄欖之語",
      description:
        "Riflessi 是一款輕果香特級初榨橄欖油，100% Maurino 品種，十月採收。過濾後呈現迷人的金黃色帶淡綠色調。優雅圓潤的開場，帶有番茄與芳香草本的氣息，薄荷、羅勒和迷迭香的香脂調在口中溫柔綻放。苦味與辛辣鮮明平衡，以甜美收尾。",
      aroma: "番茄、芳香草本、薄荷、羅勒、迷迭香",
      taste: "圓潤飽滿，萵苣、黑胡椒與杏仁的暗示，甜美收尾",
      pairing: "豆子前菜、朝鮮薊燉飯、烤兔肉、山羊起司",
    },
    {
      id: "toscano-igp",
      name: "Toscano PGI Bolgheri",
      nameZh: "托斯卡尼 PGI 博格利",
      tagline: "Bolgheri 產區的風土印記",
      description:
        "擁有 PGI（地理標誌保護）認證的托斯卡尼橄欖油，代表著 Bolgheri 產區最純正的風土表達。這款油融合了莊園多個品種的精華，在嚴格的產區規範下釀製，每一滴都是 Bolgheri 丘陵、海風與陽光的結晶。",
      aroma: "青草、番茄葉、地中海草本",
      taste: "均衡和諧，帶有溫暖的胡椒感與清新的草本餘韻",
      pairing: "義大利麵、烤魚、新鮮沙拉、麵包佐食",
    },
  ],
  labelAroma: "香氣：",
  labelTaste: "口感：",
  labelPairing: "搭配：",
  awardsEyebrow: "Accolades",
  awardsTitle: "全球頂級評鑑的肯定",
  awards: [
    { name: "Flos Olei 2025", score: "99/100", desc: "全球橄欖油評鑑最高分之一" },
    { name: "Bibenda 2024", score: "5 Gocce", desc: "Grand Cru、Riflessi、Toscano IGP 三款同獲最高評價" },
    { name: "Gambero Rosso", score: "3 Foglie + Stella", desc: "義大利美食界最高榮譽——三葉獎與星級認證" },
    { name: "Leone d'Oro", score: "1° Classificato", desc: "Toscano IGP Bolgheri 榮獲 DOP/IGP 類別第一名" },
    { name: "Slow Food", score: "Grande Olio", desc: "慢食運動認證的偉大橄欖油" },
    { name: "AIPO d'Argento", score: "Goccia d'Oro", desc: "金滴獎——義大利橄欖油品質的最高肯定" },
  ],
  features: [
    { icon: "🫒", title: "早摘初榨", desc: "橄欖在最佳時機提前採收（Early Harvest），此時多酚含量最高，營養最為豐富。從採摘到壓榨不超過 4 小時，鎖住每一滴生命力。" },
    { icon: "❄️", title: "冷萃取 × 惰性氣體", desc: "全程低溫冷萃取，搭配惰性氣體保護裝瓶，最大化保留橄欖油中的活性多酚、維生素 E 與抗氧化物質。" },
    { icon: "🌳", title: "百年橄欖樹", desc: "莊園中的橄欖樹歷經數十年甚至百年生長，深層根系連結大地能量，果實蘊含更豐富的礦物質與風土特性。" },
    { icon: "🏔️", title: "Bolgheri 頂級產區", desc: "位於托斯卡尼 Bolgheri 產區的丘陵地帶，地中海海風與托斯卡尼陽光交織，賦予橄欖獨特的風味層次。" },
    { icon: "👨‍👩‍👧", title: "家族三代傳承", desc: "自 1979 年創立以來，Fonte di Foiano 家族三代人以對土地的愛與感恩，守護著 30 公頃橄欖園中的 10,000 棵橄欖樹。" },
    { icon: "✨", title: "MUNI 頻率共振", desc: "每一瓶橄欖油都經過 MUNI Frequency Resonance™ 技術調頻，讓橄欖油中的活性分子以最和諧的頻率與你的身體共振。" },
  ],
  galleryEyebrow: "Harvest",
  galleryTitle: "採收的季節",
  galleryLead:
    "每年十月，Bolgheri 的橄欖園迎來最重要的時刻——手工採摘，在清晨露水未乾時開始，只為捕捉橄欖最鮮活的生命力。",
  galleryAlts: ["橄欖採收", "Bolgheri 橄欖園風景", "Fonte di Foiano 全系列橄欖油", "橄欖採摘過程"],
  matrixEyebrow: "Resonance Matrix",
  matrixTitle: "橄欖油 × 牟尼香 共振搭配",
  matrixLead:
    "每一款橄欖油都可搭配 MUNI 牟尼香，讓飲食與嗅覺的頻率同時共振，開啟完整的療癒儀式。",
  matrixHeaders: { oil: "橄欖油", scent: "牟尼香", dimension: "共振維度", timing: "建議時機" },
  matrixRows: [
    { oil: "Grand Cru", scent: "牟尼香", dimension: "深層滋養・守護能量", timing: "需要深層滋養與保護的重要時刻" },
    { oil: "1979", scent: "牟尼香", dimension: "穩定扎根・回到中心", timing: "需要穩定、扎根的力量" },
    { oil: "Riflessi", scent: "牟尼香", dimension: "輕盈喜悅・綻放光彩", timing: "想要由內而外感受喜悅" },
    { oil: "Toscano PGI", scent: "牟尼香", dimension: "安定平和・日常滋養", timing: "日常飲食中的安定儀式" },
  ],
  ctaTitle: "想知道哪款橄欖油最適合你此刻的狀態？",
  ctaBody: "告訴 MUNI 療癒顧問你現在的身體感受與飲食需求，\nAI 會為你推薦最適合的橄欖油方案。",
  ctaConsultant: "問問 MUNI 療癒顧問",
  ctaSystems: "探索更多 MUNI 療癒系統 →",
};

const en: OliveOilCopy = {
  metaTitle:
    "MUNI × Fonte di Foiano | Italian early-harvest extra virgin olive oil × frequency resonance",
  metaDescription:
    "MUNI works with the Fonte di Foiano estate in Italy — early-harvest extra virgin oil from century-old trees in Bolgheri, tuned with Frequency Resonance™ to bring the living energy of the Mediterranean into your daily ritual. Flos Olei 99/100, the highest score in the world.",
  navSystems: "Healing systems",
  navConsultant: "MUNI Healing Consultant",
  eyebrow: "MUNI × Fonte di Foiano",
  title: "Italian early-harvest extra virgin olive oil",
  heroBody:
    "From a century-old estate in Bolgheri, Tuscany,\nearly harvesting and cold pressing hold the earth's liveliest energy.\nEvery drop is sunlight, sea wind and soil in resonance.",
  estateEyebrow: "The Estate",
  estateTitle: "Fonte di Foiano",
  estateSubtitle: "Tending every olive tree since 1979",
  estateParagraphs: [
    "Fonte di Foiano sits in Bolgheri, Tuscany's most celebrated olive oil region, ten minutes from the Tyrrhenian Sea. Warm Mediterranean wind and the mineral soil of the Tuscan hills produce some of the finest olives in the world.",
    "The estate covers 30 hectares with more than ten thousand olive trees, including the classic Leccino, Frantoio, Moraiolo, Maurino and Leccio del Corno. Three generations of one family, out of deep feeling for the land, insist that everything from harvest to bottling happens on the estate, so that every drop keeps the fullest expression of its terroir.",
    "Fonte di Foiano's oils now reach more than 30 countries and have received Flos Olei 99/100 for several years running — among the highest honours in olive oil assessment anywhere.",
  ],
  estateImage1Alt: "The Fonte di Foiano olive grove",
  estateImage2Alt: "Olive trees at sunset in Bolgheri",
  harvestEyebrow: "Early Harvest",
  harvestTitle: "Why harvest early?",
  harvestLead:
    "Early harvest means picking while the fruit is turning from green to purple, before it is fully ripe.\nIn that brief golden window, polyphenols, squalene and vitamin E peak — and the yield of oil is at its lowest.\nFonte di Foiano accepts the smaller yield in order to extract the most concentrated vitality and the clearest layers of flavour.",
  harvestCards: [
    { icon: "🌿", title: "Up to ten times the polyphenols", desc: "Early-harvest oil carries five to ten times the polyphenols of a late harvest, with stronger antioxidant capacity and a more distinct peppery bite." },
    { icon: "💧", title: "Very low acidity (0.1–0.2%)", desc: "Far below the EU extra virgin standard of 0.8%. Such low acidity reflects perfect condition from picking through to pressing." },
    { icon: "🎨", title: "Unmatched layers of flavour", desc: "Artichoke, green tomato, almond, aromatic herbs — the grassy character and complexity particular to early-harvest oil, terroir at its most honest." },
  ],
  collectionEyebrow: "The Collection",
  collectionTitle: "The full Fonte di Foiano range",
  collectionLead:
    "From single varieties to classic blends, every oil is a distinct reading of Bolgheri terroir, bringing a different frequency to your ritual.",
  products: [
    {
      id: "grand-cru",
      name: "Grand Cru",
      nameZh: "The estate's flagship",
      tagline: "The soul of the estate",
      description:
        "Grand Cru is Fonte di Foiano's flagship, made from the fruit of the estate's oldest trees. A blend of Leccino, Frantoio, Moraiolo and Maurino, hand-picked in the early mornings of October and cold-extracted within four hours. A deep emerald colour carries layered aromas of artichoke, tomato and fresh almond, with a bitterness and pungency both distinct and elegant.",
      aroma: "Artichoke, fresh tomato, almond, aromatic herbs",
      taste: "Full-structured, with a distinct and elegant bitterness and pungency, finishing on black pepper and green almond",
      pairing: "Steak tartare, truffle risotto, aged hard cheeses, roast vegetables",
    },
    {
      id: "1979",
      name: "1979",
      nameZh: "The founding year",
      tagline: "Named for the founding year, in tribute to the land",
      description:
        "A single-variety oil named for the estate's founding year, 100% Leccio del Corno. It carries three generations of feeling for this land — a rich, round mouthfeel with vegetal hints of artichoke, chicory and lettuce, and the balsamic notes of mint and rosemary unfolding slowly.",
      aroma: "Artichoke, chicory, lettuce, with balsamic mint and rosemary",
      taste: "Elegant and complex, with green tones of artichoke, grass and tomato leaf; bitterness and pungency distinct and lasting",
      pairing: "Octopus antipasti, carpaccio with porcini, baked tomatoes, roast red meat",
    },
    {
      id: "riflessi",
      name: "Riflessi",
      nameZh: "Reflections",
      tagline: "Between light and shadow, olive speaks gently",
      description:
        "Riflessi is a lightly fruity extra virgin oil, 100% Maurino, harvested in October. Filtered, it shows an attractive gold with green tints. An elegant, rounded opening with tomato and aromatic herbs, and balsamic notes of mint, basil and rosemary opening gently in the mouth. Bitterness and pungency are clear and balanced, with a sweet finish.",
      aroma: "Tomato, aromatic herbs, mint, basil, rosemary",
      taste: "Round and full, with hints of lettuce, black pepper and almond, finishing sweet",
      pairing: "Bean antipasti, artichoke risotto, roast rabbit, goat's cheese",
    },
    {
      id: "toscano-igp",
      name: "Toscano PGI Bolgheri",
      nameZh: "Tuscan PGI Bolgheri",
      tagline: "The imprint of Bolgheri terroir",
      description:
        "A Tuscan oil with PGI (Protected Geographical Indication) certification, expressing Bolgheri terroir at its most authentic. It blends the essence of several estate varieties under strict regional rules, and every drop is the sum of Bolgheri's hills, sea wind and sun.",
      aroma: "Grass, tomato leaf, Mediterranean herbs",
      taste: "Balanced and harmonious, with a warm peppery quality and a fresh herbal finish",
      pairing: "Pasta, grilled fish, fresh salads, bread",
    },
  ],
  labelAroma: "Aroma: ",
  labelTaste: "Palate: ",
  labelPairing: "Pairing: ",
  awardsEyebrow: "Accolades",
  awardsTitle: "Recognised by the world's top assessments",
  awards: [
    { name: "Flos Olei 2025", score: "99/100", desc: "Among the highest scores in global olive oil assessment" },
    { name: "Bibenda 2024", score: "5 Gocce", desc: "Grand Cru, Riflessi and Toscano IGP all at the top rating" },
    { name: "Gambero Rosso", score: "3 Foglie + Stella", desc: "Italy's highest culinary honours — three leaves and a star" },
    { name: "Leone d'Oro", score: "1° Classificato", desc: "Toscano IGP Bolgheri placed first in the DOP/IGP category" },
    { name: "Slow Food", score: "Grande Olio", desc: "Recognised as a great oil by the Slow Food movement" },
    { name: "AIPO d'Argento", score: "Goccia d'Oro", desc: "The golden drop — Italy's highest recognition of olive oil quality" },
  ],
  features: [
    { icon: "🫒", title: "Early harvest, first pressing", desc: "Olives are picked early, at their peak of polyphenol content and nourishment. No more than four hours pass between picking and pressing, holding every drop of vitality." },
    { icon: "❄️", title: "Cold extraction × inert gas", desc: "Low-temperature cold extraction throughout, with inert gas protection at bottling, to preserve active polyphenols, vitamin E and antioxidants." },
    { icon: "🌳", title: "Century-old trees", desc: "The estate's trees have grown for decades and in places a century. Deep roots connect them to the earth's energy, and the fruit carries richer minerals and terroir." },
    { icon: "🏔️", title: "The finest Bolgheri terroir", desc: "In the hills of Bolgheri in Tuscany, Mediterranean sea wind and Tuscan sun together give these olives their distinct layers of flavour." },
    { icon: "👨‍👩‍👧", title: "Three generations", desc: "Since 1979, three generations of the Fonte di Foiano family have tended 10,000 trees across 30 hectares, with love and gratitude for the land." },
    { icon: "✨", title: "MUNI frequency resonance", desc: "Every bottle is tuned with MUNI Frequency Resonance™, so the active molecules in the oil resonate with your body at their most harmonious frequency." },
  ],
  galleryEyebrow: "Harvest",
  galleryTitle: "The season of picking",
  galleryLead:
    "Every October the groves of Bolgheri reach their most important moment — hand-picking that begins while the dew is still on the fruit, to catch the olives at their liveliest.",
  galleryAlts: [
    "Olive harvest",
    "The Bolgheri olive grove",
    "The full Fonte di Foiano range",
    "Picking the olives",
  ],
  matrixEyebrow: "Resonance Matrix",
  matrixTitle: "Olive oil × MUNI Scent pairings",
  matrixLead:
    "Every oil can be paired with MUNI Scent, so the frequencies of taste and smell resonate together and the ritual becomes complete.",
  matrixHeaders: { oil: "Olive oil", scent: "MUNI Scent", dimension: "Resonance", timing: "When to use it" },
  matrixRows: [
    { oil: "Grand Cru", scent: "MUNI Scent", dimension: "Deep nourishment · protective energy", timing: "Important moments that call for deep nourishment and protection" },
    { oil: "1979", scent: "MUNI Scent", dimension: "Steady rooting · returning to centre", timing: "When you need steadiness and roots" },
    { oil: "Riflessi", scent: "MUNI Scent", dimension: "Lightness and gladness · opening out", timing: "When you want joy felt from the inside out" },
    { oil: "Toscano PGI", scent: "MUNI Scent", dimension: "Settled ease · daily nourishment", timing: "A settling ritual inside the ordinary meal" },
  ],
  ctaTitle: "Want to know which oil suits where you are?",
  ctaBody:
    "Tell the MUNI Healing Consultant how your body feels and what you're eating,\nand it will suggest the oil that fits you best.",
  ctaConsultant: "Ask the MUNI Healing Consultant",
  ctaSystems: "Explore more MUNI healing systems →",
};

export const OLIVE_OIL_COPY: Record<Locale, OliveOilCopy> = { zh, en };

// 人蔘療癒頁面的中英文文案（/ginseng）
import type { Locale } from "@/i18n/config";

export type GinsengProductText = {
  name: string;
  nameEn: string;
  subtitle?: string;
  tagline: string;
  description: string;
  ingredients: string[];
  energy: string;
};

export type GinsengCopy = {
  metaTitle: string;
  metaDescription: string;
  navSystems: string;
  navConsultant: string;
  eyebrow: string;
  title: string;
  heroBody: string;
  philosophyEyebrow: string;
  philosophyTitle: string;
  philosophyP1: string;
  philosophyP2: string;
  steps: { title: string; desc: string }[];
  productsEyebrow: string;
  productsTitle: string;
  productsLead: string;
  products: GinsengProductText[];
  ingredientsLabel: string;
  energyLabel: string;
  factorsEyebrow: string;
  factorsTitle: string;
  factorsLead: string;
  factors: { icon: string; title: string; desc: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaConsultant: string;
  ctaSystems: string;
};

const zh: GinsengCopy = {
  metaTitle: "MUNI × 人蔘療癒 | 韓國頂級紅參 × 共振頻率",
  metaDescription:
    "MUNI Frequency Resonance™ 與韓國頂級人蔘原料結合，透過六層共振技術賦予每一款產品最佳能量狀態。沉香黃帝丹、紅參石榴膠原蛋白果凍棒、牛膝紅參切片。",
  navSystems: "療癒系統",
  navConsultant: "MUNI 療癒顧問",
  eyebrow: "MUNI × Korean Red Ginseng",
  title: "人蔘療癒",
  heroBody:
    "千年本草智慧，遇見現代共振科學。\nMUNI Frequency Resonance™ 讓每一份珍貴原料，\n以最和諧的頻率與你的身體對話。",
  philosophyEyebrow: "Philosophy",
  philosophyTitle: "好的材料，\n值得最好的能量狀態",
  philosophyP1:
    "韓國人蔘被譽為「百草之王」，其珍貴的人蔘皂苷（Ginsenosides）具有調節免疫、抗疲勞、促進代謝等多重功效。然而，原料的品質只是起點——如何讓這些活性成分以最佳的能量狀態被人體吸收，才是關鍵。",
  philosophyP2:
    "MUNI 透過 Frequency Resonance™ 六層共振技術，為每一款人蔘產品進行能量校準。從基頻設定到意識維度的展開，讓人蔘皂苷的分子振動頻率與人體細胞達到最深層的諧振，實現「材料 × 頻率」的雙重療癒。",
  steps: [
    { title: "嚴選原料", desc: "韓國六年根紅參、珍稀沉香、天然鹿茸" },
    { title: "傳統炮製", desc: "遵循本草智慧，現代科技精確控制" },
    { title: "共振校準", desc: "MUNI Frequency Resonance™ 六層調頻" },
    { title: "能量釋放", desc: "以最佳頻率與你的身體深層對話" },
  ],
  productsEyebrow: "Products",
  productsTitle: "三款嚴選人蔘製品",
  productsLead:
    "每一款都經過 MUNI Frequency Resonance™ 六層共振校準，讓珍貴原料以最和諧的能量狀態呈現。",
  products: [
    {
      name: "高級沉香黃帝丹",
      nameEn: "Premium Agarwood Emperor Pill",
      tagline: "沉香 × 鹿茸 × 山參的極致相遇",
      description:
        "以珍貴沉香為核心，結合鹿茸與山參的滋養精華。沉香自古被視為「眾香之首」，在東方養生傳統中具有安神定志、溫中散寒的珍貴價值。每一顆黃帝丹都經過 MUNI Frequency Resonance™ 六層共振校準，讓珍稀原料的能量以最和諧的頻率釋放。",
      ingredients: ["沉香", "鹿茸", "山參", "當歸", "熟地黃"],
      energy: "溫補元氣・安神定志",
    },
    {
      name: "紅參石榴膠原蛋白果凍棒",
      nameEn: "Red Ginseng Pomegranate Collagen Jelly",
      subtitle: "14 包入",
      tagline: "不加一滴水，濃郁的石榴味",
      description:
        "將韓國六年根紅參的滋養力量，與石榴的抗氧化精華和魚膠原蛋白完美融合。不加一滴水的濃縮製程，保留了每一份營養的完整性。果凍棒的便攜形態，讓日常養護變得輕鬆愉悅。經 MUNI Frequency Resonance™ 調頻後，紅參皂苷的生物活性頻率與人體細胞產生更深層的共振。",
      ingredients: ["六年根紅參", "石榴濃縮液", "魚膠原蛋白", "維生素 C"],
      energy: "美容養顏・活力煥發",
    },
    {
      name: "牛膝紅參切片",
      nameEn: "Achyranthes Red Ginseng Slices",
      tagline: "在保留營養成分的同時，保持獨特的味道和營養",
      description:
        "精選韓國優質紅參，搭配牛膝的強筋健骨功效。每一片切片都保留了紅參完整的營養成分與獨特風味。牛膝在傳統本草中被譽為「引藥下行」的要藥，與紅參搭配能將滋養能量引導至下肢與腎經。MUNI Frequency Resonance™ 技術確保每一片紅參切片的能量場達到最佳共振狀態。",
      ingredients: ["韓國紅參", "牛膝", "蜂蜜"],
      energy: "強筋健骨・溫養下元",
    },
  ],
  ingredientsLabel: "核心成分",
  energyLabel: "能量屬性",
  factorsEyebrow: "Energy Factors",
  factorsTitle: "六大正面能量因素",
  factorsLead: "從原料產地到共振技術，每一個環節都是能量品質的保證。",
  factors: [
    { icon: "🌿", title: "韓國六年根紅參", desc: "只選用生長六年以上的紅參，皂苷含量達到最高峰值，是大自然賦予的珍貴滋養之源。" },
    { icon: "🔬", title: "MUNI 六層共振校準", desc: "每一款產品都經過 Frequency Resonance™ 六層共振技術處理，讓原料的能量頻率與人體達到最佳諧振。" },
    { icon: "🏔️", title: "忠清南道產地直送", desc: "原料來自韓國忠清南道的優質產區，得天獨厚的氣候與土壤孕育出最高品質的人蔘。" },
    { icon: "⚗️", title: "傳統炮製工藝", desc: "遵循東方本草的傳統炮製智慧，以現代科技精確控制每一道工序，保留原料的完整活性。" },
    { icon: "🍯", title: "天然輔料搭配", desc: "以蜂蜜、石榴、沉香等天然輔料增效，每一種搭配都經過精心設計，讓功效相互增益。" },
    { icon: "✨", title: "能量品質認證", desc: "所有產品通過 MUNI 能量品質標準，確保從原料到成品的每一個環節都維持最高能量水準。" },
  ],
  ctaTitle: "想知道哪款人蔘製品最適合你此刻的狀態？",
  ctaBody:
    "告訴 MUNI 療癒顧問你現在的身體感受與需求，\nAI 會為你推薦最適合的人蔘產品方案。",
  ctaConsultant: "問問 MUNI 療癒顧問",
  ctaSystems: "探索更多 MUNI 療癒系統 →",
};

const en: GinsengCopy = {
  metaTitle: "MUNI × ginseng | Premium Korean red ginseng × frequency resonance",
  metaDescription:
    "MUNI Frequency Resonance™ meets premium Korean ginseng. Six layers of resonance calibration bring each product to its best energetic state: the agarwood Emperor Pill, red ginseng pomegranate collagen jelly, and achyranthes red ginseng slices.",
  navSystems: "Healing systems",
  navConsultant: "MUNI Healing Consultant",
  eyebrow: "MUNI × Korean Red Ginseng",
  title: "Ginseng",
  heroBody:
    "A thousand years of herbal wisdom meets the science of resonance.\nMUNI Frequency Resonance™ lets every precious material\nspeak to your body at its most harmonious frequency.",
  philosophyEyebrow: "Philosophy",
  philosophyTitle: "Good material deserves\nthe best energetic state",
  philosophyP1:
    "Korean ginseng is called the king of herbs, and its ginsenosides support immune regulation, resistance to fatigue and metabolism. But the quality of the raw material is only the start — what matters is how those active constituents reach the body in their best energetic state.",
  philosophyP2:
    "MUNI calibrates each ginseng product through six layers of Frequency Resonance™, from setting the base frequency to opening the dimension of awareness, so the molecular vibration of the ginsenosides resonates deeply with the body's cells — healing through material and frequency together.",
  steps: [
    { title: "Selected materials", desc: "Six-year Korean red ginseng, rare agarwood, natural deer antler" },
    { title: "Traditional preparation", desc: "Herbal wisdom, with modern precision at every step" },
    { title: "Resonance calibration", desc: "Six layers of MUNI Frequency Resonance™" },
    { title: "Energy released", desc: "Speaking to your body at its best frequency" },
  ],
  productsEyebrow: "Products",
  productsTitle: "Three selected ginseng preparations",
  productsLead:
    "Each one is calibrated through six layers of MUNI Frequency Resonance™, so rare materials arrive in their most harmonious energetic state.",
  products: [
    {
      name: "Premium agarwood Emperor Pill",
      nameEn: "Premium Agarwood Emperor Pill",
      tagline: "Where agarwood, deer antler and mountain ginseng meet",
      description:
        "Built around precious agarwood, with the nourishing essence of deer antler and mountain ginseng. Agarwood has long been called the first among fragrances, valued in Eastern wellness traditions for settling the spirit and warming the centre. Every Emperor Pill is calibrated through six layers of MUNI Frequency Resonance™, so the energy of these rare materials is released at its most harmonious frequency.",
      ingredients: ["Agarwood", "Deer antler", "Mountain ginseng", "Angelica sinensis", "Prepared rehmannia"],
      energy: "Warming vitality · settling the spirit",
    },
    {
      name: "Red ginseng pomegranate collagen jelly",
      nameEn: "Red Ginseng Pomegranate Collagen Jelly",
      subtitle: "14 sticks",
      tagline: "Not a drop of water added — full pomegranate flavour",
      description:
        "The nourishing strength of six-year Korean red ginseng, brought together with the antioxidant essence of pomegranate and marine collagen. A concentration process with no added water keeps every nutrient intact, and the stick format makes daily care easy. After MUNI Frequency Resonance™ tuning, the bioactive frequency of the ginsenosides resonates more deeply with the body's cells.",
      ingredients: ["Six-year red ginseng", "Pomegranate concentrate", "Marine collagen", "Vitamin C"],
      energy: "Skin and beauty · renewed vitality",
    },
    {
      name: "Achyranthes red ginseng slices",
      nameEn: "Achyranthes Red Ginseng Slices",
      tagline: "Nutrients kept intact, with the taste and character preserved",
      description:
        "Selected premium Korean red ginseng with achyranthes, which strengthens sinew and bone. Every slice keeps the full nutrition and distinctive flavour of the root. In herbal tradition achyranthes is the key medicine for drawing action downward; paired with red ginseng it guides the nourishing energy to the lower body and the Kidney channel. MUNI Frequency Resonance™ ensures each slice reaches its optimum resonant state.",
      ingredients: ["Korean red ginseng", "Achyranthes", "Honey"],
      energy: "Strengthening sinew and bone · warming the lower body",
    },
  ],
  ingredientsLabel: "Key ingredients",
  energyLabel: "Energetic quality",
  factorsEyebrow: "Energy Factors",
  factorsTitle: "Six factors behind the energy",
  factorsLead:
    "From where the material grows to how it's tuned, every step guarantees the quality of the energy.",
  factors: [
    { icon: "🌿", title: "Six-year Korean red ginseng", desc: "Only roots grown for six years or more, when ginsenoside content peaks — a rare source of nourishment from nature." },
    { icon: "🔬", title: "Six-layer MUNI calibration", desc: "Every product passes through six layers of Frequency Resonance™, bringing the material's energetic frequency into optimal harmony with the body." },
    { icon: "🏔️", title: "Direct from South Chungcheong", desc: "Materials come from the fine growing region of South Chungcheong in Korea, where climate and soil produce ginseng of the highest quality." },
    { icon: "⚗️", title: "Traditional processing", desc: "Following the wisdom of herbal preparation, with modern technology controlling each step precisely to preserve full activity." },
    { icon: "🍯", title: "Natural companions", desc: "Honey, pomegranate and agarwood are used to strengthen the effect, each pairing designed so the actions reinforce one another." },
    { icon: "✨", title: "Energy quality certification", desc: "Every product meets the MUNI energy quality standard, keeping the highest energetic level from raw material through to finished product." },
  ],
  ctaTitle: "Want to know which ginseng preparation fits where you are?",
  ctaBody:
    "Tell the MUNI Healing Consultant how your body feels and what you need,\nand it will suggest the ginseng products that suit you best.",
  ctaConsultant: "Ask the MUNI Healing Consultant",
  ctaSystems: "Explore more MUNI healing systems →",
};

export const GINSENG_COPY: Record<Locale, GinsengCopy> = { zh, en };

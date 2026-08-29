// 能量支持系統資料結構

export type EnergyModule = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];    // 代表性素材
  ctaLabel: string;
  ctaLink?: string;   // 未來接產品或內容頁
};

export type StateSuggestion = {
  id: string;
  stateLabel: string;      // 例如「容易累、消耗快」
  description: string;
  recommendation: string;  // 例如「橄欖油 × 人蔘」
  link?: string;           // 未來可接到產品組合或模組錨點
};

export type EnergyLayer = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;  // emoji 或 icon 名稱
};

// 能量系統三層結構
export const ENERGY_LAYERS: EnergyLayer[] = [
  {
    id: "body",
    title: "身體 Body",
    subtitle: "細胞能量與修復能力",
    description: "身體是能量的載體。透過穩定的營養輸入與循環支持，讓細胞有足夠的燃料進行日常運作與修復。這不是追求爆發力，而是建立持久、穩定的能量底盤。",
    icon: "🌿"
  },
  {
    id: "nervous",
    title: "神經 Nervous System",
    subtitle: "安全感與恢復節奏",
    description: "神經系統決定我們如何回應壓力。嗅覺是最快改變神經狀態的通道——透過植物香氣、呼吸與日常節律，幫助自律神經找到安全感與恢復的韻律。",
    icon: "🧘"
  },
  {
    id: "mind",
    title: "心與覺察 Mind / Awareness",
    subtitle: "情緒、存在感與決定方向",
    description: "當身體與神經被支持，我們才有餘裕看見自己的狀態。花精、牌卡與書寫不是要改變你，而是讓你看見當下，然後溫柔地選擇下一步。",
    icon: "✨"
  }
];

// 四大能量支持模組
export const ENERGY_MODULES: EnergyModule[] = [
  {
    id: "diet",
    title: "飲食能量支持",
    subtitle: "不是吃得多，而是吃得對",
    description: "聚焦在細胞能量、代謝與長時間穩定輸出。選擇能被身體理解的天然素材，建立每日能量的穩定底盤。",
    items: [
      "橄欖油（穩定、抗氧化、日常能量底盤）",
      "人蔘（深層支持、恢復力）",
      "綠茶／抹茶（清明、代謝與專注）"
    ],
    ctaLabel: "查看飲食能量支持",
    ctaLink: "#diet"
  },
  {
    id: "scent",
    title: "植物 × 嗅覺支持",
    subtitle: "嗅覺是最快改變神經狀態的通道",
    description: "用植物香氣幫神經找到安全感、中心感。不需要複雜的步驟，只要一個深呼吸，就能開始改變。",
    items: [
      "牟尼香（穩定、中心感）",
      "單方精油／Attar"
    ],
    ctaLabel: "進入牟尼香的世界",
    ctaLink: "/draw"
  },
  {
    id: "rhythm",
    title: "日常節律與小儀式",
    subtitle: "能量不是一次補滿，而是每天被溫柔對待",
    description: "早晨、午後與睡前三段節律，搭配簡單行為。不是要求你大改生活，而是在日常中創造小小的支持點。",
    items: [
      "早晨啟動：溫水＋一點橄欖油、簡短伸展",
      "下午回穩：一杯綠茶／抹茶、幾分鐘呼吸",
      "夜晚收神：點牟尼香或精油、減少螢幕光"
    ],
    ctaLabel: "建立我的能量日常",
    ctaLink: "#rhythm"
  },
  {
    id: "muni-method",
    title: "MUNI 方法：覺察式支持",
    subtitle: "不是要求你大改生活，只是多聽身體一點",
    description: "將牟尼花精牌卡、書寫與小儀式串連成一個循環：抽牌 → 看見當下 → 選擇一兩個支持方式 → 每天實作。這不是治療，而是陪伴。",
    items: [
      "抽牌：看見當下的狀態",
      "覺察：不急著改變，先承認感受",
      "選擇：找到今天可以做的一小步",
      "實作：讓支持成為日常的一部分"
    ],
    ctaLabel: "如何搭配 MUNI 使用？",
    ctaLink: "/draw"
  }
];

// 狀態推薦
export const STATE_SUGGESTIONS: StateSuggestion[] = [
  {
    id: "tired",
    stateLabel: "容易累、消耗快",
    description: "感覺能量總是不夠用，做什麼都提不起勁",
    recommendation: "橄欖油 × 人蔘",
    link: "#diet"
  },
  {
    id: "tense",
    stateLabel: "情緒緊繃、睡不好",
    description: "躺下來腦袋還在轉，身體放鬆不下來",
    recommendation: "牟尼香 ＋ 夜間儀式",
    link: "#scent"
  },
  {
    id: "unfocused",
    stateLabel: "頭腦混亂、專注差",
    description: "思緒很多但抓不到重點，容易分心",
    recommendation: "綠茶／抹茶 × 呼吸練習",
    link: "#rhythm"
  },
  {
    id: "overwhelmed",
    stateLabel: "覺得自己一直在撐",
    description: "沒有特別累，但總覺得快要撐不住",
    recommendation: "植物支持 × 日常儀式（橄欖油＋牟尼香）",
    link: "#muni-method"
  }
];

// 頁面文案
export const ENERGY_SUPPORT_CONTENT = {
  hero: {
    title: "能量，不是玄學，\n而是身體是否還能承載生活的基礎。",
    description: `MUNI 所說的「能量」，不是刺激，也不是補過頭。

它指的是：身體仍然可調節、神經能安定，
情緒有空間被承載的狀態。

我們選擇天然、可被身體理解的素材，
不是取代你，而是支持你回到自己的節奏。`,
    cta: "開始了解我的能量支持"
  },
  systemSection: {
    title: "能量系統如何被支持？",
    subtitle: "身體、神經、心——三個層次的整合支持"
  },
  modulesSection: {
    title: "四大 MUNI 能量支持模組",
    subtitle: "找到適合你的支持方式"
  },
  statesSection: {
    title: "依「狀態」快速選擇",
    subtitle: "不確定從哪裡開始？讓狀態引導你",
    unknownCta: "我不知道怎麼選"
  },
  footer: {
    message: "MUNI 不追求更快、更強。我們在乎的是，你能不能走得久、走得安定。",
    cta1: "探索能量支持產品",
    cta2: "從我的狀態開始"
  }
};

/* ── 英文版內容 ── */

export const ENERGY_LAYERS_EN: EnergyLayer[] = [
  {
    id: "body",
    title: "Body",
    subtitle: "Cellular energy and the capacity to repair",
    description:
      "The body carries the energy. Steady nourishment and circulation give the cells enough fuel for ordinary functioning and for repair. This isn't about peak output — it's about building a durable, steady floor of energy.",
    icon: "🌿",
  },
  {
    id: "nervous",
    title: "Nervous system",
    subtitle: "Safety and the rhythm of recovery",
    description:
      "The nervous system decides how we meet pressure. Smell is the fastest route to changing a nervous state — plant aromatics, breath and daily rhythm help the autonomic system find safety and a rhythm for recovery.",
    icon: "🧘",
  },
  {
    id: "mind",
    title: "Mind and awareness",
    subtitle: "Emotion, presence, and the direction you choose",
    description:
      "Once body and nerves are supported, there's room to see your own state. Essences, cards and writing aren't there to change you — they let you see where you are, and then choose the next step gently.",
    icon: "✨",
  },
];

export const ENERGY_MODULES_EN: EnergyModule[] = [
  {
    id: "diet",
    title: "Energy through food",
    subtitle: "Not eating more, but eating what fits",
    description:
      "Focused on cellular energy, metabolism, and steady output over long stretches. Natural materials the body can read, building a dependable daily floor.",
    items: [
      "Olive oil (steadiness, antioxidants, the daily energy floor)",
      "Ginseng (deep support, capacity to recover)",
      "Green tea and matcha (clarity, metabolism and focus)",
    ],
    ctaLabel: "See energy through food",
    ctaLink: "#diet",
  },
  {
    id: "scent",
    title: "Plants and smell",
    subtitle: "Smell is the fastest route to changing a nervous state",
    description:
      "Plant aromatics help the nervous system find safety and centre. No complicated steps — one deep breath is enough to begin.",
    items: [
      "MUNI Scent (steadiness, a sense of centre)",
      "Single oils and attars",
    ],
    ctaLabel: "Step into MUNI Scent",
    ctaLink: "/draw",
  },
  {
    id: "rhythm",
    title: "Daily rhythm and small rituals",
    subtitle: "Energy isn't topped up once — it's being treated gently each day",
    description:
      "Three points of rhythm — morning, afternoon and before sleep — with simple actions. Nothing about overhauling your life; just small points of support inside the ordinary day.",
    items: [
      "Morning: warm water with a little olive oil, and a short stretch",
      "Afternoon: a cup of green tea or matcha, a few minutes of breathing",
      "Evening: MUNI Scent or an oil, and less screen light",
    ],
    ctaLabel: "Build my daily energy",
    ctaLink: "#rhythm",
  },
  {
    id: "muni-method",
    title: "The MUNI method: support through awareness",
    subtitle: "Not asking you to change your life — just to listen to the body a little more",
    description:
      "MUNI cards, writing and small rituals joined into one loop: draw a card → see where you are → choose one or two forms of support → practise them daily. Not treatment — company.",
    items: [
      "Draw: see the state you're in",
      "Notice: don't rush to change it; acknowledge the feeling first",
      "Choose: find one small step you can take today",
      "Practise: let the support become part of the ordinary day",
    ],
    ctaLabel: "How does this work with MUNI?",
    ctaLink: "/draw",
  },
];

export const STATE_SUGGESTIONS_EN: StateSuggestion[] = [
  {
    id: "tired",
    stateLabel: "Tired easily, spent quickly",
    description: "There's never quite enough energy, and nothing raises any drive",
    recommendation: "Olive oil × ginseng",
    link: "#diet",
  },
  {
    id: "tense",
    stateLabel: "Tense and sleeping badly",
    description: "You lie down and the mind keeps running; the body won't release",
    recommendation: "MUNI Scent + an evening ritual",
    link: "#scent",
  },
  {
    id: "unfocused",
    stateLabel: "Scattered, hard to focus",
    description: "Plenty of thoughts, no grip on the important one, easily distracted",
    recommendation: "Green tea or matcha × breath practice",
    link: "#rhythm",
  },
  {
    id: "overwhelmed",
    stateLabel: "The sense of constantly holding on",
    description: "Not especially tired, and always close to not being able to hold it",
    recommendation: "Plant support × daily ritual (olive oil + MUNI Scent)",
    link: "#muni-method",
  },
];

export const ENERGY_SUPPORT_CONTENT_EN: typeof ENERGY_SUPPORT_CONTENT = {
  hero: {
    title:
      "Energy isn't mysticism.\nIt's whether the body can still carry your life.",
    description: `What MUNI means by energy isn't stimulation, and isn't over-supplementing.

It means this: the body can still regulate, the nervous system can settle,
and feeling has room to be carried.

We choose natural materials the body can read —
not to replace you, but to support your return to your own rhythm.`,
    cta: "See what supports my energy",
  },
  systemSection: {
    title: "How is the energy system supported?",
    subtitle: "Body, nerves, mind — support integrated across three layers",
  },
  modulesSection: {
    title: "Four MUNI energy modules",
    subtitle: "Find the kind of support that fits you",
  },
  statesSection: {
    title: "Choose by how you are",
    subtitle: "Not sure where to start? Let your state lead",
    unknownCta: "I don't know how to choose",
  },
  footer: {
    message:
      "MUNI isn't after faster or stronger. What we care about is whether you can go a long way, steadily.",
    cta1: "Explore the energy support range",
    cta2: "Start from how I am",
  },
};

/* ── 依語言取用 ── */

import type { Locale } from "@/i18n/config";

export function getEnergySupport(locale: Locale) {
  return locale === "en"
    ? {
        layers: ENERGY_LAYERS_EN,
        modules: ENERGY_MODULES_EN,
        states: STATE_SUGGESTIONS_EN,
        content: ENERGY_SUPPORT_CONTENT_EN,
      }
    : {
        layers: ENERGY_LAYERS,
        modules: ENERGY_MODULES,
        states: STATE_SUGGESTIONS,
        content: ENERGY_SUPPORT_CONTENT,
      };
}

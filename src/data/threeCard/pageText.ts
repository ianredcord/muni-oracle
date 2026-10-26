// 三牌陣頁面骨架文字（標題、按鈕、空狀態）。不放進 i18n 字典，避免與其他進行中的改動衝突。
import type { Locale, Mode, Position } from "../../lib/threeCard/types";

export type PageText = {
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  modeHint: string;
  pickHint: (n: number) => string;
  reveal: string;
  revealing: string;
  back: string;
  readingTitle: string;
  loading: string;
  notFound: string;
  drawAgain: string;
  save: string;
  saved: string;
  share: string;
  shared: string;
  deepTitle: string;
  deepButton: (name: string) => string;
  history: string;
  historyTitle: string;
  historyEmpty: string;
  zhOnlyNotice: string;
  blendLabel: string;
  bodyLabel: string;
  modeNames: Record<Mode, string>;
  positionNames: Record<Mode, Record<Position, string>>;
  /** 體驗流程 v2 */
  guideTitle: string;
  guide: [string, string, string];
  modeFit: Record<Mode, string>;
  nowPicking: (position: string, question: string) => string;
  poolCount: (n: number) => string;
  stepOf: (i: number) => string;
  next: string;
  prev: string;
  connect: string;
  labels: {
    opening: string; exception: string; mirror: string; structure: string;
    rel12: string; rel23: string; relBoth: string; arc: string; resonance: string; court: string;
    takeaway: string; blend: string; body: string; deep: string;
  };
  blendRoles: { main: string; release: string; support: string; merged: string };
  deepNote: string;
  flowerLabel: string;
  archetypeLabel: string;
  copyTakeaway: string;
  copied: string;
  /** 深度層 v3 */
  deepIn: string;
  deepClose: string;
  expandAll: string;
  collapseAll: string;
  /** 位置導語：A/B 用 origin/now/direction；C 用 archetype/persona/situation */
  deepLead: Record<"origin" | "now" | "direction" | "archetype" | "persona" | "situation", string>;
  deepQ: {
    carries: string; symbol: string; core: string; whyFlower: string; doNow: string; practice: string;
    archetypeWorks: string; fieldState: string;
  };
  dayPlan: { title: string; intro: string; morning: string; daytime: string; anytime: string; evening: string; from: (name: string) => string };
  deepArc: string;
  deepRel: string;
  deepBlend: string;
};

const zh: PageText = {
  navLabel: "三牌陣",
  title: "三牌陣",
  metaTitle: "三牌陣：來處・此刻・去向 | MUNI 牟尼塔羅",
  metaDescription: "抽三張牌，看一段歷程、一個卡點，或整體的自己。三張牌是三面鏡子，不是三個判決。",
  intro: "三張牌是三面鏡子，不是三個判決。",
  modeHint: "選一個模式開始",
  pickHint: (n) => `請點選 ${n} 張牌`,
  reveal: "翻開三張牌",
  revealing: "正在讀三張牌……",
  back: "重選模式",
  readingTitle: "你的三張牌",
  loading: "正在重播這次抽牌……",
  notFound: "這台裝置上找不到這次抽牌的紀錄。",
  drawAgain: "再抽一次",
  save: "儲存",
  saved: "已儲存",
  share: "分享",
  shared: "已複製",
  deepTitle: "深度解析",
  deepButton: (name) => `深度解析：${name}`,
  history: "我的紀錄",
  historyTitle: "三牌陣紀錄",
  historyEmpty: "還沒有紀錄。抽過的三牌陣會留在這台裝置上。",
  zhOnlyNotice: "",
  blendLabel: "花精複方",
  bodyLabel: "身體練習",
  modeNames: { A: "旅程", B: "卡點", C: "三面鏡" },
  positionNames: {
    A: { origin: "來處", now: "此刻", direction: "去向" },
    B: { origin: "處境", now: "卡點", direction: "下一步" },
    C: { origin: "原型", now: "人格", direction: "情境" },
  },
  guideTitle: "怎麼讀三牌陣",
  guide: ["三張牌各站一個位置，位置決定它在說什麼。", "此刻那張牌會給你一句允許句，那是今天帶走的一句話。", "三張牌是三面鏡子，不是三個判決。"],
  modeFit: { A: "適合：想看一段路", B: "適合：卡在一件事", C: "適合：想看整體的自己" },
  nowPicking: (position, question) => `現在選的是：${position}——${question}`,
  poolCount: (n) => `${n} 張`,
  stepOf: (i) => `第 ${i} 張`,
  next: "下一張",
  prev: "上一張",
  connect: "把三張連起來",
  labels: {
    opening: "這一局在看什麼", exception: "這一局比較特別", mirror: "三面鏡子怎麼合起來", structure: "這一局的分量",
    rel12: "來處與此刻之間", rel23: "此刻與去向之間", relBoth: "此刻被兩邊夾著", arc: "三張牌連起來的走向", resonance: "同一支花精出現了兩次", court: "這張宮廷牌是一個面向",
    takeaway: "今天帶走的一句", blend: "今天的花精複方", body: "身體覺察", deep: "每一張牌單獨看",
  },
  blendRoles: { main: "主｜此刻：今天的中心", release: "釋放｜來處：放下帶來的", support: "支持｜去向：往前走時扶一把", merged: "與主花精同支，已合併" },
  deepNote: "每張牌的完整三步、呼吸法、香氣與日常練習都在百科頁。",
  flowerLabel: "花精",
  archetypeLabel: "原型",
  copyTakeaway: "複製這句",
  copied: "已複製",
  deepIn: "深入這張牌",
  deepClose: "收起",
  expandAll: "全部展開",
  collapseAll: "全部收起",
  deepLead: {
    origin: "這些是它一直帶在身上的東西，不是今天才出現的。",
    now: "這張牌是今天的中心；下面是它的來歷，與現在就能做的事。",
    direction: "去向不是預告，是如果你允許，可以往哪裡練。",
    archetype: "原型是底色，不是標籤；下面是它在你身上運作的方式。",
    persona: "人格是你拿出來用的樣子；下面是它的核心訊息與花精。",
    situation: "情境是你現在站的場；下面是它的狀態，與可以練的事。",
  },
  deepQ: {
    carries: "這張牌帶著什麼來？", symbol: "它的象徵在說什麼？", core: "這張牌的核心訊息", whyFlower: "為什麼是這支花精？",
    doNow: "現在就能做的", practice: "如果往這裡走，可以練什麼？", archetypeWorks: "這個原型在你身上怎麼運作？", fieldState: "這個場現在的狀態",
  },
  dayPlan: {
    title: "今天怎麼用這一局",
    intro: "三張牌各自帶來一個做法，排成一天的順序。不用全做，挑一個開始。",
    morning: "早上｜當下調節", daytime: "白天｜日常練習", anytime: "想到就做｜香氣", evening: "晚上｜覺察方式",
    from: (name) => `來自 ${name}`,
  },
  deepArc: "這個走向怎麼用",
  deepRel: "兩張牌為什麼這樣接",
  deepBlend: "三支花精怎麼搭",
};

const en: PageText = {
  navLabel: "Three-Card",
  title: "Three-Card Spread",
  metaTitle: "Three-Card Spread: Origin · Now · Direction | MUNI Tarot",
  metaDescription: "Draw three cards to see a passage, a sticking point, or the whole of you. Three cards are three mirrors, not three verdicts.",
  intro: "Three cards are three mirrors, not three verdicts.",
  modeHint: "Choose a mode to begin",
  pickHint: (n) => `Pick ${n} card${n === 1 ? "" : "s"}`,
  reveal: "Turn the three cards",
  revealing: "Reading the three cards…",
  back: "Change mode",
  readingTitle: "Your three cards",
  loading: "Replaying this reading…",
  notFound: "No record of this reading on this device.",
  drawAgain: "Draw again",
  save: "Save",
  saved: "Saved",
  share: "Share",
  shared: "Copied",
  deepTitle: "Deep reading",
  deepButton: (name) => `Deep reading: ${name}`,
  history: "My readings",
  historyTitle: "Three-card readings",
  historyEmpty: "No readings yet. Spreads you draw stay on this device.",
  zhOnlyNotice: "The reading text is currently in Traditional Chinese; an English version is in preparation.",
  blendLabel: "Flower blend",
  bodyLabel: "Body practice",
  modeNames: { A: "Journey", B: "Sticking point", C: "Three mirrors" },
  positionNames: {
    A: { origin: "Origin", now: "Now", direction: "Direction" },
    B: { origin: "Situation", now: "Sticking point", direction: "Next step" },
    C: { origin: "Archetype", now: "Persona", direction: "Situation" },
  },
  guideTitle: "How to read",
  guide: ["Each card stands in a position; the position decides what it says.", "The card in the Now position gives you one permission line to take with you.", "Three cards are three mirrors, not three verdicts."],
  modeFit: { A: "For: a passage", B: "For: one stuck thing", C: "For: the whole of you" },
  nowPicking: (position, question) => `Now choosing: ${position} — ${question}`,
  poolCount: (n) => `${n} cards`,
  stepOf: (i) => `Card ${i}`,
  next: "Next card",
  prev: "Previous",
  connect: "Connect the three",
  labels: {
    opening: "What this spread looks at", exception: "This spread is unusual", mirror: "How the three mirrors fit", structure: "The weight of this spread",
    rel12: "Between origin and now", rel23: "Between now and direction", relBoth: "Now, held from both sides", arc: "The line the three cards make", resonance: "The same essence, twice", court: "This court card is a facet",
    takeaway: "The line to take with you", blend: "Today's flower blend", body: "Body awareness", deep: "Each card on its own",
  },
  blendRoles: { main: "Main — Now: today's centre", release: "Release — Origin: what to set down", support: "Support — Direction: a hand on the way", merged: "Same essence as the main; merged" },
  deepNote: "Each card's full three steps, breathing, aroma and daily practice are on its encyclopedia page.",
  flowerLabel: "Essence",
  archetypeLabel: "Archetype",
  copyTakeaway: "Copy this line",
  copied: "Copied",
  deepIn: "Go deeper into this card",
  deepClose: "Close",
  expandAll: "Expand all",
  collapseAll: "Collapse all",
  deepLead: {
    origin: "These are things it has carried for a while, not something that appeared today.",
    now: "This card is today's centre; below is where it comes from, and what you can do right now.",
    direction: "Direction is not a forecast; it is where you could practise, if you allow it.",
    archetype: "The archetype is the undertone, not a label; below is how it works in you.",
    persona: "The persona is what you bring out to use; below is its core message and essence.",
    situation: "The situation is the field you stand in; below is its state, and what you could practise.",
  },
  deepQ: {
    carries: "What does this card bring with it?", symbol: "What does its imagery say?", core: "The core message of this card", whyFlower: "Why this essence?",
    doNow: "Something you can do right now", practice: "If you go this way, what could you practise?", archetypeWorks: "How does this archetype work in you?", fieldState: "The state of this field",
  },
  dayPlan: {
    title: "How to use this spread today",
    intro: "Each card brings one practice, laid out in the order of a day. You need not do them all; pick one to begin.",
    morning: "Morning — regulate", daytime: "Daytime — daily practice", anytime: "Whenever — aroma", evening: "Evening — awareness",
    from: (name) => `from ${name}`,
  },
  deepArc: "How to work with this line",
  deepRel: "Why these two cards meet this way",
  deepBlend: "How the three essences fit together",
};

export const PAGE_TEXT: Record<Locale, PageText> = { zh, en };

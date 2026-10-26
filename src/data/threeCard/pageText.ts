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
};

export const PAGE_TEXT: Record<Locale, PageText> = { zh, en };

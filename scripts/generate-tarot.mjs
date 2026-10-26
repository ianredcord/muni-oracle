#!/usr/bin/env node
// 由 MUNI_78Cards_Content_v4.x.json（snake_case 原始內容）＋ src/data/tarot.meta.json（slug／image）
// 產生 src/data/tarot.generated.ts。格式與 2026-04-10 手工產出的版本逐字一致。
//
// 用法：
//   node scripts/generate-tarot.mjs --json src/data/MUNI_78Cards_Content_v4.1.json [--out src/data/tarot.generated.ts] [--check]
//   --check：不寫檔，只比對輸出與現有檔案是否一致（忽略前兩行標頭）
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const argv = process.argv.slice(2);
const opt = (name, def) => {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : def;
};
const JSON_PATH = opt("--json", "src/data/MUNI_78Cards_Content_v4.1.json");
const META_PATH = opt("--meta", "src/data/tarot.meta.json");
const OUT_PATH = opt("--out", "src/data/tarot.generated.ts");
const CHECK = argv.includes("--check");
const DATE = opt("--date", new Date().toISOString().slice(0, 10));
// --server-only：在檔頭加入 import "server-only"。該行屬於 i18n 工作樹尚未 commit 的改動，
// 已 commit 的 client 元件仍直接引用本檔，所以預設不加；i18n 改動 commit 後再改預設。
const SERVER_ONLY = argv.includes("--server-only");

const SUITS = ["wands", "cups", "swords", "pentacles"];
const SUIT_ZH = { wands: "權杖", cups: "聖杯", swords: "寶劍", pentacles: "錢幣" };
const PIP_RANKS = ["ace", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
const COURT_RANKS = ["page", "knight", "queen", "king"];

/** 欄位順序與 TarotCard 型別一致 */
const FIELD_MAP = [
  ["element", "element"],
  ["planetSign", "planet_sign"],
  ["bachFlowerEn", "bach_flower_en"],
  ["bachFlowerZh", "bach_flower_zh"],
  ["bachGroup", "bach_group"],
  ["jungianArchetype", "jungian_archetype"],
  ["alchemyStage", "alchemy_stage"],
  ["keywords", "keywords"],
  ["uprightMessage", "upright_message"],
  ["reversedReminder", "reversed_reminder"],
  ["symbolReading", "symbol_reading"],
  ["jungianAnalysis", "jungian_analysis"],
  ["flowerSpectrum", "flower_spectrum"],
  ["step1Status", "step1_status"],
  ["step2Allow", "step2_allow"],
  ["step3Body", "step3_body"],
  ["breathing", "breathing"],
  ["aromaGuide", "aroma_guide"],
  ["dailyPractice", "daily_practice"],
  ["awarenessNote", "awareness_note"],
  ["systemL1", "system_l1"],
  ["systemL2Echo", "system_l2_echo"],
  ["systemEmotionGroup", "system_emotion_group"],
  ["systemMeridian", "system_meridian"],
  ["systemExtraordinary", "system_extraordinary"],
  ["systemAlchemy", "system_alchemy"],
  ["systemQiFlow", "system_qi_flow"],
];

export function orderCards(raw) {
  const byId = new Map(raw.map((r) => [r.card_id, r]));
  const order = [];
  for (let i = 0; i < 22; i++) order.push(`major-${String(i).padStart(2, "0")}`);
  for (const s of SUITS) {
    for (const r of PIP_RANKS) order.push(`${s}-${r}`);
    for (const r of COURT_RANKS) order.push(`${s}-${r}`);
  }
  const missing = order.filter((k) => !byId.has(k));
  if (missing.length || raw.length !== 78) {
    throw new Error(`card_id 不完整：共 ${raw.length} 張，缺 ${missing.join(",") || "無"}`);
  }
  return order.map((k) => byId.get(k));
}

export function toCard(r, index, meta) {
  const id = index + 1;
  const m = meta[index];
  if (!m || m.id !== id || m.nameEn !== r.name_en) {
    throw new Error(`meta 對不上：id ${id} ${r.name_en} vs ${m && m.nameEn}`);
  }
  const [suitKey, rank] = r.card_id.split("-");
  const isMajor = suitKey === "major";
  const isCourt = !isMajor && COURT_RANKS.includes(rank);
  const card = { id, slug: m.slug, nameEn: r.name_en, nameZh: r.name_zh };
  card.suit = isMajor ? "major" : suitKey;
  card.suitZh = isMajor ? "大秘儀" : isCourt ? "宮廷牌" : "數字牌";
  if (isMajor) card.number = r.number;
  else if (!isCourt) card.number = rank === "ace" ? "Ace" : String(Number(rank));
  card.flower = r.system_l1;
  card.image = m.image;
  for (const [camel, snake] of FIELD_MAP) {
    const v = r[snake];
    if (v === undefined || v === null || v === "") continue;
    card[camel] = v;
  }
  return card;
}

const HEADER = (jsonName, date) => `// AUTO-GENERATED from ${jsonName}
// Last updated: ${date}
${SERVER_ONLY ? '\nimport "server-only";\n' : ""}
export type TarotSuit = "major" | "wands" | "cups" | "swords" | "pentacles";

export type TarotCard = {
  id: number;
  slug: string;
  nameEn: string;
  nameZh: string;
  suit: TarotSuit;
  suitZh: string;
  number?: string;
  flower: string;
  image: string;
  // V4 content fields
  element?: string;
  planetSign?: string;
  bachFlowerEn?: string;
  bachFlowerZh?: string;
  bachGroup?: string;
  jungianArchetype?: string;
  alchemyStage?: string;
  keywords?: string;
  uprightMessage?: string;
  reversedReminder?: string;
  symbolReading?: string;
  jungianAnalysis?: string;
  flowerSpectrum?: string;
  step1Status?: string;
  step2Allow?: string;
  step3Body?: string;
  breathing?: string;
  aromaGuide?: string;
  dailyPractice?: string;
  awarenessNote?: string;
  systemL1?: string;
  systemL2Echo?: string;
  systemEmotionGroup?: string;
  systemMeridian?: string;
  systemExtraordinary?: string;
  systemAlchemy?: string;
  systemQiFlow?: string;
};

export const SUIT_NAMES: Record<TarotSuit, string> = {
  major: "大秘儀",
  wands: "${SUIT_ZH.wands}",
  cups: "${SUIT_ZH.cups}",
  swords: "${SUIT_ZH.swords}",
  pentacles: "${SUIT_ZH.pentacles}",
};

export const TAROT_CARDS: TarotCard[] = [
`;

export function renderTs(cards, jsonName, date) {
  const lines = [HEADER(jsonName, date)];
  for (const c of cards) {
    lines.push("  {\n");
    for (const [k, v] of Object.entries(c)) {
      lines.push(`    ${k}: ${typeof v === "number" ? v : JSON.stringify(v)},\n`);
    }
    lines.push("  },\n");
  }
  lines.push("];\n");
  return lines.join("");
}

export function buildCards(jsonPath, metaPath) {
  const raw = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
  return orderCards(raw).map((r, i) => toCard(r, i, meta));
}

if (import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const cards = buildCards(JSON_PATH, META_PATH);
  const out = renderTs(cards, path.basename(JSON_PATH), DATE);
  if (CHECK) {
    const cur = fs.readFileSync(OUT_PATH, "utf8");
    const strip = (s) => s.split("\n").slice(2).join("\n");
    if (strip(cur) === strip(out)) {
      console.log(`OK：${OUT_PATH} 與 ${JSON_PATH} 產出一致（78 張，標頭除外）`);
    } else {
      console.error(`DIFF：${OUT_PATH} 與 ${JSON_PATH} 產出不一致`);
      process.exit(1);
    }
  } else {
    fs.writeFileSync(OUT_PATH, out);
    console.log(`已寫出 ${OUT_PATH}（${cards.length} 張，來源 ${JSON_PATH}）`);
  }
}

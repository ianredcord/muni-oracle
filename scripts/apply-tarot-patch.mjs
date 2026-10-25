#!/usr/bin/env node
// 套用 {card_id, field, before, after} 格式的補丁（如 handoff/data/cards_v4_patch_diff.json）。
//   --diff <patch.json> --zh-json <in.json> --out <out.json>
//       套用到 MUNI_78Cards_Content_v4.x.json（snake_case 欄位；補丁的 card_id 是 TS 的數字 id 1–78）
//   --diff <patch.en.json> --en-ts src/data/tarot.en.generated.ts
//       就地套用到英文版 TS（陣列為 JSON 格式）
// 每一筆先比對 before 與現值；任一不一致即中止、不寫檔。
import fs from "node:fs";

const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const DIFF = opt("--diff");
if (!DIFF) { console.error("需要 --diff <patch.json>"); process.exit(2); }
const diff = JSON.parse(fs.readFileSync(DIFF, "utf8"));

const CAMEL_TO_SNAKE = {
  nameZh: "name_zh", nameEn: "name_en", planetSign: "planet_sign", bachFlowerEn: "bach_flower_en",
  bachFlowerZh: "bach_flower_zh", bachGroup: "bach_group", jungianArchetype: "jungian_archetype",
  alchemyStage: "alchemy_stage", uprightMessage: "upright_message", reversedReminder: "reversed_reminder",
  symbolReading: "symbol_reading", jungianAnalysis: "jungian_analysis", flowerSpectrum: "flower_spectrum",
  step1Status: "step1_status", step2Allow: "step2_allow", step3Body: "step3_body", aromaGuide: "aroma_guide",
  dailyPractice: "daily_practice", awarenessNote: "awareness_note", systemL1: "system_l1",
  systemL2Echo: "system_l2_echo", systemEmotionGroup: "system_emotion_group", systemMeridian: "system_meridian",
  systemExtraordinary: "system_extraordinary", systemAlchemy: "system_alchemy", systemQiFlow: "system_qi_flow",
  element: "element", keywords: "keywords", breathing: "breathing",
  flower: "system_l1", // TS 的 flower 欄位由 system_l1 衍生
};
const SUITS = ["wands", "cups", "swords", "pentacles"];
const RANKS = ["ace", "02", "03", "04", "05", "06", "07", "08", "09", "10", "page", "knight", "queen", "king"];
/** TS 數字 id（1–78）→ JSON card_id */
const cardIdOf = (id) => id <= 22 ? `major-${String(id - 1).padStart(2, "0")}` : `${SUITS[Math.floor((id - 23) / 14)]}-${RANKS[(id - 23) % 14]}`;

/** 逐筆核對 before；全部一致才套用。回傳套用紀錄。 */
function apply(byKey, fieldOf, label) {
  const problems = [];
  for (const d of diff) {
    const rec = byKey.get(d.card_id);
    if (!rec) { problems.push(`${label} 找不到 card_id ${d.card_id}`); continue; }
    const f = fieldOf(d.field);
    if (rec[f] !== d.before) {
      problems.push(`${label} #${d.card_id} ${d.card ?? ""} ${d.field}→${f}：現值「${String(rec[f]).slice(0, 40)}」≠ before「${d.before.slice(0, 40)}」`);
    }
  }
  if (problems.length) {
    console.error(`中止：${problems.length} 筆 before 不一致\n` + problems.join("\n"));
    process.exit(1);
  }
  const log = [];
  for (const d of diff) {
    const f = fieldOf(d.field);
    byKey.get(d.card_id)[f] = d.after;
    log.push(`#${d.card_id} ${d.card ?? ""} ${d.field}${f !== d.field ? `→${f}` : ""}：${d.before === d.after ? "不變" : "已套用"}`);
  }
  return log;
}

if (argv.includes("--zh-json")) {
  const IN = opt("--zh-json"); const OUT = opt("--out");
  if (!OUT) { console.error("需要 --out"); process.exit(2); }
  const raw = JSON.parse(fs.readFileSync(IN, "utf8"));
  const byCardId = new Map(raw.map((r) => [r.card_id, r]));
  const byKey = new Map(diff.map((d) => [d.card_id, byCardId.get(cardIdOf(d.card_id))]));
  const log = apply(byKey, (f) => CAMEL_TO_SNAKE[f] ?? f, "zh-json");
  fs.writeFileSync(OUT, JSON.stringify(raw, null, 2)); // 與 v4 原檔相同：2 空格縮排、無結尾換行、不轉義中文
  console.log(log.join("\n")); console.log(`已寫出 ${OUT}（${diff.length} 筆）`);
} else if (argv.includes("--en-ts")) {
  const FILE = opt("--en-ts");
  const ts = fs.readFileSync(FILE, "utf8");
  const START = "export const TAROT_CARDS_EN: TarotCard[] = ";
  const i = ts.indexOf(START) + START.length;
  const end = /\n\s*\]/.exec(ts.slice(i)); const j = i + end.index + end[0].length; // 陣列結尾的 "]"
  const cards = JSON.parse(ts.slice(i, j));
  const byKey = new Map(cards.map((c) => [c.id, c]));
  const log = apply(byKey, (f) => f, "en-ts");
  const body = JSON.stringify(cards, null, 2); // 與原檔相同：JSON 2 空格縮排，陣列元素從第 2 欄開始
  fs.writeFileSync(FILE, ts.slice(0, i) + body + ts.slice(j)); // 保留 "];" 之後的原內容
  console.log(log.join("\n")); console.log(`已就地改寫 ${FILE}（${diff.length} 筆）`);
} else {
  console.error("需要 --zh-json 或 --en-ts"); process.exit(2);
}

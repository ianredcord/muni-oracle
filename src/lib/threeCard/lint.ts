// §6 語氣規則（lint）。入庫前對位置短文、模板、鏡像短文一起跑；UI 文字也可用 lintFreeText。
// 英文禁用詞表待使用者核准後才加入，目前 en 文字只檢查字數上限以外的項目不做。
import { countChars } from "./assemble";
import type { Card, MirrorText, PositionText, SlotTemplate } from "./types";

export type LintIssue = { level: "error" | "warning"; id: string; rule: string; message: string };

export const BANNED_ZH = ["你將會", "注定", "註定", "命中注定", "警告", "必須", "一定會", "災", "凶", "厄運", "小心", "應該"] as const;
/** 只能出現在「不是」之後 3 字內 */
export const CONDITIONAL_ZH = ["預言", "判決", "定義你"] as const;
/** 療效式斷言的常見用字，列為 warning 供人工確認 */
export const THERAPY_WARN_ZH = ["治療", "療效", "治癒", "根治"] as const;

export const TEMPLATE_LEN = { min: 24, max: 90 } as const;
export const POSITION_LEN = { origin: [35, 70], now: [45, 95], direction: [38, 70] } as const;
export const MIRROR_LEN = { archetype: [35, 70], persona: [45, 95], situation: [38, 70] } as const;

function* indexes(text: string, word: string): Generator<number> {
  let i = text.indexOf(word);
  while (i >= 0) { yield i; i = text.indexOf(word, i + 1); }
}

/** 所有中文文字共用：禁用詞、條件允許詞、療效斷言 */
export function lintCommonZh(id: string, text: string): LintIssue[] {
  const issues: LintIssue[] = [];
  for (const w of BANNED_ZH) {
    // 「注定」包含於「命中注定」，只報一次
    if (w === "注定" && text.includes("命中注定") && !text.replace(/命中注定/g, "").includes("注定")) continue;
    if (text.includes(w)) issues.push({ level: "error", id, rule: "banned", message: `禁用詞「${w}」` });
  }
  for (const w of CONDITIONAL_ZH) {
    for (const i of indexes(text, w)) {
      const j = text.lastIndexOf("不是", i);
      const gap = j < 0 ? Infinity : i - (j + 2);
      if (gap > 3) issues.push({ level: "error", id, rule: "conditional", message: `「${w}」須在「不是」之後 3 字內（位置 ${i}）` });
    }
  }
  for (const w of THERAPY_WARN_ZH) {
    if (text.includes(w)) issues.push({ level: "warning", id, rule: "therapy", message: `疑似療效用語「${w}」，請人工確認` });
  }
  return issues;
}

/** 字數估算：佔位符以 3 字（牌名／花精名的典型長度）計 */
export function estimateChars(text: string): number {
  return countChars(text.replace(/\{[a-z_0-9]+\}/g, "＊＊＊"));
}

function lenCheck(id: string, text: string, min: number, max: number, label: string): LintIssue[] {
  const n = estimateChars(text);
  return n < min || n > max ? [{ level: "error", id, rule: "length", message: `${label}字數 ${n}，須在 ${min}–${max}` }] : [];
}

export function lintTemplate(t: SlotTemplate): LintIssue[] {
  const id = t.template_id;
  const z = t.text.zh;
  const issues = lintCommonZh(id, z);
  if (t.slot !== "closing") issues.push(...lenCheck(id, z, TEMPLATE_LEN.min, TEMPLATE_LEN.max, "模板")); // closing 為固定短句（§3.2 第 14 步），不受模板字數限制
  if (t.slot === "rel_12" || t.slot === "rel_23" || t.slot === "rel_both") {
    if (!(z.startsWith("——") || z.startsWith("而"))) issues.push({ level: "error", id, rule: "structure", message: `${t.slot} 須以「——」或「而」開頭` });
  }
  if (t.slot === "arc" || t.slot === "exception" || t.slot === "rel_23") {
    if (!(z.includes("如果") || z.includes("允許"))) issues.push({ level: "error", id, rule: "structure", message: `${t.slot} 必含「如果」或「允許」` });
  }
  if (t.slot === "mirror_synthesis") {
    for (const ph of ["{archetype}", "{persona}", "{situation}"]) if (!z.includes(ph)) issues.push({ level: "error", id, rule: "placeholder", message: `mirror_synthesis 必含 ${ph}` });
  }
  if (t.length_chars?.zh !== undefined && t.length_chars.zh !== countChars(z)) {
    issues.push({ level: "warning", id, rule: "length_chars", message: `length_chars.zh=${t.length_chars.zh} 與實際 ${countChars(z)} 不符` });
  }
  if (t.slot === "arc" && t.register.length !== 1) issues.push({ level: "error", id, rule: "register", message: "arc 槽 register 只能有一個值" });
  return issues;
}

export function lintPositionText(p: PositionText, card: Card): LintIssue[] {
  const id = `${card.nameZh}/${p.position}`;
  const z = p.text.zh;
  const issues = lintCommonZh(id, z);
  const [min, max] = POSITION_LEN[p.position];
  issues.push(...lenCheck(id, z, min, max, `${p.position} `));
  if (p.position === "now") {
    if (!z.includes("此刻")) issues.push({ level: "error", id, rule: "now", message: "此刻短文必含「此刻」" });
    const flowerZh = card.bachFlowerZh.split("（")[0]; // 急救花精（整合）→ 急救花精
    if (!z.includes(flowerZh)) issues.push({ level: "error", id, rule: "now", message: `此刻短文必含花精名「${flowerZh}」` });
    if (!z.includes(`（${card.bachFlowerEn}）`)) issues.push({ level: "error", id, rule: "now", message: `此刻短文必含「（${card.bachFlowerEn}）」` });
    if (!z.includes("允許句：")) issues.push({ level: "error", id, rule: "now", message: "此刻短文必含「允許句：」" });
  }
  if (p.position === "direction") {
    if (!z.includes("如果")) issues.push({ level: "error", id, rule: "direction", message: "去向短文必含「如果」" });
    if (!z.includes("允許")) issues.push({ level: "error", id, rule: "direction", message: "去向短文必含「允許」" });
  }
  return issues;
}

export function lintMirrorText(m: MirrorText, card: Card): LintIssue[] {
  const id = `${card.nameZh}/${m.mirror}`;
  const z = m.text.zh;
  const issues = lintCommonZh(id, z);
  const [min, max] = MIRROR_LEN[m.mirror];
  issues.push(...lenCheck(id, z, min, max, `${m.mirror} `));
  for (const w of ["一路", "過去", "將來"]) if (z.includes(w)) issues.push({ level: "error", id, rule: "mirror", message: `鏡像短文不用時間框架「${w}」` });
  if (m.mirror === "archetype" || m.mirror === "persona") {
    if (z.includes("如果")) issues.push({ level: "error", id, rule: "mirror", message: `${m.mirror} 句不用「如果…就會」` });
  }
  if (m.mirror === "persona") {
    if (!z.includes(card.bachFlowerZh) || !z.includes(`（${card.bachFlowerEn}）`)) issues.push({ level: "error", id, rule: "mirror", message: `人格句必含「${card.bachFlowerZh}（${card.bachFlowerEn}）」` });
    if (!z.includes("允許句：")) issues.push({ level: "error", id, rule: "mirror", message: "人格句必含「允許句：」" });
  }
  if (m.mirror === "situation") {
    if (!z.includes("如果") || !z.includes("允許")) issues.push({ level: "error", id, rule: "mirror", message: "情境句結尾須用條件式「如果你允許…」" });
  }
  return issues;
}

/** UI 文字等自由文本：只跑共用規則 */
export function lintFreeText(id: string, text: string): LintIssue[] {
  return lintCommonZh(id, text);
}

export type LintReport = { issues: LintIssue[]; counts: { templates: number; positionText: number; mirrorText: number } };

export function lintLibrary(lib: { cards: Card[]; templates: SlotTemplate[]; positionText: PositionText[]; mirrorText: MirrorText[] }): LintReport {
  const byId = new Map(lib.cards.map((c) => [c.id, c]));
  const issues: LintIssue[] = [];
  for (const t of lib.templates) issues.push(...lintTemplate(t));
  for (const p of lib.positionText) issues.push(...lintPositionText(p, byId.get(p.cardId)!));
  for (const m of lib.mirrorText) issues.push(...lintMirrorText(m, byId.get(m.cardId)!));
  return { issues, counts: { templates: lib.templates.length, positionText: lib.positionText.length, mirrorText: lib.mirrorText.length } };
}

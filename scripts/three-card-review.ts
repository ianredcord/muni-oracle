// Phase 4 審稿輸出：產生 docs/three-card/review.md、content-inventory.md、draft-queue.md。
//   node --no-warnings --import ./scripts/ts-loader.mjs scripts/three-card-review.ts
import fs from "node:fs";
import { MODE_TEXT } from "../src/data/threeCard/modes";
import { ALL_UI_TEXT } from "../src/data/threeCard/uiText";
import { candidates, compose, countChars, defaultLibrary, replay, type Library, type ReadingRecord, type Rendered, type SlotName, type State } from "../src/lib/threeCard/index";
import { estimateChars } from "../src/lib/threeCard/lint";
import { BUDGET, exhaustive, median, minMax, requiredSlots, withDraftsApproved } from "./lib/three-card-analysis";

const OUT = "docs/three-card";
fs.mkdirSync(OUT, { recursive: true });
const approved = defaultLibrary();
const drafts = withDraftsApproved(approved);
const demos = JSON.parse(fs.readFileSync("handoff/data/demo_reading_records.json", "utf8")) as ReadingRecord[];
const nameOf = (id: number) => approved.cards.find((c) => c.id === id)!.nameZh;
const esc = (s: string) => s.replace(/\|/g, "｜").replace(/\n/g, " ");
const row = (...cells: (string | number)[]) => `| ${cells.map((c) => esc(String(c))).join(" | ")} |`;
const today = new Date().toISOString().slice(0, 10);

// ---------- review.md ----------
function segmentTable(r: Rendered): string {
  const lines = ["| # | 槽／位置 | template_id | text | 字數 |", "|---|---|---|---|---|"];
  r.segments.forEach((s, i) => {
    const slot = s.kind === "template" ? s.slot : s.kind === "position" ? `${s.position}（${s.source === "mirror" ? "鏡像" : "位置"}短文）` : s.kind === "blend" ? "花精複方" : "身體練習";
    const id = s.kind === "template" ? s.templateId : "—";
    lines.push(row(i + 1, slot, id, s.text, countChars(s.text)));
  });
  lines.push(row("", "合計", "", "", r.chars));
  return lines.join("\n");
}
function stateTable(s: State): string {
  const keys: (keyof State)[] = ["mode", "register", "arc", "rel_12", "rel_23", "major_count", "flags", "same_suit_12", "same_suit_23", "kinds_12", "kinds_23", "resonance", "court_present", "court_rank", "user_mbti", "mbti_relation", "rescue_count", "rescue_at"];
  return ["| 欄位 | 值 |", "|---|---|", ...keys.map((k) => row(k, JSON.stringify(s[k])))].join("\n");
}
function reviewPiece(lib: Library, d: ReadingRecord, i: number, label: string): string {
  const recent = i === 7 ? { arc: [demos[0].selections.arc!] } : undefined;
  const c = compose(lib, d.cards, { userId: d.user_id, createdAt: d.created_at, mode: d.mode, variant: d.initial_variant, recent, readingId: d.reading_id });
  const brief = replay(lib, c.record, "brief"), full = replay(lib, c.record, "full");
  const budget = BUDGET.brief[d.mode];
  return [
    `### ${label}`,
    "",
    `selections：\`${JSON.stringify(c.record.selections)}\``,
    c.warnings.length ? `warnings：${c.warnings.map((w) => w.message).join("；")}` : "warnings：無",
    "",
    `**精簡版（${brief.chars} 字，預算 ${budget}）**`,
    "",
    segmentTable(brief),
    "",
    `**完整版（${full.chars} 字，預算 ${BUDGET.full}）**`,
    "",
    segmentTable(full),
    "",
  ].join("\n");
}
const review: string[] = [
  `# 三牌陣審稿：§8 第 6 點示範組（${today} 產生）`,
  "",
  "每組同時列出兩種內容庫的渲染：**目前**（引擎實際輸出，只讀 approved）與**草稿核准後預覽**（draft 視為 approved）。選取用 user=demo、date=2026-10-25，與 Python 基準相同；第 8 組帶 recent 排除第 1 組的 arc。",
  "",
];
demos.forEach((d, i) => {
  const title = `${i + 1}. ${d.cards.map(nameOf).join(" → ")}　模式 ${d.mode}／首次呈現 ${d.initial_variant}${i === 7 ? "（recent 排除 arc）" : ""}`;
  review.push(`## ${title}`, "", "**狀態向量**", "", stateTable(d.state), "");
  review.push(reviewPiece(approved, d, i, "目前（僅 approved）"));
  review.push(reviewPiece(drafts, d, i, "草稿核准後預覽"));
});
fs.writeFileSync(`${OUT}/review.md`, review.join("\n"));

// ---------- content-inventory.md ----------
const SLOTS: SlotName[] = ["opening", "exception", "structure", "mirror_synthesis", "rel_12", "rel_23", "rel_both", "arc", "resonance", "court", "court_generic", "cta_brief", "cta_full", "closing"];
const inv: string[] = [`# 三牌陣內容盤點（${today} 產生）`, ""];
inv.push("## 1. 模板筆數與 status", "", "| slot | approved | draft | retired | 合計 |", "|---|---|---|---|---|");
let tot = { a: 0, d: 0, r: 0 };
for (const slot of SLOTS) {
  const ts = approved.templates.filter((t) => t.slot === slot);
  const a = ts.filter((t) => t.status === "approved").length, d = ts.filter((t) => t.status === "draft").length, r = ts.filter((t) => t.status === "retired").length;
  tot = { a: tot.a + a, d: tot.d + d, r: tot.r + r };
  inv.push(row(slot, a, d, r, ts.length));
}
inv.push(row("合計", tot.a, tot.d, tot.r, approved.templates.length), "");
inv.push("位置短文 234 筆（approved）；鏡像短文 " + approved.mirrorText.length + " 筆（" + ["archetype", "persona", "situation"].map((m) => `${m} ${approved.mirrorText.filter((x) => x.mirror === m).length}`).join("、") + "，皆 draft）。", "");

inv.push("## 2. 每個觸發狀態的變體數", "", "| slot | trigger | exclude | approved | draft |", "|---|---|---|---|---|");
const groups = new Map<string, { slot: SlotName; trigger: string; exclude: string; a: number; d: number }>();
for (const t of approved.templates) {
  const k = `${t.slot}|${JSON.stringify(t.trigger)}|${JSON.stringify(t.exclude)}`;
  const g = groups.get(k) ?? { slot: t.slot, trigger: JSON.stringify(t.trigger), exclude: JSON.stringify(t.exclude), a: 0, d: 0 };
  if (t.status === "approved") g.a++; else if (t.status === "draft") g.d++;
  groups.set(k, g);
}
for (const g of [...groups.values()].sort((x, y) => SLOTS.indexOf(x.slot) - SLOTS.indexOf(y.slot) || x.trigger.localeCompare(y.trigger))) inv.push(row(g.slot, g.trigger, g.exclude === "{}" ? "" : g.exclude, g.a, g.d));
inv.push("");

function coverage(lib: Library, label: string): string[] {
  const st = exhaustive(lib, "A");
  const stC = exhaustive(lib, "C");
  let ok1 = 0, ok2 = 0, ok2Rot = 0, fallback = 0;
  const lt2 = new Map<string, number>();
  for (const s of st.states.values()) {
    let all1 = true, all2 = true, all2Rot = true;
    for (const slot of requiredSlots(s, "A")) {
      const { pool, registerFallback } = candidates(lib, slot, s);
      if (registerFallback) fallback++;
      if (pool.length < 1) all1 = false;
      if (pool.length < 2) { all2 = false; if (slot !== "closing" && slot !== "opening") all2Rot = false; lt2.set(slot, (lt2.get(slot) ?? 0) + 1); }
    }
    if (all1) ok1++; if (all2) ok2++; if (all2Rot) ok2Rot++;
  }
  const n = st.states.size;
  const pct = (x: number) => `${x}/${n}（${((x / n) * 100).toFixed(1)}%）`;
  const dist = (xs: number[]) => { const [lo, hi] = minMax(xs); return `${lo}／${median(xs)}／${hi}`; };
  return [
    `### ${label}`, "",
    "| 指標 | 值 |", "|---|---|",
    row("可達狀態（模式 A）", n),
    row("每個必要槽 ≥ 1 筆", pct(ok1)),
    row("每個必要槽 ≥ 2 筆", pct(ok2)),
    row("每個必要槽 ≥ 2 筆（不計固定的 closing 與每模式 1–3 筆的 opening）", pct(ok2Rot)),
    row("register 退回（覆蓋缺口）次數", fallback),
    row("< 2 筆的槽次數", JSON.stringify(Object.fromEntries(lt2))),
    row("exception 命中（A）", `${st.exceptions}（${((st.exceptions / st.n) * 100).toFixed(1)}%）`),
    row("必要槽空缺（A）", JSON.stringify(Object.fromEntries(st.missingRequired)) || "無"),
    row("必要槽空缺（C）", JSON.stringify(Object.fromEntries(stC.missingRequired)) || "無"),
    row("A 精簡版 min／中位／max（預算 330）", dist(st.chars.brief)),
    row("A 完整版 min／中位／max（預算 800）", dist(st.chars.full)),
    row("C 精簡版 min／中位／max（預算 400）", dist(stC.chars.brief)),
    row("C 完整版 min／中位／max（預算 800）", dist(stC.chars.full)),
    row("超出預算的排列", st.overBudget.length + stC.overBudget.length),
    row("敘事弧分布（A）", [...st.arcs].map(([k, v]) => `${k} ${((v / st.n) * 100).toFixed(1)}%`).join("、")),
    "",
  ];
}
inv.push("## 3. register 覆蓋率與長度分布", "", "714 個可達狀態（分析報告以 v4 資料算出 716，v4.1 修正共振後為 714）。", "");
inv.push(...coverage(approved, "目前（僅 approved）"));
inv.push(...coverage(drafts, "草稿核准後預覽（draft 視為 approved）"));
fs.writeFileSync(`${OUT}/content-inventory.md`, inv.join("\n"));

// ---------- draft-queue.md ----------
const q: string[] = [`# 三牌陣草稿核准佇列（${today} 產生）`, "", "逐句核准後告訴我 template_id（或整類），由我批次改 status。字數以碼點計，佔位符以 3 字估算。", ""];
q.push("## A. 模板（draft）", "");
for (const slot of SLOTS) {
  const ts = approved.templates.filter((t) => t.slot === slot && t.status === "draft");
  if (!ts.length) continue;
  q.push(`### ${slot}（${ts.length} 筆）`, "", "| template_id | trigger | exclude | register | text | 字數 | note |", "|---|---|---|---|---|---|---|");
  for (const t of ts) q.push(row(t.template_id, JSON.stringify(t.trigger), JSON.stringify(t.exclude) === "{}" ? "" : JSON.stringify(t.exclude), t.register.join(""), t.text.zh, estimateChars(t.text.zh), t.note));
  q.push("");
}
q.push("## B. 鏡像短文（draft）", "");
for (const m of ["archetype", "persona", "situation"] as const) {
  const ms = approved.mirrorText.filter((x) => x.mirror === m && x.status === "draft");
  q.push(`### ${m}（${ms.length} 段）`, "", "| 牌 | text | 字數 |", "|---|---|---|");
  for (const x of ms) q.push(row(nameOf(x.cardId), x.text.zh, countChars(x.text.zh)));
  q.push("");
}
q.push("## C. UI 文字（draft）", "", "| 群組 | id | text | 字數 |", "|---|---|---|---|");
for (const m of Object.values(MODE_TEXT)) {
  q.push(row(`mode ${m.mode} 說明`, `${m.mode}/description`, m.description, countChars(m.description)));
  for (const [k, v] of Object.entries(m.questions)) q.push(row(`mode ${m.mode} 問句`, `${m.mode}/${k}`, v, countChars(v)));
}
for (const g of ALL_UI_TEXT) for (const x of g.variants) q.push(row(g.group, x.id, x.text, countChars(x.text)));
q.push("");
fs.writeFileSync(`${OUT}/draft-queue.md`, q.join("\n"));
console.log(`wrote ${OUT}/review.md, content-inventory.md, draft-queue.md`);

// 三牌陣窮舉分析（測試與審稿腳本共用）。不屬於執行期引擎。
import { computeState, kind, render, selectAll, seedOf, type Card, type Library, type Mode, type SlotName, type State } from "../../src/lib/threeCard/index";

export const USER = "demo";
export const DATE = "2026-10-25";

/** 可達狀態鍵：相鄰關係 1 × 相鄰關係 2 × 敘事弧 × 大秘儀張數 × 是否宮廷 × 是否共振（分析報告 03） */
export function stateKey(s: State): string {
  return [s.rel_12, s.rel_23, s.arc, s.major_count, s.court_present, s.resonance].join("|");
}

/** 必要槽：為空代表模板庫缺口（§3.3）。exception 命中時 structure／mirror_synthesis 與 arc 由它取代。 */
export function requiredSlots(s: State, mode: Mode, hasException = false): SlotName[] {
  const both = s.flags.includes("both_sides_hostile");
  const slots: SlotName[] = ["opening"];
  if (!hasException) slots.push(mode === "C" ? "mirror_synthesis" : "structure");
  if (mode !== "C") slots.push(both ? "rel_both" : "rel_12");
  if (mode !== "C" && !both) slots.push("rel_23");
  if (!hasException) slots.push("arc");
  slots.push("cta_full", "closing");
  return slots;
}
/** 已知缺口：cta_brief 與 OPEN_C 在草稿核准前為空 */
export const KNOWN_GAP_SLOTS: SlotName[] = ["cta_brief"];

/** 把 draft 視為 approved（只用於覆蓋率預估，不代表核准） */
export function withDraftsApproved(lib: Library): Library {
  return {
    ...lib,
    templates: lib.templates.map((t) => (t.status === "draft" ? { ...t, status: "approved" } : t)),
    mirrorText: lib.mirrorText.map((m) => (m.status === "draft" ? { ...m, status: "approved" } : m)),
  };
}

export function pools(lib: Library, mode: Mode): [Card[], Card[], Card[]] {
  const all = lib.cards;
  if (mode === "C") return [all.filter((c) => kind(c) === "major"), all.filter((c) => kind(c) === "court"), all.filter((c) => kind(c) === "pip")];
  return [all, all, all];
}

export type ExhaustiveStats = {
  mode: Mode;
  n: number;
  errors: string[];
  missingRequired: Map<SlotName, number>;
  unreplaced: string[];
  chars: { brief: number[]; full: number[] };
  overBudget: string[];
  arcs: Map<string, number>;
  states: Map<string, State>;
  warnings: number;
  exceptions: number;
};

export const BUDGET = { brief: { A: 330, B: 330, C: 400 }, full: 800 } as const;

/** 對全部排列跑狀態、選取、兩種渲染 */
export function exhaustive(lib: Library, mode: Mode): ExhaustiveStats {
  const [p1, p2, p3] = pools(lib, mode);
  const st: ExhaustiveStats = { mode, n: 0, errors: [], missingRequired: new Map(), unreplaced: [], chars: { brief: [], full: [] }, overBudget: [], arcs: new Map(), states: new Map(), warnings: 0, exceptions: 0 };
  const placeholder = /\{[a-z_0-9]+\}/;
  for (const c1 of p1) for (const c2 of p2) {
    if (c2.id === c1.id) continue;
    for (const c3 of p3) {
      if (c3.id === c1.id || c3.id === c2.id) continue;
      st.n++;
      try {
        const s = computeState(c1, c2, c3, { mode });
        st.arcs.set(s.arc, (st.arcs.get(s.arc) ?? 0) + 1);
        const key = stateKey(s);
        if (!st.states.has(key)) st.states.set(key, s);
        const ids: [number, number, number] = [c1.id, c2.id, c3.id];
        const { selections, warnings } = selectAll(lib, s, seedOf(USER, DATE, ids), undefined, mode);
        st.warnings += warnings.length;
        if (selections.exception) st.exceptions++;
        for (const slot of requiredSlots(s, mode, !!selections.exception)) if (!selections[slot]) st.missingRequired.set(slot, (st.missingRequired.get(slot) ?? 0) + 1);
        for (const slot of KNOWN_GAP_SLOTS) if (!selections[slot]) st.missingRequired.set(slot, (st.missingRequired.get(slot) ?? 0) + 1);
        const brief = render(lib, [c1, c2, c3], s, selections, mode, "brief");
        const full = render(lib, [c1, c2, c3], s, selections, mode, "full");
        if (placeholder.test(brief.text) || placeholder.test(full.text)) st.unreplaced.push(ids.join(","));
        st.chars.brief.push(brief.chars); st.chars.full.push(full.chars);
        if (brief.chars > BUDGET.brief[mode] || full.chars > BUDGET.full) st.overBudget.push(`${ids.join(",")} brief ${brief.chars} full ${full.chars}`);
      } catch (e) {
        if (st.errors.length < 20) st.errors.push(`${c1.id},${c2.id},${c3.id}: ${(e as Error).message}`);
      }
    }
  }
  return st;
}

export function minMax(xs: number[]): [number, number] {
  let lo = Infinity, hi = -Infinity;
  for (const x of xs) { if (x < lo) lo = x; if (x > hi) hi = x; }
  return [lo, hi];
}

export function median(xs: number[]): number {
  const s = [...xs].sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
}

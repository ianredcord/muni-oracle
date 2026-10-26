// §3.3 選取：status 閘門 → trigger／exclude → register 相容 → specificity → 近期排除 → 權重 → md5 種子。
import { md5Mod } from "./md5";
import type { Library, Mode, Recent, SlotName, SlotTemplate, State, TriggerValue } from "./types";

export type SelectWarning = { slot: SlotName; kind: "register_fallback"; message: string };
export type SelectedTemplates = Partial<Record<SlotName, SlotTemplate>>;

function stateValue(s: State, key: string): unknown {
  return (s as unknown as Record<string, unknown>)[key];
}

/** trigger 全部命中且 exclude 皆未命中 */
export function matches(t: SlotTemplate, s: State): boolean {
  for (const [k, v] of Object.entries(t.trigger)) {
    const sv = stateValue(s, k);
    if (Array.isArray(sv)) {
      // 陣列欄位（flags、rescue_at）：trigger 的每個值都需出現（例「rescue_at 含 now」）
      if (!(v as string[]).every((f) => (sv as string[]).includes(f))) return false;
    } else if (sv !== v) return false;
  }
  for (const [k, v] of Object.entries(t.exclude)) {
    const sv = stateValue(s, k);
    if (Array.isArray(sv)) {
      if ((v as string[]).some((f) => (sv as string[]).includes(f))) return false;
    } else if ((v as TriggerValue[]).includes(sv as TriggerValue)) return false;
  }
  return true;
}

export function seedOf(userId: string, date: string, ids: [number, number, number]): string {
  return `${userId}|${date}|${ids[0]}|${ids[1]}|${ids[2]}`;
}

/** 該槽在 register 過濾與 specificity 之後的候選（不含近期排除），供覆蓋率測試使用 */
export function candidates(lib: Library, slot: SlotName, s: State): { pool: SlotTemplate[]; registerFallback: boolean } {
  let c = lib.templates.filter((t) => t.slot === slot && t.status === "approved" && matches(t, s));
  if (!c.length) return { pool: [], registerFallback: false };
  const compatible = c.filter((t) => t.register.includes(s.register));
  const registerFallback = compatible.length === 0;
  if (!registerFallback) c = compatible;
  const spec = Math.max(...c.map((t) => Object.keys(t.trigger).length));
  c = c.filter((t) => Object.keys(t.trigger).length === spec);
  return { pool: c, registerFallback };
}

export function pick(lib: Library, slot: SlotName, s: State, seed: string, recent?: Recent): { template?: SlotTemplate; warning?: SelectWarning } {
  const { pool, registerFallback } = candidates(lib, slot, s);
  if (!pool.length) return {};
  let c = pool;
  const warning: SelectWarning | undefined = registerFallback
    ? { slot, kind: "register_fallback", message: `${slot}：無 register=${s.register} 相容模板，退回未過濾候選` }
    : undefined;
  const seen = recent?.[slot];
  if (seen && seen.length && c.length > 1) {
    const fresh = c.filter((t) => !seen.includes(t.template_id));
    if (fresh.length) c = fresh; // 同一特異層內排除；全被排除時允許重複，不降級
  }
  const expanded: SlotTemplate[] = [];
  for (const t of c) for (let i = 0; i < t.weight; i++) expanded.push(t);
  const idx = md5Mod(`${seed}|${slot}`, expanded.length);
  return { template: expanded[idx], warning };
}

/** 抽牌當下一次選完所有可能出場的槽（含 cta_brief 與 cta_full） */
export function selectAll(lib: Library, s: State, seed: string, recent?: Recent, mode: Mode = s.mode): { selections: SelectedTemplates; warnings: SelectWarning[] } {
  const sel: SelectedTemplates = {};
  const warnings: SelectWarning[] = [];
  const put = (slot: SlotName) => {
    const r = pick(lib, slot, s, seed, recent);
    if (r.template) sel[slot] = r.template;
    if (r.warning) warnings.push(r.warning);
  };
  put("opening");
  put("exception");
  if (!sel.exception) put(mode !== "C" ? "structure" : "mirror_synthesis");
  const both = s.flags.includes("both_sides_hostile");
  if (mode !== "C") put(both ? "rel_both" : "rel_12");
  if (mode !== "C" && !both) put("rel_23");
  if (!sel.exception) put("arc");
  put("resonance");
  put(s.user_mbti ? "court" : "court_generic");
  put("cta_brief");
  put("cta_full");
  put("closing");
  return { selections: sel, warnings };
}

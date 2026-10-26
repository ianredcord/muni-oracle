// 深度層文字的查找（deep-layer-design §4）：依 state 直接查、以 reading_id 穩定挑一段；不進 selections，重播結果一致。
import { md5Mod } from "./md5";
import type { DeepText, State } from "./types";

type View = Record<string, unknown>;

function matchesView(t: DeepText, v: View): boolean {
  for (const [k, val] of Object.entries(t.trigger)) {
    const sv = v[k];
    if (Array.isArray(sv)) { if (!(val as string[]).every((f) => (sv as string[]).includes(f))) return false; }
    else if (sv !== val) return false;
  }
  return true;
}

export type DeepPick = { deepId: string; text: string };

/** 通用：在該 kind 下找與 view 相符的 approved 文字；多筆時以 seed 穩定選一筆 */
export function pickDeepBy(rows: DeepText[], kind: DeepText["kind"], view: View, seed: string, locale: "zh" | "en" = "zh"): DeepPick | null {
  const c = rows.filter((t) => t.kind === kind && t.status === "approved" && matchesView(t, view));
  if (!c.length) return null;
  const t = c[md5Mod(`${seed}|deep:${kind}`, c.length)];
  return { deepId: t.deepId, text: locale === "en" && t.text.en ? t.text.en : t.text.zh };
}

/** 走向解說：依 state.arc */
export function pickDeep(rows: DeepText[], kind: DeepText["kind"], s: State, seed: string, locale: "zh" | "en" = "zh"): DeepPick | null {
  return pickDeepBy(rows, kind, s as unknown as View, seed, locale);
}

/** 關係解說：同花色 > 大牌／小牌相鄰 > 元素關係（§2.3） */
export function pickRelationDeep(rows: DeepText[], pair: "12" | "23", s: State, seed: string, locale: "zh" | "en" = "zh"): DeepPick | null {
  const sameSuit = pair === "12" ? s.same_suit_12 : s.same_suit_23;
  const kinds = pair === "12" ? s.kinds_12 : s.kinds_23;
  const rel = pair === "12" ? s.rel_12 : s.rel_23;
  const tag = `${seed}|rel${pair}`;
  if (sameSuit) { const p = pickDeepBy(rows, "relation", { same_suit: true }, tag, locale); if (p) return p; }
  if (kinds === "major-pip" || kinds === "pip-major") { const p = pickDeepBy(rows, "relation", { kinds }, tag, locale); if (p) return p; }
  return pickDeepBy(rows, "relation", { rel }, tag, locale);
}

/** 複方角色解說（§2.4） */
export function pickBlendDeep(rows: DeepText[], role: "main" | "release" | "support", seed: string, locale: "zh" | "en" = "zh"): DeepPick | null {
  return pickDeepBy(rows, "blend", { role }, `${seed}|blend:${role}`, locale);
}

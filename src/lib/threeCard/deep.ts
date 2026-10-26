// 深度層文字的查找（deep-layer-design §4）：依 state 直接查、以 reading_id 穩定挑一段；不進 selections，重播結果一致。
import { md5Mod } from "./md5";
import type { DeepText, State } from "./types";

function matchesDeep(t: DeepText, s: State): boolean {
  for (const [k, v] of Object.entries(t.trigger)) {
    const sv = (s as unknown as Record<string, unknown>)[k];
    if (Array.isArray(sv)) { if (!(v as string[]).every((f) => (sv as string[]).includes(f))) return false; }
    else if (sv !== v) return false;
  }
  return true;
}

export type DeepPick = { deepId: string; text: string };

/** 回傳該 kind 下與 state 相符的 approved 文字；多筆時以 seed（reading_id）穩定選一筆 */
export function pickDeep(rows: DeepText[], kind: DeepText["kind"], s: State, seed: string, locale: "zh" | "en" = "zh"): DeepPick | null {
  const c = rows.filter((t) => t.kind === kind && t.status === "approved" && matchesDeep(t, s));
  if (!c.length) return null;
  const t = c[md5Mod(`${seed}|deep:${kind}`, c.length)];
  return { deepId: t.deepId, text: locale === "en" && t.text.en ? t.text.en : t.text.zh };
}

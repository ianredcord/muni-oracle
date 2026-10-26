// 測試共用：內容庫（可含草稿）、窮舉快取。分析邏輯在 scripts/lib/three-card-analysis.ts。
import { compose, defaultLibrary, type Library, type Mode } from "../../src/lib/threeCard/index";
import { exhaustive, withDraftsApproved, type ExhaustiveStats } from "../../scripts/lib/three-card-analysis";

export { DATE, KNOWN_GAP_SLOTS, median, minMax, requiredSlots, stateKey, USER } from "../../scripts/lib/three-card-analysis";

/** THREE_CARD_INCLUDE_DRAFTS=1 時把 draft 視為 approved（只用於覆蓋率預估，不代表核准） */
export const INCLUDE_DRAFTS = process.env.THREE_CARD_INCLUDE_DRAFTS === "1";
const base = defaultLibrary();
export const lib: Library = INCLUDE_DRAFTS ? withDraftsApproved(base) : base;

const memo = new Map<Mode, ExhaustiveStats>();
export function exhaustiveOnce(mode: Mode): ExhaustiveStats {
  if (!memo.has(mode)) memo.set(mode, exhaustive(lib, mode));
  return memo.get(mode)!;
}

export function composeDemo(ids: [number, number, number], opts: Parameters<typeof compose>[2] = {}) {
  return compose(lib, ids, { userId: "demo", createdAt: "2026-10-25", ...opts });
}

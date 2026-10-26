// 三牌陣 UI 文字（Phase 3）：模式選擇引導句、精簡版／完整版按鈕與過場。
// 每組有多個變體，由 UI 以 reading_id 或日期輪替；全部 status=draft。
import type { Status } from "../../lib/threeCard/types";

export type UiVariant = { id: string; text: string; status: Status };

const v = (id: string, text: string): UiVariant => ({ id, text, status: "draft" });

/** 模式選擇頁的引導句（第一筆為基礎句） */
export const MODE_PROMPT: UiVariant[] = [
  v("PROMPT_01", "你今天想看一段歷程、一個卡點，還是整體的自己？"),
  v("PROMPT_02", "今天想看的是一段路、一個卡住的地方，還是整個你？"),
  v("PROMPT_03", "今天想從哪裡看：歷程、卡點，還是三面鏡子裡的自己？"),
];

/** 精簡版底部：展開完整解讀的按鈕（第一筆為基礎句） */
export const EXPAND_BUTTON: UiVariant[] = [
  v("BTN_EXPAND_01", "展開完整解讀"),
  v("BTN_EXPAND_02", "看完整解讀"),
  v("BTN_EXPAND_03", "往下展開"),
];

/** 精簡版 → 完整版的過場文字 */
export const EXPAND_TRANSITION: UiVariant[] = [
  v("TR_EXPAND_01", "完整版會把三張牌之間的關係、花精複方與身體練習接上。"),
  v("TR_EXPAND_02", "往下是三張牌怎麼連起來，以及今天的花精與身體練習。"),
];

/** 完整版底部：導向深度解析的按鈕 */
export const DEEP_BUTTON: UiVariant[] = [
  v("BTN_DEEP_01", "進入深度解析"),
  v("BTN_DEEP_02", "看每張牌的三步"),
  v("BTN_DEEP_03", "打開深度解析"),
];

/** 完整版 → 深度解析的過場文字 */
export const DEEP_TRANSITION: UiVariant[] = [
  v("TR_DEEP_01", "深度解析是每張牌單獨的三步：狀態、允許、身體。"),
  v("TR_DEEP_02", "想多停一下的話，每張牌都有自己的一頁。"),
];

export const ALL_UI_TEXT: { group: string; variants: UiVariant[] }[] = [
  { group: "MODE_PROMPT", variants: MODE_PROMPT },
  { group: "EXPAND_BUTTON", variants: EXPAND_BUTTON },
  { group: "EXPAND_TRANSITION", variants: EXPAND_TRANSITION },
  { group: "DEEP_BUTTON", variants: DEEP_BUTTON },
  { group: "DEEP_TRANSITION", variants: DEEP_TRANSITION },
];

/** 以穩定種子（例 reading_id）挑一個變體，同一篇每次重看都相同 */
export function pickVariant(variants: UiVariant[], seed: string): UiVariant {
  const approved = variants.filter((x) => x.status === "approved");
  const pool = approved.length ? approved : variants;
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.codePointAt(0)!) >>> 0;
  return pool[h % pool.length];
}

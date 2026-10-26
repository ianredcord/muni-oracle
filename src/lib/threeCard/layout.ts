// 把 render() 的 segments 分配到有標籤的閱讀區塊（體驗流程 v2 §5）。純函數，UI 與測試共用。
import type { Segment } from "./assemble";
import type { Arc, Position, SlotName } from "./types";

export const POSITIONS: Position[] = ["origin", "now", "direction"];

export type PositionBlock = {
  position: Position;
  source: "position" | "mirror";
  /** 全文 */
  text: string;
  /** 此刻位：允許句之前的導語；其他位與 text 相同 */
  lead: string;
  /** 此刻位：允許句（不含「允許句：」前綴）；其他位為 null */
  allow: string | null;
};

export type ReadingLayout = {
  opening?: string;
  exception?: string;
  mirrorSynthesis?: string;
  structure?: string;
  positions: PositionBlock[];
  rel12?: string;
  relBoth?: string;
  rel23?: string;
  arc?: string;
  resonance?: string;
  court?: string;
  blend?: string;
  body?: string;
  cta?: string;
  closing?: string;
  /** 已分配的 slot，供測試檢查無遺漏 */
  assigned: SlotName[];
};

const ALLOW_PREFIX = "允許句：";

export function splitAllow(text: string): { lead: string; allow: string | null } {
  const i = text.indexOf(ALLOW_PREFIX);
  if (i < 0) return { lead: text, allow: null };
  const allow = text.slice(i + ALLOW_PREFIX.length).replace(/。$/, "");
  return { lead: text.slice(0, i).trim(), allow };
}

export function layoutReading(segments: Segment[]): ReadingLayout {
  const out: ReadingLayout = { positions: [], assigned: [] };
  for (const s of segments) {
    if (s.kind === "position") {
      const { lead, allow } = s.position === "now" ? splitAllow(s.text) : { lead: s.text, allow: null };
      out.positions.push({ position: s.position, source: s.source, text: s.text, lead, allow });
      continue;
    }
    if (s.kind === "blend") { out.blend = s.text.replace(/^〔花精複方〕/, ""); continue; }
    if (s.kind === "body") { out.body = s.text.replace(/^〔身體練習〕/, ""); continue; }
    out.assigned.push(s.slot);
    switch (s.slot) {
      case "opening": out.opening = s.text; break;
      case "exception": out.exception = s.text; break;
      case "mirror_synthesis": out.mirrorSynthesis = s.text; break;
      case "structure": out.structure = s.text; break;
      case "rel_12": out.rel12 = s.text; break;
      case "rel_both": out.relBoth = s.text; break;
      case "rel_23": out.rel23 = s.text; break;
      case "arc": out.arc = s.text; break;
      case "resonance": out.resonance = s.text; break;
      case "court":
      case "court_generic": out.court = s.text; break;
      case "cta_brief":
      case "cta_full": out.cta = s.text; break;
      case "closing": out.closing = s.text; break;
    }
  }
  return out;
}

/** 走向六型的使用者顯示名（不顯示 register） */
export const ARC_NAME: Record<"zh" | "en", Record<Arc, string>> = {
  zh: { rupture: "轉折", resolve: "收攏", repeat: "重複", advance: "推進", settle: "回落", hold: "持平" },
  en: { rupture: "Turning", resolve: "Gathering", repeat: "Repeating", advance: "Advancing", settle: "Settling", hold: "Holding" },
};

/** 走向連線圖示的三個點（x 0–2，y 0–1；y 越小越高） */
export const ARC_SHAPE: Record<Arc, [number, number, number]> = {
  advance: [0.8, 0.5, 0.2],
  settle: [0.2, 0.5, 0.8],
  hold: [0.5, 0.5, 0.5],
  repeat: [0.5, 0.2, 0.5],
  resolve: [0.7, 0.3, 0.5],
  rupture: [0.2, 0.5, 0.9],
};

/** 花精複方三列（與引擎 §5 的去重規則一致） */
export type BlendRow = { role: "main" | "release" | "support"; cardIndex: 0 | 1 | 2; merged: boolean };
export function blendRows(flowersEn: [string, string, string]): BlendRow[] {
  const order: [BlendRow["role"], 0 | 1 | 2][] = [["main", 1], ["release", 0], ["support", 2]];
  const seen = new Set<string>();
  return order.map(([role, idx]) => {
    const f = flowersEn[idx];
    const merged = seen.has(f);
    seen.add(f);
    return { role, cardIndex: idx, merged };
  });
}

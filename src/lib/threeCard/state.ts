// §2 狀態向量：全部為純函數，無隨機。與 handoff/data/muni_assemble_reference.py 逐欄一致。
import type { Arc, Card, CourtRank, Element, Flag, Kind, Layer, MbtiRelation, Mode, Position, Register, Relation, State } from "./types";

export function elem(c: Card): Element {
  return c.element[0] as Element;
}
export function kind(c: Card): Kind {
  return c.suit === "major" ? "major" : c.number ? "pip" : "court";
}
export function layer(c: Card): Layer {
  return kind(c) === "pip" ? "L2" : "L1";
}
export function isRescue(c: Card): boolean {
  return c.bachFlowerEn.includes("Rescue");
}
function suitOf(c: Card): string | null {
  return kind(c) === "major" ? null : c.suit;
}

/** 整合型牌集合 INTEG（11 張） */
const INTEG = new Set<string>(["節制", "星星", "世界",
  ...["權杖", "聖杯", "寶劍", "錢幣"].flatMap((s) => [`${s}十`, `${s}國王`])]);
const ROMAN: Record<string, number> = { "0": 0, I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10, XI: 11, XII: 12, XIII: 13, XIV: 14, XV: 15, XVI: 16, XVII: 17, XVIII: 18, XIX: 19, XX: 20, XXI: 21 };
const COURT_RANK: Record<string, number> = { 侍者: 11, 騎士: 12, 皇后: 13, 國王: 14 };

export function courtRank(c: Card): CourtRank {
  return c.nameZh.slice(2) as CourtRank;
}

/** 正規化位階 nr(c) */
export function nr(c: Card): number {
  const k = kind(c);
  if (k === "major") return ROMAN[c.number ?? "0"] / 21;
  if (k === "pip") return ((c.number === "Ace" ? 1 : Number(c.number)) - 1) / 13;
  return (COURT_RANK[courtRank(c)] - 1) / 13;
}

const FRIENDLY = new Set(["火風", "風火", "水地", "地水"]);
const HOSTILE = new Set(["火水", "水火", "風地", "地風"]);
export function rel(a: Element, b: Element): Relation {
  if (a === b) return "same";
  const p = a + b;
  return FRIENDLY.has(p) ? "friendly" : HOSTILE.has(p) ? "hostile" : "neutral";
}

export function arc(c1: Card, c2: Card, c3: Card): Arc {
  if (rel(elem(c1), elem(c3)) === "hostile" && kind(c2) === "major") return "rupture";
  if (INTEG.has(c3.nameZh)) return "resolve";
  const s1 = suitOf(c1), s3 = suitOf(c3);
  if ((s1 && s1 === s3) || (kind(c1) === "major" && kind(c3) === "major" && elem(c1) === elem(c3))) return "repeat";
  const d = nr(c3) - nr(c1);
  return d >= 0.15 ? "advance" : d <= -0.15 ? "settle" : "hold";
}

export const REGISTER_OF_ARC: Record<Arc, Register> = {
  rupture: "收", settle: "收", hold: "持", repeat: "持", advance: "開", resolve: "開",
};

/** Keirsey 氣質群 */
export function temperament(t: string): "NT" | "NF" | "SJ" | "SP" {
  const u = t.toUpperCase();
  if (u[1] === "N") return u[2] === "T" ? "NT" : "NF";
  return u[3] === "J" ? "SJ" : "SP";
}

/** 宮廷牌型別 vs 使用者本命：exact → same_temperament → opposite（相同字母 ≤ 1）→ adjacent */
export function mbtiRelation(courtType: string, userType: string): MbtiRelation {
  const a = courtType.toUpperCase(), b = userType.toUpperCase();
  if (a === b) return "exact";
  if (temperament(a) === temperament(b)) return "same_temperament";
  let same = 0;
  for (let i = 0; i < 4; i++) if (a[i] === b[i]) same++;
  return same <= 1 ? "opposite" : "adjacent";
}

const POSITIONS: Position[] = ["origin", "now", "direction"];

export function computeState(c1: Card, c2: Card, c3: Card, opts: { mode?: Mode; userMbti?: string | null } = {}): State {
  const mode = opts.mode ?? "A";
  const userMbti = opts.userMbti ?? null;
  const cards = [c1, c2, c3];
  const a = arc(c1, c2, c3);
  const rel12 = rel(elem(c1), elem(c2));
  const rel23 = rel(elem(c2), elem(c3));
  const flags: Flag[] = [];
  if (rel12 === "hostile" && rel23 === "hostile") flags.push("both_sides_hostile");
  const pair = cards.some((x) => cards.some((y) =>
    x !== y && x.bachFlowerEn === y.bachFlowerEn && layer(x) !== layer(y) && !isRescue(x)));
  // 多張宮廷牌只取一張：此刻優先、其次來處、再其次去向
  const courts = [c2, c1, c3].filter((c) => kind(c) === "court");
  const courtCard = courts[0];
  const s: State = {
    mode,
    rel_12: rel12,
    rel_23: rel23,
    arc: a,
    major_count: cards.filter((c) => kind(c) === "major").length,
    flags,
    register: REGISTER_OF_ARC[a],
    same_suit_12: !!(suitOf(c1) && suitOf(c1) === suitOf(c2)),
    same_suit_23: !!(suitOf(c2) && suitOf(c2) === suitOf(c3)),
    kinds_12: `${kind(c1)}-${kind(c2)}`,
    kinds_23: `${kind(c2)}-${kind(c3)}`,
    resonance: pair ? "pair" : "none",
    court_present: !!courtCard,
    user_mbti: !!userMbti,
    court_rank: courtCard ? courtRank(courtCard) : null,
    mbti_relation: courtCard && userMbti && courtCard.mbti ? mbtiRelation(courtCard.mbti, userMbti) : null,
    rescue_count: cards.filter(isRescue).length,
    rescue_at: POSITIONS.filter((_, i) => isRescue(cards[i])),
  };
  if (cards.every((c) => kind(c) === "pip" && c.number === "10")) s.flags.push("all_tens");
  return s;
}

/** 被選中的那張宮廷牌（優先序同 mbti_relation） */
export function selectedCourt(c1: Card, c2: Card, c3: Card): Card | undefined {
  return [c2, c1, c3].find((c) => kind(c) === "court");
}

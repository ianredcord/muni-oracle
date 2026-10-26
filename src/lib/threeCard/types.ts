// 三牌陣型別（Spec v1.2 §1–§3、§9）。純型別檔，無執行期相依。

export type Mode = "A" | "B" | "C";
export type Variant = "brief" | "full";
export type Locale = "zh" | "en";
export type Position = "origin" | "now" | "direction";
export type Mirror = "archetype" | "persona" | "situation";
export type Register = "收" | "持" | "開";
export type Status = "draft" | "approved" | "retired";
export type Kind = "major" | "pip" | "court";
export type Layer = "L1" | "L2";
export type Element = "火" | "水" | "風" | "地";
export type Relation = "same" | "friendly" | "hostile" | "neutral";
export type Arc = "rupture" | "resolve" | "repeat" | "advance" | "settle" | "hold";
export type Flag = "both_sides_hostile" | "all_tens";
export type CourtRank = "侍者" | "騎士" | "皇后" | "國王";
export type MbtiRelation = "exact" | "same_temperament" | "opposite" | "adjacent";

export type LocalizedText = { zh: string; en?: string };

/** 引擎需要的牌卡欄位（由 MUNI_78Cards_Content_v4.x.json 產生） */
export type Card = {
  id: number;
  slug: string;
  nameZh: string;
  nameEn: string;
  suit: "major" | "wands" | "cups" | "swords" | "pentacles";
  /** 大秘儀為羅馬數字；數字牌為 Ace／2–10；宮廷牌無 */
  number?: string;
  element: string;
  bachFlowerEn: string;
  bachFlowerZh: string;
  step2Allow: string;
  step3Body: string;
  systemL2Echo: string;
  /** 宮廷牌的 MBTI 四字母（資料來源：planetSign 欄位） */
  mbti?: string;
};

export type SlotName =
  | "opening" | "exception" | "structure" | "mirror_synthesis"
  | "rel_12" | "rel_23" | "rel_both" | "arc" | "resonance"
  | "court" | "court_generic" | "cta_brief" | "cta_full" | "closing";

/** 可省略的槽（§3.3）；其餘為空代表模板庫缺口 */
export const OPTIONAL_SLOTS: ReadonlySet<SlotName> = new Set<SlotName>([
  "exception", "resonance", "court", "court_generic", "rel_both",
]);

export type TriggerValue = string | number | boolean | string[] | null;

export type SlotTemplate = {
  template_id: string;
  slot: SlotName;
  trigger: Record<string, TriggerValue>;
  exclude: Record<string, TriggerValue[]>;
  text: LocalizedText;
  register: Register[];
  weight: number;
  tone_tags: string[];
  length_chars: { zh: number; en?: number };
  status: Status;
  version: string;
  note: string;
};

export type PositionText = {
  cardId: number;
  position: Position;
  text: LocalizedText;
  status: Status;
};

export type MirrorText = {
  cardId: number;
  mirror: Mirror;
  text: LocalizedText;
  status: Status;
};

/** §2 狀態向量（variant 不是狀態） */
export type State = {
  mode: Mode;
  rel_12: Relation;
  rel_23: Relation;
  arc: Arc;
  major_count: number;
  flags: Flag[];
  register: Register;
  same_suit_12: boolean;
  same_suit_23: boolean;
  kinds_12: string;
  kinds_23: string;
  resonance: "pair" | "none";
  court_present: boolean;
  user_mbti: boolean;
  court_rank: CourtRank | null;
  mbti_relation: MbtiRelation | null;
  rescue_count: number;
  rescue_at: Position[];
};

/** 使用者最近 N 篇在各槽看過的 template_id */
export type Recent = Partial<Record<SlotName, string[]>>;

export type Selections = Partial<Record<SlotName, string>>;

export type ReadingEventType = "viewed_brief" | "expanded_full" | "opened_deep" | "shared" | "saved" | "dwell_ms";
export type ReadingEvent = { type: ReadingEventType; at: string; meta?: Record<string, unknown> };

/** §9 reading 紀錄 */
export type ReadingRecord = {
  reading_id: string;
  user_id: string | null;
  created_at: string;
  mode: Mode;
  initial_variant: Variant;
  locale: Locale;
  cards: [number, number, number];
  state: State;
  selections: Selections;
  content_version: string;
  engine_version: string;
  chars: { brief: number; full: number };
  events: ReadingEvent[];
};

/** 引擎讀取的內容庫；測試可注入假資料 */
export type Library = {
  cards: Card[];
  templates: SlotTemplate[];
  positionText: PositionText[];
  mirrorText: MirrorText[];
};

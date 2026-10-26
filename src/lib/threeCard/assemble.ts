// §3.2 渲染順序、§3.4 佔位符、§5 合成規則、§10 精簡版／完整版子集。
import { selectAll, seedOf, type SelectWarning, type SelectedTemplates } from "./select";
import { computeState, elem, selectedCourt } from "./state";
import type { Card, Library, Locale, Mode, Position, ReadingRecord, Recent, Selections, SlotName, State, Variant } from "./types";

export const CONTENT_VERSION = "2026-10";
export const ENGINE_VERSION = "v2";
export const CLOSING_FIXED = "三張牌是三面鏡子，不是三個判決。";

/** 精簡版渲染的模板槽（mirror_synthesis 只在模式 C 出現） */
const BRIEF_TEMPLATE_SLOTS: ReadonlySet<SlotName> = new Set<SlotName>(["exception", "mirror_synthesis", "arc", "cta_brief", "closing"]);

const ELEM_ZH: Record<string, string> = { 火: "火", 水: "水", 風: "風", 地: "地" };

export type Segment =
  | { kind: "template"; slot: SlotName; templateId: string; text: string }
  | { kind: "position"; position: Position; source: "position" | "mirror"; cardId: number; text: string }
  | { kind: "blend"; text: string }
  | { kind: "body"; text: string };

export type Rendered = { segments: Segment[]; text: string; chars: number };

export type FillContext = { cards: [Card, Card, Card]; userMbti?: string | null };

/** 佔位符替換（§3.4） */
export function fill(text: string, ctx: FillContext): string {
  const [c1, c2, c3] = ctx.cards;
  const trio = [c1, c2, c3];
  const ess = trio.find((c) => trio.filter((x) => x.bachFlowerEn === c.bachFlowerEn).length > 1) ?? c2;
  const court = selectedCourt(c1, c2, c3);
  const vars: Record<string, string> = {
    elem_1: ELEM_ZH[elem(c1)], elem_2: ELEM_ZH[elem(c2)], elem_3: ELEM_ZH[elem(c3)],
    essence_zh: ess.bachFlowerZh, essence_en: ess.bachFlowerEn,
    court_name: court?.nameZh ?? "", court_type: court?.mbti ?? "", user_type: ctx.userMbti ?? "",
    archetype: c1.nameZh, persona: c2.nameZh, situation: c3.nameZh,
  };
  return text.replace(/\{([a-z_0-9]+)\}/g, (m, k: string) => (k in vars ? vars[k] : m));
}

/** 字數：以 Unicode 碼點計（與 Python len 相同） */
export function countChars(s: string): number {
  let n = 0;
  for (const ch of s) { void ch; n++; }
  return n;
}

export function cardsOf(lib: Library, ids: [number, number, number]): [Card, Card, Card] {
  const byId = new Map(lib.cards.map((c) => [c.id, c]));
  return ids.map((id) => {
    const c = byId.get(id);
    if (!c) throw new Error(`找不到牌 id ${id}`);
    return c;
  }) as [Card, Card, Card];
}

/** 鏡像短文全有或全無：三張任一缺核准稿即整篇退回位置短文 */
export function mirrorOk(lib: Library, cards: [Card, Card, Card]): boolean {
  return cards.every((c) => lib.mirrorText.some((m) => m.cardId === c.id && m.status === "approved"));
}

export function render(
  lib: Library,
  cards: [Card, Card, Card],
  state: State,
  selections: SelectedTemplates,
  mode: Mode,
  variant: Variant,
  locale: Locale = "zh",
  userMbti?: string | null,
): Rendered {
  const segments: Segment[] = [];
  const useMirror = mode === "C" && mirrorOk(lib, cards);
  const ctx: FillContext = { cards, userMbti };
  const textOf = (t: { zh: string; en?: string }) => (locale === "en" && t.en ? t.en : t.zh);
  const put = (slot: SlotName) => {
    const t = selections[slot];
    if (!t) return;
    if (variant === "brief" && !BRIEF_TEMPLATE_SLOTS.has(slot)) return;
    if (variant === "full" && slot === "cta_brief") return;
    segments.push({ kind: "template", slot, templateId: t.template_id, text: fill(textOf(t.text), ctx) });
  };
  const pos = (c: Card, position: Position) => {
    if (useMirror) {
      const m = lib.mirrorText.find((r) => r.cardId === c.id);
      if (!m) throw new Error(`缺鏡像短文：card ${c.id}`);
      segments.push({ kind: "position", position, source: "mirror", cardId: c.id, text: textOf(m.text) });
    } else {
      const p = lib.positionText.find((r) => r.cardId === c.id && r.position === position);
      if (!p) throw new Error(`缺位置短文：card ${c.id} ${position}`);
      segments.push({ kind: "position", position, source: "position", cardId: c.id, text: textOf(p.text) });
    }
  };
  const [c1, c2, c3] = cards;
  put("opening"); put("exception"); put("structure"); put("mirror_synthesis");
  pos(c1, "origin"); put("rel_both"); put("rel_12");
  pos(c2, "now"); put("rel_23");
  pos(c3, "direction");
  put("arc"); put("resonance"); put("court"); put("court_generic");
  if (variant === "full") {
    const roles: [string, Card][] = [["主", c2], ["釋放", c1], ["支持", c3]];
    const seen = new Set<string>();
    const parts: string[] = [];
    for (const [role, c] of roles) {
      if (seen.has(c.bachFlowerEn)) { parts.push(`${role}：（與上同支，已合併）`); continue; }
      seen.add(c.bachFlowerEn);
      parts.push(`${role}：${c.bachFlowerZh}（${c.bachFlowerEn}）`);
    }
    segments.push({ kind: "blend", text: `〔花精複方〕${parts.join("／")}　共 ${seen.size} 支` });
    segments.push({ kind: "body", text: `〔身體練習〕${c3.step3Body}` });
  }
  put("cta_brief"); put("cta_full"); put("closing");
  void state;
  const text = segments.map((s) => s.text).join("\n\n");
  const chars = segments.reduce((n, s) => n + countChars(s.text), 0);
  return { segments, text, chars };
}

/** 與參考實作相同的註記格式：模板句後加「　`TEMPLATE_ID`」，段落間空一行 */
export function toAnnotatedText(r: Rendered): string {
  const lines: string[] = [];
  for (const s of r.segments) {
    lines.push(s.kind === "template" ? `${s.text}　\`${s.templateId}\`` : s.text);
    lines.push("");
  }
  return lines.join("\n");
}

export type ComposeOptions = {
  userId?: string | null;
  /** ISO 日期時間；種子只取 YYYY-MM-DD */
  createdAt?: string;
  mode?: Mode;
  variant?: Variant;
  locale?: Locale;
  recent?: Recent;
  userMbti?: string | null;
  /** server 端 uuid；未提供時用 crypto.randomUUID */
  readingId?: string;
};

export type Composed = { text: string; rendered: Rendered; record: ReadingRecord; templates: SelectedTemplates; warnings: SelectWarning[] };

function newId(): string {
  const g = globalThis as { crypto?: { randomUUID?: () => string } };
  return g.crypto?.randomUUID ? g.crypto.randomUUID() : `r-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/** 抽牌：算狀態、一次選完所有槽、渲染首次版本、產生 reading 紀錄 */
export function compose(lib: Library, ids: [number, number, number], opts: ComposeOptions = {}): Composed {
  const mode = opts.mode ?? "A";
  const variant = opts.variant ?? "full";
  const locale = opts.locale ?? "zh";
  const userId = opts.userId === undefined ? "demo" : opts.userId;
  const createdAt = opts.createdAt ?? new Date().toISOString();
  const cards = cardsOf(lib, ids);
  const state = computeState(cards[0], cards[1], cards[2], { mode, userMbti: opts.userMbti });
  const seed = seedOf(userId ?? "anon", createdAt.slice(0, 10), ids);
  const { selections, warnings } = selectAll(lib, state, seed, opts.recent, mode);
  const brief = render(lib, cards, state, selections, mode, "brief", locale, opts.userMbti);
  const full = render(lib, cards, state, selections, mode, "full", locale, opts.userMbti);
  const rendered = variant === "brief" ? brief : full;
  const sel: Selections = {};
  for (const [slot, t] of Object.entries(selections)) sel[slot as SlotName] = t.template_id;
  const record: ReadingRecord = {
    reading_id: opts.readingId ?? newId(),
    user_id: userId,
    created_at: createdAt,
    mode,
    initial_variant: variant,
    locale,
    cards: ids,
    state,
    selections: sel,
    content_version: CONTENT_VERSION,
    engine_version: ENGINE_VERSION,
    chars: { brief: brief.chars, full: full.chars },
    events: [],
  };
  return { text: rendered.text, rendered, record, templates: selections, warnings };
}

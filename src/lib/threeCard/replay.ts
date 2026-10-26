// §9：重看一律重播，不重算選取；依 template_id 取最新文字、忽略 status（retired 仍可重播）。
import { cardsOf, render, type Rendered } from "./assemble";
import type { SelectedTemplates } from "./select";
import type { Library, Locale, ReadingRecord, SlotName, Variant } from "./types";

export function templatesOf(lib: Library, record: ReadingRecord): SelectedTemplates {
  const byId = new Map(lib.templates.map((t) => [t.template_id, t]));
  const sel: SelectedTemplates = {};
  for (const [slot, id] of Object.entries(record.selections)) {
    const t = byId.get(id);
    if (!t) throw new Error(`重播失敗：模板 ${id} 不在資料中（retired 模板也必須保留）`);
    sel[slot as SlotName] = t;
  }
  return sel;
}

export function replay(lib: Library, record: ReadingRecord, variant?: Variant, locale?: Locale, userMbti?: string | null): Rendered {
  const cards = cardsOf(lib, record.cards);
  return render(lib, cards, record.state, templatesOf(lib, record), record.mode, variant ?? record.initial_variant, locale ?? record.locale, userMbti);
}

/** 展開完整版：只重播 full 子集並 append expanded_full 事件，不重新選取 */
export function expandFull(lib: Library, record: ReadingRecord, at: string = new Date().toISOString()): { rendered: Rendered; record: ReadingRecord } {
  const rendered = replay(lib, record, "full");
  return { rendered, record: { ...record, events: [...record.events, { type: "expanded_full", at }] } };
}

"use server";

// 三牌陣 server actions：選取與重播都在 server 端，模板與短文不進前端。
import { getTarotCards } from "@/data/tarot";
import { compose, defaultDeepText, defaultLibrary, kind, pickBlendDeep, pickDeep, pickRelationDeep, replay, type Mode, type ReadingRecord, type Recent, type Segment, type State } from "@/lib/threeCard/index";
import type { Locale } from "@/i18n/config";
import type { CardView, DeepBundle } from "@/lib/threeCard/storage";

const MODES: Mode[] = ["A", "B", "C"];

export async function listCardViews(locale: Locale): Promise<CardView[]> {
  const lib = defaultLibrary();
  const byId = new Map(lib.cards.map((c) => [c.id, c]));
  return getTarotCards(locale).map((c) => {
    const e = byId.get(c.id)!;
    return {
      id: c.id,
      slug: c.slug,
      displayName: c.displayName,
      altName: c.altName,
      image: c.image,
      kind: kind(e),
      flowerZh: e.bachFlowerZh,
      flowerEn: e.bachFlowerEn,
      archetype: c.jungianArchetype ?? "",
      step2Allow: e.step2Allow,
      deep: {
        uprightMessage: c.uprightMessage ?? "", symbolReading: c.symbolReading ?? "", jungianAnalysis: c.jungianAnalysis ?? "",
        flowerSpectrum: c.flowerSpectrum ?? "", step1Status: c.step1Status ?? "", breathing: c.breathing ?? "",
        aromaGuide: c.aromaGuide ?? "", dailyPractice: c.dailyPractice ?? "", awarenessNote: c.awarenessNote ?? "",
      },
    };
  });
}

function viewsFor(locale: Locale, ids: [number, number, number], all: CardView[]): CardView[] {
  const byId = new Map(all.map((c) => [c.id, c]));
  return ids.map((id) => {
    const v = byId.get(id);
    if (!v) throw new Error(`unknown card ${id}`);
    return v;
  });
}

function validIds(mode: Mode, ids: unknown): ids is [number, number, number] {
  if (!Array.isArray(ids) || ids.length !== 3) return false;
  if (!ids.every((x) => Number.isInteger(x) && x >= 1 && x <= 78)) return false;
  if (new Set(ids).size !== 3) return false;
  if (mode === "C") {
    const lib = defaultLibrary();
    const k = (id: number) => kind(lib.cards.find((c) => c.id === id)!);
    return k(ids[0]) === "major" && k(ids[1]) === "court" && k(ids[2]) === "pip";
  }
  return true;
}

function deepFor(state: State, readingId: string, locale: Locale): DeepBundle {
  const rows = defaultDeepText();
  return {
    arc: pickDeep(rows, "arc", state, readingId, locale),
    rel12: state.mode === "C" ? null : pickRelationDeep(rows, "12", state, readingId, locale),
    rel23: state.mode === "C" ? null : pickRelationDeep(rows, "23", state, readingId, locale),
    blend: {
      main: pickBlendDeep(rows, "main", readingId, locale),
      release: pickBlendDeep(rows, "release", readingId, locale),
      support: pickBlendDeep(rows, "support", readingId, locale),
    },
  };
}

export type DrawResult =
  | { ok: true; record: ReadingRecord; brief: Segment[]; full: Segment[]; cards: CardView[]; deep: DeepBundle }
  | { ok: false; error: string };

export async function drawReading(input: { mode: Mode; ids: number[]; locale: Locale; userId: string; recent?: Recent }): Promise<DrawResult> {
  const { mode, locale, userId } = input;
  if (!MODES.includes(mode)) return { ok: false, error: "bad mode" };
  if (!validIds(mode, input.ids)) return { ok: false, error: "bad cards" };
  const lib = defaultLibrary();
  const c = compose(lib, input.ids, { mode, locale, userId, variant: "brief", recent: input.recent, createdAt: new Date().toISOString() });
  const full = replay(lib, c.record, "full");
  const all = await listCardViews(locale);
  return { ok: true, record: c.record, brief: c.rendered.segments, full: full.segments, cards: viewsFor(locale, input.ids, all), deep: deepFor(c.record.state, c.record.reading_id, locale) };
}

export type ReplayResult = { ok: true; brief: Segment[]; full: Segment[]; cards: CardView[]; deep: DeepBundle } | { ok: false; error: string };

export async function replayReading(record: ReadingRecord, locale: Locale): Promise<ReplayResult> {
  try {
    if (!record || !MODES.includes(record.mode) || !validIds(record.mode, record.cards)) return { ok: false, error: "bad record" };
    const lib = defaultLibrary();
    const brief = replay(lib, record, "brief", locale);
    const full = replay(lib, record, "full", locale);
    const all = await listCardViews(locale);
    return { ok: true, brief: brief.segments, full: full.segments, cards: viewsFor(locale, record.cards, all), deep: deepFor(record.state, record.reading_id, locale) };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}

// 瀏覽器端：reading 紀錄（LocalStorageReadingStore）＋渲染快取。只在 client 使用。
import type { Segment } from "./assemble";
import { LocalStorageReadingStore, recentFrom, RECENT_N } from "./reading";
import type { ReadingRecord, Recent } from "./types";

export type CardView = {
  id: number;
  slug: string;
  displayName: string;
  altName: string;
  image: string;
  kind: "major" | "court" | "pip";
  flowerZh: string;
  flowerEn: string;
  archetype: string;
  step2Allow: string;
};

export type RenderBundle = { brief: Segment[]; full: Segment[]; cards: CardView[] };

const RENDER_KEY = "muni.threeCard.render.v1";

let store: LocalStorageReadingStore | null = null;
export function readingStore(): LocalStorageReadingStore {
  if (!store) store = new LocalStorageReadingStore();
  return store;
}

function readCache(): Record<string, RenderBundle> {
  try {
    const raw = window.localStorage.getItem(RENDER_KEY);
    return raw ? (JSON.parse(raw) as Record<string, RenderBundle>) : {};
  } catch {
    return {};
  }
}

export function cacheRender(readingId: string, bundle: RenderBundle): void {
  try {
    const all = readCache();
    all[readingId] = bundle;
    const ids = Object.keys(all);
    if (ids.length > 50) for (const id of ids.slice(0, ids.length - 50)) delete all[id];
    window.localStorage.setItem(RENDER_KEY, JSON.stringify(all));
  } catch {
    /* 無痕模式或停用儲存：略過快取 */
  }
}

export function getCachedRender(readingId: string): RenderBundle | null {
  return readCache()[readingId] ?? null;
}

export async function saveReading(record: ReadingRecord, bundle: RenderBundle): Promise<void> {
  await readingStore().save(record);
  cacheRender(record.reading_id, bundle);
}

export async function recentForUser(userId: string): Promise<Recent> {
  return recentFrom(await readingStore().listRecent(userId, RECENT_N));
}

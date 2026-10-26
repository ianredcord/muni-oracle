// §9 reading 紀錄的儲存介面與 §11 事件寫入。先以 localStorage／記憶體實作，介面可換成後端。
import type { ReadingEvent, ReadingEventType, ReadingRecord, Recent, SlotName } from "./types";

export type { ReadingRecord, ReadingEvent } from "./types";

export const RECENT_N = 5;

export interface ReadingStore {
  save(record: ReadingRecord): Promise<void>;
  get(readingId: string): Promise<ReadingRecord | null>;
  /** 該使用者最近 n 篇，created_at 由新到舊 */
  listRecent(userId: string | null, n?: number): Promise<ReadingRecord[]>;
  appendEvent(readingId: string, event: ReadingEvent): Promise<ReadingRecord | null>;
}

/** 由最近 N 篇紀錄整理出各槽看過的 template_id（近期排除用） */
export function recentFrom(records: ReadingRecord[]): Recent {
  const recent: Recent = {};
  for (const r of records) {
    for (const [slot, id] of Object.entries(r.selections)) {
      const key = slot as SlotName;
      (recent[key] ??= []).push(id);
    }
  }
  return recent;
}

export function makeEvent(type: ReadingEventType, meta?: Record<string, unknown>, at: string = new Date().toISOString()): ReadingEvent {
  return meta ? { type, at, meta } : { type, at };
}

export class MemoryReadingStore implements ReadingStore {
  private readonly map = new Map<string, ReadingRecord>();
  async save(record: ReadingRecord): Promise<void> {
    this.map.set(record.reading_id, structuredClone(record));
  }
  async get(readingId: string): Promise<ReadingRecord | null> {
    const r = this.map.get(readingId);
    return r ? structuredClone(r) : null;
  }
  async listRecent(userId: string | null, n: number = RECENT_N): Promise<ReadingRecord[]> {
    return [...this.map.values()]
      .filter((r) => r.user_id === userId)
      .sort((a, b) => (a.created_at < b.created_at ? 1 : a.created_at > b.created_at ? -1 : 0))
      .slice(0, n)
      .map((r) => structuredClone(r));
  }
  async appendEvent(readingId: string, event: ReadingEvent): Promise<ReadingRecord | null> {
    const r = this.map.get(readingId);
    if (!r) return null;
    r.events.push(event);
    return structuredClone(r);
  }
}

const LS_KEY = "muni.threeCard.readings.v1";

type StorageLike = { getItem(k: string): string | null; setItem(k: string, v: string): void };

/** 瀏覽器 localStorage 實作；紀錄不可變，只有 events 可 append */
export class LocalStorageReadingStore implements ReadingStore {
  private readonly storage: StorageLike;
  private readonly key: string;
  constructor(storage?: StorageLike, key: string = LS_KEY) {
    this.storage = storage ?? ((globalThis as { localStorage?: StorageLike }).localStorage as StorageLike);
    this.key = key;
  }
  private readAll(): ReadingRecord[] {
    try {
      const raw = this.storage.getItem(this.key);
      return raw ? (JSON.parse(raw) as ReadingRecord[]) : [];
    } catch {
      return [];
    }
  }
  private writeAll(records: ReadingRecord[]): void {
    this.storage.setItem(this.key, JSON.stringify(records));
  }
  async save(record: ReadingRecord): Promise<void> {
    const all = this.readAll().filter((r) => r.reading_id !== record.reading_id);
    all.push(record);
    this.writeAll(all);
  }
  async get(readingId: string): Promise<ReadingRecord | null> {
    return this.readAll().find((r) => r.reading_id === readingId) ?? null;
  }
  async listRecent(userId: string | null, n: number = RECENT_N): Promise<ReadingRecord[]> {
    return this.readAll()
      .filter((r) => r.user_id === userId)
      .sort((a, b) => (a.created_at < b.created_at ? 1 : a.created_at > b.created_at ? -1 : 0))
      .slice(0, n);
  }
  async appendEvent(readingId: string, event: ReadingEvent): Promise<ReadingRecord | null> {
    const all = this.readAll();
    const r = all.find((x) => x.reading_id === readingId);
    if (!r) return null;
    r.events.push(event);
    this.writeAll(all);
    return r;
  }
}

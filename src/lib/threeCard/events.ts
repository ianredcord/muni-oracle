// §11 reading 事件寫入：在對應互動時 append 到 reading.events。V2 只寫入，不做任何統計。
import type { ReadingStore } from "./reading";
import { makeEvent } from "./reading";
import type { ReadingEvent, ReadingEventType, ReadingRecord } from "./types";

export type Clock = () => string;
const isoNow: Clock = () => new Date().toISOString();

/** 單篇 reading 的事件追蹤器；每個方法對應一種互動 */
export class ReadingTracker {
  private dwellStart: number | null = null;
  private readonly store: ReadingStore;
  private readonly readingId: string;
  private readonly clock: Clock;
  private readonly nowMs: () => number;
  constructor(store: ReadingStore, readingId: string, clock: Clock = isoNow, nowMs: () => number = () => Date.now()) {
    this.store = store;
    this.readingId = readingId;
    this.clock = clock;
    this.nowMs = nowMs;
  }

  private async append(type: ReadingEventType, meta?: Record<string, unknown>): Promise<ReadingRecord | null> {
    return this.store.appendEvent(this.readingId, makeEvent(type, meta, this.clock()));
  }
  /** 首屏精簡版呈現時 */
  viewedBrief() { return this.append("viewed_brief"); }
  /** 按「展開完整解讀」時（渲染用 expandFull，不重選） */
  expandedFull() { return this.append("expanded_full"); }
  /** 按完整版底部按鈕進入深度解析時 */
  openedDeep() { return this.append("opened_deep"); }
  shared(meta?: Record<string, unknown>) { return this.append("shared", meta); }
  saved() { return this.append("saved"); }
  /** 停留計時：進入頁面 start，離開頁面 stop 並寫入 dwell_ms（meta.ms） */
  startDwell(): void { this.dwellStart = this.nowMs(); }
  async stopDwell(): Promise<ReadingRecord | null> {
    if (this.dwellStart === null) return null;
    const ms = Math.max(0, this.nowMs() - this.dwellStart);
    this.dwellStart = null;
    return this.append("dwell_ms", { ms });
  }
}

export function createTracker(store: ReadingStore, readingId: string, clock?: Clock, nowMs?: () => number): ReadingTracker {
  return new ReadingTracker(store, readingId, clock, nowMs);
}

export type { ReadingEvent };

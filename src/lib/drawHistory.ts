// src/lib/drawHistory.ts
// 抽牌紀錄：只存在使用者自己的瀏覽器（localStorage），不需帳號、不上傳。
// 以 useSyncExternalStore 對接 React，避免 SSR 與 hydration 落差。

export type DeckType = "flower" | "tarot";

export type DrawRecord = {
  deck: DeckType;
  slug: string;
  /** 抽牌當下的時間戳（毫秒） */
  at: number;
};

const KEY = "muni.draw-history.v1";
/** 保留上限；超過時捨棄最舊的紀錄 */
const MAX_RECORDS = 300;

/** SSR 與尚無紀錄時共用的空陣列（維持參考穩定，避免無限重繪） */
const EMPTY: DrawRecord[] = [];

// getSnapshot 必須回傳穩定參考，因此快取解析結果，只在原始字串變動時重新解析。
// UNCACHED 與「讀到 null（尚無紀錄）」是兩件事，需用獨立哨符區分，
// 否則清除紀錄後 raw 與 cachedRaw 同為 null，會誤判為未變動而回傳過期資料。
const UNCACHED = Symbol("uncached");
let cachedRaw: string | null | typeof UNCACHED = UNCACHED;
let cachedValue: DrawRecord[] = EMPTY;

function isValid(r: unknown): r is DrawRecord {
  if (typeof r !== "object" || r === null) return false;
  const rec = r as Record<string, unknown>;
  return (
    (rec.deck === "flower" || rec.deck === "tarot") &&
    typeof rec.slug === "string" &&
    rec.slug.length > 0 &&
    typeof rec.at === "number" &&
    Number.isFinite(rec.at)
  );
}

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    // 無痕模式或使用者停用儲存
    return null;
  }
}

/** 讀取紀錄（新到舊）。同一份原始字串會回傳同一個陣列參考。 */
export function getHistory(): DrawRecord[] {
  if (typeof window === "undefined") return EMPTY;

  const raw = readRaw();
  if (raw === cachedRaw) return cachedValue;

  cachedRaw = raw;
  if (!raw) {
    cachedValue = EMPTY;
    return cachedValue;
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    cachedValue = Array.isArray(parsed)
      ? parsed.filter(isValid).sort((a, b) => b.at - a.at)
      : EMPTY;
  } catch {
    cachedValue = EMPTY;
  }
  return cachedValue;
}

/** SSR 快照：伺服器端一律視為沒有紀錄 */
export function getServerHistory(): DrawRecord[] {
  return EMPTY;
}

// ── 訂閱機制：同分頁用自訂事件，跨分頁用 storage 事件 ──
const CHANGED = "muni:draw-history-changed";
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((fn) => fn());
}

export function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  if (typeof window !== "undefined") {
    window.addEventListener(CHANGED, onChange);
    window.addEventListener("storage", onChange);
  }
  return () => {
    listeners.delete(onChange);
    if (typeof window !== "undefined") {
      window.removeEventListener(CHANGED, onChange);
      window.removeEventListener("storage", onChange);
    }
  };
}

function persist(records: DrawRecord[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(records));
  } catch {
    // 儲存空間已滿或被停用：略過，不影響抽牌流程
    return;
  }
  cachedRaw = UNCACHED; // 讓下次 getHistory 重新解析
  window.dispatchEvent(new Event(CHANGED));
  notify();
}

/** 記錄一次抽牌。timestamp 由呼叫端事件當下取得，不在 render 中執行。 */
export function recordDraw(deck: DeckType, slug: string): void {
  if (typeof window === "undefined") return;
  const next = [{ deck, slug, at: Date.now() }, ...getHistory()].slice(
    0,
    MAX_RECORDS
  );
  persist(next);
}

/** 清除全部紀錄 */
export function clearHistory(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    return;
  }
  cachedRaw = UNCACHED;
  window.dispatchEvent(new Event(CHANGED));
  notify();
}

// ── 統計 ──

export type CardTally = {
  deck: DeckType;
  slug: string;
  count: number;
  /** 最近一次抽到的時間 */
  lastAt: number;
};

/** 依牌卡彙總次數，次數多的在前；次數相同則以最近抽到的在前。 */
export function tallyByCard(records: DrawRecord[]): CardTally[] {
  const map = new Map<string, CardTally>();
  for (const r of records) {
    const key = `${r.deck}:${r.slug}`;
    const hit = map.get(key);
    if (hit) {
      hit.count += 1;
      if (r.at > hit.lastAt) hit.lastAt = r.at;
    } else {
      map.set(key, { deck: r.deck, slug: r.slug, count: 1, lastAt: r.at });
    }
  }
  return [...map.values()].sort(
    (a, b) => b.count - a.count || b.lastAt - a.lastAt
  );
}

/** 篩出指定月份（當地時區）的紀錄 */
export function filterByMonth(
  records: DrawRecord[],
  year: number,
  month: number
): DrawRecord[] {
  return records.filter((r) => {
    const d = new Date(r.at);
    return d.getFullYear() === year && d.getMonth() === month;
  });
}

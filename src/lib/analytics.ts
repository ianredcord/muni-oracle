// src/lib/analytics.ts
// GA4 自訂事件。單一責任：把站內關鍵行為送到 gtag，並在 gtag 不存在時安靜略過。

type GtagWindow = Window & {
  gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
};

/** 送出 GA4 事件；SSR 或尚未載入 gtag 時自動略過 */
export function track(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  const gtag = (window as GtagWindow).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", eventName, params);
}

/** 牌組類型 */
export type DeckType = "flower" | "tarot";

/** 完成抽牌 */
export function trackDraw(deck: DeckType, cardSlug: string): void {
  track("card_draw", { deck, card_slug: cardSlug });
}

/** 分享 */
export function trackShare(
  deck: DeckType,
  method: "facebook" | "line" | "instagram" | "copy",
  cardSlug: string
): void {
  track("share", { deck, method, content_type: "card", item_id: cardSlug });
}

/** 跨牌組導流（花精 → 塔羅） */
export function trackCrossDeck(from: string, cardSlug: string): void {
  track("cross_deck_click", { from, card_slug: cardSlug, to: "tarot" });
}

/** 導購與外部 CTA */
export function trackCta(
  cta: "energy_support" | "healing_advisor",
  location: string,
  cardSlug?: string
): void {
  track("cta_click", { cta, location, ...(cardSlug ? { card_slug: cardSlug } : {}) });
}

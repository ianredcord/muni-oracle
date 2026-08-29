import type { Locale } from "@/i18n/config";
import { FLOWERS as FLOWERS_ZH, type FlowerCard } from "./flowers.generated";
import { FLOWERS_EN } from "./flowers.en.generated";

export type { FlowerCard };

const BY_LOCALE: Record<Locale, FlowerCard[]> = {
  zh: FLOWERS_ZH,
  en: FLOWERS_EN,
};

/** 取得指定語言的 40 張花精牌卡，順序與中文版一致 */
export function getFlowers(locale: Locale): FlowerCard[] {
  return BY_LOCALE[locale] ?? FLOWERS_ZH;
}

/** 依 slug 取單張牌卡；slug 不分語言，找不到英文內容時退回中文 */
export function getFlowerBySlug(locale: Locale, slug: string): FlowerCard | undefined {
  return (
    getFlowers(locale).find((flower) => flower.slug === slug) ??
    FLOWERS_ZH.find((flower) => flower.slug === slug)
  );
}

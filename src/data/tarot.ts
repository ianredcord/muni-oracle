import type { Locale } from "@/i18n/config";
import {
  TAROT_CARDS as TAROT_CARDS_ZH,
  SUIT_NAMES,
  type TarotCard,
  type TarotSuit,
} from "./tarot.generated";
import { TAROT_CARDS_EN, SUIT_NAMES_EN } from "./tarot.en.generated";

export type { TarotCard, TarotSuit };

/** 該語言的顯示名稱與副標名稱 */
export type LocalizedTarotCard = TarotCard & {
  /** 主要顯示名稱：中文站用中文牌名，英文站用英文牌名 */
  displayName: string;
  /** 副標名稱（另一語言） */
  altName: string;
};

const CARDS_BY_LOCALE: Record<Locale, TarotCard[]> = {
  zh: TAROT_CARDS_ZH,
  en: TAROT_CARDS_EN,
};

const SUITS_BY_LOCALE: Record<Locale, Record<TarotSuit, string>> = {
  zh: SUIT_NAMES,
  en: SUIT_NAMES_EN,
};

function localize(locale: Locale, card: TarotCard): LocalizedTarotCard {
  return {
    ...card,
    displayName: locale === "zh" ? card.nameZh : card.nameEn,
    altName: locale === "zh" ? card.nameEn : card.nameZh,
  };
}

export function getTarotCards(locale: Locale): LocalizedTarotCard[] {
  return (CARDS_BY_LOCALE[locale] ?? TAROT_CARDS_ZH).map((card) =>
    localize(locale, card),
  );
}

export function getTarotCardBySlug(
  locale: Locale,
  slug: string,
): LocalizedTarotCard | undefined {
  const card =
    (CARDS_BY_LOCALE[locale] ?? TAROT_CARDS_ZH).find((c) => c.slug === slug) ??
    TAROT_CARDS_ZH.find((c) => c.slug === slug);

  return card ? localize(locale, card) : undefined;
}

export function getSuitNames(locale: Locale): Record<TarotSuit, string> {
  return SUITS_BY_LOCALE[locale] ?? SUIT_NAMES;
}

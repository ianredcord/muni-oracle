import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTarotCardBySlug } from "@/data/tarot";
import { getTarotShareText } from "@/data/shareTexts";
import { isLocale, localeHref, OG_LOCALE } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_URL, buildAlternates } from "@/i18n/metadata";
import TarotResultClient from "./TarotResultClient";

// 依 card 參數動態渲染，讓搜尋引擎與社群預覽抓得到內容
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ card?: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);
  const query = await searchParams;
  const card = query?.card ? getTarotCardBySlug(locale, query.card) : undefined;

  if (!card) {
    return {
      title: dict.tarotDraw.resultFallbackTitle,
      description: dict.tarotDraw.resultFallbackDescription,
    };
  }

  const shareText = getTarotShareText(
    locale,
    card.displayName,
    card.altName,
    card.uprightMessage,
  );
  const title = `${dict.tarotDraw.resultMetaTitlePrefix} | ${card.displayName}`;
  const description = card.uprightMessage ?? dict.tarotDraw.resultFallbackDescription;
  const path = `/tarot/draw/result?card=${card.slug}`;
  const pageUrl = `${SITE_URL}${localeHref(locale, path)}`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl, ...buildAlternates(path) },
    openGraph: {
      type: "website",
      url: pageUrl,
      title,
      description: shareText.fb,
      locale: OG_LOCALE[locale],
      siteName: dict.tarotDraw.resultSiteName,
      images: [{ url: `${SITE_URL}${card.image}`, alt: card.displayName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${card.image}`],
    },
  };
}

export default async function TarotResultPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ card?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const query = await searchParams;

  return <TarotResultClient locale={locale} cardSlug={query?.card ?? ""} />;
}

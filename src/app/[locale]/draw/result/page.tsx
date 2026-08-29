import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFlowerBySlug, getFlowers } from "@/data/flowers";
import { getShareText } from "@/data/shareTexts";
import { isLocale, localeHref, OG_LOCALE } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_URL, buildAlternates } from "@/i18n/metadata";
import ResultClient from "./ResultClient";

// 強制動態渲染
export const dynamic = "force-dynamic";

// 動態生成 OG Meta
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
  const cardSlug = query?.card || "agrimony";

  // 找到對應的花精
  const flower = getFlowerBySlug(locale, cardSlug) ?? getFlowers(locale)[0];

  // 取得分享文案
  const shareText = getShareText(locale, flower.slug, flower.name);

  const ogTitle = `${dict.result.metaTitlePrefix} | ${flower.name}`;
  const ogDescription = shareText.fb;
  const ogImage = `${SITE_URL}${flower.image}`;
  const path = `/draw/result?card=${cardSlug}`;
  const pageUrl = `${SITE_URL}${localeHref(locale, path)}`;

  return {
    title: ogTitle,
    description: ogDescription,
    alternates: { canonical: pageUrl, ...buildAlternates(path) },
    openGraph: {
      type: "website",
      url: pageUrl,
      title: ogTitle,
      description: ogDescription,
      locale: OG_LOCALE[locale],
      images: [{ url: ogImage, width: 600, height: 894, alt: flower.name }],
      siteName: dict.result.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}

export default async function ResultPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ card?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const query = await searchParams;
  const cardSlug = query?.card || "agrimony";

  return <ResultClient locale={locale} cardSlug={cardSlug} />;
}

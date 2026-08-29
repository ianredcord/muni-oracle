import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getFlowers } from "@/data/flowers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FrequencyBadge from "@/components/FrequencyBadge";
import { isLocale, localeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/metadata";
import {
  getEmotionGroups,
  getGroupForFlower,
  getThemeForFlower,
} from "@/data/flowerEmotions";
import FlowersBrowser, {
  type BrowserFlower,
  type BrowserGroup,
} from "./FlowersBrowser";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return buildPageMetadata({
    locale,
    path: "/flowers",
    title: dict.flowers.metaTitle,
    description: dict.flowers.metaDescription,
  });
}

export default async function FlowersPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ emotion?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const groups = getEmotionGroups(locale);
  const query = await searchParams;

  // 由花精詳情頁的分類標籤連過來時，直接套用該分類
  const initialGroup =
    query?.emotion && groups.some((g) => g.slug === query.emotion)
      ? query.emotion
      : undefined;

  // 在伺服器端組好瀏覽用資料，client 只負責篩選互動
  const browserFlowers: BrowserFlower[] = getFlowers(locale).map((f) => ({
    slug: f.slug,
    name: f.name,
    image: f.image,
    groupSlug: getGroupForFlower(locale, f.slug)?.slug ?? null,
    theme: getThemeForFlower(locale, f.slug) ?? null,
  }));

  const browserGroups: BrowserGroup[] = groups.map((g) => ({
    slug: g.slug,
    title: g.title,
    nameEn: g.nameEn,
    description: g.description,
    examples: g.examples,
    count: g.flowers.length,
  }));

  const rescueCount = browserFlowers.filter((f) => f.groupSlug === null).length;

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      {/* 背景 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-[#F9F7F2]" />
      </div>

      {/* 固定 Header */}
      <Header />

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-6xl pt-20">
        {/* 標題 */}
        <header className="text-center mb-12 mt-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
            {dict.flowers.indexTitle}
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            {dict.flowers.indexSubtitle}
          </p>
        </header>

        <FlowersBrowser
          locale={locale}
          flowers={browserFlowers}
          groups={browserGroups}
          rescueCount={rescueCount}
          initialGroup={initialGroup}
          copy={{
            filterHint: dict.flowers.filterHint,
            filterAll: dict.flowers.filterAll,
            rescueTitle: dict.flowers.rescueTitle,
            rescueDescription: dict.flowers.rescueDescription,
            emptyGroup: dict.flowers.emptyGroup,
          }}
        />

        {/* 底部操作 */}
        <div className="mt-12 text-center">
          <Link
            href={localeHref(locale, "/draw")}
            className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 transition-colors"
          >
            {dict.flowers.ctaDraw}
          </Link>
        </div>
      </main>

      {/* Frequency Resonance™ 技術支持 */}
      <FrequencyBadge variant="light" full />
      <Footer />
    </div>
  );
}

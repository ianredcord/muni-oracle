import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getFlowers } from "@/data/flowers";
import { getTarotCards } from "@/data/tarot";
import { getGuides } from "@/data/guides";
import { isLocale, localeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

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
    path: "/",
    title: dict.homeExtra.metaTitle,
    description: dict.homeExtra.metaDescription,
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const href = (path: string) => localeHref(locale, path);

  // 取前 9 張牌卡作為預覽
  const previewFlowers = getFlowers(locale).slice(0, 9);
  // 取九張大秘儀作為塔羅預覽（辨識度最高）
  const previewTarot = getTarotCards(locale)
    .filter((c) => c.suit === "major")
    .slice(0, 9);
  // 首頁露出六個處境，涵蓋不同情緒分類
  const previewGuides = getGuides(locale).slice(0, 6);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <OrganizationJsonLd locale={locale} />
      {/* 固定 Header */}
      <Header />

      {/* 1. Hero 區塊 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* 背景圖 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#F9F7F2]" />
        </div>

        {/* Hero 內容 */}
        <div className="relative z-10 text-center px-4 py-20 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#4a5548] mb-6 leading-tight whitespace-pre-line">
            {dict.home.hero.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 mb-6 leading-loose whitespace-pre-line tracking-wide">
            {dict.home.hero.subtitle}
          </p>
          {/* A 文字：理性定位錨點 */}
          <p className="text-sm text-stone-500/70 mb-10 tracking-wide whitespace-pre-line">
            {dict.home.hero.positioning}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={href("/draw")}
              className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {dict.home.hero.cta}
            </Link>
            <Link
              href="#what"
              className="text-[#4a5548] hover:text-[#3a4538] underline underline-offset-4 transition-colors"
            >
              {dict.home.hero.secondaryLink}
            </Link>
          </div>
        </div>

        {/* 向下滾動提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* MUNI 形象圖 */}
      <section className="w-full">
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/muni-hero-image.jpg"
            alt={dict.homeExtra.heroImageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* 2. MUNI 是什麼 - 第一段 */}
      <section id="what" className="py-24 px-4 bg-white scroll-mt-16">
        <div className="max-w-[42rem] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-10">
            {dict.home.whatIsMuni.title}
          </h2>
          {/* 主要內文：增加行距 10-15% */}
          <p className="text-stone-600 text-lg leading-[2] whitespace-pre-line mb-10">
            {dict.home.whatIsMuni.body}
          </p>
          {/* 核心句：視覺強化，字色略深、上下留白增加 */}
          <p className="text-stone-700 text-lg leading-[2] whitespace-pre-line font-medium mt-8">
            {dict.home.whatIsMuni.bodyCore}
          </p>
        </div>
      </section>

      {/* 2b. MUNI 是什麼 - 第二段（不同色塊） */}
      <section className="py-24 px-4 bg-[#E8E4DC]">
        <div className="max-w-[42rem] mx-auto text-center">
          {/* 第一句：引入 */}
          <p className="text-stone-600 text-lg leading-[2] whitespace-pre-line mb-10">
            {dict.home.whatIsMuni.bodySecondIntro}
          </p>
          {/* 中間段落 */}
          <p className="text-stone-600 text-lg leading-[2] whitespace-pre-line mb-12">
            {dict.home.whatIsMuni.bodySecondMiddle}
          </p>
          {/* 核心句：獨立段落，視覺強化 */}
          <p className="text-stone-700 text-lg leading-[2] whitespace-pre-line font-medium">
            {dict.home.whatIsMuni.bodySecondCore}
          </p>
        </div>
      </section>

      {/* 3. Step 1-3 方法 */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
              {dict.home.steps.title}
            </h2>
            <p className="text-stone-500">
              {dict.home.steps.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.home.steps.items.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-xs text-[#9A7B4F] font-medium tracking-wider mb-2">
                  {item.step}
                </div>
                <h3 className="font-medium text-[#4a5548] text-lg mb-3">
                  {item.heading}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 花精牌卡預覽 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
              {dict.home.flowerCards.title}
            </h2>
            <p className="text-stone-500">
              {dict.home.flowerCards.subtitle}
            </p>
          </div>

          {/* 牌卡預覽 - 3x3 */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 max-w-md mx-auto">
            {previewFlowers.map((flower) => (
              <Link
                key={flower.id}
                href={href(`/flowers/${flower.slug}`)}
                className="group"
              >
                <div className="relative aspect-[3/5] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <Image
                    src={flower.image}
                    alt={flower.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 30vw, 120px"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={href("/draw")}
              className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 transition-colors"
            >
              {dict.home.flowerCards.cta}
            </Link>
            <Link
              href={href("/flowers")}
              className="inline-block border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548] hover:text-white rounded-full px-8 py-3 transition-all duration-300"
            >
              {dict.home.flowerCards.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* 4-1. 情境指引 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
            {dict.homeExtra.guidesTitle}
          </h2>
          <p className="text-stone-500 leading-relaxed mb-8 whitespace-pre-line">
            {dict.homeExtra.guidesSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {previewGuides.map((g) => (
              <Link
                key={g.slug}
                href={href(`/guide/${g.slug}`)}
                className="text-sm text-[#4a5548] bg-[#F4F1EA] hover:bg-[#9A7B4F] hover:text-white border border-stone-200 hover:border-[#9A7B4F] rounded-full px-5 py-2.5 transition-all"
              >
                {g.title}
              </Link>
            ))}
          </div>
          <Link
            href={href("/guide")}
            className="inline-block border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548] hover:text-white rounded-full px-8 py-3 transition-all duration-300"
          >
            {dict.homeExtra.guidesViewAll}
          </Link>
        </div>
      </section>

      {/* 4-2. 牟尼塔羅牌 */}
      <section className="py-20 px-4 bg-[#F4F1EA]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
              {dict.home.tarotCards.title}
            </h2>
            <p className="text-stone-500 whitespace-pre-line leading-relaxed">
              {dict.home.tarotCards.subtitle}
            </p>
          </div>

          {/* 牌卡預覽 - 3x3 */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 max-w-md mx-auto">
            {previewTarot.map((card) => (
              <Link
                key={card.id}
                href={href(`/tarot-encyclopedia/${card.slug}`)}
                className="group"
              >
                <div className="relative aspect-[1/1.79] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-white/70">
                  <Image
                    src={card.image}
                    alt={card.displayName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 30vw, 120px"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={href("/tarot/draw")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all"
            >
              <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              {dict.home.tarotCards.cta}
            </Link>
            <Link
              href={href("/tarot-encyclopedia")}
              className="inline-block border border-[#9A7B4F] text-[#9A7B4F] hover:bg-[#9A7B4F] hover:text-white rounded-full px-8 py-3 transition-all duration-300"
            >
              {dict.home.tarotCards.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* 5. 牟尼香 */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
                  {dict.home.muniIncense.title}
                </h2>
                <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                  {dict.home.muniIncense.body}
                </p>
              </div>
              <div className="md:w-1/2 h-64 md:h-80 relative">
                <Image
                  src="/muni-incense.jpg"
                  alt={dict.homeExtra.incenseImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 給引導者 */}
      <section className="py-20 px-4 bg-[#4a5548] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            {dict.home.therapist.title}
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed whitespace-pre-line">
            {dict.home.therapist.body}
          </p>
          <Link
            href={href("/draw")}
            className="inline-block bg-white text-[#4a5548] hover:bg-stone-100 rounded-full px-8 py-3 transition-colors"
          >
            {dict.homeExtra.therapistCta}
          </Link>
        </div>
      </section>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

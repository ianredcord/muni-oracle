import type { Metadata } from "next";
import { getFlowerBySlug, getFlowers } from "@/data/flowers";
import { FLOWERS } from "@/data/flowers.generated";
import { parseDeepBody, SECTION_COLORS, cleanUnderlines } from "@/lib/parseDeepBody";
import { LOCALES, isLocale, localeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Step3BodySupport from "@/components/Step3BodySupport";
import { MingyurQuoteSection } from "@/components/MingyurQuote";
import { getMingyurForFlower } from "@/data/mingyur";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  getGroupForFlower,
  getThemeForFlower,
  getRelatedFlowers,
} from "@/data/flowerEmotions";
import { getGuidesForFlower } from "@/data/guides";

// 動態 Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);
  const flower = getFlowerBySlug(locale, slug);
  if (!flower) return { title: dict.flowerDetail.notFoundTitle };

  return buildPageMetadata({
    locale,
    path: `/flowers/${flower.slug}`,
    title: `${flower.name} | ${dict.flowerDetail.metaTitleSuffix}`,
    description: flower.deep.body.slice(0, 160).replace(/\n/g, " "),
    image: `https://munione.co${flower.image}`,
    imageAlt: flower.name,
    type: "article",
  });
}

// 生成靜態路徑：每個語言 × 40 張牌卡
export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    FLOWERS.map((flower) => ({ locale, slug: flower.slug })),
  );
}

// 頁面 Props
interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function FlowerDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  // 找到對應的花精
  const flower = getFlowerBySlug(locale, slug);

  if (!flower) {
    notFound();
  }

  // 切割深度解析段落
  const deepSections = parseDeepBody(flower.deep.body, locale);

  // 配對的明就仁波切箴言
  const mingyur = getMingyurForFlower(locale, flower.slug);

  // 情緒分類與同分類的其他花精
  const emotionGroup = getGroupForFlower(locale, flower.slug);
  const emotionTheme = getThemeForFlower(locale, flower.slug);
  const related = getRelatedFlowers(locale, flower.slug);
  const localeFlowers = getFlowers(locale);
  const relatedCards = related
    .map((r) => localeFlowers.find((f) => f.slug === r.slug))
    .filter((f): f is (typeof localeFlowers)[number] => Boolean(f));

  // 提到這張花精的情境文章
  const guides = getGuidesForFlower(locale, flower.slug);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <ArticleJsonLd
        locale={locale}
        headline={`${flower.name} | ${dict.flowerDetail.metaTitleSuffix}`}
        description={flower.deep.body.slice(0, 300).replace(/\n/g, " ")}
        path={`/flowers/${flower.slug}`}
        image={flower.image}
        section={dict.flowerDetail.jsonLdSection}
        keywords={dict.meta.keywords.concat(flower.name)}
      />
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: dict.flowerDetail.breadcrumbHome, path: "/" },
          { name: dict.flowers.indexTitle, path: "/flowers" },
          { name: flower.name, path: `/flowers/${flower.slug}` },
        ]}
      />

      {/* 固定 Header */}
      <Header />

      {/* 背景 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-4xl pt-24">
        {/* 返回按鈕 */}
        <div className="mb-6">
          <Link
            href={localeHref(locale, "/flowers")}
            className="flex items-center gap-2 text-[#4a5548] hover:text-[#3a4538] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{dict.flowers.detailBack}</span>
          </Link>
        </div>

        {/* 花精資訊區 */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          {/* 牌卡圖片 */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-[280px]">
              <Image
                src={flower.image}
                alt={flower.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 280px, 280px"
              />
            </div>
            
            {/* MUNI 能量支持按鈕 */}
            <div className="mt-4 max-w-[280px] mx-auto">
              <a
                href="https://www.stark.works/categories/muni能量療癒系列"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#4a5548] to-[#6b7a5f] hover:from-[#3d4a3c] hover:to-[#5a6950] text-white rounded-full px-4 py-2.5 text-sm font-medium transition-all shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {dict.flowerDetail.energySupport}
              </a>
            </div>
          </div>

          {/* 基本資訊 */}
          <div className="flex-1 w-full">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-2">
              {flower.name}
            </h1>

            {/* 情緒分類與主題 */}
            {emotionGroup && (
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <Link
                  href={localeHref(locale, `/flowers?emotion=${emotionGroup.slug}`)}
                  className="text-xs text-[#9A7B4F] bg-[#9A7B4F]/10 hover:bg-[#9A7B4F]/20 px-3 py-1 rounded-full transition-colors"
                >
                  {emotionGroup.title}
                </Link>
                {emotionTheme && (
                  <span className="text-xs text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                    {emotionTheme}
                  </span>
                )}
              </div>
            )}


            {/* Step 1-3 快速指引 */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-stone-100">
                <h3 className="text-xs text-stone-400 uppercase tracking-wider mb-2 font-medium">
                  {flower.quick.step1Title}
                </h3>
                <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                  {flower.quick.step1Body}
                </p>
              </div>

              {/* Step 2 - 核心 */}
              <div className="bg-[#9A7B4F]/10 rounded-xl p-5 shadow-sm border border-[#9A7B4F]/20">
                <h3 className="text-xs text-[#9A7B4F] uppercase tracking-wider mb-2 font-medium">
                  {flower.quick.step2Title}
                </h3>
                <p className="text-[#9A7B4F] text-lg font-medium leading-relaxed whitespace-pre-line">
                  {flower.quick.step2Body}
                </p>
              </div>

              {/* Step 3｜回到身體 */}
              <Step3BodySupport
                locale={locale}
                flowerSlug={flower.slug}
                step3Body={cleanUnderlines(flower.quick.step3Body)}
              />
            </div>
          </div>
        </div>

        {/* 深度解析區塊 */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-6">
            {dict.flowerDetail.deepAnalysis}
          </h2>
          
          {/* 深度解析多區塊卡片 */}
          <div className="space-y-4">
            {deepSections.map((section, index) => {
              const colors = SECTION_COLORS[section.key];
              return (
                <div 
                  key={index}
                  className={`${colors.bg} backdrop-blur-sm rounded-xl p-5 shadow-sm border ${colors.border}`}
                >
                  <h3 className="text-sm font-medium text-[#4a5548] mb-3">
                    {section.title}
                  </h3>
                  <div className="whitespace-pre-line text-stone-600 leading-relaxed text-sm">
                    {section.content}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 安住片刻 · 仁波切的話 */}
        {mingyur && (
          <section className="mb-12">
            <MingyurQuoteSection locale={locale} card={mingyur} />
          </section>
        )}

        {/* 覺察方式說明 */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-6">
            {dict.draw.result.howTo}
          </h2>
          <div className="bg-[#4a5548]/5 rounded-xl p-6 shadow-sm border border-[#4a5548]/10">
            <div className="whitespace-pre-line text-stone-600 leading-relaxed">
              {cleanUnderlines(flower.deep.awareness)}
            </div>
          </div>
        </section>

        {/* 引導者專區 */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-6">
            {dict.draw.result.therapistZone}
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-100">
            <div className="whitespace-pre-line text-stone-600 leading-relaxed">
              {cleanUnderlines(flower.deep.therapist)}
            </div>
          </div>
        </section>

        {/* 提到這張花精的情境 */}
        {guides.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-2">
              {dict.flowerDetail.guidesTitle}
            </h2>
            <p className="text-sm text-stone-500 mb-6">
              {dict.flowerDetail.guidesSubtitle}
            </p>
            <ul className="space-y-3">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={localeHref(locale, `/guide/${g.slug}`)}
                    className="block bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-1 leading-snug">
                      {g.title}
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {g.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 同分類的其他花精 */}
        {emotionGroup && relatedCards.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-2">
              {dict.flowerDetail.relatedTitle.replace("{group}", emotionGroup.title)}
            </h2>
            <p className="text-sm text-stone-500 mb-6 leading-relaxed">
              {emotionGroup.description} {dict.flowerDetail.relatedNote}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {relatedCards.map((rc) => {
                const theme = getThemeForFlower(locale, rc.slug);
                return (
                  <Link
                    key={rc.slug}
                    href={localeHref(locale, `/flowers/${rc.slug}`)}
                    className="group"
                  >
                    <div className="h-full bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src={rc.image}
                          alt={rc.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 22vw"
                        />
                      </div>
                      <div className="p-3 text-center">
                        <h3 className="text-sm font-medium text-[#4a5548] truncate">
                          {rc.name}
                        </h3>
                        {theme && (
                          <p className="text-[11px] text-stone-400 mt-1 leading-snug line-clamp-2">
                            {theme}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* 操作按鈕 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={localeHref(locale, "/draw")}
            className="bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 text-center transition-colors"
          >
            {dict.nav.startDraw}
          </Link>
          <Link
            href={localeHref(locale, "/flowers")}
            className="border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548]/5 rounded-full px-8 py-3 text-center transition-colors"
          >
            {dict.flowers.detailBack}
          </Link>
        </div>

        {/* 抽一張牟尼塔羅牌 */}
        <div className="mt-4 flex justify-center">
          <Link
            href={localeHref(locale, "/tarot/draw")}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-[#9A7B4F]/50 bg-white/60 text-[#9A7B4F] hover:bg-[#9A7B4F] hover:text-white rounded-full px-8 py-3 text-base font-medium transition-all shadow-sm hover:shadow-md"
          >
            <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            {dict.flowerDetail.tarotCta}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

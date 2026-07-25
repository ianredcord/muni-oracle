import type { Metadata } from "next";
import { FLOWERS } from "@/data/flowers.generated";
import { parseDeepBody, SECTION_COLORS, cleanUnderlines } from "@/lib/parseDeepBody";
import { ZH } from "@/content/zh";
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

// 動態 Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const flower = FLOWERS.find(f => f.slug === slug);
  if (!flower) return { title: "花精不存在 | MUNI" };
  const desc = flower.deep.body.slice(0, 120).replace(/\n/g, " ");
  return {
    title: `${flower.name} | 牟尼花精百科`,
    description: desc,
  };
}

// 生成靜態路徑
export function generateStaticParams() {
  return FLOWERS.map((flower) => ({
    slug: flower.slug,
  }));
}

// 頁面 Props
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function FlowerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // 找到對應的花精
  const flower = FLOWERS.find(f => f.slug === slug);
  
  if (!flower) {
    notFound();
  }

  // 切割深度解析段落
  const deepSections = parseDeepBody(flower.deep.body);

  // 配對的明就仁波切箴言
  const mingyur = getMingyurForFlower(flower.slug);

  // 情緒分類與同分類的其他花精
  const emotionGroup = getGroupForFlower(flower.slug);
  const emotionTheme = getThemeForFlower(flower.slug);
  const related = getRelatedFlowers(flower.slug);
  const relatedCards = related
    .map((r) => FLOWERS.find((f) => f.slug === r.slug))
    .filter((f): f is (typeof FLOWERS)[number] => Boolean(f));

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <ArticleJsonLd
        headline={`${flower.name} | 牟尼花精百科`}
        description={flower.deep.body.slice(0, 300).replace(/\n/g, " ")}
        path={`/flowers/${flower.slug}`}
        image={flower.image}
        section="花精百科"
        keywords={["巴哈花精", flower.name, "情緒療癒", "MUNI 牟尼"]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "首頁", path: "/" },
          { name: "牟尼花精百科", path: "/flowers" },
          { name: flower.name, path: `/flowers/${flower.slug}` },
        ]}
      />

      {/* 固定 Header */}
      <Header />

      {/* 背景 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-bg.jpg"
          alt="Background"
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
            href="/flowers"
            className="flex items-center gap-2 text-[#4a5548] hover:text-[#3a4538] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{ZH.flowers.detailBack}</span>
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
                MUNI 能量支持
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
                  href={`/flowers?emotion=${emotionGroup.slug}`}
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
                flowerSlug={flower.slug}
                step3Body={cleanUnderlines(flower.quick.step3Body)}
              />
            </div>
          </div>
        </div>

        {/* 深度解析區塊 */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-6">
            深度解析
          </h2>
          
          {/* 深度解析多區塊卡片 */}
          <div className="space-y-4">
            {deepSections.map((section, index) => {
              const colors = SECTION_COLORS[section.title] || { bg: "bg-stone-50/80", border: "border-stone-100" };
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
            <MingyurQuoteSection card={mingyur} />
          </section>
        )}

        {/* 覺察方式說明 */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-6">
            {ZH.draw.result.howTo}
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
            {ZH.draw.result.therapistZone}
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-100">
            <div className="whitespace-pre-line text-stone-600 leading-relaxed">
              {cleanUnderlines(flower.deep.therapist)}
            </div>
          </div>
        </section>

        {/* 同分類的其他花精 */}
        {emotionGroup && relatedCards.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-2">
              同樣屬於「{emotionGroup.title}」的花精
            </h2>
            <p className="text-sm text-stone-500 mb-6 leading-relaxed">
              {emotionGroup.description}
              　若這張不完全貼合你的狀態，可以看看同一類的其他選擇。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {relatedCards.map((rc) => {
                const theme = getThemeForFlower(rc.slug);
                return (
                  <Link
                    key={rc.slug}
                    href={`/flowers/${rc.slug}`}
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
            href="/draw"
            className="bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 text-center transition-colors"
          >
            {ZH.nav.startDraw}
          </Link>
          <Link
            href="/flowers"
            className="border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548]/5 rounded-full px-8 py-3 text-center transition-colors"
          >
            {ZH.flowers.detailBack}
          </Link>
        </div>

        {/* 抽一張牟尼塔羅牌 */}
        <div className="mt-4 flex justify-center">
          <Link
            href="/tarot/draw"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-[#9A7B4F]/50 bg-white/60 text-[#9A7B4F] hover:bg-[#9A7B4F] hover:text-white rounded-full px-8 py-3 text-base font-medium transition-all shadow-sm hover:shadow-md"
          >
            <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            再往內走一步 · 抽一張牟尼塔羅牌
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

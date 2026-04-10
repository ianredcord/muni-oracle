import type { Metadata } from "next";
import { TAROT_CARDS } from "@/data/tarot.generated";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// 頁面 Props
interface PageProps {
  params: Promise<{ slug: string }>;
}

// 動態 Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const card = TAROT_CARDS.find(c => c.slug === slug);
  if (!card) return { title: "塔羅牌不存在 | MUNI" };
  return {
    title: `${card.nameZh} | 牟尼塔羅牌百科`,
    description: card.quickReading ? card.quickReading.slice(0, 120).replace(/\n/g, " ") : `探索 ${card.nameZh} 的原型智慧與療癒指引。`,
  };
}

// 生成靜態路徑
export function generateStaticParams() {
  return TAROT_CARDS.map((card) => ({
    slug: card.slug,
  }));
}

export default async function TarotDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // 找到對應的塔羅牌
  const card = TAROT_CARDS.find((c) => c.slug === slug);

  if (!card) {
    notFound();
  }

  // 找到同花色的前後牌（用於導航）
  const suitCards = TAROT_CARDS.filter((c) => c.suit === card.suit);
  const currentIndex = suitCards.findIndex((c) => c.slug === slug);
  const prevCard = currentIndex > 0 ? suitCards[currentIndex - 1] : null;
  const nextCard = currentIndex < suitCards.length - 1 ? suitCards[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
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
        />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-4xl pt-24">
        {/* 返回按鈕 */}
        <div className="mb-6">
          <Link
            href="/tarot-encyclopedia"
            className="flex items-center gap-2 text-[#4a5548] hover:text-[#3a4538] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>返回牟尼塔羅牌百科</span>
          </Link>
        </div>

        {/* 牌卡資訊區 */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          {/* 牌卡圖片 */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative aspect-[1/1.79] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-[280px]">
              <Image
                src={card.image}
                alt={card.nameZh}
                fill
                className="object-cover"
                priority
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
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-[#9A7B4F] bg-[#9A7B4F]/10 px-3 py-1 rounded-full font-medium">
                {card.suitZh}
              </span>
              {card.number !== undefined && (
                <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">
                  #{card.number}
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-1">
              {card.nameZh}
            </h1>
            <p className="text-stone-400 text-lg mb-6">{card.nameEn}</p>

            {/* 對應花精 */}
            <div className="bg-[#9A7B4F]/10 rounded-xl p-5 shadow-sm border border-[#9A7B4F]/20 mb-4">
              <h3 className="text-xs text-[#9A7B4F] uppercase tracking-wider mb-2 font-medium">
                對應巴赫花精
              </h3>
              <p className="text-[#9A7B4F] text-lg font-medium leading-relaxed">
                {card.flower}
              </p>
            </div>

            {/* 快速解讀 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-stone-100 mb-4">
              <h3 className="text-xs text-stone-400 uppercase tracking-wider mb-2 font-medium">
                快速解讀
              </h3>
              {card.quickReading ? (
                <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                  {card.quickReading}
                </p>
              ) : (
                <p className="text-stone-400 text-sm">解讀內容將在後續更新中加入</p>
              )}
            </div>

            {/* 深度分析 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-stone-100 mb-4">
              <h3 className="text-xs text-stone-400 uppercase tracking-wider mb-2 font-medium">
                深度分析
              </h3>
              {card.deepAnalysis ? (
                <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                  {card.deepAnalysis}
                </p>
              ) : (
                <p className="text-stone-400 text-sm">深度分析將在後續更新中加入</p>
              )}
            </div>

            {/* 療癒建議 */}
            <div className="bg-[#4a5548]/5 rounded-xl p-5 shadow-sm border border-[#4a5548]/10">
              <h3 className="text-xs text-[#4a5548] uppercase tracking-wider mb-2 font-medium">
                療癒建議
              </h3>
              {card.healingSuggestion ? (
                <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                  {card.healingSuggestion}
                </p>
              ) : (
                <p className="text-stone-400 text-sm">療癒建議將在後續更新中加入</p>
              )}
            </div>
          </div>
        </div>

        {/* 前後牌導航 */}
        <div className="flex justify-between items-center border-t border-stone-200 pt-8 mb-8">
          {prevCard ? (
            <Link
              href={`/tarot-encyclopedia/${prevCard.slug}`}
              className="flex items-center gap-2 text-[#4a5548] hover:text-[#3a4538] transition-colors group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-stone-400">上一張</p>
                <p className="text-sm font-medium">{prevCard.nameZh}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextCard ? (
            <Link
              href={`/tarot-encyclopedia/${nextCard.slug}`}
              className="flex items-center gap-2 text-[#4a5548] hover:text-[#3a4538] transition-colors group"
            >
              <div className="text-right">
                <p className="text-xs text-stone-400">下一張</p>
                <p className="text-sm font-medium">{nextCard.nameZh}</p>
              </div>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* 操作按鈕 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tarot/draw"
            className="bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 text-center transition-colors"
          >
            抽一張塔羅牌指引
          </Link>
          <Link
            href="/tarot-encyclopedia"
            className="border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548]/5 rounded-full px-8 py-3 text-center transition-colors"
          >
            返回牟尼塔羅牌百科
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import { TAROT_CARDS } from "@/data/tarot.generated";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnergySupport, SystemMapping } from "@/components/TarotContentSections";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const card = TAROT_CARDS.find(c => c.slug === slug);
  if (!card) return { title: "塔羅牌不存在 | MUNI" };
  return {
    title: `${card.nameZh}（${card.nameEn}）| 牟尼塔羅牌百科`,
    description: card.uprightMessage
      ? card.uprightMessage.slice(0, 120)
      : `探索 ${card.nameZh} 的原型智慧與療癒指引。`,
  };
}

export function generateStaticParams() {
  return TAROT_CARDS.map((card) => ({ slug: card.slug }));
}

export default async function TarotDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const card = TAROT_CARDS.find((c) => c.slug === slug);
  if (!card) notFound();

  const suitCards = TAROT_CARDS.filter((c) => c.suit === card.suit);
  const currentIndex = suitCards.findIndex((c) => c.slug === slug);
  const prevCard = currentIndex > 0 ? suitCards[currentIndex - 1] : null;
  const nextCard = currentIndex < suitCards.length - 1 ? suitCards[currentIndex + 1] : null;

  const keywordList = card.keywords?.split("、") ?? [];

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image src="/images/home-bg.jpg" alt="" fill className="object-cover opacity-10" priority />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-5xl pt-24">
        {/* Back */}
        <div className="mb-6">
          <Link href="/tarot-encyclopedia" className="flex items-center gap-2 text-[#4a5548] hover:text-[#3a4538] transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            返回牟尼塔羅牌百科
          </Link>
        </div>

        {/* ═══ Top: Image + Info ═══ */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
          {/* Image column */}
          <div className="w-full md:w-[280px] flex-shrink-0">
            <div className="relative aspect-[1/1.79] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-[280px]">
              <Image src={card.image} alt={card.nameZh} fill className="object-cover" priority />
            </div>
            <div className="mt-4 max-w-[280px] mx-auto">
              <a
                href="https://www.stark.works/categories/muni能量療癒系列"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#4a5548] to-[#6b7a5f] hover:from-[#3d4a3c] hover:to-[#5a6950] text-white rounded-full px-4 py-2.5 text-sm font-medium transition-all shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                MUNI 能量支持
              </a>
            </div>
          </div>

          {/* Info column */}
          <div className="flex-1 w-full space-y-4">
            {/* Suit + number badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-[#9A7B4F] bg-[#9A7B4F]/10 px-3 py-1 rounded-full font-medium">{card.suitZh}</span>
              {card.number && (
                <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">{card.number}</span>
              )}
              {card.element && (
                <span className="text-xs text-[#006494] bg-[#006494]/10 px-3 py-1 rounded-full">{card.element}</span>
              )}
              {card.planetSign && (
                <span className="text-xs text-[#da7101] bg-[#da7101]/10 px-3 py-1 rounded-full">{card.planetSign}</span>
              )}
              {card.alchemyStage && (
                <span className="text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full">{card.alchemyStage}</span>
              )}
            </div>

            {/* Title */}
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-1">{card.nameZh}</h1>
              <p className="text-stone-400 text-lg">{card.nameEn}</p>
            </div>

            {/* ─── A｜Header 資訊區 ─── */}
            <div className="bg-[#9A7B4F]/10 rounded-xl p-5 shadow-sm border border-[#9A7B4F]/20 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-xs text-[#9A7B4F] font-medium whitespace-nowrap mt-0.5">花精</span>
                <span className="text-[#9A7B4F] font-medium">{card.flower}</span>
              </div>
              {card.jungianArchetype && (
                <div className="flex items-start gap-2">
                  <span className="text-xs text-[#9A7B4F] font-medium whitespace-nowrap mt-0.5">原型</span>
                  <span className="text-stone-600 text-sm">{card.jungianArchetype}</span>
                </div>
              )}
              {card.bachGroup && (
                <div className="flex items-start gap-2">
                  <span className="text-xs text-[#9A7B4F] font-medium whitespace-nowrap mt-0.5">情緒</span>
                  <span className="text-stone-600 text-sm">{card.bachGroup}</span>
                </div>
              )}
            </div>

            {/* ─── B｜快速解讀 ─── */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-stone-100">
              <h3 className="text-xs text-stone-400 uppercase tracking-wider mb-3 font-medium">快速解讀</h3>

              {/* Keywords */}
              {keywordList.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {keywordList.map((k) => (
                    <span key={k} className="text-xs bg-[#4a5548]/8 text-[#4a5548] px-3 py-1 rounded-full">{k}</span>
                  ))}
                </div>
              )}

              {card.uprightMessage && (
                <div className="mb-3">
                  <p className="text-xs text-emerald-600 font-medium mb-1">☀ 正位核心訊息</p>
                  <p className="text-stone-600 leading-relaxed text-sm">{card.uprightMessage}</p>
                </div>
              )}

              {card.reversedReminder && (
                <div className="bg-amber-50/80 rounded-lg p-3 border border-amber-200/40">
                  <p className="text-xs text-amber-700 font-medium mb-1">☽ 逆位提醒</p>
                  <p className="text-stone-600 leading-relaxed text-sm">{card.reversedReminder}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ═══ C｜深度分析 ═══ */}
        {(card.symbolReading || card.jungianAnalysis || card.flowerSpectrum) && (
          <section className="mb-8">
            <h2 className="font-serif text-xl font-bold text-[#4a5548] mb-4">深度分析</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {card.symbolReading && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border-l-4 border-purple-400">
                  <h4 className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2">🔮 塔羅象徵</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{card.symbolReading}</p>
                </div>
              )}
              {card.jungianAnalysis && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border-l-4 border-[#006494]">
                  <h4 className="text-xs font-semibold text-[#006494] uppercase tracking-wider mb-2">🧠 榮格原型</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{card.jungianAnalysis}</p>
                </div>
              )}
              {card.flowerSpectrum && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border-l-4 border-[#9A7B4F]">
                  <h4 className="text-xs font-semibold text-[#9A7B4F] uppercase tracking-wider mb-2">🌸 花精光譜</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{card.flowerSpectrum}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ═══ D｜療癒建議 Step 1→2→3 ═══ */}
        {(card.step1Status || card.step2Allow || card.step3Body) && (
          <section className="mb-8">
            <h2 className="font-serif text-xl font-bold text-[#4a5548] mb-4">療癒建議</h2>
            <div className="space-y-4">
              {/* Step 1 */}
              {card.step1Status && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-stone-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#4a5548]/10 text-[#4a5548] text-xs font-bold flex items-center justify-center">1</span>
                    <h4 className="text-sm font-semibold text-[#4a5548]">辨識 — 你現在可能…</h4>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed pl-8">{card.step1Status}</p>
                </div>
              )}

              {/* Step 2 — 金邊 highlight */}
              {card.step2Allow && (
                <div className="bg-gradient-to-r from-[#9A7B4F]/5 to-[#9A7B4F]/10 rounded-xl p-6 shadow-sm border-2 border-[#9A7B4F]/30">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-[#9A7B4F]/20 text-[#9A7B4F] text-xs font-bold flex items-center justify-center">2</span>
                    <h4 className="text-sm font-semibold text-[#9A7B4F]">允許</h4>
                  </div>
                  <p className="text-center font-serif text-lg md:text-xl text-[#9A7B4F] font-medium leading-relaxed">
                    「{card.step2Allow}」
                  </p>
                </div>
              )}

              {/* Step 3 */}
              {card.step3Body && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-stone-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#4a5548]/10 text-[#4a5548] text-xs font-bold flex items-center justify-center">3</span>
                    <h4 className="text-sm font-semibold text-[#4a5548]">身體覺察 — 留意…</h4>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed pl-8">{card.step3Body}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ═══ E｜MUNI 能量支持（展開） ═══ */}
        <div className="mb-4">
          <EnergySupport
            breathing={card.breathing}
            aromaGuide={card.aromaGuide}
            dailyPractice={card.dailyPractice}
            awarenessNote={card.awarenessNote}
          />
        </div>

        {/* ═══ F｜系統對應（收合） ═══ */}
        <div className="mb-10">
          <SystemMapping
            systemL1={card.systemL1}
            systemL2Echo={card.systemL2Echo}
            systemEmotionGroup={card.systemEmotionGroup}
            systemMeridian={card.systemMeridian}
            systemExtraordinary={card.systemExtraordinary}
            systemAlchemy={card.systemAlchemy}
            systemQiFlow={card.systemQiFlow}
          />
        </div>

        {/* ═══ Navigation ═══ */}
        <div className="flex justify-between items-center border-t border-stone-200 pt-8 mb-8">
          {prevCard ? (
            <Link href={`/tarot-encyclopedia/${prevCard.slug}`} className="flex items-center gap-2 text-[#4a5548] hover:text-[#3a4538] transition-colors group">
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              <div className="text-left">
                <p className="text-xs text-stone-400">上一張</p>
                <p className="text-sm font-medium">{prevCard.nameZh}</p>
              </div>
            </Link>
          ) : <div />}
          {nextCard ? (
            <Link href={`/tarot-encyclopedia/${nextCard.slug}`} className="flex items-center gap-2 text-[#4a5548] hover:text-[#3a4538] transition-colors group">
              <div className="text-right">
                <p className="text-xs text-stone-400">下一張</p>
                <p className="text-sm font-medium">{nextCard.nameZh}</p>
              </div>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          ) : <div />}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tarot/draw" className="bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 text-center transition-colors">
            抽一張塔羅牌指引
          </Link>
          <Link href="/tarot-encyclopedia" className="border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548]/5 rounded-full px-8 py-3 text-center transition-colors">
            返回牟尼塔羅牌百科
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

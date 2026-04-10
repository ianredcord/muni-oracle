"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { TAROT_CARDS, SUIT_NAMES } from "@/data/tarot.generated";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnergySupport, SystemMapping } from "@/components/TarotContentSections";
import Image from "next/image";
import Link from "next/link";

/* ── 共用裝飾分隔線 ── */
function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-10">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#9A7B4F]/30" />
      <svg className="w-4 h-4 text-[#9A7B4F]/40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#9A7B4F]/30" />
    </div>
  );
}

/* ── 區塊標題 ── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#9A7B4F] to-[#9A7B4F]/30" />
      <h2 className="font-serif text-xl font-bold text-[#4a5548]">{children}</h2>
    </div>
  );
}

/* ── 滾動出現動畫 ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};

function TarotResultContent() {
  const searchParams = useSearchParams();
  const cardSlug = searchParams.get("card");

  const card = TAROT_CARDS.find(c => c.slug === cardSlug);

  if (!card) {
    return (
      <div className="min-h-screen bg-[#F9F7F2] flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-500 text-lg mb-4">找不到這張牌卡</p>
          <Link
            href="/tarot/draw"
            className="text-[#9A7B4F] hover:text-[#8A6B3F] underline"
          >
            重新抽牌
          </Link>
        </div>
      </div>
    );
  }

  const keywordList = card.keywords?.split("、") ?? [];

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#F9F7F2]/80 to-[#F9F7F2]" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-5xl pt-24">

        {/* ═══ Top: Image + Info（入場動畫只保留這一區） ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 items-start mb-4"
        >
          {/* Image column */}
          <div className="w-full md:w-[280px] flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-[1/1.79] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-[280px] border-4 border-white/80">
                <Image
                  src={card.image}
                  alt={card.nameZh}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            {/* CTA + 百科連結 */}
            <div className="mt-4 max-w-[280px] mx-auto space-y-2">
              <a
                href="https://www.stark.works/categories/muni能量療癒系列"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#4a5548] to-[#6b7a5f] hover:from-[#3d4a3c] hover:to-[#5a6950] text-white rounded-full px-4 py-2.5 text-sm font-medium transition-all shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                MUNI 能量支持
              </a>
              <Link
                href={`/tarot-encyclopedia/${card.slug}`}
                className="flex items-center justify-center gap-1.5 w-full text-[#9A7B4F] hover:text-[#8A6B3F] text-sm font-medium py-2 transition-colors"
              >
                查看完整百科
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex-1 w-full space-y-4"
          >
            {/* Suit + number badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-[#9A7B4F] bg-[#9A7B4F]/10 px-3 py-1 rounded-full font-medium">
                {SUIT_NAMES[card.suit]}
              </span>
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
          </motion.div>
        </motion.div>

        <Divider />

        {/* ═══ C｜深度分析（whileInView） ═══ */}
        {(card.symbolReading || card.jungianAnalysis || card.flowerSpectrum) && (
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-4"
          >
            <SectionTitle>深度分析</SectionTitle>
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
          </motion.section>
        )}

        <Divider />

        {/* ═══ D｜療癒建議 Step 1→2→3 ═══ */}
        {(card.step1Status || card.step2Allow || card.step3Body) && (
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-4"
          >
            <SectionTitle>療癒建議</SectionTitle>
            <div className="space-y-4">
              {card.step1Status && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-stone-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#4a5548]/10 text-[#4a5548] text-xs font-bold flex items-center justify-center">1</span>
                    <h4 className="text-sm font-semibold text-[#4a5548]">辨識 — 你現在可能…</h4>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed pl-8">{card.step1Status}</p>
                </div>
              )}

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
          </motion.section>
        )}

        <Divider />

        {/* ═══ E｜MUNI 能量支持（展開） ═══ */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-4"
        >
          <EnergySupport
            breathing={card.breathing}
            aromaGuide={card.aromaGuide}
            dailyPractice={card.dailyPractice}
            awarenessNote={card.awarenessNote}
          />
        </motion.div>

        {/* ═══ F｜系統對應（收合） ═══ */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-10"
        >
          <SystemMapping
            systemL1={card.systemL1}
            systemL2Echo={card.systemL2Echo}
            systemEmotionGroup={card.systemEmotionGroup}
            systemMeridian={card.systemMeridian}
            systemExtraordinary={card.systemExtraordinary}
            systemAlchemy={card.systemAlchemy}
            systemQiFlow={card.systemQiFlow}
          />
        </motion.div>

        {/* 底部操作 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4 border-t border-stone-200"
        >
          <Link
            href="/tarot/draw"
            className="inline-flex items-center justify-center gap-2 bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 text-base shadow-md hover:shadow-lg transition-all duration-300 font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            再抽一次
          </Link>
          <Link
            href={`/tarot-encyclopedia/${card.slug}`}
            className="inline-flex items-center justify-center gap-2 bg-white/60 hover:bg-white/80 text-stone-600 hover:text-stone-800 border border-stone-200 rounded-full px-8 py-3 text-base transition-all duration-300 font-medium"
          >
            查看 {card.nameZh} 完整百科
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default function TarotResultClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F9F7F2] flex items-center justify-center">
        <div className="animate-pulse text-stone-400">載入中...</div>
      </div>
    }>
      <TarotResultContent />
    </Suspense>
  );
}

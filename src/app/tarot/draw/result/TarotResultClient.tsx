"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TAROT_CARDS, SUIT_NAMES } from "@/data/tarot.generated";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

function TarotResultContent() {
  const searchParams = useSearchParams();
  const cardSlug = searchParams.get("card");
  const [activeTab, setActiveTab] = useState<"quick" | "deep" | "healing">("quick");

  // 查找牌卡
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

  const tabs = [
    { key: "quick" as const, label: "快速解讀", icon: "⚡" },
    { key: "deep" as const, label: "深度分析", icon: "🔮" },
    { key: "healing" as const, label: "花精療癒", icon: "🌸" },
  ];

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

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 牌卡展示區 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 mb-12"
          >
            {/* 牌卡圖片 */}
            <motion.div
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="w-56 md:w-64 aspect-[1/1.79] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80">
                <Image
                  src={card.image}
                  alt={card.nameZh}
                  width={256}
                  height={458}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* 牌卡基本資訊 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center md:text-left"
            >
              <p className="text-[#9A7B4F] text-sm tracking-[0.2em] mb-2 font-medium">
                {SUIT_NAMES[card.suit]}
                {card.number !== undefined && ` · ${card.number}`}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-2">
                {card.nameZh}
              </h1>
              <p className="text-stone-400 text-lg mb-6">{card.nameEn}</p>

              {/* 花精對應 */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-stone-200 inline-block">
                <p className="text-stone-400 text-xs mb-1">對應巴赫花精</p>
                <p className="text-[#4a5548] font-medium text-lg">
                  {card.flower || "—"}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Tab 切換區 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {/* Tab 按鈕 */}
            <div className="flex justify-center gap-2 mb-8">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-[#4a5548] text-white shadow-md"
                      : "bg-white/60 text-stone-500 hover:bg-white/80 hover:text-stone-700 border border-stone-200"
                  }`}
                >
                  <span className="mr-1.5">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 內容 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-stone-200 min-h-[200px]"
              >
                {activeTab === "quick" && (
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-4">
                      快速解讀
                    </h3>
                    {card.uprightMessage ? (
                      <div className="space-y-3">
                        {card.keywords && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {card.keywords.split("、").map((k) => (
                              <span key={k} className="text-xs bg-[#4a5548]/8 text-[#4a5548] px-3 py-1 rounded-full">{k}</span>
                            ))}
                          </div>
                        )}
                        <div>
                          <p className="text-xs text-emerald-600 font-medium mb-1">☀ 正位核心訊息</p>
                          <p className="text-stone-600 leading-relaxed">{card.uprightMessage}</p>
                        </div>
                        {card.reversedReminder && (
                          <div className="bg-amber-50/80 rounded-lg p-3 border border-amber-200/40">
                            <p className="text-xs text-amber-700 font-medium mb-1">☽ 逆位提醒</p>
                            <p className="text-stone-600 leading-relaxed text-sm">{card.reversedReminder}</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-stone-400 text-base mb-2">解讀內容準備中</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "deep" && (
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-4">
                      深度分析
                    </h3>
                    {card.symbolReading ? (
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-semibold text-purple-600 mb-1">🔮 塔羅象徵</p>
                          <p className="text-stone-600 leading-relaxed">{card.symbolReading}</p>
                        </div>
                        {card.jungianAnalysis && (
                          <div>
                            <p className="text-xs font-semibold text-[#006494] mb-1">🧠 榮格原型</p>
                            <p className="text-stone-600 leading-relaxed">{card.jungianAnalysis}</p>
                          </div>
                        )}
                        {card.flowerSpectrum && (
                          <div>
                            <p className="text-xs font-semibold text-[#9A7B4F] mb-1">🌸 花精光譜</p>
                            <p className="text-stone-600 leading-relaxed">{card.flowerSpectrum}</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-stone-400 text-base mb-2">深度分析準備中</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "healing" && (
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-4">
                      花精療癒建議
                    </h3>
                    {card.step1Status ? (
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-medium text-[#4a5548] mb-1">Step 1｜辨識 — 你現在可能…</p>
                          <p className="text-stone-600 leading-relaxed">{card.step1Status}</p>
                        </div>
                        {card.step2Allow && (
                          <div className="bg-[#9A7B4F]/5 rounded-lg p-4 border border-[#9A7B4F]/20 text-center">
                            <p className="text-xs font-medium text-[#9A7B4F] mb-2">Step 2｜允許</p>
                            <p className="font-serif text-lg text-[#9A7B4F]">「{card.step2Allow}」</p>
                          </div>
                        )}
                        {card.step3Body && (
                          <div>
                            <p className="text-xs font-medium text-[#4a5548] mb-1">Step 3｜身體覺察 — 留意…</p>
                            <p className="text-stone-600 leading-relaxed">{card.step3Body}</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-stone-400 text-base mb-2">療癒建議準備中</p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* 底部操作 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
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
              href="/tarot"
              className="inline-flex items-center justify-center gap-2 bg-white/60 hover:bg-white/80 text-stone-600 hover:text-stone-800 border border-stone-200 rounded-full px-8 py-3 text-base transition-all duration-300 font-medium"
            >
              回到塔羅牌首頁
            </Link>
          </motion.div>
        </div>
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

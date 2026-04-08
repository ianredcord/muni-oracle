"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { TAROT_CARDS, SUIT_NAMES, type TarotSuit } from "@/data/tarot.generated";

export default function TarotClient() {
  // 統計各花色數量
  const suitCounts: Record<TarotSuit, number> = {
    major: TAROT_CARDS.filter(c => c.suit === "major").length,
    wands: TAROT_CARDS.filter(c => c.suit === "wands").length,
    cups: TAROT_CARDS.filter(c => c.suit === "cups").length,
    swords: TAROT_CARDS.filter(c => c.suit === "swords").length,
    pentacles: TAROT_CARDS.filter(c => c.suit === "pentacles").length,
  };

  const suitIcons: Record<TarotSuit, string> = {
    major: "✦",
    wands: "🔥",
    cups: "💧",
    swords: "🌬",
    pentacles: "🌿",
  };

  const suitDescriptions: Record<TarotSuit, string> = {
    major: "靈魂旅程的 22 個原型，從愚者到世界的覺醒之路",
    wands: "代表熱情、創造力與行動力的火元素能量",
    cups: "代表情感、直覺與關係的水元素能量",
    swords: "代表思維、溝通與真理的風元素能量",
    pentacles: "代表物質、健康與豐盛的土元素能量",
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* 背景 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#F9F7F2]/80 to-[#F9F7F2]" />
      </div>

      <main className="relative z-10">
        {/* Hero 區域 */}
        <section className="pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#9A7B4F] text-sm tracking-[0.3em] mb-4 font-medium">
                MUNI ETHEREAL CODEX
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#4a5548] mb-6 leading-tight">
                牟尼塔羅牌
              </h1>
              <p className="text-stone-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
                以巴赫花精智慧為核心，融合塔羅原型意象的療癒指引系統
              </p>
              <p className="text-stone-400 text-base max-w-xl mx-auto leading-relaxed">
                78 張牌卡，每一張都對應一種巴赫花精，
                <br className="hidden sm:block" />
                在塔羅的原型智慧中找到你的療癒方向。
              </p>
            </motion.div>

            {/* CTA 按鈕 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10"
            >
              <Link
                href="/tarot/draw"
                className="inline-flex items-center gap-2 bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                開始抽牌
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 牌卡預覽 - 展示幾張代表牌 */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center items-end gap-3 md:gap-5"
            >
              {[0, 5, 10, 17, 21].map((cardIndex, i) => {
                const card = TAROT_CARDS[cardIndex];
                const rotations = [-12, -6, 0, 6, 12];
                const yOffsets = [20, 8, 0, 8, 20];
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: yOffsets[i] }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                    className="relative"
                    style={{ transform: `rotate(${rotations[i]}deg)` }}
                  >
                    <div className="w-24 md:w-32 lg:w-36 aspect-[1/1.79] rounded-xl overflow-hidden shadow-xl border-2 border-white/50">
                      <Image
                        src={card.image}
                        alt={card.nameZh}
                        width={144}
                        height={258}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-center text-xs text-stone-400 mt-2 font-medium">
                      {card.nameZh}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* 五大花色介紹 */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] text-center mb-12"
            >
              五大牌組
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(Object.keys(SUIT_NAMES) as TarotSuit[]).map((suit, i) => (
                <motion.div
                  key={suit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-stone-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{suitIcons[suit]}</span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#4a5548]">
                        {SUIT_NAMES[suit]}
                      </h3>
                      <p className="text-xs text-stone-400">{suitCounts[suit]} 張</p>
                    </div>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {suitDescriptions[suit]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 花精對應說明 */}
        <section className="py-16 px-4 bg-white/40">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-6">
                塔羅 × 花精
              </h2>
              <p className="text-stone-500 text-base leading-relaxed mb-8">
                每一張牟尼塔羅牌都對應一種巴赫花精。當你抽到一張牌，
                不僅能獲得塔羅原型的智慧指引，更能找到與之共振的花精療癒方案。
                這是一套結合東西方療癒智慧的完整指引系統。
              </p>
              <Link
                href="/tarot/draw"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-8 py-3 text-base shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                立即抽牌體驗
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

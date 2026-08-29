"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getTarotCards, getSuitNames } from "@/data/tarot";
import type { TarotSuit } from "@/data/tarot.generated";
import { localeHref, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function TarotClient({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const cards = getTarotCards(locale);
  const suitNames = getSuitNames(locale);

  // 統計各花色數量
  const suitCounts: Record<TarotSuit, number> = {
    major: cards.filter(c => c.suit === "major").length,
    wands: cards.filter(c => c.suit === "wands").length,
    cups: cards.filter(c => c.suit === "cups").length,
    swords: cards.filter(c => c.suit === "swords").length,
    pentacles: cards.filter(c => c.suit === "pentacles").length,
  };

  const suitIcons: Record<TarotSuit, string> = {
    major: "✦",
    wands: "🔥",
    cups: "💧",
    swords: "🌬",
    pentacles: "🌿",
  };

  const suitDescriptions: Record<TarotSuit, string> = {
    major: dict.tarotLanding.suitMajor,
    wands: dict.tarotLanding.suitWands,
    cups: dict.tarotLanding.suitCups,
    swords: dict.tarotLanding.suitSwords,
    pentacles: dict.tarotLanding.suitPentacles,
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* 背景 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-bg.jpg"
          alt=""
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
                {dict.tarotLanding.eyebrow}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#4a5548] mb-6 leading-tight">
                {dict.tarotLanding.title}
              </h1>
              <p className="text-stone-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
                {dict.tarotLanding.subtitle}
              </p>
              <p className="text-stone-400 text-base max-w-xl mx-auto leading-relaxed whitespace-pre-line">
                {dict.tarotLanding.description}
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
                href={localeHref(locale, "/tarot/draw")}
                className="inline-flex items-center gap-2 bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {dict.tarotLanding.startDraw}
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
                const card = cards[cardIndex];
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
                        alt={card.displayName}
                        width={144}
                        height={258}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-center text-xs text-stone-400 mt-2 font-medium">
                      {card.displayName}
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
              {dict.tarotLanding.suitsTitle}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(Object.keys(suitNames) as TarotSuit[]).map((suit, i) => (
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
                        {suitNames[suit]}
                      </h3>
                      <p className="text-xs text-stone-400">
                        {dict.tarotLanding.cardCount.replace("{n}", String(suitCounts[suit]))}
                      </p>
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
                {dict.tarotLanding.pairingTitle}
              </h2>
              <p className="text-stone-500 text-base leading-relaxed mb-8">
                {dict.tarotLanding.pairingBody}
              </p>
              <Link
                href={localeHref(locale, "/tarot/draw")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-8 py-3 text-base shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                {dict.tarotLanding.pairingCta}
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

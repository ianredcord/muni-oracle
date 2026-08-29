"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useDrawHistory } from "@/hooks/useDrawHistory";
import {
  clearHistory,
  tallyByCard,
  type DeckType,
  type DrawRecord,
} from "@/lib/drawHistory";

type CardMeta = { name: string; image: string; href: string };
export type CardIndex = Record<DeckType, Record<string, CardMeta>>;

const DECK_LABEL: Record<DeckType, string> = {
  flower: "花精",
  tarot: "塔羅",
};

function formatDate(at: number) {
  const d = new Date(at);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function monthKey(at: number) {
  const d = new Date(at);
  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月`;
}

/** 依月份分組（紀錄已是新到舊） */
function groupByMonth(records: DrawRecord[]) {
  const groups: { label: string; items: DrawRecord[] }[] = [];
  for (const r of records) {
    const label = monthKey(r.at);
    const last = groups[groups.length - 1];
    if (last && last.label === label) last.items.push(r);
    else groups.push({ label, items: [r] });
  }
  return groups;
}

export default function JournalClient({ index }: { index: CardIndex }) {
  const history = useDrawHistory();
  const [confirmClear, setConfirmClear] = useState(false);

  const repeated = tallyByCard(history).filter((t) => t.count >= 2);
  const groups = groupByMonth(history);
  const oldest = history.length ? history[history.length - 1].at : null;

  const meta = (deck: DeckType, slug: string): CardMeta =>
    index[deck][slug] ?? { name: slug, image: "", href: "#" };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-[#F9F7F2]" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-3xl pt-24">
        {/* 標題 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-3">
            回望
          </h1>
          <p className="text-stone-500 leading-relaxed">
            你抽過的牌，都在這裡。
            <br className="sm:hidden" />
            有時候，重複出現的那張，就是還沒被聽見的話。
          </p>
        </motion.div>

        {history.length === 0 ? (
          /* 空狀態 */
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-10 text-center shadow-sm border border-stone-100">
            <p className="text-stone-500 leading-loose mb-6">
              還沒有紀錄。
              <br />
              抽一張牌，這裡就會留下今天的樣子。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/draw"
                className="bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 transition-colors"
              >
                抽一張花精牌
              </Link>
              <Link
                href="/tarot/draw"
                className="border-2 border-[#9A7B4F]/50 bg-white/60 text-[#9A7B4F] hover:bg-[#9A7B4F] hover:text-white rounded-full px-8 py-3 transition-all"
              >
                抽一張牟尼塔羅牌
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* 概況 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-sm border border-stone-100 mb-8 text-center">
              <p className="text-stone-600 leading-relaxed">
                你一共抽了{" "}
                <span className="font-serif text-2xl font-bold text-[#9A7B4F] align-middle mx-1">
                  {history.length}
                </span>{" "}
                次
                {oldest && (
                  <span className="text-stone-400 text-sm block mt-1">
                    從 {formatDate(oldest)} 開始
                  </span>
                )}
              </p>
            </div>

            {/* 反覆出現的牌 */}
            {repeated.length > 0 && (
              <section className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#9A7B4F] to-[#9A7B4F]/30" />
                  <h2 className="font-serif text-xl font-bold text-[#4a5548]">
                    反覆出現的牌
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {repeated.map((t) => {
                    const m = meta(t.deck, t.slug);
                    return (
                      <Link
                        key={`${t.deck}:${t.slug}`}
                        href={m.href}
                        className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-stone-100 transition-all hover:-translate-y-1 hover:shadow-lg"
                      >
                        {m.image && (
                          <div className="relative w-14 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={m.image}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] tracking-wider text-[#9A7B4F] bg-[#9A7B4F]/10 px-2 py-0.5 rounded-full">
                            {DECK_LABEL[t.deck]}
                          </span>
                          <p className="font-serif text-base font-bold text-[#4a5548] mt-1.5 leading-snug">
                            {m.name}
                          </p>
                          <p className="text-sm text-stone-500 mt-0.5">
                            抽到 {t.count} 次
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <p className="text-xs text-stone-400 mt-4 leading-relaxed">
                  重複不代表什麼吉凶。它比較像是：有一個主題，還在你身上輪迴。
                </p>
              </section>
            )}

            {/* 時間軸 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#4a5548] to-[#4a5548]/30" />
                <h2 className="font-serif text-xl font-bold text-[#4a5548]">
                  足跡
                </h2>
              </div>

              <div className="space-y-6">
                {groups.map((g) => (
                  <div key={g.label}>
                    <h3 className="text-sm text-stone-400 mb-3">{g.label}</h3>
                    <ul className="space-y-2">
                      {g.items.map((r, i) => {
                        const m = meta(r.deck, r.slug);
                        return (
                          <li key={`${r.at}-${i}`}>
                            <Link
                              href={m.href}
                              className="flex items-center gap-3 bg-white/60 hover:bg-white/90 rounded-xl px-4 py-3 border border-stone-100 transition-colors"
                            >
                              <span className="text-xs text-stone-400 tabular-nums w-[76px] flex-shrink-0">
                                {formatDate(r.at)}
                              </span>
                              <span className="text-[10px] text-[#9A7B4F] bg-[#9A7B4F]/10 px-2 py-0.5 rounded-full flex-shrink-0">
                                {DECK_LABEL[r.deck]}
                              </span>
                              <span className="font-serif text-[#4a5548] truncate">
                                {m.name}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 隱私說明與清除 */}
            <div className="border-t border-stone-200 pt-6 text-center">
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                這些紀錄只存在你自己的瀏覽器裡，不需要帳號，也不會上傳到任何地方。
                <br />
                換裝置或清除瀏覽資料後就會消失。
              </p>
              {confirmClear ? (
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      clearHistory();
                      setConfirmClear(false);
                    }}
                    className="text-sm bg-stone-700 hover:bg-stone-800 text-white rounded-full px-5 py-2 transition-colors"
                  >
                    確定清除
                  </button>
                  <button
                    onClick={() => setConfirmClear(false)}
                    className="text-sm text-stone-500 hover:text-stone-700 px-3 py-2 transition-colors"
                  >
                    取消
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmClear(true)}
                  className="text-sm text-stone-400 hover:text-stone-600 underline underline-offset-4 transition-colors"
                >
                  清除所有紀錄
                </button>
              )}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

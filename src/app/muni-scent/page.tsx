import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "牟尼香｜六味精油 × 40 種花精頻率 | MUNI",
  description:
    "牟尼香融合六種精油與 40 種花精頻率，透過嗅覺直達邊緣系統，是 MUNI 療癒系統的嗅覺入口。",
};

const USE_CASES = [
  {
    title: "當你抽完牌卡",
    desc: "聞一下牟尼香，讓牌卡帶來的覺察更容易被身體接收。",
  },
  {
    title: "當你貼上 Somaniks",
    desc: "在貼上微針之前先聞牟尼香，同時打開嗅覺與觸覺通道。",
  },
  {
    title: "當你只是需要安靜一下",
    desc: "不需要做任何事，只是聞一下，讓自己慢下來。",
  },
];

export default function MuniScentPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] text-stone-700">
      <Header />

      {/* ── 1. Hero ── */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#9A7B4F]/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#9A7B4F] text-sm tracking-[0.3em] uppercase mb-5">
            MUNI SCENT
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#4a5548] mb-6 leading-tight">
            牟尼香
          </h1>
          <p className="text-base md:text-lg text-stone-500 leading-relaxed max-w-xl mx-auto">
            六味精油與 40 種花精頻率的融合。
            <br className="hidden sm:block" />
            不是香氛，而是一個讓你回到內在的嗅覺入口。
          </p>
        </div>
      </section>

      {/* ── 2. What is 牟尼香 ── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[#4a5548] text-center mb-10">
            什麼是牟尼香
          </h2>
          <div className="space-y-6 text-stone-600 leading-relaxed text-base md:text-lg">
            <p>牟尼香是 MUNI 療癒系統的核心之一。</p>
            <p>
              它融合了六種精油配方與 40
              種巴赫花精頻率，透過嗅覺直接抵達大腦邊緣系統——負責情緒、記憶與自律神經調節的區域。
            </p>
            <p>
              你不需要理解它怎麼運作。只需要在需要的時候聞一下，讓身體自己開始回應。
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. How to use ── */}
      <section className="py-20 px-4 bg-white/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[#4a5548] text-center mb-12">
            什麼時候可以用
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {USE_CASES.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100"
              >
                <h3 className="font-serif text-lg text-[#4a5548] mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Three channels ── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[#4a5548] mb-8">
            情緒・嗅覺・觸覺
          </h2>
          <p className="text-stone-600 leading-relaxed text-base md:text-lg">
            MUNI
            相信，真正的療癒不是從外力介入，而是同時打開三個通道——花精平衡情緒，牟尼香啟動嗅覺，Somaniks
            讓身體開始回應。牟尼香是這三者之間的橋樑。
          </p>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="py-20 px-4 bg-white/40">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[#4a5548] mb-10">
            開始使用牟尼香
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/draw"
              className="inline-block px-8 py-3 rounded-full bg-[#4a5548] text-white text-sm font-medium hover:bg-[#3a4538] transition-colors"
            >
              先抽一張牌卡
            </Link>
            <Link
              href="/somaniks"
              className="inline-block px-8 py-3 rounded-full border border-[#9A7B4F] text-[#9A7B4F] text-sm font-medium hover:bg-[#9A7B4F] hover:text-white transition-colors"
            >
              搭配微針使用
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

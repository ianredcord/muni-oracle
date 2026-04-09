import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import FrequencyBadge from "@/components/FrequencyBadge";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import BodySupportSection from "./BodySupportSection";

export const metadata: Metadata = {
  title: "牟尼微針 | 從身體開始，讓改變發生 | MUNI × SOMANIKS",
  description:
    "不知道該怎麼調整自己時，可以先從身體開始。選一個最接近你現在的感覺，貼上 Somaniks，讓身體帶你回來。",
};

const CERTIFICATIONS = [
  {
    icon: "🇯🇵",
    title: "日本醫療器材認證",
    desc: "一般醫療機器製造販賣認證",
  },
  { icon: "🇪🇺", title: "CE 認證", desc: "歐盟醫療器材合規認證" },
  { icon: "🇺🇸", title: "FDA 認證", desc: "美國食品藥物管理局認證" },
  {
    icon: "🔬",
    title: "共同研究開發",
    desc: "東京都健康長壽醫療中心",
  },
  {
    icon: "📺",
    title: "NHK 推薦",
    desc: "「東洋醫學 真正的力量」節目介紹",
  },
  {
    icon: "🏅",
    title: "日本專利技術",
    desc: "特許第 4828166 號",
  },
];

export default function SomaniksPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] text-stone-700">
      <Header />

      {/* ═══════════════════════════════════════════════════════════
          1. HERO — 感覺導向入口
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-100/20 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-stone-400 text-sm tracking-[0.3em] uppercase mb-5">
            MUNI × SOMANIKS
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-light text-[#4a5548] mb-5 leading-tight">
            當你不知道該怎麼調整自己時
            <br />
            可以先從身體開始
          </h1>
          <p className="text-base md:text-lg text-stone-500 leading-relaxed max-w-xl mx-auto">
            選一個最接近你現在的感覺，讓身體帶你回來
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. BODY SUPPORT SECTION — 核心互動區
      ═══════════════════════════════════════════════════════════ */}
      <Suspense fallback={null}>
        <BodySupportSection />
      </Suspense>

      {/* ═══════════════════════════════════════════════════════════
          3. 使用方式 — 三步驟（新增）
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone-400 text-sm tracking-[0.2em] uppercase mb-4">
            How to Start
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-10">
            只需要這樣做
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
            <div className="flex flex-col items-center gap-3">
              <span className="w-14 h-14 rounded-full bg-[#4a5548] text-white text-lg flex items-center justify-center font-serif">
                1
              </span>
              <p className="text-[#4a5548] font-medium">抽一張花精牌卡</p>
              <p className="text-stone-400 text-xs max-w-[140px]">
                讓直覺幫你選擇今天的方向
              </p>
            </div>

            <span className="hidden sm:block text-stone-300 text-2xl">→</span>
            <span className="block sm:hidden text-stone-300 text-xl">↓</span>

            <div className="flex flex-col items-center gap-3">
              <span className="w-14 h-14 rounded-full bg-[#4a5548] text-white text-lg flex items-center justify-center font-serif">
                2
              </span>
              <p className="text-[#4a5548] font-medium">聞一下牟尼香</p>
              <p className="text-stone-400 text-xs max-w-[140px]">
                讓嗅覺先打開身體的準備
              </p>
            </div>

            <span className="hidden sm:block text-stone-300 text-2xl">→</span>
            <span className="block sm:hidden text-stone-300 text-xl">↓</span>

            <div className="flex flex-col items-center gap-3">
              <span className="w-14 h-14 rounded-full bg-[#4a5548] text-white text-lg flex items-center justify-center font-serif">
                3
              </span>
              <p className="text-[#4a5548] font-medium">貼上 Somaniks</p>
              <p className="text-stone-400 text-xs max-w-[140px]">
                讓身體從這個位置開始改變
              </p>
            </div>
          </div>

          <p className="text-stone-400 text-sm leading-relaxed max-w-md mx-auto">
            不需要一次做好全部，只要讓身體先開始一點點改變就好。
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. SOMANIKS 介紹 — 感覺導向
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-4">
              What is Somaniks
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-4">
              它不是強烈刺激身體
              <br />
              而是輕輕地提醒身體可以開始調整
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="text-stone-500 leading-relaxed">
                Somaniks 來自日本，是一種不刺入皮膚的微錐貼片。
                貼在身上的時候，你幾乎感覺不到什麼——
                但身體會開始自己做出反應。
              </p>
              <p className="text-stone-500 leading-relaxed">
                它透過非常細微的接觸，啟動皮膚底下的
                <span className="text-[#4a5548] font-medium">自然反射</span>
                ，讓血液循環改善、肌肉慢慢放鬆、
                緊繃的地方開始鬆開。
              </p>
              <p className="text-stone-500 leading-relaxed">
                沒有藥物、沒有疼痛、不損傷皮膚。
                <br />
                你只需要選對位置，貼上去，然後讓身體做它本來就會做的事。
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
                <img
                  src="/images/products/dvsAGCGFoZGMTdyy.jpeg"
                  alt="SOMANIKS 微錐貼片"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
                <p className="text-stone-400 text-xs tracking-wider uppercase mb-1">
                  日本製造
                </p>
                <p className="text-[#4a5548] text-base font-serif">
                  57+ 年精密技術
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. 為什麼有效 — 簡化版
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-4">
              Why it Works
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-4">
              為什麼身體會開始改變
            </h2>
            <p className="text-stone-400 text-sm max-w-lg mx-auto">
              你不需要完全理解原理，也可以讓身體開始感受到不同。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-stone-100 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-stone-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#4a5548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[#4a5548] font-medium mb-2">
                身體比頭腦更快開始改變
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                你不需要先「想通」才能好起來。
                皮膚接收到微小的刺激，身體就會自己啟動修復。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-stone-100 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-stone-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#4a5548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-[#4a5548] font-medium mb-2">
                不需要完全理解也可以開始
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                就像你不需要知道花怎麼開，
                只要把種子放進土裡。身體的修復也是一樣。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-stone-100 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-stone-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#4a5548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <h3 className="text-[#4a5548] font-medium mb-2">
                小小的刺激，啟動自我調節
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                微錐不是在治療你，而是在提醒你的身體：
                「嘿，你可以開始調整了。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. MUNI 哲學 — 簡化
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/50 to-transparent" />
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-stone-200 shadow-sm">
            <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-4 text-center">
              MUNI Philosophy
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-[#4a5548] text-center mb-6 leading-relaxed">
              花精平衡情緒，牟尼香打開嗅覺，
              <br className="hidden sm:block" />
              Somaniks 讓身體開始回應
            </h3>
            <p className="text-stone-500 leading-relaxed text-center max-w-2xl mx-auto">
              MUNI 的療癒系統不是讓外力來修復你，而是透過花精、精油和微錐，
              同時打開情緒、嗅覺與觸覺三個通道——讓你的身體自己找到回來的路。
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          7. 認證 — 簡潔信任區
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-stone-400 text-xs tracking-[0.2em] uppercase mb-8">
            Certifications & Trust
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-xl p-3 border border-stone-100 text-center shadow-sm"
              >
                <span className="text-2xl mb-1.5 block">{cert.icon}</span>
                <p className="text-stone-500 text-[10px] leading-tight">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-stone-400 text-xs">
            日本全國多家醫療機構導入使用 · 日本製造（靜岡縣富士市）
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          8. CTA — 開始你的第一步
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/60 to-[#F9F7F2]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-4">
            開始你的第一步
          </h2>
          <p className="text-stone-500 mb-8 leading-relaxed max-w-lg mx-auto">
            不需要想太多。選一個位置，貼上去，讓身體帶你回來。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#body-support"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#4a5548] text-white font-medium hover:bg-[#3a4538] transition-all shadow-sm"
            >
              重新選一個位置
            </a>
            <Link
              href="/draw"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548] hover:text-white transition-all"
            >
              先抽一張牌卡
            </Link>
          </div>
        </div>
      </section>

      <FrequencyBadge variant="light" full />
      <Footer />
    </main>
  );
}

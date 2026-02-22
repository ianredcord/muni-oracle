import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import FrequencyBadge from "@/components/FrequencyBadge";
import AcupunctureClient from "./AcupunctureClient";
import AboutTungsClient from "./AboutTungsClient";

export const metadata: Metadata = {
  title: "董氏心氣神針 | MUNI 療癒生態系統",
  description:
    "董氏奇穴心氣神針法完整介紹，涵蓋董景昌先生簡介、傳承脈絡、全息心法原理，以及一一到十十部位共 176 個穴位圖解。搭配 MUNI 牟尼香與日本針灸貼，在家即可進行穴位保健。",
};

export default function AcupuncturePage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 relative overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#4a5548]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#9A7B4F]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Link
            href="/systems"
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-[#4a5548] transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回療癒系統總覽
          </Link>
          <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
            TUNG&apos;S ACUPUNCTURE · 心氣神針
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#4a5548] mb-6 leading-tight">
            董氏心氣神針
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            傳承自董景昌先生的董氏奇穴針法，歷經三代真傳，
            <br className="hidden sm:inline" />
            以全息心法為核心，開創跨次元的療癒體系。
          </p>
          <p className="text-stone-400 text-sm max-w-xl mx-auto">
            搭配 MUNI 牟尼香塗抹穴位，再貼上 Somaniks 日本針灸貼，
            讓穴位保健融入你的日常生活。
          </p>

          {/* 頁面導航 */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <a href="#about" className="px-5 py-2 rounded-full bg-white border border-stone-200 text-sm text-stone-600 hover:border-[#4a5548] hover:text-[#4a5548] transition-all shadow-sm">
              關於董氏奇穴
            </a>
            <a href="#lineage" className="px-5 py-2 rounded-full bg-white border border-stone-200 text-sm text-stone-600 hover:border-[#4a5548] hover:text-[#4a5548] transition-all shadow-sm">
              傳承脈絡
            </a>
            <a href="#holographic" className="px-5 py-2 rounded-full bg-white border border-stone-200 text-sm text-stone-600 hover:border-[#4a5548] hover:text-[#4a5548] transition-all shadow-sm">
              全息心法
            </a>
            <a href="#acupoints" className="px-5 py-2 rounded-full bg-white border border-stone-200 text-sm text-stone-600 hover:border-[#4a5548] hover:text-[#4a5548] transition-all shadow-sm">
              穴位詳解
            </a>
          </div>
        </div>
      </section>

      {/* 關於董氏奇穴 - Client Component for tabs */}
      <AboutTungsClient />

      {/* 穴位詳解 */}
      <section id="acupoints" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-3">ACUPOINT ATLAS</p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#4a5548] mb-4">
            穴位詳解
          </h2>
          <p className="text-stone-500 leading-relaxed max-w-xl mx-auto">
            十大部位，176 個穴位，完整圖解與詳細說明。
            <br />
            點擊穴位卡片查看詳細資訊與 MUNI 搭配建議。
          </p>
        </div>
        <Suspense fallback={<div className="text-center py-8 text-stone-400">載入穴位資料中...</div>}>
          <AcupunctureClient />
        </Suspense>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-6">
            想知道哪個穴位適合你？
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            告訴 MUNI 療癒顧問你的身體狀況，
            <br className="hidden sm:inline" />
            AI 會為你推薦最適合的穴位搭配精油與針灸貼方案。
          </p>
          <a
            href="https://ai.munione.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-all shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            問問 MUNI 療癒顧問
          </a>
        </div>
      </section>

      {/* Frequency Resonance™ 技術支持 */}
      <FrequencyBadge variant="light" full />

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#4a5548] text-white/70">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-lg text-white/90 mb-2">MUNI 牟尼</p>
          <p className="text-sm">在寂靜中，承接你的答案。</p>
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">首頁</Link>
            <Link href="/flowers" className="hover:text-white transition-colors">花精百科</Link>
            <Link href="/systems" className="hover:text-white transition-colors">療癒系統</Link>
            <a href="https://ai.munione.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">療癒顧問</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

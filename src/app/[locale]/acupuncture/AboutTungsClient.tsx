"use client";

import { useState } from "react";
import Image from "next/image";
import { ACUPUNCTURE_COPY } from "@/content/pages/acupuncture";
import type { Locale } from "@/i18n/config";

/* ─── Tab 定義 ─── */
type TabKey = "intro" | "lineage" | "holographic" | "cheng";

export default function AboutTungsClient({ locale }: { locale: Locale }) {
  const [activeTab, setActiveTab] = useState<TabKey>("intro");
  const copy = ACUPUNCTURE_COPY[locale];
  const lineageData = copy.lineage;

  const tabs: { key: TabKey; label: string; anchor: string }[] = [
    { key: "intro", label: copy.tabIntro, anchor: "about" },
    { key: "lineage", label: copy.tabLineage, anchor: "lineage" },
    { key: "holographic", label: copy.tabHolographic, anchor: "holographic" },
    { key: "cheng", label: copy.tabCheng, anchor: "cheng" },
  ];

  return (
    <>
      {/* ─── 關於董氏奇穴 ─── */}
      <section id="about" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-3">{copy.aboutEyebrow}</p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#4a5548] mb-4">
              {copy.aboutTitle}
            </h2>
            <p className="text-stone-500 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {copy.aboutLead}
            </p>
          </div>

          {/* Tab 切換 */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? "bg-[#4a5548] text-white shadow-md"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-[#4a5548] hover:text-[#4a5548]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 內容 */}
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
            {/* ─── 董氏奇穴簡介 ─── */}
            {activeTab === "intro" && (
              <div className="p-6 md:p-10">
                {/* 董景昌先生照片與簡介 */}
                <div className="flex flex-col md:flex-row gap-8 mb-10">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 shadow-md">
                      <Image
                        src="/images/acupuncture/dong-gong.jpg"
                        alt={copy.dongCaption}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <p className="text-center text-sm text-stone-500 mt-3 font-serif">
                      {copy.dongCaption}
                    </p>
                  </div>
                  <div className="md:w-2/3 space-y-4 text-stone-600 leading-relaxed">
                    <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-2">
                      {copy.dongHeading}
                    </h3>
                    {copy.dongParagraphs.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                </div>

                {/* 龍諾總統治療照片 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
                  {[1, 2, 3, 4, 5].map((n, idx) => (
                    <div key={idx} className="relative aspect-square rounded-lg overflow-hidden bg-stone-100 border border-stone-100">
                      <Image
                        src={`/images/acupuncture/dong-president-${n}.jpg`}
                        alt={`${copy.presidentImageAlt} ${n}`}
                        fill
                        className="object-cover"
                        sizes="20vw"
                      />
                    </div>
                  ))}
                </div>

                {/* 著作 */}
                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-stone-50 rounded-xl">
                  <div className="w-32 h-40 relative rounded-lg overflow-hidden bg-white shadow-md flex-shrink-0">
                    <Image
                      src="/images/acupuncture/dong-book.jpg"
                      alt={copy.bookTitle}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-serif font-bold text-[#4a5548] mb-2">{copy.bookTitle}</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {copy.bookBody}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ─── 傳承脈絡 ─── */}
            {activeTab === "lineage" && (
              <div id="lineage" className="p-6 md:p-10 scroll-mt-20">
                <div className="text-center mb-10">
                  <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                    {copy.lineageTitle}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed max-w-2xl mx-auto">
                    {copy.lineageLead}
                  </p>
                </div>

                {/* 傳承時間線 */}
                <div className="relative">
                  {/* 垂直線 */}
                  <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4a5548] via-[#9A7B4F] to-[#C4A265] hidden sm:block" />

                  <div className="space-y-12">
                    {lineageData.map((person, idx) => (
                      <div
                        key={idx}
                        className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                          idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                        }`}
                      >
                        {/* 時間線節點 */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#4a5548] rounded-full border-4 border-[#F9F7F2] z-10 hidden sm:block" />

                        {/* 內容卡片 */}
                        <div className={`sm:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "sm:pr-8" : "sm:pl-8"} w-full`}>
                          <div className="bg-stone-50 rounded-xl p-5 border border-stone-100 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                              <div className="w-20 h-24 relative rounded-lg overflow-hidden bg-white shadow-sm flex-shrink-0">
                                <Image
                                  src={person.image}
                                  alt={person.name}
                                  fill
                                  className="object-cover"
                                  sizes="80px"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="inline-block px-2.5 py-0.5 bg-[#4a5548] text-white text-xs rounded-full mb-1.5">
                                  {person.generation}
                                </span>
                                <h4 className="font-serif font-bold text-[#4a5548] text-lg">
                                  {person.name}
                                </h4>
                                {person.years && (
                                  <p className="text-xs text-stone-400 mb-1">{person.years}</p>
                                )}
                              </div>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed mt-3">
                              {person.summary}
                            </p>
                          </div>
                        </div>

                        {/* 佔位 */}
                        <div className="sm:w-[calc(50%-2rem)] hidden sm:block" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 傳承核心精神 */}
                <div className="mt-12 p-6 bg-gradient-to-br from-[#4a5548]/5 to-[#9A7B4F]/5 rounded-xl border border-stone-100">
                  <blockquote className="text-center">
                    <p className="font-serif text-lg md:text-xl text-[#4a5548] leading-relaxed italic">
                      {copy.lineageQuote}
                    </p>
                    <footer className="mt-3 text-sm text-stone-500">
                      {copy.lineageQuoteSource}
                    </footer>
                  </blockquote>
                </div>
              </div>
            )}

            {/* ─── 全息心法 ─── */}
            {activeTab === "holographic" && (
              <div id="holographic" className="p-6 md:p-10 scroll-mt-20">
                <div className="text-center mb-10">
                  <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                    {copy.holographicTitle}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed max-w-2xl mx-auto">
                    {copy.holographicLead}
                  </p>
                </div>

                {/* 全息圖示 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  {copy.holographicFigures.map((fig, idx) => {
                    const item = {
                      src: [
                        "/images/acupuncture/foot-reflexology.jpg",
                        "/images/acupuncture/ear-points.jpg",
                        "/images/acupuncture/palm-hologram.jpg",
                      ][idx],
                      ...fig,
                    };
                    return (
                    <div key={idx} className="bg-stone-50 rounded-xl p-4 border border-stone-100 text-center">
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-white mb-3">
                        <Image
                          src={item.src}
                          alt={item.label}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <h4 className="font-serif font-bold text-[#4a5548] text-sm mb-1">{item.label}</h4>
                      <p className="text-xs text-stone-500">{item.desc}</p>
                    </div>
                    );
                  })}
                </div>

                {/* 全息原理說明 */}
                <div className="space-y-6 text-stone-600 leading-relaxed">
                  <div className="p-5 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                    <h4 className="font-serif font-bold text-[#9A7B4F] mb-2">{copy.holoWhatTitle}</h4>
                    <p className="text-sm">{copy.holoWhatBody}</p>
                  </div>

                  <div className="p-5 bg-stone-50 rounded-xl border border-stone-100">
                    <h4 className="font-serif font-bold text-[#4a5548] mb-2">{copy.holoZhangTitle}</h4>
                    <p className="text-sm">{copy.holoZhangBody}</p>
                  </div>

                  <div className="p-5 bg-stone-50 rounded-xl border border-stone-100">
                    <h4 className="font-serif font-bold text-[#4a5548] mb-2">{copy.holoSecretsTitle}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
                      {copy.holoSecrets.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 border border-stone-100">
                          <div className="w-8 h-8 bg-[#4a5548] text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">
                            {idx + 1}
                          </div>
                          <h5 className="font-bold text-[#4a5548] text-sm mb-1">{item.title}</h5>
                          <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 bg-gradient-to-br from-[#4a5548]/5 to-[#9A7B4F]/5 rounded-xl border border-stone-100">
                    <h4 className="font-serif font-bold text-[#4a5548] mb-2">{copy.holoCrossTitle}</h4>
                    <p className="text-sm">{copy.holoCrossBody1}</p>
                    <p className="text-sm mt-3">
                      {copy.holoCrossBody2Prefix}
                      <strong>{copy.holoCrossBody2Strong}</strong>
                      {copy.holoCrossBody2Suffix}
                    </p>
                  </div>
                </div>

                {/* 引用 */}
                <div className="mt-8 p-6 bg-white rounded-xl border border-stone-200 text-center">
                  <blockquote className="font-serif text-lg text-[#4a5548] italic leading-relaxed">
                    {copy.holoQuote}
                  </blockquote>
                  <footer className="mt-2 text-sm text-stone-500">{copy.holoQuoteSource}</footer>
                </div>
              </div>
            )}

            {/* ─── 三代傳人程守羿 ─── */}
            {activeTab === "cheng" && (
              <div id="cheng" className="p-6 md:p-10 scroll-mt-20">
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="md:w-1/3 flex-shrink-0 space-y-4">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 shadow-md">
                      <Image
                        src="/images/acupuncture/cheng-apprentice.jpg"
                        alt={copy.chengCaption}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <p className="text-center text-xs text-stone-400">{copy.chengCaption}</p>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-1">
                      {copy.chengName}
                    </h3>
                    <p className="text-sm text-[#9A7B4F] mb-4">{copy.chengRole}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {copy.chengTitles.map((title, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full"
                        >
                          {title}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
                      {copy.chengParagraphs.map((t) => (
                        <p key={t}>{t}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 師徒合影 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white">
                      <Image
                        src="/images/acupuncture/li-cheng-shenzhen.jpg"
                        alt={copy.chengPhoto1}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <p className="text-center text-xs text-stone-500 mt-2">{copy.chengPhoto1}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-3 border border-stone-100">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white">
                      <Image
                        src="/images/acupuncture/li-calligraphy.jpg"
                        alt={copy.chengPhoto2}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <p className="text-center text-xs text-stone-500 mt-2">{copy.chengPhoto2}</p>
                  </div>
                </div>

                {/* 作者序文節錄 */}
                <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                  <h4 className="font-serif font-bold text-[#9A7B4F] mb-3">
                    {copy.chengPrefaceTitle}
                  </h4>
                  <div className="space-y-3 text-stone-600 text-sm leading-relaxed italic">
                    {copy.chengPreface.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                </div>

                {/* 核心理念 */}
                <div className="mt-8 p-6 bg-white rounded-xl border border-stone-200 text-center">
                  <blockquote className="font-serif text-lg text-[#4a5548] italic leading-relaxed">
                    {copy.chengQuote}
                  </blockquote>
                  <footer className="mt-2 text-sm text-stone-500">{copy.chengQuoteSource}</footer>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

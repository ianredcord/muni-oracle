"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { bodySupportPoints, type BodySupportPoint } from "@/data/body-support";
import { FLOWERS } from "@/data/flowers.generated";

export default function BodySupportSection() {
  const [selected, setSelected] = useState<BodySupportPoint | null>(null);

  const pairedFlowersFor = (point: BodySupportPoint) =>
    (point.pairings || [])
      .map((slug) => FLOWERS.find((f) => f.slug === slug))
      .filter(Boolean);

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* 標題 */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
            BODY SUPPORT POINTS
          </p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#4a5548] mb-4">
            身體支持點
          </h2>
          <p className="text-stone-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-3">
            當你不知道該怎麼調整自己時，可以先從身體開始
          </p>
          <p className="text-stone-400 text-sm max-w-xl mx-auto leading-relaxed">
            先抽花精牌卡、聞牟尼香，再貼上 Somaniks，
            <br className="hidden sm:block" />
            讓身體慢慢回到可被承接的狀態。
          </p>
        </div>

        {/* 支持 vs 釋放 圖例 */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-emerald-700 text-sm font-medium">支持・穩定</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-200">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-amber-700 text-sm font-medium">釋放・鬆開</span>
          </div>
        </div>

        {/* 卡片網格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {bodySupportPoints.map((point) => {
            const isSupport = point.type === "support";
            return (
              <button
                key={point.slug}
                onClick={() => setSelected(point)}
                className={`group text-left rounded-2xl border overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 ${
                  isSupport ? "border-emerald-100 hover:border-emerald-300" : "border-amber-100 hover:border-amber-300"
                }`}
              >
                {/* 圖片 */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={point.image}
                    alt={`${point.acupointName} — ${point.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                        isSupport
                          ? "bg-emerald-50/90 text-emerald-700 border border-emerald-200"
                          : "bg-amber-50/90 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {point.shortLabel}
                    </span>
                  </div>
                </div>

                {/* 文字 */}
                <div className="p-3.5">
                  <h3 className="font-serif text-sm md:text-base font-bold text-[#4a5548] mb-1 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-stone-400 text-xs leading-relaxed mb-3">
                    {point.supportText[0]}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-medium ${
                      isSupport ? "text-emerald-600" : "text-amber-600"
                    }`}
                  >
                    查看貼法
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 使用建議 */}
        <div className="mt-14 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-stone-200 text-center">
          <p className="text-[#9A7B4F] text-sm tracking-wider mb-3">SUGGESTED RITUAL</p>
          <p className="font-serif text-lg text-[#4a5548] font-bold mb-5">
            建議使用順序
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-stone-600 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#4a5548] text-white text-xs flex items-center justify-center font-medium">1</span>
              抽花精牌卡
            </span>
            <span className="hidden sm:block text-stone-300">→</span>
            <span className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#4a5548] text-white text-xs flex items-center justify-center font-medium">2</span>
              聞牟尼香
            </span>
            <span className="hidden sm:block text-stone-300">→</span>
            <span className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#4a5548] text-white text-xs flex items-center justify-center font-medium">3</span>
              貼上 Somaniks
            </span>
          </div>
        </div>
      </div>

      {/* ─── Modal ─── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 關閉按鈕 */}
            <button
              onClick={() => setSelected(null)}
              aria-label="關閉"
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-stone-100 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 大圖 */}
            <div className="relative aspect-[3/4] rounded-t-2xl overflow-hidden">
              <Image
                src={selected.image}
                alt={`${selected.acupointName} — ${selected.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* 內容 */}
            <div className="px-6 pb-6 -mt-8 relative">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    selected.type === "support"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-amber-50 text-amber-700 border border-amber-200"
                  }`}
                >
                  {selected.shortLabel}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-1">
                {selected.title}
              </h3>
              <p className={`text-sm font-medium mb-1 ${
                selected.type === "support" ? "text-emerald-600" : "text-amber-600"
              }`}>
                {selected.acupointName}
              </p>
              <p className="text-stone-400 text-sm mb-5">
                {selected.locationText} — {selected.helperText}
              </p>

              {/* 支持文字 */}
              <ul className="space-y-2 mb-5">
                {selected.supportText.map((text, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-600 text-sm">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      selected.type === "support" ? "bg-emerald-400" : "bg-amber-400"
                    }`} />
                    {text}
                  </li>
                ))}
              </ul>

              {/* 使用方式 */}
              <div className="bg-stone-50 rounded-xl p-4 mb-5">
                <p className="text-xs text-stone-400 mb-1.5">使用方式</p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {selected.usageText}
                </p>
              </div>

              {/* 搭配建議 */}
              <div className="bg-stone-50 rounded-xl p-4 mb-5">
                <p className="text-xs text-stone-400 mb-1.5">搭配建議</p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {selected.pairingText}
                </p>
              </div>

              {/* 花精配對 */}
              {(() => {
                const flowers = pairedFlowersFor(selected);
                if (flowers.length === 0) return null;
                return (
                  <div>
                    <p className="text-xs text-stone-400 mb-2">搭配花精</p>
                    <div className="flex flex-wrap gap-2">
                      {flowers.map((flower) => (
                        <Link
                          key={flower!.slug}
                          href={`/flowers/${flower!.slug}`}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                            selected.type === "support"
                              ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                              : "bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                          }`}
                        >
                          {flower!.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import Link from "next/link";

interface FrequencyBadgeProps {
  /** 使用深色版本（適用於深色背景頁面） */
  variant?: "light" | "dark";
  /** 是否顯示完整描述區塊（否則只顯示小標章） */
  full?: boolean;
}

/**
 * MUNI Frequency Resonance™ 技術支持標章
 * 可放置在所有產品和療癒系統頁面，連結至 /frequency
 */
export default function FrequencyBadge({
  variant = "light",
  full = false,
}: FrequencyBadgeProps) {
  const isDark = variant === "dark";

  if (!full) {
    // ─── 小型標章：一行式，適合放在頁面頂部或產品卡片中 ───
    return (
      <Link
        href="/frequency"
        className={`
          group inline-flex items-center gap-2.5 px-4 py-2 rounded-full
          border transition-all duration-300 hover:scale-[1.02]
          ${
            isDark
              ? "bg-white/[0.04] border-amber-500/20 hover:border-amber-400/40 hover:bg-white/[0.08]"
              : "bg-stone-50 border-amber-600/20 hover:border-amber-500/40 hover:bg-amber-50/50"
          }
        `}
      >
        {/* 波紋圖標 */}
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span
            className={`absolute h-5 w-5 rounded-full animate-ping opacity-20 ${
              isDark ? "bg-amber-400" : "bg-amber-500"
            }`}
          />
          <span
            className={`relative h-2.5 w-2.5 rounded-full ${
              isDark ? "bg-amber-400" : "bg-amber-500"
            }`}
          />
        </span>
        <span
          className={`text-xs tracking-wider font-medium ${
            isDark ? "text-amber-300/80" : "text-amber-700/80"
          }`}
        >
          MUNI Frequency Resonance™
        </span>
        <span
          className={`text-xs ${
            isDark ? "text-stone-500" : "text-stone-400"
          }`}
        >
          頻率 × 祝福
        </span>
        <svg
          className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ${
            isDark ? "text-amber-400/60" : "text-amber-600/60"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    );
  }

  // ─── 完整版：帶描述的區塊，適合放在頁面底部 CTA 區域 ───
  return (
    <section
      className={`py-16 ${isDark ? "bg-white/[0.02]" : "bg-stone-50/80"}`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* 波紋動畫 */}
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <span
              className={`absolute w-16 h-16 rounded-full border animate-[ping_3s_ease-out_infinite] ${
                isDark ? "border-amber-500/15" : "border-amber-500/20"
              }`}
            />
            <span
              className={`absolute w-10 h-10 rounded-full border animate-[ping_3s_ease-out_0.5s_infinite] ${
                isDark ? "border-amber-500/20" : "border-amber-500/25"
              }`}
            />
            <span
              className={`relative w-4 h-4 rounded-full ${
                isDark ? "bg-amber-400" : "bg-amber-500"
              }`}
            />
          </div>
        </div>

        {/* 標題 */}
        <p
          className={`text-xs tracking-[0.25em] uppercase mb-3 ${
            isDark ? "text-amber-400/60" : "text-amber-600/60"
          }`}
        >
          Powered by
        </p>
        <h3
          className={`font-serif text-2xl md:text-3xl mb-4 ${
            isDark ? "text-white" : "text-stone-800"
          }`}
        >
          MUNI Frequency Resonance™
        </h3>
        <p
          className={`text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8 ${
            isDark ? "text-stone-400" : "text-stone-500"
          }`}
        >
          所有 MUNI 產品皆透過獨家頻率共振技術進行調頻——帶著「讓萬物回到和諧」的祝福意願，
          將頻率注入每一個分子。頻率是方法，祝福是心意，兩者合一，才是 MUNI 的完整表達。
        </p>

        {/* CTA 按鈕 */}
        <Link
          href="/frequency"
          className={`
            group inline-flex items-center gap-3 px-8 py-3.5 rounded-full
            font-medium text-sm tracking-wide transition-all duration-300
            hover:scale-[1.03] hover:shadow-lg
            ${
              isDark
                ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:shadow-amber-500/20"
                : "bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:shadow-amber-500/30"
            }
          `}
        >
          了解獨家技術
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

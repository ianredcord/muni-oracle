"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  bodySupportPointMap,
  flowerToPointsMap,
} from "@/data/body-support";
import { bodySupportContextMap } from "@/data/body-support-context";

interface Props {
  flowerSlug: string;
  /** 原始 Step 3 身體覺察文字（已清除底線） */
  step3Body: string;
}

/**
 * Step 3｜回到身體
 * 整合原始身體覺察 + 身體支持點 + 深度解說 accordion
 * 可用於 /draw/result 和 /flowers/[slug]
 */
export default function Step3BodySupport({ flowerSlug, step3Body }: Props) {
  const [showDeepExplain, setShowDeepExplain] = useState(false);

  const link = flowerToPointsMap[flowerSlug];
  const point = link ? bodySupportPointMap[link.primary[0]] : null;
  const ctx = bodySupportContextMap[flowerSlug];
  const secondarySlug = link?.secondary?.[0];
  const secondaryPoint = secondarySlug
    ? bodySupportPointMap[secondarySlug]
    : null;

  const isSupport = point?.type === "support";
  const tagClass = isSupport
    ? "bg-orange-50 text-orange-700 border-orange-200"
    : "bg-sky-50 text-sky-700 border-sky-200";
  const dotClass = isSupport ? "bg-orange-400" : "bg-sky-400";

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-stone-100">
      <h3 className="text-xs text-stone-400 uppercase tracking-wider mb-2 font-medium">
        Step 3｜回到身體
      </h3>
      <p className="text-[#6b7c6b] leading-relaxed whitespace-pre-line mb-0">
        {step3Body}
      </p>

      {/* 身體支持點整合 */}
      {point && (
        <div className="mt-5 pt-5 border-t border-stone-100">
          <p className="text-stone-500 text-sm leading-relaxed mb-4">
            如果你想讓這個狀態更容易被身體承接，可以先從這個位置開始。
          </p>

          {/* 穴位卡片 */}
          <div className="flex gap-4 mb-4">
            <div className="relative w-20 h-28 flex-shrink-0 rounded-xl overflow-hidden">
              <Image
                src={point.image}
                alt={`${point.acupointName} — ${point.title}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <span
                className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-medium border mb-1.5 ${tagClass}`}
              >
                {point.shortLabel}
              </span>
              <p className="text-[#4a5548] text-sm font-bold mb-0.5">
                {point.title}
              </p>
              <p className="text-stone-400 text-xs mb-1">
                {point.acupointName} · {point.locationText}
              </p>
              <p className="text-stone-500 text-xs leading-relaxed">
                {point.supportText[0]}
              </p>
            </div>
          </div>

          {/* 按鈕：看貼法 + 深度解說 */}
          <div className="flex gap-3">
            <Link
              href={`/somaniks?point=${point.slug}`}
              className="px-4 py-2.5 rounded-xl bg-[#4a5548] text-white text-xs font-medium hover:bg-[#3a4538] transition-colors shadow-sm"
            >
              看貼法
            </Link>
            {ctx && (
              <button
                onClick={() => setShowDeepExplain(!showDeepExplain)}
                className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-500 text-xs font-medium hover:bg-stone-50 transition-colors flex items-center gap-1.5"
              >
                深度解說
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${showDeepExplain ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* 深度解說 accordion */}
          {showDeepExplain && ctx && (
            <div className="mt-5 space-y-4 animate-in fade-in duration-300">
              {/* A. 為什麼是這個位置 */}
              <div>
                <p className="text-xs text-stone-400 mb-1.5 font-medium">
                  為什麼是這個位置
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {ctx.whyThisPoint}
                </p>
              </div>

              {/* B. 這個位置幫助什麼 */}
              <div>
                <p className="text-xs text-stone-400 mb-1.5 font-medium">
                  這個位置幫助什麼
                </p>
                <ul className="space-y-1.5">
                  {point.supportText.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-stone-600 text-sm"
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotClass}`}
                      />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* C. 什麼時候適合用 */}
              <div>
                <p className="text-xs text-stone-400 mb-1.5 font-medium">
                  什麼時候適合用
                </p>
                <ul className="space-y-1.5">
                  {ctx.whenToUse.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-stone-500 text-sm"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-stone-300" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* D. 進階使用 */}
              {secondaryPoint && (
                <div className="bg-stone-50 rounded-lg p-3.5">
                  <p className="text-stone-500 text-xs leading-relaxed">
                    若你想更進一步，也可以搭配第二個位置：
                    <Link
                      href={`/somaniks?point=${secondaryPoint.slug}`}
                      className="text-[#4a5548] font-medium underline underline-offset-2 hover:text-[#3a4538]"
                    >
                      {secondaryPoint.acupointName}（{secondaryPoint.locationText}）
                    </Link>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

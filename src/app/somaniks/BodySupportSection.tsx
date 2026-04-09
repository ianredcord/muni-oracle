"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  bodySupportPoints,
  bodySupportPointMap,
  type BodySupportPoint,
} from "@/data/body-support";
import { FLOWERS } from "@/data/flowers.generated";

/* ── 花精中文對照 ── */
const FLOWER_ZH_MAP: Record<string, string> = {
  mimulus: "已知恐懼",
  aspen: "不明原因不安",
  "cherry-plum": "失控恐懼",
  "red-chestnut": "過度為他人擔憂",
  cerato: "不相信自己",
  scleranthus: "猶豫搖擺",
  gentian: "容易氣餒",
  gorse: "深層絕望",
  hornbeam: "心理疲倦",
  "wild-oat": "人生方向迷惘",
  clematis: "活在幻想",
  "wild-rose": "缺乏活力",
  olive: "極度疲憊",
  "sweet-chestnut": "靈魂暗夜",
  "white-chestnut": "思緒轉不停",
  heather: "過度圍繞自己",
  impatiens: "急躁",
  "water-violet": "疏離孤立",
  vervain: "過度用力",
  vine: "控制慾",
  beech: "批判",
  mustard: "莫名憂鬱",
  larch: "缺乏自信",
  pine: "自責",
  elm: "責任壓垮",
  "star-of-bethlehem": "創傷震驚",
  willow: "怨恨",
  "crab-apple": "自我嫌惡",
  agrimony: "隱藏痛苦",
  centaury: "無法說不",
  holly: "嫉妒猜疑",
  walnut: "容易受影響",
  oak: "過度硬撐",
  chicory: "過度佔有",
  "rock-water": "過度自我壓抑",
  honeysuckle: "沉溺過去",
  "chestnut-bud": "重複犯錯",
  "rock-rose": "極度驚恐",
};

/* ── 快速選擇 ── */
const quickOptions = [
  { label: "我很緊 / 停不下來", slug: "pc6" },
  { label: "我很虛 / 撐不住", slug: "ki6" },
  { label: "我覺得卡住", slug: "gb41" },
] as const;

export default function BodySupportSection() {
  const [selected, setSelected] = useState<BodySupportPoint | null>(null);
  const searchParams = useSearchParams();

  /* ?point=xxx → 自動打開對應 modal */
  useEffect(() => {
    const pointSlug = searchParams.get("point");
    if (pointSlug && bodySupportPointMap[pointSlug]) {
      setSelected(bodySupportPointMap[pointSlug]);
      /* 捲動到 Body Support 區塊 */
      setTimeout(() => {
        document
          .getElementById("body-support")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [searchParams]);

  const pairedFlowersFor = (point: BodySupportPoint) =>
    (point.pairings || [])
      .map((slug) => FLOWERS.find((f) => f.slug === slug))
      .filter(Boolean);

  /* 顏色系統：support → 橘色系, release → 藍色系 */
  const color = (type: BodySupportPoint["type"]) =>
    type === "support"
      ? {
          bg: "bg-orange-50",
          bgHover: "hover:bg-orange-100",
          border: "border-orange-200",
          borderHover: "hover:border-orange-300",
          dot: "bg-orange-400",
          text: "text-orange-700",
          textLight: "text-orange-600",
          tagBg: "bg-orange-50/90",
          tagBorder: "border border-orange-200",
          chipBg: "bg-orange-50",
          chipHover: "hover:bg-orange-100",
          chipBorder: "border border-orange-200",
        }
      : {
          bg: "bg-sky-50",
          bgHover: "hover:bg-sky-100",
          border: "border-sky-200",
          borderHover: "hover:border-sky-300",
          dot: "bg-sky-400",
          text: "text-sky-700",
          textLight: "text-sky-600",
          tagBg: "bg-sky-50/90",
          tagBorder: "border border-sky-200",
          chipBg: "bg-sky-50",
          chipHover: "hover:bg-sky-100",
          chipBorder: "border border-sky-200",
        };

  return (
    <section id="body-support" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* ═══ 標題 ═══ */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
            BODY SUPPORT POINTS
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
            8 個身體支持點
          </h2>
          <p className="text-stone-400 text-sm max-w-xl mx-auto leading-relaxed">
            每個位置對應不同的身體狀態，選一個最接近你的，點進去看貼法。
          </p>
        </div>

        {/* ═══ 1. 不知道怎麼選？ ═══ */}
        <div className="mb-14 bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-stone-200 text-center">
          <h3 className="font-serif text-lg md:text-xl font-bold text-[#4a5548] mb-2">
            不知道要選哪一個？
          </h3>
          <p className="text-stone-400 text-sm mb-6">
            選一個最接近你現在的感覺
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {quickOptions.map((opt) => (
              <button
                key={opt.slug}
                onClick={() => setSelected(bodySupportPointMap[opt.slug])}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-stone-200 bg-white text-[#4a5548] font-medium text-sm hover:border-[#9A7B4F] hover:text-[#9A7B4F] hover:shadow-md transition-all duration-200"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* ═══ 支持 vs 釋放 圖例 ═══ */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-200">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
            <span className="text-orange-700 text-sm font-medium">
              支持・穩定
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-sky-50 rounded-full border border-sky-200">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <span className="text-sky-700 text-sm font-medium">
              釋放・鬆開
            </span>
          </div>
        </div>

        {/* ═══ 卡片網格 ═══ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {bodySupportPoints.map((point) => {
            const c = color(point.type);
            return (
              <button
                key={point.slug}
                onClick={() => setSelected(point)}
                className={`group text-left rounded-2xl border overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 ${c.border} ${c.borderHover}`}
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
                      className={`px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${c.tagBg} ${c.text} ${c.tagBorder}`}
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
                    className={`inline-flex items-center gap-1 text-xs font-medium ${c.textLight}`}
                  >
                    查看貼法
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 使用建議已移至頁面層級的三步驟區塊 */}
      </div>

      {/* ═══ Modal ═══ */}
      {selected && (() => {
        const c = color(selected.type);
        const flowers = pairedFlowersFor(selected);
        return (
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
                <svg
                  className="w-5 h-5 text-stone-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
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
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${c.tagBg} ${c.text} ${c.tagBorder}`}
                  >
                    {selected.shortLabel}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-1">
                  {selected.title}
                </h3>
                <p className={`text-sm font-medium mb-1 ${c.textLight}`}>
                  {selected.acupointName}
                </p>
                <p className="text-stone-400 text-sm mb-5">
                  {selected.locationText} — {selected.helperText}
                </p>

                {/* 支持文字 */}
                <ul className="space-y-2 mb-5">
                  {selected.supportText.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-stone-600 text-sm"
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`}
                      />
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

                {/* 花精配對 — 英文名 + 中文狀態 */}
                {flowers.length > 0 && (
                  <div className="mb-6">
                    <p className="text-xs text-stone-400 mb-2">搭配花精</p>
                    <div className="flex flex-wrap gap-2">
                      {flowers.map((flower) => {
                        const zhLabel =
                          FLOWER_ZH_MAP[flower!.slug] || "";
                        /* 取英文名部分（去掉括號裡的中文別名） */
                        const engName =
                          flower!.name.replace(/（.*）/, "").trim();
                        return (
                          <Link
                            key={flower!.slug}
                            href={`/flowers/${flower!.slug}`}
                            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${c.chipBg} ${c.text} ${c.chipHover} ${c.chipBorder}`}
                          >
                            {engName}
                            {zhLabel && (
                              <span className="opacity-60">（{zhLabel}）</span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ═══ 2. 立即行動區 ═══ */}
                <div className="border-t border-stone-100 pt-6">
                  <p className="text-xs text-stone-400 mb-2">下一步</p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-5">
                    你可以先聞一下牟尼香，再貼上 Somaniks，讓身體慢慢回到比較能被承接的狀態。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setSelected(null)}
                      className="flex-1 px-5 py-3 rounded-xl bg-[#4a5548] text-white text-sm font-medium hover:bg-[#3a4538] transition-colors shadow-sm"
                    >
                      我現在試試看這個位置
                    </button>
                    <Link
                      href="/muni-scent"
                      onClick={() => setSelected(null)}
                      className="flex-1 px-5 py-3 rounded-xl border border-stone-200 text-[#4a5548] text-sm font-medium text-center hover:bg-stone-50 transition-colors"
                    >
                      搭配牟尼香使用
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}

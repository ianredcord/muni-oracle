"use client";

import Image from "next/image";
import Link from "next/link";
import {
  bodySupportPointMap,
  flowerToPointsMap,
  type BodySupportPoint,
} from "@/data/body-support";

interface Props {
  flowerSlug: string;
}

export default function FlowerBodySupport({ flowerSlug }: Props) {
  const link = flowerToPointsMap[flowerSlug];
  if (!link) return null;

  const points = link.primary
    .map((slug) => bodySupportPointMap[slug])
    .filter(Boolean) as BodySupportPoint[];

  if (points.length === 0) return null;

  /* 顏色系統：support → 橘色, release → 藍色 */
  const tagColor = (type: BodySupportPoint["type"]) =>
    type === "support"
      ? "bg-orange-50 text-orange-700 border-orange-200"
      : "bg-sky-50 text-sky-700 border-sky-200";

  const btnColor = (type: BodySupportPoint["type"]) =>
    type === "support"
      ? "text-orange-600 hover:text-orange-700"
      : "text-sky-600 hover:text-sky-700";

  return (
    <section className="mb-12">
      <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-3">
        身體支持
      </h2>
      <p className="text-stone-400 text-sm mb-6 leading-relaxed">
        有時候，不需要想太多，先讓身體有一個可以開始改變的地方。
      </p>

      <div className={`grid gap-5 ${points.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 max-w-sm"}`}>
        {points.map((point) => (
          <div
            key={point.slug}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-100 shadow-sm overflow-hidden"
          >
            <div className="flex gap-4 p-4">
              {/* 穴位圖片 */}
              <div className="relative w-24 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                <Image
                  src={point.image}
                  alt={`${point.acupointName} — ${point.title}`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>

              {/* 文字內容 */}
              <div className="flex-1 min-w-0">
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-medium border mb-2 ${tagColor(point.type)}`}
                >
                  {point.shortLabel}
                </span>
                <h3 className="font-serif text-base font-bold text-[#4a5548] mb-1 leading-snug">
                  {point.title}
                </h3>
                <p className="text-stone-400 text-xs mb-1">
                  {point.acupointName} · {point.locationText}
                </p>
                <p className="text-stone-500 text-xs leading-relaxed mb-3">
                  {point.supportText[0]}
                </p>
                <Link
                  href={`/somaniks?point=${point.slug}`}
                  className={`inline-flex items-center gap-1 text-xs font-medium transition-colors ${btnColor(point.type)}`}
                >
                  看貼法
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
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

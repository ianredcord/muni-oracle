import type { Metadata } from "next";
import Link from "next/link";
import { emotionGroups } from "@/data/flow-system/emotions";
import {
  SectionTitle,
  EmotionCard,
  RelatedLinks,
} from "@/components/flow-system";

export const metadata: Metadata = {
  title: "七大情緒族群 | 整合系統",
  robots: { index: false, follow: false },
};

export default function EmotionsOverview() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Internal badge */}
      <div className="fixed top-4 right-4 z-50 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
        內部測試版
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Back link */}
        <Link
          href="/internal/flow-system"
          className="inline-flex items-center gap-1.5 text-sm text-[#4a5548]/50 hover:text-[#4a5548] transition-colors mb-8"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          返回系統首頁
        </Link>

        {/* Title */}
        <SectionTitle title="七大情緒族群" />

        {/* Intro */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-base md:text-lg leading-relaxed text-[#4a5548]/70">
          Bach 花精的七大情緒族群，對應一氣周流位置、五神系統與奇經八脈。
        </p>

        {/* Grid */}
        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {emotionGroups.map((g) => (
            <EmotionCard
              key={g.slug}
              emotion={g}
              href={`/internal/flow-system/emotions/${g.slug}`}
            />
          ))}
        </div>

        {/* Related Links */}
        <div className="mt-16">
          <RelatedLinks
            links={[
              {
                label: "奇經八穴總覽",
                href: "/internal/flow-system/acupoints",
                description: "查看八穴與奇經對應",
              },
              {
                label: "返回系統首頁",
                href: "/internal/flow-system",
                description: "回到整合系統總覽",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

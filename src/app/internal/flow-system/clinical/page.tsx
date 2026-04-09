import type { Metadata } from "next";
import Link from "next/link";
import { clinicalScenarios } from "@/data/flow-system/clinical";
import {
  SectionTitle,
  ClinicalCard,
  RelatedLinks,
} from "@/components/flow-system";

export const metadata: Metadata = {
  title: "臨床情境整合方案 | 整合系統",
  robots: { index: false, follow: false },
};

export default function ClinicalOverviewPage() {
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
        <SectionTitle
          title="臨床情境整合方案"
          subtitle="結合一氣周流、Farrell 層次判斷、奇經八穴、Somaniks 色彩與花精漢藥的臨床整合應用"
        />

        {/* Intro */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-[#4a5548]/70">
          以下五大臨床情境涵蓋了一氣周流失衡的主要模式。每個情境都整合了
          Farrell 經絡層次評估、奇經八穴配置、Somaniks
          色彩策略、花精對應與漢藥支持，提供完整的臨床思路。
        </p>

        {/* Grid of 5 Clinical Cards */}
        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {clinicalScenarios.map((s) => (
            <ClinicalCard
              key={s.slug}
              scenario={s}
              href={`/internal/flow-system/clinical/${s.slug}`}
            />
          ))}
        </div>

        {/* Related Links */}
        <div className="mt-16">
          <RelatedLinks
            links={[
              {
                label: "八穴入口",
                href: "/internal/flow-system/acupoints",
                description: "查看八穴詳情",
              },
              {
                label: "七大情緒族群",
                href: "/internal/flow-system/emotions",
                description: "查看情緒族群總覽",
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

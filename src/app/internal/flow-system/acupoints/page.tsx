import type { Metadata } from "next";
import Link from "next/link";
import { acupoints } from "@/data/flow-system/acupoints";
import {
  SectionTitle,
  AcupointCard,
  BlueOrangeBadge,
  RelatedLinks,
} from "@/components/flow-system";
import FlowDiagramWrapper from "../FlowDiagramWrapper";

export const metadata: Metadata = {
  title: "奇經八穴總覽 | 整合系統",
  robots: { index: false, follow: false },
};

export default function AcupointsOverview() {
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
        <SectionTitle title="奇經八穴總覽" />

        {/* Ancient verse */}
        <blockquote className="mx-auto mt-10 max-w-2xl rounded-2xl border border-stone-200/60 bg-white p-6 md:p-8 text-center">
          <p className="font-serif text-base md:text-lg leading-loose text-[#4a5548]/80 tracking-wide">
            公孫衝脈胃心胸，內關陰維下總同；
            <br />
            臨泣膽經連帶脈，陽維目銳外關逢；
            <br />
            後溪督脈內眥頸，申脈陽蹻絡亦通；
            <br />
            列缺任脈行肺系，陰蹻照海膈喉嚨。
          </p>
          <cite className="mt-4 block text-xs text-[#4a5548]/40 not-italic">
            八脈交會穴口訣
          </cite>
        </blockquote>

        {/* Diagram */}
        <div className="mt-16">
          <FlowDiagramWrapper />
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {acupoints.map((a) => (
            <AcupointCard
              key={a.slug}
              acupoint={a}
              href={`/internal/flow-system/acupoints/${a.slug}`}
            />
          ))}
        </div>

        {/* Summary table */}
        <section className="mt-16">
          <SectionTitle title="八穴總表" />
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200/60 text-left text-[#4a5548]/50">
                  <th className="pb-3 pr-4 font-medium">穴位</th>
                  <th className="pb-3 pr-4 font-medium">正經</th>
                  <th className="pb-3 pr-4 font-medium">通奇經</th>
                  <th className="pb-3 pr-4 font-medium">一氣位置</th>
                  <th className="pb-3 font-medium">Somaniks</th>
                </tr>
              </thead>
              <tbody className="text-[#4a5548]/70">
                {acupoints.map((a) => (
                  <tr
                    key={a.slug}
                    className="border-b border-stone-100 last:border-0"
                  >
                    <td className="py-3 pr-4">
                      <Link
                        href={`/internal/flow-system/acupoints/${a.slug}`}
                        className="font-medium text-[#4a5548] hover:underline"
                      >
                        {a.fullName}
                      </Link>
                    </td>
                    <td className="py-3 pr-4">{a.meridian}</td>
                    <td className="py-3 pr-4">{a.extraordinaryVessel}</td>
                    <td className="py-3 pr-4">{a.flowPosition}</td>
                    <td className="py-3">
                      <BlueOrangeBadge type={a.somaniks} size="sm" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Links */}
        <div className="mt-16">
          <RelatedLinks
            links={[
              {
                label: "七大情緒族群",
                href: "/internal/flow-system/emotions",
                description: "查看情緒族群與花精對應",
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

import type { Metadata } from "next";
import Link from "next/link";
import { acupoints } from "@/data/flow-system/acupoints";
import { emotionGroups } from "@/data/flow-system/emotions";
import { clinicalScenarios } from "@/data/flow-system/clinical";
import {
  TheoryCard,
  EmotionCard,
  AcupointCard,
  ClinicalCard,
  BlueOrangeBadge,
} from "@/components/flow-system";
import FlowDiagramWrapper from "./FlowDiagramWrapper";

export const metadata: Metadata = {
  title: "花精 × 一氣周流 × 奇經八脈 整合系統",
  robots: { index: false, follow: false },
};

/* ── quick nav items ── */
const NAV = [
  { label: "理論框架", href: "#theories" },
  { label: "一氣周流", href: "#diagram" },
  { label: "八穴", href: "#acupoints" },
  { label: "情緒族群", href: "#emotions" },
  { label: "臨床情境", href: "#clinical" },
  { label: "Farrell 五層", href: "/internal/flow-system/farrell" },
  { label: "卦象藥方", href: "/internal/flow-system/hexagrams" },
  { label: "搜尋", href: "/internal/flow-system/search" },
];

export default function FlowSystemHome() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#4a5548]">
      {/* ═══ Sticky nav ═══ */}
      <nav className="sticky top-0 z-50 bg-[#F9F7F2]/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="mx-auto max-w-6xl px-4 flex items-center h-12 gap-1 overflow-x-auto scrollbar-hide">
          <span className="shrink-0 font-serif font-bold text-sm tracking-wide mr-3 text-[#4a5548]/80">
            MAX
          </span>
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium text-[#4a5548]/50 hover:text-[#4a5548] hover:bg-white/60 transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <span className="ml-auto shrink-0 rounded-full bg-amber-100/80 border border-amber-200 px-2.5 py-0.5 text-[10px] font-medium text-amber-700">
            內部測試版
          </span>
        </div>
      </nav>

      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#da7101]/[0.03] rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#006494]/[0.02] rounded-full blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#9A7B4F] mb-4">
            MUNI Internal Knowledge System
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15]">
            花精 × 一氣周流 × 奇經八脈
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#4a5548]/50 max-w-2xl mx-auto leading-relaxed">
            整合 Bach 花精、黃元御一氣周流、Farrell 經絡五層、奇經八穴口訣與 Somaniks 色彩語言的完整知識系統。
          </p>

          {/* Quick stats */}
          <div className="mt-8 flex items-center justify-center gap-6 md:gap-10">
            {[
              { num: "38", label: "支花精" },
              { num: "8", label: "個穴位" },
              { num: "7", label: "大情緒族群" },
              { num: "5", label: "層經絡" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-2xl md:text-3xl text-[#4a5548]">{s.num}</p>
                <p className="text-[10px] md:text-xs text-[#4a5548]/40 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Three Theories ═══ */}
      <section id="theories" className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">三大理論框架</h2>
          <div className="grid gap-5 md:grid-cols-3">
            <TheoryCard
              title="一氣周流"
              subtitle="黃元御"
              description="中氣斡旋，左升右降，坎離交濟。脾土升清、胃土降濁，中氣為樞紐。"
            />
            <TheoryCard
              title="Farrell 經絡五層"
              subtitle="Yvonne Farrell"
              description="人體自我保存機制由淺到深：筋經、絡脈、正經、經別、奇經八脈。"
            />
            <TheoryCard
              title="Somaniks 色彩語言"
              subtitle="藍洩 × 橘補"
              description="藍色＝洩（Draining）：釋放、疏通。橘色＝補（Tonifying）：充填、鞏固。"
            />
          </div>
        </div>
      </section>

      {/* ═══ Flow Diagram + Acupoints side by side ═══ */}
      <section id="diagram" className="py-12 md:py-16 bg-white/40">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-3">一氣周流 × 八穴位置圖</h2>
          <p className="text-center text-sm text-[#4a5548]/40 mb-8">點擊穴位查看詳細資訊</p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Diagram */}
            <div className="bg-white rounded-2xl border border-stone-200/50 p-4 md:p-6 shadow-sm">
              <FlowDiagramWrapper />
            </div>

            {/* Ancient verse + quick info */}
            <div className="space-y-5">
              {/* 口訣 */}
              <div className="bg-white rounded-2xl border border-stone-200/50 p-5 md:p-6 shadow-sm">
                <h3 className="font-serif text-base mb-3 text-[#4a5548]/70">八穴口訣</h3>
                <p className="text-sm leading-[2] text-[#4a5548]/60 font-serif">
                  公孫衝脈胃心胸，內關陰維下總同；<br />
                  臨泣膽經連帶脈，陽維目銳外關逢；<br />
                  後溪督脈內眥頸，申脈陽蹻絡亦通；<br />
                  列缺任脈行肺系，陰蹻照海膈喉嚨。
                </p>
              </div>

              {/* Somaniks key */}
              <div className="bg-white rounded-2xl border border-stone-200/50 p-5 shadow-sm">
                <h3 className="font-serif text-base mb-3 text-[#4a5548]/70">治療策略邏輯</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <BlueOrangeBadge type="tonify" size="sm" />
                    <div>
                      <p className="text-sm font-medium">橘補場景</p>
                      <p className="text-xs text-[#4a5548]/50 mt-0.5">資源不足 → 先充填再流動（中氣下陷、左升不足、右降不足、坎陽虧損）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BlueOrangeBadge type="drain" size="sm" />
                    <div>
                      <p className="text-sm font-medium">藍洩場景</p>
                      <p className="text-xs text-[#4a5548]/50 mt-0.5">資源充足、邪實壅滯 → 先疏通再建設（肝火上炎、帶脈藏創傷、衛氣過亢）</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/internal/flow-system/farrell"
                  className="px-4 py-2 rounded-xl bg-white border border-stone-200/50 text-xs font-medium hover:bg-stone-50 hover:border-stone-300 transition-colors shadow-sm"
                >
                  Farrell 五層系統 →
                </Link>
                <Link
                  href="/internal/flow-system/hexagrams"
                  className="px-4 py-2 rounded-xl bg-white border border-stone-200/50 text-xs font-medium hover:bg-stone-50 hover:border-stone-300 transition-colors shadow-sm"
                >
                  卦象 × 藥方 →
                </Link>
                <Link
                  href="/internal/flow-system/search"
                  className="px-4 py-2 rounded-xl bg-white border border-stone-200/50 text-xs font-medium hover:bg-stone-50 hover:border-stone-300 transition-colors shadow-sm"
                >
                  搜尋系統 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Eight Acupoints ═══ */}
      <section id="acupoints" className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl">奇經八穴</h2>
            <Link
              href="/internal/flow-system/acupoints"
              className="text-xs text-[#9A7B4F] font-medium hover:underline"
            >
              查看總覽 →
            </Link>
          </div>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {acupoints.map((a) => (
              <AcupointCard
                key={a.slug}
                acupoint={a}
                href={`/internal/flow-system/acupoints/${a.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Seven Emotion Groups ═══ */}
      <section id="emotions" className="py-12 md:py-16 bg-white/40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl">七大情緒族群</h2>
            <Link
              href="/internal/flow-system/emotions"
              className="text-xs text-[#9A7B4F] font-medium hover:underline"
            >
              查看總覽 →
            </Link>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {emotionGroups.map((g) => (
              <EmotionCard
                key={g.slug}
                emotion={g}
                href={`/internal/flow-system/emotions/${g.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Clinical Scenarios ═══ */}
      <section id="clinical" className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl">臨床情境</h2>
            <Link
              href="/internal/flow-system/clinical"
              className="text-xs text-[#9A7B4F] font-medium hover:underline"
            >
              查看總覽 →
            </Link>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {clinicalScenarios.map((s) => (
              <ClinicalCard
                key={s.slug}
                scenario={s}
                href={`/internal/flow-system/clinical/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="py-8 border-t border-stone-200/50">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#4a5548]/30">
            MUNI 整合系統 · 內部測試版 · 請勿公開分享
          </p>
          <div className="flex gap-3">
            {[
              { label: "Farrell 五層", href: "/internal/flow-system/farrell" },
              { label: "卦象藥方", href: "/internal/flow-system/hexagrams" },
              { label: "搜尋", href: "/internal/flow-system/search" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[10px] text-[#4a5548]/30 hover:text-[#4a5548]/60 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

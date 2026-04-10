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
        <div className="mx-auto max-w-5xl px-4 flex items-center h-12 gap-1 overflow-x-auto scrollbar-hide">
          <Link href="/internal/flow-system" className="shrink-0 font-serif font-bold text-sm tracking-wide mr-3 text-[#9A7B4F]">
            MAX
          </Link>
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
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Decorative blurs — matching main site */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#9A7B4F]/[0.04] rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#006494]/[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#da7101]/[0.03] rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#9A7B4F] mb-6">
            MUNI Internal Knowledge System
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] font-bold">
            花精 × 一氣周流 × 奇經八脈
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#4a5548]/50 max-w-2xl mx-auto leading-loose">
            整合 Bach 花精、黃元御一氣周流、Farrell 經絡五層、奇經八穴口訣與 Somaniks 色彩語言的完整知識系統。
          </p>

          {/* Quick stats */}
          <div className="mt-10 flex items-center justify-center gap-8 md:gap-12">
            {[
              { num: "38", label: "支花精" },
              { num: "8", label: "個穴位" },
              { num: "7", label: "大情緒族群" },
              { num: "5", label: "層經絡" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-[#4a5548] font-bold">{s.num}</p>
                <p className="text-[10px] md:text-xs text-[#4a5548]/40 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons — pill style matching main site */}
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="#diagram"
              className="px-6 py-2.5 rounded-full bg-[#4a5548] text-white text-sm font-medium hover:bg-[#3a4538] transition-colors shadow-sm"
            >
              開始探索
            </Link>
            <Link
              href="/internal/flow-system/search"
              className="px-6 py-2.5 rounded-full border border-[#4a5548]/20 text-sm font-medium hover:bg-white/60 transition-colors"
            >
              搜尋系統
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Three Theories ═══ */}
      <section id="theories" className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] text-center mb-3">Theoretical Framework</p>
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">三大理論框架</h2>
          <div className="grid gap-6 md:grid-cols-3">
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
      <section id="diagram" className="relative py-16 md:py-20 bg-white/40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9A7B4F]/[0.02] rounded-full blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] text-center mb-3">Flow Diagram</p>
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-3">一氣周流 × 八穴位置圖</h2>
          <p className="text-center text-sm text-[#4a5548]/40 mb-10">點擊穴位查看詳細資訊</p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Diagram */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-200/50 p-4 md:p-6 shadow-sm">
              <FlowDiagramWrapper />
            </div>

            {/* Ancient verse + quick info */}
            <div className="space-y-5">
              {/* 口訣 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-200/50 p-5 md:p-6 shadow-sm">
                <h3 className="font-serif text-base mb-3 text-[#4a5548]/70">八穴口訣</h3>
                <p className="text-sm leading-[2] text-[#4a5548]/60 font-serif">
                  公孫衝脈胃心胸，內關陰維下總同；<br />
                  臨泣膽經連帶脈，陽維目銳外關逢；<br />
                  後溪督脈內眥頸，申脈陽蹻絡亦通；<br />
                  列缺任脈行肺系，陰蹻照海膈喉嚨。
                </p>
              </div>

              {/* Somaniks key */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-200/50 p-5 shadow-sm">
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

              {/* Quick links — pill style */}
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/internal/flow-system/farrell"
                  className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200/50 text-xs font-medium hover:bg-white hover:border-stone-300 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  Farrell 五層系統 →
                </Link>
                <Link
                  href="/internal/flow-system/hexagrams"
                  className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200/50 text-xs font-medium hover:bg-white hover:border-stone-300 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  卦象 × 藥方 →
                </Link>
                <Link
                  href="/internal/flow-system/search"
                  className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200/50 text-xs font-medium hover:bg-white hover:border-stone-300 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  搜尋系統 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Eight Acupoints ═══ */}
      <section id="acupoints" className="relative py-16 md:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#da7101]/[0.02] rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] mb-2">Eight Confluent Points</p>
              <h2 className="font-serif text-2xl md:text-3xl">奇經八穴</h2>
            </div>
            <Link
              href="/internal/flow-system/acupoints"
              className="px-4 py-1.5 rounded-full border border-[#9A7B4F]/30 text-xs text-[#9A7B4F] font-medium hover:bg-[#9A7B4F]/10 transition-colors"
            >
              查看總覽 →
            </Link>
          </div>
          <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
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
      <section id="emotions" className="relative py-16 md:py-20 bg-white/40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#006494]/[0.02] rounded-full blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] mb-2">Emotion Groups</p>
              <h2 className="font-serif text-2xl md:text-3xl">七大情緒族群</h2>
            </div>
            <Link
              href="/internal/flow-system/emotions"
              className="px-4 py-1.5 rounded-full border border-[#9A7B4F]/30 text-xs text-[#9A7B4F] font-medium hover:bg-[#9A7B4F]/10 transition-colors"
            >
              查看總覽 →
            </Link>
          </div>
          <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
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
      <section id="clinical" className="relative py-16 md:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#9A7B4F]/[0.02] rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] mb-2">Clinical Scenarios</p>
              <h2 className="font-serif text-2xl md:text-3xl">臨床情境</h2>
            </div>
            <Link
              href="/internal/flow-system/clinical"
              className="px-4 py-1.5 rounded-full border border-[#9A7B4F]/30 text-xs text-[#9A7B4F] font-medium hover:bg-[#9A7B4F]/10 transition-colors"
            >
              查看總覽 →
            </Link>
          </div>
          <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
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

      {/* ═══ CTA Section — dark bg matching main site ═══ */}
      <section className="py-16 md:py-20 bg-[#4a5548] text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">深入探索整合系統</h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Farrell 經絡五層、卦象藥方對照、全系統關鍵字搜尋，完整的知識工具等你使用。
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/internal/flow-system/farrell"
              className="px-6 py-2.5 rounded-full bg-white text-[#4a5548] text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Farrell 五層
            </Link>
            <Link
              href="/internal/flow-system/hexagrams"
              className="px-6 py-2.5 rounded-full border border-white/30 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              卦象藥方
            </Link>
            <Link
              href="/internal/flow-system/search"
              className="px-6 py-2.5 rounded-full border border-white/30 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              搜尋系統
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Footer — matching main site style ═══ */}
      <footer className="py-12 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-2">
            MUNI 整合知識系統
          </h3>
          <p className="text-stone-500 text-sm mb-6">
            花精 × 一氣周流 × 奇經八脈 × Farrell 五層 × Somaniks
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            <Link href="/internal/flow-system/farrell" className="text-stone-500 hover:text-[#4a5548] text-sm transition-colors">
              Farrell 五層
            </Link>
            <Link href="/internal/flow-system/hexagrams" className="text-stone-500 hover:text-[#4a5548] text-sm transition-colors">
              卦象藥方
            </Link>
            <Link href="/internal/flow-system/search" className="text-stone-500 hover:text-[#4a5548] text-sm transition-colors">
              搜尋系統
            </Link>
            <Link href="/" className="text-[#9A7B4F] hover:text-[#8A6B3F] text-sm font-medium transition-colors">
              回到主站
            </Link>
          </div>
          <p className="text-stone-400 text-xs">
            內部測試版 · 僅供 MUNI 團隊使用 · 請勿公開分享
          </p>
        </div>
      </footer>
    </div>
  );
}

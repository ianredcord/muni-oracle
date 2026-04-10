import type { Metadata } from "next";
import Link from "next/link";
import { acupoints } from "@/data/flow-system/acupoints";
import { emotionGroups } from "@/data/flow-system/emotions";
import { clinicalScenarios } from "@/data/flow-system/clinical";
import {
  systemLayers,
  subsystemComparisons,
  courseLevels,
  clinicalSteps,
  ultimateCircle,
} from "@/data/flow-system/layers";
import {
  EmotionCard,
  AcupointCard,
  ClinicalCard,
  BlueOrangeBadge,
} from "@/components/flow-system";
import FlowDiagramWrapper from "./FlowDiagramWrapper";
import SevenLayerRing from "@/components/flow-system/SevenLayerRing";

export const metadata: Metadata = {
  title: "FP-Somaniks 筋膜能量整合系統",
  robots: { index: false, follow: false },
};

/* ── quick nav items ── */
const NAV = [
  { label: "七層架構", href: "#layers" },
  { label: "一氣周流", href: "#diagram" },
  { label: "八穴", href: "#acupoints" },
  { label: "情緒族群", href: "#emotions" },
  { label: "臨床流程", href: "#clinical-flow" },
  { label: "課程三階", href: "#course" },
  { label: "四系統比較", href: "#comparison" },
  { label: "Farrell 五層", href: "/internal/flow-system/farrell" },
  { label: "搜尋", href: "/internal/flow-system/search" },
];

/* ── layer color map ── */
const layerColors: Record<string, { bg: string; border: string; text: string; tagBg: string }> = {
  amber:  { bg: "bg-amber-50/80",  border: "border-amber-200/60",  text: "text-amber-700",  tagBg: "bg-amber-100" },
  red:    { bg: "bg-red-50/80",    border: "border-red-200/60",    text: "text-red-700",    tagBg: "bg-red-100" },
  purple: { bg: "bg-purple-50/80", border: "border-purple-200/60", text: "text-purple-700", tagBg: "bg-purple-100" },
  orange: { bg: "bg-orange-50/80", border: "border-orange-200/60", text: "text-orange-700", tagBg: "bg-orange-100" },
  blue:   { bg: "bg-blue-50/80",   border: "border-blue-200/60",   text: "text-blue-700",   tagBg: "bg-blue-100" },
  yellow: { bg: "bg-yellow-50/80", border: "border-yellow-200/60", text: "text-yellow-700", tagBg: "bg-yellow-100" },
  pink:   { bg: "bg-pink-50/80",   border: "border-pink-200/60",   text: "text-pink-700",   tagBg: "bg-pink-100" },
};

export default function FlowSystemHome() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#4a5548]">
      {/* ═══ Sticky nav ═══ */}
      <nav className="sticky top-0 z-50 bg-[#F9F7F2]/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="mx-auto max-w-5xl px-4 flex items-center h-12 gap-1 overflow-x-auto scrollbar-hide">
          <Link href="/internal/flow-system" className="shrink-0 font-serif font-bold text-sm tracking-wide mr-3 text-[#9A7B4F]">
            FP-S
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
            v1.0
          </span>
        </div>
      </nav>

      {/* ═══ Hero ═══ */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 overflow-x-clip">
        {/* Animated gradient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              background: "linear-gradient(135deg, #9A7B4F 0%, #006494 30%, #da7101 60%, #9A7B4F 100%)",
              backgroundSize: "400% 400%",
              animation: "hero-gradient 25s ease infinite",
            }}
          />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#9A7B4F]/[0.04] rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#006494]/[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#da7101]/[0.03] rounded-full blur-[100px]" />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes hero-gradient {
            0%   { background-position: 0% 50%; }
            50%  { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        ` }} />

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#9A7B4F] mb-6">
            FP-Somaniks Integration System v1.0
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] font-bold">
            筋膜能量整合系統
          </h1>
          <p className="mt-4 font-serif text-lg md:text-xl text-[#4a5548]/50">
            牟尼香 × 40隻花精 × 一氣周流 × 奇經八脈 × Somaniks
          </p>
          <p className="mt-4 text-sm md:text-base text-[#4a5548]/40 max-w-2xl mx-auto leading-loose">
            以黃元御一氣周流為作業系統，整合五層子系統，
            透過 Somaniks 微針貼＋Bach 花精進行介入的完整臨床架構。
          </p>

          {/* Seven Layer Ring */}
          <div className="mt-10">
            <SevenLayerRing />
          </div>

          {/* Quick stats */}
          <div className="mt-10 flex items-center justify-center gap-6 md:gap-10 flex-wrap">
            {[
              { num: "7", label: "層架構" },
              { num: "38", label: "支花精" },
              { num: "8", label: "個穴位" },
              { num: "7", label: "大情緒族群" },
              { num: "6", label: "步臨床流程" },
              { num: "3", label: "階課程" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-[#4a5548] font-bold">{s.num}</p>
                <p className="text-[10px] md:text-xs text-[#4a5548]/40 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="#layers"
              className="px-6 py-2.5 rounded-full bg-[#4a5548] text-white text-sm font-medium hover:bg-[#3a4538] transition-colors shadow-sm"
            >
              探索七層架構
            </Link>
            <Link
              href="#clinical-flow"
              className="px-6 py-2.5 rounded-full border border-[#4a5548]/20 text-sm font-medium hover:bg-white/60 transition-colors"
            >
              臨床流程
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

      {/* ═══ The Ultimate Circle ═══ */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] mb-3">The Ultimate Logic</p>
          <h2 className="font-serif text-xl md:text-2xl mb-8">黃元御的圓環——系統的終極邏輯</h2>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {ultimateCircle.map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200/50 text-sm font-medium text-[#4a5548] shadow-sm">
                  {item}
                </span>
                {i < ultimateCircle.length - 1 && (
                  <span className="text-[#9A7B4F]/40">→</span>
                )}
              </span>
            ))}
            <span className="text-[#9A7B4F]/40">→</span>
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#4a5548] text-white text-sm font-medium shadow-sm">
              回到中氣
            </span>
          </div>
          <p className="mt-6 text-xs text-[#4a5548]/40 max-w-lg mx-auto">
            始於中氣，終於中氣，一以貫之。中氣（膈肌–迷走複合體）驅動一切。
          </p>
        </div>
      </section>

      {/* ═══ Seven-Layer Architecture ═══ */}
      <section id="layers" className="py-16 md:py-20 bg-white/40">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] text-center mb-3">Seven-Layer Architecture</p>
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-4">七層系統架構</h2>
          <p className="text-center text-sm text-[#4a5548]/40 mb-12 max-w-xl mx-auto">
            OS 層作為作業系統，五層子系統各司其職，介入層透過花精＋Somaniks 同時激活全部五層
          </p>

          <div className="space-y-4">
            {systemLayers.map((layer) => {
              const colors = layerColors[layer.color] || layerColors.amber;
              return (
                <div
                  key={layer.slug}
                  className={`${colors.bg} backdrop-blur-sm rounded-2xl border ${colors.border} p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Left: Tag + Title */}
                    <div className="md:w-1/3 shrink-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{layer.icon}</span>
                        <span className={`text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full ${colors.tagBg} ${colors.text}`}>
                          {layer.tag}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#4a5548]">
                        {layer.name}
                      </h3>
                      <p className="text-xs text-[#4a5548]/40 mt-0.5">{layer.nameEn}</p>
                      <p className="text-sm text-[#4a5548]/60 mt-2 leading-relaxed">
                        {layer.subtitle}
                      </p>
                    </div>

                    {/* Right: Details */}
                    <div className="md:w-2/3 space-y-3">
                      {/* Meta row */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-white/60 rounded-xl px-3 py-2">
                          <span className="text-[#4a5548]/40 block mb-0.5">筋膜對應</span>
                          <span className="text-[#4a5548]/80">{layer.fasciaCorrelate}</span>
                        </div>
                        <div className="bg-white/60 rounded-xl px-3 py-2">
                          <span className="text-[#4a5548]/40 block mb-0.5">傳導介質</span>
                          <span className="text-[#4a5548]/80">{layer.medium}</span>
                        </div>
                        <div className="bg-white/60 rounded-xl px-3 py-2">
                          <span className="text-[#4a5548]/40 block mb-0.5">臨床入口</span>
                          <span className="text-[#4a5548]/80">{layer.clinicalEntry}</span>
                        </div>
                        <div className="bg-white/60 rounded-xl px-3 py-2">
                          <span className="text-[#4a5548]/40 block mb-0.5">核心原理</span>
                          <span className="text-[#4a5548]/80 font-medium">{layer.corePrinciple}</span>
                        </div>
                      </div>

                      {/* Key concepts */}
                      <div>
                        <p className="text-xs font-medium text-[#4a5548]/50 mb-1.5">{layer.keyConceptTitle}</p>
                        <ul className="space-y-1">
                          {layer.keyConcepts.map((concept) => (
                            <li key={concept} className="text-xs text-[#4a5548]/70 flex items-start gap-1.5">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.tagBg}`} />
                              {concept}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Flow Diagram + Verse ═══ */}
      <section id="diagram" className="relative py-16 md:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9A7B4F]/[0.02] rounded-full blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] text-center mb-3">OS Layer — Flow Diagram</p>
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-3">一氣周流 × 八穴位置圖</h2>
          <p className="text-center text-sm text-[#4a5548]/40 mb-10">點擊穴位查看詳細資訊</p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-200/50 p-4 md:p-6 shadow-sm">
              <FlowDiagramWrapper />
            </div>

            <div className="space-y-5">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-200/50 p-5 md:p-6 shadow-sm">
                <h3 className="font-serif text-base mb-3 text-[#4a5548]/70">八穴口訣</h3>
                <p className="text-sm leading-[2] text-[#4a5548]/60 font-serif">
                  公孫衝脈胃心胸，內關陰維下總同；<br />
                  臨泣膽經連帶脈，陽維目銳外關逢；<br />
                  後溪督脈內眥頸，申脈陽蹻絡亦通；<br />
                  列缺任脈行肺系，陰蹻照海膈喉嚨。
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-200/50 p-5 shadow-sm">
                <h3 className="font-serif text-base mb-3 text-[#4a5548]/70">治療策略邏輯</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <BlueOrangeBadge type="tonify" size="sm" />
                    <div>
                      <p className="text-sm font-medium">橘補場景</p>
                      <p className="text-xs text-[#4a5548]/50 mt-0.5">資源不足 → 先充填再流動</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BlueOrangeBadge type="drain" size="sm" />
                    <div>
                      <p className="text-sm font-medium">藍洩場景</p>
                      <p className="text-xs text-[#4a5548]/50 mt-0.5">資源充足、邪實壅滯 → 先疏通再建設</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50/80 backdrop-blur-sm rounded-2xl border border-amber-200/50 p-5 shadow-sm">
                <h3 className="font-serif text-base mb-2 text-amber-800/70">臨床第一定律</h3>
                <p className="text-sm text-amber-800/60 leading-relaxed">
                  寒 → 濕 → 鬱 → 瘀<br />
                  <span className="text-xs text-amber-700/40 mt-1 block">
                    所有慢性病的演進路線，必須反向解除：先活血化瘀，再疏肝解鬱，再化濕，最終溫陽散寒。
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Eight Acupoints ═══ */}
      <section id="acupoints" className="relative py-16 md:py-20 bg-white/40">
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
      <section id="emotions" className="relative py-16 md:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#006494]/[0.02] rounded-full blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] mb-2">Emotion Groups × Bach Flowers</p>
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

      {/* ═══ Clinical Flow (6-Step) ═══ */}
      <section id="clinical-flow" className="py-16 md:py-20 bg-white/40">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] text-center mb-3">Clinical Protocol</p>
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">六步臨床流程</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {clinicalSteps.map((s) => (
              <div
                key={s.step}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-200/50 p-4 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#4a5548] text-white text-lg font-bold flex items-center justify-center mx-auto mb-3">
                  {s.step}
                </div>
                <p className="font-serif text-base font-bold text-[#4a5548] mb-1">{s.action}</p>
                <p className="text-xs text-[#4a5548]/50 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Five-Layer Simultaneous Activation ═══ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] text-center mb-3">Simultaneous Activation</p>
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-4">五層同時激活機制</h2>
          <p className="text-center text-sm text-[#4a5548]/40 mb-10 max-w-lg mx-auto">
            當 Somaniks 微針貼＋花精貼於八脈交會穴時，五個子系統同步激活
          </p>

          <div className="space-y-3">
            {[
              { layer: "經筋層", detail: "微針物理穿刺激活筋膜機械感受器（Piezo1/2 通道）", icon: "🟠", num: 1 },
              { layer: "絡脈層", detail: "微針穿透皮膚進入孫絡層，影響間質液局部壓力梯度", icon: "🔵", num: 2 },
              { layer: "正經層", detail: "穴位得氣後，信號沿正經主力學通道傳導至遠端", icon: "🔴", num: 3 },
              { layer: "經別層", detail: "正經激活通過經別「離入出合」路徑深入臟腑筋膜", icon: "🟣", num: 4 },
              { layer: "奇經層", detail: "八脈交會穴的特殊性使信號灌注入對應奇經蓄調庫", icon: "🟡", num: 5 },
            ].map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-200/50 p-4 shadow-sm"
              >
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-[#4a5548]">{item.layer}</p>
                  <p className="text-xs text-[#4a5548]/60 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-4 bg-pink-50/80 backdrop-blur-sm rounded-2xl border border-pink-200/50 p-4 shadow-sm">
              <span className="text-xl shrink-0">🌸</span>
              <div>
                <p className="text-sm font-bold text-pink-800">花精＝第六維度</p>
                <p className="text-xs text-pink-700/60 mt-0.5">疊加在五層物理激活之上，透過筋膜基質水分子網絡進行振動頻率共振</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Clinical Scenarios ═══ */}
      <section id="clinical" className="relative py-16 md:py-20 bg-white/40">
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

      {/* ═══ Four Subsystem Comparison Table ═══ */}
      <section id="comparison" className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] text-center mb-3">Subsystem Comparison</p>
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">四大子系統比較</h2>

          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[700px] text-xs">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-3 px-3 font-medium text-[#4a5548]/50">維度</th>
                  <th className="text-left py-3 px-3 font-medium text-[#4a5548]/50">古典系統</th>
                  <th className="text-left py-3 px-3 font-medium text-[#4a5548]/50">筋膜科學對應</th>
                  <th className="text-left py-3 px-3 font-medium text-[#4a5548]/50">傳導介質</th>
                  <th className="text-left py-3 px-3 font-medium text-[#4a5548]/50">臨床入口</th>
                  <th className="text-left py-3 px-3 font-medium text-[#4a5548]/50">核心原理</th>
                </tr>
              </thead>
              <tbody>
                {subsystemComparisons.map((row) => (
                  <tr key={row.dimension} className="border-b border-stone-100 hover:bg-white/60 transition-colors">
                    <td className="py-3 px-3 font-bold text-[#4a5548]">{row.dimension}</td>
                    <td className="py-3 px-3 text-[#4a5548]/70">{row.classical}</td>
                    <td className="py-3 px-3 text-[#4a5548]/70">{row.fasciaScience}</td>
                    <td className="py-3 px-3 text-[#4a5548]/70">{row.medium}</td>
                    <td className="py-3 px-3 text-[#4a5548]/70">{row.clinicalEntry}</td>
                    <td className="py-3 px-3 text-[#4a5548]/80 font-medium">{row.corePrinciple}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ Course Three-Level Architecture ═══ */}
      <section id="course" className="py-16 md:py-20 bg-white/40">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9A7B4F] text-center mb-3">Course Architecture</p>
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">課程三階架構</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {courseLevels.map((c) => (
              <div
                key={c.level}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-200/50 p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#9A7B4F] text-white text-sm font-bold flex items-center justify-center">
                    {c.level}
                  </span>
                  <div>
                    <p className="font-serif text-base font-bold text-[#4a5548]">{c.title}</p>
                    <p className="text-[10px] text-[#4a5548]/40">{c.layers}</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <span className="text-[#4a5548]/40">核心工具：</span>
                    <span className="text-[#4a5548]/70">{c.coreTools}</span>
                  </div>
                  <div>
                    <span className="text-[#4a5548]/40">理論基礎：</span>
                    <span className="text-[#4a5548]/70">{c.theoryBasis}</span>
                  </div>
                  <div>
                    <span className="text-[#4a5548]/40">評估方法：</span>
                    <span className="text-[#4a5548]/70">{c.assessment}</span>
                  </div>
                  <div>
                    <span className="text-[#4a5548]/40">教學重點：</span>
                    <span className="text-[#4a5548]/70">{c.teachingFocus}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100">
                  <p className="text-xs text-[#9A7B4F]/80 font-serif italic leading-relaxed">
                    「{c.coreThesis}」
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA Section ═══ */}
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

      {/* ═══ Footer ═══ */}
      <footer className="py-12 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-2">
            FP-Somaniks 整合系統
          </h3>
          <p className="text-stone-500 text-sm mb-6">
            筋膜能量醫學 × 黃元御一氣周流 × 奇經八脈 × 花精療法 × Somaniks 微針貼
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
            FP-Somaniks v1.0 · 內部測試版 · 僅供 MUNI 團隊使用
          </p>
        </div>
      </footer>
    </div>
  );
}

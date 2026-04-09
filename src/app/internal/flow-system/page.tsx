import type { Metadata } from "next";
import { acupoints } from "@/data/flow-system/acupoints";
import { emotionGroups } from "@/data/flow-system/emotions";
import { clinicalScenarios } from "@/data/flow-system/clinical";
import {
  SectionTitle,
  TheoryCard,
  EmotionCard,
  AcupointCard,
  ClinicalCard,
} from "@/components/flow-system";
import FlowDiagramWrapper from "./FlowDiagramWrapper";

export const metadata: Metadata = {
  title: "花精 × 一氣周流 × 奇經八脈 整合系統",
  robots: { index: false, follow: false },
};

export default function FlowSystemHome() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Internal badge */}
      <div className="fixed top-4 right-4 z-50 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
        內部測試版
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F9F7F2] via-white to-[#f0ebe0] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#4a5548] tracking-tight leading-tight">
            花精 × 一氣周流 × 奇經八脈
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#4a5548]/60">
            整合系統 — 內部測試版
          </p>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="系統概述" />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base md:text-lg leading-relaxed text-[#4a5548]/70">
            本系統整合 Bach 花精療法、黃元御一氣周流理論、Yvonne Farrell
            經絡層次系統、奇經八脈交會八穴口訣，以及 Somaniks 色彩語言。
          </p>
        </div>
      </section>

      {/* Three Theories */}
      <section className="py-16 md:py-20 bg-white/40">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="三大理論框架" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TheoryCard
              title="一氣周流"
              subtitle="黃元御"
              description="中氣斡旋，左升右降，坎離交濟。脾土升清、胃土降濁，中氣為樞紐。"
            />
            <TheoryCard
              title="Farrell 經絡五層"
              subtitle="Yvonne Farrell"
              description="人體自我保存機制由淺到深分為五個層次：筋經、絡脈、正經、經別、奇經八脈。"
            />
            <TheoryCard
              title="Somaniks 色彩語言"
              subtitle="Somaniks"
              description="藍色＝洩（Draining）：釋放、疏通。橘色＝補（Tonifying）：充填、鞏固。"
            />
          </div>
        </div>
      </section>

      {/* Flow Position Diagram */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="一氣周流位置圖"
            subtitle="點擊穴位查看詳情"
          />
          <div className="mt-10">
            <FlowDiagramWrapper />
          </div>
        </div>
      </section>

      {/* Eight Acupoints */}
      <section className="py-16 md:py-20 bg-white/40">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="八穴入口" />
          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Seven Emotion Groups */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="七大情緒族群入口" />
          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Clinical Scenarios */}
      <section className="py-16 md:py-20 bg-white/40">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="臨床情境入口" />
          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {clinicalScenarios.map((s) => (
              <ClinicalCard key={s.slug} scenario={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <p className="text-xs text-[#4a5548]/40">
          內部測試版 — 請勿公開分享
        </p>
      </footer>
    </div>
  );
}

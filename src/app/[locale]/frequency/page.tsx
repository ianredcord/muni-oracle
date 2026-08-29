import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FREQUENCY_COPY } from "@/content/pages/frequency";
import { isLocale, localeHref } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

/* ─── 六層架構的視覺樣式（文案在 content/pages/frequency.ts） ─── */
const LAYER_STYLES = [
  { icon: "◉", color: "from-amber-500/20 to-amber-700/10", borderColor: "border-amber-600/30", accentColor: "text-[#9A7B4F]" },
  { icon: "◎", color: "from-emerald-500/20 to-emerald-700/10", borderColor: "border-emerald-600/30", accentColor: "text-[#4a5548]" },
  { icon: "◈", color: "from-violet-500/20 to-violet-700/10", borderColor: "border-violet-600/30", accentColor: "text-[#6b5b7b]" },
  { icon: "◇", color: "from-cyan-500/20 to-cyan-700/10", borderColor: "border-cyan-600/30", accentColor: "text-[#4a7c7c]" },
  { icon: "◆", color: "from-rose-500/20 to-rose-700/10", borderColor: "border-rose-600/30", accentColor: "text-[#8b5a6b]" },
  { icon: "✦", color: "from-amber-500/20 to-yellow-700/10", borderColor: "border-amber-600/30", accentColor: "text-[#9A7B4F]" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = FREQUENCY_COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/frequency",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function FrequencyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = FREQUENCY_COPY[locale];
  const LAYERS = copy.layers.map((layer, i) => ({ ...layer, ...LAYER_STYLES[i] }));
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const L0 = LAYERS[0] as any;
  const L1 = LAYERS[1] as any;
  const L2 = LAYERS[2] as any;
  const L3 = LAYERS[3] as any;
  const L4 = LAYERS[4] as any;
  const L5 = LAYERS[5] as any;

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-700">
      <Header />

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* 背景動態波紋 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F9F7F2] via-[#F5F2EB] to-[#F9F7F2]" />
          {/* 同心圓波紋動畫 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-[#9A7B4F]/10 animate-[ping_4s_ease-out_infinite]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-[#9A7B4F]/15 animate-[ping_4s_ease-out_1s_infinite]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border border-[#9A7B4F]/20 animate-[ping_4s_ease-out_2s_infinite]" />
          </div>
          {/* 中心光點 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#9A7B4F]/60 shadow-[0_0_60px_20px_rgba(154,123,79,0.12)]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#9A7B4F] tracking-[0.4em] text-xs md:text-sm uppercase mb-6">
            Exclusive Technology
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#4a5548] mb-4 leading-tight">
            MUNI Frequency
            <br />
            <span className="bg-gradient-to-r from-[#9A7B4F] via-[#C4A265] to-[#9A7B4F] bg-clip-text text-transparent">
              Resonance™
            </span>
          </h1>
          <p className="font-serif text-xl md:text-2xl text-stone-500 mt-6 mb-8">
            {copy.heroTitle}
          </p>
          <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base whitespace-pre-line">
            {copy.heroBody}
          </p>
          <p className="text-[#9A7B4F]/80 max-w-xl mx-auto mt-6 text-sm italic font-serif leading-relaxed">
            {copy.heroQuote}
          </p>

          {/* 向下滾動提示 */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-[#9A7B4F]/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── 六層架構導覽 ─── */}
      <section className="py-20 px-4 border-t border-stone-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#9A7B4F] tracking-[0.3em] text-xs uppercase mb-4">
            Six-Layer Architecture
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-[#4a5548] mb-4">
            {copy.overviewTitle}
          </h2>
          <p className="text-center text-stone-500 max-w-2xl mx-auto mb-16 text-sm md:text-base">
            {copy.overviewLead}
          </p>

          {/* 六層概覽卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {LAYERS.map((layer) => (
              <a
                key={layer.id}
                href={`#layer-${layer.id}`}
                className={`group relative p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#9A7B4F]/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl text-[#9A7B4F]">
                    {layer.icon}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">
                    0{layer.id}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-[#4a5548] mb-1">
                  {layer.title}
                </h3>
                <p className="text-xs text-stone-500">{layer.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 第一層：MUNI 基頻 ─── */}
      <section
        id="layer-1"
        className="py-24 px-4 border-t border-stone-200 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl text-[#9A7B4F]">◉</span>
            <div>
              <p className="text-xs text-[#9A7B4F] tracking-[0.2em] uppercase font-mono">
                Layer 01
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#4a5548]">
                {L0.title}
              </h2>
              <p className="text-stone-400 mt-1">{L0.subtitle}</p>
            </div>
          </div>

          {/* 核心提問 */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-stone-200 shadow-sm mb-12">
            <p className="text-[#9A7B4F] text-xs tracking-widest uppercase mb-4">
              {copy.layer1QuestionTitle}
            </p>
            <p className="font-serif text-lg md:text-xl text-stone-600 leading-relaxed italic">
              「{L0.question}」
            </p>
            <p className="text-stone-500 mt-6 leading-relaxed text-sm md:text-base">
              {L0.answer}
            </p>
          </div>

          {/* 實驗歷程 */}
          <h3 className="font-serif text-xl text-[#4a5548] mb-6">
            {copy.layer1ExperimentTitle}
          </h3>
          <div className="grid gap-4 mb-12">
            {L0.experiments.map((exp: any, i: number) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-stone-200 hover:border-[#9A7B4F]/30 transition-colors shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#9A7B4F]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#9A7B4F] text-xs font-mono font-bold">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <p className="text-[#4a5548] font-medium text-sm">{exp.name}</p>
                  <p className="text-stone-500 text-sm mt-1">{exp.result}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 發現結果 */}
          <div className="bg-[#F5F2EB] rounded-2xl p-8 border border-[#9A7B4F]/20 mb-12">
            <h3 className="font-serif text-xl text-[#9A7B4F] mb-4">
              {copy.layer1DiscoveryTitle}
            </h3>
            <p className="text-stone-600 leading-relaxed mb-6 text-sm md:text-base">
              {copy.layer1DiscoveryBody}
            </p>
            <blockquote className="border-l-2 border-[#9A7B4F]/50 pl-4 text-stone-500 italic text-sm">
              {L0.quote}
            </blockquote>
          </div>

          {/* 五大核心特徵 */}
          <h3 className="font-serif text-xl text-[#4a5548] mb-6">
            {copy.layer1TraitsTitle}
          </h3>
          <div className="grid md:grid-cols-5 gap-3 mb-8">
            {L0.traits.map((trait: any, i: number) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-stone-200 text-center shadow-sm"
              >
                <p className="text-[#9A7B4F] font-serif font-bold text-sm mb-2">
                  {trait.name}
                </p>
                <p className="text-stone-500 text-xs leading-relaxed">
                  {trait.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-stone-500 text-sm text-center">
            {copy.layer1TraitsNote}
          </p>
        </div>
      </section>

      {/* ─── 第二層：泛音展開 ─── */}
      <section
        id="layer-2"
        className="py-24 px-4 border-t border-stone-200 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl text-[#4a5548]">◎</span>
            <div>
              <p className="text-xs text-[#4a5548]/70 tracking-[0.2em] uppercase font-mono">
                Layer 02
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#4a5548]">
                {L1.title}
              </h2>
              <p className="text-stone-400 mt-1">{L1.subtitle}</p>
            </div>
          </div>

          <p className="text-stone-600 leading-relaxed mb-10 max-w-3xl text-sm md:text-base">
            {L1.description}
          </p>

          {/* 三大特性 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {L1.properties.map((prop: any, i: number) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm"
              >
                <p className="text-[#4a5548] font-serif font-bold mb-3">
                  {prop.name}
                </p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 多尺度共振光譜 */}
          <h3 className="font-serif text-xl text-[#4a5548] mb-6">
            {copy.layer2SpectrumTitle}
          </h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-3 px-4 text-[#4a5548]/80 font-medium">
                    {copy.layer2TableHeaders.level}
                  </th>
                  <th className="text-left py-3 px-4 text-[#4a5548]/80 font-medium">
                    {copy.layer2TableHeaders.system}
                  </th>
                  <th className="text-left py-3 px-4 text-[#4a5548]/80 font-medium">
                    {copy.layer2TableHeaders.range}
                  </th>
                </tr>
              </thead>
              <tbody>
                {L1.scales.map((s: any, i: number) => (
                  <tr key={i} className="border-b border-stone-200">
                    <td className="py-3 px-4 text-[#4a5548] font-medium">
                      {s.level}
                    </td>
                    <td className="py-3 px-4 text-stone-400">{s.system}</td>
                    <td className="py-3 px-4 text-stone-400">{s.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 聲流學 */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200">
            <h4 className="font-serif text-lg text-[#4a5548] mb-4">
              {copy.layer2CymaticsTitle}
            </h4>
            <p className="text-stone-400 leading-relaxed text-sm md:text-base">
              {copy.layer2CymaticsBefore} 60–90% {copy.layer2CymaticsAfter}
            </p>
          </div>

          <blockquote className="border-l-2 border-[#4a5548]/30 pl-4 text-stone-400 italic mt-8 text-sm">
            {L1.quote}
          </blockquote>
        </div>
      </section>

      {/* ─── 第三層：多頻疊加協同 ─── */}
      <section
        id="layer-3"
        className="py-24 px-4 border-t border-stone-200 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl text-[#6b5b7b]">◈</span>
            <div>
              <p className="text-xs text-[#6b5b7b]/70 tracking-[0.2em] uppercase font-mono">
                Layer 03
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#4a5548]">
                {L2.title}
              </h2>
              <p className="text-stone-400 mt-1">{L2.subtitle}</p>
            </div>
          </div>

          <p className="text-stone-600 leading-relaxed mb-10 max-w-3xl text-sm md:text-base">
            {L2.description}
          </p>

          {/* 對比表格 */}
          <h3 className="font-serif text-xl text-[#4a5548] mb-6">
            {copy.layer3TableTitle}
          </h3>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-3 px-4 text-[#6b5b7b]/80 font-medium">
                    {copy.layer3TableHeaders.dimension}
                  </th>
                  <th className="text-left py-3 px-4 text-stone-500 font-medium">
                    {copy.layer3TableHeaders.single}
                  </th>
                  <th className="text-left py-3 px-4 text-[#6b5b7b]/80 font-medium">
                    {copy.layer3TableHeaders.muni}
                  </th>
                </tr>
              </thead>
              <tbody>
                {L2.comparison.map((c: any, i: number) => (
                  <tr key={i} className="border-b border-stone-200">
                    <td className="py-3 px-4 text-[#4a5548] font-medium">
                      {c.dimension}
                    </td>
                    <td className="py-3 px-4 text-stone-500">{c.single}</td>
                    <td className="py-3 px-4 text-stone-600">{c.muni}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 協同本質 */}
          <div className="bg-gradient-to-br from-violet-900/15 to-violet-800/5 rounded-2xl p-8 border border-violet-600/15 mb-8">
            <h4 className="font-serif text-lg text-violet-300 mb-4">
              {copy.layer3EssenceTitle}
            </h4>
            <p className="text-stone-400 leading-relaxed text-sm md:text-base mb-4">
              {copy.layer3EssenceBody}
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {copy.layer3EssencePoints.map((point) => (
                <div key={point} className="p-3 rounded-lg bg-white">
                  <p className="text-stone-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="border-l-2 border-[#6b5b7b]/30 pl-4 text-stone-400 italic text-sm">
            {L2.quote}
          </blockquote>
        </div>
      </section>

      {/* ─── 第四層：神經系統通道 ─── */}
      <section
        id="layer-4"
        className="py-24 px-4 border-t border-stone-200 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl text-[#4a7c7c]">◇</span>
            <div>
              <p className="text-xs text-[#4a7c7c]/70 tracking-[0.2em] uppercase font-mono">
                Layer 04
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#4a5548]">
                {L3.title}
              </h2>
              <p className="text-stone-400 mt-1">{L3.subtitle}</p>
            </div>
          </div>

          <p className="text-stone-600 leading-relaxed mb-10 max-w-3xl text-sm md:text-base">
            {L3.description}
          </p>

          {/* 三條通道 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {L3.channels.map((ch: any, i: number) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm"
              >
                <div className="text-3xl mb-3">{ch.icon}</div>
                <h4 className="font-serif text-lg text-[#4a5548] mb-1">
                  {ch.name}
                </h4>
                <p className="text-[#4a7c7c]/70 text-xs mb-4">{ch.subtitle}</p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {ch.detail}
                </p>
              </div>
            ))}
          </div>

          {/* 三條通道交匯 */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200 text-center">
            <h4 className="font-serif text-lg text-[#4a5548] mb-4">
              {copy.layer4ChannelsTitle}
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
              {copy.layer4ChannelLabels.map((item, idx) => (
                <div key={item.name} className="contents">
                  {idx > 0 && <span className="text-stone-600 hidden md:block">×</span>}
                  <div className="text-center">
                    <p className="text-[#4a7c7c] text-sm font-medium">{item.name}</p>
                    <p className="text-stone-500 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <blockquote className="text-stone-400 italic text-sm max-w-xl mx-auto">
              {L3.quote}
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── 第五層：物質共振載體 ─── */}
      <section
        id="layer-5"
        className="py-24 px-4 border-t border-stone-200 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl text-[#9A7B4F]">◆</span>
            <div>
              <p className="text-xs text-[#9A7B4F]/70 tracking-[0.2em] uppercase font-mono">
                Layer 05
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#4a5548]">
                {L4.title}
              </h2>
              <p className="text-stone-400 mt-1">{L4.subtitle}</p>
            </div>
          </div>

          <p className="text-stone-600 leading-relaxed mb-10 max-w-3xl text-sm md:text-base">
            {L4.description}
          </p>

          {/* 產品共振矩陣 */}
          <h3 className="font-serif text-xl text-[#4a5548] mb-6">
            {copy.layer5MatrixTitle}
          </h3>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-3 px-4 text-[#9A7B4F]/80 font-medium">
                    {copy.layer5TableHeaders.path}
                  </th>
                  <th className="text-left py-3 px-4 text-[#9A7B4F]/80 font-medium">
                    {copy.layer5TableHeaders.products}
                  </th>
                  <th className="text-left py-3 px-4 text-[#9A7B4F]/80 font-medium">
                    {copy.layer5TableHeaders.dimension}
                  </th>
                </tr>
              </thead>
              <tbody>
                {L4.matrix.map((m: any, i: number) => (
                  <tr key={i} className="border-b border-stone-200">
                    <td className="py-3 px-4 text-[#4a5548] font-medium">
                      {m.path}
                    </td>
                    <td className="py-3 px-4 text-stone-600">{m.products}</td>
                    <td className="py-3 px-4 text-stone-400">{m.dimension}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 產品系統簡介 */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {copy.layer5Systems.map((sys) => (
              <div key={sys.title} className="p-6 rounded-2xl bg-white border border-stone-200">
                <h4 className="font-serif text-base text-rose-300 mb-3">{sys.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{sys.body}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-[#9A7B4F]/30 pl-4 text-stone-400 italic text-sm">
            {L4.quote}
          </blockquote>
        </div>
      </section>

      {/* ─── 第六層：意識維度 ─── */}
      <section
        id="layer-6"
        className="py-24 px-4 border-t border-stone-200 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl text-[#9A7B4F]">✦</span>
            <div>
              <p className="text-xs text-[#9A7B4F]/70 tracking-[0.2em] uppercase font-mono">
                Layer 06
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#4a5548]">
                {L5.title}
              </h2>
              <p className="text-stone-400 mt-1">{L5.subtitle}</p>
            </div>
          </div>

          <p className="font-serif text-lg md:text-xl text-stone-600 leading-relaxed mb-10 italic">
            「{L5.description}」
          </p>

          {/* 三個傳統視角 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {L5.perspectives.map((p: any, i: number) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#F5F2EB] border border-stone-200 shadow-sm"
              >
                <p className="text-[#9A7B4F] font-serif font-bold mb-3">
                  {p.tradition}
                </p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {p.insight}
                </p>
              </div>
            ))}
          </div>

          {/* 四個層面的統一 */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200 mb-8">
            <h4 className="font-serif text-lg text-[#4a5548] mb-6 text-center">
              {copy.layer6Title}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {L5.levels.map((l: any, i: number) => (
                <div key={i} className="text-center p-4">
                  <p className="text-[#9A7B4F]/80 text-xs tracking-wider uppercase mb-2">
                    {l.plane}
                  </p>
                  <p className="text-[#4a5548] font-serif">{l.expression}</p>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="border-l-2 border-[#9A7B4F]/30 pl-4 text-stone-400 italic text-sm">
            {L5.quote}
          </blockquote>
        </div>
      </section>

      {/* ─── 六層總覽 ─── */}
      <section className="py-24 px-4 border-t border-stone-200 bg-gradient-to-b from-[#F9F7F2] to-[#F5F2EB]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#9A7B4F] tracking-[0.3em] text-xs uppercase mb-4">
            Overview
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-[#4a5548] mb-12">
            {copy.summaryTitle}
          </h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#9A7B4F]/20">
                  <th className="text-left py-3 px-4 text-[#9A7B4F] font-medium w-16">
                    {copy.summaryHeaders.level}
                  </th>
                  <th className="text-left py-3 px-4 text-[#9A7B4F] font-medium">
                    {copy.summaryHeaders.name}
                  </th>
                  <th className="text-left py-3 px-4 text-[#9A7B4F] font-medium">
                    {copy.summaryHeaders.core}
                  </th>
                </tr>
              </thead>
              <tbody>
                {copy.summaryRows.map((row, idx) => ({ ...row, id: idx + 1 })).map((row) => (
                  <tr key={row.id} className="border-b border-stone-200">
                    <td className="py-3 px-4 text-[#9A7B4F] font-mono font-bold">
                      0{row.id}
                    </td>
                    <td className="py-3 px-4 text-[#4a5548] font-serif font-medium">
                      {row.name}
                    </td>
                    <td className="py-3 px-4 text-stone-400">{row.core}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 祝福區塊 */}
          <div className="relative my-20 py-16 px-6 md:px-12 rounded-2xl bg-[#F5F2EB] border border-[#9A7B4F]/15 overflow-hidden">
            {/* 背景裝飾 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#9A7B4F]/5 blur-3xl" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p className="text-[#9A7B4F] tracking-[0.3em] text-xs uppercase mb-4">
                Frequency × Blessing
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-[#4a5548] mb-6">
                {copy.blessingTitle}
              </h3>
              <p className="text-stone-400 leading-relaxed mb-6 text-sm md:text-base">
                {copy.blessingP1}
              </p>
              <p className="text-stone-400 leading-relaxed mb-8 text-sm md:text-base">
                {copy.blessingP2}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {copy.blessingCards.map((card, idx) => (
                  <div
                    key={card.title}
                    className={`bg-white rounded-xl p-5 border ${idx === 2 ? "border-[#9A7B4F]/20" : "border-stone-200"}`}
                  >
                    <p className="text-[#9A7B4F] font-serif text-lg mb-2">{card.title}</p>
                    <p className="text-stone-500 text-sm">{card.body}</p>
                  </div>
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-[#9A7B4F] italic leading-relaxed">
                {copy.blessingQuote}
              </p>
            </div>
          </div>

          {/* 結語 */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-serif text-xl md:text-2xl text-[#4a5548] leading-relaxed mb-4">
              {copy.closingLines[0]}
              <br />
              {copy.closingLines[1]}
            </p>
            <p className="text-stone-500 text-sm mb-2">{copy.closingLines[2]}</p>
            <p className="text-stone-500 text-sm">{copy.closingLines[3]}</p>
            <p className="font-serif text-[#9A7B4F] mt-6 italic">
              {copy.closingLines[4]}
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 px-4 bg-[#F5F2EB]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-[#4a5548] mb-4">
            {copy.ctaTitle}
          </h2>
          <p className="text-stone-400 mb-8 text-sm md:text-base whitespace-pre-line">
            {copy.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://ai.munione.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-8 py-3 font-medium transition-all shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {copy.ctaConsultant}
            </a>
            <Link
              href={localeHref(locale, "/systems")}
              className="inline-flex items-center gap-2 text-stone-500 hover:text-[#4a5548] border border-stone-300 hover:border-stone-400 rounded-full px-8 py-3 font-medium transition-all"
            >
              {copy.ctaSystems}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

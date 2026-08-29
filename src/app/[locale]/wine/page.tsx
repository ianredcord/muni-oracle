import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FrequencyBadge from "@/components/FrequencyBadge";
import { WINE_COPY, type WineCopy } from "@/content/pages/wine";
import { isLocale, localeHref } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

const WINE_IMAGES: Record<string, string> = {
  granit960: "/images/products/RPvhSmRURoIwGGHT.jpg",
  adamantis: "/images/products/XIClwNZLYrOfPbsr.png",
  "sabiona-sylvaner": "/images/products/BWtTAqGcgQhogaPd.png",
  "aristos-zero": "/images/products/VWmuefWQeOLAHbvl.png",
  "aristos-sylvaner": "/images/products/QqQqJuvsRoGlPCvy.png",
  "aristos-pinot-noir": "/images/products/AARWPVqMSRxruIYq.png",
  "kerner-classic": "/images/products/fIeLzuZcvmXkOcYh.png",
  "pinot-nero-classic": "/images/products/XvXuYSjFGXFUmasx.png",
  "isaras-brut": "/images/products/PuTObeQvaLbykmPZ.png",
};

const HIGHLIGHT_IDS = ["granit960", "adamantis"];

const STAT_VALUES = ["135", "150", "14", "1,000m", "8", "60%"];

const FACTOR_STYLES = [
  { bg: "from-amber-50 to-yellow-50", border: "border-amber-100", iconBg: "bg-amber-100", iconText: "text-amber-700", path: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" },
  { bg: "from-emerald-50 to-teal-50", border: "border-emerald-100", iconBg: "bg-emerald-100", iconText: "text-emerald-700", path: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" },
  { bg: "from-stone-50 to-orange-50", border: "border-stone-200", iconBg: "bg-stone-100", iconText: "text-stone-700", path: "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18a.94.94 0 00-.662.274.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" },
  { bg: "from-green-50 to-lime-50", border: "border-green-100", iconBg: "bg-green-100", iconText: "text-green-700", path: "M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" },
  { bg: "from-sky-50 to-blue-50", border: "border-sky-100", iconBg: "bg-sky-100", iconText: "text-sky-700", path: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" },
  { bg: "from-violet-50 to-purple-50", border: "border-violet-100", iconBg: "bg-violet-100", iconText: "text-violet-700", path: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const AWARD_GROUPS = [
  {
    wine: "Cuvée Adamantis 2021",
    awards: [
      { org: "Bibenda", score: "5 Grappoli", icon: "🏆" },
      { org: "Decanter World Wine Awards", score: "95", icon: "🥇", points: true },
      { org: "Falstaff", score: "95", icon: "🏅", points: true },
      { org: "VITAE-AIS", score: "4 Viti", icon: "🍇" },
    ],
  },
  {
    wine: "Aristos Kerner 2024",
    awards: [
      { org: "James Suckling", score: "94", icon: "🥇", points: true },
      { org: "Doctor Wine", score: "96 (Faccino)", icon: "🏆", points: true },
      { org: "Bibenda", score: "5 Grappoli", icon: "🏆" },
      { org: "Gambero Rosso", score: "Tre Bicchieri", icon: "🥂" },
    ],
  },
  {
    wine: "Sabiona Sylvaner",
    awards: [
      { org: "Doctor Wine", score: "Best Sylvaner 2025", icon: "🏆" },
      { org: "Doctor Wine", score: "96 (Faccino)", icon: "🥇", points: true },
    ],
  },
  {
    wine: "Aristos Sylvaner 2023",
    awards: [{ org: "VITAE-AIS", score: "4 Viti", icon: "🍇" }],
  },
  {
    wine: "Aristos Pinot Noir 2021",
    awards: [{ org: "Decanter", score: "Silver Medal", icon: "🥈" }],
  },
];

const typeLabel = (type: string, copy: WineCopy) => {
  switch (type) {
    case "white":
      return { text: copy.typeWhite, color: "bg-amber-100 text-amber-700 border-amber-200" };
    case "red":
      return { text: copy.typeRed, color: "bg-rose-100 text-rose-700 border-rose-200" };
    case "sparkling":
      return { text: copy.typeSparkling, color: "bg-sky-100 text-sky-700 border-sky-200" };
    default:
      return { text: type, color: "bg-stone-100 text-stone-700 border-stone-200" };
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = WINE_COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/wine",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function WinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = WINE_COPY[locale];
  const WINES = copy.wines.map((w) => ({
    ...w,
    image: WINE_IMAGES[w.id],
    highlight: HIGHLIGHT_IDS.includes(w.id),
  }));

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* Hero — 深色背景，呼應葡萄酒的深邃與山地的壯闊 */}
      <section className="relative pt-20 pb-24 px-4 bg-gradient-to-b from-[#F9F7F2] to-[#F5F2EB] overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#9A7B4F]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#9A7B4F]/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Link
            href={localeHref(locale, "/systems")}
            className="inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-[#4a5548] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {copy.backToSystems}
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-sm tracking-[0.4em] text-[#9A7B4F] mb-4">
                {copy.eyebrow}
              </p>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-[#4a5548]">{copy.heroLine1}</span>
                <br />
                <span className="text-[#4a5548]">{copy.heroLine2}</span>
                <br />
                <span className="text-[#9A7B4F]">{copy.heroLine3}</span>
              </h1>
              <p className="text-stone-500 text-lg leading-relaxed max-w-lg">
                {copy.heroBody}
              </p>
            </div>

            <div className="relative w-60 h-80 md:w-72 md:h-96 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9A7B4F]/10 to-[#9A7B4F]/5 rounded-full blur-3xl" />
              <Image
                src="/images/products/RPvhSmRURoIwGGHT.jpg"
                alt={copy.heroImageAlt}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 240px, 288px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MUNI × Kellerei 合作宣言 */}
      <section className="py-20 px-4 bg-[#F5F2EB]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-6">
              {copy.collabEyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-6 leading-relaxed whitespace-pre-line">
              {copy.collabTitle}
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-left md:text-center">
              <p>
                {copy.collabP1Before}
                <strong className="text-[#4a5548]">{copy.collabP1Strong}</strong>
                {copy.collabP1After}
              </p>
              <p>
                {copy.collabP2Before}
                <strong className="text-[#4a5548]">{copy.collabP2Strong}</strong>
                {copy.collabP2After}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kellerei Eisacktal 品牌故事 */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              {copy.wineryEyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#4a5548] mb-4">
              {copy.wineryTitle}
            </h2>
            <p className="text-stone-500 text-lg">
              {copy.winerySubtitle}
            </p>
          </div>

          {/* YouTube 影片嵌入 */}
          <div className="mb-16">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/UkJMEmK2huo?rel=0&modestbranding=1"
                title="Kellerei Eisacktal - Cantina Valle Isarco"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="text-center text-stone-400 text-sm mt-4">
              {copy.videoCaption}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <blockquote className="border-l-4 border-amber-400 pl-6 py-2 mb-6">
                <p className="text-stone-600 italic leading-relaxed text-lg">
                  {copy.wineryQuote}
                </p>
                <footer className="mt-3 text-sm text-stone-400">{copy.wineryQuoteSource}</footer>
              </blockquote>

              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  {copy.wineryP1.a}
                  <strong className="text-[#4a5548]">{copy.wineryP1.s1}</strong>
                  {copy.wineryP1.b}
                  <strong className="text-[#4a5548]">{copy.wineryP1.s2}</strong>
                  {copy.wineryP1.c}
                  <strong className="text-[#4a5548]">{copy.wineryP1.s3}</strong>
                  {copy.wineryP1.d}
                </p>
                <p>
                  {copy.wineryP2.a}
                  <strong className="text-[#4a5548]">{copy.wineryP2.s1}</strong>
                  {copy.wineryP2.b}
                  <strong className="text-[#4a5548]">{copy.wineryP2.s2}</strong>
                  {copy.wineryP2.c}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* 關鍵數據 */}
              <div className="bg-[#F5F2EB] rounded-2xl p-6 border border-stone-200">
                <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-4">
                  {copy.statsTitle}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                  {copy.stats.map((label, idx) => (
                    <div key={label}>
                      <p className="text-2xl md:text-3xl font-bold text-[#9A7B4F]">
                        {STAT_VALUES[idx]}
                      </p>
                      <p className="text-stone-500 text-xs mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 歷史時間線 */}
              <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-4">
                  {copy.timelineTitle}
                </h3>
                <div className="space-y-3">
                  {copy.timeline.map((item) => (
                    <div key={item.year} className="flex items-start gap-3">
                      <span className="inline-block px-2.5 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-medium whitespace-nowrap border border-amber-200 mt-0.5">
                        {item.year}
                      </span>
                      <p className="text-stone-600 text-sm">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 正面能量因素 */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-3">
                {copy.factorsEyebrow}
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#4a5548]">
                {copy.factorsTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {copy.factors.map((factor, idx) => (
                <div
                  key={factor.title}
                  className={`bg-gradient-to-br ${FACTOR_STYLES[idx].bg} rounded-2xl p-6 border ${FACTOR_STYLES[idx].border}`}
                >
                  <div className={`w-12 h-12 ${FACTOR_STYLES[idx].iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <svg className={`w-6 h-6 ${FACTOR_STYLES[idx].iconText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={FACTOR_STYLES[idx].path} />
                    </svg>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#4a5548] mb-2">{factor.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {factor.before}
                    <strong className="text-[#4a5548]">{factor.strong}</strong>
                    {factor.after}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 社區精神引言 */}
          <div className="bg-[#F5F2EB] rounded-2xl p-8 md:p-10 text-center border border-stone-200">
            <p className="text-[#9A7B4F] text-sm tracking-[0.2em] mb-4">VISION & MISSION</p>
            <blockquote className="text-lg md:text-xl leading-relaxed text-stone-600 max-w-3xl mx-auto italic">
              {copy.communityQuote.before}
              <strong className="text-[#4a5548] not-italic">{copy.communityQuote.strong}</strong>
              {copy.communityQuote.after}
            </blockquote>
            <p className="text-stone-400 text-sm mt-4">— Kellerei Eisacktal · Cantina Valle Isarco</p>
          </div>
        </div>
      </section>

      {/* 礦物能量與療癒 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              {copy.mineralEyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              {copy.mineralTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 border border-stone-200">
              <div className="text-3xl mb-4">⛰️</div>
              <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                {copy.mineralCard1Title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {copy.mineralCard1.a}
                <strong className="text-[#4a5548]">{copy.mineralCard1.s1}</strong>
                {copy.mineralCard1.b}
                <strong className="text-[#4a5548]">{copy.mineralCard1.s2}</strong>
                {copy.mineralCard1.c}
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-rose-50 rounded-2xl p-8 border border-violet-100">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                {copy.mineralCard2Title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {copy.mineralCard2.a}
                <strong className="text-[#4a5548]">{copy.mineralCard2.s1}</strong>
                {copy.mineralCard2.b}
                <strong className="text-[#4a5548]">{copy.mineralCard2.s2}</strong>
                {copy.mineralCard2.c}
                <strong className="text-[#4a5548]">{copy.mineralCard2.s3}</strong>
                {copy.mineralCard2.d}
              </p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F2EB] rounded-2xl p-8 text-center border border-stone-200">
            <p className="text-[#9A7B4F] text-sm tracking-[0.2em] mb-3">{copy.philosophyLabel}</p>
            <p className="text-lg leading-relaxed text-stone-600 max-w-2xl mx-auto">
              {copy.philosophyBody.a}
              <strong className="text-[#4a5548]">{copy.philosophyBody.s1}</strong>
              {copy.philosophyBody.b}
            </p>
          </div>
        </div>
      </section>

      {/* 旗艦酒款 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              {copy.flagshipEyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              {copy.flagshipTitle}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {copy.flagshipLead}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {WINES.filter((w) => w.highlight).map((wine) => {
              const label = typeLabel(wine.type, copy);
              return (
                <div
                  key={wine.id}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-stone-200"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="relative w-32 h-48 sm:w-40 sm:h-56 flex-shrink-0 mx-auto sm:mx-0">
                      <Image
                        src={wine.image}
                        alt={wine.name}
                        fill
                        className="object-contain drop-shadow-lg"
                        sizes="(max-width: 640px) 128px, 160px"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-[#9A7B4F]/10 text-[#9A7B4F] rounded text-xs border border-[#9A7B4F]/20">
                          {wine.seriesZh}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-xs border ${label.color}`}>
                          {label.text}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#4a5548] mb-1">
                        {wine.name}
                      </h3>
                      <p className="text-stone-400 text-sm mb-1">{wine.nameZh} · {wine.vintage}</p>
                      <p className="text-stone-400 text-xs mb-4">{wine.grape} · {wine.altitude}</p>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        {wine.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 全系列酒款 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              {copy.collectionEyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              {copy.collectionTitle}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {copy.collectionLead}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WINES.filter((w) => !w.highlight).map((wine) => {
              const label = typeLabel(wine.type, copy);
              return (
                <div
                  key={wine.id}
                  className="group bg-gradient-to-b from-stone-50 to-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-56 bg-gradient-to-b from-stone-100 to-stone-50 flex items-center justify-center overflow-hidden">
                    <div className="relative w-24 h-44">
                      <Image
                        src={wine.image}
                        alt={wine.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                        sizes="96px"
                      />
                    </div>
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="px-2 py-0.5 bg-white/90 text-stone-600 rounded text-xs border border-stone-200 backdrop-blur-sm">
                        {wine.seriesZh}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-xs border ${label.color}`}>
                        {label.text}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-1">
                      {wine.name}
                    </h3>
                    <p className="text-xs text-stone-400 mb-1">
                      {wine.nameZh} · {wine.vintage}
                    </p>
                    <p className="text-xs text-[#9A7B4F] mb-3">{wine.grape} · {wine.altitude}</p>
                    <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
                      {wine.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* MUNI 品飲療癒儀式 */}
      <section className="py-20 px-4 bg-[#F5F2EB]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.4em] text-[#9A7B4F] mb-4">
              {copy.ritualEyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              {copy.ritualTitle}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {copy.ritualLead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {copy.rituals.map((ritual, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{ritual.icon}</span>
                  <div>
                    <span className="text-xs text-[#9A7B4F] tracking-wider">
                      STEP {ritual.step}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#4a5548]">
                      {ritual.title}
                    </h3>
                  </div>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {ritual.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 國際獎項認證 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              {copy.awardsEyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              {copy.awardsTitle}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {copy.awardsLead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWARD_GROUPS.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-stone-50 to-amber-50/30 rounded-2xl p-6 border border-stone-100 shadow-sm"
              >
                <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-4">
                  {item.wine}
                </h3>
                <div className="space-y-2.5">
                  {item.awards.map((award, aidx) => (
                    <div key={aidx} className="flex items-start gap-2">
                      <span className="text-base flex-shrink-0">{award.icon}</span>
                      <div>
                        <p className="text-sm font-medium text-[#4a5548]">{award.org}</p>
                        <p className="text-xs text-[#9A7B4F]">
                          {"points" in award && award.points
                            ? `${award.score} ${copy.awardPoints}`
                            : award.score}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-6">
            {copy.ctaTitle}
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 whitespace-pre-line">
            {copy.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ai.munione.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-500 hover:text-[#4a5548] hover:border-stone-400 rounded-full px-8 py-3.5 text-lg font-medium transition-all"
            >
              {copy.ctaSystems}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Frequency Resonance™ 技術支持 */}
      <FrequencyBadge variant="light" full />

      <Footer />
    </div>
  );
}

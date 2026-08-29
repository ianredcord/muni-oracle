import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FrequencyBadge from "@/components/FrequencyBadge";
import { CHOCOLATE_COPY } from "@/content/pages/chocolate";
import { isLocale, localeHref } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

const PRODUCT_IMAGES = [
  "/images/chocolate/myway-front.jpg",
  "/images/chocolate/weekend-front.jpg",
  "/images/chocolate/bluemoon-front.jpg",
];

const PAIRING_STYLES = [
  { color: "from-violet-50 to-purple-50", border: "border-violet-200" },
  { color: "from-amber-50 to-yellow-50", border: "border-amber-200" },
  { color: "from-teal-50 to-emerald-50", border: "border-teal-200" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = CHOCOLATE_COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/chocolate",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function ChocolatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = CHOCOLATE_COPY[locale];
  const products = copy.products.map((p, i) => ({ ...p, image: PRODUCT_IMAGES[i] }));
  const pairings = copy.pairings.map((p, i) => ({ ...p, ...PAIRING_STYLES[i] }));

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* Hero */}
      <section className="relative pt-20 pb-24 px-4 bg-gradient-to-b from-[#F9F7F2] to-[#F5F0EB] overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Link
            href={localeHref(locale, "/systems")}
            className="inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-600 transition-colors mb-8"
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
                <span className="text-stone-800">{copy.heroLine2}</span>
                <br />
                <span className="text-[#9A7B4F]">{copy.heroLine3}</span>
              </h1>
              <p className="text-stone-500 text-lg leading-relaxed max-w-lg">
                {copy.heroBody}
              </p>
            </div>

            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-2xl" />
              <Image
                src="/images/chocolate/cecilia-portrait.jpg"
                alt={copy.portraitAlt}
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MUNI × CECILIA 合作宣言 */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#3a2a20] to-[#F9F7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100">
            <p className="text-sm tracking-[0.3em] text-amber-600 mb-6">
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

      {/* Cecilia Rabassi 品牌故事 */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              {copy.makerEyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#4a5548] mb-4">
              {copy.makerName}
            </h2>
            <p className="text-stone-500 text-lg">
              {copy.makerRole}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/chocolate/cecilia-tuscany.jpg"
                alt={copy.tuscanyAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <blockquote className="border-l-4 border-amber-400 pl-6 py-2">
                <p className="text-stone-600 italic leading-relaxed text-lg">
                  {copy.makerQuote}
                </p>
                <footer className="mt-3 text-sm text-stone-400">{copy.makerQuoteSource}</footer>
              </blockquote>

              <div className="space-y-4 text-stone-600 leading-relaxed">
                {copy.makerParagraphs.map((para) => (
                  <p key={para.before}>
                    {para.before}
                    {para.strong && (
                      <strong className="text-[#4a5548]">{para.strong}</strong>
                    )}
                    {para.middle}
                    {para.strong2 && (
                      <strong className="text-[#4a5548]">{para.strong2}</strong>
                    )}
                    {para.after}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 雪花石的秘密 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              {copy.alabasterEyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              {copy.alabasterTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 border border-amber-100">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                {copy.alabasterCardTitle}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {copy.alabasterCardBefore}
                <strong className="text-[#4a5548]">{copy.alabasterCardStrong}</strong>
                {copy.alabasterCardAfter}
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-rose-50 rounded-2xl p-8 border border-violet-100">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-3">
                {copy.resonanceCardTitle}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {copy.resonanceCardBefore}
                <strong className="text-[#4a5548]">{copy.resonanceCardStrong1}</strong>
                {copy.resonanceCardMiddle}
                <strong className="text-[#4a5548]">{copy.resonanceCardStrong2}</strong>
                {copy.resonanceCardAfter}
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-8 text-center border border-stone-200 shadow-sm">
            <p className="text-[#9A7B4F] text-sm tracking-[0.2em] mb-3">{copy.ritualLabel}</p>
            <p className="text-lg leading-relaxed text-stone-600 max-w-2xl mx-auto">
              {copy.ritualBefore}
              <strong className="text-[#4a5548] font-semibold">{copy.ritualStrong}</strong>
              {copy.ritualAfter}
            </p>
          </div>
        </div>
      </section>

      {/* 獲獎紀錄 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              {copy.awardsEyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548]">
              {copy.awardsTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {copy.awards.map((award, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 bg-white rounded-xl p-5 border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium whitespace-nowrap border border-amber-200">
                  {award.year}
                </span>
                <div className="flex-1">
                  <h3 className="font-medium text-[#4a5548]">{award.title}</h3>
                  <p className="text-sm text-stone-500 mt-0.5">{award.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 產品展示 — 巧克力片 */}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-b from-stone-50 to-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-square bg-stone-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#9A7B4F] mb-2">{product.description}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{product.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* MUNI 巧克力儀式 */}
      <section className="py-20 px-4 bg-[#F5F0EB]">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* 搭配推薦 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
              {copy.pairingEyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
              {copy.pairingTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {pairings.map((pair, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${pair.color} rounded-2xl p-6 border ${pair.border}`}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">🍫</span>
                      <span className="font-medium text-[#4a5548]">{pair.chocolate}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">🫧</span>
                      <span className="font-medium text-[#4a5548]">{pair.oil}</span>
                    </div>
                    <p className="text-sm text-stone-500 pl-8">{pair.mood}</p>
                  </div>
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
              className="inline-flex items-center justify-center gap-2 bg-[#2a1f1a] hover:bg-[#1a1210] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-all shadow-md hover:shadow-lg"
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

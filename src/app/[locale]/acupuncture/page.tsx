import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ACUPUNCTURE_COPY } from "@/content/pages/acupuncture";
import { isLocale, localeHref } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FrequencyBadge from "@/components/FrequencyBadge";
import AcupunctureClient from "./AcupunctureClient";
import AboutTungsClient from "./AboutTungsClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = ACUPUNCTURE_COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/acupuncture",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function AcupuncturePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = ACUPUNCTURE_COPY[locale];

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 relative overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#4a5548]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#9A7B4F]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Link
            href={localeHref(locale, "/systems")}
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-[#4a5548] transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {copy.backToSystems}
          </Link>
          <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
            {copy.eyebrow}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#4a5548] mb-6 leading-tight">
            {copy.title}
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto mb-4 whitespace-pre-line">
            {copy.heroLead}
          </p>
          <p className="text-stone-400 text-sm max-w-xl mx-auto">
            {copy.heroSub}
          </p>

          {/* 頁面導航 */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <a href="#about" className="px-5 py-2 rounded-full bg-white border border-stone-200 text-sm text-stone-600 hover:border-[#4a5548] hover:text-[#4a5548] transition-all shadow-sm">
              {copy.navAbout}
            </a>
            <a href="#lineage" className="px-5 py-2 rounded-full bg-white border border-stone-200 text-sm text-stone-600 hover:border-[#4a5548] hover:text-[#4a5548] transition-all shadow-sm">
              {copy.navLineage}
            </a>
            <a href="#holographic" className="px-5 py-2 rounded-full bg-white border border-stone-200 text-sm text-stone-600 hover:border-[#4a5548] hover:text-[#4a5548] transition-all shadow-sm">
              {copy.navHolographic}
            </a>
            <a href="#acupoints" className="px-5 py-2 rounded-full bg-white border border-stone-200 text-sm text-stone-600 hover:border-[#4a5548] hover:text-[#4a5548] transition-all shadow-sm">
              {copy.navAcupoints}
            </a>
          </div>
        </div>
      </section>

      {/* 關於董氏奇穴 - Client Component for tabs */}
      <AboutTungsClient locale={locale} />

      {/* 穴位詳解 */}
      <section id="acupoints" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-3">{copy.atlasEyebrow}</p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#4a5548] mb-4">
            {copy.atlasTitle}
          </h2>
          <p className="text-stone-500 leading-relaxed max-w-xl mx-auto whitespace-pre-line">
            {copy.atlasLead}
          </p>
        </div>
        <Suspense fallback={<div className="text-center py-8 text-stone-400">{copy.atlasLoading}</div>}>
          <AcupunctureClient locale={locale} />
        </Suspense>
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
          <a
            href="https://ai.munione.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-all shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {copy.ctaButton}
          </a>
        </div>
      </section>

      {/* Frequency Resonance™ 技術支持 */}
      <FrequencyBadge variant="light" full />

      <Footer />
    </div>
  );
}

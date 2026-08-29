import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import FrequencyBadge from "@/components/FrequencyBadge";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SOMANIKS_COPY } from "@/content/pages/somaniks";
import { isLocale, localeHref } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";
import BodySupportSection from "./BodySupportSection";

const WHY_ICONS = ["M13 10V3L4 14h7v7l9-11h-7z", "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = SOMANIKS_COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/somaniks",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function SomaniksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = SOMANIKS_COPY[locale];

  return (
    <main className="min-h-screen bg-[#F9F7F2] text-stone-700">
      <Header />

      {/* ═══════════════════════════════════════════════════════════
          1. HERO — 感覺導向入口
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-100/20 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-stone-400 text-sm tracking-[0.3em] uppercase mb-5">
            {copy.eyebrow}
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-light text-[#4a5548] mb-5 leading-tight whitespace-pre-line">
            {copy.heroTitle}
          </h1>
          <p className="text-base md:text-lg text-stone-500 leading-relaxed max-w-xl mx-auto">
            {copy.heroLead}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. BODY SUPPORT SECTION — 核心互動區
      ═══════════════════════════════════════════════════════════ */}
      <Suspense fallback={null}>
        <BodySupportSection locale={locale} />
      </Suspense>

      {/* ═══════════════════════════════════════════════════════════
          3. 使用方式 — 三步驟（新增）
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone-400 text-sm tracking-[0.2em] uppercase mb-4">
            {copy.howEyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-10">
            {copy.howTitle}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
            {copy.steps.map((step, idx) => (
              <div key={step.title} className="contents">
                {idx > 0 && (
                  <>
                    <span className="hidden sm:block text-stone-300 text-2xl">→</span>
                    <span className="block sm:hidden text-stone-300 text-xl">↓</span>
                  </>
                )}
                <div className="flex flex-col items-center gap-3">
                  <span className="w-14 h-14 rounded-full bg-[#4a5548] text-white text-lg flex items-center justify-center font-serif">
                    {idx + 1}
                  </span>
                  <p className="text-[#4a5548] font-medium">{step.title}</p>
                  <p className="text-stone-400 text-xs max-w-[140px]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-400 text-sm leading-relaxed max-w-md mx-auto">
            {copy.howNote}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. SOMANIKS 介紹 — 感覺導向
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-4">
              {copy.whatEyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-4 whitespace-pre-line">
              {copy.whatTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              {copy.whatParagraphs.map((para) => (
                <p key={para.before} className="text-stone-500 leading-relaxed">
                  {para.before}
                  {para.strong && (
                    <span className="text-[#4a5548] font-medium">{para.strong}</span>
                  )}
                  {para.after}
                </p>
              ))}
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
                <Image
                  src="/images/products/dvsAGCGFoZGMTdyy.jpeg"
                  alt={copy.productImageAlt}
                  className="w-full h-72 object-cover"
                  width={800}
                  height={288}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
                <p className="text-stone-400 text-xs tracking-wider uppercase mb-1">
                  {copy.madeInLabel}
                </p>
                <p className="text-[#4a5548] text-base font-serif">
                  {copy.madeInValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. 為什麼有效 — 簡化版
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-4">
              {copy.whyEyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-4">
              {copy.whyTitle}
            </h2>
            <p className="text-stone-400 text-sm max-w-lg mx-auto">
              {copy.whyLead}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {copy.whyCards.map((card, idx) => (
              <div key={card.title} className="bg-white rounded-2xl p-7 border border-stone-100 shadow-sm text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-stone-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4a5548]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={WHY_ICONS[idx]} />
                  </svg>
                </div>
                <h3 className="text-[#4a5548] font-medium mb-2">{card.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. MUNI 哲學 — 簡化
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/50 to-transparent" />
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-stone-200 shadow-sm">
            <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-4 text-center">
              {copy.philosophyEyebrow}
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-[#4a5548] text-center mb-6 leading-relaxed whitespace-pre-line">
              {copy.philosophyTitle}
            </h3>
            <p className="text-stone-500 leading-relaxed text-center max-w-2xl mx-auto">
              {copy.philosophyBody}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          7. 認證 — 簡潔信任區
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-stone-400 text-xs tracking-[0.2em] uppercase mb-8">
            {copy.certEyebrow}
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {copy.certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-xl p-3 border border-stone-100 text-center shadow-sm"
              >
                <span className="text-2xl mb-1.5 block">{cert.icon}</span>
                <p className="text-stone-500 text-[10px] leading-tight">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-stone-400 text-xs">
            {copy.certNote}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          8. CTA — 開始你的第一步
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/60 to-[#F9F7F2]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-4">
            {copy.ctaTitle}
          </h2>
          <p className="text-stone-500 mb-8 leading-relaxed max-w-lg mx-auto">
            {copy.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#body-support"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#4a5548] text-white font-medium hover:bg-[#3a4538] transition-all shadow-sm"
            >
              {copy.ctaPick}
            </a>
            <Link
              href={localeHref(locale, "/draw")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548] hover:text-white transition-all"
            >
              {copy.ctaDraw}
            </Link>
          </div>
        </div>
      </section>

      <FrequencyBadge variant="light" full />
      <Footer />
    </main>
  );
}

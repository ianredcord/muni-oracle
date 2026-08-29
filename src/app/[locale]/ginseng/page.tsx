import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import FrequencyBadge from "@/components/FrequencyBadge";
import { Footer } from "@/components/Footer";
import { GINSENG_COPY } from "@/content/pages/ginseng";
import { isLocale, localeHref } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

const PRODUCT_STYLES = [
  {
    id: "huangdi",
    image: "/images/products/gysUvcCCEnjFDBeo.png",
    color: "bg-[#F5F2EB]",
    border: "border-[#9A7B4F]/20",
    accent: "text-[#9A7B4F]",
    badge: "bg-[#9A7B4F]/10 text-[#9A7B4F]",
  },
  {
    id: "jelly",
    image: "/images/products/AQvTbZBKXGbsevVA.jpg",
    color: "bg-white",
    border: "border-rose-200",
    accent: "text-rose-600",
    badge: "bg-rose-50 text-rose-600",
  },
  {
    id: "niuxi",
    image: "/images/products/hFZoeLbMClsLXvBn.png",
    color: "bg-[#F5F2EB]",
    border: "border-orange-200",
    accent: "text-orange-600",
    badge: "bg-orange-50 text-orange-600",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = GINSENG_COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/ginseng",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function GinsengPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = GINSENG_COPY[locale];
  const products = copy.products.map((p, i) => ({ ...p, ...PRODUCT_STYLES[i] }));

  return (
    <main className="min-h-screen bg-[#F9F7F2] text-stone-700">
      {/* Light Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href={localeHref(locale, "/")} className="font-serif text-xl font-bold text-[#4a5548] hover:text-[#3a4538] transition-colors">
            MUNI
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href={localeHref(locale, "/systems")}
              className="text-sm text-stone-500 hover:text-[#4a5548] transition-colors"
            >
              {copy.navSystems}
            </Link>
            <Link
              href="https://ai.munione.co"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-4 py-1.5 text-sm font-medium transition-all shadow-sm hover:shadow-md"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              {copy.navConsultant}
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#9A7B4F]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#9A7B4F] text-sm tracking-[0.3em] uppercase mb-6">
            {copy.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#4a5548] mb-6 leading-tight">
            {copy.title}
          </h1>
          <p className="text-lg md:text-xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {copy.heroBody}
          </p>

          {/* Decorative line */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-[#9A7B4F]/30" />
            <div className="w-2 h-2 rounded-full bg-[#9A7B4F]/40" />
            <div className="w-12 h-px bg-[#9A7B4F]/30" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#9A7B4F] text-xs tracking-[0.2em] uppercase mb-4">
                {copy.philosophyEyebrow}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-6 leading-relaxed whitespace-pre-line">
                {copy.philosophyTitle}
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                {copy.philosophyP1}
              </p>
              <p className="text-stone-500 leading-relaxed">
                {copy.philosophyP2}
              </p>
            </div>
            <div className="relative">
              <div className="relative p-8 border border-stone-200 rounded-2xl bg-white shadow-sm">
                <div className="space-y-6">
                  {copy.steps.map((step, idx) => (
                    <div key={step.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#9A7B4F]/10 flex items-center justify-center text-[#9A7B4F] shrink-0 text-sm font-medium">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="text-[#4a5548] font-medium mb-1">{step.title}</h3>
                        <p className="text-stone-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#9A7B4F] text-xs tracking-[0.2em] uppercase mb-4">
              {copy.productsEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              {copy.productsTitle}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {copy.productsLead}
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, idx) => (
              <div
                key={product.id}
                className={`relative rounded-2xl border ${product.border} ${product.color} overflow-hidden shadow-sm`}
              >
                <div
                  className={`grid md:grid-cols-2 gap-8 p-8 md:p-12 ${
                    idx % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`flex items-center justify-center ${
                      idx % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain drop-shadow-2xl"
                        width={320}
                        height={320}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center ${
                      idx % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`text-xs px-3 py-1 rounded-full ${product.badge}`}>
                        {product.energy}
                      </span>
                      {product.subtitle && (
                        <span className="text-xs px-3 py-1 rounded-full bg-stone-100 text-stone-500">
                          {product.subtitle}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-400 tracking-wider mb-4">
                      {product.nameEn}
                    </p>

                    <p className={`text-sm ${product.accent} mb-4 italic`}>
                      {locale === "zh" ? `「${product.tagline}」` : `“${product.tagline}”`}
                    </p>

                    <p className="text-stone-500 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Ingredients */}
                    <div className="mb-4">
                      <p className="text-xs text-stone-400 mb-2">{copy.ingredientsLabel}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.ingredients.map((ing: string) => (
                          <span
                            key={ing}
                            className="text-xs px-2 py-1 rounded bg-stone-100 text-stone-600"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Energy */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-stone-400">{copy.energyLabel}</span>
                      <span className={`text-sm ${product.accent}`}>{product.energy}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Factors Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/50 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#9A7B4F] text-xs tracking-[0.2em] uppercase mb-4">
              {copy.factorsEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              {copy.factorsTitle}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {copy.factorsLead}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.factors.map((factor, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-stone-200 bg-white hover:shadow-md transition-all group shadow-sm"
              >
                <div className="text-3xl mb-4">{factor.icon}</div>
                <h3 className="text-[#4a5548] font-medium mb-2 group-hover:text-[#9A7B4F] transition-colors">
                  {factor.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB] to-[#F5F2EB]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-6">
            {copy.ctaTitle}
          </h2>
          <p className="text-stone-500 mb-10 leading-relaxed whitespace-pre-line">
            {copy.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://ai.munione.co"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] text-white font-medium hover:from-[#8A6B3F] hover:to-[#B49255] transition-all shadow-lg"
            >
              <span>♡</span> {copy.ctaConsultant}
            </Link>
            <Link
              href={localeHref(locale, "/systems")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-300 text-stone-500 hover:text-[#4a5548] hover:border-stone-400 transition-all"
            >
              {copy.ctaSystems}
            </Link>
          </div>
        </div>
      </section>

      {/* Frequency Badge */}
      <FrequencyBadge variant="light" full />

      <Footer />
    </main>
  );
}

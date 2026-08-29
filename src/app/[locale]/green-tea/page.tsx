import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import FrequencyBadge from "@/components/FrequencyBadge";
import { Footer } from "@/components/Footer";
import { GREEN_TEA_COPY } from "@/content/pages/green-tea";
import { isLocale, localeHref } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

/* ─── CDN Images ─── */
const IMG = {
  matchaPowder:
    "/images/products/aZKeeTcEASMsfPFg.png",
  hojichaLeaves:
    "/images/products/PxrLKhbgvEcjkPUq.jpg",
  gyokuroLeaves:
    "/images/products/evwjdpMDljwZVvRW.jpg",
  senchaLeaves:
    "/images/products/SpJIfgcMQPUIuObV.jpg",
  teaField:
    "/images/products/lfgSsEdyZlibdfhl.jpg",
  teaPlantation:
    "/images/products/rwAQekTKZfZZromC.jpg",
  handPicking:
    "/images/products/REjvsiGnJifwMkrI.jpg",
  steaming:
    "/images/products/yfjUPlISIzazboWF.jpg",
  matchaCeremony:
    "/images/products/GzhKdeqjCgfpuuMT.jpg",
  ujiFarm:
    "/images/products/hYmOHYDnQnCNiyuY.jpg",
};

const PRODUCT_STYLES: Record<
  string,
  { image: string; color: string; accent: string; badge: string; highlight: boolean }
> = {
  matcha: { image: IMG.matchaPowder, color: "from-green-50 to-emerald-50", accent: "text-green-700", badge: "bg-green-100 text-green-700", highlight: true },
  gyokuro: { image: IMG.gyokuroLeaves, color: "from-teal-50 to-green-50", accent: "text-teal-700", badge: "bg-teal-100 text-teal-700", highlight: false },
  sencha: { image: IMG.senchaLeaves, color: "from-lime-50 to-green-50", accent: "text-lime-700", badge: "bg-lime-100 text-lime-700", highlight: false },
  hojicha: { image: IMG.hojichaLeaves, color: "from-amber-50 to-yellow-50", accent: "text-amber-700", badge: "bg-amber-100 text-amber-700", highlight: false },
};

const MATRIX_ACCENTS = ["text-green-700", "text-teal-700", "text-lime-700", "text-amber-700"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = GREEN_TEA_COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/green-tea",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function GreenTeaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = GREEN_TEA_COPY[locale];
  const products = copy.products.map((p) => ({ ...p, ...PRODUCT_STYLES[p.id] }));

  return (
    <main className="min-h-screen bg-[#F9F7F2] text-stone-700">
      {/* Light Theme Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href={localeHref(locale, "/")}
            className="font-serif text-xl font-bold text-[#4a5548]"
          >
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9-22.045 22.045 0 01-2.582-1.9l-.019-.01-.005-.003h-.002a6.737 6.737 0 01-1.14-1.47c-.166-.278-.32-.566-.468-.868a8.94 8.94 0 01-.468-1.127.96.96 0 01.002-1.014c.002-.003.005-.006.007-.009l.01-.015.01-.015a.96.96 0 01.258-.384c.09-.126.19-.243.3-.352a.96.96 0 01.352-.3c.11-.09.226-.17.352-.243a.96.96 0 01.384-.258l.015-.01.015-.01.009-.007a.96.96 0 011.014-.002l.003.002.003.002a8.94 8.94 0 011.127.468c.29.147.58.302.868.468a6.737 6.737 0 011.47 1.14h.002l.003.005.01.019a20.759 20.759 0 011.162.682 22.045 22.045 0 012.582 1.9 22.045 22.045 0 012.582 1.9l.01.019.003.005h.002a6.737 6.737 0 011.14 1.47c.166.278.32.566.468.868a8.94 8.94 0 01.468 1.127.96.96 0 01-.002 1.014l-.009.015-.01.015a.96.96 0 01-.258.384c-.09.126-.19.243-.3.352a.96.96 0 01-.352.3c-.11.09-.226.17-.352.243a.96.96 0 01-.384.258l-.015.01-.015.01-.009.007a.96.96 0 01-1.014.002h-.002Z" />
              </svg>
              {copy.navConsultant}
            </Link>
          </nav>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-100/30 rounded-full blur-[150px]" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-teal-100/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200/30 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#4a5548] text-sm tracking-[0.3em] uppercase mb-6">
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
            <div className="w-12 h-px bg-stone-200" />
            <div className="w-2 h-2 rounded-full bg-stone-300" />
            <div className="w-12 h-px bg-stone-200" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TEA GARDEN STORY
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/10 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#4a5548] text-xs tracking-[0.2em] uppercase mb-4">
                {copy.gardenEyebrow}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-6 leading-relaxed">
                {copy.gardenTitle}
                <br />
                <span className="text-stone-500 text-xl">
                  {copy.gardenSubtitle}
                </span>
              </h2>
              {copy.gardenParagraphs.map((t, i) => (
                <p
                  key={t}
                  className={`text-stone-500 leading-relaxed ${i < copy.gardenParagraphs.length - 1 ? "mb-6" : ""}`}
                >
                  {t}
                </p>
              ))}
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-stone-200">
                <Image
                  src={IMG.ujiFarm}
                  alt={copy.gardenImage1Alt}
                  className="w-full h-80 object-cover"
                  width={800}
                  height={320}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48">
                <Image
                  src={IMG.teaField}
                  alt={copy.gardenImage2Alt}
                  className="w-full h-full object-cover rounded-2xl border border-stone-200 shadow-lg"
                  width={192}
                  height={192}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HERITAGE TIMELINE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#4a5548] text-xs tracking-[0.2em] uppercase mb-4">
              {copy.heritageEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              {copy.heritageTitle}
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-stone-200" />
            {copy.heritage.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-8 ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-1/2 text-right">
                  {idx % 2 === 0 && (
                    <div className="p-4 text-right">
                      <p className="text-2xl font-serif text-[#4a5548] mb-1">{item.year}</p>
                      <p className="text-stone-500">{item.event}</p>
                    </div>
                  )}
                </div>
                <div className="w-16 h-16 rounded-full bg-[#F9F7F2] border-4 border-stone-200 flex-shrink-0" />
                <div className="w-1/2 text-left">
                  {idx % 2 !== 0 && (
                    <div className="p-4 text-left">
                      <p className="text-2xl font-serif text-[#4a5548] mb-1">{item.year}</p>
                      <p className="text-stone-500">{item.event}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRODUCT SHOWCASE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#4a5548] text-xs tracking-[0.2em] uppercase mb-4">
              {copy.teasEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              {copy.teasTitle}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {copy.teasLead}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ${product.highlight ? "shadow-lg" : ""}`}
              >
                <div className={`p-6 rounded-t-2xl bg-gradient-to-br ${product.color}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain"
                    width={400}
                    height={192}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs text-stone-400">{product.origin}</p>
                      <h3 className="text-xl font-serif text-[#4a5548]">{product.name}</h3>
                      <p className="text-sm text-stone-500">{product.nameEn}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full ${product.badge}`}>
                      {product.tagline}
                    </span>
                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed mb-6 h-24">
                    {product.description}
                  </p>

                  <div className={`grid grid-cols-2 gap-4 border-t border-stone-100 pt-6`}>
                    <div>
                      <p className="text-xs text-stone-400 mb-2">
                        {copy.labelCharacter}
                      </p>
                      <p className={`text-sm ${product.accent}`}>
                        {product.character}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 mb-2">
                        {copy.labelRitual}
                      </p>
                      <p className={`text-sm ${product.accent}`}>
                        {product.ritual}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CERTIFICATIONS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#4a5548] text-xs tracking-[0.2em] uppercase mb-4">
              {copy.certsEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              {copy.certsTitle}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {copy.certsLead}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.certs.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition-colors group"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-2xl font-serif text-[#4a5548] group-hover:text-green-700 transition-colors">
                    {cert.year}
                  </span>
                </div>
                <h3 className="text-stone-700 font-medium mb-2">
                  {cert.name}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ENERGY FACTORS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#4a5548] text-xs tracking-[0.2em] uppercase mb-4">
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
                className="p-6 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition-colors group"
              >
                <div className="text-3xl mb-4">{factor.icon}</div>
                <h3 className="text-stone-700 font-medium mb-2 group-hover:text-[#4a5548] transition-colors">
                  {factor.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HARVEST & PROCESS GALLERY
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#4a5548] text-xs tracking-[0.2em] uppercase mb-4">
              {copy.galleryEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              {copy.galleryTitle}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {copy.galleryLead}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden border border-stone-200 md:row-span-2">
              <Image
                src={IMG.handPicking}
                alt={copy.galleryAlts[0]}
                className="w-full h-full object-cover"
                width={400}
                height={600}
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-stone-200">
              <Image
                src={IMG.teaPlantation}
                alt={copy.galleryAlts[1]}
                className="w-full h-48 object-cover"
                width={400}
                height={192}
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-stone-200">
              <Image
                src={IMG.steaming}
                alt={copy.galleryAlts[2]}
                className="w-full h-48 object-cover"
                width={400}
                height={192}
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-stone-200 md:col-span-2">
              <Image
                src={IMG.matchaCeremony}
                alt={copy.galleryAlts[3]}
                className="w-full h-64 object-cover object-top"
                width={800}
                height={256}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RESONANCE MATRIX
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#4a5548] text-xs tracking-[0.2em] uppercase mb-4">
              {copy.matrixEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              {copy.matrixTitle}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {copy.matrixLead}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  {[
                    copy.matrixHeaders.tea,
                    copy.matrixHeaders.scent,
                    copy.matrixHeaders.dimension,
                    copy.matrixHeaders.timing,
                  ].map((h) => (
                    <th key={h} className="text-left py-4 px-4 text-stone-400 text-xs tracking-wider uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.matrixRows.map((row, idx) => (
                  <tr key={row.tea} className="border-b border-stone-100">
                    <td className="py-4 px-4 text-stone-700 text-sm">{row.tea}</td>
                    <td className={`py-4 px-4 text-sm ${MATRIX_ACCENTS[idx]}`}>{row.scent}</td>
                    <td className="py-4 px-4 text-stone-500 text-sm">{row.dimension}</td>
                    <td className="py-4 px-4 text-stone-400 text-sm">{row.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/15 to-[#F9F7F2]" />
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] text-white font-medium hover:from-[#8A6B3F] hover:to-[#B49255] transition-all shadow-lg hover:shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9-22.045 22.045 0 01-2.582-1.9l-.019-.01-.005-.003h-.002a6.737 6.737 0 01-1.14-1.47c-.166-.278-.32-.566-.468-.868a8.94 8.94 0 01-.468-1.127.96.96 0 01.002-1.014c.002-.003.005-.006.007-.009l.01-.015.01-.015a.96.96 0 01.258-.384c.09-.126.19-.243.3-.352a.96.96 0 01.352-.3c.11-.09.226-.17.352-.243a.96.96 0 01.384-.258l.015-.01.015-.01.009-.007a.96.96 0 011.014-.002l.003.002.003.002a8.94 8.94 0 011.127.468c.29.147.58.302.868.468a6.737 6.737 0 011.47 1.14h.002l.003.005.01.019a20.759 20.759 0 011.162.682 22.045 22.045 0 012.582 1.9 22.045 22.045 0 012.582 1.9l.01.019.003.005h.002a6.737 6.737 0 011.14 1.47c.166.278.32.566.468.868a8.94 8.94 0 01.468 1.127.96.96 0 01-.002 1.014l-.009.015-.01.015a.96.96 0 01-.258.384c-.09.126-.19.243-.3.352a.96.96 0 01-.352.3c-.11.09-.226-.17-.352-.243a.96.96 0 01-.384.258l-.015.01-.015.01-.009.007a.96.96 0 01-1.014.002h-.002Z" />
              </svg>
              {copy.ctaConsultant}
            </Link>
            <Link
              href={localeHref(locale, "/systems")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548] hover:text-white transition-all"
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

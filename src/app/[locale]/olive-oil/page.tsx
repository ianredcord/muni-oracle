import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import FrequencyBadge from "@/components/FrequencyBadge";
import { Footer } from "@/components/Footer";
import { OLIVE_OIL_COPY } from "@/content/pages/olive-oil";
import { isLocale, localeHref } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

const PRODUCT_STYLES: Record<
  string,
  { image: string; color: string; accent: string; badge: string; highlight: boolean }
> = {
  "grand-cru": {
    image: "/images/products/lETvbLHthrnfMBOS.jpg",
    color: "from-green-50 to-emerald-50",
    accent: "text-green-700",
    badge: "bg-green-100 text-green-700",
    highlight: true,
  },
  "1979": {
    image: "/images/products/PxYNKHKkJjXQpdZb.jpg",
    color: "from-amber-50 to-yellow-50",
    accent: "text-amber-700",
    badge: "bg-amber-100 text-amber-700",
    highlight: false,
  },
  riflessi: {
    image: "/images/products/qtxchiSClEHHDneY.jpg",
    color: "from-lime-50 to-emerald-50",
    accent: "text-lime-700",
    badge: "bg-lime-100 text-lime-700",
    highlight: false,
  },
  "toscano-igp": {
    image: "/images/products/PxYNKHKkJjXQpdZb.jpg",
    color: "from-teal-50 to-green-50",
    accent: "text-teal-700",
    badge: "bg-teal-100 text-teal-700",
    highlight: false,
  },
};

const MATRIX_ACCENTS = ["text-green-700", "text-amber-700", "text-lime-700", "text-teal-700"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = OLIVE_OIL_COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/olive-oil",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function OliveOilPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = OLIVE_OIL_COPY[locale];
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
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
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-lime-100/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#4a5548]/80 text-sm tracking-[0.3em] uppercase mb-6">
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
            <div className="w-12 h-px bg-stone-300" />
            <div className="w-2 h-2 rounded-full bg-stone-400" />
            <div className="w-12 h-px bg-stone-300" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ESTATE STORY SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/20 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#4a5548]/70 text-xs tracking-[0.2em] uppercase mb-4">
                {copy.estateEyebrow}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-6 leading-relaxed">
                {copy.estateTitle}
                <br />
                <span className="text-stone-500 text-xl">
                  {copy.estateSubtitle}
                </span>
              </h2>
              {copy.estateParagraphs.map((t, i) => (
                <p
                  key={t}
                  className={`text-stone-500 leading-relaxed ${i < copy.estateParagraphs.length - 1 ? "mb-6" : ""}`}
                >
                  {t}
                </p>
              ))}
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-stone-200">
                <Image
                  src="/images/products/HYCNrqTGpYkndwZX.jpg"
                  alt={copy.estateImage1Alt}
                  className="w-full h-80 object-cover"
                  width={800}
                  height={320}
                />
              </div>
              <div className="mt-4 rounded-2xl overflow-hidden border border-stone-200">
                <Image
                  src="/images/products/avGHGdLXmsXBeOEf.jpg"
                  alt={copy.estateImage2Alt}
                  className="w-full h-48 object-cover"
                  width={800}
                  height={192}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY EARLY HARVEST SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#4a5548]/70 text-xs tracking-[0.2em] uppercase mb-4">
              {copy.harvestEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              {copy.harvestTitle}
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
              {copy.harvestLead}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {copy.harvestCards.map((card) => (
              <div key={card.title} className="border border-stone-200 rounded-2xl p-8 bg-white shadow-sm">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-medium text-[#4a5548] mb-2">{card.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRODUCTS SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#4a5548]/70 text-xs tracking-[0.2em] uppercase mb-4">
              {copy.collectionEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              {copy.collectionTitle}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {copy.collectionLead}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col ${product.highlight ? "lg:col-span-2" : ""}`}
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className={`text-xs font-semibold tracking-widest uppercase ${product.accent}`}>
                        {product.name}
                      </p>
                      <h3 className="text-xl font-serif text-[#4a5548] mt-1">
                        {product.nameZh}
                      </h3>
                    </div>
                    <div className={`text-xs px-2 py-0.5 rounded-full ${product.badge}`}>
                      {product.tagline}
                    </div>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4 h-24 overflow-hidden">
                    {product.description}
                  </p>
                  <div className="text-xs text-stone-400 space-y-2">
                    <p><span className="font-medium text-stone-500">{copy.labelAroma}</span>{product.aroma}</p>
                    <p><span className="font-medium text-stone-500">{copy.labelTaste}</span>{product.taste}</p>
                    <p><span className="font-medium text-stone-500">{copy.labelPairing}</span>{product.pairing}</p>
                  </div>
                </div>
                <div className={`bg-gradient-to-tr ${product.color} rounded-b-2xl p-4 mt-auto`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain"
                    width={400}
                    height={192}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          AWARDS SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#4a5548]/70 text-xs tracking-[0.2em] uppercase mb-4">
              {copy.awardsEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              {copy.awardsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {copy.awards.map((award) => (
              <div key={award.name} className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
                <p className="text-lg font-bold text-[#9A7B4F]">{award.score}</p>
                <p className="text-sm font-semibold text-[#4a5548] mt-1">{award.name}</p>
                <p className="text-xs text-stone-400 mt-2">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ESTATE FEATURES
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F5F2EB] border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {copy.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl transition-colors group"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-[#4a5548] font-medium mb-2 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HARVEST GALLERY
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#4a5548]/70 text-xs tracking-[0.2em] uppercase mb-4">
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
                src="/images/products/CoEbffWSmbdlxZKC.jpeg"
                alt={copy.galleryAlts[0]}
                className="w-full h-full object-cover"
                width={400}
                height={600}
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-stone-200">
              <Image
                src="/images/products/LmQTTPntJAuWGGPk.jpg"
                alt={copy.galleryAlts[1]}
                className="w-full h-48 object-cover"
                width={400}
                height={192}
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-stone-200">
              <Image
                src="/images/products/dVIjuYTGZTUkeDOu.jpg"
                alt={copy.galleryAlts[2]}
                className="w-full h-48 object-cover"
                width={400}
                height={192}
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-stone-200 md:col-span-2">
              <Image
                src="/images/products/OmkZmcVIDtFWQkkI.jpeg"
                alt={copy.galleryAlts[3]}
                className="w-full h-64 object-cover"
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#4a5548]/70 text-xs tracking-[0.2em] uppercase mb-4">
              {copy.matrixEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              {copy.matrixTitle}
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              {copy.matrixLead}
            </p>
          </div>

          <div className="overflow-x-auto bg-white/50 border border-stone-200 rounded-2xl p-2">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  {[
                    copy.matrixHeaders.oil,
                    copy.matrixHeaders.scent,
                    copy.matrixHeaders.dimension,
                    copy.matrixHeaders.timing,
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left py-3 px-4 text-stone-400 text-xs tracking-wider uppercase font-normal"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.matrixRows.map((row, idx) => (
                  <tr
                    key={row.oil}
                    className={idx < copy.matrixRows.length - 1 ? "border-b border-stone-100" : ""}
                  >
                    <td className="py-4 px-4 text-stone-700 text-sm font-medium">{row.oil}</td>
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-[#F9F7F2]" />
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] text-white font-medium hover:from-[#8A6B3F] hover:to-[#B49255] transition-all shadow-lg shadow-yellow-800/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
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


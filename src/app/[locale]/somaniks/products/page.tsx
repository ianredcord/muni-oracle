import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  SOMANIKS_PRODUCTS_COPY,
  type SomaniksProductsCopy,
} from "@/content/pages/somaniks-products";
import { isLocale, localeHref } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = SOMANIKS_PRODUCTS_COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/somaniks/products",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

/* ------------------------------------------------------------------ */
/*  Product card                                                       */
/* ------------------------------------------------------------------ */

function ProductCard({
  product,
  labels,
  principleHeading,
  useCaseHeading,
  imageSrc,
  tone,
}: {
  product: SomaniksProductsCopy["somacept"];
  labels: SomaniksProductsCopy["specLabels"];
  principleHeading: string;
  useCaseHeading: string;
  imageSrc: string;
  tone: "emerald" | "amber";
}) {
  const isEmerald = tone === "emerald";
  const cardBorder = isEmerald ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50";
  const badge = isEmerald ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700";
  const heading = isEmerald ? "text-emerald-700" : "text-amber-700";
  const subtitle = isEmerald ? "text-emerald-700/70" : "text-amber-700/70";
  const divider = isEmerald ? "border-emerald-200/60" : "border-amber-200/60";

  const specs: [string, string][] = [
    [labels.material, product.material],
    [labels.coneHeight, product.coneHeight],
    [labels.coneCountL, product.coneCountL],
    [labels.coneCountS, product.coneCountS],
    [labels.fibre, product.fibre],
  ];

  return (
    <div className={`rounded-2xl border ${cardBorder} p-6 md:p-8 flex flex-col`}>
      <span className={`self-start rounded-full ${badge} text-xs font-medium px-3 py-1 mb-4`}>
        {product.badge}
      </span>

      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
        <Image
          src={imageSrc}
          alt={product.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <h2 className={`text-2xl font-serif ${heading} mb-1`}>{product.name}</h2>
      <p className={`text-sm ${subtitle} mb-6`}>{product.subtitle}</p>

      <ul className="space-y-3 text-sm mb-6">
        {specs.map(([label, value]) => (
          <li key={label} className={`flex justify-between border-b ${divider} pb-2 gap-4`}>
            <span className="text-stone-500">{label}</span>
            <span className="font-medium text-stone-700 text-right">{value}</span>
          </li>
        ))}
      </ul>

      <div className="bg-white/60 rounded-xl p-4 mb-6">
        <h3 className={`text-xs font-semibold ${heading} uppercase tracking-wider mb-2`}>
          {principleHeading}
        </h3>
        <p className="text-sm text-stone-600 leading-relaxed">{product.principle}</p>
      </div>

      <h3 className={`text-xs font-semibold ${heading} uppercase tracking-wider mb-3`}>
        {useCaseHeading}
      </h3>
      <div className="flex flex-wrap gap-2">
        {product.useCases.map((t) => (
          <span key={t} className={`rounded-full ${badge} text-xs px-3 py-1`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = SOMANIKS_PRODUCTS_COPY[locale];

  return (
    <main className="min-h-screen bg-[#F9F7F2] text-stone-700">
      <Header />

      {/* Back link */}
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-4">
        <Link
          href={localeHref(locale, "/somaniks")}
          className="inline-flex items-center gap-1 text-sm text-[#4a5548] hover:underline"
        >
          <span aria-hidden="true">&larr;</span>
          {copy.backLink}
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone-400 text-sm tracking-[0.3em] uppercase mb-4">
            {copy.eyebrow}
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-light text-[#4a5548] mb-4 leading-tight">
            {copy.heroTitle}
          </h1>
          <p className="text-base md:text-lg text-stone-500 leading-relaxed">
            {copy.heroLead}
          </p>
        </div>
      </section>

      {/* ── Product Cards ────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          <ProductCard
            product={copy.somacept}
            labels={copy.specLabels}
            principleHeading={copy.principleHeading}
            useCaseHeading={copy.useCaseHeading}
            imageSrc="/images/products/KqfHeFfjiZSDHAkB.jpg"
            tone="emerald"
          />
          <ProductCard
            product={copy.somareson}
            labels={copy.specLabels}
            principleHeading={copy.principleHeading}
            useCaseHeading={copy.useCaseHeading}
            imageSrc="/images/products/xwCndtckqJSUPiEd.jpg"
            tone="amber"
          />
        </div>
      </section>

      {/* ── Comparison Table ─────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] text-center mb-10">
            {copy.comparisonTitle}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 bg-stone-100 rounded-tl-lg font-medium text-stone-500">
                    {copy.comparisonHeaders.label}
                  </th>
                  <th className="text-left py-3 px-4 bg-emerald-100 text-emerald-700 font-medium">
                    {copy.comparisonHeaders.somacept}
                  </th>
                  <th className="text-left py-3 px-4 bg-amber-100 text-amber-700 font-medium rounded-tr-lg">
                    {copy.comparisonHeaders.somareson}
                  </th>
                </tr>
              </thead>
              <tbody>
                {copy.comparisonRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="py-3 px-4 font-medium text-stone-600">{row.label}</td>
                    <td className="py-3 px-4 text-stone-700">{row.somacept}</td>
                    <td className="py-3 px-4 text-stone-700">{row.somareson}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Axon Reflex Science ──────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-stone-400 text-sm tracking-[0.2em] uppercase text-center mb-3">
            {copy.axonEyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] text-center mb-10">
            {copy.axonTitle}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {copy.axonCards.map((card) => (
              <div key={card.step} className="rounded-2xl border border-stone-200 bg-white p-6">
                <span className="inline-block text-xs font-bold text-[#4a5548] bg-[#4a5548]/10 rounded-full w-8 h-8 leading-8 text-center mb-4">
                  {card.step}
                </span>
                <h3 className="text-lg font-serif text-[#4a5548] mb-2">{card.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinical Evidence ────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-400 text-sm tracking-[0.2em] uppercase text-center mb-3">
            {copy.evidenceEyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] text-center mb-10">
            {copy.evidenceTitle}
          </h2>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-10">
            <p className="text-sm text-stone-500 leading-relaxed mb-6">{copy.evidenceLead}</p>

            <div className="grid gap-6 sm:grid-cols-3 mb-6">
              {copy.evidenceStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-serif text-[#4a5548] mb-1">{stat.value}</p>
                  <p className="text-xs text-stone-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">{copy.evidenceNote}</p>
          </div>
        </div>
      </section>

      {/* ── How to use ───────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-400 text-sm tracking-[0.2em] uppercase text-center mb-3">
            {copy.howEyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] text-center mb-10">
            {copy.howTitle}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.steps.map((s) => (
              <div key={s.num} className="rounded-2xl border border-stone-200 bg-white p-5">
                <span className="inline-block text-xs font-bold text-white bg-[#4a5548] rounded-full w-7 h-7 leading-7 text-center mb-3">
                  {s.num}
                </span>
                <h3 className="font-serif text-[#4a5548] mb-1">{s.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

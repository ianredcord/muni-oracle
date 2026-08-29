import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuide, getGuides } from "@/data/guides";
import { getFlowers } from "@/data/flowers";
import { getBodySupportPoints } from "@/data/body-support";
import { getMingyurCard } from "@/data/mingyur";
import { getEmotionGroup, getThemeForFlower } from "@/data/flowerEmotions";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MingyurQuoteSection } from "@/components/MingyurQuote";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { LOCALES, isLocale, localeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/metadata";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    GUIDES.map((g) => ({ locale, slug: g.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);
  const guide = getGuide(locale, slug);
  if (!guide) return { title: dict.guide.notFoundTitle };

  return buildPageMetadata({
    locale,
    path: `/guide/${guide.slug}`,
    title: `${guide.title} | ${dict.guide.indexTitle}`,
    description: guide.description,
    type: "article",
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const guide = getGuide(locale, slug);
  if (!guide) notFound();

  const localeFlowers = getFlowers(locale);
  const group = getEmotionGroup(locale, guide.emotionGroup);
  const point = getBodySupportPoints(locale).find(
    (p) => p.slug === guide.bodyPoint,
  );
  const mingyur = getMingyurCard(locale, guide.mingyurId);
  const flowerCards = guide.flowers
    .map((gf) => ({
      meta: gf,
      card: localeFlowers.find((f) => f.slug === gf.slug),
    }))
    .filter((x): x is { meta: typeof x.meta; card: (typeof localeFlowers)[number] } =>
      Boolean(x.card)
    );

  const others = getGuides(locale)
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <ArticleJsonLd
        locale={locale}
        headline={guide.title}
        description={guide.description}
        path={`/guide/${guide.slug}`}
        image={flowerCards[0]?.card.image ?? "/images/og-default.jpg"}
        section={dict.guide.jsonLdSection}
        keywords={guide.cues}
      />
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: dict.guide.breadcrumbHome, path: "/" },
          { name: dict.guide.indexTitle, path: "/guide" },
          { name: guide.title, path: `/guide/${guide.slug}` },
        ]}
      />

      <Header />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-[#F9F7F2]" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-2xl pt-24">
        <div className="mb-6">
          <Link
            href={localeHref(locale, "/guide")}
            className="inline-flex items-center gap-2 text-[#4a5548] hover:text-[#3a4538] text-sm transition-colors"
          >
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {dict.guide.allGuides}
          </Link>
        </div>

        {/* 標題 */}
        <header className="mb-10">
          {group && (
            <Link
              href={localeHref(locale, `/flowers?emotion=${group.slug}`)}
              className="inline-block text-xs text-[#9A7B4F] bg-[#9A7B4F]/10 hover:bg-[#9A7B4F]/20 px-3 py-1 rounded-full mb-4 transition-colors"
            >
              {group.title}
            </Link>
          )}
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] leading-snug">
            {guide.title}
          </h1>
        </header>

        {/* 開場 */}
        <section className="mb-10 space-y-4">
          {guide.opening.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-lg text-[#4a5548] leading-loose"
                  : "text-stone-600 leading-loose"
              }
            >
              {p}
            </p>
          ))}
        </section>

        {/* 這可能是怎麼回事 */}
        <section className="mb-10 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-stone-100">
          <h2 className="font-serif text-xl font-bold text-[#4a5548] mb-4">
            {dict.guide.whatsHappening}
          </h2>
          <div className="space-y-3">
            {guide.whatsHappening.map((p, i) => (
              <p key={i} className="text-stone-600 leading-loose">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* 可能對應的花精 */}
        <section className="mb-10">
          <h2 className="font-serif text-xl font-bold text-[#4a5548] mb-1">
            {dict.guide.flowersTitle}
          </h2>
          <p className="text-sm text-stone-400 mb-5">
            {dict.guide.flowersHint}
          </p>
          <div className="space-y-4">
            {flowerCards.map(({ meta, card }) => {
              const theme = getThemeForFlower(locale, card.slug);
              return (
                <Link
                  key={card.slug}
                  href={localeHref(locale, `/flowers/${card.slug}`)}
                  className="flex gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="relative w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-base font-bold text-[#4a5548] leading-snug">
                      {card.name}
                    </h3>
                    {theme && (
                      <p className="text-xs text-stone-400 mt-0.5">{theme}</p>
                    )}
                    <p className="text-sm text-stone-600 leading-relaxed mt-2">
                      {meta.why}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 現在可以做的一件小事 */}
        <section className="mb-10 bg-[#4a5548]/5 rounded-2xl p-6 border border-[#4a5548]/10">
          <h2 className="font-serif text-xl font-bold text-[#4a5548] mb-4">
            {dict.guide.practiceTitle}
          </h2>
          <div className="space-y-3 mb-5">
            {guide.practice.map((p, i) => (
              <p key={i} className="text-stone-600 leading-loose">
                {p}
              </p>
            ))}
          </div>

          {point && (
            <div className="flex items-center gap-4 bg-white/80 rounded-xl p-4 border border-stone-100">
              <div className="relative w-16 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={point.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-[#006494] bg-[#006494]/10 px-2 py-0.5 rounded-full">
                  {point.shortLabel}
                </span>
                <p className="font-medium text-[#4a5548] text-sm mt-1.5">
                  {point.title}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  {point.acupointName} · {point.locationText}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* 仁波切的話 */}
        {mingyur && (
          <section className="mb-10">
            <MingyurQuoteSection locale={locale} card={mingyur} />
          </section>
        )}

        {/* 專業協助提醒 */}
        {guide.professionalNote && (
          <div className="mb-10 text-sm text-stone-500 bg-white/60 rounded-xl px-5 py-4 border border-stone-200 leading-relaxed">
            {dict.guide.detailProfessionalNote}
          </div>
        )}

        {/* 導流 */}
        <section className="mb-12 space-y-3">
          <Link
            href={localeHref(locale, "/draw")}
            className="flex items-center justify-center gap-2 w-full bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-6 py-3.5 transition-colors"
          >
            {dict.guide.drawCta}
          </Link>
          {group && (
            <Link
              href={localeHref(locale, `/flowers?emotion=${group.slug}`)}
              className="flex items-center justify-center gap-2 w-full border-2 border-[#9A7B4F]/50 bg-white/60 text-[#9A7B4F] hover:bg-[#9A7B4F] hover:text-white rounded-full px-6 py-3 transition-all"
            >
              {dict.guide.groupCta.replace("{group}", group.title)}
            </Link>
          )}
        </section>

        {/* 其他文章 */}
        {others.length > 0 && (
          <section className="border-t border-stone-200 pt-8">
            <h2 className="font-serif text-lg font-bold text-[#4a5548] mb-4">
              {dict.guide.otherGuides}
            </h2>
            <ul className="space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={localeHref(locale, `/guide/${o.slug}`)}
                    className="block bg-white/60 hover:bg-white/90 rounded-xl px-5 py-3 border border-stone-100 transition-colors"
                  >
                    <span className="font-serif text-[#4a5548]">{o.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

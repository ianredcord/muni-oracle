import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuides } from "@/data/guides";
import { getEmotionGroups } from "@/data/flowerEmotions";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { isLocale, localeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return buildPageMetadata({
    locale,
    path: "/guide",
    title: dict.guide.metaTitle,
    description: dict.guide.metaDescription,
  });
}

export default async function GuideIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const guides = getGuides(locale);

  // 依情緒分類分組，維持巴哈原著的順序
  const grouped = getEmotionGroups(locale)
    .map((g) => ({
      group: g,
      items: guides.filter((x) => x.emotionGroup === g.slug),
    }))
    .filter((x) => x.items.length > 0);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
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

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-3xl pt-24">
        <header className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
            {dict.guide.indexTitle}
          </h1>
          <p className="text-stone-500 leading-relaxed whitespace-pre-line">
            {dict.guide.indexSubtitle}
          </p>
        </header>

        <div className="space-y-10">
          {grouped.map(({ group, items }) => (
            <section key={group.slug}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 rounded-full bg-gradient-to-b from-[#9A7B4F] to-[#9A7B4F]/30" />
                <h2 className="font-serif text-lg font-bold text-[#4a5548]">
                  {group.title}
                </h2>
                {group.title !== group.nameEn && (
                  <span className="text-xs text-stone-400">{group.nameEn}</span>
                )}
              </div>

              <ul className="space-y-3">
                {items.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={localeHref(locale, `/guide/${g.slug}`)}
                      className="block bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-5 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-2 leading-snug">
                        {g.title}
                      </h3>
                      <p className="text-sm text-stone-500 leading-relaxed mb-3">
                        {g.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {g.cues.map((c) => (
                          <span
                            key={c}
                            className="text-[11px] text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full"
                          >
                            {locale === "zh" ? `「${c}」` : `“${c}”`}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 text-center space-y-3">
          <Link
            href={localeHref(locale, "/draw")}
            className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 transition-colors"
          >
            {dict.guide.drawInstead}
          </Link>
          <p className="text-xs text-stone-400 leading-relaxed max-w-md mx-auto">
            {dict.guide.disclaimer}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

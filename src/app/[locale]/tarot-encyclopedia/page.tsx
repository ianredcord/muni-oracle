import type { Metadata } from "next";
import { getTarotCards, type LocalizedTarotCard } from "@/data/tarot";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FrequencyBadge from "@/components/FrequencyBadge";
import { isLocale, localeHref, type Locale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";
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
    path: "/tarot-encyclopedia",
    title: dict.tarot.encyclopediaMetaTitle,
    description: dict.tarot.encyclopediaMetaDescription,
  });
}

// 宮廷牌關鍵字
const COURT_KEYWORDS = ["King", "Queen", "Knight", "Page"];

function isCourt(card: LocalizedTarotCard): boolean {
  return card.suit !== "major" && COURT_KEYWORDS.some(k => card.nameEn.startsWith(k + " "));
}

function isNumber(card: LocalizedTarotCard): boolean {
  return card.suit !== "major" && !isCourt(card);
}

// 三大分類
type Category = {
  key: string;
  title: string;
  subtitle: string;
  icon: string;
  cards: LocalizedTarotCard[];
};

function buildCategories(locale: Locale, dict: Dictionary): Category[] {
  const cards = getTarotCards(locale);

  return [
    {
      key: "major",
      title: dict.tarot.categoryMajor,
      subtitle: dict.tarot.categoryMajorSubtitle,
      icon: "✦",
      cards: cards.filter((c) => c.suit === "major"),
    },
    {
      key: "court",
      title: dict.tarot.categoryCourt,
      subtitle: dict.tarot.categoryCourtSubtitle,
      icon: "👑",
      cards: cards.filter((c) => isCourt(c)),
    },
    {
      key: "number",
      title: dict.tarot.categoryNumber,
      subtitle: dict.tarot.categoryNumberSubtitle,
      icon: "✧",
      cards: cards.filter((c) => isNumber(c)),
    },
  ];
}

function CardGrid({
  locale,
  cards,
}: {
  locale: Locale;
  cards: LocalizedTarotCard[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
      {cards.map((card) => (
        <Link
          key={card.id}
          href={localeHref(locale, `/tarot-encyclopedia/${card.slug}`)}
          className="group"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            {/* 圖片 */}
            <div className="relative aspect-[1/1.79] overflow-hidden">
              <Image
                src={card.image}
                alt={card.displayName}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 16vw"
              />
            </div>
            
            {/* 名稱 */}
            <div className="p-3 text-center">
              <h3 className="text-sm font-medium text-[#4a5548] truncate">
                {card.displayName}
              </h3>
              <p className="text-xs text-stone-400 mt-0.5 truncate">
                {card.altName}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default async function TarotEncyclopediaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const categories = buildCategories(locale, dict);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      {/* 背景 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-[#F9F7F2]" />
      </div>

      {/* 固定 Header */}
      <Header />

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-6xl pt-20">
        {/* 標題 */}
        <header className="text-center mb-12 mt-8">
          <p className="text-[#9A7B4F] text-sm tracking-[0.3em] mb-3 font-medium">
            {dict.tarot.encyclopediaEyebrow}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
            {dict.tarot.encyclopediaTitle}
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            {dict.tarot.encyclopediaSubtitle}
          </p>
        </header>

        {/* 三大分類快速導航 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <a
              key={cat.key}
              href={`#${cat.key}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-stone-200 hover:border-[#9A7B4F]/40 hover:bg-[#9A7B4F]/5 transition-all text-sm text-[#4a5548] font-medium shadow-sm"
            >
              <span>{cat.icon}</span>
              <span>{cat.title}</span>
              <span className="text-stone-400 text-xs">
                {dict.tarot.cardCount.replace("{n}", String(cat.cards.length))}
              </span>
            </a>
          ))}
        </div>

        {/* 按三大分類展示 */}
        {categories.map((cat) => (
          <section key={cat.key} id={cat.key} className="mb-16 scroll-mt-24">
            {/* 分類標題 */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{cat.icon}</span>
              <div>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-[#4a5548]">
                  {cat.title}
                </h2>
                <p className="text-stone-400 text-sm">
                  {dict.tarot.cardCount.replace("{n}", String(cat.cards.length))}
                </p>
              </div>
            </div>
            <p className="text-stone-500 text-sm mb-6 ml-10">
              {cat.subtitle}
            </p>

            <CardGrid locale={locale} cards={cat.cards} />
          </section>
        ))}

        {/* 底部操作 */}
        <div className="mt-12 text-center">
          <Link
            href={localeHref(locale, "/tarot/draw")}
            className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 transition-colors"
          >
            {dict.tarot.drawCta}
          </Link>
        </div>
      </main>

      {/* Frequency Resonance™ 技術支持 */}
      <FrequencyBadge variant="light" full />
      <Footer />
    </div>
  );
}

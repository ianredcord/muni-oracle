import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFlowers } from "@/data/flowers";
import { getTarotCards } from "@/data/tarot";
import { isLocale, localeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/metadata";
import JournalClient, { type CardIndex } from "./JournalClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    ...buildPageMetadata({
      locale,
      path: "/journal",
      title: dict.journal.metaTitle,
      description: dict.journal.metaDescription,
    }),
    robots: { index: false, follow: true },
  };
}

export default async function JournalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  /**
   * 在伺服器端先把資料壓成輕量索引再傳給 client，
   * 避免整份 flowers/tarot 資料（含長篇解析）被打包進瀏覽器。
   */
  const index: CardIndex = {
    flower: Object.fromEntries(
      getFlowers(locale).map((f) => [
        f.slug,
        {
          name: f.name,
          image: f.image,
          href: localeHref(locale, `/flowers/${f.slug}`),
        },
      ]),
    ),
    tarot: Object.fromEntries(
      getTarotCards(locale).map((c) => [
        c.slug,
        {
          name: `${c.displayName}　${c.altName}`,
          image: c.image,
          href: localeHref(locale, `/tarot-encyclopedia/${c.slug}`),
        },
      ]),
    ),
  };

  return <JournalClient locale={locale} index={index} />;
}

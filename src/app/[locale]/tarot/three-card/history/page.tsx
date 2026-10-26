import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PAGE_TEXT } from "@/data/threeCard/pageText";
import { isLocale } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";
import HistoryClient from "./HistoryClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = PAGE_TEXT[locale];
  return { ...buildPageMetadata({ locale, path: "/tarot/three-card/history", title: `${t.historyTitle} | ${t.metaTitle}`, description: t.metaDescription }), robots: { index: false } };
}

export default async function HistoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HistoryClient locale={locale} />;
}

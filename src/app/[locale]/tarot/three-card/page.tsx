import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PAGE_TEXT } from "@/data/threeCard/pageText";
import { isLocale } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";
import { listCardViews } from "./actions";
import ThreeCardClient from "./ThreeCardClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = PAGE_TEXT[locale];
  return buildPageMetadata({ locale, path: "/tarot/three-card", title: t.metaTitle, description: t.metaDescription });
}

export default async function ThreeCardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const cards = await listCardViews(locale);
  return <ThreeCardClient locale={locale} cards={cards} />;
}

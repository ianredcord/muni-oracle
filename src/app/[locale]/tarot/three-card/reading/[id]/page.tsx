import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PAGE_TEXT } from "@/data/threeCard/pageText";
import { isLocale } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";
import ReadingClient from "./ReadingClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }): Promise<Metadata> {
  const { locale, id } = await params;
  if (!isLocale(locale)) return {};
  const t = PAGE_TEXT[locale];
  return { ...buildPageMetadata({ locale, path: `/tarot/three-card/reading/${id}`, title: `${t.readingTitle} | ${t.metaTitle}`, description: t.metaDescription }), robots: { index: false } };
}

export default async function ReadingPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <Suspense fallback={null}>
      <ReadingClient locale={locale} id={id} />
    </Suspense>
  );
}

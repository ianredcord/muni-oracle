import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TarotDrawClient from "./TarotDrawClient";
import { isLocale } from "@/i18n/config";
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
    path: "/tarot/draw",
    title: dict.tarotDraw.metaTitle,
    description: dict.tarotDraw.metaDescription,
  });
}

export default async function TarotDrawPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <TarotDrawClient locale={locale} />;
}

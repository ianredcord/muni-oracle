import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TarotClient from "./TarotClient";
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
    path: "/tarot",
    title: dict.tarotLanding.metaTitle,
    description: dict.tarotLanding.metaDescription,
  });
}

export default async function TarotPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <TarotClient locale={locale} />;
}

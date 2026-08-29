import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EnergySupportClient from "./EnergySupportClient";
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
    path: "/energy-support",
    title: dict.energySupport.metaTitle,
    description: dict.energySupport.metaDescription,
  });
}

export default async function EnergySupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <EnergySupportClient locale={locale} />;
}

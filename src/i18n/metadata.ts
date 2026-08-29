import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, OG_LOCALE, localeHref, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

export const SITE_URL = "https://munione.co";

/** 產生 hreflang 對照表（含 x-default 指向中文版） */
export function buildAlternates(path: string) {
  const languages: Record<string, string> = {};

  for (const locale of LOCALES) {
    languages[locale === "zh" ? "zh-TW" : locale] = `${SITE_URL}${localeHref(locale, path)}`;
  }

  languages["x-default"] = `${SITE_URL}${localeHref(DEFAULT_LOCALE, path)}`;

  return { languages };
}

type PageMetaInput = {
  locale: Locale;
  /** 不含語言前綴的路徑，例如 "/flowers/agrimony" */
  path: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
};

/** 單一頁面的 metadata：標題、描述、canonical、hreflang、OG、Twitter 一次備齊 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  image,
  imageAlt,
  type = "website",
}: PageMetaInput): Metadata {
  const dict = getDictionary(locale);
  const resolvedTitle = title ?? dict.meta.title;
  const resolvedDescription = description ?? dict.meta.description;
  const resolvedImage = image ?? `${SITE_URL}/images/og-default.jpg`;
  const canonical = `${SITE_URL}${localeHref(locale, path)}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical,
      ...buildAlternates(path),
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonical,
      siteName: dict.meta.siteName,
      locale: OG_LOCALE[locale],
      type,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: imageAlt ?? dict.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [resolvedImage],
    },
  };
}

/** [locale]/layout.tsx 使用的站台層級 metadata */
export function buildSiteMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    keywords: dict.meta.keywords,
    ...buildPageMetadata({ locale, path: "/" }),
  };
}

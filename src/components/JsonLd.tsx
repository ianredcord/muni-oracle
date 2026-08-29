// src/components/JsonLd.tsx
// 結構化資料（schema.org JSON-LD），供 Google 產生 rich results。
// 伺服器元件：直接輸出 script 標籤，不進 client bundle。

import { localeHref, type Locale } from "@/i18n/config";

const BASE_URL = "https://www.munione.co";

const IN_LANGUAGE: Record<Locale, string> = { zh: "zh-TW", en: "en" };
const ORG_NAME: Record<Locale, string> = { zh: "MUNI 牟尼", en: "MUNI" };

type ArticleInput = {
  /** 內容語言 */
  locale: Locale;
  /** 頁面標題 */
  headline: string;
  /** 摘要（純文字，會截斷至 300 字） */
  description: string;
  /** 站內路徑，例如 /flowers/agrimony */
  path: string;
  /** 圖片站內路徑 */
  image: string;
  /** 分類，例如「花精百科」 */
  section?: string;
  /** 關鍵字 */
  keywords?: string[];
};

export function ArticleJsonLd({
  locale,
  headline,
  description,
  path,
  image,
  section,
  keywords,
}: ArticleInput) {
  const url = `${BASE_URL}${localeHref(locale, path)}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description: description.slice(0, 300),
    image: [`${BASE_URL}${image}`],
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: IN_LANGUAGE[locale],
    ...(section ? { articleSection: section } : {}),
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    author: { "@type": "Organization", name: ORG_NAME[locale], url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME[locale],
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/og-default.jpg`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** 麵包屑：協助 Google 顯示層級路徑 */
export function BreadcrumbJsonLd({
  locale,
  items,
}: {
  locale: Locale;
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${localeHref(locale, item.path)}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const ORG_DESCRIPTION: Record<Locale, string> = {
  zh: "在大自然的智慧中，找到內在的平衡與安定。花精牌卡與塔羅指引。",
  en: "Find balance and steadiness in the intelligence of nature — flower essence cards and tarot guidance.",
};

/** 全站組織資訊，掛在首頁 */
export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME[locale],
    url: BASE_URL,
    logo: `${BASE_URL}/images/og-default.jpg`,
    description: ORG_DESCRIPTION[locale],
    sameAs: [] as string[],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// src/components/JsonLd.tsx
// 結構化資料（schema.org JSON-LD），供 Google 產生 rich results。
// 伺服器元件：直接輸出 script 標籤，不進 client bundle。

const BASE_URL = "https://www.munione.co";

type ArticleInput = {
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
  headline,
  description,
  path,
  image,
  section,
  keywords,
}: ArticleInput) {
  const url = `${BASE_URL}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description: description.slice(0, 300),
    image: [`${BASE_URL}${image}`],
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "zh-TW",
    ...(section ? { articleSection: section } : {}),
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    author: { "@type": "Organization", name: "MUNI 牟尼", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "MUNI 牟尼",
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
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** 全站組織資訊，掛在首頁 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MUNI 牟尼",
    url: BASE_URL,
    logo: `${BASE_URL}/images/og-default.jpg`,
    description: "在大自然的智慧中，找到內在的平衡與安定。花精牌卡與塔羅指引。",
    sameAs: [] as string[],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

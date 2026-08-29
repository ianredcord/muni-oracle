import type { MetadataRoute } from "next";
import { FLOWERS } from "@/data/flowers.generated";
import { TAROT_CARDS } from "@/data/tarot.generated";
import { GUIDES } from "@/data/guides";
import { LOCALES, localeHref } from "@/i18n/config";
import { SITE_URL } from "@/i18n/metadata";

/** 每個路徑都輸出中英兩版，並互相標註 hreflang */
function entry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
  lastModified: Date,
): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale === "zh" ? "zh-TW" : locale] =
      `${SITE_URL}${localeHref(locale, path)}`;
  }

  return LOCALES.map((locale) => ({
    url: `${SITE_URL}${localeHref(locale, path)}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 靜態頁面
  const staticPages: { path: string; freq: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
    { path: "/", freq: "weekly", priority: 1.0 },
    { path: "/draw", freq: "monthly", priority: 0.9 },
    { path: "/flowers", freq: "monthly", priority: 0.8 },
    { path: "/guide", freq: "weekly", priority: 0.9 },
    { path: "/tarot", freq: "monthly", priority: 0.8 },
    { path: "/tarot/draw", freq: "monthly", priority: 0.9 },
    { path: "/tarot-encyclopedia", freq: "monthly", priority: 0.7 },
    { path: "/energy-support", freq: "monthly", priority: 0.7 },
    { path: "/essential-oil", freq: "monthly", priority: 0.7 },
    { path: "/chocolate", freq: "monthly", priority: 0.7 },
    { path: "/wine", freq: "monthly", priority: 0.7 },
    { path: "/green-tea", freq: "monthly", priority: 0.7 },
    { path: "/ginseng", freq: "monthly", priority: 0.7 },
    { path: "/olive-oil", freq: "monthly", priority: 0.7 },
    { path: "/somaniks", freq: "monthly", priority: 0.7 },
    { path: "/somaniks/products", freq: "monthly", priority: 0.6 },
    { path: "/muni-scent", freq: "monthly", priority: 0.7 },
    { path: "/acupuncture", freq: "monthly", priority: 0.7 },
    { path: "/frequency", freq: "monthly", priority: 0.6 },
    { path: "/systems", freq: "monthly", priority: 0.6 },
  ];

  return [
    ...staticPages.flatMap((p) => entry(p.path, p.freq, p.priority, now)),
    // 情境指引文章
    ...GUIDES.flatMap((g) => entry(`/guide/${g.slug}`, "monthly", 0.8, now)),
    // 花精動態頁面 (40 張)
    ...FLOWERS.flatMap((f) => entry(`/flowers/${f.slug}`, "monthly", 0.6, now)),
    // 塔羅牌動態頁面 (78 張)
    ...TAROT_CARDS.flatMap((c) =>
      entry(`/tarot-encyclopedia/${c.slug}`, "monthly", 0.6, now),
    ),
  ];
}

import type { MetadataRoute } from "next";
import { FLOWERS } from "@/data/flowers.generated";
import { TAROT_CARDS } from "@/data/tarot.generated";

const BASE_URL = "https://munione.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 靜態頁面
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/draw`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/flowers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tarot`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tarot/draw`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/tarot-encyclopedia`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/energy-support`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/essential-oil`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/chocolate`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/wine`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/green-tea`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ginseng`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/olive-oil`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/somaniks`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/somaniks/products`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/muni-scent`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/acupuncture`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/frequency`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/systems`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  // 花精動態頁面 (40 張)
  const flowerPages: MetadataRoute.Sitemap = FLOWERS.map((flower) => ({
    url: `${BASE_URL}/flowers/${flower.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 塔羅牌動態頁面 (78 張)
  const tarotPages: MetadataRoute.Sitemap = TAROT_CARDS.map((card) => ({
    url: `${BASE_URL}/tarot-encyclopedia/${card.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...flowerPages, ...tarotPages];
}

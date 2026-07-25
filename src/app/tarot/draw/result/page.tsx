import type { Metadata } from "next";
import { TAROT_CARDS } from "@/data/tarot.generated";
import { getTarotShareText } from "@/data/shareTexts";
import TarotResultClient from "./TarotResultClient";

// 依 card 參數動態渲染，讓搜尋引擎與社群預覽抓得到內容
export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ card?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const cardSlug = params?.card;
  const card = TAROT_CARDS.find((c) => c.slug === cardSlug);

  if (!card) {
    return {
      title: "塔羅牌指引結果 | MUNI 牟尼塔羅牌",
      description:
        "查看你的牟尼塔羅牌指引結果，包含快速解讀、深度分析與花精療癒建議。",
    };
  }

  const baseUrl = "https://www.munione.co";
  const shareText = getTarotShareText(
    card.nameZh,
    card.nameEn,
    card.uprightMessage
  );
  const title = `牟尼塔羅指引｜${card.nameZh} ${card.nameEn}`;
  const description =
    card.uprightMessage ||
    `${card.nameZh}的塔羅指引，包含快速解讀、深度分析與花精療癒建議。`;
  const pageUrl = `${baseUrl}/tarot/draw/result?card=${card.slug}`;

  return {
    title,
    description,
    openGraph: {
      type: "website",
      url: pageUrl,
      title,
      description: shareText.fb,
      siteName: "牟尼塔羅牌 MUNI",
      images: [
        {
          url: `${baseUrl}${card.image}`,
          alt: card.nameZh,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}${card.image}`],
    },
  };
}

export default async function TarotResultPage({
  searchParams,
}: {
  searchParams: Promise<{ card?: string }>;
}) {
  const params = await searchParams;
  return <TarotResultClient cardSlug={params?.card ?? ""} />;
}

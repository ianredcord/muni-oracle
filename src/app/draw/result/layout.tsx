import type { Metadata } from "next";
import { FLOWERS } from "@/data/flowers.generated";
import { getShareText } from "@/data/shareTexts";

// 動態生成 OG Meta
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ card?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const cardSlug = params?.card || "agrimony";
  
  // 找到對應的花精
  const flower = FLOWERS.find(f => f.slug === cardSlug) || FLOWERS[0];
  
  // 取得分享文案
  const shareText = getShareText(flower.slug, flower.name);
  
  // 網站基礎 URL（部署後需要更新為正式域名）
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.munione.co";
  
  const ogTitle = `牟尼花精指引｜${flower.name}`;
  const ogDescription = shareText.fb;
  const ogImage = `${baseUrl}${flower.image}`;
  // 使用原始的 cardSlug 而非 flower.slug，確保 URL 參數正確
  const pageUrl = `${baseUrl}/draw/result?card=${cardSlug}`;

  return {
    title: ogTitle,
    description: ogDescription,
    openGraph: {
      type: "website",
      url: pageUrl,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: ogImage,
          width: 600,
          height: 894,
          alt: flower.name,
        },
      ],
      siteName: "牟尼花精指引 MUNI",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

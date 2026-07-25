// 分享文案資料
// 每張卡片的 FB、LINE、IG 分享文案

import { FLOWERS } from "./flowers.generated";

export type ShareText = {
  fb: string;
  line: string;
  ig: string;
};

// 根據卡片 slug 取得分享文案
export function getShareText(slug: string, cardName: string): ShareText {
  // 找到對應的花精卡片資料
  const flower = FLOWERS.find(f => f.slug === slug);
  
  // 取得 Step 2 的一句重點提示（cardLine）
  const cardLine = flower?.quick.step2Body || "";
  
  // 取得牌卡標題（去除英文名稱，只保留中文）
  // 例如：Agrimony（龍芽草）-> 龍芽草
  const cardTitleMatch = cardName.match(/（([^）]+)）/);
  const cardTitle = cardTitleMatch ? `〈${cardTitleMatch[1]}〉` : `〈${cardName}〉`;
  
  // 分享網址
  const shareUrl = "munione.co";
  
  // 新的 FB 分享文案格式
  const fbText = `今天在 MUNI 能量支持系統抽到${cardTitle}，提醒自己在日常裡慢一點、穩一點。

${cardLine}

如果你也想看看今天的能量訊息，可以到這裡抽一張屬於你的牌：${shareUrl}`;

  // 預設模板
  const defaultShareText: ShareText = {
    fb: fbText,
    line: `我在牟尼花精指引抽到『${cardName}』，一起來抽一張牌看看今天的訊息。`,
    ig: `${cardName}\n今日花精指引`,
  };

  // 可以在這裡為特定卡片自訂文案
  const customShareTexts: Record<string, Partial<ShareText>> = {
    // 範例：
    // agrimony: {
    //   fb: "自訂的 Agrimony FB 分享文案",
    // },
  };

  const custom = customShareTexts[slug];
  if (custom) {
    return {
      ...defaultShareText,
      ...custom,
    };
  }

  return defaultShareText;
}

// 塔羅牌分享文案
export function getTarotShareText(
  nameZh: string,
  nameEn: string,
  uprightMessage?: string
): ShareText {
  const shareUrl = "munione.co";
  const line1 = uprightMessage?.split("。")[0];
  const cardLine = line1 ? `${line1}。` : "";

  return {
    fb: `今天在 MUNI 牟尼塔羅抽到〈${nameZh}〉，把它記下來，提醒自己此刻的處境。

${cardLine}

如果你也想看看今天的指引，可以到這裡抽一張屬於你的牌：${shareUrl}`,
    line: `我在牟尼塔羅抽到『${nameZh}』，一起來抽一張牌看看今天的訊息。`,
    ig: `${nameZh} ${nameEn}\n今日塔羅指引`,
  };
}

// 產生分享 URL
export function generateShareUrl(
  platform: "facebook" | "line",
  pageUrl: string,
  shareText: ShareText
): string {
  const encodedUrl = encodeURIComponent(pageUrl);

  switch (platform) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case "line":
      const lineText = encodeURIComponent(`${shareText.line}\n${pageUrl}`);
      return `https://line.me/R/msg/text/?${lineText}`;
    default:
      return "";
  }
}

// 開啟分享視窗
export function openShareWindow(url: string): void {
  window.open(url, "_blank", "width=600,height=400,noopener,noreferrer");
}

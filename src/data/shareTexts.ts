// 分享文案資料
// 每張卡片的 FB、LINE、IG 分享文案

export type ShareText = {
  fb: string;
  line: string;
  ig: string;
};

// 根據卡片 slug 取得分享文案
export function getShareText(slug: string, cardName: string): ShareText {
  // 預設模板
  const defaultShareText: ShareText = {
    fb: `我在牟尼花精指引抽到『${cardName}』，來看看這張牌給我的提醒。`,
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

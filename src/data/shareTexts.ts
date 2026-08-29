// 分享文案資料
// 每張卡片的 FB、LINE、IG 分享文案（中英文）

import type { Locale } from "@/i18n/config";
import { getFlowerBySlug } from "./flowers";

export type ShareText = {
  fb: string;
  line: string;
  ig: string;
};

const SHARE_URL = "munione.co";

/** 中文牌名格式為「Agrimony（龍芽草）」，取出括號內的中文；英文直接使用原名 */
function cardTitle(locale: Locale, cardName: string): string {
  if (locale !== "zh") return `“${cardName}”`;
  const match = cardName.match(/（([^）]+)）/);
  return match ? `〈${match[1]}〉` : `〈${cardName}〉`;
}

// 根據卡片 slug 取得分享文案
export function getShareText(
  locale: Locale,
  slug: string,
  cardName: string,
): ShareText {
  // Step 2 的一句重點提示
  const cardLine = getFlowerBySlug(locale, slug)?.quick.step2Body ?? "";
  const title = cardTitle(locale, cardName);

  if (locale === "en") {
    return {
      fb: `Today I drew ${title} in the MUNI energy support system — a reminder to go a little slower and steadier through the day.

${cardLine}

If you'd like to see today's message for you, draw your own card here: ${SHARE_URL}`,
      line: `I drew “${cardName}” in the MUNI flower essence guidance — draw one and see what today has for you.`,
      ig: `${cardName}\nToday's flower essence guidance`,
    };
  }

  return {
    fb: `今天在 MUNI 能量支持系統抽到${title}，提醒自己在日常裡慢一點、穩一點。

${cardLine}

如果你也想看看今天的能量訊息，可以到這裡抽一張屬於你的牌：${SHARE_URL}`,
    line: `我在牟尼花精指引抽到『${cardName}』，一起來抽一張牌看看今天的訊息。`,
    ig: `${cardName}\n今日花精指引`,
  };
}

// 塔羅牌分享文案
export function getTarotShareText(
  locale: Locale,
  displayName: string,
  altName: string,
  uprightMessage?: string,
): ShareText {
  // 取正位訊息的第一句
  const separator = locale === "zh" ? "。" : ".";
  const first = uprightMessage?.split(separator)[0];
  const cardLine = first ? `${first}${separator}` : "";

  if (locale === "en") {
    return {
      fb: `Today I drew “${displayName}” in the MUNI Tarot — noting it down as a reminder of where I am right now.

${cardLine}

If you'd like today's guidance, draw your own card here: ${SHARE_URL}`,
      line: `I drew “${displayName}” in the MUNI Tarot — draw one and see what today has for you.`,
      ig: `${displayName} ${altName}\nToday's tarot guidance`,
    };
  }

  return {
    fb: `今天在 MUNI 牟尼塔羅抽到〈${displayName}〉，把它記下來，提醒自己此刻的處境。

${cardLine}

如果你也想看看今天的指引，可以到這裡抽一張屬於你的牌：${SHARE_URL}`,
    line: `我在牟尼塔羅抽到『${displayName}』，一起來抽一張牌看看今天的訊息。`,
    ig: `${displayName} ${altName}\n今日塔羅指引`,
  };
}

// 產生分享 URL
export function generateShareUrl(
  platform: "facebook" | "line",
  pageUrl: string,
  shareText: ShareText,
): string {
  const encodedUrl = encodeURIComponent(pageUrl);

  switch (platform) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case "line": {
      const lineText = encodeURIComponent(`${shareText.line}\n${pageUrl}`);
      return `https://line.me/R/msg/text/?${lineText}`;
    }
    default:
      return "";
  }
}

// 開啟分享視窗
export function openShareWindow(url: string): void {
  window.open(url, "_blank", "width=600,height=400,noopener,noreferrer");
}

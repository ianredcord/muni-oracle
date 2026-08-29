// 深度解析段落切割工具
// 從 card.deep.body 中切割出各個段落（中英文共用）

import type { Locale } from "@/i18n/config";

export const SECTION_KEYS = [
  "emotion",
  "neuroception",
  "support",
  "practice",
  "scent",
] as const;

export type SectionKey = (typeof SECTION_KEYS)[number];

/** 各語言在 deep.body 內使用的段落標題（含【】），順序需與 SECTION_KEYS 一致 */
export const SECTION_TITLES: Record<Locale, Record<SectionKey, string>> = {
  zh: {
    emotion: "【情緒特徵】",
    neuroception: "【神經覺視角】",
    support: "【花精支持】",
    practice: "【今日練習】",
    scent: "【MUNI 牟尼香指引】",
  },
  en: {
    emotion: "【Emotional signature】",
    neuroception: "【Through the lens of neuroception】",
    support: "【How this essence supports you】",
    practice: "【Today's practice】",
    scent: "【Working with MUNI Scent】",
  },
};

export interface DeepSection {
  key: SectionKey;
  title: string;
  content: string;
}

/**
 * 清理文字中的底線行
 * 過濾掉整行只包含底線或連續底線字元的行
 */
export function cleanUnderlines(text: string): string {
  return text
    .split("\n")
    .filter((line) => !/^[_\s]*$/.test(line.trim()) || line.trim() === "")
    .join("\n")
    .trim();
}

/**
 * 從深度解析文字中切割出各個段落
 * @param body - card.deep.body 的原始文字
 * @param locale - 內容語言，決定要比對哪一組段落標題
 */
export function parseDeepBody(body: string, locale: Locale = "zh"): DeepSection[] {
  const titles = SECTION_TITLES[locale];
  const sections: DeepSection[] = [];

  for (let i = 0; i < SECTION_KEYS.length; i++) {
    const key = SECTION_KEYS[i];
    const currentTitle = titles[key];
    const startIndex = body.indexOf(currentTitle);

    if (startIndex === -1) {
      // 找不到這個標題，跳過
      continue;
    }

    // 找下一個標題的位置
    let endIndex = body.length;
    for (let j = i + 1; j < SECTION_KEYS.length; j++) {
      const nextTitleIndex = body.indexOf(
        titles[SECTION_KEYS[j]],
        startIndex + currentTitle.length,
      );
      if (nextTitleIndex !== -1) {
        endIndex = nextTitleIndex;
        break;
      }
    }

    // 擷取內容（去掉標題本身）
    const content = body
      .substring(startIndex + currentTitle.length, endIndex)
      .trim();

    if (content) {
      sections.push({ key, title: currentTitle, content: cleanUnderlines(content) });
    }
  }

  return sections;
}

/** 深度解析卡片的背景色設定，依段落語意鍵取用，與語言無關 */
export const SECTION_COLORS: Record<SectionKey, { bg: string; border: string }> = {
  emotion: { bg: "bg-rose-50/80", border: "border-rose-100" },
  neuroception: { bg: "bg-blue-50/80", border: "border-blue-100" },
  support: { bg: "bg-emerald-50/80", border: "border-emerald-100" },
  practice: { bg: "bg-amber-50/80", border: "border-amber-100" },
  scent: { bg: "bg-purple-50/80", border: "border-purple-100" },
};

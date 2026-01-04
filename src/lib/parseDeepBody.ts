// 深度解析段落切割工具
// 從 card.deep.body 中切割出各個段落

export interface DeepSection {
  title: string;
  content: string;
}

const SECTION_TITLES = [
  "【情緒特徵】",
  "【神經覺視角】",
  "【花精支持】",
  "【今日練習】",
  "【MUNI 牟尼香指引】",
];

/**
 * 從深度解析文字中切割出各個段落
 * @param body - card.deep.body 的原始文字
 * @returns 切割後的段落陣列
 */
/**
 * 清理文字中的底線行
 * 過濾掉整行只包含底線或連續底線字元的行
 * @param text - 原始文字
 * @returns 清理後的文字
 */
export function cleanUnderlines(text: string): string {
  return text
    .split('\n')
    .filter(line => !/^[_\s]*$/.test(line.trim()) || line.trim() === '')
    .join('\n')
    .trim();
}

export function parseDeepBody(body: string): DeepSection[] {
  const sections: DeepSection[] = [];

  for (let i = 0; i < SECTION_TITLES.length; i++) {
    const currentTitle = SECTION_TITLES[i];
    const startIndex = body.indexOf(currentTitle);

    if (startIndex === -1) {
      // 找不到這個標題，跳過
      continue;
    }

    // 找下一個標題的位置
    let endIndex = body.length;
    for (let j = i + 1; j < SECTION_TITLES.length; j++) {
      const nextTitleIndex = body.indexOf(SECTION_TITLES[j], startIndex + currentTitle.length);
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
      sections.push({
        title: currentTitle,
        content: cleanUnderlines(content),
      });
    }
  }

  return sections;
}

/**
 * 深度解析卡片的背景色設定
 */
export const SECTION_COLORS: Record<string, { bg: string; border: string }> = {
  "【情緒特徵】": { bg: "bg-rose-50/80", border: "border-rose-100" },
  "【神經覺視角】": { bg: "bg-blue-50/80", border: "border-blue-100" },
  "【花精支持】": { bg: "bg-emerald-50/80", border: "border-emerald-100" },
  "【今日練習】": { bg: "bg-amber-50/80", border: "border-amber-100" },
  "【MUNI 牟尼香指引】": { bg: "bg-purple-50/80", border: "border-purple-100" },
};

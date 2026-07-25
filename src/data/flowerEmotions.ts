// src/data/flowerEmotions.ts
// 巴哈醫生的七大情緒分類（公開站使用）。
// 花精與情緒的對應沿用內部系統 src/data/flow-system/emotions.ts 為單一來源，
// 此處只取出對訪客有意義的欄位，並補上給一般讀者的說明文字。

import { emotionGroups } from "./flow-system/emotions";

export type EmotionFlower = {
  slug: string;
  /** 英文花精名，例如 "Rock Rose" */
  name: string;
  /** 這張花精在此分類中對應的情緒主題 */
  theme: string;
};

export type EmotionGroupPublic = {
  slug: string;
  /** 短標題，例如「恐懼」 */
  title: string;
  nameEn: string;
  /** 給訪客的白話說明：什麼狀態屬於這一類 */
  description: string;
  /** 常見的說法，用於幫助自我辨識 */
  examples: string[];
  flowers: EmotionFlower[];
};

/** 各分類給一般讀者的說明（內部資料裡的敘述偏臨床，不適合直接對外） */
const COPY: Record<
  string,
  { title: string; description: string; examples: string[] }
> = {
  fear: {
    title: "恐懼",
    description:
      "有具體害怕的對象，或說不出原因的不安；也包含替他人擔心到影響自己。",
    examples: ["會怕但說不出在怕什麼", "擔心失控", "老是替家人懸著心"],
  },
  uncertainty: {
    title: "不確定",
    description: "拿不定主意、對自己的判斷沒把握，或看不清接下來要往哪走。",
    examples: ["總是問別人意見", "在兩個選擇間反覆", "不知道自己想要什麼"],
  },
  "lack-of-interest": {
    title: "對當下缺乏興趣",
    description: "人在這裡，心不在這裡。可能是恍神、留在過去，或累到無感。",
    examples: ["思緒停不下來", "一直想起以前", "提不起勁、覺得無所謂"],
  },
  loneliness: {
    title: "孤獨",
    description: "與人之間的距離感——太近或太遠，都可能讓人覺得孤單。",
    examples: ["急著把事情做完", "需要有人聽我說", "覺得沒人真的懂"],
  },
  oversensitive: {
    title: "過度敏感",
    description: "對外界的影響特別容易起反應，於是用某種方式把自己撐住。",
    examples: ["笑著說我沒事", "很難拒絕別人", "容易被比較刺到"],
  },
  despair: {
    title: "沮喪與絕望",
    description: "被壓垮、自責，或覺得再怎麼努力都沒有用的時候。",
    examples: ["都是我的錯", "撐不住了", "覺得不公平", "怎麼樣都不夠好"],
  },
  "over-care": {
    title: "過度關心他人",
    description: "把很多力氣放在他人或某個標準上，對自己和別人都很嚴格。",
    examples: ["希望對方照我說的做", "看不慣別人的做法", "對自己要求很高"],
  },
};

/** 公開用的七大分類（順序沿用巴哈原著） */
export const EMOTION_GROUPS: EmotionGroupPublic[] = emotionGroups.map((g) => {
  const copy = COPY[g.slug];
  return {
    slug: g.slug,
    title: copy?.title ?? g.nameEn,
    nameEn: g.nameEn,
    description: copy?.description ?? "",
    examples: copy?.examples ?? [],
    flowers: g.flowers.map((f) => ({
      slug: f.slug,
      name: f.name,
      theme: f.emotionTheme,
    })),
  };
});

/** slug → 所屬分類 */
const FLOWER_TO_GROUP = new Map<string, EmotionGroupPublic>();
for (const group of EMOTION_GROUPS) {
  for (const f of group.flowers) {
    FLOWER_TO_GROUP.set(f.slug, group);
  }
}

export function getEmotionGroup(slug: string): EmotionGroupPublic | undefined {
  return EMOTION_GROUPS.find((g) => g.slug === slug);
}

/** 取得某張花精所屬的情緒分類（Rescue 複方不屬於七大分類，回傳 undefined） */
export function getGroupForFlower(
  flowerSlug: string
): EmotionGroupPublic | undefined {
  return FLOWER_TO_GROUP.get(flowerSlug);
}

/** 取得某張花精在其分類中的情緒主題 */
export function getThemeForFlower(flowerSlug: string): string | undefined {
  return FLOWER_TO_GROUP.get(flowerSlug)?.flowers.find(
    (f) => f.slug === flowerSlug
  )?.theme;
}

/** 同分類的其他花精，用於「相關花精」導覽 */
export function getRelatedFlowers(flowerSlug: string): EmotionFlower[] {
  const group = FLOWER_TO_GROUP.get(flowerSlug);
  if (!group) return [];
  return group.flowers.filter((f) => f.slug !== flowerSlug);
}

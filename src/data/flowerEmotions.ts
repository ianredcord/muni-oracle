// src/data/flowerEmotions.ts
// 巴哈醫生的七大情緒分類（公開站使用）。
// 花精與情緒的對應沿用內部系統 src/data/flow-system/emotions.ts 為單一來源，
// 此處只取出對訪客有意義的欄位，並補上給一般讀者的中英文說明。

import type { Locale } from "@/i18n/config";
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

type GroupCopy = { title: string; description: string; examples: string[] };

/** 各分類給一般讀者的說明（內部資料裡的敘述偏臨床，不適合直接對外） */
const COPY: Record<Locale, Record<string, GroupCopy>> = {
  zh: {
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
  },
  en: {
    fear: {
      title: "Fear",
      description:
        "Fear with a clear object, or unease you can't trace; it also covers worrying about someone else until it costs you.",
      examples: [
        "Afraid, and I can't say of what",
        "Worried I'll lose control",
        "Always carrying a worry for my family",
      ],
    },
    uncertainty: {
      title: "Uncertainty",
      description:
        "Unable to settle on a decision, unsure of your own judgement, or unclear about where to go next.",
      examples: [
        "I always ask what others think",
        "I keep swinging between two options",
        "I don't know what I want",
      ],
    },
    "lack-of-interest": {
      title: "Not present",
      description:
        "You're here, but not really here — drifting off, living in the past, or too tired to feel anything.",
      examples: [
        "My mind won't stop",
        "I keep going back to how it was",
        "No drive; nothing much matters",
      ],
    },
    loneliness: {
      title: "Loneliness",
      description:
        "The distance between you and other people — too close or too far, both can leave you lonely.",
      examples: [
        "I rush to get things finished",
        "I need someone to listen",
        "No one really understands",
      ],
    },
    oversensitive: {
      title: "Oversensitivity",
      description:
        "You react easily to what's around you, so you find some way to hold yourself together.",
      examples: [
        "I smile and say I'm fine",
        "I find it hard to say no",
        "Comparison gets under my skin",
      ],
    },
    despair: {
      title: "Despondency and despair",
      description:
        "Being overwhelmed, blaming yourself, or feeling that no amount of effort will help.",
      examples: [
        "It's all my fault",
        "I can't hold on",
        "It isn't fair",
        "Nothing I do is enough",
      ],
    },
    "over-care": {
      title: "Over-care for others",
      description:
        "A great deal of your energy goes into other people or a standard, and you're strict with yourself and with them.",
      examples: [
        "I want them to do it my way",
        "I can't stand how they go about it",
        "I hold myself to a high bar",
      ],
    },
  },
};

/** 各花精在分類中的情緒主題（英文），中文沿用內部系統資料 */
const THEME_EN: Record<string, string> = {
  "rock-rose": "Terror, panic",
  mimulus: "Known fear, timidity",
  "cherry-plum": "Fear of losing control",
  aspen: "Unnamed fear, vague unease",
  "red-chestnut": "Over-worry for others",
  cerato: "Distrust of your own judgement",
  scleranthus: "Indecision, swinging between options",
  gentian: "Easily discouraged, pessimism",
  gorse: "Deep hopelessness, giving up",
  hornbeam: "Mental fatigue, the Monday feeling",
  "wild-oat": "Lost sense of life direction",
  clematis: "Daydreaming, living in imagination",
  honeysuckle: "Living in the past, unable to move on",
  "wild-rose": "Resignation, low vitality",
  olive: "Total exhaustion of body and mind",
  "white-chestnut": "Thoughts that won't stop circling",
  mustard: "Sudden, unexplained gloom",
  "chestnut-bud": "Repeating the same mistake",
  heather: "Self-absorption, needing to be heard",
  impatiens: "Impatience, irritability",
  "water-violet": "Aloofness, deliberate distance",
  agrimony: "A cheerful mask over hidden pain",
  centaury: "Unable to say no, over-pleasing",
  holly: "Envy, anger, suspicion",
  walnut: "Sensitivity in transition, easily swayed",
  larch: "Low confidence, expecting to fail",
  pine: "Self-blame, guilt",
  elm: "Overwhelmed by responsibility",
  "sweet-chestnut": "Dark night of the soul, extreme anguish",
  "star-of-bethlehem": "Shock after trauma",
  willow: "Resentment, feeling wronged",
  "crab-apple": "Self-dislike, need for cleanliness",
  oak: "Persisting past the point of rest",
  chicory: "Possessiveness, love with strings",
  vervain: "Over-zeal, the missionary streak",
  vine: "Need for control, dominance",
  beech: "Criticism, intolerance of difference",
  "rock-water": "Self-denial, excessive strictness",
};

function buildGroups(locale: Locale): EmotionGroupPublic[] {
  const copy = COPY[locale] ?? COPY.zh;

  return emotionGroups.map((g) => {
    const groupCopy = copy[g.slug];

    return {
      slug: g.slug,
      title: groupCopy?.title ?? g.nameEn,
      nameEn: g.nameEn,
      description: groupCopy?.description ?? "",
      examples: groupCopy?.examples ?? [],
      flowers: g.flowers.map((f) => ({
        slug: f.slug,
        name: f.name,
        theme: locale === "en" ? (THEME_EN[f.slug] ?? f.emotionTheme) : f.emotionTheme,
      })),
    };
  });
}

/** 公開用的七大分類（順序沿用巴哈原著） */
const GROUPS_BY_LOCALE: Record<Locale, EmotionGroupPublic[]> = {
  zh: buildGroups("zh"),
  en: buildGroups("en"),
};

export function getEmotionGroups(locale: Locale): EmotionGroupPublic[] {
  return GROUPS_BY_LOCALE[locale] ?? GROUPS_BY_LOCALE.zh;
}

const FLOWER_TO_GROUP: Record<Locale, Map<string, EmotionGroupPublic>> = {
  zh: new Map(),
  en: new Map(),
};

for (const locale of ["zh", "en"] as const) {
  for (const group of GROUPS_BY_LOCALE[locale]) {
    for (const f of group.flowers) {
      FLOWER_TO_GROUP[locale].set(f.slug, group);
    }
  }
}

export function getEmotionGroup(
  locale: Locale,
  slug: string,
): EmotionGroupPublic | undefined {
  return getEmotionGroups(locale).find((g) => g.slug === slug);
}

/** 取得某張花精所屬的情緒分類（Rescue 複方不屬於七大分類，回傳 undefined） */
export function getGroupForFlower(
  locale: Locale,
  flowerSlug: string,
): EmotionGroupPublic | undefined {
  return FLOWER_TO_GROUP[locale].get(flowerSlug);
}

/** 取得某張花精在其分類中的情緒主題 */
export function getThemeForFlower(
  locale: Locale,
  flowerSlug: string,
): string | undefined {
  return FLOWER_TO_GROUP[locale]
    .get(flowerSlug)
    ?.flowers.find((f) => f.slug === flowerSlug)?.theme;
}

/** 同分類的其他花精，用於「相關花精」導覽 */
export function getRelatedFlowers(
  locale: Locale,
  flowerSlug: string,
): EmotionFlower[] {
  const group = FLOWER_TO_GROUP[locale].get(flowerSlug);
  if (!group) return [];
  return group.flowers.filter((f) => f.slug !== flowerSlug);
}

export type BodySupportType = "support" | "release";

export interface BodySupportPoint {
  slug: string;
  title: string;
  shortLabel: string;
  type: BodySupportType;
  image: string;
  locationText: string;
  acupointName: string;
  helperText: string;
  supportText: string[];
  usageText: string;
  pairingText: string;
  pairings?: string[];
}

export const bodySupportPoints: BodySupportPoint[] = [
  {
    slug: "ki6",
    title: "當你覺得撐不住",
    shortLabel: "支持穩定",
    type: "support",
    image: "/images/body-support/ki6.jpg",
    locationText: "腳踝內側",
    acupointName: "照海 KI-6",
    helperText: "在腳踝內側凹陷的位置",
    supportText: [
      "讓身體慢慢穩下來",
      "找回一點安定的感覺",
      "幫助你比較不需要一直撐著",
    ],
    usageText: "貼上後，讓呼吸慢一點就好，不需要特別做什麼，讓身體自己慢慢調整。",
    pairingText: "可以先抽花精牌卡，聞一下牟尼香，再貼上 Somaniks。",
    pairings: ["mimulus", "aspen", "cherry-plum", "red-chestnut"],
  },
  {
    slug: "sp4",
    title: "當你很散、抓不到中心",
    shortLabel: "支持中心",
    type: "support",
    image: "/images/body-support/sp4.jpg",
    locationText: "腳內側",
    acupointName: "公孫 SP-4",
    helperText: "在足弓前方、腳內側骨頭下方的位置",
    supportText: [
      "支持你回到比較穩定的中心",
      "讓混亂的感覺慢慢安定下來",
      "幫助你比較容易找回方向感",
    ],
    usageText: "貼上後，先感覺腳底與地面的接觸，讓注意力慢慢回到自己。",
    pairingText: "可以先抽花精牌卡，聞一下牟尼香，再貼上 Somaniks。",
    pairings: ["scleranthus", "cerato", "gentian", "hornbeam", "wild-oat"],
  },
  {
    slug: "si3",
    title: "當你有點飄、回不到當下",
    shortLabel: "支持回神",
    type: "support",
    image: "/images/body-support/si3.jpg",
    locationText: "手小指外側",
    acupointName: "後溪 SI-3",
    helperText: "握拳時，在小指根部外側凸起後方的位置",
    supportText: [
      "支持你慢慢回到當下",
      "讓注意力重新回到身體",
      "幫助你比較有『在這裡』的感覺",
    ],
    usageText: "貼上後，可以把注意力放在手的接觸感，停留幾次自然呼吸就好。",
    pairingText: "可以先抽花精牌卡，聞一下牟尼香，再貼上 Somaniks。",
    pairings: ["clematis", "wild-rose", "olive", "sweet-chestnut"],
  },
  {
    slug: "bl62",
    title: "當你需要落地、回到身體",
    shortLabel: "支持落地",
    type: "support",
    image: "/images/body-support/bl62.jpg",
    locationText: "腳踝外側",
    acupointName: "申脈 BL-62",
    helperText: "在外腳踝下方凹陷的位置",
    supportText: [
      "支持你回到比較踏實的狀態",
      "讓飄散的感覺慢慢落下來",
      "幫助身體找回一點底氣與安定",
    ],
    usageText: "貼上後，先把注意力放到腳底，感覺自己被地面承接。",
    pairingText: "可以先抽花精牌卡，聞一下牟尼香，再貼上 Somaniks。",
    pairings: ["aspen", "rock-rose", "mimulus", "honeysuckle"],
  },
  {
    slug: "pc6",
    title: "當你胸口很緊、停不下來",
    shortLabel: "釋放壓力",
    type: "release",
    image: "/images/body-support/pc6.jpg",
    locationText: "手腕內側",
    acupointName: "內關 PC-6",
    helperText: "在手腕內側橫紋上方約三指寬的位置",
    supportText: [
      "釋放胸口的緊與壓力",
      "讓那種停不下來的感覺慢慢鬆開",
      "幫助思緒和呼吸慢慢放鬆下來",
    ],
    usageText: "貼上後，不需要用力調整自己，只要讓呼吸慢一點，讓身體自己往下走。",
    pairingText: "可以先抽花精牌卡，聞一下牟尼香，再貼上 Somaniks。",
    pairings: ["white-chestnut", "impatiens", "water-violet", "heather", "agrimony"],
  },
  {
    slug: "sj5",
    title: "當你太滿、太緊、需要鬆開",
    shortLabel: "釋放卡緊",
    type: "release",
    image: "/images/body-support/sj5.jpg",
    locationText: "手腕外側",
    acupointName: "外關 SJ-5",
    helperText: "在手腕背側橫紋上方約三指寬的位置",
    supportText: [
      "釋放身體裡累積的緊繃感",
      "讓過度用力的狀態慢慢鬆開",
      "幫助你回到比較自然的節奏",
    ],
    usageText: "貼上後，讓肩膀和手臂自然放鬆，不需要刻意做什麼。",
    pairingText: "可以先抽花精牌卡，聞一下牟尼香，再貼上 Somaniks。",
    pairings: ["vervain", "vine", "beech", "impatiens"],
  },
  {
    slug: "gb41",
    title: "當你感覺有些東西卡住了",
    shortLabel: "釋放卡住",
    type: "release",
    image: "/images/body-support/gb41.jpg",
    locationText: "腳背外側",
    acupointName: "足臨泣 GB-41",
    helperText: "在第四與第五趾骨之間、腳背外側凹陷的位置",
    supportText: [
      "釋放身體裡卡住的感覺",
      "讓壓抑的情緒慢慢有空間流動",
      "幫助那些說不出來的東西慢慢鬆開",
    ],
    usageText: "貼上後，可以先站穩或坐好，感覺腳與地面的接觸，讓卡住的感覺有地方可以流動。",
    pairingText: "可以先抽花精牌卡，聞一下牟尼香，再貼上 Somaniks。",
    pairings: ["star-of-bethlehem", "pine", "willow", "crab-apple", "mustard", "larch"],
  },
  {
    slug: "lu7",
    title: "當你需要界線與空間",
    shortLabel: "釋放壓力",
    type: "release",
    image: "/images/body-support/lu7.jpg",
    locationText: "手腕拇指側",
    acupointName: "列缺 LU-7",
    helperText: "在手腕上方、拇指側骨頭旁邊的小凹陷處",
    supportText: [
      "釋放外界帶來的壓力與拉扯",
      "讓你和外界之間多一點空間",
      "幫助身體比較容易放下過度敏感",
    ],
    usageText: "貼上後，先不要急著回應外界，讓自己有一小段安靜的時間。",
    pairingText: "可以先抽花精牌卡，聞一下牟尼香，再貼上 Somaniks。",
    pairings: ["walnut", "centaury", "holly", "agrimony", "rock-water"],
  },
];

export const bodySupportPointMap = Object.fromEntries(
  bodySupportPoints.map((point) => [point.slug, point])
) as Record<string, BodySupportPoint>;

/* ── 花精 → 穴位反向 mapping ── */

export type FlowerPointLink = {
  primary: string[];
  secondary?: string[];
};

export const flowerToPointsMap: Record<string, FlowerPointLink> = {
  /* 恐懼群 */
  "rock-rose":       { primary: ["ki6"] },
  mimulus:           { primary: ["ki6"], secondary: ["bl62"] },
  "cherry-plum":     { primary: ["ki6"] },
  aspen:             { primary: ["bl62"], secondary: ["ki6"] },
  "red-chestnut":    { primary: ["ki6"] },

  /* 不確定群 */
  cerato:            { primary: ["sp4"] },
  scleranthus:       { primary: ["sp4"] },
  gentian:           { primary: ["sp4"] },
  gorse:             { primary: ["sp4"] },
  hornbeam:          { primary: ["sp4"] },
  "wild-oat":        { primary: ["sp4"] },

  /* 對當下缺乏興趣群 */
  clematis:          { primary: ["si3"] },
  honeysuckle:       { primary: ["ki6"], secondary: ["bl62"] },
  "wild-rose":       { primary: ["si3"] },
  olive:             { primary: ["si3"] },
  "white-chestnut":  { primary: ["pc6"] },
  mustard:           { primary: ["gb41"] },
  "chestnut-bud":    { primary: ["sp4"] },

  /* 寂寞群 */
  heather:           { primary: ["pc6"] },
  impatiens:         { primary: ["pc6"], secondary: ["sj5"] },
  "water-violet":    { primary: ["pc6"] },

  /* 過度敏感群 */
  agrimony:          { primary: ["lu7"], secondary: ["pc6"] },
  centaury:          { primary: ["lu7"] },
  holly:             { primary: ["lu7"] },
  walnut:            { primary: ["lu7"] },

  /* 沮喪絕望群 */
  larch:             { primary: ["gb41"] },
  pine:              { primary: ["gb41"] },
  elm:               { primary: ["gb41"], secondary: ["sp4"] },
  "sweet-chestnut":  { primary: ["si3"] },
  "star-of-bethlehem": { primary: ["gb41"] },
  willow:            { primary: ["gb41"] },
  "crab-apple":      { primary: ["gb41"] },

  /* 過度關心他人群 */
  chicory:           { primary: ["gb41"], secondary: ["lu7"] },
  vervain:           { primary: ["sj5"] },
  vine:              { primary: ["sj5"] },
  beech:             { primary: ["sj5"] },
  "rock-water":      { primary: ["lu7"] },
  oak:               { primary: ["lu7"], secondary: ["sj5"] },
};

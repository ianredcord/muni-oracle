export interface Hexagram {
  slug: string;
  name: string; // Chinese name
  nameEn: string; // e.g. "Peace"
  symbol: string; // Unicode trigram/hexagram or descriptive
  element: string; // Five element position
  compassDirection: string;
  herbalFormula: string;
  formulaFunction: string;
  qiMechanism: string; // 氣機作用
  relatedAcupoints: string[]; // acupoint codes
  relatedEmotions: string[]; // emotion group slugs
  description: string; // detailed description
}

export const hexagrams: Hexagram[] = [
  {
    slug: "tai",
    name: "泰（地天泰）",
    nameEn: "Peace",
    symbol: "☷☰",
    element: "中土樞轉",
    compassDirection: "中央",
    herbalFormula: "桂枝加朮附湯",
    formulaFunction: "溫陽散寒，健脾除濕",
    qiMechanism: "天地交通，一氣流轉之成果象",
    relatedAcupoints: ["SI-3", "UB-62"],
    relatedEmotions: ["fear", "lack-of-interest"],
    description:
      "泰卦象徵天地交通，陰陽和諧。在一氣周流中代表左升右降的理想狀態，是氣機流轉的成果象。桂枝加朮附湯溫通陽氣、驅散寒濕，助全圓流轉。",
  },
  {
    slug: "zhen",
    name: "震（雷）",
    nameEn: "Thunder",
    symbol: "☳",
    element: "東/木/春",
    compassDirection: "東方",
    herbalFormula: "補中益氣湯",
    formulaFunction: "補中氣，升舉清陽",
    qiMechanism: "一陽升發，脾升肝達",
    relatedAcupoints: ["SP-4", "SI-3"],
    relatedEmotions: ["uncertainty", "lack-of-interest"],
    description:
      "震卦為雷，代表一陽初動、春氣升發。對應一氣周流的左升階段，脾土升清帶動肝木疏達。補中益氣湯是升舉清陽的代表方，補脾氣以啟動左升。",
  },
  {
    slug: "xun",
    name: "巽（風）",
    nameEn: "Wind",
    symbol: "☴",
    element: "東南/木",
    compassDirection: "東南",
    herbalFormula: "加味逍遙散",
    formulaFunction: "疏肝解鬱，養血健脾",
    qiMechanism: "風木疏達，疏肝解鬱",
    relatedAcupoints: ["GB-41", "SJ-5"],
    relatedEmotions: ["despair"],
    description:
      "巽卦為風，代表風木疏達、柔順而入。當肝木鬱結不通時，需要巽風來疏解。加味逍遙散疏肝解鬱、養血健脾，是疏通肝木鬱結的經典方。",
  },
  {
    slug: "li",
    name: "離（火）",
    nameEn: "Fire",
    symbol: "☲",
    element: "南/心火",
    compassDirection: "南方",
    herbalFormula: "麥門冬湯",
    formulaFunction: "養陰清心，潤肺益胃",
    qiMechanism: "養離陰，清心火",
    relatedAcupoints: ["PC-6"],
    relatedEmotions: ["loneliness"],
    description:
      "離卦為火，代表心火明照。但離中虛，需要陰液滋養才能持續明亮而不枯竭。麥門冬湯養離中之陰，清心火而不傷正，維持心神安定。",
  },
  {
    slug: "kun",
    name: "坤（地）",
    nameEn: "Earth",
    symbol: "☷",
    element: "中/脾土",
    compassDirection: "中央",
    herbalFormula: "六君子湯",
    formulaFunction: "補脾益氣，燥濕化痰",
    qiMechanism: "厚土生萬物，補脾升清",
    relatedAcupoints: ["SP-4", "PC-6"],
    relatedEmotions: ["uncertainty"],
    description:
      "坤卦為地，代表大地厚德載物。脾土居中，是一氣周流的樞紐。六君子湯補脾益氣、燥濕化痰，是鞏固中氣樞紐的基本方。",
  },
  {
    slug: "dui",
    name: "兌（澤）",
    nameEn: "Lake",
    symbol: "☱",
    element: "西/肺金/秋",
    compassDirection: "西方",
    herbalFormula: "苓桂朮甘湯",
    formulaFunction: "溫陽化飲，健脾利濕",
    qiMechanism: "收斂金氣，右降通道",
    relatedAcupoints: ["LU-7", "KI-6"],
    relatedEmotions: ["oversensitive"],
    description:
      "兌卦為澤，代表秋收斂降。肺金主右降，將心火的能量收斂下行。苓桂朮甘湯溫陽化飲、健脾利濕，打開右降通道，讓氣機順利下行。",
  },
  {
    slug: "kan",
    name: "坎（水）",
    nameEn: "Water",
    symbol: "☵",
    element: "北/腎水/冬",
    compassDirection: "北方",
    herbalFormula: "拱辰丹",
    formulaFunction: "大補元氣，溫腎壯陽",
    qiMechanism: "補坎中真陽，藏蟄命門",
    relatedAcupoints: ["KI-6", "UB-62"],
    relatedEmotions: ["fear"],
    description:
      "坎卦為水，代表北方冬藏。坎中有一陽，是生命的根本動力——命門真火。拱辰丹大補元氣、溫腎壯陽，是補坎中真陽的峻補之方。",
  },
  {
    slug: "ji-ji",
    name: "既濟（水火）",
    nameEn: "After Completion",
    symbol: "☵☲",
    element: "坎離相交",
    compassDirection: "中軸",
    herbalFormula: "柴胡桂枝乾薑湯",
    formulaFunction: "交通心腎，和解少陽",
    qiMechanism: "交通心腎，水火相濟",
    relatedAcupoints: ["PC-6", "KI-6"],
    relatedEmotions: ["loneliness", "fear"],
    description:
      "既濟卦水在火上，代表坎離交濟的理想狀態。心火下溫腎水，腎水上濟心火。柴胡桂枝乾薑湯是交通心腎的經典方，和解少陽、溫化水飲。",
  },
  {
    slug: "ge",
    name: "革（澤火）",
    nameEn: "Revolution",
    symbol: "☱☲",
    element: "右降清瘀",
    compassDirection: "西南",
    herbalFormula: "桂枝茯苓丸",
    formulaFunction: "活血化瘀，緩消癥塊",
    qiMechanism: "革舊更新，化瘀通降",
    relatedAcupoints: ["GB-41", "LU-7"],
    relatedEmotions: ["despair", "oversensitive"],
    description:
      "革卦代表變革更新。當氣機瘀滯、舊的模式需要被打破時，革卦之力可以化瘀通降。桂枝茯苓丸活血化瘀、緩消癥塊，是化舊生新的代表方。",
  },
  {
    slug: "sun",
    name: "損（山澤）",
    nameEn: "Decrease",
    symbol: "☶☱",
    element: "損益有時",
    compassDirection: "調和",
    herbalFormula: "芍藥甘草湯",
    formulaFunction: "柔肝緩急，酸甘化陰",
    qiMechanism: "損剛益柔，緩衝調和",
    relatedAcupoints: ["GB-41"],
    relatedEmotions: ["despair"],
    description:
      "損卦代表減損過多、回歸平衡。當肝氣過於剛強、筋脈拘急時，需要損剛益柔。芍藥甘草湯酸甘化陰，柔肝緩急，是最基本的緩衝調和方。",
  },
];

export const hexagramMap = Object.fromEntries(
  hexagrams.map((h) => [h.slug, h])
) as Record<string, Hexagram>;

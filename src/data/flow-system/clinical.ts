import type { ClinicalScenario } from "./types";

export const clinicalScenarios: ClinicalScenario[] = [
  {
    slug: "middle-qi-sinking",
    title: "中氣下陷（脾不升清）",
    color: "🟡",
    flowDescription: "己土濕陷，清陽不升",
    farrellJudgment:
      "若只消化不良→第三層正經；若「人生沒意義」→第五層奇經",
    acupointCodes: ["SP-4", "PC-6"],
    flowers: ["Hornbeam", "Cerato"],
    somaniks: "tonify",
    herbalFormula: "六君子 → 補中益氣",
  },
  {
    slug: "liver-wood-stagnation",
    title: "肝木鬱而不升",
    color: "🟢",
    flowDescription: "乙木鬱遏，化風化火",
    farrellJudgment:
      "筋經繃緊→第一層；情緒壓抑→第二層；慢性關節→第四層",
    acupointCodes: ["GB-41", "SJ-5"],
    flowers: ["Pine", "Willow", "Larch"],
    somaniks: "drain",
    herbalFormula: "加味逍遙、抑肝散",
  },
  {
    slug: "upper-heat-lower-cold",
    title: "上熱下寒（坎離不交）",
    color: "🔴",
    flowDescription: "心火不降、腎水不升",
    farrellJudgment:
      "心包過度保護→開 Pericardium loop；少陰經別問題→麻木否認",
    acupointCodes: ["PC-6", "KI-6"],
    flowers: ["Water Violet", "Cherry Plum"],
    somaniks: "mixed",
    somaniksDetail: "藍洩（PC-6 開鬱）+ 橘補（KI-6 滋陰）",
    herbalFormula: "柴胡桂枝乾薑湯",
  },
  {
    slug: "yang-deficiency",
    title: "陽虛・督脈不振",
    color: "🔵",
    flowDescription: "命門火衰，全圓緩慢",
    farrellJudgment: "精（Jing）層面消耗",
    acupointCodes: ["SI-3", "UB-62"],
    flowers: ["Wild Rose", "Olive", "Clematis"],
    somaniks: "tonify",
    herbalFormula: "拱辰丹 + 補中益氣",
  },
  {
    slug: "dai-mai-trauma",
    title: "帶脈藏創傷",
    color: "🟣",
    flowDescription: "帶脈橫束，上下氣機切斷",
    farrellJudgment: "最後的潛伏儲存庫",
    acupointCodes: ["GB-41", "SJ-5"],
    flowers: ["Star of Bethlehem", "Crab Apple", "Mustard"],
    somaniks: "mixed",
    somaniksDetail: "資源足→藍洩排；資源虛→橘補固",
    herbalFormula: "資源足用加味逍遙，資源虛用補中益氣",
  },
];

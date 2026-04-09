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
    detailedDescription:
      "己土濕陷，清陽不升。中氣為一氣周流的樞紐，當脾土無力升清，整個循環都會受阻。患者常見消化不良、倦怠無力、思緒混沌。若進一步發展為「人生沒意義」的感受，則已從第三層正經深入到第五層奇經。",
    farrellSteps: [
      "評估消化功能（第三層正經）",
      "判斷是否已進入存在意義層面（第五層奇經）",
      "若第三層：補脾胃正經，用 SP-4 開衝脈",
      "若第五層：加入 PC-6 作為 Couple point，啟動奇經資源",
    ],
    acupointDetails: [
      { code: "SP-4", role: "主穴 — 開衝脈，啟動脾土升清" },
      { code: "PC-6", role: "配穴 — 陰維 Couple point，穩定心胸" },
    ],
    somaniksProtocol:
      "以橘補為主。先貼 SP-4 補衝脈，觀察反應後加 PC-6。資源不足時不宜過度刺激。",
    herbalDetails: [
      { name: "六君子湯", function: "補脾益氣，健運中焦" },
      { name: "補中益氣湯", function: "升舉清陽，補中氣" },
    ],
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
    detailedDescription:
      "乙木鬱遏，化風化火。肝木本應左升疏達，當鬱結不通時，可能表現為筋經繃緊（第一層）、情緒壓抑（第二層絡脈）、或慢性關節問題（第四層經別）。帶脈作為橫束腰間的奇經，常常成為肝鬱創傷的儲存庫。",
    farrellSteps: [
      "第一層：檢查筋經繃緊狀態，必要時放血井穴",
      "第二層：評估情緒壓抑程度，絡脈放血釋放",
      "第四層：若慢性關節問題，經別 S-D-S 洩法",
      "第五層：帶脈藏創傷，用 GB-41 + SJ-5 釋放",
    ],
    acupointDetails: [
      { code: "GB-41", role: "主穴 — 開帶脈，釋放肝鬱潛伏創傷" },
      { code: "SJ-5", role: "配穴 — 陽維 Couple point，疏泄陽氣下降" },
    ],
    somaniksProtocol:
      "以藍洩為主。GB-41 釋放帶脈潛伏，SJ-5 疏通陽維。資源充足時可加強洩法，資源不足時先固護再釋放。",
    herbalDetails: [
      { name: "加味逍遙散", function: "疏肝解鬱，養血健脾" },
      { name: "抑肝散", function: "平肝息風，鎮靜安神" },
    ],
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
    detailedDescription:
      "心火不降、腎水不升，坎離失交。這是一氣周流中最常見的失衡模式之一。上部表現為心煩、失眠、口乾；下部表現為腰冷、小便清長、下肢寒涼。心包過度保護時，情感會被隔離，形成「看起來沒事但內在痛苦」的狀態。",
    farrellSteps: [
      "評估心包保護程度（Pericardium loop）",
      "檢查少陰經別問題（麻木、否認）",
      "PC-6 開陰維釋放胸鬱",
      "KI-6 滋陰蹻，引腎水上濟心火",
      "重建坎離交濟通道",
    ],
    acupointDetails: [
      { code: "PC-6", role: "主穴 — 開陰維，釋放心包過度保護" },
      { code: "KI-6", role: "配穴 — 開陰蹻，滋腎陰上潤" },
    ],
    somaniksProtocol:
      "混合策略：PC-6 用藍洩開鬱，KI-6 用橘補滋陰。先洩後補，或同時進行視患者資源狀態而定。",
    herbalDetails: [
      { name: "柴胡桂枝乾薑湯", function: "交通心腎，和解少陽，溫化水飲" },
    ],
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
    detailedDescription:
      "命門火衰，全圓緩慢。當腎中真陽不足，整個一氣周流的動力來源減弱。患者呈現全面性的低能量狀態：精神萎靡、意志消沉、四肢不溫、腰膝酸軟。這屬於精（Jing）層面的消耗，需要從最深層補起。",
    farrellSteps: [
      "評估精（Jing）消耗程度",
      "檢查督脈陽氣振奮狀態",
      "SI-3 開督脈，振奮陽氣上行",
      "UB-62 引陽歸藏，鞏固腎陽",
      "逐步重建全圓動力",
    ],
    acupointDetails: [
      { code: "SI-3", role: "主穴 — 開督脈，振奮陽氣上行通脊柱" },
      { code: "UB-62", role: "配穴 — 陽蹻 Couple point，引陽歸藏膀胱水府" },
    ],
    somaniksProtocol:
      "純橘補策略。SI-3 振陽上升，UB-62 引陽歸藏。溫和持續補法，避免過度耗散殘餘陽氣。",
    herbalDetails: [
      { name: "拱辰丹", function: "大補元氣，溫腎壯陽" },
      { name: "補中益氣湯", function: "升舉清陽，補中氣以助陽升" },
    ],
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
    detailedDescription:
      "帶脈橫束腰間，是人體最後的潛伏儲存庫。當創傷太深、資源不足以處理時，身體會將創傷經驗封存在帶脈中，切斷上下氣機的連通。這是 Farrell 系統中最深層的防禦機制。處理帶脈創傷需要極度謹慎，必須先評估患者資源狀態。",
    farrellSteps: [
      "第一步：評估患者資源（精氣神三寶）",
      "資源充足路線（藍洩排出）：GB-41 + SJ-5 + LV-13 + GB-26/27/28",
      "資源不足路線（橘補固護）：GB-41 + DU-4 + UB-23 + GB-26 + SP-15",
      "排出過程中持續監測患者反應",
      "排出後重建資源，補中氣",
    ],
    acupointDetails: [
      { code: "GB-41", role: "主穴 — 開帶脈，啟動釋放或固護" },
      { code: "SJ-5", role: "配穴（資源足）— 陽維 Couple point，協助疏泄" },
      { code: "DU-4", role: "配穴（資源虛）— 命門，溫補腎陽固護" },
      { code: "UB-23", role: "配穴（資源虛）— 腎俞，補腎固本" },
    ],
    somaniksProtocol:
      "依資源分流：資源充足→藍洩排出帶脈潛伏創傷，配合加味逍遙散。資源不足→橘補固護帶脈，配合補中益氣湯，等資源恢復後再排出。",
    herbalDetails: [
      { name: "加味逍遙散", function: "資源足時用：疏肝解鬱，釋放帶脈潛伏" },
      { name: "補中益氣湯", function: "資源虛時用：補中氣，固護帶脈" },
    ],
  },
];

/** Lookup map by slug */
export const clinicalScenarioMap: Record<string, ClinicalScenario> =
  Object.fromEntries(clinicalScenarios.map((s) => [s.slug, s]));

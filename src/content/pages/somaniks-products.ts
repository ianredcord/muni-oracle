// 牟尼微針產品規格頁的中英文文案（/somaniks/products）
import type { Locale } from "@/i18n/config";

export type SomaniksProductsCopy = {
  metaTitle: string;
  metaDescription: string;
  backLink: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  specLabels: {
    material: string;
    coneHeight: string;
    coneCountL: string;
    coneCountS: string;
    fibre: string;
  };
  principleHeading: string;
  useCaseHeading: string;
  somacept: {
    badge: string;
    name: string;
    subtitle: string;
    imageAlt: string;
    material: string;
    coneHeight: string;
    coneCountL: string;
    coneCountS: string;
    fibre: string;
    principle: string;
    useCases: string[];
  };
  somareson: {
    badge: string;
    name: string;
    subtitle: string;
    imageAlt: string;
    material: string;
    coneHeight: string;
    coneCountL: string;
    coneCountS: string;
    fibre: string;
    principle: string;
    useCases: string[];
  };
  comparisonTitle: string;
  comparisonHeaders: { label: string; somacept: string; somareson: string };
  comparisonRows: { label: string; somacept: string; somareson: string }[];
  axonEyebrow: string;
  axonTitle: string;
  axonCards: { step: string; title: string; desc: string }[];
  evidenceEyebrow: string;
  evidenceTitle: string;
  evidenceLead: string;
  evidenceStats: { value: string; label: string }[];
  evidenceNote: string;
  howEyebrow: string;
  howTitle: string;
  steps: { num: string; title: string; desc: string }[];
};

const zh: SomaniksProductsCopy = {
  metaTitle: "SOMANIKS 產品規格｜SOMACEPT 硬針 × SOMARESON 軟針 | MUNI",
  metaDescription:
    "SOMACEPT 硬針與 SOMARESON 軟針的完整產品規格、作用原理、神經科學機制與使用方式。透過軸索反射科學，精準選擇適合的微針貼片。",
  backLink: "返回 SOMANIKS",
  eyebrow: "Product Specifications",
  heroTitle: "SOMANIKS 產品詳細規格",
  heroLead: "SOMACEPT 硬針 × SOMARESON 軟針",
  specLabels: {
    material: "材質",
    coneHeight: "微錐高度",
    coneCountL: "微錐數量 L",
    coneCountS: "微錐數量 S",
    fibre: "作用纖維",
  },
  principleHeading: "作用原理",
  useCaseHeading: "適用場景",
  somacept: {
    badge: "快速抗炎鎮痛",
    name: "SOMACEPT",
    subtitle: "硬針貼片",
    imageAlt: "SOMACEPT 硬針貼片",
    material: "硬質塑膠樹脂",
    coneHeight: "0.15mm (150μm)",
    coneCountL: "129 本",
    coneCountS: "36 本",
    fibre: "Aδ 纖維 (銳痛 / 急性痛傳導)",
    principle:
      "硬質微錐對皮膚產生較強的物理刺激，優先激活 Aδ 纖維（傳導銳痛的快速神經），觸發軸索反射中的抗炎路徑，促進局部血液循環並抑制疼痛信號傳遞。",
    useCases: [
      "扭傷 / 急性腰痛",
      "膝痛 / 五十肩急性期",
      "運動傷害 / 肌肉拉傷",
      "關節發炎 / 腱鞘炎",
    ],
  },
  somareson: {
    badge: "深層舒緩放鬆",
    name: "SOMARESON",
    subtitle: "軟針貼片",
    imageAlt: "SOMARESON 軟針貼片",
    material: "彈性橡膠樹脂",
    coneHeight: "0.3mm (300μm)",
    coneCountL: "177 本",
    coneCountS: "53 本",
    fibre: "C 纖維 (鈍痛 / 慢性痛傳導)",
    principle:
      "彈性橡膠微錐提供柔和而持續的皮膚刺激，激活 C 纖維（傳導鈍痛的慢速神經），促進脊髓中內源性類嗎啡物質（Opioid）釋放，達到深層鎮痛與肌肉放鬆效果。",
    useCases: [
      "肩頸僵硬 / 慢性腰痛",
      "疲勞酸痛 / 五十肩慢性期",
      "筋膜緊繃 / 自律神經失調",
      "長期姿勢不良 / 辦公久坐",
    ],
  },
  comparisonTitle: "硬針 vs 軟針 快速對照",
  comparisonHeaders: {
    label: "比較項目",
    somacept: "SOMACEPT 硬針",
    somareson: "SOMARESON 軟針",
  },
  comparisonRows: [
    {
      label: "刺激感",
      somacept: "較強刺激，明顯感受",
      somareson: "柔和持續，溫和舒適",
    },
    {
      label: "適合痛型",
      somacept: "急性痛、銳痛、發炎痛",
      somareson: "慢性痛、鈍痛、深層酸痛",
    },
    {
      label: "神經路徑",
      somacept: "A-delta 纖維 (快速傳導)",
      somareson: "C 纖維 (慢速傳導)",
    },
    {
      label: "代表場景",
      somacept: "扭傷、運動傷害、急性發炎",
      somareson: "肩頸僵硬、慢性腰痛、疲勞酸痛",
    },
  ],
  axonEyebrow: "Axon Reflex Science",
  axonTitle: "軸索反射 —— 皮膚科學的核心",
  axonCards: [
    {
      step: "01",
      title: "刺激傳入",
      desc: "微錐接觸皮膚後，機械感受器將物理刺激轉化為電信號，沿感覺神經纖維向中樞傳遞。",
    },
    {
      step: "02",
      title: "軸索反射",
      desc: "信號在到達脊髓前，於神經分支處觸發軸索反射，逆向釋放神經肽 (CGRP、Substance P)，啟動局部抗炎與血管擴張反應。",
    },
    {
      step: "03",
      title: "循環改善",
      desc: "血管擴張帶來豐富的氧氣與營養素，加速代謝廢物排出，促進組織修復與疼痛緩解。",
    },
  ],
  evidenceEyebrow: "Clinical Evidence",
  evidenceTitle: "常葉大學隨機雙盲實驗",
  evidenceLead:
    "常葉大學健康科學部以隨機雙盲試驗驗證 SOMANIKS 微針貼片的效果。受試者在不知道使用真品或安慰劑的情況下進行測試，結果如下：",
  evidenceStats: [
    { value: "+15%", label: "肌力提升幅度" },
    { value: "-23%", label: "疼痛指數下降" },
    { value: "2x", label: "血流量增加倍率" },
  ],
  evidenceNote:
    "研究表明，微針貼片透過軸索反射機制顯著改善局部血液循環、降低疼痛評分，並提升肌肉運動表現。實驗結果達到統計學顯著差異 (p<0.05)。",
  howEyebrow: "How to Use",
  howTitle: "使用方式",
  steps: [
    { num: "1", title: "清潔皮膚", desc: "使用酒精棉片擦拭貼附部位，確保皮膚乾淨乾燥。" },
    { num: "2", title: "找到觸痛點", desc: "用指腹輕壓尋找最敏感的痛點，該處即為最佳貼附位置。" },
    { num: "3", title: "選擇貼片", desc: "急性痛選硬針 SOMACEPT，慢性痛選軟針 SOMARESON。" },
    { num: "4", title: "貼附固定", desc: "將貼片對準觸痛點貼上，輕壓確認牢固黏貼。" },
    { num: "5", title: "搭配精油", desc: "可搭配牟尼香精油於貼片周圍塗抹，提升放鬆體驗。" },
    { num: "6", title: "定時更換", desc: "建議每 2-3 天更換一次，保持最佳刺激效果。" },
  ],
};

const en: SomaniksProductsCopy = {
  metaTitle:
    "SOMANIKS specifications | SOMACEPT rigid × SOMARESON flexible microcone patches | MUNI",
  metaDescription:
    "Full specifications for the SOMACEPT rigid and SOMARESON flexible microcone patches — how they work, the neuroscience behind them and how to use them. Axon reflex science, so you can choose the patch that fits.",
  backLink: "Back to SOMANIKS",
  eyebrow: "Product Specifications",
  heroTitle: "SOMANIKS specifications",
  heroLead: "SOMACEPT rigid × SOMARESON flexible",
  specLabels: {
    material: "Material",
    coneHeight: "Microcone height",
    coneCountL: "Microcones (L)",
    coneCountS: "Microcones (S)",
    fibre: "Nerve fibre",
  },
  principleHeading: "How it works",
  useCaseHeading: "When to use it",
  somacept: {
    badge: "Fast anti-inflammatory relief",
    name: "SOMACEPT",
    subtitle: "Rigid microcone patch",
    imageAlt: "SOMACEPT rigid microcone patch",
    material: "Rigid plastic resin",
    coneHeight: "0.15 mm (150 μm)",
    coneCountL: "129 cones",
    coneCountS: "36 cones",
    fibre: "Aδ fibres (sharp and acute pain)",
    principle:
      "The rigid microcones give the skin a stronger physical stimulus, preferentially activating the Aδ fibres — the fast nerves that carry sharp pain. This triggers the anti-inflammatory arm of the axon reflex, improving local circulation and damping the transmission of pain signals.",
    useCases: [
      "Sprains / acute lower back pain",
      "Knee pain / frozen shoulder, acute phase",
      "Sports injuries / muscle strains",
      "Joint inflammation / tenosynovitis",
    ],
  },
  somareson: {
    badge: "Deep, unwinding relief",
    name: "SOMARESON",
    subtitle: "Flexible microcone patch",
    imageAlt: "SOMARESON flexible microcone patch",
    material: "Elastic rubber resin",
    coneHeight: "0.3 mm (300 μm)",
    coneCountL: "177 cones",
    coneCountS: "53 cones",
    fibre: "C fibres (dull and chronic pain)",
    principle:
      "The elastic rubber microcones give a gentler, sustained stimulus that activates the C fibres — the slow nerves that carry dull pain. This prompts the release of the body's own opioid substances in the spinal cord, for deep pain relief and muscular release.",
    useCases: [
      "Stiff neck and shoulders / chronic lower back pain",
      "Aching fatigue / frozen shoulder, chronic phase",
      "Tight fascia / autonomic dysregulation",
      "Long-standing poor posture / long hours at a desk",
    ],
  },
  comparisonTitle: "Rigid vs flexible at a glance",
  comparisonHeaders: {
    label: "",
    somacept: "SOMACEPT rigid",
    somareson: "SOMARESON flexible",
  },
  comparisonRows: [
    {
      label: "Sensation",
      somacept: "Stronger, clearly felt",
      somareson: "Soft and sustained, gently comfortable",
    },
    {
      label: "Type of pain",
      somacept: "Acute, sharp, inflammatory",
      somareson: "Chronic, dull, deep aching",
    },
    {
      label: "Nerve pathway",
      somacept: "A-delta fibres (fast conduction)",
      somareson: "C fibres (slow conduction)",
    },
    {
      label: "Typical situations",
      somacept: "Sprains, sports injuries, acute inflammation",
      somareson: "Stiff neck and shoulders, chronic lower back pain, aching fatigue",
    },
  ],
  axonEyebrow: "Axon Reflex Science",
  axonTitle: "The axon reflex — the heart of the skin science",
  axonCards: [
    {
      step: "01",
      title: "The stimulus arrives",
      desc: "As the microcones meet the skin, mechanoreceptors turn the physical stimulus into an electrical signal that travels along the sensory nerve fibres toward the centre.",
    },
    {
      step: "02",
      title: "The axon reflex",
      desc: "Before reaching the spinal cord, the signal triggers the axon reflex at a nerve branch, releasing neuropeptides (CGRP, substance P) back down the branch and setting off a local anti-inflammatory and vasodilatory response.",
    },
    {
      step: "03",
      title: "Circulation improves",
      desc: "Vasodilation brings oxygen and nutrients in abundance and clears metabolic waste faster, supporting tissue repair and easing pain.",
    },
  ],
  evidenceEyebrow: "Clinical Evidence",
  evidenceTitle: "Randomised double-blind trial at Tokoha University",
  evidenceLead:
    "The Faculty of Health Sciences at Tokoha University tested the SOMANIKS microcone patches in a randomised double-blind trial. Participants did not know whether they were using the real patch or a placebo. The results:",
  evidenceStats: [
    { value: "+15%", label: "Gain in muscle strength" },
    { value: "-23%", label: "Drop in pain score" },
    { value: "2x", label: "Increase in blood flow" },
  ],
  evidenceNote:
    "The study found that microcone patches significantly improve local blood circulation, lower pain scores and enhance muscular performance through the axon reflex mechanism. The results reached statistical significance (p<0.05).",
  howEyebrow: "How to Use",
  howTitle: "How to use it",
  steps: [
    {
      num: "1",
      title: "Clean the skin",
      desc: "Wipe the area with an alcohol swab and make sure the skin is clean and dry.",
    },
    {
      num: "2",
      title: "Find the tender point",
      desc: "Press gently with your fingertips to find the most sensitive spot — that is where the patch goes.",
    },
    {
      num: "3",
      title: "Choose the patch",
      desc: "Rigid SOMACEPT for acute pain, flexible SOMARESON for chronic pain.",
    },
    {
      num: "4",
      title: "Apply and secure",
      desc: "Place the patch over the tender point and press lightly to make sure it is firmly stuck down.",
    },
    {
      num: "5",
      title: "Pair with the oil",
      desc: "You can apply MUNI Scent around the patch to deepen the sense of release.",
    },
    {
      num: "6",
      title: "Change regularly",
      desc: "Replace every 2–3 days to keep the stimulus at its best.",
    },
  ],
};

export const SOMANIKS_PRODUCTS_COPY: Record<Locale, SomaniksProductsCopy> = {
  zh,
  en,
};

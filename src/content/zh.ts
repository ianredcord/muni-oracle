// content/zh.ts
// MUNI 官網中文文案集中檔（手機優先 / RWD）

export const ZH = {
  nav: {
    brand: "MUNI",
    startDraw: "抽牌",
    goHome: "回首頁",
    flowerIndex: "牟尼花精百科",
    energySupport: "能量支持",
  },

  home: {
    hero: {
      title: "在寂靜中\n承接你的答案",
      subtitle:
        "6 種精油 × 40 種花精頻率\n配合牌卡與身體覺察\n讓牟尼香成為你回到內在的嗅覺儀式",
      positioning: "MUNI 是一套陪你覺察、安定、支持內在狀態的日常系統。",
      cta: "開始抽牌",
      secondaryLink: "認識 MUNI",
    },

    whatIsMuni: {
      title: "MUNI 是什麼",
      body: "MUNI（牟尼）源自梵語，意為「寂靜者」、「聖者」，象徵內在的平靜與智慧。\n\n我們結合巴哈花精的療癒智慧，透過 40 張花精牌卡，幫助你在日常生活中覺察情緒、回歸內在平衡。",
    },

    steps: {
      title: "三步驟回到內在",
      subtitle: "每張牌卡都是一個覺察的入口",
      items: [
        {
          step: "Step 1",
          heading: "狀態辨識",
          body: "覺察當下的情緒狀態，不評判、不分析，只是看見。",
        },
        {
          step: "Step 2",
          heading: "允許核心",
          body: "接納並允許感受存在，讓情緒自然流動。",
        },
        {
          step: "Step 3",
          heading: "身體覺察",
          body: "回到身體，感受當下，讓覺知落地。",
        },
      ],
    },

    flowerCards: {
      title: "40 張花精牌卡",
      subtitle: "每一張牌卡都是一個覺察的入口",
      cta: "開始抽牌",
      viewAll: "查看牟尼花精百科",
    },

    muniIncense: {
      title: "牟尼香",
      body: "MUNI 牟尼香結合 6 種精油與 40 種花精頻率。\n\n嗅覺是唯一不經過理性分析、直接進入情緒與記憶中心的感官——讓香氣成為你回到內在的嗅覺儀式。",
    },

    therapist: {
      title: "給治療師與引導者",
      body: "每張牌卡都包含「治療師專區」，提供專業引導建議。\n\n讓 MUNI 花精牌卡成為你與個案之間的覺察橋樑。",
      accordionTitle: "治療師／引導者專區",
      accordionBody: "",
      cta: "",
    },

    footer: {
      note: "© 2025 MUNI. All rights reserved.",
      brand: "MUNI 牟尼",
      tagline: "在寂靜中，承接你的答案",
    },
  },

  draw: {
    title: "牟尼花精指引",
    subtitle: "在大自然的智慧中尋找心靈的平衡。請靜下心來，專注於您當下的感受。",
    startShuffle: "開始洗牌",
    selectHint: "請憑直覺選取 1 張牌卡",
    clickHint: "點選任一張牌卡",
    reveal: "揭示指引",
    shuffle: {
      title: "抽一張今日指引",
      hint: "靜下心來，專注於當下的感受，\n憑直覺選取一張牌卡。",
      actionShuffle: "洗牌",
      actionPick: "選一張",
      actionReveal: "揭示指引",
      actionReshuffle: "重新洗牌",
      helper: "",
    },

    result: {
      title: "今日指引",
      again: "再抽一張",
      share: "分享結果",
      copyLink: "複製連結",
      howTo: "覺察方式說明",
      therapistZone: "治療師／引導者專區",
      backToDeck: "回到牌堆",
      viewDetail: "查看完整資訊",
      tabQuick: "牌卡指引",
      tabDeep: "深度解析",
      tabTherapist: "治療師專區",
    },
  },

  flowers: {
    indexTitle: "牟尼花精百科",
    indexSubtitle: "探索 40 種花精的覺察智慧，找到屬於你的心靈指引",
    detailBack: "返回牟尼花精百科",
  },

  common: {
    close: "關閉",
    open: "展開",
    collapse: "收合",
    loading: "載入中...",
    notFound: "找不到內容",
  },
} as const;

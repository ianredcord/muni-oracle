// content/zh.draw.ts
// MUNI 官網－抽牌流程（Draw）中文文案
// 單一責任：只管理 draw 區塊文字

export const ZH_DRAW = {
  shuffle: {
    title: "在抽牌前，先讓自己安靜一下",
    hint:
      "請找一個不被打擾的時刻。\n\n" +
      "你可以深呼吸幾次，\n" +
      "或輕聞牟尼香，\n" +
      "然後在準備好的時候，選一張牌。",
    actionShuffle: "洗牌",
    actionPick: "選一張",
    helper: "",
  },

  result: {
    title: "你抽到的，是此刻的狀態",
    again: "再抽一張",
    share: "分享結果",
    copyLink: "複製連結",
    howTo: "覺察方式說明",
    therapistZone: "引導者專區",
    backToDeck: "回到牌堆",
  },
} as const;

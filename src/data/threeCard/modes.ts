// 三種模式的 UI 文字（Phase 3）。位置名固定，不得改成「過去・現在・未來」。
// 全部 status=draft，由使用者核准後改 approved；引擎不讀本檔，UI 才用。
import type { Mode, Position, Status } from "../../lib/threeCard/types";

export type ModeText = {
  mode: Mode;
  /** 模式名 */
  name: string;
  /** 30 字內的模式說明 */
  description: string;
  /** 三個位置的顯示名（固定） */
  positions: Record<Position, string>;
  /** 三個位置的問句 */
  questions: Record<Position, string>;
  status: Status;
};

export const MODE_TEXT: Record<Mode, ModeText> = {
  A: {
    mode: "A",
    name: "旅程",
    description: "看一段歷程：你從哪裡來、此刻在哪裡、往哪裡去。",
    positions: { origin: "來處", now: "此刻", direction: "去向" },
    questions: {
      origin: "你是帶著什麼走到這裡的？",
      now: "此刻，你站在什麼位置？",
      direction: "如果你允許，接下來會往哪裡去？",
    },
    status: "draft",
  },
  B: {
    mode: "B",
    name: "卡點",
    description: "看一個卡點：處境是什麼、卡在哪裡、下一步可以是什麼。",
    positions: { origin: "處境", now: "卡點", direction: "下一步" },
    questions: {
      origin: "你目前的處境是什麼？",
      now: "是什麼卡住了？",
      direction: "如果你允許，下一步可以是什麼？",
    },
    status: "draft",
  },
  C: {
    mode: "C",
    name: "三面鏡",
    description: "看整體的自己：我是誰、我怎麼表現、我在哪裡。",
    positions: { origin: "原型", now: "人格", direction: "情境" },
    questions: {
      origin: "我是誰？底下那一層是什麼？",
      now: "我怎麼表現？別人看見的是什麼？",
      direction: "我在哪裡？此刻站在什麼場裡？",
    },
    status: "draft",
  },
};

export const MODE_DESCRIPTION_MAX_CHARS = 30;

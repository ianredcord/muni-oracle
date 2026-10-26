// 三牌陣引擎入口。預設內容庫由 src/data/threeCard 的產生檔組成。
import { THREE_CARD_CARDS } from "../../data/threeCard/cards";
import { MIRROR_TEXT } from "../../data/threeCard/mirrorText";
import { POSITION_TEXT } from "../../data/threeCard/positionText";
import { SLOT_TEMPLATES } from "../../data/threeCard/slotTemplates";
import type { Library } from "./types";

export function defaultLibrary(): Library {
  return { cards: THREE_CARD_CARDS, templates: SLOT_TEMPLATES, positionText: POSITION_TEXT, mirrorText: MIRROR_TEXT };
}

export * from "./types";
export * from "./state";
export * from "./select";
export * from "./assemble";
export * from "./replay";
export * from "./reading";

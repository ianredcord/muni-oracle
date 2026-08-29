import { zh } from "./dictionaries/zh";
import { en } from "./dictionaries/en";
import type { Locale } from "./config";

/** 中文字典是型別來源；英文字典必須符合同一形狀，漏翻會在編譯期報錯。 */
export type Dictionary = typeof zh;

const DICTIONARIES: Record<Locale, Dictionary> = { zh, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

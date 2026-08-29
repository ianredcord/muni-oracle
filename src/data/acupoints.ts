// 董氏奇穴穴位資料的語言取用層。
// 中文為原始資料；英文版在 acupoints.en.json，欄位一一對應。
import type { Locale } from "@/i18n/config";
import zhData from "./acupoints.json";
import enData from "./acupoints.en.json";

export interface Acupoint {
  name: string;
  code: string;
  anatomy: string;
  location: string;
  meridian: string;
  properties: string;
  indications: string;
  technique: string;
  needleFeeling: string;
  application: string;
  notes: string;
  configNotes: string | string[];
  imageUrls: string[];
}

export interface AcupointSection {
  /** 穩定鍵，與中文原始資料一致 */
  id: string;
  /** 顯示用的部位編號 */
  title: string;
  /** 圓形徽章上的短代號 */
  badge: string;
  bodyPart: string;
  acupoints: Acupoint[];
}

const ZH_SECTIONS = zhData as {
  id: string;
  bodyPart: string;
  acupoints: Acupoint[];
}[];

const EN_SECTIONS = enData as {
  id: string;
  title: string;
  badge: string;
  bodyPart: string;
  acupoints: Acupoint[];
}[];

const zhSections: AcupointSection[] = ZH_SECTIONS.map((s) => ({
  id: s.id,
  title: s.id,
  badge: s.id.slice(0, 2),
  bodyPart: s.bodyPart,
  acupoints: s.acupoints,
}));

/** 英文資料尚未補齊的部位，退回中文，避免頁面缺區塊 */
const enSections: AcupointSection[] = zhSections.map((zh) => {
  const en = EN_SECTIONS.find((e) => e.id === zh.id);
  if (!en) return zh;

  return {
    id: zh.id,
    title: en.title,
    badge: en.badge,
    bodyPart: en.bodyPart,
    // 英文資料由中文逐筆產生，順序一一對應；長度不符時整區退回中文，避免錯位
    acupoints:
      en.acupoints.length === zh.acupoints.length
        ? zh.acupoints.map((point, i) => ({ ...point, ...en.acupoints[i] }))
        : zh.acupoints,
  };
});

export function getAcupointSections(locale: Locale): AcupointSection[] {
  return locale === "en" ? enSections : zhSections;
}

export type SomaniksType = "drain" | "tonify"; // 藍洩 or 橘補
export type FiveElement = "water" | "wood" | "fire" | "earth" | "metal";

export interface Acupoint {
  slug: string; // e.g. "ki-6"
  code: string; // e.g. "KI-6"
  name: string; // Chinese name e.g. "照海"
  fullName: string; // e.g. "照海 KI-6"
  meridian: string; // 所在正經
  extraordinaryVessel: string; // 通奇經
  flowPosition: string; // 一氣周流位置
  flowDirection: "ascending" | "descending" | "pivot" | "storing";
  element: FiveElement;
  compassDirection: string; // e.g. "北・水"
  functionText: string;
  somaniks: SomaniksType;
  somaniksNote: string;
  relatedEmotionSlugs: string[];
}

export interface EmotionGroup {
  slug: string;
  name: string; // e.g. "恐懼（Fear）"
  nameEn: string; // e.g. "Fear"
  compassPosition: string; // e.g. "北・水（腎）"
  wuShen: string; // 五神 e.g. "志（Zhi）"
  wuShenEn: string;
  farrellLayer: string;
  acupointCodes: string[]; // e.g. ["KI-6", "UB-62"]
  acupointSlugs: string[];
  somaniks: SomaniksType;
  somaniksNote: string;
  element: FiveElement;
  flowDescription: string; // 一氣周流 description
  farrellDescription: string;
  flowers: FlowerEntry[];
}

export interface FlowerEntry {
  name: string; // e.g. "Rock Rose"
  emotionTheme: string;
  mainPoint: string; // e.g. "KI-6"
  couplePoint: string; // e.g. "UB-62" or "—"
  farrellLayer: string;
  somaniks: SomaniksType;
  somaniksNote: string;
  slug: string; // e.g. "rock-rose"
}

export interface ClinicalScenario {
  slug: string;
  title: string;
  color: string; // emoji color indicator
  flowDescription: string;
  farrellJudgment: string;
  acupointCodes: string[];
  flowers: string[];
  somaniks: SomaniksType | "mixed";
  somaniksDetail?: string;
  herbalFormula: string;
}

export interface FlowPosition {
  element: FiveElement;
  direction: string; // 北/南/東/西/中
  organ: string;
  acupoints: string[]; // acupoint slugs
}

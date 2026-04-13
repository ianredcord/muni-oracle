import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle, BlueOrangeBadge, RelatedLinks } from "@/components/flow-system";
import ChannelAccordion, { AccordionItem } from "./ChannelAccordion";

export const metadata: Metadata = {
  title: "十二經筋 x CF點 x 九區段 | 整合系統",
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Data Types                                                         */
/* ------------------------------------------------------------------ */

interface BindingSite {
  id: number;
  location: string;
  anatomy: string;
  steccoCF: string;
  zone: string;
  lockType?: string;
}

interface ChannelData {
  name: string;
  nameEn: string;
  organ: string;
  season: string;
  sites: BindingSite[];
  notes?: string[];
}

/* ------------------------------------------------------------------ */
/*  Channel Data                                                       */
/* ------------------------------------------------------------------ */

const channels: ChannelData[] = [
  {
    name: "足太陽經筋",
    nameEn: "膀胱",
    organ: "BL",
    season: "仲春痺",
    sites: [
      { id: 1, location: "結於踝", anatomy: "外踝後方（跟腱外側）", steccoCF: "CF ta-re（踝後側）", zone: "⑧肢端", lockType: "液態鎖" },
      { id: 2, location: "結於踵", anatomy: "跟骨結節（跟腱附著）", steccoCF: "CF ta-re（跟骨）", zone: "⑧肢端", lockType: "液態鎖" },
      { id: 3, location: "結於膕", anatomy: "膕窩中央＋兩側肌腱", steccoCF: "CF ge-re（膝後側）", zone: "①膕窩", lockType: "雙重鎖" },
      { id: 4, location: "結於腨外", anatomy: "腓骨頭外側", steccoCF: "CF ge-la（膝外側）", zone: "①膕窩/⑧", lockType: "液態鎖" },
      { id: 5, location: "結於臀", anatomy: "坐骨結節＋臀大肌附著", steccoCF: "CF cx-re（髖後側）", zone: "②腹股溝", lockType: "雙重鎖" },
      { id: 6, location: "俠脊上項", anatomy: "豎脊肌群沿脊柱", steccoCF: "CF lu-re/th-re（腰背）", zone: "⑥腰脊", lockType: "固態鎖" },
      { id: 7, location: "結於枕骨", anatomy: "枕骨粗隆＋枕下肌群", steccoCF: "CF cp-re（頭後側）", zone: "⑨頭面", lockType: "固態鎖（肌硬膜橋）" },
      { id: 8, location: "結於鼻", anatomy: "鼻骨＋鼻旁肌群", steccoCF: "CF cp-an（頭前側）", zone: "⑨頭面", lockType: "液態鎖" },
      { id: 9, location: "目上網", anatomy: "眼輪匝肌上部＋額肌", steccoCF: "CF cp-la（頭側面）", zone: "⑨頭面" },
      { id: 10, location: "結於肩髃", anatomy: "三角肌附著＋肩峰", steccoCF: "CF sc-la（肩外側）", zone: "③腋窩", lockType: "液態鎖" },
      { id: 11, location: "出缺盆", anatomy: "鎖骨上窩", steccoCF: "CF sc-an/th-an（頸胸前）", zone: "⑦頸胸入口", lockType: "雙重鎖" },
      { id: 12, location: "結於完骨", anatomy: "乳突（mastoid process）", steccoCF: "CF cp-la（頭側面）", zone: "⑨頭面", lockType: "固態鎖" },
    ],
    notes: [
      "操作路線：Step 0c（八髎骶段）→ Step②（膕窩 CF ge-re）→ Step 0a（C2 枕下 CF cp-re）",
      "膕窩→脊柱→枕下的連鎖症狀＝古人從上到下描述，操作從下到上再回到上",
    ],
  },
  {
    name: "足少陽經筋",
    nameEn: "膽",
    organ: "GB",
    season: "孟春痺",
    sites: [
      { id: 1, location: "結外踝", anatomy: "外踝前下方（腓骨肌腱）", steccoCF: "CF ta-la（踝外側）", zone: "⑧肢端", lockType: "液態鎖" },
      { id: 2, location: "結於膝外廉", anatomy: "膝外側副韌帶＋髂脛束附著", steccoCF: "CF ge-la（膝外側）", zone: "①膕窩", lockType: "液態鎖" },
      { id: 3, location: "結於伏兔上", anatomy: "股外側肌＋髂脛束", steccoCF: "CF fe-la（股外側）", zone: "②腹股溝", lockType: "液態鎖" },
      { id: 4, location: "結於尻", anatomy: "臀中肌＋梨狀肌附著", steccoCF: "CF cx-re/cx-la（髖後外）", zone: "②腹股溝", lockType: "雙重鎖" },
      { id: 5, location: "乘季脅", anatomy: "腹外斜肌＋肋間肌（11-12肋）", steccoCF: "CF th-la（胸外側）", zone: "④膈帶", lockType: "液態鎖" },
      { id: 6, location: "系於膺乳", anatomy: "胸大肌＋前鋸肌附著", steccoCF: "CF th-an/sc-an", zone: "③腋窩", lockType: "液態鎖" },
      { id: 7, location: "結於缺盆", anatomy: "鎖骨上窩（斜角肌群）", steccoCF: "CF sc-an（頸胸前）", zone: "⑦頸胸入口", lockType: "雙重鎖" },
      { id: 8, location: "額角＋巔", anatomy: "顳肌＋帽狀腱膜", steccoCF: "CF cp-la（頭側面）", zone: "⑨頭面", lockType: "液態鎖" },
      { id: 9, location: "目眥為外維", anatomy: "眼輪匝肌外側", steccoCF: "CF cp-la", zone: "⑨頭面" },
    ],
    notes: [
      "「維筋相交」：左側經筋攣縮會導致右側症狀——繆刺/巨刺在經筋層面的解剖基礎",
      "左側季脅 CF th-la 緊 → 可能右側頭面有症狀",
    ],
  },
  {
    name: "足陽明經筋",
    nameEn: "胃",
    organ: "ST",
    season: "季春痺",
    sites: [
      { id: 1, location: "結於跗上", anatomy: "足背伸肌支持帶", steccoCF: "CF ta-an（踝前側）", zone: "⑧肢端", lockType: "液態鎖" },
      { id: 2, location: "結於膝外廉", anatomy: "髕骨外側＋股四頭肌腱", steccoCF: "CF ge-an/ge-la", zone: "①膕窩", lockType: "液態鎖" },
      { id: 3, location: "結於髀樞", anatomy: "大轉子＋髂脛束上端", steccoCF: "CF cx-la（髖外側）", zone: "②腹股溝", lockType: "雙重鎖" },
      { id: 4, location: "聚於陰器", anatomy: "腹股溝韌帶＋恥骨聯合", steccoCF: "CF cx-an/pv-an", zone: "②腹股溝", lockType: "雙重鎖" },
      { id: 5, location: "上腹而布", anatomy: "腹直肌鞘＋白線", steccoCF: "CF lu-an/th-an", zone: "⑤腹部＋④膈帶", lockType: "液態鎖" },
      { id: 6, location: "結於缺盆", anatomy: "胸鎖乳突肌＋鎖骨附著", steccoCF: "CF sc-an", zone: "⑦頸胸入口", lockType: "雙重鎖" },
      { id: 7, location: "俠口合於頄", anatomy: "咬肌＋頰肌", steccoCF: "CF cp-an（頭前側）", zone: "⑨頭面", lockType: "液態鎖" },
      { id: 8, location: "目下網", anatomy: "眼輪匝肌下部", steccoCF: "CF cp-an", zone: "⑨頭面" },
      { id: 9, location: "從頰結於耳前", anatomy: "顳肌＋TMJ 關節囊", steccoCF: "CF cp-la", zone: "⑨頭面", lockType: "固態鎖" },
    ],
    notes: [
      "面癱治法：寒則筋急（HA gel 化→液態鎖），熱則筋縱（myofibroblast 失張力）",
      "「白酒和桂」＝桂枝溫通＝物理性降 HA 黏度的外用版",
    ],
  },
  {
    name: "足太陰經筋",
    nameEn: "脾",
    organ: "SP",
    season: "孟秋痺",
    sites: [
      { id: 1, location: "結於內踝", anatomy: "內踝後方（脛後肌腱）", steccoCF: "CF ta-me（踝內側）", zone: "⑧肢端" },
      { id: 2, location: "絡於膝內輔骨", anatomy: "膝內側副韌帶＋鵝足肌腱", steccoCF: "CF ge-me（膝內側）", zone: "①膕窩" },
      { id: 3, location: "結於髀·聚於陰器", anatomy: "內收肌群＋恥骨附著＋腹股溝韌帶", steccoCF: "CF cx-me/cx-an", zone: "②腹股溝" },
      { id: 4, location: "上腹結於臍", anatomy: "臍周腹直肌＋腹橫筋膜", steccoCF: "CF lu-an", zone: "⑤腹部" },
      { id: 5, location: "結於肋·散於胸中", anatomy: "膈肌附著＋肋弓下", steccoCF: "CF th-an/th-me", zone: "④膈帶" },
      { id: 6, location: "內者著於脊", anatomy: "腰方肌＋腰大肌筋膜", steccoCF: "CF lu-re", zone: "⑥腰脊" },
    ],
    notes: [
      "從腹股溝（②）→臍（⑤）→膈帶（④）→脊柱（⑥）的完整連鎖痛",
      "太陰經筋是中土斡旋的形層載體",
    ],
  },
  {
    name: "足少陰經筋",
    nameEn: "腎",
    organ: "KI",
    season: "仲秋痺",
    sites: [
      { id: 1, location: "結於踵", anatomy: "跟骨內側（與太陽合）", steccoCF: "CF ta-me/ta-re", zone: "⑧肢端" },
      { id: 2, location: "結於內輔下", anatomy: "膝內側（與太陰並行）", steccoCF: "CF ge-me", zone: "①膕窩" },
      { id: 3, location: "結於陰器", anatomy: "骨盆底肌群＋會陰", steccoCF: "CF pv-an/pv-me", zone: "②腹股溝" },
      { id: 4, location: "循脊內俠膂", anatomy: "多裂肌＋脊旁深層肌", steccoCF: "CF lu-re（深層）", zone: "⑥腰脊" },
      { id: 5, location: "結於枕骨與太陽合", anatomy: "枕下肌群（＝肌硬膜橋）", steccoCF: "CF cp-re", zone: "⑨頭面" },
    ],
    notes: [
      "太陽＋少陰在枕骨匯合＝Step 0a 和 Step 0c 的經筋連線＝顱薦軸的經筋版",
      "陽病者腰反折不能俯（TLF 淺層固態鎖）；陰病者不能仰（腰大肌/多裂肌深層攣縮）",
      "安全警示：「筋折紐，紐發數甚者死不治」——脊柱深層操作需注意硬膜牽拉",
    ],
  },
  {
    name: "足厥陰經筋",
    nameEn: "肝",
    organ: "LR",
    season: "季秋痺",
    sites: [
      { id: 1, location: "結於內踝前", anatomy: "脛前肌腱＋伸肌支持帶", steccoCF: "CF ta-an/ta-me", zone: "⑧肢端" },
      { id: 2, location: "結內輔下", anatomy: "膝內側（半腱/半膜肌止點）", steccoCF: "CF ge-me", zone: "①膕窩" },
      { id: 3, location: "結於陰器·絡諸筋", anatomy: "骨盆底＋所有經筋的匯集處", steccoCF: "CF pv-an", zone: "②腹股溝" },
    ],
    notes: [
      "「絡諸筋」：骨盆底是全身經筋的總匯集點＝筋膜張力網絡的中心分配站",
      "解釋 Step 0c（八髎）對全身有效 + 太衝 LR3 為萬用三穴之一",
      "治法：「行水清陰氣」——骨盆底區域用 Somaniks 間接調控，不做直接深壓",
    ],
  },
  {
    name: "手太陽經筋",
    nameEn: "小腸",
    organ: "SI",
    season: "仲夏痺",
    sites: [
      { id: 1, location: "結於腕", anatomy: "尺骨莖突（尺側屈腕肌腱）", steccoCF: "CF ca-me（腕內側）", zone: "⑧肢端" },
      { id: 2, location: "結於肘內銳骨後", anatomy: "肱骨內上髁（屈肌群起點）", steccoCF: "CF cu-me（肘內側）", zone: "⑧肢端" },
      { id: 3, location: "入結於腋下", anatomy: "腋窩深層（大圓肌/背闊肌）", steccoCF: "CF sc-me", zone: "③腋窩" },
      { id: 4, location: "結於肩髃", anatomy: "三角肌＋肩峰", steccoCF: "CF sc-la", zone: "③腋窩" },
      { id: 5, location: "結於完骨", anatomy: "乳突後方（胸鎖乳突肌附著）", steccoCF: "CF cp-la", zone: "⑦頸胸入口/⑨" },
      { id: 6, location: "結於目外眥", anatomy: "眼輪匝肌外側＝經別合穴", steccoCF: "CF cp-la", zone: "⑨頭面" },
    ],
  },
  {
    name: "手少陽經筋",
    nameEn: "三焦",
    organ: "SJ",
    season: "季夏痺",
    sites: [
      { id: 1, location: "結於腕", anatomy: "腕背側（伸肌支持帶）", steccoCF: "CF ca-re（腕背側）", zone: "⑧肢端" },
      { id: 2, location: "結於肘", anatomy: "肱骨外上髁（伸肌群起點）", steccoCF: "CF cu-la（肘外側）", zone: "⑧肢端" },
      { id: 3, location: "上臑外廉上肩", anatomy: "三角肌後部", steccoCF: "CF sc-re/sc-la", zone: "③腋窩" },
      { id: 4, location: "合手太陽", anatomy: "頸側肌群（SCM 後方）", steccoCF: "CF sc-la", zone: "⑦頸胸入口" },
      { id: 5, location: "入系舌本", anatomy: "舌骨上肌群", steccoCF: "CF cp-an", zone: "⑨頭面" },
      { id: 6, location: "結於角", anatomy: "顳肌附著＋顳筋膜", steccoCF: "CF cp-la", zone: "⑨頭面（Step 0.5）" },
    ],
  },
  {
    name: "手陽明經筋",
    nameEn: "大腸",
    organ: "LI",
    season: "孟夏痺",
    sites: [
      { id: 1, location: "結於腕", anatomy: "橈骨莖突（橈側伸肌腱）", steccoCF: "CF ca-la（腕外側）", zone: "⑧肢端" },
      { id: 2, location: "結於肘外", anatomy: "肱骨外上髁（伸肌群起點）", steccoCF: "CF cu-la", zone: "⑧肢端" },
      { id: 3, location: "結於髃", anatomy: "肩峰＋三角肌附著", steccoCF: "CF sc-la", zone: "③腋窩" },
      { id: 4, location: "繞肩胛俠脊", anatomy: "菱形肌＋斜方肌", steccoCF: "CF sc-re/th-re", zone: "⑥腰脊" },
      { id: 5, location: "結於頄", anatomy: "顴骨＋咬肌附著", steccoCF: "CF cp-an/cp-la", zone: "⑨頭面" },
      { id: 6, location: "上左角絡頭下右頷", anatomy: "帽狀腱膜（左右交叉）", steccoCF: "CF cp-la", zone: "⑨頭面" },
    ],
  },
  {
    name: "手太陰經筋",
    nameEn: "肺",
    organ: "LU",
    season: "仲冬痺",
    sites: [
      { id: 1, location: "結於魚後", anatomy: "大魚際肌群", steccoCF: "CF ca-an", zone: "⑧肢端" },
      { id: 2, location: "結肘中", anatomy: "肱二頭肌腱附著（肘窩）", steccoCF: "CF cu-an/cu-me", zone: "⑧肢端" },
      { id: 3, location: "入腋下出缺盆", anatomy: "腋窩前壁（胸小肌）→鎖骨上", steccoCF: "CF sc-an", zone: "③腋窩→⑦頸胸入口" },
      { id: 4, location: "結肩前髃", anatomy: "喙突＋胸小肌附著", steccoCF: "CF sc-an", zone: "③腋窩" },
      { id: 5, location: "下結胸裡散貫賁", anatomy: "膈肌前部＋心包前壁", steccoCF: "CF th-an", zone: "④膈帶" },
      { id: 6, location: "合賁下抵季脅", anatomy: "膈肌腳→季肋", steccoCF: "CF th-la", zone: "④膈帶" },
    ],
    notes: [
      "息賁＝呼吸困難伴胸脅脹滿",
      "膈肌＋胸小肌同時攣縮→呼吸受限，Step③腋窩 CF + Step④膈帶環形＝同時解開",
    ],
  },
  {
    name: "手厥陰經筋",
    nameEn: "心包",
    organ: "PC",
    season: "孟冬痺",
    sites: [
      { id: 1, location: "結於肘內廉", anatomy: "肱骨內上髁（旋前圓肌起點）", steccoCF: "CF cu-me", zone: "⑧肢端" },
      { id: 2, location: "結腋下", anatomy: "腋窩深層（與太陰並行）", steccoCF: "CF sc-me", zone: "③腋窩" },
      { id: 3, location: "散前後俠脅", anatomy: "前鋸肌＋肋間肌", steccoCF: "CF th-me/th-la", zone: "④膈帶" },
      { id: 4, location: "入腋散胸中結於臂", anatomy: "心包前壁筋膜", steccoCF: "CF th-an（深層）", zone: "④膈帶" },
    ],
  },
  {
    name: "手少陰經筋",
    nameEn: "心",
    organ: "HT",
    season: "季冬痺",
    sites: [
      { id: 1, location: "結於銳骨", anatomy: "豌豆骨（尺側）", steccoCF: "CF ca-me", zone: "⑧肢端" },
      { id: 2, location: "結肘內廉", anatomy: "肱骨內上髁", steccoCF: "CF cu-me", zone: "⑧肢端" },
      { id: 3, location: "入腋交太陰", anatomy: "腋窩前壁（與太陰交會）", steccoCF: "CF sc-an/sc-me", zone: "③腋窩" },
      { id: 4, location: "俠乳裡結於胸中", anatomy: "胸骨旁＋肋軟骨", steccoCF: "CF th-an/th-me", zone: "④膈帶" },
      { id: 5, location: "循臂下系於臍", anatomy: "腹直肌深層", steccoCF: "CF lu-an", zone: "⑤腹部" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Zone Summary                                                       */
/* ------------------------------------------------------------------ */

interface ZoneSummary {
  zone: string;
  count: string;
  mainCF: string;
  lockType: string;
  priority: string;
}

const zoneSummary: ZoneSummary[] = [
  { zone: "①膕窩", count: "6 條經筋結於膝部", mainCF: "CF ge-re / ge-la / ge-me / ge-an", lockType: "雙重鎖", priority: "最高 CP" },
  { zone: "②腹股溝", count: "6 條足經筋聚於髀/陰器", mainCF: "CF cx-la / cx-an / cx-re / cx-me / pv-an", lockType: "雙重鎖", priority: "最高 CP" },
  { zone: "③腋窩", count: "6 條手經筋入結於腋", mainCF: "CF sc-an / sc-me / sc-la / sc-re", lockType: "液態鎖為主", priority: "高 CP" },
  { zone: "④膈帶", count: "4 條經筋結於肋/胸中/季脅", mainCF: "CF th-an / th-la / th-me", lockType: "雙重鎖", priority: "中 CP" },
  { zone: "⑤腹部", count: "2 條經筋結於臍/腹", mainCF: "CF lu-an", lockType: "液態鎖", priority: "中 CP" },
  { zone: "⑥腰脊", count: "3 條經筋俠脊/著脊", mainCF: "CF lu-re / th-re", lockType: "固態鎖", priority: "中 CP" },
  { zone: "⑦頸胸入口", count: "4 條經筋結於缺盆", mainCF: "CF sc-an / cp-re", lockType: "雙重鎖", priority: "最高 CP" },
  { zone: "⑧肢端", count: "12 條經筋起始於指趾", mainCF: "CF ta/ca 各方向", lockType: "液態鎖", priority: "低 CP" },
  { zone: "⑨頭面", count: "6 條經筋結於頭面", mainCF: "CF cp-an / cp-la / cp-re", lockType: "液態鎖→固態鎖", priority: "驗證站" },
];

/* ------------------------------------------------------------------ */
/*  CC / Diagonal / Spiral Data                                        */
/* ------------------------------------------------------------------ */

interface DiagonalRow {
  name: string;
  composition: string;
  lowerLimb: string;
  upperLimb: string;
  crossMidline: string;
}

const diagonals: DiagonalRow[] = [
  { name: "ante-latero (AL)", composition: "前＋外", lowerLimb: "脛前外側→股外側前", upperLimb: "前臂橈側→三角肌前", crossMidline: "跨巔頂→對側 retro-medio" },
  { name: "retro-latero (RL)", composition: "後＋外", lowerLimb: "腓骨側→髂脛束→臀外", upperLimb: "前臂背外→三角肌後", crossMidline: "跨枕部→對側 ante-medio" },
  { name: "ante-medio (AM)", composition: "前＋內", lowerLimb: "脛內側→內收肌→恥骨", upperLimb: "前臂內前→胸小肌", crossMidline: "跨胸骨→對側 retro-latero" },
  { name: "retro-medio (RM)", composition: "後＋內", lowerLimb: "小腿深後→骨盆底→脊柱深層", upperLimb: "前臂內後→大圓肌", crossMidline: "跨脊柱→對側 ante-latero" },
];

interface SpiralClinical {
  clue: string;
  direction: string;
  operation: string;
}

const spiralClinical: SpiralClinical[] = [
  { clue: "右膕窩緊＋左肩頸僵", direction: "右 AL → 左 RM 螺旋", operation: "右 CF ge-la → 左 CF sc-re" },
  { clue: "左腹股溝緊＋右頭面表情不對稱", direction: "左 AL → 右 RM 螺旋", operation: "左 CF cx-la → 右 CF cp-la" },
  { clue: "右腰背痛＋左膝內側痛", direction: "右 RL → 左 AM 螺旋", operation: "右 CF lu-re → 左 CF ge-me" },
  { clue: "雙側對稱僵硬（無左右差）", direction: "不是螺旋問題", operation: "回歸基本 CF＋CC 操作" },
];

/* ------------------------------------------------------------------ */
/*  Treatment Correspondence                                           */
/* ------------------------------------------------------------------ */

interface TreatmentRow {
  classical: string;
  stecco: string;
  system: string;
  molecular: string;
}

const treatmentCorrespondence: TreatmentRow[] = [
  { classical: "燔針（火針·高溫）", stecco: "深摩擦（deep friction）", system: "CF 手法（深壓＋切向力）", molecular: "摩擦生熱→HA 黏度物理性降低" },
  { classical: "劫刺（快刺快拔）", stecco: "強刺激點", system: "Somaniks 藍色（瀉法）", molecular: "A\u03B4 纖維激活→Phase1→HAS2 預載" },
  { classical: "以痛為輸", stecco: "觸診找最痛 CF 點", system: "CP 值選點", molecular: "HA densification 最嚴重處＝觸診最痛" },
  { classical: "以知為數", stecco: "治療至組織鬆解", system: "得氣", molecular: "A\u03B4→C 纖維切換完成→副交感主導" },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function SiteTable({ sites }: { sites: BindingSite[] }) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-stone-200">
            <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">#</th>
            <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">經筋結位</th>
            <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">解剖位置</th>
            <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">Stecco CF</th>
            <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">九區段</th>
            <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">鎖型</th>
          </tr>
        </thead>
        <tbody>
          {sites.map((s) => (
            <tr key={s.id} className="border-b border-stone-100 last:border-0">
              <td className="py-2 px-2 text-[#4a5548]/60">{s.id}</td>
              <td className="py-2 px-2 font-medium text-[#4a5548]">{s.location}</td>
              <td className="py-2 px-2 text-[#4a5548]/70">{s.anatomy}</td>
              <td className="py-2 px-2 text-[#006494] font-mono text-xs">{s.steccoCF}</td>
              <td className="py-2 px-2 text-[#4a5548]/70">{s.zone}</td>
              <td className="py-2 px-2">
                {s.lockType ? (
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      s.lockType.includes("雙重")
                        ? "bg-rose-50 text-rose-700 border border-rose-200"
                        : s.lockType.includes("固態")
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-sky-50 text-sky-700 border border-sky-200"
                    }`}
                  >
                    {s.lockType}
                  </span>
                ) : (
                  <span className="text-[#4a5548]/30">--</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Anchor nav sections                                                */
/* ------------------------------------------------------------------ */

const navSections = [
  { id: "overview", label: "總論" },
  { id: "channels", label: "十二經筋" },
  { id: "zone-summary", label: "區段彙整" },
  { id: "cc-points", label: "CC 點" },
  { id: "spirals", label: "螺旋/對角線" },
  { id: "operations", label: "操作流程" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SinewChannelsPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Internal badge */}
      <div className="fixed top-4 right-4 z-50 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
        內部測試版
      </div>

      {/* Sticky nav */}
      <nav className="sticky top-0 z-40 bg-[#F9F7F2]/90 backdrop-blur-sm border-b border-stone-200/50">
        <div className="mx-auto max-w-5xl px-4 flex items-center gap-1 overflow-x-auto py-2 text-xs">
          <Link
            href="/internal/flow-system"
            className="flex-shrink-0 text-[#4a5548]/50 hover:text-[#4a5548] transition-colors mr-2"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex-shrink-0 rounded-full px-3 py-1 text-[#4a5548]/60 hover:text-[#4a5548] hover:bg-white/60 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-5xl text-[#4a5548] tracking-tight leading-tight">
            十二經筋 <span className="text-[#9A7B4F]">x</span> CF 點{" "}
            <span className="text-[#9A7B4F]">x</span> 九區段
          </h1>
          <p className="mt-4 text-base md:text-xl text-[#4a5548]/60 max-w-2xl mx-auto">
            CC＋CF＋螺旋完整交叉比對 -- 經筋「結」＝ Stecco CF 的古典版
          </p>
          <p className="mt-2 text-sm text-[#4a5548]/40">
            治法總則：「治在燔針劫刺，以知為數，以痛為輸」
          </p>
        </div>

        {/* ── Overview ── */}
        <section id="overview" className="mb-20 scroll-mt-16">
          <SectionTitle title="總論" subtitle="古典經筋與 Stecco FM 的交匯" />

          {/* CF logic */}
          <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <h3 className="font-serif text-lg text-[#4a5548] mb-3">CF 點定位邏輯</h3>
            <p className="text-sm leading-relaxed text-[#4a5548]/70 mb-4">
              CF（Centre of Fusion）＝多條肌筋膜單元在關節處交匯的點。位於骨突、肌腱附著處、支持帶（retinaculum）附近。FM
              把身體分 14 個段（segment）x 6 個方向（ante/retro/latero/medio/intra-rotation/extra-rotation），每個交叉點就是一個 CF。
            </p>
            <div className="rounded-xl bg-[#F9F7F2] p-4">
              <p className="text-sm font-medium text-[#4a5548] mb-1">經筋「結」＝ CF 點的古典版</p>
              <p className="text-sm text-[#4a5548]/70">
                經筋的「結」（binding）和「聚」（converging）描述的就是肌筋膜在骨突/關節處附著和匯集的位置——與 CF
                點的定位原理完全一致。差別只在命名系統。
              </p>
            </div>
          </div>

          {/* Treatment correspondence */}
          <div className="mt-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <h3 className="font-serif text-lg text-[#4a5548] mb-4">治法對應</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">古典</th>
                    <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">Stecco FM</th>
                    <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">本系統</th>
                    <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">分子事件</th>
                  </tr>
                </thead>
                <tbody>
                  {treatmentCorrespondence.map((r) => (
                    <tr key={r.classical} className="border-b border-stone-100 last:border-0">
                      <td className="py-2 px-2 font-medium text-[#4a5548]">{r.classical}</td>
                      <td className="py-2 px-2 text-[#4a5548]/70">{r.stecco}</td>
                      <td className="py-2 px-2 text-[#4a5548]/70">{r.system}</td>
                      <td className="py-2 px-2 text-[#4a5548]/60 text-xs">{r.molecular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 12 Channels ── */}
        <section id="channels" className="mb-20 scroll-mt-16">
          <SectionTitle title="十二經筋" subtitle="每條經筋的結聚位置、CF 對應、九區段歸位" />
          <div className="mt-10">
            <ChannelAccordion>
              {channels.map((ch, i) => (
                <AccordionItem
                  key={ch.organ}
                  title={`${ch.name}（${ch.nameEn}）`}
                  subtitle={ch.season}
                  defaultOpen={i === 0}
                  badge={
                    <span className="text-xs rounded-full bg-stone-100 border border-stone-200/60 px-2.5 py-0.5 text-[#4a5548]/60 flex-shrink-0">
                      {ch.organ}
                    </span>
                  }
                >
                  <SiteTable sites={ch.sites} />
                  {ch.notes && ch.notes.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {ch.notes.map((n, j) => (
                        <div
                          key={j}
                          className="rounded-lg bg-[#F9F7F2] px-4 py-3 text-sm text-[#4a5548]/70 border-l-2 border-[#9A7B4F]/40"
                        >
                          {n}
                        </div>
                      ))}
                    </div>
                  )}
                </AccordionItem>
              ))}
            </ChannelAccordion>
          </div>
        </section>

        {/* ── Zone Summary ── */}
        <section id="zone-summary" className="mb-20 scroll-mt-16">
          <SectionTitle title="九區段 x 經筋 CF 點彙整" subtitle="按區段歸位的 CF 密度與 CP 值排名" />
          <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">九區段</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">經筋結聚數</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">主要 CF 點</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">主導鎖型</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">操作優先</th>
                </tr>
              </thead>
              <tbody>
                {zoneSummary.map((z) => (
                  <tr key={z.zone} className="border-b border-stone-100 last:border-0">
                    <td className="py-2.5 px-2 font-medium text-[#4a5548]">{z.zone}</td>
                    <td className="py-2.5 px-2 text-[#4a5548]/70">{z.count}</td>
                    <td className="py-2.5 px-2 text-[#006494] font-mono text-xs">{z.mainCF}</td>
                    <td className="py-2.5 px-2">
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                          z.lockType.includes("雙重")
                            ? "bg-rose-50 text-rose-700 border border-rose-200"
                            : z.lockType.includes("固態")
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-sky-50 text-sky-700 border border-sky-200"
                        }`}
                      >
                        {z.lockType}
                      </span>
                    </td>
                    <td className="py-2.5 px-2">
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                          z.priority.includes("最高")
                            ? "bg-[#9A7B4F]/10 text-[#9A7B4F] border border-[#9A7B4F]/30"
                            : z.priority.includes("高")
                            ? "bg-stone-100 text-[#4a5548] border border-stone-200"
                            : "bg-stone-50 text-[#4a5548]/60 border border-stone-100"
                        }`}
                      >
                        {z.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CP ranking note */}
          <div className="mt-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <h3 className="font-serif text-lg text-[#4a5548] mb-3">CP 值排名</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#9A7B4F]/10 text-[#9A7B4F] text-xs font-bold border border-[#9A7B4F]/30">
                  1
                </span>
                <p className="text-sm text-[#4a5548]/70">
                  <strong className="text-[#4a5548]">①膕窩 + ②腹股溝</strong>：6 條足經筋全部結聚＋HA 90ug/g＋經別離穴 = 經筋＋經別＋HA 三重疊合
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-stone-100 text-[#4a5548] text-xs font-bold border border-stone-200">
                  2
                </span>
                <p className="text-sm text-[#4a5548]/70">
                  <strong className="text-[#4a5548]">⑦頸胸入口</strong>：4 條經筋結於缺盆＋全系統交會 &ge;14＋經別出穴集中
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-stone-50 text-[#4a5548]/60 text-xs font-bold border border-stone-100">
                  3
                </span>
                <p className="text-sm text-[#4a5548]/70">
                  <strong className="text-[#4a5548]">③腋窩</strong>：6 條手經筋入腋＋手三陰經別入穴
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CC Points ── */}
        <section id="cc-points" className="mb-20 scroll-mt-16">
          <SectionTitle title="CC 點原則" subtitle="Centre of Coordination -- 肌腹協調中心" />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6">
              <h4 className="font-serif text-base text-[#006494] mb-2">CC（肌腹）</h4>
              <ul className="space-y-1.5 text-sm text-[#4a5548]/70">
                <li>位於肌腹最厚處，接近運動終板</li>
                <li>觸診：肌腹中的條索/硬結（taut band）</li>
                <li>按壓：局部抽搐反應（LTR）</li>
                <li>經筋對應：路徑段（「循脛」「上臑」）</li>
                <li>主要病候：轉筋（肌肉不自主旋轉抽搐）</li>
                <li>手法：深摩擦在肌腹中心，垂直於肌纖維方向</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6">
              <h4 className="font-serif text-base text-[#da7101] mb-2">CF（關節）</h4>
              <ul className="space-y-1.5 text-sm text-[#4a5548]/70">
                <li>位於關節旁骨突處</li>
                <li>觸診：瀰漫性黏滯</li>
                <li>按壓：深壓後有「融化」感</li>
                <li>經筋對應：結聚點（「結於膝」「結於踝」）</li>
                <li>主要病候：拘攣/不可屈伸（關節活動度喪失）</li>
                <li>手法：深壓＋切向力在骨突旁</li>
              </ul>
            </div>
          </div>

          {/* CC zone summary */}
          <div className="mt-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <h3 className="font-serif text-lg text-[#4a5548] mb-3">
              核心發現：fe/hu 段 =「CC 主導區」
            </h3>
            <p className="text-sm text-[#4a5548]/70 leading-relaxed mb-4">
              FM 的 fe（股）和 hu（臂）段是 CC 最密集的區域——大腿和上臂是人體肌腹最厚的部位。但這兩個段不屬於任何一個九區段（九區段按關節定義）。
            </p>
            <div className="rounded-xl bg-[#F9F7F2] p-4 text-sm text-[#4a5548]/70">
              <strong className="text-[#4a5548]">補齊方法：</strong>在①膕窩和②腹股溝之間加入「大腿 CC
              帶」，在③腋窩和⑧肢端之間加入「上臂 CC
              帶」。操作中如果 CF 手法解了關節鎖但運動協調仍異常，就是 CC 的問題。
            </div>
          </div>
        </section>

        {/* ── Spirals ── */}
        <section id="spirals" className="mb-20 scroll-mt-16">
          <SectionTitle
            title="螺旋/對角線 x 維筋相交"
            subtitle="繆刺/巨刺的 FM 重新定義"
          />

          {/* Diagonal table */}
          <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8 overflow-x-auto">
            <h3 className="font-serif text-lg text-[#4a5548] mb-4">FM 四條對角線序列</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">對角線</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">組成</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">下肢走向</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">上肢走向</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">跨中線後</th>
                </tr>
              </thead>
              <tbody>
                {diagonals.map((d) => (
                  <tr key={d.name} className="border-b border-stone-100 last:border-0">
                    <td className="py-2 px-2 font-mono text-xs font-medium text-[#006494]">{d.name}</td>
                    <td className="py-2 px-2 text-[#4a5548]/70">{d.composition}</td>
                    <td className="py-2 px-2 text-[#4a5548]/70">{d.lowerLimb}</td>
                    <td className="py-2 px-2 text-[#4a5548]/70">{d.upperLimb}</td>
                    <td className="py-2 px-2 text-[#4a5548]/70">{d.crossMidline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Spiral evidence */}
          <div className="mt-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <h3 className="font-serif text-lg text-[#4a5548] mb-3">「維筋相交」= 螺旋在顱頂的交叉點</h3>
            <p className="text-sm text-[#4a5548]/70 leading-relaxed mb-4">
              帽狀腱膜（galea aponeurotica）是頭頂最大的筋膜片，左右兩側的顳肌筋膜、枕肌筋膜都在此匯合——左側的張力通過帽狀腱膜傳導到右側。帽狀腱膜（頂）和骶骨（底）是身體螺旋的兩個交叉節點。
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-[#F9F7F2] p-4">
                <p className="text-xs font-medium text-[#4a5548]/50 mb-1">繆刺</p>
                <p className="text-sm text-[#4a5548]/70">沿螺旋線在對側 CC/CF 點做淺層處理（絡脈＝淺筋膜）→ 液態鎖</p>
              </div>
              <div className="rounded-xl bg-[#F9F7F2] p-4">
                <p className="text-xs font-medium text-[#4a5548]/50 mb-1">巨刺</p>
                <p className="text-sm text-[#4a5548]/70">沿螺旋線在對側 CC/CF 點做深層處理（經脈＝深筋膜）→ 固態鎖</p>
              </div>
            </div>
          </div>

          {/* Spiral clinical */}
          <div className="mt-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8 overflow-x-auto">
            <h3 className="font-serif text-lg text-[#4a5548] mb-4">螺旋操作臨床指引</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">線索</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">螺旋方向</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">操作</th>
                </tr>
              </thead>
              <tbody>
                {spiralClinical.map((s) => (
                  <tr key={s.clue} className="border-b border-stone-100 last:border-0">
                    <td className="py-2 px-2 text-[#4a5548]">{s.clue}</td>
                    <td className="py-2 px-2 text-[#006494] font-mono text-xs">{s.direction}</td>
                    <td className="py-2 px-2 text-[#4a5548]/70">{s.operation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-xs text-[#4a5548]/50">
              判斷標準：症狀跨越中線 → 螺旋線問題；症狀同側 → 基本 CC/CF 操作
            </p>
          </div>
        </section>

        {/* ── Operations ── */}
        <section id="operations" className="mb-20 scroll-mt-16">
          <SectionTitle title="FM 三層整合操作流程" subtitle="CF + CC + 螺旋完整評估與操作序列" />

          {/* Assessment sequence */}
          <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <h3 className="font-serif text-lg text-[#4a5548] mb-5">評估序列</h3>
            <div className="space-y-4">
              {[
                { step: "A", title: "CF 評估（關節觸診）", detail: "九個區段逐一觸診關節旁 CF 點 → 找 HA densification 最嚴重處 → 記錄左右差異" },
                { step: "B", title: "CC 評估（肌腹觸診）", detail: "沿經筋路徑段觸診肌腹 → 找條索/硬結 → 注意局部抽搐反應（LTR）" },
                { step: "C", title: "螺旋評估（跨中線模式）", detail: "檢查症狀是否跨越中線 → 如果左右交叉 → 確認螺旋方向（AL/RL/AM/RM）" },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#9A7B4F]/10 text-[#9A7B4F] text-sm font-bold border border-[#9A7B4F]/30">
                    {s.step}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-[#4a5548]">{s.title}</p>
                    <p className="text-sm text-[#4a5548]/60 mt-0.5">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operation sequence */}
          <div className="mt-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <h3 className="font-serif text-lg text-[#4a5548] mb-5">操作序列</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-stone-300 via-[#9A7B4F]/40 to-stone-300 hidden md:block" />
              <div className="space-y-5">
                {[
                  { num: "0", label: "降交感", desc: "關水龍頭（TNF-a -> hyaluronidase 下降）", tag: "不變" },
                  { num: "1", label: "遠端 Somaniks", desc: "萬用三穴配色（按木鬱/火逆型）", tag: "不變" },
                  { num: "2a", label: "關節 CF 手法", desc: "按 CP 值排名操作 CF 點，「以痛為輸」＝最痛先做", tag: "核心" },
                  { num: "2b", label: "肌腹 CC 手法", desc: "CF 完成後運動協調仍異常 → fe/hu 段深摩擦", tag: "新增" },
                  { num: "2c", label: "螺旋操作", desc: "跨中線症狀時，沿對角線繆刺（淺層）或巨刺（深層）", tag: "新增" },
                  { num: "3+", label: "後續序列", desc: "照原 Step 3 ~ 6 序列繼續", tag: "不變" },
                ].map((s) => (
                  <div key={s.num} className="relative flex gap-4 md:ml-1">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 bg-white text-xs font-bold text-[#4a5548] shadow-sm">
                        {s.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm font-medium text-[#4a5548]">{s.label}</p>
                        <span
                          className={`text-[10px] rounded-full px-2 py-0.5 font-medium ${
                            s.tag === "新增"
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : s.tag === "核心"
                              ? "bg-[#9A7B4F]/10 text-[#9A7B4F] border border-[#9A7B4F]/30"
                              : "bg-stone-50 text-[#4a5548]/50 border border-stone-200"
                          }`}
                        >
                          {s.tag}
                        </span>
                      </div>
                      <p className="text-sm text-[#4a5548]/60">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cold/Hot differentiation */}
          <div className="mt-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <h3 className="font-serif text-lg text-[#4a5548] mb-4">「寒則筋急 / 熱則筋縱」三層鑑別</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-[#006494]/20 bg-[#006494]/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BlueOrangeBadge type="drain" label="寒 -- 筋急" />
                </div>
                <ul className="space-y-1 text-sm text-[#4a5548]/70">
                  <li><strong>CF 層：</strong>硬、冷、銳痛 → 深壓＋摩擦生熱</li>
                  <li><strong>CC 層：</strong>條索硬結＋LTR → 深摩擦</li>
                  <li><strong>螺旋：</strong>對側同時出現筋急 → 沿螺旋操作</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[#da7101]/20 bg-[#da7101]/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BlueOrangeBadge type="tonify" label="熱 -- 筋縱" />
                </div>
                <ul className="space-y-1 text-sm text-[#4a5548]/70">
                  <li><strong>CF 層：</strong>關節鬆弛不穩 → 不做深壓 → Somaniks 橘補</li>
                  <li><strong>CC 層：</strong>肌腹軟弱無力 → 不做摩擦 → 肌力訓練</li>
                  <li><strong>螺旋：</strong>張力鬆弛 → 帶脈＋蹻脈收束</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <RelatedLinks
            title="延伸閱讀"
            links={[
              { label: "回到系統首頁", href: "/internal/flow-system", description: "花精 x 一氣周流 x 奇經八脈整合系統" },
              { label: "核心發現深度發展", href: "/internal/flow-system/core-discovery", description: "萬用三穴 + 兩區段手法的完整解剖" },
              { label: "Farrell 五層系統", href: "/internal/flow-system/farrell", description: "人體自我保存機制的五個層次" },
              { label: "八穴總覽", href: "/internal/flow-system/acupoints", description: "奇經八脈交會八穴完整列表" },
            ]}
          />
        </section>
      </div>

      {/* Footer */}
      <footer className="py-12 text-center">
        <p className="text-xs text-[#4a5548]/40">內部測試版 -- 請勿公開分享</p>
      </footer>
    </div>
  );
}

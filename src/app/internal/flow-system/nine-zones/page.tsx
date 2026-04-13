import type { Metadata } from "next";
import Link from "next/link";
import {
  SectionTitle,
  BlueOrangeBadge,
  RelatedLinks,
} from "@/components/flow-system";

export const metadata: Metadata = {
  title: "九區段穴位總圖 | 整合系統",
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Priority = "star" | "doubleStar" | "diamond" | "circle";
type ToolType = "drain" | "tonify" | "both" | "hand" | "observe" | "moxibustion" | "mixed";

interface Acupoint {
  name: string;
  system: string;
  tool: string;
  toolType: ToolType;
  priority: Priority;
  note?: string;
}

interface SubSection {
  title: string;
  acupoints: Acupoint[];
}

interface Zone {
  id: string;
  number: number;
  name: string;
  density: string;
  haLevel: string;
  characteristics: string;
  subSections: SubSection[];
  summary: string;
}

interface StatRow {
  zone: string;
  count: string;
  core: string;
  tool: string;
}

interface ProtocolStep {
  step: string;
  time: string;
  somaniks: string;
  hand: string;
}

/* ------------------------------------------------------------------ */
/*  Data — 9 Zones                                                     */
/* ------------------------------------------------------------------ */

const zones: Zone[] = [
  {
    id: "zone-1",
    number: 1,
    name: "頸胸入口帶",
    density: "系統密度≥14",
    haLevel: "HA ~50-70μg/g",
    characteristics: "經別「出」｜雙重鎖最嚴重｜環境前提CP第1",
    subSections: [
      {
        title: "⓪a 神經預設（Somaniks）",
        acupoints: [
          { name: "C6棘突旁", system: "星狀神經節投影", tool: "藍", toolType: "drain", priority: "star" },
          { name: "C2枕下", system: "脊髓三叉核＋NTS＋硬膜", tool: "藍", toolType: "drain", priority: "star" },
          { name: "耳甲腔", system: "迷走耳支ABVN", tool: "橘", toolType: "tonify", priority: "star" },
        ],
      },
      {
        title: "⓪b 胸段交感封鎖（Somaniks）",
        acupoints: [
          { name: "T2棘突旁（≈肺俞BL13）", system: "T2交感節＋肺俞", tool: "藍", toolType: "drain", priority: "star" },
        ],
      },
      {
        title: "經別出穴（手法＋Somaniks）",
        acupoints: [
          { name: "廉泉CV23", system: "第一合出穴＋根結（少陰結）", tool: "S橘/H", toolType: "tonify", priority: "star" },
          { name: "人迎ST9", system: "第三合出穴＋氣海下俞＋頸動脈竇", tool: "手法限定", toolType: "hand", priority: "star", note: "排除Somaniks（血壓風險）" },
          { name: "扶突LI18", system: "第六合出穴＋根結（手陽明結）", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "翳風SJ17", system: "第二五合出穴", tool: "S/H", toolType: "mixed", priority: "diamond" },
        ],
      },
      {
        title: "經別合穴＋交會穴＋四海",
        acupoints: [
          { name: "天柱BL10", system: "第一合合穴", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "大椎GV14", system: "交會穴（7陽經＋督脈）＋氣海上俞", tool: "S橘", toolType: "tonify", priority: "star" },
          { name: "大杼BL11", system: "八會骨會＋血海上俞", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "缺盆ST12", system: "五陽經潛入口", tool: "H（深度注意）", toolType: "hand", priority: "diamond" },
          { name: "天突CV22", system: "任脈＋正經潛入", tool: "S橘", toolType: "tonify", priority: "diamond" },
          { name: "啞門GV15", system: "氣海上俞（後）＋督脈", tool: "S藍（瀉陽亢）", toolType: "drain", priority: "circle" },
          { name: "風府GV16", system: "髓海下俞＋督脈", tool: "S/H", toolType: "mixed", priority: "circle" },
        ],
      },
      {
        title: "根結",
        acupoints: [
          { name: "天窗SI16", system: "手太陽結", tool: "S/H", toolType: "mixed", priority: "circle" },
          { name: "天牖SJ16", system: "手少陽結", tool: "S/H", toolType: "mixed", priority: "circle" },
        ],
      },
      {
        title: "肩部延伸（頸胸→腋窩走廊）",
        acupoints: [
          { name: "肩井GB21", system: "交會穴（少陽＋陽明＋陽維）", tool: "H", toolType: "hand", priority: "diamond" },
          { name: "臑俞SI10", system: "第四合離穴", tool: "H", toolType: "hand", priority: "circle" },
          { name: "天髎SJ15", system: "第五合離穴", tool: "H", toolType: "hand", priority: "circle" },
          { name: "肩髃LI15", system: "第六合離穴", tool: "H", toolType: "hand", priority: "circle" },
        ],
      },
    ],
    summary: "~22穴｜核心操作：⓪a三點＋大椎＋T2＝5片Somaniks",
  },
  {
    id: "zone-2",
    number: 2,
    name: "腋窩區",
    density: "系統密度~4",
    haLevel: "HA高（肩關節三軸）",
    characteristics: "經別「入」｜液態鎖為主",
    subSections: [
      {
        title: "經別入穴",
        acupoints: [
          { name: "極泉HT1", system: "手少陰正經浮出＝經別第四合入", tool: "H（CF手法）", toolType: "hand", priority: "star" },
          { name: "天池PC1", system: "手厥陰正經浮出＝經別第五合入", tool: "H", toolType: "hand", priority: "star" },
          { name: "中府LU1", system: "手太陰正經浮出＝經別第六合入＋肺募穴", tool: "H/S橘", toolType: "tonify", priority: "star" },
        ],
      },
    ],
    summary: "3穴｜核心操作：肩關節CF手法＝一手法開三條手陰經深淺通道",
  },
  {
    id: "zone-3",
    number: 3,
    name: "膈帶",
    density: "系統密度~10",
    haLevel: "HA中等（29-50μg/g）",
    characteristics: "經別「入」通道｜液態鎖＋固態鎖並重｜一氣周流物理樞紐",
    subSections: [
      {
        title: "八會（最高優先）",
        acupoints: [
          { name: "膻中CV17", system: "八會氣會＋氣海本部＋任脈＋心包募", tool: "S橘", toolType: "tonify", priority: "star" },
          { name: "膈俞BL17", system: "八會血會", tool: "S/H", toolType: "mixed", priority: "star" },
        ],
      },
      {
        title: "五募穴環",
        acupoints: [
          { name: "巨闕CV14", system: "心募", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "期門LR14", system: "肝募＋足厥陰＋足太陰＋陰維交會", tool: "S/H", toolType: "mixed", priority: "star" },
          { name: "章門LR13", system: "脾募＋八會臟會", tool: "S/H", toolType: "mixed", priority: "star" },
          { name: "京門GB25", system: "腎募", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "日月GB24", system: "膽募", tool: "S/H", toolType: "mixed", priority: "diamond" },
        ],
      },
      {
        title: "帶脈穴位",
        acupoints: [
          { name: "帶脈穴GB26", system: "帶脈＋足少陽", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "五樞GB27", system: "帶脈→腹過渡", tool: "H", toolType: "hand", priority: "circle" },
          { name: "維道GB28", system: "帶脈＋腹部側", tool: "H", toolType: "hand", priority: "circle" },
        ],
      },
      {
        title: "其他",
        acupoints: [
          { name: "玉堂CV18", system: "根結（厥陰結）", tool: "S", toolType: "mixed", priority: "circle" },
        ],
      },
    ],
    summary: "~12穴｜核心操作：膈帶環形手法360°＋膻中S橘＋期門/章門S",
  },
  {
    id: "zone-4",
    number: 4,
    name: "腹部",
    density: "系統密度~7",
    haLevel: "HA低-中",
    characteristics: "固態鎖＞液態鎖｜中焦消化核心",
    subSections: [
      {
        title: "俞募＋氣街",
        acupoints: [
          { name: "中脘CV12", system: "胃募＋八會腑會＋根結（太陰結）＋任脈", tool: "S橘", toolType: "tonify", priority: "star" },
          { name: "天樞ST25", system: "大腸募＋氣街（腹前窗）", tool: "S/H", toolType: "mixed", priority: "star" },
          { name: "氣海CV6", system: "氣海＋任脈", tool: "S橘", toolType: "tonify", priority: "star" },
          { name: "石門CV5", system: "三焦募", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "神闕CV8", system: "任脈（灸·不針）", tool: "牟尼香薰", toolType: "moxibustion", priority: "diamond" },
          { name: "肓俞KI16", system: "氣街（腹前窗）＋足少陰", tool: "H", toolType: "hand", priority: "circle" },
        ],
      },
      {
        title: "下腹→腹股溝過渡",
        acupoints: [
          { name: "關元CV4", system: "小腸募＋交會穴（任＋足三陰）＋丹田", tool: "S橘", toolType: "tonify", priority: "star" },
          { name: "中極CV3", system: "膀胱募＋交會穴（任＋足三陰）", tool: "S/H", toolType: "mixed", priority: "diamond" },
        ],
      },
    ],
    summary: "~8穴｜核心操作：中脘S橘＋呼吸引導＋關元S橘",
  },
  {
    id: "zone-5",
    number: 5,
    name: "腹股溝區",
    density: "系統密度~10",
    haLevel: "HA ~90μg/g",
    characteristics: "經別「離」＋「入」｜液態鎖最嚴重（久坐重災區）",
    subSections: [
      {
        title: "經別離入穴（最高優先）",
        acupoints: [
          { name: "環跳GB30", system: "第二合離穴（少陽/厥陰）", tool: "H（CF深壓）", toolType: "hand", priority: "star" },
          { name: "髀關ST31", system: "第三合離穴（陽明/太陰）", tool: "H", toolType: "hand", priority: "star" },
          { name: "箕門SP11", system: "第三合入穴", tool: "H", toolType: "hand", priority: "diamond" },
        ],
      },
      {
        title: "正經潛入浮出＋氣街",
        acupoints: [
          { name: "氣衝ST30", system: "氣街（脛氣街起點）＋足陽明浮出＋衝脈起", tool: "S/H", toolType: "mixed", priority: "star" },
          { name: "衝門SP12", system: "足太陰入腹", tool: "H", toolType: "hand", priority: "diamond" },
          { name: "急脈LR12", system: "足厥陰入腹", tool: "H（注意深度）", toolType: "hand", priority: "circle" },
        ],
      },
      {
        title: "俞募",
        acupoints: [
          { name: "關元CV4", system: "小腸募（與腹部共用）", tool: "S橘", toolType: "tonify", priority: "star" },
          { name: "中極CV3", system: "膀胱募（與腹部共用）", tool: "S", toolType: "mixed", priority: "diamond" },
        ],
      },
    ],
    summary: "~8穴｜核心操作：髖關節CF手法（環跳＋髀關周圍）＋氣衝確認",
  },
  {
    id: "zone-6",
    number: 6,
    name: "腰脊區",
    density: "系統密度~4＋14背俞＋八髎",
    haLevel: "HA中等（TLF·神經密度6倍）",
    characteristics: "固態鎖為主｜骶段副交感＋督脈起點·環境前提CP第2",
    subSections: [
      {
        title: "⓪c 骶段副交感預設（Somaniks）",
        acupoints: [
          { name: "次髎BL32", system: "八髎S2＝骶段副交感核心", tool: "藍", toolType: "drain", priority: "star" },
          { name: "中髎BL33", system: "八髎S3＝骶段副交感核心", tool: "藍", toolType: "drain", priority: "star" },
          { name: "上髎BL31", system: "八髎S1（偏體感覺/運動）", tool: "藍（輔助）", toolType: "drain", priority: "diamond" },
          { name: "下髎BL34", system: "八髎S4", tool: "藍（輔助）", toolType: "drain", priority: "circle" },
          { name: "長強GV1", system: "督脈起點＋衝任同源", tool: "橘", toolType: "tonify", priority: "star" },
        ],
      },
      {
        title: "14背俞穴",
        acupoints: [
          { name: "肺俞BL13", system: "肺 · T3", tool: "S/H", toolType: "mixed", priority: "star", note: "＝T2棘突旁/⓪b位置" },
          { name: "厥陰俞BL14", system: "心包 · T4", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "心俞BL15", system: "心 · T5", tool: "S/H", toolType: "mixed", priority: "star" },
          { name: "督俞BL16", system: "督脈 · T6", tool: "S/H", toolType: "mixed", priority: "circle" },
          { name: "膈俞BL17", system: "血會 · T7", tool: "S/H", toolType: "mixed", priority: "star" },
          { name: "肝俞BL18", system: "肝 · T9", tool: "S/H", toolType: "mixed", priority: "star" },
          { name: "膽俞BL19", system: "膽 · T10", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "脾俞BL20", system: "脾 · T11", tool: "S/H", toolType: "mixed", priority: "star" },
          { name: "胃俞BL21", system: "胃 · T12", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "三焦俞BL22", system: "三焦 · L1", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "腎俞BL23", system: "腎 · L2", tool: "S/H", toolType: "mixed", priority: "star" },
          { name: "氣海俞BL24", system: "氣海 · L3", tool: "S/H", toolType: "mixed", priority: "circle" },
          { name: "大腸俞BL25", system: "大腸 · L4", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "小腸俞BL27", system: "小腸 · S1", tool: "S/H", toolType: "mixed", priority: "circle" },
          { name: "膀胱俞BL28", system: "膀胱 · S2", tool: "S/H", toolType: "mixed", priority: "diamond", note: "與次髎同水平" },
        ],
      },
      {
        title: "督脈要穴",
        acupoints: [
          { name: "命門GV4", system: "督脈＋腎陽之根", tool: "S橘", toolType: "tonify", priority: "star" },
          { name: "腰陽關GV3", system: "督脈＋腰部樞紐", tool: "S/H", toolType: "mixed", priority: "diamond" },
          { name: "腰俞GV2", system: "督脈＋骶骨", tool: "H", toolType: "hand", priority: "circle" },
        ],
      },
    ],
    summary: "~22穴｜核心操作：⓪c八髎藍＋長強橘＋TLF手法＋命門S橘",
  },
  {
    id: "zone-7",
    number: 7,
    name: "膕窩區",
    density: "系統密度~7",
    haLevel: "HA 90μg/g（全身最高）",
    characteristics: "經別「離」｜液態鎖最嚴重｜太陽「開」閘門｜核心治療CP第2",
    subSections: [
      {
        title: "膕窩穴位",
        acupoints: [
          { name: "委中BL40", system: "經別第一合離穴＋合穴＋下合穴（膀胱）＋太陽開門", tool: "H（CF深壓）＋S藍", toolType: "drain", priority: "doubleStar" },
          { name: "陰谷KI10", system: "經別第一合入穴＋合穴（腎）", tool: "H", toolType: "hand", priority: "star" },
          { name: "委陽BL39", system: "下合穴（三焦）", tool: "H", toolType: "hand", priority: "diamond" },
        ],
      },
    ],
    summary: "3穴｜核心操作：委中CF手法（摩擦生熱→HA90逆轉）＋委中S藍",
  },
  {
    id: "zone-8",
    number: 8,
    name: "肢體遠端",
    density: "系統密度~10",
    haLevel: "HA低-中（日常使用保持流動）",
    characteristics: "通常無鎖｜核心治療CP第1",
    subSections: [
      {
        title: "8a 肘膝帶（合穴＋下合穴＋經穴＋郄穴）",
        acupoints: [
          { name: "足三里ST36", system: "四海（水穀下俞）＋下合穴（胃）＋合穴＋陽明闔門", tool: "S橘", toolType: "tonify", priority: "star" },
          { name: "陽陵泉GB34", system: "八會筋會＋下合穴（膽）＋合穴", tool: "S/H", toolType: "mixed", priority: "star" },
          { name: "上巨虛ST37", system: "四海（血海下俞）＋下合穴（大腸）", tool: "S", toolType: "mixed", priority: "diamond" },
          { name: "下巨虛ST39", system: "四海（血海下俞）＋下合穴（小腸）", tool: "S", toolType: "mixed", priority: "diamond" },
          { name: "三陰交SP6", system: "交會穴（足三陰）＋花精", tool: "S橘", toolType: "tonify", priority: "star" },
          { name: "曲池LI11", system: "合穴（大腸）＋手陽明", tool: "S", toolType: "mixed", priority: "diamond" },
          { name: "尺澤LU5", system: "合穴（肺）", tool: "S", toolType: "mixed", priority: "circle" },
          { name: "少海HT3", system: "合穴（心）", tool: "S", toolType: "mixed", priority: "circle" },
          { name: "曲泉LR8", system: "合穴（肝）", tool: "S", toolType: "mixed", priority: "circle" },
          { name: "郄門PC4", system: "郄穴（心包）", tool: "S（急症）", toolType: "mixed", priority: "circle" },
          { name: "梁丘ST34", system: "郄穴（胃）", tool: "S（急症）", toolType: "mixed", priority: "circle" },
        ],
      },
      {
        title: "8b 萬用三穴組（核心治療CP第1）",
        acupoints: [
          { name: "公孫SP4", system: "八脈交會（衝脈＋陰維）＋絡穴（脾）＋花精土軌道", tool: "橘", toolType: "tonify", priority: "doubleStar" },
          { name: "內關PC6", system: "八脈交會（陰維）＋絡穴（心包）＋花精火軌道", tool: "橘", toolType: "tonify", priority: "doubleStar" },
          { name: "太衝LR3", system: "經別第二合入穴＋原穴（肝）＋花精木軌道", tool: "橘", toolType: "tonify", priority: "doubleStar" },
        ],
      },
      {
        title: "8b 九穴補充組",
        acupoints: [
          { name: "列缺LU7", system: "八脈交會（任脈＋陰蹻）＋絡穴（肺）＋交會穴", tool: "S", toolType: "mixed", priority: "star" },
          { name: "合谷LI4", system: "原穴（大腸）＋四總穴（面口）", tool: "S", toolType: "mixed", priority: "star" },
          { name: "照海KI6", system: "八脈交會（陰蹻）＋花精水軌道", tool: "S橘", toolType: "tonify", priority: "star" },
          { name: "臨泣GB41", system: "八脈交會（帶脈）＋花精木軌道", tool: "S橘", toolType: "tonify", priority: "star" },
        ],
      },
      {
        title: "8b 其餘八脈交會穴（按需選用）",
        acupoints: [
          { name: "後谿SI3", system: "八脈交會（督脈＋陽蹻）＋花精火軌道", tool: "依病機", toolType: "mixed", priority: "circle", note: "督脈/陽蹻/背部病" },
          { name: "申脈BL62", system: "八脈交會（陽蹻）＋花精水軌道", tool: "依病機", toolType: "mixed", priority: "circle", note: "陽蹻過亢/失眠/交感↑" },
          { name: "外關SJ5", system: "八脈交會（陽維）＋絡穴（三焦）", tool: "依病機", toolType: "mixed", priority: "circle", note: "陽維/邊界/帶脈配對" },
        ],
      },
      {
        title: "8b 12原穴（全在腕踝）",
        acupoints: [
          { name: "太淵LU9（＋脈會）", system: "肺", tool: "S", toolType: "mixed", priority: "circle" },
          { name: "合谷LI4", system: "大腸", tool: "S", toolType: "mixed", priority: "star" },
          { name: "衝陽ST42", system: "胃", tool: "S", toolType: "mixed", priority: "circle" },
          { name: "太白SP3", system: "脾", tool: "S", toolType: "mixed", priority: "circle" },
          { name: "神門HT7", system: "心", tool: "S", toolType: "mixed", priority: "circle" },
          { name: "腕骨SI4", system: "小腸", tool: "S", toolType: "mixed", priority: "circle" },
          { name: "太谿KI3", system: "腎", tool: "S", toolType: "mixed", priority: "circle" },
          { name: "太衝LR3（＋經別入）", system: "肝", tool: "S", toolType: "mixed", priority: "star" },
          { name: "大陵PC7", system: "心包", tool: "S", toolType: "mixed", priority: "circle" },
          { name: "陽池SJ4", system: "三焦", tool: "S", toolType: "mixed", priority: "circle" },
          { name: "京骨BL64", system: "膀胱", tool: "S", toolType: "mixed", priority: "circle" },
          { name: "丘墟GB40", system: "膽", tool: "S", toolType: "mixed", priority: "circle" },
        ],
      },
    ],
    summary: "~40穴｜核心操作：萬用三穴S橘（3片·3分鐘）＝CP值最高的單一操作",
  },
  {
    id: "zone-9",
    number: 9,
    name: "頭面部",
    density: "系統密度≥10",
    haLevel: "HA 6μg/g（全身最低）",
    characteristics: "經別「合」｜無鎖｜問題在神經整合不在筋膜｜驗證站",
    subSections: [
      {
        title: "經別合穴",
        acupoints: [
          { name: "睛明BL1", system: "第四合合穴（手太陽/少陰）", tool: "O（望診）", toolType: "observe", priority: "star" },
          { name: "瞳子髎GB1", system: "第二合合穴（少陽/厥陰）", tool: "O", toolType: "observe", priority: "star" },
          { name: "承泣ST1", system: "第三合合穴（陽明/太陰）", tool: "O", toolType: "observe", priority: "star" },
          { name: "完骨GB12", system: "第五合合穴（手少陽/厥陰）", tool: "S（按需）", toolType: "mixed", priority: "diamond" },
          { name: "迎香LI20", system: "第六合合穴（手陽明/太陰）", tool: "S（按需）", toolType: "mixed", priority: "diamond" },
        ],
      },
      {
        title: "根結「結」＋四海＋督脈",
        acupoints: [
          { name: "百會GV20", system: "交會穴（足三陽＋督＋厥陰）＋四海（髓海上俞）＋諸陽之會", tool: "S橘（按需）", toolType: "tonify", priority: "star" },
          { name: "囟會GV22", system: "四海（髓海上俞）", tool: "O", toolType: "observe", priority: "circle" },
          { name: "印堂GV24.5", system: "督脈（經外奇穴）", tool: "S（按需）", toolType: "mixed", priority: "diamond" },
        ],
      },
      {
        title: "七竅望診（觀察不操作）",
        acupoints: [
          { name: "目", system: "肝 — 目神·眼白色·瞳孔", tool: "望診", toolType: "observe", priority: "star", note: "睛明＋瞳子髎＋承泣" },
          { name: "耳", system: "腎 — 聽力·耳形·耳色", tool: "望診", toolType: "observe", priority: "star", note: "完骨（耳後）" },
          { name: "鼻", system: "肺 — 鼻翼·鼻息·嗅覺", tool: "望診", toolType: "observe", priority: "star", note: "迎香" },
          { name: "口", system: "脾 — 唇色·口味·口氣", tool: "望診", toolType: "observe", priority: "star" },
          { name: "舌", system: "心 — 舌色·舌形·舌苔", tool: "望診", toolType: "observe", priority: "star", note: "廉泉（舌下·頸胸入口）" },
        ],
      },
    ],
    summary: "~10穴｜核心操作：望診（觀察面色目神表情＝判斷「合」是否出現）",
  },
];

/* ------------------------------------------------------------------ */
/*  Data — Statistics                                                  */
/* ------------------------------------------------------------------ */

const stats: StatRow[] = [
  { zone: "1 頸胸入口", count: "~22", core: "C6＋C2＋耳甲腔＋大椎＋T2", tool: "Somaniks為主" },
  { zone: "2 腋窩", count: "3", core: "極泉＋天池＋中府", tool: "CF手法" },
  { zone: "3 膈帶", count: "~12", core: "膻中＋期門＋章門＋膈俞", tool: "環形手法＋Somaniks" },
  { zone: "4 腹部", count: "~8", core: "中脘＋天樞＋氣海＋關元", tool: "Somaniks＋呼吸" },
  { zone: "5 腹股溝", count: "~8", core: "環跳＋髀關＋氣衝", tool: "CF手法" },
  { zone: "6 腰脊", count: "~22", core: "次髎＋中髎＋長強＋命門＋14背俞", tool: "Somaniks＋TLF手法" },
  { zone: "7 膕窩", count: "3", core: "委中＋陰谷＋委陽", tool: "CF手法＋Somaniks" },
  { zone: "8 肢端", count: "~40", core: "公孫＋內關＋太衝（萬用三穴）", tool: "Somaniks（CP最高）" },
  { zone: "9 頭面", count: "~10", core: "百會＋睛明＋瞳子髎＋承泣", tool: "望診（觀察為主）" },
];

/* ------------------------------------------------------------------ */
/*  Data — 32-min Protocol                                             */
/* ------------------------------------------------------------------ */

const protocol: ProtocolStep[] = [
  { step: "⓪a顱端", time: "1min", somaniks: "C6藍＋C2藍＋耳甲腔橘", hand: "—" },
  { step: "⓪c骶端", time: "1min", somaniks: "次髎BL32藍＋中髎BL33藍＋長強GV1橘", hand: "—" },
  { step: "等待", time: "3-5min", somaniks: "—", hand: "—" },
  { step: "①遠端", time: "2min", somaniks: "公孫SP4橘＋內關PC6橘＋太衝LR3橘", hand: "—" },
  { step: "②CF手法", time: "10min", somaniks: "（委中BL40藍·手法後貼）", hand: "膕窩CF＋髖關節CF（環跳/髀關周圍）" },
  { step: "④膈帶", time: "8min", somaniks: "（膻中CV17橘·手法後貼）", hand: "膈帶環形360°（肋弓下＋季肋＋劍突下）" },
  { step: "⑤⑥驗證", time: "5min", somaniks: "—", hand: "迷走五項觀察＋頭面望診" },
];

/* ------------------------------------------------------------------ */
/*  Helper Components                                                  */
/* ------------------------------------------------------------------ */

function PriorityBadge({ priority }: { priority: Priority }) {
  const config = {
    doubleStar: { label: "★★", classes: "bg-[#9A7B4F]/15 text-[#9A7B4F] border-[#9A7B4F]/30 font-bold" },
    star:       { label: "★ 核心", classes: "bg-[#9A7B4F]/10 text-[#9A7B4F] border-[#9A7B4F]/20" },
    diamond:    { label: "◆ 重要", classes: "bg-[#006494]/10 text-[#006494] border-[#006494]/20" },
    circle:     { label: "○ 輔助", classes: "bg-stone-100 text-stone-500 border-stone-200" },
  } as const;

  const { label, classes } = config[priority];
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${classes}`}>
      {label}
    </span>
  );
}

function ToolBadge({ tool, toolType }: { tool: string; toolType: ToolType }) {
  const colorMap: Record<ToolType, string> = {
    drain: "bg-[#006494]/10 text-[#006494] border-[#006494]/20",
    tonify: "bg-[#da7101]/10 text-[#da7101] border-[#da7101]/20",
    both: "bg-purple-50 text-purple-600 border-purple-200",
    hand: "bg-stone-100 text-stone-600 border-stone-200",
    observe: "bg-emerald-50 text-emerald-600 border-emerald-200",
    moxibustion: "bg-amber-50 text-amber-600 border-amber-200",
    mixed: "bg-stone-50 text-stone-500 border-stone-200",
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${colorMap[toolType]}`}>
      {tool}
    </span>
  );
}

function ZoneCard({ zone }: { zone: Zone }) {
  return (
    <section id={zone.id} className="scroll-mt-24">
      {/* Zone Header */}
      <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8 mb-6">
        <div className="flex flex-wrap items-start gap-4 mb-4">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#9A7B4F]/10 text-[#9A7B4F] font-bold text-lg border border-[#9A7B4F]/20">
            {zone.number}
          </span>
          <div className="flex-1 min-w-0">
            <h2 className="font-serif text-2xl md:text-3xl text-[#4a5548]">
              {zone.name}
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs text-stone-600">
                {zone.density}
              </span>
              <span className="inline-flex items-center rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs text-stone-600">
                {zone.haLevel}
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm md:text-base text-[#4a5548]/70 leading-relaxed">
          {zone.characteristics}
        </p>
      </div>

      {/* Sub-sections */}
      <div className="space-y-4 mb-8">
        {zone.subSections.map((sub) => (
          <div
            key={sub.title}
            className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-stone-100">
              <h3 className="font-serif text-lg text-[#4a5548]">{sub.title}</h3>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-50/50 text-left">
                    <th className="px-6 py-3 font-medium text-[#4a5548]/50 text-xs uppercase tracking-wider">穴位</th>
                    <th className="px-6 py-3 font-medium text-[#4a5548]/50 text-xs uppercase tracking-wider">系統</th>
                    <th className="px-6 py-3 font-medium text-[#4a5548]/50 text-xs uppercase tracking-wider">工具</th>
                    <th className="px-6 py-3 font-medium text-[#4a5548]/50 text-xs uppercase tracking-wider">優先</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {sub.acupoints.map((ap, i) => (
                    <tr key={`${ap.name}-${i}`} className="hover:bg-stone-50/30 transition-colors">
                      <td className="px-6 py-3 font-medium text-[#4a5548] whitespace-nowrap">{ap.name}</td>
                      <td className="px-6 py-3 text-[#4a5548]/70">
                        {ap.system}
                        {ap.note && (
                          <span className="block text-xs text-amber-600 mt-0.5">{ap.note}</span>
                        )}
                      </td>
                      <td className="px-6 py-3">
                        <ToolBadge tool={ap.tool} toolType={ap.toolType} />
                      </td>
                      <td className="px-6 py-3">
                        <PriorityBadge priority={ap.priority} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden divide-y divide-stone-100">
              {sub.acupoints.map((ap, i) => (
                <div key={`${ap.name}-mobile-${i}`} className="px-5 py-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-medium text-[#4a5548]">{ap.name}</span>
                    <PriorityBadge priority={ap.priority} />
                  </div>
                  <p className="text-xs text-[#4a5548]/60 leading-relaxed">{ap.system}</p>
                  {ap.note && (
                    <p className="text-xs text-amber-600">{ap.note}</p>
                  )}
                  <ToolBadge tool={ap.tool} toolType={ap.toolType} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Zone summary */}
      <div className="rounded-xl bg-[#9A7B4F]/5 border border-[#9A7B4F]/15 px-6 py-4 mb-12">
        <p className="text-sm font-medium text-[#9A7B4F]">
          本區段：{zone.summary}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function NineZonesPage() {
  const totalAcupoints = 128;
  const zoneCount = 9;
  const coreProtocolPoints = 15;
  const protocolMinutes = 32;

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Internal badge */}
      <div className="fixed top-4 right-4 z-50 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
        內部測試版
      </div>

      {/* Sticky nav */}
      <nav className="sticky top-0 z-40 bg-[#F9F7F2]/90 backdrop-blur-md border-b border-stone-200/50">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-4 overflow-x-auto">
          <Link
            href="/internal/flow-system"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm text-[#4a5548]/50 hover:text-[#4a5548] transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            系統首頁
          </Link>
          <span className="text-stone-300">|</span>
          {zones.map((z) => (
            <a
              key={z.id}
              href={`#${z.id}`}
              className="flex-shrink-0 inline-flex items-center gap-1 text-xs text-[#4a5548]/50 hover:text-[#9A7B4F] transition-colors"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#9A7B4F]/10 text-[#9A7B4F] text-[10px] font-bold">
                {z.number}
              </span>
              <span className="hidden lg:inline">{z.name}</span>
            </a>
          ))}
          <span className="text-stone-300">|</span>
          <a
            href="#protocol"
            className="flex-shrink-0 text-xs text-[#9A7B4F] font-medium hover:text-[#9A7B4F]/80 transition-colors"
          >
            32min處方
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#4a5548] tracking-tight leading-tight">
            九區段穴位總圖
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#4a5548]/60">
            深淺交換地圖 — 全穴位歸位總圖
          </p>
        </div>

        {/* Summary Statistics */}
        <section className="mb-16">
          <SectionTitle title="系統總覽" />

          {/* Quick stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "區段", value: zoneCount.toString(), unit: "個" },
              { label: "總穴位", value: `~${totalAcupoints}`, unit: "穴" },
              { label: "極簡處方", value: `~${coreProtocolPoints}`, unit: "穴" },
              { label: "處方時間", value: protocolMinutes.toString(), unit: "分鐘" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-5 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-[#9A7B4F]">{s.value}</p>
                <p className="mt-1 text-xs text-[#4a5548]/50">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Full stats table */}
          <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-50/50 text-left">
                    <th className="px-6 py-3 font-medium text-[#4a5548]/50 text-xs uppercase tracking-wider">區段</th>
                    <th className="px-6 py-3 font-medium text-[#4a5548]/50 text-xs uppercase tracking-wider">穴位數</th>
                    <th className="px-6 py-3 font-medium text-[#4a5548]/50 text-xs uppercase tracking-wider">核心穴</th>
                    <th className="px-6 py-3 font-medium text-[#4a5548]/50 text-xs uppercase tracking-wider">最佳工具</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {stats.map((s) => (
                    <tr key={s.zone} className="hover:bg-stone-50/30 transition-colors">
                      <td className="px-6 py-3 font-medium text-[#4a5548] whitespace-nowrap">{s.zone}</td>
                      <td className="px-6 py-3 text-[#4a5548]/70">{s.count}</td>
                      <td className="px-6 py-3 text-[#4a5548]/70">{s.core}</td>
                      <td className="px-6 py-3 text-[#4a5548]/70">{s.tool}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#9A7B4F]/5 font-medium">
                    <td className="px-6 py-3 text-[#9A7B4F]">合計</td>
                    <td className="px-6 py-3 text-[#9A7B4F]">~128穴</td>
                    <td className="px-6 py-3 text-[#9A7B4F]" colSpan={2}>32分鐘極簡處方用~15穴</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 rounded-xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-5">
            <h4 className="text-xs font-medium text-[#4a5548]/50 uppercase tracking-wider mb-3">圖例</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <PriorityBadge priority="doubleStar" />
                <span className="text-xs text-[#4a5548]/60">最高核心</span>
              </div>
              <div className="flex items-center gap-2">
                <PriorityBadge priority="star" />
                <span className="text-xs text-[#4a5548]/60">核心穴</span>
              </div>
              <div className="flex items-center gap-2">
                <PriorityBadge priority="diamond" />
                <span className="text-xs text-[#4a5548]/60">重要穴</span>
              </div>
              <div className="flex items-center gap-2">
                <PriorityBadge priority="circle" />
                <span className="text-xs text-[#4a5548]/60">輔助穴</span>
              </div>
              <div className="flex items-center gap-2">
                <BlueOrangeBadge type="drain" label="藍洩" size="sm" />
                <span className="text-xs text-[#4a5548]/60">Somaniks 洩</span>
              </div>
              <div className="flex items-center gap-2">
                <BlueOrangeBadge type="tonify" label="橘補" size="sm" />
                <span className="text-xs text-[#4a5548]/60">Somaniks 補</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Zone Sections ---- */}
        <div className="mb-20">
          <SectionTitle
            title="九區段詳細"
            subtitle="每個區段列出所有可操作穴位，按系統分類，標註工具與優先級"
          />
          <div className="mt-12">
            {zones.map((zone) => (
              <ZoneCard key={zone.id} zone={zone} />
            ))}
          </div>
        </div>

        {/* ---- 32-min Protocol ---- */}
        <section id="protocol" className="scroll-mt-24 mb-20">
          <SectionTitle
            title="32分鐘極簡處方"
            subtitle="精確穴位清單 — Somaniks 11片 + 手法3區域"
          />

          <div className="mt-10 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm overflow-hidden">
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-50/50 text-left">
                    <th className="px-6 py-3 font-medium text-[#4a5548]/50 text-xs uppercase tracking-wider">步驟</th>
                    <th className="px-6 py-3 font-medium text-[#4a5548]/50 text-xs uppercase tracking-wider">時間</th>
                    <th className="px-6 py-3 font-medium text-[#4a5548]/50 text-xs uppercase tracking-wider">Somaniks貼片</th>
                    <th className="px-6 py-3 font-medium text-[#4a5548]/50 text-xs uppercase tracking-wider">手法位置</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {protocol.map((p, i) => (
                    <tr key={i} className="hover:bg-stone-50/30 transition-colors">
                      <td className="px-6 py-3 font-medium text-[#4a5548] whitespace-nowrap">{p.step}</td>
                      <td className="px-6 py-3 text-[#9A7B4F] font-medium whitespace-nowrap">{p.time}</td>
                      <td className="px-6 py-3 text-[#4a5548]/70">{p.somaniks}</td>
                      <td className="px-6 py-3 text-[#4a5548]/70">{p.hand}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#9A7B4F]/5 font-medium">
                    <td className="px-6 py-3 text-[#9A7B4F]">合計</td>
                    <td className="px-6 py-3 text-[#9A7B4F]">~32min</td>
                    <td className="px-6 py-3 text-[#9A7B4F]">Somaniks 11片</td>
                    <td className="px-6 py-3 text-[#9A7B4F]">手法3區域</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden divide-y divide-stone-100">
              {protocol.map((p, i) => (
                <div key={i} className="px-5 py-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#4a5548]">{p.step}</span>
                    <span className="text-sm font-medium text-[#9A7B4F]">{p.time}</span>
                  </div>
                  {p.somaniks !== "—" && (
                    <p className="text-xs text-[#4a5548]/60">
                      <span className="text-[#4a5548]/40">貼片：</span>{p.somaniks}
                    </p>
                  )}
                  {p.hand !== "—" && (
                    <p className="text-xs text-[#4a5548]/60">
                      <span className="text-[#4a5548]/40">手法：</span>{p.hand}
                    </p>
                  )}
                </div>
              ))}
              <div className="px-5 py-4 bg-[#9A7B4F]/5">
                <p className="text-sm font-medium text-[#9A7B4F]">合計：~32min / Somaniks 11片 / 手法3區域</p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-[#4a5548]/40">
            建構時間：2026年4月11日
          </p>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <RelatedLinks
            title="延伸閱讀"
            links={[
              {
                label: "回到系統首頁",
                href: "/internal/flow-system",
                description: "花精 x 一氣周流 x 奇經八脈整合系統",
              },
              {
                label: "Farrell 經絡五層系統",
                href: "/internal/flow-system/farrell",
                description: "人體自我保存機制 — 由淺到深的五個層次",
              },
              {
                label: "八穴總覽",
                href: "/internal/flow-system/acupoints",
                description: "奇經八脈交會八穴完整列表",
              },
              {
                label: "臨床情境",
                href: "/internal/flow-system/clinical",
                description: "實際臨床情境與治療策略",
              },
            ]}
          />
        </section>
      </div>

      {/* Footer */}
      <footer className="py-12 text-center">
        <p className="text-xs text-[#4a5548]/40">
          內部測試版 — 請勿公開分享
        </p>
      </footer>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  SectionTitle,
  BlueOrangeBadge,
  RelatedLinks,
} from "@/components/flow-system";

export const metadata: Metadata = {
  title: "交叉比對與最高效處方流程 | MAX 整合系統",
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface TopAcupoint {
  name: string;
  zone: string;
  systems: string;
  layers: string;
  density: number;
}

const topAcupoints: TopAcupoint[] = [
  { name: "大椎 GV14", zone: "頸胸入口", systems: "交會穴(7陽經)+四海(氣海上俞)+督脈+六經(太陽開門後界)", layers: "氣+精", density: 5 },
  { name: "委中 BL40", zone: "膕窩", systems: "經別離穴(第一合)+合穴(膀胱)+下合穴(膀胱)+刺禁標記+太陽開門起點", layers: "氣+形", density: 5 },
  { name: "足三里 ST36", zone: "肢端->膝", systems: "四海(水穀之海下俞)+下合穴(胃)+合穴+五輸穴+陽明闔門", layers: "氣+精", density: 5 },
  { name: "太淵 LU9", zone: "肢端", systems: "八會(脈會)+原穴(肺)+五輸穴(俞穴)+花精(菊苣軌道/金元素)", layers: "氣+精+神", density: 5 },
  { name: "太衝 LR3", zone: "肢端", systems: "經別入穴(第二合)+原穴(肝)+五輸穴(俞穴)+花精(鳳仙花軌道/木元素)", layers: "氣+精+神", density: 5 },
  { name: "公孫 SP4", zone: "肢端", systems: "八脈交會穴(衝脈+陰維)+絡穴(脾)+五輸穴+花精(水蕨軌道/土元素)", layers: "氣+精+神", density: 5 },
];

const tier1Acupoints: TopAcupoint[] = [
  { name: "內關 PC6", zone: "肢端", systems: "八脈交會穴(陰維)+絡穴(心包)+五輸穴+花精(水菫軌道/火元素)", layers: "氣+精+神", density: 4 },
  { name: "列缺 LU7", zone: "肢端", systems: "八脈交會穴(任脈+陰蹻)+絡穴(肺)+五輸穴+交會穴(任脈)", layers: "氣+精", density: 4 },
  { name: "照海 KI6", zone: "肢端", systems: "八脈交會穴(陰蹻)+五輸穴+花精(溝酸漿軌道/水元素)+陰蹻郄穴附近", layers: "氣+精+神", density: 4 },
  { name: "大杼 BL11", zone: "頸胸入口", systems: "八會(骨會)+四海(血海上俞)+交會穴(手足太陽)+背俞帶起點", layers: "氣+精", density: 4 },
  { name: "膻中 CV17", zone: "膈帶", systems: "八會(氣會)+四海(氣海本部)+任脈+俞募(心包募)", layers: "氣+精", density: 4 },
  { name: "三陰交 SP6", zone: "肢端->膝", systems: "交會穴(足三陰)+五輸穴+郄穴附近+花精(水蕨軌道)", layers: "氣+神", density: 4 },
  { name: "陽陵泉 GB34", zone: "肢端->膝", systems: "八會(筋會)+下合穴(膽)+合穴+五輸穴", layers: "氣", density: 4 },
  { name: "人迎 ST9", zone: "頸胸入口", systems: "經別出穴(第三合)+四海(氣海下俞/前)+交會穴(足陽明+足少陽)", layers: "氣+精", density: 4 },
  { name: "後谿 SI3", zone: "肢端", systems: "八脈交會穴(督脈+陽蹻)+五輸穴(俞穴)+花精(龍芽草軌道/火元素)", layers: "氣+精+神", density: 4 },
  { name: "申脈 BL62", zone: "肢端", systems: "八脈交會穴(陽蹻)+五輸穴+陽蹻起點+花精(矢車菊軌道/水元素)", layers: "氣+精+神", density: 4 },
];

interface SevenPointStep {
  order: number;
  point: string;
  operation: string;
  systems: string;
}

const sevenPointProtocol: SevenPointStep[] = [
  { order: 1, point: "大椎 GV14", operation: "頸後筋膜鬆解 + Somaniks微針", systems: "7陽經+督脈+氣海+血海上+太陽開門" },
  { order: 2, point: "委中 BL40", operation: "膕窩筋膜鬆解", systems: "經別第一合+太陽開門+膀胱下合穴" },
  { order: 3, point: "公孫 SP4 + 內關 PC6", operation: "Somaniks微針（橘補/藍洩）", systems: "衝脈+陰維+脾絡+心包絡+膈帶腹部深層調控" },
  { order: 4, point: "後谿 SI3 + 申脈 BL62", operation: "Somaniks微針（橘補/藍洩）", systems: "督脈+陽蹻+頸項肩背+交感調降" },
  { order: 5, point: "足三里 ST36", operation: "深壓 + Somaniks微針", systems: "水穀之海+胃下合穴+陽明闔門+消化啟動" },
  { order: 6, point: "膻中 CV17", operation: "膈帶筋膜手法時順帶處理", systems: "氣會+氣海本部+任脈+中土斡旋" },
  { order: 7, point: "太衝 LR3", operation: "Somaniks微針（橘補/藍洩）", systems: "經別入穴+肝原穴+厥陰風木+升發左路" },
];

interface PathomechProtocol {
  id: string;
  title: string;
  subtitle: string;
  sixQi: string;
  sixChannel: string;
  weiQiYingXue: string;
  steps: { step: string; operation: string; points: string; systems: string; flower: string }[];
  summary: string;
}

const pathomechProtocols: PathomechProtocol[] = [
  {
    id: "sympathetic",
    title: "A. 交感亢進型",
    subtitle: "失眠焦慮頸僵面紅",
    sixQi: "陽蹻過亢 = 太陽寒水不藏 + 少陰君火上浮",
    sixChannel: "太陽 -> 少陰傳變",
    weiQiYingXue: "氣分（功能亢進）",
    steps: [
      { step: "開閘", operation: "頸胸入口筋膜鬆解", points: "大椎 + 人迎區域", systems: "7陽經+氣海前後貫通", flower: "精油預塗" },
      { step: "通幹", operation: "膈帶環形鬆解", points: "膻中 + 帶脈穴", systems: "氣會+帶脈束約+中土", flower: "--" },
      { step: "調精", operation: "降陽蹻升陰蹻", points: "後谿+申脈(降陽), 照海+列缺(升陰)", systems: "督脈+陽蹻+任脈+陰蹻", flower: "--" },
      { step: "調精", operation: "調動元氣", points: "太溪 KI3（腎原穴）", systems: "腎元氣+少陰樞", flower: "--" },
      { step: "調神", operation: "花精外敷+內服", points: "膕窩敷 Mimulus、頸部敷 Vervain", systems: "水元素+火元素軌道", flower: "Mimulus + Scleranthus" },
    ],
    summary: "筋膜手法2區段 + 穴位7個 + 花精2-3朵。覆蓋：4條奇經 + 2套四海 + 3套古典系統 + 2花精軌道 + 太陽少陰六經 + 氣海前後貫通。",
  },
  {
    id: "dorsal-vagal",
    title: "B. 背側迷走凍結型",
    subtitle: "嗜睡退縮麻木抑鬱",
    sixQi: "陰蹻過亢 = 厥陰風木不升 + 太陰濕土壅滯",
    sixChannel: "太陰 -> 厥陰合病",
    weiQiYingXue: "營分（深層能量不足）",
    steps: [
      { step: "開閘", operation: "腹股溝筋膜鬆解", points: "氣衝 ST30 區域", systems: "水穀之海上+經別離入+足三陰入口", flower: "精油預塗" },
      { step: "開閘", operation: "膈帶+帶脈橫向", points: "膻中+章門+帶脈穴", systems: "氣會+臟會+帶脈收束+太陰開門", flower: "--" },
      { step: "通幹", operation: "助左升", points: "太衝 LR3 + 蠡溝 LR5", systems: "經別入穴+原穴+絡穴+厥陰闔門", flower: "--" },
      { step: "調精", operation: "活化衝脈", points: "公孫 + 內關", systems: "衝脈+陰維+心胸胃", flower: "--" },
      { step: "調精", operation: "升陽", points: "申脈 + 後谿", systems: "督脈+陽蹻 = 啟動交感", flower: "--" },
      { step: "調神", operation: "花精外敷+內服", points: "頸部敷 Wild Rose、腹部敷 Gentian", systems: "金元素+土元素軌道", flower: "Wild Rose + Olive" },
    ],
    summary: "腹股溝+膈帶手法 + 穴位7-8個 + 花精2朵。覆蓋：厥陰太陰合病 + 衝脈陰維督脈陽蹻4奇經。",
  },
  {
    id: "earth-stagnation",
    title: "C. 中土不運型",
    subtitle: "消化差腹脹四肢無力",
    sixQi: "太陰濕盛 = 水木之虛",
    sixChannel: "太陰病",
    weiQiYingXue: "氣分",
    steps: [
      { step: "開閘", operation: "膈帶全周鬆解", points: "膻中+肋弓下+膈腳+帶脈穴", systems: "氣會+5募穴區域+帶脈+中土樞紐", flower: "精油預塗" },
      { step: "通幹", operation: "俞募前後貫通", points: "中脘 CV12(前) + 胃俞 BL21(後)", systems: "胃募+腑會+背俞+T12前後貫通", flower: "--" },
      { step: "通幹", operation: "絡穴調配表裡", points: "豐隆 ST40 + 公孫 SP4", systems: "陽明太陰表裡分流+衝脈", flower: "--" },
      { step: "調精", operation: "帶脈收束+水穀啟動", points: "臨泣+外關(帶脈+陽維) + 足三里 ST36", systems: "帶脈+陽維+水穀之海+下合穴", flower: "--" },
      { step: "調神", operation: "花精外敷+內服", points: "膈帶敷 Cerato、腹部敷 Gentian", systems: "土元素兩條軌道", flower: "Cerato + Gentian + Gorse(外在)" },
    ],
    summary: "膈帶全周手法 + 穴位7-8個 + 花精2-3朵。覆蓋：太陰病 + 帶脈陽維衝脈3奇經 + 俞募前後貫通。",
  },
  {
    id: "liver-qi",
    title: "D. 肝鬱氣滯型",
    subtitle: "脅痛胸悶情緒壓抑",
    sixQi: "厥陰風盛 = 土金之虛",
    sixChannel: "厥陰 -> 少陽樞機不利",
    weiQiYingXue: "氣分",
    steps: [
      { step: "開閘", operation: "膈帶側面+腹股溝", points: "期門 LR14 + 章門 LR13 + 環跳 GB30", systems: "肝募+脾募+經別離穴(第二合)", flower: "精油預塗" },
      { step: "通幹", operation: "疏木升左", points: "太衝 LR3 + 蠡溝 LR5", systems: "原穴+經別入穴+絡穴 = 厥陰三聯", flower: "--" },
      { step: "通幹", operation: "降膽和樞", points: "陽陵泉 GB34 + 光明 GB37", systems: "筋會+下合穴+絡穴 = 少陽三聯", flower: "--" },
      { step: "調精", operation: "衝脈活化", points: "公孫 + 內關", systems: "衝脈+陰維 = 中軸動力", flower: "--" },
      { step: "調神", operation: "花精外敷+內服", points: "腹股溝敷 Impatiens、膈帶敷 Scleranthus", systems: "木元素兩條軌道", flower: "Impatiens + Scleranthus + Aspen(外在)" },
    ],
    summary: "膈帶+腹股溝手法 + 穴位7-8個 + 花精2-3朵。覆蓋：厥陰少陽樞機 + 衝脈陰維2奇經 + 厥陰三聯+少陽三聯。",
  },
];

interface FreqStat {
  point: string;
  freq: string;
  contexts: string;
  role: string;
}

const freqStats: FreqStat[] = [
  { point: "公孫 SP4 + 內關 PC6", freq: "3/4", contexts: "交感亢進除外，其餘全用", role: "衝脈+陰維 = 深層中軸啟動" },
  { point: "膻中 CV17", freq: "3/4", contexts: "交感+凍結+中土", role: "氣會+氣海+中土樞紐" },
  { point: "太衝 LR3", freq: "3/4", contexts: "凍結+中土+肝鬱", role: "經別入+原穴+厥陰升發" },
  { point: "帶脈穴", freq: "3/4", contexts: "凍結+中土+肝鬱", role: "帶脈收束+橫向校準" },
  { point: "後谿 SI3 + 申脈 BL62", freq: "2/4", contexts: "交感+凍結", role: "督脈+陽蹻 = 交感調控" },
  { point: "足三里 ST36", freq: "2/4", contexts: "交感(最精簡)+中土", role: "水穀之海+下合穴+陽明" },
];

interface CoreThree {
  point: string;
  reason: string;
}

const coreThreePoints: CoreThree[] = [
  { point: "公孫 SP4", reason: "衝脈（氣血之海中軸）+ 脾絡（中土分流）+ 五輸穴 + 花精土元素入口" },
  { point: "內關 PC6", reason: "陰維（陰經總聯繫）+ 心包絡 + 迷走心支（HRV直接調控）+ 花精火元素入口" },
  { point: "太衝 LR3", reason: "經別入穴（厥陰進入深層的門）+ 肝原穴（元氣錨點）+ 風木升發（一氣周流左升的起動器）+ 花精木元素入口" },
];

interface ExpansionA {
  scenario: string;
  points: string[];
}

const expansionA: ExpansionA[] = [
  { scenario: "交感亢進加", points: ["後谿 SI3 + 申脈 BL62（降陽蹻）", "照海 KI6 + 列缺 LU7（升陰蹻）", "太溪 KI3 原穴（滋腎水）"] },
  { scenario: "背側凍結加", points: ["申脈 BL62 + 後谿 SI3（升陽蹻）", "公孫 SP4 + 內關 PC6（已在核心）", "足三里 ST36（水穀啟動）"] },
];

interface ExpansionB {
  channel: string;
  points: string;
  operation: string;
}

const expansionB: ExpansionB[] = [
  { channel: "太陽", points: "委中 BL40 + 大椎 GV14", operation: "開表門+通陽經總匯" },
  { channel: "陽明", points: "足三里 ST36 + 中脘 CV12", operation: "闔固門+胃募+腑會" },
  { channel: "少陽", points: "陽陵泉 GB34 + 臨泣 GB41 + 外關 SJ5", operation: "樞轉機+帶脈收束" },
  { channel: "太陰", points: "章門 LR13 + 豐隆 ST40", operation: "臟會+胃絡（化痰）" },
  { channel: "少陰", points: "太溪 KI3 + 照海 KI6", operation: "水火交濟" },
  { channel: "厥陰", points: "太衝 LR3（已在核心）+ 蠡溝 LR5", operation: "闔根門+疏木" },
];

interface ExpansionC {
  element: string;
  comFlower: string;
  outerFlower: string;
  zone: string;
}

const expansionC: ExpansionC[] = [
  { element: "風盛（木）", comFlower: "Impatiens 或 Scleranthus", outerFlower: "白楊 Aspen", zone: "腹股溝" },
  { element: "熱盛（火）", comFlower: "Vervain 或 Agrimony", outerFlower: "伯利恆之星", zone: "頸胸入口" },
  { element: "濕盛（土）", comFlower: "Cerato 或 Gentian", outerFlower: "金雀花 Gorse", zone: "膈帶+腹部" },
  { element: "燥盛（金）", comFlower: "Chicory 或 Clematis", outerFlower: "胡桃 Walnut", zone: "腋窩+頸胸" },
  { element: "寒盛（水）", comFlower: "Mimulus 或 Centaury", outerFlower: "榆樹 Elm", zone: "膕窩+腰脊" },
];

interface TimelineStep {
  phase: string;
  time: string;
  operation: string;
  tool: string;
}

const timeline: TimelineStep[] = [
  { phase: "牟尼香開場", time: "2 分鐘", operation: "點燃牟尼香，建立嗅覺場域", tool: "牟尼香" },
  { phase: "核心手法", time: "15 分鐘", operation: "頸胸入口 + 膈帶鬆解", tool: "手法" },
  { phase: "擴展手法", time: "5-10 分鐘", operation: "依病機加膕窩或腹股溝", tool: "手法" },
  { phase: "核心穴位", time: "3 分鐘", operation: "公孫+內關+太衝貼 Somaniks", tool: "橘色/藍色微針" },
  { phase: "擴展穴位", time: "3-5 分鐘", operation: "依病機加八脈交會穴對", tool: "橘色/藍色微針" },
  { phase: "調神收尾", time: "5 分鐘", operation: "MUNI 牌卡引導覺察 + 身體觀照", tool: "MUNI 花精牌卡" },
];

interface EfficiencySummary {
  level: string;
  points: string;
  coverage: string;
  scenario: string;
}

const efficiencySummary: EfficiencySummary[] = [
  { level: "極簡版", points: "3穴 + 2區段手法", coverage: "~70%", scenario: "時間有限/初次治療" },
  { level: "標準版", points: "5-7穴 + 2-3區段手法", coverage: "~85%", scenario: "常規治療" },
  { level: "完整版", points: "7-10穴 + 3-4區段手法", coverage: "~95%", scenario: "複雜病機/深層調理" },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function Stars({ count }: { count: number }) {
  return (
    <span className="text-amber-500 tracking-wider">
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Anchor Nav                                                         */
/* ------------------------------------------------------------------ */

const sections = [
  { id: "density", label: "密度排名" },
  { id: "seven-point", label: "最高效7穴" },
  { id: "pathomech", label: "病機處方" },
  { id: "universal", label: "萬用核心" },
  { id: "expansion", label: "擴展包" },
  { id: "timeline", label: "治療時間軸" },
  { id: "efficiency", label: "效率總結" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ProtocolsPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Internal badge */}
      <div className="fixed top-4 right-4 z-50 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
        內部測試版
      </div>

      {/* Sticky nav */}
      <nav className="sticky top-0 z-40 bg-[#F9F7F2]/90 backdrop-blur-sm border-b border-stone-200/50">
        <div className="mx-auto max-w-5xl px-4 py-2.5 flex items-center gap-4 overflow-x-auto">
          <Link
            href="/internal/flow-system"
            className="flex-shrink-0 text-sm text-[#4a5548]/50 hover:text-[#4a5548] transition-colors"
          >
            <svg className="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            系統首頁
          </Link>
          <span className="text-stone-300">|</span>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex-shrink-0 text-xs text-[#4a5548]/50 hover:text-[#9A7B4F] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#4a5548] tracking-tight leading-tight">
            交叉比對與最高效處方流程
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#4a5548]/60">
            穴位系統密度分析 -- 用最少操作覆蓋最多系統
          </p>
        </div>

        {/* ================================================================ */}
        {/*  Section 1: Density Ranking                                      */}
        {/* ================================================================ */}
        <section id="density" className="mb-20 scroll-mt-16">
          <SectionTitle title="穴位系統密度排名" subtitle="多系統疊加分析 -- 一個穴位同時屬於幾套系統" />

          {/* Top tier */}
          <h3 className="mt-10 mb-4 font-serif text-lg text-[#9A7B4F]">頂級穴位（5 系統疊加）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-[#4a5548]/50 border-b border-stone-200">
                  <th className="pb-2 pr-4 font-medium">穴位</th>
                  <th className="pb-2 pr-4 font-medium">區段</th>
                  <th className="pb-2 pr-4 font-medium hidden md:table-cell">系統疊加</th>
                  <th className="pb-2 pr-4 font-medium">層次</th>
                  <th className="pb-2 font-medium">密度</th>
                </tr>
              </thead>
              <tbody>
                {topAcupoints.map((a) => (
                  <tr key={a.name} className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-[#4a5548]">{a.name}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/70">{a.zone}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/60 text-xs hidden md:table-cell">{a.systems}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/70">{a.layers}</td>
                    <td className="py-3"><Stars count={a.density} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tier 1 */}
          <h3 className="mt-10 mb-4 font-serif text-lg text-[#9A7B4F]">一級穴位（4 系統疊加）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-[#4a5548]/50 border-b border-stone-200">
                  <th className="pb-2 pr-4 font-medium">穴位</th>
                  <th className="pb-2 pr-4 font-medium">區段</th>
                  <th className="pb-2 pr-4 font-medium hidden md:table-cell">系統疊加</th>
                  <th className="pb-2 pr-4 font-medium">層次</th>
                  <th className="pb-2 font-medium">密度</th>
                </tr>
              </thead>
              <tbody>
                {tier1Acupoints.map((a) => (
                  <tr key={a.name} className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-[#4a5548]">{a.name}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/70">{a.zone}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/60 text-xs hidden md:table-cell">{a.systems}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/70">{a.layers}</td>
                    <td className="py-3"><Stars count={a.density} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  Section 2: Seven-Point Protocol                                 */}
        {/* ================================================================ */}
        <section id="seven-point" className="mb-20 scroll-mt-16">
          <SectionTitle title="最高效 7 穴處方" subtitle="一穴多系統 / 一操作多層 / 一區段多效" />

          <div className="mt-10 relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#9A7B4F] via-[#006494] to-[#da7101] hidden md:block" />

            <div className="space-y-4">
              {sevenPointProtocol.map((s) => (
                <div key={s.order} className="relative flex gap-5">
                  <div className="relative z-10 flex-shrink-0 flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#9A7B4F] bg-white text-sm font-bold text-[#9A7B4F] shadow-sm">
                      {s.order}
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl border border-stone-200/50 bg-white/80 backdrop-blur-sm p-5 transition-shadow hover:shadow-md">
                    <h4 className="font-serif text-base md:text-lg text-[#4a5548] mb-2">{s.point}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-[#4a5548]/40 mb-0.5">操作</p>
                        <p className="text-sm text-[#4a5548]/70">{s.operation}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#4a5548]/40 mb-0.5">啟動系統</p>
                        <p className="text-sm text-[#4a5548]/70">{s.systems}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage summary */}
          <div className="mt-8 rounded-2xl border border-[#9A7B4F]/30 bg-[#9A7B4F]/5 p-6">
            <p className="text-sm leading-relaxed text-[#4a5548]/80">
              <strong className="text-[#9A7B4F]">7 穴覆蓋：</strong>經別六合（委中離+太衝入）+ 八脈交會穴 2 對 + 四海 3 條 + 八會 2 穴 + 交會穴（大椎）+ 下合穴（委中+足三里）+ 原穴（太衝）+ 帶脈區域（膻中）+ 督任衝陰維陽蹻 5 條奇經。
            </p>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  Section 3: Pathomechanism Protocols                             */}
        {/* ================================================================ */}
        <section id="pathomech" className="mb-20 scroll-mt-16">
          <SectionTitle title="依病機的最高效處方" subtitle="四大病機各有對應處方流程" />

          <div className="mt-10 space-y-8">
            {pathomechProtocols.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl border border-stone-200/50 bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden"
              >
                {/* Header */}
                <div className="px-6 py-5 border-b border-stone-100">
                  <h3 className="font-serif text-xl md:text-2xl text-[#4a5548]">
                    {p.title}
                    <span className="ml-3 text-base font-normal text-[#4a5548]/50">{p.subtitle}</span>
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200/50 px-3 py-1 text-xs text-[#006494]">
                      {p.sixQi}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-amber-50 border border-amber-200/50 px-3 py-1 text-xs text-amber-700">
                      {p.sixChannel}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-stone-50 border border-stone-200/50 px-3 py-1 text-xs text-[#4a5548]/60">
                      {p.weiQiYingXue}
                    </span>
                  </div>
                </div>

                {/* Steps */}
                <div className="px-6 py-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="text-left text-[#4a5548]/40 border-b border-stone-100">
                          <th className="pb-2 pr-3 font-medium w-16">步驟</th>
                          <th className="pb-2 pr-3 font-medium">操作</th>
                          <th className="pb-2 pr-3 font-medium">穴位</th>
                          <th className="pb-2 pr-3 font-medium hidden lg:table-cell">覆蓋系統</th>
                          <th className="pb-2 font-medium">花精</th>
                        </tr>
                      </thead>
                      <tbody>
                        {p.steps.map((st, i) => (
                          <tr key={i} className="border-b border-stone-50">
                            <td className="py-2.5 pr-3">
                              <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-medium ${
                                st.step === "開閘" ? "bg-stone-100 text-stone-600" :
                                st.step === "通幹" ? "bg-blue-50 text-[#006494]" :
                                st.step === "調精" ? "bg-amber-50 text-amber-700" :
                                "bg-purple-50 text-purple-700"
                              }`}>
                                {st.step}
                              </span>
                            </td>
                            <td className="py-2.5 pr-3 text-[#4a5548]/70">{st.operation}</td>
                            <td className="py-2.5 pr-3 font-medium text-[#4a5548]">{st.points}</td>
                            <td className="py-2.5 pr-3 text-[#4a5548]/60 text-xs hidden lg:table-cell">{st.systems}</td>
                            <td className="py-2.5 text-[#4a5548]/60">{st.flower}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-xs text-[#4a5548]/50 leading-relaxed">{p.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================ */}
        {/*  Section 4: Universal Core                                       */}
        {/* ================================================================ */}
        <section id="universal" className="mb-20 scroll-mt-16">
          <SectionTitle title="萬用核心三穴組" subtitle="穴位使用頻率統計 -- 找出整個系統的 MVP" />

          {/* Frequency stats */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-[#4a5548]/50 border-b border-stone-200">
                  <th className="pb-2 pr-4 font-medium">穴位</th>
                  <th className="pb-2 pr-4 font-medium">頻率</th>
                  <th className="pb-2 pr-4 font-medium hidden sm:table-cell">出現病機</th>
                  <th className="pb-2 font-medium">角色</th>
                </tr>
              </thead>
              <tbody>
                {freqStats.map((f) => (
                  <tr key={f.point} className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-[#4a5548]">{f.point}</td>
                    <td className="py-3 pr-4">
                      <span className="inline-flex items-center rounded-full bg-[#9A7B4F]/10 px-2.5 py-0.5 text-xs font-bold text-[#9A7B4F]">
                        {f.freq}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-[#4a5548]/60 hidden sm:table-cell">{f.contexts}</td>
                    <td className="py-3 text-[#4a5548]/70 text-xs">{f.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Core 3 cards */}
          <h3 className="mt-12 mb-6 font-serif text-lg text-[#9A7B4F]">如果只能用 3 個穴位</h3>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            {coreThreePoints.map((c) => (
              <div
                key={c.point}
                className="rounded-2xl border border-[#9A7B4F]/30 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <h4 className="font-serif text-xl text-[#9A7B4F] mb-3">{c.point}</h4>
                <p className="text-sm text-[#4a5548]/70 leading-relaxed">{c.reason}</p>
              </div>
            ))}
          </div>

          {/* Summary callout */}
          <div className="mt-8 rounded-2xl border border-[#9A7B4F]/30 bg-[#9A7B4F]/5 p-6">
            <p className="text-sm leading-relaxed text-[#4a5548]/80">
              <strong className="text-[#9A7B4F]">核心發現：</strong>公孫+內關啟動衝脈和陰維（深層中軸+陰經網絡），太衝啟動經別和左升 -- <strong>三穴覆蓋了升降動力的起點（太衝升）、中軸管道（公孫衝脈）、和陰面網絡（內關陰維）</strong>。加上頸胸入口和膈帶兩個區段的手法，就是 5 個操作覆蓋 70% 以上的系統節點。
            </p>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  Section 5: Expansion Packages                                   */}
        {/* ================================================================ */}
        <section id="expansion" className="mb-20 scroll-mt-16">
          <SectionTitle title="分層處方包" subtitle="在萬用核心之上，按需擴展" />

          {/* Package A */}
          <h3 className="mt-10 mb-4 font-serif text-lg text-[#4a5548]">
            擴展包 A：交感/副交感調控
            <span className="ml-2 text-sm font-normal text-[#4a5548]/40">（精層）</span>
          </h3>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {expansionA.map((e) => (
              <div key={e.scenario} className="rounded-2xl border border-stone-200/50 bg-white/80 backdrop-blur-sm p-5 shadow-sm">
                <h4 className="text-sm font-medium text-[#4a5548] mb-3">{e.scenario}</h4>
                <ul className="space-y-2">
                  {e.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#4a5548]/70">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#9A7B4F] flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Package B */}
          <h3 className="mt-10 mb-4 font-serif text-lg text-[#4a5548]">
            擴展包 B：六經對治
            <span className="ml-2 text-sm font-normal text-[#4a5548]/40">（氣層）</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-[#4a5548]/50 border-b border-stone-200">
                  <th className="pb-2 pr-4 font-medium">六經</th>
                  <th className="pb-2 pr-4 font-medium">加入穴位</th>
                  <th className="pb-2 font-medium">操作</th>
                </tr>
              </thead>
              <tbody>
                {expansionB.map((e) => (
                  <tr key={e.channel} className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-[#4a5548]">{e.channel}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/70">{e.points}</td>
                    <td className="py-3 text-[#4a5548]/70">{e.operation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Package C */}
          <h3 className="mt-10 mb-4 font-serif text-lg text-[#4a5548]">
            擴展包 C：花精配合
            <span className="ml-2 text-sm font-normal text-[#4a5548]/40">（神層）</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-[#4a5548]/50 border-b border-stone-200">
                  <th className="pb-2 pr-4 font-medium">五行偏見</th>
                  <th className="pb-2 pr-4 font-medium">溝通花精</th>
                  <th className="pb-2 pr-4 font-medium">外在花精</th>
                  <th className="pb-2 font-medium">外敷區段</th>
                </tr>
              </thead>
              <tbody>
                {expansionC.map((e) => (
                  <tr key={e.element} className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-[#4a5548]">{e.element}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/70">{e.comFlower}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/70">{e.outerFlower}</td>
                    <td className="py-3 text-[#4a5548]/70">{e.zone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  Section 6: Treatment Timeline                                   */}
        {/* ================================================================ */}
        <section id="timeline" className="mb-20 scroll-mt-16">
          <SectionTitle title="完整治療單元" subtitle="30-40 分鐘完成全套 MUNI 工具操作" />

          <div className="mt-10 relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-amber-300 via-[#006494] to-purple-400 hidden md:block" />

            <div className="space-y-4">
              {timeline.map((t, i) => (
                <div key={i} className="relative flex gap-5">
                  <div className="relative z-10 flex-shrink-0 flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-stone-300 bg-white shadow-sm">
                      <span className="text-xs font-bold text-[#4a5548]">{i + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1 rounded-xl border border-stone-200/60 bg-white p-5 transition-shadow hover:shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-base text-[#4a5548]">{t.phase}</h4>
                      <span className="rounded-full bg-[#9A7B4F]/10 px-3 py-0.5 text-xs font-medium text-[#9A7B4F]">
                        {t.time}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <p className="text-xs text-[#4a5548]/40 mb-0.5">操作</p>
                        <p className="text-sm text-[#4a5548]/70">{t.operation}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#4a5548]/40 mb-0.5">工具</p>
                        <p className="text-sm text-[#4a5548]/70">{t.tool}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="mt-6 rounded-xl border border-stone-200/60 bg-white p-5 text-center">
            <p className="text-lg font-serif text-[#4a5548]">
              合計 <strong className="text-[#9A7B4F]">30-40 分鐘</strong>
            </p>
            <p className="mt-1 text-sm text-[#4a5548]/60">2-3 區段手法 + 5-7 穴位 + 牟尼香 + 牌卡</p>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  Section 7: Efficiency Summary                                   */}
        {/* ================================================================ */}
        <section id="efficiency" className="mb-20 scroll-mt-16">
          <SectionTitle title="處方效率總結" />

          <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-3">
            {efficiencySummary.map((e) => (
              <div
                key={e.level}
                className="rounded-2xl border border-stone-200/50 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all text-center"
              >
                <p className="text-xs text-[#4a5548]/40 mb-1">覆蓋率</p>
                <p className="text-3xl font-bold text-[#9A7B4F] mb-2">{e.coverage}</p>
                <h4 className="font-serif text-lg text-[#4a5548] mb-2">{e.level}</h4>
                <p className="text-sm text-[#4a5548]/70 mb-1">{e.points}</p>
                <p className="text-xs text-[#4a5548]/50">{e.scenario}</p>
              </div>
            ))}
          </div>

          {/* Final callout */}
          <div className="mt-8 rounded-2xl border border-[#9A7B4F]/30 bg-[#9A7B4F]/5 p-6">
            <p className="text-sm leading-relaxed text-[#4a5548]/80">
              <strong className="text-[#9A7B4F]">核心發現：</strong>公孫+內關+太衝三穴組是整個 934 行理論架構中 CP 值最高的組合 -- 3 個穴位觸及氣、精、神三層，啟動衝脈、陰維、經別三個深層系統，覆蓋土、火、木三行。加上頸胸入口和膈帶兩個區段的手法，就是 5 個操作覆蓋 70% 以上的系統節點。
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <RelatedLinks
            title="延伸閱讀"
            links={[
              { label: "回到系統首頁", href: "/internal/flow-system", description: "花精 x 一氣周流 x 奇經八脈整合系統" },
              { label: "六區臨床操作框架", href: "/internal/flow-system/six-zones", description: "從遠端到頭面的治療路徑" },
              { label: "八穴總覽", href: "/internal/flow-system/acupoints", description: "奇經八脈交會八穴完整列表" },
              { label: "Farrell 五層系統", href: "/internal/flow-system/farrell", description: "經絡五層自我保存機制" },
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

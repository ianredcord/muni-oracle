import type { Metadata } from "next";
import Link from "next/link";
import {
  SectionTitle,
  RelatedLinks,
} from "@/components/flow-system";

export const metadata: Metadata = {
  title: "六區臨床操作框架 | MAX 整合系統",
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Zone {
  number: number;
  name: string;
  location: string;
  color: string;
  numberBg: string;
  borderColor: string;
  logic: string;
  whyOrder: string;
  systems: { system: string; content: string; tool: string }[];
}

const zones: Zone[] = [
  {
    number: 1,
    name: "遠端取穴",
    location: "腕踝以下至指趾端（八區段 8b）",
    color: "text-emerald-700",
    numberBg: "bg-emerald-100 text-emerald-700",
    borderColor: "border-l-emerald-400",
    logic: "遠端是信號發射站。穴位密度最高但體積最小 -- 一個 Somaniks 微針就能覆蓋多套系統。不需要手法，只需要精確定位和橘藍選擇。",
    whyOrder: "在打開關節和軀幹之前，先在遠端「預設頻率」-- 讓八脈交會穴先啟動奇經系統，原穴先調動元氣，然後當你手法打開通道時，這些信號已經在等待通行了。",
    systems: [
      { system: "八脈交會穴 x4 對", content: "公孫/內關、後谿/申脈、臨泣/外關、列缺/照海", tool: "Somaniks 橘/藍" },
      { system: "原穴 x12", content: "太衝、太溪、太淵、合谷、神門...", tool: "Somaniks 橘/藍" },
      { system: "根穴（井穴）x12", content: "經氣的起始端", tool: "按壓/點刺" },
      { system: "五輸穴序列", content: "井→滎→俞(=原)→經→合", tool: "能量梯度線" },
      { system: "花精軌道入口", content: "12 條花精軌道的溝通花精對應穴位", tool: "牟尼香（嗅覺場）" },
    ],
  },
  {
    number: 2,
    name: "關節緻密位置",
    location: "腕踝→肘膝→肩髖→頸椎胸椎腰椎（所有關節）",
    color: "text-blue-700",
    numberBg: "bg-blue-100 text-blue-700",
    borderColor: "border-l-blue-400",
    logic: "關節是閘門。HA 透明質酸在關節處最容易黏滯固化。CF 點固化 = 閘門關閉 = 遠端發射的信號過不去。手法目標：在 CF 點用 Ruffini 偏好刺激（緩慢深壓+切向力）→ 降低 HA 黏度 → 恢復筋膜滑動。",
    whyOrder: "第一區發射信號，第二區開閘讓信號通過。信號在前、閘門在後 -- 所以先貼 Somaniks（第一區），再做手法（第二區）。",
    systems: [
      { system: "Stecco CF 點", content: "每個關節 = 不同筋膜鏈的交匯處（融合中心）", tool: "手法（深壓+切向力）" },
      { system: "八區段邊界", content: "膕窩、腹股溝、腋窩、頸胸入口 = CF 最密集的四個位置", tool: "手法" },
      { system: "下合穴（6穴）", content: "膝關節附近 -- 足三里、陽陵泉、委中等", tool: "Somaniks" },
      { system: "郄穴（16穴）", content: "肘膝以下的肢體走廊 -- 經氣深聚處", tool: "Somaniks（急症用）" },
      { system: "經筋結點", content: "「結於踝、結於膝、結於髀、結於缺盆」-- 全在關節", tool: "手法（以痛為腧）" },
    ],
  },
  {
    number: 3,
    name: "經別深淺進入區域",
    location: "膕窩、腹股溝、腋窩 -- 經別從體表「離」開正經並「入」臟腑的門戶",
    color: "text-violet-700",
    numberBg: "bg-violet-100 text-violet-700",
    borderColor: "border-l-violet-400",
    logic: "第二區打開了關節的閘門，第三區是從體表進入臟腑深層的門戶。不是在這三個位置「鬆解」（它們本來就應該是柔軟凹陷的），而是確認它們沒有被周圍的緊張筋膜壓迫封閉。",
    whyOrder: "深層受苦模式從這些「入口」進入奇經儲存。手法打開這些入口時，患者可能會出現情緒反應（哭泣、顫抖、深呼吸）-- 這時候牟尼香的 40 種花精頻率正在「接住」這些釋放的情緒。",
    systems: [
      { system: "經別「離」穴", content: "委中（第一合離）、環跳（第二合離）、髀關（第三合離）、臑俞/天髎/肩髃", tool: "手法（打開深淺交換門戶）" },
      { system: "經別「入」穴", content: "陰谷、太衝、箕門、極泉、天池、中府", tool: "手法/Somaniks" },
      { system: "深淺交換通道", content: "體表→臟腑→體表的三維弧線路徑", tool: "手法方向引導" },
      { system: "Farrell 奇經情緒", content: "深層受苦模式的「入口」-- 情緒從這裡進入奇經儲存", tool: "牟尼香+MUNI 牌卡" },
    ],
  },
  {
    number: 4,
    name: "軀幹三節斷（三焦）",
    location: "以膈帶和骨盆為分界，軀幹分為上中下三焦",
    color: "text-amber-700",
    numberBg: "bg-amber-100 text-amber-700",
    borderColor: "border-l-amber-400",
    logic: "前三區打開了從肢端到軀幹的通道，第四區是臟腑所在地。這裡的操作不再是「開門」而是「進房間」-- 直接在臟腑的體表投影上工作。",
    whyOrder: "膈帶（上中焦分界）-- 最關鍵的一刀。膈肌是升降轉換的物理結構、迷走神經的分界、呼吸的動力源、中土斡旋的實體。膈帶不鬆 = 上下不通 = 三焦氣化全停。",
    systems: [
      { system: "募穴 x11", content: "臟腑在前面的投影 -- 中府、巨闕、期門、章門...", tool: "Somaniks+手法" },
      { system: "俞穴 x14", content: "臟腑在後面的投影 -- 肺俞、心俞、肝俞...", tool: "Somaniks" },
      { system: "帶脈環繞", content: "橫向收束 -- 上下三焦的「腰帶」", tool: "帶脈穴+臨泣/外關" },
      { system: "一氣周流樞紐", content: "中焦 = 中土斡旋的物理位置，膈肌上下運動驅動升降", tool: "呼吸引導+膈帶手法" },
      { system: "衝脈中軸", content: "衝脈「起於氣街，循腹上行」= 三焦的中軸管道", tool: "公孫 SP4 已在第一區啟動" },
    ],
  },
  {
    number: 5,
    name: "迷走神經",
    location: "從腦幹→頸部→胸腔→腹腔→骨盆 -- 貫穿全部四區的軸線",
    color: "text-rose-700",
    numberBg: "bg-rose-100 text-rose-700",
    borderColor: "border-l-rose-400",
    logic: "迷走神經是形→氣的物理橋樑。前四區的所有手法操作，最終都是在對迷走神經說話。第五區不是獨立的操作步驟，而是確認前四區的操作已經產生了自律神經效應。",
    whyOrder: "評估指標：呼吸變深變慢（膈肌迷走恢復）、腹部咕嚕聲（腸蠕動恢復）、手腳變暖（交感退縮）、心率變慢（HRV 改善）、面部表情放鬆（腹側迷走重啟）。",
    systems: [
      { system: "腦幹核團", content: "迷走總指揮部 -- 頭面（第六區）", tool: "頭面合穴" },
      { system: "頸段", content: "心率+呼吸+吞嚥+發聲", tool: "頸部筋膜鬆解+大椎" },
      { system: "胸段", content: "心臟迷走張力 = HRV", tool: "內關 PC6（已在第一區）" },
      { system: "腹段", content: "消化+吸收+蠕動", tool: "膈帶手法+公孫 SP4" },
      { system: "骶段", content: "排泄+生殖", tool: "骶部+照海 KI6" },
    ],
  },
  {
    number: 6,
    name: "頭面部",
    location: "頸椎以上 -- 頭頂、面部、五官、耳後",
    color: "text-sky-700",
    numberBg: "bg-sky-100 text-sky-700",
    borderColor: "border-l-sky-400",
    logic: "頭面是經別的終點站 -- 六合全部在頭面「出」和「合」。前五區做的所有工作，最終都匯聚到這裡。頭面部不需要太多操作 -- 它是觀察站和驗證站。",
    whyOrder: "如果前五區做對了，你會在頭面部看到變化：面色從灰暗變紅潤、目光從渙散變清亮、表情從僵硬變柔和。",
    systems: [
      { system: "經別「出」「合」穴", content: "廉泉、翳風、人迎、顴髎→天柱、瞳子髎、承泣、睛明", tool: "Somaniks/輕觸" },
      { system: "四海上俞", content: "百會（髓海）、大椎（氣海）、大杼（血海）", tool: "Somaniks" },
      { system: "交會穴", content: "百會（諸陽之會）、大椎（七陽經總匯）", tool: "Somaniks" },
      { system: "七竅", content: "目=肝、耳=腎、鼻=肺、口=脾、舌=心", tool: "觀察（望診）" },
    ],
  },
];

interface TimeAllocation {
  zone: string;
  operation: string;
  tool: string;
  time: string;
  pct: string;
}

const timeAllocations: TimeAllocation[] = [
  { zone: "① 遠端", operation: "貼萬用三穴+按需加一對八脈交會穴", tool: "Somaniks", time: "3 min", pct: "10%" },
  { zone: "② 關節", operation: "選最緊的 2-3 個關節做 CF 點手法", tool: "手法", time: "10 min", pct: "30%" },
  { zone: "③ 經別入口", operation: "確認膕窩/腹股溝/腋窩通暢", tool: "手法", time: "5 min", pct: "15%" },
  { zone: "④ 軀幹三焦", operation: "膈帶環形鬆解+按需加俞募", tool: "手法+Somaniks", time: "8 min", pct: "25%" },
  { zone: "⑤ 迷走確認", operation: "觀察自律神經反應+按需介入", tool: "觀察+呼吸引導", time: "3 min", pct: "10%" },
  { zone: "⑥ 頭面驗證", operation: "觀察面色目神+按需微調", tool: "觀察+Somaniks", time: "3 min", pct: "10%" },
];

interface ZoneMapping {
  sixZone: string;
  eightSegment: string;
  role: string;
}

const zoneMappings: ZoneMapping[] = [
  { sixZone: "① 遠端", eightSegment: "8b 腕踝指趾", role: "信號發射站" },
  { sixZone: "② 關節", eightSegment: "8a 肘膝+膕窩+腹股溝+腋窩+頸胸入口的骨性邊界", role: "閘門（CF 點）" },
  { sixZone: "③ 經別入口", eightSegment: "膕窩+腹股溝+腋窩的深層筋膜凹陷", role: "深淺門戶" },
  { sixZone: "④ 三焦", eightSegment: "膈帶+腹部+腰脊（軀幹段）", role: "臟腑所在地" },
  { sixZone: "⑤ 迷走", eightSegment: "貫穿全部（頸胸入口→膈帶→腹部→腹股溝）", role: "自律神經軸線" },
  { sixZone: "⑥ 頭面", eightSegment: "頭面", role: "匯聚終點+驗證站" },
];

interface FiveStepMapping {
  fiveStep: string;
  sixZone: string;
  diff: string;
}

const fiveStepMappings: FiveStepMapping[] = [
  { fiveStep: "一、評估", sixZone: "①遠端觸壓反應 + ②關節觸診 + ⑥頭面望診", diff: "評估分散在三個區" },
  { fiveStep: "二、開閘（形）", sixZone: "②關節 CF 手法 + ③經別入口確認", diff: "更精確 -- 閘門在關節，門戶在經別入口" },
  { fiveStep: "三、通幹（氣）", sixZone: "④三焦操作 + 升降方向建立", diff: "明確三焦作為操作主場" },
  { fiveStep: "四、調精", sixZone: "①遠端 Somaniks（已預貼）+ ⑤迷走確認", diff: "遠端提前到第一步，迷走移到後面驗證" },
  { fiveStep: "五、調神", sixZone: "牟尼香（全程）+ MUNI 牌卡（首尾）", diff: "不變" },
];

interface HeadFaceFix {
  symptom: string;
  point: string;
  reason: string;
}

const headFaceFixes: HeadFaceFix[] = [
  { symptom: "目澀目痛", point: "睛明 BL1", reason: "太陽少陰的深層匯合不通" },
  { symptom: "頭痛頭脹", point: "百會 GV20", reason: "諸陽之會+髓海上俞" },
  { symptom: "耳鳴耳聾", point: "翳風 SJ17", reason: "少陽樞機不利" },
  { symptom: "咽喉不利", point: "廉泉 CV23", reason: "少陰腎氣不能上達" },
  { symptom: "面部僵硬", point: "頰車 ST6 + 地倉 ST4", reason: "陽明經筋不舒" },
];

/* ------------------------------------------------------------------ */
/*  Anchor Nav                                                         */
/* ------------------------------------------------------------------ */

const sections = [
  { id: "overview", label: "總覽" },
  { id: "zones", label: "六區詳解" },
  { id: "time", label: "時間分配" },
  { id: "mapping", label: "六區 x 八區段" },
  { id: "five-step", label: "五步對照" },
  { id: "head-face", label: "頭面微調" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SixZonesPage() {
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
            六區臨床操作框架
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#4a5548]/60">
            從遠端到頭面的治療路徑 -- 手在身體上走的路線
          </p>
        </div>

        {/* ================================================================ */}
        {/*  Overview / Flow Diagram                                         */}
        {/* ================================================================ */}
        <section id="overview" className="mb-20 scroll-mt-16">
          <SectionTitle title="六區的邏輯" subtitle="操作方向：由遠及近、由淺入深" />

          {/* Flow diagram */}
          <div className="mt-10 flex flex-col items-center gap-3">
            {[
              { num: "①", label: "遠端取穴", desc: "八脈交會穴+原穴+根穴，信號的發射端", bg: "bg-emerald-50 border-emerald-200" },
              { num: "②", label: "關節緻密位置", desc: "CF 融合中心，筋膜鏈交匯，力學節點", bg: "bg-blue-50 border-blue-200" },
              { num: "③", label: "經別深淺進入", desc: "離入出合的「離」和「入」，深淺交換門戶", bg: "bg-violet-50 border-violet-200" },
              { num: "④", label: "軀幹三節斷", desc: "上中下三焦 = 膈帶+腹部+骨盆，臟腑所在", bg: "bg-amber-50 border-amber-200" },
              { num: "⑤", label: "迷走神經", desc: "形→氣的橋接中樞，自律神經主幹道", bg: "bg-rose-50 border-rose-200" },
              { num: "⑥", label: "頭面部", desc: "經別「出」「合」的終點，諸陽之會", bg: "bg-sky-50 border-sky-200" },
            ].map((item, i) => (
              <div key={item.num} className="w-full max-w-lg">
                <div className={`rounded-xl border ${item.bg} p-4 text-center`}>
                  <span className="text-lg font-bold text-[#4a5548]">{item.num} {item.label}</span>
                  <p className="mt-1 text-xs text-[#4a5548]/60">{item.desc}</p>
                </div>
                {i < 5 && (
                  <div className="flex justify-center py-1">
                    <svg className="h-5 w-5 text-[#9A7B4F]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200/50 bg-white/80 backdrop-blur-sm p-5 shadow-sm">
              <h4 className="font-serif text-base text-[#4a5548] mb-2">操作方向 ①→⑥</h4>
              <p className="text-sm text-[#4a5548]/70 leading-relaxed">
                由遠及近、由淺入深。先在遠端發射信號（Somaniks），再逐步打開沿途的關節閘門和經別通道，穿過三焦軀幹段，經迷走神經橋接至自律神經，最終抵達頭面的「合穴」終點。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200/50 bg-white/80 backdrop-blur-sm p-5 shadow-sm">
              <h4 className="font-serif text-base text-[#4a5548] mb-2">反向驗證 ⑥→①</h4>
              <p className="text-sm text-[#4a5548]/70 leading-relaxed">
                經別的正常氣血循行路徑 -- 頭面（合）→ 頸部（出）→ 臟腑（入）→ 肢端（離）。治療路徑和氣血回歸路徑恰好相反 -- 治療是逆流而上，把卡住的地方一個一個打開。
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  Six Zones Detail                                                */}
        {/* ================================================================ */}
        <section id="zones" className="mb-20 scroll-mt-16">
          <SectionTitle title="六區詳解" subtitle="每一區的系統內容、臨床邏輯與操作重點" />

          <div className="mt-10 space-y-6">
            {zones.map((z) => (
              <div
                key={z.number}
                className={`rounded-2xl border border-stone-200/60 bg-white p-6 md:p-8 border-l-4 ${z.borderColor} transition-shadow hover:shadow-md`}
              >
                {/* Zone header */}
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold ${z.numberBg}`}>
                    {z.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl md:text-2xl text-[#4a5548]">
                      第{z.number}區：{z.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#4a5548]/50">{z.location}</p>
                  </div>
                </div>

                {/* Systems table */}
                <div className="overflow-x-auto mb-5">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="text-left text-[#4a5548]/40 border-b border-stone-100">
                        <th className="pb-2 pr-3 font-medium">系統</th>
                        <th className="pb-2 pr-3 font-medium">具體內容</th>
                        <th className="pb-2 font-medium">操作工具</th>
                      </tr>
                    </thead>
                    <tbody>
                      {z.systems.map((s, i) => (
                        <tr key={i} className="border-b border-stone-50">
                          <td className="py-2 pr-3 font-medium text-[#4a5548] whitespace-nowrap">{s.system}</td>
                          <td className="py-2 pr-3 text-[#4a5548]/70">{s.content}</td>
                          <td className="py-2 text-[#4a5548]/60 whitespace-nowrap">{s.tool}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Logic & Why */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-[#F9F7F2] p-4">
                    <p className="text-xs font-medium text-[#4a5548]/50 mb-2">臨床邏輯</p>
                    <p className="text-sm text-[#4a5548]/70 leading-relaxed">{z.logic}</p>
                  </div>
                  <div className="rounded-xl bg-[#F9F7F2] p-4">
                    <p className="text-xs font-medium text-[#4a5548]/50 mb-2">為什麼這個順序</p>
                    <p className="text-sm text-[#4a5548]/70 leading-relaxed">{z.whyOrder}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================ */}
        {/*  Time Allocation                                                 */}
        {/* ================================================================ */}
        <section id="time" className="mb-20 scroll-mt-16">
          <SectionTitle title="操作時間分配" subtitle="全程 32 分鐘 + 牟尼香從頭燒到尾" />

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-[#4a5548]/50 border-b border-stone-200">
                  <th className="pb-2 pr-4 font-medium">區</th>
                  <th className="pb-2 pr-4 font-medium">操作</th>
                  <th className="pb-2 pr-4 font-medium">工具</th>
                  <th className="pb-2 pr-4 font-medium">時間</th>
                  <th className="pb-2 font-medium">佔比</th>
                </tr>
              </thead>
              <tbody>
                {timeAllocations.map((t) => (
                  <tr key={t.zone} className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-[#4a5548] whitespace-nowrap">{t.zone}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/70">{t.operation}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/60 whitespace-nowrap">{t.tool}</td>
                    <td className="py-3 pr-4 whitespace-nowrap">
                      <span className="inline-flex items-center rounded-full bg-[#9A7B4F]/10 px-2.5 py-0.5 text-xs font-bold text-[#9A7B4F]">
                        {t.time}
                      </span>
                    </td>
                    <td className="py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="h-2 rounded-full bg-[#9A7B4F]/20 w-20">
                          <div
                            className="h-2 rounded-full bg-[#9A7B4F]"
                            style={{ width: t.pct }}
                          />
                        </div>
                        <span className="text-xs text-[#4a5548]/50">{t.pct}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl border border-stone-200/60 bg-white p-5 text-center">
            <p className="text-lg font-serif text-[#4a5548]">
              合計 <strong className="text-[#9A7B4F]">32 分鐘</strong>
            </p>
            <p className="mt-2 text-sm text-[#4a5548]/60">
              牟尼香：全程燃燒（從 ① 開始到 ⑥ 結束）&nbsp;&nbsp;|&nbsp;&nbsp;MUNI 牌卡：① 之前抽牌 + ⑥ 之後覺察引導
            </p>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  Six-Zone to Eight-Segment Mapping                               */}
        {/* ================================================================ */}
        <section id="mapping" className="mb-20 scroll-mt-16">
          <SectionTitle title="六區 x 八區段映射" subtitle="八區段是空間地圖（在哪裡），六區是操作序列（先做什麼後做什麼）" />

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-[#4a5548]/50 border-b border-stone-200">
                  <th className="pb-2 pr-4 font-medium">六區</th>
                  <th className="pb-2 pr-4 font-medium">對應的八區段</th>
                  <th className="pb-2 font-medium">六區的角色</th>
                </tr>
              </thead>
              <tbody>
                {zoneMappings.map((m) => (
                  <tr key={m.sixZone} className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-[#4a5548] whitespace-nowrap">{m.sixZone}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/70">{m.eightSegment}</td>
                    <td className="py-3 text-[#4a5548]/70">{m.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-[#9A7B4F]/30 bg-[#9A7B4F]/5 p-6">
            <p className="text-sm leading-relaxed text-[#4a5548]/80">
              <strong className="text-[#9A7B4F]">關鍵差異：</strong>八區段是<strong>空間地圖</strong>（身體分成八塊），六區是<strong>操作序列</strong>（手的移動路線）。八區段告訴你「在哪裡」，六區告訴你「先做什麼後做什麼」。
            </p>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  Five-Step Protocol Comparison                                   */}
        {/* ================================================================ */}
        <section id="five-step" className="mb-20 scroll-mt-16">
          <SectionTitle title="五步臨床協議 → 六區翻譯" subtitle="五步按層次分（形→氣→精→神），六區按操作序列分（遠→近→深→驗證）" />

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-[#4a5548]/50 border-b border-stone-200">
                  <th className="pb-2 pr-4 font-medium">五步</th>
                  <th className="pb-2 pr-4 font-medium">六區對應</th>
                  <th className="pb-2 font-medium">差異</th>
                </tr>
              </thead>
              <tbody>
                {fiveStepMappings.map((m) => (
                  <tr key={m.fiveStep} className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-[#4a5548] whitespace-nowrap">{m.fiveStep}</td>
                    <td className="py-3 pr-4 text-[#4a5548]/70">{m.sixZone}</td>
                    <td className="py-3 text-[#4a5548]/60">{m.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-stone-200/50 bg-white/80 backdrop-blur-sm p-6 shadow-sm">
            <h4 className="font-serif text-base text-[#4a5548] mb-2">核心升級</h4>
            <p className="text-sm text-[#4a5548]/70 leading-relaxed">
              五步協議是按<strong>層次</strong>分的（形→氣→精→神），六區是按<strong>操作序列</strong>分的（遠→近→深→驗證）。六區更接近手法治療師的實際思維 -- 手在哪裡 → 下一步去哪裡 → 最後確認什麼。
            </p>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  Head-Face Fine-tuning                                           */}
        {/* ================================================================ */}
        <section id="head-face" className="mb-20 scroll-mt-16">
          <SectionTitle title="頭面部最後微調" subtitle="前五區都做了但頭面仍不通時的加貼穴位" />

          <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {headFaceFixes.map((h) => (
              <div
                key={h.symptom}
                className="rounded-2xl border border-stone-200/50 bg-white/80 backdrop-blur-sm p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <p className="text-xs text-[#4a5548]/40 mb-1">症狀</p>
                <h4 className="font-serif text-lg text-[#4a5548] mb-3">{h.symptom}</h4>
                <div className="rounded-lg bg-[#F9F7F2] px-3 py-2 mb-2">
                  <p className="text-sm font-medium text-[#9A7B4F]">{h.point}</p>
                </div>
                <p className="text-xs text-[#4a5548]/60">{h.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* One-liner */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#9A7B4F]/30 bg-[#9A7B4F]/5 p-6 text-center">
            <p className="text-base md:text-lg leading-relaxed text-[#4a5548] font-serif">
              遠端發信號，關節開閘門，經別入口打開深淺通道，三焦到達臟腑，迷走確認效果，頭面驗證結果 -- <strong className="text-[#9A7B4F]">六區一條路，從指尖走到頭頂，從皮膚走到臟腑。</strong>
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <RelatedLinks
            title="延伸閱讀"
            links={[
              { label: "回到系統首頁", href: "/internal/flow-system", description: "花精 x 一氣周流 x 奇經八脈整合系統" },
              { label: "交叉比對與最高效處方", href: "/internal/flow-system/protocols", description: "穴位系統密度分析與處方流程" },
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

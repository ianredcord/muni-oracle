import type { Metadata } from "next";
import Link from "next/link";
import {
  SectionTitle,
  BlueOrangeBadge,
  RelatedLinks,
} from "@/components/flow-system";

export const metadata: Metadata = {
  title: "核心發現深度發展 | 整合系統",
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface SystemLayer {
  system: string;
  role: string;
  importance: string;
}

interface AcupointData {
  name: string;
  code: string;
  title: string;
  somaniks: "drain" | "tonify";
  somaniksLabel: string;
  layers: SystemLayer[];
  classical: string;
  huangYuanyu?: string;
  special?: string;
}

const acupoints: AcupointData[] = [
  {
    name: "公孫",
    code: "SP4",
    title: "中軸啟動器",
    somaniks: "tonify",
    somaniksLabel: "橘色（補）",
    layers: [
      { system: "八脈交會穴", role: "通衝脈", importance: "衝脈為「血海」，氣血之海的中軸管道" },
      { system: "八脈交會穴", role: "合陰維", importance: "陰維「維繫一身之陰」——所有陰經的橫向聯繫" },
      { system: "絡穴", role: "脾之大絡", importance: "脾為中土，絡穴聯通脾胃表裡——中土斡旋的橋樑" },
      { system: "五輸穴", role: "--", importance: "位於肢端五輸穴序列中" },
      { system: "花精入口", role: "土元素", importance: "水蕨（Cerato）軌道起點——不確定/信任議題" },
      { system: "一氣周流", role: "中央偏左", importance: "脾土升清——左升動力的源頭" },
    ],
    classical:
      "「公孫衝脈胃心胸，內關陰維下總同」——主治範圍涵蓋胃、心、胸三個臟腑區域，橫跨八區段中的膈帶＋腹部＋胸腔。",
    huangYuanyu:
      "衝脈「起於氣街」，循腹上行，是一氣周流的中軸通道。脾土左升、胃土右降的旋轉軸心就在衝脈上。啟動公孫＝啟動衝脈＝啟動整個升降系統的中央管道。",
  },
  {
    name: "內關",
    code: "PC6",
    title: "陰面總聯繫＋迷走直通車",
    somaniks: "drain",
    somaniksLabel: "藍色（洩）",
    layers: [
      { system: "八脈交會穴", role: "通陰維", importance: "陰維脈「維繫一身之陰」——足三陰＋任脈的橫向網絡" },
      { system: "絡穴", role: "心包之絡", importance: "心包「代心受邪」，絡穴聯通心包與三焦表裡" },
      { system: "五輸穴", role: "--", importance: "位於五輸穴序列中" },
      { system: "花精入口", role: "火元素", importance: "水菫（Water Violet）軌道起點——孤立/隔離議題" },
      { system: "迷走神經", role: "心支直通", importance: "正中神經走行處，刺激可直接調控心臟迷走張力→HRV 即時改變" },
      { system: "一氣周流", role: "南方火位", importance: "心包為「火中之火」，開胸膈、護心主" },
    ],
    classical:
      "「公孫二穴，父，通衝脈；內關二穴，母，通陰維脈。合於心、胸、胃。」父母配對——衝脈中軸（縱向）＋陰維網絡（橫向）＝在陰面建立縱橫交叉的立體網絡。",
    special:
      "內關是整個系統中唯一能直接調控心臟迷走張力的穴位。Somaniks 微針的機械刺激持續作用於正中神經分佈區，等於 24 小時持續的輕微迷走刺激——把古典的「開胸膈」翻譯成現代的「提升 HRV」。",
  },
  {
    name: "太衝",
    code: "LR3",
    title: "深層門戶＋升發起動器",
    somaniks: "tonify",
    somaniksLabel: "橘色（補）/ 藍色（洩）",
    layers: [
      { system: "經別入穴", role: "第二合入穴", importance: "從肢端進入深層臟腑的門戶——厥陰經別的進入點" },
      { system: "原穴", role: "肝之原", importance: "元氣在體表的錨點，先天之氣在厥陰的出入口" },
      { system: "五輸穴", role: "俞穴（同原穴）", importance: "陰經的俞穴就是原穴，一穴二用" },
      { system: "花精入口", role: "木元素", importance: "鳳仙花（Impatiens）軌道起點——急躁/不耐煩議題" },
      { system: "一氣周流", role: "東方木位", importance: "厥陰風木＝一氣周流左升的起動器" },
    ],
    classical:
      "厥陰為「闔」——裡之裡，最深層的闔門。黃元御說「凡病之起，無不因於木氣之鬱」，太衝＝直接在厥陰的原穴上啟動生發之氣。",
    huangYuanyu:
      "厥陰風木主生，生氣不足是十個病人八九個的共同問題。木氣鬱遏不升→橘色（補）；肝火上炎風動→藍色（洩）。多數現代人是木鬱不升，故多用橘補。",
  },
];

/* ------------------------------------------------------------------ */
/*  Zone Data                                                          */
/* ------------------------------------------------------------------ */

interface ZoneSystem {
  id: number;
  system: string;
  content: string;
}

interface ManualZone {
  name: string;
  density: string;
  systems: ZoneSystem[];
  summary: string;
}

const manualZones: ManualZone[] = [
  {
    name: "頸胸入口",
    density: "系統密度 >= 14",
    systems: [
      { id: 1, system: "經別出合", content: "4 條經別「出」＋ 1 條「合」＝ 5 條路徑通過" },
      { id: 2, system: "交會穴", content: "大椎（7 陽經總匯）＋缺盆（5 陽經潛入口）" },
      { id: 3, system: "四海", content: "氣海上俞（大椎）＋血海上俞（大杼）＋髓海上俞" },
      { id: 4, system: "八會", content: "骨會大杼" },
      { id: 5, system: "奇經", content: "督脈＋任脈＋陽蹻＋陽維＋陰維＋帶脈上端——6 條奇經" },
      { id: 6, system: "俞募", content: "肺俞 BL13 + 心俞 BL15 + 中府 LU1" },
      { id: 7, system: "迷走神經", content: "頸段迷走主幹，控制心肺消化" },
      { id: 8, system: "根結", content: "手三陽的「結」都經過頸胸入口" },
      { id: 9, system: "氣街", content: "頭之氣街、胸之氣街在此交界" },
      { id: 10, system: "筋膜", content: "鎖骨下筋膜＋斜角肌＋頸深筋膜＋胸廓入口" },
      { id: 11, system: "六經", content: "太陽開門後界＋陽明闔門前界" },
      { id: 12, system: "花精", content: "金元素軌道（肺/大腸）＋火元素軌道（心/小腸）" },
    ],
    summary: "筋膜手法鬆解頸胸入口＝一個手法操作觸發 12 個以上的系統——CP 值最高。",
  },
  {
    name: "膈帶",
    density: "升降轉換的物理結構",
    systems: [
      { id: 1, system: "八會", content: "氣會膻中" },
      { id: 2, system: "四海", content: "氣海本部（膻中）" },
      { id: 3, system: "帶脈", content: "帶脈環繞腰腹，膈帶是其上端交界" },
      { id: 4, system: "俞募", content: "心募巨闕＋肝募期門＋膽募日月＋脾募章門＋腎募京門＝ 5 個募穴" },
      { id: 5, system: "奇經", content: "任脈＋衝脈＋帶脈＋陽維＋陰維＝ 5 條奇經" },
      { id: 6, system: "一氣周流", content: "膈帶是升降轉換的物理結構——左升到頂轉為右降" },
      { id: 7, system: "迷走神經", content: "膈肌是迷走終末分佈的分界——膈上支配心肺，膈下支配消化" },
      { id: 8, system: "六經", content: "少陽樞——膈帶側面是少陽膽經循行核心區域" },
      { id: 9, system: "花精", content: "土元素軌道（脾/胃）＝膈帶的前面和側面" },
    ],
    summary:
      "膈帶＝升降系統的物理轉換點。不鬆開膈帶，升的上不去、降的下不來。中醫說「中氣斡旋」，物理上就是膈肌的上下運動。",
  },
];

/* ------------------------------------------------------------------ */
/*  Uncovered 30%                                                      */
/* ------------------------------------------------------------------ */

interface UncoveredItem {
  area: string;
  gap: string;
  when: string;
  add: string;
}

const uncoveredItems: UncoveredItem[] = [
  { area: "陽蹻/督脈", gap: "交感亢進的直接調控", when: "失眠焦慮、頸僵面紅", add: "後谿 SI3 + 申脈 BL62（橘補）" },
  { area: "陰蹻/任脈", gap: "副交感的直接啟動", when: "同上（配對使用）", add: "照海 KI6 + 列缺 LU7" },
  { area: "膕窩區段", gap: "太陽開門＋第一合起點", when: "腰背僵硬、膀胱經卡住", add: "委中 BL40 手法＋太溪 KI3" },
  { area: "腹股溝區段", gap: "足三陰入口＋水穀之海上", when: "下焦寒涼、生殖泌尿問題", add: "腹股溝筋膜鬆解＋氣衝 ST30" },
  { area: "金水二行", gap: "肺大腸＋腎膀胱", when: "呼吸系統＋泌尿系統", add: "太淵 LU9 + 太溪 KI3（原穴）" },
  { area: "陽明闔門", gap: "胃腸實熱", when: "便秘腹脹食積", add: "足三里 ST36 + 中脘 CV12" },
  { area: "帶脈直接", gap: "帶脈收束", when: "帶脈創傷、腰腹鬆弛", add: "臨泣 GB41 + 外關 SJ5（藍洩）" },
];

/* ------------------------------------------------------------------ */
/*  Muni incense stages                                                */
/* ------------------------------------------------------------------ */

interface IncenseStage {
  stage: string;
  role: string;
}

const incenseStages: IncenseStage[] = [
  { stage: "手法前", role: "40 種花精頻率建立嗅覺場域→患者的防衛機制開始鬆動" },
  { stage: "手法中", role: "嗅覺通道直入杏仁核和海馬迴→手法鬆開的筋膜釋放情緒有花精「接住」" },
  { stage: "貼 Somaniks 時", role: "微針觸覺刺激＋花精嗅覺共振＝雙通道同步激活" },
  { stage: "MUNI 牌卡引導時", role: "花精頻率持續作用→牌卡與嗅覺場域共振→覺察深化" },
  { stage: "療程結束後", role: "患者帶走牟尼香→在家點燃→療程中建立的神經迴路被嗅覺記憶重新激活" },
];

/* ------------------------------------------------------------------ */
/*  Anchor nav                                                         */
/* ------------------------------------------------------------------ */

const navSections = [
  { id: "hero", label: "萬用三穴" },
  { id: "acupoints", label: "逐穴解剖" },
  { id: "synergy", label: "協同效應" },
  { id: "manual-zones", label: "兩區段手法" },
  { id: "interaction", label: "交互效應" },
  { id: "uncovered", label: "未覆蓋 30%" },
  { id: "incense", label: "牟尼香" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CoreDiscoveryPage() {
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
        {/* ── Hero ── */}
        <section id="hero" className="mb-20 scroll-mt-16">
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-5xl text-[#4a5548] tracking-tight leading-tight">
              核心發現深度發展
            </h1>
            <p className="mt-4 text-base md:text-lg text-[#4a5548]/60 max-w-3xl mx-auto">
              公孫 SP4 + 內關 PC6 + 太衝 LR3 x（頸胸入口 + 膈帶）＝ 5 操作 → 70% 系統覆蓋
            </p>
          </div>

          {/* Three-point hero cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {acupoints.map((pt) => (
              <div
                key={pt.code}
                className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#9A7B4F]/10 border border-[#9A7B4F]/30 mb-3">
                  <span className="font-serif text-xl text-[#9A7B4F] font-bold">{pt.code}</span>
                </div>
                <h3 className="font-serif text-2xl text-[#4a5548] mb-1">{pt.name}</h3>
                <p className="text-sm text-[#4a5548]/50 mb-3">{pt.title}</p>
                <BlueOrangeBadge type={pt.somaniks} label={pt.somaniksLabel} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Acupoint Detail ── */}
        <section id="acupoints" className="mb-20 scroll-mt-16">
          <SectionTitle title="逐穴解剖" subtitle="每個穴位的 5-6 層身份疊加" />

          <div className="mt-10 space-y-8">
            {acupoints.map((pt) => (
              <div
                key={pt.code}
                className="rounded-2xl border border-stone-200/60 bg-white p-6 md:p-8 transition-shadow hover:shadow-md"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#9A7B4F]/10 text-[#9A7B4F] font-serif font-bold text-sm border border-[#9A7B4F]/30">
                    {pt.code}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl md:text-2xl text-[#4a5548]">
                      {pt.name}
                      <span className="ml-2 text-base font-normal text-[#4a5548]/50">{pt.title}</span>
                    </h3>
                  </div>
                  <BlueOrangeBadge type={pt.somaniks} label={pt.somaniksLabel} size="sm" />
                </div>

                {/* System layers table */}
                <div className="overflow-x-auto mb-5">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-stone-200">
                        <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">系統</th>
                        <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">角色</th>
                        <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">為什麼重要</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pt.layers.map((l, i) => (
                        <tr key={i} className="border-b border-stone-100 last:border-0">
                          <td className="py-2 px-2 font-medium text-[#4a5548]">{l.system}</td>
                          <td className="py-2 px-2 text-[#4a5548]/70">{l.role}</td>
                          <td className="py-2 px-2 text-[#4a5548]/60 text-xs">{l.importance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Classical & notes */}
                <div className="space-y-3">
                  <div className="rounded-xl bg-[#F9F7F2] p-4">
                    <p className="text-xs font-medium text-[#4a5548]/50 mb-1">《針灸大成》印證</p>
                    <p className="text-sm text-[#4a5548]/70 leading-relaxed">{pt.classical}</p>
                  </div>
                  {pt.huangYuanyu && (
                    <div className="rounded-xl bg-[#F9F7F2] p-4">
                      <p className="text-xs font-medium text-[#4a5548]/50 mb-1">黃元御解讀</p>
                      <p className="text-sm text-[#4a5548]/70 leading-relaxed">{pt.huangYuanyu}</p>
                    </div>
                  )}
                  {pt.special && (
                    <div className="rounded-xl bg-[#006494]/5 border border-[#006494]/20 p-4">
                      <p className="text-xs font-medium text-[#006494]/70 mb-1">特殊意義</p>
                      <p className="text-sm text-[#4a5548]/70 leading-relaxed">{pt.special}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Synergy ── */}
        <section id="synergy" className="mb-20 scroll-mt-16">
          <SectionTitle title="協同效應" subtitle="為什麼 1 + 1 + 1 > 3" />

          {/* Dynamic structure */}
          <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <h3 className="font-serif text-lg text-[#4a5548] mb-4">三穴形成的動力學結構</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-[#da7101]/5 border border-[#da7101]/20 p-4 text-center">
                <p className="font-serif text-lg text-[#4a5548] mb-1">公孫 SP4</p>
                <p className="text-xs text-[#da7101] font-medium mb-2">橘補 -- 充填</p>
                <p className="text-sm text-[#4a5548]/70">衝脈（中軸）<br />脾土升清</p>
                <p className="mt-2 text-xs text-[#4a5548]/50">啟動中軸管道→氣血有了上下運行的通道</p>
              </div>
              <div className="rounded-xl bg-[#da7101]/5 border border-[#da7101]/20 p-4 text-center">
                <p className="font-serif text-lg text-[#4a5548] mb-1">太衝 LR3</p>
                <p className="text-xs text-[#da7101] font-medium mb-2">橘補 / 藍洩</p>
                <p className="text-sm text-[#4a5548]/70">經別入（深門）<br />厥陰左升</p>
                <p className="mt-2 text-xs text-[#4a5548]/50">啟動左升動力→升發從厥陰起動，木生火</p>
              </div>
              <div className="rounded-xl bg-[#006494]/5 border border-[#006494]/20 p-4 text-center">
                <p className="font-serif text-lg text-[#4a5548] mb-1">內關 PC6</p>
                <p className="text-xs text-[#006494] font-medium mb-2">藍洩 -- 打開</p>
                <p className="text-sm text-[#4a5548]/70">陰維（橫向網）<br />心包/迷走</p>
                <p className="mt-2 text-xs text-[#4a5548]/50">打開陰面網絡→升上來的氣血有地方分配</p>
              </div>
            </div>

            {/* Why all 3 needed */}
            <div className="mt-6 space-y-2">
              {[
                { miss: "沒有公孫", result: "管道沒開，氣血沒有主幹道" },
                { miss: "沒有太衝", result: "動力沒有，升降起動不了" },
                { miss: "沒有內關", result: "網絡沒通，氣血升上來了但分配不出去" },
              ].map((r) => (
                <div
                  key={r.miss}
                  className="flex items-start gap-2 rounded-lg bg-[#F9F7F2] px-4 py-2.5 text-sm"
                >
                  <span className="text-rose-500 font-medium flex-shrink-0">{r.miss}</span>
                  <span className="text-[#4a5548]/50">=</span>
                  <span className="text-[#4a5548]/70">{r.result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Five element + Extraordinary vessel coverage */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6">
              <h4 className="font-serif text-base text-[#4a5548] mb-3">五行覆蓋</h4>
              <div className="space-y-2">
                {[
                  { point: "公孫", element: "土", flower: "土元素（不確定族群）", position: "中央" },
                  { point: "內關", element: "火", flower: "火元素（孤獨族群）", position: "南方" },
                  { point: "太衝", element: "木", flower: "木元素（沮喪族群）", position: "東方" },
                ].map((e) => (
                  <div key={e.point} className="flex items-center gap-3 text-sm">
                    <span className="font-medium text-[#4a5548] w-10">{e.point}</span>
                    <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs text-[#4a5548]/70 border border-stone-200/60">
                      {e.element}
                    </span>
                    <span className="text-[#4a5548]/60 flex-1">{e.flower}</span>
                    <span className="text-xs text-[#4a5548]/40">{e.position}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-[#4a5548]/50">
                三穴覆蓋土、火、木三行＝一氣周流左半圓完整路徑。右半圓（金、水）靠頸胸入口和膈帶手法覆蓋。
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6">
              <h4 className="font-serif text-base text-[#4a5548] mb-3">奇經覆蓋</h4>
              <p className="text-sm text-[#4a5548]/70 leading-relaxed mb-3">
                三穴啟動 3 條奇經：衝脈＋陰維＋（太衝間接影響經別→帶脈/任督的深層聯繫）。
              </p>
              <p className="text-sm text-[#4a5548]/70 leading-relaxed">
                加上頸胸入口帶通過的 6 條奇經，和膈帶的帶脈/任脈/衝脈——整個奇經八脈全部被觸及。
              </p>
            </div>
          </div>
        </section>

        {/* ── Manual Zones ── */}
        <section id="manual-zones" className="mb-20 scroll-mt-16">
          <SectionTitle
            title="兩個區段的手法"
            subtitle="為什麼是頸胸入口和膈帶"
          />

          <div className="mt-10 space-y-8">
            {manualZones.map((zone) => (
              <div
                key={zone.name}
                className="rounded-2xl border border-stone-200/60 bg-white p-6 md:p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <h3 className="font-serif text-xl md:text-2xl text-[#4a5548]">{zone.name}</h3>
                  <span className="rounded-full bg-[#9A7B4F]/10 border border-[#9A7B4F]/30 px-3 py-0.5 text-xs font-medium text-[#9A7B4F]">
                    {zone.density}
                  </span>
                </div>

                <div className="overflow-x-auto mb-5">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-stone-200">
                        <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50 w-8">#</th>
                        <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">系統</th>
                        <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">具體內容</th>
                      </tr>
                    </thead>
                    <tbody>
                      {zone.systems.map((s) => (
                        <tr key={s.id} className="border-b border-stone-100 last:border-0">
                          <td className="py-2 px-2 text-[#4a5548]/40">{s.id}</td>
                          <td className="py-2 px-2 font-medium text-[#4a5548]">{s.system}</td>
                          <td className="py-2 px-2 text-[#4a5548]/70">{s.content}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="rounded-xl bg-[#F9F7F2] p-4 border-l-2 border-[#9A7B4F]/40">
                  <p className="text-sm text-[#4a5548]/70 leading-relaxed">{zone.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Interaction Effect ── */}
        <section id="interaction" className="mb-20 scroll-mt-16">
          <SectionTitle title="兩區段手法＋三穴的交互效應" subtitle="5 個操作的完整序列" />

          <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#006494] via-[#9A7B4F] to-[#da7101] hidden md:block" />
              <div className="space-y-5">
                {[
                  { num: "1", label: "頸胸入口手法", desc: "打開陽經總匯＋迷走頸段＋氣海前後貫通", color: "text-[#006494]" },
                  { num: "2", label: "膈帶環形手法", desc: "打開升降轉換點＋帶脈收束＋中土斡旋", color: "text-[#006494]" },
                  { num: "3", label: "公孫 SP4 橘補", desc: "衝脈中軸啟動→氣血有了上下灌注的管道", color: "text-[#da7101]" },
                  { num: "4", label: "太衝 LR3 橘補", desc: "厥陰左升→升發動力起動", color: "text-[#da7101]" },
                  { num: "5", label: "內關 PC6 藍洩", desc: "陰維打開→升上來的氣血在胸膈區域分配", color: "text-[#006494]" },
                ].map((step) => (
                  <div key={step.num} className="relative flex gap-4 md:ml-1">
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-stone-300 bg-white text-sm font-bold ${step.color} shadow-sm`}>
                        {step.num}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#4a5548]">{step.label}</p>
                      <p className="text-sm text-[#4a5548]/60 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-[#9A7B4F]/5 border border-[#9A7B4F]/20 p-4 text-center">
              <p className="text-sm text-[#4a5548] font-medium">
                通道已開 + 動力已起 + 方向已定
              </p>
              <p className="text-xs text-[#4a5548]/50 mt-1">
                形（手法）+ 氣（穴位）+ 精（奇經）+ 神（花精）同步
              </p>
            </div>
          </div>
        </section>

        {/* ── Uncovered 30% ── */}
        <section id="uncovered" className="mb-20 scroll-mt-16">
          <SectionTitle title="未覆蓋的 30%" subtitle="何時需要擴展" />

          <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">未覆蓋</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">具體缺口</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">何時需要補</th>
                  <th className="text-left py-2 px-2 text-xs font-medium text-[#4a5548]/50">加什麼</th>
                </tr>
              </thead>
              <tbody>
                {uncoveredItems.map((item) => (
                  <tr key={item.area} className="border-b border-stone-100 last:border-0">
                    <td className="py-2.5 px-2 font-medium text-[#4a5548]">{item.area}</td>
                    <td className="py-2.5 px-2 text-[#4a5548]/70">{item.gap}</td>
                    <td className="py-2.5 px-2 text-[#4a5548]/60">{item.when}</td>
                    <td className="py-2.5 px-2 text-[#006494] text-xs">{item.add}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-xl bg-[#F9F7F2] border border-stone-200/40 px-5 py-4">
            <p className="text-sm text-[#4a5548]/70 leading-relaxed">
              <strong className="text-[#4a5548]">核心邏輯：</strong>三穴＋兩區段是「油門＋方向盤」，擴展包是「檔位」。多數情況只需要油門和方向盤就能走；遇到特殊路況才需要換檔。
            </p>
          </div>
        </section>

        {/* ── Muni Incense ── */}
        <section id="incense" className="mb-20 scroll-mt-16">
          <SectionTitle title="牟尼香在五操作中的角色" subtitle="不是第六個操作——是貫穿全程的場域" />

          <div className="mt-8 space-y-4">
            {incenseStages.map((s) => (
              <div
                key={s.stage}
                className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-5 flex items-start gap-4"
              >
                <span className="flex-shrink-0 rounded-full bg-[#9A7B4F]/10 border border-[#9A7B4F]/30 px-3 py-1 text-xs font-medium text-[#9A7B4F]">
                  {s.stage}
                </span>
                <p className="text-sm text-[#4a5548]/70 leading-relaxed">{s.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-[#9A7B4F]/5 border border-[#9A7B4F]/20 p-6 text-center">
            <p className="text-sm text-[#4a5548]/70 leading-relaxed max-w-2xl mx-auto">
              牟尼香不需要治療師診斷「該用哪朵花精」。40 種花精頻率全部同時在場，身體會自己選擇需要的頻率來共振——這和柯磊墨的 243 反應區理論一致：<strong className="text-[#4a5548]">身體知道自己需要什麼</strong>。
            </p>
          </div>
        </section>

        {/* ── Summary ── */}
        <section className="mb-16">
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-[#9A7B4F]/30 shadow-sm p-6 md:p-8">
            <h3 className="font-serif text-lg text-[#9A7B4F] mb-3 text-center">一句話總結</h3>
            <p className="text-sm md:text-base text-[#4a5548]/70 leading-relaxed text-center max-w-3xl mx-auto">
              公孫開管道（衝脈中軸），太衝起動力（厥陰左升），內關通網絡（陰維分配），頸胸入口解陽門（七經總匯），膈帶鬆樞紐（中土轉換）——五個操作建立了一個完整的「管道＋動力＋網絡＋入口＋轉換點」系統，覆蓋形氣精神四層、土火木三行、衝脈陰維經別三個深層系統，加上牟尼香的嗅覺場域，在 30 分鐘內完成從皮膚到臟腑的六層啟動。
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <RelatedLinks
            title="延伸閱讀"
            links={[
              { label: "回到系統首頁", href: "/internal/flow-system", description: "花精 x 一氣周流 x 奇經八脈整合系統" },
              { label: "十二經筋 x CF 點 x 九區段", href: "/internal/flow-system/sinew-channels", description: "CC + CF + 螺旋完整交叉比對" },
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

import type { Metadata } from "next";
import Link from "next/link";
import {
  SectionTitle,
  BlueOrangeBadge,
  RelatedLinks,
} from "@/components/flow-system";

export const metadata: Metadata = {
  title: "黃元御×九區段 一氣周流整合 | MAX 內部系統",
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ZoneData {
  id: number;
  zone: string;
  element: string;
  sixQi: string;
  yiQiRole: string;
  ha: string;
  jingBie: string;
  pathology: string;
  molecular: string;
  quote: string;
  quoteSource: string;
  extraQuotes?: { text: string; source: string }[];
  formula: string;
  formulaExplanation: string;
  elementColor: string;
  borderColor: string;
}

const zones: ZoneData[] = [
  {
    id: 1,
    zone: "膕窩",
    element: "水",
    sixQi: "太陽寒水",
    yiQiRole: "腎水蟄藏 · 陽根",
    ha: "90 μg/g",
    jingBie: "第一合離穴",
    pathology: "「腎水下寒而精病」",
    molecular: "HA gel = 陽根被封 → 精虛",
    quote:
      "陽盛于上而生于下，水中之氣，是曰陽根。陽氣長養，爰生木火。",
    quoteSource: "《四聖心源 · 陽虛》",
    extraQuotes: [
      {
        text: "水性本寒，少陽三焦之火，隨太陽而下行，水得此火，應當不寒。陽藏則外清而內溫，陽泄則內寒而外熱。",
        source: "《四聖心源 · 太陽寒水》",
      },
      {
        text: "中氣衰則升降窒，腎水下寒而精病。",
        source: "《四聖心源 · 中氣》",
      },
    ],
    formula: "苓甘薑附湯",
    formulaExplanation:
      "溫腎暖水 = 升高局部溫度 → HA 黏度物理性降低 → fasciacyte 恢復功能。附子溫腎 = TGF-beta1 ↓ → myofibroblast 鬆弛",
    elementColor: "text-blue-700",
    borderColor: "border-l-blue-400",
  },
  {
    id: 2,
    zone: "腹股溝",
    element: "木",
    sixQi: "厥陰風木",
    yiQiRole: "肝木左升 · 起動",
    ha: "~90 μg/g",
    jingBie: "第二三合離入",
    pathology: "「肝木左鬱而血病」",
    molecular: "HA gel = 木鬱 = 左升卡住 → 血瘀",
    quote:
      "肝木左鬱而血病⋯凡病之起，無不因于木氣之鬱。",
    quoteSource: "《四聖心源 · 中氣》",
    extraQuotes: [
      {
        text: "血以溫升為性，緣腎水左旋，則生肝血。溫氣衰損，故木陷而血瘀。久而失其華鮮，紅變而紫，紫變而黑。",
        source: "《四聖心源 · 血瘀》",
      },
      {
        text: "風者，厥陰木氣之所化也⋯厥陰以風木主令，木生于水而長于土，土濕水寒，乙木不達。",
        source: "《四聖心源 · 六氣解 · 厥陰風木》",
      },
    ],
    formula: "達鬱湯",
    formulaExplanation:
      "桂枝溫通 = HA 黏度 ↓，乾薑暖脾 = TGF-beta1 ↓，茯苓滲濕 = 組織間液流動恢復",
    elementColor: "text-green-700",
    borderColor: "border-l-green-500",
  },
  {
    id: 3,
    zone: "腋窩",
    element: "金",
    sixQi: "陽明燥金",
    yiQiRole: "肺金收斂 · 入深",
    ha: "高",
    jingBie: "手三陰入穴",
    pathology: "「肺金右滯而氣病」",
    molecular: "HA gel = 收斂太過 → 氣積不散",
    quote:
      "肺藏氣而性收斂，氣病則積聚而不散⋯氣盛于肺胃，而虛于肝脾，故肺氣可瀉，而肝氣不可瀉。",
    quoteSource: "《四聖心源 · 氣滯》",
    extraQuotes: [
      {
        text: "氣統于肺，凡臟腑經絡之氣，皆肺氣之所宣布也。",
        source: "《四聖心源 · 氣血原本》",
      },
    ],
    formula: "下氣湯",
    formulaExplanation:
      "半夏降逆 = 降低腋窩交感張力，杏仁潤降 = HA 黏度 ↓",
    elementColor: "text-stone-600",
    borderColor: "border-l-stone-400",
  },
  {
    id: 4,
    zone: "膈帶",
    element: "土",
    sixQi: "太陰濕土",
    yiQiRole: "中氣斡旋 · 升降軸",
    ha: "29-50 μg/g",
    jingBie: "經別穿越",
    pathology: "「中氣衰則升降窒」",
    molecular: "HA 濕滯 + myofibroblast = 中土不運",
    quote:
      "脾為己土，以太陰而主升；胃為戊土，以陽明而主降。升降之權，則在陰陽之交，是謂中氣。",
    quoteSource: "《四聖心源 · 中氣》",
    extraQuotes: [
      {
        text: "中氣衰則升降窒，腎水下寒而精病，心火上炎而神病，肝木左鬱而血病，肺金右滯而氣病。四維之病，悉因于中氣。",
        source: "《四聖心源 · 中氣》",
      },
      {
        text: "太陰以濕土主令⋯陽虛則土濕而不升，己土不升，則水木陷矣。",
        source: "《四聖心源 · 太陰濕土》",
      },
    ],
    formula: "黃芽湯",
    formulaExplanation:
      "人參三錢、甘草二錢、茯苓二錢、乾薑二錢 = 崇陽補火 + 培土瀉水 = 溫燥中土 → HA 代謝恢復 → 膈帶流動性回來 → 升降恢復",
    elementColor: "text-amber-700",
    borderColor: "border-l-amber-400",
  },
  {
    id: 5,
    zone: "腹部",
    element: "土",
    sixQi: "太陰/陽明",
    yiQiRole: "精華上奉 · 渣滓下傳",
    ha: "低-中",
    jingBie: "根結太陰結",
    pathology: "「脾失運化」",
    molecular: "gamma-motor 斷裂 = 太陰開失敗",
    quote:
      "水穀入胃，脾陽磨化，渣滓下傳，而為糞溺，精華上奉，而變氣血。",
    quoteSource: "《四聖心源 · 精華滋生》",
    extraQuotes: [
      {
        text: "上焦如霧，中焦如漚，下焦如瀆。三焦之火秘，則上溫脾胃而水道通。",
        source: "《四聖心源 · 糟粕傳導》",
      },
    ],
    formula: "中焦健運方",
    formulaExplanation:
      "中脘 Somaniks 橘 = 補胃氣 = 促進「精華上奉」= 脾陽升清",
    elementColor: "text-amber-700",
    borderColor: "border-l-amber-300",
  },
  {
    id: 6,
    zone: "腰脊",
    element: "水/火",
    sixQi: "太陽/少陰",
    yiQiRole: "腎間動氣 · 生氣之原",
    ha: "中",
    jingBie: "14背俞 + 督脈",
    pathology: "「五臟六腑之本 · 十二經脈之根」",
    molecular: "骶段副交感 = 三焦之火秘于腎",
    quote:
      "所謂生氣之原者，謂十二經之根本也，謂腎間動氣也。此五臟六腑之本，十二經脈之根，呼吸之門，三焦之原。",
    quoteSource: "《難經懸解 · 八難》",
    extraQuotes: [
      {
        text: "精藏于腎⋯腎氣盛則髓骨堅凝而輕利。",
        source: "《四聖心源 · 精神化生》",
      },
      {
        text: "水性蟄藏，太陽寒水蟄藏，三焦之火秘于腎藏，則內溫而外清。",
        source: "《四聖心源 · 太陽寒水》",
      },
    ],
    formula: "苓甘薑附湯 + 八髎藍",
    formulaExplanation:
      "命門 Somaniks 橘（補腎陽）+ 八髎藍（啟骶段副交感）= 同時補「生氣之原」和啟動下焦副交感",
    elementColor: "text-indigo-700",
    borderColor: "border-l-indigo-400",
  },
  {
    id: 7,
    zone: "頸胸入口",
    element: "火/金",
    sixQi: "少陰/陽明",
    yiQiRole: "火金過渡 · 出穴帶",
    ha: "50-70 μg/g",
    jingBie: "5/6 出穴",
    pathology: "「君相二火泄露而升炎」",
    molecular: "交感亢進 = 火該降而不降",
    quote:
      "胃土不降，金水失收藏之政，君相二火泄露而升炎，心液消耗，則上熱而病陰虛。",
    quoteSource: "《四聖心源 · 陰虛》",
    extraQuotes: [
      {
        text: "肝血溫升，升而不已，溫化為熱，則生心火；肺氣清降，降而不已，清化為寒，則生腎水。",
        source: "《四聖心源 · 精神化生》",
      },
    ],
    formula: "地魄湯",
    formulaExplanation:
      "清肺胃助收藏 = Step 0a 藥物版：清肺金 = 降頸部交感，斂心火 = 升迷走副交感",
    elementColor: "text-red-700",
    borderColor: "border-l-red-400",
  },
  {
    id: 8,
    zone: "肢端",
    element: "水→木",
    sixQi: "全六氣",
    yiQiRole: "根穴 · 左升源頭",
    ha: "低",
    jingBie: "八脈交會 + 原穴",
    pathology: "「木直則水隨木升」",
    molecular: "萬用三穴 = 中土 + 木升 + 火降",
    quote:
      "木曰曲直，曲直作酸⋯木直則腎水隨木而左升。木曲而不直，故腎水下潤。",
    quoteSource: "《四聖心源 · 五味根原》",
    extraQuotes: [
      {
        text: "諸陽經之正，成以諸陰之別道相合，皆為正脈，非支絡也。",
        source: "《靈樞懸解 · 經別》",
      },
    ],
    formula: "達鬱湯 + 天魂湯",
    formulaExplanation:
      "太衝疏木達鬱 = 左升起動，公孫培土健脾 = 中土斡旋，內關降火安神 = 火歸元下降",
    elementColor: "text-teal-700",
    borderColor: "border-l-teal-400",
  },
  {
    id: 9,
    zone: "頭面",
    element: "火",
    sixQi: "少陰君火",
    yiQiRole: "心火 · 神明 · 七竅",
    ha: "6 μg/g",
    jingBie: "全部合穴",
    pathology: "「清陽上升則七竅空靈」",
    molecular: "經別全通 → 合出現 → 望診驗證",
    quote:
      "五藏之精氣，開竅于頭上，是謂五官⋯清陽上升，則七竅空靈；濁陰上逆，則五官窒塞。",
    quoteSource: "《四聖心源 · 五官開竅》",
    extraQuotes: [
      {
        text: "陽神發露，上開雙竅，而為兩目，目乃陽神之所出入而遊行也。",
        source: "《四聖心源 · 精神化生》",
      },
      {
        text: "脫陰者目盲⋯陰脫者，陽根澌敗，精血失藏，魂神不能發露，是以目盲。",
        source: "《四聖心源 · 陰脫》",
      },
    ],
    formula: "望診驗證",
    formulaExplanation:
      "頭面 HA 最低（6 μg/g）→ 問題不在筋膜而在神經整合。目神恢復 = 經別全迴路貫通的最終驗證",
    elementColor: "text-red-600",
    borderColor: "border-l-red-500",
  },
];

interface TreatmentStep {
  step: string;
  method: string;
  formula: string;
  molecular: string;
}

const treatmentSteps: TreatmentStep[] = [
  {
    step: "0a 顱端",
    method: "清肺胃助收藏（地魄湯法）",
    formula: "地魄湯",
    molecular: "降交感 → 火歸元",
  },
  {
    step: "0c 骶端",
    method: "溫腎暖水（苓甘薑附湯法）",
    formula: "苓甘薑附湯",
    molecular: "骶段副交感 → 火秘于腎",
  },
  {
    step: "① 遠端",
    method: "疏木達鬱 + 崇陽補火",
    formula: "達鬱湯 + 天魂湯",
    molecular: "太衝啟左升 + 公孫轉中土",
  },
  {
    step: "② CF手法",
    method: "行氣化瘀（破瘀湯法）",
    formula: "破瘀湯",
    molecular: "gel → sol 逆轉 + fasciacyte 釋放",
  },
  {
    step: "④ 膈帶",
    method: "崇陽補火培土瀉水（黃芽湯法）",
    formula: "黃芽湯",
    molecular: "中氣回運 = 膈帶鬆解 → 升降恢復",
  },
  {
    step: "⑤ 迷走",
    method: "降肺胃 + 升肝脾（一氣周流覆位）",
    formula: "全方隨證",
    molecular: "副交感主導 → 雙重鎖全解",
  },
  {
    step: "⑥ 頭面",
    method: "觀其五官色澤（望診）",
    formula: "—",
    molecular: "「清陽上升則七竅空靈」→ 驗證",
  },
];

interface ThreeNeedleRow {
  point: string;
  yiQiRole: string;
  sixQi: string;
}

const threeNeedles: ThreeNeedleRow[] = [
  {
    point: "公孫 SP4",
    yiQiRole: "衝脈 = 中軸 + 脾絡 = 中土左旋",
    sixQi: "太陰濕土從本 → 直接操作中土",
  },
  {
    point: "內關 PC6",
    yiQiRole: "陰維 = 情緒連續性 + 心包絡 = 火降",
    sixQi: "少陽相火從本 → 厥陰中見少陽 → 火歸元",
  },
  {
    point: "太衝 LR3",
    yiQiRole: "厥陰入穴 = 左升起動 + 肝原 = 木升",
    sixQi: "厥陰風木從中 → 左升的啟動器",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HuangYuanyuPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Internal badge */}
      <div className="fixed top-4 right-4 z-50 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm print:hidden">
        內部測試版
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        {/* Back link */}
        <Link
          href="/internal/flow-system"
          className="inline-flex items-center gap-1.5 text-sm text-[#4a5548]/50 hover:text-[#4a5548] transition-colors mb-8"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          返回系統首頁
        </Link>

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#4a5548] tracking-tight leading-tight">
            黃元御 × 九區段
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#4a5548]/60">
            一氣周流及全部著作 — 完整整合對照
          </p>
          <p className="mt-3 text-sm text-[#4a5548]/40">
            對照來源：《四聖心源》《靈樞懸解》《素問懸解》《難經懸解》《傷寒懸解》《金匱懸解》《長沙藥解》《玉楸藥解》《四聖懸樞》《素靈微蘊》
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <SectionTitle title="總論：一氣周流 × 九區段的結構映射" />
          <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <blockquote className="font-serif text-lg md:text-xl text-[#9A7B4F] leading-relaxed text-center italic">
              「中氣者，和濟水火之機，升降金木之軸。」
            </blockquote>
            <p className="text-center text-sm text-[#4a5548]/50 mt-2">
              ——《四聖心源 · 中氣》
            </p>

            {/* Flow diagram (text art) */}
            <div className="mt-8 rounded-xl bg-[#F9F7F2] p-5 md:p-6 font-mono text-xs md:text-sm leading-relaxed text-[#4a5548]/70 overflow-x-auto whitespace-pre">
{`                頭面（合 · 神 · HA6）
                心火（純陽 · 神明出焉）
                    ↑
    腋窩（入·金）←── 頸胸入口（出·火金過渡）
    肺金右降              ↑
        ↓            ↑
    膈帶 ═══ 中土斡旋 ═══ 膈帶
    戊土右轉          己土左升
        ↓            ↑
    腹部（降路）    腹股溝（離·木）
    陽明燥金          肝木左升
        ↓            ↑
    膕窩/腰脊 ←────── 肢端（根·水）
    腎水（純陰）        HA90 · 離穴
                ↓
             一氣周流`}
            </div>

            <p className="mt-6 text-base leading-relaxed text-[#4a5548]/70 max-w-3xl mx-auto text-center">
              黃元御核心模型將五行升降歸於中氣一軸。九區段系統以 HA
              含量梯度、經別合離穴位置、fasciacyte
              分子機制，為這套古典模型提供了可量化的現代對應。
            </p>
          </div>
        </section>

        {/* Nine Zone Chapters */}
        <section className="mb-20">
          <SectionTitle
            title="九區段詳解"
            subtitle="每一區段的古典文本、五行六氣對應、HA 分子關聯與用方"
          />
          <div className="mt-10 space-y-8">
            {zones.map((z) => (
              <div
                key={z.id}
                className={`rounded-2xl border border-stone-200/50 bg-white/80 backdrop-blur-sm shadow-sm p-6 md:p-8 border-l-4 ${z.borderColor}`}
              >
                {/* Zone header */}
                <div className="flex flex-wrap items-start gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F9F7F2] text-sm font-bold text-[#4a5548] border border-stone-200/60">
                    {z.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl md:text-2xl text-[#4a5548]">
                      {z.zone}
                      <span className={`ml-2 text-base font-normal ${z.elementColor}`}>
                        {z.element} · {z.sixQi}
                      </span>
                    </h3>
                    <p className="text-sm text-[#4a5548]/50 mt-0.5">
                      {z.yiQiRole}
                    </p>
                  </div>
                </div>

                {/* Meta row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="rounded-lg bg-stone-50 px-4 py-2.5">
                    <p className="text-xs text-[#4a5548]/40 mb-0.5">HA 含量</p>
                    <p className="text-sm font-medium text-[#4a5548]">{z.ha}</p>
                  </div>
                  <div className="rounded-lg bg-stone-50 px-4 py-2.5">
                    <p className="text-xs text-[#4a5548]/40 mb-0.5">經別</p>
                    <p className="text-sm font-medium text-[#4a5548]">
                      {z.jingBie}
                    </p>
                  </div>
                  <div className="rounded-lg bg-stone-50 px-4 py-2.5">
                    <p className="text-xs text-[#4a5548]/40 mb-0.5">中氣論病機</p>
                    <p className="text-sm font-medium text-[#4a5548]">
                      {z.pathology}
                    </p>
                  </div>
                  <div className="rounded-lg bg-stone-50 px-4 py-2.5">
                    <p className="text-xs text-[#4a5548]/40 mb-0.5">分子對應</p>
                    <p className="text-sm font-medium text-[#4a5548]">
                      {z.molecular}
                    </p>
                  </div>
                </div>

                {/* Main classical quote */}
                <blockquote className="rounded-xl bg-[#F9F7F2] border-l-4 border-[#9A7B4F]/40 p-5 mb-4">
                  <p className="font-serif text-base md:text-lg leading-relaxed text-[#4a5548] italic">
                    「{z.quote}」
                  </p>
                  <cite className="block mt-2 text-sm text-[#9A7B4F] not-italic">
                    —— {z.quoteSource}
                  </cite>
                </blockquote>

                {/* Extra quotes */}
                {z.extraQuotes && z.extraQuotes.length > 0 && (
                  <div className="space-y-3 mb-5">
                    {z.extraQuotes.map((eq, idx) => (
                      <blockquote
                        key={idx}
                        className="rounded-lg bg-stone-50 border-l-3 border-stone-300 p-4"
                      >
                        <p className="font-serif text-sm leading-relaxed text-[#4a5548]/80 italic">
                          「{eq.text}」
                        </p>
                        <cite className="block mt-1.5 text-xs text-[#4a5548]/50 not-italic">
                          —— {eq.source}
                        </cite>
                      </blockquote>
                    ))}
                  </div>
                )}

                {/* Formula correspondence */}
                <div className="rounded-xl bg-amber-50/60 border border-amber-200/40 p-4">
                  <div className="flex items-start gap-3">
                    <BlueOrangeBadge type="tonify" label={z.formula} size="sm" />
                    <p className="text-sm text-[#4a5548]/70 leading-relaxed">
                      {z.formulaExplanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Master Integration Table */}
        <section className="mb-20">
          <SectionTitle
            title="九區段整合總表"
            subtitle="一氣周流 × 六氣 × HA × 病機"
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#4a5548] text-white">
                  <th className="px-3 py-2.5 text-left font-medium rounded-tl-lg">
                    區段
                  </th>
                  <th className="px-3 py-2.5 text-left font-medium">五行</th>
                  <th className="px-3 py-2.5 text-left font-medium">六氣</th>
                  <th className="px-3 py-2.5 text-left font-medium">一氣周流</th>
                  <th className="px-3 py-2.5 text-center font-medium">HA</th>
                  <th className="px-3 py-2.5 text-left font-medium">經別</th>
                  <th className="px-3 py-2.5 text-left font-medium">病機</th>
                  <th className="px-3 py-2.5 text-left font-medium rounded-tr-lg">
                    分子對應
                  </th>
                </tr>
              </thead>
              <tbody>
                {zones.map((z, idx) => (
                  <tr
                    key={z.id}
                    className={
                      idx % 2 === 0
                        ? "bg-white"
                        : "bg-stone-50"
                    }
                  >
                    <td className="px-3 py-2 font-medium text-[#4a5548]">
                      {z.zone}
                    </td>
                    <td className={`px-3 py-2 ${z.elementColor} font-medium`}>
                      {z.element}
                    </td>
                    <td className="px-3 py-2 text-[#4a5548]/70">{z.sixQi}</td>
                    <td className="px-3 py-2 text-[#4a5548]/70">{z.yiQiRole}</td>
                    <td className="px-3 py-2 text-center font-mono text-[#4a5548]/70">
                      {z.ha}
                    </td>
                    <td className="px-3 py-2 text-[#4a5548]/70">{z.jingBie}</td>
                    <td className="px-3 py-2 text-[#4a5548]/70 font-serif italic">
                      {z.pathology}
                    </td>
                    <td className="px-3 py-2 text-[#4a5548]/70">{z.molecular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Three Universal Needles */}
        <section className="mb-20">
          <SectionTitle
            title="萬用三穴 × 一氣周流"
            subtitle="太衝 + 公孫 + 內關 = 一氣周流的三穴操作版"
          />
          <div className="mt-10 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <div className="space-y-4">
              {threeNeedles.map((n) => (
                <div
                  key={n.point}
                  className="flex flex-col sm:flex-row gap-3 sm:items-center rounded-xl bg-[#F9F7F2] p-4"
                >
                  <span className="inline-flex items-center rounded-full bg-[#9A7B4F] text-white px-4 py-1.5 text-sm font-medium whitespace-nowrap">
                    {n.point}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#4a5548] font-medium">
                      {n.yiQiRole}
                    </p>
                    <p className="text-xs text-[#4a5548]/50 mt-0.5">
                      {n.sixQi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-[#4a5548]/60 leading-relaxed max-w-2xl mx-auto">
              三穴合看 = 「中土左旋（公孫）+ 木升（太衝）+ 火降（內關）」=
              一氣周流的三個關鍵齒輪同時轉動
            </p>
          </div>
        </section>

        {/* Treatment Sequence Table */}
        <section className="mb-20">
          <SectionTitle
            title="治法 × 六區操作序列"
            subtitle="黃元御治法與六區手法的對應"
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#4a5548] text-white">
                  <th className="px-4 py-2.5 text-left font-medium rounded-tl-lg">
                    六區步驟
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium">
                    黃元御治法
                  </th>
                  <th className="px-4 py-2.5 text-left font-medium">代表方</th>
                  <th className="px-4 py-2.5 text-left font-medium rounded-tr-lg">
                    分子事件
                  </th>
                </tr>
              </thead>
              <tbody>
                {treatmentSteps.map((s, idx) => (
                  <tr
                    key={s.step}
                    className={
                      idx % 2 === 0 ? "bg-white" : "bg-stone-50"
                    }
                  >
                    <td className="px-4 py-2.5 font-medium text-[#4a5548]">
                      {s.step}
                    </td>
                    <td className="px-4 py-2.5 text-[#4a5548]/70">
                      {s.method}
                    </td>
                    <td className="px-4 py-2.5 text-[#9A7B4F] font-medium">
                      {s.formula}
                    </td>
                    <td className="px-4 py-2.5 text-[#4a5548]/70">
                      {s.molecular}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Core Discovery */}
        <section className="mb-20">
          <SectionTitle title="核心發現" />
          <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm p-6 md:p-8">
            <h3 className="font-serif text-xl text-[#4a5548] mb-4 text-center">
              「凡病之起無不因于木氣之鬱」的分子定義
            </h3>
            <div className="rounded-xl bg-[#F9F7F2] p-5 md:p-6 font-mono text-xs md:text-sm leading-loose text-[#4a5548]/80 space-y-1">
              <p>木氣之鬱</p>
              <p>= 厥陰風木不升</p>
              <p>= 太衝 LR3（經別入穴）處的 HA 從 sol → gel</p>
              <p>= fasciacyte 被黏稠 HA 困住 → HAS2 ↓ → 新 HA ↓</p>
              <p>= 腹股溝（經別第二三合離穴）的深淺界面封死</p>
              <p>= 經別離 → 入的信號斷裂</p>
              <p>= 左升路線從源頭就卡住</p>
              <p>= 中土無法左旋（己土不升）</p>
              <p>= 「中氣衰則升降窒」</p>
              <p>= 四維（腎精 · 肝血 · 肺氣 · 心神）全部失調</p>
              <p>= 經別全迴路斷裂</p>
              <p>= 「沒有合」</p>
            </div>
            <p className="mt-6 text-sm text-[#4a5548]/60 leading-relaxed max-w-3xl mx-auto text-center">
              黃元御用文字描述了這條鏈——現在每一環都有 Fede 2018 的 HA 定量、Stecco
              2018 的 fasciacyte、CHA Axis 2025 的 Piezo1 → Ca2+ → HAS2、和 Schleip
              2019 的 myofibroblast 對應。
            </p>
            <p className="mt-4 text-center text-base font-medium text-[#9A7B4F]">
              萬用三穴（公孫 + 內關 + 太衝）就是黃元御一氣周流的三穴操作版
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <RelatedLinks
            title="延伸閱讀"
            links={[
              {
                label: "回到系統首頁",
                href: "/internal/flow-system",
                description: "MAX 整合系統總覽",
              },
              {
                label: "九區段總覽",
                href: "/internal/flow-system/nine-zones",
                description: "九區段筋膜地理系統",
              },
              {
                label: "六區段操作",
                href: "/internal/flow-system/six-zones",
                description: "六區段臨床操作流程",
              },
              {
                label: "FPS 臨床速查卡",
                href: "/internal/flow-system/speed-card",
                description: "32 分鐘全身處方速查",
              },
            ]}
          />
        </section>
      </div>

      {/* Footer */}
      <footer className="py-12 text-center">
        <p className="text-xs text-[#4a5548]/40">
          內部測試版 — 請勿公開分享 · 建構時間：2026 年 4 月 11 日
        </p>
      </footer>
    </div>
  );
}

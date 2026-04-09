import type { Metadata } from "next";
import Link from "next/link";
import {
  SectionTitle,
  BlueOrangeBadge,
  RelatedLinks,
} from "@/components/flow-system";

export const metadata: Metadata = {
  title: "Farrell 經絡五層系統 | 整合系統",
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Layer {
  number: number;
  name: string;
  nameEn: string;
  qiLevel: string;
  preservation: string;
  somaniks: string;
  somaniksType: "drain" | "tonify" | null;
  description: string;
  flowers: { name: string; note: string }[];
  treatment: string;
  borderColor: string;
  numberBg: string;
}

const layers: Layer[] = [
  {
    number: 1,
    name: "筋經",
    nameEn: "Sinew Channels",
    qiLevel: "衛氣（Wei qi）",
    preservation: "繃緊、防護、體姿改變",
    somaniks: "藍洩（放血井穴釋放）",
    somaniksType: "drain",
    description:
      "筋經是身體的第一道防線。當遇到外界威脅時，衛氣會在體表形成防護，表現為肌肉繃緊、姿勢改變、驚嚇反射。這一層的情緒反應是最原始的「戰或逃」反應。",
    flowers: [
      { name: "Rock Rose", note: "極度驚恐" },
      { name: "Holly", note: "衛氣炸裂" },
    ],
    treatment: "釋放衛氣層面的緊張。放血井穴、刮痧、灸法。",
    borderColor: "border-l-stone-300",
    numberBg: "bg-stone-200 text-stone-600",
  },
  {
    number: 2,
    name: "絡脈",
    nameEn: "Luo Vessels",
    qiLevel: "營氣（Ying qi）",
    preservation: "血中藏情緒、遠離臟腑",
    somaniks: "藍洩（放血絡穴釋放）",
    somaniksType: "drain",
    description:
      "當情緒無法在衛氣層面處理時，會被推入營氣層面的絡脈中。絡脈將情緒藏在血中，遠離五臟六腑，保護核心功能。長期未處理的情緒會形成「血瘀」。",
    flowers: [
      { name: "Agrimony", note: "隱藏痛苦" },
      { name: "Heather", note: "心包過度膨脹" },
      { name: "Impatiens", note: "衛氣過速" },
    ],
    treatment: "放血絡穴釋放潛藏情緒。注意釋放速度不宜過快。",
    borderColor: "border-l-stone-400",
    numberBg: "bg-stone-300 text-stone-700",
  },
  {
    number: 3,
    name: "正經",
    nameEn: "Primary Channels",
    qiLevel: "營氣（Ying qi）",
    preservation: "消化功能維護、五神安定",
    somaniks: "橘補（補脾胃、調升降）",
    somaniksType: "tonify",
    description:
      "正經層是日常消化、代謝、五臟六腑正常運作的層面。當這一層受損，最先出現的是消化問題和五神不安。Earth School 的核心就是在這一層補脾胃、穩中氣。",
    flowers: [
      { name: "Cerato", note: "不信任判斷" },
      { name: "Hornbeam", note: "心理疲倦" },
      { name: "Gentian", note: "容易氣餒" },
    ],
    treatment:
      "補中氣，穩樞機。Ren-12 + ST-36 + SP-3 是 Earth School 核心處方。",
    borderColor: "border-l-amber-400",
    numberBg: "bg-amber-100 text-amber-700",
  },
  {
    number: 4,
    name: "經別",
    nameEn: "Divergent Channels",
    qiLevel: "衛氣↔元氣",
    preservation: "將邪推入關節、減緩慢性化",
    somaniks: "S-D-S（洩）或 D-S-D（補）",
    somaniksType: null,
    description:
      "經別是衛氣與元氣之間的談判場所。當正經無法處理的問題，會被推入經別層，藏在關節等深處。這一層常見慢性關節問題、自體免疫反應。治療需要判斷是用 S-D-S（先洩-後補-再洩）還是 D-S-D（先補-後洩-再補）。",
    flowers: [
      { name: "Cherry Plum", note: "奇經深層" },
      { name: "Water Violet", note: "心-腎經別" },
    ],
    treatment:
      "衛氣↔元氣談判。S-D-S 洩法適合資源足的患者，D-S-D 補法適合資源虛的患者。",
    borderColor: "border-l-rose-400",
    numberBg: "bg-rose-100 text-rose-700",
  },
  {
    number: 5,
    name: "奇經八脈",
    nameEn: "8 Extraordinary Vessels",
    qiLevel: "精（Jing）",
    preservation: "帶脈藏創傷、保護先天",
    somaniks: "Master/Couple point",
    somaniksType: null,
    description:
      "奇經八脈是最深層的資源庫，儲存先天精氣。當所有其他層次都無法處理時，身體會將創傷封存在奇經中，特別是帶脈。這一層的治療需要使用八穴（Master/Couple point），是本整合系統的核心操作層。",
    flowers: [
      { name: "Star of Bethlehem", note: "帶脈藏創傷" },
      { name: "Aspen", note: "先天恐懼" },
      { name: "Sweet Chestnut", note: "靈魂暗夜" },
    ],
    treatment:
      "精層資源調動。使用 Master/Couple point 組合，搭配花精與漢藥。",
    borderColor: "border-l-purple-500",
    numberBg: "bg-purple-100 text-purple-700",
  },
];

interface ProtocolStep {
  step: number;
  framework: string;
  flowMapping: string;
  operation: string;
}

const protocolSteps: ProtocolStep[] = [
  {
    step: 1,
    framework: "筋經（Wei qi）釋放",
    flowMapping: "先解表",
    operation: "放血井穴、刮痧、灸",
  },
  {
    step: 2,
    framework: "大腸通暢（ST-25）",
    flowMapping: "通腑降胃",
    operation: "確保大便通暢",
  },
  {
    step: 3,
    framework: "正經 Earth School",
    flowMapping: "補中氣樞機",
    operation: "Ren-12 + ST-36 + SP-3",
  },
  {
    step: 4,
    framework: "正經五神治療",
    flowMapping: "調五行升降",
    operation: "Hun-Po-Shen-Yi-Zhi 各歸其位",
  },
  {
    step: 5,
    framework: "經別 S-D-S / D-S-D",
    flowMapping: "深層升降修復",
    operation: "衛氣↔元氣談判",
  },
  {
    step: 6,
    framework: "奇經八脈八穴",
    flowMapping: "精層資源調動",
    operation: "Master/Couple point",
  },
];

interface SomaniksMapping {
  layers: string;
  type: "drain" | "tonify" | null;
  label: string;
  description: string;
}

const somaniksMappings: SomaniksMapping[] = [
  {
    layers: "第一、二層",
    type: "drain",
    label: "藍洩",
    description: "釋放表層",
  },
  {
    layers: "第三層",
    type: "tonify",
    label: "橘補",
    description: "鞏固中氣",
  },
  {
    layers: "第四層",
    type: null,
    label: "S-D-S 或 D-S-D",
    description: "視情況洩補交替",
  },
  {
    layers: "第五層",
    type: null,
    label: "Master/Couple",
    description: "最精準的調動",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FarrellPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Internal badge */}
      <div className="fixed top-4 right-4 z-50 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
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
            Farrell 經絡五層系統
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#4a5548]/60">
            人體的自我保存機制 — 由淺到深的五個層次
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <SectionTitle title="系統概述" />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base md:text-lg leading-relaxed text-[#4a5548]/70">
            Yvonne Farrell
            的經絡五層系統描述了人體如何通過不同層次的經絡來保存自我。當外界壓力或創傷超過某一層的承受能力時，身體會將其推向更深的層次儲存，直到最深的奇經八脈。理解這五個層次，是判斷治療策略的關鍵。
          </p>
        </section>

        {/* Five Layers */}
        <section className="mb-20">
          <SectionTitle
            title="五個層次"
            subtitle="由淺到深，每一層都是身體的自我保存策略"
          />
          <div className="mt-10 space-y-6">
            {layers.map((layer) => (
              <div
                key={layer.number}
                className={`rounded-2xl border border-stone-200/60 bg-white p-6 md:p-8 border-l-4 ${layer.borderColor} transition-shadow hover:shadow-md`}
              >
                {/* Layer header */}
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${layer.numberBg}`}
                  >
                    {layer.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl md:text-2xl text-[#4a5548]">
                      {layer.name}
                      <span className="ml-2 text-base font-normal text-[#4a5548]/50">
                        {layer.nameEn}
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Meta row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                  <div className="rounded-lg bg-stone-50 px-4 py-2.5">
                    <p className="text-xs text-[#4a5548]/40 mb-0.5">
                      氣的層級
                    </p>
                    <p className="text-sm font-medium text-[#4a5548]">
                      {layer.qiLevel}
                    </p>
                  </div>
                  <div className="rounded-lg bg-stone-50 px-4 py-2.5">
                    <p className="text-xs text-[#4a5548]/40 mb-0.5">
                      自我保存方式
                    </p>
                    <p className="text-sm font-medium text-[#4a5548]">
                      {layer.preservation}
                    </p>
                  </div>
                  <div className="rounded-lg bg-stone-50 px-4 py-2.5">
                    <p className="text-xs text-[#4a5548]/40 mb-0.5">
                      Somaniks
                    </p>
                    <div className="flex items-center gap-2">
                      {layer.somaniksType ? (
                        <BlueOrangeBadge
                          type={layer.somaniksType}
                          label={layer.somaniks}
                          size="sm"
                        />
                      ) : (
                        <span className="text-sm font-medium text-[#4a5548]">
                          {layer.somaniks}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed text-[#4a5548]/70 mb-5">
                  {layer.description}
                </p>

                {/* Flowers & Treatment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-[#F9F7F2] p-4">
                    <p className="text-xs font-medium text-[#4a5548]/50 mb-2">
                      對應花精
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {layer.flowers.map((f) => (
                        <span
                          key={f.name}
                          className="inline-flex items-center rounded-full bg-white border border-stone-200/80 px-3 py-1 text-xs text-[#4a5548]"
                        >
                          <span className="font-medium">{f.name}</span>
                          <span className="ml-1.5 text-[#4a5548]/50">
                            {f.note}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#F9F7F2] p-4">
                    <p className="text-xs font-medium text-[#4a5548]/50 mb-2">
                      治療方向
                    </p>
                    <p className="text-sm text-[#4a5548]/70 leading-relaxed">
                      {layer.treatment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Six-Step Protocol */}
        <section className="mb-20">
          <SectionTitle
            title="Farrell 六步療程"
            subtitle="由表入裡的完整治療流程"
          />
          <div className="mt-10 relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-stone-300 via-amber-300 to-purple-400 hidden md:block" />

            <div className="space-y-6">
              {protocolSteps.map((s) => (
                <div key={s.step} className="relative flex gap-5">
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0 flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-stone-300 bg-white text-sm font-bold text-[#4a5548] shadow-sm">
                      {s.step}
                    </div>
                  </div>
                  {/* Card */}
                  <div className="flex-1 rounded-xl border border-stone-200/60 bg-white p-5 transition-shadow hover:shadow-sm">
                    <h4 className="font-serif text-base md:text-lg text-[#4a5548] mb-2">
                      {s.framework}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-[#4a5548]/40 mb-0.5">
                          一氣周流對應
                        </p>
                        <p className="text-sm text-[#4a5548]/70">
                          {s.flowMapping}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#4a5548]/40 mb-0.5">
                          操作
                        </p>
                        <p className="text-sm text-[#4a5548]/70">
                          {s.operation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Somaniks Mapping */}
        <section className="mb-20">
          <SectionTitle
            title="Somaniks 與 Farrell 的對應"
            subtitle="藍洩與橘補如何對應五個層次"
          />
          <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2">
            {somaniksMappings.map((m) => (
              <div
                key={m.layers}
                className="rounded-xl border border-stone-200/60 bg-white p-5 flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  {m.type ? (
                    <BlueOrangeBadge type={m.type} label={m.label} />
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-stone-300/50 bg-stone-50 px-3 py-1 text-sm font-medium text-[#4a5548]">
                      {m.label}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#4a5548]">
                    {m.layers}
                  </p>
                  <p className="mt-0.5 text-sm text-[#4a5548]/60">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
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
                description: "花精 x 一氣周流 x 奇經八脈整合系統",
              },
              {
                label: "八穴總覽",
                href: "/internal/flow-system/acupoints",
                description: "奇經八脈交會八穴完整列表",
              },
              {
                label: "情緒族群總覽",
                href: "/internal/flow-system/emotions",
                description: "七大情緒族群與花精對應",
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

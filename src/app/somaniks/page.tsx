'''
import type { Metadata } from "next";
import Link from "next/link";

import FrequencyBadge from "@/components/FrequencyBadge";

export const metadata: Metadata = {
  title: "MUNI × SOMANIKS | 日本不刺入微錐針灸貼 × 神經科學修復",
  description:
    "來自日本的不刺入微錐技術，結合 MUNI 芳療神經調節哲學。SOMACEPT 硬針與 SOMARESON 軟針，以軸索反射原理啟動人體自我修復。日本醫療器材認證、CE、FDA 認證。",
};

const PRODUCTS = [
  {
    id: "somacept",
    name: "SOMACEPT",
    nameZh: "硬針貼片",
    color: "green",
    material: "硬質塑膠樹脂",
    coneHeight: "0.15mm（150μm）",
    conesL: "129 本",
    conesS: "36 本",
    fiber: "Aδ 纖維",
    fiberDesc: "銳痛・急性痛傳導",
    mechanism: "快速抗炎鎮痛",
    targets: [
      "扭傷・急性腰痛",
      "膝痛・五十肩急性期",
      "運動傷害・肌肉拉傷",
      "關節發炎・腱鞘炎",
    ],
    principle:
      "硬質微錐對皮膚產生較強的物理刺激，優先激活 Aδ 纖維（傳導銳痛的快速神經），觸發軸索反射中的抗炎路徑，促進局部血液循環並抑制疼痛信號傳遞。",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/KqfHeFfjiZSDHAkB.jpg",
    structure:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/JLTNrEgNWnIdhvHN.png",
    accent: "text-emerald-700",
    accentBg: "bg-emerald-50/30",
    border: "border-emerald-200",
    glow: "bg-emerald-100/30",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "somareson",
    name: "SOMARESON",
    nameZh: "軟針貼片",
    color: "orange",
    material: "彈性橡膠樹脂",
    coneHeight: "0.3mm（300μm）",
    conesL: "177 本",
    conesS: "53 本",
    fiber: "C 纖維",
    fiberDesc: "鈍痛・慢性痛傳導",
    mechanism: "深層舒緩放鬆",
    targets: [
      "肩頸僵硬・慢性腰痛",
      "疲勞酸痛・五十肩慢性期",
      "筋膜緊繃・自律神經失調",
      "長期姿勢不良・辦公久坐",
    ],
    principle:
      "彈性橡膠微錐提供柔和而持續的皮膚刺激，激活 C 纖維（傳導鈍痛的慢速神經），促進脊髓中內源性類嗎啡物質（Opioid）釋放，達到深層鎮痛與肌肉放鬆效果。",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/xwCndtckqJSUPiEd.jpg",
    structure:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/LVUScKCRjmkvXWfl.png",
    accent: "text-amber-700",
    accentBg: "bg-amber-50/30",
    border: "border-amber-200",
    glow: "bg-amber-100/30",
    badge: "bg-amber-100 text-amber-700",
  },
];

const CERTIFICATIONS = [
  {
    icon: "🇯🇵",
    title: "日本醫療器材認證",
    desc: "一般醫療機器製造販賣認證",
  },
  { icon: "🇪🇺", title: "CE 認證", desc: "歐盟醫療器材合規認證" },
  { icon: "🇺🇸", title: "FDA 認證", desc: "美國食品藥物管理局認證" },
  {
    icon: "🔬",
    title: "共同研究開發",
    desc: "東京都健康長壽醫療中心",
  },
  {
    icon: "📺",
    title: "NHK 推薦",
    desc: "「東洋醫學 真正的力量」節目介紹",
  },
  {
    icon: "🏅",
    title: "日本專利技術",
    desc: "特許第 4828166 號",
  },
];

const COMBOS = [
  {
    name: "肩頸修復組",
    icon: "🌿",
    oil: "MUNI 薰衣草舒緩精油",
    patch: "SOMARESON 軟針貼片",
    patchColor: "text-amber-700",
    targets: "長期肩頸僵硬、辦公久坐、慢性疲勞",
    points: "風池穴、肩井穴、天宗穴",
    color: "from-green-50 to-emerald-50",
    border: "border-stone-200",
  },
  {
    name: "運動恢復組",
    icon: "🔥",
    oil: "MUNI 迷迭香活化精油",
    patch: "SOMACEPT 硬針貼片",
    patchColor: "text-emerald-700",
    targets: "運動後肌肉痠痛、扭傷、急性疼痛管理",
    points: "足三里、陽陵泉、委中穴",
    color: "from-red-50 to-orange-50",
    border: "border-stone-200",
  },
  {
    name: "深層修復組",
    icon: "🧘",
    oil: "MUNI 乳香冥想精油",
    patch: "SOMARESON + SOMACEPT 雙貼片",
    patchColor: "text-sky-700",
    targets: "全身性修復、筋膜放鬆、自律神經平衡",
    points: "百會穴、內關穴、三陰交",
    color: "from-indigo-50 to-purple-50",
    border: "border-stone-200",
  },
];

const STEPS = [
  {
    step: "01",
    title: "清潔皮膚",
    desc: "使用前清潔目標部位，擦去汗水與油脂，確保貼片能穩固貼附。",
  },
  {
    step: "02",
    title: "找到觸痛點",
    desc: "以手指按壓疼痛或不適部位周圍，找到最敏感的觸痛點（Trigger Point）——按下去會感到「痛但舒服」的那個點。",
  },
  {
    step: "03",
    title: "選擇貼片",
    desc: "急性痛（扭傷、發炎）選 SOMACEPT 硬針；慢性痛（僵硬、酸痛）選 SOMARESON 軟針。",
  },
  {
    step: "04",
    title: "貼附固定",
    desc: "撕開貼片背膠，將微錐面對準觸痛點貼上。輕壓確認貼合，微錐會自然接觸皮膚表面。",
  },
  {
    step: "05",
    title: "搭配精油",
    desc: "建議在貼片周圍塗抹 MUNI 精油，同步啟動嗅覺與觸覺的雙重神經通路，提升修復效果。",
  },
  {
    step: "06",
    title: "定時更換",
    desc: "單次使用建議不超過 12 小時。如有搔癢或不適，請立即取下。可依需要重複使用。",
  },
];

export default function SomaniksPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] text-stone-700">
      {/* Light Theme Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl font-bold text-[#4a5548]"
          >
            MUNI
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/systems"
              className="text-sm text-stone-500 hover:text-[#4a5548] transition-colors"
            >
              療癒系統
            </Link>
            <Link
              href="https://ai.munione.co"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-4 py-1.5 text-sm font-medium transition-all shadow-sm hover:shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              MUNI 療癒顧問
            </Link>
          </nav>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-100/30 rounded-full blur-[150px]" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-green-100/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-stone-500 text-sm tracking-[0.3em] uppercase mb-6">
            MUNI × SOMANIKS
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#4a5548] mb-4 leading-tight">
            神經科學級的無痛修復
          </h1>
          <p className="text-lg text-stone-500 mb-6">
            神經科學 · 東洋經絡 · 不刺入微錐
          </p>
          <p className="text-base md:text-lg text-stone-700 font-light max-w-2xl mx-auto leading-relaxed">
            來自日本的不刺入微錐技術，
            <br className="hidden md:block" />
            結合 MUNI 芳療神經調節哲學——
            <br className="hidden md:block" />
            重新定義身心修復的可能。
          </p>

          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-stone-200" />
            <div className="w-2 h-2 rounded-full bg-stone-300" />
            <div className="w-12 h-px bg-stone-200" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT IS SOMANIKS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-stone-500 text-xs tracking-[0.2em] uppercase mb-4">
                What is SOMANIKS
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-6 leading-relaxed">
                不刺入皮膚的針灸貼片
                <br />
                <span className="text-stone-500 text-xl">
                  半世紀精密技術的結晶
                </span>
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                SOMANIKS 由日本東洋レヂン株式會社（TOYO RESIN Corporation，創立於
                1967 年，總部位於靜岡縣富士市）以超過半世紀的精密塑膠成型技術開發。
              </p>
              <p className="text-stone-500 leading-relaxed mb-6">
                利用微米級的樹脂微錐（Microcone）對皮膚表面產生持續微刺激，啟動人體的
                <span className="text-[#4a5548] font-medium">軸索反射（Axon Reflex）</span>
                ，促進局部血液循環，達到鎮痛、消炎、放鬆筋膜的效果。
              </p>
              <p className="text-stone-500 leading-relaxed">
                完全<span className="text-[#4a5548] font-medium">不使用藥物</span>、
                <span className="text-[#4a5548] font-medium">不使用磁力</span>、
                <span className="text-[#4a5548] font-medium">不損傷皮膚</span>
                ——是真正的無創、無痛、無副作用的物理療法。
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/dvsAGCGFoZGMTdyy.jpeg"
                  alt="SOMANIKS 產品展示"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
                <p className="text-stone-500 text-xs tracking-wider uppercase mb-1">
                  Since 1967
                </p>
                <p className="text-[#4a5548] text-lg font-serif">
                  57+ 年精密技術
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          AXON REFLEX SCIENCE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-stone-500 text-xs tracking-[0.2em] uppercase mb-4">
              Scientific Mechanism
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              軸索反射——皮膚科學的核心
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
              「Catch The Voice Of SKIN」——皮膚不只是保護層，
              更是連結自律神經、血液循環與內分泌的重要感知器官。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#4a5548] font-medium mb-2">刺激傳入</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                SOMANIKS 的微錐接觸皮膚，刺激感覺神經末梢的「多覺受容器」（Polymodal
                Receptor）。
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#4a5548] font-medium mb-2">軸索反射</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                信號沿神經纖維傳導，在分岔點逆向傳至血管，釋放降鈣素基因相關肽（CGRP），使血管擴張。
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#4a5548] font-medium mb-2">循環改善</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                血管擴張，血流量增加，有效帶走疼痛物質（如組織胺、緩激肽），並輸送氧氣與養分，促進組織修復。
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-stone-400 text-xs">
              此機制已由瑞典隆德大學的皮膚科醫生 M. Jancso-Gabor
              於 1967 年提出，並被廣泛證實。
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRODUCT CARDS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className={`bg-white border ${product.border} rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col`}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p
                        className={`text-xs px-3 py-1 rounded-full inline-block ${product.badge}`}
                      >
                        {product.mechanism}
                      </p>
                      <h2 className={`text-4xl font-serif mt-3 ${product.accent}`}>
                        {product.name}
                      </h2>
                      <p className="text-stone-500">{product.nameZh}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-stone-400 text-sm">微錐高度</p>
                      <p className="text-stone-700 text-lg font-medium">
                        {product.coneHeight}
                      </p>
                    </div>
                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed mb-6 h-24">
                    {product.principle}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                    <div className="bg-stone-50 rounded-lg p-3">
                      <p className="text-stone-400 text-xs">主要激活</p>
                      <p className={`font-medium ${product.accent}`}>
                        {product.fiber} ({product.fiberDesc})
                      </p>
                    </div>
                    <div className="bg-stone-50 rounded-lg p-3">
                      <p className="text-stone-400 text-xs">微錐材質</p>
                      <p className="text-stone-700 font-medium">
                        {product.material}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-stone-400 text-xs mb-2">適用場景</p>
                    <div className="flex flex-wrap gap-2">
                      {product.targets.map((target) => (
                        <span
                          key={target}
                          className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto p-1 relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 ${product.glow} blur-2xl`}
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl border border-stone-200"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead className="border-b border-stone-200">
                  <tr>
                    <th className="py-3 px-4 text-left font-medium text-stone-400 w-1/4">
                      比較項目
                    </th>
                    <th className="py-3 px-4 text-center font-medium text-emerald-700 w-3/8">
                      SOMACEPT 硬針
                    </th>
                    <th className="py-3 px-4 text-center font-medium text-amber-700 w-3/8">
                      SOMARESON 軟針
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="py-3 px-4 text-stone-500">刺激感</td>
                    <td className="py-3 px-4 text-center text-stone-700">
                      較強・點狀
                    </td>
                    <td className="py-3 px-4 text-center text-stone-700">
                      較柔・持續
                    </td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3 px-4 text-stone-500">適合痛型</td>
                    <td className="py-3 px-4 text-center text-stone-700">
                      急性痛・發炎痛
                    </td>
                    <td className="py-3 px-4 text-center text-stone-700">
                      慢性痛・僵硬酸痛
                    </td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3 px-4 text-stone-500">神經路徑</td>
                    <td className="py-3 px-4 text-center text-emerald-700">
                      Aδ 纖維 → 抗炎鎮痛
                    </td>
                    <td className="py-3 px-4 text-center text-amber-700">
                      C 纖維 → Opioid 釋放
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-stone-500">代表場景</td>
                    <td className="py-3 px-4 text-center text-stone-700">
                      扭傷、運動傷害
                    </td>
                    <td className="py-3 px-4 text-center text-stone-700">
                      辦公久坐、慢性疲勞
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HOW TO USE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-stone-500 text-xs tracking-[0.2em] uppercase mb-4">
              How to Use
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              使用方式
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              簡單六步，在家即可進行專業級的穴位保健。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-stone-400 text-3xl font-serif font-light">
                  {step.step}
                </span>
                <h3 className="text-[#4a5548] font-medium mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SPORTS SCIENCE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-stone-500 text-xs tracking-[0.2em] uppercase mb-4">
              Sports Science
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              運動科學實證
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[#4a5548] font-medium mb-4">
                  常葉大學 · 隨機雙盲實驗
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  星川秀利教授（運動生理學）與沢崎健太教授（運動醫學、鍼灸學）共同主持，以
                  7 名男性大學生為受試者，在足三里穴位貼附 SOMARESON 進行隨機雙盲實驗。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 text-xs">
                      ↓
                    </div>
                    <div>
                      <p className="text-stone-700 text-sm">血中乳酸濃度</p>
                      <p className="text-stone-500 text-xs">顯著降低</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 text-xs">
                      ↓
                    </div>
                    <div>
                      <p className="text-stone-700 text-sm">運動後心率</p>
                      <p className="text-stone-500 text-xs">顯著降低</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[#4a5548] font-medium mb-4">作用機制</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  皮膚微刺激 → 抑制交感神經 / 亢進副交感神經 → 血管擴張 →
                  乳酸代謝加速。這意味著 SOMANIKS
                  不僅能緩解疼痛，更能加速運動後的身體恢復。
                </p>
                <div>
                  <p className="text-stone-400 text-xs uppercase tracking-wider mb-3">
                    推薦運動穴位
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "足三里", pos: "膝蓋外側凹陷下方四指寬" },
                      { name: "行間", pos: "足背拇指與第二趾骨交叉處" },
                      { name: "陽輔", pos: "外踝上方五指寬" },
                      { name: "復溜", pos: "內踝與跟腱間上方三指寬" },
                    ].map((point) => (
                      <div
                        key={point.name}
                        className="bg-stone-50 rounded-lg p-3 border border-stone-100"
                      >
                        <p className="text-[#4a5548] text-sm font-medium">
                          {point.name}
                        </p>
                        <p className="text-stone-400 text-xs">{point.pos}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CERTIFICATIONS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-stone-500 text-xs tracking-[0.2em] uppercase mb-4">
              Certifications & Trust
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              認證與信賴
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              橫跨日本、歐盟、美國的醫療器材認證，
              全國多家醫療機構導入使用。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-2xl p-5 border border-stone-200 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-3 block">{cert.icon}</span>
                <h3 className="text-[#4a5548] text-sm font-medium mb-1">
                  {cert.title}
                </h3>
                <p className="text-stone-400 text-xs">{cert.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-stone-400 text-xs">
              日本全國多家醫療機構、整形外科、復健醫院、針灸院導入使用 ·
              日本製造（靜岡縣富士市）
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MUNI COMBOS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-stone-500 text-xs tracking-[0.2em] uppercase mb-4">
              MUNI × SOMANIKS Combos
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              推薦搭配組合
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              MUNI 精油 × SOMANIKS 貼片，
              嗅覺與觸覺的雙重神經通路同步啟動。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {COMBOS.map((combo) => (
              <div
                key={combo.name}
                className={`bg-gradient-to-b ${combo.color} rounded-2xl p-6 border ${combo.border} shadow-sm hover:shadow-md transition-shadow`}
              >
                <span className="text-3xl mb-3 block">{combo.icon}</span>
                <h3 className="text-[#4a5548] font-serif text-lg mb-4">
                  {combo.name}
                </h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">
                      精油
                    </p>
                    <p className="text-stone-700 text-sm">{combo.oil}</p>
                  </div>
                  <div>
                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">
                      貼片
                    </p>
                    <p className={`text-sm ${combo.patchColor}`}>
                      {combo.patch}
                    </p>
                  </div>
                  <div>
                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">
                      建議穴位
                    </p>
                    <p className="text-stone-500 text-sm">{combo.points}</p>
                  </div>
                </div>
                <div className="h-px bg-stone-200 my-4" />
                <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">
                  適用場景
                </p>
                <p className="text-stone-500 text-sm">{combo.targets}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MUNI PHILOSOPHY
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-stone-500 text-xs tracking-[0.2em] uppercase mb-4">
              MUNI Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5548] mb-4">
              為什麼 MUNI 選擇 SOMANIKS？
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm">
            <p className="text-stone-500 leading-relaxed mb-6">
              MUNI 的療癒哲學始終圍繞一個核心：
              <span className="text-[#4a5548] font-medium">
                讓身體自己找到修復的路徑
              </span>
              。花精平衡情緒，精油啟動嗅覺神經，而 SOMANIKS
              則打開了觸覺神經的修復通道。
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              SOMANIKS 的微錐技術完美契合 MUNI
              的理念——不是外力介入，而是透過精確的物理刺激，喚醒身體本有的自癒能力。軸索反射、內源性
              Opioid 釋放、副交感神經亢進……這些都是身體自己的語言。
            </p>
            <p className="text-stone-500 leading-relaxed">
              當 MUNI 精油的芳香分子透過嗅覺直達邊緣系統，SOMANIKS
              的微錐同時透過皮膚啟動軸索反射——
              <span className="text-[#4a5548] font-medium">
                嗅覺與觸覺的雙重神經通路同步共振
              </span>
              ，這就是 MUNI 所追求的完整修復體驗。
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F2EB]/60 to-[#F9F7F2]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] mb-6">
            不確定該選硬針還是軟針？
          </h2>
          <p className="text-stone-500 mb-10 leading-relaxed">
            告訴 MUNI 療癒顧問你的疼痛類型與身體狀態，
            <br className="hidden md:block" />
            AI 會為你推薦最適合的貼片 × 精油 × 穴位搭配方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://ai.munione.co"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] text-white font-medium hover:from-[#8A6B3F] hover:to-[#B49255] transition-all shadow-lg hover:shadow-md"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              問問 MUNI 療癒顧問
            </Link>
            <Link
              href="/systems"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548] hover:text-white transition-all"
            >
              探索更多 MUNI 療癒系統 →
            </Link>
          </div>
        </div>
      </section>

      {/* Frequency Badge */}
      <FrequencyBadge variant="light" full />

      {/* Footer */}
      <footer className="py-12 bg-[#F5F2EB] border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl font-serif text-[#4a5548] mb-2">MUNI 牟尼</p>
          <p className="text-stone-500 text-sm">
            在寂靜中，承接你的答案。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-stone-500">
            <Link
              href="/"
              className="hover:text-[#4a5548] transition-colors"
            >
              首頁
            </Link>
            <Link
              href="/flowers"
              className="hover:text-[#4a5548] transition-colors"
            >
              花精百科
            </Link>
            <Link
              href="/essential-oil"
              className="hover:text-[#4a5548] transition-colors"
            >
              牟尼香
            </Link>
            <Link
              href="/ginseng"
              className="hover:text-[#4a5548] transition-colors"
            >
              人蔘療癒
            </Link>
            <Link
              href="/olive-oil"
              className="hover:text-[#4a5548] transition-colors"
            >
              橄欖油
            </Link>
            <Link
              href="/green-tea"
              className="hover:text-[#4a5548] transition-colors"
            >
              日本綠茶
            </Link>
            <Link
              href="/wine"
              className="hover:text-[#4a5548] transition-colors"
            >
              葡萄酒
            </Link>
            <Link
              href="/frequency"
              className="hover:text-[#4a5548] transition-colors"
            >
              獨家技術
            </Link>
            <Link
              href="/systems"
              className="hover:text-[#4a5548] transition-colors"
            >
              療癒系統
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
'''

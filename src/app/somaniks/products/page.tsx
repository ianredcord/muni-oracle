import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "SOMANIKS 產品規格｜SOMACEPT 硬針 × SOMARESON 軟針 | MUNI",
  description:
    "SOMACEPT 硬針與 SOMARESON 軟針的完整產品規格、作用原理、神經科學機制與使用方式。透過軸索反射科學，精準選擇適合的微針貼片。",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const COMPARISON_ROWS = [
  {
    label: "刺激感",
    somacept: "較強刺激，明顯感受",
    somareson: "柔和持續，溫和舒適",
  },
  {
    label: "適合痛型",
    somacept: "急性痛、銳痛、發炎痛",
    somareson: "慢性痛、鈍痛、深層酸痛",
  },
  {
    label: "神經路徑",
    somacept: "A-delta 纖維 (快速傳導)",
    somareson: "C 纖維 (慢速傳導)",
  },
  {
    label: "代表場景",
    somacept: "扭傷、運動傷害、急性發炎",
    somareson: "肩頸僵硬、慢性腰痛、疲勞酸痛",
  },
];

const AXON_CARDS = [
  {
    step: "01",
    title: "刺激傳入",
    desc: "微錐接觸皮膚後，機械感受器將物理刺激轉化為電信號，沿感覺神經纖維向中樞傳遞。",
  },
  {
    step: "02",
    title: "軸索反射",
    desc: "信號在到達脊髓前，於神經分支處觸發軸索反射，逆向釋放神經肽 (CGRP、Substance P)，啟動局部抗炎與血管擴張反應。",
  },
  {
    step: "03",
    title: "循環改善",
    desc: "血管擴張帶來豐富的氧氣與營養素，加速代謝廢物排出，促進組織修復與疼痛緩解。",
  },
];

const STEPS = [
  { num: "1", title: "清潔皮膚", desc: "使用酒精棉片擦拭貼附部位，確保皮膚乾淨乾燥。" },
  { num: "2", title: "找到觸痛點", desc: "用指腹輕壓尋找最敏感的痛點，該處即為最佳貼附位置。" },
  { num: "3", title: "選擇貼片", desc: "急性痛選硬針 SOMACEPT，慢性痛選軟針 SOMARESON。" },
  { num: "4", title: "貼附固定", desc: "將貼片對準觸痛點貼上，輕壓確認牢固黏貼。" },
  { num: "5", title: "搭配精油", desc: "可搭配牟尼香精油於貼片周圍塗抹，提升放鬆體驗。" },
  { num: "6", title: "定時更換", desc: "建議每 2-3 天更換一次，保持最佳刺激效果。" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] text-stone-700">
      <Header />

      {/* Back link */}
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-4">
        <Link
          href="/somaniks"
          className="inline-flex items-center gap-1 text-sm text-[#4a5548] hover:underline"
        >
          <span aria-hidden="true">&larr;</span>
          返回 SOMANIKS
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone-400 text-sm tracking-[0.3em] uppercase mb-4">
            Product Specifications
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-light text-[#4a5548] mb-4 leading-tight">
            SOMANIKS 產品詳細規格
          </h1>
          <p className="text-base md:text-lg text-stone-500 leading-relaxed">
            SOMACEPT 硬針 &times; SOMARESON 軟針
          </p>
        </div>
      </section>

      {/* ── Product Cards ────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {/* SOMACEPT */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:p-8 flex flex-col">
            <span className="self-start rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1 mb-4">
              快速抗炎鎮痛
            </span>

            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/products/KqfHeFfjiZSDHAkB.jpg"
                alt="SOMACEPT 硬針貼片"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h2 className="text-2xl font-serif text-emerald-700 mb-1">
              SOMACEPT
            </h2>
            <p className="text-sm text-emerald-700/70 mb-6">硬針貼片</p>

            <ul className="space-y-3 text-sm mb-6">
              <li className="flex justify-between border-b border-emerald-200/60 pb-2">
                <span className="text-stone-500">材質</span>
                <span className="font-medium text-stone-700">硬質塑膠樹脂</span>
              </li>
              <li className="flex justify-between border-b border-emerald-200/60 pb-2">
                <span className="text-stone-500">微錐高度</span>
                <span className="font-medium text-stone-700">0.15mm (150&#956;m)</span>
              </li>
              <li className="flex justify-between border-b border-emerald-200/60 pb-2">
                <span className="text-stone-500">微錐數量 L</span>
                <span className="font-medium text-stone-700">129 本</span>
              </li>
              <li className="flex justify-between border-b border-emerald-200/60 pb-2">
                <span className="text-stone-500">微錐數量 S</span>
                <span className="font-medium text-stone-700">36 本</span>
              </li>
              <li className="flex justify-between border-b border-emerald-200/60 pb-2">
                <span className="text-stone-500">作用纖維</span>
                <span className="font-medium text-stone-700">A&#948; 纖維 (銳痛 / 急性痛傳導)</span>
              </li>
            </ul>

            <div className="bg-white/60 rounded-xl p-4 mb-6">
              <h3 className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
                作用原理
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                硬質微錐對皮膚產生較強的物理刺激，優先激活 A&#948;
                纖維（傳導銳痛的快速神經），觸發軸索反射中的抗炎路徑，促進局部血液循環並抑制疼痛信號傳遞。
              </p>
            </div>

            <h3 className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">
              適用場景
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "扭傷 / 急性腰痛",
                "膝痛 / 五十肩急性期",
                "運動傷害 / 肌肉拉傷",
                "關節發炎 / 腱鞘炎",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-emerald-100 text-emerald-700 text-xs px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* SOMARESON */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8 flex flex-col">
            <span className="self-start rounded-full bg-amber-100 text-amber-700 text-xs font-medium px-3 py-1 mb-4">
              深層舒緩放鬆
            </span>

            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/products/xwCndtckqJSUPiEd.jpg"
                alt="SOMARESON 軟針貼片"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h2 className="text-2xl font-serif text-amber-700 mb-1">
              SOMARESON
            </h2>
            <p className="text-sm text-amber-700/70 mb-6">軟針貼片</p>

            <ul className="space-y-3 text-sm mb-6">
              <li className="flex justify-between border-b border-amber-200/60 pb-2">
                <span className="text-stone-500">材質</span>
                <span className="font-medium text-stone-700">彈性橡膠樹脂</span>
              </li>
              <li className="flex justify-between border-b border-amber-200/60 pb-2">
                <span className="text-stone-500">微錐高度</span>
                <span className="font-medium text-stone-700">0.3mm (300&#956;m)</span>
              </li>
              <li className="flex justify-between border-b border-amber-200/60 pb-2">
                <span className="text-stone-500">微錐數量 L</span>
                <span className="font-medium text-stone-700">177 本</span>
              </li>
              <li className="flex justify-between border-b border-amber-200/60 pb-2">
                <span className="text-stone-500">微錐數量 S</span>
                <span className="font-medium text-stone-700">53 本</span>
              </li>
              <li className="flex justify-between border-b border-amber-200/60 pb-2">
                <span className="text-stone-500">作用纖維</span>
                <span className="font-medium text-stone-700">C 纖維 (鈍痛 / 慢性痛傳導)</span>
              </li>
            </ul>

            <div className="bg-white/60 rounded-xl p-4 mb-6">
              <h3 className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
                作用原理
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                彈性橡膠微錐提供柔和而持續的皮膚刺激，激活 C
                纖維（傳導鈍痛的慢速神經），促進脊髓中內源性類嗎啡物質（Opioid）釋放，達到深層鎮痛與肌肉放鬆效果。
              </p>
            </div>

            <h3 className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">
              適用場景
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "肩頸僵硬 / 慢性腰痛",
                "疲勞酸痛 / 五十肩慢性期",
                "筋膜緊繃 / 自律神經失調",
                "長期姿勢不良 / 辦公久坐",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-amber-100 text-amber-700 text-xs px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ─────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] text-center mb-10">
            硬針 vs 軟針 快速對照
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 bg-stone-100 rounded-tl-lg font-medium text-stone-500">
                    比較項目
                  </th>
                  <th className="text-left py-3 px-4 bg-emerald-100 text-emerald-700 font-medium">
                    SOMACEPT 硬針
                  </th>
                  <th className="text-left py-3 px-4 bg-amber-100 text-amber-700 font-medium rounded-tr-lg">
                    SOMARESON 軟針
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={
                      i % 2 === 0 ? "bg-white" : "bg-stone-50"
                    }
                  >
                    <td className="py-3 px-4 font-medium text-stone-600">
                      {row.label}
                    </td>
                    <td className="py-3 px-4 text-stone-700">
                      {row.somacept}
                    </td>
                    <td className="py-3 px-4 text-stone-700">
                      {row.somareson}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Axon Reflex Science ──────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-stone-400 text-sm tracking-[0.2em] uppercase text-center mb-3">
            Axon Reflex Science
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] text-center mb-10">
            軸索反射 —— 皮膚科學的核心
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {AXON_CARDS.map((card) => (
              <div
                key={card.step}
                className="rounded-2xl border border-stone-200 bg-white p-6"
              >
                <span className="inline-block text-xs font-bold text-[#4a5548] bg-[#4a5548]/10 rounded-full w-8 h-8 leading-8 text-center mb-4">
                  {card.step}
                </span>
                <h3 className="text-lg font-serif text-[#4a5548] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sports Science ───────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-400 text-sm tracking-[0.2em] uppercase text-center mb-3">
            Clinical Evidence
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] text-center mb-10">
            常葉大學隨機雙盲實驗
          </h2>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-10">
            <p className="text-sm text-stone-500 leading-relaxed mb-6">
              常葉大學健康科學部以隨機雙盲試驗驗證 SOMANIKS
              微針貼片的效果。受試者在不知道使用真品或安慰劑的情況下進行測試，結果如下：
            </p>

            <div className="grid gap-6 sm:grid-cols-3 mb-6">
              <div className="text-center">
                <p className="text-3xl font-serif text-[#4a5548] mb-1">
                  +15%
                </p>
                <p className="text-xs text-stone-500">
                  肌力提升幅度
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif text-[#4a5548] mb-1">
                  -23%
                </p>
                <p className="text-xs text-stone-500">
                  疼痛指數下降
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif text-[#4a5548] mb-1">
                  2x
                </p>
                <p className="text-xs text-stone-500">
                  血流量增加倍率
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              研究表明，微針貼片透過軸索反射機制顯著改善局部血液循環、降低疼痛評分，並提升肌肉運動表現。實驗結果達到統計學顯著差異
              (p&lt;0.05)。
            </p>
          </div>
        </div>
      </section>

      {/* ── 使用方式 ──────────────────────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-400 text-sm tracking-[0.2em] uppercase text-center mb-3">
            How to Use
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#4a5548] text-center mb-10">
            使用方式
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-stone-200 bg-white p-5"
              >
                <span className="inline-block text-xs font-bold text-white bg-[#4a5548] rounded-full w-7 h-7 leading-7 text-center mb-3">
                  {s.num}
                </span>
                <h3 className="font-serif text-[#4a5548] mb-1">
                  {s.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

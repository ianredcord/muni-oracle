import type { Metadata } from "next";
import Link from "next/link";
import { hexagrams } from "@/data/flow-system/hexagrams";
import { SectionTitle, BlueOrangeBadge, RelatedLinks } from "@/components/flow-system";
import HexagramCard from "./HexagramCard";

export const metadata: Metadata = {
  title: "周易卦象 × 漢藥處方 | 整合系統",
  robots: { index: false, follow: false },
};

/* ── Compass position data ── */
const compassPositions = [
  { label: "北（水）", names: "坎" },
  { label: "東（木）", names: "震、巽" },
  { label: "南（火）", names: "離" },
  { label: "中（土）", names: "坤" },
  { label: "西（金）", names: "兌" },
  { label: "中軸", names: "既濟" },
  { label: "調和", names: "損、革、泰" },
];

/* ── Meridian × Hexagram correspondence data ── */
const meridianRows = [
  {
    position: "中樞＋既濟",
    acuPair: "SP-4 + PC-6",
    vessel: "衝脈＋陰維",
    hexagram: "既濟＋咸",
    herbs: "六君子、柴胡桂枝乾薑、拱辰丹",
    somaniks: "tonify" as const,
    somaniksLabel: "橘補為主",
  },
  {
    position: "左升不足",
    acuPair: "SI-3 + UB-62",
    vessel: "督脈＋陽蹻",
    hexagram: "泰＋復",
    herbs: "補中益氣、桂枝加朮附",
    somaniks: "tonify" as const,
    somaniksLabel: "橘補",
  },
  {
    position: "左升過度",
    acuPair: "SJ-5 + GB-41",
    vessel: "陽維＋帶脈",
    hexagram: "損＋未濟",
    herbs: "加味逍遙、抑肝散、芍藥甘草",
    somaniks: "drain" as const,
    somaniksLabel: "藍洩",
  },
  {
    position: "右降不足",
    acuPair: "LU-7 + KI-6",
    vessel: "任脈＋陰蹻",
    hexagram: "否＋剝",
    herbs: "苓桂朮甘、麥門冬、六君子",
    somaniks: "tonify" as const,
    somaniksLabel: "橘補",
  },
  {
    position: "右降過度",
    acuPair: "SI-3 + UB-62",
    vessel: "督脈＋陽蹻",
    hexagram: "泰＋復",
    herbs: "補中益氣、桂枝加朮附、拱辰丹",
    somaniks: "tonify" as const,
    somaniksLabel: "橘補",
  },
];

/* ── Book comparison data ── */
const bookComparison = [
  {
    aspect: "核心方法",
    craydon: "穴位敷貼花精",
    pablo: "中醫辨證配花精",
    dietmar: "經絡軌跡上的花精",
  },
  {
    aspect: "理論深度",
    craydon: "實用操作型",
    pablo: "中醫理論融合型",
    dietmar: "經絡地圖型",
  },
  {
    aspect: "最適合對象",
    craydon: "花精師想加入穴位",
    pablo: "中醫師想融合花精",
    dietmar: "研究經絡與花精對應者",
  },
  {
    aspect: "與本整合框架關聯",
    craydon: "提供穴位外敷實作",
    pablo: "提供辨證邏輯",
    dietmar: "提供經絡軌跡驗證",
  },
];

export default function HexagramsPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Internal badge */}
      <div className="fixed top-4 right-4 z-50 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
        內部測試版
      </div>

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F9F7F2] via-white to-[#f0ebe0] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Link
            href="/internal/flow-system"
            className="inline-flex items-center gap-1.5 text-sm text-[#4a5548]/50 hover:text-[#4a5548]/70 transition-colors mb-8"
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
          <h1 className="font-serif text-4xl md:text-5xl text-[#4a5548] tracking-tight leading-tight">
            周易卦象 × 漢藥處方
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#4a5548]/60">
            一氣周流藥方與卦象的對應關係
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-base md:text-lg leading-relaxed text-[#4a5548]/70 text-center">
            黃元御以《周易》解讀氣機升降，每個卦象對應特定的五行方位與氣機作用。本頁整理十個核心卦象與其對應的漢藥處方，展現一氣周流的治療邏輯。
          </p>
        </div>
      </section>

      {/* Flow Position Context */}
      <section className="py-12 md:py-16 bg-white/40">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle
            title="五行方位 × 卦象"
            subtitle="一氣周流中的卦象分佈"
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {compassPositions.map((pos) => (
              <div
                key={pos.label}
                className="rounded-xl border border-stone-200/60 bg-white p-4 text-center shadow-sm"
              >
                <p className="text-xs font-medium text-[#4a5548]/50 uppercase tracking-wider">
                  {pos.label}
                </p>
                <p className="mt-2 font-serif text-lg text-[#4a5548]">
                  {pos.names}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hexagram Cards */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="十卦 × 漢藥處方"
            subtitle="點擊卡片展開完整說明"
          />
          <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {hexagrams.map((h) => (
              <HexagramCard key={h.slug} hexagram={h} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-16 bg-white/40">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="卦象 × 藥方 一覽表" />
          <div className="mt-10 overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[540px] text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-3 px-4 text-left font-medium text-[#4a5548]">
                    卦象
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-[#4a5548]">
                    五行方位
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-[#4a5548]">
                    對應藥方
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-[#4a5548]">
                    氣機作用
                  </th>
                </tr>
              </thead>
              <tbody>
                {hexagrams.map((h) => (
                  <tr
                    key={h.slug}
                    className="border-b border-stone-100 hover:bg-stone-50/50 transition-colors"
                  >
                    <td className="py-3 px-4 text-[#4a5548]">
                      <span className="font-serif mr-1.5">{h.symbol}</span>
                      {h.name}
                    </td>
                    <td className="py-3 px-4 text-[#4a5548]/70">
                      {h.element}
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-block rounded-lg bg-amber-50 border border-amber-200/60 px-2 py-0.5 text-xs font-medium text-amber-800">
                        {h.herbalFormula}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[#4a5548]/70">
                      {h.qiMechanism}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Meridian × Hexagram Correspondence Table */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="一氣周流 × 奇經 × 卦象 對應表"
            subtitle="功能位置、穴對、奇經、卦象與核心漢藥的完整對應"
          />
          <div className="mt-10 overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-3 px-3 text-left font-medium text-[#4a5548]">
                    功能位置
                  </th>
                  <th className="py-3 px-3 text-left font-medium text-[#4a5548]">
                    穴對
                  </th>
                  <th className="py-3 px-3 text-left font-medium text-[#4a5548]">
                    奇經
                  </th>
                  <th className="py-3 px-3 text-left font-medium text-[#4a5548]">
                    卦象
                  </th>
                  <th className="py-3 px-3 text-left font-medium text-[#4a5548]">
                    核心漢藥
                  </th>
                  <th className="py-3 px-3 text-left font-medium text-[#4a5548]">
                    Somaniks
                  </th>
                </tr>
              </thead>
              <tbody>
                {meridianRows.map((row) => (
                  <tr
                    key={row.position}
                    className="border-b border-stone-100 hover:bg-stone-50/50 transition-colors"
                  >
                    <td className="py-3 px-3 font-medium text-[#4a5548]">
                      {row.position}
                    </td>
                    <td className="py-3 px-3 text-[#4a5548]/70 font-mono text-xs">
                      {row.acuPair}
                    </td>
                    <td className="py-3 px-3 text-[#4a5548]/70">
                      {row.vessel}
                    </td>
                    <td className="py-3 px-3 font-serif text-[#4a5548]">
                      {row.hexagram}
                    </td>
                    <td className="py-3 px-3 text-[#4a5548]/70">
                      {row.herbs}
                    </td>
                    <td className="py-3 px-3">
                      <BlueOrangeBadge
                        type={row.somaniks}
                        label={row.somaniksLabel}
                        size="sm"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Book Comparison */}
      <section className="py-12 md:py-16 bg-white/40">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="三書比較"
            subtitle="三本花精與經絡相關書籍的比較"
          />
          <div className="mt-10 overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-3 px-4 text-left font-medium text-[#4a5548]">
                    面向
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-[#4a5548]">
                    Craydon &amp; Bellows
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-[#4a5548]">
                    Pablo Noriega
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-[#4a5548]">
                    Dietmar Kr&auml;mer
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookComparison.map((row) => (
                  <tr
                    key={row.aspect}
                    className="border-b border-stone-100 hover:bg-stone-50/50 transition-colors"
                  >
                    <td className="py-3 px-4 font-medium text-[#4a5548]">
                      {row.aspect}
                    </td>
                    <td className="py-3 px-4 text-[#4a5548]/70">
                      {row.craydon}
                    </td>
                    <td className="py-3 px-4 text-[#4a5548]/70">
                      {row.pablo}
                    </td>
                    <td className="py-3 px-4 text-[#4a5548]/70">
                      {row.dietmar}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <RelatedLinks
            title="延伸閱讀"
            links={[
              {
                label: "系統首頁",
                href: "/internal/flow-system",
                description: "花精 × 一氣周流 × 奇經八脈 整合系統",
              },
              {
                label: "八穴總覽",
                href: "/internal/flow-system/acupoints",
                description: "奇經八脈交會八穴的完整資料",
              },
              {
                label: "臨床情境",
                href: "/internal/flow-system/emotions",
                description: "七大情緒族群與臨床應用",
              },
              {
                label: "Farrell 五層系統",
                href: "/internal/flow-system/farrell",
                description: "Yvonne Farrell 經絡層次理論",
              },
            ]}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <p className="text-xs text-[#4a5548]/40">
          內部測試版 — 請勿公開分享
        </p>
      </footer>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import FrequencyBadge from "@/components/FrequencyBadge";

export const metadata: Metadata = {
  title: "MUNI × 人蔘療癒 | 韓國頂級紅參 × 共振頻率",
  description:
    "MUNI Frequency Resonance™ 與韓國頂級人蔘原料結合，透過六層共振技術賦予每一款產品最佳能量狀態。沉香黃帝丹、紅參石榴膠原蛋白果凍棒、牛膝紅參切片。",
};

const PRODUCTS = [
  {
    id: "huangdi",
    name: "高級沉香黃帝丹",
    nameEn: "Premium Agarwood Emperor Pill",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/gysUvcCCEnjFDBeo.png",
    tagline: "沉香 × 鹿茸 × 山參的極致相遇",
    description:
      "以珍貴沉香為核心，結合鹿茸與山參的滋養精華。沉香自古被視為「眾香之首」，在東方養生傳統中具有安神定志、溫中散寒的珍貴價值。每一顆黃帝丹都經過 MUNI Frequency Resonance™ 六層共振校準，讓珍稀原料的能量以最和諧的頻率釋放。",
    ingredients: ["沉香", "鹿茸", "山參", "當歸", "熟地黃"],
    energy: "溫補元氣・安神定志",
    resonance: "聖杯六號 — 護心",
    color: "from-amber-900/20 to-yellow-900/20",
    border: "border-amber-700/30",
    accent: "text-amber-400",
    badge: "bg-amber-900/50 text-amber-300",
  },
  {
    id: "jelly",
    name: "紅參石榴膠原蛋白果凍棒",
    nameEn: "Red Ginseng Pomegranate Collagen Jelly",
    subtitle: "14 包入",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/AQvTbZBKXGbsevVA.jpg",
    tagline: "不加一滴水，濃郁的石榴味",
    description:
      "將韓國六年根紅參的滋養力量，與石榴的抗氧化精華和魚膠原蛋白完美融合。不加一滴水的濃縮製程，保留了每一份營養的完整性。果凍棒的便攜形態，讓日常養護變得輕鬆愉悅。經 MUNI Frequency Resonance™ 調頻後，紅參皂苷的生物活性頻率與人體細胞產生更深層的共振。",
    ingredients: ["六年根紅參", "石榴濃縮液", "魚膠原蛋白", "維生素 C"],
    energy: "美容養顏・活力煥發",
    resonance: "聖杯三號 — 開心",
    color: "from-red-900/20 to-rose-900/20",
    border: "border-red-700/30",
    accent: "text-red-400",
    badge: "bg-red-900/50 text-red-300",
  },
  {
    id: "niuxi",
    name: "牛膝紅參切片",
    nameEn: "Achyranthes Red Ginseng Slices",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/hFZoeLbMClsLXvBn.png",
    tagline: "在保留營養成分的同時，保持獨特的味道和營養",
    description:
      "精選韓國優質紅參，搭配牛膝的強筋健骨功效。每一片切片都保留了紅參完整的營養成分與獨特風味。牛膝在傳統本草中被譽為「引藥下行」的要藥，與紅參搭配能將滋養能量引導至下肢與腎經。MUNI Frequency Resonance™ 技術確保每一片紅參切片的能量場達到最佳共振狀態。",
    ingredients: ["韓國紅參", "牛膝", "蜂蜜"],
    energy: "強筋健骨・溫養下元",
    resonance: "聖杯二號 — 定心",
    color: "from-orange-900/20 to-red-900/20",
    border: "border-orange-700/30",
    accent: "text-orange-400",
    badge: "bg-orange-900/50 text-orange-300",
  },
];

const ENERGY_FACTORS = [
  {
    icon: "🌿",
    title: "韓國六年根紅參",
    desc: "只選用生長六年以上的紅參，皂苷含量達到最高峰值，是大自然賦予的珍貴滋養之源。",
  },
  {
    icon: "🔬",
    title: "MUNI 六層共振校準",
    desc: "每一款產品都經過 Frequency Resonance™ 六層共振技術處理，讓原料的能量頻率與人體達到最佳諧振。",
  },
  {
    icon: "🏔️",
    title: "忠清南道產地直送",
    desc: "原料來自韓國忠清南道的優質產區，得天獨厚的氣候與土壤孕育出最高品質的人蔘。",
  },
  {
    icon: "⚗️",
    title: "傳統炮製工藝",
    desc: "遵循東方本草的傳統炮製智慧，以現代科技精確控制每一道工序，保留原料的完整活性。",
  },
  {
    icon: "🍯",
    title: "天然輔料搭配",
    desc: "以蜂蜜、石榴、沉香等天然輔料增效，每一種搭配都經過精心設計，讓功效相互增益。",
  },
  {
    icon: "✨",
    title: "能量品質認證",
    desc: "所有產品通過 MUNI 能量品質標準，確保從原料到成品的每一個環節都維持最高能量水準。",
  },
];

export default function GinsengPage() {
  return (
    <main className="min-h-screen bg-[#1a0f08] text-white">
      {/* Custom Dark Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a0f08]/90 backdrop-blur-md border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-serif tracking-widest text-amber-100">
            MUNI
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/systems"
              className="text-sm text-amber-200/70 hover:text-amber-100 transition-colors"
            >
              療癒系統
            </Link>
            <Link
              href="https://ai.munione.co"
              className="text-sm px-4 py-2 rounded-full bg-amber-800/60 text-amber-100 hover:bg-amber-700/60 transition-colors flex items-center gap-1"
            >
              <span>♡</span> MUNI 療癒顧問
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/30 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-amber-500/80 text-sm tracking-[0.3em] uppercase mb-6">
            MUNI × Korean Red Ginseng
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-amber-50 mb-6 leading-tight">
            人蔘療癒
          </h1>
          <p className="text-lg md:text-xl text-amber-200/60 font-light max-w-2xl mx-auto leading-relaxed">
            千年本草智慧，遇見現代共振科學。
            <br className="hidden md:block" />
            MUNI Frequency Resonance™ 讓每一份珍貴原料，
            <br className="hidden md:block" />
            以最和諧的頻率與你的身體對話。
          </p>

          {/* Decorative line */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-amber-700/40" />
            <div className="w-2 h-2 rounded-full bg-amber-600/60" />
            <div className="w-12 h-px bg-amber-700/40" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-500/70 text-xs tracking-[0.2em] uppercase mb-4">
                Philosophy
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-amber-50 mb-6 leading-relaxed">
                好的材料，
                <br />
                值得最好的能量狀態
              </h2>
              <p className="text-amber-200/50 leading-relaxed mb-6">
                韓國人蔘被譽為「百草之王」，其珍貴的人蔘皂苷（Ginsenosides）具有調節免疫、抗疲勞、促進代謝等多重功效。然而，原料的品質只是起點——如何讓這些活性成分以最佳的能量狀態被人體吸收，才是關鍵。
              </p>
              <p className="text-amber-200/50 leading-relaxed">
                MUNI 透過 Frequency Resonance™ 六層共振技術，為每一款人蔘產品進行能量校準。從基頻設定到意識維度的展開，讓人蔘皂苷的分子振動頻率與人體細胞達到最深層的諧振，實現「材料 × 頻率」的雙重療癒。
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-800/20 to-transparent rounded-2xl" />
              <div className="relative p-8 border border-amber-800/20 rounded-2xl bg-amber-950/20 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center text-amber-400 shrink-0">
                      01
                    </div>
                    <div>
                      <h3 className="text-amber-100 font-medium mb-1">嚴選原料</h3>
                      <p className="text-amber-200/40 text-sm">
                        韓國六年根紅參、珍稀沉香、天然鹿茸
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center text-amber-400 shrink-0">
                      02
                    </div>
                    <div>
                      <h3 className="text-amber-100 font-medium mb-1">傳統炮製</h3>
                      <p className="text-amber-200/40 text-sm">
                        遵循本草智慧，現代科技精確控制
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center text-amber-400 shrink-0">
                      03
                    </div>
                    <div>
                      <h3 className="text-amber-100 font-medium mb-1">共振校準</h3>
                      <p className="text-amber-200/40 text-sm">
                        MUNI Frequency Resonance™ 六層調頻
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-900/40 flex items-center justify-center text-amber-400 shrink-0">
                      04
                    </div>
                    <div>
                      <h3 className="text-amber-100 font-medium mb-1">能量釋放</h3>
                      <p className="text-amber-200/40 text-sm">
                        以最佳頻率與你的身體深層對話
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Products
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-50 mb-4">
              三款嚴選人蔘製品
            </h2>
            <p className="text-amber-200/50 max-w-xl mx-auto">
              每一款都經過 MUNI Frequency Resonance™ 六層共振校準，
              讓珍貴原料以最和諧的能量狀態呈現。
            </p>
          </div>

          <div className="space-y-16">
            {PRODUCTS.map((product, idx) => (
              <div
                key={product.id}
                className={`relative rounded-2xl border ${product.border} bg-gradient-to-br ${product.color} overflow-hidden`}
              >
                <div
                  className={`grid md:grid-cols-2 gap-8 p-8 md:p-12 ${
                    idx % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`flex items-center justify-center ${
                      idx % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center ${
                      idx % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`text-xs px-3 py-1 rounded-full ${product.badge}`}>
                        {product.resonance}
                      </span>
                      {product.subtitle && (
                        <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-amber-200/60">
                          {product.subtitle}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-amber-50 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-amber-200/30 tracking-wider mb-4">
                      {product.nameEn}
                    </p>

                    <p className={`text-sm ${product.accent} mb-4 italic`}>
                      「{product.tagline}」
                    </p>

                    <p className="text-amber-200/50 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Ingredients */}
                    <div className="mb-4">
                      <p className="text-xs text-amber-200/30 mb-2">核心成分</p>
                      <div className="flex flex-wrap gap-2">
                        {product.ingredients.map((ing: string) => (
                          <span
                            key={ing}
                            className="text-xs px-2 py-1 rounded bg-white/5 text-amber-200/50"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Energy */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-amber-200/30">能量屬性</span>
                      <span className={`text-sm ${product.accent}`}>{product.energy}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Factors Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Energy Factors
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-50 mb-4">
              六大正面能量因素
            </h2>
            <p className="text-amber-200/50 max-w-xl mx-auto">
              從原料產地到共振技術，每一個環節都是能量品質的保證。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENERGY_FACTORS.map((factor, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-amber-800/15 bg-amber-950/10 hover:bg-amber-950/20 transition-colors group"
              >
                <div className="text-3xl mb-4">{factor.icon}</div>
                <h3 className="text-amber-100 font-medium mb-2 group-hover:text-amber-50 transition-colors">
                  {factor.title}
                </h3>
                <p className="text-amber-200/40 text-sm leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resonance Matrix */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Resonance Matrix
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-50 mb-4">
              產品 × 聖杯精油 共振搭配
            </h2>
            <p className="text-amber-200/50 max-w-xl mx-auto">
              每一款人蔘製品都有對應的 MUNI 聖杯精油，
              讓內服與外用的頻率同時共振。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-amber-800/20">
                  <th className="text-left py-4 px-4 text-amber-200/40 text-xs tracking-wider uppercase">
                    產品
                  </th>
                  <th className="text-left py-4 px-4 text-amber-200/40 text-xs tracking-wider uppercase">
                    聖杯精油
                  </th>
                  <th className="text-left py-4 px-4 text-amber-200/40 text-xs tracking-wider uppercase">
                    共振維度
                  </th>
                  <th className="text-left py-4 px-4 text-amber-200/40 text-xs tracking-wider uppercase">
                    建議時機
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-amber-800/10">
                  <td className="py-4 px-4 text-amber-100 text-sm">沉香黃帝丹</td>
                  <td className="py-4 px-4 text-amber-400 text-sm">聖杯六號 — 護心</td>
                  <td className="py-4 px-4 text-amber-200/50 text-sm">
                    溫補元氣・安神定志
                  </td>
                  <td className="py-4 px-4 text-amber-200/40 text-sm">
                    需要深層滋養與保護的時刻
                  </td>
                </tr>
                <tr className="border-b border-amber-800/10">
                  <td className="py-4 px-4 text-amber-100 text-sm">紅參石榴果凍棒</td>
                  <td className="py-4 px-4 text-red-400 text-sm">聖杯三號 — 開心</td>
                  <td className="py-4 px-4 text-amber-200/50 text-sm">
                    美容養顏・活力煥發
                  </td>
                  <td className="py-4 px-4 text-amber-200/40 text-sm">
                    想要由內而外綻放光彩
                  </td>
                </tr>
                <tr className="border-b border-amber-800/10">
                  <td className="py-4 px-4 text-amber-100 text-sm">牛膝紅參切片</td>
                  <td className="py-4 px-4 text-orange-400 text-sm">聖杯二號 — 定心</td>
                  <td className="py-4 px-4 text-amber-200/50 text-sm">
                    強筋健骨・溫養下元
                  </td>
                  <td className="py-4 px-4 text-amber-200/40 text-sm">
                    需要穩定扎根的力量
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/15 to-[#1a0f08]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-amber-50 mb-6">
            想知道哪款人蔘製品最適合你此刻的狀態？
          </h2>
          <p className="text-amber-200/50 mb-10 leading-relaxed">
            告訴 MUNI 療癒顧問你現在的身體感受與需求，
            <br className="hidden md:block" />
            AI 會為你推薦最適合的人蔘產品 × 精油搭配方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://ai.munione.co"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-700 to-amber-600 text-white font-medium hover:from-amber-600 hover:to-amber-500 transition-all shadow-lg shadow-amber-900/30"
            >
              <span>♡</span> 問問 MUNI 療癒顧問
            </Link>
            <Link
              href="/systems"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-amber-700/30 text-amber-200/70 hover:text-amber-100 hover:border-amber-600/50 transition-all"
            >
              探索更多 MUNI 療癒系統 →
            </Link>
          </div>
        </div>
      </section>

      {/* Frequency Badge */}
      <FrequencyBadge variant="dark" full />

      {/* Footer */}
      <footer className="py-12 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl font-serif text-amber-100 mb-2">MUNI 牟尼</p>
          <p className="text-amber-200/30 text-sm">在寂靜中，承接你的答案。</p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-amber-200/20">
            <Link href="/" className="hover:text-amber-200/50 transition-colors">
              首頁
            </Link>
            <Link href="/flowers" className="hover:text-amber-200/50 transition-colors">
              花精百科
            </Link>
            <Link href="/essential-oil" className="hover:text-amber-200/50 transition-colors">
              聖杯精油
            </Link>
            <Link href="/wine" className="hover:text-amber-200/50 transition-colors">
              葡萄酒療癒
            </Link>
            <Link href="/frequency" className="hover:text-amber-200/50 transition-colors">
              獨家技術
            </Link>
            <Link href="/systems" className="hover:text-amber-200/50 transition-colors">
              療癒系統
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

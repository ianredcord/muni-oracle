import type { Metadata } from "next";
import Link from "next/link";

import FrequencyBadge from "@/components/FrequencyBadge";

export const metadata: Metadata = {
  title: "MUNI × Fonte di Foiano | 義大利早摘初榨橄欖油 × 頻率共振",
  description:
    "MUNI 攜手義大利 Fonte di Foiano 莊園，以 Bolgheri 產區百年橄欖樹的早摘初榨橄欖油，結合 Frequency Resonance™ 技術，將地中海大地的生命能量帶入你的日常療癒儀式。Flos Olei 99/100 全球最高評分。",
};

const PRODUCTS = [
  {
    id: "grand-cru",
    name: "Grand Cru",
    nameZh: "特級珍藏",
    tagline: "莊園的靈魂之作",
    description:
      "Grand Cru 是 Fonte di Foiano 的旗艦之作，以莊園中最古老的橄欖樹果實精心釀製。多品種混釀——Leccino、Frantoio、Moraiolo 與 Maurino——在十月初的清晨手工採摘，於 4 小時內完成冷萃取。深邃的翠綠色澤中蘊含著朝鮮薊、番茄與新鮮杏仁的層次香氣，苦味與辛辣鮮明而優雅。",
    aroma: "朝鮮薊、新鮮番茄、杏仁、芳香草本",
    taste: "結構飽滿，苦味與辛辣鮮明優雅，帶有黑胡椒與綠色杏仁的餘韻",
    pairing: "牛排塔塔、松露燉飯、硬質熟成起司、烤蔬菜",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/lETvbLHthrnfMBOS.jpg",
    color: "from-emerald-900/25 to-green-900/20",
    border: "border-emerald-700/30",
    accent: "text-emerald-400",
    badge: "bg-emerald-900/50 text-emerald-300",
    highlight: true,
  },
  {
    id: "1979",
    name: "1979",
    nameZh: "創始年份",
    tagline: "以創始年命名，向土地致敬",
    description:
      "以莊園創立年份命名的單一品種橄欖油，100% Leccio del Corno 品種。這款油承載著家族三代對這片土地的情感——豐富圓潤的口感中，帶有朝鮮薊、菊苣和萵苣的植物暗示，薄荷與迷迭香的香脂氣息在鼻腔中緩緩展開。",
    aroma: "朝鮮薊、菊苣、萵苣，薄荷與迷迭香的香脂氣息",
    taste: "優雅複雜，帶有朝鮮薊、青草和番茄葉的綠色調，苦味與辛辣鮮明持久",
    pairing: "章魚前菜、牛肝菌肉薄片、焗烤番茄、烤紅肉",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/PxYNKHKkJjXQpdZb.jpg",
    color: "from-amber-900/20 to-yellow-900/20",
    border: "border-amber-700/30",
    accent: "text-amber-400",
    badge: "bg-amber-900/50 text-amber-300",
    highlight: false,
  },
  {
    id: "riflessi",
    name: "Riflessi",
    nameZh: "光影",
    tagline: "光影之間，溫柔的橄欖之語",
    description:
      "Riflessi 是一款輕果香特級初榨橄欖油，100% Maurino 品種，十月採收。過濾後呈現迷人的金黃色帶淡綠色調。優雅圓潤的開場，帶有番茄與芳香草本的氣息，薄荷、羅勒和迷迭香的香脂調在口中溫柔綻放。苦味與辛辣鮮明平衡，以甜美收尾。",
    aroma: "番茄、芳香草本、薄荷、羅勒、迷迭香",
    taste: "圓潤飽滿，萵苣、黑胡椒與杏仁的暗示，甜美收尾",
    pairing: "豆子前菜、朝鮮薊燉飯、烤兔肉、山羊起司",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/qtxchiSClEHHDneY.jpg",
    color: "from-lime-900/20 to-emerald-900/15",
    border: "border-lime-700/25",
    accent: "text-lime-400",
    badge: "bg-lime-900/50 text-lime-300",
    highlight: false,
  },
  {
    id: "toscano-igp",
    name: "Toscano PGI Bolgheri",
    nameZh: "托斯卡尼 PGI 博格利",
    tagline: "Bolgheri 產區的風土印記",
    description:
      "擁有 PGI（地理標誌保護）認證的托斯卡尼橄欖油，代表著 Bolgheri 產區最純正的風土表達。這款油融合了莊園多個品種的精華，在嚴格的產區規範下釀製，每一滴都是 Bolgheri 丘陵、海風與陽光的結晶。",
    aroma: "青草、番茄葉、地中海草本",
    taste: "均衡和諧，帶有溫暖的胡椒感與清新的草本餘韻",
    pairing: "義大利麵、烤魚、新鮮沙拉、麵包佐食",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/PxYNKHKkJjXQpdZb.jpg",
    color: "from-teal-900/20 to-green-900/15",
    border: "border-teal-700/25",
    accent: "text-teal-400",
    badge: "bg-teal-900/50 text-teal-300",
    highlight: false,
  },
];

const AWARDS = [
  { name: "Flos Olei 2025", score: "99/100", desc: "全球橄欖油評鑑最高分之一" },
  {
    name: "Bibenda 2024",
    score: "5 Gocce",
    desc: "Grand Cru、Riflessi、Toscano IGP 三款同獲最高評價",
  },
  {
    name: "Gambero Rosso",
    score: "3 Foglie + Stella",
    desc: "義大利美食界最高榮譽——三葉獎與星級認證",
  },
  {
    name: "Leone d'Oro",
    score: "1° Classificato",
    desc: "Toscano IGP Bolgheri 榮獲 DOP/IGP 類別第一名",
  },
  {
    name: "Slow Food",
    score: "Grande Olio",
    desc: "慢食運動認證的偉大橄欖油",
  },
  {
    name: "AIPO d'Argento",
    score: "Goccia d'Oro",
    desc: "金滴獎——義大利橄欖油品質的最高肯定",
  },
];

const ESTATE_FEATURES = [
  {
    icon: "🫒",
    title: "早摘初榨",
    desc: "橄欖在最佳時機提前採收（Early Harvest），此時多酚含量最高，營養最為豐富。從採摘到壓榨不超過 4 小時，鎖住每一滴生命力。",
  },
  {
    icon: "❄️",
    title: "冷萃取 × 惰性氣體",
    desc: "全程低溫冷萃取，搭配惰性氣體保護裝瓶，最大化保留橄欖油中的活性多酚、維生素 E 與抗氧化物質。",
  },
  {
    icon: "🌳",
    title: "百年橄欖樹",
    desc: "莊園中的橄欖樹歷經數十年甚至百年生長，深層根系連結大地能量，果實蘊含更豐富的礦物質與風土特性。",
  },
  {
    icon: "🏔️",
    title: "Bolgheri 頂級產區",
    desc: "位於托斯卡尼 Bolgheri 產區的丘陵地帶，地中海海風與托斯卡尼陽光交織，賦予橄欖獨特的風味層次。",
  },
  {
    icon: "👨‍👩‍👧",
    title: "家族三代傳承",
    desc: "自 1979 年創立以來，Fonte di Foiano 家族三代人以對土地的愛與感恩，守護著 30 公頃橄欖園中的 10,000 棵橄欖樹。",
  },
  {
    icon: "✨",
    title: "MUNI 頻率共振",
    desc: "每一瓶橄欖油都經過 MUNI Frequency Resonance™ 技術調頻，讓橄欖油中的活性分子以最和諧的頻率與你的身體共振。",
  },
];

export default function OliveOilPage() {
  return (
    <main className="min-h-screen bg-[#0f1a0e] text-white">
      {/* Custom Dark Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f1a0e]/90 backdrop-blur-md border-b border-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-serif tracking-widest text-emerald-100"
          >
            MUNI
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/systems"
              className="text-sm text-emerald-200/70 hover:text-emerald-100 transition-colors"
            >
              療癒系統
            </Link>
            <Link
              href="https://ai.munione.co"
              className="text-sm px-4 py-2 rounded-full bg-emerald-800/60 text-emerald-100 hover:bg-emerald-700/60 transition-colors flex items-center gap-1"
            >
              <span>♡</span> MUNI 療癒顧問
            </Link>
          </nav>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-900/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-lime-900/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-700/30 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-emerald-500/80 text-sm tracking-[0.3em] uppercase mb-6">
            MUNI × Fonte di Foiano
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-emerald-50 mb-6 leading-tight">
            義大利早摘初榨橄欖油
          </h1>
          <p className="text-lg md:text-xl text-emerald-200/60 font-light max-w-2xl mx-auto leading-relaxed">
            來自托斯卡尼 Bolgheri 的百年莊園，
            <br className="hidden md:block" />
            以早摘初榨鎖住大地最鮮活的生命能量。
            <br className="hidden md:block" />
            每一滴，都是陽光、海風與土地的頻率共振。
          </p>

          {/* Decorative line */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-emerald-700/40" />
            <div className="w-2 h-2 rounded-full bg-emerald-600/60" />
            <div className="w-12 h-px bg-emerald-700/40" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ESTATE STORY SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-emerald-500/70 text-xs tracking-[0.2em] uppercase mb-4">
                The Estate
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-emerald-50 mb-6 leading-relaxed">
                Fonte di Foiano
                <br />
                <span className="text-emerald-300/70 text-xl">
                  自 1979 年，守護每一棵橄欖樹
                </span>
              </h2>
              <p className="text-emerald-200/50 leading-relaxed mb-6">
                Fonte di Foiano
                坐落於托斯卡尼最負盛名的橄欖油產區——Bolgheri，距離第勒尼安海僅
                10
                分鐘車程。地中海的溫暖海風與托斯卡尼丘陵的礦物土壤，孕育出世界上最優質的橄欖。
              </p>
              <p className="text-emerald-200/50 leading-relaxed mb-6">
                莊園佔地 30
                公頃，種植超過一萬棵橄欖樹，涵蓋
                Leccino、Frantoio、Moraiolo、Maurino 與 Leccio del Corno
                等經典品種。家族三代人以對土地的深厚情感，堅持從採摘到裝瓶全程在莊園內完成，確保每一滴橄欖油都保留了最完整的風土表達。
              </p>
              <p className="text-emerald-200/50 leading-relaxed">
                如今，Fonte di Foiano 的橄欖油出口至全球超過 30
                個國家，並連續多年獲得 Flos Olei 99/100
                的頂級評分——這是全球橄欖油評鑑中的最高殊榮之一。
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-emerald-800/20">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/HYCNrqTGpYkndwZX.jpg"
                  alt="Fonte di Foiano 莊園橄欖園"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="mt-4 rounded-2xl overflow-hidden border border-emerald-800/20">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/avGHGdLXmsXBeOEf.jpg"
                  alt="Bolgheri 橄欖樹與夕陽"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY EARLY HARVEST SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-emerald-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Early Harvest
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-50 mb-4">
              為什麼選擇「早摘」？
            </h2>
            <p className="text-emerald-200/50 max-w-2xl mx-auto leading-relaxed">
              一般橄欖油在橄欖完全成熟後才採收，而「早摘」（Early
              Harvest）是在橄欖尚未完全成熟、多酚含量達到最高峰值時提前採摘。這意味著更少的油量產出，但換來的是遠超一般橄欖油的營養密度與風味深度。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-emerald-800/15 bg-emerald-950/10 text-center">
              <div className="text-4xl font-serif text-emerald-400 mb-3">
                3×
              </div>
              <h3 className="text-emerald-100 font-medium mb-2">
                多酚含量
              </h3>
              <p className="text-emerald-200/40 text-sm leading-relaxed">
                早摘橄欖油的多酚含量是一般橄欖油的 2-3
                倍，多酚是強效抗氧化物質，有助於保護細胞免受自由基傷害。
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-emerald-800/15 bg-emerald-950/10 text-center">
              <div className="text-4xl font-serif text-emerald-400 mb-3">
                4h
              </div>
              <h3 className="text-emerald-100 font-medium mb-2">
                採摘到壓榨
              </h3>
              <p className="text-emerald-200/40 text-sm leading-relaxed">
                從橄欖採摘到冷萃取壓榨不超過 4
                小時，最大限度保留橄欖果實中的活性營養成分與新鮮風味。
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-emerald-800/15 bg-emerald-950/10 text-center">
              <div className="text-4xl font-serif text-emerald-400 mb-3">
                27°C
              </div>
              <h3 className="text-emerald-100 font-medium mb-2">
                冷萃取溫度
              </h3>
              <p className="text-emerald-200/40 text-sm leading-relaxed">
                全程控制在 27°C
                以下的冷萃取工藝，搭配惰性氣體保護裝瓶，確保橄欖油中的維生素
                E 與活性多酚不被氧化破壞。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRODUCTS SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-emerald-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Products
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-50 mb-4">
              嚴選橄欖油系列
            </h2>
            <p className="text-emerald-200/50 max-w-xl mx-auto">
              每一款都經過 MUNI Frequency Resonance™ 調頻，
              讓橄欖油中的活性分子以最和諧的頻率與你的身體對話。
            </p>
          </div>

          <div className="space-y-16">
            {PRODUCTS.map((product, idx) => (
              <div
                key={product.id}
                className={`relative rounded-2xl border ${product.border} bg-gradient-to-br ${product.color} overflow-hidden`}
              >
                {product.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      旗艦之作
                    </span>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Image */}
                  <div
                    className={`flex items-center justify-center ${
                      idx % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <div className="relative w-48 h-64 md:w-56 md:h-80">
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
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${product.badge}`}
                      >
                        {product.resonance}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-emerald-50 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-emerald-200/30 tracking-wider mb-4">
                      {product.nameZh}
                    </p>

                    <p className={`text-sm ${product.accent} mb-4 italic`}>
                      「{product.tagline}」
                    </p>

                    <p className="text-emerald-200/50 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Aroma & Taste */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-emerald-200/30 mb-1">
                          香氣
                        </p>
                        <p className="text-xs text-emerald-200/50">
                          {product.aroma}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-emerald-200/30 mb-1">
                          口感
                        </p>
                        <p className="text-xs text-emerald-200/50">
                          {product.taste}
                        </p>
                      </div>
                    </div>

                    {/* Pairing */}
                    <div>
                      <p className="text-xs text-emerald-200/30 mb-1">
                        推薦搭配
                      </p>
                      <p className={`text-sm ${product.accent}`}>
                        {product.pairing}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          AWARDS SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-emerald-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Awards
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-50 mb-4">
              世界級榮譽
            </h2>
            <p className="text-emerald-200/50 max-w-xl mx-auto">
              超過十年持續獲獎，全球最權威的橄欖油評鑑機構一致肯定。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWARDS.map((award, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-emerald-800/15 bg-emerald-950/10 hover:bg-emerald-950/20 transition-colors group"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-2xl font-serif text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {award.score}
                  </span>
                </div>
                <h3 className="text-emerald-100 font-medium mb-2">
                  {award.name}
                </h3>
                <p className="text-emerald-200/40 text-sm leading-relaxed">
                  {award.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ESTATE FEATURES / ENERGY FACTORS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-emerald-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Energy Factors
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-50 mb-4">
              六大正面能量因素
            </h2>
            <p className="text-emerald-200/50 max-w-xl mx-auto">
              從橄欖園到你的餐桌，每一個環節都是能量品質的保證。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ESTATE_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-emerald-800/15 bg-emerald-950/10 hover:bg-emerald-950/20 transition-colors group"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-emerald-100 font-medium mb-2 group-hover:text-emerald-50 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-emerald-200/40 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HARVEST GALLERY
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-emerald-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Harvest
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-50 mb-4">
              採收的季節
            </h2>
            <p className="text-emerald-200/50 max-w-xl mx-auto">
              每年十月，Bolgheri 的橄欖園迎來最重要的時刻——
              手工採摘，在清晨露水未乾時開始，只為捕捉橄欖最鮮活的生命力。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden border border-emerald-800/20 md:row-span-2">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/CoEbffWSmbdlxZKC.jpeg"
                alt="橄欖採收"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-emerald-800/20">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/LmQTTPntJAuWGGPk.jpg"
                alt="Bolgheri 橄欖園風景"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-emerald-800/20">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/dVIjuYTGZTUkeDOu.jpg"
                alt="Fonte di Foiano 全系列橄欖油"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-emerald-800/20 md:col-span-2">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663143729992/OmkZmcVIDtFWQkkI.jpeg"
                alt="橄欖採摘過程"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RESONANCE MATRIX
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-emerald-500/70 text-xs tracking-[0.2em] uppercase mb-4">
              Resonance Matrix
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-50 mb-4">
              橙欖油 × 牟尼香 共振搭配
            </h2>
            <p className="text-emerald-200/50 max-w-xl mx-auto">
              每一款橙欖油都可搭配 MUNI 牟尼香，
              讓飲食與嗅覺的頻率同時共振，開啟完整的療癒儀式。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-emerald-800/20">
                  <th className="text-left py-4 px-4 text-emerald-200/40 text-xs tracking-wider uppercase">
                    橄欖油
                  </th>
                  <th className="text-left py-4 px-4 text-emerald-200/40 text-xs tracking-wider uppercase">
                    牟尼香
                  </th>
                  <th className="text-left py-4 px-4 text-emerald-200/40 text-xs tracking-wider uppercase">
                    共振維度
                  </th>
                  <th className="text-left py-4 px-4 text-emerald-200/40 text-xs tracking-wider uppercase">
                    建議時機
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-emerald-800/10">
                  <td className="py-4 px-4 text-emerald-100 text-sm">
                    Grand Cru
                  </td>
                  <td className="py-4 px-4 text-emerald-400 text-sm">
                    牟尼香
                  </td>
                  <td className="py-4 px-4 text-emerald-200/50 text-sm">
                    深層滋養・守護能量
                  </td>
                  <td className="py-4 px-4 text-emerald-200/40 text-sm">
                    需要深層滋養與保護的重要時刻
                  </td>
                </tr>
                <tr className="border-b border-emerald-800/10">
                  <td className="py-4 px-4 text-emerald-100 text-sm">1979</td>
                  <td className="py-4 px-4 text-amber-400 text-sm">
                    牟尼香
                  </td>
                  <td className="py-4 px-4 text-emerald-200/50 text-sm">
                    穩定扎根・回到中心
                  </td>
                  <td className="py-4 px-4 text-emerald-200/40 text-sm">
                    需要穩定、扎根的力量
                  </td>
                </tr>
                <tr className="border-b border-emerald-800/10">
                  <td className="py-4 px-4 text-emerald-100 text-sm">
                    Riflessi
                  </td>
                  <td className="py-4 px-4 text-lime-400 text-sm">
                    牟尼香
                  </td>
                  <td className="py-4 px-4 text-emerald-200/50 text-sm">
                    輕盈喜悅・綻放光彩
                  </td>
                  <td className="py-4 px-4 text-emerald-200/40 text-sm">
                    想要由內而外感受喜悅
                  </td>
                </tr>
                <tr className="border-b border-emerald-800/10">
                  <td className="py-4 px-4 text-emerald-100 text-sm">
                    Toscano PGI
                  </td>
                  <td className="py-4 px-4 text-teal-400 text-sm">
                    牟尼香
                  </td>
                  <td className="py-4 px-4 text-emerald-200/50 text-sm">
                    安定平和・日常滋養
                  </td>
                  <td className="py-4 px-4 text-emerald-200/40 text-sm">
                    日常飲食中的安定儀式
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/15 to-[#0f1a0e]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-emerald-50 mb-6">
            想知道哪款橄欖油最適合你此刻的狀態？
          </h2>
          <p className="text-emerald-200/50 mb-10 leading-relaxed">
            告訴 MUNI 療癒顧問你現在的身體感受與飲食需求，
            <br className="hidden md:block" />
            AI 會為你推薦最適合的橙欖油方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://ai.munione.co"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-medium hover:from-emerald-600 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-900/30"
            >
              <span>♡</span> 問問 MUNI 療癒顧問
            </Link>
            <Link
              href="/systems"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-emerald-700/30 text-emerald-200/70 hover:text-emerald-100 hover:border-emerald-600/50 transition-all"
            >
              探索更多 MUNI 療癒系統 →
            </Link>
          </div>
        </div>
      </section>

      {/* Frequency Badge */}
      <FrequencyBadge variant="dark" full />

      {/* Footer */}
      <footer className="py-12 border-t border-emerald-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl font-serif text-emerald-100 mb-2">MUNI 牟尼</p>
          <p className="text-emerald-200/30 text-sm">
            在寂靜中，承接你的答案。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-emerald-200/20">
            <Link
              href="/"
              className="hover:text-emerald-200/50 transition-colors"
            >
              首頁
            </Link>
            <Link
              href="/flowers"
              className="hover:text-emerald-200/50 transition-colors"
            >
              花精百科
            </Link>
            <Link
              href="/essential-oil"
              className="hover:text-emerald-200/50 transition-colors"
            >
              牟尼香
            </Link>
            <Link
              href="/ginseng"
              className="hover:text-emerald-200/50 transition-colors"
            >
              人蔘療癒
            </Link>
            <Link
              href="/wine"
              className="hover:text-emerald-200/50 transition-colors"
            >
              葡萄酒療癒
            </Link>
            <Link
              href="/frequency"
              className="hover:text-emerald-200/50 transition-colors"
            >
              獨家技術
            </Link>
            <Link
              href="/systems"
              className="hover:text-emerald-200/50 transition-colors"
            >
              療癒系統
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

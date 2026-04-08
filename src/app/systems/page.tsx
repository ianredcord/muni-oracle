import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FrequencyBadge from "@/components/FrequencyBadge";

export const metadata: Metadata = {
  title: "MUNI 療癒生態系統 | 完整知識架構",
  description:
    "探索 MUNI 的完整療癒生態——花精、精油、董氏心氣神針、日本針灸貼、人蔘、橄欖油、日本綠茶、巧克力、葡萄酒，九大系統守護你的身心靈平衡。",
};

const SYSTEMS = [
  {
    id: "flower-essence",
    title: "巴哈花精",
    subtitle: "情緒的自然處方",
    description:
      "源自英國巴哈醫師的 38 種花精，透過植物頻率共振，溫柔地平衡情緒狀態。每一種花精對應一種情緒模式，幫助你從恐懼、焦慮、憤怒中回到內在的寧靜。",
    href: "/flowers",
    icon: "🌸",
    color: "from-rose-50 to-pink-50",
    borderColor: "border-rose-200",
    status: "available",
  },
  {
    id: "essential-oil",
    title: "MUNI 牟尼香",
    subtitle: "嗅覺的療癒入口",
    description:
      "以印度千年 Attar 蒸餾工藝與 MUNI Frequency Resonance™ 技術融合，將沈香、玫瑰、檀香、岩蘭草、綿花籽、小萳香六大天然植物精華濃縮於一瓶。透過嗅覺直達邊緣系統，啟動身體的自我修復機制。",
    href: "/essential-oil",
    icon: "🫧",
    color: "from-amber-50 to-yellow-50",
    borderColor: "border-amber-200",
    status: "available",
  },
  {
    id: "acupuncture",
    title: "董氏心氣神針",
    subtitle: "經絡的精準調理",
    description:
      "傳承自董氏奇穴的心氣神針法，以獨特的穴位系統精準調理氣血。搭配 MUNI 精油與日本針灸貼，在家即可進行穴位保健。",
    href: "/acupuncture",
    icon: "📍",
    color: "from-emerald-50 to-green-50",
    borderColor: "border-emerald-200",
    status: "available",
  },
  {
    id: "somaniks",
    title: "MUNI × SOMANIKS 針灸貼",
    subtitle: "神經科學 × 不刺入微錐 × 無痛修復",
    description:
      "來自日本的不刺入微錐技術，以軸索反射原理啟動人體自我修復。SOMACEPT 硬針對應急性痛，SOMARESON 軟針對應慢性痛。搭配 MUNI 精油，嗅覺與觸覺雙重神經通路同步共振。日本醫療器材、CE、FDA 三重認證。",
    href: "/somaniks",
    icon: "🩹",
    color: "from-sky-50 to-blue-50",
    borderColor: "border-sky-200",
    status: "available",
  },
  {
    id: "ginseng",
    title: "MUNI × 韓國頂級人蔘",
    subtitle: "千年本草智慧 × 共振頻率",
    description:
      "嚴選韓國六年根紅參，結合沉香、鹿茸等珍貴原料。透過 MUNI Frequency Resonance™ 六層共振校準，讓人蔘皂苷的能量頻率與人體細胞達到最深層的諧振。三款嚴選製品，從溫補元氣到美容養顏。",
    href: "/ginseng",
    icon: "🌿",
    color: "from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    status: "available",
  },
  {
    id: "olive-oil",
    title: "MUNI × Fonte di Foiano 橄欖油",
    subtitle: "義大利早摘初榨橄欖油 × 頻率共振",
    description:
      "攜手義大利 Bolgheri 產區的 Fonte di Foiano 莊園，以早摘初榨工藝鎖住橄欖最鮮活的多酚與生命能量。Flos Olei 99/100 全球最高評分，家族三代傳承的百年橄欖園。四款嚴選橄欖油，從旗艦 Grand Cru 到日常 Toscano PGI。",
    href: "/olive-oil",
    icon: "🫒",
    color: "from-lime-50 to-green-50",
    borderColor: "border-lime-200",
    status: "available",
  },
  {
    id: "green-tea",
    title: "MUNI × 日本有機綠茶",
    subtitle: "百年有機茶園 × 頻率共振",
    description:
      "攜手日本百年有機茶園，嚴選宇治抹茶、鹿兒島玉露、煎茶與焙茶四款頂級有機綠茶。自 1858 年種茶至今超過 165 年，一年一採，立春後第 88 天春收，手工採摘、6 小時內蒸青完成。橫跨日本、美國、歐盟的完整有機認證。",
    href: "/green-tea",
    icon: "🍵",
    color: "from-teal-50 to-emerald-50",
    borderColor: "border-teal-200",
    status: "available",
  },
  {
    id: "chocolate",
    title: "MUNI × CECILIA 巧克力",
    subtitle: "世界頂級手工精品巧克力 × 頻率療癒",
    description:
      "MUNI 攜手世界第一位女性 Maître Chocolatier Cecilia Rabassi，以托斯卡尼雪花石工藝與頻率共振，打造世界最好的手工精品巧克力。",
    href: "/chocolate",
    icon: "🍫",
    color: "from-amber-50 to-stone-50",
    borderColor: "border-amber-200",
    status: "available",
  },
  {
    id: "wine",
    title: "MUNI × Kellerei Eisacktal 葡萄酒",
    subtitle: "阿爾卑斯山地葡萄酒 × 療癒儀式",
    description:
      "攜手南蒂羅爾 Kellerei Eisacktal 酒莊，以花崗岩與白雲石孕育的山地葡萄酒，透過品飲儀式連結大地的礦物能量。9 款精選酒款，從旗艦限量到經典日常。",
    href: "/wine",
    icon: "🍷",
    color: "from-purple-50 to-indigo-50",
    borderColor: "border-purple-200",
    status: "available",
  },
];

const LAYERS = [
  {
    name: "身體層",
    description: "透過精油、穴位、針灸貼與飲食，調理身體的氣血與能量",
    systems: ["精油", "董氏穴位", "針灸貼", "人蔘", "橄欖油"],
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    name: "情緒層",
    description: "透過花精頻率與芳香療法，平衡情緒與心理狀態",
    systems: ["花精", "精油", "巧克力", "葡萄酒"],
    color: "bg-rose-100 text-rose-800",
  },
  {
    name: "儀式層",
    description: "將療癒融入日常，建立穩定的身心安定節奏",
    systems: ["綠茶儀式", "冥想", "呼吸覺察"],
    color: "bg-amber-100 text-amber-800",
  },
];

export default function SystemsPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
            MUNI HEALING ECOSYSTEM
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#4a5548] mb-6 leading-tight">
            MUNI 療癒生態系統
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
            MUNI 不只是花精品牌，而是一套完整的「身心靈整體生活儀式系統」。
            <br />
            九大系統從身體、情緒到日常儀式，層層守護你的內在平衡。
          </p>
        </div>
      </section>

      {/* 三層架構圖 */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] text-center mb-10">
            三層療癒架構
          </h2>
          <div className="space-y-4">
            {LAYERS.map((layer) => (
              <div
                key={layer.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${layer.color} whitespace-nowrap`}
                  >
                    {layer.name}
                  </span>
                  <p className="text-stone-600 text-sm flex-1">
                    {layer.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {layer.systems.map((sys) => (
                    <span
                      key={sys}
                      className="px-3 py-1 bg-stone-50 text-stone-600 rounded-full text-xs border border-stone-200"
                    >
                      {sys}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 八大系統卡片 */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] text-center mb-10">
            九大療癒系統
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SYSTEMS.map((system) => (
              <div
                key={system.id}
                className={`relative bg-gradient-to-br ${system.color} rounded-2xl p-6 border ${system.borderColor} transition-all duration-300 ${
                  system.status === "available"
                    ? "hover:shadow-lg hover:-translate-y-1"
                    : "opacity-75"
                }`}
              >
                {system.status === "coming" && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 bg-stone-200 text-stone-500 rounded-full text-xs">
                    即將推出
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{system.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-1">
                      {system.title}
                    </h3>
                    <p className="text-sm text-[#9A7B4F] mb-3">
                      {system.subtitle}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {system.description}
                    </p>
                    {system.status === "available" ? (
                      <Link
                        href={system.href}
                        className="inline-flex items-center gap-1.5 text-[#4a5548] hover:text-[#3a4538] text-sm font-medium transition-colors"
                      >
                        深入了解
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA：導向療癒顧問 */}
      <section className="py-20 px-4 bg-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-6">
            不確定哪個系統適合你？
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            每個人的身心狀態都不同，讓 MUNI 療癒顧問根據你此刻的感受，
            <br className="hidden sm:inline" />
            從九大系統中為你挑選最適合的療癒組合。
          </p>
          <a
            href="https://ai.munione.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-all shadow-md hover:shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            問問 MUNI 療癒顧問
          </a>
        </div>
      </section>

      {/* Frequency Resonance™ 技術支持 */}
      <FrequencyBadge variant="light" full />

      <Footer />
    </div>
  );
}

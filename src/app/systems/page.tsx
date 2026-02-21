import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "MUNI 療癒生態系統 | 完整知識架構",
  description:
    "探索 MUNI 的完整療癒生態——花精、精油、董氏心氣神針、日本針灸貼、人蔘、橄欖油、日本綠茶、巧克力，八大系統守護你的身心靈平衡。",
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
    title: "MUNI 聖杯精油",
    subtitle: "嗅覺的療癒入口",
    description:
      "六款以巴哈花精頻率調製的複方精油，透過嗅覺直達邊緣系統，啟動身體的自我修復機制。每一款精油都是一把開啟內在覺察的鑰匙。",
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
    title: "Somaniks 日本針灸貼",
    subtitle: "穴位的日常守護",
    description:
      "來自日本的專業針灸貼片，以微電流原理持續刺激穴位。搭配董氏穴位與 MUNI 精油使用，讓穴位保健融入日常生活。",
    href: "#",
    icon: "🩹",
    color: "from-sky-50 to-blue-50",
    borderColor: "border-sky-200",
    status: "coming",
  },
  {
    id: "ginseng",
    title: "人蔘",
    subtitle: "元氣的根本補給",
    description:
      "精選頂級人蔘，從根本補充生命能量。在 MUNI 的體系中，人蔘是身體層面的能量基石，為其他療癒系統提供穩固的物質基礎。",
    href: "#",
    icon: "🌿",
    color: "from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    status: "coming",
  },
  {
    id: "olive-oil",
    title: "橄欖油",
    subtitle: "地中海的生命之油",
    description:
      "特級初榨橄欖油，富含多酚與抗氧化物質。在 MUNI 的飲食儀式中，橄欖油是滋養身體、支持細胞修復的重要媒介。",
    href: "#",
    icon: "🫒",
    color: "from-lime-50 to-green-50",
    borderColor: "border-lime-200",
    status: "coming",
  },
  {
    id: "green-tea",
    title: "日本綠茶",
    subtitle: "靜心的飲茶儀式",
    description:
      "來自日本的頂級綠茶，富含茶胺酸（L-Theanine），能促進 α 腦波，帶來清醒而放鬆的意識狀態。是 MUNI 睡前安定儀式的重要元素。",
    href: "#",
    icon: "🍵",
    color: "from-teal-50 to-emerald-50",
    borderColor: "border-teal-200",
    status: "coming",
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
    systems: ["花精", "精油", "巧克力"],
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
            八大系統從身體、情緒到日常儀式，層層守護你的內在平衡。
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
            八大療癒系統
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
            從八大系統中為你挑選最適合的療癒組合。
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

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#4a5548] text-white/70">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-lg text-white/90 mb-2">MUNI 牟尼</p>
          <p className="text-sm">
            在寂靜中，承接你的答案。
          </p>
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              首頁
            </Link>
            <Link href="/flowers" className="hover:text-white transition-colors">
              花精百科
            </Link>
            <Link
              href="/systems"
              className="hover:text-white transition-colors"
            >
              療癒系統
            </Link>
            <a
              href="https://ai.munione.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              療癒顧問
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import FrequencyBadge from "@/components/FrequencyBadge";

export const metadata: Metadata = {
  title: "MUNI 聖杯精油 | 嗅覺的療癒入口",
  description:
    "六款以巴哈花精頻率調製的 MUNI 聖杯複方精油，透過嗅覺直達邊緣系統，啟動身體的自我修復機制。了解精油如何影響神經系統。",
};

const OILS = [
  {
    name: "聖杯一號 — 安心",
    subtitle: "Comfort & Safety",
    description:
      "專為焦慮、恐懼與不安全感設計。融合岩薔薇、溝酸漿等花精頻率，搭配薰衣草、乳香等精油，幫助神經系統從「戰或逃」模式回到「安全與修復」狀態。",
    emotions: ["焦慮", "恐懼", "不安全感", "驚恐"],
    usage: "塗抹於手腕內側、太陽穴或心口，深呼吸三次。",
    color: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
    accent: "text-violet-700",
  },
  {
    name: "聖杯二號 — 定心",
    subtitle: "Clarity & Focus",
    description:
      "專為猶豫不決、思緒混亂設計。融合線球草、鵝耳櫪等花精頻率，搭配迷迭香、薄荷等精油，幫助大腦回到清晰、專注的狀態。",
    emotions: ["猶豫", "迷茫", "注意力不集中", "選擇困難"],
    usage: "塗抹於太陽穴、後頸或手腕，配合深呼吸。",
    color: "from-sky-50 to-blue-50",
    borderColor: "border-sky-200",
    accent: "text-sky-700",
  },
  {
    name: "聖杯三號 — 開心",
    subtitle: "Joy & Vitality",
    description:
      "專為情緒低落、缺乏動力設計。融合龍芽草、野玫瑰等花精頻率，搭配甜橙、佛手柑等精油，喚醒內在的生命力與喜悅。",
    emotions: ["憂鬱", "無力感", "缺乏動力", "情緒低落"],
    usage: "塗抹於心口、手腕或腳底，搭配輕柔按摩。",
    color: "from-amber-50 to-yellow-50",
    borderColor: "border-amber-200",
    accent: "text-amber-700",
  },
  {
    name: "聖杯四號 — 放心",
    subtitle: "Release & Let Go",
    description:
      "專為過度控制、無法放手設計。融合葡萄藤、山毛櫸等花精頻率，搭配依蘭、天竺葵等精油，幫助放下執著，回到柔軟與接納。",
    emotions: ["控制欲", "執著", "無法放手", "過度擔憂"],
    usage: "塗抹於肩頸、太陽穴或手心，配合放鬆呼吸。",
    color: "from-rose-50 to-pink-50",
    borderColor: "border-rose-200",
    accent: "text-rose-700",
  },
  {
    name: "聖杯五號 — 靜心",
    subtitle: "Peace & Stillness",
    description:
      "專為煩躁、思緒紛飛設計。融合白栗花、鳳仙花等花精頻率，搭配檀香、雪松等精油，引導意識回到當下的寧靜。",
    emotions: ["煩躁", "失眠", "思緒紛飛", "無法安靜"],
    usage: "睡前塗抹於腳底、手腕或枕頭旁，配合冥想。",
    color: "from-teal-50 to-emerald-50",
    borderColor: "border-teal-200",
    accent: "text-teal-700",
  },
  {
    name: "聖杯六號 — 護心",
    subtitle: "Protection & Boundaries",
    description:
      "專為能量敏感、容易受外界影響設計。融合胡桃、冬青等花精頻率，搭配茶樹、尤加利等精油，建立健康的能量邊界。",
    emotions: ["能量敏感", "容易受影響", "邊界不清", "情緒吸收"],
    usage: "出門前塗抹於手腕、耳後或心口，建立能量保護。",
    color: "from-emerald-50 to-green-50",
    borderColor: "border-emerald-200",
    accent: "text-emerald-700",
  },
];

export default function EssentialOilPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/systems"
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-[#4a5548] transition-colors mb-6"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            返回療癒系統總覽
          </Link>
          <p className="text-sm tracking-[0.3em] text-[#9A7B4F] mb-4">
            MUNI ESSENTIAL OILS
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#4a5548] mb-6 leading-tight">
            MUNI 聖杯精油
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
            六款以巴哈花精頻率調製的複方精油，
            <br />
            透過嗅覺直達邊緣系統，啟動身體的自我修復機制。
          </p>
        </div>
      </section>

      {/* 為什麼選擇精油 */}
      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
            <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-6 text-center">
              為什麼精油能影響神經系統？
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                嗅覺是人類五感中唯一不經過大腦皮層「思考」就能直接影響情緒的感官。當精油分子進入鼻腔，會直接刺激
                <strong className="text-[#4a5548]">嗅球</strong>
                ，並傳遞到大腦的
                <strong className="text-[#4a5548]">邊緣系統</strong>
                ——這是掌管情緒、記憶與自律神經的核心區域。
              </p>
              <p>
                這就是為什麼一個熟悉的氣味能瞬間喚起一段記憶，或者某些香氣能讓你立刻感到放鬆。MUNI
                聖杯精油正是利用這個原理，透過精心調配的植物頻率，直接與你的神經系統「對話」。
              </p>
              <p>
                每一款聖杯精油都融合了對應的巴哈花精頻率，讓
                <strong className="text-[#4a5548]">
                  嗅覺療癒與花精頻率共振
                </strong>
                同時作用，從身體和能量兩個層面支持你的內在平衡。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 六款精油 */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] text-center mb-10">
            六款聖杯精油
          </h2>
          <div className="space-y-6">
            {OILS.map((oil, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${oil.color} rounded-2xl p-6 md:p-8 border ${oil.borderColor} shadow-sm`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-[#4a5548] mb-1">
                      {oil.name}
                    </h3>
                    <p className={`text-sm ${oil.accent} mb-4`}>
                      {oil.subtitle}
                    </p>
                    <p className="text-stone-600 leading-relaxed mb-4">
                      {oil.description}
                    </p>

                    {/* 適用情緒 */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-[#4a5548] mb-2">
                        適用情緒：
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {oil.emotions.map((emotion) => (
                          <span
                            key={emotion}
                            className="px-3 py-1 bg-white/70 text-stone-600 rounded-full text-xs border border-stone-200"
                          >
                            {emotion}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 使用方式 */}
                    <div className="bg-white/50 rounded-xl p-4 border border-white">
                      <p className="text-sm font-medium text-[#4a5548] mb-1">
                        使用方式：
                      </p>
                      <p className="text-stone-600 text-sm">{oil.usage}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 搭配穴位使用 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-6">
            搭配穴位使用，效果加倍
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            將 MUNI
            聖杯精油塗抹在對應的董氏穴位上，再貼上 Somaniks
            日本針灸貼，讓精油的植物頻率透過穴位深入經絡，從身體層面支持療癒。
          </p>
          <Link
            href="/acupuncture"
            className="inline-flex items-center gap-2 bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3.5 text-lg font-medium transition-all shadow-md hover:shadow-lg"
          >
            查看董氏穴位詳解
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-6">
            不確定哪款精油適合你？
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            告訴 MUNI 療癒顧問你此刻的情緒狀態，
            <br className="hidden sm:inline" />
            AI 會為你推薦最適合的精油搭配方案。
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

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#4a5548] text-white/70">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-lg text-white/90 mb-2">MUNI 牟尼</p>
          <p className="text-sm">在寂靜中，承接你的答案。</p>
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              首頁
            </Link>
            <Link href="/flowers" className="hover:text-white transition-colors">
              花精百科
            </Link>
            <Link href="/systems" className="hover:text-white transition-colors">
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

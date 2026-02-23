import { TAROT_CARDS, SUIT_NAMES, type TarotSuit } from "@/data/tarot.generated";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import FrequencyBadge from "@/components/FrequencyBadge";

export default function TarotEncyclopediaPage() {
  // 按花色分組
  const suits: TarotSuit[] = ["major", "wands", "cups", "swords", "pentacles"];

  const suitIcons: Record<TarotSuit, string> = {
    major: "✦",
    wands: "🔥",
    cups: "💧",
    swords: "🌬",
    pentacles: "🌿",
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      {/* 背景 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-[#F9F7F2]" />
      </div>

      {/* 固定 Header */}
      <Header />

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-6xl pt-20">
        {/* 標題 */}
        <header className="text-center mb-12 mt-8">
          <p className="text-[#9A7B4F] text-sm tracking-[0.3em] mb-3 font-medium">
            MUNI ETHEREAL CODEX
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
            牟尼塔羅牌百科
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            探索 78 張牟尼塔羅牌的療癒智慧，每一張都對應一種巴赫花精
          </p>
        </header>

        {/* 按花色分組展示 */}
        {suits.map((suit) => {
          const cardsInSuit = TAROT_CARDS.filter(c => c.suit === suit);
          return (
            <section key={suit} className="mb-14">
              {/* 花色標題 */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{suitIcons[suit]}</span>
                <div>
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-[#4a5548]">
                    {SUIT_NAMES[suit]}
                  </h2>
                  <p className="text-stone-400 text-sm">{cardsInSuit.length} 張</p>
                </div>
              </div>

              {/* 牌卡網格 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
                {cardsInSuit.map((card) => (
                  <Link
                    key={card.id}
                    href={`/tarot-encyclopedia/${card.slug}`}
                    className="group"
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      {/* 圖片 */}
                      <div className="relative aspect-[1/1.79] overflow-hidden">
                        <Image
                          src={card.image}
                          alt={card.nameZh}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 16vw"
                        />
                      </div>
                      
                      {/* 名稱 */}
                      <div className="p-3 text-center">
                        <h3 className="text-sm font-medium text-[#4a5548] truncate">
                          {card.nameZh}
                        </h3>
                        <p className="text-xs text-stone-400 mt-0.5 truncate">
                          {card.nameEn}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* 底部操作 */}
        <div className="mt-12 text-center">
          <Link
            href="/tarot/draw"
            className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 transition-colors"
          >
            抽一張塔羅牌指引
          </Link>
        </div>
      </main>

      {/* Frequency Resonance™ 技術支持 */}
      <FrequencyBadge variant="light" full />
    </div>
  );
}

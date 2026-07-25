import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GUIDES } from "@/data/guides";
import { EMOTION_GROUPS } from "@/data/flowerEmotions";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "情境指引｜從你現在的狀態開始 | MUNI",
  description:
    "睡不著、停不下來、說不出「不」、看不清方向……從具體的處境出發，看見對應的花精、身體練習與一句可以安住的話。",
};

export default function GuideIndexPage() {
  // 依情緒分類分組，維持巴哈原著的順序
  const grouped = EMOTION_GROUPS.map((g) => ({
    group: g,
    items: GUIDES.filter((x) => x.emotionGroup === g.slug),
  })).filter((x) => x.items.length > 0);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-[#F9F7F2]" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-3xl pt-24">
        <header className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
            情境指引
          </h1>
          <p className="text-stone-500 leading-relaxed">
            不從花精的名字開始，從你現在的狀態開始。
            <br />
            找到最接近的那一篇，看看裡面有沒有你。
          </p>
        </header>

        <div className="space-y-10">
          {grouped.map(({ group, items }) => (
            <section key={group.slug}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 rounded-full bg-gradient-to-b from-[#9A7B4F] to-[#9A7B4F]/30" />
                <h2 className="font-serif text-lg font-bold text-[#4a5548]">
                  {group.title}
                </h2>
                <span className="text-xs text-stone-400">{group.nameEn}</span>
              </div>

              <ul className="space-y-3">
                {items.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/guide/${g.slug}`}
                      className="block bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-5 border border-stone-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      <h3 className="font-serif text-lg font-bold text-[#4a5548] mb-2 leading-snug">
                        {g.title}
                      </h3>
                      <p className="text-sm text-stone-500 leading-relaxed mb-3">
                        {g.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {g.cues.map((c) => (
                          <span
                            key={c}
                            className="text-[11px] text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full"
                          >
                            「{c}」
                          </span>
                        ))}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 text-center space-y-3">
          <Link
            href="/draw"
            className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 transition-colors"
          >
            也可以直接抽一張牌
          </Link>
          <p className="text-xs text-stone-400 leading-relaxed max-w-md mx-auto">
            這些文章談的是情緒的覺察與陪伴，不能取代醫療或心理專業的評估。
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

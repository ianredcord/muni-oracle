import Image from "next/image";
import Link from "next/link";
import { FLOWERS } from "@/data/flowers.generated";
import { ZH } from "@/content/zh";
import { Header } from "@/components/Header";

export default function Home() {
  // 取前 9 張牌卡作為預覽
  const previewFlowers = FLOWERS.slice(0, 9);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      {/* 固定 Header */}
      <Header />

      {/* 1. Hero 區塊 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* 背景圖 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home-bg.jpg"
            alt="MUNI Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#F9F7F2]" />
        </div>

        {/* Hero 內容 */}
        <div className="relative z-10 text-center px-4 py-20 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#4a5548] mb-6 leading-tight whitespace-pre-line">
            {ZH.home.hero.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 mb-6 leading-loose whitespace-pre-line tracking-wide">
            {ZH.home.hero.subtitle}
          </p>
          {/* A 文字：理性定位錨點 */}
          <p className="text-sm text-stone-500/70 mb-10 tracking-wide whitespace-pre-line">
            {ZH.home.hero.positioning}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/draw"
              className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {ZH.home.hero.cta}
            </Link>
            <Link
              href="#what"
              className="text-[#4a5548] hover:text-[#3a4538] underline underline-offset-4 transition-colors"
            >
              {ZH.home.hero.secondaryLink}
            </Link>
          </div>
        </div>

        {/* 向下滾動提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 2. MUNI 是什麼 - 第一段 */}
      <section id="what" className="py-20 px-4 bg-white scroll-mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-8">
            {ZH.home.whatIsMuni.title}
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed whitespace-pre-line">
            {ZH.home.whatIsMuni.body}
          </p>
        </div>
      </section>

      {/* 2b. MUNI 是什麼 - 第二段（不同色塊） */}
      <section className="py-20 px-4 bg-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone-600 text-lg leading-relaxed whitespace-pre-line">
            {ZH.home.whatIsMuni.bodySecond}
          </p>
        </div>
      </section>

      {/* 3. Step 1-3 方法 */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
              {ZH.home.steps.title}
            </h2>
            <p className="text-stone-500">
              {ZH.home.steps.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ZH.home.steps.items.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-xs text-[#9A7B4F] font-medium tracking-wider mb-2">
                  {item.step}
                </div>
                <h3 className="font-medium text-[#4a5548] text-lg mb-3">
                  {item.heading}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 花精牌卡預覽 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
              {ZH.home.flowerCards.title}
            </h2>
            <p className="text-stone-500">
              {ZH.home.flowerCards.subtitle}
            </p>
          </div>

          {/* 牌卡預覽 - 3x3 */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 max-w-md mx-auto">
            {previewFlowers.map((flower) => (
              <Link
                key={flower.id}
                href={`/flowers/${flower.slug}`}
                className="group"
              >
                <div className="relative aspect-[3/5] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <Image
                    src={flower.image}
                    alt={flower.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/draw"
              className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 transition-colors"
            >
              {ZH.home.flowerCards.cta}
            </Link>
            <Link
              href="/flowers"
              className="inline-block border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548] hover:text-white rounded-full px-8 py-3 transition-all duration-300"
            >
              {ZH.home.flowerCards.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* 5. 牟尼香 */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5548] mb-4">
                  {ZH.home.muniIncense.title}
                </h2>
                <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                  {ZH.home.muniIncense.body}
                </p>
              </div>
              <div className="md:w-1/2 h-64 md:h-80 relative">
                <Image
                  src="/images/home-bg.jpg"
                  alt="牟尼香"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 給引導者 */}
      <section className="py-20 px-4 bg-[#4a5548] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            {ZH.home.therapist.title}
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed whitespace-pre-line">
            {ZH.home.therapist.body}
          </p>
          <Link
            href="/draw"
            className="inline-block bg-white text-[#4a5548] hover:bg-stone-100 rounded-full px-8 py-3 transition-colors"
          >
            開始體驗
          </Link>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-12 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-2">
              {ZH.home.footer.brand}
            </h3>
            <p className="text-stone-500 text-sm">
              {ZH.home.footer.tagline}
            </p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <Link href="/draw" className="text-stone-500 hover:text-[#4a5548] text-sm transition-colors">
              {ZH.nav.startDraw}
            </Link>
            <Link href="/flowers" className="text-stone-500 hover:text-[#4a5548] text-sm transition-colors">
              {ZH.nav.flowerIndex}
            </Link>
          </div>
          <p className="text-stone-400 text-xs">
            {ZH.home.footer.note}
          </p>
        </div>
      </footer>
    </div>
  );
}

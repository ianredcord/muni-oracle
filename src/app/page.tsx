import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FLOWERS } from "@/data/flowers.generated";
import { ZH } from "@/content/zh";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MUNI 牟尼花精｜自然療癒・花精牌卡・身心靈指引",
  description:
    "MUNI 以巴赫花精為核心，結合塔羅原型、精油、頻率共振等自然療癒系統，提供花精牌卡抽牌、花精百科與身心靈整合方案。",
};

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
            sizes="100vw"
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

      {/* MUNI 形象圖 */}
      <section className="w-full">
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/muni-hero-image.jpg"
            alt="MUNI 牡尼香 - 天然植物能量支持"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* 2. MUNI 是什麼 - 第一段 */}
      <section id="what" className="py-24 px-4 bg-white scroll-mt-16">
        <div className="max-w-[42rem] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-10">
            {ZH.home.whatIsMuni.title}
          </h2>
          {/* 主要內文：增加行距 10-15% */}
          <p className="text-stone-600 text-lg leading-[2] whitespace-pre-line mb-10">
            {ZH.home.whatIsMuni.body}
          </p>
          {/* 核心句：視覺強化，字色略深、上下留白增加 */}
          <p className="text-stone-700 text-lg leading-[2] whitespace-pre-line font-medium mt-8">
            {ZH.home.whatIsMuni.bodyCore}
          </p>
        </div>
      </section>

      {/* 2b. MUNI 是什麼 - 第二段（不同色塊） */}
      <section className="py-24 px-4 bg-[#E8E4DC]">
        <div className="max-w-[42rem] mx-auto text-center">
          {/* 第一句：引入 */}
          <p className="text-stone-600 text-lg leading-[2] whitespace-pre-line mb-10">
            {ZH.home.whatIsMuni.bodySecondIntro}
          </p>
          {/* 中間段落 */}
          <p className="text-stone-600 text-lg leading-[2] whitespace-pre-line mb-12">
            {ZH.home.whatIsMuni.bodySecondMiddle}
          </p>
          {/* 核心句：獨立段落，視覺強化 */}
          <p className="text-stone-700 text-lg leading-[2] whitespace-pre-line font-medium">
            {ZH.home.whatIsMuni.bodySecondCore}
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
                    sizes="(max-width: 640px) 30vw, 120px"
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
                  src="/muni-incense.jpg"
                  alt="MUNI 牡尼香 - 結合精油與花精的天然植物能量"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
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
      <Footer />
    </div>
  );
}

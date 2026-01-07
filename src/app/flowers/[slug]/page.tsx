import { FLOWERS, type FlowerCard } from "@/data/flowers.generated";
import { parseDeepBody, SECTION_COLORS, cleanUnderlines } from "@/lib/parseDeepBody";
import { ZH } from "@/content/zh";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// 生成靜態路徑
export function generateStaticParams() {
  return FLOWERS.map((flower) => ({
    slug: flower.slug,
  }));
}

// 頁面 Props
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function FlowerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // 找到對應的花精
  const flower = FLOWERS.find(f => f.slug === slug);
  
  if (!flower) {
    notFound();
  }

  // 切割深度解析段落
  const deepSections = parseDeepBody(flower.deep.body);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      {/* 固定 Header */}
      <Header />

      {/* 背景 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-4xl pt-24">
        {/* 返回按鈕 */}
        <div className="mb-6">
          <Link
            href="/flowers"
            className="flex items-center gap-2 text-[#4a5548] hover:text-[#3a4538] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{ZH.flowers.detailBack}</span>
          </Link>
        </div>

        {/* 花精資訊區 */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          {/* 牌卡圖片 */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-[280px]">
              <Image
                src={flower.image}
                alt={flower.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* MUNI 能量支持按鈕 */}
            <div className="mt-4 max-w-[280px] mx-auto">
              <a
                href="https://www.stark.works/categories/muni能量療癒系列"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#4a5548] to-[#6b7a5f] hover:from-[#3d4a3c] hover:to-[#5a6950] text-white rounded-full px-4 py-2.5 text-sm font-medium transition-all shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                MUNI 能量支持
              </a>
            </div>
          </div>

          {/* 基本資訊 */}
          <div className="flex-1 w-full">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-2">
              {flower.name}
            </h1>


            {/* Step 1-3 快速指引 */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-stone-100">
                <h3 className="text-xs text-stone-400 uppercase tracking-wider mb-2 font-medium">
                  {flower.quick.step1Title}
                </h3>
                <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                  {flower.quick.step1Body}
                </p>
              </div>

              {/* Step 2 - 核心 */}
              <div className="bg-[#9A7B4F]/10 rounded-xl p-5 shadow-sm border border-[#9A7B4F]/20">
                <h3 className="text-xs text-[#9A7B4F] uppercase tracking-wider mb-2 font-medium">
                  {flower.quick.step2Title}
                </h3>
                <p className="text-[#9A7B4F] text-lg font-medium leading-relaxed whitespace-pre-line">
                  {flower.quick.step2Body}
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-stone-100">
                <h3 className="text-xs text-stone-400 uppercase tracking-wider mb-2 font-medium">
                  {flower.quick.step3Title}
                </h3>
                <p className="text-[#6b7c6b] leading-relaxed whitespace-pre-line">
                  {cleanUnderlines(flower.quick.step3Body)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 深度解析區塊 */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-6">
            深度解析
          </h2>
          
          {/* 深度解析多區塊卡片 */}
          <div className="space-y-4">
            {deepSections.map((section, index) => {
              const colors = SECTION_COLORS[section.title] || { bg: "bg-stone-50/80", border: "border-stone-100" };
              return (
                <div 
                  key={index}
                  className={`${colors.bg} backdrop-blur-sm rounded-xl p-5 shadow-sm border ${colors.border}`}
                >
                  <h3 className="text-sm font-medium text-[#4a5548] mb-3">
                    {section.title}
                  </h3>
                  <div className="whitespace-pre-line text-stone-600 leading-relaxed text-sm">
                    {section.content}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 覺察方式說明 */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-6">
            {ZH.draw.result.howTo}
          </h2>
          <div className="bg-[#4a5548]/5 rounded-xl p-6 shadow-sm border border-[#4a5548]/10">
            <div className="whitespace-pre-line text-stone-600 leading-relaxed">
              {cleanUnderlines(flower.deep.awareness)}
            </div>
          </div>
        </section>

        {/* 引導者專區 */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-[#4a5548] mb-6">
            {ZH.draw.result.therapistZone}
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-100">
            <div className="whitespace-pre-line text-stone-600 leading-relaxed">
              {cleanUnderlines(flower.deep.therapist)}
            </div>
          </div>
        </section>

        {/* 操作按鈕 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/draw"
            className="bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 text-center transition-colors"
          >
            {ZH.nav.startDraw}
          </Link>
          <Link
            href="/flowers"
            className="border border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548]/5 rounded-full px-8 py-3 text-center transition-colors"
          >
            {ZH.flowers.detailBack}
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 bg-stone-100 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-stone-400 text-xs">
            {ZH.home.footer.note}
          </p>
        </div>
      </footer>
    </div>
  );
}

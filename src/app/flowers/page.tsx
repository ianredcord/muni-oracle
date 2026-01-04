import { FLOWERS } from "@/data/flowers.generated";
import Image from "next/image";
import Link from "next/link";

export default function FlowersPage() {
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

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* 標題 */}
        <header className="text-center mb-12 mt-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
            牟尼花精百科
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            探索 40 種花精的療癒智慧，找到屬於你的心靈指引
          </p>
        </header>

        {/* 花精列表 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {FLOWERS.map((flower) => (
            <Link
              key={flower.id}
              href={`/flowers/${flower.slug}`}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* 圖片 */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={flower.image}
                    alt={flower.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* 名稱 */}
                <div className="p-3 text-center">
                  <h3 className="text-sm font-medium text-[#4a5548] truncate">
                    {flower.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 底部操作 */}
        <div className="mt-12 text-center">
          <Link
            href="/draw"
            className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 transition-colors"
          >
            抽一張今日指引
          </Link>
        </div>
      </main>
    </div>
  );
}

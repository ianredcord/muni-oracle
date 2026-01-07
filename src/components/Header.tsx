"use client";

import Link from "next/link";
import { ZH } from "@/content/zh";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* 左側：品牌 */}
        <Link href="/" className="font-serif text-xl font-bold text-[#4a5548] hover:text-[#3a4538] transition-colors">
          {ZH.nav.brand}
        </Link>

        {/* 右側：導覽連結 */}
        <nav className="flex items-center gap-6">
          <Link 
            href="/draw" 
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors"
          >
            {ZH.nav.startDraw}
          </Link>
          <Link 
            href="/flowers" 
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors"
          >
            {ZH.nav.flowerIndex}
          </Link>
          <a 
            href="https://www.stark.works/categories/muni能量療癒系列" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors"
          >
            {ZH.nav.energySupport}
          </a>
        </nav>
      </div>
    </header>
  );
}

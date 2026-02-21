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
        <nav className="flex items-center gap-3 md:gap-6">
          <Link 
            href="/draw" 
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors hidden sm:inline"
          >
            {ZH.nav.startDraw}
          </Link>
          <Link 
            href="/flowers" 
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors hidden md:inline"
          >
            {ZH.nav.flowerIndex}
          </Link>
          <Link 
            href="/energy-support" 
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors hidden md:inline"
          >
            {ZH.nav.energySupport}
          </Link>
          <Link 
            href="/frequency" 
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors hidden md:inline"
          >
            獨家技術
          </Link>
          <Link 
            href="/systems" 
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors"
          >
            療癒系統
          </Link>
          <a
            href="https://ai.munione.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] hover:from-[#8A6B3F] hover:to-[#B49255] text-white rounded-full px-4 py-1.5 text-sm font-medium transition-all shadow-sm hover:shadow-md"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {ZH.nav.healingConsultant}
          </a>
        </nav>
      </div>
    </header>
  );
}

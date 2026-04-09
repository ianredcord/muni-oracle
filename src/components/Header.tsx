"use client";

import { useState } from "react";
import Link from "next/link";
import { ZH } from "@/content/zh";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* 左側：品牌 */}
        <Link href="/" className="font-serif text-xl font-bold text-[#4a5548] hover:text-[#3a4538] transition-colors">
          {ZH.nav.brand}
        </Link>

        {/* 右側：桌面導覽連結 */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/draw"
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors"
          >
            {ZH.nav.startDraw}
          </Link>
          <Link
            href="/tarot"
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors"
          >
            牟尼塔羅
          </Link>
          <Link
            href="/flowers"
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors"
          >
            牟尼花精
          </Link>
          <Link
            href="/tarot-encyclopedia"
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors"
          >
            牟尼塔羅百科
          </Link>
          <Link
            href="/somaniks"
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors"
          >
            牟尼微針
          </Link>
          <Link
            href="/energy-support"
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors"
          >
            {ZH.nav.energySupport}
          </Link>
          <Link
            href="/frequency"
            className="text-stone-600 hover:text-[#4a5548] text-sm font-medium transition-colors"
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

        {/* 手機版：療癒系統 + 療癒顧問 + 漢堡選單 */}
        <div className="flex md:hidden items-center gap-3">
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
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] text-white rounded-full px-3 py-1.5 text-sm font-medium shadow-sm"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {ZH.nav.healingConsultant}
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-600 hover:text-[#4a5548] transition-colors"
            aria-label="開啟選單"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 手機版下拉選單 */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-100 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            <Link href="/draw" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-[#4a5548] text-base font-medium py-2 transition-colors">
              {ZH.nav.startDraw}
            </Link>
            <Link href="/tarot" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-[#4a5548] text-base font-medium py-2 transition-colors">
              牟尼塔羅
            </Link>
            <Link href="/flowers" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-[#4a5548] text-base font-medium py-2 transition-colors">
              牟尼花精
            </Link>
            <Link href="/tarot-encyclopedia" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-[#4a5548] text-base font-medium py-2 transition-colors">
              牟尼塔羅百科
            </Link>
            <Link href="/somaniks" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-[#4a5548] text-base font-medium py-2 transition-colors">
              牟尼微針
            </Link>
            <Link href="/energy-support" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-[#4a5548] text-base font-medium py-2 transition-colors">
              {ZH.nav.energySupport}
            </Link>
            <Link href="/frequency" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-[#4a5548] text-base font-medium py-2 transition-colors">
              獨家技術
            </Link>
            <Link href="/systems" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-[#4a5548] text-base font-medium py-2 transition-colors">
              療癒系統
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

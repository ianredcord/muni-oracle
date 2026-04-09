import Link from "next/link";
import { ZH } from "@/content/zh";

export function Footer() {
  return (
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
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          <Link href="/draw" className="text-stone-500 hover:text-[#4a5548] text-sm transition-colors">
            {ZH.nav.startDraw}
          </Link>
          <Link href="/flowers" className="text-stone-500 hover:text-[#4a5548] text-sm transition-colors">
            牟尼花精
          </Link>
          <Link href="/tarot" className="text-stone-500 hover:text-[#4a5548] text-sm transition-colors">
            牟尼塔羅
          </Link>
          <a href="https://ai.munione.co" target="_blank" rel="noopener noreferrer" className="text-[#9A7B4F] hover:text-[#8A6B3F] text-sm font-medium transition-colors">
            {ZH.nav.healingConsultant}
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          <Link href="/muni-scent" className="text-stone-400 hover:text-[#4a5548] text-xs transition-colors">
            牟尼香
          </Link>
          <Link href="/somaniks" className="text-stone-400 hover:text-[#4a5548] text-xs transition-colors">
            牟尼微針
          </Link>
          <Link href="/energy-support" className="text-stone-400 hover:text-[#4a5548] text-xs transition-colors">
            {ZH.nav.energySupport}
          </Link>
          <Link href="/frequency" className="text-stone-400 hover:text-[#4a5548] text-xs transition-colors">
            獨家技術
          </Link>
          <Link href="/systems" className="text-stone-400 hover:text-[#4a5548] text-xs transition-colors">
            療癒系統
          </Link>
        </div>
        <p className="text-stone-400 text-xs">
          {ZH.home.footer.note}
        </p>
      </div>
    </footer>
  );
}

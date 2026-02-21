"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FrequencyBadge from "@/components/FrequencyBadge";
import {
  ENERGY_LAYERS,
  ENERGY_MODULES,
  STATE_SUGGESTIONS,
  ENERGY_SUPPORT_CONTENT,
} from "@/data/energySupport";

// Header 組件
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-[#4a5548]">
          MUNI
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/draw"
            className="text-stone-600 hover:text-[#4a5548] transition-colors"
          >
            抽牌
          </Link>
          <Link
            href="/flowers"
            className="text-stone-600 hover:text-[#4a5548] transition-colors"
          >
            牟尼花精百科
          </Link>
          <Link
            href="/energy-support"
            className="text-[#4a5548] font-medium transition-colors"
          >
            能量支持
          </Link>
        </nav>
      </div>
    </header>
  );
}

// 區塊 1：Hero
function HeroSection() {
  const { hero } = ENERGY_SUPPORT_CONTENT;

  return (
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-[#F9F7F2]" />
      </div>

      {/* 內容 */}
      <div className="relative z-10 text-center px-4 py-20 max-w-3xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#4a5548] mb-8 leading-tight whitespace-pre-line">
          {hero.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-stone-600 mb-10 leading-loose whitespace-pre-line tracking-wide max-w-2xl mx-auto">
          {hero.description}
        </p>
        <a
          href="#system"
          className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {hero.cta}
        </a>
      </div>

      {/* 向下箭頭 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-stone-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

// 區塊 2：能量系統三層結構
function SystemSection() {
  const { systemSection } = ENERGY_SUPPORT_CONTENT;

  return (
    <section id="system" className="py-20 bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
            {systemSection.title}
          </h2>
          <p className="text-stone-600 text-lg">{systemSection.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ENERGY_LAYERS.map((layer) => (
            <div
              key={layer.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{layer.icon}</div>
              <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-2">
                {layer.title}
              </h3>
              <p className="text-[#6b7c5e] font-medium mb-4">{layer.subtitle}</p>
              <p className="text-stone-600 leading-relaxed">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 區塊 3：四大能量支持模組
function ModulesSection() {
  const { modulesSection } = ENERGY_SUPPORT_CONTENT;
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const moduleColors = [
    "bg-amber-50 border-amber-200",
    "bg-emerald-50 border-emerald-200",
    "bg-blue-50 border-blue-200",
    "bg-purple-50 border-purple-200",
  ];

  return (
    <section id="modules" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
            {modulesSection.title}
          </h2>
          <p className="text-stone-600 text-lg">{modulesSection.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ENERGY_MODULES.map((module, index) => (
            <div
              key={module.id}
              id={module.id}
              className={`rounded-2xl p-8 border-2 ${moduleColors[index]} transition-all duration-300 hover:shadow-lg`}
            >
              <h3 className="font-serif text-2xl font-bold text-[#4a5548] mb-2">
                {module.title}
              </h3>
              <p className="text-[#6b7c5e] font-medium mb-4">{module.subtitle}</p>
              <p className="text-stone-600 leading-relaxed mb-6">
                {module.description}
              </p>

              {/* 代表素材 */}
              <div className="mb-6">
                <p className="text-sm font-medium text-stone-500 mb-3">
                  代表素材：
                </p>
                <ul className="space-y-2">
                  {module.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-stone-600"
                    >
                      <span className="text-[#6b7c5e] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA 按鈕 */}
              <Link
                href={module.ctaLink || "#"}
                className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-6 py-3 text-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                {module.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 區塊 4：依狀態快速選擇
function StatesSection() {
  const { statesSection } = ENERGY_SUPPORT_CONTENT;

  const stateColors = [
    "bg-rose-50 border-rose-200 hover:border-rose-300",
    "bg-indigo-50 border-indigo-200 hover:border-indigo-300",
    "bg-teal-50 border-teal-200 hover:border-teal-300",
    "bg-orange-50 border-orange-200 hover:border-orange-300",
  ];

  return (
    <section id="states" className="py-20 bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
            {statesSection.title}
          </h2>
          <p className="text-stone-600 text-lg">{statesSection.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {STATE_SUGGESTIONS.map((state, index) => (
            <a
              key={state.id}
              href={state.link || "#"}
              className={`block rounded-2xl p-6 border-2 ${stateColors[index]} transition-all duration-300 hover:shadow-md`}
            >
              <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-2">
                {state.stateLabel}
              </h3>
              <p className="text-stone-600 text-sm mb-4">{state.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-stone-500">建議支持：</span>
                <span className="font-medium text-[#6b7c5e]">
                  {state.recommendation}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/draw"
            className="inline-block border-2 border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548] hover:text-white rounded-full px-8 py-3 text-lg transition-all duration-300"
          >
            {statesSection.unknownCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

// 區塊 5：結尾 CTA
function FooterCTA() {
  const { footer } = ENERGY_SUPPORT_CONTENT;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="font-serif text-2xl md:text-3xl text-[#4a5548] mb-10 leading-relaxed">
          {footer.message}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#modules"
            className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {footer.cta1}
          </Link>
          <Link
            href="#states"
            className="inline-block border-2 border-[#4a5548] text-[#4a5548] hover:bg-[#4a5548] hover:text-white rounded-full px-8 py-4 text-lg transition-all duration-300"
          >
            {footer.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#4a5548] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-serif text-xl mb-4">MUNI</p>
        <p className="text-stone-300 text-sm">
          以自然素材，支持身心靈的能量穩定與修復
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <Link href="/" className="text-stone-300 hover:text-white transition-colors">
            首頁
          </Link>
          <Link href="/draw" className="text-stone-300 hover:text-white transition-colors">
            抽牌
          </Link>
          <Link href="/flowers" className="text-stone-300 hover:text-white transition-colors">
            牟尼花精百科
          </Link>
        </div>
      </div>
    </footer>
  );
}

// 主頁面
export default function EnergySupportPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <Header />
      <HeroSection />
      <SystemSection />
      <ModulesSection />
      <StatesSection />
      <FooterCTA />
      <FrequencyBadge variant="light" full />
      <Footer />
    </main>
  );
}

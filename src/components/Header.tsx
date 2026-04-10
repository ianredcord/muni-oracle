"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ZH } from "@/content/zh";

type NavItem = {
  href: string;
  label: string;
};

const primaryNavItems: NavItem[] = [
  { href: "/draw", label: ZH.nav.startDraw },
  { href: "/tarot", label: "牟尼塔羅牌" },
  { href: "/systems", label: "療癒系統" },
];

const secondaryNavItems: NavItem[] = [
  { href: "/flowers", label: ZH.nav.flowerIndex },
  { href: "/tarot-encyclopedia", label: "牟尼塔羅牌百科" },
  { href: "/energy-support", label: ZH.nav.energySupport },
  { href: "/frequency", label: "獨家技術" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/70 bg-[#f9f7f2]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex min-w-0 items-center gap-6">
            <Link href="/" className="group flex min-w-0 flex-col justify-center leading-none">
              <span className="font-serif text-xl font-bold tracking-[0.08em] text-[#4a5548] transition-colors group-hover:text-[#3a4538]">
                {ZH.nav.brand}
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {primaryNavItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-3 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#4a5548] text-white"
                        : "text-stone-600 hover:bg-white/70 hover:text-[#4a5548]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            {secondaryNavItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2.5 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-[#4a5548]"
                      : "text-stone-500 hover:text-[#4a5548]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://ai.munione.co"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#9A7B4F] to-[#C4A265] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:translate-y-[-1px] hover:from-[#8A6B3F] hover:to-[#B49255] hover:shadow-md"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {ZH.nav.healingConsultant}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://ai.munione.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#4a5548] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-[#3a4538]"
            >
              問顧問
            </a>
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white/80 text-[#4a5548] transition-colors hover:border-stone-300 hover:bg-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/28 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-50 w-[min(88vw,24rem)] border-l border-stone-200 bg-[#f9f7f2] px-5 pb-6 pt-20 shadow-2xl transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 border-b border-stone-200 pb-6">
          <p className="mb-2 text-[0.62rem] uppercase tracking-[0.34em] text-stone-400">
            MUNI Navigation
          </p>
          <p className="max-w-[16rem] font-serif text-2xl leading-tight text-[#4a5548]">
            在寂靜中，承接你的答案
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-400">
              Explore
            </p>
            <nav className="space-y-2">
              {[...primaryNavItems, ...secondaryNavItems].map((item) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
                      isActive
                        ? "bg-[#4a5548] text-white"
                        : "bg-white/70 text-stone-700 hover:bg-white"
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="text-sm opacity-70">/</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="rounded-3xl border border-[#9A7B4F]/20 bg-gradient-to-br from-[#f3ecdf] to-[#ece4d3] p-5">
            <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#9A7B4F]">
              Healing Consultant
            </p>
            <p className="mb-4 text-sm leading-relaxed text-stone-600">
              告訴 MUNI 你現在的狀態，讓療癒顧問帶你進入更適合的入口。
            </p>
            <a
              href="https://ai.munione.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#4a5548] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3a4538]"
            >
              前往 MUNI 療癒顧問
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h4m0 0v4m0-4L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

"use client";

import Link from "next/link";
import { localeHref } from "@/i18n/config";
import { useLocalePath } from "@/i18n/useLocale";

export function Footer() {
  const { locale, dict } = useLocalePath();
  const href = (path: string) => localeHref(locale, path);

  const mainLinks = [
    { href: "/draw", label: dict.nav.startDraw },
    { href: "/flowers", label: dict.footer.flowers },
    { href: "/tarot", label: dict.footer.tarot },
    { href: "/guide", label: dict.footer.guide },
    { href: "/journal", label: dict.footer.journal },
  ];

  const secondaryLinks = [
    { href: "/muni-scent", label: dict.footer.muniScent },
    { href: "/somaniks", label: dict.footer.somaniks },
    { href: "/energy-support", label: dict.nav.energySupport },
    { href: "/frequency", label: dict.nav.frequency },
    { href: "/systems", label: dict.nav.systems },
  ];

  return (
    <footer className="py-12 px-4 bg-stone-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="font-serif text-xl font-bold text-[#4a5548] mb-2">
            {dict.footer.brand}
          </h3>
          <p className="text-stone-500 text-sm">{dict.footer.tagline}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={href(link.href)}
              className="text-stone-500 hover:text-[#4a5548] text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://ai.munione.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9A7B4F] hover:text-[#8A6B3F] text-sm font-medium transition-colors"
          >
            {dict.nav.healingConsultant}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={href(link.href)}
              className="text-stone-400 hover:text-[#4a5548] text-xs transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/internal/flow-system"
            className="text-stone-400 hover:text-[#9A7B4F] text-xs font-medium transition-colors"
          >
            MAX
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 -mt-4 mb-6">
          <Link
            href={href("/meridian-observatory-lite")}
            prefetch={false}
            className="text-stone-400 hover:text-[#9A7B4F] text-xs font-medium tracking-wide transition-colors"
          >
            {dict.footer.meridianObservatory}
          </Link>
          <Link
            href={href("/meridian-observatory")}
            prefetch={false}
            className="text-stone-400 hover:text-[#9A7B4F] text-xs font-medium tracking-wide transition-colors"
          >
            {dict.footer.meridianObservatoryPro}
          </Link>
        </div>

        <p className="text-stone-400 text-xs">{dict.footer.note}</p>
      </div>
    </footer>
  );
}

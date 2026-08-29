"use client";

import Link from "next/link";
import { LOCALES, localeHref, type Locale } from "@/i18n/config";
import { useLocalePath } from "@/i18n/useLocale";

const LABELS: Record<Locale, string> = {
  zh: "中",
  en: "EN",
};

const FULL_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "English",
};

/** 語言切換：停在同一頁面、只換前綴 */
export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const { locale, path, dict } = useLocalePath();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-stone-200 bg-white/70 p-0.5 ${className}`}
      role="group"
      aria-label={dict.nav.languageLabel}
    >
      {LOCALES.map((target) => {
        const isActive = target === locale;

        return (
          <Link
            key={target}
            href={localeHref(target, path)}
            hrefLang={target}
            aria-label={FULL_LABELS[target]}
            aria-current={isActive ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
              isActive
                ? "bg-[#4a5548] text-white"
                : "text-stone-500 hover:text-[#4a5548]"
            }`}
          >
            {LABELS[target]}
          </Link>
        );
      })}
    </div>
  );
}

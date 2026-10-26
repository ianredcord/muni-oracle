"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PAGE_TEXT } from "@/data/threeCard/pageText";
import { localeHref, type Locale } from "@/i18n/config";
import { getDeviceId } from "@/lib/threeCard/device";
import { getCachedRender, readingStore } from "@/lib/threeCard/storage";
import type { ReadingRecord } from "@/lib/threeCard/types";

export default function HistoryClient({ locale }: { locale: Locale }) {
  const t = PAGE_TEXT[locale];
  const [records, setRecords] = useState<ReadingRecord[] | null>(null);

  useEffect(() => {
    let alive = true;
    readingStore().listRecent(getDeviceId(), 100).then((rs) => { if (alive) setRecords(rs); });
    return () => { alive = false; };
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Header />
      <main className="relative z-10 container mx-auto px-4 pt-24 pb-16 max-w-3xl">
        <h1 className="font-serif text-3xl font-bold text-[#4a5548] text-center mb-8">{t.historyTitle}</h1>
        {records && records.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-500 mb-6">{t.historyEmpty}</p>
            <Link href={localeHref(locale, "/tarot/three-card")} className="rounded-full bg-[#4a5548] text-white px-8 py-3">{t.drawAgain}</Link>
          </div>
        )}
        <ul className="space-y-3">
          {records?.map((r) => {
            const cached = getCachedRender(r.reading_id);
            const names = cached ? cached.cards.map((c) => c.displayName).join(" → ") : r.cards.join(" → ");
            return (
              <li key={r.reading_id}>
                <Link href={localeHref(locale, `/tarot/three-card/reading/${r.reading_id}`)} className="block rounded-2xl bg-white/80 backdrop-blur-sm px-5 py-4 border border-white/60 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="text-xs text-stone-400">{new Date(r.created_at).toLocaleString(locale === "zh" ? "zh-TW" : "en")}　·　{t.modeNames[r.mode]}</div>
                  <div className="font-serif text-[#4a5548] mt-1">{names}</div>
                </Link>
              </li>
            );
          })}
        </ul>
        {records && records.length > 0 && (
          <p className="mt-8 text-center">
            <Link href={localeHref(locale, "/tarot/three-card")} className="rounded-full bg-[#4a5548] text-white px-8 py-3">{t.drawAgain}</Link>
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}

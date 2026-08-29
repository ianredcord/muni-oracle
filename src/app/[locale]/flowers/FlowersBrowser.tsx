"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { localeHref, type Locale } from "@/i18n/config";

export type BrowserFlower = {
  slug: string;
  name: string;
  image: string;
  /** 所屬情緒分類 slug；Rescue 複方為 null */
  groupSlug: string | null;
  /** 在該分類中的情緒主題 */
  theme: string | null;
};

export type BrowserGroup = {
  slug: string;
  title: string;
  nameEn: string;
  description: string;
  examples: string[];
  count: number;
};

const ALL = "all";
const RESCUE = "rescue";

export type BrowserCopy = {
  filterHint: string;
  filterAll: string;
  rescueTitle: string;
  rescueDescription: string;
  emptyGroup: string;
};

export default function FlowersBrowser({
  locale,
  flowers,
  groups,
  rescueCount,
  initialGroup,
  copy,
}: {
  locale: Locale;
  flowers: BrowserFlower[];
  groups: BrowserGroup[];
  rescueCount: number;
  /** 由 ?emotion= 帶入的預設分類 */
  initialGroup?: string;
  copy: BrowserCopy;
}) {
  const [active, setActive] = useState<string>(initialGroup ?? ALL);

  const activeGroup = groups.find((g) => g.slug === active);
  const visible = flowers.filter((f) => {
    if (active === ALL) return true;
    if (active === RESCUE) return f.groupSlug === null;
    return f.groupSlug === active;
  });

  const chipBase =
    "rounded-full px-4 py-2 text-sm transition-all border whitespace-nowrap";
  const chipOn = "bg-[#4a5548] text-white border-[#4a5548] shadow-sm";
  const chipOff =
    "bg-white/70 text-stone-600 border-stone-200 hover:border-[#9A7B4F]/50 hover:text-[#9A7B4F]";

  return (
    <>
      {/* 情緒篩選 */}
      <section className="mb-8">
        <p className="text-center text-sm text-stone-400 mb-4">
          {copy.filterHint}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActive(ALL)}
            className={`${chipBase} ${active === ALL ? chipOn : chipOff}`}
          >
            {copy.filterAll} {flowers.length}
          </button>
          {groups.map((g) => (
            <button
              key={g.slug}
              onClick={() => setActive(g.slug)}
              className={`${chipBase} ${active === g.slug ? chipOn : chipOff}`}
            >
              {g.title} {g.count}
            </button>
          ))}
          {rescueCount > 0 && (
            <button
              onClick={() => setActive(RESCUE)}
              className={`${chipBase} ${active === RESCUE ? chipOn : chipOff}`}
            >
              {copy.rescueTitle} {rescueCount}
            </button>
          )}
        </div>
      </section>

      {/* 選中分類的說明 */}
      {activeGroup && (
        <div className="max-w-2xl mx-auto mb-10 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-sm border border-[#9A7B4F]/20">
          <div className="flex items-baseline gap-2 mb-2">
            <h2 className="font-serif text-lg font-bold text-[#4a5548]">
              {activeGroup.title}
            </h2>
            <span className="text-xs text-stone-400">{activeGroup.nameEn}</span>
          </div>
          <p className="text-stone-600 text-sm leading-relaxed mb-3">
            {activeGroup.description}
          </p>
          {activeGroup.examples.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {activeGroup.examples.map((ex) => (
                <span
                  key={ex}
                  className="text-xs text-[#9A7B4F] bg-[#9A7B4F]/10 px-3 py-1 rounded-full"
                >
                  「{ex}」
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {active === RESCUE && (
        <div className="max-w-2xl mx-auto mb-10 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-sm border border-[#9A7B4F]/20">
          <h2 className="font-serif text-lg font-bold text-[#4a5548] mb-2">
            {copy.rescueTitle}
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            {copy.rescueDescription}
          </p>
        </div>
      )}

      {/* 花精列表 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {visible.map((flower) => (
          <Link key={flower.slug} href={localeHref(locale, `/flowers/${flower.slug}`)} className="group">
            <div className="h-full bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={flower.image}
                  alt={flower.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 23vw, 18vw"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-medium text-[#4a5548] truncate">
                  {flower.name}
                </h3>
                {flower.theme && (
                  <p className="text-[11px] text-stone-400 mt-1 leading-snug line-clamp-2">
                    {flower.theme}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-center text-stone-400 py-12">{copy.emptyGroup}</p>
      )}
    </>
  );
}

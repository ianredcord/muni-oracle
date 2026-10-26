// src/components/MingyurQuote.tsx
// 「安住片刻 · 仁波切的話」— 抽牌結果頁共用區塊
// 呈現與該牌情境配對的明就仁波切箴言（逐字引用 + 出處）

import type { MingyurCard } from "@/data/mingyur";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function MingyurQuoteSection({
  locale,
  card,
}: {
  locale: Locale;
  card: MingyurCard;
}) {
  const dict = getDictionary(locale);
  const hasPage = card.page.length > 0;
  const bookLabel = locale === "zh" ? `《${card.book}》` : card.book;
  const sourceLabel = hasPage ? `${bookLabel}${locale === "zh" ? "" : ", p. "}${card.page}` : bookLabel;
  const paragraphs = card.quote.split("\n");

  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm border border-[#9A7B4F]/20">
      {/* 標題 */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#9A7B4F] to-[#9A7B4F]/30" />
        <h2 className="font-serif text-xl font-bold text-[#4a5548]">
          {dict.mingyur.sectionTitle}
        </h2>
      </div>

      {/* 箴言 */}
      <blockquote className="relative pl-5 border-l-2 border-[#9A7B4F]/30">
        <div className="space-y-3">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-serif text-lg md:text-xl text-[#4a5548] leading-loose"
            >
              {p}
            </p>
          ))}
        </div>
        <footer className="mt-4 text-sm text-[#9A7B4F] font-medium">
          — {sourceLabel}
        </footer>
      </blockquote>

      {/* 循線閱讀提示 */}
      <p className="mt-5 text-xs text-stone-400 leading-relaxed">
        {dict.mingyur.attribution}
        {hasPage && (
          <>
            {" "}
            {dict.mingyur.readMore
              .replace("{book}", card.book) /* 字典模板已含書名號，這裡只放書名 */
              .replace("{page}", card.page)}
          </>
        )}
      </p>
    </section>
  );
}

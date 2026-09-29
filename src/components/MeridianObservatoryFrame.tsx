import Link from "next/link";
import { localeHref, type Locale } from "@/i18n/config";

// 經絡觀察室外框：MUNI 標題列 + 同源 iframe。
// viewer 是 public/meridian-viewer/ 下的獨立靜態頁（由 scripts/sync-meridian-viewer.sh 同步），
// 引擎與模型在進入本頁後才開始下載。PRO 的 B 對照視窗會以 viewer 自身網址加 ?compare=1 再嵌一層，
// 因此 iframe 必須指向 viewer 本身而非外框頁。

export type MeridianFrameCopy = {
  title: string;
  badge: string;
  note: string;
  back: string;
  openFull: string;
  iframeTitle: string;
  switchLabel: string;
};

export function MeridianObservatoryFrame({
  locale,
  copy,
  viewerSrc,
  switchPath,
}: {
  locale: Locale;
  copy: MeridianFrameCopy;
  viewerSrc: string;
  /** 另一個版本（簡易版／PRO）的外框頁路徑 */
  switchPath: string;
}) {
  return (
    <div className="flex flex-col h-[100dvh] bg-[#F9F7F2] overflow-hidden">
      <header className="shrink-0 flex items-center justify-between gap-3 px-4 py-2.5 border-b border-stone-200 bg-[#F9F7F2]/95">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={localeHref(locale, "/")}
            className="font-serif text-lg font-bold text-[#4a5548] tracking-wide shrink-0"
          >
            MUNI
          </Link>
          <span className="h-4 w-px bg-stone-300 shrink-0" aria-hidden="true" />
          <div className="min-w-0">
            <h1 className="font-serif text-base text-[#4a5548] leading-tight truncate">
              {copy.title}
              <span className="ml-2 align-middle inline-block rounded-full border border-[#9A7B4F]/40 px-2 py-px text-[10px] font-sans font-medium text-[#9A7B4F]">
                {copy.badge}
              </span>
            </h1>
            <p className="hidden sm:block text-[11px] text-stone-400 truncate">
              {copy.note}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* 身體覺察的另外兩個入口，讓觀察室不是單向終點 */}
          <Link
            href="/fascia-point"
            className="text-xs text-[#9b295a] hover:text-[#4a5548] px-2 py-1.5 transition-colors whitespace-nowrap"
          >
            {locale === "zh" ? "筋膜貼" : "Fascia Point"}
          </Link>
          <Link
            href={localeHref(locale, "/muni-scent")}
            className="hidden sm:inline-block text-xs text-[#9A7B4F] hover:text-[#8A6B3F] px-2 py-1.5 transition-colors whitespace-nowrap"
          >
            {locale === "zh" ? "牟尼香" : "MUNI Scent"}
          </Link>
          <Link
            href={localeHref(locale, switchPath)}
            className="hidden sm:inline-block text-xs text-[#9A7B4F] hover:text-[#8A6B3F] font-medium px-2 py-1.5 transition-colors"
          >
            {copy.switchLabel}
          </Link>
          <a
            href={viewerSrc}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-block text-xs text-stone-500 hover:text-[#4a5548] px-2 py-1.5 transition-colors"
          >
            {copy.openFull} ↗
          </a>
          <Link
            href={localeHref(locale, "/")}
            className="rounded-full bg-[#4a5548] hover:bg-[#3d473b] text-white text-xs sm:text-sm px-4 py-1.5 transition-colors whitespace-nowrap"
          >
            ← {copy.back}
          </Link>
        </div>
      </header>

      <iframe
        src={viewerSrc}
        title={copy.iframeTitle}
        className="block w-full flex-1 min-h-0 border-0 bg-[#F9F7F2]"
        allow="fullscreen"
      />
    </div>
  );
}

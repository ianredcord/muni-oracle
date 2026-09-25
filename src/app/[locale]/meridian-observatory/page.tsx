import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localeHref, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";

// 3D 經絡觀察室是獨立的靜態 viewer（public/meridian-viewer/，由 scripts/sync-meridian-viewer.sh 同步），
// 這裡只提供 MUNI 外框與返回入口，以同源 iframe 載入；引擎與模型在進入本頁後才開始下載。
// viewer 的 B 對照視窗會以自身網址加 ?compare=1 再嵌一層，因此 iframe 必須指向 viewer 本身而非本頁。
const VIEWER_SRC = "/meridian-viewer/index.html";

const PAGE_COPY: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    title: string;
    badge: string;
    note: string;
    back: string;
    openFull: string;
    iframeTitle: string;
  }
> = {
  zh: {
    metaTitle: "經絡觀察室 | MUNI 牟尼",
    metaDescription:
      "3D 人體經絡研究預覽：男女模型、正經與董氏穴位疊加、解剖分層與循行示意。點位與內容未經專業驗證。",
    title: "經絡觀察室",
    badge: "研究預覽",
    note: "點位與內容未經專業校核，僅供觀察參考",
    back: "返回 MUNI",
    openFull: "全頁開啟",
    iframeTitle: "經絡觀察室 3D 人體",
  },
  en: {
    metaTitle: "Meridian Observatory | MUNI",
    metaDescription:
      "A 3D research preview of the body's meridians: male and female models, regular meridians and Tung-style points, anatomy layers and pathway sketches. Not professionally verified.",
    title: "Meridian Observatory",
    badge: "Research preview",
    note: "Points and content are unverified · viewer interface is in Chinese",
    back: "Back to MUNI",
    openFull: "Full page",
    iframeTitle: "Meridian Observatory 3D body viewer",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = PAGE_COPY[locale];

  return buildPageMetadata({
    locale,
    path: "/meridian-observatory",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function MeridianObservatoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = PAGE_COPY[locale];

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
          <a
            href={VIEWER_SRC}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-block text-xs text-stone-500 hover:text-[#4a5548] px-3 py-1.5 transition-colors"
          >
            {copy.openFull} ↗
          </a>
          <Link
            href={localeHref(locale, "/")}
            className="rounded-full bg-[#4a5548] hover:bg-[#3d473b] text-white text-xs sm:text-sm px-4 py-1.5 transition-colors"
          >
            ← {copy.back}
          </Link>
        </div>
      </header>

      <iframe
        src={VIEWER_SRC}
        title={copy.iframeTitle}
        className="block w-full flex-1 min-h-0 border-0 bg-[#F9F7F2]"
        allow="fullscreen"
      />
    </div>
  );
}

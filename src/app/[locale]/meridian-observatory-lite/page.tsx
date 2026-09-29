import { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";
import {
  MeridianObservatoryFrame,
  type MeridianFrameCopy,
} from "@/components/MeridianObservatoryFrame";

// 經絡觀察室（簡易版）：一次一條經脈、按需分包載入。
// lang 參數讓 viewer 內的「返回 MUNI」「進入 PRO」導向對應語系的外框頁。
const VIEWER_SRC: Record<Locale, string> = {
  zh: "/meridian-viewer/lite.html",
  en: "/meridian-viewer/lite.html?lang=en",
};

const PAGE_COPY: Record<
  Locale,
  MeridianFrameCopy & { metaTitle: string; metaDescription: string }
> = {
  zh: {
    metaTitle: "經絡觀察室 | MUNI 牟尼",
    metaDescription:
      "3D 人體經絡研究預覽簡易版：男女模型、十二正經逐條觀察、董氏手指與手掌、循行示意與 2D 循行圖。點位與內容未經專業驗證。",
    title: "經絡觀察室",
    badge: "研究預覽",
    note: "簡易版 · 點位與內容未經專業校核，僅供觀察參考",
    back: "返回 MUNI",
    openFull: "全頁開啟",
    iframeTitle: "經絡觀察室 3D 人體（簡易版）",
    switchLabel: "進入 PRO",
  },
  en: {
    metaTitle: "Meridian Observatory | MUNI",
    metaDescription:
      "A lighter 3D research preview of the body's meridians: male and female models, one regular meridian at a time, Tung-style finger and palm points, pathway sketches and 2D charts. Not professionally verified.",
    title: "Meridian Observatory",
    badge: "Research preview",
    note: "Lite version · points and content are unverified · viewer interface is in Chinese",
    back: "Back to MUNI",
    openFull: "Full page",
    iframeTitle: "Meridian Observatory 3D body viewer (lite)",
    switchLabel: "Open PRO",
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
    path: "/meridian-observatory-lite",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function MeridianObservatoryLitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <MeridianObservatoryFrame
      locale={locale}
      copy={PAGE_COPY[locale]}
      viewerSrc={VIEWER_SRC[locale]}
      switchPath="/meridian-observatory/pro"
    />
  );
}

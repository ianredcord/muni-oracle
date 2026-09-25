import { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/i18n/metadata";
import {
  MeridianObservatoryFrame,
  type MeridianFrameCopy,
} from "@/components/MeridianObservatoryFrame";

// 經絡觀察室PRO：完整功能版。保留原網址，舊連結功能不變。
const VIEWER_SRC = "/meridian-viewer/pro.html";

const PAGE_COPY: Record<
  Locale,
  MeridianFrameCopy & { metaTitle: string; metaDescription: string }
> = {
  zh: {
    metaTitle: "經絡觀察室PRO | MUNI 牟尼",
    metaDescription:
      "3D 人體經絡研究預覽完整版：男女模型、正經與董氏穴位疊加、解剖分層、循行示意與教學工作台。點位與內容未經專業驗證。",
    title: "經絡觀察室PRO",
    badge: "研究預覽",
    note: "點位與內容未經專業校核，僅供觀察參考",
    back: "返回 MUNI",
    openFull: "全頁開啟",
    iframeTitle: "經絡觀察室PRO 3D 人體",
    switchLabel: "簡易版",
  },
  en: {
    metaTitle: "Meridian Observatory PRO | MUNI",
    metaDescription:
      "The full 3D research preview of the body's meridians: male and female models, regular meridians and Tung-style points, anatomy layers, pathway sketches and a teaching workbench. Not professionally verified.",
    title: "Meridian Observatory PRO",
    badge: "Research preview",
    note: "Points and content are unverified · viewer interface is in Chinese",
    back: "Back to MUNI",
    openFull: "Full page",
    iframeTitle: "Meridian Observatory PRO 3D body viewer",
    switchLabel: "Lite version",
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

export default async function MeridianObservatoryProPage({
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
      viewerSrc={VIEWER_SRC}
      switchPath="/meridian-observatory-lite"
    />
  );
}

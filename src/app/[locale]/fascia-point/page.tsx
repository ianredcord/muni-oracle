import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { isLocale } from "@/i18n/config";
import FasciaPointClient from "./FasciaPointClient";
import { Footer } from "@/components/Footer";
import "./fascia-point.css";

export const metadata: Metadata = {
  title: "Fascia Point 筋膜貼 — MUNI Edition | MUNI ONE",
  description: "貼上 Fascia Point 筋膜貼，陪你在一天之中找回身體的舒適與自在。MUNI Edition 加入牟尼共振技術，並連結筋膜觀察室的身體學習。",
  // 正式發布：允許索引；目前只有繁中版，canonical 固定為無語言前綴的網址
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.munione.co/fascia-point" },
  openGraph: {
    title: "Fascia Point 筋膜貼 — MUNI Edition",
    description: "貼上筋膜貼，陪你在一天之中找回身體的舒適與自在。MUNI Edition 加入牟尼共振技術。",
    url: "https://www.munione.co/fascia-point",
    images: [{ url: "https://www.munione.co/images/fascia-point/packaging-mockup.webp" }],
  },
};

export default async function FasciaPointPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  // The first reviewed edition is Traditional Chinese.
  if (locale !== "zh") redirect("/fascia-point");
  // 產品頁保留自己的頁首；頁尾接回全站 Footer，讓訪客能回到其他 MUNI 入口與語言切換
  return (
    <>
      <FasciaPointClient />
      <Footer />
    </>
  );
}

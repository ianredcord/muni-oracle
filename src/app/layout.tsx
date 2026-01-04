import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MUNI 牟尼花精 | 巴哈花精牌卡指引",
  description: "在大自然的智慧中，找到內在的平衡與安定。讓花精成為你的心靈指引。",
  keywords: ["MUNI", "牟尼", "花精", "巴哈花精", "牌卡", "療癒", "身心靈"],
  openGraph: {
    title: "MUNI 牟尼花精 | 巴哈花精牌卡指引",
    description: "在大自然的智慧中，找到內在的平衡與安定。讓花精成為你的心靈指引。",
    url: "https://munione.co",
    siteName: "MUNI 牟尼花精",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSerifTC.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

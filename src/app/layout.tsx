import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// 襯線體改為自架子集化字體，@font-face 宣告於 globals.css。
// 只含站內實際會用到的 2,383 個字元（原字型 20,939 字形），
// 單檔載入後全站命中快取，換頁不再產生字體請求，也免除第三方連線。
// 重新產生方式見 docs/fonts.md。

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
    images: [
      {
        url: "https://munione.co/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "MUNI 牟尼花精 — 自然療癒・花精牌卡・身心靈指引",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MUNI 牟尼花精 | 巴哈花精牌卡指引",
    description: "在大自然的智慧中，找到內在的平衡與安定。讓花精成為你的心靈指引。",
    images: ["https://munione.co/images/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        {/* 襯線體先載入，避免標題等到 CSS 解析完才開始下載 */}
        <link
          rel="preload"
          href="/fonts/NotoSerifTC-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9N4ZPC9CCG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9N4ZPC9CCG');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

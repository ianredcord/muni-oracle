import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import Script from "next/script";
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
    images: [
      {
        url: "https://munione.co/images/home-bg.jpg",
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
    images: ["https://munione.co/images/home-bg.jpg"],
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
      <body className={`${notoSerifTC.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import "../globals.css";
import { HTML_LANG, LOCALES, isLocale, type Locale } from "@/i18n/config";
import { buildSiteMetadata } from "@/i18n/metadata";

// 襯線體改為自架子集化字體，@font-face 宣告於 globals.css。
// 只含站內實際會用到的 2,383 個字元（原字型 20,939 字形），
// 單檔載入後全站命中快取，換頁不再產生字體請求，也免除第三方連線。
// 重新產生方式見 docs/fonts.md。

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return buildSiteMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const typedLocale: Locale = locale;

  return (
    <html lang={HTML_LANG[typedLocale]}>
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
      <body className="antialiased" data-locale={typedLocale}>
        {children}
      </body>
    </html>
  );
}

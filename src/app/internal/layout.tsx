import type { Metadata } from "next";
import "../globals.css";

// 內部知識系統（僅中文），與公開站的 [locale] 版面各自獨立。
export const metadata: Metadata = {
  title: "MUNI Flow System",
  robots: { index: false, follow: false },
};

export default function InternalRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">{children}</body>
    </html>
  );
}

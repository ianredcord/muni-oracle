import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "搜尋 | 整合系統",
  robots: { index: false, follow: false },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";
import TarotResultClient from "./TarotResultClient";

export const metadata: Metadata = {
  title: "塔羅牌指引結果 | MUNI 牟尼塔羅牌",
  description: "查看你的牟尼塔羅牌指引結果，包含快速解讀、深度分析與花精療癒建議。",
};

export default function TarotResultPage() {
  return <TarotResultClient />;
}

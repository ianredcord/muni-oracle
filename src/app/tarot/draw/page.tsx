import type { Metadata } from "next";
import TarotDrawClient from "./TarotDrawClient";

export const metadata: Metadata = {
  title: "牟尼塔羅牌抽牌 | MUNI",
  description: "78 張牟尼塔羅牌，憑直覺選一張，接收今日的能量指引。",
};

export default function TarotDrawPage() {
  return <TarotDrawClient />;
}

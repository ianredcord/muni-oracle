import type { Metadata } from "next";
import TarotClient from "./TarotClient";

export const metadata: Metadata = {
  title: "牟尼塔羅牌｜78 張花精塔羅指引系統 | MUNI",
  description:
    "以巴赫花精智慧為核心，融合塔羅原型意象的 78 張療癒指引系統。每張牌卡對應一種花精，在塔羅的原型智慧中找到你的療癒方向。",
};

export default function TarotPage() {
  return <TarotClient />;
}

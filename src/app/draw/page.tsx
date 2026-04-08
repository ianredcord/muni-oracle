import type { Metadata } from "next";
import DrawClient from "./DrawClient";

export const metadata: Metadata = {
  title: "花精抽牌指引 | MUNI 牟尼花精",
  description: "靜下心來，憑直覺抽一張花精牌卡，接收來自大自然的覺察指引。",
};

export default function DrawPage() {
  return <DrawClient />;
}

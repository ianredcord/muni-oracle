import type { Metadata } from "next";
import EnergySupportClient from "./EnergySupportClient";

export const metadata: Metadata = {
  title: "MUNI 能量支持系統 | 身心靈整合方案",
  description: "以自然素材支持身心靈的能量穩定與修復，透過花精、精油、巧克力與頻率共振技術，建構完整的能量支持系統。",
};

export default function EnergySupportPage() {
  return <EnergySupportClient />;
}

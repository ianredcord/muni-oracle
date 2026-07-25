import type { Metadata } from "next";
import { FLOWERS } from "@/data/flowers.generated";
import { TAROT_CARDS } from "@/data/tarot.generated";
import JournalClient, { type CardIndex } from "./JournalClient";

export const metadata: Metadata = {
  title: "回望 | 你的牌卡足跡 · MUNI",
  description:
    "回顧你抽過的花精與塔羅牌卡，看見反覆出現的主題。紀錄只留在你自己的瀏覽器，不需帳號、不會上傳。",
  robots: { index: false, follow: true },
};

/**
 * 在伺服器端先把資料壓成輕量索引再傳給 client，
 * 避免整份 flowers/tarot 資料（含長篇解析）被打包進瀏覽器。
 */
const cardIndex: CardIndex = {
  flower: Object.fromEntries(
    FLOWERS.map((f) => [
      f.slug,
      { name: f.name, image: f.image, href: `/flowers/${f.slug}` },
    ])
  ),
  tarot: Object.fromEntries(
    TAROT_CARDS.map((c) => [
      c.slug,
      {
        name: `${c.nameZh}　${c.nameEn}`,
        image: c.image,
        href: `/tarot-encyclopedia/${c.slug}`,
      },
    ])
  ),
};

export default function JournalPage() {
  return <JournalClient index={cardIndex} />;
}

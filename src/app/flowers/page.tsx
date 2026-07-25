import type { Metadata } from "next";
import { FLOWERS } from "@/data/flowers.generated";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FrequencyBadge from "@/components/FrequencyBadge";
import {
  EMOTION_GROUPS,
  getGroupForFlower,
  getThemeForFlower,
} from "@/data/flowerEmotions";
import FlowersBrowser, {
  type BrowserFlower,
  type BrowserGroup,
} from "./FlowersBrowser";

export const metadata: Metadata = {
  title: "牟尼花精百科｜依情緒分類的 40 種巴哈花精 | MUNI",
  description:
    "依巴哈醫生的七大情緒分類瀏覽 40 種花精：恐懼、不確定、對當下缺乏興趣、孤獨、過度敏感、沮喪絕望、過度關心他人。從你現在的狀態，找到對應的花精。",
};

export default async function FlowersPage({
  searchParams,
}: {
  searchParams: Promise<{ emotion?: string }>;
}) {
  const params = await searchParams;
  // 由花精詳情頁的分類標籤連過來時，直接套用該分類
  const initialGroup =
    params?.emotion && EMOTION_GROUPS.some((g) => g.slug === params.emotion)
      ? params.emotion
      : undefined;

  // 在伺服器端組好瀏覽用資料，client 只負責篩選互動
  const browserFlowers: BrowserFlower[] = FLOWERS.map((f) => ({
    slug: f.slug,
    name: f.name,
    image: f.image,
    groupSlug: getGroupForFlower(f.slug)?.slug ?? null,
    theme: getThemeForFlower(f.slug) ?? null,
  }));

  const browserGroups: BrowserGroup[] = EMOTION_GROUPS.map((g) => ({
    slug: g.slug,
    title: g.title,
    nameEn: g.nameEn,
    description: g.description,
    examples: g.examples,
    count: g.flowers.length,
  }));

  const rescueCount = browserFlowers.filter((f) => f.groupSlug === null).length;

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      {/* 背景 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-[#F9F7F2]" />
      </div>

      {/* 固定 Header */}
      <Header />

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-6xl pt-20">
        {/* 標題 */}
        <header className="text-center mb-12 mt-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#4a5548] mb-4">
            牟尼花精百科
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            依巴哈醫生的七大情緒分類，從你現在的狀態找到對應的花精
          </p>
        </header>

        <FlowersBrowser
          flowers={browserFlowers}
          groups={browserGroups}
          rescueCount={rescueCount}
          initialGroup={initialGroup}
        />

        {/* 底部操作 */}
        <div className="mt-12 text-center">
          <Link
            href="/draw"
            className="inline-block bg-[#4a5548] hover:bg-[#3a4538] text-white rounded-full px-8 py-3 transition-colors"
          >
            抽一張今日指引
          </Link>
        </div>
      </main>

      {/* Frequency Resonance™ 技術支持 */}
      <FrequencyBadge variant="light" full />
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { emotionGroupMap } from "@/data/flow-system/emotions";
import { acupointMap } from "@/data/flow-system/acupoints";
import {
  SectionTitle,
  FiveElementBadge,
  BlueOrangeBadge,
  FlowerTable,
  RelatedLinks,
} from "@/components/flow-system";

const slugs = [
  "fear",
  "uncertainty",
  "lack-of-interest",
  "loneliness",
  "oversensitive",
  "despair",
  "over-care",
] as const;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const group = emotionGroupMap[slug];
  if (!group) return { title: "找不到頁面" };

  return {
    title: `${group.name} | 整合系統`,
    robots: { index: false, follow: false },
  };
}

export default async function EmotionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const group = emotionGroupMap[slug];
  if (!group) notFound();

  // Find related acupoint detail links
  const relatedAcupoints = group.acupointSlugs
    .map((s) => acupointMap[s])
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Internal badge */}
      <div className="fixed top-4 right-4 z-50 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
        內部測試版
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Back link */}
        <Link
          href="/internal/flow-system/emotions"
          className="inline-flex items-center gap-1.5 text-sm text-[#4a5548]/50 hover:text-[#4a5548] transition-colors mb-8"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          返回情緒族群總覽
        </Link>

        {/* Title with badges */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-[#4a5548]">
            {group.name}
          </h1>
          <FiveElementBadge element={group.element} />
          <BlueOrangeBadge type={group.somaniks} />
        </div>

        {/* Info grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Flow position */}
          <div className="rounded-2xl border border-stone-200/60 bg-white p-5">
            <h3 className="text-xs font-medium text-[#4a5548]/40 uppercase tracking-wider mb-2">
              一氣周流位置
            </h3>
            <p className="font-medium text-[#4a5548]">
              {group.compassPosition}
            </p>
            <p className="mt-1 text-sm text-[#4a5548]/60">
              {group.flowDescription}
            </p>
          </div>

          {/* Wu Shen */}
          <div className="rounded-2xl border border-stone-200/60 bg-white p-5">
            <h3 className="text-xs font-medium text-[#4a5548]/40 uppercase tracking-wider mb-2">
              五神
            </h3>
            <p className="font-medium text-[#4a5548]">{group.wuShen}</p>
          </div>

          {/* Farrell layer */}
          <div className="rounded-2xl border border-stone-200/60 bg-white p-5">
            <h3 className="text-xs font-medium text-[#4a5548]/40 uppercase tracking-wider mb-2">
              Farrell 層次
            </h3>
            <p className="font-medium text-[#4a5548]">
              {group.farrellLayer}
            </p>
            <p className="mt-1 text-sm text-[#4a5548]/60">
              {group.farrellDescription}
            </p>
          </div>

          {/* Acupoint codes */}
          <div className="rounded-2xl border border-stone-200/60 bg-white p-5">
            <h3 className="text-xs font-medium text-[#4a5548]/40 uppercase tracking-wider mb-2">
              對應八穴
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.acupointSlugs.map((s) => {
                const ap = acupointMap[s];
                if (!ap) return null;
                return (
                  <Link
                    key={s}
                    href={`/internal/flow-system/acupoints/${s}`}
                    className="inline-flex items-center gap-1 rounded-lg bg-[#F9F7F2] px-3 py-1.5 text-sm font-mono text-[#4a5548] hover:bg-stone-200/60 transition-colors"
                  >
                    {ap.code}
                    <span className="text-[#4a5548]/50 font-sans">
                      {ap.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Somaniks */}
          <div className="rounded-2xl border border-stone-200/60 bg-white p-5">
            <h3 className="text-xs font-medium text-[#4a5548]/40 uppercase tracking-wider mb-2">
              Somaniks
            </h3>
            <p className="text-sm text-[#4a5548]/70">{group.somaniksNote}</p>
          </div>
        </div>

        {/* Flower Table */}
        <section className="mt-16">
          <SectionTitle title="花精對應表" />
          <div className="mt-8">
            <FlowerTable flowers={group.flowers} />
          </div>
        </section>

        {/* Related Links */}
        <div className="mt-16">
          <RelatedLinks
            links={[
              ...relatedAcupoints.map((ap) => ({
                label: `${ap.fullName}`,
                href: `/internal/flow-system/acupoints/${ap.slug}`,
                description: `${ap.meridian} → ${ap.extraordinaryVessel}`,
              })),
              {
                label: "情緒族群總覽",
                href: "/internal/flow-system/emotions",
                description: "查看全部七大族群",
              },
              {
                label: "返回系統首頁",
                href: "/internal/flow-system",
                description: "回到整合系統總覽",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

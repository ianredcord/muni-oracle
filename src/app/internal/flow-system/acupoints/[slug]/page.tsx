import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { acupoints, acupointMap } from "@/data/flow-system/acupoints";
import { emotionGroups } from "@/data/flow-system/emotions";
import {
  SectionTitle,
  FiveElementBadge,
  BlueOrangeBadge,
  EmotionCard,
  RelatedLinks,
} from "@/components/flow-system";

const slugs = [
  "ki-6",
  "sp-4",
  "si-3",
  "pc-6",
  "sj-5",
  "gb-41",
  "lu-7",
  "ub-62",
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
  const acupoint = acupointMap[slug];
  if (!acupoint) return { title: "找不到頁面" };

  return {
    title: `${acupoint.fullName} | 整合系統`,
    robots: { index: false, follow: false },
  };
}

export default async function AcupointDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const acupoint = acupointMap[slug];
  if (!acupoint) notFound();

  // Find emotion groups that reference this acupoint
  const relatedEmotionGroups = emotionGroups.filter((g) =>
    g.acupointSlugs.includes(slug)
  );

  // Find all flowers across all groups that use this acupoint as mainPoint or couplePoint
  const relatedFlowers: {
    name: string;
    emotionTheme: string;
    groupName: string;
    groupSlug: string;
    role: string;
  }[] = [];

  for (const group of emotionGroups) {
    for (const flower of group.flowers) {
      if (
        flower.mainPoint === acupoint.code ||
        flower.couplePoint === acupoint.code
      ) {
        relatedFlowers.push({
          name: flower.name,
          emotionTheme: flower.emotionTheme,
          groupName: group.name,
          groupSlug: group.slug,
          role:
            flower.mainPoint === acupoint.code ? "主穴" : "配穴",
        });
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Internal badge */}
      <div className="fixed top-4 right-4 z-50 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
        內部測試版
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Back link */}
        <Link
          href="/internal/flow-system/acupoints"
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
          返回八穴總覽
        </Link>

        {/* Title with badges */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-[#4a5548]">
            {acupoint.fullName}
          </h1>
          <FiveElementBadge element={acupoint.element} />
          <BlueOrangeBadge type={acupoint.somaniks} />
        </div>

        {/* Info grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-stone-200/60 bg-white p-5">
            <h3 className="text-xs font-medium text-[#4a5548]/40 uppercase tracking-wider mb-2">
              所在正經
            </h3>
            <p className="font-medium text-[#4a5548]">{acupoint.meridian}</p>
          </div>

          <div className="rounded-2xl border border-stone-200/60 bg-white p-5">
            <h3 className="text-xs font-medium text-[#4a5548]/40 uppercase tracking-wider mb-2">
              通奇經
            </h3>
            <p className="font-medium text-[#4a5548]">
              {acupoint.extraordinaryVessel}
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200/60 bg-white p-5">
            <h3 className="text-xs font-medium text-[#4a5548]/40 uppercase tracking-wider mb-2">
              一氣周流位置
            </h3>
            <p className="font-medium text-[#4a5548]">
              {acupoint.flowPosition}
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200/60 bg-white p-5 sm:col-span-2 lg:col-span-2">
            <h3 className="text-xs font-medium text-[#4a5548]/40 uppercase tracking-wider mb-2">
              功能
            </h3>
            <p className="text-[#4a5548]/80 leading-relaxed">
              {acupoint.functionText}
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200/60 bg-white p-5">
            <h3 className="text-xs font-medium text-[#4a5548]/40 uppercase tracking-wider mb-2">
              Somaniks
            </h3>
            <p className="text-sm text-[#4a5548]/70">
              {acupoint.somaniksNote}
            </p>
          </div>
        </div>

        {/* Related Emotion Groups */}
        {relatedEmotionGroups.length > 0 && (
          <section className="mt-16">
            <SectionTitle title="對應情緒族群" />
            <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {relatedEmotionGroups.map((g) => (
                <EmotionCard
                  key={g.slug}
                  emotion={g}
                  href={`/internal/flow-system/emotions/${g.slug}`}
                />
              ))}
            </div>
          </section>
        )}

        {/* Related Flowers */}
        {relatedFlowers.length > 0 && (
          <section className="mt-16">
            <SectionTitle title="相關花精" />
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-200/60 text-left text-[#4a5548]/50">
                    <th className="pb-3 pr-4 font-medium">花精</th>
                    <th className="pb-3 pr-4 font-medium">情緒主題</th>
                    <th className="pb-3 pr-4 font-medium">角色</th>
                    <th className="pb-3 font-medium">所屬族群</th>
                  </tr>
                </thead>
                <tbody className="text-[#4a5548]/70">
                  {relatedFlowers.map((f, i) => (
                    <tr
                      key={`${f.name}-${i}`}
                      className="border-b border-stone-100 last:border-0"
                    >
                      <td className="py-3 pr-4 font-medium text-[#4a5548]">
                        {f.name}
                      </td>
                      <td className="py-3 pr-4">{f.emotionTheme}</td>
                      <td className="py-3 pr-4">
                        <span
                          className={`inline-block rounded-md px-2 py-0.5 text-xs font-medium ${
                            f.role === "主穴"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          {f.role}
                        </span>
                      </td>
                      <td className="py-3">
                        <Link
                          href={`/internal/flow-system/emotions/${f.groupSlug}`}
                          className="text-[#4a5548] hover:underline"
                        >
                          {f.groupName}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Related Links */}
        <div className="mt-16">
          <RelatedLinks
            links={[
              ...relatedEmotionGroups.map((g) => ({
                label: g.name,
                href: `/internal/flow-system/emotions/${g.slug}`,
                description: `${g.compassPosition} / ${g.wuShen}`,
              })),
              {
                label: "奇經八穴總覽",
                href: "/internal/flow-system/acupoints",
                description: "查看全部八穴",
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

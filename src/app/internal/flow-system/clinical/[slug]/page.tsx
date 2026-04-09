import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  clinicalScenarios,
  clinicalScenarioMap,
} from "@/data/flow-system/clinical";
import { acupoints } from "@/data/flow-system/acupoints";
import {
  SectionTitle,
  BlueOrangeBadge,
  RelatedLinks,
} from "@/components/flow-system";

const slugs = clinicalScenarios.map((s) => s.slug);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scenario = clinicalScenarioMap[slug];
  if (!scenario) return { title: "找不到頁面" };

  return {
    title: `${scenario.title} | 臨床情境`,
    robots: { index: false, follow: false },
  };
}

export default async function ClinicalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scenario = clinicalScenarioMap[slug];
  if (!scenario) notFound();

  // Build acupoint lookup by code for linking
  const acupointByCode = Object.fromEntries(
    acupoints.map((a) => [a.code, a])
  );

  // Related acupoint links
  const relatedAcupointLinks = scenario.acupointCodes
    .map((code) => acupointByCode[code])
    .filter(Boolean)
    .map((ap) => ({
      label: ap.fullName,
      href: `/internal/flow-system/acupoints/${ap.slug}`,
      description: `${ap.meridian} → ${ap.extraordinaryVessel}`,
    }));

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Internal badge */}
      <div className="fixed top-4 right-4 z-50 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
        內部測試版
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Back link */}
        <Link
          href="/internal/flow-system/clinical"
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
          返回臨床情境總覽
        </Link>

        {/* Title with color indicator and somaniks badge */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="text-3xl">{scenario.color}</span>
          <h1 className="font-serif text-3xl md:text-4xl text-[#4a5548]">
            {scenario.title}
          </h1>
          {scenario.somaniks === "mixed" ? (
            <div className="flex gap-1.5">
              <BlueOrangeBadge type="drain" />
              <BlueOrangeBadge type="tonify" />
            </div>
          ) : (
            <BlueOrangeBadge type={scenario.somaniks} />
          )}
        </div>

        {/* 1. Overview */}
        <section className="mb-12">
          <SectionTitle title="概述" />
          <div className="mt-6 rounded-2xl border border-stone-200/60 bg-white p-6 md:p-8">
            <p className="text-base md:text-lg leading-relaxed text-[#4a5548]/80">
              {scenario.detailedDescription}
            </p>
          </div>
        </section>

        {/* 2. Farrell Steps */}
        <section className="mb-12">
          <SectionTitle title="Farrell 評估步驟" />
          <div className="mt-6 rounded-2xl border border-stone-200/60 bg-white p-6 md:p-8">
            <ol className="space-y-4">
              {scenario.farrellSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#4a5548]/10 text-sm font-medium text-[#4a5548]">
                    {i + 1}
                  </span>
                  <p className="text-[#4a5548]/80 leading-relaxed pt-0.5">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 3. Acupoint Details */}
        <section className="mb-12">
          <SectionTitle title="穴位配置" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {scenario.acupointDetails.map((ap) => {
              const acupoint = acupointByCode[ap.code];
              return (
                <div
                  key={ap.code}
                  className="rounded-2xl border border-stone-200/60 bg-white p-5 md:p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-lg font-semibold text-[#4a5548]">
                      {ap.code}
                    </span>
                    {acupoint && (
                      <span className="text-sm text-[#4a5548]/50">
                        {acupoint.name}
                      </span>
                    )}
                    {acupoint && (
                      <BlueOrangeBadge type={acupoint.somaniks} size="sm" />
                    )}
                  </div>
                  <p className="text-sm text-[#4a5548]/70 leading-relaxed">
                    {ap.role}
                  </p>
                  {acupoint && (
                    <Link
                      href={`/internal/flow-system/acupoints/${acupoint.slug}`}
                      className="mt-3 inline-block text-xs text-[#4a5548]/40 hover:text-[#4a5548] transition-colors"
                    >
                      查看穴位詳情 →
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Somaniks Protocol */}
        <section className="mb-12">
          <SectionTitle title="Somaniks 策略" />
          <div className="mt-6 rounded-2xl border border-stone-200/60 bg-white p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {scenario.somaniks === "mixed" ? (
                <>
                  <BlueOrangeBadge type="drain" size="sm" />
                  <BlueOrangeBadge type="tonify" size="sm" />
                  {scenario.somaniksDetail && (
                    <span className="text-sm text-[#4a5548]/50">
                      {scenario.somaniksDetail}
                    </span>
                  )}
                </>
              ) : (
                <BlueOrangeBadge type={scenario.somaniks} />
              )}
            </div>
            <p className="text-[#4a5548]/80 leading-relaxed">
              {scenario.somaniksProtocol}
            </p>
          </div>
        </section>

        {/* 5. Flowers */}
        <section className="mb-12">
          <SectionTitle title="花精配合" />
          <div className="mt-6 flex flex-wrap gap-2">
            {scenario.flowers.map((flower) => (
              <span
                key={flower}
                className="inline-block rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-1.5 text-sm text-emerald-700"
              >
                {flower}
              </span>
            ))}
          </div>
        </section>

        {/* 6. Herbal Details */}
        <section className="mb-12">
          <SectionTitle title="漢藥支持" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {scenario.herbalDetails.map((herb) => (
              <div
                key={herb.name}
                className="rounded-2xl border border-stone-200/60 bg-white p-5 md:p-6"
              >
                <h3 className="font-serif text-lg text-[#4a5548] mb-2">
                  {herb.name}
                </h3>
                <p className="text-sm text-[#4a5548]/70 leading-relaxed">
                  {herb.function}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <div className="mt-16">
          <RelatedLinks
            links={[
              ...relatedAcupointLinks,
              {
                label: "臨床情境總覽",
                href: "/internal/flow-system/clinical",
                description: "查看全部五大臨床情境",
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

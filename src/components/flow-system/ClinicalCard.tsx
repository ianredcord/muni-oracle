import Link from "next/link";
import BlueOrangeBadge from "./BlueOrangeBadge";
import type { SomaniksType } from "@/data/flow-system/types";

interface ClinicalCardProps {
  scenario: {
    slug: string;
    title: string;
    color: string;
    flowDescription: string;
    farrellJudgment: string;
    acupointCodes: string[];
    flowers: string[];
    somaniks: SomaniksType | "mixed";
    herbalFormula: string;
  };
  href?: string;
}

export default function ClinicalCard({ scenario, href }: ClinicalCardProps) {
  const content = (
    <div className="rounded-2xl border border-stone-200/60 bg-white shadow-sm p-5 md:p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
      {/* Title row */}
      <div className="flex items-start gap-2">
        <span className="text-lg">{scenario.color}</span>
        <h3 className="font-serif text-lg md:text-xl text-[#4a5548]">
          {scenario.title}
        </h3>
      </div>

      {/* Flow description */}
      <p className="mt-3 text-sm text-[#4a5548]/70 leading-relaxed">
        {scenario.flowDescription}
      </p>

      {/* Acupoint codes */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {scenario.acupointCodes.map((code) => (
          <span
            key={code}
            className="inline-block rounded-md bg-[#F9F7F2] px-2 py-0.5 text-xs font-mono text-[#4a5548]/70"
          >
            {code}
          </span>
        ))}
      </div>

      {/* Flowers */}
      {scenario.flowers.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {scenario.flowers.map((flower) => (
            <span
              key={flower}
              className="inline-block rounded-md bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700/70"
            >
              {flower}
            </span>
          ))}
        </div>
      )}

      {/* Bottom row: somaniks + herbal */}
      <div className="mt-4 flex items-center justify-between gap-2 flex-wrap">
        {scenario.somaniks === "mixed" ? (
          <div className="flex gap-1.5">
            <BlueOrangeBadge type="drain" size="sm" />
            <BlueOrangeBadge type="tonify" size="sm" />
          </div>
        ) : (
          <BlueOrangeBadge type={scenario.somaniks} size="sm" />
        )}
        {scenario.herbalFormula && (
          <span className="text-xs text-[#4a5548]/40">
            {scenario.herbalFormula}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

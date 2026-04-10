import Link from "next/link";
import FiveElementBadge from "./FiveElementBadge";
import BlueOrangeBadge from "./BlueOrangeBadge";
import type { FiveElement, SomaniksType } from "@/data/flow-system/types";

interface AcupointCardProps {
  acupoint: {
    slug: string;
    code: string;
    name: string;
    fullName: string;
    meridian: string;
    extraordinaryVessel: string;
    flowPosition: string;
    element: FiveElement;
    somaniks: SomaniksType;
    somaniksNote: string;
    functionText: string;
  };
  href?: string;
}

export default function AcupointCard({ acupoint, href }: AcupointCardProps) {
  const content = (
    <div className="relative rounded-2xl border border-stone-200/60 bg-white/80 backdrop-blur-sm shadow-sm p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Element badge - top right */}
      <div className="absolute top-4 right-4">
        <FiveElementBadge element={acupoint.element} />
      </div>

      {/* Full name */}
      <h3 className="font-serif text-xl md:text-2xl text-[#4a5548] pr-12">
        {acupoint.fullName}
      </h3>

      {/* Meta info */}
      <div className="mt-3 space-y-1.5 text-sm text-[#4a5548]/60">
        <p>
          <span className="text-[#4a5548]/40">所在正經：</span>
          {acupoint.meridian}
        </p>
        <p>
          <span className="text-[#4a5548]/40">通奇經：</span>
          {acupoint.extraordinaryVessel}
        </p>
        <p>
          <span className="text-[#4a5548]/40">一氣周流：</span>
          {acupoint.flowPosition}
        </p>
      </div>

      {/* Function text - truncated to 2 lines */}
      <p className="mt-3 text-sm text-[#4a5548]/70 leading-relaxed line-clamp-2">
        {acupoint.functionText}
      </p>

      {/* Somaniks badge */}
      <div className="mt-4">
        <BlueOrangeBadge type={acupoint.somaniks} size="sm" />
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

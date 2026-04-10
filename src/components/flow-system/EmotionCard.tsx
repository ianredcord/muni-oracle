import Link from "next/link";
import FiveElementBadge from "./FiveElementBadge";
import BlueOrangeBadge from "./BlueOrangeBadge";
import type { FiveElement, SomaniksType } from "@/data/flow-system/types";

interface EmotionCardProps {
  emotion: {
    slug: string;
    name: string;
    nameEn: string;
    compassPosition: string;
    wuShen: string;
    farrellLayer: string;
    acupointCodes: string[];
    somaniks: SomaniksType;
    somaniksNote: string;
    element: FiveElement;
  };
  href?: string;
}

export default function EmotionCard({ emotion, href }: EmotionCardProps) {
  const content = (
    <div className="relative rounded-2xl border border-stone-200/60 bg-white/80 backdrop-blur-sm shadow-sm p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Element badge - top right */}
      <div className="absolute top-4 right-4">
        <FiveElementBadge element={emotion.element} />
      </div>

      {/* Emotion name */}
      <h3 className="font-serif text-xl md:text-2xl text-[#4a5548] pr-12">
        {emotion.name}
      </h3>

      {/* Meta info */}
      <div className="mt-3 space-y-1.5 text-sm text-[#4a5548]/60">
        <p>
          <span className="text-[#4a5548]/40">方位：</span>
          {emotion.compassPosition}
        </p>
        <p>
          <span className="text-[#4a5548]/40">五神：</span>
          {emotion.wuShen}
        </p>
        <p>
          <span className="text-[#4a5548]/40">Farrell 層次：</span>
          {emotion.farrellLayer}
        </p>
      </div>

      {/* Acupoint codes */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {emotion.acupointCodes.map((code) => (
          <span
            key={code}
            className="inline-block rounded-md bg-[#F9F7F2] px-2 py-0.5 text-xs font-mono text-[#4a5548]/70"
          >
            {code}
          </span>
        ))}
      </div>

      {/* Somaniks badge */}
      <div className="mt-4">
        <BlueOrangeBadge type={emotion.somaniks} size="sm" />
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

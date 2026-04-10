import Image from "next/image";
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

/* slug → body-support image filename */
const imageMap: Record<string, string> = {
  "ki-6": "ki6",
  "sp-4": "sp4",
  "si-3": "si3",
  "pc-6": "pc6",
  "sj-5": "sj5",
  "gb-41": "gb41",
  "lu-7": "lu7",
  "ub-62": "bl62",
};

export default function AcupointCard({ acupoint, href }: AcupointCardProps) {
  const imgFile = imageMap[acupoint.slug];

  const content = (
    <div className="relative rounded-2xl border border-stone-200/60 bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Body support image */}
      {imgFile && (
        <div className="relative w-full aspect-[4/3] bg-[#F9F7F2]">
          <Image
            src={`/images/body-support/${imgFile}.jpg`}
            alt={acupoint.fullName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      )}

      <div className="p-4 md:p-5">
        {/* Element badge - top right */}
        <div className="absolute top-3 right-3 z-10">
          <FiveElementBadge element={acupoint.element} />
        </div>

        {/* Full name */}
        <h3 className="font-serif text-lg md:text-xl text-[#4a5548]">
          {acupoint.fullName}
        </h3>

        {/* Meta info */}
        <div className="mt-2 space-y-1 text-sm text-[#4a5548]/60">
          <p>
            <span className="text-[#4a5548]/40">正經：</span>
            {acupoint.meridian}
          </p>
          <p>
            <span className="text-[#4a5548]/40">奇經：</span>
            {acupoint.extraordinaryVessel}
          </p>
          <p>
            <span className="text-[#4a5548]/40">周流：</span>
            {acupoint.flowPosition}
          </p>
        </div>

        {/* Function text - truncated to 2 lines */}
        <p className="mt-2 text-xs text-[#4a5548]/50 leading-relaxed line-clamp-2">
          {acupoint.functionText}
        </p>

        {/* Somaniks badge */}
        <div className="mt-3">
          <BlueOrangeBadge type={acupoint.somaniks} size="sm" />
        </div>
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

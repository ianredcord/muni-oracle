import Image from "next/image";
import Link from "next/link";
import FiveElementBadge from "./FiveElementBadge";
import BlueOrangeBadge from "./BlueOrangeBadge";
import type { FiveElement, SomaniksType } from "@/data/flow-system/types";

/* slug → card image number */
const flowerImageMap: Record<string, number> = {
  agrimony: 1, aspen: 2, beech: 3, centaury: 4, cerato: 5,
  "cherry-plum": 6, "chestnut-bud": 7, chicory: 8, clematis: 9,
  "crab-apple": 10, elm: 11, gentian: 12, gorse: 13, heather: 14,
  holly: 15, honeysuckle: 16, hornbeam: 17, impatiens: 18, larch: 19,
  mimulus: 20, mustard: 21, oak: 22, olive: 23, pine: 24,
  "red-chestnut": 25, "rock-rose": 26, "rock-water": 27, scleranthus: 28,
  "star-of-bethlehem": 29, "sweet-chestnut": 30, vervain: 31, vine: 32,
  walnut: 33, "water-violet": 34, "white-chestnut": 35, "wild-oat": 36,
  "wild-rose": 37, willow: 38,
};

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
    flowers?: { name: string; slug: string }[];
  };
  href?: string;
}

export default function EmotionCard({ emotion, href }: EmotionCardProps) {
  const flowers = emotion.flowers ?? [];
  // Show up to 4 flower thumbnails
  const visibleFlowers = flowers.slice(0, 4);
  const extraCount = flowers.length - 4;

  const content = (
    <div className="relative rounded-2xl border border-stone-200/60 bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Flower card thumbnails */}
      {visibleFlowers.length > 0 && (
        <div className="flex bg-[#F9F7F2] p-2 gap-1">
          {visibleFlowers.map((f) => {
            const num = flowerImageMap[f.slug];
            if (!num) return null;
            return (
              <div key={f.slug} className="relative flex-1 aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src={`/cards/${num}.jpg`}
                  alt={f.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 12vw"
                />
              </div>
            );
          })}
          {extraCount > 0 && (
            <div className="flex-1 aspect-[3/4] rounded-lg bg-stone-200/50 flex items-center justify-center">
              <span className="text-xs text-[#4a5548]/40 font-medium">+{extraCount}</span>
            </div>
          )}
        </div>
      )}

      <div className="p-4 md:p-5">
        {/* Element badge - top right */}
        <div className="absolute top-3 right-3 z-10">
          <FiveElementBadge element={emotion.element} />
        </div>

        {/* Emotion name */}
        <h3 className="font-serif text-lg md:text-xl text-[#4a5548] pr-10">
          {emotion.name}
        </h3>

        {/* Meta info */}
        <div className="mt-2 space-y-1 text-sm text-[#4a5548]/60">
          <p>
            <span className="text-[#4a5548]/40">方位：</span>
            {emotion.compassPosition}
          </p>
          <p>
            <span className="text-[#4a5548]/40">五神：</span>
            {emotion.wuShen}
          </p>
        </div>

        {/* Flower names */}
        {flowers.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {flowers.map((f) => (
              <span
                key={f.slug}
                className="inline-block rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] text-emerald-700/70"
              >
                {f.name}
              </span>
            ))}
          </div>
        )}

        {/* Acupoint codes */}
        <div className="mt-2 flex flex-wrap gap-1">
          {emotion.acupointCodes.map((code) => (
            <span
              key={code}
              className="inline-block rounded-md bg-[#F9F7F2] px-1.5 py-0.5 text-[10px] font-mono text-[#4a5548]/60"
            >
              {code}
            </span>
          ))}
        </div>

        {/* Somaniks badge */}
        <div className="mt-3">
          <BlueOrangeBadge type={emotion.somaniks} size="sm" />
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

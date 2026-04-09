import BlueOrangeBadge from "./BlueOrangeBadge";
import type { SomaniksType } from "@/data/flow-system/types";

interface FlowerEntry {
  name: string;
  emotionTheme: string;
  mainPoint: string;
  couplePoint: string;
  farrellLayer: string;
  somaniks: SomaniksType;
  somaniksNote: string;
  slug: string;
}

interface FlowerTableProps {
  flowers: FlowerEntry[];
}

export default function FlowerTable({ flowers }: FlowerTableProps) {
  if (flowers.length === 0) return null;

  return (
    <div>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-200/60 text-left text-[#4a5548]/50">
              <th className="pb-3 pr-4 font-medium">花精</th>
              <th className="pb-3 pr-4 font-medium">情緒主題</th>
              <th className="pb-3 pr-4 font-medium">主穴</th>
              <th className="pb-3 pr-4 font-medium">配穴</th>
              <th className="pb-3 pr-4 font-medium">Farrell 層次</th>
              <th className="pb-3 font-medium">身體支持點</th>
            </tr>
          </thead>
          <tbody className="text-[#4a5548]/70">
            {flowers.map((flower) => (
              <tr
                key={flower.slug}
                className="border-b border-stone-100 last:border-0"
              >
                <td className="py-3 pr-4 font-medium text-[#4a5548]">
                  {flower.name}
                </td>
                <td className="py-3 pr-4">{flower.emotionTheme}</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  {flower.mainPoint}
                </td>
                <td className="py-3 pr-4 font-mono text-xs">
                  {flower.couplePoint}
                </td>
                <td className="py-3 pr-4">{flower.farrellLayer}</td>
                <td className="py-3">
                  <BlueOrangeBadge type={flower.somaniks} size="sm" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {flowers.map((flower) => (
          <div
            key={flower.slug}
            className="rounded-xl border border-stone-200/60 bg-white p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-medium text-[#4a5548]">{flower.name}</h4>
              <BlueOrangeBadge type={flower.somaniks} size="sm" />
            </div>
            <p className="mt-1 text-sm text-[#4a5548]/60">
              {flower.emotionTheme}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#4a5548]/50">
              <span>
                主穴{" "}
                <span className="font-mono text-[#4a5548]/70">
                  {flower.mainPoint}
                </span>
              </span>
              <span>
                配穴{" "}
                <span className="font-mono text-[#4a5548]/70">
                  {flower.couplePoint}
                </span>
              </span>
              <span>{flower.farrellLayer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

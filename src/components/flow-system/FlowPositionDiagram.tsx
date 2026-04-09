"use client";

import { useState } from "react";

interface FlowPositionDiagramProps {
  onPointClick?: (slug: string) => void;
  className?: string;
}

interface AcupointNode {
  slug: string;
  code: string;
  name: string;
  x: number;
  y: number;
  somaniks: "drain" | "tonify";
  element: "water" | "wood" | "fire" | "earth" | "metal";
}

const acupoints: AcupointNode[] = [
  // North / Water / Kidney (bottom)
  { slug: "ki-6", code: "KI-6", name: "照海", x: 35, y: 85, somaniks: "tonify", element: "water" },
  { slug: "ub-62", code: "UB-62", name: "申脈", x: 65, y: 85, somaniks: "drain", element: "water" },
  // East / Wood / Liver (left)
  // (ascending path passes through here, no dedicated node specified)
  // South / Fire / Heart (top)
  { slug: "si-3", code: "SI-3", name: "後谿", x: 30, y: 12, somaniks: "tonify", element: "fire" },
  { slug: "pc-6", code: "PC-6", name: "內關", x: 50, y: 18, somaniks: "tonify", element: "fire" },
  { slug: "sj-5", code: "SJ-5", name: "外關", x: 70, y: 12, somaniks: "drain", element: "fire" },
  // West / Metal / Lung (right)
  { slug: "lu-7", code: "LU-7", name: "列缺", x: 80, y: 45, somaniks: "tonify", element: "metal" },
  { slug: "gb-41", code: "GB-41", name: "足臨泣", x: 75, y: 60, somaniks: "drain", element: "metal" },
  // Center / Earth / Spleen
  { slug: "sp-4", code: "SP-4", name: "公孫", x: 35, y: 45, somaniks: "tonify", element: "earth" },
];

const compassLabels = [
  { label: "南・火", x: 50, y: 2 },
  { label: "北・水", x: 50, y: 97 },
  { label: "東・木", x: 3, y: 50 },
  { label: "西・金", x: 97, y: 50 },
  { label: "中・土", x: 35, y: 37 },
];

/** Path arrows: ascending (left side, up) and descending (right side, down) */
const flowPaths = {
  ascending: [
    { from: { x: 35, y: 85 }, to: { x: 35, y: 45 }, label: "升 ↑" },
    { from: { x: 35, y: 45 }, to: { x: 30, y: 12 }, label: "升 ↑" },
  ],
  descending: [
    { from: { x: 70, y: 12 }, to: { x: 75, y: 60 }, label: "降 ↓" },
    { from: { x: 75, y: 60 }, to: { x: 80, y: 45 }, label: "" },
    { from: { x: 80, y: 45 }, to: { x: 65, y: 85 }, label: "降 ↓" },
  ],
};

const somaniksColor = {
  drain: { bg: "bg-[#006494]", text: "text-white", ring: "ring-[#006494]/30" },
  tonify: { bg: "bg-[#da7101]", text: "text-white", ring: "ring-[#da7101]/30" },
};

export default function FlowPositionDiagram({
  onPointClick,
  className = "",
}: FlowPositionDiagramProps) {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  return (
    <div className={`relative ${className}`}>
      {/* Square aspect ratio container */}
      <div className="relative w-full aspect-square max-w-lg mx-auto">
        {/* Background circle (decorative) */}
        <div className="absolute inset-[10%] rounded-full border border-stone-200/40" />
        <div className="absolute inset-[25%] rounded-full border border-stone-200/30 border-dashed" />

        {/* Flow path lines as SVG overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <marker
              id="arrow-asc"
              markerWidth="6"
              markerHeight="4"
              refX="5"
              refY="2"
              orient="auto"
            >
              <path d="M0,0 L6,2 L0,4" fill="#da7101" opacity="0.5" />
            </marker>
            <marker
              id="arrow-desc"
              markerWidth="6"
              markerHeight="4"
              refX="5"
              refY="2"
              orient="auto"
            >
              <path d="M0,0 L6,2 L0,4" fill="#006494" opacity="0.5" />
            </marker>
          </defs>

          {/* Ascending paths (orange/tonify) */}
          {flowPaths.ascending.map((p, i) => (
            <line
              key={`asc-${i}`}
              x1={p.from.x}
              y1={p.from.y}
              x2={p.to.x}
              y2={p.to.y}
              stroke="#da7101"
              strokeWidth="0.4"
              strokeDasharray="1.5 1"
              opacity="0.4"
              markerEnd="url(#arrow-asc)"
            />
          ))}

          {/* Descending paths (blue/drain) */}
          {flowPaths.descending.map((p, i) => (
            <line
              key={`desc-${i}`}
              x1={p.from.x}
              y1={p.from.y}
              x2={p.to.x}
              y2={p.to.y}
              stroke="#006494"
              strokeWidth="0.4"
              strokeDasharray="1.5 1"
              opacity="0.4"
              markerEnd="url(#arrow-desc)"
            />
          ))}
        </svg>

        {/* Compass labels */}
        {compassLabels.map((c) => (
          <span
            key={c.label}
            className="absolute text-[10px] md:text-xs text-[#4a5548]/40 font-medium whitespace-nowrap -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
          >
            {c.label}
          </span>
        ))}

        {/* Flow direction labels */}
        <span className="absolute text-[10px] text-[#da7101]/50 font-medium left-[15%] top-[55%] -translate-x-1/2">
          升 ↑
        </span>
        <span className="absolute text-[10px] text-[#006494]/50 font-medium left-[88%] top-[55%] -translate-x-1/2">
          降 ↓
        </span>

        {/* Acupoint nodes */}
        {acupoints.map((point) => {
          const colors = somaniksColor[point.somaniks];
          const isHovered = hoveredPoint === point.slug;

          return (
            <button
              key={point.slug}
              type="button"
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5 group cursor-pointer z-10`}
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              onClick={() => onPointClick?.(point.slug)}
              onMouseEnter={() => setHoveredPoint(point.slug)}
              onMouseLeave={() => setHoveredPoint(null)}
              onFocus={() => setHoveredPoint(point.slug)}
              onBlur={() => setHoveredPoint(null)}
            >
              {/* Node circle */}
              <span
                className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full ${colors.bg} ${colors.text} ring-2 ${colors.ring} text-[10px] md:text-xs font-mono font-bold shadow-sm transition-all duration-200 ${
                  isHovered ? "scale-110 shadow-md" : ""
                }`}
              >
                {point.code}
              </span>

              {/* Tooltip - Chinese name */}
              <span
                className={`absolute -bottom-6 whitespace-nowrap rounded-md bg-[#4a5548] px-2 py-0.5 text-[10px] text-white shadow-lg transition-all duration-200 ${
                  isHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                {point.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-6 text-xs text-[#4a5548]/50">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-[#da7101]" />
          橘補（tonify / 升）
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-[#006494]" />
          藍洩（drain / 降）
        </span>
      </div>
    </div>
  );
}

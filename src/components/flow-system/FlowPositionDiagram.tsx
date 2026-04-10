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
}

const nodes: AcupointNode[] = [
  { slug: "ki-6", code: "KI-6", name: "照海", x: 30, y: 82, somaniks: "tonify" },
  { slug: "ub-62", code: "UB-62", name: "申脈", x: 70, y: 82, somaniks: "tonify" },
  { slug: "si-3", code: "SI-3", name: "後溪", x: 25, y: 18, somaniks: "tonify" },
  { slug: "pc-6", code: "PC-6", name: "內關", x: 50, y: 10, somaniks: "drain" },
  { slug: "sj-5", code: "SJ-5", name: "外關", x: 75, y: 18, somaniks: "drain" },
  { slug: "lu-7", code: "LU-7", name: "列缺", x: 85, y: 45, somaniks: "drain" },
  { slug: "gb-41", code: "GB-41", name: "臨泣", x: 82, y: 65, somaniks: "drain" },
  { slug: "sp-4", code: "SP-4", name: "公孫", x: 18, y: 50, somaniks: "tonify" },
];

export default function FlowPositionDiagram({
  onPointClick,
  className = "",
}: FlowPositionDiagramProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full max-w-md mx-auto" style={{ aspectRatio: "1 / 1" }}>
        {/* Decorative circles */}
        <div className="absolute inset-[8%] rounded-full border border-[#4a5548]/8" />
        <div className="absolute inset-[22%] rounded-full border border-[#4a5548]/5 border-dashed" />

        {/* SVG flow arrows */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          <defs>
            <marker id="arr-up" markerWidth="5" markerHeight="4" refX="4" refY="2" orient="auto">
              <path d="M0,0 L5,2 L0,4" fill="#da7101" opacity="0.6" />
            </marker>
            <marker id="arr-dn" markerWidth="5" markerHeight="4" refX="4" refY="2" orient="auto">
              <path d="M0,0 L5,2 L0,4" fill="#006494" opacity="0.6" />
            </marker>
          </defs>
          {/* Ascending: KI-6 → SP-4 → SI-3 */}
          <path d="M30,78 Q15,60 18,50" stroke="#da7101" strokeWidth="0.5" fill="none" strokeDasharray="2 1.5" opacity="0.5" markerEnd="url(#arr-up)" />
          <path d="M18,46 Q12,30 25,22" stroke="#da7101" strokeWidth="0.5" fill="none" strokeDasharray="2 1.5" opacity="0.5" markerEnd="url(#arr-up)" />
          {/* Descending: SJ-5 → GB-41 → LU-7 → UB-62 */}
          <path d="M75,22 Q88,40 82,61" stroke="#006494" strokeWidth="0.5" fill="none" strokeDasharray="2 1.5" opacity="0.5" markerEnd="url(#arr-dn)" />
          <path d="M83,69 Q90,58 85,49" stroke="#006494" strokeWidth="0.5" fill="none" strokeDasharray="2 1.5" opacity="0.35" />
          <path d="M84,41 Q82,70 70,78" stroke="#006494" strokeWidth="0.5" fill="none" strokeDasharray="2 1.5" opacity="0.5" markerEnd="url(#arr-dn)" />
        </svg>

        {/* Compass labels */}
        {[
          { label: "南 · 火 · 心", x: 50, y: 1 },
          { label: "北 · 水 · 腎", x: 50, y: 98 },
          { label: "東 · 木 · 肝", x: 1, y: 50 },
          { label: "西 · 金 · 肺", x: 99, y: 50 },
        ].map((c) => (
          <span
            key={c.label}
            className="absolute text-[9px] md:text-[10px] text-[#4a5548]/30 font-medium whitespace-nowrap"
            style={{
              left: `${c.x}%`,
              top: `${c.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {c.label}
          </span>
        ))}

        {/* Center label */}
        <span
          className="absolute text-[10px] md:text-xs text-[#4a5548]/20 font-serif font-medium"
          style={{ left: "46%", top: "44%", transform: "translate(-50%, -50%)" }}
        >
          中 · 土
        </span>

        {/* Direction labels */}
        <span className="absolute text-[9px] text-[#da7101]/40 font-medium" style={{ left: "8%", top: "65%" }}>
          左升 ↑
        </span>
        <span className="absolute text-[9px] text-[#006494]/40 font-medium" style={{ left: "88%", top: "35%", transform: "translateX(-100%)" }}>
          右降 ↓
        </span>

        {/* Acupoint nodes */}
        {nodes.map((n) => {
          const isH = hovered === n.slug;
          const isDrain = n.somaniks === "drain";
          return (
            <button
              key={n.slug}
              type="button"
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 group"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              onClick={() => onPointClick?.(n.slug)}
              onMouseEnter={() => setHovered(n.slug)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                className={`flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full text-white text-[9px] md:text-[11px] font-mono font-bold shadow-sm transition-all duration-200 ${
                  isDrain ? "bg-[#006494] ring-[#006494]/20" : "bg-[#da7101] ring-[#da7101]/20"
                } ring-2 ${isH ? "scale-115 shadow-lg ring-4" : "hover:scale-105"}`}
              >
                {n.code}
              </span>
              {/* Name + tooltip */}
              <span
                className={`mt-0.5 text-[9px] md:text-[10px] font-medium transition-all duration-150 ${
                  isH ? "text-[#4a5548]" : "text-[#4a5548]/40"
                }`}
              >
                {n.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center justify-center gap-5 text-[10px] md:text-xs text-[#4a5548]/40">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#da7101]" />
          橘補 Tonify · 升
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#006494]" />
          藍洩 Drain · 降
        </span>
      </div>
    </div>
  );
}

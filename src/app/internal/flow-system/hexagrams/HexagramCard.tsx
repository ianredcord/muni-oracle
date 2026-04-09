"use client";

import { useState } from "react";
import type { Hexagram } from "@/data/flow-system/hexagrams";

function getBorderColor(element: string): string {
  if (/水|Water|腎|北|冬/.test(element)) return "border-l-slate-500";
  if (/木|Wood|春|東/.test(element)) return "border-l-emerald-600";
  if (/火|Fire|心|南/.test(element)) return "border-l-rose-500";
  if (/土|Earth|脾|中/.test(element) && !/中軸|坎離/.test(element))
    return "border-l-amber-500";
  if (/金|Metal|肺|秋|西/.test(element)) return "border-l-stone-400";
  // Mixed / axis / special
  return "border-l-purple-500";
}

interface HexagramCardProps {
  hexagram: Hexagram;
}

export default function HexagramCard({ hexagram }: HexagramCardProps) {
  const [expanded, setExpanded] = useState(false);
  const borderColor = getBorderColor(hexagram.element);

  const briefDesc =
    hexagram.description.length > 60
      ? hexagram.description.slice(0, 60) + "..."
      : hexagram.description;

  return (
    <button
      type="button"
      onClick={() => setExpanded((v) => !v)}
      className={`w-full text-left rounded-2xl border border-stone-200/60 bg-white shadow-sm border-l-4 ${borderColor} p-5 transition-all duration-200 hover:shadow-md hover:border-stone-300/80 focus:outline-none focus:ring-2 focus:ring-[#4a5548]/20`}
    >
      {/* Top row: symbol + name */}
      <div className="flex items-start gap-3">
        <span className="font-serif text-3xl leading-none select-none">
          {hexagram.symbol}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg text-[#4a5548] leading-tight">
            {hexagram.name}
          </h3>
          <p className="text-sm text-[#4a5548]/50">{hexagram.nameEn}</p>
        </div>
        {/* Expand indicator */}
        <svg
          className={`h-4 w-4 flex-shrink-0 text-[#4a5548]/30 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Element / direction */}
      <p className="mt-2 text-xs text-[#4a5548]/50">
        {hexagram.element} / {hexagram.compassDirection}
      </p>

      {/* Herbal formula */}
      <div className="mt-3">
        <span className="inline-block rounded-lg bg-amber-50 border border-amber-200/60 px-2.5 py-1 text-sm font-medium text-amber-800">
          {hexagram.herbalFormula}
        </span>
      </div>

      {/* Formula function */}
      <p className="mt-2 text-sm text-[#4a5548]/70">
        {hexagram.formulaFunction}
      </p>

      {/* Qi mechanism */}
      <p className="mt-1 text-xs text-[#4a5548]/50">
        <span className="font-medium">氣機：</span>
        {hexagram.qiMechanism}
      </p>

      {/* Acupoint pills */}
      {hexagram.relatedAcupoints.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {hexagram.relatedAcupoints.map((code) => (
            <span
              key={code}
              className="inline-block rounded-full bg-stone-100 border border-stone-200/60 px-2 py-0.5 text-xs text-[#4a5548]/70"
            >
              {code}
            </span>
          ))}
        </div>
      )}

      {/* Brief or full description */}
      <div
        className={`mt-3 overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-96 opacity-100" : "max-h-10 opacity-80"
        }`}
      >
        <p className="text-sm leading-relaxed text-[#4a5548]/60">
          {expanded ? hexagram.description : briefDesc}
        </p>
      </div>
    </button>
  );
}

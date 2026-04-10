"use client";

import { useState } from "react";

/* ──────────────────────────────────────────────
   E 區塊 — MUNI 能量支持（展開面板）
   ────────────────────────────────────────────── */
export function EnergySupport({
  breathing,
  aromaGuide,
  dailyPractice,
  awarenessNote,
}: {
  breathing?: string;
  aromaGuide?: string;
  dailyPractice?: string;
  awarenessNote?: string;
}) {
  const [open, setOpen] = useState(false);

  if (!breathing && !aromaGuide && !dailyPractice && !awarenessNote) return null;

  return (
    <div className="rounded-2xl border border-[#4a5548]/15 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-[#4a5548]/5 hover:bg-[#4a5548]/8 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">🌿</span>
          <span className="font-serif font-semibold text-[#4a5548]">MUNI 能量支持</span>
        </div>
        <svg
          className={`w-5 h-5 text-[#4a5548]/60 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 space-y-5 bg-white/60">
          {breathing && (
            <div>
              <h4 className="text-sm font-semibold text-[#4a5548] mb-2 flex items-center gap-2">
                <span className="text-base">🫁</span> 當下調節：呼吸法
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed">{breathing}</p>
            </div>
          )}
          {aromaGuide && (
            <div>
              <h4 className="text-sm font-semibold text-[#4a5548] mb-2 flex items-center gap-2">
                <span className="text-base">🌸</span> 花精香氣引導
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed">{aromaGuide}</p>
            </div>
          )}
          {dailyPractice && (
            <div>
              <h4 className="text-sm font-semibold text-[#4a5548] mb-2 flex items-center gap-2">
                <span className="text-base">✨</span> 今日練習
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed">{dailyPractice}</p>
            </div>
          )}
          {awarenessNote && (
            <div className="border-t border-stone-200 pt-4">
              <h4 className="text-sm font-semibold text-[#4a5548] mb-2 flex items-center gap-2">
                <span className="text-base">🧘</span> 覺察方式說明｜MUNI × 開心禪
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed italic">{awarenessNote}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   F 區塊 — 系統對應（收合面板）
   ────────────────────────────────────────────── */
export function SystemMapping({
  systemL1,
  systemL2Echo,
  systemEmotionGroup,
  systemMeridian,
  systemExtraordinary,
  systemAlchemy,
  systemQiFlow,
}: {
  systemL1?: string;
  systemL2Echo?: string;
  systemEmotionGroup?: string;
  systemMeridian?: string;
  systemExtraordinary?: string;
  systemAlchemy?: string;
  systemQiFlow?: string;
}) {
  const [open, setOpen] = useState(false);

  if (!systemL1) return null;

  const rows = [
    { label: "L1 花精（原型層）", value: systemL1 },
    { label: "L2 Echo Pair", value: systemL2Echo },
    { label: "巴赫情緒群組", value: systemEmotionGroup },
    { label: "經絡對應", value: systemMeridian },
    { label: "奇經對應", value: systemExtraordinary },
    { label: "煉金階段", value: systemAlchemy },
    { label: "一氣周流", value: systemQiFlow },
  ].filter(r => r.value);

  return (
    <div className="rounded-2xl border border-stone-200 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-stone-50 hover:bg-stone-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">⚙️</span>
          <span className="font-serif font-semibold text-stone-500">系統對應（進階）</span>
        </div>
        <svg
          className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 bg-white/60">
          <table className="w-full text-sm">
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-stone-100 last:border-0">
                  <td className="py-2 pr-4 text-stone-400 whitespace-nowrap font-medium">{r.label}</td>
                  <td className="py-2 text-stone-600">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

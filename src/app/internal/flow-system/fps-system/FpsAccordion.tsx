"use client";

import { useState } from "react";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Single Accordion Item                                              */
/* ------------------------------------------------------------------ */

interface AccordionItemProps {
  title: string;
  summary: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({
  title,
  summary,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-sm transition-shadow hover:shadow-md">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-start gap-3 p-5 md:p-6 text-left"
      >
        {/* Chevron */}
        <svg
          className={`mt-1 h-5 w-5 flex-shrink-0 text-[#9A7B4F] transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>

        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-lg md:text-xl text-[#4a5548] leading-snug">
            {title}
          </h3>
          {!open && (
            <p className="mt-1.5 text-sm text-[#4a5548]/55 leading-relaxed line-clamp-2">
              {summary}
            </p>
          )}
        </div>
      </button>

      {open && (
        <div className="px-5 pb-6 md:px-6 md:pb-7 pt-0">
          <div className="border-t border-stone-200/40 pt-5">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Accordion Group                                                    */
/* ------------------------------------------------------------------ */

export interface FpsSectionData {
  id: string;
  title: string;
  summary: string;
  content: ReactNode;
}

interface AccordionGroupProps {
  sections: FpsSectionData[];
}

export function AccordionGroup({ sections }: AccordionGroupProps) {
  return (
    <div className="space-y-4">
      {sections.map((s) => (
        <AccordionItem key={s.id} title={s.title} summary={s.summary}>
          {s.content}
        </AccordionItem>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Styled table helper (for use inside accordion content)             */
/* ------------------------------------------------------------------ */

interface DataTableProps {
  headers: string[];
  rows: string[][];
  compact?: boolean;
}

export function DataTable({ headers, rows, compact = false }: DataTableProps) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className={`text-left font-medium text-[#4a5548]/70 border-b border-stone-200/60 ${
                  compact ? "px-2 py-1.5" : "px-3 py-2"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-stone-100/60 last:border-0">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`text-[#4a5548]/80 ${
                    compact ? "px-2 py-1.5" : "px-3 py-2"
                  } ${ci === 0 ? "font-medium" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Prose block helper                                                 */
/* ------------------------------------------------------------------ */

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="text-sm md:text-base leading-relaxed text-[#4a5548]/75 space-y-3">
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Key-value pairs (for quick reference lists)                        */
/* ------------------------------------------------------------------ */

interface KVListProps {
  items: { label: string; value: string }[];
}

export function KVList({ items }: KVListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {items.map((item, i) => (
        <div key={i} className="rounded-lg bg-[#F9F7F2] px-4 py-2.5">
          <p className="text-xs text-[#4a5548]/40 mb-0.5">{item.label}</p>
          <p className="text-sm font-medium text-[#4a5548]">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sticky Group Nav (client component for scroll behavior)            */
/* ------------------------------------------------------------------ */

interface GroupNavProps {
  groups: { id: string; label: string; icon: string }[];
}

export function GroupNav({ groups }: GroupNavProps) {
  return (
    <nav className="sticky top-0 z-40 -mx-4 px-4 py-3 bg-[#F9F7F2]/95 backdrop-blur-sm border-b border-stone-200/40">
      <div className="flex flex-wrap gap-2 justify-center">
        {groups.map((g) => (
          <a
            key={g.id}
            href={`#${g.id}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-stone-200/60 bg-white/80 px-3.5 py-1.5 text-sm text-[#4a5548]/70 hover:text-[#4a5548] hover:border-[#9A7B4F]/40 hover:bg-white transition-all"
          >
            <span>{g.icon}</span>
            <span>{g.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

"use client";

import { useState, type ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  title,
  subtitle,
  badge,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-stone-200/60 bg-white transition-shadow hover:shadow-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-6 py-5 md:px-8 md:py-6 text-left cursor-pointer"
      >
        <svg
          className={`h-5 w-5 flex-shrink-0 text-[#9A7B4F] transition-transform duration-200 ${
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
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg md:text-xl text-[#4a5548]">
            {title}
            {subtitle && (
              <span className="ml-2 text-sm font-normal text-[#4a5548]/50">
                {subtitle}
              </span>
            )}
          </h3>
        </div>
        {badge}
      </button>
      {open && (
        <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-stone-100">
          <div className="pt-5">{children}</div>
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  children: ReactNode;
}

export default function ChannelAccordion({ children }: AccordionProps) {
  return <div className="space-y-4">{children}</div>;
}

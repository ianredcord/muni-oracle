import type { FiveElement } from "@/data/flow-system/types";

interface FiveElementBadgeProps {
  element: FiveElement;
  showLabel?: boolean;
}

const elementConfig: Record<
  FiveElement,
  { label: string; bg: string; text: string; border: string }
> = {
  water: {
    label: "水",
    bg: "bg-slate-700/10",
    text: "text-slate-700",
    border: "border-slate-700/20",
  },
  wood: {
    label: "木",
    bg: "bg-emerald-700/10",
    text: "text-emerald-700",
    border: "border-emerald-700/20",
  },
  fire: {
    label: "火",
    bg: "bg-rose-700/10",
    text: "text-rose-700",
    border: "border-rose-700/20",
  },
  earth: {
    label: "土",
    bg: "bg-amber-700/10",
    text: "text-amber-700",
    border: "border-amber-700/20",
  },
  metal: {
    label: "金",
    bg: "bg-stone-500/10",
    text: "text-stone-500",
    border: "border-stone-500/20",
  },
};

export default function FiveElementBadge({
  element,
  showLabel = true,
}: FiveElementBadgeProps) {
  const cfg = elementConfig[element];

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border text-xs font-medium ${cfg.bg} ${cfg.text} ${cfg.border} ${
        showLabel ? "px-2.5 py-0.5 gap-1" : "w-6 h-6"
      }`}
    >
      {showLabel ? cfg.label : cfg.label}
    </span>
  );
}

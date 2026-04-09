import type { SomaniksType } from "@/data/flow-system/types";

interface BlueOrangeBadgeProps {
  type: SomaniksType;
  label?: string;
  size?: "sm" | "md";
}

const config = {
  drain: {
    defaultLabel: "藍洩",
    classes: "bg-[#006494]/10 text-[#006494] border-[#006494]/20",
  },
  tonify: {
    defaultLabel: "橘補",
    classes: "bg-[#da7101]/10 text-[#da7101] border-[#da7101]/20",
  },
} as const;

export default function BlueOrangeBadge({
  type,
  label,
  size = "md",
}: BlueOrangeBadgeProps) {
  const { defaultLabel, classes } = config[type];
  const sizeClasses = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";

  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium ${classes} ${sizeClasses}`}
    >
      {label ?? defaultLabel}
    </span>
  );
}

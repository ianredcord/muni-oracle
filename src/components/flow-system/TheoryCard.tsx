import type { ReactNode } from "react";

interface TheoryCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export default function TheoryCard({
  title,
  subtitle,
  description,
  icon,
  className = "",
}: TheoryCardProps) {
  return (
    <div
      className={`rounded-2xl border border-stone-200/60 bg-white shadow-sm p-6 md:p-8 ${className}`}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F9F7F2] text-[#4a5548]">
          {icon}
        </div>
      )}
      <h3 className="font-serif text-xl md:text-2xl text-[#4a5548]">
        {title}
      </h3>
      <p className="mt-1 text-sm text-[#4a5548]/50 font-medium">{subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-[#4a5548]/70">
        {description}
      </p>
    </div>
  );
}

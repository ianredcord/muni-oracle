import Link from "next/link";

interface RelatedLinksProps {
  links: { label: string; href: string; description?: string }[];
  title?: string;
}

export default function RelatedLinks({
  links,
  title = "延伸閱讀",
}: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <div>
      <h4 className="font-serif text-lg text-[#4a5548] mb-4">{title}</h4>
      <div className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-start gap-3 rounded-xl border border-stone-200/60 bg-white p-4 transition-all duration-200 hover:border-stone-300/80 hover:shadow-sm"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#4a5548] group-hover:text-[#4a5548]/80">
                {link.label}
              </p>
              {link.description && (
                <p className="mt-0.5 text-xs text-[#4a5548]/50 leading-relaxed">
                  {link.description}
                </p>
              )}
            </div>
            <svg
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#4a5548]/30 transition-transform group-hover:translate-x-0.5 group-hover:text-[#4a5548]/50"
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
          </Link>
        ))}
      </div>
    </div>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-serif text-3xl md:text-4xl text-[#4a5548] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-[#4a5548]/60 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

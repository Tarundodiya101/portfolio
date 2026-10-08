interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
}

const SectionHeading = ({ label, title, highlight, description }: SectionHeadingProps) => (
  <div className="mb-14 max-w-2xl">
    <div className="mb-5 flex items-center gap-4">
      <span className="eyebrow whitespace-nowrap">{label}</span>
      <span className="section-rule w-full" />
    </div>
    <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
      {title} {highlight && <span className="text-gradient">{highlight}</span>}
    </h2>
    {description && (
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>
    )}
  </div>
);

export default SectionHeading;

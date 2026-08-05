type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) => (
  <header className={`page-section-header${align === 'center' ? ' is-center' : ''}`}>
    {eyebrow && <span className="page-section-eyebrow">{eyebrow}</span>}
    <h2 className="page-section-title">{title}</h2>
    {subtitle && <p className="page-section-subtitle">{subtitle}</p>}
  </header>
);

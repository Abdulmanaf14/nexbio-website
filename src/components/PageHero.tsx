type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  badges?: string[];
};

export const PageHero = ({ eyebrow, title, subtitle, badges = [] }: PageHeroProps) => (
  <section className="page-hero">
    <div className="container">
      <span className="page-hero-eyebrow">{eyebrow}</span>
      <h1 className="page-hero-title">{title}</h1>
      {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      {badges.length > 0 && (
        <div className="page-hero-badges">
          {badges.map((badge) => (
            <span className="page-hero-badge" key={badge}>
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  </section>
);

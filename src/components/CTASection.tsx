import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type CTASectionProps = {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonTo?: string;
};

export const CTASection = ({
  title,
  subtitle,
  buttonLabel = 'Request a Demo',
  buttonTo = '/contact',
}: CTASectionProps) => (
  <section className="page-cta">
    <div className="container page-cta-panel">
      <div className="page-cta-copy">
        <h2 className="page-cta-title">{title}</h2>
        {subtitle && <p className="page-cta-subtitle">{subtitle}</p>}
      </div>
      <Link to={buttonTo} className="btn btn-primary">
        {buttonLabel} <ArrowRight size={16} className="btn-arrow" />
      </Link>
    </div>
  </section>
);

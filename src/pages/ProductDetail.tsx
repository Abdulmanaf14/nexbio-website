import { Navigate, useParams } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { CTASection } from '../components/CTASection';
import { getProduct } from '../data/products';

export const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProduct(slug);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <>
      <PageHero
        eyebrow={product.title}
        title={product.name}
        subtitle={product.overview}
        badges={product.badges}
      />

      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="At a glance" title="Performance built for scale." />
          <div className="product-stats">
            {product.stats.map((stat) => (
              <div className="product-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--muted">
        <div className="container">
          <SectionHeader eyebrow="Core capabilities" title={`What ${product.name} does.`} />
          <ul className="product-capabilities">
            {product.capabilities.map((capability) => (
              <li key={capability}>
                <CheckCircle2 size={18} strokeWidth={1.8} />
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title={`Deploy ${product.name} for your program.`}
        subtitle="Schedule a technical demonstration with our solution architects."
        buttonLabel="Request a Demo"
        buttonTo="/contact"
      />
    </>
  );
};

import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { products } from '../data/products';

export const Products = () => (
  <>
    <PageHero
      eyebrow="Products"
      title="A complete biometric identity portfolio, built for national scale."
      subtitle="Three independent, standards-compliant systems high-performance identification, expert-led adjudication, and developer-ready integration. Each operates as a standalone platform for governments, security agencies, and enterprises."
    />

    <section className="page-section">
      <div className="container">
        <div className="products-grid">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article className="product-card" key={product.slug}>
                <div className="product-card-top">
                  <span className="product-card-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span className="product-card-label">{product.label}</span>
                </div>
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-heading">{product.title}</p>
                <p className="product-card-desc">{product.description}</p>
                <ul className="product-card-list">
                  {product.capabilities.map((capability) => (
                    <li key={capability}>
                      <CheckCircle2 size={15} strokeWidth={1.8} />
                      {capability}
                    </li>
                  ))}
                </ul>
                <Link to={`/products/${product.slug}`} className="product-card-link">
                  Learn about {product.name} <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <CTASection
      title="Deploy NexBio for your identity program."
      subtitle="Talk to our solution architects about capacity, integration, and deployment timelines."
      buttonLabel="Request a Demo"
      buttonTo="/contact"
    />
  </>
);

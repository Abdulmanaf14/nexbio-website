import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Cpu,
  Database,
  Fingerprint,
  GitCompareArrows,
  ImagePlus,
  ScanFace,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

const products = [
  {
    name: 'NexABIS',
    title: 'Automated Biometric Identification System',
    eyebrow: 'Matching Engine',
    description:
      'A high-performance biometric matching platform for identification, verification, deduplication, and watchlist search across large-scale identity programs.',
    icon: Cpu,
    href: '/products/nexabis',
    accent: 'blue',
    stats: ['Fingerprint, face, iris', 'Deduplication', 'Watchlist search'],
    capabilities: [
      { icon: Fingerprint, label: 'Multi-modal biometrics' },
      { icon: Database, label: 'Population-scale search' },
      { icon: GitCompareArrows, label: 'Duplicate identity prevention' },
    ],
  },
  {
    name: 'NexSAS',
    title: 'Smart Adjudication System',
    eyebrow: 'Workflow Layer',
    description:
      'A structured adjudication workspace for resolving possible matches with case management, operator assignment, supervisor review, and complete decision history.',
    icon: Workflow,
    href: '/products/nexsas',
    accent: 'green',
    stats: ['Case management', 'Supervisor review', 'Audit trails'],
    capabilities: [
      { icon: Workflow, label: 'Adjudication workflow' },
      { icon: ScanFace, label: 'Evidence comparison' },
      { icon: ShieldCheck, label: 'Decision auditability' },
    ],
  },
  {
    name: 'NexSDK',
    title: 'Biometric SDK',
    eyebrow: 'Developer Toolkit',
    description:
      'A developer-ready SDK for embedding biometric capture, enrollment, verification, liveness, quality checks, template extraction, and API integration.',
    icon: Braces,
    href: '/products/nexsdk',
    accent: 'purple',
    stats: ['Capture SDKs', 'Liveness', 'Template APIs'],
    capabilities: [
      { icon: Braces, label: 'API integration' },
      { icon: Fingerprint, label: 'Enrollment and verification' },
      { icon: CheckCircle2, label: 'Quality assessment' },
    ],
  },
];

export const ProductsPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = Array.from(section.querySelectorAll<HTMLElement>('.reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="products-preview-section" id="products-preview" ref={sectionRef}>
      <div className="container">
        <header className="products-preview-header reveal">
          <span className="products-preview-eyebrow">Products</span>
          <h2 className="products-preview-title">Purpose-built systems for modern identity operations.</h2>
          <p className="products-preview-subtitle">
            Each NexBio product solves a specific part of the identity lifecycle while working as
            one connected ecosystem for capture, matching, adjudication, and integration.
          </p>
        </header>

        <div className="products-preview-grid">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <article
                className={`products-preview-card products-preview-card--${product.accent} reveal`}
                key={product.name}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="products-preview-card-main">
                  <div className="products-preview-card-top">
                    <span className="products-preview-icon">
                      <Icon size={23} strokeWidth={1.8} />
                    </span>
                    <span className="products-preview-tag">{product.eyebrow}</span>
                  </div>

                  <h3 className="products-preview-name">{product.name}</h3>
                  <p className="products-preview-heading">{product.title}</p>
                  <p className="products-preview-description">{product.description}</p>

                  <div className="products-preview-capabilities">
                    {product.capabilities.map((capability) => {
                      const CapabilityIcon = capability.icon;
                      return (
                        <span key={capability.label}>
                          <CapabilityIcon size={15} strokeWidth={1.8} />
                          {capability.label}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="products-preview-visual" aria-label={`${product.name} product image placeholder`}>
                  <div className="products-preview-visual-grid" aria-hidden="true">
                    {product.stats.map((stat) => (
                      <span key={stat}>{stat}</span>
                    ))}
                  </div>
                  <div className="products-preview-image-placeholder">
                    <ImagePlus size={22} strokeWidth={1.5} />
                    <span>Product image</span>
                  </div>
                </div>

                <a className="products-preview-link" href={product.href}>
                  Learn about {product.name}
                  <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  Blocks,
  Braces,
  CheckCircle2,
  Cpu,
  DatabaseZap,
  Fingerprint,
  GitBranch,
  ImagePlus,
  Layers3,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

const products = [
  {
    icon: Cpu,
    name: 'NexABIS',
    label: 'Matching Core',
    description:
      'High-performance biometric identification, verification, deduplication, and watchlist search for population-scale identity programs.',
    capabilities: ['Fingerprint, face, and iris', 'Quality assessment', 'National-scale search'],
  },
  {
    icon: Workflow,
    name: 'NexSAS',
    label: 'Adjudication Layer',
    description:
      'A structured workspace for resolving possible matches with operator assignment, supervisor review, evidence comparison, and audit trails.',
    capabilities: ['Case workflows', 'Decision history', 'Performance analytics'],
  },
  {
    icon: Braces,
    name: 'NexSDK',
    label: 'Developer Toolkit',
    description:
      'Embeddable biometric capture, liveness, template extraction, verification, and API integration for mobile, desktop, and enterprise apps.',
    capabilities: ['Capture SDKs', 'Liveness checks', 'Template APIs'],
  },
];

const workflow = [
  { icon: Fingerprint, title: 'Capture', subtitle: 'NexSDK' },
  { icon: DatabaseZap, title: 'Identify', subtitle: 'NexABIS' },
  { icon: GitBranch, title: 'Resolve', subtitle: 'NexSAS' },
  { icon: ShieldCheck, title: 'Decide', subtitle: 'Audit-ready' },
];

const metrics = [
  { value: '3', label: 'biometric modalities' },
  { value: 'ISO', label: 'standards-first architecture' },
  { value: 'RBAC', label: 'secure operator controls' },
];

export const Platform = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealElements = Array.from(section.querySelectorAll('.reveal'));

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="platform-section" id="platform" ref={sectionRef}>
      <div className="container">
        <div className="platform-hero">
          <div className="platform-copy reveal">
            <span className="platform-eyebrow">
              <Blocks size={15} />
              Product Ecosystem
            </span>
            <h2 className="platform-title">One biometric identity platform from capture to decision.</h2>
            <p className="platform-subtitle">
              NexBio connects biometric capture, matching, adjudication, and developer integration
              into a secure infrastructure layer for governments, enterprises, and large-scale
              identity programs.
            </p>
            <div className="platform-actions">
              <a href="#contact" className="btn btn-primary">
                Explore Platform <ArrowRight size={16} className="btn-arrow" />
              </a>
              <a href="#products" className="platform-inline-link">
                View products
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="platform-product-visual reveal" style={{ transitionDelay: '120ms' }}>
            <div className="platform-product-toolbar">
              <span className="platform-window-dot"></span>
              <span className="platform-window-dot"></span>
              <span className="platform-window-dot"></span>
              <span className="platform-product-status">
                <span className="pulse-dot"></span>
                Identity graph live
              </span>
            </div>
            <div className="platform-image-placeholder" aria-label="Product image placeholder">
              <div className="platform-orbit" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="platform-placeholder-content">
                <ImagePlus size={28} strokeWidth={1.5} />
                <span>Product image space</span>
              </div>
            </div>
            <div className="platform-visual-footer">
              {metrics.map((metric) => (
                <div className="platform-metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="platform-workflow reveal" aria-label="NexBio product workflow">
          {workflow.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="platform-workflow-item" key={step.title}>
                <span className="platform-workflow-icon">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <div>
                  <strong>{step.title}</strong>
                  <span>{step.subtitle}</span>
                </div>
                {index < workflow.length - 1 && <ArrowRight className="platform-workflow-arrow" size={18} />}
              </div>
            );
          })}
        </div>

        <div className="platform-cards" id="products">
          {products.map((product, index) => (
            <article
              className="platform-card reveal"
              key={product.name}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="platform-card-top">
                <span className="platform-card-icon">
                  <product.icon size={22} strokeWidth={1.8} />
                </span>
                <span className="platform-card-label">{product.label}</span>
              </div>
              <h3 className="platform-card-name">{product.name}</h3>
              <p className="platform-card-description">{product.description}</p>
              <ul className="platform-capability-list">
                {product.capabilities.map((capability) => (
                  <li key={capability}>
                    <CheckCircle2 size={15} strokeWidth={1.8} />
                    {capability}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="platform-foundation reveal">
          <div>
            <span className="platform-eyebrow">Platform Foundation</span>
            <h3>Built for security, interoperability, and operational control.</h3>
          </div>
          <p>
            The platform is designed around encryption, secure template storage, role-based access,
            audit logging, open APIs, and international biometric standards including ISO,
            ANSI/NIST, and ICAO.
          </p>
          <Layers3 className="platform-foundation-icon" size={42} strokeWidth={1.25} />
        </div>
      </div>
    </section>
  );
};

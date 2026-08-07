import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  Blocks,
  Braces,
  CheckCircle2,
  Cpu,
  Layers3,
  Workflow,
} from 'lucide-react';
import imagePlaceholder from '../assets/product-overview.png';

type Stat = { value: string; label: string };

type Product = {
  icon: typeof Cpu;
  name: string;
  title: string;
  label: string;
  description: string;
  stats: Stat[];
  capabilities: string[];
};

const products: Product[] = [
  {
    icon: Cpu,
    name: 'NexABIS',
    title: 'Automated Biometric Identification System',
    label: 'Matching Engine',
    description:
      'Enterprise-grade biometric matching for identification, verification, deduplication, and watchlist search across population-scale identity programs.',
    stats: [
      { value: '<200ms', label: '1:N search response' },
      { value: '99.7%', label: 'Rank-1 accuracy' },
      { value: '500M+', label: 'record capacity' },
    ],
    capabilities: [
      'Fingerprint, face & iris matching',
      'Large-scale 1:N deduplication',
      'Real-time quality checks (NFIQ)',
      'Encrypted template storage',
    ],
  },
  {
    icon: Workflow,
    name: 'NexSAS',
    title: 'Smart Adjudication System',
    label: 'Adjudication Layer',
    description:
      'An expert-driven adjudication workspace for human-led verification of possible matches — with intelligent case routing, supervisor review, and complete audit trails.',
    stats: [
      { value: '99.8%', label: 'decision accuracy' },
      { value: '2.4m', label: 'avg. review time' },
      { value: 'Full', label: 'audit & decision history' },
    ],
    capabilities: [
      'Smart workflow & case routing',
      'Multi-modal evidence comparison',
      'Supervisor review & QA',
      'Real-time dashboards & analytics',
    ],
  },
  {
    icon: Braces,
    name: 'NexSDK',
    title: 'Multi-Modal Biometric SDK',
    label: 'Developer Toolkit',
    description:
      'A developer-ready SDK for embedding biometric capture, liveness, verification, and template extraction into mobile, desktop, and enterprise applications.',
    stats: [
      { value: '<100ms', label: '1:1 match speed' },
      { value: '3', label: 'biometric modalities' },
      { value: '5+', label: 'platforms supported' },
    ],
    capabilities: [
      'Fingerprint, face & iris engines',
      'Liveness & anti-spoofing',
      'Native & REST APIs',
      'Standards-compliant templates',
    ],
  },
];

const metrics: Stat[] = [
  { value: '3', label: 'biometric modalities' },
  { value: '500M+', label: 'records at scale' },
  { value: '99.99%', label: 'system uptime' },
];

const standards = [
  'ISO/IEC 19794',
  'ANSI/NIST-ITL',
  'ICAO',
  'FIPS 140-2 L3',
  'GDPR',
  'AES-256',
  'RBAC',
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
              Products
            </span>
            <h2 className="platform-title">
              A complete biometric identity portfolio, built for national scale.
            </h2>
            <p className="platform-subtitle">
              NexBio delivers three independent, standards-compliant systems high-performance
              identification, expert-led adjudication, and developer-ready integration. Each is
              engineered to operate as a standalone platform for governments, security agencies,
              and enterprises.
            </p>
            <div className="platform-actions">
              <a href="#contact" className="btn btn-primary">
                Request a Demo <ArrowRight size={16} className="btn-arrow" />
              </a>
              <a href="#products" className="platform-inline-link">
                Explore products
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
                National-scale ready
              </span>
            </div>
            <div className="platform-image-placeholder" aria-label="Product image placeholder">
              <div className="platform-orbit" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="platform-placeholder-content">
                <img src={imagePlaceholder} alt="Product image placeholder" />
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

        <div className="platform-cards" id="products">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <article
                className="platform-card reveal"
                key={product.name}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="platform-card-top">
                  <span className="platform-card-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span className="platform-card-label">{product.label}</span>
                </div>
                <h3 className="platform-card-name">{product.name}</h3>
                <p className="platform-card-heading">{product.title}</p>
                <p className="platform-card-description">{product.description}</p>
                <div className="platform-card-stats">
                  {product.stats.map((stat) => (
                    <div className="platform-card-stat" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <ul className="platform-capability-list">
                  {product.capabilities.map((capability) => (
                    <li key={capability}>
                      <CheckCircle2 size={15} strokeWidth={1.8} />
                      {capability}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="platform-foundation reveal">
          <div className="platform-foundation-head">
            <span className="platform-eyebrow">Platform Foundation</span>
            <h3>Secure by design. Interoperable by standard.</h3>
          </div>
          <p>
            Every NexBio system is engineered around encryption, secure template storage,
            role-based access, and full auditability — built on open, internationally recognized
            biometric standards with no vendor lock-in.
          </p>
          <div className="platform-standards">
            {standards.map((standard) => (
              <span className="platform-standard" key={standard}>
                {standard}
              </span>
            ))}
          </div>
          <Layers3 className="platform-foundation-icon" size={42} strokeWidth={1.25} />
        </div>
      </div>
    </section>
  );
};

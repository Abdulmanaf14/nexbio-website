import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  HeartPulse,
  Landmark,
  Plane,
  Scale,
  Shield,
  UserCheck,
} from 'lucide-react';

const useCases = [
  {
    icon: Landmark,
    sector: 'National ID',
    title: 'Population identity programs',
    description:
      'Prevent duplicate identities, support enrollment quality, and keep every identity decision traceable across large citizen databases.',
    products: ['NexABIS', 'NexSAS', 'NexSDK'],
    signal: 'Foundational identity',
  },
  {
    icon: Plane,
    sector: 'Border Control',
    title: 'Fast identity checks at ports of entry',
    description:
      'Enable biometric verification, watchlist search, and operator review for high-volume border and traveler workflows.',
    products: ['NexABIS', 'NexSAS'],
    signal: 'High-volume verification',
  },
  {
    icon: Shield,
    sector: 'Immigration',
    title: 'Secure enrollment and case resolution',
    description:
      'Connect biometric capture, identity matching, and adjudication workflows for residency, visa, and immigration operations.',
    products: ['NexSDK', 'NexABIS', 'NexSAS'],
    signal: 'Secure case workflows',
  },
  {
    icon: BadgeCheck,
    sector: 'Civil Registration',
    title: 'Trusted foundational records',
    description:
      'Strengthen birth, civil, and resident registries with deduplication, biometric verification, and auditable updates.',
    products: ['NexABIS', 'NexSDK'],
    signal: 'Trusted records',
  },
  {
    icon: Scale,
    sector: 'Law Enforcement',
    title: 'Search, compare, and investigate',
    description:
      'Support controlled biometric search, evidence comparison, and structured review for investigative identity workflows.',
    products: ['NexABIS', 'NexSAS'],
    signal: 'Controlled search',
  },
  {
    icon: Banknote,
    sector: 'Banking',
    title: 'Verified customer identity',
    description:
      'Embed biometric enrollment, verification, liveness, and secure API integration into financial identity journeys.',
    products: ['NexSDK', 'NexABIS'],
    signal: 'Customer assurance',
  },
  {
    icon: Building2,
    sector: 'Enterprise Identity',
    title: 'Workforce and access assurance',
    description:
      'Add biometric verification to enterprise systems where secure access, auditability, and interoperability matter.',
    products: ['NexSDK'],
    signal: 'Workforce access',
  },
  {
    icon: HeartPulse,
    sector: 'Healthcare',
    title: 'Safer patient identification',
    description:
      'Reduce duplicate records and improve confidence in patient identity across sensitive, high-trust healthcare workflows.',
    products: ['NexSDK', 'NexABIS'],
    signal: 'Patient matching',
  },
  {
    icon: UserCheck,
    sector: 'Access Control',
    title: 'Biometric verification at entry points',
    description:
      'Use face, fingerprint, or iris verification for controlled access experiences across facilities and secure environments.',
    products: ['NexSDK'],
    signal: 'Entry verification',
  },
];

const marqueeItems = [
  { icon: Landmark, label: 'National identity' },
  { icon: Plane, label: 'Border management' },
  { icon: BadgeCheck, label: 'Civil registration' },
  { icon: Shield, label: 'Immigration' },
  { icon: Banknote, label: 'Banking' },
  { icon: HeartPulse, label: 'Healthcare' },
  { icon: Building2, label: 'Enterprise access' },
  { icon: Scale, label: 'Law enforcement' },
];

export const UseCases = () => {
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
    <section className="use-cases-section" id="use-cases" ref={sectionRef}>
      <div className="use-cases-marquee" aria-hidden="true">
        <div className="use-cases-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item.label}-${index}`}>
              <item.icon size={18} strokeWidth={1.8} />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="use-cases-header">
          <div className="use-cases-copy reveal">
            <span className="use-cases-eyebrow">Use Cases</span>
            <h2 className="use-cases-title">Identity infrastructure for real operational environments.</h2>
          </div>
          <div className="use-cases-intro reveal" style={{ transitionDelay: '80ms' }}>
            <p className="use-cases-subtitle">
              NexBio is designed for programs where identity decisions carry operational,
              regulatory, and security consequences. The platform adapts across government,
              enterprise, and high-trust digital identity workflows.
            </p>
            <a href="/solutions" className="use-cases-link">
              Explore solutions
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="use-cases-grid">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <article
                className="use-case-card reveal"
                key={useCase.sector}
                style={{ transitionDelay: `${(index % 3) * 70}ms` }}
              >
                <div className="use-case-card-top">
                  <span className="use-case-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <span className="use-case-signal">{useCase.signal}</span>
                </div>
                <h3>{useCase.sector}</h3>
                <strong>{useCase.title}</strong>
                <p>{useCase.description}</p>
                <div className="use-case-products">
                  {useCase.products.map((product) => (
                    <span key={product}>{product}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="use-cases-summary reveal">
          <div>
            <span className="use-cases-eyebrow">Operational Fit</span>
            <h3>Built for programs that need speed, auditability, and secure identity decisions.</h3>
          </div>
          <ul>
            <li>
              <CheckCircle2 size={16} strokeWidth={1.8} />
              Biometric capture and verification at the edge
            </li>
            <li>
              <CheckCircle2 size={16} strokeWidth={1.8} />
              Matching, deduplication, and watchlist search at scale
            </li>
            <li>
              <CheckCircle2 size={16} strokeWidth={1.8} />
              Structured adjudication with complete decision history
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

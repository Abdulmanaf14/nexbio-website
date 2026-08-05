import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  Banknote,
  Building2,
  CheckCircle2,
  HeartPulse,
  Landmark,
  Plane,
  Scale,
} from 'lucide-react';

const useCases = [
  {
    icon: Landmark,
    sector: 'Government & National ID',
    title: 'Population-scale identity programs',
    description:
      'Enrollment, deduplication, voter registration, CRVS, digital ID, and credential issuance for national identity systems.',
    products: ['NexABIS', 'NexSAS', 'NexSDK'],
    signal: 'Foundational identity',
  },
  {
    icon: Plane,
    sector: 'Border Control & Immigration',
    title: 'Secure entry, exit, and traveler checks',
    description:
      'Biometric verification, watchlist search, passport validation, and officer terminals for high-volume border operations.',
    products: ['NexABIS', 'NexSAS', 'NexSDK'],
    signal: 'High-volume verification',
  },
  {
    icon: Scale,
    sector: 'Law Enforcement & Security',
    title: 'Investigative search and evidence review',
    description:
      'Criminal identification, latent fingerprint comparison, field verification, and structured case review.',
    products: ['NexABIS', 'NexSAS'],
    signal: 'Controlled search',
  },
  {
    icon: Banknote,
    sector: 'Banking & Telecom',
    title: 'KYC, onboarding, and fraud prevention',
    description:
      'Biometric enrollment, verification, liveness, and secure API integration embedded into customer identity journeys.',
    products: ['NexSDK', 'NexABIS'],
    signal: 'Customer assurance',
  },
  {
    icon: HeartPulse,
    sector: 'Healthcare & Insurance',
    title: 'Trusted patient and beneficiary identity',
    description:
      'Unique patient identification, duplicate record prevention, and benefit verification across facilities.',
    products: ['NexSDK', 'NexABIS'],
    signal: 'Patient matching',
  },
  {
    icon: Building2,
    sector: 'Enterprise & Workforce',
    title: 'Access control and employee identity',
    description:
      'Secure facility access, workforce onboarding, and identity management across the enterprise.',
    products: ['NexSDK'],
    signal: 'Workforce access',
  },
];

const marqueeItems = [
  { icon: Landmark, label: 'Government & National ID' },
  { icon: Plane, label: 'Border & Immigration' },
  { icon: Scale, label: 'Law enforcement' },
  { icon: Banknote, label: 'Banking & Telecom' },
  { icon: HeartPulse, label: 'Healthcare' },
  { icon: Building2, label: 'Enterprise access' },
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

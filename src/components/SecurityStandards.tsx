import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Braces,
  CheckCircle2,
  CloudCog,
  DatabaseZap,
  FileKey2,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Network,
  ScanLine,
  ScrollText,
  ServerCog,
  ShieldCheck,
  UserCog,
} from 'lucide-react';

const standards = ['ISO/IEC 19794', 'ANSI/NIST-ITL', 'ICAO', 'FIPS 140-2', 'GDPR', 'AES-256'];

const securityControls = [
  {
    icon: LockKeyhole,
    title: 'End-to-end encryption',
    description: 'AES-256 encryption protects biometric and identity data across capture, transit, processing, and storage.',
  },
  {
    icon: FileKey2,
    title: 'Secure template storage',
    description: 'Encrypted, versioned template storage with tamper detection for sensitive identity programs.',
  },
  {
    icon: UserCog,
    title: 'Role-based access control',
    description: 'Granular access for operators, supervisors, and administrators across every workflow.',
  },
  {
    icon: KeyRound,
    title: 'Authentication & authorization',
    description: 'Two-factor authentication and SSO protect platform services, APIs, and identity records.',
  },
  {
    icon: ScrollText,
    title: 'Audit logging',
    description: 'Timestamped audit trails for searches, adjudication decisions, and administrative actions.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy by design',
    description: 'GDPR-aligned, privacy-by-design engineering built into every layer of the platform.',
  },
];

const architecture = [
  { icon: Braces, label: 'API-first design' },
  { icon: ServerCog, label: 'Microservice architecture' },
  { icon: CloudCog, label: 'Cloud-ready and on-premise' },
  { icon: DatabaseZap, label: 'Distributed processing' },
  { icon: Network, label: 'Horizontal scalability' },
  { icon: BadgeCheck, label: 'High availability' },
];

export const SecurityStandards = () => {
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
    <section className="security-standards-section" id="security-standards" ref={sectionRef}>
      <div className="container">
        <div className="security-standards-header reveal">
          <span className="security-standards-eyebrow">
            <ShieldCheck size={15} strokeWidth={1.8} />
            Standards & Security
          </span>
          <h2 className="security-standards-title">
            Security-first identity infrastructure, designed around open standards.
          </h2>
          <p className="security-standards-subtitle">
            NexBio products are built for sensitive biometric environments where interoperability,
            auditability, access control, and privacy are core operating requirements.
          </p>
        </div>

        <div className="security-standards-strip reveal" aria-label="Supported standards">
          {standards.map((standard) => (
            <div className="security-standard-item" key={standard}>
              <CheckCircle2 size={17} strokeWidth={1.9} />
              <span>{standard}</span>
            </div>
          ))}
        </div>

        <div className="security-standards-layout">
          <div className="security-control-grid">
            {securityControls.map((control, index) => {
              const Icon = control.icon;
              return (
                <article
                  className="security-control-card reveal"
                  key={control.title}
                  style={{ transitionDelay: `${(index % 3) * 70}ms` }}
                >
                  <span className="security-control-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                  <h3>{control.title}</h3>
                  <p>{control.description}</p>
                </article>
              );
            })}
          </div>

          <aside className="security-architecture-panel reveal" style={{ transitionDelay: '120ms' }}>
            <div className="security-architecture-visual" aria-hidden="true">
              <span className="security-scan-frame">
                <Fingerprint size={50} strokeWidth={1.2} />
                <ScanLine className="security-scan-line" size={160} strokeWidth={1.2} />
              </span>
            </div>

            <span className="security-panel-label">Technology Principles</span>
            <h3>Modern architecture for secure, scalable deployment.</h3>
            <p>
              The platform is designed for modular deployment across cloud-ready, on-premise, and
              distributed environments without forcing vendor lock-in.
            </p>

            <div className="security-architecture-list">
              {architecture.map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.label}>
                    <Icon size={16} strokeWidth={1.8} />
                    {item.label}
                  </span>
                );
              })}
            </div>

            <a href="/technology" className="security-standards-link">
              View technology approach
              <ArrowRight size={16} />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef } from 'react';
import {
  Layers,
  Gauge,
  Copy,
  ClipboardList,
  ScrollText,
  ShieldAlert,
  Unplug,
  Workflow,

} from 'lucide-react';
import imagePlaceholder from '../assets/image.jpg';

type Challenge = {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  description: string;
};

const CHALLENGES: Challenge[] = [
  {
    icon: Layers,
    title: 'Outdated Architectures',
    description:
      'Built for a different era. Rigid designs and aging infrastructure make upgrades, integration, and scaling difficult.',
  },
  {
    icon: Gauge,
    title: 'Performance at Population Scale',
    description:
      'As databases grow into millions of records, search speed and response times degrade, slowing every workflow.',
  },
  {
    icon: Copy,
    title: 'Duplicate Identities',
    description:
      'Accurate deduplication gets harder as populations expand, raising the risk of fraud and inconsistent records.',
  },
  {
    icon: ClipboardList,
    title: 'Manual Adjudication',
    description:
      'Fragmented, manual review creates case backlogs and slows decision-making across the program.',
  },
  {
    icon: ScrollText,
    title: 'Limited Transparency & Auditability',
    description:
      'Without complete audit trails and structured workflows, accountability and regulatory compliance suffer.',
  },
  {
    icon: ShieldAlert,
    title: 'Security & Privacy Challenges',
    description:
      'Systems protecting highly sensitive data face modern threats demanding stronger encryption and privacy-first design.',
  },
  {
    icon: Unplug,
    title: 'Poor Interoperability',
    description:
      'Proprietary, closed architectures make integration with existing infrastructure costly and complex.',
  },
  {
    icon: Workflow,
    title: 'Growing Operational Complexity',
    description:
      'Multiple agencies, modalities, and stakeholders require intelligent orchestration—not disconnected tools.',
  },
];

export const Challenges: React.FC = () => {
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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="challenges-section" id="challenges" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <header className="challenges-header reveal">
          <span className="challenges-eyebrow">The Challenge</span>
          <h2 className="challenges-title">The Challenges We're Solving</h2>
          <p className="challenges-subtitle">
            The biometric market is dominated by legacy platforms built more than a decade ago. As
            populations and digital services grow, these systems have become bottlenecks for
            countries and organizations trying to scale, integrate, or modernize.
          </p>
        </header>

        {/* Challenge Cards */}
        <div className="challenges-grid">
          {CHALLENGES.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <article
                key={challenge.title}
                className="challenge-card reveal"
                style={{ transitionDelay: `${(index % 4) * 80}ms` }}
              >
                <span className="challenge-icon">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="challenge-card-title">{challenge.title}</h3>
                <p className="challenge-card-desc">{challenge.description}</p>
              </article>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="challenges-closing reveal">
          <div className="challenges-closing-text">
            <span className="challenges-eyebrow">The Gap</span>
            <h3 className="challenges-closing-title">The Gap We Set Out to Solve</h3>
            <p className="challenges-closing-lead">
              These challenges are not isolated—across multiple national deployments, we witnessed
              the same problems everywhere.
            </p>
            <p className="challenges-closing-body">
              NexBio was created from firsthand experience working with national identity, border
              control, and security systems—and the operational realities behind them. Rather than
              improving legacy technology, we built modern biometric infrastructure from the ground
              up to solve the problems governments and enterprises have struggled with for years.
            </p>
          </div>

          {/* Image placeholder — replace with a suitable image later */}
          <div className="challenges-image-placeholder" aria-hidden="true">
            <div className="challenges-image-placeholder-content">
              <img src={imagePlaceholder} alt="Image placeholder" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

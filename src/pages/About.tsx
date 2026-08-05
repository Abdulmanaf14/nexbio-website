import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { CTASection } from '../components/CTASection';

const principles = [
  {
    title: 'Research-driven',
    description:
      'Algorithms and matching techniques continuously improved through scientific research and real-world feedback.',
  },
  {
    title: 'Standards first',
    description: 'ISO/IEC, ANSI/INCITS, and ICAO compliant. Open architectures with no vendor lock-in.',
  },
  {
    title: 'Secure by design',
    description:
      'End-to-end encryption, secure storage, tamper detection, role-based access, and full auditability.',
  },
  {
    title: 'Scalable performance',
    description:
      'Distributed compute, GPU acceleration, and microservices for populations from thousands to hundreds of millions.',
  },
];

export const About = () => (
  <>
    <PageHero
      eyebrow="About NexBio"
      title="Building the future of identity infrastructure."
      subtitle="NexBio is a next-generation biometric technology company founded by experts who have delivered large-scale national identity, border control, and security systems around the world."
      badges={['Expert Team', 'Researchers', 'Field Tested', 'National Scale']}
    />

    <section className="page-section">
      <div className="container two-col">
        <div>
          <SectionHeader eyebrow="Mission" title="Trust at national and global scale." />
          <p className="page-prose">
            To deliver secure, scalable, research-driven biometric systems that empower countries,
            organizations, and enterprises to establish trust at national and global scale.
          </p>
        </div>
        <div>
          <SectionHeader eyebrow="Vision" title="An inclusive, interoperable identity world." />
          <p className="page-prose">
            An inclusive, interoperable world where identity systems are accurate, transparent, and
            built on strong ethical and engineering foundations.
          </p>
        </div>
      </div>
    </section>

    <section className="page-section page-section--muted">
      <div className="container">
        <SectionHeader
          eyebrow="Our Philosophy"
          title="Principles that drive everything we build."
          align="center"
        />
        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      title="Partner with NexBio."
      subtitle="Build secure, scalable biometric solutions tailored to your needs."
      buttonLabel="Get in Touch"
      buttonTo="/contact"
    />
  </>
);

import { useEffect, useRef } from 'react';
import { Fingerprint, ShieldCheck, Network, Boxes } from 'lucide-react';

export const About: React.FC = () => {
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
    <section className="about-section" id="about" ref={sectionRef}>
      {/* Full-width parallax background (image is fixed to the viewport) */}
      <div
        aria-hidden="true"
        
      />

      {/* Content scrolls naturally over the background */}
      <div className="container about-content">
        <header className="about-header reveal">
          <span className="about-eyebrow">About NexBio</span>
          <h2 className="about-title">Identity infrastructure for governments and enterprises</h2>
          <p className="about-lead">
            NexBio builds biometric identity infrastructure for organizations that need secure,
            large-scale identity systems. Three independent, standards-based platforms matching,
            adjudication, and integration help teams prevent duplicate identities, operate at
            national scale, and keep every identity decision secure, transparent, and auditable.
          </p>
        </header>

        <div className="about-bento">
          <article className="about-bento-cell about-bento-cell--wide reveal">
            <span className="about-bento-eyebrow">
              <Fingerprint size={16} /> Identity Infrastructure
            </span>
            <h3 className="about-bento-title">
              A complete portfolio, not just a matching engine.
            </h3>
            <p className="about-bento-desc">
              NexABIS, NexSAS, and NexSDK each address a distinct part of identity
              operations matching, adjudication, and integration as standalone, standards-based
              systems.
            </p>
          </article>

          <article className="about-bento-cell reveal">
            <span className="about-bento-eyebrow">
              <ShieldCheck size={16} /> Security by Design
            </span>
            <p className="about-bento-desc">
              Encryption, role-based access control, and complete audit trails are built into every
              layer of the platform.
            </p>
          </article>

          <article className="about-bento-cell reveal">
            <span className="about-bento-eyebrow">
              <Network size={16} /> Standards-First
            </span>
            <p className="about-bento-desc">
              Designed around ISO, ANSI/NIST, and ICAO for interoperability without vendor lock-in.
            </p>
          </article>

          <article className="about-bento-cell about-bento-cell--wide reveal">
            <span className="about-bento-eyebrow">
              <Boxes size={16} /> Operational Experience
            </span>
            <p className="about-bento-desc">
              Built from firsthand work on national identity programs, border management, and
              large-scale biometric deduplication.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

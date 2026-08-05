import { useEffect, useRef, type CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';
import fingerBackground from '../assets/finger-bg.jpg';

export const HomeCTA = () => {
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
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="home-cta-section"
      id="contact"
      ref={sectionRef}
      style={{ '--cta-background': `url(${fingerBackground})` } as CSSProperties}
    >
      <div className="container">
        <div className="home-cta-panel reveal">
          <div className="home-cta-copy">
            <span className="home-cta-eyebrow">Start a Conversation</span>
            <h2>Build the next identity program on secure biometric infrastructure.</h2>
            <p>
              Talk to NexBio about national identity, border management, adjudication workflows,
              biometric SDK integration, or enterprise identity requirements.
            </p>
          </div>

          <div className="home-cta-actions">
            <a href="mailto:contact@nexbio.com" className="btn btn-primary">
              Request Demo <ArrowRight size={16} className="btn-arrow" />
            </a>
            <a href="#products" className="btn btn-secondary">
              View Products <ArrowRight size={16} className="btn-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

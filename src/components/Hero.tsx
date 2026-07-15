import { ArrowRight } from 'lucide-react';
import heroVideo from '../assets/video/hero.mp4';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Spotlight & Readability Overlay */}
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-left">
          <div className="hero-badge-container">
            <a href="#sas" className="glowing-badge">
              <span>Trusted Identity Infrastructure</span>
              <ArrowRight size={12} />
            </a>
          </div>

          <h1 className="hero-title">
            Modern identity<br />
            <span className="hero-title-gradient">infrastructure</span>
          </h1>

          <p className="hero-description">
            Deploy secure, standards-compliant, and high-performance biometric matching engines, smart adjudication workflows, and embeddable SDKs built for national security and digital trust.
          </p>

          <div className="hero-ctas">
            <a href="#demo" className="btn btn-primary">
              Get Started <ArrowRight size={16} className="btn-arrow" />
            </a>
            <a href="#docs" className="btn btn-secondary">
              Read Specs <ArrowRight size={16} className="btn-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

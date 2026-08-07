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
              <span>ISO Certified · NIST Compliance · Global Standard</span>
              <ArrowRight size={12} />
            </a>
          </div>

          <h1 className="hero-title">
            Modern Biometric Infrastructure for a Secure and
            <span > Inclusive World</span>
          </h1>

          <p className="hero-description">
            Built by experts with real world experience delivering national ID, border security, and large-scale identity systems.
          </p>

          <div className="hero-ctas">
            <a href="#demo" className="btn btn-primary">
              Request a Demo <ArrowRight size={16} className="btn-arrow" />
            </a>
            <a href="#docs" className="btn btn-secondary">
              Explore Our Products <ArrowRight size={16} className="btn-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

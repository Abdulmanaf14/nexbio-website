import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Braces,
  Building2,
  CheckCircle2,
  Cpu,
  DatabaseZap,
  Eye,
  GraduationCap,
  Layers3,
  Network,
  Rocket,
  ScanFace,
  SearchX,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from 'lucide-react';
import heroBg from '../assets/aboutUs.jpg';
import storyImg from '../assets/identity-infra.jpg';
import sectionBg from '../assets/section-bg.jpg';

/* All copy below is taken verbatim from readme.md (§1, §2, §8, §11, §13). */

const meta = [
  {
    icon: Layers3,
    label: 'Industry',
    value: 'Biometric Technology / Digital Identity Infrastructure',
  },
  { icon: Building2, label: 'Headquarters', value: 'Bengaluru, Karnataka, India' },
  { icon: Network, label: 'Type', value: 'Next-generation biometric technology company' },
];

const heroBadges = ['Expert Team', 'Researchers', 'Field Tested', 'National Scale'];

const audience = [
  'Governments',
  'National ID authorities',
  'Border agencies',
  'Civil registries',
  'Security agencies',
  'Enterprises',
  'System integrators',
];

const stats = [
  { value: '500M+', label: 'records capacity' },
  { value: '99.99%', label: 'system uptime' },
  { value: '99.7%', label: 'Rank-1 accuracy' },
  { value: '<200ms', label: '1:N search response' },
];

const story = [
  `NexBio is a next-generation biometric technology company founded by experts who have delivered large-scale national identity, border control, and security systems around the world. It was created with a clear purpose: to rethink identity technology from the ground up and build systems that finally solve the problems governments and enterprises have struggled with for years.`,
  `Across multiple national deployments, the NexBio team witnessed the same challenges everywhere: outdated biometric systems, rigid architectures, weak security foundations, inaccurate matching, poor workflow management, and almost no visibility for operators or supervisors. Years of engaging with national authorities — listening to their real operational difficulties, studying their adjudication workflows, and evaluating the limitations of existing vendors — shaped NexBio. The company is not just building products; it is building identity infrastructure for the next generation.`,
];

const missionVision = [
  {
    icon: Target,
    eyebrow: 'Mission',
    title: 'Trust at national and global scale.',
    body: `To deliver secure, scalable, research-driven biometric systems that empower countries, organizations, and enterprises to establish trust at national and global scale.`,
  },
  {
    icon: Eye,
    eyebrow: 'Vision',
    title: 'An inclusive, interoperable identity world.',
    body: `An inclusive, interoperable world where identity systems are accurate, transparent, and built on strong ethical and engineering foundations.`,
  },
];

const timeline = [
  {
    step: '01',
    title: 'Founded by experts',
    body: `Founded by experts who have delivered large-scale national identity, border control, and security systems around the world.`,
  },
  {
    step: '02',
    title: 'Witnessed the same challenges',
    body: `Across multiple national deployments, the NexBio team witnessed the same challenges everywhere: outdated biometric systems, rigid architectures, weak security foundations, inaccurate matching, poor workflow management, and almost no visibility for operators or supervisors.`,
  },
  {
    step: '03',
    title: 'Years of engaging with national authorities',
    body: `Years of engaging with national authorities — listening to their real operational difficulties, studying their adjudication workflows, and evaluating the limitations of existing vendors — shaped NexBio.`,
  },
  {
    step: '04',
    title: 'Identity infrastructure for the next generation',
    body: `The company is not just building products; it is building identity infrastructure for the next generation.`,
  },
];

const problemItems = [
  {
    icon: AlertTriangle,
    title: 'Outdated Systems',
    body: `Low accuracy, slow response, demographic gaps, limited workflows, weak security, and no scalable architecture.`,
  },
  {
    icon: SearchX,
    title: 'No Complete Solution',
    body: `Countries confirmed: "The problems we face have no real solution in the market today."`,
  },
  {
    icon: GraduationCap,
    title: 'Expert Experience',
    body: `Working closely with authorities gave NexBio the clarity and expertise to design a modern, modular, secure identity ecosystem.`,
  },
  {
    icon: Rocket,
    title: 'Next Generation',
    body: `NexBio is not just building products; it is building identity infrastructure for the future.`,
  },
];

const advantage = [
  {
    icon: Award,
    title: 'Expert-Built with Real Deployment Experience',
    body: `Built by specialists with deep experience across national ID, border control, and forensic systems. Years of direct collaboration with governments provide unmatched clarity into real identity challenges.`,
  },
  {
    icon: DatabaseZap,
    title: 'Scale to Population-Level Deduplication',
    body: `Designed for high-volume deduplication with optimized pipelines, scalable clusters, and modern algorithms ensuring accuracy even at 500M+ records.`,
  },
  {
    icon: Zap,
    title: 'High-Performance Matching Architecture',
    body: `Distributed matching engines, GPU acceleration, and microservices architecture ensure reliable, fast search across fingerprint, face, and iris even under peak workloads.`,
  },
  {
    icon: Workflow,
    title: 'Intelligent Adjudication Workflows',
    body: `NexSAS delivers case routing, triage automation, supervisor oversight, and evidence-based decisions designed by forensic analysts who understand adjudication challenges.`,
  },
  {
    icon: ShieldCheck,
    title: 'Security Built for Modern Threats',
    body: `End-to-end encryption, role-based access control, secure template storage, and privacy-by-design principles ensure compliance with global security frameworks.`,
  },
  {
    icon: Braces,
    title: 'API-First Flexible Integration',
    body: `Modular, API-driven approach allows seamless integration into existing national identity ecosystems, eliminating technical debt and compatibility issues.`,
  },
];

const productHighlights = [
  {
    icon: Cpu,
    name: 'NexABIS',
    body: `World-class ABIS for national scale. Fast, accurate search across fingerprint, face, and iris.`,
    to: '/products/nexabis',
  },
  {
    icon: Workflow,
    name: 'NexSAS',
    body: `Modern adjudication engine solving operational challenges: triage, case management, evidence visibility, and auditability.`,
    to: '/products/nexsas',
  },
  {
    icon: Braces,
    name: 'NexSDK',
    body: `Powerful multimodal biometric SDK for secure identity verification, onboarding, and access control.`,
    to: '/products/nexsdk',
  },
];

const promises = ['Accurate', 'Secure', 'Ethical', 'Interoperable', 'Scalable', 'Research-driven'];

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* Scroll-triggered reveals (existing .reveal pattern) */
    const revealElements = Array.from(section.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
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

    /* Subtle image parallax via --py, measured against each layer's frame */
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parallaxLayers = Array.from(
      section.querySelectorAll<HTMLElement>('[data-parallax]'),
    );
    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      parallaxLayers.forEach((layer) => {
        const frameEl = layer.parentElement;
        if (!frameEl) return;
        const factor = Number.parseFloat(layer.dataset.parallax || '0');
        const rect = frameEl.getBoundingClientRect();
        const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
        layer.style.setProperty('--py', `${(-offset * factor).toFixed(2)}px`);
      });
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateParallax);
    };

    if (!prefersReduced && parallaxLayers.length > 0) {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      updateParallax();
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <article className="ap" ref={sectionRef}>
      {/* Hero banner */}
      <section className="ap-hero">
        <div className="container">
          <div className="ap-hero-banner reveal">
            <div
              className="ap-hero-bg ap-parallax"
              data-parallax="0.14"
              style={{ backgroundImage: `url(${heroBg})` }}
              aria-hidden="true"
            />
            <div className="ap-hero-overlay" aria-hidden="true" />
            <div className="ap-hero-content">
              <span className="ap-hero-eyebrow">
                <Sparkles size={15} strokeWidth={1.8} />
                About NexBio
              </span>
              <h1 className="ap-hero-title">Building the Future of Identity Infrastructure</h1>
              <p className="ap-hero-sub">
                NexBio is a next-generation biometric technology company founded by experts who have
                delivered large-scale national identity, border control, and security systems around
                the world.
              </p>
              <div className="ap-hero-badges">
                {heroBadges.map((badge) => (
                  <span className="ap-hero-badge" key={badge}>
                    <CheckCircle2 size={14} strokeWidth={2} />
                    {badge}
                  </span>
                ))}
              </div>
              <div className="ap-hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  Get in Touch <ArrowRight size={16} className="btn-arrow" />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="ap-hero-meta">
              {meta.map((item) => (
                <div className="ap-hero-meta-item" key={item.label}>
                  <item.icon size={16} strokeWidth={1.8} />
                  <span className="ap-hero-meta-label">{item.label}</span>
                  <span className="ap-hero-meta-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience strip */}
      <section className="ap-audience">
        <div className="container">
          <span className="ap-audience-label">Who we serve</span>
          <div className="ap-audience-list">
            {audience.map((item) => (
              <span className="ap-audience-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="ap-stats-wrap">
        <div className="container">
          <div className="ap-stats">
            {stats.map((stat, index) => (
              <div
                className="ap-stat reveal"
                key={stat.label}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story — alternating image / content */}
      <section className="page-section">
        <div className="container ap-story">
          <div className="ap-story-text">
            <header className="page-section-header reveal">
              <span className="page-section-eyebrow">About NexBio</span>
              <h2 className="page-section-title">Identity infrastructure for the next generation.</h2>
            </header>
            {story.map((paragraph, index) => (
              <p
                className={`ap-story-p reveal${index === 1 ? ' ap-story-p--muted' : ''}`}
                key={index}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                {paragraph}
              </p>
            ))}
            <p className="ap-story-quote reveal" style={{ transitionDelay: '180ms' }}>
              “It was created with a clear purpose: to rethink identity technology from the ground
              up.”
            </p>
          </div>

          <div className="ap-story-media reveal" style={{ transitionDelay: '120ms' }}>
            <div className="ap-story-media-frame">
              <img
                src={storyImg}
                alt="Biometric identity technology"
                className="ap-parallax ap-story-media-img"
                data-parallax="0.08"
                loading="lazy"
              />
              <div className="ap-story-media-overlay" aria-hidden="true" />
              <div className="ap-story-media-badge">
                <ScanFace size={22} strokeWidth={1.6} />
                <div>
                  <strong>Digital Identity</strong>
                  <span>Biometric infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="page-section page-section--muted">
        <div className="container">
          <header className="page-section-header is-center reveal">
            <span className="page-section-eyebrow">Mission &amp; Vision</span>
            <h2 className="page-section-title">Purpose behind the platform.</h2>
          </header>
          <div className="ap-mv">
            {missionVision.map((item, index) => (
              <article
                className="ap-mv-card reveal"
                key={item.eyebrow}
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <span className="ap-mv-icon">
                  <item.icon size={22} strokeWidth={1.8} />
                </span>
                <span className="ap-mv-eyebrow">{item.eyebrow}</span>
                <h3 className="ap-mv-title">{item.title}</h3>
                <p className="ap-mv-body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="page-section">
        <div className="container">
          <header className="page-section-header reveal">
            <span className="page-section-eyebrow">Our Journey</span>
            <h2 className="page-section-title">From field experience to identity infrastructure.</h2>
          </header>
          <ol className="ap-timeline">
            {timeline.map((item, index) => (
              <li
                className="ap-timeline-item reveal"
                key={item.step}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="ap-timeline-marker">{item.step}</span>
                <div className="ap-timeline-body">
                  <h3 className="ap-timeline-title">{item.title}</h3>
                  <p className="ap-timeline-text">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why we exist — the problem */}
      <section className="page-section page-section--muted">
           
        <div className="container">
          <header className="page-section-header reveal">
            <span className="page-section-eyebrow">Why We Exist</span>
            <h2 className="page-section-title">The problem we're solving.</h2>
            <p className="page-section-subtitle">
              The current biometric market is dominated by legacy platforms built more than a decade
              ago. These systems have become bottlenecks for countries and organizations trying to
              scale, integrate, or modernize.
            </p>
          </header>
          <div className="ap-problem">
            {problemItems.map((item, index) => (
              <article
                className="ap-problem-card reveal"
                key={item.title}
                style={{ transitionDelay: `${(index % 4) * 80}ms` }}
              >
                <span className="ap-problem-icon">
                  <item.icon size={20} strokeWidth={1.8} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage */}
      <section
        className="page-section ap-advantage"
        style={{ backgroundImage: `url(${sectionBg})` }}
      >
        <div className="container">
          <header className="page-section-header reveal">
            <span className="page-section-eyebrow">The NexBio Advantage</span>
            <h2 className="page-section-title">Built from experience, engineered for the future.</h2>
          </header>
          <div className="ap-grid-3">
            {advantage.map((item, index) => (
              <article
                className="ap-feature-card reveal"
                key={item.title}
                style={{ transitionDelay: `${(index % 3) * 90}ms` }}
              >
                <span className="ap-feature-icon">
                  <item.icon size={20} strokeWidth={1.8} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product highlights */}
      <section className="page-section">
        <div className="container">
          <header className="page-section-header reveal">
            <span className="page-section-eyebrow">Our Products</span>
            <h2 className="page-section-title">
              Complete identity ecosystem for governments, security agencies, and enterprises.
            </h2>
          </header>
          <div className="ap-grid-3">
            {productHighlights.map((item, index) => (
              <article
                className="ap-product-card reveal"
                key={item.name}
                style={{ transitionDelay: `${(index % 3) * 90}ms` }}
              >
                <span className="ap-product-icon">
                  <item.icon size={22} strokeWidth={1.8} />
                </span>
                <h3>{item.name}</h3>
                <p>{item.body}</p>
                <Link to={item.to} className="ap-product-link">
                  Learn about {item.name} <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="page-section page-section--muted">
        <div className="container">
          <div className="ap-promise reveal">
            <span className="page-section-eyebrow">Our Promise</span>
            <h2 className="ap-promise-title">
              NexBio is not just another vendor — it is a long-term technology partner for the future
              of identity.
            </h2>
            <p className="ap-promise-sub">
              NexBio is committed to building biometric infrastructure that is:
            </p>
            <div className="ap-promise-chips">
              {promises.map((promise) => (
                <span className="ap-promise-chip" key={promise}>
                  <CheckCircle2 size={15} strokeWidth={2} />
                  {promise}
                </span>
              ))}
            </div>
            <p className="ap-promise-note">And above all, built for real-world demands.</p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="page-section">
        <div className="container">
          <div className="ap-cta reveal">
            <div className="ap-cta-bg ap-parallax" data-parallax="0.1" aria-hidden="true" />
            <div className="ap-cta-content">
              <h2 className="ap-cta-title">Ready to Transform Your Identity Infrastructure?</h2>
              <p className="ap-cta-sub">
                Partner with NexBio to build secure, scalable biometric solutions tailored to your
                needs.
              </p>
              <div className="ap-cta-actions">
                <Link to="/contact" className="btn btn-primary">
                  Get in Touch <ArrowRight size={16} className="btn-arrow" />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

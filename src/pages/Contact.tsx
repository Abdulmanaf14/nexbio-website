import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Globe,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import heroBg from '../assets/contact-banner.jpg';
import officeImg from '../assets/map.jpg';

/* All copy below is drawn from readme.md (§1, §3, §5, §14). */

const heroBadges = ['ISO Certified', 'NIST Compliance', 'Global Standard'];

const heroMeta = [
  { icon: MapPin, label: 'Headquarters', value: 'Bengaluru, India' },
  { icon: Clock, label: 'Response time', value: 'Within 1 business day' },
  { icon: Globe, label: 'Coverage', value: 'National & enterprise scale' },
];

const channels = [
  {
    icon: Headphones,
    label: 'General Inquiries',
    email: 'contact@nex.bio',
    body: 'Sales, partnerships, and solution discussions for governments and enterprises.',
  },
  {
    icon: MessageSquare,
    label: 'Information & Media',
    email: 'info@nex.bio',
    body: 'General questions, information requests, and media inquiries.',
  },
  {
    icon: Briefcase,
    label: 'Careers',
    email: 'careers@nex.bio',
    body: 'Interested in joining the team? Send a resume or inquire about open positions.',
  },
  {
    icon: Users,
    label: 'Human Resources',
    email: 'hr@nex.bio',
    body: 'Employee matters and organizational questions.',
  },
];

const useCases = [
  'Government & National Identity',
  'Border Control & Immigration',
  'Law Enforcement & Security',
  'Banking & Telecom (KYC)',
  'Healthcare & Insurance',
  'Enterprise & Workforce',
  'Other',
];

const interests = [
  'NexABIS — Automated Biometric Identification',
  'NexSAS — Smart Adjudication System',
  'NexSDK — Multi-Modal Biometric SDK',
  'General / Not sure yet',
];

const processSteps = [
  {
    step: '01',
    title: 'Submit your request',
    body: 'Tell us about your program, scale, and the outcomes you are targeting.',
  },
  {
    step: '02',
    title: 'Solutions architect review',
    body: 'Our experts assess your requirements, capacity, and integration landscape.',
  },
  {
    step: '03',
    title: 'Tailored proposal',
    body: 'Receive deployment timelines, performance benchmarks, and licensing options.',
  },
  {
    step: '04',
    title: 'Technical demo',
    body: 'See NexABIS, NexSAS, or NexSDK in action with your use case in mind.',
  },
];

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=Mantri+Commercio+Tower+A+Bellandur+Bengaluru';

  return (
    <article className="cp" ref={sectionRef}>
      {/* Hero banner */}
      <section className="cp-hero">
        <div className="container">
          <div className="cp-hero-banner reveal">
            <div
              className="cp-hero-bg cp-parallax"
              data-parallax="0.14"
              style={{ backgroundImage: `url(${heroBg})` }}
              aria-hidden="true"
            />
            <div className="cp-hero-overlay" aria-hidden="true" />
            <div className="cp-hero-content">
              <span className="cp-hero-eyebrow">
                <Sparkles size={15} strokeWidth={1.8} />
                Contact NexBio
              </span>
              <h1 className="cp-hero-title">Let&rsquo;s build the future of identity together.</h1>
              <p className="cp-hero-sub">
                Whether you&rsquo;re modernizing a national ID system, securing enterprise access, or
                exploring biometric solutions, our team of experts is here to help you design and
                deploy the right solution for your mission-critical needs.
              </p>
              <div className="cp-hero-badges">
                {heroBadges.map((badge) => (
                  <span className="cp-hero-badge" key={badge}>
                    <CheckCircle2 size={14} strokeWidth={2} />
                    {badge}
                  </span>
                ))}
              </div>
              <div className="cp-hero-actions">
                <a href="#contact-form" className="btn btn-primary">
                  Request a demo <ArrowRight size={16} className="btn-arrow" />
                </a>
                <a href="#offices" className="btn btn-secondary">
                  View offices
                </a>
              </div>
            </div>
            <div className="cp-hero-meta">
              {heroMeta.map((item) => (
                <div className="cp-hero-meta-item" key={item.label}>
                  <item.icon size={16} strokeWidth={1.8} />
                  <span className="cp-hero-meta-label">{item.label}</span>
                  <span className="cp-hero-meta-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main: channels + form */}
      <section className="page-section" id="contact-form">
        <div className="container cp-main">
          {/* Channels */}
          <div className="cp-channels">
            <header className="page-section-header reveal">
              <span className="page-section-eyebrow">Reach our team</span>
              <h2 className="page-section-title">Talk to the right people, faster.</h2>
              <p className="page-section-subtitle">
                Route your message to the team best placed to help — from solutions architects to
                careers and HR.
              </p>
            </header>

            <div className="cp-channel-grid">
              {channels.map((channel, index) => (
                <a
                  className="cp-channel-card reveal"
                  href={`mailto:${channel.email}`}
                  key={channel.email}
                  style={{ transitionDelay: `${(index % 2) * 80}ms` }}
                >
                  <span className="cp-channel-icon">
                    <channel.icon size={20} strokeWidth={1.8} />
                  </span>
                  <span className="cp-channel-label">{channel.label}</span>
                  <span className="cp-channel-email">{channel.email}</span>
                  <span className="cp-channel-body">{channel.body}</span>
                  <span className="cp-channel-arrow">
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </span>
                </a>
              ))}
            </div>

            <div className="cp-office-card reveal" style={{ transitionDelay: '120ms' }}>
              <span className="cp-office-icon">
                <MapPin size={20} strokeWidth={1.8} />
              </span>
              <div className="cp-office-copy">
                <span className="cp-office-label">Headquarters</span>
                <p className="cp-office-address">
                  Mantri Commercio Tower-A, Marathahalli&ndash;Sarjapur Outer Ring Rd, Kariyammana
                  Agrahara, Bellandur, Bengaluru, Karnataka 560103, India
                </p>
                <a
                  className="cp-office-directions"
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation size={15} strokeWidth={2} />
                  Get directions
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <aside className="cp-form-card reveal" style={{ transitionDelay: '120ms' }}>
            <div className="cp-form-head">
              <h2>Request a demo</h2>
              <p>Tell us about your program and our solution architects will follow up.</p>
            </div>

            {submitted ? (
              <div className="cp-form-success">
                <CheckCircle2 size={22} strokeWidth={1.8} />
                <div>
                  <strong>Thanks — your request has been received.</strong>
                  <span>
                    A solutions architect will reach out within one business day. For immediate
                    contact, email{' '}
                    <a href="mailto:contact@nex.bio">contact@nex.bio</a>.
                  </span>
                </div>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit}>
                <div className="cp-form-row">
                  <label>
                    <span className="cp-field-label">Full name</span>
                    <input required type="text" name="name" autoComplete="name" />
                  </label>
                  <label>
                    <span className="cp-field-label">Work email</span>
                    <input required type="email" name="email" autoComplete="email" />
                  </label>
                </div>

                <div className="cp-form-row">
                  <label>
                    <span className="cp-field-label">Organization</span>
                    <input type="text" name="organization" autoComplete="organization" />
                  </label>
                  <label>
                    <span className="cp-field-label">Phone (optional)</span>
                    <input type="tel" name="phone" autoComplete="tel" />
                  </label>
                </div>

                <div className="cp-form-row">
                  <label>
                    <span className="cp-field-label">Primary use case</span>
                    <select name="useCase" defaultValue="">
                      <option value="" disabled>
                        Select a use case…
                      </option>
                      {useCases.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span className="cp-field-label">Area of interest</span>
                    <select name="interest" defaultValue="">
                      <option value="" disabled>
                        Select a product…
                      </option>
                      {interests.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label>
                  <span className="cp-field-label">Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your program, scale, and timeline…"
                  />
                </label>

                <button type="submit" className="btn btn-primary cp-form-submit">
                  Submit request <Send size={16} className="btn-arrow" />
                </button>

                <p className="cp-form-note">
                  <ShieldCheck size={14} strokeWidth={1.8} />
                  Your details are kept confidential and used only to respond to your inquiry.
                </p>
              </form>
            )}
          </aside>
        </div>
      </section>

      {/* Offices / location */}
      <section className="page-section page-section--muted" id="offices">
        <div className="container">
          <header className="page-section-header is-center reveal">
            <span className="page-section-eyebrow">Our Location</span>
            <h2 className="page-section-title">Find us in Bengaluru.</h2>
            <p className="page-section-subtitle">
              Our headquarters in Bellandur, Bengaluru is home to our research, engineering, and
              solutions teams.
            </p>
          </header>

          <div className="cp-locate">
            <div className="cp-locate-media reveal" style={{ transitionDelay: '80ms' }}>
              <img src={officeImg} alt="NexBio headquarters" loading="lazy" />
              <div className="cp-locate-pin" aria-hidden="true">
                <MapPin size={22} strokeWidth={1.8} />
              </div>
              <div className="cp-locate-overlay" aria-hidden="true" />
              <a
                className="cp-locate-cta"
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps <ArrowUpRight size={15} strokeWidth={2} />
              </a>
            </div>

            <div className="cp-locate-details reveal" style={{ transitionDelay: '140ms' }}>
              <div className="cp-locate-item">
                <span className="cp-locate-item-icon">
                  <Building2 size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <span className="cp-locate-item-label">Office</span>
                  <p>Mantri Commercio Tower-A, Bellandur, Bengaluru, Karnataka 560103, India</p>
                </div>
              </div>
              <div className="cp-locate-item">
                <span className="cp-locate-item-icon">
                  <Mail size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <span className="cp-locate-item-label">Email</span>
                  <p>
                    <a href="mailto:contact@nex.bio">contact@nex.bio</a>
                  </p>
                </div>
              </div>
              <div className="cp-locate-item">
                <span className="cp-locate-item-icon">
                  <Phone size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <span className="cp-locate-item-label">Sales</span>
                  <p>Available Mon&ndash;Fri, 9:00&ndash;18:00 IST</p>
                </div>
              </div>

              <div className="cp-locate-region">
                <span className="cp-locate-region-label">Serving</span>
                <div className="cp-locate-region-chips">
                  {['Governments', 'National ID authorities', 'Border agencies', 'Enterprises'].map(
                    (item) => (
                      <span className="cp-locate-region-chip" key={item}>
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="page-section">
        <div className="container">
          <header className="page-section-header is-center reveal">
            <span className="page-section-eyebrow">What Happens Next</span>
            <h2 className="page-section-title">From request to deployment.</h2>
          </header>
          <ol className="cp-process">
            {processSteps.map((item, index) => (
              <li
                className="cp-process-item reveal"
                key={item.step}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="cp-process-marker">{item.step}</span>
                <h3 className="cp-process-title">{item.title}</h3>
                <p className="cp-process-text">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="page-section">
        <div className="container">
          <div className="cp-cta reveal">
            <div className="cp-cta-bg cp-parallax" data-parallax="0.1" aria-hidden="true" />
            <div className="cp-cta-content">
              <h2 className="cp-cta-title">Build the future of identity with NexBio.</h2>
              <p className="cp-cta-sub">
                Partner with a team that has delivered national ID, border security, and
                large-scale identity systems around the world.
              </p>
              <div className="cp-cta-actions">
                <a href="#contact-form" className="btn btn-primary">
                  Request a demo <ArrowRight size={16} className="btn-arrow" />
                </a>
                <Link to="/products" className="btn btn-secondary">
                  Explore our products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

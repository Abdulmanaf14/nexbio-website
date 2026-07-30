import { ArrowUpRight, Mail, MapPin, ShieldCheck } from 'lucide-react';
import logo from '../assets/6.png';

const footerColumns = [
  {
    title: 'Products',
    links: [
      { label: 'NexABIS', href: '/products/nexabis' },
      { label: 'NexSAS', href: '/products/nexsas' },
      { label: 'NexSDK', href: '/products/nexsdk' },
      { label: 'Product Overview', href: '#products-preview' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'National ID', href: '#use-cases' },
      { label: 'Border Control', href: '#use-cases' },
      { label: 'Immigration', href: '#use-cases' },
      { label: 'Banking', href: '#use-cases' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Platform', href: '#platform' },
      { label: 'Technology', href: '#security-standards' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '#security-standards' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo-link" aria-label="NexBio home">
              <img src={logo} alt="NexBio Logo" className="footer-logo" />
            </a>
            <p>
              Next-generation biometric identity infrastructure for governments, enterprises, and
              organizations that require secure, scalable, and interoperable identity systems.
            </p>
            <div className="footer-badges">
              <span>
                <ShieldCheck size={15} strokeWidth={1.8} />
                Security-first
              </span>
              <span>ISO</span>
              <span>ANSI/NIST</span>
              <span>ICAO</span>
            </div>
          </div>

          <div className="footer-links">
            {footerColumns.map((column) => (
              <div className="footer-column" key={column.title}>
                <h3>{column.title}</h3>
                {column.links.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-contact">
          <a href="mailto:contact@nexbio.com">
            <Mail size={16} strokeWidth={1.8} />
            contact@nexbio.com
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
          <span>
            <MapPin size={16} strokeWidth={1.8} />
            Global biometric identity infrastructure
          </span>
        </div>

        <div className="footer-bottom">
          <span>© 2026 NexBio. All rights reserved.</span>
          <span>Built for secure identity programs.</span>
        </div>
      </div>
    </footer>
  );
};

import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, ShieldCheck } from 'lucide-react';
import logo from '../assets/6.png';

const footerColumns = [
  {
    title: 'Products',
    links: [
      { label: 'NexABIS', to: '/products/nexabis' },
      { label: 'NexSAS', to: '/products/nexsas' },
      { label: 'NexSDK', to: '/products/nexsdk' },
      { label: 'All Products', to: '/products' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'National ID', to: '/#use-cases' },
      { label: 'Border Control', to: '/#use-cases' },
      { label: 'Immigration', to: '/#use-cases' },
      { label: 'Banking', to: '/#use-cases' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Platform', to: '/#platform' },
      { label: 'Technology', to: '/#security-standards' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
      { label: 'Security', to: '/#security-standards' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link" aria-label="NexBio home">
              <img src={logo} alt="NexBio Logo" className="footer-logo" />
            </Link>
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
                  <Link to={link.to} key={link.label}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-contact">
          <a href="mailto:contact@nex.bio">
            <Mail size={16} strokeWidth={1.8} />
            contact@nex.bio
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
          <span>
            <MapPin size={16} strokeWidth={1.8} />
            Mantri Commercio Tower-A, Bellandur, Bengaluru, Karnataka 560103, India
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

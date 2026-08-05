import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/6.png';

const productLinks = [
  {
    href: '/products/nexabis',
    title: 'NexABIS',
    description: 'Automated biometric identification system',
  },
  {
    href: '/products/nexsas',
    title: 'NexSAS',
    description: 'Smart adjudication and case workflow',
  },
  {
    href: '/products/nexsdk',
    title: 'NexSDK',
    description: 'Biometric capture and integration SDK',
  },
];

const mainLinks = [
  { href: '#platform', label: 'Platform' },
  { href: '#use-cases', label: 'Solutions' },
  { href: '#security-standards', label: 'Technology' },
  { href: '#about', label: 'Company' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <header className={`header-container container ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <div className="logo-wrapper">
          <a href="/" className="logo-link" aria-label="NexBio home">
            <img src={logo} alt="NexBio Logo" className="logo-image" />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-links">
          <a href="#platform" className="nav-item">Platform</a>

          {/* Products Dropdown */}
          <div className="nav-item nav-item-dropdown">
            Products <ChevronDown size={14} />
            <div className="dropdown-menu glass">
              {productLinks.map((link) => (
                <a href={link.href} className="dropdown-item" key={link.title}>
                  <span className="dropdown-title">{link.title}</span>
                  <span className="dropdown-desc">{link.description}</span>
                </a>
              ))}
              <a href="#products" className="dropdown-item dropdown-item-muted">
                <span className="dropdown-title">Product Overview</span>
                <span className="dropdown-desc">Compare the NexBio product ecosystem</span>
              </a>
            </div>
          </div>

          <a href="#use-cases" className="nav-item">Solutions</a>
          <a href="#security-standards" className="nav-item">Technology</a>
          <a href="#about" className="nav-item">Company</a>
        </nav>

        {/* Right Actions */}
        <div className="header-actions">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span>Standards-ready</span>
          </div>
          <a href="#contact" className="btn btn-secondary header-demo-btn">
            Request Demo
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass">
          <div className="mobile-drawer-content">
            <div className="mobile-drawer-section">
              <h3>Products</h3>
              {productLinks.map((link) => (
                <a href={link.href} onClick={() => setMobileMenuOpen(false)} key={link.title}>
                  {link.title}
                </a>
              ))}
            </div>
            <div className="mobile-drawer-section">
              <h3>Navigation</h3>
              {mainLinks.map((link) => (
                <a href={link.href} onClick={() => setMobileMenuOpen(false)} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mobile-drawer-section">
              <h3>Engage</h3>
              <a href="#products" onClick={() => setMobileMenuOpen(false)}>Product Overview</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
            <div className="mobile-drawer-actions">
              <a href="#contact" className="btn btn-primary mobile-demo-btn" onClick={() => setMobileMenuOpen(false)}>
                Request Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/6.png';

const productLinks = [
  {
    to: '/products/nexabis',
    title: 'NexABIS',
    description: 'Automated biometric identification system',
  },
  {
    to: '/products/nexsas',
    title: 'NexSAS',
    description: 'Smart adjudication and case workflow',
  },
  {
    to: '/products/nexsdk',
    title: 'NexSDK',
    description: 'Biometric capture and integration SDK',
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <div className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <header className={`header-container container ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <div className="logo-wrapper">
          <Link to="/" className="logo-link" aria-label="NexBio home">
            <img src={logo} alt="NexBio Logo" className="logo-image" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-links">
          {/* Products Dropdown */}
          <div className="nav-item nav-item-dropdown">
            <Link to="/products" className="nav-item">
              Products <ChevronDown size={14} />
            </Link>
            <div className="dropdown-menu glass">
              {productLinks.map((link) => (
                <Link to={link.to} className="dropdown-item" key={link.title}>
                  <span className="dropdown-title">{link.title}</span>
                  <span className="dropdown-desc">{link.description}</span>
                </Link>
              ))}
              <Link to="/products" className="dropdown-item dropdown-item-muted">
                <span className="dropdown-title">All Products</span>
                <span className="dropdown-desc">Compare the NexBio product portfolio</span>
              </Link>
            </div>
          </div>

          <Link to="/about" className="nav-item">About</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className="header-actions">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span>Standards-ready</span>
          </div>
          <Link to="/contact" className="btn btn-secondary header-demo-btn">
            Request Demo
          </Link>
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
                <Link to={link.to} onClick={closeMobile} key={link.title}>
                  {link.title}
                </Link>
              ))}
              <Link to="/products" onClick={closeMobile}>All Products</Link>
            </div>
            <div className="mobile-drawer-section">
              <h3>Navigation</h3>
              <Link to="/about" onClick={closeMobile}>About</Link>
              <Link to="/contact" onClick={closeMobile}>Contact</Link>
            </div>
            <div className="mobile-drawer-actions">
              <Link to="/contact" className="btn btn-primary mobile-demo-btn" onClick={closeMobile}>
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/6.png';

export const Header: React.FC = () => {
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
          <a href="/">
            <img src={logo} alt="NexBio Logo" style={{ height: '50px' }} />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-links">
          {/* Products Dropdown */}
          <div className="nav-item nav-item-dropdown">
            Products <ChevronDown size={14} />
            <div className="dropdown-menu glass">
              <a href="#abis" className="dropdown-item">
                <span className="dropdown-title">NexABIS</span>
                <span className="dropdown-desc">National-scale biometric matching engine</span>
              </a>
              <a href="#sas" className="dropdown-item">
                <span className="dropdown-title">NexSAS</span>
                <span className="dropdown-desc">Smart biometric adjudication workspace</span>
              </a>
              <a href="#sdk" className="dropdown-item">
                <span className="dropdown-title">NexSDK</span>
                <span className="dropdown-desc">Embeddable finger, face, and iris capture SDK</span>
              </a>
            </div>
          </div>

          {/* Sectors Dropdown */}
          <div className="nav-item nav-item-dropdown">
            Sectors <ChevronDown size={14} />
            <div className="dropdown-menu glass">
              <div className="dropdown-item">
                <span className="dropdown-title">Government & Borders</span>
                <span className="dropdown-desc">National identity, eVisa, & travel clearance</span>
              </div>
              <div className="dropdown-item">
                <span className="dropdown-title">Law Enforcement</span>
                <span className="dropdown-desc">Deduplication, forensics, & watchlist checking</span>
              </div>
              <div className="dropdown-item">
                <span className="dropdown-title">Banking & Enterprise</span>
                <span className="dropdown-desc">Secure eKYC onboarding & access credentials</span>
              </div>
            </div>
          </div>

          <a href="#philosophy" className="nav-item">Philosophy</a>
          <a href="#developers" className="nav-item">Developers</a>
        </nav>

        {/* Right Actions */}
        <div className="header-actions">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span>API Active</span>
          </div>
          <a href="#demo" className="btn btn-secondary" style={{ padding: '8px 18px', fontSize: '14px', borderRadius: '100px' }}>
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
              <a href="#abis" onClick={() => setMobileMenuOpen(false)}>NexABIS</a>
              <a href="#sas" onClick={() => setMobileMenuOpen(false)}>NexSAS</a>
              <a href="#sdk" onClick={() => setMobileMenuOpen(false)}>NexSDK</a>
            </div>
            <div className="mobile-drawer-section">
              <h3>Sectors</h3>
              <a>Government & Borders</a>
              <a>Law Enforcement</a>
              <a>Banking & Enterprise</a>
            </div>
            <div className="mobile-drawer-section">
              <h3>Company</h3>
              <a href="#philosophy" onClick={() => setMobileMenuOpen(false)}>Philosophy</a>
              <a href="#developers" onClick={() => setMobileMenuOpen(false)}>Developers</a>
            </div>
            <div className="mobile-drawer-actions">
              <a href="#demo" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)} style={{ width: '100%' }}>
                Request Government Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

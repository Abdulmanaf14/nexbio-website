import { useState } from 'react';
import { ArrowRight, User, CheckCircle, XCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'abis' | 'sas' | 'sdk'>('sas');
  const [adjudicationDecision, setAdjudicationDecision] = useState<string | null>(null);
  const [decisionType, setDecisionType] = useState<'Approved' | 'Flagged' | null>(null);

  const handleAdjudicate = (decision: 'Approved' | 'Flagged') => {
    setDecisionType(decision);
    setAdjudicationDecision(`ID marked as [${decision.toUpperCase()}] and transmitted to Auditor. Timestamp: ${new Date().toLocaleTimeString()}`);
  };

  return (
    <section className="hero-section">
      {/* Background Video */}
      <video 
        className="hero-video" 
        src="/assets/video/2026-07-15_01-15-28_Lumina_1.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline 
      />
      
      {/* Spotlight & Readability Overlay */}
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        {/* Left Side Content */}
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

        {/* Right Side Visual Component (Interactive Showcase) */}
        <div className="hero-right">
          <div className="visual-card glass-card">
            {/* Header Tabs */}
            <div className="visual-card-tabs">
              <div 
                className={`visual-card-tab ${activeTab === 'sas' ? 'active' : ''}`}
                onClick={() => setActiveTab('sas')}
              >
                NexSAS
              </div>
              <div 
                className={`visual-card-tab ${activeTab === 'sdk' ? 'active' : ''}`}
                onClick={() => setActiveTab('sdk')}
              >
                NexSDK
              </div>
              <div 
                className={`visual-card-tab ${activeTab === 'abis' ? 'active' : ''}`}
                onClick={() => setActiveTab('abis')}
              >
                NexABIS
              </div>
            </div>

            {/* Tab Contents */}
            <div className="visual-card-body">
              {/* Tab 1: Adjudication Simulator */}
              {activeTab === 'sas' && (
                <div className="sim-container">
                  <div className="sim-header">
                    <div className="sim-header-content">
                      <span className="sim-header-title">
                        Smart Adjudicator Panel
                      </span>
                      <span className="status-badge sim-header-badge">
                        Active Case #39281
                      </span>
                    </div>
                  </div>

                  <div className="sim-face-grid">
                    <div className="sim-face-card">
                      <div className="sim-face-avatar">
                        <User size={28} />
                      </div>
                      <span className="sim-face-label">Probe Record</span>
                    </div>

                    <div className="sim-match-arrow">
                      <span className="sim-match-score">98.6%</span>
                      <span className="sim-match-pct">Match Score</span>
                      <ArrowRight size={16} className="sim-arrow" />
                    </div>

                    <div className="sim-face-card">
                      <div className="sim-face-avatar sim-face-avatar-gallery">
                        <User size={28} />
                      </div>
                      <span className="sim-face-label">Gallery Match</span>
                    </div>
                  </div>

                  <div className="sim-actions">
                    <button 
                      className="sim-btn sim-btn-approve"
                      onClick={() => handleAdjudicate('Approved')}
                    >
                      Approve Identity
                    </button>
                    <button 
                      className="sim-btn sim-btn-reject"
                      onClick={() => handleAdjudicate('Flagged')}
                    >
                      Flag Duplicate
                    </button>
                  </div>

                  <div className="sim-logs">
                    {adjudicationDecision ? (
                      <span className="sim-log-decision" style={{ color: decisionType === 'Approved' ? '#10b981' : '#ef4444' }}>
                        {decisionType === 'Approved' ? <CheckCircle size={14} className="sim-log-icon" /> : <XCircle size={14} className="sim-log-icon" />}
                        {adjudicationDecision}
                      </span>
                    ) : (
                      <span className="sim-log-pending">
                        Pending human adjudication. Select action above.
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Tab 2: SDK Demo */}
              {activeTab === 'sdk' && (
                <div className="code-container">
                  <span className="code-comment">// NexSDK Biometric Verification Client</span><br />
                  <span className="code-keyword">import</span> {'{'} NexSDK {'}'} <span className="code-keyword">from</span> <span className="code-string">'@nexbio/sdk'</span>;<br /><br />
                  
                  <span className="code-keyword">const</span> client = <span className="code-keyword">new</span> <span className="code-type">NexSDK</span>({'{'}<br />
                  &nbsp;&nbsp;endpoint: <span className="code-string">"api.nexbio.internal"</span>,<br />
                  &nbsp;&nbsp;token: <span className="code-string">"nb_live_948f..."</span><br />
                  {'}'});<br /><br />

                  <span className="code-keyword">const</span> score = <span className="code-keyword">await</span> client.biometrics.<span className="code-method">verify</span>({'{'}<br />
                  &nbsp;&nbsp;probe: fingerprintCapture,<br />
                  &nbsp;&nbsp;galleryId: <span className="code-string">"us_gov_39ea81"</span><br />
                  {'}'});<br /><br />

                  <span className="code-comment">// Output: &gt; Match score: 0.986 (Matched)</span>
                </div>
              )}

              {/* Tab 3: NexABIS matching engine stats */}
              {activeTab === 'abis' && (
                <div className="abis-stats">
                  <div className="abis-stat">
                    <span className="abis-stat-label">Matching Velocity</span>
                    <span className="abis-stat-value" style={{ color: 'var(--accent-blue)' }}>
                      100M+ matches / sec
                    </span>
                  </div>
                  
                  <div className="abis-stat">
                    <span className="abis-stat-label">Fail Match Rate (FNMR)</span>
                    <span className="abis-stat-value" style={{ color: '#10b981' }}>
                      &lt; 0.0001%
                    </span>
                  </div>

                  <div className="abis-stat">
                    <span className="abis-stat-label">Standard Modalities</span>
                    <span className="abis-stat-value" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}>
                      Finger, Face, Iris
                    </span>
                  </div>

                  <div className="abis-stat-no-border">
                    <span className="abis-stat-label">Interoperability Compliance</span>
                    <span className="abis-stat-value" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}>
                      ISO / ANSI / ICAO
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

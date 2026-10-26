import React from 'react';
import Icon from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        background: '#060910',
        borderTop: '1px solid var(--border-subtle)',
        padding: '3rem 0 2rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Logo & Role */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(20, 184, 166, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-teal-light)',
              }}
            >
              <Icon name="ShieldCheck" size={20} />
            </div>
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                {personalInfo.name}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--accent-teal)', fontFamily: 'var(--font-code)' }}>
                {personalInfo.targetRole}
              </div>
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
              }}
              className="footer-icon-btn"
            >
              <Icon name="Linkedin" size={18} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
              }}
              className="footer-icon-btn"
            >
              <Icon name="Github" size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Anusha"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
              }}
              className="footer-icon-btn"
            >
              <Icon name="Mail" size={18} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="btn btn-secondary btn-sm"
              style={{ marginLeft: '0.5rem' }}
            >
              <Icon name="ArrowUp" size={15} />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Designed with QA focus for clarity, accessibility, and precision.
          </div>
        </div>
      </div>

      <style>{`
        .footer-icon-btn:hover {
          color: var(--accent-teal-light) !important;
          background: rgba(20, 184, 166, 0.12) !important;
          border-color: rgba(20, 184, 166, 0.35) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}

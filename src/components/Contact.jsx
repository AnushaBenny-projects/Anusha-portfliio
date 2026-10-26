import React, { useState } from 'react';
import Icon from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast(`Email address copied: ${personalInfo.email}`);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: 'var(--bg-layer)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Icon name="Mail" size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's build quality into every release.</h2>
          <p className="section-subtitle">
            I’m looking for an entry-level Software Tester or QA Engineer opportunity where I can contribute to quality assurance, learn from experienced teams, and help deliver reliable software.
          </p>
        </div>

        {/* Contact Container Card */}
        <div
          className="qa-card"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '3rem 2.25rem',
            background: 'linear-gradient(180deg, #101626 0%, #0d1220 100%)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.6)',
          }}
        >
          {/* Main Channels Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {/* Email Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(20, 184, 166, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-teal-light)',
                }}
              >
                <Icon name="Mail" size={20} />
              </div>
              <div>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Direct Email
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    display: 'block',
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    marginTop: '0.2rem',
                    wordBreak: 'break-all',
                  }}
                  className="contact-link"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: 'auto' }}
              >
                <Icon name={copied ? 'Check' : 'Copy'} size={14} color={copied ? '#34d399' : 'currentColor'} />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>
            </div>

            {/* LinkedIn Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(10, 102, 194, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0a66c2',
                }}
              >
                <Icon name="Linkedin" size={20} />
              </div>
              <div>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  LinkedIn Profile
                </span>
                <div style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  anusha-benny-a0a876268
                </div>
              </div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ marginTop: 'auto' }}
              >
                <Icon name="ExternalLink" size={14} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* GitHub Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-light)',
                }}
              >
                <Icon name="Github" size={20} />
              </div>
              <div>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  GitHub Projects
                </span>
                <div style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  AnushaBenny-projects
                </div>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ marginTop: 'auto' }}
              >
                <Icon name="ExternalLink" size={14} />
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Location & Relocation Readiness */}
          <div
            style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <Icon name="MapPin" size={18} color="var(--accent-teal)" />
              <span>
                Based in <strong style={{ color: 'var(--text-light)' }}>{personalInfo.location}</strong> • Open to On-site, Hybrid & Remote QA Roles
              </span>
            </div>

            <a
              href={`mailto:${personalInfo.email}?subject=Job%20Opportunity:%20Software%20Tester%20/%20QA%20Engineer&body=Hi%20Anusha,%0D%0A%0D%0AWe%20reviewed%20your%20QA%20portfolio%20and%20would%20like%20to%20discuss%20an%20entry-level%20Software%20Tester%20role%20with%20our%20team.`}
              className="btn btn-primary"
            >
              <Icon name="Mail" size={16} />
              <span>Send Email Now</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-link:hover {
          color: var(--accent-teal-light) !important;
        }
      `}</style>
    </section>
  );
}

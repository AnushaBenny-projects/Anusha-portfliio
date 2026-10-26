import React from 'react';
import Icon from './Icons';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Grid Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 45%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 45%, black 40%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Main Hero Content */}
          <div style={{ maxWidth: '680px' }}>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(20, 184, 166, 0.1)',
                border: '1px solid rgba(20, 184, 166, 0.28)',
                marginBottom: '1.5rem',
                boxShadow: '0 0 20px rgba(20, 184, 166, 0.15)',
              }}
            >
              <span className="pulse-dot" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-teal-light)', letterSpacing: '0.02em' }}>
                {personalInfo.status}
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.75rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              Hi, I'm <span style={{ color: 'var(--accent-teal-light)' }}>Anusha Benny</span>.
              <br />
              I test for quality.
            </h1>

            {/* Subheading */}
            <h2
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 600,
                color: 'var(--accent-teal)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                flexWrap: 'wrap',
              }}
            >
              <span>{personalInfo.subheading}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>•</span>
              <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Thrissur, Kerala
              </span>
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
              }}
            >
              {personalInfo.tagline}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn btn-primary"
                id="heroProjectsBtn"
              >
                <Icon name="Layers" size={18} />
                <span>View My Projects</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn btn-secondary"
                id="heroContactBtn"
              >
                <Icon name="Mail" size={18} />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.resumePdf}
                download="Anusha_Benny_QA_Resume.pdf"
                className="btn btn-accent-outline"
                id="heroResumeBtn"
                title="Download verified resume PDF"
              >
                <Icon name="Download" size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Connect:
              </span>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.2s ease',
                }}
                className="hero-social-link"
                aria-label="Anusha Benny LinkedIn Profile"
              >
                <Icon name="Linkedin" size={17} color="#0a66c2" />
                <span>LinkedIn</span>
                <Icon name="ExternalLink" size={13} color="var(--text-muted)" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.2s ease',
                }}
                className="hero-social-link"
                aria-label="Anusha Benny GitHub Profile"
              >
                <Icon name="Github" size={17} />
                <span>GitHub</span>
                <Icon name="ExternalLink" size={13} color="var(--text-muted)" />
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginLeft: 'auto' }}>
                <Icon name="MapPin" size={15} color="var(--accent-teal)" />
                <span>Thrissur, Kerala</span>
              </div>
            </div>
          </div>

          {/* QA Visual Card & Initials-Based Avatar */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="qa-card"
              style={{
                width: '100%',
                maxWidth: '440px',
                background: 'linear-gradient(145deg, #0e172a 0%, #0b1120 100%)',
                border: '1px solid rgba(20, 184, 166, 0.25)',
                padding: '2rem',
                position: 'relative',
              }}
            >
              {/* Card Header & Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.75rem' }}>
                {/* Initials Avatar */}
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #064e3b 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '1.65rem',
                    letterSpacing: '-0.02em',
                    boxShadow: '0 8px 24px rgba(20, 184, 166, 0.4)',
                    position: 'relative',
                  }}
                >
                  AB
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-3px',
                      right: '-3px',
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: '#0f172a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid #14b8a6',
                    }}
                  >
                    <Icon name="Check" size={12} color="#14b8a6" />
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
                    Anusha Benny
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent-teal)', fontFamily: 'var(--font-code)', marginTop: '0.2rem' }}>
                    QA / Test Verification
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    B.Tech KTU (2022 – 2026)
                  </p>
                </div>
              </div>

              {/* QA Verification Status Box */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    QA Target Role
                  </span>
                  <span className="badge badge-teal">Fresher Ready</span>
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Icon name="ShieldCheck" size={18} color="var(--accent-teal)" />
                  <span>Manual QA & API Test Engineer</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.85rem',
                }}
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem',
                    }}
                  >
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.2, marginBottom: '0.35rem' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-light)' }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        .hero-social-link:hover {
          color: var(--accent-teal-light) !important;
          background: rgba(20, 184, 166, 0.12) !important;
          border-color: rgba(20, 184, 166, 0.3) !important;
        }
      `}</style>
    </section>
  );
}

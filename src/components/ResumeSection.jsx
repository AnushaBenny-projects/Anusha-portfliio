import React from 'react';
import Icon from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function ResumeSection() {
  return (
    <section className="section-wrapper">
      <div className="container">
        <div
          className="qa-card"
          style={{
            background: 'linear-gradient(145deg, #0f172a 0%, #0d1527 100%)',
            border: '1px solid rgba(20, 184, 166, 0.35)',
            boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 35px -5px var(--accent-teal-glow-sm)',
            padding: '3rem 2rem',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Subtle background glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '320px',
              height: '320px',
              background: 'radial-gradient(circle, var(--accent-teal-glow) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'rgba(20, 184, 166, 0.15)',
                border: '1px solid rgba(20, 184, 166, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-teal-light)',
                marginBottom: '1.5rem',
              }}
            >
              <Icon name="FileText" size={32} />
            </div>

            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem' }}>
              Download My Complete QA Resume
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
              Get a detailed view of my Software Testing skills, B.Tech computer science background, academic records, and project contributions in a standardized recruiter-friendly PDF format.
            </p>

            {/* Document Details Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.25rem',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-pill)',
                padding: '0.5rem 1.25rem',
                marginBottom: '2rem',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <span>Format: <strong>PDF Document</strong></span>
              <span>•</span>
              <span>Updated: <strong>Current</strong></span>
              <span>•</span>
              <span>Verified: <strong>Anusha Benny</strong></span>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={personalInfo.resumePdf}
                download="Anusha_Benny_QA_Resume.pdf"
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.85rem', fontSize: '1.02rem' }}
                id="mainDownloadResumeBtn"
              >
                <Icon name="Download" size={19} />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.6rem', fontSize: '1.02rem' }}
              >
                <Icon name="Eye" size={19} />
                <span>Preview in Browser</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

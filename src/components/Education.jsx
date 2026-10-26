import React from 'react';
import Icon from './Icons';
import { educationHistory, certifications } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-wrapper" style={{ background: 'var(--bg-layer)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Icon name="GraduationCap" size={14} />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Strong Computer Science academic foundation combined with industry certifications in cybersecurity, AI, and data analytics.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
          }}
          className="edu-cert-grid"
        >
          {/* Education Timeline */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Icon name="GraduationCap" size={22} color="var(--accent-teal)" />
              <span>Academic Background</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
              {educationHistory.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="qa-card"
                  style={{
                    padding: '1.75rem',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="badge badge-teal">{edu.period}</span>
                    <span className="badge badge-emerald" style={{ fontWeight: 700 }}>
                      {edu.score}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                    {edu.degree}
                  </h4>
                  <div style={{ fontSize: '0.95rem', color: 'var(--accent-teal-light)', fontWeight: 600, marginBottom: '0.2rem' }}>
                    {edu.institution}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    {edu.affiliation}
                  </div>

                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications and Internship Experience */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Icon name="Award" size={22} color="var(--accent-teal)" />
              <span>Certifications & Internship</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="qa-card"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                        {cert.title}
                      </h4>
                      <span className="badge badge-slate" style={{ fontSize: '0.72rem' }}>
                        Verified
                      </span>
                    </div>

                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-teal)', fontFamily: 'var(--font-code)', marginBottom: '0.65rem' }}>
                      {cert.issuer}
                    </div>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {cert.focus}
                    </p>
                  </div>

                  {cert.certificateUrl && (
                    <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)' }}>
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-accent-outline btn-sm"
                        style={{ display: 'inline-flex' }}
                      >
                        <Icon name="ExternalLink" size={14} />
                        <span>View Verified Certificate</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .edu-cert-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import Icon from './Icons';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const getBadgeStyle = (level) => {
    switch (level) {
      case 'Proficient':
        return 'badge-teal';
      case 'Practical':
        return 'badge-emerald';
      case 'Currently Learning':
      case 'Fundamentals':
        return 'badge-amber';
      default:
        return 'badge-slate';
    }
  };

  const getCategoryIcon = (category) => {
    if (category.includes('Manual')) return 'ShieldCheck';
    if (category.includes('API')) return 'Terminal';
    if (category.includes('Automation')) return 'PlayCircle';
    return 'Layers';
  };

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Icon name="CheckCircle2" size={14} />
            <span>Technical Competencies</span>
          </div>
          <h2 className="section-title">Skills & Knowledge</h2>
          <p className="section-subtitle">
            Structured into clear QA domains, grounded in hands-on academic training, real projects, and ongoing automation learning.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="qa-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.9rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(20, 184, 166, 0.1)',
                      border: '1px solid rgba(20, 184, 166, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-teal-light)',
                    }}
                  >
                    <Icon name={getCategoryIcon(cat.category)} size={20} />
                  </div>
                  <span className={`badge ${cat.badge.includes('Currently') ? 'badge-amber' : 'badge-teal'}`}>
                    {cat.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                  {cat.category}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '1.35rem', lineHeight: 1.5 }}>
                  {cat.description}
                </p>

                {/* Skill Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.45rem 0.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.2s ease',
                      }}
                      className="skill-pill"
                    >
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-light)' }}>
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span
                          className={`badge ${getBadgeStyle(skill.level)}`}
                          style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem' }}
                        >
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Note on Transparency */}
              {cat.category.includes('Automation') && (
                <div
                  style={{
                    marginTop: '1.5rem',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    background: 'rgba(245, 158, 11, 0.08)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    fontSize: '0.8rem',
                    color: '#fbbf24',
                  }}
                >
                  <Icon name="Info" size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>
                    Accurately marked as <strong>Currently Learning</strong> to reflect active skill development without inflating experience.
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-pill:hover {
          background: rgba(20, 184, 166, 0.12) !important;
          border-color: rgba(20, 184, 166, 0.35) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}

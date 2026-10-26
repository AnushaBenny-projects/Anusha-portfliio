import React, { useState } from 'react';
import Icon from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects({ onOpenTestCases }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = [
    { label: 'All Projects', value: 'All' },
    { label: 'Manual QA & Testing', value: 'Manual QA' },
    { label: 'AI & Full-Stack Systems', value: 'AI & Full-Stack' },
  ];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="section-wrapper" style={{ background: 'var(--bg-layer)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Icon name="Layers" size={14} />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Highlighting dedicated manual testing work on institutional platforms, alongside full-stack & AI applications that demonstrate a strong technical QA foundation.
          </p>
        </div>

        {/* Filter Controls */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.65rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedFilter(opt.value)}
              className={`btn ${selectedFilter === opt.value ? 'btn-primary' : 'btn-secondary'} btn-sm`}
              style={{
                borderRadius: 'var(--radius-pill)',
                padding: '0.5rem 1.15rem',
              }}
            >
              <Icon name="Filter" size={14} />
              <span>{opt.label}</span>
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '10px',
                  background: selectedFilter === opt.value ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.1)',
                  marginLeft: '0.2rem',
                }}
              >
                {opt.value === 'All' ? projects.length : projects.filter((p) => p.category === opt.value).length}
              </span>
            </button>
          ))}
        </div>

        {/* Project Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredProjects.map((proj) => {
            const isPrimary = proj.isPrimary;

            return (
              <div
                key={proj.id}
                className="qa-card"
                style={{
                  padding: 0,
                  border: isPrimary ? '1px solid rgba(20, 184, 166, 0.4)' : '1px solid var(--border-subtle)',
                  boxShadow: isPrimary
                    ? '0 12px 35px -10px rgba(0, 0, 0, 0.6), 0 0 25px -5px var(--accent-teal-glow-sm)'
                    : 'var(--shadow-card)',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                  }}
                  className="project-inner-grid"
                >
                  {/* Project Visual Showcase */}
                  <div
                    style={{
                      background: '#090e1a',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '280px',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                    className="project-image-container"
                  >
                    <img
                      src={proj.image}
                      alt={`${proj.title} visual representation`}
                      style={{
                        width: '100%',
                        height: '100%',
                        maxHeight: '380px',
                        objectFit: proj.id === 'franciscan' ? 'cover' : 'contain',
                        padding: proj.id === 'franciscan' ? '0' : '1.5rem',
                        transition: 'transform 0.4s ease',
                      }}
                      className="project-img-elem"
                      loading="lazy"
                    />

                    {/* Tag Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        display: 'flex',
                        gap: '0.5rem',
                      }}
                    >
                      <span className={`badge ${isPrimary ? 'badge-teal' : 'badge-slate'}`}>
                        {proj.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Details Content */}
                  <div style={{ padding: '2rem 2.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
                      <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.25 }}>
                        {proj.title}
                      </h3>
                      <span className="badge badge-teal">{proj.category}</span>
                    </div>

                    <p style={{ fontSize: '1.02rem', color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {proj.summary}
                    </p>

                    {/* Project Objectives */}
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.025)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: '1rem',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--accent-teal)', fontWeight: 700, letterSpacing: '0.05em', display: 'block', marginBottom: '0.3rem' }}>
                        Objective & Context
                      </span>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        {proj.objective}
                      </p>
                    </div>

                    {/* QA Activities or Testing Opportunities */}
                    {proj.qaActivities && (
                      <div style={{ marginBottom: '1.25rem' }}>
                        <h4 style={{ fontSize: '0.92rem', textTransform: 'uppercase', color: 'var(--accent-teal-light)', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <Icon name="ClipboardCheck" size={16} />
                          <span>Key Testing Activities Executed:</span>
                        </h4>
                        <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                          {proj.qaActivities.map((act, i) => (
                            <li key={i}>{act}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {proj.qaConsiderations && (
                      <div style={{ marginBottom: '1.25rem' }}>
                        <h4 style={{ fontSize: '0.92rem', textTransform: 'uppercase', color: 'var(--accent-teal-light)', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <Icon name="FileSearch" size={16} />
                          <span>QA & Testing Considerations Analyzed:</span>
                        </h4>
                        <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                          {proj.qaConsiderations.map((con, i) => (
                            <li key={i}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="code-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      {isPrimary && (
                        <button
                          type="button"
                          onClick={() => onOpenTestCases(proj)}
                          className="btn btn-primary"
                        >
                          <Icon name="Eye" size={16} />
                          <span>View Sample Test Cases & Defect</span>
                        </button>
                      )}

                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                        >
                          <Icon name="Github" size={16} />
                          <span>View on GitHub</span>
                          <Icon name="ExternalLink" size={13} color="var(--text-muted)" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .project-inner-grid {
            grid-template-columns: 42% 58% !important;
          }
          .project-image-container {
            border-bottom: none !important;
            border-right: 1px solid var(--border-subtle) !important;
          }
        }
        .project-card:hover .project-img-elem {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}

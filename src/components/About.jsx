import React from 'react';
import Icon from './Icons';

export default function About() {
  const highlights = [
    {
      icon: 'ShieldCheck',
      title: 'QA-First Mindset',
      description:
        'Driven by a commitment to software reliability. I focus on uncovering edge cases, verifying user flows, and preventing defects before production releases.',
    },
    {
      icon: 'GraduationCap',
      title: 'B.Tech CS Foundation',
      description:
        'Graduate in Computer Science from Vidya Academy of Science and Technology (KTU) with an 8.34 CGPA, bridging software engineering concepts with QA rigor.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'SDLC & STLC Understanding',
      description:
        'Hands-on grasp of Software Development and Software Testing Life Cycles, from requirement analysis to test design, defect logging, and regression sign-off.',
    },
    {
      icon: 'PlayCircle',
      title: 'Practical Test Execution',
      description:
        'Experienced in authoring positive, negative, boundary value, and equivalence partitioned test cases for institutional web apps and REST API endpoints.',
    },
    {
      icon: 'Terminal',
      title: 'Eager for Automation',
      description:
        'Equipped with Java and Python coding fundamentals; actively learning Selenium WebDriver, locator strategies, and automated test suite construction.',
    },
    {
      icon: 'Bug',
      title: 'Reproducible Defect Reporting',
      description:
        'Dedicated to documenting detailed, actionable bug reports with exact preconditions, step-by-step reproduction instructions, and clear severity ratings.',
    },
  ];

  return (
    <section id="about" className="section-wrapper" style={{ background: 'var(--bg-layer)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Icon name="Info" size={14} />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A Computer Science graduate eager to channel analytical precision into dependable software quality assurance.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Narrative Card */}
          <div className="qa-card" style={{ padding: '2.25rem' }}>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Icon name="Sparkles" size={20} color="var(--accent-teal)" />
              <span>Passionate About Building Quality Into Every Release</span>
            </h3>

            <div style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <p>
                I hold a <strong style={{ color: 'var(--text-light)' }}>B.Tech in Computer Science and Engineering</strong> from{' '}
                <span style={{ color: 'var(--text-light)' }}>Vidya Academy of Science and Technology, Thrissur (KTU)</span> with a{' '}
                <span style={{ color: 'var(--accent-teal-light)', fontWeight: 700 }}>CGPA of 8.34</span>. Throughout my academic journey, I discovered that understanding how software breaks is just as crucial as writing it. This realization led me to focus on Software Quality Assurance.
              </p>

              <p>
                Through focused software testing training and hands-on project work, I have gained practical experience applying{' '}
                <strong style={{ color: 'var(--text-light)' }}>STLC processes</strong>, formulating test scenarios, designing positive and negative test cases, and employing black-box testing techniques such as <span style={{ color: 'var(--text-light)' }}>Boundary Value Analysis (BVA)</span> and{' '}
                <span style={{ color: 'var(--text-light)' }}>Equivalence Class Partitioning (ECP)</span>.
              </p>

              <p>
                My full-stack background in Python, Java, JavaScript, and databases (SQL, MongoDB) gives me a strong technical advantage. I understand how frontend DOM elements interact with backend REST APIs and databases, enabling me to quickly pinpoint root causes, test endpoints using <strong style={{ color: 'var(--text-light)' }}>Postman</strong>, and communicate clearly with development teams.
              </p>

              <p>
                As a motivated fresher, I am enthusiastic about starting my career in an <strong style={{ color: 'var(--accent-teal-light)' }}>entry-level Software Tester, Manual QA Tester, or QA Engineer</strong> role, where I can contribute to product stability, uphold high release standards, and expand my skills into test automation with Selenium WebDriver.
              </p>
            </div>

            {/* Quick Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1.75rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <span className="badge badge-teal">Manual Testing</span>
              <span className="badge badge-teal">API Testing (Postman)</span>
              <span className="badge badge-teal">GitLab Issue Tracking</span>
              <span className="badge badge-slate">B.Tech KTU 8.34 CGPA</span>
              <span className="badge badge-slate">Fresher / Entry-Level</span>
              <span className="badge badge-emerald">Ready to Join</span>
            </div>
          </div>

          {/* Highlights Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="qa-card"
                style={{
                  padding: '1.4rem',
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
                    border: '1px solid rgba(20, 184, 166, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-teal-light)',
                  }}
                >
                  <Icon name={item.icon} size={20} />
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useState } from 'react';
import Icon from './Icons';
import { testingWorkflowSteps, sampleDefectReport, sampleTestCases } from '../data/portfolioData';

export default function TestingWorkflow() {
  const [activeTestCaseTab, setActiveTestCaseTab] = useState(0);

  return (
    <section id="testing" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Icon name="RefreshCw" size={14} />
            <span>Methodology & Standards</span>
          </div>
          <h2 className="section-title">Testing Experience & QA Workflow</h2>
          <p className="section-subtitle">
            A disciplined, end-to-end testing approach ensuring thorough coverage, transparent bug documentation, and reliable software releases.
          </p>
        </div>

        {/* 5-Step Workflow Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.25rem',
            marginBottom: '4.5rem',
          }}
        >
          {testingWorkflowSteps.map((step) => (
            <div
              key={step.step}
              className="qa-card"
              style={{
                padding: '1.6rem 1.35rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Step Number Watermark */}
              <div
                style={{
                  fontFamily: 'var(--font-code)',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'rgba(20, 184, 166, 0.18)',
                  lineHeight: 1,
                  marginBottom: '0.85rem',
                }}
              >
                {step.step}
              </div>

              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(20, 184, 166, 0.1)',
                  border: '1px solid rgba(20, 184, 166, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-teal-light)',
                  marginBottom: '1rem',
                }}
              >
                <Icon name={step.icon} size={20} />
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.3rem' }}>
                {step.title}
              </h3>
              <div style={{ fontSize: '0.78rem', color: 'var(--accent-teal)', fontFamily: 'var(--font-code)', marginBottom: '0.75rem', fontWeight: 600 }}>
                {step.subtitle}
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Showcase Grid: Sample Defect Report & Sample Test Cases */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}
          className="qa-showcase-grid"
        >
          {/* Sample Defect Report Card */}
          <div
            className="qa-card"
            style={{
              padding: '2rem',
              border: '1px solid rgba(244, 63, 94, 0.25)',
              background: 'linear-gradient(180deg, #101626 0%, #0c1220 100%)',
            }}
          >
            {/* Defect Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                  <span className="code-tag" style={{ background: 'rgba(244, 63, 94, 0.12)', color: '#fb7185', borderColor: 'rgba(244, 63, 94, 0.3)' }}>
                    {sampleDefectReport.bugId}
                  </span>
                  <span className="badge badge-rose">Severity: {sampleDefectReport.severity}</span>
                  <span className="badge badge-amber">Priority: {sampleDefectReport.priority}</span>
                  <span className="badge badge-emerald">Status: {sampleDefectReport.status}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.35 }}>
                  {sampleDefectReport.title}
                </h3>
              </div>
              <span className="badge badge-slate" style={{ fontSize: '0.75rem' }}>
                Sample Defect Report
              </span>
            </div>

            {/* Metadata Rows */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.85rem',
                background: 'rgba(0, 0, 0, 0.25)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                fontSize: '0.85rem',
              }}
            >
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem' }}>PROJECT</span>
                <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>{sampleDefectReport.project}</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem' }}>MODULE</span>
                <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>{sampleDefectReport.module}</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem' }}>TRACKER</span>
                <span style={{ color: 'var(--accent-teal-light)', fontWeight: 600, fontFamily: 'var(--font-code)' }}>{sampleDefectReport.tool}</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem' }}>ENVIRONMENT</span>
                <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>{sampleDefectReport.environment}</span>
              </div>
            </div>

            {/* Preconditions */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--accent-teal)', fontWeight: 700, letterSpacing: '0.05em', display: 'block', marginBottom: '0.35rem' }}>
                Preconditions
              </span>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                {sampleDefectReport.preconditions.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            {/* Steps to Reproduce */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--accent-teal)', fontWeight: 700, letterSpacing: '0.05em', display: 'block', marginBottom: '0.35rem' }}>
                Steps to Reproduce
              </span>
              <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                {sampleDefectReport.stepsToReproduce.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </div>

            {/* Expected vs Actual Comparison Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1rem',
                marginTop: '1.25rem',
              }}
              className="defect-outcome-grid"
            >
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.06)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#34d399', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  <Icon name="CheckCircle2" size={15} />
                  <span>Expected Result</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: 1.5 }}>
                  {sampleDefectReport.expectedResult}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(244, 63, 94, 0.06)',
                  border: '1px solid rgba(244, 63, 94, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#fb7185', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  <Icon name="XCircle" size={15} />
                  <span>Actual Result</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: 1.5 }}>
                  {sampleDefectReport.actualResult}
                </p>
              </div>
            </div>
          </div>

          {/* Sample Test Case Explorer */}
          <div
            className="qa-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff' }}>
                  Test Case Specification Samples
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Interactive look at test cases applying BVA, ECP, and API validation.
                </p>
              </div>
              <span className="badge badge-teal">Live Case Viewer</span>
            </div>

            {/* Test Case Selector Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                overflowX: 'auto',
                paddingBottom: '0.5rem',
                marginBottom: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {sampleTestCases.map((tc, idx) => (
                <button
                  key={tc.tcId}
                  type="button"
                  onClick={() => setActiveTestCaseTab(idx)}
                  style={{
                    padding: '0.55rem 0.95rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid',
                    borderColor: activeTestCaseTab === idx ? 'var(--accent-teal)' : 'transparent',
                    background: activeTestCaseTab === idx ? 'rgba(20, 184, 166, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                    color: activeTestCaseTab === idx ? 'var(--accent-teal-light)' : 'var(--text-secondary)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-code)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tc.tcId}
                </button>
              ))}
            </div>

            {/* Active Test Case Content */}
            {sampleTestCases[activeTestCaseTab] && (
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  flex: 1,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span className="code-tag">{sampleTestCases[activeTestCaseTab].tcId}</span>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginTop: '0.4rem' }}>
                      {sampleTestCases[activeTestCaseTab].title}
                    </h4>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <span className="badge badge-teal">{sampleTestCases[activeTestCaseTab].type}</span>
                    <span className="badge badge-emerald">Status: {sampleTestCases[activeTestCaseTab].status}</span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem' }}>TECHNIQUE</span>
                    <span style={{ color: 'var(--accent-teal-light)', fontWeight: 600 }}>{sampleTestCases[activeTestCaseTab].technique}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.74rem' }}>MODULE</span>
                    <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>{sampleTestCases[activeTestCaseTab].module}</span>
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>
                    Precondition
                  </span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {sampleTestCases[activeTestCaseTab].precondition}
                  </p>
                </div>

                <div>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>
                    Test Steps
                  </span>
                  <pre
                    style={{
                      fontFamily: 'var(--font-code)',
                      fontSize: '0.82rem',
                      background: '#070b14',
                      padding: '0.85rem',
                      borderRadius: '8px',
                      color: 'var(--text-light)',
                      whiteSpace: 'pre-wrap',
                      lineHeight: 1.6,
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    {sampleTestCases[activeTestCaseTab].steps}
                  </pre>
                </div>

                <div>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>
                    Expected Outcome
                  </span>
                  <p style={{ fontSize: '0.88rem', color: '#34d399', fontWeight: 500 }}>
                    {sampleTestCases[activeTestCaseTab].expectedResult}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .qa-showcase-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .defect-outcome-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

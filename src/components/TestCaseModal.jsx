import React, { useEffect } from 'react';
import Icon from './Icons';
import { sampleDefectReport, sampleTestCases } from '../data/portfolioData';

export default function TestCaseModal({ isOpen, onClose, project }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2rem' }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
          <div>
            <span className="badge badge-teal" style={{ marginBottom: '0.4rem' }}>
              QA Artifact Inspection
            </span>
            <h3 id="modalTitle" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
              Franciscan Website — QA Test Suite & Defect Sample
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Icon name="X" size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(20, 184, 166, 0.08)', border: '1px solid rgba(20, 184, 166, 0.25)', borderRadius: 'var(--radius-md)', padding: '1rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
            <strong>Note for Recruiters:</strong> These are representative test artifacts modeled on the actual manual testing activities conducted on the Franciscan institutional website, including form inputs, cross-browser validation, and defect tracking in GitLab.
          </div>

          {/* Section: Test Case Samples */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Icon name="ClipboardCheck" size={18} color="var(--accent-teal)" />
              <span>Sample Test Cases Executed</span>
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {sampleTestCases.slice(0, 3).map((tc) => (
                <div
                  key={tc.tcId}
                  style={{
                    background: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.15rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="code-tag">{tc.tcId}</span>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <span className="badge badge-teal">{tc.technique}</span>
                      <span className="badge badge-emerald">Result: {tc.status}</span>
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                    {tc.title}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {tc.description}
                  </p>
                  <div style={{ fontSize: '0.82rem', color: '#34d399', background: 'rgba(16, 185, 129, 0.06)', padding: '0.5rem 0.75rem', borderRadius: '6px' }}>
                    <strong>Expected:</strong> {tc.expectedResult}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Sample Defect Highlight */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Icon name="Bug" size={18} color="#fb7185" />
              <span>Sample Defect Logged ({sampleDefectReport.bugId})</span>
            </h4>

            <div
              style={{
                background: 'rgba(244, 63, 94, 0.05)',
                border: '1px solid rgba(244, 63, 94, 0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
              }}
            >
              <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                {sampleDefectReport.title}
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.65rem' }}>
                <strong>Environment:</strong> {sampleDefectReport.environment}
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.65rem' }}>
                <strong>Root Cause:</strong> {sampleDefectReport.rootCauseNotes}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-rose">Severity: {sampleDefectReport.severity}</span>
                <span className="badge badge-amber">Priority: {sampleDefectReport.priority}</span>
                <span className="badge badge-emerald">Status: {sampleDefectReport.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}

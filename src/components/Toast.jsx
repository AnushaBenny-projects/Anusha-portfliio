import React from 'react';
import Icon from './Icons';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="toast-notice" role="status" aria-live="polite">
      <div
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'rgba(20, 184, 166, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent-teal-light)',
        }}
      >
        <Icon name="Check" size={14} />
      </div>
      <span>{message}</span>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss notification"
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer',
          padding: '0 0.25rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Icon name="X" size={14} />
      </button>
    </div>
  );
}

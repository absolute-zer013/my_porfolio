import { useEffect } from 'react';
import type { Certificate } from '../data/portfolio';

interface Props {
  cert: Certificate;
  onClose: () => void;
}

export default function CertModal({ cert, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cert-modal-header">
          <div>
            <p className="cert-modal-title">{cert.title}</p>
            <p className="cert-modal-issuer">
              {cert.issuer} · {cert.year}
            </p>
          </div>
          <button
            className="cert-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="cert-modal-body">
          <img
            src={cert.file}
            alt={cert.title}
            className="cert-modal-img"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

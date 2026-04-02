import { useState } from 'react';
import { certificates } from '../data/portfolio';
import type { Certificate } from '../data/portfolio';
import CertModal from './CertModal';

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-two-col">
          <div className="section-header reveal">
            <span className="overline">Credentials</span>
            <h2 className="section-title">Certificates</h2>
          </div>
          <div className="cert-list reveal d1">
            {certificates.map((cert) => (
              <button
                key={cert.title}
                className="cert-item cert-item-btn"
                onClick={() => setSelected(cert)}
              >
                <span
                  className="cert-accent"
                  style={{ background: cert.accentColor }}
                />
                <div className="cert-info">
                  <p className="cert-title">{cert.title}</p>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <span className="cert-year overline">{cert.year}</span>
                <svg
                  className="cert-chevron"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
      {selected && (
        <CertModal cert={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

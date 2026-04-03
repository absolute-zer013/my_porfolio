import { useState } from 'react';
import { employmentHistory, certificates, skills } from '../data/portfolio';
import type { Certificate } from '../data/portfolio';
import DetailHeader from '../components/DetailHeader';
import Footer from '../components/Footer';
import SkillPill from '../components/SkillPill';
import CertModal from '../components/CertModal';
import { useReveal } from '../hooks/useReveal';

export default function AboutPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useReveal();

  return (
    <>
      <DetailHeader backTo="/#about" />
      <main className="detail-main">
        <div className="container">
          {/* Hero */}
          <section className="detail-hero reveal">
            <div className="detail-hero-inner">
              <div>
                <span className="overline">Get to Know Me</span>
                <h1 className="detail-hero-name">About Me</h1>
              </div>
            </div>
            <div className="detail-hero-accent-bar detail-hero-accent-bar--grad" />
          </section>

          {/* About Me placeholder */}
          <section className="detail-section reveal">
            <span className="overline detail-section-label">Who I Am</span>
            <p
              className="detail-body"
              style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}
            >
              Coming soon — this section will be updated with a personal
              write-up.
            </p>
          </section>

          {/* Work Experience */}
          <section className="detail-section reveal">
            <span className="overline detail-section-label">
              Work Experience
            </span>
            <div className="emp-timeline">
              {employmentHistory.map((job) => (
                <div key={job.company} className="emp-item">
                  <div className="emp-item-left">
                    <span
                      className="emp-dot"
                      style={{ background: job.accentColor }}
                    />
                    <div className="emp-item-line" />
                  </div>
                  <div className="emp-item-right">
                    <div className="emp-item-meta">
                      <span className="emp-company">{job.company}</span>
                      <span className="emp-type-badge">{job.type}</span>
                    </div>
                    <p className="emp-role">{job.role}</p>
                    <p className="emp-period overline">{job.period}</p>
                    {job.points.length > 0 && (
                      <ul className="emp-points">
                        {job.points.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="detail-section reveal">
            <span className="overline detail-section-label">Skills</span>
            <div className="skills-grid">
              {skills.map((s) => (
                <SkillPill key={s} label={s} />
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section className="detail-section reveal">
            <span className="overline detail-section-label">Certificates</span>
            <div className="cert-list">
              {certificates.map((cert) => (
                <button
                  key={cert.title}
                  className="cert-item cert-item-btn"
                  onClick={() => setSelectedCert(cert)}
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
          </section>
        </div>
      </main>
      <Footer />
      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </>
  );
}

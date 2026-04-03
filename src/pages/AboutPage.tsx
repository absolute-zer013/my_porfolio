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
      <main className="detail-main page-enter">
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
            <div className="about-intro">
              <div className="about-profile-card">
                <img
                  src="/profile_picture/profile_picture.jpg"
                  alt="Portrait of Mohammad Fahmi Bin Thajudeen"
                  className="about-profile-img"
                  draggable={false}
                />
              </div>
              <p className="detail-body">
                Hi, I'm Fahmi — a developer from Kedah who builds mobile apps
                with Flutter and websites with React. I didn't start in code. I
                spent years as a freelance photographer and designer before
                discovering that building software scratched the same creative
                itch — just with more debugging. I studied IT at Multimedia
                University, and since graduating I've been building production
                apps for government clients in Sarawak while quietly working on
                freelance web projects on the side. These days I'm focused on
                growing my freelance work and taking on projects where clean UI,
                solid API integration, and reliable deployment actually matter.
              </p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <a
                href="/resume/Fahmi_Thajudeen_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>
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
                        {job.points.map((pt, i) => {
                          const isSubPoint =
                            job.company === 'Freelancer' &&
                            pt.startsWith('Comic Fiesta is');

                          return (
                            <li
                              key={i}
                              className={
                                isSubPoint ? 'emp-point-sub' : undefined
                              }
                            >
                              {pt}
                            </li>
                          );
                        })}
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

import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/portfolio';
import DetailHeader from '../components/DetailHeader';
import Footer from '../components/Footer';
import SkillPill from '../components/SkillPill';
import { useReveal } from '../hooks/useReveal';

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const proj = projects.find((p) => p.slug === slug);

  useReveal();

  if (!proj) return <Navigate to="/" replace />;

  return (
    <>
      <DetailHeader backTo="/#projects" />
      <main className="detail-main">
        <div className="container">
          {/* Hero band */}
          <section className="detail-hero reveal">
            <div className="detail-hero-inner">
              <div>
                <span className="proj-num detail-proj-num">{proj.num}</span>
                <span className="overline">{proj.type}</span>
                <h1 className="detail-hero-name">{proj.title}</h1>
                <div className="detail-hero-meta">
                  <span className="detail-status-badge">{proj.status}</span>
                  <span className="overline">{proj.year}</span>
                </div>
                <div className="detail-hero-tags">
                  {proj.techStack.map((tech) => (
                    <SkillPill key={tech} label={tech} className="exp-tag" />
                  ))}
                </div>
              </div>
            </div>
            <div className="detail-hero-accent-bar detail-hero-accent-bar--grad" />
          </section>

          {/* About */}
          <section className="detail-section reveal">
            <span className="overline detail-section-label">
              About This Project
            </span>
            <p className="detail-body">{proj.longDescription}</p>
          </section>

          {/* Screenshots */}
          <section className="detail-section reveal">
            <span className="overline detail-section-label">Screenshots</span>
            <div className="detail-screenshots">
              {[0, 1, 2].map((i) => (
                <div key={i} className="detail-screenshot-placeholder">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="14" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="detail-section reveal">
            <span className="overline detail-section-label">
              Features & Capabilities
            </span>
            <ul className="exp-points detail-points">
              {proj.features.map((feat, i) => (
                <li key={i} className="exp-point detail-point">
                  <span className="exp-point-dot detail-point-dot--cool" />
                  {feat}
                </li>
              ))}
            </ul>
          </section>

          {/* Stack */}
          <section className="detail-section reveal">
            <span className="overline detail-section-label">Stack</span>
            <div className="skills-grid">
              {proj.techStack.map((tech) => (
                <SkillPill key={tech} label={tech} />
              ))}
            </div>
          </section>

          {/* GitHub link */}
          {proj.link && (
            <section className="detail-section detail-github-link reveal">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline detail-github-btn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginLeft: 4 }}
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

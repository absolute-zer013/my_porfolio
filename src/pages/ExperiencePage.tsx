import { useParams, Navigate } from 'react-router-dom';
import { experiences } from '../data/portfolio';
import DetailHeader from '../components/DetailHeader';
import Footer from '../components/Footer';
import SkillPill from '../components/SkillPill';
import { useReveal } from '../hooks/useReveal';

export default function ExperiencePage() {
  const { slug } = useParams<{ slug: string }>();
  const exp = experiences.find((e) => e.slug === slug);

  useReveal();

  if (!exp) return <Navigate to="/" replace />;

  return (
    <>
      <DetailHeader backTo="/#experience" />
      <main className="detail-main">
        <div className="container">
          {/* Hero band */}
          <section className="detail-hero reveal">
            <div className="detail-hero-inner">
              <div>
                <div className="exp-meta">
                  <span
                    className="exp-dot"
                    style={{ background: exp.accentColor }}
                  />
                  <span className="overline">{exp.period}</span>
                </div>
                <h1 className="detail-hero-name">{exp.name}</h1>
                <p className="detail-hero-subtitle">{exp.title}</p>
                <p className="detail-hero-role">{exp.role}</p>
                <p className="detail-hero-client">{exp.client}</p>
                <div className="detail-hero-tags">
                  {exp.techStack.map((tech) => (
                    <SkillPill key={tech} label={tech} className="exp-tag" />
                  ))}
                </div>
              </div>
            </div>
            <div
              className="detail-hero-accent-bar"
              style={{ background: exp.accentColor }}
            />
          </section>

          {/* Overview */}
          <section className="detail-section reveal">
            <span className="overline detail-section-label">Overview</span>
            <p className="detail-body">{exp.context}</p>
          </section>

          {/* Key Outcomes */}
          <section className="detail-section reveal">
            <span className="overline detail-section-label">Key Outcomes</span>
            <div className="detail-highlights-grid">
              {exp.highlights.map((h) => (
                <div
                  key={h.label}
                  className="detail-highlight-card"
                  style={{ borderLeftColor: exp.accentColor }}
                >
                  <div className="detail-highlight-value">{h.value}</div>
                  <div className="detail-highlight-label overline">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What I Did */}
          <section className="detail-section reveal">
            <span className="overline detail-section-label">What I Did</span>
            <ul className="exp-points detail-points">
              {exp.detailedPoints.map((point, i) => (
                <li key={i} className="exp-point detail-point">
                  <span
                    className="exp-point-dot"
                    style={{ background: exp.accentColor }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Impact */}
          <section className="detail-section reveal">
            <span className="overline detail-section-label">Impact</span>
            <blockquote
              className="detail-outcome"
              style={{ borderLeftColor: exp.accentColor }}
            >
              {exp.outcome}
            </blockquote>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

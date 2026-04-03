import { Link } from 'react-router-dom';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="overline">What I've Delivered</span>
          <h2 className="section-title">Projects I've Handled</h2>
        </div>
        <div className="exp-grid">
          {experiences.map((exp, i) => (
            <Link
              key={exp.name}
              to={`/experience/${exp.slug}`}
              className={`card exp-card reveal d${Math.min(i + 1, 3)} card-clickable`}
            >
              <div className="exp-card-header">
                <div>
                  <div className="exp-meta">
                    <span
                      className="exp-dot"
                      style={{ background: exp.accentColor }}
                    />
                    <span className="overline">{exp.period}</span>
                  </div>
                  <h3 className="exp-title">{exp.name}</h3>
                  <p className="exp-subtitle">{exp.title}</p>
                </div>
                <span className="exp-tag">{exp.tag}</span>
              </div>
              <ul className="exp-points">
                {exp.points.map((point, j) => (
                  <li key={j} className="exp-point">
                    <span
                      className="exp-point-dot"
                      style={{ background: exp.accentColor }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="card-arrow">
                View details
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

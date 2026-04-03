import { Link } from 'react-router-dom';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="overline">What I've Built</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="proj-grid">
          {projects.map((proj, i) => (
            <Link
              key={proj.title}
              to={`/projects/${proj.slug}`}
              className={`card proj-card reveal d${Math.min(i + 1, 3)} card-clickable`}
            >
              <div className="proj-screenshot">
                {proj.cardImage ? (
                  <img
                    src={proj.cardImage}
                    alt={proj.title}
                    className="proj-screenshot-img"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                ) : (
                  <>
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
                    <span className="overline" style={{ marginTop: 8 }}>
                      Screenshot
                    </span>
                  </>
                )}
              </div>
              <div className="proj-card-top">
                <div>
                  <span className="overline">{proj.type}</span>
                </div>
                <span className="proj-num">{proj.num}</span>
              </div>
              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-stack">{proj.stack}</p>
              <p className="proj-desc">{proj.description}</p>
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

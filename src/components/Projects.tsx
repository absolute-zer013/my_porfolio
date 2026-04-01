import { projects } from "../data/portfolio";

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
            <div
              key={proj.title}
              className={`card proj-card reveal d${Math.min(i + 1, 3)}`}
            >
              <div className="proj-card-top">
                <div>
                  <span className="overline">{proj.type}</span>
                </div>
                <span className="proj-num">{proj.num}</span>
              </div>
              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-stack">{proj.stack}</p>
              <p className="proj-desc">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

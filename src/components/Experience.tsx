import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="overline">Where I've Worked</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="exp-grid">
          {experiences.map((exp, i) => (
            <div key={exp.name} className={`card exp-card reveal d${Math.min(i + 1, 3)}`}>
              <div className="exp-card-header">
                <div>
                  <div className="exp-meta">
                    <span className="exp-dot" style={{ background: exp.accentColor }} />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

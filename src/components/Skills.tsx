import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-two-col">
          <div className="section-header reveal">
            <span className="overline">What I Work With</span>
            <h2 className="section-title">Skills</h2>
          </div>
          <div className="skills-wrap reveal d1">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

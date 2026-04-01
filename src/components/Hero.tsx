export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="overline reveal">Flutter & React Developer</span>
            <h1 className="hero-title reveal d1">
              Fahmi <span className="hero-title-em">Thajudeen</span>
            </h1>
            <p className="hero-bio reveal d2">
              I build <strong>mobile and web applications</strong> with Flutter, React, and
              modern tooling — focused on clean UI implementation, reliable API integration,
              and shipping production-ready apps. Based in <strong>Malaysia</strong>.
            </p>
            <div className="hero-ctas reveal d3">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </div>
          </div>
          <div className="stat-box dot-pattern reveal d2">
            <div className="stat-inner">
              <div className="stat-num accent-warm">3+</div>
              <div className="overline">Years</div>
              <div className="stat-divider" />
              <div className="stat-num accent-cool">7+</div>
              <div className="overline">Projects</div>
              <div className="stat-divider" />
              <div className="overline" style={{ marginTop: 8 }}>
                Available for
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: 2 }}>
                Freelance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

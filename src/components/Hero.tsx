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
              I build <strong>mobile and web applications</strong> with Flutter,
              React, and modern tooling — focused on clean UI implementation,
              reliable API integration, and shipping production-ready apps.
              Based in <strong>Malaysia</strong>.
            </p>
            <div className="stat-box dot-pattern reveal d2">
              <div className="stat-inner">
                <div
                  className="stat-horizontal"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <div className="stat-component">
                    <div className="stat-num accent-warm">3+</div>
                    <div className="overline">Years</div>
                  </div>
                  <div className="stat-divider-height" />
                  <div className="stat-component">
                    <div className="stat-num accent-cool">7+</div>
                    <div className="overline">Projects</div>
                  </div>
                </div>
                <div className="overline" style={{ marginTop: 8 }}>
                  Available for
                </div>
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    marginTop: 2,
                  }}
                >
                  Freelance
                </div>
              </div>
            </div>
            <div className="hero-ctas reveal d3">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </div>
          </div>
          <div className="hero-photo reveal d1">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            <span className="overline" style={{ marginTop: 10 }}>
              Your photo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

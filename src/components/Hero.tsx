import { Link } from 'react-router-dom';

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
              <strong>Mobile Developer</strong> with 3+ years of experience
              translating UI designs into high-quality Flutter code, integrating
              GraphQL and REST APIs, and deploying mobile apps via CI/CD
              pipelines. Experienced in government-scale enterprise systems and
              freelance web projects. Based in <strong>Malaysia</strong>.
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
              </div>
            </div>
            <div className="hero-ctas reveal d3">
              <Link to="/about" className="btn-primary">
                More About Me
              </Link>
            </div>
          </div>
          <div className="hero-photo-wrap reveal d1">
            <div className="hero-photo-accent" />
            <div className="hero-photo-frame">
              <div className="hero-photo-frame-inner">
                <img
                  src="/profile_picture/profile_picture.jpg"
                  alt="Profile"
                  className="hero-photo-img"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </div>
              <div className="hero-photo-badge">
                <span className="hero-photo-badge-dot" />
                Available for Freelance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="nav">
          <div className="logo">PORTFOLIO</div>
          <nav className="nav-links">
            <a href="#about">ABOUT</a>
            <a href="#work">WORK</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            CREATIVE
            <br />
            DEVELOPER
          </h1>
          <div className="hero-subtitle">
            BUILDING DIGITAL EXPERIENCES
          </div>
          <div className="hero-cta">
            <button className="btn-primary">VIEW WORK</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="geometric-shape"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-header">
          <h2>ABOUT</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>PASSIONATE DEVELOPER WITH 5+ YEARS OF EXPERIENCE IN CREATING BOLD DIGITAL SOLUTIONS.</p>
            <div className="skills">
              <div className="skill-item">REACT</div>
              <div className="skill-item">NODE.JS</div>
              <div className="skill-item">DESIGN</div>
              <div className="skill-item">UI/UX</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work">
        <div className="section-header">
          <h2>SELECTED WORK</h2>
        </div>
        <div className="work-grid">
          <div className="work-item">
            <div className="work-number">01</div>
            <h3>E-COMMERCE PLATFORM</h3>
            <p>MODERN SHOPPING EXPERIENCE</p>
          </div>
          <div className="work-item">
            <div className="work-number">02</div>
            <h3>MOBILE APP</h3>
            <p>PRODUCTIVITY TOOL</p>
          </div>
          <div className="work-item">
            <div className="work-number">03</div>
            <h3>BRAND IDENTITY</h3>
            <p>VISUAL DESIGN SYSTEM</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-header">
          <h2>GET IN TOUCH</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span>EMAIL</span>
              <a href="mailto:hello@example.com">HELLO@EXAMPLE.COM</a>
            </div>
            <div className="contact-item">
              <span>SOCIAL</span>
              <div className="social-links">
                <a href="#">GITHUB</a>
                <a href="#">LINKEDIN</a>
                <a href="#">TWITTER</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 PORTFOLIO. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

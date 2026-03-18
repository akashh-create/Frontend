import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="hero-section" id="home">
        <nav className="navbar">
          <div className="brand">Akash Kushwah</div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#hire">Hire Me</a>
          </div>
        </nav>

        <div className="hero-content container">
          <div className="hero-left">
            <p className="intro-tag">Open to internships and full-time roles</p>
            <h1>
              Hi, I'm <span>Akash</span>
            </h1>
            <h2>Frontend Developer • ML Enthusiast • Problem Solver</h2>
            <p className="hero-desc">
              I build clean web interfaces and practical projects in machine
              learning. I enjoy creating responsive websites, solving coding
              problems, and building useful applications that deliver real
              value.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">
                View Projects
              </a>
              <a href="#hire" className="btn secondary-btn">
                Hire Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/akashh-create"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/akash-kushwah-658621328/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:akashsan463@gmail.com">Email Me</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="image-card">
              <img
                src="/profile.jpg"
                alt="Akash profile"
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p>About Me</p>
            <h2>Professional Profile</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Who I Am</h3>
              <p>
                I am Akash Kushwah, a developer interested in web development,
                data analytics, and machine learning. I like building projects
                that are useful, modern, and visually clean.
              </p>
            </div>

            <div className="about-card">
              <h3>What I Do</h3>
              <p>
                I create responsive frontend interfaces, solve coding problems,
                and build projects like weather prediction and stock price
                prediction using machine learning concepts.
              </p>
            </div>

            <div className="about-card">
              <h3>Why Hire Me</h3>
              <p>
                I am a quick learner, dedicated worker, and someone who enjoys
                building real projects. I can contribute to frontend
                development, debugging, project building, and team collaboration.
              </p>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p>My Skills</p>
            <h2>Technologies I Work With</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-box">HTML</div>
            <div className="skill-box">CSS</div>
            <div className="skill-box">JavaScript</div>
            <div className="skill-box">React</div>
            <div className="skill-box">C++</div>
            <div className="skill-box">Python</div>
            <div className="skill-box">Machine Learning</div>
            <div className="skill-box">Data Analytics</div>
            <div className="skill-box">Git & GitHub</div>
            <div className="skill-box">MongoDB</div>
            <div className="skill-box">Node.js</div>
            <div className="skill-box">Express.js</div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p>Featured Work</p>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <span className="project-badge">Machine Learning</span>
              <h3>Weather Prediction Using Naive Bayes</h3>
              <p>
                Built a weather prediction model with preprocessing, training,
                and evaluation using classification techniques.
              </p>
              <div className="project-links">
                <a href="https://github.com/akashh-create" target="_blank" rel="noreferrer">
                  Source Code
                </a>
              </div>
            </div>

            <div className="project-card">
              <span className="project-badge">Machine Learning</span>
              <h3>Stock Price Prediction</h3>
              <p>
                Developed a regression-based model to predict next-day stock
                prices from historical data and visualized model performance.
              </p>
              <div className="project-links">
                <a href="https://github.com/akashh-create" target="_blank" rel="noreferrer">
                  Source Code
                </a>
              </div>
            </div>

            <div className="project-card">
              <span className="project-badge">Web Development</span>
              <h3>Portfolio Website</h3>
              <p>
                Designed and developed a personal portfolio website to showcase
                skills, projects, and professional profiles.
              </p>
              <div className="project-links">
                <a href="https://github.com/akashh-create" target="_blank" rel="noreferrer">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section hire-section" id="hire">
          <div className="hire-card">
            <div className="hire-left">
              <p className="hire-tag">Let’s Work Together</p>
              <h2>Available for Hiring and Collaboration</h2>
              <p>
                I am open to internships, freelance projects, and entry-level
                developer roles. If you are looking for a motivated developer
                who can learn fast and build quality work, let’s connect.
              </p>

              <div className="hire-points">
                <div className="point">Frontend development support</div>
                <div className="point">Responsive website creation</div>
                <div className="point">ML project development</div>
                <div className="point">Quick learner and team player</div>
              </div>
            </div>

            <div className="hire-right">
              <h3>Contact Details</h3>
              <p><strong>Name:</strong> Akash Kushwah</p>
              <p><strong>Location:</strong> Delhi, India</p>
              <p><strong>Email:</strong> akashsan463@gmail.com</p>

              <div className="contact-buttons">
                <a
                  href="mailto:akashsan463@gmail.com"
                  className="btn primary-btn"
                >
                  Contact Me
                </a>
                <a
                  href="https://www.linkedin.com/in/akash-kushwah-658621328/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn secondary-btn"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Akash Kushwah. Built with React and CSS.</p>
      </footer>
    </div>
  );
}

export default App;
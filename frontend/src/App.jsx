import './App.css';

const App = () => {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar container">
        <h2 className="logo">Akash</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero container" id="home">
        <div className="hero-left">
          <h1>
            Hi, I'm <span>Akash</span>
          </h1>
          <p>
            Data Analyst & Developer specializing in Machine Learning and Web Development.
          </p>
          <div className="hero-buttons">
            <button className="btn">View Projects</button>
            <button className="btn-outline">Download CV</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            <h3>👨‍💻 Developer</h3>
            <p>Building ML + Web Apps</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about container" id="about">
        <h2>About Me</h2>
        <p>
          I'm Akash, a passionate developer focused on Data Analytics and Machine Learning.
          I have built projects like Weather Prediction and Stock Price Prediction using ML models.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="projects container" id="projects">
        <h2>My Projects</h2>

        <div className="project-grid">

          <div className="card">
            <h3>Weather Prediction</h3>
            <p>Naive Bayes model to predict weather conditions.</p>
          </div>

          <div className="card">
            <h3>Stock Price Prediction</h3>
            <p>Regression model for predicting stock trends.</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="contact container" id="contact">
        <h2>Contact Me</h2>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="btn">Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Akash | Built with ❤️</p>
      </footer>

    </div>
  );
};

export default App;
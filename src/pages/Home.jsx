import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">
          <p className="small-text">Hello, I'm</p>

          <h1>Suryadas Kattumpurath Pambavasan</h1>

          <h2>B.Tech Computer Science Student</h2>

          <p className="intro">
            A passionate B.Tech Computer Science student and tech enthusiast,
            exploring programming, innovation, and emerging technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View My Work
            </a>

            <Link to="/contact" className="btn">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/profile.jpg"
            alt="Suryadas Kattumpurath Pambavasan"
          />
        </div>

      </section>


      {/* Skills Section */}
      <section className="skills">

  <p className="small-text">What I Work With</p>

  <h2>Technical Skills</h2>

  <div className="skills-grid">

    <div className="skill-card">
      <span className="skill-category">01</span>
      <h3>Programming</h3>

      <div className="skill-tags">
        <span>Java</span>
        <span>Python</span>
        <span>C</span>
      </div>
    </div>


    <div className="skill-card">
      <span className="skill-category">02</span>
      <h3>Web Development</h3>

      <div className="skill-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React.js</span>
      </div>
    </div>


    <div className="skill-card">
      <span className="skill-category">03</span>
      <h3>Technologies</h3>

      <div className="skill-tags">
        <span>IoT</span>
        <span>Git</span>
        <span>GitHub</span>
      </div>
    </div>

  </div>

</section>


      {/* Projects Section */}
      <section className="projects" id="projects">

  <p className="small-text">My Work</p>

  <h2>Featured Projects</h2>

  <div className="project-container">

    <div className="project-card">
      <div className="project-number">01</div>

      <h3>Personal Portfolio</h3>

      <p>
        A responsive personal portfolio website built with React.js
        to showcase my skills, projects, education and contact
        information.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>

      <a href="#" className="project-link">
        Coming Soon →
      </a>
    </div>


    <div className="project-card">
      <div className="project-number">02</div>

      <h3>IoT Monitoring System</h3>

      <p>
        An IoT-based project exploring sensors, device communication,
        data monitoring and real-time interaction with connected devices.
      </p>

      <div className="project-tech">
        <span>IoT</span>
        <span>ESP32</span>
        <span>C</span>
      </div>

      <a href="#" className="project-link">
        Coming Soon →
      </a>
    </div>


    <div className="project-card">
      <div className="project-number">03</div>

      <h3>Programming Projects</h3>

      <p>
        A collection of programming projects developed while learning
        Java, Python, C programming and web development.
      </p>

      <div className="project-tech">
        <span>Java</span>
        <span>Python</span>
        <span>C</span>
      </div>

      <a href="#" className="project-link">
        Coming Soon →
      </a>
    </div>

  </div>

</section>

    </div>
  );
}

export default Home;
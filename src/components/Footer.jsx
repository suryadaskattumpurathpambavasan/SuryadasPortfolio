import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h3>Suryadas</h3>

          <p>
            B.Tech Computer Science Student
          </p>

          <p>
            Exploring programming, innovation, and emerging technologies.
          </p>
        </div>


        <div className="footer-links">

          <h4>Navigation</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>


        <div className="footer-links">

          <h4>Connect</h4>

          <a
            href="https://github.com/suryadaskattumpurathpambavasan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/suryadaskp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Suryadas Kattumpurath Pambavasan. All Rights Reserved.
        </p>

        <p>
          Built with React.js
        </p>

      </div>

    </footer>
  );
}

export default Footer;
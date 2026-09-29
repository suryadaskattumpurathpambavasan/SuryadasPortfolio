import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">

        <p className="small-text">About Me</p>

        <h1>Turning curiosity into technology.</h1>

        <p className="about-intro">
          I'm Suryadas Kattumpurath Pambavasan, a B.Tech Computer Science
          student with a strong interest in programming, web development,
          and emerging technologies.
        </p>

        <p className="about-intro">
          I'm currently building my skills through hands-on projects,
          experimenting with different technologies, and continuously
          learning how software can be used to solve real-world problems.
        </p>

      </section>

      <section className="about-cards">

        <div className="about-card">
          <h2>Education</h2>
          <p>
            B.Tech in Computer Science Engineering
          </p>
        </div>

        <div className="about-card">
          <h2>Interests</h2>
          <p>
            Programming, web development, AI, IoT and emerging technologies.
          </p>
        </div>

        <div className="about-card">
          <h2>Currently Learning</h2>
          <p>
            React.js, Java, Python, C programming and modern web development.
          </p>
        </div>

      </section>

    </div>
  );
}

function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-header">
        <p className="small-text">Get In Touch</p>

        <h1>Let's work together.</h1>

        <p>
          Have a project idea, question, or just want to connect?
          Send me a message and I'll get back to you.
        </p>
      </section>


      <section className="contact-container">

        <div className="contact-info">
          <h2>Contact Me</h2>

          <p>
            I'm always interested in discussing technology, projects,
            and new ideas.
          </p>

          <div className="contact-detail">
            <span>Email</span>
            <p>suryadaskp.official@gmail.com</p>
          </div>

          <div className="contact-detail">
            <span>Location</span>
            <p>Kerala, India</p>
          </div>
        </div>


        <form
  className="contact-form"
  action="https://formspree.io/f/xppwbqnz"
  method="POST"
>
  <div className="form-group">
    <label>Name</label>
    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      required
    />
  </div>

  <div className="form-group">
    <label>Email</label>
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      required
    />
  </div>

  <div className="form-group">
    <label>Phone Number</label>
    <input
      type="tel"
      name="phone"
      placeholder="Enter your phone number"
    />
  </div>

  <div className="form-group">
    <label>Subject</label>
    <input
      type="text"
      name="subject"
      placeholder="Enter subject"
      required
    />
  </div>

  <div className="form-group">
    <label>Message</label>
    <textarea
      name="message"
      rows="6"
      placeholder="Enter your message"
      required
    ></textarea>
  </div>

  <button type="submit" className="contact-button">
    Send Message
  </button>
</form>
      </section>

    </div>
  );
}
function App() {
  return (
    <BrowserRouter>

      <Header />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
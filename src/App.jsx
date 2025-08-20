import React from 'react';
import { Experience } from './components/Experience';

// Header Component
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <div className="logo">RW</div>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
    );
  }
}

// Hero Section
class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm Rebecca Weir.
            <br />
            I'm a full-stack software engineer.
          </h1>
          <p className="hero-subtitle">
            I have 7+ years of experience building scalable applications at Medidata Solutions, 
            Vimeo, and leading teams and projects.
          </p>
          <p className="hero-description">
            I value clarity, innovation, and collaboration above all else. These 
            ideals guide my approach to problem solving and engineering excellence.
          </p>
        </div>
      </section>
    );
  }
}

// About Section
class About extends React.Component {
  render() {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Rebecca</h2>
              <p>
                I'm a software engineer with 7+ years of experience building scalable, 
                user-focused applications. My background in Biochemistry and Cellular and 
                Molecular Biology from the University of Tennessee gives me a unique 
                analytical perspective on complex technical challenges.
              </p>
              <p>
                I've had the privilege of working at innovative companies like Vimeo and 
                Medidata Solutions, where I've led teams, mentored engineers, and delivered 
                systems that serve millions of users. I'm passionate about clean architecture, 
                performance optimization, and creating technology that makes a real difference.
              </p>
              <div className="credentials">
                <div className="education">
                  <h3>Education</h3>
                  <p>Bachelor of Science in Biochemistry And Cellular And Molecular Biology</p>
                  <p>University of Tennessee, Knoxville, TN</p>
                </div>
                <div className="awards">
                  <h3>Recognition</h3>
                  <p>Encore Award - For exceptional contribution to a high-impact, time-sensitive project</p>
                  <p>Pendo Partner Certification - Software management platform expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// Contact Section
class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <p className="contact-description">
              I'm always interested in discussing new opportunities, 
              innovative projects, or just chatting about technology.
            </p>
            <div className="contact-links">
              <a href="mailto:rebeccaweir12@gmail.com" className="contact-link">
                rebeccaweir12@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/rebeccalweir/" className="contact-link">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// Main Portfolio Component
class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <Header />
        <Hero />
        <Experience />
        <About />
        <Contact />
      </div>
    );
  }
}

export default Portfolio;
import React from 'react';
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About';
import Hero from './components/Hero';

const Header = () => (
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

const Portfolio = () => (
  <div className="portfolio">
    <Header />
    <Hero />
    <Experience />
    <About />
    <Contact />
  </div>
);

export default Portfolio;
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About';
import Hero from './components/Hero';
import AIChatBotShowcase from './components/AIChatBotShowcase';
import CartridgeShowcase from './components/CartridgeShowcase';
import CurrentRole from './components/CurrentRole';
import { CHATBOX_INFO, CHATBOX_TITLE } from './constants';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="nav-in glass">
        <a href="#top" className="wordmark">
          Rebecca <b>Weir</b>
          <span className="wordmark-role">Senior Fullstack Software Engineer</span>
        </a>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Get in touch</a>
        </nav>
      </div>
    </div>
  </header>
);

const Portfolio = () => (
  <div className="portfolio" id="top">
    <div className="site-bg" aria-hidden="true"></div>
    <Header />
    <Hero />
    <CurrentRole />
    <Experience />
    <AIChatBotShowcase projectInfo={CHATBOX_INFO} title={CHATBOX_TITLE} />
    <CartridgeShowcase />
    <About />
    <Contact />
  </div>
);

export default Portfolio;
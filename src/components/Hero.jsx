import ChatbotWidget from './ChatbotWidget';

const Hero = () => (
  <section className="hero">
    <div className="hero-inner">
      <div className="hero-main">
        <span className="eyebrow rise d1">Senior Full-Stack Engineer · Since 2017</span>
        <h1 className="hero-title rise d2">Rebecca Weir</h1>
        <p className="hero-thesis rise d3">
          I build software the way I once characterized molecules — by studying its
          behavior, defining clear boundaries, and <em>designing systems that hold together.</em>
        </p>
        <div className="hero-cta rise d4">
          <a href="#contact" className="btn btn-solid">Get in touch</a>
          <a href="#work" className="btn btn-ghost">View selected work</a>
        </div>
        <div className="readout glass rise d4">
          <div className="cell">
            <span className="num">8+</span>
            <span className="lab">Years shipping</span>
          </div>
          <div className="cell">
            <span className="num">13M+</span>
            <span className="lab">Vimeo users served</span>
          </div>
          <div className="cell">
            <span className="num">VA.gov</span>
            <span className="lab">Currently building</span>
          </div>
        </div>
      </div>
      <div className="hero-figure rise d3">
        <div className="key" aria-hidden="true"></div>
        <div className="frame">
          <img src="images/profile_pic.png" alt="Rebecca Weir" />
          <span className="cap">Fig. 1 — R. Weir</span>
        </div>
      </div>
    </div>
    <ChatbotWidget />
  </section>
);

export default Hero;

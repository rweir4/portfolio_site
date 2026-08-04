const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">Contact</span>
        <h2 className="section-title">Let's Connect</h2>
      </div>
      <div className="contact-content">
        <p className="contact-description">
          I'm always interested in discussing new opportunities, 
          innovative projects, or just chatting about technology.
        </p>
        <div className="contact-links">
          <a href="mailto:rebeccaweir12@gmail.com" className="contact-link primary">
            rebeccaweir12@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/rebeccalweir/" className="contact-link" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
          <a href="https://github.com/rweir4" className="contact-link" target="_blank" rel="noopener noreferrer">
            Github Profile
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
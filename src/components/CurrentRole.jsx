const CurrentRole = () => (
  <section id="current" className="current-role">
    <div className="container">
      <h2 className="section-title">Currently</h2>
      <div className="current-role-card">
        <div className="current-role-header">
          <div>
            <h3 className="current-role-title">Senior Fullstack Engineer</h3>
            <span className="current-role-meta">Agile 6</span>
          </div>
          <div className="exp-period">2025–Present</div>
        </div>
        <p className="current-role-body">
          I'm a Senior Fullstack Engineer at Agile 6, building large-scale financial
          applications for VA.gov. My work spans the full stack — from{' '}
          <strong>architecture</strong> (API contracts, migration strategies, and
          technical design that guides the team's implementation) to hands-on{' '}
          <strong>frontend development</strong>, modernizing data models and the
          interfaces that serve millions of Veterans — with a constant focus on{' '}
          <strong>privacy, security, and reliability</strong>. Out of respect for the
          platform's security requirements, I keep the specifics intentionally high-level.
        </p>
      </div>
    </div>
  </section>
);

export default CurrentRole;

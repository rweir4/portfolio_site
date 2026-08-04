import { useState } from 'react';
import BulletList from './BulletList';
import { EXPERIENCES } from '../experienceSeed';

const ProjectHighlight = ({ title, company, period, description, tech }) => {
  return (
    <div className="project-highlight">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <div className="project-meta">
          <span className="company">{company}</span>
          <span className="period">{period}</span>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <div className="tech-stack">
        {tech.map((technology, index) => (
          <span key={index} className="tech-tag">{technology}</span>
        ))}
      </div>
    </div>
  );
}

const Experience = () => {
  const [expandedBullet, setExpandedBullet] = useState(null);

  return (
    <section id="work" className="experience">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">More from My Desk</h2>
        </div>
        <div className="project-highlights">
          <ProjectHighlight
            title="Clinical Trial Authorization System"
            company="Medidata Solutions"
            period="2024-2025"
            description="Led the complete redesign of authorization logic for clinical trial organizations, creating a dynamic navigation system that serves multiple user roles and study categories."
            tech={['PostgreSQL', 'Ruby on Rails', 'JavaScript', 'React-Redux']}
          />
          <ProjectHighlight
            title="Subscription State Machine for 13M+ Users"
            company="Vimeo"
            period="2021-2022"
            description="Completely redesigned Vimeo's subscription system architecture, implementing a robust state machine to handle complex subscription events and transitions. This system now serves over 13 million users with improved consistency and reliability."
            tech={['Ruby on Rails', 'PostgreSQL', 'State Machines']}
          />
          <ProjectHighlight
            title="eCOA Questionnaire Horizontal Layouts"
            company="Medidata Solutions"
            period="2018-2021"
            description="Tech led the development of a comprehensive questionnaire template system for electronic Clinical Outcome Assessments, managing 50+ JIRA tickets and achieving 100% code coverage. Built complex form logic and conditional branching for patient workflows."
            tech={['TypeScript', 'JavaScript', 'Cypress', 'Jest']}
          />
        </div>
        
        <div className="section-head" id="experience">
          <span className="eyebrow">Timeline</span>
          <h2 className="section-title">Past Experience</h2>
        </div>
        <div className="timeline">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="tl-item">
              <div className="tl-idx">
                {String(index + 1).padStart(2, '0')} / {exp.period}
              </div>
              <h3 className="tl-role">{exp.title}</h3>
              <div className="tl-co">
                {exp.company} <span className="dot">◆</span> {exp.location}
              </div>
              <div className="tl-bullets">
                <BulletList
                  bullets={exp.highlights}
                  expandedBullet={expandedBullet}
                  setExpandedBullet={setExpandedBullet}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
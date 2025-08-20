import React from 'react';
// import './index.css';

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

// Project Highlight Card
class ProjectHighlight extends React.Component {
  render() {
    const { title, company, period, description, tech } = this.props;
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
}

// Experience Section
class Experience extends React.Component {
  render() {
    const experiences = [
      {
        title: "Software Engineer II",
        company: "Vimeo",
        period: "2024-2025",
        location: "NYC Based",
        highlights: [
          "Tech led Clinical Trial Organizations project. Redesigned authorization logic for dynamic navigation bar, working across PostgreSQL, Ruby on Rails, and Javascript with React-Redux.",
          "Created advanced filters and search across microservices, integrating with dedicated roles service to deliver paginated results based on study categories and user roles.",
          "Migrated authorization application platform from EC2 to ECS and defined autoscaling strategies using AWS Cloudwatch metrics to improve resilience and cost efficiency.",
          "Integrated with NewRelic to capture key metrics across role management workflows and drive performance insights.",
          "Acted as team lead for 6 months. Mentored two engineers on technical and career development through 1:1s, pair programming, and code review."
        ]
      },
      {
        title: "Software Engineer",
        company: "Vimeo",
        period: "2021-2022",
        location: "NYC Based",
        highlights: [
          "Redesigned subscription system to track subscriptions across events. Designed, implemented, tested, and released state machine to improve consistency for 13M+ users, using Ruby on Rails and PostgreSQL.",
          "Engineered full-stack support for multi-tier subscriptions and video access from a single tier system.",
          "Rearchitected business logic, database relationships, and user interface to enable tiered content delivery.",
          "Fixed bugs related to asynchronous responses from external vendor integrations with In-App Purchases by leveraging Datadog.",
          "Migrated legacy Haml to React framework in user account settings, improving code coverage to 100%.",
          "Added Stripe integration support for complex transaction flows such as reduced-cost product processing.",
          "Refactored video player experience workflow to accommodate differentiated user access levels and enhance personalization and security."
        ]
      },
      {
        title: "Software Engineer",
        company: "Medidata Solutions",
        period: "2018-2021",
        location: "NYC Based",
        highlights: [
          "Tech led design and development of new questionnaire template feature for electronic Clinical Outcome Assessments (eCOA) App, using Javascript and Typescript to enable complex form logic. Negotiated MVPs, managed 50+ JIRA tickets across the team, and achieved 100% code coverage using Cypress and Jest.",
          "Developed and launched eCOA Library App a year in advance. Designed data model and API, owned logic for filter feature, and resolved frontend library object version bugs. Contributed features using Typescript, Next.js, Ruby on Rails, and PostgreSQL.",
          "Architected and implemented custom rich text editor using Draft.js, extended complex React editor state, and designed API contract.",
          "Implemented conditional branching in Workflow Graph UI using Javascript, to allow patient as an end user to navigate questionnaire based on dynamic results.",
          "Developed and deployed AWS Lambdas for Preview Generation and storage in AWS S3.",
          "Implemented telemetry to monitor asynchronous Preview Generation in AWS Cloudwatch and SumoLogic via background job to AWS.",
          "Built Infrastructure as Code (IaC) AWS Lambda alarms in AWS Cloudwatch. Determined alarm parameters by analyzing network call metrics in relation to previous downtime to increase visibility of performance bottlenecks by 100%, reducing Time to Resolution from hours to minutes.",
          "Mentored intern through full development lifecycle to successfully deliver new application page and backend API.",
          "Designed and proposed Predictive Questionnaire Templates AI Project using AWS Bedrock."
        ]
      }
    ];

    return (
      <section id="work" className="experience">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="project-highlights">
            <ProjectHighlight 
              title="Clinical Trial Authorization System"
              company="Vimeo"
              period="2024-2025"
              description="Led the complete redesign of authorization logic for clinical trial organizations, creating a dynamic navigation system that serves multiple user roles and study categories. Architected the migration from EC2 to ECS with intelligent autoscaling strategies."
              tech={['PostgreSQL', 'Ruby on Rails', 'JavaScript', 'React-Redux', 'AWS ECS', 'NewRelic']}
            />
            <ProjectHighlight 
              title="Subscription State Machine for 13M+ Users"
              company="Vimeo"
              period="2021-2022"
              description="Completely redesigned Vimeo's subscription system architecture, implementing a robust state machine to handle complex subscription events and transitions. This system now serves over 13 million users with improved consistency and reliability."
              tech={['Ruby on Rails', 'PostgreSQL', 'State Machines', 'Stripe API']}
            />
            <ProjectHighlight 
              title="eCOA Questionnaire Platform"
              company="Medidata Solutions"
              period="2018-2021"
              description="Tech led the development of a comprehensive questionnaire template system for electronic Clinical Outcome Assessments, managing 50+ JIRA tickets and achieving 100% code coverage. Built complex form logic and conditional branching for patient workflows."
              tech={['TypeScript', 'JavaScript', 'Cypress', 'Jest', 'Draft.js', 'AWS Lambda']}
            />
          </div>
          
          <h2 className="section-title">Complete Experience</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <h4 className="exp-company">{exp.company} | {exp.location}</h4>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <ul className="exp-highlights">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
                I'm a software engineer with 6+ years of experience building scalable, 
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
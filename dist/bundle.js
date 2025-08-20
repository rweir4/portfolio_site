// src/index.js
import { createRoot } from "react-dom/client";

// src/App.jsx
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Header = class extends React.Component {
  render() {
    return /* @__PURE__ */ jsx("header", { className: "header", children: /* @__PURE__ */ jsxs("nav", { className: "nav", children: [
      /* @__PURE__ */ jsx("div", { className: "logo", children: "RW" }),
      /* @__PURE__ */ jsxs("div", { className: "nav-links", children: [
        /* @__PURE__ */ jsx("a", { href: "#work", children: "Work" }),
        /* @__PURE__ */ jsx("a", { href: "#about", children: "About" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contact" })
      ] })
    ] }) });
  }
};
var Hero = class extends React.Component {
  render() {
    return /* @__PURE__ */ jsx("section", { className: "hero", children: /* @__PURE__ */ jsxs("div", { className: "hero-content", children: [
      /* @__PURE__ */ jsxs("h1", { className: "hero-title", children: [
        "Hello, I'm Rebecca Weir.",
        /* @__PURE__ */ jsx("br", {}),
        "I'm a full-stack software engineer."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "hero-subtitle", children: "I have 7+ years of experience building scalable applications at Medidata Solutions, Vimeo, and leading teams and projects." }),
      /* @__PURE__ */ jsx("p", { className: "hero-description", children: "I value clarity, innovation, and collaboration above all else. These ideals guide my approach to problem solving and engineering excellence." })
    ] }) });
  }
};
var ProjectHighlight = class extends React.Component {
  render() {
    const { title, company, period, description, tech } = this.props;
    return /* @__PURE__ */ jsxs("div", { className: "project-highlight", children: [
      /* @__PURE__ */ jsxs("div", { className: "project-header", children: [
        /* @__PURE__ */ jsx("h3", { className: "project-title", children: title }),
        /* @__PURE__ */ jsxs("div", { className: "project-meta", children: [
          /* @__PURE__ */ jsx("span", { className: "company", children: company }),
          /* @__PURE__ */ jsx("span", { className: "period", children: period })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "project-description", children: description }),
      /* @__PURE__ */ jsx("div", { className: "tech-stack", children: tech.map((technology, index) => /* @__PURE__ */ jsx("span", { className: "tech-tag", children: technology }, index)) })
    ] });
  }
};
var Experience = class extends React.Component {
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
    return /* @__PURE__ */ jsx("section", { id: "work", className: "experience", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Featured Projects" }),
      /* @__PURE__ */ jsxs("div", { className: "project-highlights", children: [
        /* @__PURE__ */ jsx(
          ProjectHighlight,
          {
            title: "Clinical Trial Authorization System",
            company: "Vimeo",
            period: "2024-2025",
            description: "Led the complete redesign of authorization logic for clinical trial organizations, creating a dynamic navigation system that serves multiple user roles and study categories. Architected the migration from EC2 to ECS with intelligent autoscaling strategies.",
            tech: ["PostgreSQL", "Ruby on Rails", "JavaScript", "React-Redux", "AWS ECS", "NewRelic"]
          }
        ),
        /* @__PURE__ */ jsx(
          ProjectHighlight,
          {
            title: "Subscription State Machine for 13M+ Users",
            company: "Vimeo",
            period: "2021-2022",
            description: "Completely redesigned Vimeo's subscription system architecture, implementing a robust state machine to handle complex subscription events and transitions. This system now serves over 13 million users with improved consistency and reliability.",
            tech: ["Ruby on Rails", "PostgreSQL", "State Machines", "Stripe API"]
          }
        ),
        /* @__PURE__ */ jsx(
          ProjectHighlight,
          {
            title: "eCOA Questionnaire Platform",
            company: "Medidata Solutions",
            period: "2018-2021",
            description: "Tech led the development of a comprehensive questionnaire template system for electronic Clinical Outcome Assessments, managing 50+ JIRA tickets and achieving 100% code coverage. Built complex form logic and conditional branching for patient workflows.",
            tech: ["TypeScript", "JavaScript", "Cypress", "Jest", "Draft.js", "AWS Lambda"]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Complete Experience" }),
      /* @__PURE__ */ jsx("div", { className: "experience-list", children: experiences.map((exp, index) => /* @__PURE__ */ jsxs("div", { className: "experience-item", children: [
        /* @__PURE__ */ jsxs("div", { className: "exp-header", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "exp-title", children: exp.title }),
            /* @__PURE__ */ jsxs("h4", { className: "exp-company", children: [
              exp.company,
              " | ",
              exp.location
            ] })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "exp-period", children: exp.period })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "exp-highlights", children: exp.highlights.map((highlight, hIndex) => /* @__PURE__ */ jsx("li", { children: highlight }, hIndex)) })
      ] }, index)) })
    ] }) });
  }
};
var About = class extends React.Component {
  render() {
    return /* @__PURE__ */ jsx("section", { id: "about", className: "about", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "about-content", children: /* @__PURE__ */ jsxs("div", { className: "about-text", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "About Rebecca" }),
      /* @__PURE__ */ jsx("p", { children: "I'm a software engineer with 6+ years of experience building scalable, user-focused applications. My background in Biochemistry and Cellular and Molecular Biology from the University of Tennessee gives me a unique analytical perspective on complex technical challenges." }),
      /* @__PURE__ */ jsx("p", { children: "I've had the privilege of working at innovative companies like Vimeo and Medidata Solutions, where I've led teams, mentored engineers, and delivered systems that serve millions of users. I'm passionate about clean architecture, performance optimization, and creating technology that makes a real difference." }),
      /* @__PURE__ */ jsxs("div", { className: "credentials", children: [
        /* @__PURE__ */ jsxs("div", { className: "education", children: [
          /* @__PURE__ */ jsx("h3", { children: "Education" }),
          /* @__PURE__ */ jsx("p", { children: "Bachelor of Science in Biochemistry And Cellular And Molecular Biology" }),
          /* @__PURE__ */ jsx("p", { children: "University of Tennessee, Knoxville, TN" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "awards", children: [
          /* @__PURE__ */ jsx("h3", { children: "Recognition" }),
          /* @__PURE__ */ jsx("p", { children: "Encore Award - For exceptional contribution to a high-impact, time-sensitive project" }),
          /* @__PURE__ */ jsx("p", { children: "Pendo Partner Certification - Software management platform expertise" })
        ] })
      ] })
    ] }) }) }) });
  }
};
var Contact = class extends React.Component {
  render() {
    return /* @__PURE__ */ jsx("section", { id: "contact", className: "contact", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Let's Connect" }),
      /* @__PURE__ */ jsxs("div", { className: "contact-content", children: [
        /* @__PURE__ */ jsx("p", { className: "contact-description", children: "I'm always interested in discussing new opportunities, innovative projects, or just chatting about technology." }),
        /* @__PURE__ */ jsxs("div", { className: "contact-links", children: [
          /* @__PURE__ */ jsx("a", { href: "mailto:rebeccaweir12@gmail.com", className: "contact-link", children: "rebeccaweir12@gmail.com" }),
          /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/rebeccalweir/", className: "contact-link", children: "LinkedIn Profile" })
        ] })
      ] })
    ] }) });
  }
};
var Portfolio = class extends React.Component {
  render() {
    return /* @__PURE__ */ jsxs("div", { className: "portfolio", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Experience, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] });
  }
};
var App_default = Portfolio;

// src/index.js
import { jsx as jsx2 } from "react/jsx-runtime";
var style = document.createElement("style");
style.textContent = "body { background-color: red !important; }";
document.head.appendChild(style);
var domNode = document.getElementById("root");
var root = createRoot(domNode);
root.render(/* @__PURE__ */ jsx2(App_default, {}));

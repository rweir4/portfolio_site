// src/index.js
import { createRoot } from "react-dom/client";

// src/App.jsx
import React3 from "react";

// src/components/Experience.jsx
import React2, { useState as useState2 } from "react";

// src/components/BulletPoint.jsx
import React, { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var BulletPoint = ({ bulletPoint, index, isExpanded, setExpandedBullet }) => {
  const { title, expandedBody } = bulletPoint;
  const iconName = isExpanded ? "open_circle" : "closed_circle";
  return /* @__PURE__ */ jsxs("div", { className: `flex items-start transition-all duration-300 my-3 ${isExpanded ? "h-auto" : "h-12"}`, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `relative flex-shrink-0 text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out hover:shadow-lg ${isExpanded ? "w-16 h-16" : "w-full h-12 hover:scale-110 px-5"}`,
        onClick: () => isExpanded ? setExpandedBullet(null) : setExpandedBullet(title),
        children: /* @__PURE__ */ jsxs("div", { className: `flex absolute ${isExpanded ? "left-15" : "left-6"}`, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `images/${iconName}.png`,
              className: `transition-all duration-300 ${isExpanded ? "w-8 h-8" : "w-6 h-6 mr-3"}`,
              alt: "Company logo"
            }
          ),
          !isExpanded && /* @__PURE__ */ jsx("div", { className: "text-white text-wrap", children: title })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "ml-4 max-w-2xl opacity-100 max-h-screen" : "ml-0 max-w-0 opacity-0 max-h-0"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "experience-item rounded-lg shadow-lg p-6", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `flex items-start transition-all duration-300`,
              style: {
                transitionDelay: isExpanded ? `${index * 100}ms` : "0ms",
                opacity: isExpanded ? 1 : 0,
                transform: isExpanded ? "translateY(0)" : "translateY(10px)"
              },
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-white leading-relaxed", children: expandedBody })
              ]
            },
            index
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setExpandedBullet(null),
              className: "mt-6 px-4 py-2 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm",
              children: "Close"
            }
          )
        ] })
      }
    )
  ] });
};
var BulletPoint_default = BulletPoint;

// src/experienceSeed.js
var EXPERIENCES = [
  {
    title: "Software Engineer",
    company: "Medidata Solutions",
    period: "2024-2025",
    location: "NYC Based",
    highlights: [
      {
        title: "Horizontal Layout Questionnaire Template",
        expandedBody: "Tech led design and development of new questionnaire template feature for electronic Clinical Outcome Assessments (eCOA) App, using Javascript and Typescript to enable complex form logic. Negotiated MVPs, managed 50+ JIRA tickets across the team, and achieved 100% code coverage using Cypress and Jest."
      },
      {
        title: "eCOA Library",
        expandedBody: "Developed and launched eCOA Library App a year in advance. Designed data model and API, owned logic for filter feature, and resolved frontend library object version bugs. Contributed features using Typescript, Next.js, Ruby on Rails, and PostgreSQL."
      },
      {
        title: "Rich Text Area",
        expandedBody: "Architected and implemented custom rich text editor using Draft.js, extended complex React editor state, and designed API contract."
      },
      {
        title: "Workflow Graph UI",
        expandedBody: "Implemented conditional branching in Workflow Graph UI using Javascript, to allow patient as an end user to navigate questionnaire based on dynamic results."
      },
      {
        title: "Preview Generation",
        expandedBody: "Developed and deployed AWS Lambdas for Preview Generation and storage in AWS S3."
      },
      {
        title: "Cloudwatch Telemetry",
        expandedBody: "Implemented telemetry to monitor asynchronous Preview Generation in AWS Cloudwatch and SumoLogic via background job to AWS."
      },
      {
        title: "Infrastructure Alarms",
        expandedBody: "Built Infrastructure as Code (IaC) AWS Lambda alarms in AWS Cloudwatch. Determined alarm parameters by analyzing network call metrics in relation to previous downtime to increase visibility of performance bottlenecks by 100%, reducing Time to Resolution from hours to minutes."
      },
      {
        title: "Mentoring Intern",
        expandedBody: "Mentored intern through full development lifecycle to successfully deliver new application page and backend API."
      },
      {
        title: "Predictive Template AI",
        expandedBody: "Designed and proposed Predictive Questionnaire Templates AI Project using AWS Bedrock."
      }
    ]
  },
  {
    title: "Software Engineer II",
    company: "Vimeo",
    period: "2021-2022",
    location: "NYC Based",
    highlights: [
      {
        title: "Subscription System",
        expandedBody: "Redesigned subscription system to track subscriptions across events. Designed, implemented, tested, and released state machine to improve consistency for 13M+ users, using Ruby on Rails and PostgreSQL."
      },
      {
        title: "Multi-tier Subscriptions",
        expandedBody: "Engineered full-stack support for multi-tier subscriptions and video access from a single tier system."
      },
      {
        title: "Tiered Content Delivery",
        expandedBody: "Rearchitected business logic, database relationships, and user interface to enable tiered content delivery."
      },
      {
        title: "Vendor Integrations",
        expandedBody: "Fixed bugs related to asynchronous responses from external vendor integrations with In-App Purchases by leveraging Datadog."
      },
      {
        title: "User Account Settings",
        expandedBody: "Migrated legacy Haml to React framework in user account settings, improving code coverage to 100%."
      },
      {
        title: "Stripe Support",
        expandedBody: "Added Stripe integration support for complex transaction flows such as reduced-cost product processing."
      },
      {
        title: "Video Player Experience",
        expandedBody: "Refactored video player experience workflow to accommodate differentiated user access levels and enhance personalization and security."
      }
    ]
  },
  {
    title: "Software Engineer",
    company: "Medidata Solutions",
    period: "2018-2021",
    location: "NYC Based",
    highlights: [
      {
        title: "Clinical Trial Organizations",
        expandedBody: "Tech led Clinical Trial Organizations project to redesigned authorization logic for dynamic navigation bar, working across PostgreSQL, Ruby on Rails, and Javascript with React-Redux."
      },
      {
        title: "Advanced Filters and Search",
        expandedBody: "Created advanced filters and search across microservices to integrate with dedicated roles service to deliver paginated results based on study categories and user roles."
      },
      {
        title: "EC2 to ECS Migration",
        expandedBody: "Migrated authorization application platform from EC2 to ECS and defining autoscaling strategies using AWS Cloudwatch metrics to improve resilience and cost efficiency."
      },
      {
        title: "NewRelic Integration",
        expandedBody: "Integrated with NewRelic to capture key metrics across role management workflows and drive performance insights."
      },
      {
        title: "Team Lead",
        expandedBody: "Acted as team lead for 6 months, mentored two engineers on technical and career development through 1:1s, pair programming, and code review."
      }
    ]
  }
];

// src/components/Experience.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ProjectHighlight = ({ title, company, period, description, tech }) => {
  return /* @__PURE__ */ jsxs2("div", { className: "project-highlight", children: [
    /* @__PURE__ */ jsxs2("div", { className: "project-header", children: [
      /* @__PURE__ */ jsx2("h3", { className: "project-title", children: title }),
      /* @__PURE__ */ jsxs2("div", { className: "project-meta", children: [
        /* @__PURE__ */ jsx2("span", { className: "company", children: company }),
        /* @__PURE__ */ jsx2("span", { className: "period", children: period })
      ] })
    ] }),
    /* @__PURE__ */ jsx2("p", { className: "project-description", children: description }),
    /* @__PURE__ */ jsx2("div", { className: "tech-stack", children: tech.map((technology, index) => /* @__PURE__ */ jsx2("span", { className: "tech-tag", children: technology }, index)) })
  ] });
};
var Experience = () => {
  const [expandedBullet, setExpandedBullet] = useState2(null);
  return /* @__PURE__ */ jsx2("section", { id: "work", className: "experience", children: /* @__PURE__ */ jsxs2("div", { className: "container", children: [
    /* @__PURE__ */ jsx2("h2", { className: "section-title", children: "Featured Projects" }),
    /* @__PURE__ */ jsxs2("div", { className: "project-highlights", children: [
      /* @__PURE__ */ jsx2(
        ProjectHighlight,
        {
          title: "eCOA Questionnaire Horizontal Layouts",
          company: "Medidata Solutions",
          period: "2018-2021",
          description: "Tech led the development of a comprehensive questionnaire template system for electronic Clinical Outcome Assessments, managing 50+ JIRA tickets and achieving 100% code coverage. Built complex form logic and conditional branching for patient workflows.",
          tech: ["TypeScript", "JavaScript", "Cypress", "Jest"]
        }
      ),
      /* @__PURE__ */ jsx2(
        ProjectHighlight,
        {
          title: "Subscription State Machine for 13M+ Users",
          company: "Vimeo",
          period: "2021-2022",
          description: "Completely redesigned Vimeo's subscription system architecture, implementing a robust state machine to handle complex subscription events and transitions. This system now serves over 13 million users with improved consistency and reliability.",
          tech: ["Ruby on Rails", "PostgreSQL", "State Machines"]
        }
      ),
      /* @__PURE__ */ jsx2(
        ProjectHighlight,
        {
          title: "Clinical Trial Authorization System",
          company: "Medidata Solutions",
          period: "2024-2025",
          description: "Led the complete redesign of authorization logic for clinical trial organizations, creating a dynamic navigation system that serves multiple user roles and study categories.",
          tech: ["PostgreSQL", "Ruby on Rails", "JavaScript", "React-Redux"]
        }
      )
    ] }),
    /* @__PURE__ */ jsx2("h2", { className: "section-title", children: "Complete Experience" }),
    /* @__PURE__ */ jsx2("div", { className: "experience-list", children: EXPERIENCES.map((exp, index) => /* @__PURE__ */ jsxs2("div", { className: "experience-item", children: [
      /* @__PURE__ */ jsxs2("div", { className: "exp-header", children: [
        /* @__PURE__ */ jsxs2("div", { children: [
          /* @__PURE__ */ jsx2("h3", { className: "exp-title", children: exp.title }),
          /* @__PURE__ */ jsxs2("h4", { className: "exp-company", children: [
            exp.company,
            " | ",
            exp.location
          ] })
        ] }),
        /* @__PURE__ */ jsx2("div", { className: "exp-period", children: exp.period })
      ] }),
      /* @__PURE__ */ jsx2("li", { className: "exp-highlights", children: exp.highlights.map((highlight, hIndex) => {
        const isExpanded = expandedBullet === highlight.title;
        return /* @__PURE__ */ jsx2(
          BulletPoint_default,
          {
            bulletPoint: highlight,
            index: 1,
            isExpanded,
            setExpandedBullet
          }
        );
      }) })
    ] }, index)) })
  ] }) });
};
var Experience_default = Experience;

// src/components/Contact.jsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var Contact = () => /* @__PURE__ */ jsx3("section", { id: "contact", className: "contact", children: /* @__PURE__ */ jsxs3("div", { className: "container", children: [
  /* @__PURE__ */ jsx3("h2", { className: "section-title", children: "Let's Connect" }),
  /* @__PURE__ */ jsxs3("div", { className: "contact-content", children: [
    /* @__PURE__ */ jsx3("p", { className: "contact-description", children: "I'm always interested in discussing new opportunities, innovative projects, or just chatting about technology." }),
    /* @__PURE__ */ jsxs3("div", { className: "contact-links", children: [
      /* @__PURE__ */ jsx3("a", { href: "mailto:rebeccaweir12@gmail.com", className: "contact-link", children: "rebeccaweir12@gmail.com" }),
      /* @__PURE__ */ jsx3("a", { href: "https://www.linkedin.com/in/rebeccalweir/", className: "contact-link", children: "LinkedIn Profile" }),
      /* @__PURE__ */ jsx3("a", { href: "https://github.com/rweir4", className: "contact-link", children: "Github Profile" })
    ] })
  ] })
] }) });
var Contact_default = Contact;

// src/components/About.jsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var About = () => /* @__PURE__ */ jsx4("section", { id: "about", className: "about", children: /* @__PURE__ */ jsx4("div", { className: "container", children: /* @__PURE__ */ jsx4("div", { className: "about-content", children: /* @__PURE__ */ jsxs4("div", { className: "about-text", children: [
  /* @__PURE__ */ jsx4("h2", { className: "section-title", children: "About Rebecca" }),
  /* @__PURE__ */ jsx4("p", { children: "I'm a software engineer with 7+ years of experience building scalable, user-focused applications. I've had the privilege of working at innovative companies like Vimeo and Medidata Solutions, where I've led teams, mentored engineers, and delivered systems that serve millions of users. I'm passionate about clean architecture, performance optimization, and creating technology that makes a real difference." }),
  /* @__PURE__ */ jsx4("p", { children: "Studying Molecular Biophysics at the University of Tennessee taught me how to look at complex systems through both a scientific and computational lens. In the lab, I learned how to break down intricate biological processes into models and experiments. Today, I apply that same approach to engineering\u2014dissecting problems, identifying patterns, and building solutions that work at scale. It\u2019s a perspective that helps me bring both rigor and creativity to technical challenges." }),
  /* @__PURE__ */ jsxs4("div", { className: "credentials", children: [
    /* @__PURE__ */ jsxs4("div", { className: "education", children: [
      /* @__PURE__ */ jsx4("h3", { children: "Education" }),
      /* @__PURE__ */ jsx4("p", { children: "Bachelor of Science in Biochemistry And Cellular And Molecular Biology" }),
      /* @__PURE__ */ jsx4("p", { children: "University of Tennessee, Knoxville, TN" })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "awards", children: [
      /* @__PURE__ */ jsx4("h3", { children: "Recognition" }),
      /* @__PURE__ */ jsx4("p", { children: "Encore Award - For exceptional contribution to a high-impact, time-sensitive project" }),
      /* @__PURE__ */ jsx4("p", { children: "Pendo Partner Certification - Software management platform expertise" })
    ] })
  ] })
] }) }) }) });
var About_default = About;

// src/components/Hero.jsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var Hero = () => /* @__PURE__ */ jsxs5("section", { className: "hero", children: [
  /* @__PURE__ */ jsxs5("div", { className: "hero-content", children: [
    /* @__PURE__ */ jsxs5("h1", { className: "hero-title", children: [
      "Hello,",
      /* @__PURE__ */ jsx5("br", {}),
      "I'm Rebecca Weir.",
      /* @__PURE__ */ jsx5("br", {}),
      "I'm a full-stack software engineer."
    ] }),
    /* @__PURE__ */ jsx5("p", { className: "hero-subtitle", children: "I\u2019ve spent the last 7+ years building scalable apps and leading teams at Medidata and Vimeo." }),
    /* @__PURE__ */ jsx5("p", { className: "hero-description", children: "I value clarity, innovation, and collaboration above all else. These ideals guide my approach to problem solving and engineering excellence." })
  ] }),
  /* @__PURE__ */ jsx5("img", { className: "hero-profile-pic", src: "images/profile_pic.png" })
] });
var Hero_default = Hero;

// src/App.jsx
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var Header = () => /* @__PURE__ */ jsx6("header", { className: "header", children: /* @__PURE__ */ jsxs6("nav", { className: "nav", children: [
  /* @__PURE__ */ jsx6("div", { className: "logo", children: "RW" }),
  /* @__PURE__ */ jsxs6("div", { className: "nav-links", children: [
    /* @__PURE__ */ jsx6("a", { href: "#work", children: "Work" }),
    /* @__PURE__ */ jsx6("a", { href: "#about", children: "About" }),
    /* @__PURE__ */ jsx6("a", { href: "#contact", children: "Contact" })
  ] })
] }) });
var Portfolio = () => /* @__PURE__ */ jsxs6("div", { className: "portfolio", children: [
  /* @__PURE__ */ jsx6(Header, {}),
  /* @__PURE__ */ jsx6(Hero_default, {}),
  /* @__PURE__ */ jsx6(Experience_default, {}),
  /* @__PURE__ */ jsx6(About_default, {}),
  /* @__PURE__ */ jsx6(Contact_default, {})
] });
var App_default = Portfolio;

// src/index.js
import { jsx as jsx7 } from "react/jsx-runtime";
var domNode = document.getElementById("root");
var root = createRoot(domNode);
root.render(/* @__PURE__ */ jsx7(App_default, {}));

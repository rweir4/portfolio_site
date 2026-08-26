// src/index.js
import { createRoot } from "react-dom/client";

// src/components/Experience.jsx
import { useState } from "react";

// src/components/BulletPoint.jsx
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var BulletPoint = ({ bulletPoint, isExpanded, setExpandedBullet }) => {
  const { title, expandedBody } = bulletPoint;
  const toggle = () => setExpandedBullet(isExpanded ? null : title);
  return /* @__PURE__ */ jsxs("div", { className: "bl-item", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: toggle,
        "aria-expanded": isExpanded,
        className: "bl-summary",
        children: [
          /* @__PURE__ */ jsx("span", { className: "bl-marker", "aria-hidden": "true", children: isExpanded ? "\u2013" : "+" }),
          /* @__PURE__ */ jsx("span", { className: "bl-title", children: title })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `grid transition-all duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
        children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "bl-body", children: expandedBody }) })
      }
    )
  ] });
};
var BulletPoint_default = BulletPoint;

// src/components/BulletList.jsx
import { jsx as jsx2 } from "react/jsx-runtime";
var BulletList = ({ bullets, expandedBullet, setExpandedBullet }) => bullets.map((bullet) => /* @__PURE__ */ jsx2(
  BulletPoint_default,
  {
    bulletPoint: bullet,
    isExpanded: expandedBullet === bullet.title,
    setExpandedBullet
  },
  bullet.title
));
var BulletList_default = BulletList;

// src/experienceSeed.js
var EXPERIENCES = [
  {
    title: "Senior Fullstack Engineer",
    company: "Agile 6",
    period: "2025-Present",
    location: "Remote",
    highlights: [
      {
        title: "Payment History Modernization",
        expandedBody: "Revived a two-year-stalled Payment History and Medical Copays modernization, redefining architecture for fresher payment data and legacy compatibility."
      },
      {
        title: "Hardship Suspension Workflow",
        expandedBody: "Built and launched hardship suspension workflow in React/JavaScript and Ruby on Rails for an urgent stakeholder deadline; led feature-flagged canary rollout through full release with zero production incidents."
      },
      {
        title: "Pay.gov Integration",
        expandedBody: "Technical lead for planned Pay.gov integration, defining secure service handoffs and data-freshness rules to keep debt resolution within VA.gov."
      },
      {
        title: "Security Vulnerability Remediation",
        expandedBody: "Identified and remediated critical security vulnerability in frontend-generated JSON used for backend database writes."
      },
      {
        title: "Encrypted Email Delivery",
        expandedBody: "Reworked Sidekiq email delivery to replace timeout-prone cached PII with Lockbox encryption, removing sensitive data from job metadata and eliminating delivery failures."
      },
      {
        title: "Engineering Standards",
        expandedBody: "Raised team engineering standards through ADRs, design reviews, pairing, and feature-flagged releases, improving how work moved from technical planning through to production."
      }
    ]
  },
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
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var ProjectHighlight = ({ title, company, period, description, tech }) => {
  return /* @__PURE__ */ jsxs2("div", { className: "project-highlight", children: [
    /* @__PURE__ */ jsxs2("div", { className: "project-header", children: [
      /* @__PURE__ */ jsx3("h3", { className: "project-title", children: title }),
      /* @__PURE__ */ jsxs2("div", { className: "project-meta", children: [
        /* @__PURE__ */ jsx3("span", { className: "company", children: company }),
        /* @__PURE__ */ jsx3("span", { className: "period", children: period })
      ] })
    ] }),
    /* @__PURE__ */ jsx3("p", { className: "project-description", children: description }),
    /* @__PURE__ */ jsx3("div", { className: "tech-stack", children: tech.map((technology, index) => /* @__PURE__ */ jsx3("span", { className: "tech-tag", children: technology }, index)) })
  ] });
};
var Experience = () => {
  const [expandedBullet, setExpandedBullet] = useState(null);
  return /* @__PURE__ */ jsx3("section", { id: "work", className: "experience", children: /* @__PURE__ */ jsxs2("div", { className: "container", children: [
    /* @__PURE__ */ jsxs2("div", { className: "section-head", children: [
      /* @__PURE__ */ jsx3("span", { className: "eyebrow", children: "Selected work" }),
      /* @__PURE__ */ jsx3("h2", { className: "section-title", children: "More from My Desk" })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "project-highlights", children: [
      /* @__PURE__ */ jsx3(
        ProjectHighlight,
        {
          title: "Clinical Trial Authorization System",
          company: "Medidata Solutions",
          period: "2024-2025",
          description: "Led the complete redesign of authorization logic for clinical trial organizations, creating a dynamic navigation system that serves multiple user roles and study categories.",
          tech: ["PostgreSQL", "Ruby on Rails", "JavaScript", "React-Redux"]
        }
      ),
      /* @__PURE__ */ jsx3(
        ProjectHighlight,
        {
          title: "Subscription State Machine for 13M+ Users",
          company: "Vimeo",
          period: "2021-2022",
          description: "Completely redesigned Vimeo's subscription system architecture, implementing a robust state machine to handle complex subscription events and transitions. This system now serves over 13 million users with improved consistency and reliability.",
          tech: ["Ruby on Rails", "PostgreSQL", "State Machines"]
        }
      ),
      /* @__PURE__ */ jsx3(
        ProjectHighlight,
        {
          title: "eCOA Questionnaire Horizontal Layouts",
          company: "Medidata Solutions",
          period: "2018-2021",
          description: "Tech led the development of a comprehensive questionnaire template system for electronic Clinical Outcome Assessments, managing 50+ JIRA tickets and achieving 100% code coverage. Built complex form logic and conditional branching for patient workflows.",
          tech: ["TypeScript", "JavaScript", "Cypress", "Jest"]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "section-head", id: "experience", children: [
      /* @__PURE__ */ jsx3("span", { className: "eyebrow", children: "Timeline" }),
      /* @__PURE__ */ jsx3("h2", { className: "section-title", children: "Full Work History" })
    ] }),
    /* @__PURE__ */ jsx3("div", { className: "timeline", children: EXPERIENCES.map((exp, index) => /* @__PURE__ */ jsxs2("div", { className: "tl-item", children: [
      /* @__PURE__ */ jsxs2("div", { className: "tl-idx", children: [
        String(index + 1).padStart(2, "0"),
        " / ",
        exp.period
      ] }),
      /* @__PURE__ */ jsx3("h3", { className: "tl-role", children: exp.title }),
      /* @__PURE__ */ jsxs2("div", { className: "tl-co", children: [
        exp.company,
        " ",
        /* @__PURE__ */ jsx3("span", { className: "dot", children: "\u25C6" }),
        " ",
        exp.location
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "tl-bullets", children: /* @__PURE__ */ jsx3(
        BulletList_default,
        {
          bullets: exp.highlights,
          expandedBullet,
          setExpandedBullet
        }
      ) })
    ] }, index)) })
  ] }) });
};
var Experience_default = Experience;

// src/components/Contact.jsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Contact = () => /* @__PURE__ */ jsx4("section", { id: "contact", className: "contact", children: /* @__PURE__ */ jsxs3("div", { className: "container", children: [
  /* @__PURE__ */ jsxs3("div", { className: "section-head", children: [
    /* @__PURE__ */ jsx4("span", { className: "eyebrow", children: "Contact" }),
    /* @__PURE__ */ jsx4("h2", { className: "section-title", children: "Let's Connect" })
  ] }),
  /* @__PURE__ */ jsxs3("div", { className: "contact-content", children: [
    /* @__PURE__ */ jsx4("p", { className: "contact-description", children: "I'm always interested in discussing new opportunities, innovative projects, or just chatting about technology." }),
    /* @__PURE__ */ jsxs3("div", { className: "contact-links", children: [
      /* @__PURE__ */ jsx4("a", { href: "mailto:rebeccaweir12@gmail.com", className: "contact-link primary", children: "rebeccaweir12@gmail.com" }),
      /* @__PURE__ */ jsx4("a", { href: "https://www.linkedin.com/in/rebeccalweir/", className: "contact-link", target: "_blank", rel: "noopener noreferrer", children: "LinkedIn Profile" }),
      /* @__PURE__ */ jsx4("a", { href: "https://github.com/rweir4", className: "contact-link", target: "_blank", rel: "noopener noreferrer", children: "Github Profile" })
    ] })
  ] })
] }) });
var Contact_default = Contact;

// src/components/Research.jsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var PAPERS = [
  {
    title: "Sequential Dynamics of Stearoyl-CoA Desaturase-1 (SCD1)/Ligand Binding and Unbinding Mechanism: A Computational Study",
    journal: "Biomolecules",
    year: "2021",
    link: "https://doi.org/10.3390/biom11101435"
  },
  {
    title: "The quinic acid derivative KZ-41 prevents glucose-induced caspase-3 activation in retinal endothelial cells through an IGF-1 receptor dependent mechanism",
    journal: "PLOS ONE",
    year: "2017",
    link: "https://doi.org/10.1371/journal.pone.0180808"
  },
  {
    title: "Ensemble-based docking: From hit discovery to metabolism and toxicity predictions",
    journal: "Bioorganic & Medicinal Chemistry",
    year: "2016",
    link: "https://doi.org/10.1016/j.bmc.2016.07.064"
  }
];
var Research = () => /* @__PURE__ */ jsxs4("div", { className: "research", children: [
  /* @__PURE__ */ jsx5("h3", { children: "Published Research" }),
  /* @__PURE__ */ jsx5("div", { className: "pub-grid", children: PAPERS.map(({ title, journal, year, link }) => /* @__PURE__ */ jsxs4("div", { className: "pub", children: [
    /* @__PURE__ */ jsxs4("p", { className: "pub-meta", children: [
      journal,
      " \xB7 ",
      year
    ] }),
    /* @__PURE__ */ jsx5("p", { className: "pub-title", children: title }),
    /* @__PURE__ */ jsx5(
      "a",
      {
        className: "pub-link",
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Read the paper \u2192"
      }
    )
  ] }, link)) })
] });
var Research_default = Research;

// src/components/About.jsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var About = () => /* @__PURE__ */ jsx6("section", { id: "about", className: "about", children: /* @__PURE__ */ jsx6("div", { className: "container", children: /* @__PURE__ */ jsxs5("div", { className: "about-content", children: [
  /* @__PURE__ */ jsxs5("div", { className: "about-text", children: [
    /* @__PURE__ */ jsxs5("div", { className: "section-head", children: [
      /* @__PURE__ */ jsx6("span", { className: "eyebrow", children: "Profile" }),
      /* @__PURE__ */ jsx6("h2", { className: "section-title", children: "About Rebecca" })
    ] }),
    /* @__PURE__ */ jsx6("p", { children: "I'm a software engineer with 8+ years of experience building scalable, user-focused applications. I've had the privilege of working at innovative companies like Medidata Solutions, Vimeo, and now Agile 6, where I've led teams, mentored engineers, and delivered systems that serve millions of users. I'm passionate about clean architecture, performance optimization, and creating technology that makes a real difference." }),
    /* @__PURE__ */ jsx6("p", { children: "Studying Molecular Biophysics at the University of Tennessee taught me how to look at complex systems through both a scientific and computational lens. In the lab, I learned how to break down intricate biological processes into models and experiments. Today, I apply that same approach to engineering\u2014dissecting problems, identifying patterns, and building solutions that work at scale. It\u2019s a perspective that helps me bring both rigor and creativity to technical challenges." })
  ] }),
  /* @__PURE__ */ jsxs5("div", { className: "credentials", children: [
    /* @__PURE__ */ jsxs5("div", { className: "education", children: [
      /* @__PURE__ */ jsx6("h3", { children: "Education" }),
      /* @__PURE__ */ jsx6("p", { children: "Bachelor of Science in Biochemistry And Cellular And Molecular Biology" }),
      /* @__PURE__ */ jsx6("p", { children: "University of Tennessee, Knoxville, TN" })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "awards", children: [
      /* @__PURE__ */ jsx6("h3", { children: "Recognition" }),
      /* @__PURE__ */ jsx6("p", { children: "Encore Award - For exceptional contribution to a high-impact, time-sensitive project" }),
      /* @__PURE__ */ jsx6("p", { children: "Pendo Partner Certification - Software management platform expertise" })
    ] }),
    /* @__PURE__ */ jsx6(Research_default, {})
  ] })
] }) }) });
var About_default = About;

// src/components/ChatbotWidget.jsx
import { useState as useState2, useRef, useEffect } from "react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var MessageBubble = ({ message }) => {
  const isUser = message.role === "user";
  return /* @__PURE__ */ jsx7("div", { className: `flex ${isUser ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxs6("div", { className: `max-w-[80%] ${isUser ? "bg-[var(--rweir-brand)] text-white" : "bg-white text-gray-800"} rounded-2xl px-4 py-2 shadow-sm`, children: [
    /* @__PURE__ */ jsx7("p", { className: "text-sm whitespace-pre-wrap", children: message.content }),
    message.sources && message.sources.length > 0 && /* @__PURE__ */ jsx7(SourcesList, { sources: message.sources }),
    message.tokens != null && message.cost != null && /* @__PURE__ */ jsxs6("p", { className: "text-xs text-gray-500 mt-1", children: [
      message.tokens,
      " tokens \xB7 $",
      message.cost.toFixed(4)
    ] })
  ] }) });
};
var SourcesList = ({ sources }) => /* @__PURE__ */ jsxs6("details", { className: "mt-2 pt-2 border-t border-gray-200", children: [
  /* @__PURE__ */ jsxs6("summary", { className: "text-xs text-gray-600 cursor-pointer hover:text-gray-800", children: [
    "Sources (",
    sources.length,
    ")"
  ] }),
  /* @__PURE__ */ jsx7("div", { className: "mt-2 space-y-1", children: sources.map((source, i) => /* @__PURE__ */ jsxs6("div", { className: "text-xs bg-gray-50 p-2 rounded", children: [
    /* @__PURE__ */ jsx7("p", { className: "font-medium text-gray-700", children: source.source }),
    /* @__PURE__ */ jsx7("p", { className: "text-gray-600 mt-1", children: source.content }),
    /* @__PURE__ */ jsxs6("p", { className: "text-gray-500 mt-1", children: [
      "Relevance: ",
      (source.relevance_score * 100).toFixed(0),
      "%"
    ] })
  ] }, i)) })
] });
var ChatHeader = ({ onClose }) => /* @__PURE__ */ jsxs6("div", { className: "bg-gradient-to-r from-[var(--rweir-brand)] to-[#0A565E] text-white p-4 flex items-center justify-between", children: [
  /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsx7("div", { className: "w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30", children: /* @__PURE__ */ jsx7("img", { src: "images/profile_pic.png", alt: "Profile", className: "w-full h-full object-cover" }) }),
    /* @__PURE__ */ jsxs6("div", { children: [
      /* @__PURE__ */ jsx7("h3", { className: "font-semibold", children: "Ask About Me" }),
      /* @__PURE__ */ jsx7("p", { className: "text-xs text-white/70", children: "Powered by Claude" })
    ] })
  ] }),
  /* @__PURE__ */ jsx7("button", { onClick: onClose, className: "text-white/80 hover:text-white transition-colors", "aria-label": "Close chat", children: /* @__PURE__ */ jsx7("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx7("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })
] });
var ChatInput = ({ value, onChange, onSend, isLoading }) => /* @__PURE__ */ jsx7("div", { className: "p-4 bg-white border-t border-gray-200", children: /* @__PURE__ */ jsxs6("div", { className: "flex gap-2", children: [
  /* @__PURE__ */ jsx7(
    "input",
    {
      type: "text",
      value,
      onChange: (e) => onChange(e.target.value),
      onKeyDown: (e) => e.key === "Enter" && onSend(),
      placeholder: "Ask a question...",
      disabled: isLoading,
      className: "flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--rweir-brand)] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
    }
  ),
  /* @__PURE__ */ jsx7(
    "button",
    {
      onClick: onSend,
      "aria-label": "Send message",
      disabled: isLoading || !value.trim(),
      className: "bg-[var(--rweir-brand)] text-white px-6 py-2 rounded-full hover:bg-[color-mix(in_srgb,var(--rweir-brand)_90%,transparent)] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2",
      children: /* @__PURE__ */ jsx7("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx7("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) })
    }
  )
] }) });
var ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState2(false);
  const [messages, setMessages] = useState2([]);
  const [input, setInput] = useState2("");
  const [isLoading, setIsLoading] = useState2(false);
  const [showTooltip, setShowTooltip] = useState2(true);
  const [error, setError] = useState2(null);
  const messagesEndRef = useRef(null);
  const API_URL = "https://mybot-production-e727.up.railway.app";
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await response.json();
      if (!response.ok) {
        setError(response.status === 429 ? "Rate limit reached. Please try again later." : data.detail || "Something went wrong");
        return;
      }
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: data.answer,
        sources: data.sources,
        tokens: data.tokens_used,
        cost: data.estimated_cost
      }]);
    } catch (err) {
      setError("Failed to connect to the API. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs6("div", { className: "fixed bottom-8 md:right-8 z-50", children: [
    !isOpen && /* @__PURE__ */ jsx7("div", { className: "fixed bottom-8 right-8", children: /* @__PURE__ */ jsxs6("button", { onClick: () => {
      setIsOpen(true);
      setShowTooltip(false);
    }, className: "relative group", "aria-label": "Open chat", children: [
      /* @__PURE__ */ jsx7("div", { className: "w-16 h-16 rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ring-2 ring-[rgba(12,107,117,0.25)] hover:ring-[rgba(12,107,117,0.5)]", children: /* @__PURE__ */ jsx7("img", { src: "images/chat.png", alt: "Chat", className: "max-w-full max-h-full object-contain" }) }),
      showTooltip && /* @__PURE__ */ jsx7("div", { className: "absolute bottom-full right-0 mb-4 animate-pulse", children: /* @__PURE__ */ jsxs6("div", { className: "bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg", children: [
        "ask about me",
        /* @__PURE__ */ jsx7("div", { className: "absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900" })
      ] }) })
    ] }) }),
    isOpen && /* @__PURE__ */ jsxs6("div", { className: "bg-white rounded-2xl shadow-2xl w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-2rem)] flex flex-col overflow-hidden border border-gray-200", children: [
      /* @__PURE__ */ jsx7(ChatHeader, { onClose: () => setIsOpen(false) }),
      /* @__PURE__ */ jsxs6("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50", children: [
        messages.length === 0 && /* @__PURE__ */ jsx7("div", { className: "text-center text-gray-500 mt-8", children: /* @__PURE__ */ jsx7("p", { className: "text-sm", children: "Ask me anything about my background, research, or interests!" }) }),
        messages.map((msg, idx) => /* @__PURE__ */ jsx7(MessageBubble, { message: msg }, idx)),
        isLoading && /* @__PURE__ */ jsx7("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx7("div", { className: "bg-white rounded-2xl px-4 py-3 shadow-sm", children: /* @__PURE__ */ jsxs6("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsx7("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" }),
          /* @__PURE__ */ jsx7("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.1s" } }),
          /* @__PURE__ */ jsx7("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.2s" } })
        ] }) }) }),
        error && /* @__PURE__ */ jsx7("div", { className: "bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-800", children: error }),
        /* @__PURE__ */ jsx7("div", { ref: messagesEndRef })
      ] }),
      /* @__PURE__ */ jsx7(ChatInput, { value: input, onChange: setInput, onSend: handleSend, isLoading })
    ] })
  ] });
};
var ChatbotWidget_default = ChatbotWidget;

// src/components/Hero.jsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var READOUT = [
  { num: "8+", lab: "Years shipping" },
  { num: "13M+", lab: "Vimeo users served" },
  { num: "VA.gov", lab: "Currently building" }
];
var Hero = () => /* @__PURE__ */ jsxs7("section", { className: "hero", children: [
  /* @__PURE__ */ jsxs7("div", { className: "hero-inner", children: [
    /* @__PURE__ */ jsxs7("div", { className: "hero-main", children: [
      /* @__PURE__ */ jsx8("span", { className: "eyebrow rise d1", children: "Senior Full-Stack Engineer \xB7 Since 2017" }),
      /* @__PURE__ */ jsx8("h1", { className: "hero-title rise d2", children: "Rebecca Weir" }),
      /* @__PURE__ */ jsxs7("p", { className: "hero-thesis rise d3", children: [
        "I build software the way I once characterized molecules \u2014 by studying its behavior, defining clear boundaries, and ",
        /* @__PURE__ */ jsx8("em", { children: "designing systems that hold together." })
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "hero-cta rise d4", children: [
        /* @__PURE__ */ jsx8("a", { href: "#contact", className: "btn btn-solid", children: "Get in touch" }),
        /* @__PURE__ */ jsx8("a", { href: "#work", className: "btn btn-ghost", children: "View selected work" })
      ] }),
      /* @__PURE__ */ jsx8("div", { className: "readout glass rise d4", children: READOUT.map(({ num, lab }) => /* @__PURE__ */ jsxs7("div", { className: "cell", children: [
        /* @__PURE__ */ jsx8("span", { className: "num", children: num }),
        /* @__PURE__ */ jsx8("span", { className: "lab", children: lab })
      ] }, lab)) })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "hero-figure rise d3", children: [
      /* @__PURE__ */ jsx8("div", { className: "key", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs7("div", { className: "frame", children: [
        /* @__PURE__ */ jsx8("img", { src: "images/profile_pic.png", alt: "Rebecca Weir" }),
        /* @__PURE__ */ jsx8("span", { className: "cap", children: "Fig. 1 \u2014 R. Weir" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsx8(ChatbotWidget_default, {})
] });
var Hero_default = Hero;

// src/components/AIChatBotShowcase.jsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var ProjectCard = ({ category }) => /* @__PURE__ */ jsxs8("div", { className: "showcase-card flex flex-1 flex-col sm:flex-row gap-4", children: [
  /* @__PURE__ */ jsx9("img", { src: `images/${category.icon}`, className: "h-24 w-24 object-contain sm:mx-0 sm:h-20 sm:w-auto" }),
  /* @__PURE__ */ jsxs8("div", { children: [
    /* @__PURE__ */ jsx9("h3", { className: "project-title", children: category.title }),
    /* @__PURE__ */ jsx9("div", { children: category.tooltipContent?.map((info) => /* @__PURE__ */ jsx9("p", { children: info }, info)) })
  ] })
] });
var AIChatBotShowcase = ({ projectInfo, title }) => /* @__PURE__ */ jsxs8("div", { className: "project-showcase", children: [
  /* @__PURE__ */ jsxs8("div", { className: "section-head", children: [
    /* @__PURE__ */ jsx9("span", { className: "eyebrow", children: "Under the hood" }),
    /* @__PURE__ */ jsx9("h2", { className: "section-title", children: title }),
    /* @__PURE__ */ jsx9(
      "a",
      {
        className: "repo-link",
        href: "https://github.com/rweir4/mybot",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "View on GitHub \u2192"
      }
    )
  ] }),
  /* @__PURE__ */ jsx9("div", { className: "project-highlight flex flex-col sm:flex-row gap-8", children: projectInfo.map((category) => /* @__PURE__ */ jsx9(ProjectCard, { category }, category.title)) })
] });
var AIChatBotShowcase_default = AIChatBotShowcase;

// src/components/CartridgeShowcase.jsx
import { useState as useState3 } from "react";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var screenshots = [
  { src: "images/cartridge-home.png", caption: "Home dashboard" },
  { src: "images/cartridge-library.png", caption: "Game library" },
  { src: "images/cartridge-detail.png", caption: "Game detail" },
  { src: "images/cartridge-log.png", caption: "Log & rate" },
  { src: "images/cartridge-profile.png", caption: "Profile & stats" }
];
var highlights = [
  "Built a full-stack mobile app that lets users search games via IGDB, log play status, leave ratings and reviews, and track library stats over time.",
  "Designed a Supabase backend with row-level security covering library entries, ratings, and user profiles.",
  "Architected a custom hook layer decoupling data-fetching from the UI with optimistic refetch patterns.",
  "Wrote a comprehensive test suite using Jest and React Native Testing Library across all hooks, components, and page flows."
];
var techStack = [
  "React Native",
  "Expo",
  "TypeScript",
  "Supabase",
  "IGDB API",
  "NativeWind",
  "Expo Router",
  "Jest",
  "React Native Testing Library"
];
var ScreenshotCarousel = () => {
  const [index, setIndex] = useState3(0);
  const [fading, setFading] = useState3(false);
  const go = (next2) => {
    setFading(true);
    setTimeout(() => {
      setIndex(next2);
      setFading(false);
    }, 150);
  };
  const prev = () => go((index - 1 + screenshots.length) % screenshots.length);
  const next = () => go((index + 1) % screenshots.length);
  return /* @__PURE__ */ jsxs9("div", { className: "mt-10 md:mt-0 shrink-0 flex flex-col items-center gap-5", children: [
    /* @__PURE__ */ jsx10("div", { className: "w-56 h-[480px] shrink-0", children: /* @__PURE__ */ jsx10(
      "img",
      {
        src: screenshots[index].src,
        alt: screenshots[index].caption,
        className: "w-full h-full object-cover rounded-3xl border border-[var(--line)] shadow-2xl transition-opacity duration-150",
        style: { opacity: fading ? 0 : 1 }
      }
    ) }),
    /* @__PURE__ */ jsx10("span", { className: "text-[var(--meta)] text-sm font-medium", style: { fontFamily: "var(--mono)" }, children: screenshots[index].caption }),
    /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx10("button", { onClick: prev, "aria-label": "Previous screenshot", className: "w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--petrol)] hover:bg-[rgba(12,107,117,0.08)] transition-colors", children: "\u2190" }),
      /* @__PURE__ */ jsx10("div", { className: "flex gap-2 items-center", children: screenshots.map((_, i) => /* @__PURE__ */ jsx10(
        "button",
        {
          onClick: () => setIndex(i),
          "aria-label": `Go to screenshot ${i + 1}`,
          className: `h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${i === index ? "w-5 bg-[var(--petrol)]" : "w-2 bg-[var(--line)]"}`
        },
        i
      )) }),
      /* @__PURE__ */ jsx10("button", { onClick: next, "aria-label": "Next screenshot", className: "w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--petrol)] hover:bg-[rgba(12,107,117,0.08)] transition-colors", children: "\u2192" })
    ] })
  ] });
};
var CartridgeShowcase = () => /* @__PURE__ */ jsx10("section", { className: "cartridge", children: /* @__PURE__ */ jsxs9("div", { className: "container", children: [
  /* @__PURE__ */ jsx10("div", { className: "section-head", children: /* @__PURE__ */ jsx10("span", { className: "eyebrow", children: "Side project" }) }),
  /* @__PURE__ */ jsx10("div", { className: "cartridge-card", children: /* @__PURE__ */ jsxs9("div", { className: "flex flex-col md:flex-row items-center gap-8 p-6 md:p-14", children: [
    /* @__PURE__ */ jsxs9("div", { className: "flex-1 pr-0 md:pr-8", children: [
      /* @__PURE__ */ jsxs9("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx10("h2", { className: "section-title", style: { marginTop: 0 }, children: "Cartridge \u2014 Mobile App" }),
        /* @__PURE__ */ jsx10("h3", { className: "text-2xl md:text-3xl font-semibold text-[var(--ink)] mt-2 mb-1", style: { fontFamily: "var(--serif)" }, children: "Goodreads for Gamers" }),
        /* @__PURE__ */ jsx10("p", { className: "text-[var(--muted)] text-lg", style: { fontFamily: "var(--mono)", fontSize: ".85rem", letterSpacing: ".03em" }, children: "Mobile Game Logging App \xB7 Personal Project" })
      ] }),
      /* @__PURE__ */ jsx10("ul", { className: "list-none space-y-4 mb-6", children: highlights.map((highlight) => /* @__PURE__ */ jsx10("li", { className: "text-[var(--muted)] leading-relaxed pl-6 relative before:content-['\u2192'] before:absolute before:left-0 before:text-[var(--petrol)] before:font-bold", children: highlight }, highlight)) }),
      /* @__PURE__ */ jsx10("div", { className: "flex flex-wrap gap-2", children: techStack.map((tech) => /* @__PURE__ */ jsx10("span", { className: "chip", children: tech }, tech)) }),
      /* @__PURE__ */ jsx10(
        "a",
        {
          className: "repo-link",
          href: "https://github.com/rweir4/cartridge",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "View on GitHub \u2192"
        }
      )
    ] }),
    /* @__PURE__ */ jsx10(ScreenshotCarousel, {})
  ] }) })
] }) });
var CartridgeShowcase_default = CartridgeShowcase;

// src/components/CurrentRole.jsx
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var CurrentRole = () => /* @__PURE__ */ jsx11("section", { id: "current", className: "current-role", children: /* @__PURE__ */ jsxs10("div", { className: "container", children: [
  /* @__PURE__ */ jsxs10("div", { className: "section-head", children: [
    /* @__PURE__ */ jsx11("span", { className: "eyebrow", children: "Now" }),
    /* @__PURE__ */ jsx11("h2", { className: "section-title", children: "Currently" })
  ] }),
  /* @__PURE__ */ jsxs10("div", { className: "current-role-card glass", children: [
    /* @__PURE__ */ jsxs10("div", { className: "current-role-header", children: [
      /* @__PURE__ */ jsxs10("div", { children: [
        /* @__PURE__ */ jsx11("h3", { className: "current-role-title", children: "Senior Fullstack Engineer" }),
        /* @__PURE__ */ jsx11("span", { className: "current-role-meta", children: "Agile 6" })
      ] }),
      /* @__PURE__ */ jsx11("div", { className: "exp-period", children: "2025\u2013Present" })
    ] }),
    /* @__PURE__ */ jsxs10("p", { className: "current-role-body", children: [
      "I'm a Senior Fullstack Engineer at Agile 6, building large-scale financial applications for VA.gov. My work spans the full stack \u2014 from",
      " ",
      /* @__PURE__ */ jsx11("strong", { children: "architecture" }),
      " (API contracts, migration strategies, and technical design that guides the team's implementation) to hands-on",
      " ",
      /* @__PURE__ */ jsx11("strong", { children: "frontend development" }),
      ", modernizing data models and the interfaces that serve millions of Veterans \u2014 with a constant focus on",
      " ",
      /* @__PURE__ */ jsx11("strong", { children: "privacy, security, and reliability" }),
      "."
    ] })
  ] })
] }) });
var CurrentRole_default = CurrentRole;

// src/constants.js
var CHATBOX_INFO = [
  {
    id: "rag",
    icon: "plumbing.png",
    title: "Optimized RAG Pipeline",
    offset: false,
    tooltipContent: [
      "1000-char chunks with 200-char overlap for context preservation",
      "Retrieves top 5 chunks (~1500 tokens of context)",
      "Pinecone managed vector database",
      "LangChain orchestration framework",
      "OpenAI text-embedding-3-small (<$0.01 ingestion cost)",
      "Idempotent upsert with orphan cleanup for data consistency"
    ]
  },
  {
    id: "stack",
    icon: "algorithm.png",
    title: "Production-Grade Stack",
    offset: true,
    tooltipContent: [
      "FastAPI + Python 3.11 backend framework",
      "Claude (Anthropic) as the LLM",
      "TypedDict for strong typing throughout codebase",
      "Singleton pattern with lazy initialization for RAG engine",
      "Atomic file writes with temp files for logger reliability",
      "Deployed on Railway for scalability"
    ]
  },
  {
    id: "cost",
    icon: "money.png",
    title: "Smart Cost Management",
    offset: false,
    tooltipContent: [
      "$5 daily cap with auto-shutoff protection",
      "30 requests/hour global rate limiting",
      "~$0.01-0.02 per query average cost",
      "Claude pricing: $3/M input, $15/M output tokens",
      "API_ENABLED environment variable kill switch",
      "Max 4K output tokens per request for cost control"
    ]
  }
];
var CHATBOX_TITLE = "AI Portfolio Assistant";

// src/App.jsx
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var Header = () => /* @__PURE__ */ jsx12("header", { className: "header", children: /* @__PURE__ */ jsx12("div", { className: "container", children: /* @__PURE__ */ jsxs11("div", { className: "nav-in glass", children: [
  /* @__PURE__ */ jsxs11("a", { href: "#top", className: "wordmark", children: [
    "Rebecca ",
    /* @__PURE__ */ jsx12("b", { children: "Weir" }),
    /* @__PURE__ */ jsx12("span", { className: "wordmark-role", children: "Senior Fullstack Software Engineer" })
  ] }),
  /* @__PURE__ */ jsxs11("nav", { className: "nav-links", children: [
    /* @__PURE__ */ jsx12("a", { href: "#work", children: "Work" }),
    /* @__PURE__ */ jsx12("a", { href: "#about", children: "About" }),
    /* @__PURE__ */ jsx12("a", { href: "#contact", className: "nav-cta", children: "Get in touch" })
  ] })
] }) }) });
var Portfolio = () => /* @__PURE__ */ jsxs11("div", { className: "portfolio", id: "top", children: [
  /* @__PURE__ */ jsx12("div", { className: "site-bg", "aria-hidden": "true" }),
  /* @__PURE__ */ jsx12(Header, {}),
  /* @__PURE__ */ jsx12(Hero_default, {}),
  /* @__PURE__ */ jsx12(CurrentRole_default, {}),
  /* @__PURE__ */ jsx12(Experience_default, {}),
  /* @__PURE__ */ jsx12(AIChatBotShowcase_default, { projectInfo: CHATBOX_INFO, title: CHATBOX_TITLE }),
  /* @__PURE__ */ jsx12(CartridgeShowcase_default, {}),
  /* @__PURE__ */ jsx12(About_default, {}),
  /* @__PURE__ */ jsx12(Contact_default, {})
] });
var App_default = Portfolio;

// src/index.js
import { jsx as jsx13 } from "react/jsx-runtime";
var domNode = document.getElementById("root");
var root = createRoot(domNode);
root.render(/* @__PURE__ */ jsx13(App_default, {}));

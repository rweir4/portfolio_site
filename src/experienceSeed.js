export const EXPERIENCES = [
  {
    title: "Senior Fullstack Engineer",
    company: "Agile 6",
    period: "2025-Present",
    location: "Remote",
    highlights: [
      {
        title: "VA.gov Financial Applications",
        expandedBody: "Building large-scale financial applications for VA.gov as part of a distributed team, spanning the full stack from technical design through delivery."
      },
      {
        title: "Technical Leadership",
        expandedBody: "Tech lead on a large initiative as well as on smaller efforts, setting technical direction and carrying work from design through delivery."
      },
      {
        title: "Architecture and API Contracts",
        expandedBody: "Own architectural direction across API contracts, migration strategies, and technical design documents that guide the team's implementation."
      },
      {
        title: "Data Model Modernization",
        expandedBody: "Modernizing legacy data models and the frontend interfaces built on them, serving millions of Veterans."
      },
      {
        title: "Privacy, Security, and Reliability",
        expandedBody: "Work under a constant focus on privacy, security, and reliability given the sensitivity of Veteran financial data."
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
        expandedBody:  "Fixed bugs related to asynchronous responses from external vendor integrations with In-App Purchases by leveraging Datadog."
      },
      {
        title: "User Account Settings",
        expandedBody:  "Migrated legacy Haml to React framework in user account settings, improving code coverage to 100%.",
      },
      {
        title: "Stripe Support",
        expandedBody:  "Added Stripe integration support for complex transaction flows such as reduced-cost product processing."
      },
      {
        title: "Video Player Experience",
        expandedBody:  "Refactored video player experience workflow to accommodate differentiated user access levels and enhance personalization and security."
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

// Peer-reviewed publications, reverse-chronological. Metadata verified against
// Crossref. This is seed data for the assistant - the Research card renders its
// own copy, so changing one does not change the other.
export const PUBLICATIONS = [
  {
    title: "Sequential Dynamics of Stearoyl-CoA Desaturase-1 (SCD1)/Ligand Binding and Unbinding Mechanism: A Computational Study",
    journal: "Biomolecules",
    year: "2021",
    doi: "10.3390/biom11101435",
    link: "https://doi.org/10.3390/biom11101435",
    authors: "Anna B. Petroff, Rebecca L. Weir, Charles R. Yates, Joseph D. Ng, Jerome Baudry"
  },
  {
    title: "The quinic acid derivative KZ-41 prevents glucose-induced caspase-3 activation in retinal endothelial cells through an IGF-1 receptor dependent mechanism",
    journal: "PLOS ONE",
    year: "2017",
    doi: "10.1371/journal.pone.0180808",
    link: "https://doi.org/10.1371/journal.pone.0180808",
    authors: "Hui He, Rebecca L. Weir, Jordan J. Toutounchian, Jayaprakash Pagadala, Jena J. Steinle, Jerome Baudry, Duane D. Miller, Charles R. Yates"
  },
  {
    title: "Ensemble-based docking: From hit discovery to metabolism and toxicity predictions",
    journal: "Bioorganic & Medicinal Chemistry",
    year: "2016",
    doi: "10.1016/j.bmc.2016.07.064",
    link: "https://doi.org/10.1016/j.bmc.2016.07.064",
    authors: "Wilfredo Evangelista, Rebecca L. Weir, Sally R. Ellingson, Jason B. Harris, Karan Kapoor, Jeremy C. Smith, Jerome Baudry"
  }
];
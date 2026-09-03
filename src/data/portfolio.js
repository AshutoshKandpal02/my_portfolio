/**
 * Portfolio Data Source — Ashutosh Kandpal
 * 
 * NOTE FOR FUTURE UPDATES:
 * All portfolio information is centralized here.
 * Edit this file to update details, links, or achievements.
 */

export const personalDetails = {
  name: "Ashutosh Kandpal",
  location: "Delhi, India",
  role: "Software Developer",
  subRole: "Frontend-focused Developer",
  tagline: "Building thoughtful digital experiences.",
  heroSummary: "I'm Ashutosh Kandpal, a frontend-focused software developer specializing in React.js, responsive interfaces, and real-time web experiences.",
  currentCompany: "Creditor Academy / LMS Athena",
  currentCompanyShort: "Creditor Academy",
  employmentPeriod: "May 2025 – Present",
  email: "ashutoshkandpal240@gmail.com",
  linkedin: "https://linkedin.com/in/ashutosh-kandpal-b9b512198",
  github: "https://github.com/AshutoshKandpal02",
  // TODO: Place actual resume PDF in /public/resume.pdf
  resumePath: "/resume.pdf",
  aboutHeading: "I care about how things work and feel.",
  aboutText: [
    "I am a frontend-focused software developer dedicated to crafting responsive, high-performance web applications and seamless user interfaces. My work bridges design vision and frontend architecture, translating Figma and Adobe XD prototypes into reliable, production-ready components.",
    "Currently at Creditor Academy (LMS Athena), I focus on engineering real-time features using WebSockets and RESTful APIs, optimizing component rendering efficiency, and collaborating closely with backend teams to deliver intuitive LMS platform experiences."
  ],
  focusAreas: [
    "Frontend engineering",
    "UI/UX implementation",
    "Responsive web design",
    "Real-time applications",
    "API integration",
    "Attention to detail",
    "Building reliable interfaces"
  ]
};

export const heroCapabilities = [
  {
    title: "Frontend Development",
    shortKey: "React.js",
    description: "Building responsive, modular, and component-driven web interfaces using React.js and modern CSS architecture."
  },
  {
    title: "UI/UX Implementation",
    shortKey: "Figma → Code",
    description: "Turning complex Figma and Adobe XD design prototypes into pixel-perfect, production-ready functional interfaces."
  },
  {
    title: "Real-Time Applications",
    shortKey: "WebSockets",
    description: "Engineered real-time chat modules and live synchronization layers using WebSockets for instant user interaction."
  },
  {
    title: "API & Data Integration",
    shortKey: "REST APIs",
    description: "Integrating RESTful services, optimizing data fetching pipelines, and ensuring frontend rendering stability."
  }
];

export const currently = {
  building: "LMS platform features & real-time communication modules",
  company: "Creditor Academy / LMS Athena",
  role: "Software Developer",
  focus: "Frontend Engineering (React.js, WebSockets, REST APIs)",
  status: "Open to Frontend / React engineering opportunities"
};

export const engineeringApproach = [
  {
    step: "01",
    title: "Understand",
    summary: "Understand the problem, user requirements, and API constraints thoroughly before starting implementation."
  },
  {
    step: "02",
    title: "Design",
    summary: "Think through the user flow, interface requirements, and component hierarchy based on design prototypes."
  },
  {
    step: "03",
    title: "Build",
    summary: "Architect clean, modular, and reusable frontend components using React.js and production-grade CSS."
  },
  {
    step: "04",
    title: "Connect",
    summary: "Integrate RESTful APIs and WebSocket channels to enable seamless real-time data sync and state management."
  },
  {
    step: "05",
    title: "Refine",
    summary: "Audit responsive breakpoints, performance, edge cases, cross-browser stability, and touch accessibility."
  }
];

export const currentExperience = {
  company: "Creditor Academy / LMS Athena",
  role: "Software Developer",
  period: "May 2025 – Present",
  location: "India",
  overview: "Engineering scalable frontend interfaces and real-time communication modules for LMS Athena platform.",
  contributions: [
    {
      id: "realtime-chat",
      title: "Real-Time Chat Module",
      focusArea: "Real-Time Communication",
      problem: "Platform users required instant, reliable communication capabilities within the LMS interface.",
      contribution: "Engineered a dedicated real-time chat module utilizing WebSockets for instant user-to-user messaging.",
      technologies: ["React.js", "WebSockets", "REST APIs", "JavaScript"]
    },
    {
      id: "frontend-arch",
      title: "High-Performance Frontend Components",
      focusArea: "Frontend Engineering",
      problem: "Complex LMS platform screens needed smooth rendering across diverse desktop and mobile viewports.",
      contribution: "Architected and built responsive React.js UI components ensuring consistent, high-performance rendering.",
      technologies: ["React.js", "CSS3", "HTML5", "Responsive Design"]
    },
    {
      id: "api-sync",
      title: "Live API Data Synchronization",
      focusArea: "API & Data Integration",
      problem: "Frontend state needed to reflect live data updates while maintaining rendering stability.",
      contribution: "Implemented real-time data handling via RESTful APIs and collaborated with backend teams to optimize data pipelines.",
      technologies: ["RESTful APIs", "React Hooks", "Redux", "JavaScript"]
    },
    {
      id: "design-translation",
      title: "Design Prototype Translation",
      focusArea: "Design to Development",
      problem: "High-fidelity Figma and Adobe XD prototypes needed exact, pixel-perfect frontend implementation.",
      contribution: "Translated complex Figma and XD design prototypes into functional, maintainable UI components.",
      technologies: ["Figma", "Adobe XD", "Styled-components", "Tailwind CSS"]
    }
  ],
  allResponsibilities: [
    "Architect and engineer high-performance frontend components using React.js, ensuring responsive design across mobile and desktop devices.",
    "Engineered a real-time chat module within the LMS platform using WebSockets for instant user-to-user communication.",
    "Implemented real-time interface features through RESTful APIs to enable live data synchronization across the application.",
    "Translate complex Figma and Adobe XD design prototypes into functional, pixel-perfect UI components.",
    "Collaborate with backend teams to optimize API data handling, improving frontend rendering efficiency and application stability."
  ]
};

export const projects = [
  {
    id: "01",
    title: "Real-Time Expense Tracker",
    type: "Mobile & Real-Time Application",
    period: "July 2024 – September 2024",
    technologies: ["Flutter", "Firebase", "Razorpay"],
    description: "A comprehensive expense management application featuring real-time group expense syncing and integrated payment settlements.",
    highlights: [
      "Designed a clean and intuitive UI for seamless navigation and group expense management.",
      "Developed automatic syncing for real-time expense updates across group members using Firebase Realtime Database.",
      "Integrated Razorpay for secure settlement processing directly within the application interface."
    ],
    // TODO: Add real project screenshot path (e.g. "/images/projects/expense-tracker.png")
    image: null,
    githubUrl: null,
    liveUrl: null
  },
  {
    id: "02",
    title: "NGO and Waste Food Management",
    type: "Mobile Application",
    period: "November 2024",
    technologies: ["Flutter", "Firebase"],
    description: "A logistics-driven mobile interface connecting surplus food donors with local NGOs to reduce food wastage.",
    highlights: [
      "Built a mobile-first UI for connecting food donors with NGOs.",
      "Implemented real-time location tracking for efficient pick-ups.",
      "Implemented secure authentication for donors and NGO representatives.",
      "Developed donor-matching logic to optimize logistics and user interaction flows."
    ],
    // TODO: Add real project screenshot path
    image: null,
    githubUrl: null,
    liveUrl: null
  }
];

export const skillsWithContext = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", context: "Used professionally for building responsive LMS platform interfaces.", tag: "Professional" },
      { name: "JavaScript", context: "Core language used across professional and personal software development.", tag: "Core" },
      { name: "HTML5", context: "Used for structuring semantic web pages and components.", tag: "Core" },
      { name: "CSS3", context: "Used for crafting responsive layouts, animations, and custom styling.", tag: "Core" }
    ]
  },
  {
    category: "Development & Integration",
    items: [
      { name: "WebSockets", context: "Used professionally for engineering real-time chat & messaging features.", tag: "Professional" },
      { name: "RESTful APIs", context: "Used professionally for live interface data synchronization.", tag: "Professional" },
      { name: "Redux", context: "Used for managing complex application state in React projects.", tag: "Core" },
      { name: "React Hooks", context: "Used for modular component logic and state management.", tag: "Core" },
      { name: "Firebase", context: "Used in application projects for real-time database syncing & authentication.", tag: "Project" },
      { name: "Git & GitHub", context: "Used for source control, collaboration, and code maintenance.", tag: "Core" },
      { name: "VS Code", context: "Primary development environment and IDE.", tag: "Core" }
    ]
  },
  {
    category: "UI/UX & Design",
    items: [
      { name: "Figma", context: "Used for inspecting design prototypes and translating UI into code.", tag: "Core" },
      { name: "Adobe XD", context: "Used for analyzing UI component specs and interaction flows.", tag: "Core" },
      { name: "Styled-components", context: "Used for component-scoped styling in React applications.", tag: "Core" },
      { name: "Tailwind CSS", context: "Used for utility-first responsive layout building.", tag: "Core" },
      { name: "Responsive Design", context: "Core discipline for multi-breakpoint cross-device compatibility.", tag: "Core" },
      { name: "Component-driven Development", context: "Methodology for building isolated, reusable UI blocks.", tag: "Core" }
    ]
  },
  {
    category: "Programming Languages",
    items: [
      { name: "C++", context: "Programming language used for Data Structures & Algorithms training.", tag: "Academic" },
      { name: "Java", context: "Programming language studied during Computer Science degree coursework.", tag: "Academic" },
      { name: "JavaScript", context: "Primary language for web applications and frontend engineering.", tag: "Core" },
      { name: "Dart", context: "Language used for building Flutter mobile applications.", tag: "Project" }
    ]
  }
];

export const journeyMilestones = [
  {
    year: "2021",
    date: "September 2021",
    title: "Started B.Tech in Computer Science Engineering",
    institution: "Roorkee College of Engineering / Uttarakhand Technical University",
    type: "Education"
  },
  {
    year: "2024",
    date: "July 2024 – September 2024",
    title: "Built Real-Time Expense Tracker",
    details: "Mobile application built with Flutter, Firebase Realtime Database, and Razorpay.",
    type: "Project"
  },
  {
    year: "2024",
    date: "November 2024",
    title: "Built NGO & Waste Food Management Application",
    details: "Mobile-first logistics UI with real-time location tracking built with Flutter & Firebase.",
    type: "Project"
  },
  {
    year: "2025",
    date: "May 2025",
    title: "Joined Creditor Academy / LMS Athena",
    details: "Role: Software Developer — Engineering React.js components, WebSockets chat, and REST APIs.",
    type: "Work Experience"
  },
  {
    year: "2025",
    date: "June 2025",
    title: "Completed B.Tech in Computer Science Engineering",
    institution: "Uttarakhand Technical University",
    type: "Education"
  },
  {
    year: "Present",
    date: "Current",
    title: "Software Developer",
    details: "Focusing on frontend engineering, React.js architecture, and real-time web applications.",
    type: "Current Role"
  }
];

export const educationList = [
  {
    degree: "Bachelor of Technology — Computer Science Engineering",
    institution: "Roorkee College of Engineering / Uttarakhand Technical University",
    location: "Roorkee, Uttarakhand",
    period: "September 2021 – June 2025"
  },
  {
    degree: "Senior Secondary Education — CBSE (PCM)",
    institution: "David Model Senior Secondary School",
    location: "Delhi, India",
    period: "April 2020 – June 2021"
  }
];

export const certifications = [
  {
    title: "Data Structures & Algorithms Certification",
    issuer: "Internshala Trainings"
  },
  {
    title: "App Development Certification",
    issuer: "Google"
  },
  {
    title: "Big Data Computing Certification",
    issuer: "NPTEL"
  },
  {
    title: "Industrial Training and Internship Certification",
    issuer: "LT Edutech"
  }
];

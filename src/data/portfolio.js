/**
 * Portfolio Data Source — Ashutosh Kandpal
 * 
 * NOTE FOR FUTURE UPDATES:
 * All portfolio information is centralized here.
 * To update links, project screenshots, demo URLs, or adding new achievements,
 * simply edit this file without changing UI components.
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

export const currentExperience = {
  company: "Creditor Academy / LMS Athena",
  role: "Software Developer",
  period: "May 2025 – Present",
  location: "India",
  overview: "Engineering scalable frontend interfaces and real-time communication modules for LMS Athena platform.",
  focusAreas: [
    {
      title: "Frontend Engineering",
      summary: "Architect and engineer high-performance frontend components using React.js, ensuring responsive design across mobile and desktop devices."
    },
    {
      title: "Real-Time Communication",
      summary: "Engineered a real-time chat module within the LMS platform using WebSockets for instant user-to-user communication."
    },
    {
      title: "API & Data Integration",
      summary: "Implemented real-time interface features through RESTful APIs to enable live data synchronization across the application. Collaborate with backend teams to optimize API data handling, improving frontend rendering efficiency and application stability."
    },
    {
      title: "Design to Development",
      summary: "Translate complex Figma and Adobe XD design prototypes into functional, pixel-perfect UI components."
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
    // TODO: Add GitHub repository URL if public
    githubUrl: null,
    // TODO: Add live demo URL if available
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
    // TODO: Add GitHub repository URL
    githubUrl: null,
    // TODO: Add live demo URL
    liveUrl: null
  }
];

export const skillsCategory = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3"]
  },
  {
    category: "Development & Integration",
    skills: ["Redux", "React Hooks", "RESTful APIs", "WebSockets", "Firebase", "Git", "GitHub", "VS Code"]
  },
  {
    category: "UI/UX & Design",
    skills: ["Figma", "Adobe XD", "Styled-components", "Tailwind CSS", "Responsive Design", "Component-driven Development"]
  },
  {
    category: "Programming Languages",
    skills: ["C++", "Java", "JavaScript", "Dart"]
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

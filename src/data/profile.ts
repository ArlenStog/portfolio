/**
 * All portfolio content lives here — edit this file to update the site.
 * TODO: fill in the links marked with "#".
 */
export const profile = {
  name: "Aleksandar Mijailović",
  role: "Frontend Developer",
  stack: "React · Next.js · TypeScript",
  location: "Beograd, Serbia · open to remote / hybrid",
  email: "smijailovic5@gmail.com",
  links: {
    github: "#", // e.g. https://github.com/your-username
    linkedin: "#", // e.g. https://www.linkedin.com/in/your-profile
    cv: "/cv-aleksandar-mijailovic.pdf",
  },
  summary:
    "Frontend developer with 4+ years of experience building React and Next.js applications in TypeScript for healthcare and food-service clients, including 2 years of hands-on Next.js work. I care about reusable component systems, predictable state and tests that actually catch bugs. Looking for a Frontend or Full-Stack (React / Next.js) role in a product-focused team.",
  highlights: [
    { value: "4+", label: "years with React" },
    { value: "20% → 86%", label: "unit test coverage I raised" },
    { value: "2 yrs", label: "of production Next.js" },
  ],
};

export const featuredProject = {
  name: "Fade & Co. — barbershop booking",
  year: "2026",
  description:
    'A full-stack booking app: customers sign up, pick a service and a free slot, and manage their appointments; the owner gets a daily schedule. Customers can also just type what they want ("haircut and beard next friday after 2pm") and Claude turns it into matching free slots.',
  points: [
    "Transactional booking in PostgreSQL. Two people clicking the same slot can't double-book",
    "Availability computed in the salon's timezone, DST-safe and unit tested",
    "TanStack Query with optimistic cancel and targeted cache invalidation",
    "DB-backed sessions, hashed passwords and tokens, role-based admin view",
    "Natural-language booking via the Claude API with validated structured output",
    "Playwright end-to-end and Vitest unit tests, running on GitHub Actions",
  ],
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "PostgreSQL",
    "TanStack Query",
    "Tailwind",
    "Claude API",
    "Playwright",
    "Vitest",
    "Vercel",
  ],
  images: [
    {
      src: "/projects/screenshot.png",
      alt: "Booking screen with services, a date and available time slots",
    },
    { src: "/projects/home.png", alt: "Landing page with the services list" },
  ],
  links: {
    live: "#", // TODO: Vercel URL
    code: "#", // TODO: GitHub repo URL
  },
};

export const experience = [
  {
    role: "Frontend Developer",
    company: "Vrize",
    period: "2022 – Feb 2026",
    place: "Remote",
    projects: [
      {
        name: "Hospital management web application",
        points: [
          "Delivered 3 new features in React and Redux, including the Appointments module for scheduling patient examinations.",
          "Raised unit test coverage from 20% to 86% with Jest and Vitest.",
          "Fixed a large number of bugs across the profile creation and appointments flows before release.",
        ],
      },
      {
        name: "Zaxby's: web app for a US fast-food chain",
        points: [
          "Built core customer flows: menu, online ordering, checkout and payment, and login with email verification.",
          "Led development of the homepage Scrollable Rewards section.",
          "Took part in the migration from legacy code to React and Next.js, and helped introduce a mobile-first approach.",
          "Restructured the UI with Atomic Design: atoms, molecules and organisms reused across many pages.",
          "Implemented pixel-perfect UI from Figma, working daily with designers and backend developers in an Agile team.",
        ],
      },
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Sass",
      "styled-components",
      "Jest",
      "Vitest",
      "Jira",
      "Bitbucket",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2022",
    place: "",
    projects: [
      {
        name: "",
        points: [
          "Built React interfaces for client web apps with reusable components, Redux and REST API integration (Axios, MUI).",
          "Developed and launched a website for an elementary school on WordPress and PHP.",
          "Built a restaurant management desktop application in Java.",
        ],
      },
    ],
    stack: [],
  },
];

export const clientProjects = [
  {
    name: "E-commerce webshop",
    description:
      "Online store for a footwear retailer with product catalog, filtering, cart and checkout.",
    stack: ["Next.js", "TypeScript"],
  },
  {
    name: "Barbershop website",
    description:
      "Responsive business site with services, price list and appointment booking.",
    stack: ["Next.js", "TypeScript"],
  },
  {
    name: "Pet services website",
    description:
      "Responsive marketing site with service pages and a contact form, optimized for mobile.",
    stack: ["Next.js", "TypeScript"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "TanStack Query",
      "React Router",
      "REST APIs",
      "Responsive design",
    ],
  },
  {
    group: "Styling",
    items: ["Tailwind CSS", "Sass", "styled-components", "Material UI"],
  },
  { group: "Testing", items: ["Jest", "Vitest", "Playwright"] },
  {
    group: "Backend & data",
    items: ["PostgreSQL", "MySQL", "MSSQL", "Next.js Route Handlers"],
  },
  {
    group: "Tools",
    items: [
      "Git",
      "GitHub Actions",
      "Bitbucket",
      "Jira",
      "Vercel",
      "AWS CodeCommit",
    ],
  },
  {
    group: "Also familiar with",
    items: ["Angular", "PHP / Laravel", "Electron", "WordPress"],
  },
];

export const education = {
  degree: "Bachelor of Applied Studies in Computer Engineering (180 ECTS)",
  school: "Academy of Technical and Art Applied Studies Belgrade (VIŠER)",
  period: "2019 – 2022",
  languages:
    "Serbian (native) · English (C1, professional working proficiency)",
};

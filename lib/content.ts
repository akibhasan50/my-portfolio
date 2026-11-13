import { 
  SiJavascript, SiTypescript, SiReact, SiRedux, SiNextdotjs, SiAngular, SiLit, 
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiJquery, 
  SiJest, SiCypress, SiVitest, SiDocker, SiGooglecloud, SiGithub, SiGitlab,
  SiReactquery, SiShadcnui, SiSocketdotio, SiOpenai, SiExpo
} from "react-icons/si";
import { TestTube, Bot } from "lucide-react";

export const portfolioContent = {
  hero: {
    name: "AKIB HASAN",
    title: "Frontend Developer",
    tagline: "Clean Code. High Performance. User-Centric Design.",
    description:
      "Frontend Developer with 5+ years of experience in building high-performance, accessible, and scalable web applications. I specialize in crafting clean, intuitive UIs and optimizing systems for efficiency.",
    location: "Available for work",
    email: "tonuakibhasan@gmail.com",
    github: "https://github.com/akibhasan50",
    linkedin: "https://www.linkedin.com/in/akib-hasan50/",
    phone: "+8801859487474",
  },
  about: {
    title: "About Me",
    description:
      "I'm a Frontend Developer with 5+ years of experience in building high-performance, accessible, and scalable web applications. I specialize in crafting clean, intuitive UIs and optimizing systems for efficiency. With a proven track record of collaborating with both local startups and international teams, I consistently deliver robust, maintainable solutions.",
    highlights: [
      "Specialized in React, Next.js, TypeScript & modern frontend stack",
      "Experience with Jest, Karma for 80%+ test coverage",
      "Collaborated with Google-backed enterprise teams",
      "Passionate about performance, code quality & user experience",
    ],
    stats: [
      { value: "5+", label: "Years Experience" },
      { value: "8+", label: "Production Apps Built" },
      { value: "80%+", label: "Test Coverage" },
      { value: "40%", label: "Load Time Reduced" },
    ],
    cta: "Let's Connect",
  },
  skills: {
    title: "Tech Stack",
    subtitle: "SKILLS",
    showcase: "EXPERTISE",
    featuredWork: "Featured Work",
    stats: [
      {
        title: "Frontend Mastery",
        description: "React, Next.js, TypeScript, Angular",
      },
      {
        title: "Enterprise Experience",
        description: "CCaaS & Omnichannel B2B platforms",
      },
      {
        title: "Quality Focused",
        description: "80%+ test coverage, clean architecture",
      },
      {
        title: "Performance Driven",
        description: "40% load time improvements",
      },
    ],
    expertiseLevels: {
      Expert: { icon: "S", color: "text-primary" },
      Advanced: { icon: "A", color: "text-secondary" },
      Proficient: { icon: "B", color: "text-accent" },
      Learning: { icon: "C", color: "text-muted-foreground" },
    },
    categories: [
      {
        name: "Frontend Core",
        icon: "Code",
        description: "Building modern, responsive interfaces",
        skills: [
          { name: "JavaScript", expertise: "Expert", description: "ES6+ & modern patterns", icon: SiJavascript, color: "#F7DF1E" },
          { name: "TypeScript", expertise: "Expert", description: "Type-safe development", icon: SiTypescript, color: "#3178C6" },
          { name: "ReactJS", expertise: "Expert", description: "Component architecture", icon: SiReact, color: "#61DAFB" },
          { name: "TanStack Query", expertise: "Advanced", description: "Server state management", icon: SiReactquery, color: "#FF4154" },
          { name: "Redux", expertise: "Advanced", description: "Global state management", icon: SiRedux, color: "#764ABC" },
          { name: "NextJS", expertise: "Advanced", description: "Full-stack React framework", icon: SiNextdotjs },
          { name: "AngularJS", expertise: "Advanced", description: "Enterprise applications", icon: SiAngular, color: "#DD0031" },
          { name: "Lit.js", expertise: "Proficient", description: "Web components", icon: SiLit, color: "#324FFF" },
          { name: "Zustand", expertise: "Advanced", description: "Lightweight state", icon: SiReact, color: "#443E38" },
          { name: "Socket.IO", expertise: "Advanced", description: "Realtime bidirectional events", icon: SiSocketdotio, color: "#010101" },
          { name: "React Native", expertise: "Advanced", description: "Cross-platform mobile apps", icon: SiReact, color: "#61DAFB" },
          { name: "Expo", expertise: "Advanced", description: "Mobile client development", icon: SiExpo, color: "#000020" },
        ],
      },
      {
        name: "Styling & UI",
        icon: "Palette",
        description: "Crafting beautiful user experiences",
        skills: [
          { name: "HTML", expertise: "Expert", description: "Semantic markup", icon: SiHtml5, color: "#E34F26" },
          { name: "CSS", expertise: "Expert", description: "Modern layouts & animations", icon: SiCss3, color: "#1572B6" },
          { name: "Tailwind", expertise: "Expert", description: "Utility-first CSS", icon: SiTailwindcss, color: "#06B6D4" },
          { name: "Bootstrap", expertise: "Advanced", description: "Responsive framework", icon: SiBootstrap, color: "#7952B3" },
          { name: "Shadcn", expertise: "Advanced", description: "Modern UI components", icon: SiShadcnui },
        ],
      },
      {
        name: "Backend & Tools",
        icon: "Server",
        description: "Server-side & development tools",
        skills: [
          { name: "Node.js", expertise: "Proficient", description: "Server-side JavaScript", icon: SiNodedotjs, color: "#339933" },
          { name: "Express.js", expertise: "Proficient", description: "Node.js web framework", icon: SiExpress },
          { name: "jQuery", expertise: "Advanced", description: "DOM manipulation", icon: SiJquery, color: "#0769AD" },
        ],
      },
      {
        name: "Testing",
        icon: "TestTube",
        description: "Quality assurance & testing",
        skills: [
          { name: "Jest", expertise: "Expert", description: "Unit testing framework", icon: SiJest, color: "#C21325" },
          { name: "Cypress", expertise: "Advanced", description: "E2E testing", icon: SiCypress },
          { name: "Vitest", expertise: "Advanced", description: "Vite-native testing", icon: SiVitest, color: "#FCC72B" },
          { name: "Karma", expertise: "Advanced", description: "Test runner", icon: TestTube, color: "#45C8F1" },
        ],
      },
      {
        name: "DevOps & Cloud",
        icon: "Cloud",
        description: "CI/CD & cloud infrastructure",
        skills: [
          { name: "Docker", expertise: "Proficient", description: "Containerization", icon: SiDocker, color: "#2496ED" },
          { name: "CI/CD", expertise: "Advanced", description: "Automated pipelines", icon: SiGithub },
          { name: "GCP", expertise: "Proficient", description: "Google Cloud Platform", icon: SiGooglecloud, color: "#4285F4" },
          { name: "GitHub", expertise: "Expert", description: "Version control & actions", icon: SiGithub },
          { name: "GitLab", expertise: "Advanced", description: "DevOps platform", icon: SiGitlab, color: "#FC6D26" },
        ],
      },
      {
        name: "AI & Modern Tools",
        icon: "Bot",
        description: "AI-assisted workflows & productivity",
        skills: [
          { name: "ChatGPT", expertise: "Expert", description: "Prompt engineering & AI workflows", icon: SiOpenai, color: "#10A37F" },
          { name: "Codex / OpenCode", expertise: "Expert", description: "AI code generation & assistance", icon: SiOpenai, color: "#10A37F" },
          { name: "Prompt Engineering", expertise: "Expert", description: "Structured prompts & LLM optimization", icon: SiOpenai, color: "#10A37F" },
          { name: "AI Code Review", expertise: "Advanced", description: "Validation, refactoring & code QA", icon: SiOpenai, color: "#10A37F" },
        ],
      },
    ],
  },
  projects: {
    title: "Featured Work",
    subtitle: "Projects",
    moreWork: "More Projects",
    description: "Innovative solutions crafted with precision",
    list: [
      {
        id: 1,
        title: "Zurvis / OSaaS",
        description:
          "Omnichannel customer-support platform and mobile client with inbox, CRM, WhatsApp workflows, broadcasts, realtime messaging, billing/admin, RBAC, push notifications, and voice calls.",
        image: "",
        tech: ["React", "Next.js", "TypeScript", "React Native", "Expo", "Tailwind CSS", "shadcn/ui", "Socket.IO", "TanStack Query", "Zustand", "FCM"],
        github: "",
        live: "",
        featured: true,
      },
      {
        id: 2,
        title: "UJET Portal",
        description:
          "CCaaS agent/admin frontend spanning chat, calls, email, queues, roles, and realtime communication, with performance improvements and automated testing.",
        image: "",
        tech: ["JavaScript", "AngularJS", "Lit.js", "RxJS", "Redux-Observable", "Jest", "Karma", "Cypress", "CI/CD"],
        github: "",
        live: "",
        featured: true,
      },
      {
        id: 3,
        title: "LabelHub",
        description:
          "React-based Bangla text annotation platform with client-side caching, session management, and RBAC.",
        image: "",
        tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Caching", "RBAC"],
        github: "",
        live: "",
        featured: true,
      },
      {
        id: 4,
        title: "WeLearn",
        description:
          "E-learning platform that digitized training workflows and reduced reliance on in-person training, replacing ~90% of physical training and cutting training costs by ~60%.",
        image: "",
        tech: ["PHP", "Bootstrap", "MySQL", "jQuery", "LMS"],
        github: "",
        live: "",
        featured: true,
      },
      {
        id: 5,
        title: "Enterprise Web Apps",
        description:
          "Built 4+ production web applications with React, Next.js, TypeScript, and FastAPI-backed REST APIs, scaled to thousands of users with 40% load time reduction.",
        image: "",
        tech: ["React", "Next.js", "TypeScript", "FastAPI", "Tailwind CSS"],
        github: "",
        live: "",
        featured: false,
      },
    ],
  },
  experience: {
    title: "Experience",
    subtitle: "Building the future, one project at a time",
    list: [
      {
        company: "Probfly",
        logo: "",
        position: "Software Engineer (Frontend)",
        duration: "Mar 2026 – Present",
        location: "Dhaka, Bangladesh (On-site)",
        companyDescription: "Multi-tenant B2B omnichannel customer support platform and companion mobile app suite",
        description:
          "Build and maintain a multi-tenant B2B omnichannel support platform using React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Zustand, and Socket.IO.",
        highlights: [
          "Developed reusable, responsive UI components and flows for authentication, workspace management, inbox, CRM/contacts, templates, broadcasts, billing, and admin.",
          "Integrated REST APIs and realtime Socket.IO events to power live conversations, assignments, read/unread state, search, and notifications.",
          "Built WhatsApp workflows, including Template Studio (variable and media handling), 24-hour template-only conversation mode, and broadcast insights.",
          "Developed Zurvis, the companion React Native/Expo mobile app, covering inbox, contacts, realtime updates, media/templates, workspace access, and call experiences.",
          "Implemented mobile push notifications with FCM HTTP v1, device registration, BullMQ-based delivery, user preferences, deduplication, deep links, and foreground/background sync.",
          "Translated Figma designs into accessible, cross-browser interfaces; collaborated with backend, QA, UI/UX, and product teams and participated in code reviews.",
        ],
        tech: ["React", "Next.js", "TypeScript", "React Native", "Expo", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Zustand", "Socket.IO", "FCM"],
      },
      {
        company: "UJET.cx",
        logo: "/logos/ujet.png",
        position: "Software Engineer (Frontend)",
        duration: "Jun 2024 – Feb 2026",
        location: "San Francisco, CA (Remote)",
        companyDescription: "Google-backed, cloud-native CCaaS platform trusted by T-Mobile, KeyBank, Elementor, and Bell Canada",
        description:
          "Developed frontend features for a Google-backed, cloud-native CCaaS platform in collaboration with international engineering teams.",
        highlights: [
          "Built and optimized production UI for Chat, Call, and Email Adapters, Queue Settings, and role-based agent/admin experiences using JavaScript, AngularJS/Lit, RxJS, and Redux-Observable.",
          "Maintained 80%+ unit test coverage on critical modules with Jest and Karma; contributed to Cypress E2E tests.",
          "Implemented responsive, reusable features from Figma specifications and resolved frontend bugs and performance issues across agent and admin workflows.",
          "Participated in code reviews, linting, and CI/CD release workflows for internal and OEM environments.",
        ],
        tech: ["JavaScript", "AngularJS", "Lit.js", "RxJS", "Redux-Observable", "Jest", "Karma", "Cypress", "CI/CD"],
      },
      {
        company: "GigaTech Ltd.",
        logo: "/logos/gigatech.png",
        position: "Frontend Developer",
        duration: "Apr 2022 – May 2024",
        location: "Dhaka, Bangladesh",
        companyDescription: "BEXIMCO subsidiary offering AI-powered solutions like eKYC, OCR, and Bangla NLP",
        description:
          "Built 4+ production web applications with React, Next.js, TypeScript, and FastAPI-backed REST APIs, used by thousands of users.",
        highlights: [
          "Built 4+ production web applications with React, Next.js, TypeScript, and FastAPI-backed REST APIs, used by thousands of users.",
          "Developed reusable interfaces, authentication/RBAC flows, and data-driven screens with responsive layouts.",
          "Contributed to application rewrites that reduced load time by approximately 40%; collaborated closely with UI/UX and API teams.",
        ],
        tech: ["React", "Next.js", "TypeScript", "FastAPI", "Tailwind CSS", "REST APIs"],
      },
      {
        company: "Golden Harvest Infotech Ltd.",
        logo: "/logos/ghit.png",
        position: "Assistant Programmer",
        duration: "Dec 2020 – Mar 2022",
        location: "Dhaka, Bangladesh",
        companyDescription: "Software company specializing in enterprise solutions and data processing",
        description:
          "Developed full-stack web applications with PHP, Bootstrap, MySQL, and jQuery, including data processing and visualization workflows.",
        highlights: [
          "Delivered an LMS that replaced ~90% of physical training and cut training costs by ~60%.",
          "Owned the full cycle of planning, implementation, testing, debugging, and delivery for web application features.",
          "Developed full-stack web applications with PHP, Bootstrap, MySQL, and jQuery, including data processing and visualization workflows.",
        ],
        tech: ["PHP", "Bootstrap", "MySQL", "jQuery", "Full-Stack"],
      },
    ],
  },
  education: {
    degree: "Bachelor in Science",
    field: "Information and Communication",
    university: "Noakhali Science & Technology University",
    location: "Noakhali",
    year: "2019",
  },
  ui: {
    buttons: {
      getInTouch: "Get In Touch",
      viewProjects: "View Projects",
      liveDemo: "Live Demo",
      demo: "Demo",
      code: "Code",
      startConversation: "Start a Conversation",
    },
    projects: {
      title: "Featured Work",
      subtitle: "Projects",
      moreWork: "More Projects",
      description: "Innovative solutions crafted with precision",
    },
    footer: {
      title: "Let's Connect",
      cta: "Let's Build Something Amazing",
      description:
        "Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with creative minds. Let's create something extraordinary together!",
      stats: [
        { value: "5+", label: "Years" },
        { value: "4+", label: "Apps" },
        { value: "80%", label: "Coverage" },
      ],
      copyright: "Crafted with passion and clean code",
    },
  },
}

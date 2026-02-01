import { 
  SiJavascript, SiTypescript, SiReact, SiRedux, SiNextdotjs, SiAngular, SiLit, 
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiJquery, 
  SiJest, SiCypress, SiVitest, SiDocker, SiGooglecloud, SiGithub, SiGitlab,
  SiReactquery, SiShadcnui
} from "react-icons/si";
import { TestTube } from "lucide-react";

export const portfolioContent = {
  hero: {
    name: "AKIB HASAN",
    title: "Frontend Developer",
    tagline: "Clean Code. High Performance. User-Centric Design.",
    description:
      "Frontend Developer with 5+ years of experience in building high-performance, accessible, and scalable web applications. I specialize in crafting clean, intuitive UIs and optimizing systems for efficiency.",
    location: "Jashore, Bangladesh",
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
      { value: "4+", label: "Web Apps Built" },
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
        description: "Google-backed CCaaS platforms",
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
          { name: "JavaScript", expertise: "Expert", description: "ES6+ & modern patterns", icon: SiJavascript },
          { name: "TypeScript", expertise: "Expert", description: "Type-safe development", icon: SiTypescript },
          { name: "ReactJS", expertise: "Expert", description: "Component architecture", icon: SiReact },
          { name: "TanStack Query", expertise: "Advanced", description: "Server state management", icon: SiReactquery },
          { name: "Redux", expertise: "Advanced", description: "Global state management", icon: SiRedux },
          { name: "NextJS", expertise: "Advanced", description: "Full-stack React framework", icon: SiNextdotjs },
          { name: "AngularJS", expertise: "Advanced", description: "Enterprise applications", icon: SiAngular },
          { name: "Lit.js", expertise: "Proficient", description: "Web components", icon: SiLit },
          { name: "Zustand", expertise: "Advanced", description: "Lightweight state", icon: SiReact },
        ],
      },
      {
        name: "Styling & UI",
        icon: "Palette",
        description: "Crafting beautiful user experiences",
        skills: [
          { name: "HTML", expertise: "Expert", description: "Semantic markup", icon: SiHtml5 },
          { name: "CSS", expertise: "Expert", description: "Modern layouts & animations", icon: SiCss3 },
          { name: "Tailwind", expertise: "Expert", description: "Utility-first CSS", icon: SiTailwindcss },
          { name: "Bootstrap", expertise: "Advanced", description: "Responsive framework", icon: SiBootstrap },
          { name: "Shadcn", expertise: "Advanced", description: "Modern UI components", icon: SiShadcnui },
        ],
      },
      {
        name: "Backend & Tools",
        icon: "Server",
        description: "Server-side & development tools",
        skills: [
          { name: "Node.js", expertise: "Proficient", description: "Server-side JavaScript", icon: SiNodedotjs },
          { name: "Express.js", expertise: "Proficient", description: "Node.js web framework", icon: SiExpress },
          { name: "jQuery", expertise: "Advanced", description: "DOM manipulation", icon: SiJquery },
        ],
      },
      {
        name: "Testing",
        icon: "TestTube",
        description: "Quality assurance & testing",
        skills: [
          { name: "Jest", expertise: "Expert", description: "Unit testing framework", icon: SiJest },
          { name: "Cypress", expertise: "Advanced", description: "E2E testing", icon: SiCypress },
          { name: "Vitest", expertise: "Advanced", description: "Vite-native testing", icon: SiVitest },
          { name: "Karma", expertise: "Advanced", description: "Test runner", icon: TestTube },
        ],
      },
      {
        name: "DevOps & Cloud",
        icon: "Cloud",
        description: "CI/CD & cloud infrastructure",
        skills: [
          { name: "Docker", expertise: "Proficient", description: "Containerization", icon: SiDocker },
          { name: "CI/CD", expertise: "Advanced", description: "Automated pipelines", icon: SiGithub },
          { name: "GCP", expertise: "Proficient", description: "Google Cloud Platform", icon: SiGooglecloud },
          { name: "GitHub", expertise: "Expert", description: "Version control & actions", icon: SiGithub },
          { name: "GitLab", expertise: "Advanced", description: "DevOps platform", icon: SiGitlab },
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
        title: "UJET Portal",
        description:
          "A Google-backed CCaaS platform. Contributed to the frontend of the agent application, focusing on Chat Adapter, Call Adapter, Email Adapter, Queue Settings, and user roles. Implemented real-time communication features, optimized performance, and maintained 80%+ test coverage.",
        image: "",
        tech: ["React", "Angular", "TypeScript", "Lit.js", "Jest", "Cypress", "CI/CD"],
        github: "",
        live: "",
        featured: true,
      },
      {
        id: 2,
        title: "LabelHub",
        description:
          "A web-based Bangla text annotation tool using React, featuring client-side caching, session management, and role-based access control. Streamlined the annotation and categorization of Bangla text.",
        image: "",
        tech: ["React", "JavaScript", "CSS", "Session Management"],
        github: "",
        live: "",
        featured: true,
      },
      {
        id: 3,
        title: "WeLearn",
        description:
          "An e-learning platform facilitating cost-effective online training for data entry operators. Replaced 90% of physical training and reduced costs by 60%.",
        image: "",
        tech: ["React", "Node.js", "Full-stack"],
        github: "",
        live: "",
        featured: true,
      },
      {
        id: 4,
        title: "Enterprise Web Apps",
        description:
          "Built 4+ web applications with React and Next.js from the ground up. Spearheaded application rewrites resulting in 40% decrease in load time and improved accessibility.",
        image: "",
        tech: ["React", "Next.js", "TypeScript", "Performance"],
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
        company: "UJET.cx",
        position: "Software Engineer (Front-End)",
        duration: "Jun 2024 - Present",
        location: "San Francisco, CA (Remote)",
        companyDescription: "Google-backed, cloud-native CCaaS platform trusted by T-Mobile and Bell Canada",
        description:
          "Enhanced UJET Portal, an AI-driven cloud-native platform for contact centers, by collaborating with global engineering teams to deliver scalable CCaaS solutions.",
        highlights: [
          "Maintained 80%+ unit test coverage (Jest, Karma) for critical chat/call adapter modules",
          "Developed mission-critical UI components from Figma designs with high performance",
          "Enforced code consistency by reviewing PRs and upholding lint standards",
          "Followed full SDLC including CI/CD pipelines, testing, and release cycles",
        ],
        tech: ["React", "Angular", "TypeScript", "Lit.js", "Jest", "Cypress", "CI/CD"],
      },
      {
        company: "GigaTech Ltd.",
        position: "Front End Developer",
        duration: "Apr 2022 - May 2024",
        location: "Dhaka, Bangladesh",
        companyDescription: "BEXIMCO subsidiary offering AI-powered solutions like eKYC, OCR, and Bangla NLP",
        description:
          "Built 4+ web applications with React and Next.js from the ground up as Front End Developer.",
        highlights: [
          "Collaborated with UI/UX and API teams to build apps scaled to 1000s of users",
          "Spearheaded web application rewrites resulting in 40% decrease in load time",
          "Improved accessibility experience for users across all applications",
        ],
        tech: ["React", "Next.js", "TypeScript", "Tailwind"],
      },
      {
        company: "Golden Harvest Infotech Ltd.",
        position: "Assistant Programmer",
        duration: "Dec 2020 - Mar 2022",
        location: "Dhaka, Bangladesh",
        companyDescription: "Software company specializing in enterprise solutions",
        description:
          "Developed fullstack web applications which processed, analyzed and rendered data visually.",
        highlights: [
          "Implemented LMS that replaced 90% of physical training and reduced costs by 60%",
          "Built data visualization tools for processing and analyzing business data",
          "Ensured accuracy through meticulous build, implementation, and debugging",
        ],
        tech: ["React", "Node.js", "JavaScript", "Full-stack"],
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

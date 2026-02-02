import type { Skill, SkillGroup } from "@/types";

/**
 * Skills Data
 * Comprehensive list of technical skills and proficiencies
 */

// Individual skills with levels
export const skills: Skill[] = [
  // Frontend Development
  {
    id: "1",
    name: "React",
    category: "frontend",
    level: 95,
    color: "#00F0FF",
    yearsOfExperience: 5,
    description: "Expert in React ecosystem including hooks, context, and performance optimization",
  },
  {
    id: "2",
    name: "Next.js",
    category: "frontend",
    level: 90,
    color: "#00F0FF",
    yearsOfExperience: 3,
    description: "Advanced knowledge of App Router, Server Components, and SSR/SSG",
  },
  {
    id: "3",
    name: "TypeScript",
    category: "frontend",
    level: 90,
    color: "#00F0FF",
    yearsOfExperience: 4,
    description: "Strong typing, generics, and type inference",
  },
  {
    id: "4",
    name: "JavaScript",
    category: "frontend",
    level: 95,
    color: "#00F0FF",
    yearsOfExperience: 6,
    description: "ES6+, async/await, closures, prototypes",
  },
  {
    id: "5",
    name: "Tailwind CSS",
    category: "frontend",
    level: 95,
    color: "#00F0FF",
    yearsOfExperience: 3,
    description: "Utility-first CSS, custom configurations, responsive design",
  },
  {
    id: "6",
    name: "HTML5",
    category: "frontend",
    level: 98,
    color: "#00F0FF",
    yearsOfExperience: 6,
    description: "Semantic HTML, accessibility, SEO best practices",
  },
  {
    id: "7",
    name: "CSS3",
    category: "frontend",
    level: 95,
    color: "#00F0FF",
    yearsOfExperience: 6,
    description: "Flexbox, Grid, animations, responsive design",
  },
  {
    id: "8",
    name: "Vue.js",
    category: "frontend",
    level: 75,
    color: "#00F0FF",
    yearsOfExperience: 2,
    description: "Composition API, Vuex, Vue Router",
  },

  // Backend Development
  {
    id: "9",
    name: "Node.js",
    category: "backend",
    level: 85,
    color: "#00FF41",
    yearsOfExperience: 4,
    description: "Express, REST APIs, middleware, authentication",
  },
  {
    id: "10",
    name: "Express",
    category: "backend",
    level: 85,
    color: "#00FF41",
    yearsOfExperience: 4,
    description: "RESTful API design, routing, error handling",
  },
  {
    id: "11",
    name: "MongoDB",
    category: "database",
    level: 80,
    color: "#00FF41",
    yearsOfExperience: 3,
    description: "Schema design, aggregation, indexing",
  },
  {
    id: "12",
    name: "PostgreSQL",
    category: "database",
    level: 75,
    color: "#00FF41",
    yearsOfExperience: 2,
    description: "SQL queries, relations, transactions",
  },
  {
    id: "13",
    name: "GraphQL",
    category: "backend",
    level: 70,
    color: "#00FF41",
    yearsOfExperience: 2,
    description: "Schema design, resolvers, Apollo Server",
  },
  {
    id: "14",
    name: "Python",
    category: "backend",
    level: 65,
    color: "#00FF41",
    yearsOfExperience: 2,
    description: "Flask, Django basics, data processing",
  },

  // 3D & Graphics
  {
    id: "15",
    name: "Three.js",
    category: "3d",
    level: 85,
    color: "#8B5CF6",
    yearsOfExperience: 2,
    description: "3D scenes, geometries, materials, lighting, animations",
  },
  {
    id: "16",
    name: "React Three Fiber",
    category: "3d",
    level: 85,
    color: "#8B5CF6",
    yearsOfExperience: 2,
    description: "R3F ecosystem, drei helpers, 3D UI integration",
  },
  {
    id: "17",
    name: "WebGL",
    category: "3d",
    level: 70,
    color: "#8B5CF6",
    yearsOfExperience: 1,
    description: "Shaders, buffers, rendering pipeline",
  },
  {
    id: "18",
    name: "GSAP",
    category: "3d",
    level: 80,
    color: "#8B5CF6",
    yearsOfExperience: 3,
    description: "Timeline animations, ScrollTrigger, motion paths",
  },
  {
    id: "19",
    name: "Framer Motion",
    category: "3d",
    level: 90,
    color: "#8B5CF6",
    yearsOfExperience: 3,
    description: "Layout animations, gestures, variants",
  },

  // Design & UI/UX
  {
    id: "20",
    name: "Figma",
    category: "design",
    level: 85,
    color: "#FF006E",
    yearsOfExperience: 4,
    description: "UI design, prototyping, design systems, components",
  },
  {
    id: "21",
    name: "Adobe XD",
    category: "design",
    level: 75,
    color: "#FF006E",
    yearsOfExperience: 3,
    description: "Wireframing, mockups, interactive prototypes",
  },
  {
    id: "22",
    name: "Photoshop",
    category: "design",
    level: 70,
    color: "#FF006E",
    yearsOfExperience: 4,
    description: "Image editing, graphics, web design",
  },
  {
    id: "23",
    name: "UI/UX Design",
    category: "design",
    level: 80,
    color: "#FF006E",
    yearsOfExperience: 5,
    description: "User research, wireframing, responsive design",
  },

  // Tools & DevOps
  {
    id: "24",
    name: "Git",
    category: "tools",
    level: 90,
    color: "#FFFF00",
    yearsOfExperience: 6,
    description: "Version control, branching, collaboration",
  },
  {
    id: "25",
    name: "GitHub",
    category: "tools",
    level: 90,
    color: "#FFFF00",
    yearsOfExperience: 6,
    description: "Actions, Pages, collaboration, CI/CD",
  },
  {
    id: "26",
    name: "Docker",
    category: "devops",
    level: 70,
    color: "#FFFF00",
    yearsOfExperience: 2,
    description: "Containerization, Docker Compose, deployment",
  },
  {
    id: "27",
    name: "AWS",
    category: "devops",
    level: 65,
    color: "#FFFF00",
    yearsOfExperience: 2,
    description: "EC2, S3, CloudFront, RDS, Lambda",
  },
  {
    id: "28",
    name: "Vercel",
    category: "tools",
    level: 90,
    color: "#FFFF00",
    yearsOfExperience: 3,
    description: "Deployment, serverless functions, analytics",
  },
  {
    id: "29",
    name: "VS Code",
    category: "tools",
    level: 95,
    color: "#FFFF00",
    yearsOfExperience: 6,
    description: "Extensions, shortcuts, debugging",
  },
  {
    id: "30",
    name: "Linux",
    category: "tools",
    level: 75,
    color: "#FFFF00",
    yearsOfExperience: 4,
    description: "Command line, bash scripting, server management",
  },
];

// Skills grouped by category
export const skillGroups: SkillGroup[] = [
  {
    category: "frontend",
    title: "Frontend Development",
    skills: skills.filter((s) => s.category === "frontend"),
  },
  {
    category: "backend",
    title: "Backend Development",
    skills: skills.filter((s) => s.category === "backend"),
  },
  {
    category: "3d",
    title: "3D & Graphics",
    skills: skills.filter((s) => s.category === "3d"),
  },
  {
    category: "design",
    title: "Design & UI/UX",
    skills: skills.filter((s) => s.category === "design"),
  },
  {
    category: "database",
    title: "Databases",
    skills: skills.filter((s) => s.category === "database"),
  },
  {
    category: "tools",
    title: "Tools & Platforms",
    skills: skills.filter((s) => s.category === "tools"),
  },
  {
    category: "devops",
    title: "DevOps & Cloud",
    skills: skills.filter((s) => s.category === "devops"),
  },
];

// Export specific skill categories
export const frontendSkills = skills.filter((s) => s.category === "frontend");
export const backendSkills = skills.filter((s) => s.category === "backend");
export const designSkills = skills.filter((s) => s.category === "design");
export const toolsSkills = skills.filter((s) => s.category === "tools");
export const graphicsSkills = skills.filter((s) => s.category === "3d");

// Top skills (level >= 90)
export const topSkills = skills.filter((s) => s.level >= 90);
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useCursorHover } from "@/components/effects/CursorFollower";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types";

// Import projects data (will be created later)
// import { projects } from "@/data/projects";

// Dummy projects for now
const dummyProjects: Project[] = [
  {
    id: "1",
    title: "3D Portfolio Website",
    description: "Interactive portfolio with Three.js and stunning animations",
    longDescription: "A cutting-edge portfolio featuring 3D graphics, particle systems, and smooth animations using Three.js, React Three Fiber, and Framer Motion.",
    category: "3D Graphics",
    tags: ["Three.js", "React", "Next.js", "GSAP"],
    technologies: ["Next.js", "Three.js", "TypeScript", "Tailwind"],
    image: "/projects/portfolio.jpg",
    liveUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/username/portfolio",
    featured: true,
    year: 2024,
    color: "#00F0FF",
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with payment integration",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/ecommerce.jpg",
    liveUrl: "https://shop.example.com",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
    year: 2024,
    color: "#FF006E",
  },
  {
    id: "3",
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application",
    category: "Mobile App",
    tags: ["React Native", "Firebase", "Redux"],
    technologies: ["React Native", "Firebase", "TypeScript"],
    image: "/projects/fitness.jpg",
    liveUrl: "https://fitness.example.com",
    featured: false,
    year: 2023,
    color: "#8B5CF6",
  },
];

/**
 * Projects Section Component
 * Showcases portfolio projects with filtering
 */
export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const cursorHover = useCursorHover();

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? dummyProjects
      : dummyProjects.filter((project) => project.category === activeCategory);

  // Featured projects
  const featuredProjects = dummyProjects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-dark" />
      <div className="cyber-grid-animated absolute inset-0 opacity-10" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="gradient-text-animated">Featured Work</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A selection of my recent projects showcasing cutting-edge
            technologies and creative solutions
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" />
        </motion.div>

        {/* Featured Projects Spotlight */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="mb-6 font-heading text-2xl font-bold">
              <span className="text-neon-cyan">★</span> Featured Projects
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {PROJECT_CATEGORIES.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-lg border px-6 py-2 font-body text-sm font-medium uppercase tracking-wider transition-all",
                activeCategory === category
                  ? "border-neon-cyan bg-neon-cyan/10 text-neon-cyan shadow-neon-cyan"
                  : "border-border bg-background/50 text-muted-foreground hover:border-neon-cyan hover:text-neon-cyan"
              )}
              {...cursorHover}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/**
 * Featured Project Card Component
 */
function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cursorHover = useCursorHover();

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-2xl border border-neon-cyan/30 bg-cyber-dark"
      {...cursorHover}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <Play className="text-neon-cyan" size={48} />
        </div>
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-neon-cyan/10 px-3 py-1 text-xs font-medium text-neon-cyan">
            {project.category}
          </span>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>

        <h3 className="mb-2 font-heading text-xl font-bold group-hover:text-neon-cyan">
          {project.title}
        </h3>

        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded border border-border px-2 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neon-cyan hover:underline"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Glow effect */}
      <div
        className="absolute -inset-1 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: project.color }}
      />
    </motion.div>
  );
}

/**
 * Regular Project Card Component
 */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cursorHover = useCursorHover();

  return (
    <motion.div
      variants={fadeInUp}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1 }}
      className="card-3d group glass-card relative overflow-hidden rounded-xl border border-border p-6"
      {...cursorHover}
      whileHover={{ y: -10 }}
    >
      {/* Category badge */}
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-neon-purple/10 px-3 py-1 text-xs font-medium text-neon-purple">
          {project.category}
        </span>
        <span className="text-xs text-muted-foreground">{project.year}</span>
      </div>

      {/* Title */}
      <h3 className="mb-3 font-heading text-lg font-bold group-hover:text-neon-cyan">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-1 text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded border border-neon-cyan text-neon-cyan transition-all hover:bg-neon-cyan/10"
            title="Live Demo"
          >
            <ExternalLink size={16} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded border border-border text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
            title="View Code"
          >
            <Github size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
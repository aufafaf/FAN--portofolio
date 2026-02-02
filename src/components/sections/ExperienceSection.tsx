"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useCursorHover } from "@/components/effects/CursorFollower";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types";

// Dummy experience data
const dummyExperiences: Experience[] = [
  {
    id: "1",
    company: "Tech Innovators Inc",
    position: "Senior Full Stack Developer",
    location: "Remote",
    startDate: "Jan 2023",
    endDate: "Present",
    description:
      "Leading development of cutting-edge web applications using modern technologies",
    responsibilities: [
      "Architected and developed scalable web applications",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines and DevOps practices",
    ],
    achievements: [
      "Reduced page load time by 60% through optimization",
      "Led team of 5 developers on major project",
      "Introduced 3D graphics using Three.js",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Three.js"],
    type: "Full-time",
    companyUrl: "https://example.com",
  },
  {
    id: "2",
    company: "Digital Solutions Co",
    position: "Frontend Developer",
    location: "San Francisco, CA",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    description:
      "Built responsive and interactive user interfaces for enterprise clients",
    responsibilities: [
      "Developed reusable React components",
      "Collaborated with design team on UI/UX",
      "Optimized application performance",
    ],
    achievements: [
      "Delivered 15+ client projects successfully",
      "Improved mobile responsiveness across all platforms",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    type: "Full-time",
  },
  {
    id: "3",
    company: "Startup XYZ",
    position: "Web Developer",
    location: "Remote",
    startDate: "Jan 2020",
    endDate: "May 2021",
    description: "Full-stack development for early-stage startup",
    responsibilities: [
      "Built MVP from scratch",
      "Integrated third-party APIs",
      "Maintained production environment",
    ],
    achievements: [
      "Helped company secure Series A funding",
      "Built platform serving 10k+ users",
    ],
    technologies: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    type: "Full-time",
  },
];

/**
 * Experience Section Component
 * Shows work experience in interactive timeline
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker" />
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
            <span className="gradient-text-animated">Work Experience</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            My professional journey and key achievements
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink md:block" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {dummyExperiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Experience Card Component
 */
function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const cursorHover = useCursorHover();
  const isPresent = experience.endDate === "Present";

  return (
    <motion.div
      variants={fadeInUp}
      className="relative pl-0 md:pl-20"
    >
      {/* Timeline Dot */}
      <div className="absolute left-6 top-6 hidden h-5 w-5 -translate-x-1/2 md:block">
        <motion.div
          className={cn(
            "h-full w-full rounded-full border-4",
            isPresent
              ? "animate-pulse border-neon-cyan bg-neon-cyan shadow-neon-cyan"
              : "border-neon-purple bg-cyber-dark"
          )}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        />
      </div>

      {/* Card */}
      <motion.div
        className="glass-card group relative overflow-hidden rounded-2xl border border-border p-6 transition-all hover:border-neon-cyan"
        {...cursorHover}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        {/* Header */}
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <Briefcase className="text-neon-cyan" size={20} />
              <h3 className="font-heading text-xl font-bold group-hover:text-neon-cyan">
                {experience.position}
              </h3>
            </div>

            <div className="mb-2 flex items-center gap-2">
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-lg font-medium text-neon-purple hover:underline"
                >
                  {experience.company}
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span className="text-lg font-medium text-neon-purple">
                  {experience.company}
                </span>
              )}
              <span className="rounded-full bg-neon-purple/10 px-2 py-0.5 text-xs text-neon-purple">
                {experience.type}
              </span>
            </div>
          </div>

          {/* Date & Location */}
          <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
            <div className="flex items-center gap-1 md:justify-end">
              <Calendar size={14} />
              <span>
                {experience.startDate} - {experience.endDate}
              </span>
            </div>
            <div className="flex items-center gap-1 md:justify-end">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-muted-foreground">{experience.description}</p>

        {/* Responsibilities */}
        {experience.responsibilities && experience.responsibilities.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-2 text-sm font-semibold text-neon-cyan">
              Key Responsibilities:
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {experience.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neon-cyan" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-2 text-sm font-semibold text-neon-pink">
              Achievements:
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neon-pink" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div>
          <h4 className="mb-2 text-sm font-semibold">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border bg-background/50 px-3 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Gradient border on hover */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 blur-xl transition-opacity group-hover:opacity-20" />
      </motion.div>
    </motion.div>
  );
}
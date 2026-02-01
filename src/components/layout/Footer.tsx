"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Heart,
  ArrowUp,
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { useCursorHover } from "@/components/effects/CursorFollower";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/**
 * Footer Component
 * Contains social links, copyright, and back-to-top button
 */
export function Footer() {
  const cursorHover = useCursorHover();
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-cyber-dark/50 backdrop-blur-sm">
      {/* Cyber grid background */}
      <div className="cyber-grid absolute inset-0 opacity-5" />

      <div className="container relative mx-auto px-4 py-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="font-heading text-2xl font-bold gradient-text">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {PERSONAL_INFO.tagline}
            </p>
            <p className="text-xs text-muted-foreground">
              {PERSONAL_INFO.location}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-neon-cyan">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-neon-cyan"
                  {...cursorHover}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-neon-cyan">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all hover:border-neon-cyan hover:text-neon-cyan hover:shadow-neon-cyan"
                  {...cursorHover}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left"
        >
          <p className="flex items-center gap-2">
            Made with <Heart size={16} className="text-neon-pink" fill="currentColor" /> by{" "}
            <span className="font-semibold text-neon-cyan">
              {PERSONAL_INFO.name}
            </span>
          </p>

          <p>© {currentYear} All rights reserved.</p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-lg border border-neon-cyan/30 bg-background/50 px-4 py-2 text-neon-cyan transition-all hover:bg-neon-cyan/10 hover:shadow-neon-cyan"
            {...cursorHover}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top <ArrowUp size={16} />
          </motion.button>
        </motion.div>
      </div>

      {/* Scan line effect */}
      <div className="scan-lines pointer-events-none absolute inset-0 opacity-20" />
    </footer>
  );
}
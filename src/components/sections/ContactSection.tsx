"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, MapPin, Phone } from "lucide-react";
import confetti from "canvas-confetti";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useCursorHover } from "@/components/effects/CursorFollower";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { ContactFormData } from "@/types";

/**
 * Contact Section Component
 * Interactive contact form with validation and animations
 */
export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const cursorHover = useCursorHover();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Success
    setIsSubmitting(false);
    setSubmitStatus("success");

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00F0FF", "#FF006E", "#8B5CF6"],
    });

    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("idle");
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="cyber-grid absolute inset-0 opacity-5" />

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
            <span className="gradient-text-animated">Get In Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have a project in mind? Let's work together to create something amazing
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" />
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="mb-6 font-heading text-2xl font-bold">
                Let's Connect
              </h3>
              <p className="mb-8 text-muted-foreground">
                I'm always interested in hearing about new projects and opportunities.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <ContactInfoCard
                icon={Mail}
                label="Email"
                value={PERSONAL_INFO.email}
                href={`mailto:${PERSONAL_INFO.email}`}
              />
              <ContactInfoCard
                icon={Phone}
                label="Phone"
                value={PERSONAL_INFO.phone}
                href={`tel:${PERSONAL_INFO.phone}`}
              />
              <ContactInfoCard
                icon={MapPin}
                label="Location"
                value={PERSONAL_INFO.location}
              />
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={fadeInUp}
              className="glass-card rounded-xl border border-neon-green/30 bg-neon-green/5 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-neon-green" />
                <div>
                  <p className="text-sm font-medium text-neon-green">
                    Currently Available
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {PERSONAL_INFO.availability}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl border border-border p-8">
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full rounded-lg border border-border bg-background/50 px-4 py-3",
                      "text-sm transition-all",
                      "focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20"
                    )}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full rounded-lg border border-border bg-background/50 px-4 py-3",
                      "text-sm transition-all",
                      "focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20"
                    )}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full rounded-lg border border-border bg-background/50 px-4 py-3",
                    "text-sm transition-all",
                    "focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20"
                  )}
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={cn(
                    "w-full resize-none rounded-lg border border-border bg-background/50 px-4 py-3",
                    "text-sm transition-all",
                    "focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20"
                  )}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className={cn(
                  "w-full rounded-lg border-2 px-8 py-4 font-body text-sm font-semibold uppercase tracking-wider",
                  "transition-all disabled:cursor-not-allowed disabled:opacity-50",
                  submitStatus === "success"
                    ? "border-neon-green bg-neon-green/10 text-neon-green"
                    : "border-neon-cyan bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-neon-cyan"
                )}
                {...cursorHover}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      className="h-4 w-4 rounded-full border-2 border-neon-cyan border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </span>
                ) : submitStatus === "success" ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle size={18} />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-lg bg-neon-green/10 p-3 text-sm text-neon-green"
                >
                  <CheckCircle size={18} />
                  <span>Thank you! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-500"
                >
                  <AlertCircle size={18} />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Contact Info Card Component
 */
interface ContactInfoCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

function ContactInfoCard({ icon: Icon, label, value, href }: ContactInfoCardProps) {
  const cursorHover = useCursorHover();
  const Content = (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neon-cyan/10">
        <Icon className="text-neon-cyan" size={20} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className="glass-card block rounded-xl border border-border p-4 transition-all hover:border-neon-cyan hover:shadow-neon-cyan"
        {...cursorHover}
        whileHover={{ scale: 1.02, x: 5 }}
      >
        {Content}
      </motion.a>
    );
  }

  return (
    <div className="glass-card rounded-xl border border-border p-4">
      {Content}
    </div>
  );
}
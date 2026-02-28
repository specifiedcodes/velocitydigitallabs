"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "VeloCards",
    url: "https://velocards.com",
    description:
      "Digital business card platform with NFC and QR code sharing capabilities.",
    tag: "SaaS Product",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
  },
  {
    name: "VeloCalls",
    url: "https://velocalls.com",
    description:
      "AI-powered calling and communication platform for modern businesses.",
    tag: "Communication",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
  },
  {
    name: "ClickzProtect",
    url: "https://clickzprotect.com",
    description:
      "Ad fraud protection and click fraud detection for digital advertisers.",
    tag: "AdTech",
    gradient: "from-rose-500/20 to-pink-500/20",
    border: "border-rose-500/20",
  },
  {
    name: "DevOS",
    url: "https://devos.team",
    description:
      "Developer operations platform streamlining team collaboration and deployment.",
    tag: "DevTools",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
  },
  {
    name: "JustAnalytics",
    url: "https://justanalytics.app",
    description:
      "Simplified analytics dashboard for tracking web and app performance metrics.",
    tag: "Analytics",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
  },
  {
    name: "VelocityPay",
    url: "https://velocitypay.digital",
    description:
      "Digital payment processing solution with seamless integration and fast payouts.",
    tag: "FinTech",
    gradient: "from-indigo-500/20 to-blue-500/20",
    border: "border-indigo-500/20",
  },
  {
    name: "The Glassware Company",
    url: "https://theglasswarecompany.com",
    description:
      "Premium glassware e-commerce brand with its own registered company entity.",
    tag: "E-Commerce",
    gradient: "from-sky-500/20 to-cyan-500/20",
    border: "border-sky-500/20",
  },
  {
    name: "Fair Travels AI",
    url: "https://fairtravels.ai",
    description:
      "AI-driven travel platform for personalized trip planning and fair pricing.",
    tag: "In Development",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    border: "border-fuchsia-500/20",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-violet-400 mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Products & <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            A showcase of products we&apos;ve built, launched, and scaled — from
            SaaS platforms to AI-powered solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass-card rounded-2xl p-8 group relative overflow-hidden ${project.border}`}
            >
              {/* Background gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-medium tracking-widest uppercase text-white/30 px-2 py-1 rounded-md bg-white/5">
                      {project.tag}
                    </span>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-white/20 group-hover:text-white/60 transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 text-xs text-white/30 font-mono">
                  {project.url.replace("https://", "")}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

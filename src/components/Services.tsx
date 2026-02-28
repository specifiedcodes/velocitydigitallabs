"use client";

import { motion } from "framer-motion";
import { Code2, Megaphone, Bot, Globe, Palette, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks like Next.js, React, and Node.js. Fast, scalable, and beautifully crafted.",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: Bot,
    title: "AI Automations",
    description:
      "Intelligent automation solutions powered by AI/ML. From chatbots to workflow automation, we help businesses run smarter.",
    gradient: "from-violet-400 to-purple-400",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies including SEO, SEM, social media, and content marketing that deliver measurable results.",
    gradient: "from-pink-400 to-rose-400",
  },
  {
    icon: Globe,
    title: "Domain & Branding",
    description:
      "Premium domain acquisition, brand identity design, and complete digital presence setup for businesses of all sizes.",
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that converts. We create intuitive interfaces with modern glass-morphic and minimal aesthetics.",
    gradient: "from-amber-400 to-orange-400",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Comprehensive analytics solutions to track, measure, and optimize your digital performance with actionable insights.",
    gradient: "from-indigo-400 to-blue-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-blue-400 mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            End-to-end digital solutions tailored to transform your ideas into
            powerful, revenue-generating products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <service.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

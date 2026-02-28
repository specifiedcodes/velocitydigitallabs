"use client";

import { motion } from "framer-motion";
import { Send, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-cyan-400 mb-4 block">
            Let&apos;s Talk
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Start Your <span className="gradient-text">Project</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Have an idea? Need a website, AI automation, or marketing strategy?
            Let&apos;s build something great together.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-10 glow relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/5 rounded-full blur-[60px]" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Get in Touch */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center">
                    <Mail size={18} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Get In Touch
                  </h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-6">
                  Whether you&apos;re looking to build a new product, scale an
                  existing one, or need expert consultation — we&apos;re here to
                  help.
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:admin@velocitydigitallabs.com"
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                  >
                    <Mail size={14} />
                    admin@velocitydigitallabs.com
                  </a>
                  <a
                    href="mailto:support@velocitydigitallabs.com"
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                  >
                    <Send size={14} />
                    support@velocitydigitallabs.com
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Our Portfolio", href: "#portfolio" },
                    { label: "Services Overview", href: "#services" },
                    { label: "Domains For Sale", href: "#domains" },
                    {
                      label: "CEO Website",
                      href: "https://rajatpratapsingh.com",
                      external: true,
                    },
                    {
                      label: "Digistreets Partner",
                      href: "https://digistreets.org",
                      external: true,
                    },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between group text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/30">
                Ready to start building? Let&apos;s make it happen.
              </p>
              <a
                href="mailto:admin@velocitydigitallabs.com"
                className="group flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-medium text-sm hover:opacity-90 transition-all"
              >
                Send us a message
                <Send
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

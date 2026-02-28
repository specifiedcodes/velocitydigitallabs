"use client";

import { motion } from "framer-motion";
import { Handshake, User, Building2, ExternalLink, MapPin, Phone, Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-pink-400 mb-4 block">
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            About <span className="gradient-text">Us</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Velocity Digital Labs LLC is driven by innovation, powered by
            technology, and focused on delivering exceptional digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CEO Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 flex items-center justify-center">
                <User size={24} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Rajat Pratap Singh
                </h3>
                <p className="text-sm text-white/40">Founder & CEO</p>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Rajat leads both Velocity Digital Labs LLC and Digistreets Infocom
              Pvt Ltd as CEO, bringing a unified vision for digital innovation
              across both organizations. With a passion for building scalable
              tech products, he drives strategy, product development, and
              partnerships.
            </p>
            <a
              href="https://rajatpratapsingh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              rajatpratapsingh.com
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Partnership Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center">
                <Handshake size={24} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Strategic Partner
                </h3>
                <p className="text-sm text-white/40">Digistreets Infocom Pvt Ltd</p>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Velocity Digital Labs is proud to partner with Digistreets Infocom
              Pvt Ltd, sharing the same CEO and a unified mission to deliver
              world-class digital solutions. Together, we combine global reach
              with deep technical expertise.
            </p>
            <a
              href="https://digistreets.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              digistreets.org
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 flex items-center justify-center">
                <Building2 size={24} className="text-violet-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Velocity Digital Labs LLC
                </h3>
                <p className="text-sm text-white/40">
                  Registered Limited Liability Company
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="text-xs font-medium tracking-widest uppercase text-white/30 mb-2">
                  <MapPin size={12} className="inline mr-1" />
                  Registered Address
                </h4>
                <p className="text-sm text-white/50">
                  131 Continental Dr, Suite 305
                  <br />
                  Newark, DE 19713
                  <br />
                  United States
                </p>
              </div>
              <div>
                <h4 className="text-xs font-medium tracking-widest uppercase text-white/30 mb-2">
                  <Calendar size={12} className="inline mr-1" />
                  Incorporated
                </h4>
                <p className="text-sm text-white/50">
                  February 12, 2026
                  <br />
                  State of Delaware
                  <br />
                  File #10509590
                </p>
              </div>
              <div>
                <h4 className="text-xs font-medium tracking-widest uppercase text-white/30 mb-2">
                  <Phone size={12} className="inline mr-1" />
                  Contact
                </h4>
                <p className="text-sm text-white/50">
                  +1 (323) 978-4263
                  <br />
                  admin@velocitydigitallabs.com
                  <br />
                  support@velocitydigitallabs.com
                </p>
              </div>
              <div>
                <h4 className="text-xs font-medium tracking-widest uppercase text-white/30 mb-2">
                  Focus Areas
                </h4>
                <p className="text-sm text-white/50">
                  Web Development, AI/ML Automations, Digital Marketing, SaaS
                  Products, Domain Investments
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Tag, ArrowUpRight } from "lucide-react";

const domains = [
  {
    name: "digitalindia.app",
    category: "Premium .app",
    highlight: true,
  },
  {
    name: "digitalindia.cloud",
    category: "Premium .cloud",
    highlight: true,
  },
  {
    name: "agendahq.com",
    category: "Premium .com",
    highlight: true,
  },
  {
    name: "docterz.ai",
    category: "Premium .ai",
    highlight: false,
  },
  {
    name: "restorationservices.ai",
    category: "Premium .ai",
    highlight: false,
  },
];

export default function Domains() {
  return (
    <section id="domains" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-emerald-400 mb-4 block">
            Premium Assets
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Domains <span className="gradient-text">For Sale</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            We own a collection of premium domains available for acquisition.
            Interested? Reach out to us.
          </p>
        </motion.div>

        {/* Domain List */}
        <div className="space-y-4">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-2xl px-8 py-6 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center">
                  <Tag size={16} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-mono">
                    {domain.name}
                  </h3>
                  <span className="text-xs text-white/30">{domain.category}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {domain.highlight && (
                  <span className="hidden sm:block text-[10px] font-medium tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Hot
                  </span>
                )}
                <a
                  href="#contact"
                  className="flex items-center gap-1 px-4 py-2 text-sm rounded-xl glass text-white/50 hover:text-white group-hover:bg-white/[0.08] transition-all"
                >
                  Inquire
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

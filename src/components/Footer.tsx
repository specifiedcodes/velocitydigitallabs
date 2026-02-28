"use client";

import { motion } from "framer-motion";

const productLinks = [
  { label: "VeloCards", href: "https://velocards.com" },
  { label: "VeloCalls", href: "https://velocalls.com" },
  { label: "ClickzProtect", href: "https://clickzprotect.com" },
  { label: "DevOS", href: "https://devos.team" },
  { label: "JustAnalytics", href: "https://justanalytics.app" },
  { label: "VelocityPay", href: "https://velocitypay.digital" },
  { label: "The Glassware Co.", href: "https://theglasswarecompany.com" },
  { label: "Fair Travels AI", href: "https://fairtravels.ai" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Domains", href: "#domains" },
  { label: "Contact", href: "#contact" },
];

const partnerLinks = [
  { label: "Digistreets", href: "https://digistreets.org" },
  { label: "CEO Website", href: "https://rajatpratapsingh.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-bold text-white text-sm">
                VDL
              </div>
              <span className="font-semibold text-white/90 text-sm">
                Velocity Digital Labs
              </span>
            </div>
            <p className="text-xs text-white/30 leading-relaxed mb-4">
              Building the future of digital — web development, AI automations,
              and digital marketing solutions.
            </p>
            <div className="text-xs text-white/20 space-y-1">
              <p>131 Continental Dr, Suite 305</p>
              <p>Newark, DE 19713, USA</p>
              <a
                href="tel:+13239784263"
                className="block hover:text-white/40 transition-colors"
              >
                +1 (323) 978-4263
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-white/50 mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/30 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-white/50 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/30 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-white/50 mb-4">
              Partners
            </h4>
            <ul className="space-y-2">
              {partnerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/30 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Velocity Digital Labs, LLC. A
            Delaware registered company. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/20">
            <a
              href="mailto:admin@velocitydigitallabs.com"
              className="hover:text-white/40 transition-colors"
            >
              admin@velocitydigitallabs.com
            </a>
            <span className="text-white/10">|</span>
            <a
              href="mailto:support@velocitydigitallabs.com"
              className="hover:text-white/40 transition-colors"
            >
              support@velocitydigitallabs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

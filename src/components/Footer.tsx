"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 px-4 sm:px-6 pb-6">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl glass rounded-3xl px-6 sm:px-10 py-10"
      >
        <div className="grid sm:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <a
              href="#"
              className="font-semibold text-xl tracking-tight flex items-center gap-2"
            >
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--accent-2))",
                }}
              />
              Lahiru<span className="text-gradient">.dev</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-[var(--muted)] leading-relaxed">
              Full-stack developer in Stockholm, building production-grade
              web platforms — open to full-time roles and freelance projects.
            </p>
            <a
              href="mailto:rukshan.lahiru.lahiru436@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--foreground)] hover:text-[var(--accent-soft)] transition-colors"
            >
              <Mail size={16} />
              rukshan.lahiru.lahiru436@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted)] mb-4">
              Navigate
            </p>
            <ul className="space-y-3 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted)] mb-4">
              Elsewhere
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com/LahiruRuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/lahiru-bhagya-686b87193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--muted)]">
          <span>© {new Date().getFullYear()} Lahiru. Built with Next.js &amp; Framer Motion.</span>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">
            Back to top ↑
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

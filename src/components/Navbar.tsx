"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass" : "border border-transparent"
        }`}
      >
        <a
          href="#"
          className="font-semibold text-lg tracking-tight flex items-center gap-2"
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

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative group transition-colors hover:text-[var(--foreground)]"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
            }}
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl glass text-[var(--foreground)]"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-auto max-w-6xl mt-3 glass rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-[var(--foreground)] hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-3 font-medium text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent-2))",
              }}
            >
              Let&apos;s talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

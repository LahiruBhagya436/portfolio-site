"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-grid" />
      <div
        className="blob blob-1 -top-24 -left-24 w-[420px] h-[420px]"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="blob blob-2 top-1/3 -right-32 w-[480px] h-[480px]"
        style={{ background: "var(--accent-2)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="glass rounded-3xl p-8 sm:p-12 md:p-14 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center"
        >
          <div>
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] px-4 py-1.5 text-sm text-[var(--muted)] mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to full-stack roles &amp; freelance projects
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-[3.4rem] font-semibold tracking-tight leading-[1.1]"
            >
              Hi, I&apos;m Lahiru —{" "}
              <span className="text-gradient">full-stack developer</span>{" "}
              building real, production-grade products.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg text-[var(--muted)]"
            >
              I design and ship complete platforms — not tutorial clones —
              from React/Next.js apps with Node and Prisma backends to
              custom WordPress &amp; WooCommerce builds. Currently building a
              multi-tenant SaaS product end-to-end, from database schema to
              deployed UI.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-transform hover:scale-[1.03]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--accent-2))",
                }}
              >
                View my work
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--glass-border)] px-6 py-3 font-medium text-[var(--foreground)] hover:bg-white/5 transition-colors"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 grid grid-cols-3 max-w-md gap-4"
            >
              {[
                { value: "4+", label: "Years experience" },
                { value: "10+", label: "Projects shipped" },
                { value: "6", label: "Clients & agencies" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-semibold text-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-[var(--muted)] leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-5 text-[var(--muted)]"
            >
              <a
                href="https://github.com/LahiruRuk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--foreground)] transition-colors"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.53 0-.27-.01-1.16-.02-2.1-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.43-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.24-5.11 5.51.4.35.76 1.04.76 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.64.77.53A11.04 11.04 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/lahiru-bhagya-686b87193"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--foreground)] transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
                </svg>
              </a>
              <a
                href="mailto:rukshan.lahiru.lahiru436@gmail.com"
                className="hover:text-[var(--foreground)] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            variants={item}
            className="relative mx-auto md:mx-0"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 sm:w-64 md:w-full max-w-[320px] aspect-[4/5] mx-auto"
            >
              {/* rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-[2rem] opacity-70"
                style={{
                  background:
                    "conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent))",
                  filter: "blur(2px)",
                }}
              />
              <div className="absolute inset-0 rounded-[1.75rem] overflow-hidden glass">
                <Image
                  src="/images/hero-profile.jpg"
                  alt="Lahiru — full-stack developer"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(6,6,10,0.55) 100%)",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const featured = {
  title: "Cleaning SaaS Platform",
  tag: "Flagship / Personal Project",
  description:
    "A multi-tenant booking & operations platform for Swedish cleaning companies, built end-to-end — from database schema to deployed UI. Designed and engineered as a real, production-grade product, not a tutorial clone.",
  features: [
    "Multi-tenant architecture with tenant-scoped routing & data isolation",
    "Stripe Connect payouts for company onboarding & payments",
    "RUT tax-deduction claim workflow with encrypted data handling",
    "Dedicated super-admin panel for platform-wide management",
  ],
  stack: ["Next.js", "Express", "Prisma", "PostgreSQL", "Stripe Connect"],
};

const projects = [
  {
    title: "Striker",
    tag: "Final Year Project",
    description:
      "Football player recommendation system combining a Python/Pandas machine-learning model with a Node.js API layer and an Angular frontend.",
    stack: ["Python", "Pandas", "Node.js", "Angular"],
  },
  {
    title: "Client Web & eCommerce Delivery",
    tag: "4+ years, multiple clients & agencies",
    description:
      "Designed and shipped full websites and eCommerce platforms for clients and agencies including T Seka Ceylon, Tcleaner, Cross and Tools, Surge Global and BlinQ Software — covering architecture, custom WordPress/WooCommerce builds, API-integrated plugins and ongoing support.",
    stack: ["WordPress", "WooCommerce", "PHP", "REST APIs"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="mb-14"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--accent-soft)]">
            Projects
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Real products, shipped to real users
          </h2>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={1}
          whileHover={{ y: -4 }}
          className="glass rounded-3xl p-8 sm:p-10 grid md:grid-cols-[1.1fr_0.9fr] gap-10"
        >
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {featured.title}
            </h3>
            <p className="mt-1 text-sm text-[var(--accent-soft)]">
              {featured.tag}
            </p>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              {featured.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[var(--glass-border)] px-3 py-1 text-xs text-[var(--muted)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <ul className="space-y-3 self-center">
            {featured.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-[var(--muted)] leading-relaxed">
                <CheckCircle2
                  size={18}
                  className="shrink-0 mt-0.5"
                  style={{ color: "var(--accent-soft)" }}
                />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i + 2}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-7 flex flex-col"
            >
              <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-1 text-sm text-[var(--accent-soft)]">{p.tag}</p>
              <p className="mt-4 text-[var(--muted)] leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--glass-border)] px-3 py-1 text-xs text-[var(--muted)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

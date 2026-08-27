"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "Freelance Full-Stack & WordPress Developer",
    org: "Self-Employed · Remote",
    period: "Jan 2024 — Present",
    points: [
      "Own complete websites and eCommerce platforms end-to-end for clients including T Seka Ceylon, Tcleaner and Cross and Tools — architecture, SEO, UX and ongoing support.",
      "Build React.js component systems and bespoke WordPress themes/plugins (PHP OOP, ACF, REST APIs, payment gateways).",
      "Currently building the Cleaning SaaS Platform end-to-end as a flagship personal project.",
    ],
  },
  {
    role: "Plugin Developer",
    org: "BlinQ Software",
    period: "Oct 2023 — Mar 2024",
    points: [
      "Built custom WordPress plugins, including an API-integrated product system that fetches and displays live server data in real time.",
      "Developed custom admin dashboards and frontend templates with PHP OOP and MySQL.",
    ],
  },
  {
    role: "WordPress & Frontend Developer",
    org: "Surge Global (Digital Agency)",
    period: "Jan 2023 — Jul 2023",
    points: [
      "Built fully customized WordPress/WooCommerce sites from Figma/XD designs within a deadline-driven agency workflow.",
      "Applied on-site SEO best practice and conversion-focused design across all deliveries.",
    ],
  },
  {
    role: "Web Developer Intern",
    org: "Builtapps Business Solutions",
    period: "Oct 2021 — Oct 2022",
    points: [
      "Developed WordPress websites and collaborated on a Flutter mobile app within an agile team.",
      "Gained full-cycle experience across database design, backend logic and frontend implementation.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--accent-soft)]">
              Experience
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              4+ years building for real clients
            </h2>
          </div>
        </motion.div>

        <div className="relative pl-8 sm:pl-10">
          <div
            className="absolute left-[3px] sm:left-[5px] top-2 bottom-2 w-px"
            style={{ background: "var(--glass-border)" }}
          />
          <div className="space-y-8">
            {experience.map((e, i) => (
              <motion.div
                key={e.role + e.period}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i}
                className="relative"
              >
                <span
                  className="absolute -left-8 sm:-left-10 top-1.5 w-3 h-3 rounded-full"
                  style={{
                    background: i === 0 ? "var(--accent-2)" : "var(--accent)",
                    boxShadow: "0 0 0 4px var(--background)",
                  }}
                />
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">{e.role}</h3>
                    <span className="text-sm text-[var(--muted)]">{e.period}</span>
                  </div>
                  <p className="text-sm text-[var(--accent-soft)] mt-0.5">{e.org}</p>
                  <ul className="mt-3 space-y-1.5 text-[var(--muted)] text-[15px] leading-relaxed list-disc list-inside">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center text-sm text-[var(--muted)]"
        >
          BSc (Hons) Computer Science, University of Westminster (via IIT Sri Lanka), 2018–2022
        </motion.div>
      </div>
    </section>
  );
}

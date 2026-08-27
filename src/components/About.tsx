"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  "Next.js", "React", "TypeScript", "Node.js", "Express",
  "Prisma", "PostgreSQL", "WordPress", "WooCommerce", "PHP",
  "MySQL", "MongoDB", "Stripe", "Tailwind CSS", "REST APIs", "Docker",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-grid opacity-50" />
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
            About
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            From idea to deployed product
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={1}
            className="relative w-full max-w-[280px] mx-auto md:mx-0"
          >
            <div className="relative aspect-[9/10] rounded-3xl overflow-hidden glass">
              <Image
                src="/images/about-profile.jpg"
                alt="Lahiru portrait"
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl -z-10 opacity-60"
              style={{ background: "var(--accent)", filter: "blur(30px)" }}
            />
          </motion.div>

          <div>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={2}
              className="text-lg text-[var(--muted)] leading-relaxed"
            >
              I&apos;m a freelance full-stack developer based in Stockholm,
              Sweden, with 4+ years of professional experience spanning
              custom WordPress &amp; WooCommerce builds and modern React/Next.js
              applications. I&apos;ve delivered full websites and eCommerce
              platforms for clients including T Seka Ceylon, Tcleaner and
              Cross and Tools, plus agency work for Surge Global and BlinQ
              Software. Right now I&apos;m building a multi-tenant SaaS booking
              and operations platform for Swedish cleaning companies, with
              Stripe Connect payouts, RUT tax-deduction handling, and a
              dedicated super-admin panel.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={3}
              className="mt-4 text-lg text-[var(--muted)] leading-relaxed"
            >
              I care about code that would hold up in a real engineering
              review — clean architecture, sensible documentation, and
              products that are actually deployed and usable, not just
              running on localhost.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={4}
              className="mt-10"
            >
              <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted)] mb-4">
                Tech I work with
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ y: -3 }}
                    className="glass rounded-full px-4 py-2 text-sm text-[var(--foreground)] cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

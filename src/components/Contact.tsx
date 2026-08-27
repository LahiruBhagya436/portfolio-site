"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="blob blob-1 top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px]"
        style={{ background: "var(--accent)" }}
      />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--accent-soft)]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Let&apos;s build something real
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)] max-w-xl mx-auto">
            Open to full-stack and frontend roles, freelance projects, and
            anything in between. Based in Stockholm — happy to work remote
            or on-site.
          </p>

          <div className="mt-10 glass rounded-3xl p-8 sm:p-10 flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4 text-[var(--muted)] text-sm">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} />
                Spånga, Stockholm, Sweden
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:rukshan.lahiru.lahiru436@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-transform hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                }}
              >
                <Mail size={18} />
                rukshan.lahiru.lahiru436@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

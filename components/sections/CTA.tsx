'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-dark to-purple-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 orb orb-accent opacity-20" />

          <div className="relative z-10 px-8 py-20 md:px-16 md:py-28 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-white mb-6"
            >
              Ready to build something{' '}
              <span className="relative inline-block">
                extraordinary?
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-6 text-white/40"
                  viewBox="0 0 300 24"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <path d="M2 20C100 0 200 24 298 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </motion.svg>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Let our AI-first team turn your vision into a shipped product — faster than you thought possible. Book a free strategy call — no commitment, just clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-dark rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span>Start a Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View Our Work</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

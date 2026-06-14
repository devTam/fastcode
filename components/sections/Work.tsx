'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'NovaPay',
    category: 'Fintech · Mobile App',
    description: 'A next-gen digital wallet with biometric auth and real-time transaction tracking for 200K+ users.',
    gradient: 'from-brand/40 via-purple-900/30 to-bg',
    tags: ['React Native', 'Node.js', 'Stripe'],
  },
  {
    title: 'Arcline',
    category: 'SaaS · Web Platform',
    description: 'End-to-end project management suite with AI-powered sprint planning and team analytics.',
    gradient: 'from-cyan-500/20 via-brand/20 to-bg',
    tags: ['Next.js', 'PostgreSQL', 'OpenAI'],
  },
  {
    title: 'Bloom Studio',
    category: 'Branding · E-commerce',
    description: 'Complete brand identity and headless Shopify storefront for a luxury skincare line.',
    gradient: 'from-accent/20 via-rose-900/20 to-bg',
    tags: ['Brand Design', 'Shopify', 'Figma'],
  },
  {
    title: 'FleetIQ',
    category: 'Logistics · Dashboard',
    description: 'Real-time fleet tracking dashboard with predictive maintenance alerts and route optimization.',
    gradient: 'from-emerald-500/20 via-brand/10 to-bg',
    tags: ['React', 'Mapbox', 'AWS'],
  },
];

export default function Work() {
  return (
    <section id="work" className="section-padding relative overflow-hidden bg-surface">
      <div className="container-site relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-2xl"
          >
            <span className="badge mb-6">Selected Work</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-6">
              Projects that <span className="gradient-text italic">speak</span> for themselves
            </h2>
            <p className="text-text-muted text-xl leading-relaxed">
              A curated selection of products we&apos;ve designed and engineered for ambitious teams worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#contact" className="btn-secondary whitespace-nowrap">
              <span>Discuss Your Project</span>
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card overflow-hidden cursor-pointer"
            >
              <div
                className={`relative h-64 md:h-72 bg-gradient-to-br ${project.gradient} flex items-end p-8 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.15),transparent_60%)]" />
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-brand group-hover:border-brand">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-medium text-brand-light mb-2">{project.category}</p>
                  <h3 className="font-display text-3xl font-bold">{project.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-text-muted leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

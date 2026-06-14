'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Users, TrendingUp } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3x', label: 'Average ROI' },
  { value: '24h', label: 'Response Time' },
];

const reasons = [
  {
    icon: <Zap size={24} className="text-brand-light" />,
    title: 'Speed Without Compromise',
    description:
      'We ship fast because we plan well. Agile sprints, clear milestones, and zero scope creep keep your timeline on track.',
  },
  {
    icon: <Shield size={24} className="text-brand-light" />,
    title: 'Built to Last',
    description:
      'Clean architecture, thorough testing, and scalable infrastructure — your product grows with your business, not against it.',
  },
  {
    icon: <Users size={24} className="text-brand-light" />,
    title: 'True Partnership',
    description:
      'We embed with your team. Weekly demos, transparent communication, and shared ownership from kickoff to launch.',
  },
  {
    icon: <TrendingUp size={24} className="text-brand-light" />,
    title: 'Results-Driven',
    description:
      'Every pixel and line of code serves a business goal. We measure success by your metrics — conversions, retention, revenue.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden bg-bg">
      <div className="orb orb-brand w-[500px] h-[500px] top-0 right-[-10%] opacity-10" />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="badge mb-6">Why Fastcode</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-6">
            The agency that <span className="gradient-text italic">gets it done</span>
          </h2>
          <p className="text-text-muted text-xl leading-relaxed">
            We&apos;re not another dev shop. We&apos;re a team of designers and engineers obsessed with building products that win.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="stat-number gradient-text-brand mb-2">{stat.value}</div>
              <p className="text-text-muted text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 p-8 rounded-2xl border border-border hover:border-brand/30 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-surface-elevated border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-text-muted leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

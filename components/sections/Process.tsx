'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Search size={28} className="text-brand-light" />,
    title: 'Discover',
    description:
      'We dive deep into your business, users, and goals. Stakeholder interviews, competitive analysis, and technical audits set the foundation.',
    deliverables: ['Project Brief', 'User Research', 'Tech Audit'],
  },
  {
    number: '02',
    icon: <PenTool size={28} className="text-brand-light" />,
    title: 'Design',
    description:
      'Wireframes evolve into high-fidelity prototypes. Every screen is tested for usability before a single line of code is written.',
    deliverables: ['Wireframes', 'UI Design', 'Interactive Prototype'],
  },
  {
    number: '03',
    icon: <Code2 size={28} className="text-brand-light" />,
    title: 'Develop',
    description:
      'Agile sprints with weekly demos. Clean, tested code deployed to staging so you see progress in real time, every week.',
    deliverables: ['Sprint Demos', 'Code Reviews', 'QA Testing'],
  },
  {
    number: '04',
    icon: <Rocket size={28} className="text-brand-light" />,
    title: 'Launch & Scale',
    description:
      'We handle deployment, monitoring, and post-launch optimization. Your product goes live — and keeps getting better.',
    deliverables: ['Deployment', 'Analytics Setup', 'Ongoing Support'],
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden bg-surface">
      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mb-20"
        >
          <span className="badge mb-6">Our Process</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-6">
            From idea to <span className="gradient-text italic">impact</span>
          </h2>
          <p className="text-text-muted text-xl leading-relaxed">
            A proven four-phase framework that turns ambitious visions into shipped products — on time and on budget.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass-card p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-5xl font-bold text-brand/20">{step.number}</span>
                    <div className="w-14 h-14 rounded-xl bg-surface-elevated border border-border flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed mb-8 flex-grow">{step.description}</p>

                  <ul className="space-y-2 border-t border-border pt-6">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                        <span className="w-1 h-1 rounded-full bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

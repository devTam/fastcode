'use client';

import { motion } from 'framer-motion';
import { Palette, Layers, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Palette size={32} className="text-brand-light" />,
    title: 'Design & Branding',
    description: 'We craft stunning brand identities, logos, and UI/UX designs that capture attention and communicate your unique value proposition.',
    features: ['Logo Design', 'Brand Guidelines', 'UI/UX Design', 'Prototyping'],
  },
  {
    icon: <Layers size={32} className="text-brand-light" />,
    title: 'Web Applications',
    description: 'From SaaS platforms to complex customer portals, we engineer scalable, high-performance web applications using modern tech stacks.',
    features: ['Custom Web Apps', 'SaaS Development', 'E-commerce', 'API Integration'],
  },
  {
    icon: <Smartphone size={32} className="text-brand-light" />,
    title: 'Native & Mobile Apps',
    description: 'We build fluid, responsive native applications for iOS and Android that provide exceptional user experiences on any device.',
    features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Maintenance'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-bg">
      <div className="container-site z-10 relative">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              AI-powered delivery, <span className="gradient-text italic pr-2">human craft</span>
            </h2>
            <p className="text-text-muted text-xl leading-relaxed">
              We use AI to move faster on every project — from design exploration to code generation — without sacrificing the quality your users deserve.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-10 flex flex-col h-full group relative overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-surface-elevated border border-border flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h3>
              <p className="text-text-muted mb-8 flex-grow relative z-10 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 relative z-10 mt-auto border-t border-border pt-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

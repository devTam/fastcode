'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Fastcode took our rough concept and turned it into a polished product in 10 weeks. Their design sensibility is unmatched — our users constantly compliment the interface.',
    author: 'Sarah Chen',
    role: 'CEO, NovaPay',
    avatar: 'SC',
  },
  {
    quote:
      'We\'ve worked with three agencies before Fastcode. The difference is night and day — transparent communication, on-time delivery, and code we actually understand.',
    author: 'Marcus Webb',
    role: 'CTO, Arcline',
    avatar: 'MW',
  },
  {
    quote:
      'They didn\'t just build our app — they challenged our assumptions and made the product better. Our conversion rate jumped 40% after launch.',
    author: 'Elena Rodriguez',
    role: 'Founder, Bloom Studio',
    avatar: 'ER',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-bg">
      <div className="orb orb-accent w-[400px] h-[400px] bottom-0 left-[-5%] opacity-10" />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="badge mb-6">Testimonials</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-6">
            Trusted by <span className="gradient-text italic">founders</span> worldwide
          </h2>
          <p className="text-text-muted text-xl leading-relaxed">
            Don&apos;t take our word for it — hear from the teams we&apos;ve helped build and launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col h-full"
            >
              <Quote size={32} className="text-brand/40 mb-6 shrink-0" />
              <p className="text-text-primary/90 leading-relaxed mb-8 flex-grow text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center font-display font-bold text-brand-light text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <cite className="not-italic font-semibold block">{testimonial.author}</cite>
                  <span className="text-text-muted text-sm">{testimonial.role}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

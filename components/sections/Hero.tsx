'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.2, 0.15],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="orb orb-brand w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] top-[10%] left-[-10%]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="orb orb-accent w-[70vw] h-[70vw] md:w-[500px] md:h-[500px] bottom-[10%] right-[-10%]"
        />
      </div>

      <motion.div style={{ y, opacity }} className="container-site relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-start gap-6">
          <div className="badge mb-4">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Fastcode Software Agency
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter">
            <AnimatedText text="We Build Software" el="span" /> <br />
            <span className="gradient-text glow-text relative inline-block mt-2">
              <AnimatedText text="That Moves" el="span" />
              {/* Decorative line under "That Moves" */}
              <motion.svg
                className="absolute -bottom-4 left-0 w-full h-8 text-brand"
                viewBox="0 0 300 24"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
              >
                <path d="M2 20C100 0 200 24 298 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </motion.svg>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-2xl text-text-muted max-w-2xl mt-6 leading-relaxed"
          >
            Premium design and powerful engineering for companies who refuse to blend in. Mobile apps, web platforms, and world-class branding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link href="#contact" className="btn-primary">
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="#work" className="btn-secondary">
              <Play fill="currentColor" size={14} />
              <span>See Our Work</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-sm"
      >
        <span>Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-text-muted to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-full h-1/2 bg-brand"
          />
        </div>
      </motion.div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const budgetOptions = [
  'Under $10K',
  '$10K – $25K',
  '$25K – $50K',
  '$50K – $100K',
  '$100K+',
];

const contactInfo = [
  { icon: <Mail size={20} className="text-brand-light" />, label: 'Email', value: 'hello@fastcode.dev' },
  { icon: <MapPin size={20} className="text-brand-light" />, label: 'Location', value: 'San Francisco, CA' },
  { icon: <Clock size={20} className="text-brand-light" />, label: 'Response Time', value: 'Within 24 hours' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-surface">
      <div className="orb orb-brand w-[600px] h-[600px] top-[-10%] left-[-10%] opacity-10" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="badge mb-6">Get in Touch</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-6">
              Let&apos;s build your <span className="gradient-text italic">next big thing</span>
            </h2>
            <p className="text-text-muted text-xl leading-relaxed mb-12">
              Tell us about your project and we&apos;ll get back to you within 24 hours with an AI-accelerated delivery plan tailored to your timeline.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Smith"
                    className={`input-field ${errors.name ? 'error' : ''}`}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="text-accent text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    className={`input-field ${errors.email ? 'error' : ''}`}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-accent text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Acme Inc."
                    className="input-field"
                    {...register('company')}
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget *
                  </label>
                  <select
                    id="budget"
                    className={`input-field ${errors.budget ? 'error' : ''}`}
                    {...register('budget')}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option} className="bg-surface-elevated">
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-accent text-sm mt-1">{errors.budget.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className={`input-field resize-none ${errors.message ? 'error' : ''}`}
                  {...register('message')}
                />
                {errors.message && (
                  <p className="text-accent text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                >
                  <CheckCircle size={20} />
                  <p className="text-sm font-medium">Message sent! We&apos;ll be in touch within 24 hours.</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { Twitter, Linkedin, Dribbble } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Dribbble', href: 'https://dribbble.com', icon: Dribbble },
];

export default function Footer() {
  return (
    <footer className="bg-surface pt-20 border-t border-border">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display font-bold text-3xl tracking-tighter">
                Fast<span className="text-brand">code</span>
              </span>
            </Link>
            <p className="text-text-muted max-w-sm mb-8 leading-relaxed">
              An AI-first software agency that helps forward-thinking companies ship faster. We combine AI-powered development with premium design to deliver products in record time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-brand hover:border-brand transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-text-muted hover:text-white transition-colors">Brand Identity</Link></li>
              <li><Link href="#services" className="text-text-muted hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="#services" className="text-text-muted hover:text-white transition-colors">Web Applications</Link></li>
              <li><Link href="#services" className="text-text-muted hover:text-white transition-colors">Native Mobile Apps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#work" className="text-text-muted hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="#why-us" className="text-text-muted hover:text-white transition-colors">Why Fastcode</Link></li>
              <li><Link href="#contact" className="text-text-muted hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-text-muted hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <p>© {new Date().getFullYear()} Fastcode Agency. All rights reserved.</p>
          <p>Designed to convert.</p>
        </div>
      </div>
    </footer>
  );
}

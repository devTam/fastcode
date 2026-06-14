import Hero from '@/components/sections/Hero';
import ServicesMarquee from '@/components/sections/ServicesMarquee';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import WhyUs from '@/components/sections/WhyUs';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <Services />
      <Work />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}

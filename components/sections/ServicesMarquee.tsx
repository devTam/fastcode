import Marquee from '../ui/Marquee';

export default function ServicesMarquee() {
  const items = ['AI-Powered Development', '•', 'Brand Identity', '•', 'UI/UX Design', '•', 'Web Applications', '•', 'Native Mobile Apps', '•', 'Ship Fast', '•'];
  
  return (
    <section className="bg-surface">
      <Marquee items={items} />
    </section>
  );
}

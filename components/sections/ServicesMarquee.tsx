import Marquee from '../ui/Marquee';

export default function ServicesMarquee() {
  const items = ['Brand Identity', '•', 'UI/UX Design', '•', 'Web Applications', '•', 'Native Mobile Apps', '•', 'Design Systems', '•'];
  
  return (
    <section className="bg-surface">
      <Marquee items={items} />
    </section>
  );
}

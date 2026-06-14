'use client';

export default function Marquee({ items, reverse = false }: { items: string[], reverse?: boolean }) {
  return (
    <div className="relative flex overflow-x-hidden border-y border-border py-6 bg-surface-card">
      <div className={`animate-marquee${reverse ? '2' : ''} whitespace-nowrap flex items-center`}>
        {items.map((item, idx) => (
          <span key={idx} className="mx-8 font-display font-bold text-4xl uppercase tracking-wider text-text-muted">
            {item}
          </span>
        ))}
        {items.map((item, idx) => (
          <span key={`dup-${idx}`} className="mx-8 font-display font-bold text-4xl uppercase tracking-wider text-text-muted">
            {item}
          </span>
        ))}
      </div>
      <div className={`absolute top-0 animate-marquee${reverse ? '2' : ''} whitespace-nowrap flex items-center`} style={{ left: '100%' }}>
         {items.map((item, idx) => (
          <span key={`dup2-${idx}`} className="mx-8 font-display font-bold text-4xl uppercase tracking-wider text-text-muted">
            {item}
          </span>
        ))}
        {items.map((item, idx) => (
          <span key={`dup3-${idx}`} className="mx-8 font-display font-bold text-4xl uppercase tracking-wider text-text-muted">
            {item}
          </span>
        ))}
      </div>
      
      {/* Gradients for smooth fade out at edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-card to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-card to-transparent pointer-events-none" />
    </div>
  );
}

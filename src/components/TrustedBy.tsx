'use client';

const TrustedBy = () => {
  const companies = ['TechCorp', 'InnovateLabs', 'DigitalFlow', 'CloudBase', 'DataPro', 'NextGen', 'Synapse', 'Quantum'];

  return (
    <section className="relative py-14 overflow-hidden" style={{ background: 'hsl(var(--surface))' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-8 mb-8">
          <span className="text-caption whitespace-nowrap">Trusted by</span>
          <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to right, hsl(var(--surface)), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to left, hsl(var(--surface)), transparent)' }} />
          <div className="flex animate-marquee">
            {[...companies, ...companies].map((c, i) => (
              <div key={i} className="flex-shrink-0 mx-8">
                <span className="font-serif font-semibold text-lg whitespace-nowrap" style={{ color: 'hsl(var(--ink-muted))' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

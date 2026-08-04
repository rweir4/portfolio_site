import { useState } from 'react';

const screenshots = [
  { src: 'images/cartridge-home.png',    caption: 'Home dashboard' },
  { src: 'images/cartridge-library.png', caption: 'Game library' },
  { src: 'images/cartridge-detail.png',  caption: 'Game detail' },
  { src: 'images/cartridge-log.png',     caption: 'Log & rate' },
  { src: 'images/cartridge-profile.png', caption: 'Profile & stats' },
];

const highlights = [
  'Built a full-stack mobile app that lets users search games via IGDB, log play status, leave ratings and reviews, and track library stats over time.',
  'Designed a Supabase backend with row-level security covering library entries, ratings, and user profiles.',
  'Architected a custom hook layer decoupling data-fetching from the UI with optimistic refetch patterns.',
  'Wrote a comprehensive test suite using Jest and React Native Testing Library across all hooks, components, and page flows.',
];

const techStack = [
  'React Native', 'Expo', 'TypeScript', 'Supabase',
  'IGDB API', 'NativeWind', 'Expo Router', 'Jest', 'React Native Testing Library',
];

const ScreenshotCarousel = () => {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const go = (next) => {
    setFading(true);
    setTimeout(() => {
      setIndex(next);
      setFading(false);
    }, 150);
  };

  const prev = () => go((index - 1 + screenshots.length) % screenshots.length);
  const next = () => go((index + 1) % screenshots.length);

  return (
    <div className="mt-10 md:mt-0 shrink-0 flex flex-col items-center gap-5">
      <div className="w-56 h-[480px] shrink-0">
        <img
          src={screenshots[index].src}
          alt={screenshots[index].caption}
          className="w-full h-full object-cover rounded-3xl border border-[var(--line)] shadow-2xl transition-opacity duration-150"
          style={{ opacity: fading ? 0 : 1 }}
        />
      </div>
      <span className="text-[var(--meta)] text-sm font-medium" style={{ fontFamily: 'var(--mono)' }}>
        {screenshots[index].caption}
      </span>
      <div className="flex items-center gap-6">
        <button onClick={prev} aria-label="Previous screenshot" className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--petrol)] hover:bg-[rgba(12,107,117,0.08)] transition-colors">←</button>
        <div className="flex gap-2 items-center">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${i === index ? 'w-5 bg-[var(--petrol)]' : 'w-2 bg-[var(--line)]'}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next screenshot" className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--petrol)] hover:bg-[rgba(12,107,117,0.08)] transition-colors">→</button>
      </div>
    </div>
  );
};

const CartridgeShowcase = () => (
  <section className="cartridge">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">Side project</span>
      </div>
      <div className="cartridge-card">
        <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-14">
          <div className="flex-1 pr-0 md:pr-8">
            <div className="mb-6">
              <h2 className="section-title" style={{ marginTop: 0 }}>Cartridge — Mobile App</h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] mt-2 mb-1" style={{ fontFamily: 'var(--serif)' }}>Goodreads for Gamers</h3>
              <p className="text-[var(--muted)] text-lg" style={{ fontFamily: 'var(--mono)', fontSize: '.85rem', letterSpacing: '.03em' }}>Mobile Game Logging App · Personal Project</p>
            </div>
            <ul className="list-none space-y-4 mb-6">
              {highlights.map(highlight => (
                <li key={highlight} className="text-[var(--muted)] leading-relaxed pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--petrol)] before:font-bold">
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {techStack.map(tech => (
                <span key={tech} className="chip">{tech}</span>
              ))}
            </div>
          </div>
          <ScreenshotCarousel />
        </div>
      </div>
    </div>
  </section>
);

export default CartridgeShowcase;

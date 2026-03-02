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
  const prev = () => setIndex(i => (i - 1 + screenshots.length) % screenshots.length);
  const next = () => setIndex(i => (i + 1) % screenshots.length);

  return (
    <div className="mt-10 md:mt-0 shrink-0 flex flex-col items-center gap-5">
      <img
        key={index}
        src={screenshots[index].src}
        alt={screenshots[index].caption}
        className="w-full max-w-[260px] rounded-3xl border border-white/15 shadow-2xl animate-fade-in"
      />
      <span className="text-white/70 text-sm font-medium">
        {screenshots[index].caption}
      </span>
      <div className="flex items-center gap-6">
        <button onClick={prev} className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors">←</button>
        <div className="flex gap-2 items-center">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${i === index ? 'w-5 bg-white' : 'w-2 bg-white/35'}`}
            />
          ))}
        </div>
        <button onClick={next} className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors">→</button>
      </div>
    </div>
  );
};

const CartridgeShowcase = () => (
  <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl w-[90%] mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-8 p-20">
      <div className="flex-1 pr-0 md:pr-8">
        <div className="mb-6">
          <h2 className="section-title">Cartridge - Mobile App</h2>
          <h3 className="text-3xl font-semibold text-white mb-1">Goodreads for Gamers</h3>
          <p className="text-white/80 text-lg">Mobile Game Logging App · Personal Project</p>
        </div>
        <ul className="list-none space-y-4 mb-6">
          {highlights.map(hightlight => (
            <li key={hightlight} className="text-white/90 leading-relaxed pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-white/60 before:font-bold">
              {hightlight}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {techStack.map(tech => (
            <span key={tech} className="bg-white/15 border border-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <ScreenshotCarousel />
    </div>
  </div>
);

export default CartridgeShowcase;
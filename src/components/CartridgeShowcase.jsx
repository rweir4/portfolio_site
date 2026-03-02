const CartridgeShowcase = () => (
  <section className="experience">
    <div className="container">
      <h2 className="section-title">Cartridge - Mobile App</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

        {/* ── Main project card ── */}
        <div className="experience-item" style={{ maxWidth: '100%' }}>
          <div className="exp-header">
            <div>
              <h3 className="exp-title">Goodreads for Gamers</h3>
            </div>
          </div>

          <ul className="exp-highlights">
            <li>
              Built a full-stack mobile app from scratch that lets users search any game via the IGDB API,
              log their play status, leave ratings and reviews, and track library stats over time.
            </li>
            <li>
              Designed and implemented a Supabase backend with row-level security, including tables for
              library entries, ratings, and user profiles — all scoped to the authenticated user.
            </li>
            <li>
              Architected a custom hook layer (useLibrary, useGame, useLibraryEntry, useLibraryMutations)
              that decouples data-fetching from the UI and provides optimistic refetch patterns.
            </li>
            <li>
              Wrote a comprehensive test suite using Jest and React Native Testing Library, covering all
              hooks, components, and page flows with shared fixture factories and mock helpers.
            </li>
          </ul>

          <div className="tech-stack" style={{ marginTop: '1.5rem' }}>
            {['React Native', 'Expo', 'TypeScript', 'Supabase', 'IGDB API', 'NativeWind', 'Expo Router', 'Jest', 'RNTL'].map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {/* ── Screenshot grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.25rem',
          alignItems: 'start',
        }}>
          {[
            { src: 'images/cartridge-home.png',    caption: 'Home dashboard' },
            { src: 'images/cartridge-library.png', caption: 'Game library' },
            { src: 'images/cartridge-detail.png',  caption: 'Game detail' },
            { src: 'images/cartridge-log.png',     caption: 'Log & rate' },
            { src: 'images/cartridge-profile.png', caption: 'Profile & stats' },
          ].map(({ src, caption }) => (
            <div key={caption} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                width: '100%',
              }}>
                <img
                  src={src}
                  alt={caption}
                  style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                />
              </div>
              <span style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.8rem',
                fontWeight: 500,
                textAlign: 'center',
              }}>
                {caption}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default CartridgeShowcase;
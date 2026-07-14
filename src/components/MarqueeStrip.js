// This strip is decorative, so it does not need state or JavaScript timers.
// CSS handles the continuous right-to-left movement.
export default function MarqueeStrip() {
  const marqueeItems = Array.from({ length: 8 }, (_, index) => index);

  return (
    <section className="marquee-strip" aria-label="Captured by Carla marquee">
      <div className="marquee-track">
        {/* The two matching groups make the loop seamless as one group exits. */}
        {[1, 2].map((group) => (
          <div className="marquee-group" aria-hidden={group === 2} key={group}>
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={`${group}-${item}`}>
                capturedbycarla
                <span className="marquee-divider">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

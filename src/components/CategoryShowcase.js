"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// These paths draw the decorative label frames shown around the center text.
// They are SVG paths instead of CSS clip-paths because SVG keeps the outlines
// clean and easier to adjust later.
const framePaths = {
  "shape-one":
    "M70 28 C82 12 104 18 114 30 C134 8 164 18 170 36 C190 18 220 18 230 36 C236 18 266 8 286 30 C296 18 318 12 330 28 C354 28 374 48 372 74 C392 88 392 116 374 130 C392 144 392 172 372 186 C374 212 354 232 330 232 C318 248 296 242 286 230 C266 252 236 242 230 224 C210 242 190 242 170 224 C164 242 134 252 114 230 C104 242 82 248 70 232 C46 232 26 212 28 186 C8 172 8 144 26 130 C8 116 8 88 28 74 C26 48 46 28 70 28 Z",
  "shape-two":
    "M58 28 H342 V44 H374 V102 C350 108 350 152 374 158 V216 H342 V232 H58 V216 H26 V158 C50 152 50 108 26 102 V44 H58 Z",
  "shape-three":
    "M58 44 C86 20 118 38 136 28 C160 12 184 34 200 28 C216 34 240 12 264 28 C282 38 314 20 342 44 C370 68 350 100 372 124 C392 146 356 170 368 202 C348 230 310 212 286 230 C260 250 226 222 200 232 C174 222 140 250 114 230 C90 212 52 230 32 202 C44 170 8 146 28 124 C50 100 30 68 58 44 Z",
  "shape-four":
    "M52 28 H348 V50 H376 V104 C352 112 352 148 376 156 V210 H348 V232 H52 V210 H24 V156 C48 148 48 112 24 104 V50 H52 Z",
  "shape-five":
    "M54 28 H346 Q374 28 374 56 V204 Q374 232 346 232 H54 Q26 232 26 204 V56 Q26 28 54 28 Z",
};

function FrameShape({ shape }) {
  return (
    <svg
      aria-hidden="true"
      className="showcase-frame-svg"
      focusable="false"
      preserveAspectRatio="none"
      viewBox="0 0 400 260"
    >
      <path d={framePaths[shape]} />
    </svg>
  );
}

// This component is a Client Component because it uses state and a timer.
// The homepage sends it placeholder categories from src/data/homepage.js.
export default function CategoryShowcase({ categories }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Every 8 seconds, move to the next category.
  // The modulo (%) makes the slideshow loop back to the first category.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % categories.length;
      });
    }, 8000);

    // Cleanup stops the old timer if this component ever unmounts.
    return () => clearInterval(timer);
  }, [categories.length]);

  const activeCategory = categories[activeIndex];

  return (
    <section className="showcase-section" aria-labelledby="showcase-heading">
      {/* Category tabs show every photo style and highlight the active one. */}
      <div className="showcase-tabs" role="tablist" aria-label="Photography styles">
        {categories.map((category, index) => (
          <button
            aria-selected={activeIndex === index}
            className={activeIndex === index ? "is-active" : ""}
            key={category.id}
            onClick={() => setActiveIndex(index)}
            role="tab"
            type="button"
          >
            {category.category}
          </button>
        ))}
      </div>

      <div className={`showcase-collage ${activeCategory.layoutVariant}`}>
        {/* Decorative placeholder photos around the center callout. */}
        {activeCategory.photos.map((photoUrl, photoIndex) => (
          <div
            className={`showcase-photo showcase-photo-${photoIndex + 1}`}
            key={`${activeCategory.id}-${photoUrl}`}
          >
            <Image
              src={photoUrl}
              alt={`${activeCategory.category} placeholder photo`}
              fill
              sizes="(max-width: 768px) 42vw, 260px"
              className="object-cover"
            />
          </div>
        ))}

        {/* The frame shape changes for each category, but the text stays editable. */}
        <div className={`showcase-card-frame ${activeCategory.frameShape}`}>
          <FrameShape shape={activeCategory.frameShape} />
          <div className="showcase-card">
            <p className="section-eyebrow">Featured Stories</p>
            <h2 id="showcase-heading">{activeCategory.category}</h2>
            <p>{activeCategory.label}</p>
            <div className="showcase-actions">
              <a href="/investment">See Packages</a>
              <a href="#contact">Book Session</a>
            </div>
          </div>
        </div>
      </div>

      {/* Small dots mirror the tab state and give a subtle slideshow indicator. */}
      <div className="showcase-dots" aria-label="Choose a photo category">
        {categories.map((category, index) => (
          <button
            aria-label={`Show ${category.category}`}
            aria-pressed={activeIndex === index}
            className={activeIndex === index ? "is-active" : ""}
            key={category.id}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}

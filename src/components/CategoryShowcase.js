"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      <div className="showcase-collage">
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

        {/* This center text changes when the active category changes. */}
        <div className="showcase-card">
          <p className="section-eyebrow">Featured Stories</p>
          <h2 id="showcase-heading">{activeCategory.category}</h2>
          <p>{activeCategory.label}</p>
          <a href="/portfolio">View Portfolio</a>
        </div>
      </div>

      {/* Dots show which category is active. They are buttons for accessibility. */}
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

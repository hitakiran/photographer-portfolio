"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// PortfolioGallery needs to be a Client Component because it uses filter
// buttons and watches each image as it scrolls into view.
export default function PortfolioGallery({ categories, photos }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visiblePhotoIds, setVisiblePhotoIds] = useState([]);
  const cardRefs = useRef({});

  const filterTabs = ["All", ...categories];
  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const photoId = entry.target.dataset.photoId;

          // Store each photo id once, so the pop animation only runs the
          // first time that photo enters the viewport.
          setVisiblePhotoIds((currentIds) => {
            if (currentIds.includes(photoId)) {
              return currentIds;
            }

            return [...currentIds, photoId];
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18 },
    );

    filteredPhotos.forEach((photo) => {
      const cardElement = cardRefs.current[photo.id];

      if (cardElement && !visiblePhotoIds.includes(photo.id)) {
        observer.observe(cardElement);
      }
    });

    return () => observer.disconnect();
  }, [filteredPhotos, visiblePhotoIds]);

  return (
    <section className="portfolio-gallery-section" aria-labelledby="portfolio-gallery-heading">
      <div className="portfolio-tabs" aria-label="Filter portfolio by category">
        {filterTabs.map((category) => (
          <button
            className={activeCategory === category ? "is-active" : ""}
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <h2 id="portfolio-gallery-heading" className="sr-only">
        Portfolio gallery
      </h2>

      <div className="portfolio-masonry">
        {filteredPhotos.map((photo, index) => {
          const isVisible = visiblePhotoIds.includes(photo.id);

          return (
            <article
              className={`portfolio-card${isVisible ? " is-visible" : ""}`}
              data-photo-id={photo.id}
              key={photo.id}
              ref={(element) => {
                cardRefs.current[photo.id] = element;
              }}
              style={{
                // A tiny stagger makes photos in the same area pop in more naturally.
                transitionDelay: `${(index % 4) * 70}ms`,
              }}
            >
              <Image
                alt={photo.caption}
                height={photo.height}
                loading={index < 3 ? "eager" : "lazy"}
                src={photo.image_url}
                width={photo.width}
                sizes="(max-width: 720px) 92vw, (max-width: 1100px) 46vw, 31vw"
              />
              <p>{photo.caption}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

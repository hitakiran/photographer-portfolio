import GalleryImage from "@/components/portfolio/GalleryImage";

// GalleryGrid uses CSS columns for a simple masonry-style layout.
// The cards naturally stagger because each image keeps its own aspect ratio.
export default function GalleryGrid({ photos }) {
  return (
    <section aria-label="Portfolio photo gallery">
      <div className="columns-1 gap-8 sm:columns-2 xl:columns-3 [column-gap:2rem]">
        {photos.map((photo, index) => (
          <GalleryImage
            delay={`${index * 70}ms`}
            key={photo.id}
            photo={photo}
          />
        ))}
      </div>
    </section>
  );
}

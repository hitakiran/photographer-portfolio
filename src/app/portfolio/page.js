import PortfolioGallery from "@/components/PortfolioGallery";
import { portfolioCategories, portfolioPhotos } from "@/data/portfolio";

export const metadata = {
  title: "Portfolio | Carla Santos Photography",
  description: "A placeholder masonry photography portfolio for Carla Santos.",
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page" id="top">
      <PortfolioGallery
        categories={portfolioCategories}
        heading="Stories told in honest, timeless frames."
        intro="A curated placeholder gallery for Carla's brands, portraits, couples, weddings, and families work."
        photos={portfolioPhotos}
      />
    </main>
  );
}

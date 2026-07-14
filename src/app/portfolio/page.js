import PortfolioGallery from "@/components/PortfolioGallery";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { contactContent, heroContent, navLinks } from "@/data/homepage";
import { portfolioCategories, portfolioPhotos } from "@/data/portfolio";

export const metadata = {
  title: "Portfolio | Carla Santos Photography",
  description: "A placeholder masonry photography portfolio for Carla Santos.",
};

export default function PortfolioPage() {
  return (
    <main className="site-shell portfolio-page" id="top">
      <SiteHeader navLinks={navLinks} navLogo={heroContent.navLogo} />

      <section className="portfolio-hero" aria-labelledby="portfolio-heading">
        <p className="section-eyebrow">Portfolio</p>
        <h1 id="portfolio-heading">Stories told in honest, timeless frames.</h1>
        <p>
          A curated placeholder gallery for Carla&apos;s brands, portraits, couples,
          weddings, and families work.
        </p>
      </section>

      <PortfolioGallery categories={portfolioCategories} photos={portfolioPhotos} />

      <SiteFooter content={contactContent} />
    </main>
  );
}

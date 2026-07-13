import Image from "next/image";
import CategoryShowcase from "@/components/CategoryShowcase";
import {
  aboutContent,
  categoryShowcase,
  heroContent,
  navLinks,
} from "@/data/homepage";

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero-section" id="home">
        {/* Hero background photo. The dark overlay is added in CSS. */}
        <Image
          src={heroContent.image_url}
          alt="Placeholder wedding photography hero"
          fill
          priority
          sizes="100vw"
          className="hero-image object-cover"
        />

        {/* Top navigation is split left and right, with the site name centered. */}
        <header className="main-nav" aria-label="Main navigation">
          <nav className="nav-group" aria-label="Homepage sections">
            {navLinks.left.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* This is the simple text logo in the middle of the nav row. */}
          <a className="nav-brand" href="#home" aria-label="Captured by Carla home">
            {heroContent.navLogo}
          </a>

          <nav className="nav-group nav-group-right" aria-label="Site pages">
            {navLinks.right.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        {/* The mirror image and the logo words are separate layers for easy editing. */}
        <div className="mirror-logo" aria-label="Carla Santos, Since 2019">
          <Image
            src="/brand/mirror-frame-cream.png"
            alt=""
            width={300}
            height={372}
            priority
            className="mirror-frame"
          />
          <div className="mirror-copy">
            {/* Small top label inside the mirror. */}
            <span className="mirror-detail">{heroContent.since}</span>
            <strong>{heroContent.name}</strong>
            {/* Small bottom label inside the mirror. */}
            <span className="mirror-specialty">{heroContent.specialty}</span>
          </div>
        </div>
      </section>

      {/* Section 2: rotating placeholder category collage. */}
      <CategoryShowcase categories={categoryShowcase} />

      {/* Section 3: placeholder About Me section. */}
      <section className="about-section" id="about" aria-labelledby="about-heading">
        <div className="about-image-wrap">
          {/* border.png is the only frame around the portrait. */}
          <span className="about-frame-border" aria-hidden="true" />
          {/* The photo sits inside the open center of the frame image. */}
          <div className="about-photo-window">
            <Image
              src={aboutContent.image_url}
              alt="Placeholder portrait of photographer Carla Santos"
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
            />
          </div>
          {/* Flower decoration tucks into the top-right corner of the frame. */}
          <span className="about-frame-flower" aria-hidden="true" />
        </div>

        <div className="about-copy">
          {/* Stamp decoration sits near the top-right of the About text area. */}
          <span className="about-stamp" aria-hidden="true" />
          {/* Split "ABOUT me" so each word can use its own existing font. */}
          <p className="section-eyebrow about-eyebrow">
            <span>{aboutContent.eyebrow}</span>
            <span className="about-eyebrow-script">me</span>
          </p>
          {/* This heading reuses the same script font as the mirror logo. */}
          <h2 className="about-heading-script" id="about-heading">
            {aboutContent.heading}
          </h2>
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="text-button" href="#contact">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}

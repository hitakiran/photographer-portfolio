import Link from "next/link";
import SocialIcon from "@/components/SocialIcon";

// SiteHeader is shared by the homepage and inner pages.
// The "variant" prop lets the same nav work on top of the hero or on a plain page.
export default function SiteHeader({ navLinks, navLogo, socialLinks = [], variant = "page" }) {
  const navClassName = variant === "hero" ? "main-nav" : "main-nav page-nav";
  const showHeroSocials = variant === "hero" && socialLinks.length > 0;

  return (
    <header className={navClassName} aria-label="Main navigation">
      <nav className="nav-group" aria-label="Homepage sections">
        {navLinks.left.map((link) => (
          <Link href={link.href} key={link.label}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="nav-center-stack">
        {/* This is the simple text logo in the middle of the nav row. */}
        <Link className="nav-brand" href="/" aria-label="Captured by Carla home">
          {navLogo}
        </Link>

        {showHeroSocials && (
          <div className="hero-nav-social-links" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                aria-label={link.label}
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
        )}
      </div>

      <nav className="nav-group nav-group-right" aria-label="Site pages">
        {navLinks.right.map((link) => (
          <Link href={link.href} key={link.label}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

import Link from "next/link";

// SiteHeader is shared by the homepage and inner pages.
// The "variant" prop lets the same nav work on top of the hero or on a plain page.
export default function SiteHeader({ navLinks, navLogo, variant = "page" }) {
  const navClassName = variant === "hero" ? "main-nav" : "main-nav page-nav";

  return (
    <header className={navClassName} aria-label="Main navigation">
      <nav className="nav-group" aria-label="Homepage sections">
        {navLinks.left.map((link) => (
          <Link href={link.href} key={link.label}>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* This is the simple text logo in the middle of the nav row. */}
      <Link className="nav-brand" href="/" aria-label="Captured by Carla home">
        {navLogo}
      </Link>

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

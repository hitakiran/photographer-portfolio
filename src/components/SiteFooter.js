import Image from "next/image";
import MirrorArcText from "@/components/MirrorArcText";
import SocialIcon from "@/components/SocialIcon";

// SiteFooter is reused on the homepage and Portfolio page.
export default function SiteFooter({ content }) {
  return (
    <footer className="site-footer">
      {/* Back-to-top link stays in the corner like the reference footer. */}
      <a className="footer-top-link" href="#top" aria-label="Back to top">
        <span>Top</span>
        <span aria-hidden="true">⌃</span>
      </a>

      <div className="footer-inner">
        <div className="footer-brand">
          {/* This reuses the hero mirror frame with editable text layered on top. */}
          <div className="footer-mirror-logo" aria-label="Carla Santos, since 2019">
            <Image
              alt=""
              className="footer-mirror-frame"
              fill
              sizes="144px"
              src="/brand/mirror-frame-cream.png"
            />
            <MirrorArcText
              bottomText="Photography"
              className="footer-mirror-arcs"
              idPrefix="footer-mirror"
              topText="since 2019"
            />
            <div className="footer-mirror-copy">
              <strong>Carla Santos</strong>
            </div>
          </div>

          <p>{content.footerText}</p>

          <div className="footer-social-links" aria-label="Social links">
            {content.socialLinks.map((link) => (
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
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <h3>Navigate</h3>
          <div>
            {content.footerNav.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
}

// These simple inline SVG icons avoid adding a new dependency just for socials.
// The same component is reused in the hero, contact section, and footer.
export default function SocialIcon({ label }) {
  if (label === "Instagram") {
    return (
      <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24">
        <rect height="15" rx="4" width="15" x="4.5" y="4.5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="16.6" cy="7.4" r="0.8" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24">
        <path d="M14.2 8.3h2.1V5.1c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.1 1.8-5.1 5v2.8H5v3.6h3.1V24h3.8v-7.7h3.1l.5-3.6h-3.6v-2.4c0-1 .3-2 2.3-2Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24">
      <path d="M14.7 3c.4 2.4 1.8 4 4.3 4.2v3.4c-1.5.1-2.8-.3-4.2-1.1v6.2c0 5.3-5.8 7-9.2 3.2-2.2-2.5-1.7-6.9 2.7-8.2.8-.2 1.6-.3 2.5-.2V14c-.4-.1-.8-.1-1.2 0-1.7.4-2.2 2.4-1.1 3.5 1.1 1 3 .5 3-1.6V3h3.2Z" />
    </svg>
  );
}

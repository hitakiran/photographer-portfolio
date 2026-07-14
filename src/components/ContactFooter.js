import SiteFooter from "@/components/SiteFooter";

// This icon component is used only inside the contact details column.
function SocialIcon({ label }) {
  const iconMap = {
    Instagram: (
      <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24">
        <rect height="15" rx="4" width="15" x="4.5" y="4.5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="16.6" cy="7.4" r="0.8" />
      </svg>
    ),
    Facebook: (
      <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24">
        <path d="M14.2 8.3h2.1V5.1c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.1 1.8-5.1 5v2.8H5v3.6h3.1V24h3.8v-7.7h3.1l.5-3.6h-3.6v-2.4c0-1 .3-2 2.3-2Z" />
      </svg>
    ),
    TikTok: (
      <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24">
        <path d="M14.7 3c.4 2.4 1.8 4 4.3 4.2v3.4c-1.5.1-2.8-.3-4.2-1.1v6.2c0 5.3-5.8 7-9.2 3.2-2.2-2.5-1.7-6.9 2.7-8.2.8-.2 1.6-.3 2.5-.2V14c-.4-.1-.8-.1-1.2 0-1.7.4-2.2 2.4-1.1 3.5 1.1 1 3 .5 3-1.6V3h3.2Z" />
      </svg>
    ),
  };

  return iconMap[label];
}

// ContactFooter keeps the contact form and footer together because they sit
// directly next to each other at the bottom of the homepage.
export default function ContactFooter({ content }) {
  return (
    <>
      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <div className="contact-inner">
          {/* This small note points visitors back to the future FAQ area. */}
          <p className="contact-faq-note">
            {content.faqText}
            <a href="#faq">{content.faqLinkLabel}</a>!
          </p>

          <h2 id="contact-heading">{content.heading}</h2>

          <div className="contact-layout">
            <div className="contact-details">
              {content.details.map((detail) => (
                <div className="contact-detail" key={detail.label}>
                  <strong>{detail.label}</strong>
                  {detail.href ? (
                    <a href={detail.href}>{detail.value}</a>
                  ) : (
                    <span>{detail.value}</span>
                  )}
                </div>
              ))}

              <div className="contact-detail">
                <strong>Social</strong>
                <div className="social-links" aria-label="Social links">
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
            </div>

            {/* This form is visual only for now. Supabase or email logic can be added later. */}
            <form className="contact-form">
              {content.formFields.map((field) => (
                <label key={field.id}>
                  <span>{field.label}</span>
                  <input id={field.id} name={field.id} type={field.type} />
                </label>
              ))}

              <label>
                <span>Message</span>
                <textarea id="contact-message" name="contact-message" rows="6" />
              </label>

              <button className="text-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter content={content} />
    </>
  );
}

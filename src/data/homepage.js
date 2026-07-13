// This file keeps all homepage placeholder content in one easy-to-edit place.
// Later, these objects can be replaced with data from Supabase tables.

export const navLinks = {
  left: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  right: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Investment", href: "/investment" },
    { label: "Contact", href: "#contact" },
  ],
};

export const heroContent = {
  navLogo: "capturedbycarla",
  name: "Carla Santos",
  since: "since 2019",
  specialty: "Photography",
  tagline: "Bay Area photographer capturing timeless, honest moments.",
  portfolioButton: "View Portfolio",
  image_url:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
};

export const categoryShowcase = [
  {
    id: "business-branding",
    category: "Brands",
    label: "Personal brands with presence, polish, and personality.",
    layoutVariant: "layout-one",
    photos: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=85",
    ],
  },
  {
    id: "portraits",
    category: "Portraits",
    label: "Soft, expressive portraits made to feel like you.",
    layoutVariant: "layout-two",
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85",
    ],
  },
  {
    id: "couples",
    category: "Couples",
    label: "Honest connection, gentle direction, and room to be playful.",
    layoutVariant: "layout-three",
    photos: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1501901609772-df0848060b33?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=700&q=85",
    ],
  },
  {
    id: "wedding",
    category: "Wedding",
    label: "Romantic wedding stories with an editorial, timeless feeling.",
    layoutVariant: "layout-four",
    photos: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=85",
    ],
  },
  {
    id: "families",
    category: "Families",
    label: "Warm family photos that feel relaxed, connected, and real.",
    layoutVariant: "layout-five",
    photos: [
      "https://images.unsplash.com/photo-1506836467174-27f1042aa48c?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=700&q=85",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=85",
    ],
  },
];

export const aboutContent = {
  eyebrow: "About",
  heading: "Carla Santos",
  image_url:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
  paragraphs: [
    "Placeholder bio text: Carla is a portrait, wedding, and lifestyle photographer who creates warm, intentional images for clients who want their story documented with care.",
    "Her sessions are calm, guided, and personal. The goal is to help each client feel comfortable in front of the camera while creating photographs that feel elevated and true to them.",
  ],
};

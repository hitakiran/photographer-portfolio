// Placeholder package data for the Investment page.
// These category/package objects can later map cleanly to Supabase tables.

export const investmentCategories = [
  {
    id: "brands",
    name: "Brands",
    intro: "Clean, polished imagery for founders, creatives, and small businesses.",
    packages: [
      {
        id: "brand-refresh",
        name: "Brand Refresh",
        price: "$450",
        includes: ["45 minute session", "25 edited photos", "One outfit", "Online gallery"],
      },
      {
        id: "brand-story",
        name: "Brand Story",
        price: "$750",
        includes: ["90 minute session", "45 edited photos", "Two locations", "Usage-ready gallery"],
      },
      {
        id: "brand-day",
        name: "Content Day",
        price: "$1,200",
        includes: ["3 hour session", "80 edited photos", "Planning call", "Shot list support"],
      },
    ],
  },
  {
    id: "portraits",
    name: "Portraits",
    intro: "Soft, expressive portraits for milestones, headshots, and personal storytelling.",
    packages: [
      {
        id: "portrait-mini",
        name: "Mini Session",
        price: "$250",
        includes: ["30 minute session", "15 edited photos", "One outfit", "Online gallery"],
      },
      {
        id: "portrait-standard",
        name: "Standard Session",
        price: "$425",
        includes: ["1 hour session", "30 edited photos", "Two outfits", "Location guidance"],
      },
      {
        id: "portrait-extended",
        name: "Extended Session",
        price: "$650",
        includes: ["2 hour session", "55 edited photos", "Two locations", "Creative direction"],
      },
    ],
  },
  {
    id: "couples",
    name: "Couples",
    intro: "Honest, connected sessions for anniversaries, engagements, and everyday love.",
    packages: [
      {
        id: "couples-short",
        name: "Sweet & Simple",
        price: "$375",
        includes: ["45 minute session", "25 edited photos", "One location", "Online gallery"],
      },
      {
        id: "couples-story",
        name: "Love Story",
        price: "$575",
        includes: ["90 minute session", "45 edited photos", "Two outfits", "Prompted posing"],
      },
      {
        id: "couples-adventure",
        name: "Adventure Session",
        price: "$850",
        includes: ["Half-day coverage", "70 edited photos", "Travel within Bay Area", "Planning support"],
      },
    ],
  },
  {
    id: "wedding",
    name: "Wedding",
    intro: "Timeless wedding coverage for intimate celebrations and full-day stories.",
    packages: [
      {
        id: "wedding-elopement",
        name: "Elopement",
        price: "$1,400",
        includes: ["2 hours coverage", "150 edited photos", "Online gallery", "Sneak peeks"],
      },
      {
        id: "wedding-half-day",
        name: "Half-Day",
        price: "$2,800",
        includes: ["5 hours coverage", "400 edited photos", "Timeline support", "Online gallery"],
      },
      {
        id: "wedding-full-day",
        name: "Full-Day",
        price: "$4,200",
        includes: ["8 hours coverage", "700 edited photos", "Engagement add-on option", "Print release"],
      },
    ],
  },
  {
    id: "families",
    name: "Families",
    intro: "Relaxed family sessions built around movement, connection, and real moments.",
    packages: [
      {
        id: "family-mini",
        name: "Family Mini",
        price: "$325",
        includes: ["30 minute session", "18 edited photos", "One location", "Online gallery"],
      },
      {
        id: "family-classic",
        name: "Classic Family",
        price: "$525",
        includes: ["1 hour session", "35 edited photos", "Up to 6 people", "Styling notes"],
      },
      {
        id: "family-home",
        name: "At-Home Story",
        price: "$725",
        includes: ["90 minute session", "50 edited photos", "In-home lifestyle coverage", "Online gallery"],
      },
    ],
  },
];

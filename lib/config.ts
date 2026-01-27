export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Workrush",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://workrush.co.uk",
  tagline: "One Stop Solution for your online business",
  description:
    "Workrush specializes in cutting-edge IT solutions, including software development, cloud computing, AI, and digital transformation. From MVP to enterprise, we ship fast without compromising quality.",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@workrush.in",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+44-74332-45632",
    address: "15 Wood Street, London, KT1 1TY",
    location: process.env.NEXT_PUBLIC_CONTACT_LOCATION || "United Kingdom",
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/workrush",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/workrush",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/workrush",
  },
} as const;

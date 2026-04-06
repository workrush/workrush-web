export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Workrush",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://workrush.co.uk/en-gb",
  tagline: "Building Digital DNA at Scale",
  description:
    "Workrush specializes in cutting-edge IT solutions, including software development, cloud computing, AI, and digital transformation. From MVP to enterprise, we ship fast without compromising quality.",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@workrush.co.uk",
    emailUK: "info@workrush.co.uk",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+447438813477",
    address: "15 Wood Street, London, KT1 1TY",
    addressIndia: "23, Mahagun Complex, Sector 78, Noida, 201301, UP, India",
    location: process.env.NEXT_PUBLIC_CONTACT_LOCATION || "United Kingdom",
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/workrush",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/workrush",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/workrush",
  },
} as const;

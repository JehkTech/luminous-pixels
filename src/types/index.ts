// Blog Post
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  category?: string;
  coverImageUrl?: string;
  body?: PortableTextBlock[];
}

// Case Study
export interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  client: string;
  industry: "Real Estate" | "Healthcare" | "E-commerce" | "Finance" | "Other";
  outcome: string;
  metrics?: { label: string; value: string }[];
  coverImageUrl?: string;
  body?: PortableTextBlock[];
}

// Portable Text (Sanity rich text)
export interface PortableTextBlock {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

// Contact form
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  industry?: string;
  message: string;
}

// Service card
export interface Service {
  industry: string;
  title: string;
  description: string;
  outcomes: string[];
  href: string;
  color: string;
}

// Pricing plan
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
}

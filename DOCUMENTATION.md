# Luminous Pixels Agency — Developer Documentation

> Production-ready AI agency website built with Next.js 15, Tailwind CSS, Sanity CMS, and Resend.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Start](#quick-start)
3. [Environment Variables](#environment-variables)
4. [Project Structure](#project-structure)
5. [Development Workflow](#development-workflow)
6. [Content Management (Sanity CMS)](#content-management)
7. [Adding New Pages](#adding-new-pages)
8. [Deployment (Vercel)](#deployment)
9. [Performance & SEO](#performance-seo)
10. [Scalability Roadmap](#scalability-roadmap)
11. [Tech Stack Rationale](#tech-stack-rationale)

---

## Prerequisites

Before you begin, ensure you have:

| Tool | Version | Install |
|------|---------|---------|
| Node.js | v20 LTS | https://nodejs.org |
| pnpm | Latest | `npm install -g pnpm` |
| Git | Any | https://git-scm.com |
| VS Code | Latest (recommended) | https://code.visualstudio.com |

**Recommended VS Code extensions:**
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript + JavaScript

---

## Quick Start

```bash
# 1. Clone or download the project
git clone https://github.com/your-org/luminous-pixels.git
cd luminous-pixels

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Then edit .env.local with your actual keys (see Environment Variables section)

# 4. Run the development server
pnpm dev

# Open http://localhost:3000
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in these values:

### Resend (Email)
1. Go to https://resend.com and create an account (free tier works)
2. Create an API key
3. Paste it as `RESEND_API_KEY`
4. **Important:** On the free tier, you can only send to verified email addresses.
   Add `jehkat505@gmail.com` as a verified sender.

### Sanity CMS
1. Run `pnpm create sanity@latest` inside the project
2. Select "Clean project"
3. Your project ID and dataset name will be shown
4. Generate a token at https://sanity.io/manage → your project → API → Tokens
5. Add all three values to `.env.local`

### PostHog
1. Create an account at https://posthog.com (free up to 1M events/month)
2. Create a new project
3. Copy your project API key

---

## Project Structure

```
luminous-pixels/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (marketing)/            # Route group for public pages
│   │   │   ├── page.tsx            # Homepage (/)
│   │   │   ├── services/page.tsx   # /services
│   │   │   ├── how-it-works/...    # /how-it-works
│   │   │   ├── case-studies/...    # /case-studies
│   │   │   ├── about/page.tsx      # /about
│   │   │   ├── blog/page.tsx       # /blog (Sanity-powered)
│   │   │   └── contact/page.tsx    # /contact
│   │   ├── api/
│   │   │   └── contact/route.ts    # POST handler → Resend email
│   │   ├── layout.tsx              # Root layout (fonts + metadata)
│   │   └── globals.css             # Design system + CSS variables
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky nav with mobile menu
│   │   │   └── Footer.tsx          # Footer with nav columns
│   │   ├── sections/               # Homepage sections
│   │   │   ├── Hero.tsx            # Full-screen hero
│   │   │   ├── Services.tsx        # 4-industry service cards
│   │   │   ├── Pricing.tsx         # 3-tier pricing
│   │   │   └── CTA.tsx             # Contact form + copy
│   │   └── ui/                     # Reusable primitives
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Badge.tsx
│   ├── lib/
│   │   ├── sanity.ts               # Sanity client + image builder
│   │   ├── queries.ts              # GROQ query strings
│   │   └── utils.ts                # cn() helper, formatters
│   └── types/
│       └── index.ts                # Shared TypeScript types
├── sanity/
│   ├── schemas/
│   │   ├── blog.ts                 # Blog post schema
│   │   └── caseStudy.ts            # Case study schema
│   └── sanity.config.ts            # Sanity Studio config
├── public/
│   ├── og-image.png                # 1200×630 OpenGraph image
│   └── favicon.ico
├── .env.local.example              # Environment template
├── .env.local                      # Your secrets (gitignored)
├── next.config.ts                  # Next.js config
└── package.json
```

---

## Development Workflow

### Running locally

```bash
pnpm dev          # Start Next.js dev server (port 3000)
pnpm sanity dev   # Start Sanity Studio (port 3333)
```

### Building for production

```bash
pnpm build        # Build Next.js app
pnpm start        # Start production server locally
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript checks
```

### Recommended workflow for making changes

1. Create a new branch: `git checkout -b feature/your-change`
2. Make your changes in `src/`
3. Test locally with `pnpm dev`
4. Commit: `git commit -m "feat: describe your change"`
5. Push to GitHub: `git push origin feature/your-change`
6. Vercel auto-deploys a preview URL for every push
7. Merge to `main` to deploy to production

---

## Content Management (Sanity CMS)

### Running the Studio

```bash
cd luminous-pixels
pnpm sanity dev
# Opens http://localhost:3333
```

### Adding a blog post

1. Open Sanity Studio at localhost:3333
2. Click "Blog Post" → "New Document"
3. Fill in: Title, Slug (auto-generated), Excerpt, Cover Image, Category, Body
4. Click "Publish"
5. The post appears on `/blog` automatically (no code changes)

### Adding a case study

Same process — click "Case Study" → "New Document".

### Fetching content in code

```typescript
// src/lib/queries.ts
export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  category,
  "coverImageUrl": coverImage.asset->url
}`;

// In a page component (Server Component):
import { client } from "@/lib/sanity";
import { blogPostsQuery } from "@/lib/queries";

export default async function BlogPage() {
  const posts = await client.fetch(blogPostsQuery);
  return <>{/* render posts */}</>;
}
```

---

## Adding New Pages

### Step-by-step: Add a "/testimonials" page

1. Create the file:
```bash
touch src/app/\(marketing\)/testimonials/page.tsx
```

2. Add basic page structure:
```tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "See what our clients say about Luminous Pixels Agency.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Your sections go here */}
      </main>
      <Footer />
    </>
  );
}
```

3. Add to the Navbar `links` array in `src/components/layout/Navbar.tsx`

4. Add to Footer nav columns in `src/components/layout/Footer.tsx`

That's it — Vercel picks it up automatically on next push.

---

## Deployment (Vercel)

### First-time deployment

```bash
# 1. Push your code to GitHub
git remote add origin https://github.com/your-username/luminous-pixels.git
git push -u origin main

# 2. Go to https://vercel.com → "Add New Project"
# 3. Import your GitHub repo
# 4. Vercel auto-detects Next.js — no config needed
# 5. Add all environment variables (copy from .env.local)
# 6. Click Deploy
```

### Continuous deployment

Every push to `main` → automatic production deploy.
Every push to any other branch → preview URL (e.g. `luminous-pixels-git-feature-xyz.vercel.app`).

### Custom domain

1. Vercel dashboard → your project → Settings → Domains
2. Add `luminouspixels.agency`
3. Add the DNS records Vercel provides to your domain registrar
4. SSL certificate is automatic

### Environment variables on Vercel

1. Vercel dashboard → your project → Settings → Environment Variables
2. Add each variable from `.env.local`
3. Set scope: Production, Preview, Development (or all three)

---

## Performance & SEO

### Metadata (already configured in `layout.tsx`)

Every page can export its own metadata:
```tsx
export const metadata: Metadata = {
  title: "Services — Luminous Pixels Agency",
  description: "...",
  openGraph: { ... },
};
```

### Image optimization

Always use Next.js `<Image>` component — never raw `<img>`:
```tsx
import Image from "next/image";

<Image
  src="/hero-visual.png"
  alt="AI workflow diagram"
  width={800}
  height={500}
  priority           // Add for above-the-fold images
  placeholder="blur" // Add for smoother loading
/>
```

### Core Web Vitals checklist

- ✅ Fonts loaded with `next/font` (eliminates layout shift)
- ✅ Images use `next/image` (auto WebP, lazy loading)
- ✅ `security headers` in `next.config.ts`
- ✅ No unused CSS (Tailwind purges at build)
- ✅ Server components by default (less JS to client)

### Sitemap (add this)

```bash
pnpm add next-sitemap
```

```js
// next-sitemap.config.js
module.exports = {
  siteUrl: "https://luminouspixels.agency",
  generateRobotsTxt: true,
};
```

---

## Scalability Roadmap

The current architecture is designed to grow without rewrites:

### Phase 2 — Client Portal

```bash
pnpm add next-auth @prisma/client prisma
npx prisma init
```

Add a `(dashboard)` route group alongside `(marketing)`:
```
src/app/
├── (marketing)/   # Public site
├── (dashboard)/   # Authenticated client portal
│   ├── layout.tsx # Auth check wrapper
│   ├── page.tsx   # Dashboard home
│   └── projects/  # Client project tracking
```

### Phase 3 — Add Payments

```bash
pnpm add stripe
```

Add a `/api/stripe/checkout` route for one-time payments and `/api/stripe/webhook` for subscription handling.

### Phase 4 — AI Tools for Clients

Build a `(dashboard)/tools` section using the Anthropic API or OpenAI to give clients self-serve AI workflow tools.

### Phase 5 — Multi-tenant

As you scale to more clients, Sanity supports multi-workspace. Each client gets their own Sanity dataset. Next.js middleware can route subdomain traffic (e.g., `client-name.luminouspixels.agency`).

---

## Tech Stack Rationale

| Tool | Why |
|------|-----|
| **Next.js 15** | App Router gives server components + server actions — pages load fast without heavy client JS. Used by Vercel, Linear, Clerk. |
| **Tailwind CSS v4** | Zero-runtime utility CSS. No stylesheet bloat. JIT compiles only what you use. |
| **Syne + DM Sans** | Syne has a distinctive geometric feel (not overused). DM Sans is clean and legible at small sizes. Neither is the clichéd Inter. |
| **Sanity v3** | Best-in-class headless CMS for dev teams. GROQ is more powerful than GraphQL for content queries. Real-time collaborative editing. |
| **Resend** | Purpose-built transactional email API. Better DX than SendGrid, works natively with Next.js server actions. |
| **Vercel** | Zero-config Next.js deployment, 40+ global edge regions, preview URLs per branch, built-in analytics. |
| **PostHog** | Open-source, self-hostable analytics. GDPR-friendly. Better than GA4 for conversion tracking. |
| **TypeScript** | Catches errors at compile time, documents intent, enables safe refactoring as the codebase grows. |

---

## Support

Questions or issues?

- Email: jehkat505@gmail.com
- Open a GitHub issue in the repo

---

*Documentation version: 1.0.0 — Luminous Pixels Agency*

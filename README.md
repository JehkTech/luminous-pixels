# Luminous Pixels

AI automation agency website built with Next.js 15, TypeScript, Tailwind CSS v4, Sanity CMS, and Resend.

This project includes:
- A marketing homepage with modular sections
- A Sanity-powered blog
- A validated contact form API that sends email notifications
- Embedded Sanity Studio at `/studio`

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- React 19
- Tailwind CSS v4
- Sanity (content + studio)
- Resend (transactional email)
- Zod (server-side validation)

## Quick Start

### 1. Prerequisites

- Node.js 20+
- pnpm 9+

### 2. Install

```bash
pnpm install
```

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Update `.env.local` with your values.

### 4. Run development server

```bash
pnpm dev
```

Open http://localhost:3000

## Environment Variables

Create a `.env.local` file in the project root.

Required:

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (usually `production`) |
| `RESEND_API_KEY` | Resend API key for contact email sending |

Optional:

| Variable | Default | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` (app) / `2026-03-24` (studio env fallback) | Sanity API version |
| `CONTACT_TO_EMAIL` | `jehkat505@gmail.com` | Destination inbox for form notifications |
| `CONTACT_FROM_EMAIL` | `Luminous Pixels Contact <onboarding@resend.dev>` | Sender identity used by Resend |
| `NEXT_PUBLIC_POSTHOG_KEY` | unset | PostHog public key |
| `NEXT_PUBLIC_POSTHOG_HOST` | unset | PostHog host URL |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | Base URL used by metadata |
| `SANITY_API_TOKEN` | unset | Token for authenticated Sanity operations (if needed) |

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start Next.js dev server (Turbopack) |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Next.js ESLint |
| `pnpm type-check` | Run TypeScript checks |
| `pnpm sanity` | Run Sanity Studio in dev mode |

## Routes

- `/` - Marketing homepage
- `/blog` - Blog listing (fetched from Sanity)
- `/studio` - Embedded Sanity Studio
- `/api/contact` - POST endpoint for contact form submissions

## Contact API

The endpoint at `/api/contact`:
- Validates input using Zod (`name`, `email`, `company`, `industry`, `message`)
- Returns `400` for validation failures
- Sends email via Resend when valid
- Returns `500` on send failures

## Content Management (Sanity)

Schema definitions are in:
- `src/sanity/schemas/blog.ts`
- `src/sanity/schemas/caseStudy.ts`
- `src/sanity/schemaTypes/index.ts`

You can run Sanity Studio with:

```bash
pnpm sanity
```

Or access the embedded studio route while running the app:
- http://localhost:3000/studio

## Project Structure

```text
src/
  app/
    api/contact/
    blog/
    studio/[[...tool]]/
    layout.tsx
    page.tsx
  components/
    layout/
    sections/
    ui/
  lib/
    env.ts
    sanity.ts
    queries.ts
    utils.ts
  server/
    contact/
    content/
  sanity/
    env.ts
    lib/
    schemaTypes/
    schemas/
  types/
sanity/
  schemas/
sanity.config.ts
sanity.cli.ts
```

## Deployment

Recommended: Vercel.

1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Add all environment variables in Vercel project settings.
4. Deploy.

## Additional Documentation

For deeper architecture and workflow details, see `DOCUMENTATION.md`.
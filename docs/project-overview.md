# Rebellious Aging – Project Overview

This document captures the key technical touchpoints and current state of the Rebellious Aging web application so future contributors can ramp up quickly.

## Stack & Tooling
- **Frontend:** React 18 + TypeScript, routed with `react-router-dom`.
- **Styling/UI:** Tailwind CSS, shadcn/ui primitives (Radix), custom utility classes in `src/index.css`, Framer Motion for route transitions.
- **State/Async:** TanStack Query is initialized globally (ready for future data fetching needs) alongside shadcn and Sonner toast systems for user feedback.
- **Build chain:** Vite 5 + SWC. Production builds run `npm run sitemap` → `vite build` → `npm run prerender` (aliased behind `npm run build`). The sitemap reader pulls from `src/data/blogPosts.ts`, while the prerender script injects canonical SEO tags for every static route listed in `src/data/seoRoutes.ts` plus each blog article into `dist/`.
- **Analytics:** Google Analytics (gtag), Hotjar, and the GPT Engineer bootstrap script are deferred via `requestIdleCallback` inside `index.html`.

## Routing & Features
- **Layout:** Sticky animated header, framer-motion page transitions, and a footer with medical disclaimer plus social/email CTAs.
- **Key pages:**
  - `Home`: Hero carousel, inline Welcome Banner (non-blocking), “Three Pillars” cards, and a global contact CTA.
  - `Movement` (`/our-story`): Scroll animations + Suz timeline using custom hooks in `src/hooks`.
  - `PillarPage` (`/pillars/:pillarId`): Data-driven hero/gallery/quiz/checklist segments shared by confidence, style, and health (data lives in `src/data/pillarContent.ts`).
  - `Nutrition`: Query-param-synced tabs covering WFPB foundations, benefits, Dr. Esselstyn/Dr. Campbell material, a “Why & How” manifesto, and recipe catalog.
  - `Blog` + `BlogPost`: Metadata-driven archive and a monolithic post renderer with dedicated JSX blocks per slug.
  - Community funnels: Video Series, Welcome Letter, Contact (Typeform), Facebook Group landing, Team, etc.
- **Reusable CTAs:** `ConnectCTA`, `WelcomeBanner`, `VideoCard`, `MobileMenuSection`, `GallerySection`, etc.

## Data & Integrations
- **Static content:** Blog metadata (`src/data/blogPosts.ts`), pillar copy, video series, and Suz’s curated content are TypeScript objects for determinism and sitemap reuse. Canonical metadata for static routes lives in `src/data/seoRoutes.ts`.
- **Supabase:** `src/components/pillar/QuizSection.tsx` can embed Typeform or fall back to a custom form that invokes the `submit-quiz` Edge Function. The function enforces validation, writes to `quiz_submissions`, and honors RLS policies defined under `supabase/migrations/`.
- **Typeform:** Contact + newsletter capture use embedded forms, but the assets now load on demand (Contact requires a button click; pillar quizzes wait until the section is in view). Typeform’s loader script is cached globally once initialized.
- **Facebook CTA:** Centralized helper (`src/lib/facebook.ts`) ensures consistent popup attempts with Sonner-based fallbacks and clipboard copy.

## SEO & Operations
- `src/lib/seo.ts` centralizes helpers for titles, descriptions, canonical URLs, and social images.
- The shared `<Seo>` component (`src/components/seo/Seo.tsx`) wraps React Helmet and inlines JSON-LD built via `src/lib/structuredData.ts`.
- Route-level metadata lives in `src/data/seoRoutes.ts`; keep it updated whenever you rename or add a top-level page.
- `scripts/generate-sitemap.ts` must run whenever you add/edit `blogPosts` or important routes; the resulting `public/sitemap.xml` is referenced by `robots.txt`.
- `scripts/prerender.tsx` now rewrites `dist/**/index.html` for every route listed in `seoRoutes` plus every blog post so non-JS crawlers see fully populated `<head>` tags.

## Recently Added Blog Post
- **Slug:** `retirement-fade-or-focus`
- **Location:** Metadata entry at `src/data/blogPosts.ts` and full article block inside `src/pages/BlogPost.tsx` (search for the slug comment).
- **Date:** March 10, 2026. Remember to rerun `npm run sitemap && npm run build` before deploying so the new slug is discoverable and prerendered.

## Opportunities & Caveats
1. The blog renderer is a single giant component; consider migrating long-form content to MDX or per-file modules to reduce merge conflicts.
2. Supabase anon key is currently embedded in `src/integrations/supabase/client.ts`. Move it to environment variables before public deployment.
3. The repo includes implemented but un-routed pages (`Resources`, `SuccessStories`, `SuzChoiceSection`). Decide whether to expose them or remove unused assets.
4. Automated tests are not yet configured; when you introduce Vitest/Testing Library, colocate specs and update `package.json`.
5. Third-party analytics run in every build; gate them behind env variables if you need privacy-safe previews.

Sparkle on! ✨

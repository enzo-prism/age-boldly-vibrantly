# Rebellious Aging Web Application

Rebellious Aging is a Vite + React site that helps women 55+ “age boldly, live loudly” through four pillars—Confidence, Style, Health, and Gratitude. The app houses long-form editorial content (blogs, pillar landing pages, nutrition guides), embedded Typeforms, and a Supabase-backed quiz submission flow.

---

## Tech Stack

- **Build tooling:** Vite 5, TypeScript, React 18, SWC-based JSX transform
- **UI:** Tailwind CSS, shadcn/ui components, Radix Primitives, Framer Motion
- **State & data:** TanStack Query, custom hooks, local data files under `src/data`
- **Content tooling:** Shared `<Seo>` component (Helmet + JSON-LD), structured data helpers, and a prerender script that injects metadata into static HTML
- **Backend integrations:** Supabase Edge Function (`supabase/functions/submit-quiz`) + database table `quiz_submissions`, embedded Typeforms for contact/newsletter

---

## Project Structure

```
src/
  App.tsx               // Routes + providers
  components/           // Layout, home, pillar, nutrition, ui primitives, seo helpers
    seo/                // Shared <Seo> wrapper
  data/                 // blogPosts, pillarContent, videoSeries metadata
    seoRoutes.ts        // Canonical metadata per static route
  hooks/                // Scroll, mobile, toast utilities
  lib/                  // SEO helpers, structured data, constants, Facebook helpers
  pages/                // Top-level routes (Home, Pillars, Blog, etc.)
  integrations/         // Supabase typed client
scripts/
  prerender.tsx         // Injects SEO tags into /blog static HTML after build
supabase/
  config.toml           // Project + function config
  functions/            // Edge functions (submit-quiz)
  migrations/           // SQL migrations for quiz_submissions
```

Additional architectural context lives in `docs/project-overview.md`.

Key conventions:

- Use the `@/` alias (configured in `tsconfig.json`) for internal imports.
- Tailwind + shadcn components live under `src/components/ui`.
- Keep generated Supabase files (`src/integrations/supabase/*`) read-only—regenerate via Supabase CLI if credentials change.

---

## Core Experience Map

- **Home (`src/pages/Home.tsx`)** – Carousel hero, inline Welcome Banner (no blocking modal), pillar overview, and repeated CTAs that route visitors toward Our Story or the individual pillars.
- **Our Story / Movement (`src/pages/Movement.tsx`)** – Narrative, credentials, and the “Why” behind the rebellion, including scroll-triggered timelines.
- **Pillars (`/pillars/:pillarId`)** – Confidence, Style, and Health share a common data model for hero copy, galleries, quizzes, and downloadable checklists, while Gratitude features a custom long-form experience built around rebellious practices and Health links to the dedicated WFPB Nutrition Guide.
- **Nutrition (`src/pages/Nutrition.tsx`)** – Query-param-driven tabs that educate on WFPB foundations, benefits, Esselstyn/Campbell guidance, “why & how,” and recipes.
- **Blog (`/blog` + `/blog/:postId`)** – Metadata list plus inlined long-form posts with canonical tags, share buttons, and next-article links.
- **Video Series (`src/pages/VideoSeries.tsx`)** – Card grid fed by `src/data/videoSeries.ts` to highlight current and future episodes.
- **Community touchpoints** – Welcome Letter, Contact (Typeform embed), Facebook Group landing page, and the reusable `ConnectCTA` ensure email + FB funnels stay consistent site-wide.

Use this map when adding new sections so the navigation, voice, and CTAs remain cohesive.

---

## Content Data Reference

| Content type | Location | Purpose |
|--------------|----------|---------|
| Blog metadata | `src/data/blogPosts.ts` | Drives the blog archive, sitemap generation, SEO fields, and “next article” navigation. |
| Blog articles | `src/pages/BlogPost.tsx` | Each post lives in its own `if (postId === 'slug')` block—always wrap new copy with `<BlogPostFooter>` for share actions. |
| Pillar content | `src/data/pillarContent.ts` | Hero text, gallery images, quiz titles, and checklist links for Confidence/Style/Health. |
| Video episodes | `src/data/videoSeries.ts` | Add/update YouTube metadata here to refresh the video grid without touching layout code. |
| Site metadata | `src/lib/siteMetadata.ts` | Central place for `baseUrl`, default descriptions, social images, and social profile links. |
| Structured data builders | `src/lib/structuredData.ts` | Generates Organization, WebSite, Article, and FAQ JSON-LD payloads. |
| Route SEO config | `src/data/seoRoutes.ts` | Canonical metadata for static routes, reused by the `<Seo>` component and prerender script. |
| Facebook group link/logic | `src/lib/facebook.ts` + `src/lib/constants.ts` | Keeps outbound navigation consistent (open in new tab + fallback toast). |

After editing these files, rerun `npm run sitemap` (if blog metadata changed) and `npm run build` (which also runs `npm run prerender`) to keep the prerendered HTML and sitemap aligned.

---

## Getting Started

```bash
pnpm install   # or npm install

npm run dev    # start Vite dev server on http://localhost:5173
npm run lint   # TypeScript + React linting via eslint.config.js
npm run sitemap # regenerate public/sitemap.xml from routes + blog posts
npm run build  # production build + blog prerender (runs `npm run prerender`)
npm run preview
```

Environment variables (create `.env`):

```
VITE_SUPABASE_URL=<public-url>
VITE_SUPABASE_ANON_KEY=<anon-key>
```

The Supabase Edge function expects `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to be available when deployed via the Supabase CLI.

---

## Blog Management

Blog content is managed in two places:

1. **Metadata list:** `src/data/blogPosts.ts`
   - Add a new object with `id`, `title`, `excerpt`, `date`, `readTime`, `blogNumber`, and optional `seoDescription`.
   - Keep `blogNumber` sequential; list order drives navigation + prerender outputs.

2. **Long-form article:** `src/pages/BlogPost.tsx`
   - Each post has a dedicated `if (postId === '<slug>')` block.
   - Copy the structure from an existing post (Helmet metadata is handled automatically via helpers).

After editing blog content run:

```bash
npm run sitemap  # refresh sitemap with new blog URLs
npm run build    # regenerates dist and runs prerender automatically
```

The prerender script rewrites both `/blog` and every static route under `dist/**/index.html` with fully populated `<head>` tags for SEO.

---

## Forms, Quizzes & Integrations

- **Quiz submission:** `src/components/pillar/QuizSection.tsx` posts to the Supabase Edge function (`supabase/functions/submit-quiz/index.ts`). The table schema, policies, and indexes are defined under `supabase/migrations/`.
- **Typeforms:** Contact, newsletter, and quiz fallback embeds load Typeform’s `embed.js`. If you add new embeds, reuse the loader logic in `QuizSection`.
- **Facebook CTA:** Use helper utilities in `src/lib/facebook.ts` for consistent popup + fallback behavior anywhere you link to the private group.

---

## SEO Workflow

- Site-wide defaults live in `src/lib/siteMetadata.ts`; update the social profiles array whenever handles change.
- Use the shared `<Seo>` component (`src/components/seo/Seo.tsx`) on every page. Pass `jsonLd` when you want Organization, WebSite, Article, or FAQ schema—helpers live in `src/lib/structuredData.ts`.
- Static routes derive their canonical metadata from `src/data/seoRoutes.ts`. Keep that file in sync with any new path so runtime rendering and `scripts/prerender.tsx` stay aligned.
- Blog share buttons live in `src/components/blog/BlogShareActions.tsx`, and blog metadata (including `seoDescription`) powers both the archive and Article schema.
- After adjustments, run `npm run build` to regenerate `dist/` plus the prerendered HTML for every static route and blog post.

## Performance & Embed Guardrails

- Home now uses `WelcomeBanner` instead of an auto-opening modal—avoid blocking interstitials on initial load.
- Embeds are lazy by default:
  - Contact Typeform loads when visitors click “Open Contact Form”.
  - Pillar quizzes wait for intersection, then load the Typeform script.
  - Video cards show a clickable thumbnail before mounting the YouTube iframe.
- Follow the same approach for any new third-party widget: provide a helpful placeholder, load scripts on intent, and gate global loaders so they only execute once.
- Analytics scripts (GTM/Hotjar) are deferred via `requestIdleCallback` in `index.html`. If you add more trackers, piggyback on that defer mechanism.

---

## Deployment

1. `npm run build` — runs the sitemap generator, compiles Vite output, and prerenders every static/blog route.
2. Deploy `/dist` to your hosting platform (Lovable “Share → Publish”, Netlify, Vercel, etc.).

Supabase function (`submit-quiz`) can be deployed with:

```bash
supabase functions deploy submit-quiz
```

Ensure `supabase/config.toml` matches the project ID you deploy to.

---

## Contributing Tips

- Follow existing formatting (2-space indentation, semicolons on TypeScript files).
- Keep lint clean (`npm run lint`) before opening a PR.
- Document any new scripts or commands inside this README so future contributors can discover them quickly.

Happy building, and sparkle on! ✨

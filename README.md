# Rebellious Aging Web Application

Rebellious Aging is a Vite + React site that helps women 55+ “age boldly, live loudly” through three pillars—Confidence, Style, and Health. The app houses long-form editorial content (blogs, pillar landing pages, nutrition guides), embedded Typeforms, and a Supabase-backed quiz submission flow.

---

## Tech Stack

- **Build tooling:** Vite 5, TypeScript, React 18, SWC-based JSX transform
- **UI:** Tailwind CSS, shadcn/ui components, Radix Primitives, Framer Motion
- **State & data:** TanStack Query, custom hooks, local data files under `src/data`
- **Content tooling:** React Helmet for per-page SEO, custom prerender script
- **Backend integrations:** Supabase Edge Function (`supabase/functions/submit-quiz`) + database table `quiz_submissions`, embedded Typeforms for contact/newsletter

---

## Project Structure

```
src/
  App.tsx               // Routes + providers
  components/           // Layout, home, pillar, nutrition, ui primitives
  data/                 // blogPosts, pillarContent, videoSeries metadata
  hooks/                // Scroll, mobile, toast utilities
  lib/                  // SEO helpers, constants, Facebook helpers
  pages/                // Top-level routes (Home, Pillars, Blog, etc.)
  integrations/         // Supabase typed client
scripts/
  prerender.tsx         // Injects SEO tags into /blog static HTML after build
supabase/
  config.toml           // Project + function config
  functions/            // Edge functions (submit-quiz)
  migrations/           // SQL migrations for quiz_submissions
```

Key conventions:

- Use the `@/` alias (configured in `tsconfig.json`) for internal imports.
- Tailwind + shadcn components live under `src/components/ui`.
- Keep generated Supabase files (`src/integrations/supabase/*`) read-only—regenerate via Supabase CLI if credentials change.

---

## Getting Started

```bash
pnpm install   # or npm install

npm run dev    # start Vite dev server on http://localhost:5173
npm run lint   # TypeScript + React linting via eslint.config.js
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
npm run build    # regenerates dist
npm run prerender
```

The prerender script rewrites `dist/blog/**/index.html` with fully populated `<head>` tags for SEO.

---

## Forms, Quizzes & Integrations

- **Quiz submission:** `src/components/pillar/QuizSection.tsx` posts to the Supabase Edge function (`supabase/functions/submit-quiz/index.ts`). The table schema, policies, and indexes are defined under `supabase/migrations/`.
- **Typeforms:** Contact, newsletter, and quiz fallback embeds load Typeform’s `embed.js`. If you add new embeds, reuse the loader logic in `QuizSection`.
- **Facebook CTA:** Use helper utilities in `src/lib/facebook.ts` for consistent popup + fallback behavior anywhere you link to the private group.

---

## SEO & Sharing

- Site-wide metadata lives in `src/lib/siteMetadata.ts`.
- Utility helpers (buildSeoTitle, buildMetaDescription, getCanonicalUrl) sit under `src/lib/seo.ts` and are reused across pages and in `scripts/prerender.tsx`.
- Blog-specific share buttons live in `src/components/blog/BlogShareActions.tsx`.

---

## Deployment

1. `npm run build` — compiles Vite output.
2. `npm run prerender` — injects blog `<head>` metadata into the built HTML.
3. Deploy `/dist` to your hosting platform (Lovable “Share → Publish”, Netlify, Vercel, etc.).

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

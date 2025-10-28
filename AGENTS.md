# Repository Guidelines

## Project Structure & Module Organization
Entry point `src/main.tsx`; routing lives in `src/App.tsx`. Page-level views sit in `src/pages`, shared building blocks in `src/components`, and shadcn primitives in `src/components/ui`. Put reusable hooks in `src/hooks`, data helpers in `src/data` and `src/lib`, and third-party clients in `src/integrations`. Static assets remain in `public/`, Vite emits builds to `dist/`, and Supabase assets (migrations plus `functions/submit-quiz`) live in `supabase/`.

## Build, Test, and Development Commands
- `npm install` installs dependencies after cloning or whenever `package.json` changes.
- `npm run dev` launches the Vite dev server at `http://localhost:5173` with hot reload.
- `npm run build` creates an optimized bundle in `dist/`; run before publishing.
- `npm run preview` serves the production bundle locally for manual smoke-testing.
- `npm run lint` executes the TypeScript + React ESLint suite; keep the tree clean before opening a PR.

## Coding Style & Naming Conventions
Use TypeScript function components with PascalCase filenames (`Team.tsx`) and camelCase helpers (`useQuizForm`). Favor the `@/` alias defined in `tsconfig.json` for internal imports. ESLint enforces React Hooks rules—fix dependency prompts instead of muting them. Tailwind utilities drive styling; pull shared patterns into `src/components/ui`. Keep the existing 2-space indentation, semicolons, and descriptive prop names. Treat generated files such as `src/integrations/supabase/client.ts` as read-only and regenerate via Lovable when credentials change.

## Testing Guidelines
Automated tests are not yet configured. When adding them, follow the Vite stack (Vitest + Testing Library) and colocate specs next to the component (`Component.test.tsx`) or in `src/__tests__`. Until then, rely on `npm run preview` for regression passes and note covered scenarios in your PR. Record new test scripts in `package.json` and update this guide.

## Commit & Pull Request Guidelines
Recent commits use short, imperative messages (“Add Facebook group page”); keep that style and isolate scope per commit. Pull requests should provide a crisp summary, reference related issues or Supabase changes, include screenshots for UI work, and list manual verification steps. Re-run lint and build before requesting review.

## Supabase & Environment
Environment secrets load from `.env`; never commit production credentials. The Supabase client under `src/integrations/supabase` is auto-generated—regenerate it after rotating keys instead of editing by hand. Develop edge functions with `supabase functions serve submit-quiz`, then deploy via `supabase functions deploy`. Keep `supabase/config.toml` aligned with dashboard settings so preview and production environments stay consistent.

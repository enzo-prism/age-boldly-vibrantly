import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { blogPosts } from '../src/data/blogPosts';
import { nutritionTabs } from '../src/data/nutritionTabs';
import { recipes, slugifyRecipeTitle } from '../src/data/recipes';
import { nutritionGuideSections } from '../src/data/nutritionGuideSections';
import { pillarContent } from '../src/data/pillarContent';
import { seoRoutes } from '../src/data/seoRoutes';
import { videoSeriesData } from '../src/data/videoSeries';
import type { SearchDocument } from '../src/data/searchRecords';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const outputPath = join(projectRoot, 'public', 'search-index.json');

const STATIC_PATHS = new Set([
  '/',
  '/our-story',
  '/welcome-letter',
  '/nutrition',
  '/video-series',
  '/blog',
  '/contact',
  '/facebook-group',
  '/team',
  '/search',
]);

const buildStaticPageDocs = (): SearchDocument[] => {
  return seoRoutes
    .filter((route) => STATIC_PATHS.has(route.path))
    .map<SearchDocument>((route) => ({
      id: `page:${route.path}`,
      type: 'page',
      title: route.title,
      path: route.path,
      summary: route.description,
      tags: ['page'],
    }));
};

const buildPillarDocs = (): SearchDocument[] =>
  Object.entries(pillarContent).map<SearchDocument>(([pillarId, content]) => ({
    id: `pillar:${pillarId}`,
    type: 'pillar',
    title: content.title,
    path: `/pillars/${pillarId}`,
    summary: content.description,
    tags: ['pillar', pillarId],
  }));

const buildGratitudeDoc = (): SearchDocument | null => {
  const gratitudeRoute = seoRoutes.find((route) => route.path === '/pillars/gratitude');
  if (!gratitudeRoute) {
    return null;
  }

  return {
    id: 'pillar:gratitude',
    type: 'pillar',
    title: gratitudeRoute.title,
    path: gratitudeRoute.path,
    summary: gratitudeRoute.description,
    tags: ['pillar', 'gratitude'],
  };
};

const buildBlogDocs = (): SearchDocument[] =>
  blogPosts.map<SearchDocument>((post) => ({
    id: `blog:${post.id}`,
    type: 'blog',
    title: post.title,
    path: `/blog/${post.id}`,
    summary: post.seoDescription ?? post.excerpt,
    content: `Blog #${post.blogNumber}: ${post.title}. ${post.excerpt}`,
    tags: ['blog', `blog-${post.blogNumber}`, post.blogNumber.toString()],
    updatedAt: post.dateSort?.toISOString(),
  }));

const buildVideoDocs = (): SearchDocument[] =>
  videoSeriesData.map<SearchDocument>((video) => ({
    id: `video:${video.id}`,
    type: 'video',
    title: `${video.title} (Episode ${video.episodeNumber})`,
    path: '/video-series',
    summary: video.description,
    tags: ['video', 'series'],
    content: `${video.description} ${video.duration}`,
    updatedAt: video.publishedDate,
  }));

const buildNutritionTabDocs = (): SearchDocument[] =>
  nutritionTabs.map<SearchDocument>((tab) => ({
    id: `section:nutrition:${tab.id}`,
    type: 'section',
    title: tab.title,
    path: `/nutrition?tab=${tab.id}`,
    summary: tab.summary,
    tags: ['nutrition', 'section', ...tab.tags],
    section: 'nutrition',
  }));

const buildRecipeDocs = (): SearchDocument[] =>
  recipes.map<SearchDocument>((recipe) => {
    const slug = slugifyRecipeTitle(recipe.title);
    return {
      id: `recipe:${slug}`,
      type: 'recipe',
      title: recipe.title,
      path: `/nutrition?tab=recipes#recipe-${slug}`,
      summary: recipe.description,
      tags: ['recipe', recipe.category, ...(recipe.tags ?? [])],
      section: 'nutrition',
    };
  });

const buildNutritionGuideSectionDocs = (): SearchDocument[] =>
  nutritionGuideSections.map<SearchDocument>((section) => ({
    id: `section:nutrition-guide:${section.id}`,
    type: 'section',
    title: section.title,
    path: `/pillars/health/nutrition-guide#${section.id}`,
    summary: section.summary,
    tags: ['nutrition-guide', 'section', ...section.tags],
    section: 'nutrition-guide',
  }));

const buildSearchIndex = (): SearchDocument[] => {
  const gratitudeDoc = buildGratitudeDoc();
  const docs: SearchDocument[] = [
    ...buildStaticPageDocs(),
    ...buildPillarDocs(),
    ...buildNutritionTabDocs(),
    ...buildRecipeDocs(),
    ...buildNutritionGuideSectionDocs(),
    ...buildBlogDocs(),
    ...buildVideoDocs(),
    {
      id: 'resource:nutrition-guide',
      type: 'resource',
      title: 'Whole-Food, Plant-Based Guide',
      path: '/pillars/health/nutrition-guide',
      summary:
        'What to eat, what to crowd out, and label-reading tips for a whole-food, plant-based lifestyle that supports the Health pillar.',
      tags: ['nutrition', 'guide', 'health'],
    },
    ...(gratitudeDoc ? [gratitudeDoc] : []),
  ];

  return docs;
};

const writeIndex = async (docs: SearchDocument[]) => {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, JSON.stringify(docs, null, 2), 'utf8');
  console.log(`Wrote ${docs.length} search docs to ${outputPath}`);
};

const run = async () => {
  const docs = buildSearchIndex();
  await writeIndex(docs);
};

run().catch((error) => {
  console.error('Failed to build search index', error);
  process.exitCode = 1;
});

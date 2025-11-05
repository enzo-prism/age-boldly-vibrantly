import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import { blogPosts } from '../src/data/blogPosts';
import { buildMetaDescription, buildSeoTitle, resolveAbsoluteUrl } from '../src/lib/seo';
import { siteMetadata } from '../src/lib/siteMetadata';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const distDir = join(projectRoot, 'dist');
const templatePath = join(distDir, 'index.html');

const BLOG_BASE_PATH = '/blog';

const removeDefaultHeadTags = (html: string) => {
  const patterns = [
    /<title>[\s\S]*?<\/title>/i,
    /<meta\s+name="description"[^>]*>\s*/gi,
    /<meta\s+name="author"[^>]*>\s*/gi,
    /<meta\s+property="og:(title|description|type|image|url)"[^>]*>\s*/gi,
    /<meta\s+name="twitter:[^"]+"[^>]*>\s*/gi,
    /<link\s+rel="canonical"[^>]*>\s*/gi,
  ];

  return patterns.reduce((acc, pattern) => acc.replace(pattern, ''), html);
};

interface RouteConfig {
  path: string;
  output: string;
}

const getRoutes = (): RouteConfig[] => {
  const postRoutes = blogPosts.map((post) => ({
    path: `${BLOG_BASE_PATH}/${post.id}`,
    output: join('blog', post.id, 'index.html')
  }));

  return [
    { path: BLOG_BASE_PATH, output: join('blog', 'index.html') },
    ...postRoutes
  ];
};

interface HeadContent {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType: 'website' | 'article';
  publishedTime?: string;
}

const buildHeadContent = ({ title, description, canonicalUrl, ogType, publishedTime }: HeadContent) => {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  const safeCanonical = canonicalUrl ? escapeHtml(canonicalUrl) : undefined;
  const socialImage = resolveAbsoluteUrl(siteMetadata.defaultSocialImage);
  const safeSocialImage = socialImage ? escapeHtml(socialImage) : undefined;
  const safePublishedTime = publishedTime ? escapeHtml(publishedTime) : undefined;
  const safeTwitterHandle = siteMetadata.twitterHandle ? escapeHtml(siteMetadata.twitterHandle) : undefined;

  const tags = [
    `<title>${safeTitle}</title>`,
    `<meta name="description" content="${safeDescription}" />`,
    safeCanonical ? `<link rel="canonical" href="${safeCanonical}" />` : '',
    safeCanonical ? `<meta property="og:url" content="${safeCanonical}" />` : '',
    `<meta property="og:title" content="${safeTitle}" />`,
    `<meta property="og:description" content="${safeDescription}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    safeSocialImage ? `<meta property="og:image" content="${safeSocialImage}" />` : '',
    safePublishedTime ? `<meta property="article:published_time" content="${safePublishedTime}" />` : '',
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${safeTitle}" />`,
    `<meta name="twitter:description" content="${safeDescription}" />`,
    safeTwitterHandle ? `<meta name="twitter:site" content="${safeTwitterHandle}" />` : '',
    safeSocialImage ? `<meta name="twitter:image" content="${safeSocialImage}" />` : ''
  ];

  return tags.filter(Boolean).join('\n');
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const createBlogIndexHead = () => {
  const title = buildSeoTitle('Blog');
  const description = buildMetaDescription(
    'Explore the Rebellious Aging blog for science-backed insights, strength, style, and mindset guidance to help women 55+ live vibrantly.'
  );

  return buildHeadContent({
    title,
    description,
    canonicalUrl: resolveAbsoluteUrl(BLOG_BASE_PATH),
    ogType: 'website'
  });
};

const createBlogPostHead = (postId: string) => {
  const post = blogPosts.find((item) => item.id === postId);
  if (!post) {
    throw new Error(`Unknown blog post id: ${postId}`);
  }

  const title = buildSeoTitle(post.title);
  const description = buildMetaDescription(post.seoDescription, post.excerpt);

  return buildHeadContent({
    title,
    description,
    canonicalUrl: resolveAbsoluteUrl(`${BLOG_BASE_PATH}/${post.id}`),
    ogType: 'article',
    publishedTime: post.dateSort.toISOString()
  });
};

const createStaticPage = async (route: RouteConfig, template: string) => {
  const head =
    route.path === BLOG_BASE_PATH
      ? createBlogIndexHead()
      : createBlogPostHead(route.path.replace(`${BLOG_BASE_PATH}/`, ''));

  const sanitizedHead = removeDefaultHeadTags(template);
  const finalHtml = sanitizedHead.replace(
    '</head>',
    `${head}\n</head>`
  );

  const outputPath = join(distDir, route.output);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, finalHtml, 'utf8');

  const relativePath = relative(distDir, outputPath);
  console.log(`Prerendered ${route.path} -> ${relativePath}`);
};

const run = async () => {
  const template = await readFile(templatePath, 'utf8');
  const routes = getRoutes();

  await Promise.all(routes.map((route) => createStaticPage(route, template)));
};

run().catch((error) => {
  console.error('Prerendering failed:', error);
  process.exitCode = 1;
});

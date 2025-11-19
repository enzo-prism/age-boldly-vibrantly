import React from 'react';
import { Link } from 'react-router-dom';
import { getSortedBlogPosts } from '@/data/blogPosts';
import Seo from '@/components/seo/Seo';
import { buildMetaDescription } from '@/lib/seo';
import { buildWebSiteJsonLd } from '@/lib/structuredData';

const Blog = () => {
  const sortedBlogPosts = getSortedBlogPosts();
  const pageDescription = buildMetaDescription(
    'Explore the Rebellious Aging blog for science-backed insights, strength, style, and mindset guidance to help women 55+ live vibrantly.'
  );

  return (
    <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
      <Seo
        title="Blog"
        description={pageDescription}
        canonicalPath="/blog"
        jsonLd={buildWebSiteJsonLd()}
      />

      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="bg-teal/10 border border-teal/20 rounded-2xl p-6 mb-10">
        <p className="text-gray-700">
          New to Rebellious Aging? Start with the{' '}
          <Link to="/pillars/health/nutrition-guide" className="text-teal font-semibold hover:underline">
            Whole-Food, Plant-Based Guide
          </Link>{' '}
          or explore the{' '}
          <Link to="/pillars/gratitude" className="text-teal font-semibold hover:underline">
            Gratitude Pillar
          </Link>{' '}
          for daily mindset practices.
        </p>
      </div>
      
      <div className="space-y-8">
        {sortedBlogPosts.map((post) => (
          <article key={post.id}>
            <Link 
              to={`/blog/${post.id}`}
              className="block hover:opacity-70 transition-opacity"
            >
              <h2 className="text-2xl font-semibold mb-2">
                <span className="text-primary font-bold">#{post.blogNumber}</span>
                {' - '}
                {post.title}
              </h2>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;

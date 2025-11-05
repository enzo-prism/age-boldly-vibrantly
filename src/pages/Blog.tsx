import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getSortedBlogPosts } from '@/data/blogPosts';
import { buildMetaDescription, buildSeoTitle, getCanonicalUrl, resolveSocialImage } from '@/lib/seo';
import { siteMetadata } from '@/lib/siteMetadata';

const Blog = () => {
  const sortedBlogPosts = getSortedBlogPosts();
  const pageTitle = buildSeoTitle('Blog');
  const pageDescription = buildMetaDescription(
    'Explore the Rebellious Aging blog for science-backed insights, strength, style, and mindset guidance to help women 55+ live vibrantly.'
  );
  const canonicalUrl = getCanonicalUrl('/blog');
  const socialImage = resolveSocialImage(siteMetadata.defaultSocialImage);

  return (
    <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        {socialImage && <meta property="og:image" content={socialImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {siteMetadata.twitterHandle && (
          <meta name="twitter:site" content={siteMetadata.twitterHandle} />
        )}
        {socialImage && <meta name="twitter:image" content={socialImage} />}
      </Helmet>

      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      
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

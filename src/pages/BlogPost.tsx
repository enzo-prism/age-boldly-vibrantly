import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BlogPostFooter } from '@/components/blog/BlogPostFooter';
import Seo from '@/components/seo/Seo';
import { blogPostContent } from '@/data/blogPostContent';
import { getBlogPostById, getNextBlogPost } from '@/data/blogPosts';
import { buildMetaDescription, buildSeoTitle, getCanonicalUrl, resolveSocialImage } from '@/lib/seo';
import { buildArticleJsonLd } from '@/lib/structuredData';
import { siteMetadata } from '@/lib/siteMetadata';

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const canonicalPath = postId ? `/blog/${postId}` : '/blog';
  const currentPost = postId ? getBlogPostById(postId) : undefined;
  const postContent = postId ? blogPostContent[postId] : undefined;

  if (!currentPost || !postContent) {
    const fallbackDescription = buildMetaDescription(
      'The blog post you are looking for does not exist. Explore more rebellious insights in our blog archive.'
    );
    const canonicalUrl = getCanonicalUrl(canonicalPath);

    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Seo
          title="Blog Post Not Found"
          description={fallbackDescription}
          canonicalPath={canonicalPath}
          canonicalUrl={canonicalUrl}
          noindex
        />

        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  const nextPost = getNextBlogPost(currentPost.blogNumber);
  const canonicalUrl = getCanonicalUrl(canonicalPath);
  const metaDescription = buildMetaDescription(currentPost.seoDescription, currentPost.excerpt);
  const publishedTime = currentPost.dateSort.toISOString();
  const socialImage = resolveSocialImage(siteMetadata.defaultSocialImage);

  const articleJsonLd =
    canonicalUrl &&
    buildArticleJsonLd({
      title: buildSeoTitle(currentPost.title),
      description: metaDescription,
      canonicalUrl,
      image: socialImage,
      datePublished: publishedTime,
    });

  const withSeo = (node: React.ReactNode) => (
    <>
      <Seo
        title={currentPost.title}
        description={metaDescription}
        canonicalPath={canonicalPath}
        canonicalUrl={canonicalUrl}
        ogType="article"
        publishedTime={publishedTime}
        jsonLd={articleJsonLd}
      />
      {node}
    </>
  );

  return withSeo(
    <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
      <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>

      <div className="mb-4">
        <span className="text-primary font-bold text-lg">Blog #{currentPost.blogNumber}</span>
      </div>

      {postContent.heading}
      {postContent.body}

      <BlogPostFooter currentPost={currentPost} nextPost={nextPost} canonicalUrl={canonicalUrl} />
    </div>
  );
};

export default BlogPost;

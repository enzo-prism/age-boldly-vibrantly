import React from 'react';
import { Link } from 'react-router-dom';

import type { BlogPostMetadata } from '@/data/blogPosts';

import { BlogShareActions } from './BlogShareActions';

interface BlogPostFooterProps {
  currentPost: BlogPostMetadata;
  nextPost?: BlogPostMetadata;
  canonicalUrl?: string;
}

export const BlogPostFooter: React.FC<BlogPostFooterProps> = ({
  currentPost,
  nextPost,
  canonicalUrl
}) => {
  return (
    <div className="mt-12 border-t border-border pt-8 space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
          Share this article
        </p>
        <BlogShareActions
          title={currentPost.title}
          excerpt={currentPost.excerpt}
          url={canonicalUrl}
        />
      </div>

      {nextPost && (
        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground mb-2">Next Article</p>
          <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
            {nextPost.title}
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogPostFooter;

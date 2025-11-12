import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  buildMetaDescription,
  buildSeoTitle,
  getCanonicalUrl,
  resolveSocialImage,
} from '@/lib/seo';
import { siteMetadata } from '@/lib/siteMetadata';

export type OgType = 'website' | 'article';

interface SeoProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  canonicalUrl?: string;
  ogType?: OgType;
  image?: string;
  publishedTime?: string;
  noindex?: boolean;
  twitterHandle?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  children?: React.ReactNode;
}

const normalizeJsonLd = (
  value?: Record<string, unknown> | Array<Record<string, unknown>>
) => {
  if (!value) {
    return undefined;
  }

  return Array.isArray(value) ? value : [value];
};

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonicalPath = '/',
  canonicalUrl,
  ogType = 'website',
  image,
  publishedTime,
  noindex,
  twitterHandle = siteMetadata.twitterHandle,
  jsonLd,
  children,
}) => {
  const seoTitle = buildSeoTitle(title);
  const metaDescription = buildMetaDescription(description);
  const canonical = canonicalUrl ?? getCanonicalUrl(canonicalPath);
  const socialImage = resolveSocialImage(image ?? siteMetadata.defaultSocialImage);
  const structuredData = normalizeJsonLd(jsonLd);

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {socialImage && <meta property="og:image" content={socialImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {socialImage && <meta name="twitter:image" content={socialImage} />}

      {structuredData?.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </Helmet>
  );
};

export default Seo;

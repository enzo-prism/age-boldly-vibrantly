import { siteMetadata } from './siteMetadata';
import { resolveAbsoluteUrl } from './seo';

export const buildOrganizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteMetadata.name,
  url: siteMetadata.baseUrl,
  logo: resolveAbsoluteUrl(siteMetadata.defaultSocialImage),
  sameAs: siteMetadata.socialProfiles ?? [],
});

export const buildWebSiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteMetadata.name,
  url: siteMetadata.baseUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteMetadata.baseUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

interface ArticleParams {
  title: string;
  description: string;
  canonicalUrl?: string;
  image?: string;
  datePublished?: string;
}

export const buildArticleJsonLd = ({
  title,
  description,
  canonicalUrl,
  image,
  datePublished,
}: ArticleParams) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  author: {
    '@type': 'Person',
    name: 'Suzanne (Suz)',
  },
  publisher: {
    '@type': 'Organization',
    name: siteMetadata.name,
    logo: {
      '@type': 'ImageObject',
      url: resolveAbsoluteUrl(siteMetadata.defaultSocialImage),
    },
  },
  mainEntityOfPage: canonicalUrl,
  image: image ? resolveAbsoluteUrl(image) : resolveAbsoluteUrl(siteMetadata.defaultSocialImage),
  datePublished,
});

interface Question {
  question: string;
  answer: string;
}

export const buildFaqJsonLd = (questions: Question[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

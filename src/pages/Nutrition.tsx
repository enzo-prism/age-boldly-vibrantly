
import React from 'react';
import NutritionHero from '@/components/nutrition/NutritionHero';
import NutritionTabs from '@/components/nutrition/NutritionTabs';
import ConnectCTA from '@/components/common/ConnectCTA';
import Seo from '@/components/seo/Seo';
import { getSeoRouteByPath } from '@/data/seoRoutes';
import { buildFaqJsonLd } from '@/lib/structuredData';

const Nutrition = () => {
  const seoConfig = getSeoRouteByPath('/nutrition');
  const faqSchema = buildFaqJsonLd([
    {
      question: 'What is a Whole-Food, Plant-Based (WFPB) lifestyle?',
      answer:
        'It focuses on fruits, vegetables, whole grains, legumes, nuts, and seeds while minimizing oils, added sugars, and processed foods to promote longevity and vitality.',
    },
    {
      question: 'How do I get started with WFPB eating?',
      answer:
        'Begin by crowding your plate with colorful plants, batch-cooking staples like beans and grains, and following heart-healthy guidance from experts such as Dr. Esselstyn and Dr. Campbell.',
    },
    {
      question: 'Can WFPB support heart health and weight management?',
      answer:
        'Yes. Oil-free, fiber-rich meals help regulate cholesterol, manage weight without calorie counting, and align with the science-backed protocols outlined in the Nutrition pillar.',
    },
  ]);

  return (
    <div>
      {seoConfig && (
        <Seo
          title={seoConfig.title}
          description={seoConfig.description}
          canonicalPath={seoConfig.path}
          jsonLd={faqSchema}
        />
      )}
      <NutritionHero />
      <NutritionTabs />
      <ConnectCTA />
    </div>
  );
};

export default Nutrition;

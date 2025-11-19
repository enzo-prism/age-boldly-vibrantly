
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { pillarContent } from '@/data/pillarContent';
import PillarHero from '@/components/pillar/PillarHero';
import GallerySection from '@/components/pillar/GallerySection';
import QuizSection from '@/components/pillar/QuizSection';
import ChecklistCTA from '@/components/pillar/ChecklistCTA';
import ConnectCTA from '@/components/common/ConnectCTA';
import Seo from '@/components/seo/Seo';
import GratitudePillar from '@/components/pillar/GratitudePillar';
import { Button } from '@/components/ui/button';

const PillarPage = () => {
  const { pillarId } = useParams<{ pillarId: string }>();

  if (pillarId === 'gratitude') {
    return <GratitudePillar />;
  }
  
  if (!pillarId || !pillarContent[pillarId]) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-6">Pillar Not Found</h1>
        <p>The pillar you're looking for doesn't exist.</p>
      </div>
    );
  }

  const content = pillarContent[pillarId];
  const canonicalPath = `/pillars/${pillarId}`;

  return (
    <div>
      <Seo
        title={content.title}
        description={content.description}
        canonicalPath={canonicalPath}
      />
      <PillarHero content={content} />

      <GallerySection content={content} />

      {pillarId === 'health' && (
        <div className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-teal/10 to-white border border-teal/20 rounded-3xl p-8 flex flex-col lg:flex-row gap-6 items-start justify-between">
            <div>
              <p className="uppercase text-xs tracking-[0.3em] text-teal font-semibold">Deeper Dive</p>
              <h2 className="text-3xl font-bold mt-2 mb-4">Whole-Food, Plant-Based Guide</h2>
              <p className="text-gray-700 max-w-2xl">
                Explore exactly what to pile on your plate, what to crowd out, and how to shop, label-read, and stay sparkly as you embrace WFPB living.
              </p>
            </div>
            <Button asChild>
              <Link to="/pillars/health/nutrition-guide">Read the Guide</Link>
            </Button>
          </div>
        </div>
      )}

      <QuizSection content={content} />
      
      <ChecklistCTA content={content} />
      
      <ConnectCTA />
    </div>
  );
};

export default PillarPage;

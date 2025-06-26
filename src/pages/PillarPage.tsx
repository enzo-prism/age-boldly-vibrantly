
import React from 'react';
import { useParams } from 'react-router-dom';
import { pillarContent } from '@/data/pillarContent';
import PillarHero from '@/components/pillar/PillarHero';
import GallerySection from '@/components/pillar/GallerySection';
import NutritionCTA from '@/components/pillar/NutritionCTA';
import QuizSection from '@/components/pillar/QuizSection';
import ChecklistCTA from '@/components/pillar/ChecklistCTA';

const PillarPage = () => {
  const { pillarId } = useParams<{ pillarId: string }>();
  
  if (!pillarId || !pillarContent[pillarId]) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-6">Pillar Not Found</h1>
        <p>The pillar you're looking for doesn't exist.</p>
      </div>
    );
  }

  const content = pillarContent[pillarId];

  return (
    <div>
      <PillarHero content={content} />

      <GallerySection content={content} />

      {pillarId === 'health' && <NutritionCTA />}

      <QuizSection content={content} />
      
      <ChecklistCTA content={content} />
    </div>
  );
};

export default PillarPage;

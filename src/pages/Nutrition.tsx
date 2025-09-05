
import React from 'react';
import NutritionHero from '@/components/nutrition/NutritionHero';
import NutritionTabs from '@/components/nutrition/NutritionTabs';
import ConnectCTA from '@/components/common/ConnectCTA';

const Nutrition = () => {
  return (
    <div>
      <NutritionHero />
      <NutritionTabs />
      <ConnectCTA />
    </div>
  );
};

export default Nutrition;


import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WhatIsWFPB from './WhatIsWFPB';
import Benefits from './Benefits';
import Protocol from './Protocol';
import DrCampbell from './DrCampbell';
import Foods from './Foods';
import Recipes from './Recipes';
import Supplements from './Supplements';

const NutritionTabs = () => {
  const [activeTab, setActiveTab] = useState('what-is-wfpb');

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="what-is-wfpb" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <div className="border-b mb-6">
            <TabsList className="w-full justify-start bg-transparent h-auto mb-0 p-0">
              <TabsTrigger 
                value="what-is-wfpb" 
                className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'what-is-wfpb' ? 'border-teal text-teal' : 'border-transparent'}`}
              >
                What is WFPB?
              </TabsTrigger>
              <TabsTrigger 
                value="benefits" 
                className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'benefits' ? 'border-teal text-teal' : 'border-transparent'}`}
              >
                Benefits
              </TabsTrigger>
              <TabsTrigger 
                value="protocol" 
                className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'protocol' ? 'border-teal text-teal' : 'border-transparent'}`}
              >
                Dr. Caldwell Esselstyn's Protocol
              </TabsTrigger>
              <TabsTrigger 
                value="dr-campbell" 
                className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'dr-campbell' ? 'border-teal text-teal' : 'border-transparent'}`}
              >
                Dr. T. Colin Campbell
              </TabsTrigger>
              <TabsTrigger 
                value="foods" 
                className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'foods' ? 'border-teal text-teal' : 'border-transparent'}`}
              >
                Foods
              </TabsTrigger>
              <TabsTrigger 
                value="recipes" 
                className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'recipes' ? 'border-teal text-teal' : 'border-transparent'}`}
              >
                Recipes
              </TabsTrigger>
              <TabsTrigger 
                value="supplements" 
                className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'supplements' ? 'border-teal text-teal' : 'border-transparent'}`}
              >
                Supplements
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="what-is-wfpb">
            <WhatIsWFPB />
          </TabsContent>
          
          <TabsContent value="benefits">
            <Benefits />
          </TabsContent>
          
          <TabsContent value="protocol">
            <Protocol />
          </TabsContent>
          
          <TabsContent value="dr-campbell">
            <DrCampbell />
          </TabsContent>
          
          <TabsContent value="foods">
            <Foods />
          </TabsContent>
          
          <TabsContent value="recipes">
            <Recipes />
          </TabsContent>
          
          <TabsContent value="supplements">
            <Supplements />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default NutritionTabs;

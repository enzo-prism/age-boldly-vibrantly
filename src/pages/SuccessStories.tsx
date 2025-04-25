
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface SuccessStory {
  id: number;
  name: string;
  age: number;
  pillar: string;
  gender: string;
  image: string;
  quote: string;
  story: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Eleanor Johnson",
    age: 68,
    gender: "Female",
    pillar: "Confidence",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
    quote: "After decades of putting myself last, Rebellious Aging helped me reclaim my confidence and voice.",
    story: "For most of my life, I was the peacekeeper, the one who made sure everyone else was happy, often at the expense of my own needs. When I turned 65, I realized I had spent decades living for others—my children, my husband, my aging parents—but rarely for myself. I joined a Rebellious Aging workshop hoping to find direction in this new phase of life. The confidence pillar resonated deeply with me. I learned to set boundaries, express my opinions, and pursue interests I had put aside. Today, I lead a seniors hiking group with over 50 members, have taken up watercolor painting, and am no longer afraid to speak up when something matters to me. Age has given me perspective, and Rebellious Aging gave me the tools to use that wisdom with confidence."
  },
  {
    id: 2,
    name: "Michael Torres",
    age: 55,
    gender: "Male",
    pillar: "Style",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=400",
    quote: "I never thought style was for me until I discovered this community. Now I express myself boldly through fashion.",
    story: "As a software engineer for over 30 years, my wardrobe consisted of whatever was comfortable and practical—typically jeans and tech company t-shirts. I never gave much thought to personal style, assuming it was superficial and not relevant to my identity. When I attended a Rebellious Aging style workshop on a whim, I was surprised to learn that style wasn't about following trends or trying to look younger, but about authentic self-expression. Working with a style mentor helped me discover colors, textures, and silhouettes that felt right for me. Now in my mid-50s, I've developed a distinctive look that combines classic pieces with bold colors and interesting accessories. People notice and comment on the change, but more importantly, I feel more confident and true to myself. Style has become a creative outlet and a daily act of self-care."
  },
  {
    id: 3,
    name: "Patricia Reynolds",
    age: 72,
    gender: "Female",
    pillar: "Longevity",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=400",
    quote: "The plant-based nutrition program reversed my heart disease. My doctor was shocked when my markers improved in just 3 months!",
    story: "After my annual physical at age 70, my doctor delivered concerning news: elevated cholesterol, high blood pressure, and early signs of coronary artery disease. She recommended medication and said these changes were 'just part of aging.' Unwilling to accept that narrative, I found Rebellious Aging and their whole-food, plant-based nutrition program. Despite initial skepticism, I committed fully to Dr. Esselstyn's protocol. The first month was challenging as I learned new cooking techniques without oil and animal products, but I quickly began feeling more energetic. After three months, my follow-up tests showed dramatic improvements: my total cholesterol dropped from 245 to 175, my blood pressure normalized, and inflammation markers decreased significantly. My doctor was astonished and reduced my medication. Two years later, I maintain my plant-based lifestyle and have more energy now than I did a decade ago. This approach hasn't just extended my life—it's improved its quality immeasurably."
  },
  {
    id: 4,
    name: "James Wilson",
    age: 61,
    gender: "Male",
    pillar: "Confidence",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400",
    quote: "Retirement left me feeling invisible and irrelevant. The confidence workshops helped me find purpose again.",
    story: "After 35 years in corporate management, retirement hit me harder than expected. Without the title, team, and daily responsibilities, I felt stripped of my identity and value. Depression set in as I struggled to find purpose. Six months into retirement, my daughter suggested the Rebellious Aging program. The confidence workshops helped me identify skills and wisdom I'd accumulated that could benefit my community. I started mentoring young entrepreneurs at a local business incubator and joined a volunteer board for a nonprofit. These roles required the same leadership skills I'd honed throughout my career but in service of causes I deeply cared about. The program taught me that confidence in later life isn't about clinging to past achievements but leveraging life experience in meaningful new directions. At 61, I feel more purposeful than ever, not despite my age but because of the perspective it gives me."
  },
  {
    id: 5,
    name: "Sophia Chen",
    age: 58,
    gender: "Female",
    pillar: "Style",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=400",
    quote: "Embracing my silver hair was the most liberating style choice I've ever made.",
    story: "I spent decades battling my graying hair with expensive dye jobs every three weeks. As an executive in the fashion industry, I felt tremendous pressure to maintain a youthful appearance. When the pandemic hit and salons closed, my silver roots grew in. At first, I was horrified, but as they grew longer, I started to see a different kind of beauty emerging. The Rebellious Aging style philosophy encouraged embracing authentic changes rather than fighting them. With support from the community and advice on updating my wardrobe colors to complement my new silver tones, I made the full transition. The response has been overwhelmingly positive—people comment that I look more striking and distinctive. More importantly, I feel liberated from the tyranny of constant touch-ups and more comfortable in my own skin. My silver hair has become my signature, and I'm proud of what it represents: experience, wisdom, and the courage to be authentically myself."
  }
];

const SuccessStories = () => {
  const [activeFilters, setActiveFilters] = useState<{
    pillar: string | null;
    gender: string | null;
    ageRange: string | null;
  }>({
    pillar: null,
    gender: null,
    ageRange: null
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const filterStories = () => {
    return successStories.filter(story => {
      // Filter by search term
      if (searchTerm && !story.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !story.story.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Filter by pillar
      if (activeFilters.pillar && story.pillar !== activeFilters.pillar) {
        return false;
      }
      
      // Filter by gender
      if (activeFilters.gender && story.gender !== activeFilters.gender) {
        return false;
      }
      
      // Filter by age range
      if (activeFilters.ageRange) {
        const age = story.age;
        if (activeFilters.ageRange === '50-59' && (age < 50 || age > 59)) return false;
        if (activeFilters.ageRange === '60-69' && (age < 60 || age > 69)) return false;
        if (activeFilters.ageRange === '70+' && age < 70) return false;
      }
      
      return true;
    });
  };
  
  const filteredStories = filterStories();
  
  const handleFilterChange = (category: 'pillar' | 'gender' | 'ageRange', value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? null : value
    }));
  };
  
  const clearFilters = () => {
    setActiveFilters({
      pillar: null,
      gender: null,
      ageRange: null
    });
    setSearchTerm('');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-lg text-gray-700 mb-8">
              Real stories from real people who are aging boldly and living vibrantly. 
              Let their journeys inspire your own path to rebellious aging.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full md:w-1/3">
              <Input
                type="search"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <span className="text-sm text-gray-500 mb-2 block">Pillar</span>
                <div className="flex gap-2">
                  {['Confidence', 'Style', 'Longevity'].map((pillar) => (
                    <Badge 
                      key={pillar}
                      variant={activeFilters.pillar === pillar ? 'default' : 'outline'}
                      className={`cursor-pointer ${
                        activeFilters.pillar === pillar ? 'bg-teal hover:bg-teal-dark' : ''
                      }`}
                      onClick={() => handleFilterChange('pillar', pillar)}
                    >
                      {pillar}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-sm text-gray-500 mb-2 block">Gender</span>
                <div className="flex gap-2">
                  {['Female', 'Male'].map((gender) => (
                    <Badge 
                      key={gender}
                      variant={activeFilters.gender === gender ? 'default' : 'outline'}
                      className={`cursor-pointer ${
                        activeFilters.gender === gender ? 'bg-teal hover:bg-teal-dark' : ''
                      }`}
                      onClick={() => handleFilterChange('gender', gender)}
                    >
                      {gender}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-sm text-gray-500 mb-2 block">Age</span>
                <div className="flex gap-2">
                  {['50-59', '60-69', '70+'].map((ageRange) => (
                    <Badge 
                      key={ageRange}
                      variant={activeFilters.ageRange === ageRange ? 'default' : 'outline'}
                      className={`cursor-pointer ${
                        activeFilters.ageRange === ageRange ? 'bg-teal hover:bg-teal-dark' : ''
                      }`}
                      onClick={() => handleFilterChange('ageRange', ageRange)}
                    >
                      {ageRange}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {(activeFilters.pillar || activeFilters.gender || activeFilters.ageRange || searchTerm) && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="self-end"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Stories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map(story => (
                <Card key={story.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-teal">{story.pillar}</Badge>
                      <span className="text-sm text-gray-500">{story.age} years</span>
                    </div>
                    <h3 className="text-xl font-bold mt-2 mb-3">{story.name}</h3>
                    <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {story.story}
                    </p>
                    <Button variant="outline" className="w-full text-teal border-teal hover:bg-teal hover:text-white">
                      Read Full Story
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No stories match your filters</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or clear all filters</p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Share Your Story CTA */}
      <section className="py-16 bg-teal/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have Your Own Rebellious Aging Story?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Your journey could inspire others who are just beginning their rebellious aging path.
              Share your experience and become part of our vibrant community.
            </p>
            <Button className="bg-coral hover:bg-coral-dark text-white">
              Share Your Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;

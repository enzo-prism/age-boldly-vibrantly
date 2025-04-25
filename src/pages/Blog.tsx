import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: number;
  pillar: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  gradient: string;
  hasAudio: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Finding Your Voice After 50",
    excerpt: "Strategies for building confidence and assertiveness in your later years, when society often expects you to quiet down.",
    date: "Apr 18, 2025",
    author: "Elizabeth Chen",
    readTime: 6,
    pillar: "Confidence",
    difficulty: "Beginner",
    gradient: "linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)",
    hasAudio: true
  },
  {
    id: 2,
    title: "Capsule Wardrobes for Every Decade",
    excerpt: "How to build a versatile, age-positive wardrobe that expresses your authentic self without following trends.",
    date: "Apr 15, 2025",
    author: "Michael Torres",
    readTime: 8,
    pillar: "Style",
    difficulty: "Intermediate",
    gradient: "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)",
    hasAudio: false
  },
  {
    id: 3,
    title: "The Science Behind Plant-Based Nutrition",
    excerpt: "A deep dive into the research showing how whole-food, plant-based eating can reverse chronic disease and support longevity.",
    date: "Apr 12, 2025",
    author: "Dr. Janelle Washington",
    readTime: 12,
    pillar: "Longevity",
    difficulty: "Advanced",
    gradient: "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)",
    hasAudio: true
  },
  {
    id: 4,
    title: "5 Confidence Exercises for Social Situations",
    excerpt: "Practical techniques to help you feel more self-assured in group settings and combat social anxiety.",
    date: "Apr 10, 2025",
    author: "James Wilson",
    readTime: 5,
    pillar: "Confidence",
    difficulty: "Beginner",
    gradient: "linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%)",
    hasAudio: true
  },
  {
    id: 5,
    title: "Aging and Fashion: Breaking the Rules",
    excerpt: "Why \"age-appropriate\" fashion advice is outdated and how to develop personal style that reflects your authentic self.",
    date: "Apr 5, 2025",
    author: "Sophia Chen",
    readTime: 7,
    pillar: "Style",
    difficulty: "Intermediate",
    gradient: "linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)",
    hasAudio: false
  }
];

const Blog = () => {
  const [activeFilters, setActiveFilters] = useState<{
    pillar: string | null;
    difficulty: string | null;
  }>({
    pillar: null,
    difficulty: null
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showAudioOnly, setShowAudioOnly] = useState(false);
  
  const filterPosts = () => {
    return blogPosts.filter(post => {
      if (searchTerm && !post.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      if (activeFilters.pillar && post.pillar !== activeFilters.pillar) {
        return false;
      }
      
      if (activeFilters.difficulty && post.difficulty !== activeFilters.difficulty) {
        return false;
      }
      
      if (showAudioOnly && !post.hasAudio) {
        return false;
      }
      
      return true;
    });
  };
  
  const filteredPosts = filterPosts();
  
  const handleFilterChange = (category: 'pillar' | 'difficulty', value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? null : value
    }));
  };
  
  const clearFilters = () => {
    setActiveFilters({
      pillar: null,
      difficulty: null
    });
    setSearchTerm('');
    setShowAudioOnly(false);
  };

  return (
    <div>
      <section className="bg-teal/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-gray-700 mb-8">
              Expert advice, practical tips, and inspiring stories to support your rebellious aging journey.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div 
                className="h-64 md:h-full"
                style={{ 
                  background: "linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)"
                }}
              />
              <div className="p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-teal">Confidence</Badge>
                    <span className="text-sm text-gray-500">Featured Post</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Finding Your Voice After 50</h2>
                  <p className="text-gray-600 mb-6">
                    Strategies for building confidence and assertiveness in your later years, when society often expects you to quiet down. Learn how to embrace your wisdom and experience to speak up with conviction and purpose.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Elizabeth Chen</p>
                    <p className="text-sm text-gray-500">Apr 18, 2025 • 6 min read</p>
                  </div>
                  <Button className="bg-teal hover:bg-teal-dark text-white">
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full md:w-1/3">
              <Input
                type="search"
                placeholder="Search posts..."
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
                <span className="text-sm text-gray-500 mb-2 block">Difficulty</span>
                <div className="flex gap-2">
                  {['Beginner', 'Intermediate', 'Advanced'].map((difficulty) => (
                    <Badge 
                      key={difficulty}
                      variant={activeFilters.difficulty === difficulty ? 'default' : 'outline'}
                      className={`cursor-pointer ${
                        activeFilters.difficulty === difficulty ? 'bg-teal hover:bg-teal-dark' : ''
                      }`}
                      onClick={() => handleFilterChange('difficulty', difficulty)}
                    >
                      {difficulty}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-sm text-gray-500 mb-2 block">Format</span>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="audio-filter" 
                    className="mr-2"
                    checked={showAudioOnly}
                    onChange={() => setShowAudioOnly(!showAudioOnly)}
                  />
                  <label htmlFor="audio-filter">Audio available</label>
                </div>
              </div>
              
              {(activeFilters.pillar || activeFilters.difficulty || searchTerm || showAudioOnly) && (
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
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                  <div 
                    className="h-48 overflow-hidden relative"
                    style={{ background: post.gradient }}
                  >
                    {post.hasAudio && (
                      <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 0l3.182-3.182m-2.828 0L5.586 8.464M4 16.5v-9l4 4-4 4z" />
                        </svg>
                        <span className="text-xs font-medium">Audio</span>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-teal">{post.pillar}</Badge>
                      <Badge variant="outline" className="text-xs">{post.difficulty}</Badge>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription>{post.date} • {post.readTime} min read</CardDescription>
                  </CardHeader>
                  <CardContent className="py-0 flex-grow">
                    <p className="text-gray-600">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-6">
                    <Button variant="outline" className="w-full text-teal border-teal hover:bg-teal hover:text-white">
                      Read Article
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No articles match your filters</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or clear all filters</p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="text-teal border-teal hover:bg-teal hover:text-white">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-teal/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe for Weekly Insights</h2>
            <p className="text-lg text-gray-700 mb-8">
              Get our latest articles, tips, and resources delivered directly to your inbox every week.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1"
                required
              />
              <Button className="bg-coral hover:bg-coral-dark text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

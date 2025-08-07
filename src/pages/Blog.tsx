
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [sortBy, setSortBy] = useState<'chronological' | 'newest'>('chronological');

  const blogPosts = [
    {
      id: 'wfpb-lifestyle-guide',
      title: 'A Quick Introduction and Guide to a Whole-Food Plant-Based (WFPB) Lifestyle',
      excerpt: 'The WFPB lifestyle is NOT a diet. It is a lifestyle which promotes better health, greater energy, and a deeper connection with the way humans chose to nourish themselves.',
      date: '1/29/2025',
      dateSort: new Date('2025-01-29'),
      readTime: '12 min read',
      blogNumber: 3
    },
    {
      id: 'a-love-letter-to-my-closet',
      title: 'A Love Letter to My Closet',
      excerpt: 'There was a time I dressed to impress. Now? I dress to express. My closet is no longer a holding pen for solid black.',
      date: '6/25/2025',
      dateSort: new Date('2025-06-25'),
      readTime: '10 min read',
      blogNumber: 4
    },
    {
      id: 'rebellious-guide-what-is-on-your-plate',
      title: 'The Rebellious Guide (What is on Your Plate)',
      excerpt: 'Let\'s set the table for something deliciously different. I am excited to talk with you about something that has transformed my life - the Whole Food Plant Based (WFPB) lifestyle.',
      date: '6/25/2025',
      dateSort: new Date('2025-06-25'),
      readTime: '8 min read',
      blogNumber: 1
    },
    {
      id: 'the-road-to-success-8-thoughts',
      title: 'The Road to Success: 8 Thoughts',
      excerpt: 'Eight powerful principles that pave the way to success: from hard work and patience to self-confidence and focus. Discover the mindset shifts that transform ordinary into extraordinary.',
      date: '4/4/2025',
      dateSort: new Date('2025-04-04'),
      readTime: '3 min read',
      blogNumber: 2
    },
    {
      id: 'blueberries-and-wrinkles',
      title: 'Blueberries and Wrinkles',
      excerpt: 'Coming soon: Discover the powerful connection between antioxidant-rich foods and healthy aging.',
      date: '5/15/2025',
      dateSort: new Date('2025-05-15'),
      readTime: '6 min read',
      blogNumber: 5
    },
    {
      id: 'gratitude-rebellious-soul',
      title: 'The Rebellious Guide (What is on Your Plate.)',
      excerpt: 'Let\'s set the table for something deliciously different. I am excited to talk with you about something that has transformed my life - the Whole Food Plant Based (WFPB) lifestyle.',
      date: '6/25/2025',
      dateSort: new Date('2025-06-25'),
      readTime: '18 min read',
      blogNumber: 6
    }
  ];

  // Get sorted posts based on current sort preference
  const getSortedPosts = () => {
    if (sortBy === 'chronological') {
      return [...blogPosts].sort((a, b) => a.blogNumber - b.blogNumber);
    } else {
      return [...blogPosts].sort((a, b) => b.dateSort.getTime() - a.dateSort.getTime());
    }
  };

  const sortedBlogPosts = getSortedPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-teal/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Rebellious Aging Blog
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Where sass and serious meet for wisdom, inspiration, and a whole lot of sparkle.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Sort Toggle */}
            <div className="mb-8 flex justify-center">
              <ToggleGroup
                type="single"
                value={sortBy}
                onValueChange={(value) => value && setSortBy(value as 'chronological' | 'newest')}
                className="border rounded-lg p-1 bg-white shadow-sm"
              >
                <ToggleGroupItem
                  value="chronological"
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors data-[state=on]:bg-teal data-[state=on]:text-white"
                >
                  Chronological
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="newest"
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors data-[state=on]:bg-teal data-[state=on]:text-white"
                >
                  Newest First
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="grid gap-8">
              {sortedBlogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <span>•</span>
                      <span>Blog {post.blogNumber}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.id}`}>
                      <Button className="bg-teal hover:bg-teal-dark text-white inline-flex items-center gap-2">
                        Read Full Post
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Coming Soon Section */}
            <div className="mt-16 bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-coral/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">More Rebellious Content Coming Soon!</h3>
              <p className="text-gray-600 mb-6">
                We're busy creating more amazing content about confidence, style, health, and rebellious aging. 
                Stay tuned for expert advice, practical tips, and inspiring stories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;



import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 'wfpb-lifestyle-guide',
      title: 'A Quick Introduction and Guide to a Whole-Food Plant-Based (WFPB) Lifestyle',
      excerpt: 'The WFPB lifestyle is NOT a diet. It is a lifestyle which promotes better health, greater energy, and a deeper connection with the way humans chose to nourish themselves.',
      date: '1/29/2025',
      category: 'Blog 2',
      readTime: '12 min read'
    },
    {
      id: 'rebellious-guide-what-is-on-your-plate',
      title: 'The Rebellious Guide (What is on Your Plate)',
      excerpt: 'Let\'s set the table for something deliciously different. I am excited to talk with you about something that has transformed my life - the Whole Food Plant Based (WFPB) lifestyle.',
      date: '6/25/2025',
      category: 'Blog 3',
      readTime: '8 min read'
    },
    {
      id: 'the-road-to-success-8-thoughts',
      title: 'The Road to Success: 8 Thoughts',
      excerpt: 'Eight powerful principles that pave the way to success: from hard work and patience to self-confidence and focus. Discover the mindset shifts that transform ordinary into extraordinary.',
      date: '4/4/2025',
      category: 'Blog 1',
      readTime: '3 min read'
    }
  ];

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
            <div className="grid gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <span>•</span>
                      <span>{post.category}</span>
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


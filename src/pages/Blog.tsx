
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {

  const blogPosts = [
    {
      id: 'rebellious-guide-what-is-on-your-plate',
      title: 'The Rebellious Guide (What is on Your Plate)',
      excerpt: 'Let\'s set the table for something deliciously different. I am excited to talk with you about something that has transformed my life - the Whole Food Plant Based (WFPB) lifestyle.',
      date: '1/15/2025',
      dateSort: new Date('2025-01-15'),
      readTime: '8 min read',
      blogNumber: 1
    },
    {
      id: 'the-road-to-success-8-thoughts',
      title: 'The Road to Success: 8 Thoughts',
      excerpt: 'Eight powerful principles that pave the way to success: from hard work and patience to self-confidence and focus. Discover the mindset shifts that transform ordinary into extraordinary.',
      date: '2/1/2025',
      dateSort: new Date('2025-02-01'),
      readTime: '3 min read',
      blogNumber: 2
    },
    {
      id: 'wfpb-lifestyle-guide',
      title: 'A Quick Introduction and Guide to a Whole-Food Plant-Based (WFPB) Lifestyle',
      excerpt: 'The WFPB lifestyle is NOT a diet. It is a lifestyle which promotes better health, greater energy, and a deeper connection with the way humans chose to nourish themselves.',
      date: '2/15/2025',
      dateSort: new Date('2025-02-15'),
      readTime: '12 min read',
      blogNumber: 3
    },
    {
      id: 'a-love-letter-to-my-closet',
      title: 'A Love Letter to My Closet',
      excerpt: 'There was a time I dressed to impress. Now? I dress to express. My closet is no longer a holding pen for solid black.',
      date: '3/1/2025',
      dateSort: new Date('2025-03-01'),
      readTime: '10 min read',
      blogNumber: 4
    },
    {
      id: 'blueberries-and-wrinkles',
      title: 'Blueberries and Wrinkles',
      excerpt: 'Coming soon: Discover the powerful connection between antioxidant-rich foods and healthy aging.',
      date: '3/15/2025',
      dateSort: new Date('2025-03-15'),
      readTime: '6 min read',
      blogNumber: 5
    },
    {
      id: 'gratitude-rebellious-soul',
      title: 'Gratitude and the Rebellious Soul',
      excerpt: 'Exploring the transformative power of gratitude in our journey toward rebellious aging. Discover how appreciation and thankfulness can reshape our perspective on life, aging, and personal growth.',
      date: '4/1/2025',
      dateSort: new Date('2025-04-01'),
      readTime: '15 min read',
      blogNumber: 6
    },
    {
      id: 'art-of-thriving-aging-expert',
      title: 'The Art of Thriving. What an Ageing Expert Wants You to Know',
      excerpt: 'Inspired by Dr. Kerry Burnight\'s wisdom on aging, this blog explores the concept of "joyspan" - living with connection, purpose, and soul-deep contentment that makes aging feel like a privilege.',
      date: '4/15/2025',
      dateSort: new Date('2025-04-15'),
      readTime: '12 min read',
      blogNumber: 7
    },
    {
      id: 'shop-window-aging-gracefully',
      title: 'What a Shop Window Taught Me About Aging Gracefully',
      excerpt: 'Who knew a shop window could deliver a life lesson? One early morning glance stopped me in my tracks and got me thinking about posture, presence, and how we carry ourselves through the years.',
      date: '5/1/2025',
      dateSort: new Date('2025-05-01'),
      readTime: '10 min read',
      blogNumber: 8
    },
    {
      id: 'set-record-straight-wfpb',
      title: 'It\'s Time to Set the Record Straight Regarding a Whole Food Plant Based Lifestyle',
      excerpt: 'Let\'s be honest. When you mention to other humans that you are eating mostly plants, the reactions range from curious to downright skeptical. Time to clear the air and debunk the myths.',
      date: '8/4/2025',
      dateSort: new Date('2025-08-04'),
      readTime: '8 min read',
      blogNumber: 9
    },
    {
      id: 'limiting-beliefs-not-boss',
      title: 'Shhh…That Voice in Your Head is Not the Boss of You',
      excerpt: 'Let\'s get one thing straight. Those whispers in your head saying you are too old, too late, not stylish enough, they are NOT the truth. They are old scripts, hand-me-down fears, and quite frankly, they are BORING!',
      date: '8/6/2025',
      dateSort: new Date('2025-08-06'),
      readTime: '9 min read',
      blogNumber: 10
    },
    {
      id: 'what-is-behind-limiting-beliefs',
      title: 'What is Behind Limiting Beliefs?',
      excerpt: 'The voices that taunt us, saying things like you are too old, or you are not enough, or you\'ll fail, are not a mystical curse. Here\'s the science behind it.',
      date: '8/7/2025',
      dateSort: new Date('2025-08-07'),
      readTime: '7 min read',
      blogNumber: 11
    }
  ];

  // Always sort blogs in chronological order by blog number
  const sortedBlogPosts = [...blogPosts].sort((a, b) => a.blogNumber - b.blogNumber);

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

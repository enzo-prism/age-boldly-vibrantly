
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

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
      excerpt: 'There was no grand epiphany. No milestone birthday. Just a bowl of wild blueberries. The day I discovered blueberry stains nestled in my wrinkles was the day I knew I had crossed over into "OLD" - and the moment my rebellion truly began.',
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
    },
    {
      id: 'wearing-who-you-are-style-rebellion',
      title: 'Wearing Who You Are, A Style Rebellion',
      excerpt: 'When it comes to aging and fashion, society hands us a beige cardigan and whispers "please, just fade away." Well thanks, but no thank you. Here at Rebellious Aging, we don\'t tone it down. WE TURN IT UP.',
      date: '8/7/2025',
      dateSort: new Date('2025-08-07'),
      readTime: '9 min read',
      blogNumber: 12
    },
    {
      id: 'the-new-classic-timeless-style',
      title: 'The New Classic, Timeless Style with a Rebellious Twist',
      excerpt: 'Fashion legends like Coco Chanel, Christian Dior, and Yves Saint Laurent gave the world timeless rules for elegance. As rebels we just give these rules a wink and twist them into something uniquely ours.',
      date: '8/9/2025',
      dateSort: new Date('2025-08-09'),
      readTime: '12 min read',
      blogNumber: 14
    },
    {
      id: 'bold-sassy-truth-wfpb',
      title: 'The Bold, Sassy Truth About a Whole Food Plant Based Lifestyle',
      excerpt: 'Who says aging gracefully has to be slow and quiet? Not me. I believe in aging rebelliously. With a plate full of vibrant colors, flavors, and life giving nutrients. A WFPB lifestyle isn\'t just about "rabbit food."',
      date: '8/9/2025',
      dateSort: new Date('2025-08-09'),
      readTime: '10 min read',
      blogNumber: 13
    }
  ];

  // Always sort blogs in chronological order by blog number
  const sortedBlogPosts = [...blogPosts].sort((a, b) => a.blogNumber - b.blogNumber);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Minimalistic */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-foreground">
            Blog
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Insights on wellness, style, and rebellious aging
          </p>
        </div>
      </section>
      
      {/* Blog Posts Section - Minimal Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 sm:space-y-16">
            {sortedBlogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="bg-card border border-border/40 rounded-2xl p-8 sm:p-10 lg:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-foreground/5 hover:border-border/60">
                  <div className="mb-6">
                    <span className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground font-medium">
                      {post.blogNumber.toString().padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-8 lg:mb-10">
                    {post.excerpt}
                  </p>
                  
                  <Link to={`/blog/${post.id}`}>
                    <Button 
                      variant="ghost" 
                      className="group/btn h-auto p-0 font-medium text-base text-foreground hover:text-primary transition-all duration-300"
                    >
                      Read article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Coming Soon - Subtle */}
          <div className="mt-20 sm:mt-24 text-center">
            <div className="inline-flex items-center gap-3 text-muted-foreground font-light">
              <div className="w-8 h-px bg-border"></div>
              <span className="text-sm">More content coming soon</span>
              <div className="w-8 h-px bg-border"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

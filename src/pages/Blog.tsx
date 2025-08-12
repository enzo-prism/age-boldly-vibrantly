
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { VideoCard } from '@/components/home/VideoCard';
import { videoSeriesData, videoSeriesInfo } from '@/data/videoSeries';

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-fluid bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-space-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Rebellious Aging Blog
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Where sass and serious meet for wisdom, inspiration, and a whole lot of sparkle.
            </p>
          </div>
        </div>
      </section>
      
      {/* Video Series Section */}
      <section className="section-padding-fluid bg-background">
        <div className="container-responsive">
          <div className="text-center mb-space-10 md:mb-space-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-space-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {videoSeriesInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-space-3">
              {videoSeriesInfo.subtitle}
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              {videoSeriesInfo.description}
            </p>
          </div>
          
          <div className="grid gap-space-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
            {videoSeriesData.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="section-padding-fluid bg-muted/20">
        <div className="container-responsive">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-space-10 md:mb-space-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-space-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Latest Articles
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover insights, tips, and stories to support your wellness journey
              </p>
            </div>
            
            <div className="grid gap-space-8 lg:gap-space-12">
              {sortedBlogPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 border-border/50">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs font-medium">
                        Blog {post.blogNumber}
                      </Badge>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                      <Link to={`/blog/${post.id}`}>
                        <Button className="group/btn bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 inline-flex items-center gap-2">
                          Read Full Post
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Coming Soon Section */}
            <div className="mt-space-16 bg-card border border-border/50 p-space-8 md:p-space-12 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 mx-auto mb-space-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-space-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                More Rebellious Content Coming Soon!
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
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

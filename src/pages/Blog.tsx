
import React from 'react';
import { Link } from 'react-router-dom';

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
    },
    {
      id: 'wfpb-lifestyle-book-recommendations',
      title: 'WFPB Lifestyle Book Recommendations',
      excerpt: 'A comprehensive collection of essential books from leading plant-based nutrition experts and doctors to guide your whole food plant-based journey.',
      date: '8/15/2025',
      dateSort: new Date('2025-08-15'),
      readTime: '15 min read',
      blogNumber: 15
    },
    {
      id: 'boundaries-love-language',
      title: 'Are Boundaries a Love Language of Sorts?',
      excerpt: 'The Summer of 2025 has been one long crash course in awkward situations. Some mine, some borrowed from others, but all pointing to one glaring truth, I NEED BOUNDARIES.',
      date: '8/29/2025',
      dateSort: new Date('2025-08-29'),
      readTime: '12 min read',
      blogNumber: 16
    },
    {
      id: 'eat-the-olive-not-the-oil',
      title: 'Eat the Olive, Not the Oil',
      excerpt: 'Oil has a shiny reputation. Olive oil, avocado oil, coconut oil, you have seen them all marketed as "healthy fats". The truth is oil is oil. NO Oil is healthy.',
      date: '9/2/2025',
      dateSort: new Date('2025-09-02'),
      readTime: '11 min read',
      blogNumber: 18
    },
    {
      id: 'ditch-the-sweet-stuff',
      title: 'Ditch the Sweet Stuff',
      excerpt: 'Let\'s be honest, sugar is seductive. There is no upside to sugar. It sneaks into your morning coffee, whispers from your cookie jar, and struts through the grocery store in shiny packaging.',
      date: '9/1/2025',
      dateSort: new Date('2025-09-01'),
      readTime: '10 min read',
      blogNumber: 17
    },
    {
      id: 'less-salt-more-sparkle',
      title: 'Less Salt, More Sparkle',
      excerpt: 'Let\'s be honest: salt has been riding high on its reputation as the magic dust that makes food taste better. Very fancy marketing, but let\'s cut through the hype, Salt is Salt.',
      date: '9/2/2025',
      dateSort: new Date('2025-09-02'),
      readTime: '12 min read',
      blogNumber: 19
    },
    {
      id: 'critical-thinking-secret-weapon-rebellious-aging',
      title: 'Critical Thinking: Your Secret Weapon for Rebellious Aging',
      excerpt: 'Critical Thinking is the rebel\'s power move. It is the ability to pause, question, and separate truth from noise. So instead of blindly accepting what you are told, ask: What\'s the evidence? Who benefits if I believe this? That is where the freedom and sparkle live.',
      date: '9/2/2025',
      dateSort: new Date('2025-09-02'),
      readTime: '10 min read',
      blogNumber: 20
    },
    {
      id: 'ultra-processed-trap-eat-whole-live-whole',
      title: 'The Ultra-Processed Trap: Eat Whole, Live Whole',
      excerpt: 'Did you know that more than HALF of the average American diet comes from ultra-processed food? 70-73% of the U.S. food supply is classified as ultra-processed. Discover why choosing whole foods over factory formulations is your path to vibrant health.',
      date: '9/15/2025',
      dateSort: new Date('2025-09-15'),
      readTime: '12 min read',
      blogNumber: 21
    },
    {
      id: 'if-not-now-when-new-beginnings',
      title: 'If Not Now, When? New Beginnings are up to YOU',
      excerpt: 'Have you ever scrolled through your feed when a phrase suddenly grabs you by the collar? "If not now, when?" stopped me cold. How many women are quietly living on autopilot? Rebellious Aging is about refusing to settle for bland.',
      date: '9/6/2025',
      dateSort: new Date('2025-09-06'),
      readTime: '8 min read',
      blogNumber: 22
    },
    {
      id: 'optimal-aging-colleen-murphy',
      title: 'Optimal Aging: As Seen Through the Lens of Princeton Professor Colleen Murphy',
      excerpt: 'A conversation between journalist Paul Von Zielbauer and Princeton Professor Colleen Murphy distilled the science of aging into practical, myth-busting tips. Exercise is NOT optional, sleep is your overnight cleaning crew, and food myths debunked.',
      date: '9/20/2025',
      dateSort: new Date('2025-09-20'),
      readTime: '10 min read',
      blogNumber: 23
    },
    {
      id: 'calorie-density-secret-seals-deal',
      title: 'Calorie Density: The Secret That Seals the Deal',
      excerpt: 'Managing weight doesn\'t have to be an uphill climb. When you choose the right foods, your body naturally regulates weight. The key is calorie density - the number of calories in a given weight of food. Plants hold the secret to eating until satisfied without overeating.',
      date: '9/10/2025',
      dateSort: new Date('2025-09-10'),
      readTime: '9 min read',
      blogNumber: 24
    },
    {
      id: 'join-rebellious-aging-facebook-group',
      title: 'Let\'s Continue the Conversation: Join The PRIVATE, Rebellious Aging Facebook Group',
      excerpt: 'Step into a private Facebook community where women 55-105 gather to share stories, support, and the courage to live vibrantly while eating powerfully, living loudly, and aging boldly.',
      date: '10/29/2025',
      dateSort: new Date('2025-10-29'),
      readTime: '5 min read',
      blogNumber: 25
    },
    {
      id: 'strength-and-balance-for-the-win',
      title: 'Strength and Balance for the Win!',
      excerpt: 'As we age, movement becomes about confidence, balance, and extending our health span; strength and steady footing keep us vibrant.',
      date: '11/15/2025',
      dateSort: new Date('2025-11-15'),
      readTime: '9 min read',
      blogNumber: 26
    }
  ];

  // Always sort blogs in chronological order by blog number
  const sortedBlogPosts = [...blogPosts].sort((a, b) => a.blogNumber - b.blogNumber);

  return (
    <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      
      <div className="space-y-8">
        {sortedBlogPosts.map((post) => (
          <article key={post.id}>
            <Link 
              to={`/blog/${post.id}`}
              className="block hover:opacity-70 transition-opacity"
            >
              <h2 className="text-2xl font-semibold mb-2">
                <span className="text-primary font-bold">#{post.blogNumber}</span>
                {' - '}
                {post.title}
              </h2>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
